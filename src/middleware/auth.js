const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  // Klient posílá hlavičku ve formátu: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Přístup odepřen. Chybí token.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ error: 'Neplatný nebo vypršelý token.' });
    }
    req.user = decodedUser; // Uloží např. { id: 1, role: 'lecturer' } do požadavku
    next();
  });
}

module.exports = verifyToken;