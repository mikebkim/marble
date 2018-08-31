var User = require('../models/user');
var jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({ token: createJWT(user) });
    })
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({ email: req.body.email }).exec().then(user => {
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        res.json({ token: createJWT(user) });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  }).catch(err => res.status(401).json(err));
}

function updateUser(req, res) {
  console.log(req.body);
  console.log(req.params);
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (error, user) {

    // user.name = req.body.name;
    // user.email = req.body.email;
    // user.password = req.body.password;
    // user.address = req.body.address;
    // user.address2 = req.body.address2;
    // user.city = req.body.city;
    // user.states = req.body.states;
    // user.zip = req.body.zip;

    if (error) {
      return res.status(400).json({ error: error })
    } else {
      console.log(user);
      return res.status(200).json({ user: user })
    }

    // user.save(function (err) {
    //   if (err) return res.status(400).json({ err: err });
    //   return res.status(200).json({ user: user })
    // })

    // user.save()
    // .then(user => {
    //   res.json({ user: user });
    // })
    // .catch(err => res.status(400).json(err));
  });
}

function getUser(req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(400).json({ err: err })
    return res.status(200).json({ user: user })
  })
}

/*--- Helper Functions ---*/
function createJWT(user) {
  return jwt.sign(
    { user },
    SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = {
  signup,
  login,
  updateUser,
  getUser
}