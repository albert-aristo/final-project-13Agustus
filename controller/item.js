const { item, admin } = require('../models');
class Controller{
    static basic(req, res){
        item.findAll({include: admin, order: [['id','ASC']]},)
        .then((data) => {
            res.render('./items/items', { data })
        })
        .catch((err) => {
            res.send(err)
        }) 
    }//done

    static addPage(req, res){
        res.render('./items/inputStock')
    }//done

    static addResult(req, res){
        let {name, Category, Brand, QTY, COGS, SKU} = req.body
        admin.findOne({where: {status: true}})
        .then((data) => {
            return data.id
        })
        .then((hasil) => {
            return item.create({name: name, category: Category, brand: Brand, qty: QTY, cost_of_good_sold: COGS, sku: SKU, admin_id: hasil})
        })
        .then(() => {
            res.redirect('/item')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static addItemSamaPage(req, res){
        item.findOne({where: {id: req.params.id}})
        .then((data) => {
            res.render('./items/addItemSama', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static hasilAddItemSama(req, res){
        let { QTY, COGS} = req.body
        let jumlah = undefined
        let hpp = undefined
        item.findOne({where: {id: req.params.id}})
        .then((data) => {
            jumlah = data.qty + Number(QTY)
            hpp = Math.round((data.cost_of_good_sold + (COGS * QTY)) / jumlah)
            return item.update({qty: jumlah, cost_of_good_sold: hpp}, {where: {id: req.params.id}})
        })
        .then(() => {
            res.redirect('/item')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done
};

module.exports = Controller;