const router = require('express').Router()

// models
const Post = require('../models/Posts')
const Comment = require('../models/Comment')
const User = require('../models/User')
//middleware
const userAuth = require('../middleware/userAuth')

// add like to post
router.get('/like/:id', userAuth, async (req, res) => {
    try {
        const liked = await Post.updateOne(
            {
                _id: req.params.id
            },
            {
                $push: {
                    likes:  req.user.id 
                }
            }
        )
        

        if(!liked){
            return res.status(401).json({success: false})
        }
        
        res.status(200).json({success: true})

    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})

// unlike a post
router.get('/unlike/:id', userAuth, async (req, res) => {
    try {
        const liked = await Post.updateOne(
            {
                _id: req.params.id
            },
            {
                $pull: {
                    likes:  req.user.id 
                }
            }
        )
        
        if(!liked){
            return res.status(401).json({success: false})
        }
        

        res.status(200).json({success: true})

    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// follow a user
router.get('/follow/:id', userAuth, async (req, res) => {
    try {
        const followed = await User.updateOne(
            {
                _id: req.user.id 
            },
            {
                $push: {
                    following:  req.params.id 
                }
            }
        )
            
        const followersAdded = await User.updateOne(
            {
                _id: req.params.id
            },
            {
                $push: {
                    followers:  req.user.id
                }
            }

        )

        if(!followed || !followersAdded){
            return res.status(401).json({success: false})
        }

        res.status(200).json({success: true})
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})

// unfollow a user
router.get('/unfollow/:id', userAuth, async (req, res) => {
    try {
        const followFixed = await User.updateOne(
            {
                _id: req.user.id 
            },
            {
                $pull: {
                    following:  req.params.id 
                }
            }
        )
            
        const followersFixed = await User.updateOne(
            {
                _id: req.params.id
            },
            {
                $pull: {
                    followers:  req.user.id
                }
            }

        )

        if(!followFixed || !followersFixed){
            return res.status(401).json({success: false})
        }

        res.status(200).json({success: true})
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})

// get a user by id
router.get('/profile/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate({
            path: 'posts',
            populate : {
                path : 'comments'
            }
        })
        
        if(!user){
            return res.status(401).json({success: false})
        }
        res.status(200).json({
            data: user,
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})



module.exports = router 

