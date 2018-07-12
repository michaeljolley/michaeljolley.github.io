---
layout: post
title:  "Correlation and R-Squared"
comments: true
tags:
- stat
---

## R-Squared

$R^2$ ([coefficient of determination](https://en.wikipedia.org/wiki/Coefficient_of_determination)) indicates how well data fit a statistical model. It is defined as:

$$R^2=1-\frac{\sum_{i=1}^{n}\left(y_i-f_i\right)^2}{\sum_{i=1}^{n}\left(y_i-\bar{y}\right)^2}$$

where $f_i$ is the predicted value, $\bar{y}$ is the mean value of data. The result is between 0 and 1. 1 is perfectly good, 0 is horribly bad.


## Pearson Correlation

Pearson correlation coefficient is a measure of linear correlation between two variables. It is defined as:

$$\rho_{X,Y}=\frac{\mathrm{cov}(X,Y)}{\sigma_X\sigma_Y}$$

## R-Squared and Squared Correlation

In optimal models, $R^2$ is the square of the correlation between the true and predicted outcomes. That is:

$$R^2=\rho=\frac{\frac{1}{n}\sum_{i=1}^{n}\left(f_i-\bar{f}\right)\left(y_i-\bar{y}\right)}{\sqrt{\left(\frac{1}{n}\sum_{i=1}^{n}\left(f_i-\bar{f}\right)^2\right)\left(\frac{1}{n}\sum_{i=1}^{n}\left(y_i-\bar{y}\right)^2\right)}}$$

Detailed derivation: <http://www.win-vector.com/blog/2011/11/correlation-and-r-squared/> ([Pocket Mirror](https://getpocket.com/a/read/300167730)).