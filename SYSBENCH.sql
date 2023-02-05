drop table sysbench ;

CREATE TABLE "sysbench" (
	"id" SERIAL,
	"file_name" VARCHAR(100),
	"cpu_speed_events_per_second" numeric (40,10),
	"gen_total_time" numeric (40,10),
	"gen_total_numb_events" numeric (40,10),
	"latency_ms_min" numeric (40,10),
	"latency_ms_avg" numeric (40,10),
	"latency_ms_max" numeric (40,10),
	"p95" numeric (40,10),
	"latency_ms_sum" numeric (40,10),
	"threads_events_avg" numeric (40,10),
	"threads_events_stddev" numeric (40,10),
	"threads_exectime_avg" numeric (40,10),
	"threads_exectime_stddev" numeric (40,10),
	"controller" VARCHAR(100),
	"sysbench" numeric (40,20),
	"test_type" VARCHAR(100),
	"test_kind" VARCHAR(100),
	
	"file_reads_s" numeric (40,10),
	"file_writes_s" numeric (40,10),
	"file_fsyncs_s" numeric (40,10),
	"throughput_read_mib_s" numeric (40,10),
	"throughput_written_mib_s" numeric (40,10),
	
	"zram_size" numeric (40,10),
	"zram_usage" numeric (40,10),
	"zcompressing22_speed_kib_s" numeric (40,10),
	"zcompressing22_usage_prcnt" numeric (40,10),
	"zcompressing22_r_rating_mips" numeric (40,10),
	"zcompressing22_u_rating_mips" numeric (40,10),
	"zdecompressing22_speed_kib_s" numeric (40,10),	"zdecompressing22_usage_prcnt" numeric (40,10),	"zdecompressing22_r_rating_mips" numeric (40,10),	"zdecompressing22_u_rating_mips" numeric (40,10),

	"zcompressing23_speed_kib_s" numeric (40,10),
	"zcompressing23_usage_prcnt" numeric (40,10),
	"zcompressing23_r_rating_mips" numeric (40,10),
	"zcompressing23_u_rating_mips" numeric (40,10),
	"zdecompressing23_speed_kib_s" numeric (40,10),
	"zdecompressing23_usage_prcnt" numeric (40,10),
	"zdecompressing23_r_rating_mips" numeric (40,10),
	"zdecompressing23_u_rating_mips" numeric (40,10),
	
	"zcompressing24_speed_kib_s" numeric (40,10),
	"zcompressing24_usage_prcnt" numeric (40,10),
	"zcompressing24_r_rating_mips" numeric (40,10),
	"zcompressing24_u_rating_mips" numeric (40,10),
	"zdecompressing24_speed_kib_s" numeric (40,10),
	"zdecompressing24_usage_prcnt" numeric (40,10),
	"zdecompressing24_r_rating_mips" numeric (40,10),
	"zdecompressing24_u_rating_mips" numeric (40,10),
	
	"zcompressing25_speed_kib_s" numeric (40,10),
	"zcompressing25_usage_prcnt" numeric (40,10),
	"zcompressing25_r_rating_mips" numeric (40,10),
	"zcompressing25_u_rating_mips" numeric (40,10),
	"zdecompressing25_speed_kib_s" numeric (40,10),
	"zdecompressing25_usage_prcnt" numeric (40,10),
	"zdecompressing25_r_rating_mips" numeric (40,10),
	"zdecompressing25_u_rating_mips" numeric (40,10),
	
	"zcompressing_avg_speed_kib_s" numeric (40,10),
	"zcompressing_avg_usage_prcnt" numeric (40,10),
	"zcompressing_avg_r_rating_mips" numeric (40,10),
	"zcompressing_avg_u_rating_mips" numeric (40,10),
	"zdecompressing_avg_speed_kib_s" numeric (40,10),
	"zdecompressing_avg_usage_prcnt" numeric (40,10),
	"zdecompressing_avg_r_rating_mips" numeric (40,10),
	"zdecompressing_avg_u_rating_mips" numeric (40,10),
	
	"zcompressing_total_speed_kib_s" numeric (40,10),
	"zcompressing_total_usage_prcnt" numeric (40,10),
	"zcompressing_total_r_rating_mips" numeric (40,10),
	"zcompressing_total_u_rating_mips" numeric (40,10),
	
	PRIMARY KEY ("id")
);



select *
from sysbench s;

truncate sysbench ;

select controller, count(*)
from sysbench
group by controller
order by 1      
;

select substring(file_name,1,16), count(*)
from sysbench s
group by substring(file_name,1,16) 
;
