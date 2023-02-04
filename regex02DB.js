const regex = /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?<!sysbench.*)(?<!Prime.*)\\d+.{1}\\d+', 'g')

const str = `sysbench 1.0.18 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Prime numbers limit: 10000

Initializing worker threads...

Threads started!

CPU speed:
    events per second:  2584.23

General statistics:
    total time:                          10.0005s
    total number of events:              25861

Latency (ms):
         min:                                    0.35
         avg:                                    0.39
         max:                                    4.50
         95th percentile:                        0.46
         sum:                                 9996.63

Threads fairness:
    events (avg/stddev):           25861.0000/0.00
    execution time (avg/stddev):   9.9966/0.00`;
let m;
var results = [];

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`${match}`);
    });

    const { Client } = require('pg')

    const client = new Client({
        host: '192.168.102.132',
        user: 'postgres',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
    });

    const insertUser = async (file_name, total_time, total_events, latency_min, latency_avg, latency_max, p95,latency_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev) => {
        try {
            await client.connect();           // gets connection
            await client.query(
                `INSERT INTO public.sysbench
                (file_name, total_time, total_events, latency_min, latency_avg, latency_max, p95,latency_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [file_name, total_time, total_events, latency_min, latency_avg, latency_max, p95,latency_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev]); // sends queries
            return true;
        } catch (error) {
            console.error(error.stack);
            return false;
        } finally {
            await client.end();               // closes connection
        }
    };   


}