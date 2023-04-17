const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        // unique: true,
        index:true,
        // unique:true,
        // sparse:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    profile_img: {
        type: String,
        default: '/public/default.png'
    },
    following: {
        type: Array
    },
    followers: {
        type: Array
    },
    created_at:{
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


UserSchema.virtual('posts', {
    ref: 'post',
    localField: '_id',
    foreignField: 'UserId',
    justOne: false
})

module.exports = mongoose.model('user', UserSchema)
