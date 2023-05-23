const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Home')
})

app.post('/login', (req, res) => {
    const name = req.body.name
    console.log(name)
    const isAllowed = people.find((person) => name === person.name)
    console.log(isAllowed)
    if (isAllowed) {
        res.status(200).send(`Hello ${isAllowed.name}`)
    } else {
        res.status(401).send('Leave us!')
    }
})

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.listen(5000, () => {
    console.log('listening 5000...')
})