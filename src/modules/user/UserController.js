import bcrypt from 'bcrypt';
import User from '../../database/models/user';
import tokenizer from '../../helpers/tokenizer';


class UserController {
  static async signUpUser(req, res) {
    const {
      username, email, password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userParams = {
      username,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(userParams, (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Unable to register user',
          error: err,
        });
      }
      return user;
    });
    delete newUser.password;
    const token = await tokenizer.createToken(newUser);
    return res.status(201).json({
      message: 'Successfully registered',
      token,
      user: newUser,
    });
  }

  static async loginUser(req, res) {
    const { user } = req;
    delete user.password;
    const token = await tokenizer.createToken(user);
    return res.status(200).json({
      message: 'Successfully logged in',
      token,
      user,
    });
  }
}

export default UserController;
