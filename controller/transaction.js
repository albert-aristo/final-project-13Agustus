const { Transaction, item , recipient, Transaction_Item} = require('../models');
class Controller{
    static basic(req, res){
        Transaction_Item.findAll({include: [{model:Transaction,include: [recipient]}, item ], order: [['id','ASC']]})
        .then((data) => {
            res.render('./transaction/transaction', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static TransaksiPage(req, res){
        let barang = undefined
        let penerima = undefined
        recipient.findAll({order: [['id','ASC']]})
        .then((data) => {
            penerima = data
            return item.findAll({order: [['id','ASC']]})
        })
        .then((hasil) => {
            barang = hasil
            res.render('./transaction/addTransaction', { barang, penerima })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static Transaksi(req, res){
        let order = {} //key adalah no id item, value adalah qty
        let warError = true
        if(req.body.purchaseItem.length > 1){
            for(let key in req.body){
                for(let a = 0; a < req.body.purchaseItem.length; a++){
                    if(req.body.purchaseItem[a] == key){
                        order[key] = req.body[key]
                        warError = false
                    }
                }
            }
        }else{
            for(let key in req.body){
                if(key == req.body.purchaseItem && req.body[key]){
                    order[key] = req.body[key]
                    warError = false
                }
            }
        }
        let TransactionItemsCreate = [] //tinggal create
        if(warError){
            throw new Error('harus isi model dan jumlah unit yang mau pesan')
        }
        item.findAll({order: [['id','ASC']]})
        .then((data) => {
            let objTransactionCreate = {}
            for(let a = 0; a < data.length; a++){
                let izin = false
                let start = 0
                let objTransactionItemsCreate = {}
                for(let key in order){
                    if(data[a].id == key && order[key] <= data[a].qty){
                        izin = true
                        //untuk transaction
                        if(!start){
                            objTransactionCreate.final_amount = order[key] * data[a].cost_of_good_sold
                            objTransactionCreate.date_of_purchase = new Date
                            objTransactionCreate.recipient_id = req.body.Penerima //id penerima
                            objTransactionCreate.admin_id = req.session.idUser //id admin
                        }else{
                            objTransactionCreate.final_amount = (data[a].qty * data[a].cost_of_good_sold) + objTransactionCreate.final_amount
                        }
                        start++

                        //untuk transactionItem // done
                        objTransactionItemsCreate.item_id = data[a].id
                        objTransactionItemsCreate.qty = order[key]
                        objTransactionItemsCreate.price = data[a].cost_of_good_sold
                        objTransactionItemsCreate.total = data[a].cost_of_good_sold * order[key]
                    }
                }
                if(izin){
                    TransactionItemsCreate.push(objTransactionItemsCreate)
                }
            }
            return Transaction.create(objTransactionCreate)
        })
        .then((data) => {
            for(let a = 0; a < TransactionItemsCreate.length; a++){
                TransactionItemsCreate[a].transaction_id = data.dataValues.id
            }
            return Transaction_Item.bulkCreate(TransactionItemsCreate)
        })
        .then(() => {
            res.redirect('/transaction')
        })
        .catch((err) => {
            res.send(err)
        })
    }
};

module.exports = Controller;