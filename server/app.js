const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionFileStore = require('session-file-store')(expressSession);
const bcrypt = require('bcrypt');
const indexRouter = require('./routes/index.router'); // Index router req

const PORT = process.env.PORT ?? 5000;

const app = express();

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: 'I LOVE CATS',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // for req.body
app.use(express.json());

app.use('/', indexRouter); // Index router setup

app.listen(PORT, () => {
  console.log(`*** Server started on port ${PORT} ***`);
});
