goog.provide('overtoneinterface.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
overtoneinterface.client.main.$piano = jayq.core.$.call(null,"\uFDD0'#piano");
var group__4724__auto____4737 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
overtoneinterface.client.main.button = (function button(p__4738){
var map__4739__4740 = p__4738;
var map__4739__4741 = ((cljs.core.seq_QMARK_.call(null,map__4739__4740))?cljs.core.apply.call(null,cljs.core.hash_map,map__4739__4740):map__4739__4740);
var param__4742 = cljs.core.get.call(null,map__4739__4741,"\uFDD0'param");
var action__4743 = cljs.core.get.call(null,map__4739__4741,"\uFDD0'action");
var label__4744 = cljs.core.get.call(null,map__4739__4741,"\uFDD0'label");
var elem__4725__auto____4745 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a.button",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'data-action","\uFDD0'data-param"],{"\uFDD0'href":"#","\uFDD0'data-action":action__4743,"\uFDD0'data-param":param__4742}),label__4744]));
elem__4725__auto____4745.setAttribute("crateGroup",group__4724__auto____4737);
return elem__4725__auto____4745;
});
overtoneinterface.client.main.button.prototype._crateGroup = group__4724__auto____4737;
jayq.core.append.call(null,overtoneinterface.client.main.$piano,overtoneinterface.client.main.button.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"play note","\uFDD0'action":"play-note","\uFDD0'param":""})));
overtoneinterface.client.main.$body = jayq.core.$.call(null,"\uFDD0'body");
overtoneinterface.client.main.$controls = jayq.core.$.call(null,"\uFDD0'#controls");
overtoneinterface.client.main.$notes = jayq.core.$.call(null,"\uFDD0'#notes");
overtoneinterface.client.main.$wobble = jayq.core.$.call(null,"\uFDD0'#wobble");
overtoneinterface.client.main.dub_notes = (function (){var iter__625__auto____4750 = (function iter__4746(s__4747){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4747__4748 = s__4747;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4747__4748)))
{var note__4749 = cljs.core.first.call(null,s__4747__4748);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str(note__4749)].join(''),"\uFDD0'action":"dub-note","\uFDD0'param":note__4749}),iter__4746.call(null,cljs.core.rest.call(null,s__4747__4748)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____4750.call(null,cljs.core.range.call(null,40,80));
})();
overtoneinterface.client.main.dub_wobble = (function (){var iter__625__auto____4755 = (function iter__4751(s__4752){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4752__4753 = s__4752;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4752__4753)))
{var w__4754 = cljs.core.first.call(null,s__4752__4753);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str("w"),cljs.core.str(w__4754)].join(''),"\uFDD0'action":"dub-wobble","\uFDD0'param":w__4754}),iter__4751.call(null,cljs.core.rest.call(null,s__4752__4753)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____4755.call(null,cljs.core.range.call(null,0,8));
})();
overtoneinterface.client.main.control_buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"start","\uFDD0'action":"start-dub","\uFDD0'param":""}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"stop","\uFDD0'action":"stop-dub","\uFDD0'param":""})]);
overtoneinterface.client.main.populate = (function populate(container,buttons){
var G__4756__4757 = cljs.core.seq.call(null,buttons);
if(cljs.core.truth_(G__4756__4757))
{var b__4758 = cljs.core.first.call(null,G__4756__4757);
var G__4756__4759 = G__4756__4757;
while(true){
jayq.core.append.call(null,container,overtoneinterface.client.main.button.call(null,b__4758));
var temp__3698__auto____4760 = cljs.core.next.call(null,G__4756__4759);
if(cljs.core.truth_(temp__3698__auto____4760))
{var G__4756__4761 = temp__3698__auto____4760;
{
var G__4762 = cljs.core.first.call(null,G__4756__4761);
var G__4763 = G__4756__4761;
b__4758 = G__4762;
G__4756__4759 = G__4763;
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
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$controls,overtoneinterface.client.main.control_buttons);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$notes,overtoneinterface.client.main.dub_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$wobble,overtoneinterface.client.main.dub_wobble);
jayq.core.delegate.call(null,overtoneinterface.client.main.$body,overtoneinterface.client.main.button,"\uFDD0'click",(function (e){
e.preventDefault();
var me__4764 = this;
var $me__4765 = jayq.core.$.call(null,me__4764);
var action__4766 = jayq.core.data.call(null,$me__4765,"\uFDD0'action");
var param__4767 = jayq.core.data.call(null,$me__4765,"\uFDD0'param");
var param__4768 = ((cljs.core._EQ_.call(null,param__4767,""))?cljs.core.PersistentVector.fromArray([]):cljs.core.PersistentVector.fromArray([param__4767]));
return fetch.remotes.remote_callback.call(null,action__4766,param__4768);
}));
