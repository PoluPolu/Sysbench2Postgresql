const regex = /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?<!sysbench.*)(?<!Prime.*)\\d+.{1}\\d+', 'g')

var str2 = ''
var Results = []

const fs = require('fs');

try {
  const data = fs.readFileSync('C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU_T001.txt', 'utf8');
//   console.log(data);
console.log("Czytam plik: C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU_T001.txt");
  str2=data;
} catch (err) {
  console.error(err);
}


let m;
var idx=0;

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
console.log("Matryca Array: " + Results.length);
Results.forEach((element, index) => console.log(index + ": " + element));
console.log('---Matryca end-----------');



czytaj katalog
console.log("Czytam katalog: perf-vipers-db01_sysbench1_CPU*");
// npm install glob
var glob = require("glob");
var PlicoryCPU =[];

glob("C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU*", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  console.log(files);
PlicoryCPU=files;
})

// console.log(glob.files);
//PlicoryCPU.forEach((element, index) => console.log(index + ": " + element));

