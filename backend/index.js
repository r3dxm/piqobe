const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({ path: './config/config.env' })
require('./config/db')
app.use(cors())
app.use(express.json())
app.use('/public',express.static('public'))




// MAIN URL LINK
app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

// ROUTES
app.use('/api/v1', require('./routes/authentication'))
app.use('/api/v1', require('./routes/posts'))
app.use('/api/v1', require('./routes/features'))



PORT  = process.env.PORT
app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))