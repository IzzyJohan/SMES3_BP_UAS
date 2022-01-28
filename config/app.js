(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641620687766
//APP_KEY=-ICA6B5yDNDsFj3r497W_iXlpaTJQA2kvkySUu8OV8XsZSu8cq0DEtGJK4FWLNL4yNhfslb430hKvwAQVd1raA

