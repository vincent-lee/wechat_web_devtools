'use strict';!function(require,directRequire){const a=require('child_process'),b='win32'!==process.platform;module.exports=function(c,d){const e=c;if(b){let b=d?`osascript -e 'tell application "Terminal" to set currentTab to do script ("cd \\"${e.replace(/\"/g,'\\\\\\"')}\\" && ${d}")' -e 'tell application "Terminal" to activate'`:`osascript -e 'tell application "Terminal" to set currentTab to do script ("cd \\"${e.replace(/\"/g,'\\\\\\"')}\\"")' -e 'tell application "Terminal" to activate'`;try{a.exec(b,{detached:!0,cwd:e}).unref()}catch(a){console.error(a)}}else try{d?a.exec(`start cmd /k "${d}"`,{detached:!0,cwd:e}).unref():a.exec('start',{detached:!0,cwd:e}).unref()}catch(a){console.error(a)}}}(require('lazyload'),require);