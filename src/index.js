const path = require('path')
const express = require('express')
const hbs = require('hbs')
const checkPalindrome = require('./utils/check-palindrome')
const makePalindrome = require('./utils/make-palindrome')

const app = express()
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Palindrome checker',
        userName: 'Mahadee'
    })
})

app.get('/check-palindrome', (req, res) => {
    const { number } = req.query
    if (!number) {
        return res.send({ error: "No numbers were provided, please enter a number." })
    }

    res.send(checkPalindrome(number))
})

app.get('/make-palindrome', (req, res) => {
    const { number } = req.query
    if (!number) {
        return res.send({ error: "No numbers were provided, please enter a number." })
    }

    res.send(makePalindrome(number))
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        message: 'Requested page does not exist!',
        userName: 'Mahadee'
    })
})

app.listen(port, () => console.log('Server running on port ' + port))