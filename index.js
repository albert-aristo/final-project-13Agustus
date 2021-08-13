const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.get('/',function(req, res){
    res.render('./home/home')
})

const item = require('./routes/item');
const admin = require('./routes/admin');
const recipient = require('./routes/recipient');
const transaction = require('./routes/transaction');
const transaction_item = require('./routes/transaction_item');

app.use('/item', item);
app.use('/admin', admin);
app.use('/recipient', recipient);
app.use('/transaction', transaction);
app.use('/transaction_item',transaction_item);

app.listen(port,function(){
    console.log(`masuk ${port}`);
})