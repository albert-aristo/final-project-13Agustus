const { recipient } = require('../models');
class Controller{
    static basic(req, res){
        recipient.findAll({order: [['id','ASC']]})
        .then((data) => {
            res.render('./recipient/daftarPenerima' , { data });
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static addPage(req, res){
        res.render('./recipient/addPenerima');
    }//done

    static addResult(req, res){
        let { NamaPenerima, PerusahaanPenerima } = req.body
        recipient.create({name: NamaPenerima, company_recipient: PerusahaanPenerima})
        .then(() => {
            res.redirect('/recipient')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static removePenerima(req, res){
        recipient.destroy({where: {id: req.params.id}})
        .then(() => {
            res.redirect('/recipient')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static editPenerima(req, res){
        recipient.findOne({where: {id: req.params.id}})
        .then((data) => {
            res.render('./recipient/editpenerima', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static resultEdit(req, res){
        let {NamaPenerima, PerusahaanPenerima} = req.body
        recipient.update({name: NamaPenerima, company_recipient: PerusahaanPenerima}, {where: {id: req.params.id}})
        .then(() => {
            res.redirect('/recipient')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done
};

module.exports = Controller;