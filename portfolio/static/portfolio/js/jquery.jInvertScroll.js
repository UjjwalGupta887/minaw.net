!function(t){"use strict";t.jInvertScroll=function(o,i){var n=t.extend({width:"auto",height:"auto",onScroll:function(t){}},i);if(!("Object"==typeof o&&o.length>0)){var e,c,h,r=[],u=0;return d(),a(),{reinitialize:function(){d(),a()},destroy:function(){t("body").attr("style",""),t(window).off("scroll resize",l),t([document,window]).off("ready resize",f)}}}function d(){t.each(o,function(o,i){t(i).each(function(o){r.push(t(this));var i=t(this).width();u<i&&(u=i)})}),"auto"==n.width&&(n.width=u),"auto"==n.height&&(n.height=u),t("body").css("height",n.height+"px")}function f(){e=t(document).height(),c=t(window).height(),h=t(window).width()}function l(o){var i=t(this).scrollTop();f();var u=e-c,d=0;0!=u&&(d=(i/u).toFixed(4)),"function"==typeof n.onScroll&&n.onScroll.call(this,d),t.each(r,function(t,o){var i=o.width()-h;i<=0&&(i=o.width());var n=-1*Math.floor(i*d);o.css("left",n)})}function a(){t(window).on("scroll resize",l),t([document,window]).on("ready resize",f)}}}(jQuery);