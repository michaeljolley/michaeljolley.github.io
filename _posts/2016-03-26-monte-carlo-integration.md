---
layout: post
title:  "Monte Carlo Integration"
comments: true
tags:
- machine learning
- stat
---

We want to calculate:

$$ \int_a^bf(x)dx $$

However, the function $f(x)$ may be hard to integrate. To approximate the result, we use Monte Carlo Integration. Let

$$ f(x) = g(x)h(x) $$

Now the original integration becomes:

$$ \int_a^bg(x)h(x)dx $$

If we think of $h(x)$ as a PDF (probability density function), does it look like calculating the expectation of $g(x)$?

$$ \mathbb{E}_{h}[g(x)] = \int_a^bg(x)h(x)dx $$

Now let $h(x)$ to be a distribution, and we sample some values from the distribution $x_i\sim h(x)$, then the integration can be approximated with:

$$\hat{G} = \frac{1}{N}\sum_{i=1}^{N}g(x_i)$$

And the $\hat{G}$ is the original integral. The reason why this method works is the law of large number. If we have enough samples, then the sample mean can approximate the true expectation.

For example, if we let $x_i\sim \mathrm{unif}(a,b)$, that is $h(x) = \frac{1}{b-a}$, $g(x) = (b-a)f(x)$, we can get an approximation $\hat{G}$ with some uniform sampling of $x$.

<!-- https://www.youtube.com/watch?v=MKnjsqYVG4Y&feature=iv&src_vid=TR0biDues7k&annotation_id=annotation_927935 -->
