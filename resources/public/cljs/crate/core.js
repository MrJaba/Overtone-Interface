goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http://www.w3.org/1999/xhtml","\uFDD0'svg":"http://www.w3.org/2000/svg"});
void 0;
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__13702__13703 = cljs.core.seq.call(null,attrs);
if(cljs.core.truth_(G__13702__13703))
{var G__13705__13707 = cljs.core.first.call(null,G__13702__13703);
var vec__13706__13708 = G__13705__13707;
var k__13709 = cljs.core.nth.call(null,vec__13706__13708,0,null);
var v__13710 = cljs.core.nth.call(null,vec__13706__13708,1,null);
var G__13702__13711 = G__13702__13703;
var G__13705__13712 = G__13705__13707;
var G__13702__13713 = G__13702__13711;
while(true){
var vec__13714__13715 = G__13705__13712;
var k__13716 = cljs.core.nth.call(null,vec__13714__13715,0,null);
var v__13717 = cljs.core.nth.call(null,vec__13714__13715,1,null);
var G__13702__13718 = G__13702__13713;
dom_attr.call(null,elem,k__13716,v__13717);
var temp__3698__auto____13719 = cljs.core.next.call(null,G__13702__13718);
if(cljs.core.truth_(temp__3698__auto____13719))
{var G__13702__13720 = temp__3698__auto____13719;
{
var G__13721 = cljs.core.first.call(null,G__13702__13720);
var G__13722 = G__13702__13720;
G__13705__13712 = G__13721;
G__13702__13713 = G__13722;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
dom_attr.cljs$lang$arity$2 = dom_attr__2;
dom_attr.cljs$lang$arity$3 = dom_attr__3;
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__13723__13724 = cljs.core.seq.call(null,content);
if(cljs.core.truth_(G__13723__13724))
{var c__13725 = cljs.core.first.call(null,G__13723__13724);
var G__13723__13726 = G__13723__13724;
while(true){
var child__13727 = (((c__13725 == null))?null:((cljs.core.map_QMARK_.call(null,c__13725))?(function(){throw "Maps cannot be used as content"})():((cljs.core.string_QMARK_.call(null,c__13725))?goog.dom.createTextNode.call(null,c__13725):((cljs.core.vector_QMARK_.call(null,c__13725))?crate.core.elem_factory.call(null,c__13725):((cljs.core.seq_QMARK_.call(null,c__13725))?as_content.call(null,parent,c__13725):(cljs.core.truth_(c__13725.nodeName)?c__13725:null))))));
if(cljs.core.truth_(child__13727))
{goog.dom.appendChild.call(null,parent,child__13727);
} else
{}
var temp__3698__auto____13728 = cljs.core.next.call(null,G__13723__13726);
if(cljs.core.truth_(temp__3698__auto____13728))
{var G__13723__13729 = temp__3698__auto____13728;
{
var G__13730 = cljs.core.first.call(null,G__13723__13729);
var G__13731 = G__13723__13729;
c__13725 = G__13730;
G__13723__13726 = G__13731;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__13733){
var vec__13734__13735 = p__13733;
var tag__13736 = cljs.core.nth.call(null,vec__13734__13735,0,null);
var content__13737 = cljs.core.nthnext.call(null,vec__13734__13735,1);
if(cljs.core.not.call(null,(function (){var or__3548__auto____13738 = cljs.core.keyword_QMARK_.call(null,tag__13736);
if(or__3548__auto____13738)
{return or__3548__auto____13738;
} else
{var or__3548__auto____13739 = cljs.core.symbol_QMARK_.call(null,tag__13736);
if(or__3548__auto____13739)
{return or__3548__auto____13739;
} else
{return cljs.core.string_QMARK_.call(null,tag__13736);
}
}
})()))
{throw [cljs.core.str(tag__13736),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__13740__13742 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__13736));
var ___13743 = cljs.core.nth.call(null,vec__13740__13742,0,null);
var tag__13744 = cljs.core.nth.call(null,vec__13740__13742,1,null);
var id__13745 = cljs.core.nth.call(null,vec__13740__13742,2,null);
var class$__13746 = cljs.core.nth.call(null,vec__13740__13742,3,null);
var vec__13741__13753 = (function (){var vec__13747__13748 = clojure.string.split.call(null,tag__13744,/:/);
var nsp__13749 = cljs.core.nth.call(null,vec__13747__13748,0,null);
var t__13750 = cljs.core.nth.call(null,vec__13747__13748,1,null);
var ns_xmlns__13751 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__13749));
if(cljs.core.truth_(t__13750))
{return cljs.core.PersistentVector.fromArray([(function (){var or__3548__auto____13752 = ns_xmlns__13751;
if(cljs.core.truth_(or__3548__auto____13752))
{return or__3548__auto____13752;
} else
{return nsp__13749;
}
})(),t__13750]);
} else
{return cljs.core.PersistentVector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__13749]);
}
})();
var nsp__13754 = cljs.core.nth.call(null,vec__13741__13753,0,null);
var tag__13755 = cljs.core.nth.call(null,vec__13741__13753,1,null);
var tag_attrs__13757 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__13732_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__13732_SHARP_) == null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____13756 = id__13745;
if(cljs.core.truth_(or__3548__auto____13756))
{return or__3548__auto____13756;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__13746)?clojure.string.replace.call(null,class$__13746,/\./," "):null)})));
var map_attrs__13758 = cljs.core.first.call(null,content__13737);
if(cljs.core.map_QMARK_.call(null,map_attrs__13758))
{return cljs.core.PersistentVector.fromArray([nsp__13754,tag__13755,cljs.core.merge.call(null,tag_attrs__13757,map_attrs__13758),cljs.core.next.call(null,content__13737)]);
} else
{return cljs.core.PersistentVector.fromArray([nsp__13754,tag__13755,tag_attrs__13757,content__13737]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__13759 = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs__13759))
{crate.core.dom_attr.call(null,elem,attrs__13759);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__13760__13761 = crate.core.normalize_element.call(null,tag_def);
var nsp__13762 = cljs.core.nth.call(null,vec__13760__13761,0,null);
var tag__13763 = cljs.core.nth.call(null,vec__13760__13761,1,null);
var attrs__13764 = cljs.core.nth.call(null,vec__13760__13761,2,null);
var content__13765 = cljs.core.nth.call(null,vec__13760__13761,3,null);
var elem__13766 = crate.core.create_elem.call(null,nsp__13762,tag__13763);
crate.core.dom_attr.call(null,elem__13766,cljs.core.merge.call(null,attrs__13764,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__13766,content__13765);
return elem__13766;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__13767 = cljs.core.map.call(null,crate.core.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res__13767)))
{return res__13767;
} else
{return cljs.core.first.call(null,res__13767);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__13768){
var tags = cljs.core.seq(arglist__13768);;
return html__delegate(tags);
});
html.cljs$lang$arity$variadic = html__delegate;
return html;
})()
;
