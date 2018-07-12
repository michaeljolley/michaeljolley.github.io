---
layout: post
title:  "Submit Job to Cluster Using qsub"
comments: true
tags:
- cluster
---

First, create a shell script file. I usually call it `<jobname>.job`.

```sh
#!/bin/bash

# Merge stdout and stderr into one output file
#PBS -j oe

# Notify via email when the job starts/error/ends
#PBS -m abe
#PBS -M email@example.com

# Requested CPU time
#PBS -l walltime=100:00:00

# Requested # Nodes
#PBS -l nodes=2

# Run code like in local machine
cd /home/user/private
module load matlab-8.6
matlab -nosplash -nodisplay < model.m
```

Then run `qsub <jobname>.job` to submit the job to the cluster.