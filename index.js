#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const build = require('./lib/build');
const serve = require('./lib/serve');

if(process.argv.length>2){
    switch(process.argv[2]){
        case 'init':
            banner();
            init();
            break;
        case 'build':
            banner();
            build.build();
            break;
        case 'serve':
            banner();
            var port = 3000
            if(process.argv.length>3)
                port = process.argv[3]
            serve.serve(port);
                break;
        default:
            banner();
            help();

    }
}else{
    banner();
    help();
}

function help(){
    console.log(
        chalk.blue(
            'htBuild Help \n'
        )
    );

    console.log(
        chalk.white(
            'init - Creates htBuild Project\n'+
            'build - Compile source\n'+
            'serve - Autobuild and serve on :8080\n'+
            'help - Shows htBuild help' 
        )
    );
}

function init(){

    console.log(
        chalk.blue(
            'Creating Directories...\n'
        )
    );
    files.createDirectories();
}

function banner(){
    clear();

    console.log(
        chalk.greenBright(
            figlet.textSync('htBuild',{
                horizontalLayout: 'full'
            })
        )
    );
}