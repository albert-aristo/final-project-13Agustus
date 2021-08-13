const express = require('express');
const session = require('express-session');
const { checkLogin } = require('./middlewares/checkLogin');
const app = express();
const port = 3000;
const item = require('./routes/item');
const admin = require('./routes/admin');
const recipient = require('./routes/recipient');
const transaction = require('./routes/transaction');
const transaction_item = require('./routes/transaction_item');

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(session({
    secret: 'PStr!n9/P',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 86400000
    }
}));
app.use(express.urlencoded({extended:true}));
app.get('/', checkLogin, function(req, res){
    res.render('./home/home')
})

app.use('/admin', admin);
app.use(checkLogin);
app.use('/item', item);
app.use('/recipient', recipient);
app.use('/transaction', transaction);
app.use('/transaction_item',transaction_item);

app.listen(port,function(){
    console.log(`masuk ${port}`);
})