const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// models
const User = require('../models/User')

const userAuth = require('../middleware/userAuth')
const upload = require('../middleware/upload')

// register route
router.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body
        
        
        
        if(!username || !email || !password) {
            res.status(400).json({
                msg: 'please fill the required fields',
                success: false
            })
        }
        
        let user = await User.findOne({email})
        let user0 = await User.findOne({username: username})
        if(user || user0){
            return res.status(400).json({ 
                msg: 'user already exists',
                success: false
            })
        }
        
        
        user = new User({
            username,
            email,
            password
        })
        
        const slat = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, slat)
        await user.save()
        
        
        // paylaod || {id: user._id}
        jwt.sign({id: user._id}, process.env.JWTSECRECT, {
            expiresIn: 36000 
        }, (err, token) => {
            if(err) throw err
            res.status(200).json({
                token
            })
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// login
router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body
        if( !username || !password){
            return res.status(400).json({ 
                msg: 'invalid credentials',
                success: false 
            })
        }

        let user = await User.findOne({username}).select('+password')
        if(!user ) return res.status(400).json({
            msg: 'invalid credentials',
            success: false 
        })

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch ) return res.status(400).json({ 
            msg: 'invalid credentials',
            success: false 
        })

        jwt.sign({id: user._id}, process.env.JWTSECRECT, {
            expiresIn: 36000 
        }, (err, token) => {
            if(err) throw err
            res.status(200).json({
                token
            })
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
})


// auth user verification
// and get logged in user
router.get('/user', userAuth,  async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate({
            // deep populate
            path: 'posts',
            populate : {
                path : 'comments'
            }
        })
        res.status(200).json({
            user,
            success: true
        }) 
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ msg:'SERVER ERROR'})
    }
})


// user upload profile
router.put('/profile', [upload.single('file'), userAuth] , async  (req, res) => {
    try {
        if(!req.file) {
            res.status(400).json({ 
                msg: 'no image selected',
                success: false
            })
        }else{

            const user = await User.findByIdAndUpdate(req.user.id, 
                {
                    profile_img: `/public/uploads/${req.file.filename}`
                }, 
                {
                    new: true,
                    runValidators: true
                }
            )

            res.status(200).json({
                success: true,
                data: user
            });
        }
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false});
    }
})



module.exports = router 