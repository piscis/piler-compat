(function(){var a,b;a="selected",b=function(){var b,c;return c=window.location.hash,console.log("adding to",$(c),"removing form",this),$("."+a).removeClass(a),b=$(c).next().addClass(a),setTimeout(function(){return b.removeClass(a)},500)},$(function(){return $(window).bind("hashchange",b),b()})}).call(this)