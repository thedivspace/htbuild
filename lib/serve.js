const build = require('./build');
const { watch } = require('fs');
var bs = require('browser-sync').create();

function serve(p){

    bs.init({
        server: "./output",
        port: p
    });

    watch('./source',{ recursive: true}, function(event,name){
        console.log(name+' '+event);
        build.build();
    });
    
    watch('./components',{ recursive: true}, function(event,name){
        console.log(name+' '+event);
        build.build();
    });

    watch('./variables.json',{ recursive: true},function(event,name){
        console.log(name+' '+event);
        build.build();
    })

    watch('./output',{ recursive: true}, function(event,name){
        bs.reload();
    });

    
}

module.exports = {
    serve
}