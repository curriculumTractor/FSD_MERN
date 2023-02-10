const { hash } = require("bcrypt")
const User = require("../models/Users")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const jwtSecret = '7e88b534fd636d963c1946481a49c65899179b3ebb24c7c9afa6cc62528d165b3a6486';

//register

exports.register = async (req, res, next) => {
  const { firstName ,lastName ,email ,username, password, confirmPassword } = req.body
  
    if (password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
      }
  
    (bcrypt.hash(password,10),bcrypt.hash(confirmPassword,10)).then(async (hash) => {
      await User.create({
        firstName ,
        lastName ,
        email ,
        username,
        password: hash,
        confirmPassword:hash,
      })
        .then((user) =>{
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
              { id: user._id, username, role: user.role },
              jwtSecret,
              {
                expiresIn: maxAge, // 3hrs in sec
              }
            );
            res.cookie("jwt", token, {
              httpOnly: true,
              maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.status(201).json({
              message: "User successfully created",
              user: user._id,
            });
          }
        )
        .catch((error) =>
          res.status(400).json({
            message: "User not successful created",
            error: error.message,
          })
        );
    });
  };

  //login

  exports.login = async (req, res, next) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
      const user = await User.findOne({ username })
      if (!user) {
        res.status(400).json({
          message: "Login not successful",
          error: "User not found",
        })
      } else {
        // comparing given password with hashed password
        bcrypt.compare(password, user.password).then(function (result) {
            if (result) {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign(
                  { id: user._id, username, role: user.role },
                  jwtSecret,
                  {
                    expiresIn: maxAge, // 3hrs in sec
                  }
                );
                res.cookie("jwt", token, {
                  httpOnly: true,
                  maxAge: maxAge * 1000, // 3hrs in ms
                });
                res.status(201).json({
                  message: "User successfully Logged in",
                  user: user._id,
                });
              } else {
                res.status(400).json({ message: "Login not succesful" });
              }
            });
          }
    } catch (error) {
      res.status(400).json({
        message: "An error occurred",
        error: error.message,
      })
    }
  }


      //admin auth
      exports.adminAuth = (req, res, next) => {
        const token = req.cookies.jwt
        if (token) {
          jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
              return res.status(401).json({ message: "Not authorized" })
            } else {
              if (decodedToken.role !== "admin") {
                return res.status(401).json({ message: "Not authorized" })
              } else {
                next()
              }
            }
          })
        } else {
          return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
        }
      }

      //user auth
      exports.userAuth = (req, res, next) => {
        const token = req.cookies.jwt
        if (token) {
          jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
              return res.status(401).json({ message: "Not authorized" })
            } else {
              if (decodedToken.role !== "Basic") {
                return res.status(401).json({ message: "Not authorized" })
              } else {
                next()
              }
            }
          })
        } else {
          return res
            .status(401)
            .json({ message: "Not authorized, token not available" })
        }
      }

      