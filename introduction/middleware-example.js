const express = require('express');
const app = express();
//
// example of middleware function
let a_middleware_function = function (req, res, next) {
    // do something
    next(); // call next() so Express will call the next middleware function in the chain
};

// function added with user() for all routes and verbs
app.use(a_middleware_function);

// function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// a middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
