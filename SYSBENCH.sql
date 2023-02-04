drop table sysbench ;

CREATE TABLE "sysbench" (
	"id" SERIAL,
	"file_name" VARCHAR(100),
	"total_time" numeric (40,20),
	"total_events" numeric (40,20),
	"latency_min" numeric (40,20),
	"latency_avg" numeric (40,20),
	"latency_max" numeric (40,20),
	"p95" numeric (40,20),
	"latency_sum" numeric (40,20),
	"threads_events_avg" numeric (40,20),
	"threads_events_stddev" numeric (40,20),
	"threads_exectime_avg" numeric (40,20),
	"threads_exectime_stddev" numeric (40,20),
	"controller" VARCHAR(100),
	"sysbench" numeric (40,20),
	"test_type" VARCHAR(100),
	"test_kind" VARCHAR(100),
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
controller, sysbench, test_type, test_kind, *
from sysbench s 
;

select controller, count(*)
from sysbench
group by controller
order by 1      
;


truncate sysbench ; 