const { comparePassword } = require('../helpers/bcryptjs');
const {admin} = require('../models');
class Controller{
    static loginPage(req, res){
        const err = req.query.err ? req.query.err : undefined;
        res.render('./admin/login', { err });
    } //done

    static loginResult(req, res){
        let { username, Password } = req.body
        admin.findOne({where:{email: username}})
        .then((data) => {
            if(data){
                const checkPassword = comparePassword( Password, data.dataValues.password);
                if(checkPassword){
                    req.session.user = data.dataValues.name;
                    res.redirect('/');
                }else{
                    throw new Error('password / email salah')
                }
            }else{
                throw new Error('password / email salah')
            }
        })
        .catch((err) => {
            if(err.message){
                res.redirect(`/admin/login?err=${err.message}`)
            }else{
                res.redirect(`/admin/login?err=${err}`)
            }
        })
    }//done

    static registerPage(req, res){
        res.render('./admin/register')
    }//done

    static registerResult(req, res){
        let { Name, Username, Password } = req.body
        admin.create({name: Name, email: Username, password: Password, status: false})
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })
    }//done

    static logout(req, res){
        delete req.session.user;
        res.redirect('/admin/login')
    }// done
};

module.exports = Controller;