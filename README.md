# Time Ago

## Instructions

add the Time Ago plugin in the body of your page

```
/*!
 *
 * Time Ago, a simple jQuery plugin
 * Copyright (c) 2022 Rendiansyah <worteldzgn@gmail.com>
 * Thanks to all :)
 * 
 * Website: https://rendiansyah.com
 * Github: https://github.com/xxrbm
 * 
 * License under "MIT".
 * 
 * /
 
!function(a){a.fn.timeago=function(t){return this.each(function(){const e=a(this);let n,o,l,s,u,g,i,r,h,f=a("html").attr("lang"),c=e.attr("datetime");this.settings=a.extend({},{lang:"en",justNow:!0},t);const y=this.settings;h=Date.now()-new Date(c).getTime();let m=31104e6,d=2592e6,w=6048e5,M=864e5,j=36e5,b=6e4,k=1e3;switch(y.lang&&f){case"id":n="baru saja",o="detik yang lalu",l="menit yang lalu",s="jam yang lalu",u="hari yang lalu",g="minggu yang lalu",i="bulan yang lalu",r="tahun yang lalu";break;default:n="just now",o="seconds ago",l="minutes ago",s="hours ago",u="days ago",g="weeks ago",i="months ago",r="years ago"}e.text(function(){return h>m?Math.floor(h/m)+" "+r:h>d?Math.floor(h/d)+" "+i:h>w?Math.floor(h/w)+" "+g:h>M?Math.floor(h/M)+" "+u:h>j?Math.floor(h/j)+" "+s:h>b?Math.floor(h/b)+" "+l:y.justNow?n:Math.floor(h/k)+" "+o})})}}(jQuery);
```

### Usage

```
$("time").timeago();
```

or

```
$("[datetime]").timeago();
```

### Example:

```
$(document).ready(function(){

    $("time").timeago({
        lang: 'en',
        jutstNow: true
    });

});
```

#### Options

<ul>
<li>lang: "en / id"
<br/>a default language is English</li>
<li>justNow: boolean
<br/>true will display the text "just now". false displays in seconds</li>
</ul>
