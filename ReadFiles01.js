
const regex = /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;
var FileContent = ''
var Results = []


const glob = require('glob'),
fs = require('fs');

const Files2Array = function (str2) {
    let m;
    var idx=1;
    
    while ((m = regex.exec(str2)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            // console.log(`${match}`);
            // console.log(idx);
            Results[idx]=`${match}`;
            idx++;
            // Results[m.index]=console.log(`${match}`);
        });
    }
}


const readFiles = function (pat, forFile) {
    // pattern
    pat = pat || '*.js';
    // for file method
    forFile = forFile || function (content, file) {
        console.log('0000000');
        console.log(file);
        Results[0]=file;
        console.log('1*****');
        // console.log(content);
        // FileContent=content;
        Files2Array(content);
        Results.forEach((element, index) => console.log(index + ": " + element));
        console.log('2*****')
    };
    // using glob
    glob(pat, function (err, files) {
        if (err) {
            console.log(err);
        } else {
            files.forEach(function (file) {
                fs.readFile(file, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        forFile(data.toString(), file);
                    }
                });
            });
        }
    });
};



readFiles('C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU*.txt');

