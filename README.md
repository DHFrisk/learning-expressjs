This is how I'm leaning (learned) Express JS based on the developer.mozilla.org tutorials. Thank you guys! :^)
===========================================================================================================================
===========================================================================================================================

-Express is a module from node, and is unopinionated which means you can do one thing in so many ways and you decide which to use!

-Express is written in old javascript code and this is very helpful because a lot of code/libraries and modules can be written and the base/core code of itself will read it.

-Express handles operations between clients browsers and the database, but often you will need to use third party middleware modules or sometimes you will need to write them according to your needs.

-In the tutorials I follow they use callbacks in code, but also they note that you can use another methods to handle with asynchronous operations like the new released promises in order to avoid callback hell.

-You can create routes to manage the navigation, is recommended to create separte modules (another .js, export it and call it from the main app) in order to manage better and easier your site/app.

-The main difference between middleware functions and route handler callback is that middleware functions have a third argument (next) which middleware functions are expected to call if they are not that which completes the request cycle (when the middleware function is called, this contains the 'next' function that must be called).

-You can serve static files (amazingly very easy) and you can use routers to handle a prefix, also you can serve files from many sources and they will be evaluated in order they are declared/used.

-Erros are handled by middleware modules but they need 4 arguments: err, req, res, next. Also errors middleware need to be called after all other 'app.use()' (other calls) and routes so they are the last middleware in the request handling process. By default 404 errors and other status errors are not treated so if you want to handle these you can add a middleware function to do it.

-Express can use any database mechanism supported by Node, by itself it doesn't define any specific additional behavior/requeriments for database management.

-Template engines (which are the referred to as 'view engines' by express) allows to specify the structure of an output document in a template, using placeholders for the data and those will be filled when the template is generated/rendered.

All of the above was written based on what I was doing while I followed the tutorial from here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
=============================================================================================================================
