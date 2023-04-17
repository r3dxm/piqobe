const jwt = require('jsonwebtoken')

module.exports = (req, res,next) => {

    const token = req.header('auth-token')

    if(!token){
        return res.status(401).json({ 
            msg: 'no Token, access denied',
            success: false
        })
    }

    try {
        const decoded  = jwt.verify(token, process.env.JWTSECRECT)
        req.user = decoded
        next()
    } catch (err) {
        res.status(400).json({ 
            msg: 'no Token, access denied',
            success: false
        })
    }
}

