var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

var Schema = mongoose.Schema

var userSchema = new Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String,
    address: String,
    address2: String,
    city: String,
    states: String,
    zip: String
}, {
        timestamps: true
    });

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema); 