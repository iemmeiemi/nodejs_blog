
class NewController {

    //[GET] /news
    index(reg, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(reg, res) {
        res.send('News detail');
    }
}

module.exports = new NewController;

