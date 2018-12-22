import bcrypt from 'bcrypt';
import User from '../database/models/user';

const invalidField = validationMessageArr => ({
  status: 400,
  error: validationMessageArr,
});

const validateEmailAndPassword = (email, password) => {
  const validationMessageArr = [];
  const emailRegex = /\S[@]\S+[.]\S/;
  if (!email) {
    validationMessageArr.push({ email: 'Email is Required' });
  } if (typeof email !== 'string' || !(emailRegex.test(email))) {
    validationMessageArr.push({ email: 'Invalid Email' });
  } if (!password) {
    validationMessageArr.push({ password: 'Password is Required' });
  } if (typeof password !== 'string') {
    validationMessageArr.push({ password: 'Invalid Password' });
  } if (typeof password === 'string' && !password.trim()) {
    validationMessageArr.push({ password: 'Password is Required' });
  }
  return validationMessageArr;
};


const trimFields = (object) => {
  const fields = Object.keys(object);
  const trimmedObject = {};
  fields.forEach((field) => {
    trimmedObject[field] = object[field].trim();
  });
  return trimmedObject;
};

const validators = {
  async validateUserLogin(req, res, next) {
    const { email, password } = req.body;
    const validationMessageArr = validateEmailAndPassword(email, password);
    if (!validationMessageArr.length) {
      const userFound = User.findOne({ email }, (err, user) => {
        if (err) {
          return res.json({
            status: 401,
            message: 'Unable to login',
          });
        }
        if (!user) {
          return res.json({
            status: 404,
            error: 'User Not Found',
          });
        }
        return user;
      });
      const validPassword = await bcrypt.compare(password.trim(), userFound.password);
      if (!validPassword) {
        return res.json({
          status: 401,
          error: 'Invalid Credentials',
        });
      }
      req.user = userFound;
      req.body = trimFields(req.body);
    }
    return (validationMessageArr.length) ? res.json(invalidField(validationMessageArr)) : next();
  },

  async validateUserSignUp(req, res, next) {
    const {
      username, email, password, confirmPassword,
    } = req.body;
    const validationMessageArr = validateEmailAndPassword(email, password);
    if (password !== confirmPassword) {
      validationMessageArr.push({ password: 'Password and Confirm Password do not match' });
    } if (!username) {
      validationMessageArr.push({ username: 'Username is Required' });
    } if (typeof username !== 'string') {
      validationMessageArr.push({ username: 'Invalid Username' });
    } if (typeof username === 'string' && !username.trim()) {
      validationMessageArr.push({ username: 'Username is Required' });
    }

    if (!validationMessageArr.length) {
      const userfound = User.findOne({ email }, (err, user) => {
        if (err) {
          return res.json({
            status: 401,
            message: 'Unable to Signup',
          });
        }
        return user;
      });
      if (userfound) {
        return res.json({
          status: 409,
          error: 'Email already Exists',
        });
      }
      req.body = trimFields(req.body);
    }
    return (validationMessageArr.length) ? res.json(invalidField(validationMessageArr)) : next();
  },
};

export default validators;
