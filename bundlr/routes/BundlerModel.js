module.exports = function(mongoose){
	var bundleSchema = mongoose.Schema({
		urls: Array, 
		guid: String, 
		viewcount: Number 
	}); 

	bundleSchema.methods.saveCallback = function(){
		console.log("Bundle Saved"); 
	}

	var bundle = mongoose.model("Bundle", bundleSchema); 
	return bundle; 
}; 