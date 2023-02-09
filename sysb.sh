#!/bin/bash
sysbench cpu --threads=1 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T001.txt
sysbench cpu --threads=8 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T008.txt
sysbench cpu --threads=12 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T012.txt
sysbench cpu --threads=16 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T016.txt
sysbench cpu --threads=32 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T032.txt
sysbench cpu --threads=64 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T064.txt
sysbench cpu --threads=128 run > /tmp/sysbRes/`hostname`_sysbench1_CPU_T128.txt
sysbench memory run > /tmp/sysbRes/`hostname`_sysbench1_MEM000.txt
sysbench memory --memory-total-size=200G run > /tmp/sysbRes/`hostname`_sysbench1_MEM200.txt
sysbench fileio --file-test-mode=seqwr run > /tmp/sysbRes/`hostname`_sysbench1_FIO2.txt
sysbench cpu --threads=1 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T001.txt
sysbench cpu --threads=8 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T008.txt
sysbench cpu --threads=12 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T012.txt
sysbench cpu --threads=16 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T016.txt
sysbench cpu --threads=32 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T032.txt
sysbench cpu --threads=64 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T064.txt
sysbench cpu --threads=128 run > /tmp/sysbRes/`hostname`_sysbench2_CPU_T128.txt
sysbench memory run > /tmp/sysbRes/`hostname`_sysbench2_MEM000.txt
sysbench memory --memory-total-size=200G run > /tmp/sysbRes/`hostname`_sysbench2_MEM200.txt
sysbench fileio --file-test-mode=seqwr run > /tmp/sysbRes/`hostname`_sysbench2_FIO2.txt
sysbench cpu --threads=1 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T001.txt
sysbench cpu --threads=8 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T008.txt
sysbench cpu --threads=12 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T012.txt
sysbench cpu --threads=16 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T016.txt
sysbench cpu --threads=32 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T032.txt
sysbench cpu --threads=64 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T064.txt
sysbench cpu --threads=128 run > /tmp/sysbRes/`hostname`_sysbench3_CPU_T128.txt
sysbench memory run > /tmp/sysbRes/`hostname`_sysbench3_MEM000.txt
sysbench memory --memory-total-size=200G run > /tmp/sysbRes/`hostname`_sysbench3_MEM200.txt
sysbench fileio --file-test-mode=seqwr run > /tmp/sysbRes/`hostname`_sysbench3_FIO2.txt
time 7z b > /tmp/sysbRes/`hostname`_7zip1_B.txt
