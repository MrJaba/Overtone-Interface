goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{return [cljs.core.str("[crateGroup="),cljs.core.str(jayq.core.crate_meta.call(null,sel)),cljs.core.str("]")].join('');
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__13792){
var vec__13793__13794 = p__13792;
var context__13795 = cljs.core.nth.call(null,vec__13793__13794,0,null);
if(cljs.core.not.call(null,context__13795))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__13795);
}
};
var $ = function (sel,var_args){
var p__13792 = null;
if (goog.isDef(var_args)) {
  p__13792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__13792);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__13796){
var sel = cljs.core.first(arglist__13796);
var p__13792 = cljs.core.rest(arglist__13796);
return $__delegate(sel, p__13792);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3548__auto____13797 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3548__auto____13797))
{return or__3548__auto____13797;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__13798 = null;
var G__13798__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__13798__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__13798 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__13798__2.call(this,_,k);
case 3:
return G__13798__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13798;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__13799){
var vec__13800__13801 = p__13799;
var v__13802 = cljs.core.nth.call(null,vec__13800__13801,0,null);
var a__13803 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__13802))
{return $elem.attr(a__13803);
} else
{return $elem.attr(a__13803,v__13802);
}
};
var attr = function ($elem,a,var_args){
var p__13799 = null;
if (goog.isDef(var_args)) {
  p__13799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__13799);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__13804){
var $elem = cljs.core.first(arglist__13804);
var a = cljs.core.first(cljs.core.next(arglist__13804));
var p__13799 = cljs.core.rest(cljs.core.next(arglist__13804));
return attr__delegate($elem, a, p__13799);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__13805){
var vec__13806__13807 = p__13805;
var v__13808 = cljs.core.nth.call(null,vec__13806__13807,0,null);
var k__13809 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__13808))
{return $elem.data(k__13809);
} else
{return $elem.data(k__13809,v__13808);
}
};
var data = function ($elem,k,var_args){
var p__13805 = null;
if (goog.isDef(var_args)) {
  p__13805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__13805);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__13810){
var $elem = cljs.core.first(arglist__13810);
var k = cljs.core.first(cljs.core.next(arglist__13810));
var p__13805 = cljs.core.rest(cljs.core.next(arglist__13810));
return data__delegate($elem, k, p__13805);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__13811 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__13811);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__13812 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__13812);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__13813){
var vec__13814__13815 = p__13813;
var speed__13816 = cljs.core.nth.call(null,vec__13814__13815,0,null);
var on_finish__13817 = cljs.core.nth.call(null,vec__13814__13815,1,null);
return $elem.hide(speed__13816,on_finish__13817);
};
var hide = function ($elem,var_args){
var p__13813 = null;
if (goog.isDef(var_args)) {
  p__13813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__13813);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__13818){
var $elem = cljs.core.first(arglist__13818);
var p__13813 = cljs.core.rest(arglist__13818);
return hide__delegate($elem, p__13813);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__13819){
var vec__13820__13821 = p__13819;
var speed__13822 = cljs.core.nth.call(null,vec__13820__13821,0,null);
var on_finish__13823 = cljs.core.nth.call(null,vec__13820__13821,1,null);
return $elem.show(speed__13822,on_finish__13823);
};
var show = function ($elem,var_args){
var p__13819 = null;
if (goog.isDef(var_args)) {
  p__13819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__13819);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__13824){
var $elem = cljs.core.first(arglist__13824);
var p__13819 = cljs.core.rest(arglist__13824);
return show__delegate($elem, p__13819);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__13825){
var vec__13826__13827 = p__13825;
var speed__13828 = cljs.core.nth.call(null,vec__13826__13827,0,null);
var on_finish__13829 = cljs.core.nth.call(null,vec__13826__13827,1,null);
return $elem.fadeOut(speed__13828,on_finish__13829);
};
var fade_out = function ($elem,var_args){
var p__13825 = null;
if (goog.isDef(var_args)) {
  p__13825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__13825);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__13830){
var $elem = cljs.core.first(arglist__13830);
var p__13825 = cljs.core.rest(arglist__13830);
return fade_out__delegate($elem, p__13825);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__13831){
var vec__13832__13833 = p__13831;
var speed__13834 = cljs.core.nth.call(null,vec__13832__13833,0,null);
var on_finish__13835 = cljs.core.nth.call(null,vec__13832__13833,1,null);
return $elem.fadeIn(speed__13834,on_finish__13835);
};
var fade_in = function ($elem,var_args){
var p__13831 = null;
if (goog.isDef(var_args)) {
  p__13831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__13831);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__13836){
var $elem = cljs.core.first(arglist__13836);
var p__13831 = cljs.core.rest(arglist__13836);
return fade_in__delegate($elem, p__13831);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__13837){
var vec__13838__13839 = p__13837;
var speed__13840 = cljs.core.nth.call(null,vec__13838__13839,0,null);
var on_finish__13841 = cljs.core.nth.call(null,vec__13838__13839,1,null);
return $elem.slideUp(speed__13840,on_finish__13841);
};
var slide_up = function ($elem,var_args){
var p__13837 = null;
if (goog.isDef(var_args)) {
  p__13837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__13837);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__13842){
var $elem = cljs.core.first(arglist__13842);
var p__13837 = cljs.core.rest(arglist__13842);
return slide_up__delegate($elem, p__13837);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__13843){
var vec__13844__13845 = p__13843;
var speed__13846 = cljs.core.nth.call(null,vec__13844__13845,0,null);
var on_finish__13847 = cljs.core.nth.call(null,vec__13844__13845,1,null);
return $elem.slideDown(speed__13846,on_finish__13847);
};
var slide_down = function ($elem,var_args){
var p__13843 = null;
if (goog.isDef(var_args)) {
  p__13843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__13843);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__13848){
var $elem = cljs.core.first(arglist__13848);
var p__13843 = cljs.core.rest(arglist__13848);
return slide_down__delegate($elem, p__13843);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__13849){
var vec__13850__13851 = p__13849;
var v__13852 = cljs.core.nth.call(null,vec__13850__13851,0,null);
if(cljs.core.truth_(v__13852))
{return $elem.val(v__13852);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__13849 = null;
if (goog.isDef(var_args)) {
  p__13849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__13849);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__13853){
var $elem = cljs.core.first(arglist__13853);
var p__13849 = cljs.core.rest(arglist__13853);
return val__delegate($elem, p__13849);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__13854,content,callback){
var vec__13855__13856 = p__13854;
var method__13857 = cljs.core.nth.call(null,vec__13855__13856,0,null);
var uri__13858 = cljs.core.nth.call(null,vec__13855__13856,1,null);
var params__13859 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__13857)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__13858,params__13859);
});
