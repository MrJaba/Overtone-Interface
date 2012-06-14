goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__4770__4771 = route;
var m__4772 = cljs.core.nth.call(null,vec__4770__4771,0,null);
var u__4773 = cljs.core.nth.call(null,vec__4770__4771,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__4772),u__4773]);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__4774 = fetch.util.clj__GT_js.call(null,d);
var query__4775 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__4774)));
return [cljs.core.str(query__4775)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__4776 = req.getResponseText();
return callback.call(null,data__4776);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__4777){
var vec__4778__4779 = p__4777;
var opts__4780 = cljs.core.nth.call(null,vec__4778__4779,0,null);
var req__4782 = (new goog.net.XhrIo());
var vec__4781__4783 = fetch.core.parse_route.call(null,route);
var method__4784 = cljs.core.nth.call(null,vec__4781__4783,0,null);
var uri__4785 = cljs.core.nth.call(null,vec__4781__4783,1,null);
var data__4786 = fetch.core.__GT_data.call(null,content);
var callback__4787 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__4787))
{goog.events.listen.call(null,req__4782,goog.net.EventType.COMPLETE,(function (){
return callback__4787.call(null,req__4782);
}));
} else
{}
return req__4782.send(uri__4785,method__4784,data__4786,(cljs.core.truth_(opts__4780)?fetch.util.clj__GT_js.call(null,opts__4780):null));
};
var xhr = function (route,content,callback,var_args){
var p__4777 = null;
if (goog.isDef(var_args)) {
  p__4777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__4777);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__4788){
var route = cljs.core.first(arglist__4788);
var content = cljs.core.first(cljs.core.next(arglist__4788));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4788)));
var p__4777 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4788)));
return xhr__delegate(route, content, callback, p__4777);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
