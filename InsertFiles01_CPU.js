
const regex = /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;
var FileContent = ''
var Results = []

const { Client } = require('pg')




//  client.connect();

const insertUser = async (file_name, cpu_speed_events_per_second, gen_total_time, gen_total_numb_events, latency_ms_min, latency_ms_avg, latency_ms_max, p95, latency_ms_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev, controller, sysbench, test_type, test_kind) => {
    const client = new Client({
        host: '192.168.102.132',
        user: 'postgres',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
    });

    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO public.sysbench
            (file_name, cpu_speed_events_per_second, gen_total_time, gen_total_numb_events, latency_ms_min, latency_ms_avg, latency_ms_max, p95, latency_ms_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev, controller, sysbench, test_type, test_kind)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`, [file_name, cpu_speed_events_per_second, gen_total_time, gen_total_numb_events, latency_ms_min, latency_ms_avg, latency_ms_max, p95, latency_ms_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev, controller, sysbench, test_type, test_kind]); // sends queries
        return true;

    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
         await client.end();               // closes connection
    }
};

const glob = require('glob'),
fs = require('fs');
const { setMaxIdleHTTPParsers } = require('http');

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
            console.log(`Match ${idx}: ${match}`);
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
        Results[0]=Results[0].substring(34); //0: C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench2_FIO2.txt
        Results[13]=Results[0].substring(0,16); //perf-vipers-db??
        Results[14]=Results[0].substring(25,26); //1,2,3
        Results[15]=Results[0].substring(27,30); //CPU
        Results[16]=Results[0].substring(31,Results[0].length-4); //T064
        insertUser(Results[0], Results[1], Results[2], Results[3], Results[4], Results[5], Results[6], Results[7], Results[8], Results[9], Results[10], Results[11], Results[12], Results[13], Results[14], Results[15], Results[16]).then(result => {
            if (result) {
                console.log(Results[0] + ' - User inserted');
            }
        });
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



readFiles('C:/Users/Admin/Downloads/sysbench/perf-vipers-db??_sysbench?_CPU_T*.txt');


