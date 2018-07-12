# TIL

> Today I Learned

I got this idea from a very popular project [TIL](https://github.com/jbranchaud/til). It is *soooo true* that many of things I learned are too short to warrant a blog (that's part of the reasons why I don't update my blog for quite a long while). However, it is really necessary to write things down, because I always find m yself google the same things again and again.  

Unlike the original TIL project, which focus more on the languages and technologies, my TILs may contain some math equations, which makes pure Github Markdown insufficient. Therefore, I setup this website. All the snippets will go into `_posts`, and will be properly tagged. People who are interested can go to <http://codinfox.github.io/TIL/> to see the snippets.

### Some maintenance issues (TIL#1)

I am using the template called [simplest](https://github.com/nandomoreirame/simplest) developed by [Fernando Moreira](https://github.com/nandomoreirame). This template makes use of [bourbon](http://bourbon.io/).

In `assets/scss/main.scss`, it starts like this:

```scss
@import "bourbon";
```

However, Github doesn't support bourbon. To make things work, I installed bourbon inside `scss` folder and update the `assets/scss/main.scss` to:

```scss
@import "bourbon/bourbon";
```

But I don't see a reason why I should not use `@import "bourbon/bourbon";`, even if I write RoR (according to bourbon official documentation, the former usage is preferred when developing RoR).

## License

The original software is copyright Fernando Moreira and licensed under MIT License. The original license:

```
The MIT License (MIT)

Copyright (c) 2015 Fernando Moreira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

The modification is copyright [codinfox](http://codinfox.github.io) and is still under MIT license.