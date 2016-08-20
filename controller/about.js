exports.index = function(req, res) {
	res.render('about', {
		layout: 'default',
        title: '我的网站-关于'
	});
}