const { Transaction, item , recipient, admin} = require('../models');
class Controller{
    static basic(req, res){
        Transaction.findAll()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static TransaksiPage(req, res){
        let barang = undefined
        let penerima = undefined
        recipient.findAll()
        .then((data) => {
            penerima = data
            return item.findAll()
        })
        .then((hasil) => {
            barang = hasil
            res.send(barang)
            // res.render('./transaction/addTransaction', { barang, penerima })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static Transaksi(req, res){
        // let {item, Qty, price, Discount, Penerima} = req.body
        // let total = Qty * price
        // let totalAmount = (1 - Discount) * total
        // admin.findOne({where: {status: true}})
        // .then((data) => {
        //     return Transaction.create({item: item, qty: Qty, price: price, total: total, discount: Discount, final_amount: totalAmount, date_of_purchase: new Date, recipient_id: penerima, admin_id: data.id})
        // })
        // .then(() => {
        //     console.log('masuk');
        //     res.redirect('/transaction')
        // })
        // .catch((err) => {
        //     res.send(err)
        // })
    }
};

module.exports = Controller;