const mongoose = require('mongoose')
const URI = process.env.URII

mongoose.connect(URI).then(() => {
    console.log(`DATABASE CONNECTED `)
})
.catch(err => {
    console.log('mongodb error', err)
    process.exit(1)
})