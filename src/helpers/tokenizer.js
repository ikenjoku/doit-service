import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv();

const secretKey = process.env.SECRET_KEY;

const tokenizer = {
  createToken: user => new Promise((resolve, reject) => {
    jwt.sign({ user }, secretKey, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  }),
  verifyToken: (req, res, next) => {
    const token = req.body.token || req.headers['x-access-token']
    || (req.headers.Authorization && req.headers.Authorization.slice(7))
    || req.params.token;

    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: 'No token found. Please Login or Signup',
      });
    }
    return jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          message: 'Invalid Token, Please Login or Signup',
        });
      }
      req.user = decoded;
      return next();
    });
  },
};

export default tokenizer;
