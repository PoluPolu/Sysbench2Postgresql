const regex = /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?<!sysbench.*)(?<!Prime.*)\\d+.{1}\\d+', 'g')

var str2 = ''
var Results = []
// const fs = require('fs');

// fs.readFile('C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU_T001.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// //   console.log(data);
//   str2=data;
// //   console.log(str2);
// });

const fs = require('fs');

try {
  const data = fs.readFileSync('C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench1_CPU_T001.txt', 'utf8');
//   console.log(data);
  str2=data;
} catch (err) {
  console.error(err);
}



// const str = `sysbench 1.0.18 (using system LuaJIT 2.1.0-beta3)

// Running the test with following options:
// Number of threads: 1
// Initializing random number generator from current time


// Prime numbers limit: 10000

// Initializing worker threads...

// Threads started!

// CPU speed:
//     events per second:  2584.23

// General statistics:
//     total time:                          10.0005s
//     total number of events:              25861

// Latency (ms):
//          min:                                    0.35
//          avg:                                    0.39
//          max:                                    4.50
//          95th percentile:                        0.46
//          sum:                                 9996.63

// Threads fairness:
//     events (avg/stddev):           25861.0000/0.00
//     execution time (avg/stddev):   9.9966/0.00`;


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
console.log("tttt: " + Results.length);
Results.forEach((element, index) => console.log(index + ": " + element));
console.log('--------------');

// czytaj katalog

// const testFolder = 'C:/Users/Admin/Downloads/sysbench/';
// // const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
// });


// npm install glob
var glob = require("glob");
var PlicoryCPU =[];

glob("C:/Users/Admin/Downloads/sysbench/*CPU*", function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
//   console.log(files);
PlicoryCPU=files;
})

// console.log(glob.files);
PlicoryCPU.forEach((element, index) => console.log(index + ": " + element));