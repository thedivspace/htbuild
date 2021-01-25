//Imports
const chalk = require('chalk');
const files = require('./files');
const core = require('./core');
const { performance } = require('perf_hooks');


function build(){
    //Scan Source files
    var sourceFiles = files.scanFiles(".\\source");

    var t0 = performance.now();

    sourceFiles.forEach(source => {

        console.log(
            chalk.blueBright(
                "Building "+source+" ..."
            )
        )
        
        var code = files.readFile(source);
        var components = core.findComponents(code);
        code = compileComponents(code,components);
        // var components = core.findComponents(code);

        // components.forEach(component => {
        //     compName = component.split("\"")[1];
        //     if(files.isComponent(compName)){
        //         var compCode = core.fetchComponent(compName);
        //         code = core.compileComponent(code,component,compCode);
        //     }else{
        //         console.log(
        //             chalk.red(
        //                 component+" Component Not Found"
        //             )
        //         );
        //         return;
        //     }
        // });
        var variables = core.findVariables(code);

        variables.forEach(variable => {

            varName = variable.split("\"")[1];
            varValue = variable.split("\"")[3];
            code = core.compileVariable(code,varName,varValue);

            code = code.replace(variable,"");
        });

        var jsonVars = core.getGlobalVariables();

        var g_variables = core.findGlobalVariables(code);


        g_variables.forEach(variable => {
            varName = variable.split("{{")[1].split("}}")[0].split("g_")[1];
            var value = jsonVars[varName];
            if(value == undefined){
                console.log(
                    chalk.redBright(
                        "[ERROR] Undefined global variable : "+varName
                    )
                );
                process.exit(1);
            }else{
                code = core.comileGlobalVariable(code,varName,value);
            }
        });

        var undefinedVar = core.findUndefinedVars(code)
        
        if(undefinedVar!=false){
            console.log(
                chalk.redBright(
                    "[ERROR] Undefined variable : "+undefinedVar
                )
            );
            process.exit(1);

        }


        code = code.replace(/\/output/g,'');

        var outputpath = ".\\output\\"+source.split("\\")[2];

        files.writeFile(outputpath,code);

    });

    var t1 = performance.now();

    console.log(
        chalk.greenBright(
            "[SUCCESS] Build Successful! "+(t1-t0).toFixed(2)+" ms"
        )
    );

}

function compileComponents(code,components){

    components.forEach(component => {
        compName = component.split("\"")[1];
        if(files.isComponent(compName)){
            var compCode = core.fetchComponent(compName);
            code = core.compileComponent(code,component,compCode);
        }else{
            console.log(
                chalk.redBright(
                    "[ERROR] Undefined Component : "+component
                )
            );
            process.exit(1);
        }
    });    

    var components = core.findComponents(code);
    if(components.length>0){
        code = compileComponents(code,components);
    }
    return code;
}

module.exports = {
    build
};

