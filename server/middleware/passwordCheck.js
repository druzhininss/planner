function passChecker(req, res, next) {
  const {
    password1,
    password2,
  } = req.body;

  if (password1 !== password2) {
    return res.json({ login: false, message: 'Введенные пароли не совпадают' });
  }

  if (password1.length < 8) {
    return res.json({ login: false, message: 'Длинна пароля должна быть более 8 символов' });
  }
  next();
}

module.exports = passChecker;
