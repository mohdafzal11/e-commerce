const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTM5MzViOWQzZjdjZWI5M2U2ODA0OSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkyNjM1OTk1fQ.ZNq-Ce7G5sMvsKH2YvkGNu4XGx7wDgYLQexOpLraRjM"
  return token;
};
