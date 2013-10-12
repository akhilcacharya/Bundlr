#Bundler
Written in Node.js on top of the Express.js framework, Bundler is a super simple application that lets you "bundle" multiple URLs into one, simple url. Think bit.ly, except I made it :)

It was a pretty cool learning experience, as I hadn't had a real encounter with Node.js or MongoDB before. Not exactly the *best* use of the language and framework, but hey. 

I whippped this up while in a sleep deprived state in a few hours, and worked out the kinks a few days later. Remember, its REALLY rough around the edges. Take a look if you want, but its not at all production ready. Think of it as an less than Minimum Viable Product. 

#New Additions

I've added/fixed/changed/broken...

+ Chrome Extension! Simpler than ever to create a bundle. Arguably works better. 
+ Implemented Local Storage support in the Extension, which is used to save each bundle. 
+ Implemented a simple "API", POSTs JSON data to the server, gets back a plaintext GUID. 
+ Removed browser-based form entry. It was a pain anyway. 
+ Fixed some glaring code issues (404 not working comes to mind) and added some comments. 

#Todo:
I want to...

* Improve styling - move away from Twitter Bootstrap and get something custom. 
* Improve styling of the Extension as well. 
* Full-on switch to JQuery in the Extension OR use Angular.js. I've been meaning to learn that. 
* Organize Code better - that means using a "Models" folder not a "Routes" folder. 
* Learn how to .gitignore so I can not include those node_modules. 
* Implement "saved bundles" in the extension. 
* Fix naming. Its Bundlr some places and Bundler others. Yuck. 

I'll get to all of these in due time. 

#License
MIT. 