import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Enable large JSON payloads for high-resolution base64 photo data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const DATA_DIR = path.join(process.cwd(), 'data');
const PHOTOS_FILE = path.join(DATA_DIR, 'saved_photos.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to read saved photos from disk
function getSavedPhotos(): Record<string, string> {
  try {
    if (fs.existsSync(PHOTOS_FILE)) {
      const data = fs.readFileSync(PHOTOS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading photos file:', err);
  }
  return {};
}

// Helper to write saved photos to disk
function savePhotosToDisk(photos: Record<string, string>): boolean {
  try {
    fs.writeFileSync(PHOTOS_FILE, JSON.stringify(photos, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing photos file:', err);
    return false;
  }
}

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API: Get all saved photos for any visitor worldwide
app.get('/api/photos', (req, res) => {
  const photos = getSavedPhotos();
  res.json({ success: true, photos, count: Object.keys(photos).length });
});

// API: Save or update a single photo or batch of photos
app.post('/api/photos', (req, res) => {
  try {
    const { photoId, dataUrl, photos: batchPhotos } = req.body;
    const currentPhotos = getSavedPhotos();

    if (batchPhotos && typeof batchPhotos === 'object') {
      // Bulk update
      const updated = { ...currentPhotos, ...batchPhotos };
      savePhotosToDisk(updated);
      return res.json({ success: true, count: Object.keys(updated).length, photos: updated });
    }

    if (photoId && typeof dataUrl === 'string') {
      // Single photo update
      currentPhotos[photoId] = dataUrl;
      savePhotosToDisk(currentPhotos);
      return res.json({ success: true, photoId, count: Object.keys(currentPhotos).length });
    }

    return res.status(400).json({ success: false, error: 'Invalid payload: photoId & dataUrl or photos map required' });
  } catch (err: any) {
    console.error('Error saving photo:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Delete a specific photo
app.delete('/api/photos/:photoId', (req, res) => {
  try {
    const { photoId } = req.params;
    const currentPhotos = getSavedPhotos();
    if (currentPhotos[photoId]) {
      delete currentPhotos[photoId];
      savePhotosToDisk(currentPhotos);
    }
    res.json({ success: true, photoId, count: Object.keys(currentPhotos).length });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// API: Reset all photos
app.post('/api/photos/reset', (req, res) => {
  try {
    savePhotosToDisk({});
    res.json({ success: true, count: 0, photos: {} });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
