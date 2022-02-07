const router = require('express').Router();
const bcrypt = require('bcrypt');
const passChecker = require('../middleware/passwordCheck');
const { User } = require('../db/models');

router
  .route('/')
  .post(passChecker, async (req, res) => {
    const {
      username,
      password1,
      email,
    } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        res.status(403).json({ login: false, message: 'Такой пользователь уже существует.' });
      } else {
        const hashedPass = await bcrypt.hash(password1, 10);
        const user = await User.create({
          username,
          password: hashedPass,
          email,
        });

        req.session.user = { username: user.username, id: user.id, email: user.email };
        res.status(201).json({ login: true, userId: user.id });
      }
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка занесения данных' });
    }
  });

module.exports = router;
