

--\copy public.sysbench to 'sysbenchTable.csv' DELIMITER '|' csv;

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
	
	"mem_total_operations" numeric (40,10),
	"mem_total_operations_per_sec" numeric (40,10),
	"mib_transferred" numeric (40,10),
	"mib_transferred_per_sec" numeric (40,10),

	
	PRIMARY KEY ("id")
);



select *
from sysbenchol s;

truncate sysbench ;

select controller, count(*)
from sysbench
where test_type = 'MEM'
group by controller
order by 1      
;

select substring(file_name,1,16), count(*)
from sysbench s
group by substring(file_name,1,16) 
;


select distinct test_type, test_kind   
from sysbench s
order by 1,2
;

---------------------

--CPU
select
	controller,
	test_kind,
	round(avg(cpu_speed_events_per_second), 1) as cpu_speed_events_per_second,
	round(avg(gen_total_time), 1) as gen_total_time,
	round(avg(gen_total_numb_events), 1) as gen_total_events,
	round(avg(latency_ms_min), 1) as latency_ms_min,
	round(avg(latency_ms_avg), 1) as latency_ms_avg,
	round(avg(latency_ms_max), 1) as latency_ms_max,
	round(avg(p95), 1) as p95,
	round(avg(latency_ms_sum), 1) as latency_ms_sum,
	round(avg(threads_events_avg), 1) as threads_events_avg,
	round(avg(threads_events_stddev), 1) threads_events_stddev,
	round(avg(threads_exectime_avg), 1) as threads_exectime_avg,
	round(avg(threads_exectime_stddev), 1) as threads_exectime_stddev
from
	sysbench s
where
	test_type = 'CPU'
group by
	controller,
	test_kind
order by
	1,
	2
;

--MEM
--delete from sysbench where file_name ~~ '%MEM%';
select count (*) from sysbench s where test_type = 'MEM'; --file_name ~~ '%MEM%';

select
	test_kind,
	controller,
	round(avg(mem_total_operations), 1) as mem_total_operations,
	round(avg(mem_total_operations_per_sec), 1) as mem_total_operations_per_sec,
	round(avg(mib_transferred), 1) as mib_transferred,
	round(avg(mib_transferred_per_sec), 1) as mib_transferred_per_sec,
	round(avg(gen_total_time), 1) as gen_total_time,
	round(avg(gen_total_numb_events), 1) as gen_total_numb_events,
	round(avg(latency_ms_max), 1) as latency_ms_max,
	round(avg(threads_events_avg), 1) as threads_events_avg,
	round(avg(threads_exectime_avg), 1) as threads_exectime_avg
from
	sysbench s
where
	test_type = 'MEM'
	--	file_name ~~ '%MEM%'
group by
	controller,
	test_kind
order by
	1,
	2
;


--7zip
delete from sysbench where test_type = '7ZIP';
select count (*) from sysbench s where test_type = '7ZIP'; 
select * from sysbench s where test_type = '7ZIP';

select
	controller,
	zram_size,
	zram_usage,
--	zcompressing22_speed_kib_s,
--	zcompressing22_usage_prcnt,
--	zcompressing22_r_rating_mips,
--	zcompressing22_u_rating_mips,
--	zdecompressing22_speed_kib_s,
--	zdecompressing22_usage_prcnt,
--	zdecompressing22_r_rating_mips,
--	zdecompressing22_u_rating_mips,
--	zcompressing23_speed_kib_s,
--	zcompressing23_usage_prcnt,
--	zcompressing23_r_rating_mips,
--	zcompressing23_u_rating_mips,
--	zdecompressing23_speed_kib_s,
--	zdecompressing23_usage_prcnt,
--	zdecompressing23_r_rating_mips,
--	zdecompressing23_u_rating_mips,
--	zcompressing24_speed_kib_s,
--	zcompressing24_usage_prcnt,
--	zcompressing24_r_rating_mips,
--	zcompressing24_u_rating_mips,
--	zdecompressing24_speed_kib_s,
--	zdecompressing24_usage_prcnt,
--	zdecompressing24_r_rating_mips,
--	zdecompressing24_u_rating_mips,
--	zcompressing25_speed_kib_s,
--	zcompressing25_usage_prcnt,
--	zcompressing25_r_rating_mips,
--	zcompressing25_u_rating_mips,
--	zdecompressing25_speed_kib_s,
--	zdecompressing25_usage_prcnt,
--	zdecompressing25_r_rating_mips,
--	zdecompressing25_u_rating_mips,
	zcompressing_total_speed_kib_s,
	zcompressing_avg_usage_prcnt,
	zcompressing_avg_r_rating_mips,
	zcompressing_avg_u_rating_mips,
	zdecompressing_avg_usage_prcnt,
	zdecompressing_avg_r_rating_mips,
	zdecompressing_avg_u_rating_mips,
	zcompressing_total_usage_prcnt,
	zcompressing_total_r_rating_mips,
	zcompressing_total_u_rating_mips	
from
	sysbench s
where
	test_type = '7ZIP'
order by
	1,
	2
;

