const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const SessionFileStore = require('session-file-store')(expressSession);
const cors = require('cors');
const registrationRouter = require('./routes/registration.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const plansRouter = require('./routes/plans.router');
const apiRouter = require('./routes/api.router');

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

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(morgan('dev'));
app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(cors(corsOptions)); // cors init
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/plans', plansRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`*** Server started on port ${PORT} ***`);
});
