goog.provide('fetch.util');
goog.require('cljs.core');
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
fetch.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__4789){
var vec__4790__4791 = p__4789;
var k__4792 = cljs.core.nth.call(null,vec__4790__4791,0,null);
var v__4793 = cljs.core.nth.call(null,vec__4790__4791,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__4792),clj__GT_js.call(null,v__4793));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
