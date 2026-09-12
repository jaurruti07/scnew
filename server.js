import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static assets from project root
app.use(express.static(__dirname));

// Also support dist if built
app.use(express.static(path.join(__dirname, 'dist')));

// Route for /index (4).html backwards compatibility
app.get('/index%20(4).html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for macroprocesos page
app.get(['/macroprocesos', '/macroprocesos.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'macroprocesos.html'));
});

// Route for talento and trabaja-con-nosotros (SGT)
app.get(['/talento', '/talento.html', '/trabaja-con-nosotros', '/trabaja-con-nosotros.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'talento.html'));
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
