function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({ error: 'Pro tuto akci nemáš dostatečná oprávnění.' });
    }
    next();
  };
}

module.exports = requireRole;