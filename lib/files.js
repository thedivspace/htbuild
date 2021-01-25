var fs = require('fs');
const chalk = require('chalk');

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

//Expoet methods

module.exports = {
    createDirectories, isComponent, scanFiles, readFile, writeFile
};

/* <ht_component data-component="/common/header" />
<ht_if data-var="isDarkTheme" data-val="1">
    
</ht_if> */