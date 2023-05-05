const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    const origin = req.get('origin');
    // TODO Add origin validation
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
    // console.info(`${req.method} ${req.originalUrl}`)
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
    } else {
      next();
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

require('./Routes/routeProducts')(app)