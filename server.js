const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>')

  // return json
  res.send({
    name: 'Koki',
    likes: [
      'Netflix',
      'Ruby'
    ]
  })
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
})

app.listen(3000)
