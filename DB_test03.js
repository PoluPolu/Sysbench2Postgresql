const { Client } = require('pg')
var Results = []

const client = new Client({
    host: '192.168.102.132',
    user: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});


// client.connect();

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

// `INSERT INTO public.sysbench
// (file_name, total_time, total_events, latency_min, latency_avg, latency_max, p95,latency_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [file_name, total_time, total_events, latency_min, latency_avg, latency_max, p95,latency_sum, threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev]); // sends queries

Results[0]='PPPP 04';
Results[1]='10.22';
Results[2]='10.2';
Results[3]='10.22';

insertUser(Results[0], Results[1], Results[2], Results[3], Results[4], Results[5], Results[6], Results[7], Results[8], Results[9], Results[10], Results[11]).then(result => {
    if (result) {
        console.log('User inserted');
    }
});
// client.end();