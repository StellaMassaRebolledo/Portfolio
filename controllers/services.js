exports.home = function(req, res, next) {
    res.render('services', { title: 'My Services' });
}

