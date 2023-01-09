const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8080

const singers = {
    'sonu' : {
        'age': 49,
        'fullName': 'Sonu Kumar Nigam',
        'birthPlace': 'Faridabad, Haryana, India'
    },
    'arijit' : {
        'age': 35,
        'fullName': 'Arijit Singh',
        'birthPlace': 'Jiaganj, Murshidabad, West Bengal, India'
    },
    'shreya' : {
        'age': 38,
        'fullName': 'Shreya Ghoshal',
        'birthPlace': 'Berhampore, Murshidabad, West Bengal, India'
    },
    'sunidhi' : {
        'age': 38,
        'fullName': 'Sunidhi Chauhan',
        'birthPlace': 'New Delhi, India'
    },
    'unknown' : {
        'age': 0,
        'fullName': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(singers)
})

app.get('/api/:name', (req, res) => {
    const singerName = req.params.name.toLowerCase()

    if(singers[singerName]){
        res.json(singers[singerName])
    } else{
        res.json(singers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Awesome let's go`)
})