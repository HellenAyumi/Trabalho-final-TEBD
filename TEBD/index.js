const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rota API
const festaRoutes = require('./routes/festaRoutes')

app.use('/festa', festaRoutes)


//rota e endpoint
app.get('/', (req, res) => {
    res.json({ message: 'oi express' })
})

const dbuser = 'User'
const dbsenha = encodeURIComponent('jRT7xHcp3sBhbaCr')

//conectar com o BD
mongoose
    .connect(
        `mongodb+srv://${dbuser}:${dbsenha}@tebd.aq2hwit.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('conectado mongodb')
        app.listen(3000)
    }).catch((err) => console.log(err))
app.listen(3000)