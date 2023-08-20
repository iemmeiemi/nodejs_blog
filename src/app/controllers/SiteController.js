
class NewController {

    //[GET] /home
    index(reg, res) {
        res.render('home');
    }
    
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewController;

