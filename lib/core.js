const files = require('./files.js');
const { sortBy } = require('lodash');

const componentRegex = /(<ht-component data-component="+([A-Za-z0-9_\/])+"\/>)/gm;
const variableRegex = /(<ht-var data-var="+([A-Za-z0-9_\/])+" data-val="+([A-Za-z0-9_\/:])+"\/>)/gm;
const localVariableRegex = /({{)+[^g_]+[a-zA-z0-9_ ]+(}})/gm;
const globalVariableRegex = /({{g_)+[a-zA-z0-9_ ]+(}})/gm;


//Find Components in source code
function findComponents(sourceFile){

    var result,components = [];

    while((result = componentRegex.exec(sourceFile))){
        components.push(result.toString().split(",")[0]);
    }

    return components;
    
}

//Fetch Component code
function fetchComponent(component){
    return files.readFile('./components/'+component+'.html');
}

//Get compiled Code
function compileComponent(srcFile,compSrc,compCode){
    return srcFile.replace(compSrc,compCode);
}

//Find Variabless in source code
function findVariables(sourceFile){

    var result,variables = [];

    while((result = variableRegex.exec(sourceFile))){
        variables.push(result.toString().split(",")[0]);
    }

    return variables;
}

//Compile Variable
function compileVariable(srcFile,varName,varValue){

    var variableSearch = "{{"+varName+"}}";
    var varRegex = new RegExp(variableSearch,"g");
    return srcFile.replace(varRegex,varValue);
}

//get globbal variables
function getGlobalVariables(){

    var path = "./variables.json";
    var jsonVars = files.readFile(path);
    return JSON.parse(jsonVars);
}

//Find Global variables
function findGlobalVariables(sourceFile){

    var result,variables = [];

    while((result = globalVariableRegex.exec(sourceFile))){
        variables.push(result.toString().split(",")[0]);
    }

    return variables; 
}

function comileGlobalVariable(srcFile,varName,varValue){
    var varRegex = new RegExp("{{g_"+varName+"}}","g");
    srcFile = srcFile.replace(varRegex,varValue);
    return srcFile;
}

function findUndefinedVars(code){

    var result = localVariableRegex.exec(code);

    if(result!=null)
        return result.toString().split(",")[0].split("{{")[1].split("}}")[0];
    else
        return false;
}

    

module.exports  = {
    findComponents, fetchComponent, compileComponent, findVariables, compileVariable, getGlobalVariables, findGlobalVariables, comileGlobalVariable, findUndefinedVars
};