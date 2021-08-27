// CREATING BASIC APP IN EXPRESS
const express = require('express');
const app = express();
const port = 3000;

// importing the wiki module which uses Express Router
const wikiModule = require('./wiki.js');

// importing morgan npm middleware module
const logger = require('morgan');

// importing mongodb driver
const MongoClient = require('mongodb').MongoClient;

// importing path to template engines
const path = require('path');

// using morgan
app.use(logger('dev'));

/*
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
*/

app.listen(port);

/*
app.get('/', (req, res) => {
    res.send('Hello world (with GET)!');
});
*/

// SIMPLE KIND OF ROUTE USING all() METHOD WHICH LOADS EVERYTHING
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section');
    next();
});

// adding wiki module to middleware handling path
app.use('/wiki', wikiModule);

/*
 * serving static files using middleware static() function which is part of express
 * static() can be called multiple times to serve files from different directories, in fact if a file cannot be found by one middleware function then it will be passed on to the subsequent middleware
 */
//app.use(express.static('media'));
//app.use(express.static('titanic'));
/*
 * a prefix can be added when serving files with static()
 * */
app.use('/media-files', express.static('media'));
app.use('/titanic-files', express.static('titanic'));

/*
 * using databses, mongodb
 * */
MongoClient.connect(
    'mongodb+srv://root:toorbot123@cluster0.nzcgo.mongodb.net/express?retryWrites=true&w=majority',
    function (err, client) {
        if (err) throw err;
        let db = client.db('express');
        db.collection('users')
            .find()
            .toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                client.close();
            });
    }
);

/*
 * set directory to contain the templates ('views')
 * */
app.set('views', path.join(__dirname, 'views'));

/*
 * set view engine to use
 * */
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Express index page',
        message: 'Express rocks!',
    });
});
/*
 * handling errors
 * */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
