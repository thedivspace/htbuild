var fs = require('fs');
const chalk = require('chalk');
const { dir } = require('console');

//Create Directories for project initialization
function createDirectories(){
    var dirs = ['./components','./source','./output'];
    dirs.forEach((dir)=>{
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            console.log(
                chalk.greenBright(
                    dir+" Directory Created!"
                )
            );
        }else{
            console.log(
                chalk.yellow(
                    dir+" Directory Already Exists!"
                )
            );
        }    
    });
    fs.writeFileSync('variables.json','{\n}');
    fs.writeFileSync('source/index.html',`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to htBuild</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <style>
            nav{
                background-color: #F9FAFE;
            }
            footer{
                bottom: 0;
                position: fixed;
                width: 100%;
                background-color: #7C00FF;
                color: #ffffff;
            }
            .logo{
                width: 125px;
            }
            main{
                margin-top: 200px;
                margin-bottom: 200px;
            }
        </style>
    </head>
    <body>
        <!-- Using Component /navbar -->
        <ht-component data-component="/navbar"/>
    
        <main class="flex-shrink-0">
            <div class="container">
                <img class="logo mx-auto d-block" src="https://media.giphy.com/media/2Dvw0manoeDYQeXcOk/giphy.gif" alt="htbuild-logo"/>
                <br>
                <h1 class="text-center">Welcome to htBuild</h1>
                <p class="text-center">Learn more at htBuild <a href="https://htbuild.thedivspace.com/docs/">Docs</a></p>
            </div>
        </main>
    
        <!-- Using Component /footer -->
        <ht-component data-component="/footer"/>
    </body>
    </html>`);
    fs.writeFileSync('components/navbar.html',`<nav class="navbar navbar-light">
    <div class="container">
      <span class="navbar-brand mb-0 h1">htBuild</span>
    </div>
</nav>`);
    fs.writeFileSync('components/footer.html',`<footer class="footer mt-auto py-3">
    <div class="container">
        <span>Built with htBuild </span>
        <span><a style="right: 100px; position: fixed; text-decoration: none; color: #ffffff;" target="_blank" href="https://htbuild.thedivspace.com">htbuild.thedivspace.com</a></span>
    </div>
</footer>`);

    console.log(
        chalk.greenBright(
            "\nDirectoroies created successfully!"
        )
    );
}

//Check if component exists
function isComponent(path){
    if(fs.existsSync("./components/"+path+".html")){
        return true;
    }else{
        return false;
    }
}

//Scan source files
function scanFiles(path){

    var files = Array();
    
    fs.readdirSync(path).forEach(file => {
        if(fs.statSync(path+"\\"+file).isDirectory()){
            var dirFiles = scanFiles(path+"\\"+file);
            dirFiles.forEach(dirFile => {
                files.push(dirFile);
            });
        }else{
            files.push(path+"\\"+file);
        }
    });
    return files;
}

//Read any file in project
function readFile(path){
    return fs.readFileSync(path).toString();
}

//Write to any file in project
function writeFile(path,data){
    fs.writeFileSync(path,data);
}

function scanAssets(path='.\\source'){

    var assets = Array();
    
    fs.readdirSync(path).forEach(file => {
        if(fs.statSync(path+"\\"+file).isDirectory()){
            assets.push(path+"\\"+file);
            var dirAssets = scanAssets(path+"\\"+file);
            dirAssets.forEach(dirAsset => {
                assets.push(dirAsset);
            });
        }else{
            var isHtml = (file.split(".")[1].toUpperCase()) == 'HTML';
            if(!isHtml)
                assets.push(path+"\\"+file);
        }
    });
    return assets;
}

function copyAssets(){

    const assets = scanAssets();

    assets.forEach(asset => {

        if(fs.statSync(asset).isDirectory()){
            asset = asset.replace("source","output");
            if(!fs.existsSync(asset))
                fs.mkdirSync(asset);
        }else{
            var copyAsset = asset.replace("source","output");
            fs.copyFileSync(asset,copyAsset);
        }

    });
}

function isHtml(path) {
    return (path.split(".")[2].toUpperCase()) == 'HTML';
}

//Expoet methods

module.exports = {
    createDirectories, isComponent, scanFiles, readFile, writeFile, copyAssets, isHtml
};

/* <ht_component data-component="/common/header" />
<ht_if data-var="isDarkTheme" data-val="1">
    
</ht_if> */

