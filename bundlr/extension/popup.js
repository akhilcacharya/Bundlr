// Authored by Akhil Acharya, 2013. 
// Usage of this code is governed by the MIT license.  


var Bundlr = {   
  //Adds URL to Chrome Local Storage

   addURL: function(url){
    var bundle = null;
    if(localStorage.getItem('b1') != undefined){
      //Get and append to array
      bundle = JSON.parse(localStorage.getItem('b1')); 
      if(bundle.indexOf(url) == -1){
        bundle.push(url);   
      }
      localStorage.setItem('b1', JSON.stringify(bundle));
    }else{
      //Create and append to array
      bundle = new Array(); 
       if(bundle.indexOf(url) == -1){
        bundle[0] = url; 
      }
      localStorage.setItem('b1', JSON.stringify(bundle)); 
    }
    //Create list 
    //TODO: Style list properly. 
    //      Implement JQuery element selection
    for(var i = 0; i < bundle.length; i++){
      var container = document.getElementById("container"); 
      container.innerHTML += "<li><a href='" + bundle[i] + "'> " + bundle[i]  + "</a></li><br>"; 
    } 
  },
 
  //Send POST request to server to create a bundle. 
  //Accept the Bundle ID, and delete bundles in local storage. 
  postBundle: function(){
    //Fix URL in production. 
    var url = "http://localhost:3000/create"; 
    var savedBundle = localStorage.getItem('b1'); 
    $.ajax({
      type: "POST", 
      url: url, 
      data: {bundle: JSON.parse(savedBundle)}, 
      success: function(data){
        console.log(data); 
        Bundlr.clearStorage(Bundlr.constructBundleURL_(data)); 
      }, 
      dataType: "text" //Not JSON, I know...
    }); 
  }, 
  //Convert to JQuery
  clearStorage: function(message){
    localStorage.removeItem('b1');
    document.getElementById('container').innerHTML = message;  
  }, 
  //Utility method
  constructBundleURL_: function (id) {
    return "<a href='http://localhost:3000/b/" + id + "'>"  + "http://localhost:3000/b/" + id; + "</a>";  
  }, 

};

// Run Extension logic when DOM is loaded. 
document.addEventListener('DOMContentLoaded', function () {  
  //Get tab on DOM load. 
  chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      Bundlr.addURL(tabs[0].url);
   }
  ); 

  //Register Event Listeners. 
  //TODO: Switch to JQuery-only method. 
  var clearButton = document.getElementById('clearAll'); 
  clearButton.addEventListener('click', function(){
      Bundlr.clearStorage("Cleared!"); 
  }); 

  var bundleButton = document.getElementById('bundle'); 
  bundleButton.addEventListener('click', function(){
      Bundlr.postBundle();  
  });   
});

