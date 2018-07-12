---
layout: post
title:  "Run Matlab from CLI"
comments: true
tags:
- matlab
- cluster
---

There are many ways to do this

```sh
matlab -nosplash -nodisplay -r source_code
```

Here, the `source_code` this the filename of the source file. Don't include the suffix `.m`. 


```sh
matlab -nosplash -nodisplay < source_code.m > output.log
```

Some people suggest:

```sh
matlab -nosplash -nodisplay -r "run('source_code.m')"
```

This method leads to error in some parallel case. Don't use it.