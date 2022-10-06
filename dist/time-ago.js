/*!
 *
 * Time ago, a simple jQuery plugin
 * Copyright (c) 2022 Rendiansyah <worteldzgn@gmail.com>
 * Thanks to all :)
 * 
 * Website: https://rendiansyah.com
 * Github: https://github.com/xxrbm
 * 
 * License under "MIT"
 * 
 */

!function($) {
	$.fn.timeago = function(options) {
		return this.each(function() {
			
			// the default parameters
			const defaults = {
				lang: 'en',
				justNow: true
			};
			
			const plugin = this;
			const el = $(this);
			
			// get the lang attribute
			let blog = $('html').attr('lang');
			
			// get "2022-10-03T04:22:28-07:00"
			let date = el.attr('datetime');
			
			// define vars
			let now;
			let sec;
			let min;
			let hour;
			let day;
			let week;
			let month;
			let year;
			
			let timeDate;
			
			// merge defaults and options
			plugin.settings = $.extend({}, defaults, options);
			
			// define vars
			const s = plugin.settings;
			
			timeDate = Date.now() - new Date(date).getTime();
			
			// the number of milliseconds by period
			let periods = {
				year: 12 * 30 * 24 * 60 * 60 * 1000,
				month: 30 * 24 * 60 * 60 * 1000,
				week: 7 * 24 * 60 * 60 * 1000,
				day: 24 * 60 * 60 * 1000,
				hours: 60 * 60 * 1000,
				minutes: 60 * 1000,
				seconds: 1000
			};
			
			// multi language by country
			switch (s.lang && blog) {
				
				// if "s.lang" is Indonesian
				case 'id':
					now = 'baru saja';
					sec = 'detik yang lalu';
					min = 'menit yang lalu';
					hour = 'jam yang lalu';
					day = 'hari yang lalu';
					week = 'minggu yang lalu';
					month = 'bulan yang lalu';
					year = 'tahun yang lalu';
				break;
				
				// the default "s.lang" is English
				default:
					now = 'just now';
					sec = 'seconds ago';
					min = 'minutes ago';
					hour = 'hours ago';
					day = 'days ago';
					week = 'weeks ago';
					month = 'months ago';
					year = 'years ago';
				
			}
			
			// for each element
			el.text(function() {
				
				// if define in years
				if (timeDate > periods.year) {
					
					return Math.floor(timeDate / periods.year) + ' ' + year;
					
				// if define in month
				} else if (timeDate > periods.month) {
					
					return Math.floor(timeDate / periods.month) + ' ' + month;
					
				// if define in weeks
				} else if (timeDate > periods.week) {
					
					return Math.floor(timeDate / periods.week) + ' ' + week;
					
				// if define in days
				} else if (timeDate > periods.day) {
					
					return Math.floor(timeDate / periods.day) + ' ' + day;
					
				// if define in hours
				} else if (timeDate > periods.hours) {
					
					return Math.floor(timeDate / periods.hours) + ' ' + hour;
					
				// if define in minutes
				} else if (timeDate > periods.minutes) {
					
					return Math.floor(timeDate / periods.minutes) + ' ' + min;
					
				} else {
					
					// if "s.justNow" is true
					if (s.justNow) {
						
						// define in text
						return now;
						
					} else {
						
						// define in seconds
						return Math.floor(timeDate / periods.seconds) + ' ' + sec;
						
					}
					
				}
				
			})
			
		})
	}
}(jQuery);