const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello Worldees!')
    server.close();
    // close the server after a test browse.
})

let server  = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
