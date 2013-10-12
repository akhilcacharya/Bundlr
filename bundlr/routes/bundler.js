var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/bundler'); 
var db = mongoose.connection; 

var Bundle = require("../routes/BundlerModel.js")(mongoose); 

db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
  		console.log("Connected to MongoDB"); 
});

exports.index = function(req, res){
  res.render('Home', { title: 'Bundlr' })
};

exports.post = function(req, res){
	var posted = req.body;  
	var urlArray = []; 
	var id = getId(); 

	for(var x in posted.bundle){
	 console.log(posted.bundle[x]); 
	 urlArray.push(posted.bundle[x]); 
	}

	var newBundle = new Bundle({
		urls : urlArray, 
		guid: id,
		viewcount : 0			
	})

	newBundle.save(function(err, newBundle){
		if(err){throw err;}
		newBundle.saveCallback(); 
	})
	
	//Sends a plain ol' text after the GUID is generated. 
	//TODO: Make into a JSON Api. Those are fun. 
	res.send(id); 
}; 

exports.get = function(req, res){
	var queryId = req.params.id; 
	Bundle.findOne({'guid': queryId}, function(err, bundle){
		if(!bundle){
		 	res.render('404')
		} 
		else{
			//For development only. 
			console.log("Found it! " + " " + bundle.urls); 
			res.render('urls', {urls: bundle.urls}) 
		} 
	}); 
}; 

function getId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}