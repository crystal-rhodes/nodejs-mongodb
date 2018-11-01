var { mongoose } = require('../db/mongoose');

var User = mongoose.model('User' ,{
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let newUser = new User({
    email: 'Master man'
});

newUser.save().then((doc) => {
    console.log('Saved newUser', doc);
}, (e) => {
    console.log('Unable to save newUser', e);
});

module.exports = {
    User
}