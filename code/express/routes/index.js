var exports = exports || {};
/*
 * GET home page.
 */

/*jslint unparam:true */
exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};