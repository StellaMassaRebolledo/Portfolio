exports.home = function(req, res, next) {
    res.render('about', { title: 'About Me' });
}
