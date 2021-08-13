module.exports = {
    checkLogin : (req, res, next) => {
        if(req.session.user) {
            next()
        }else{
            res.redirect('/admin/login');
        }
    },
    notLogin : (req, res, next) => {
        if(!req.session.user) {
            next()
        }else{
            res.redirect('/');
        }
    }
};