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

insertUser('Matt2', '10.22').then(result => {
    if (result) {
        console.log('User inserted');
    }
});