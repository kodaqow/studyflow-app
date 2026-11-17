const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Základní middleware
app.use(express.json()); // Umožní číst JSON tělo požadavků (přihlášení, formuláře)
app.use(express.static(path.join(__dirname, '../public'))); // Servíruje frontend ze složky public

// 2. Testovací endpoint pro ověření chodu API
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    app: 'StudyFlow',
    timestamp: new Date().toISOString()
  });
});

// 3. Budoucí API routy (odkomentuješ, až vytvoříš soubory ve složce src/routes/)
// const authRoutes = require('./routes/auth');
// const courseRoutes = require('./routes/courses');
// app.use('/api/auth', authRoutes);
// app.use('/api/courses', courseRoutes);

// 4. Globální zachycení neočekávaných chyb serveru
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Interní chyba serveru.' });
});

// 5. Spuštění serveru
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`StudyFlow běží na http://localhost:${PORT}`);
  });
}

module.exports = app;