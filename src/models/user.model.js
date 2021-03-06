const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
    usernName: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    LastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email!')
            }    
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password cannot contain "password"')
            }
        }    
    },
    country: {
        type: String,
        trim: true,
        default: 'israel',
    },
    city: {
        type: String,
        trim: true,
        default:'tel-aviv',
    },
    postal: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('postal must be positive number')
            }
        }
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }    
    }] 
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateToken = async function () {
    const user = this    
    const token = jwt.sign({ _id: user.id.toString() }, process.env.SECRET);

    user.tokens = user.tokens.concat({ token })
    await user.save();
    return token
}

userSchema.statics.findByCredentials = async (email, password) =>{
    const user = await User.findOne({ email })
    if(!user){
        throw new Error('Unable to Login!') 
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to Login!')    
    }
    return user
}

userSchema.pre('save', async function (next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


const User = mongoose.model('User', userSchema ); 

module.exports = User