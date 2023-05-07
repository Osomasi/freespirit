const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema ({
    name:{
        type: String,
        required:[true, 'Please enter a name']
    },
    email:{
        type: String,
        required:[true, 'Please enter an email'],
        unique: true,
        index: true,
        validator: function(str){
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
        },
        message: props => `$props.value} is not a valid email`
    },
    password:{
        type: String,
        required:[true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    cart: {
        type: Object,
        default: {
            total: 0,
            count: 0
        }
    },
    notifications:{
        type: Array,
        default: []
    },

    orders:[{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]



}, {minimize:false});

// this code below is to check if the email is already in the database. it is a middleware function
UserSchema.statics.findByCredentials = async function(email, password){
    const user = await User.findOne({email});
    if(!user) throw new Error('User not found or Invalid Credentials');
    const isSamePassword = bcrypt.compareSync(password, user.password);
    if(isSamePassword) return user;
    throw new Error('User not found or Invalid Credentials');
}

// this code below is to remove the password from the user object before sending it to the client because we dont want to send the password to the client due to security reasons.
UserSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userobject;
}

//Before saving =>hash the password to make them look like those long string you see in the database
// this code below is to hash the password before saving it to the database so it is more secure.
UserSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

//this code below is to remove the orders of a user when the user is deleted from the database
UserSchema.pre('remove', function(next){
    this.model('Order').remove({owner: this._id}, next);
})

const User = mongoose.model('User', UserSchema);

module.exports = User;