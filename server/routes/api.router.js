const router = require('express').Router();

router
  .route('/checkauth')
  .get((req, res) => {
    const { user } = req.session;

    if (user) {
      res.status(201).json({ login: true, userId: user.id });
    } else {
      res.status(404).json({ login: false, userId: null });
    }
  });

module.exports = router;
