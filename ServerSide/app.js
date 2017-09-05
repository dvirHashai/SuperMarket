const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

var messages = []

connections = [];

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


const users = require('./routes/users');
const products = require('./routes/products');
const shops = require('./routes/shops');
// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/products', products);
app.use('/shops', shops);
// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});

// Start Server
/*app.listen(port, () => {
    console.log('Server started on port '+port);
});*/


io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected ', connections.length );


    socket.on('disconnect',function (data) {
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected: %s sockets connected ', connections.length );
    });


    //send messages
    socket.on('send Message', function (msg) {
        console.log(msg.msg);
        messages.push(msg);
        io.sockets.emit('new message', { msg : msg.msg });
    });

});

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});