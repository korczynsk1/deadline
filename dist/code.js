!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=122)}({0:function(t,e,n){"use strict";function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}n.d(e,"a",(function(){return a}))},1:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var a=n(0);function r(t){Object(a.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},10:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(2),r=n(1),i=n(6),o=n(0);function u(t,e){Object(o.a)(1,arguments);var n=Object(r.default)(t,e),u=n.getUTCFullYear(),c=e||{},s=c.locale,d=s&&s.options&&s.options.firstWeekContainsDate,f=null==d?1:Object(a.a)(d),l=null==c.firstWeekContainsDate?f:Object(a.a)(c.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(u+1,0,l),m.setUTCHours(0,0,0,0);var h=Object(i.a)(m,e),g=new Date(0);g.setUTCFullYear(u,0,l),g.setUTCHours(0,0,0,0);var b=Object(i.a)(g,e);return n.getTime()>=h.getTime()?u+1:n.getTime()>=b.getTime()?u:u-1}},12:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(1),r=n(0);function i(t){Object(r.a)(1,arguments);var e=Object(a.default)(t);return e.setHours(0,0,0,0),e}},122:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0);function i(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),i=Object(a.default)(e),o=n.getTime()-i.getTime();return o<0?-1:o>0?1:o}var o=n(29);function u(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),u=Object(a.default)(e),c=i(n,u),s=Math.abs(Object(o.default)(n,u));n.setMonth(n.getMonth()-c*s);var d=i(n,u)===-c,f=c*(s-d);return 0===f?0:f}function c(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),i=Object(a.default)(e);return n.getTime()-i.getTime()}function s(t,e){Object(r.a)(2,arguments);var n=c(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var d=n(15),f=n(27);function l(t){return Object(f.a)({},t)}var m=n(8);function h(t,e,n){Object(r.a)(2,arguments);var o=n||{},c=o.locale||d.a;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var f=i(t,e);if(isNaN(f))throw new RangeError("Invalid time value");var h,g,b=l(o);b.addSuffix=Boolean(o.addSuffix),b.comparison=f,f>0?(h=Object(a.default)(e),g=Object(a.default)(t)):(h=Object(a.default)(t),g=Object(a.default)(e));var w,v=s(g,h),y=(Object(m.a)(g)-Object(m.a)(h))/1e3,p=Math.round((v-y)/60);if(p<2)return o.includeSeconds?v<5?c.formatDistance("lessThanXSeconds",5,b):v<10?c.formatDistance("lessThanXSeconds",10,b):v<20?c.formatDistance("lessThanXSeconds",20,b):v<40?c.formatDistance("halfAMinute",null,b):v<60?c.formatDistance("lessThanXMinutes",1,b):c.formatDistance("xMinutes",1,b):0===p?c.formatDistance("lessThanXMinutes",1,b):c.formatDistance("xMinutes",p,b);if(p<45)return c.formatDistance("xMinutes",p,b);if(p<90)return c.formatDistance("aboutXHours",1,b);if(p<1440){var O=Math.round(p/60);return c.formatDistance("aboutXHours",O,b)}if(p<2520)return c.formatDistance("xDays",1,b);if(p<43200){var D=Math.round(p/1440);return c.formatDistance("xDays",D,b)}if(p<86400)return w=Math.round(p/43200),c.formatDistance("aboutXMonths",w,b);if((w=u(g,h))<12){var T=Math.round(p/43200);return c.formatDistance("xMonths",T,b)}var j=w%12,M=Math.floor(w/12);return j<3?c.formatDistance("aboutXYears",M,b):j<9?c.formatDistance("overXYears",M,b):c.formatDistance("almostXYears",M+1,b)}function g(t){return Object(r.a)(1,arguments),Object(a.default)(t).getTime()<Date.now()}var b=n(30);var w=n(45),v=n(44),y=n(22),p=n(55);const O=t=>{const e=(()=>{let t=figma.createComponent();return t.name="Frame Deadline",t.resize(320,60),t.x=-320,t.constrainProportions=!0,t})(),n=(()=>{const t=figma.createRectangle();return t.name="Frame Deadline Background",t.resize(320,60),t.fills=[{type:"SOLID",color:{r:48/255,g:245/255,b:234/255}}],t.cornerRadius=4,t.topRightRadius=0,t.bottomRightRadius=0,t.constraints={horizontal:"MIN",vertical:"MIN"},t})(),a=(({startDate:t})=>{const e=figma.createText();return e.resize(320,30),e.textAlignHorizontal="CENTER",e.textAlignVertical="CENTER",e.textCase="UPPER",e.fills=[{type:"SOLID",color:{r:0,g:0,b:0}}],e.fontName={family:"Roboto",style:"Bold"},e.fontSize=20,e.constraints={horizontal:"MIN",vertical:"MIN"},e.characters=h(new Date(""+t),new Date,{addSuffix:!0}),e.strokeWeight=.5,e.strokes=[{type:"SOLID",color:{r:1,g:1,b:1}}],e.name="Frame Deadline Text",e.setPluginData("deadline-date",t),e})(t),r=(({startDate:t})=>{const e=figma.createText();return e.resize(320,30),e.textAlignHorizontal="CENTER",e.textAlignVertical="CENTER",e.textCase="UPPER",e.fills=[{type:"SOLID",color:{r:0,g:0,b:0}}],e.fontName={family:"Roboto",style:"Bold"},e.fontSize=20,e.strokeWeight=.5,e.strokes=[{type:"SOLID",color:{r:1,g:1,b:1}}],e.constraints={horizontal:"MIN",vertical:"MIN"},e.characters=Object(p.default)(new Date(""+t),"Pp"),e.name="Frame Deadline Date Text",e.setPluginData("deadline-date",t),e.y=30,e})(t),i=figma.group([n,a,r],e);return i.name="Frame Deadline Status",i.resize(320,60),i.x=0,e.insertChild(0,i),e};var D=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function u(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,u)}c((a=a.apply(t,e||[])).next())}))};figma.loadFontAsync({family:"Roboto",style:"Regular"}),figma.loadFontAsync({family:"Roboto",style:"Bold"});figma.showUI(__html__,{visible:!1}),figma.notify("Select frame or click on right panel Create Sample button");const T=()=>figma.currentPage.selection[0]&&"FRAME"===figma.currentPage.selection[0].type;if(figma.currentPage.setRelaunchData({sample:"Create sample frame",open:"",refresh:""}),"edit"===figma.command){figma.createFrame();figma.closePlugin()}if("open"===figma.command){console.log("START PLUGIN");let t=figma.currentPage.children.filter(t=>"FRAME"===t.type);if(0===t.length){let e=figma.createFrame();figma.currentPage.appendChild(e),t=[e]}figma.showUI(__html__,{width:340,height:385}),T()?figma.ui.postMessage({id:figma.currentPage.selection[0].id,name:figma.currentPage.selection[0].name}):(figma.currentPage.selection=[t[0]],figma.ui.postMessage({id:t[0].id,name:t[0].name}))}"cancel"===figma.command&&(console.log("DISABLE WINDOW"),figma.closePlugin());const j=()=>D(void 0,void 0,void 0,(function*(){yield figma.loadFontAsync({family:"Roboto",style:"Regular"}),yield figma.loadFontAsync({family:"Roboto",style:"Bold"})})),M=()=>{const t=figma.currentPage.findAll(t=>"Frame Deadline Text"===t.name);console.log("deadlines",t.map(t=>{const e=t.getPluginData("deadline-date");if(t.characters=h(new Date(""+e),new Date,{addSuffix:!0}),g(new Date(""+e))){const e=t.parent.findOne(t=>"Frame Deadline Background"===t.name);"RECTANGLE"===e.type&&(e.fills=[{type:"SOLID",color:{r:251/255,g:132/255,b:132/255}}])}return e})),figma.currentPage.setPluginData("deadline-update",(new Date).toDateString())};"refresh"===figma.command&&j().then(()=>{M()}),(!figma.currentPage.getPluginData("deadline-update")||function(t,e){Object(r.a)(2,arguments);var n=c(t,e)/36e5;return n>0?Math.floor(n):Math.ceil(n)}(new Date(""+figma.currentPage.getPluginData("deadline-update")),new Date)>1)&&j().then(()=>{const t=figma.currentPage.findAll(t=>"Frame Deadline Text"===t.name);console.log("deadlines",t.map(t=>{const e=t.getPluginData("deadline-date");if(t.characters=h(new Date(""+e),new Date,{addSuffix:!0}),g(new Date(""+e))){const e=t.parent.findOne(t=>"Frame Deadline Background"===t.name);"RECTANGLE"===e.type&&(e.fills=[{type:"SOLID",color:{r:251/255,g:132/255,b:132/255}}])}return e})),console.log("DEADLINES UPDATED"),figma.currentPage.setPluginData("deadline-update",(new Date).toDateString())});const P=()=>{const t=[],e=[],n=[],a=[],i=[],o=figma.currentPage.findAll(t=>"Frame Deadline Text"===t.name);return console.log("countDeadlines",o),o.forEach(o=>{const u=o.getPluginData("deadline-date");g(new Date(""+u))?t.push(u):!function(t){return Object(r.a)(1,arguments),Object(b.default)(t,Date.now())}(new Date(""+u))?Object(w.default)(new Date(""+u),Object(v.default)(Object(y.default)(new Date,3)))?n.push(u):Object(w.default)(new Date(""+u),Object(v.default)(Object(y.default)(new Date,7)))?a.push(u):i.push(u):e.push(u)}),`\n      <div>\n        <h3>Past: ${t.length}</h3>\n        <h3>Today: ${e.length}</h3>\n        <h3>In 3 days: ${n.length}</h3>\n        <h3>In week: ${a.length}</h3>\n        <h3>Future: ${i.length}</h3>\n      </div>\n    `};M(),"stats"===figma.command&&figma.showUI(`<div>\n  <h1>Deadlines statistics:</h1>\n  ${P()}\n</div>`,{width:200,height:320}),figma.ui.onmessage=t=>{switch(t.type){case"save":const e=JSON.parse(t.value);figma.notify(`Saved deadline ${h(new Date,new Date(""+e.startDate))} for frame ${e.frame.name}`);const n=O(e);figma.currentPage.selection=[figma.currentPage.children.find(t=>"FRAME"===t.type&&t.id===e.frame.id)],figma.currentPage.selection.map(t=>{t.clipsContent=!1,t.appendChild(n)}),figma.closePlugin();break;case"cancel":console.log("DISABLE WINDOW"),figma.closePlugin()}M()},figma.on("selectionchange",()=>{T()&&(figma.currentPage.selection[0].setRelaunchData({sample:"Create sample frame",open:"",refresh:"",stats:""}),figma.showUI(__html__,{width:340,height:385}),figma.ui.postMessage({id:figma.currentPage.selection[0].id,name:figma.currentPage.selection[0].name}))})},13:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(2),r=n(1),i=n(0);function o(t,e){Object(i.a)(2,arguments);var n=Object(r.default)(t).getTime(),o=Object(a.a)(e);return new Date(n+o)}},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(1),r=n(7),i=n(0);function o(t){Object(i.a)(1,arguments);var e=Object(a.default)(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var u=Object(r.a)(o),c=new Date(0);c.setUTCFullYear(n,0,4),c.setUTCHours(0,0,0,0);var s=Object(r.a)(c);return e.getTime()>=u.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}},15:function(t,e,n){"use strict";var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}var i={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,c=r.width?String(r.width):t.defaultWidth;a=t.values[c]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return function(e,n){var a=String(e),r=n||{},i=r.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=a.match(o);if(!u)return null;var c,s=u[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(d,(function(t){return t.test(s)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(d,(function(t){return t.test(s)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(s.length)}}}var s,d={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:function(t,e,n,a){return o[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),a=e||{},r=n.match(s.matchPattern);if(!r)return null;var i=r[0],o=n.match(s.parsePattern);if(!o)return null;var u=s.valueCallback?s.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.a=d},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(2),r=n(13),i=n(0);function o(t,e){Object(i.a)(2,arguments);var n=Object(a.a)(e);return Object(r.a)(t,-n)}},17:function(t,e,n){"use strict";function a(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function r(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var i={p:r,P:function(t,e){var n,i=t.match(/(P+)(p+)?/),o=i[1],u=i[2];if(!u)return a(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",a(o,e)).replace("{{time}}",r(u,e))}};e.a=i},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(1),r=n(7),i=n(14),o=n(0);function u(t){Object(o.a)(1,arguments);var e=Object(i.a)(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=Object(r.a)(n);return a}function c(t){Object(o.a)(1,arguments);var e=Object(a.default)(t),n=Object(r.a)(e).getTime()-u(e).getTime();return Math.round(n/6048e5)+1}},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(1),r=n(6),i=n(2),o=n(10),u=n(0);function c(t,e){Object(u.a)(1,arguments);var n=e||{},a=n.locale,c=a&&a.options&&a.options.firstWeekContainsDate,s=null==c?1:Object(i.a)(c),d=null==n.firstWeekContainsDate?s:Object(i.a)(n.firstWeekContainsDate),f=Object(o.a)(t,e),l=new Date(0);l.setUTCFullYear(f,0,d),l.setUTCHours(0,0,0,0);var m=Object(r.a)(l,e);return m}function s(t,e){Object(u.a)(1,arguments);var n=Object(a.default)(t),i=Object(r.a)(n,e).getTime()-c(n,e).getTime();return Math.round(i/6048e5)+1}},2:function(t,e,n){"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return a}))},21:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(1),r=n(0);function i(t){Object(r.a)(1,arguments);var e=Object(a.default)(t);return!isNaN(e)}},22:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var a=n(2),r=n(1),i=n(0);function o(t,e){Object(i.a)(2,arguments);var n=Object(r.default)(t),o=Object(a.a)(e);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}},27:function(t,e,n){"use strict";function a(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}n.d(e,"a",(function(){return a}))},29:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(1),r=n(0);function i(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),i=Object(a.default)(e),o=n.getFullYear()-i.getFullYear(),u=n.getMonth()-i.getMonth();return 12*o+u}},30:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(12),r=n(0);function i(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),i=Object(a.default)(e);return n.getTime()===i.getTime()}},44:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(1),r=n(0);function i(t){Object(r.a)(1,arguments);var e=Object(a.default)(t);return e.setHours(23,59,59,999),e}},45:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n(1),r=n(0);function i(t,e){Object(r.a)(2,arguments);var n=Object(a.default)(t),i=Object(a.default)(e);return n.getTime()<i.getTime()}},55:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var a=n(21),r=n(15),i=n(16),o=n(1);function u(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var c={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return u("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):u(n+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return u(Math.floor(a*Math.pow(10,n-3)),e.length)}},s=n(0);var d=n(18),f=n(14),l=n(19),m=n(10),h="midnight",g="noon",b="morning",w="afternoon",v="evening",y="night";function p(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+u(i,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+u(Math.abs(t)/60,2):D(t,e)}function D(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+u(Math.floor(r/60),2)+n+u(r%60,2)}var T={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return c.y(t,e)},Y:function(t,e,n,a){var r=Object(m.a)(t,a),i=r>0?r:1-r;return"YY"===e?u(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):u(i,e.length)},R:function(t,e){return u(Object(f.a)(t),e.length)},u:function(t,e){return u(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return c.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=Object(l.a)(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):u(r,e.length)},I:function(t,e,n){var a=Object(d.a)(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):c.d(t,e)},D:function(t,e,n){var a=function(t){Object(s.a)(1,arguments);var e=Object(o.default)(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return u(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return u(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return u(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?g:0===r?h:r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?v:r>=12?w:r>=4?b:y,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return c.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):c.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):c.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):c.s(t,e)},S:function(t,e){return c.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return O(r);case"XXXX":case"XX":return D(r);case"XXXXX":case"XXX":default:return D(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(r);case"xxxx":case"xx":return D(r);case"xxxxx":case"xxx":default:return D(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+p(r,":");case"OOOO":default:return"GMT"+D(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+p(r,":");case"zzzz":default:return"GMT"+D(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return u(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return u((a._originalDate||t).getTime(),e.length)}},j=n(17),M=n(8),P=n(9),x=n(2),C=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,S=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,k=/^'([^]*?)'?$/,U=/''/g,E=/[a-zA-Z]/;function N(t,e,n){Object(s.a)(2,arguments);var u=String(e),c=n||{},d=c.locale||r.a,f=d.options&&d.options.firstWeekContainsDate,l=null==f?1:Object(x.a)(f),m=null==c.firstWeekContainsDate?l:Object(x.a)(c.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=d.options&&d.options.weekStartsOn,g=null==h?0:Object(x.a)(h),b=null==c.weekStartsOn?g:Object(x.a)(c.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var w=Object(o.default)(t);if(!Object(a.default)(w))throw new RangeError("Invalid time value");var v=Object(M.a)(w),y=Object(i.a)(w,v),p={firstWeekContainsDate:m,weekStartsOn:b,locale:d,_originalDate:w},O=u.match(S).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,j.a[e])(t,d.formatLong,p):t})).join("").match(C).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return W(n);var r=T[a];if(r)return!c.useAdditionalWeekYearTokens&&Object(P.b)(n)&&Object(P.c)(n,e,t),!c.useAdditionalDayOfYearTokens&&Object(P.a)(n)&&Object(P.c)(n,e,t),r(y,n,d.localize,p);if(a.match(E))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return O}function W(t){return t.match(k)[1].replace(U,"'")}},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(2),r=n(1),i=n(0);function o(t,e){Object(i.a)(1,arguments);var n=e||{},o=n.locale,u=o&&o.options&&o.options.weekStartsOn,c=null==u?0:Object(a.a)(u),s=null==n.weekStartsOn?c:Object(a.a)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Object(r.default)(t),f=d.getUTCDay(),l=(f<s?7:0)+f-s;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(1),r=n(0);function i(t){Object(r.a)(1,arguments);var e=1,n=Object(a.default)(t),i=n.getUTCDay(),o=(i<e?7:0)+i-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}},8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));function a(t){return t.getTime()%6e4}function r(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+a(e))%6e4:a(e))}},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));var a=["D","DD"],r=["YY","YYYY"];function i(t){return-1!==a.indexOf(t)}function o(t){return-1!==r.indexOf(t)}function u(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}}});