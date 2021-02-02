const Express = require('express');

const app = Express();

const port = process.env.PORT || 8000;

app.get('/', (req, res, next) => {
    try {
        res.send(`
        <h1>Hello!</h1>
        `)
    }
    catch (error) {
        next(error)
    }
})

app.listen(port, () => console.log(`listening on port ${ port }`))

module.exports = app