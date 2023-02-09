
const regex = /(?<!sysbench.*)(?<!Prime.*)\d+\.{0,1}\d{0,}/g;
// /(?<!sysbench.*)(?<!Prime.*)\d+.{1}\d+/g;
var FileContent = ''
var Results = []

const { Client } = require('pg')

const insertUser = async (file_name,zram_size,zram_usage,zcompressing22_speed_kib_s,zcompressing22_usage_prcnt,zcompressing22_r_rating_mips,zcompressing22_u_rating_mips,zdecompressing22_speed_kib_s,zdecompressing22_usage_prcnt,zdecompressing22_r_rating_mips,zdecompressing22_u_rating_mips,zcompressing23_speed_kib_s,zcompressing23_usage_prcnt,zcompressing23_r_rating_mips,zcompressing23_u_rating_mips,zdecompressing23_speed_kib_s,zdecompressing23_usage_prcnt,zdecompressing23_r_rating_mips,zdecompressing23_u_rating_mips,zcompressing24_speed_kib_s,zcompressing24_usage_prcnt,zcompressing24_r_rating_mips,zcompressing24_u_rating_mips,zdecompressing24_speed_kib_s,zdecompressing24_usage_prcnt,zdecompressing24_r_rating_mips,zdecompressing24_u_rating_mips,zcompressing25_speed_kib_s,zcompressing25_usage_prcnt,zcompressing25_r_rating_mips,zcompressing25_u_rating_mips,zdecompressing25_speed_kib_s,zdecompressing25_usage_prcnt,zdecompressing25_r_rating_mips,zdecompressing25_u_rating_mips,zcompressing_avg_usage_prcnt,zcompressing_avg_r_rating_mips,zcompressing_avg_u_rating_mips,zdecompressing_avg_usage_prcnt,zdecompressing_avg_r_rating_mips,zdecompressing_avg_u_rating_mips,zcompressing_total_usage_prcnt,zcompressing_total_r_rating_mips,zcompressing_total_u_rating_mips,controller,sysbench,test_type) => {
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
            (file_name,zram_size,zram_usage,zcompressing22_speed_kib_s,zcompressing22_usage_prcnt,zcompressing22_r_rating_mips,zcompressing22_u_rating_mips,zdecompressing22_speed_kib_s,zdecompressing22_usage_prcnt,zdecompressing22_r_rating_mips,zdecompressing22_u_rating_mips,zcompressing23_speed_kib_s,zcompressing23_usage_prcnt,zcompressing23_r_rating_mips,zcompressing23_u_rating_mips,zdecompressing23_speed_kib_s,zdecompressing23_usage_prcnt,zdecompressing23_r_rating_mips,zdecompressing23_u_rating_mips,zcompressing24_speed_kib_s,zcompressing24_usage_prcnt,zcompressing24_r_rating_mips,zcompressing24_u_rating_mips,zdecompressing24_speed_kib_s,zdecompressing24_usage_prcnt,zdecompressing24_r_rating_mips,zdecompressing24_u_rating_mips,zcompressing25_speed_kib_s,zcompressing25_usage_prcnt,zcompressing25_r_rating_mips,zcompressing25_u_rating_mips,zdecompressing25_speed_kib_s,zdecompressing25_usage_prcnt,zdecompressing25_r_rating_mips,zdecompressing25_u_rating_mips,zcompressing_avg_usage_prcnt,zcompressing_avg_r_rating_mips,zcompressing_avg_u_rating_mips,zdecompressing_avg_usage_prcnt,zdecompressing_avg_r_rating_mips,zdecompressing_avg_u_rating_mips,zcompressing_total_usage_prcnt,zcompressing_total_r_rating_mips,zcompressing_total_u_rating_mips,controller,sysbench,test_type)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47)`, [file_name,zram_size,zram_usage,zcompressing22_speed_kib_s,zcompressing22_usage_prcnt,zcompressing22_r_rating_mips,zcompressing22_u_rating_mips,zdecompressing22_speed_kib_s,zdecompressing22_usage_prcnt,zdecompressing22_r_rating_mips,zdecompressing22_u_rating_mips,zcompressing23_speed_kib_s,zcompressing23_usage_prcnt,zcompressing23_r_rating_mips,zcompressing23_u_rating_mips,zdecompressing23_speed_kib_s,zdecompressing23_usage_prcnt,zdecompressing23_r_rating_mips,zdecompressing23_u_rating_mips,zcompressing24_speed_kib_s,zcompressing24_usage_prcnt,zcompressing24_r_rating_mips,zcompressing24_u_rating_mips,zdecompressing24_speed_kib_s,zdecompressing24_usage_prcnt,zdecompressing24_r_rating_mips,zdecompressing24_u_rating_mips,zcompressing25_speed_kib_s,zcompressing25_usage_prcnt,zcompressing25_r_rating_mips,zcompressing25_u_rating_mips,zdecompressing25_speed_kib_s,zdecompressing25_usage_prcnt,zdecompressing25_r_rating_mips,zdecompressing25_u_rating_mips,zcompressing_avg_usage_prcnt,zcompressing_avg_r_rating_mips,zcompressing_avg_u_rating_mips,zdecompressing_avg_usage_prcnt,zdecompressing_avg_r_rating_mips,zdecompressing_avg_u_rating_mips,zcompressing_total_usage_prcnt,zcompressing_total_r_rating_mips,zcompressing_total_u_rating_mips,controller,sysbench,test_type]); // sends queries
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
            // console.log(`Match ${idx}: ${match}`);
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
        // console.log('0000000');
        console.log(file);
        Results[0]=file;
        
        // console.log(content);
        // FileContent=content;
        Files2Array(content);
        // Results.forEach((element, index) => console.log(index + ": " + element));
        
        Results[0]=Results[0].substring(34); //0: C:/Users/Admin/Downloads/sysbench/perf-vipers-db01_sysbench2_FIO2.txt
        Results[50]=Results[0].substring(0,16); //controller //perf-vipers-db??
        Results[51]= "1" //Results[0].substring(25,26); //1,2,3
        Results[52]="7ZIP" //Results[0].substring(27,30); //test_type
        // Results[57]= Results[0].substring(30,31) + "_WRITE";// Results[0].substring(31,Results[0].length-4); // test_kind

        console.log('BEFORE Insert');
        Results.forEach((element, index) => {
            console.log({index, element });
        });

        insertUser(Results[0],Results[1],Results[3],Results[6],Results[7],Results[8],Results[9],Results[10],Results[11],Results[12],Results[13],Results[15],Results[16],Results[17],Results[18],Results[19],Results[20],Results[21],Results[22],Results[24],Results[25],Results[26],Results[27],Results[28],Results[29],Results[30],Results[31],Results[33],Results[34],Results[35],Results[36],Results[37],Results[38],Results[39],Results[40],Results[41],Results[42],Results[43],Results[44],Results[45],Results[46],Results[47],Results[48],Results[49],Results[50],Results[51],Results[52]).then(result => {
            if (result) {
                console.log(Results[0] + ' - User inserted');
            }});
        
            console.log('Inserted into DB')
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



readFiles('C:/Users/Admin/Downloads/sysbench/perf-vipers-db??_7zip1_B.txt');
// perf-vipers-db02_7zip1_B                                          
// perf-vipers-db??_sysbench?_CPU_T*.txt

