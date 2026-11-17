const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware
app.use(express.json()); // Čtení JSON těla požadavků
app.use(express.static(path.join(__dirname, '../public'))); // Připraví frontend

// 2. Testovací endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    app: 'StudyFlow',
    timestamp: new Date().toISOString()
  });
});

// 3. Endpointy
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/landing-page.html'));
});

// 4. API routy
// const authRoutes = require('./routes/auth');
// const courseRoutes = require('./routes/courses');
// app.use('/api/auth', authRoutes);
// app.use('/api/courses', courseRoutes);

// 5. Ošetření chyb
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Interní chyba serveru.' });
});

// 6. Spuštění serveru
if (require.main === module) {
  app.listen(PORT, () => {
    const env = process.env.NODE_ENV || 'development';
    const cas = new Date().toLocaleTimeString('cs-CZ');
    console.log(`[${cas}] StudyFlow letí na http://localhost:${PORT} 🚀 (${env})`);
  });
}

module.exports = app;