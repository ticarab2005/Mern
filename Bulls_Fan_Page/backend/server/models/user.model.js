const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [4, "Username must have at least 4 characters!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [5, "Password must be 8 characters or longer"]
    }
}, { timestamps: true });

//create a virtual field called "confirmed" that is used just to validate the passowrd matches confirm --> the getter and setter above are just creating temporary fields for _confirm

UserSchema.virtual('confirm')
    .get(() => this._confirm)
    .set(value => this._confirm = value);

// before (pre) running the other validations on the model the user to the db, validate the user objecrts password matches. If they don't match, this.invalidate() will create a validator error message

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Password must match confirm password');
    }
    next();//after the process is done, go to the next step
});

// before (pre) saving the user to the db (this means we have passed the validations), hash the users password(encrypt it)
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model("User", UserSchema);