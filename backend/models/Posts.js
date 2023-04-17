const mongoose = require('mongoose')

let PostSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    },
    post_image: {
        type: String,
        default: '/public/uploads/default.jpg'
    },
    description: {
        type: String,
    },
    title: {
        type: String,
    },
    likes: {
        type: Array
    },
    created_at:{
        type: String,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


PostSchema.pre('save', async function (next) {
    let date_info = new Date
    let date_into = date_info.getDate() + '/' + (date_info.getMonth()+1) + '/' +  date_info.getFullYear()
    this.created_at = await date_into
})


PostSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'PostId',
    justOne: false
})
PostSchema.virtual('posted_by', {
    ref: 'user',
    localField: 'UserId',
    foreignField: '_id',
    justOne: true
})



module.exports = mongoose.model('post', PostSchema)
