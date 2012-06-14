goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__13860 = {};
var G__13861__13862 = cljs.core.seq.call(null,m);
if(cljs.core.truth_(G__13861__13862))
{var G__13864__13866 = cljs.core.first.call(null,G__13861__13862);
var vec__13865__13867 = G__13864__13866;
var k__13868 = cljs.core.nth.call(null,vec__13865__13867,0,null);
var v__13869 = cljs.core.nth.call(null,vec__13865__13867,1,null);
var G__13861__13870 = G__13861__13862;
var G__13864__13871 = G__13864__13866;
var G__13861__13872 = G__13861__13870;
while(true){
var vec__13873__13874 = G__13864__13871;
var k__13875 = cljs.core.nth.call(null,vec__13873__13874,0,null);
var v__13876 = cljs.core.nth.call(null,vec__13873__13874,1,null);
var G__13861__13877 = G__13861__13872;
(out__13860[cljs.core.name.call(null,k__13875)] = v__13876);
var temp__3698__auto____13878 = cljs.core.next.call(null,G__13861__13877);
if(cljs.core.truth_(temp__3698__auto____13878))
{var G__13861__13879 = temp__3698__auto____13878;
{
var G__13880 = cljs.core.first.call(null,G__13861__13879);
var G__13881 = G__13861__13879;
G__13864__13871 = G__13880;
G__13861__13872 = G__13881;
continue;
}
} else
{}
break;
}
} else
{}
return out__13860;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__13882 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__13882);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13883){
var v = cljs.core.first(arglist__13883);
var text = cljs.core.rest(arglist__13883);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
