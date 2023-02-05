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
	PRIMARY KEY ("id")
);




alter table sysbench 
alter column total_time type numeric (40,20),
alter column total_events type double precision;

INSERT INTO public.sysbench
(file_name, total_time, total_events, 
latency_min, latency_avg, latency_max, p95,latency_sum, 
threads_events_avg, threads_events_stddev, threads_exectime_avg, threads_exectime_stddev)
VALUES('a', 10.0005, 10.1, 11.0002, 0, 0, 0, 0, 0, 0, 0, 0);

select  
--controller, sysbench, test_type, test_kind, 
*
from sysbench s 
;

select controller, count(*)
from sysbench
group by controller
order by 1      
;


truncate sysbench ; 

select substring(file_name,1,16), count(*)
from sysbench s
group by substring(file_name,1,16) 
;
