/**
 * Created by m.maciejewski on 12.04.2018.
 */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
