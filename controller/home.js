exports.index = function(req, res) {
	res.render('index', {		
        layout: 'default',
        title: '我的网站'
	});
};