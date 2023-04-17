const router = require('express').Router()

// models
const Post = require('../models/Posts')
const Comment = require('../models/Comment')
const User = require('../models/User')

//middleware
const upload = require('../middleware/upload')
const userAuth = require('../middleware/userAuth')

// get all the posts
router.get('/posts', userAuth,async (req, res) => {

    try {
        const get_user = await User.findById(req.user.id)
        console.log(get_user.following)

        // const posts  = await Post.find({ 'UserId': { $in: get_user.following }}).populate('comments').populate('posted_by')
        const posts  = await Post.find({UserId: get_user.following}).populate('comments').populate('posted_by')
        
     
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})



// single post
router.get('/post/:id', userAuth, async (req, res) => {
    try {
        const post  = await Post.findById(req.params.id).populate('comments')


        if(!post){
            res.status(400).json({success: false})
        }
        
        res.status(200).json({
            data: post,
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})

// create a post || protracted
router.post('/post', [upload.single('file'), userAuth],  async (req, res) => {
    try {

        const newPost = await Post.create({
            UserId: req.user.id,
            title: req.body.title,
            description: req.body.description,
            post_image: `/public/uploads/${req.file.filename}`
        })

        res.status(200).json({
            data: newPost,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})
   

// Detele Post || protracted
router.delete('/post/:id',userAuth, async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {
            return res.status(400).json({
                success: false
            })
        }

        if(!post.UserId == req.user.id){
            return res.status(400).json({
                success: false
            })
        }else{
            await post.delete()
        }

        res.status(200).json({ 
            success: true,
            data: {}
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// get posts for explore page
router.get('/explore', userAuth,async (req, res) => {
    try {
        const posts  = await Post.find().limit(50)
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// add comments to a post
router.post('/post/comment/:id', userAuth,async (req, res) => {
    try {
        // const post = await Post.findById()

        const comment = await Comment.create({
            PostId: req.params.id,
            comment: req.body.comment,
            UserId: req.user.id,
        })
        
        if (!comment) {
            return res.status(400).json({
                success: false
            })
        }

        
        res.status(200).json({
            data: comment,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


module.exports = router 



// ============================================================
//  run without auth

/*
const router = require('express').Router()

// models
const Post = require('../models/Posts')
const Comment = require('../models/Comment')

//middleware
const upload = require('../middleware/upload')
const userAuth = require('../middleware/userAuth')

// get all the posts
router.get('/posts', async (req, res) => {
    try {
        const posts  = await Post.find().populate('comments')
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// create a post
router.post('/post', upload.single('file'),  async (req, res) => {
    try {

        const newPost = await Post.create({
            title: req.body.title,
            post_image: `/public/uploads/${req.file.filename}`
        })

        res.status(200).json({
            data: newPost,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})
   

// Detele Post
router.delete('/post/:id', async (req, res) =>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({ 
            success: true,
            data: {}
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// get posts for explore page
router.get('/explore', async (req, res) => {
    try {
        const posts  = await Post.find().limit(50)
        res.status(200).json({
            data: posts,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// add comments to a post
router.post('/post/comment/:id', async (req, res) => {
    try {
        // const post = await Post.findById()

        const comment = await Comment.create({
            PostId: req.params.id,
            comment: req.body.comment
        })
        
        if (!comment) {
            return res.status(400).json({
                success: false
            })
        }

        
        res.status(200).json({
            data: comment,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


module.exports = router 

*/