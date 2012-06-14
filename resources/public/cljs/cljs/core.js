goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf.call(null,x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return new Array(size);
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__11346__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__11346 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11346__delegate.call(this, array, i, idxs);
};
G__11346.cljs$lang$maxFixedArity = 2;
G__11346.cljs$lang$applyTo = (function (arglist__11347){
var array = cljs.core.first(arglist__11347);
var i = cljs.core.first(cljs.core.next(arglist__11347));
var idxs = cljs.core.rest(cljs.core.next(arglist__11347));
return G__11346__delegate(array, i, idxs);
});
G__11346.cljs$lang$arity$variadic = G__11346__delegate;
return G__11346;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3546__auto____11348 = this$;
if(and__3546__auto____11348)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3546__auto____11348;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3548__auto____11349 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11349)
{return or__3548__auto____11349;
} else
{var or__3548__auto____11350 = (cljs.core._invoke["_"]);
if(or__3548__auto____11350)
{return or__3548__auto____11350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3546__auto____11351 = this$;
if(and__3546__auto____11351)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3546__auto____11351;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3548__auto____11352 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11352)
{return or__3548__auto____11352;
} else
{var or__3548__auto____11353 = (cljs.core._invoke["_"]);
if(or__3548__auto____11353)
{return or__3548__auto____11353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3546__auto____11354 = this$;
if(and__3546__auto____11354)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3546__auto____11354;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3548__auto____11355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11355)
{return or__3548__auto____11355;
} else
{var or__3548__auto____11356 = (cljs.core._invoke["_"]);
if(or__3548__auto____11356)
{return or__3548__auto____11356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3546__auto____11357 = this$;
if(and__3546__auto____11357)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3546__auto____11357;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____11358 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11358)
{return or__3548__auto____11358;
} else
{var or__3548__auto____11359 = (cljs.core._invoke["_"]);
if(or__3548__auto____11359)
{return or__3548__auto____11359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3546__auto____11360 = this$;
if(and__3546__auto____11360)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3546__auto____11360;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____11361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11361)
{return or__3548__auto____11361;
} else
{var or__3548__auto____11362 = (cljs.core._invoke["_"]);
if(or__3548__auto____11362)
{return or__3548__auto____11362;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3546__auto____11363 = this$;
if(and__3546__auto____11363)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3546__auto____11363;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____11364 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11364)
{return or__3548__auto____11364;
} else
{var or__3548__auto____11365 = (cljs.core._invoke["_"]);
if(or__3548__auto____11365)
{return or__3548__auto____11365;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3546__auto____11366 = this$;
if(and__3546__auto____11366)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3546__auto____11366;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____11367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11367)
{return or__3548__auto____11367;
} else
{var or__3548__auto____11368 = (cljs.core._invoke["_"]);
if(or__3548__auto____11368)
{return or__3548__auto____11368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3546__auto____11369 = this$;
if(and__3546__auto____11369)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3546__auto____11369;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____11370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11370)
{return or__3548__auto____11370;
} else
{var or__3548__auto____11371 = (cljs.core._invoke["_"]);
if(or__3548__auto____11371)
{return or__3548__auto____11371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3546__auto____11372 = this$;
if(and__3546__auto____11372)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3546__auto____11372;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____11373 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11373)
{return or__3548__auto____11373;
} else
{var or__3548__auto____11374 = (cljs.core._invoke["_"]);
if(or__3548__auto____11374)
{return or__3548__auto____11374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3546__auto____11375 = this$;
if(and__3546__auto____11375)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3546__auto____11375;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____11376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11376)
{return or__3548__auto____11376;
} else
{var or__3548__auto____11377 = (cljs.core._invoke["_"]);
if(or__3548__auto____11377)
{return or__3548__auto____11377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3546__auto____11378 = this$;
if(and__3546__auto____11378)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3546__auto____11378;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____11379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11379)
{return or__3548__auto____11379;
} else
{var or__3548__auto____11380 = (cljs.core._invoke["_"]);
if(or__3548__auto____11380)
{return or__3548__auto____11380;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3546__auto____11381 = this$;
if(and__3546__auto____11381)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3546__auto____11381;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____11382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11382)
{return or__3548__auto____11382;
} else
{var or__3548__auto____11383 = (cljs.core._invoke["_"]);
if(or__3548__auto____11383)
{return or__3548__auto____11383;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3546__auto____11384 = this$;
if(and__3546__auto____11384)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3546__auto____11384;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____11385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11385)
{return or__3548__auto____11385;
} else
{var or__3548__auto____11386 = (cljs.core._invoke["_"]);
if(or__3548__auto____11386)
{return or__3548__auto____11386;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3546__auto____11387 = this$;
if(and__3546__auto____11387)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3546__auto____11387;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____11388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11388)
{return or__3548__auto____11388;
} else
{var or__3548__auto____11389 = (cljs.core._invoke["_"]);
if(or__3548__auto____11389)
{return or__3548__auto____11389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3546__auto____11390 = this$;
if(and__3546__auto____11390)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3546__auto____11390;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____11391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11391)
{return or__3548__auto____11391;
} else
{var or__3548__auto____11392 = (cljs.core._invoke["_"]);
if(or__3548__auto____11392)
{return or__3548__auto____11392;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3546__auto____11393 = this$;
if(and__3546__auto____11393)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3546__auto____11393;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____11394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11394)
{return or__3548__auto____11394;
} else
{var or__3548__auto____11395 = (cljs.core._invoke["_"]);
if(or__3548__auto____11395)
{return or__3548__auto____11395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3546__auto____11396 = this$;
if(and__3546__auto____11396)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3546__auto____11396;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____11397 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11397)
{return or__3548__auto____11397;
} else
{var or__3548__auto____11398 = (cljs.core._invoke["_"]);
if(or__3548__auto____11398)
{return or__3548__auto____11398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3546__auto____11399 = this$;
if(and__3546__auto____11399)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3546__auto____11399;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____11400 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11400)
{return or__3548__auto____11400;
} else
{var or__3548__auto____11401 = (cljs.core._invoke["_"]);
if(or__3548__auto____11401)
{return or__3548__auto____11401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3546__auto____11402 = this$;
if(and__3546__auto____11402)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3546__auto____11402;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____11403 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11403)
{return or__3548__auto____11403;
} else
{var or__3548__auto____11404 = (cljs.core._invoke["_"]);
if(or__3548__auto____11404)
{return or__3548__auto____11404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3546__auto____11405 = this$;
if(and__3546__auto____11405)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3546__auto____11405;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____11406 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11406)
{return or__3548__auto____11406;
} else
{var or__3548__auto____11407 = (cljs.core._invoke["_"]);
if(or__3548__auto____11407)
{return or__3548__auto____11407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3546__auto____11408 = this$;
if(and__3546__auto____11408)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3546__auto____11408;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____11409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11409)
{return or__3548__auto____11409;
} else
{var or__3548__auto____11410 = (cljs.core._invoke["_"]);
if(or__3548__auto____11410)
{return or__3548__auto____11410;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3546__auto____11411 = coll;
if(and__3546__auto____11411)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3546__auto____11411;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3548__auto____11412 = (cljs.core._count[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11412)
{return or__3548__auto____11412;
} else
{var or__3548__auto____11413 = (cljs.core._count["_"]);
if(or__3548__auto____11413)
{return or__3548__auto____11413;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3546__auto____11414 = coll;
if(and__3546__auto____11414)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3546__auto____11414;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3548__auto____11415 = (cljs.core._empty[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11415)
{return or__3548__auto____11415;
} else
{var or__3548__auto____11416 = (cljs.core._empty["_"]);
if(or__3548__auto____11416)
{return or__3548__auto____11416;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3546__auto____11417 = coll;
if(and__3546__auto____11417)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3546__auto____11417;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3548__auto____11418 = (cljs.core._conj[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11418)
{return or__3548__auto____11418;
} else
{var or__3548__auto____11419 = (cljs.core._conj["_"]);
if(or__3548__auto____11419)
{return or__3548__auto____11419;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3546__auto____11420 = coll;
if(and__3546__auto____11420)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3546__auto____11420;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3548__auto____11421 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11421)
{return or__3548__auto____11421;
} else
{var or__3548__auto____11422 = (cljs.core._nth["_"]);
if(or__3548__auto____11422)
{return or__3548__auto____11422;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3546__auto____11423 = coll;
if(and__3546__auto____11423)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3546__auto____11423;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____11424 = (cljs.core._nth[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11424)
{return or__3548__auto____11424;
} else
{var or__3548__auto____11425 = (cljs.core._nth["_"]);
if(or__3548__auto____11425)
{return or__3548__auto____11425;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3546__auto____11426 = coll;
if(and__3546__auto____11426)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3546__auto____11426;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3548__auto____11427 = (cljs.core._first[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11427)
{return or__3548__auto____11427;
} else
{var or__3548__auto____11428 = (cljs.core._first["_"]);
if(or__3548__auto____11428)
{return or__3548__auto____11428;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3546__auto____11429 = coll;
if(and__3546__auto____11429)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3546__auto____11429;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3548__auto____11430 = (cljs.core._rest[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11430)
{return or__3548__auto____11430;
} else
{var or__3548__auto____11431 = (cljs.core._rest["_"]);
if(or__3548__auto____11431)
{return or__3548__auto____11431;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3546__auto____11432 = o;
if(and__3546__auto____11432)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3546__auto____11432;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3548__auto____11433 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____11433)
{return or__3548__auto____11433;
} else
{var or__3548__auto____11434 = (cljs.core._lookup["_"]);
if(or__3548__auto____11434)
{return or__3548__auto____11434;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3546__auto____11435 = o;
if(and__3546__auto____11435)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3546__auto____11435;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3548__auto____11436 = (cljs.core._lookup[goog.typeOf.call(null,o)]);
if(or__3548__auto____11436)
{return or__3548__auto____11436;
} else
{var or__3548__auto____11437 = (cljs.core._lookup["_"]);
if(or__3548__auto____11437)
{return or__3548__auto____11437;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3546__auto____11438 = coll;
if(and__3546__auto____11438)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3546__auto____11438;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____11439 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11439)
{return or__3548__auto____11439;
} else
{var or__3548__auto____11440 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3548__auto____11440)
{return or__3548__auto____11440;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3546__auto____11441 = coll;
if(and__3546__auto____11441)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3546__auto____11441;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3548__auto____11442 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11442)
{return or__3548__auto____11442;
} else
{var or__3548__auto____11443 = (cljs.core._assoc["_"]);
if(or__3548__auto____11443)
{return or__3548__auto____11443;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3546__auto____11444 = coll;
if(and__3546__auto____11444)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3546__auto____11444;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3548__auto____11445 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11445)
{return or__3548__auto____11445;
} else
{var or__3548__auto____11446 = (cljs.core._dissoc["_"]);
if(or__3548__auto____11446)
{return or__3548__auto____11446;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3546__auto____11447 = coll;
if(and__3546__auto____11447)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3546__auto____11447;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3548__auto____11448 = (cljs.core._key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11448)
{return or__3548__auto____11448;
} else
{var or__3548__auto____11449 = (cljs.core._key["_"]);
if(or__3548__auto____11449)
{return or__3548__auto____11449;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3546__auto____11450 = coll;
if(and__3546__auto____11450)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3546__auto____11450;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3548__auto____11451 = (cljs.core._val[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11451)
{return or__3548__auto____11451;
} else
{var or__3548__auto____11452 = (cljs.core._val["_"]);
if(or__3548__auto____11452)
{return or__3548__auto____11452;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3546__auto____11453 = coll;
if(and__3546__auto____11453)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3546__auto____11453;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3548__auto____11454 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11454)
{return or__3548__auto____11454;
} else
{var or__3548__auto____11455 = (cljs.core._disjoin["_"]);
if(or__3548__auto____11455)
{return or__3548__auto____11455;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3546__auto____11456 = coll;
if(and__3546__auto____11456)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3546__auto____11456;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3548__auto____11457 = (cljs.core._peek[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11457)
{return or__3548__auto____11457;
} else
{var or__3548__auto____11458 = (cljs.core._peek["_"]);
if(or__3548__auto____11458)
{return or__3548__auto____11458;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3546__auto____11459 = coll;
if(and__3546__auto____11459)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3546__auto____11459;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3548__auto____11460 = (cljs.core._pop[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11460)
{return or__3548__auto____11460;
} else
{var or__3548__auto____11461 = (cljs.core._pop["_"]);
if(or__3548__auto____11461)
{return or__3548__auto____11461;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3546__auto____11462 = coll;
if(and__3546__auto____11462)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3546__auto____11462;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3548__auto____11463 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11463)
{return or__3548__auto____11463;
} else
{var or__3548__auto____11464 = (cljs.core._assoc_n["_"]);
if(or__3548__auto____11464)
{return or__3548__auto____11464;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3546__auto____11465 = o;
if(and__3546__auto____11465)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3546__auto____11465;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3548__auto____11466 = (cljs.core._deref[goog.typeOf.call(null,o)]);
if(or__3548__auto____11466)
{return or__3548__auto____11466;
} else
{var or__3548__auto____11467 = (cljs.core._deref["_"]);
if(or__3548__auto____11467)
{return or__3548__auto____11467;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3546__auto____11468 = o;
if(and__3546__auto____11468)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3546__auto____11468;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____11469 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);
if(or__3548__auto____11469)
{return or__3548__auto____11469;
} else
{var or__3548__auto____11470 = (cljs.core._deref_with_timeout["_"]);
if(or__3548__auto____11470)
{return or__3548__auto____11470;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3546__auto____11471 = o;
if(and__3546__auto____11471)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3546__auto____11471;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3548__auto____11472 = (cljs.core._meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____11472)
{return or__3548__auto____11472;
} else
{var or__3548__auto____11473 = (cljs.core._meta["_"]);
if(or__3548__auto____11473)
{return or__3548__auto____11473;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3546__auto____11474 = o;
if(and__3546__auto____11474)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3546__auto____11474;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3548__auto____11475 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);
if(or__3548__auto____11475)
{return or__3548__auto____11475;
} else
{var or__3548__auto____11476 = (cljs.core._with_meta["_"]);
if(or__3548__auto____11476)
{return or__3548__auto____11476;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3546__auto____11477 = coll;
if(and__3546__auto____11477)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3546__auto____11477;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3548__auto____11478 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11478)
{return or__3548__auto____11478;
} else
{var or__3548__auto____11479 = (cljs.core._reduce["_"]);
if(or__3548__auto____11479)
{return or__3548__auto____11479;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3546__auto____11480 = coll;
if(and__3546__auto____11480)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3546__auto____11480;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3548__auto____11481 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11481)
{return or__3548__auto____11481;
} else
{var or__3548__auto____11482 = (cljs.core._reduce["_"]);
if(or__3548__auto____11482)
{return or__3548__auto____11482;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3546__auto____11483 = coll;
if(and__3546__auto____11483)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3546__auto____11483;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3548__auto____11484 = (cljs.core._kv_reduce[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11484)
{return or__3548__auto____11484;
} else
{var or__3548__auto____11485 = (cljs.core._kv_reduce["_"]);
if(or__3548__auto____11485)
{return or__3548__auto____11485;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3546__auto____11486 = o;
if(and__3546__auto____11486)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3546__auto____11486;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3548__auto____11487 = (cljs.core._equiv[goog.typeOf.call(null,o)]);
if(or__3548__auto____11487)
{return or__3548__auto____11487;
} else
{var or__3548__auto____11488 = (cljs.core._equiv["_"]);
if(or__3548__auto____11488)
{return or__3548__auto____11488;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3546__auto____11489 = o;
if(and__3546__auto____11489)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3546__auto____11489;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3548__auto____11490 = (cljs.core._hash[goog.typeOf.call(null,o)]);
if(or__3548__auto____11490)
{return or__3548__auto____11490;
} else
{var or__3548__auto____11491 = (cljs.core._hash["_"]);
if(or__3548__auto____11491)
{return or__3548__auto____11491;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3546__auto____11492 = o;
if(and__3546__auto____11492)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3546__auto____11492;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3548__auto____11493 = (cljs.core._seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____11493)
{return or__3548__auto____11493;
} else
{var or__3548__auto____11494 = (cljs.core._seq["_"]);
if(or__3548__auto____11494)
{return or__3548__auto____11494;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3546__auto____11495 = coll;
if(and__3546__auto____11495)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3546__auto____11495;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3548__auto____11496 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11496)
{return or__3548__auto____11496;
} else
{var or__3548__auto____11497 = (cljs.core._rseq["_"]);
if(or__3548__auto____11497)
{return or__3548__auto____11497;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3546__auto____11498 = coll;
if(and__3546__auto____11498)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3546__auto____11498;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____11499 = (cljs.core._sorted_seq[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11499)
{return or__3548__auto____11499;
} else
{var or__3548__auto____11500 = (cljs.core._sorted_seq["_"]);
if(or__3548__auto____11500)
{return or__3548__auto____11500;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3546__auto____11501 = coll;
if(and__3546__auto____11501)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3546__auto____11501;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3548__auto____11502 = (cljs.core._sorted_seq_from[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11502)
{return or__3548__auto____11502;
} else
{var or__3548__auto____11503 = (cljs.core._sorted_seq_from["_"]);
if(or__3548__auto____11503)
{return or__3548__auto____11503;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3546__auto____11504 = coll;
if(and__3546__auto____11504)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3546__auto____11504;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3548__auto____11505 = (cljs.core._entry_key[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11505)
{return or__3548__auto____11505;
} else
{var or__3548__auto____11506 = (cljs.core._entry_key["_"]);
if(or__3548__auto____11506)
{return or__3548__auto____11506;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3546__auto____11507 = coll;
if(and__3546__auto____11507)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3546__auto____11507;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3548__auto____11508 = (cljs.core._comparator[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11508)
{return or__3548__auto____11508;
} else
{var or__3548__auto____11509 = (cljs.core._comparator["_"]);
if(or__3548__auto____11509)
{return or__3548__auto____11509;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3546__auto____11510 = o;
if(and__3546__auto____11510)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3546__auto____11510;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3548__auto____11511 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);
if(or__3548__auto____11511)
{return or__3548__auto____11511;
} else
{var or__3548__auto____11512 = (cljs.core._pr_seq["_"]);
if(or__3548__auto____11512)
{return or__3548__auto____11512;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3546__auto____11513 = d;
if(and__3546__auto____11513)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3546__auto____11513;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3548__auto____11514 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);
if(or__3548__auto____11514)
{return or__3548__auto____11514;
} else
{var or__3548__auto____11515 = (cljs.core._realized_QMARK_["_"]);
if(or__3548__auto____11515)
{return or__3548__auto____11515;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3546__auto____11516 = this$;
if(and__3546__auto____11516)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3546__auto____11516;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____11517 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11517)
{return or__3548__auto____11517;
} else
{var or__3548__auto____11518 = (cljs.core._notify_watches["_"]);
if(or__3548__auto____11518)
{return or__3548__auto____11518;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3546__auto____11519 = this$;
if(and__3546__auto____11519)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3546__auto____11519;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3548__auto____11520 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11520)
{return or__3548__auto____11520;
} else
{var or__3548__auto____11521 = (cljs.core._add_watch["_"]);
if(or__3548__auto____11521)
{return or__3548__auto____11521;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3546__auto____11522 = this$;
if(and__3546__auto____11522)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3546__auto____11522;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3548__auto____11523 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);
if(or__3548__auto____11523)
{return or__3548__auto____11523;
} else
{var or__3548__auto____11524 = (cljs.core._remove_watch["_"]);
if(or__3548__auto____11524)
{return or__3548__auto____11524;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3546__auto____11525 = coll;
if(and__3546__auto____11525)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3546__auto____11525;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3548__auto____11526 = (cljs.core._as_transient[goog.typeOf.call(null,coll)]);
if(or__3548__auto____11526)
{return or__3548__auto____11526;
} else
{var or__3548__auto____11527 = (cljs.core._as_transient["_"]);
if(or__3548__auto____11527)
{return or__3548__auto____11527;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3546__auto____11528 = tcoll;
if(and__3546__auto____11528)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3546__auto____11528;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3548__auto____11529 = (cljs.core._conj_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11529)
{return or__3548__auto____11529;
} else
{var or__3548__auto____11530 = (cljs.core._conj_BANG_["_"]);
if(or__3548__auto____11530)
{return or__3548__auto____11530;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3546__auto____11531 = tcoll;
if(and__3546__auto____11531)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3546__auto____11531;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____11532 = (cljs.core._persistent_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11532)
{return or__3548__auto____11532;
} else
{var or__3548__auto____11533 = (cljs.core._persistent_BANG_["_"]);
if(or__3548__auto____11533)
{return or__3548__auto____11533;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3546__auto____11534 = tcoll;
if(and__3546__auto____11534)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3546__auto____11534;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3548__auto____11535 = (cljs.core._assoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11535)
{return or__3548__auto____11535;
} else
{var or__3548__auto____11536 = (cljs.core._assoc_BANG_["_"]);
if(or__3548__auto____11536)
{return or__3548__auto____11536;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3546__auto____11537 = tcoll;
if(and__3546__auto____11537)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3546__auto____11537;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3548__auto____11538 = (cljs.core._dissoc_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11538)
{return or__3548__auto____11538;
} else
{var or__3548__auto____11539 = (cljs.core._dissoc_BANG_["_"]);
if(or__3548__auto____11539)
{return or__3548__auto____11539;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3546__auto____11540 = tcoll;
if(and__3546__auto____11540)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3546__auto____11540;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3548__auto____11541 = (cljs.core._assoc_n_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11541)
{return or__3548__auto____11541;
} else
{var or__3548__auto____11542 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3548__auto____11542)
{return or__3548__auto____11542;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3546__auto____11543 = tcoll;
if(and__3546__auto____11543)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3546__auto____11543;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3548__auto____11544 = (cljs.core._pop_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11544)
{return or__3548__auto____11544;
} else
{var or__3548__auto____11545 = (cljs.core._pop_BANG_["_"]);
if(or__3548__auto____11545)
{return or__3548__auto____11545;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3546__auto____11546 = tcoll;
if(and__3546__auto____11546)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3546__auto____11546;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3548__auto____11547 = (cljs.core._disjoin_BANG_[goog.typeOf.call(null,tcoll)]);
if(or__3548__auto____11547)
{return or__3548__auto____11547;
} else
{var or__3548__auto____11548 = (cljs.core._disjoin_BANG_["_"]);
if(or__3548__auto____11548)
{return or__3548__auto____11548;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3548__auto____11549 = (x === y);
if(or__3548__auto____11549)
{return or__3548__auto____11549;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__11550__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11551 = y;
var G__11552 = cljs.core.first.call(null,more);
var G__11553 = cljs.core.next.call(null,more);
x = G__11551;
y = G__11552;
more = G__11553;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11550 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11550__delegate.call(this, x, y, more);
};
G__11550.cljs$lang$maxFixedArity = 2;
G__11550.cljs$lang$applyTo = (function (arglist__11554){
var x = cljs.core.first(arglist__11554);
var y = cljs.core.first(cljs.core.next(arglist__11554));
var more = cljs.core.rest(cljs.core.next(arglist__11554));
return G__11550__delegate(x, y, more);
});
G__11550.cljs$lang$arity$variadic = G__11550__delegate;
return G__11550;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((function (){var or__3548__auto____11555 = (x == null);
if(or__3548__auto____11555)
{return or__3548__auto____11555;
} else
{return (void 0 === x);
}
})())
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__11556 = null;
var G__11556__2 = (function (o,k){
return null;
});
var G__11556__3 = (function (o,k,not_found){
return not_found;
});
G__11556 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11556__2.call(this,o,k);
case 3:
return G__11556__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11556;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11557 = null;
var G__11557__2 = (function (_,f){
return f.call(null);
});
var G__11557__3 = (function (_,f,start){
return start;
});
G__11557 = function(_,f,start){
switch(arguments.length){
case 2:
return G__11557__2.call(this,_,f);
case 3:
return G__11557__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11557;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__11558 = null;
var G__11558__2 = (function (_,n){
return null;
});
var G__11558__3 = (function (_,n,not_found){
return not_found;
});
G__11558 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__11558__2.call(this,_,n);
case 3:
return G__11558__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11558;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._count.call(null,cicoll) === 0))
{return f.call(null);
} else
{var val__11559 = cljs.core._nth.call(null,cicoll,0);
var n__11560 = 1;
while(true){
if((n__11560 < cljs.core._count.call(null,cicoll)))
{var nval__11561 = f.call(null,val__11559,cljs.core._nth.call(null,cicoll,n__11560));
if(cljs.core.reduced_QMARK_.call(null,nval__11561))
{return cljs.core.deref.call(null,nval__11561);
} else
{{
var G__11568 = nval__11561;
var G__11569 = (n__11560 + 1);
val__11559 = G__11568;
n__11560 = G__11569;
continue;
}
}
} else
{return val__11559;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__11562 = val;
var n__11563 = 0;
while(true){
if((n__11563 < cljs.core._count.call(null,cicoll)))
{var nval__11564 = f.call(null,val__11562,cljs.core._nth.call(null,cicoll,n__11563));
if(cljs.core.reduced_QMARK_.call(null,nval__11564))
{return cljs.core.deref.call(null,nval__11564);
} else
{{
var G__11570 = nval__11564;
var G__11571 = (n__11563 + 1);
val__11562 = G__11570;
n__11563 = G__11571;
continue;
}
}
} else
{return val__11562;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__11565 = val;
var n__11566 = idx;
while(true){
if((n__11566 < cljs.core._count.call(null,cicoll)))
{var nval__11567 = f.call(null,val__11565,cljs.core._nth.call(null,cicoll,n__11566));
if(cljs.core.reduced_QMARK_.call(null,nval__11567))
{return cljs.core.deref.call(null,nval__11567);
} else
{{
var G__11572 = nval__11567;
var G__11573 = (n__11566 + 1);
val__11565 = G__11572;
n__11566 = G__11573;
continue;
}
}
} else
{return val__11565;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15990906;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11574 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11575 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ASeq$ = true;
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__11576 = this;
var this$__11577 = this;
return cljs.core.pr_str.call(null,this$__11577);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11578 = this;
if(cljs.core.counted_QMARK_.call(null,this__11578.a))
{return cljs.core.ci_reduce.call(null,this__11578.a,f,(this__11578.a[this__11578.i]),(this__11578.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__11578.a[this__11578.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11579 = this;
if(cljs.core.counted_QMARK_.call(null,this__11579.a))
{return cljs.core.ci_reduce.call(null,this__11579.a,f,start,this__11579.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11580 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11581 = this;
return (this__11581.a.length - this__11581.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__11582 = this;
return (this__11582.a[this__11582.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__11583 = this;
if(((this__11583.i + 1) < this__11583.a.length))
{return (new cljs.core.IndexedSeq(this__11583.a,(this__11583.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11585 = this;
var i__11586 = (n + this__11585.i);
if((i__11586 < this__11585.a.length))
{return (this__11585.a[i__11586]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11587 = this;
var i__11588 = (n + this__11587.i);
if((i__11588 < this__11587.a.length))
{return (this__11587.a[i__11588]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__11589 = null;
var G__11589__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11589__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11589 = function(array,f,start){
switch(arguments.length){
case 2:
return G__11589__2.call(this,array,f);
case 3:
return G__11589__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11589;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11590 = null;
var G__11590__2 = (function (array,k){
return (array[k]);
});
var G__11590__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11590 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__11590__2.call(this,array,k);
case 3:
return G__11590__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11590;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11591 = null;
var G__11591__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__11591__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__11591 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__11591__2.call(this,array,n);
case 3:
return G__11591__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11591;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll != null))
{if((function (){var G__11592__11593 = coll;
if((G__11592__11593 != null))
{if((function (){var or__3548__auto____11594 = (G__11592__11593.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____11594)
{return or__3548__auto____11594;
} else
{return G__11592__11593.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__11592__11593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11592__11593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11592__11593);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll != null))
{if((function (){var G__11595__11596 = coll;
if((G__11595__11596 != null))
{if((function (){var or__3548__auto____11597 = (G__11595__11596.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____11597)
{return or__3548__auto____11597;
} else
{return G__11595__11596.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11595__11596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11595__11596);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11595__11596);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__11598 = cljs.core.seq.call(null,coll);
if((s__11598 != null))
{return cljs.core._first.call(null,s__11598);
} else
{return null;
}
}
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if((coll != null))
{if((function (){var G__11599__11600 = coll;
if((G__11599__11600 != null))
{if((function (){var or__3548__auto____11601 = (G__11599__11600.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____11601)
{return or__3548__auto____11601;
} else
{return G__11599__11600.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11599__11600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11599__11600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11599__11600);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__11602 = cljs.core.seq.call(null,coll);
if((s__11602 != null))
{return cljs.core._rest.call(null,s__11602);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll != null))
{if((function (){var G__11603__11604 = coll;
if((G__11603__11604 != null))
{if((function (){var or__3548__auto____11605 = (G__11603__11604.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____11605)
{return or__3548__auto____11605;
} else
{return G__11603__11604.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11603__11604.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11603__11604);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11603__11604);
}
})())
{var coll__11606 = cljs.core._rest.call(null,coll);
if((coll__11606 != null))
{if((function (){var G__11607__11608 = coll__11606;
if((G__11607__11608 != null))
{if((function (){var or__3548__auto____11609 = (G__11607__11608.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3548__auto____11609)
{return or__3548__auto____11609;
} else
{return G__11607__11608.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__11607__11608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11607__11608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11607__11608);
}
})())
{return coll__11606;
} else
{return cljs.core._seq.call(null,coll__11606);
}
} else
{return null;
}
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__11610 = cljs.core.next.call(null,s);
s = G__11610;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__11611__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11612 = conj.call(null,coll,x);
var G__11613 = cljs.core.first.call(null,xs);
var G__11614 = cljs.core.next.call(null,xs);
coll = G__11612;
x = G__11613;
xs = G__11614;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11611 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11611__delegate.call(this, coll, x, xs);
};
G__11611.cljs$lang$maxFixedArity = 2;
G__11611.cljs$lang$applyTo = (function (arglist__11615){
var coll = cljs.core.first(arglist__11615);
var x = cljs.core.first(cljs.core.next(arglist__11615));
var xs = cljs.core.rest(cljs.core.next(arglist__11615));
return G__11611__delegate(coll, x, xs);
});
G__11611.cljs$lang$arity$variadic = G__11611__delegate;
return G__11611;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__11616 = cljs.core.seq.call(null,coll);
var acc__11617 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__11616))
{return (acc__11617 + cljs.core._count.call(null,s__11616));
} else
{{
var G__11618 = cljs.core.next.call(null,s__11616);
var G__11619 = (acc__11617 + 1);
s__11616 = G__11618;
acc__11617 = G__11619;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll != null))
{if((function (){var G__11620__11621 = coll;
if((G__11620__11621 != null))
{if((function (){var or__3548__auto____11622 = (G__11620__11621.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____11622)
{return or__3548__auto____11622;
} else
{return G__11620__11621.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11620__11621.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11620__11621);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11620__11621);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
} else
{return null;
}
});
var nth__3 = (function (coll,n,not_found){
if((coll != null))
{if((function (){var G__11623__11624 = coll;
if((G__11623__11624 != null))
{if((function (){var or__3548__auto____11625 = (G__11623__11624.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____11625)
{return or__3548__auto____11625;
} else
{return G__11623__11624.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11623__11624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11623__11624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11623__11624);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__11627__delegate = function (coll,k,v,kvs){
while(true){
var ret__11626 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__11628 = ret__11626;
var G__11629 = cljs.core.first.call(null,kvs);
var G__11630 = cljs.core.second.call(null,kvs);
var G__11631 = cljs.core.nnext.call(null,kvs);
coll = G__11628;
k = G__11629;
v = G__11630;
kvs = G__11631;
continue;
}
} else
{return ret__11626;
}
break;
}
};
var G__11627 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11627__delegate.call(this, coll, k, v, kvs);
};
G__11627.cljs$lang$maxFixedArity = 3;
G__11627.cljs$lang$applyTo = (function (arglist__11632){
var coll = cljs.core.first(arglist__11632);
var k = cljs.core.first(cljs.core.next(arglist__11632));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11632)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11632)));
return G__11627__delegate(coll, k, v, kvs);
});
G__11627.cljs$lang$arity$variadic = G__11627__delegate;
return G__11627;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__11634__delegate = function (coll,k,ks){
while(true){
var ret__11633 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11635 = ret__11633;
var G__11636 = cljs.core.first.call(null,ks);
var G__11637 = cljs.core.next.call(null,ks);
coll = G__11635;
k = G__11636;
ks = G__11637;
continue;
}
} else
{return ret__11633;
}
break;
}
};
var G__11634 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11634__delegate.call(this, coll, k, ks);
};
G__11634.cljs$lang$maxFixedArity = 2;
G__11634.cljs$lang$applyTo = (function (arglist__11638){
var coll = cljs.core.first(arglist__11638);
var k = cljs.core.first(cljs.core.next(arglist__11638));
var ks = cljs.core.rest(cljs.core.next(arglist__11638));
return G__11634__delegate(coll, k, ks);
});
G__11634.cljs$lang$arity$variadic = G__11634__delegate;
return G__11634;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__11639__11640 = o;
if((G__11639__11640 != null))
{if((function (){var or__3548__auto____11641 = (G__11639__11640.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____11641)
{return or__3548__auto____11641;
} else
{return G__11639__11640.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11639__11640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11639__11640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11639__11640);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__11643__delegate = function (coll,k,ks){
while(true){
var ret__11642 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11644 = ret__11642;
var G__11645 = cljs.core.first.call(null,ks);
var G__11646 = cljs.core.next.call(null,ks);
coll = G__11644;
k = G__11645;
ks = G__11646;
continue;
}
} else
{return ret__11642;
}
break;
}
};
var G__11643 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11643__delegate.call(this, coll, k, ks);
};
G__11643.cljs$lang$maxFixedArity = 2;
G__11643.cljs$lang$applyTo = (function (arglist__11647){
var coll = cljs.core.first(arglist__11647);
var k = cljs.core.first(cljs.core.next(arglist__11647));
var ks = cljs.core.rest(cljs.core.next(arglist__11647));
return G__11643__delegate(coll, k, ks);
});
G__11643.cljs$lang$arity$variadic = G__11643__delegate;
return G__11643;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11648__11649 = x;
if((G__11648__11649 != null))
{if((function (){var or__3548__auto____11650 = (G__11648__11649.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3548__auto____11650)
{return or__3548__auto____11650;
} else
{return G__11648__11649.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__11648__11649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11648__11649);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11648__11649);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11651__11652 = x;
if((G__11651__11652 != null))
{if((function (){var or__3548__auto____11653 = (G__11651__11652.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3548__auto____11653)
{return or__3548__auto____11653;
} else
{return G__11651__11652.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__11651__11652.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11651__11652);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11651__11652);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11654__11655 = x;
if((G__11654__11655 != null))
{if((function (){var or__3548__auto____11656 = (G__11654__11655.cljs$lang$protocol_mask$partition0$ & 256);
if(or__3548__auto____11656)
{return or__3548__auto____11656;
} else
{return G__11654__11655.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__11654__11655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11654__11655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11654__11655);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11657__11658 = x;
if((G__11657__11658 != null))
{if((function (){var or__3548__auto____11659 = (G__11657__11658.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3548__auto____11659)
{return or__3548__auto____11659;
} else
{return G__11657__11658.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__11657__11658.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11657__11658);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11657__11658);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__11660__11661 = x;
if((G__11660__11661 != null))
{if((function (){var or__3548__auto____11662 = (G__11660__11661.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3548__auto____11662)
{return or__3548__auto____11662;
} else
{return G__11660__11661.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__11660__11661.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11660__11661);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11660__11661);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11663__11664 = x;
if((G__11663__11664 != null))
{if((function (){var or__3548__auto____11665 = (G__11663__11664.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3548__auto____11665)
{return or__3548__auto____11665;
} else
{return G__11663__11664.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11663__11664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11663__11664);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11663__11664);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11666__11667 = x;
if((G__11666__11667 != null))
{if((function (){var or__3548__auto____11668 = (G__11666__11667.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____11668)
{return or__3548__auto____11668;
} else
{return G__11666__11667.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11666__11667.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11666__11667);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11666__11667);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11669__11670 = x;
if((G__11669__11670 != null))
{if((function (){var or__3548__auto____11671 = (G__11669__11670.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3548__auto____11671)
{return or__3548__auto____11671;
} else
{return G__11669__11670.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__11669__11670.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11669__11670);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__11669__11670);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__11672__11673 = x;
if((G__11672__11673 != null))
{if((function (){var or__3548__auto____11674 = (G__11672__11673.cljs$lang$protocol_mask$partition0$ & 8192);
if(or__3548__auto____11674)
{return or__3548__auto____11674;
} else
{return G__11672__11673.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__11672__11673.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11672__11673);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__11672__11673);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__11675__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__11675 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11675__delegate.call(this, keyvals);
};
G__11675.cljs$lang$maxFixedArity = 0;
G__11675.cljs$lang$applyTo = (function (arglist__11676){
var keyvals = cljs.core.seq(arglist__11676);;
return G__11675__delegate(keyvals);
});
G__11675.cljs$lang$arity$variadic = G__11675__delegate;
return G__11675;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__11677 = [];
goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__11677.push(key);
}));
return keys__11677;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__11678 = i;
var j__11679 = j;
var len__11680 = len;
while(true){
if((len__11680 === 0))
{return to;
} else
{(to[j__11679] = (from[i__11678]));
{
var G__11681 = (i__11678 + 1);
var G__11682 = (j__11679 + 1);
var G__11683 = (len__11680 - 1);
i__11678 = G__11681;
j__11679 = G__11682;
len__11680 = G__11683;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__11684 = (i + (len - 1));
var j__11685 = (j + (len - 1));
var len__11686 = len;
while(true){
if((len__11686 === 0))
{return to;
} else
{(to[j__11685] = (from[i__11684]));
{
var G__11687 = (i__11684 - 1);
var G__11688 = (j__11685 - 1);
var G__11689 = (len__11686 - 1);
i__11684 = G__11687;
j__11685 = G__11688;
len__11686 = G__11689;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__11690__11691 = s;
if((G__11690__11691 != null))
{if((function (){var or__3548__auto____11692 = (G__11690__11691.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____11692)
{return or__3548__auto____11692;
} else
{return G__11690__11691.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11690__11691.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11690__11691);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11690__11691);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__11693__11694 = s;
if((G__11693__11694 != null))
{if((function (){var or__3548__auto____11695 = (G__11693__11694.cljs$lang$protocol_mask$partition0$ & 4194304);
if(or__3548__auto____11695)
{return or__3548__auto____11695;
} else
{return G__11693__11694.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11693__11694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11693__11694);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__11693__11694);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____11696 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____11696))
{return cljs.core.not.call(null,(function (){var or__3548__auto____11697 = (x.charAt(0) === "\uFDD0");
if(or__3548__auto____11697)
{return or__3548__auto____11697;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3546__auto____11696;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____11698 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____11698))
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3546__auto____11698;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____11699 = goog.isString.call(null,x);
if(cljs.core.truth_(and__3546__auto____11699))
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3546__auto____11699;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____11700 = cljs.core.fn_QMARK_.call(null,f);
if(or__3548__auto____11700)
{return or__3548__auto____11700;
} else
{var G__11701__11702 = f;
if((G__11701__11702 != null))
{if((function (){var or__3548__auto____11703 = (G__11701__11702.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3548__auto____11703)
{return or__3548__auto____11703;
} else
{return G__11701__11702.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__11701__11702.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11701__11702);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__11701__11702);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____11704 = cljs.core.number_QMARK_.call(null,n);
if(and__3546__auto____11704)
{return (n == n.toFixed());
} else
{return and__3546__auto____11704;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____11705 = coll;
if(cljs.core.truth_(and__3546__auto____11705))
{var and__3546__auto____11706 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3546__auto____11706)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____11706;
}
} else
{return and__3546__auto____11705;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__11711__delegate = function (x,y,more){
if(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y)))
{var s__11707 = cljs.core.set([y,x]);
var xs__11708 = more;
while(true){
var x__11709 = cljs.core.first.call(null,xs__11708);
var etc__11710 = cljs.core.next.call(null,xs__11708);
if(cljs.core.truth_(xs__11708))
{if(cljs.core.contains_QMARK_.call(null,s__11707,x__11709))
{return false;
} else
{{
var G__11712 = cljs.core.conj.call(null,s__11707,x__11709);
var G__11713 = etc__11710;
s__11707 = G__11712;
xs__11708 = G__11713;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__11711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11711__delegate.call(this, x, y, more);
};
G__11711.cljs$lang$maxFixedArity = 2;
G__11711.cljs$lang$applyTo = (function (arglist__11714){
var x = cljs.core.first(arglist__11714);
var y = cljs.core.first(cljs.core.next(arglist__11714));
var more = cljs.core.rest(cljs.core.next(arglist__11714));
return G__11711__delegate(x, y, more);
});
G__11711.cljs$lang$arity$variadic = G__11711__delegate;
return G__11711;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare for objects of the same type
* and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{return goog.array.defaultCompare.call(null,x,y);
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__11715 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__11715))
{return r__11715;
} else
{if(cljs.core.truth_(r__11715))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__11716 = cljs.core.to_array.call(null,coll);
goog.array.stableSort.call(null,a__11716,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11716);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3695__auto____11717 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____11717))
{var s__11718 = temp__3695__auto____11717;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11718),cljs.core.next.call(null,s__11718));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__11719 = val;
var coll__11720 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(coll__11720))
{var nval__11721 = f.call(null,val__11719,cljs.core.first.call(null,coll__11720));
if(cljs.core.reduced_QMARK_.call(null,nval__11721))
{return cljs.core.deref.call(null,nval__11721);
} else
{{
var G__11722 = nval__11721;
var G__11723 = cljs.core.next.call(null,coll__11720);
val__11719 = G__11722;
coll__11720 = G__11723;
continue;
}
}
} else
{return val__11719;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__11724__11725 = coll;
if((G__11724__11725 != null))
{if((function (){var or__3548__auto____11726 = (G__11724__11725.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____11726)
{return or__3548__auto____11726;
} else
{return G__11724__11725.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11724__11725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11724__11725);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11724__11725);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__11727__11728 = coll;
if((G__11727__11728 != null))
{if((function (){var or__3548__auto____11729 = (G__11727__11728.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3548__auto____11729)
{return or__3548__auto____11729;
} else
{return G__11727__11728.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11727__11728.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11727__11728);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11727__11728);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16384;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$ = true;
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__11730 = this;
return this__11730.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__11731__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__11731 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11731__delegate.call(this, x, y, more);
};
G__11731.cljs$lang$maxFixedArity = 2;
G__11731.cljs$lang$applyTo = (function (arglist__11732){
var x = cljs.core.first(arglist__11732);
var y = cljs.core.first(cljs.core.next(arglist__11732));
var more = cljs.core.rest(cljs.core.next(arglist__11732));
return G__11731__delegate(x, y, more);
});
G__11731.cljs$lang$arity$variadic = G__11731__delegate;
return G__11731;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__11733__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__11733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11733__delegate.call(this, x, y, more);
};
G__11733.cljs$lang$maxFixedArity = 2;
G__11733.cljs$lang$applyTo = (function (arglist__11734){
var x = cljs.core.first(arglist__11734);
var y = cljs.core.first(cljs.core.next(arglist__11734));
var more = cljs.core.rest(cljs.core.next(arglist__11734));
return G__11733__delegate(x, y, more);
});
G__11733.cljs$lang$arity$variadic = G__11733__delegate;
return G__11733;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__11735__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__11735 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11735__delegate.call(this, x, y, more);
};
G__11735.cljs$lang$maxFixedArity = 2;
G__11735.cljs$lang$applyTo = (function (arglist__11736){
var x = cljs.core.first(arglist__11736);
var y = cljs.core.first(cljs.core.next(arglist__11736));
var more = cljs.core.rest(cljs.core.next(arglist__11736));
return G__11735__delegate(x, y, more);
});
G__11735.cljs$lang$arity$variadic = G__11735__delegate;
return G__11735;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__11737__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11737__delegate.call(this, x, y, more);
};
G__11737.cljs$lang$maxFixedArity = 2;
G__11737.cljs$lang$applyTo = (function (arglist__11738){
var x = cljs.core.first(arglist__11738);
var y = cljs.core.first(cljs.core.next(arglist__11738));
var more = cljs.core.rest(cljs.core.next(arglist__11738));
return G__11737__delegate(x, y, more);
});
G__11737.cljs$lang$arity$variadic = G__11737__delegate;
return G__11737;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__11739__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11740 = y;
var G__11741 = cljs.core.first.call(null,more);
var G__11742 = cljs.core.next.call(null,more);
x = G__11740;
y = G__11741;
more = G__11742;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11739 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11739__delegate.call(this, x, y, more);
};
G__11739.cljs$lang$maxFixedArity = 2;
G__11739.cljs$lang$applyTo = (function (arglist__11743){
var x = cljs.core.first(arglist__11743);
var y = cljs.core.first(cljs.core.next(arglist__11743));
var more = cljs.core.rest(cljs.core.next(arglist__11743));
return G__11739__delegate(x, y, more);
});
G__11739.cljs$lang$arity$variadic = G__11739__delegate;
return G__11739;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__11744__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11745 = y;
var G__11746 = cljs.core.first.call(null,more);
var G__11747 = cljs.core.next.call(null,more);
x = G__11745;
y = G__11746;
more = G__11747;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11744__delegate.call(this, x, y, more);
};
G__11744.cljs$lang$maxFixedArity = 2;
G__11744.cljs$lang$applyTo = (function (arglist__11748){
var x = cljs.core.first(arglist__11748);
var y = cljs.core.first(cljs.core.next(arglist__11748));
var more = cljs.core.rest(cljs.core.next(arglist__11748));
return G__11744__delegate(x, y, more);
});
G__11744.cljs$lang$arity$variadic = G__11744__delegate;
return G__11744;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__11749__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11750 = y;
var G__11751 = cljs.core.first.call(null,more);
var G__11752 = cljs.core.next.call(null,more);
x = G__11750;
y = G__11751;
more = G__11752;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11749 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11749__delegate.call(this, x, y, more);
};
G__11749.cljs$lang$maxFixedArity = 2;
G__11749.cljs$lang$applyTo = (function (arglist__11753){
var x = cljs.core.first(arglist__11753);
var y = cljs.core.first(cljs.core.next(arglist__11753));
var more = cljs.core.rest(cljs.core.next(arglist__11753));
return G__11749__delegate(x, y, more);
});
G__11749.cljs$lang$arity$variadic = G__11749__delegate;
return G__11749;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__11754__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11755 = y;
var G__11756 = cljs.core.first.call(null,more);
var G__11757 = cljs.core.next.call(null,more);
x = G__11755;
y = G__11756;
more = G__11757;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11754 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11754__delegate.call(this, x, y, more);
};
G__11754.cljs$lang$maxFixedArity = 2;
G__11754.cljs$lang$applyTo = (function (arglist__11758){
var x = cljs.core.first(arglist__11758);
var y = cljs.core.first(cljs.core.next(arglist__11758));
var more = cljs.core.rest(cljs.core.next(arglist__11758));
return G__11754__delegate(x, y, more);
});
G__11754.cljs$lang$arity$variadic = G__11754__delegate;
return G__11754;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__11759__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__11759 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11759__delegate.call(this, x, y, more);
};
G__11759.cljs$lang$maxFixedArity = 2;
G__11759.cljs$lang$applyTo = (function (arglist__11760){
var x = cljs.core.first(arglist__11760);
var y = cljs.core.first(cljs.core.next(arglist__11760));
var more = cljs.core.rest(cljs.core.next(arglist__11760));
return G__11759__delegate(x, y, more);
});
G__11759.cljs$lang$arity$variadic = G__11759__delegate;
return G__11759;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__11761__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__11761 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11761__delegate.call(this, x, y, more);
};
G__11761.cljs$lang$maxFixedArity = 2;
G__11761.cljs$lang$applyTo = (function (arglist__11762){
var x = cljs.core.first(arglist__11762);
var y = cljs.core.first(cljs.core.next(arglist__11762));
var more = cljs.core.rest(cljs.core.next(arglist__11762));
return G__11761__delegate(x, y, more);
});
G__11761.cljs$lang$arity$variadic = G__11761__delegate;
return G__11761;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__11763 = (n % d);
return cljs.core.fix.call(null,((n - rem__11763) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11764 = cljs.core.quot.call(null,n,d);
return (n - (d * q__11764));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(n){
var c__11765 = 0;
var n__11766 = n;
while(true){
if((n__11766 === 0))
{return c__11765;
} else
{{
var G__11767 = (c__11765 + 1);
var G__11768 = (n__11766 & (n__11766 - 1));
c__11765 = G__11767;
n__11766 = G__11768;
continue;
}
}
break;
}
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__11769__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11770 = y;
var G__11771 = cljs.core.first.call(null,more);
var G__11772 = cljs.core.next.call(null,more);
x = G__11770;
y = G__11771;
more = G__11772;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11769__delegate.call(this, x, y, more);
};
G__11769.cljs$lang$maxFixedArity = 2;
G__11769.cljs$lang$applyTo = (function (arglist__11773){
var x = cljs.core.first(arglist__11773);
var y = cljs.core.first(cljs.core.next(arglist__11773));
var more = cljs.core.rest(cljs.core.next(arglist__11773));
return G__11769__delegate(x, y, more);
});
G__11769.cljs$lang$arity$variadic = G__11769__delegate;
return G__11769;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__11774 = n;
var xs__11775 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11776 = xs__11775;
if(cljs.core.truth_(and__3546__auto____11776))
{return (n__11774 > 0);
} else
{return and__3546__auto____11776;
}
})()))
{{
var G__11777 = (n__11774 - 1);
var G__11778 = cljs.core.next.call(null,xs__11775);
n__11774 = G__11777;
xs__11775 = G__11778;
continue;
}
} else
{return xs__11775;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__11779__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11780 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__11781 = cljs.core.next.call(null,more);
sb = G__11780;
more = G__11781;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__11779 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11779__delegate.call(this, x, ys);
};
G__11779.cljs$lang$maxFixedArity = 1;
G__11779.cljs$lang$applyTo = (function (arglist__11782){
var x = cljs.core.first(arglist__11782);
var ys = cljs.core.rest(arglist__11782);
return G__11779__delegate(x, ys);
});
G__11779.cljs$lang$arity$variadic = G__11779__delegate;
return G__11779;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__11783__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__11784 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__11785 = cljs.core.next.call(null,more);
sb = G__11784;
more = G__11785;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__11783 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11783__delegate.call(this, x, ys);
};
G__11783.cljs$lang$maxFixedArity = 1;
G__11783.cljs$lang$applyTo = (function (arglist__11786){
var x = cljs.core.first(arglist__11786);
var ys = cljs.core.rest(arglist__11786);
return G__11783__delegate(x, ys);
});
G__11783.cljs$lang$arity$variadic = G__11783__delegate;
return G__11783;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__11787 = cljs.core.seq.call(null,x);
var ys__11788 = cljs.core.seq.call(null,y);
while(true){
if((xs__11787 == null))
{return (ys__11788 == null);
} else
{if((ys__11788 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__11787),cljs.core.first.call(null,ys__11788)))
{{
var G__11789 = cljs.core.next.call(null,xs__11787);
var G__11790 = cljs.core.next.call(null,ys__11788);
xs__11787 = G__11789;
ys__11788 = G__11790;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__11791_SHARP_,p2__11792_SHARP_){
return cljs.core.hash_combine.call(null,p1__11791_SHARP_,cljs.core.hash.call(null,p2__11792_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__11793 = 0;
var s__11794 = cljs.core.seq.call(null,m);
while(true){
if(cljs.core.truth_(s__11794))
{var e__11795 = cljs.core.first.call(null,s__11794);
{
var G__11796 = ((h__11793 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__11795)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__11795)))) % 4503599627370496);
var G__11797 = cljs.core.next.call(null,s__11794);
h__11793 = G__11796;
s__11794 = G__11797;
continue;
}
} else
{return h__11793;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__11798 = 0;
var s__11799 = cljs.core.seq.call(null,s);
while(true){
if(cljs.core.truth_(s__11799))
{var e__11800 = cljs.core.first.call(null,s__11799);
{
var G__11801 = ((h__11798 + cljs.core.hash.call(null,e__11800)) % 4503599627370496);
var G__11802 = cljs.core.next.call(null,s__11799);
h__11798 = G__11801;
s__11799 = G__11802;
continue;
}
} else
{return h__11798;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__11803__11804 = cljs.core.seq.call(null,fn_map);
if(cljs.core.truth_(G__11803__11804))
{var G__11806__11808 = cljs.core.first.call(null,G__11803__11804);
var vec__11807__11809 = G__11806__11808;
var key_name__11810 = cljs.core.nth.call(null,vec__11807__11809,0,null);
var f__11811 = cljs.core.nth.call(null,vec__11807__11809,1,null);
var G__11803__11812 = G__11803__11804;
var G__11806__11813 = G__11806__11808;
var G__11803__11814 = G__11803__11812;
while(true){
var vec__11815__11816 = G__11806__11813;
var key_name__11817 = cljs.core.nth.call(null,vec__11815__11816,0,null);
var f__11818 = cljs.core.nth.call(null,vec__11815__11816,1,null);
var G__11803__11819 = G__11803__11814;
var str_name__11820 = cljs.core.name.call(null,key_name__11817);
obj[str_name__11820] = f__11818;
var temp__3698__auto____11821 = cljs.core.next.call(null,G__11803__11819);
if(cljs.core.truth_(temp__3698__auto____11821))
{var G__11803__11822 = temp__3698__auto____11821;
{
var G__11823 = cljs.core.first.call(null,G__11803__11822);
var G__11824 = G__11803__11822;
G__11806__11813 = G__11823;
G__11803__11814 = G__11824;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706670;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11825 = this;
var h__364__auto____11826 = this__11825.__hash;
if((h__364__auto____11826 != null))
{return h__364__auto____11826;
} else
{var h__364__auto____11827 = cljs.core.hash_coll.call(null,coll);
this__11825.__hash = h__364__auto____11827;
return h__364__auto____11827;
}
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11828 = this;
return (new cljs.core.List(this__11828.meta,o,coll,(this__11828.count + 1),null));
});
cljs.core.List.prototype.cljs$core$ASeq$ = true;
cljs.core.List.prototype.toString = (function (){
var this__11829 = this;
var this$__11830 = this;
return cljs.core.pr_str.call(null,this$__11830);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11831 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11832 = this;
return this__11832.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11833 = this;
return this__11833.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11834 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11835 = this;
return this__11835.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11836 = this;
return this__11836.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11837 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11838 = this;
return (new cljs.core.List(meta,this__11838.first,this__11838.rest,this__11838.count,this__11838.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11839 = this;
return this__11839.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11840 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32706638;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11841 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11842 = this;
return (new cljs.core.List(this__11842.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__11843 = this;
var this$__11844 = this;
return cljs.core.pr_str.call(null,this$__11844);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11845 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11846 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11847 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11848 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11849 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11850 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11851 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11852 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11853 = this;
return this__11853.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11854 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__11855__11856 = coll;
if((G__11855__11856 != null))
{if((function (){var or__3548__auto____11857 = (G__11855__11856.cljs$lang$protocol_mask$partition0$ & 67108864);
if(or__3548__auto____11857)
{return or__3548__auto____11857;
} else
{return G__11855__11856.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__11855__11856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11855__11856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__11855__11856);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__11858){
var items = cljs.core.seq(arglist__11858);;
return list__delegate(items);
});
list.cljs$lang$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32702572;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11859 = this;
var h__364__auto____11860 = this__11859.__hash;
if((h__364__auto____11860 != null))
{return h__364__auto____11860;
} else
{var h__364__auto____11861 = cljs.core.hash_coll.call(null,coll);
this__11859.__hash = h__364__auto____11861;
return h__364__auto____11861;
}
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11862 = this;
return (new cljs.core.Cons(null,o,coll,this__11862.__hash));
});
cljs.core.Cons.prototype.cljs$core$ASeq$ = true;
cljs.core.Cons.prototype.toString = (function (){
var this__11863 = this;
var this$__11864 = this;
return cljs.core.pr_str.call(null,this$__11864);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11865 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11866 = this;
return this__11866.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11867 = this;
if((this__11867.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__11867.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11868 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11869 = this;
return (new cljs.core.Cons(meta,this__11869.first,this__11869.rest,this__11869.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11870 = this;
return this__11870.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11871 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11871.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3548__auto____11872 = (coll == null);
if(or__3548__auto____11872)
{return or__3548__auto____11872;
} else
{var G__11873__11874 = coll;
if((G__11873__11874 != null))
{if((function (){var or__3548__auto____11875 = (G__11873__11874.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3548__auto____11875)
{return or__3548__auto____11875;
} else
{return G__11873__11874.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11873__11874.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11873__11874);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11873__11874);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__11876__11877 = x;
if((G__11876__11877 != null))
{if((function (){var or__3548__auto____11878 = (G__11876__11877.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3548__auto____11878)
{return or__3548__auto____11878;
} else
{return G__11876__11877.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__11876__11877.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11876__11877);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__11876__11877);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__11879 = null;
var G__11879__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__11879__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__11879 = function(string,f,start){
switch(arguments.length){
case 2:
return G__11879__2.call(this,string,f);
case 3:
return G__11879__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11879;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__11880 = null;
var G__11880__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__11880__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__11880 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__11880__2.call(this,string,k);
case 3:
return G__11880__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11880;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__11881 = null;
var G__11881__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__11881__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__11881 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__11881__2.call(this,string,n);
case 3:
return G__11881__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11881;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__11890 = null;
var G__11890__2 = (function (tsym11884,coll){
var tsym11884__11886 = this;
var this$__11887 = tsym11884__11886;
return cljs.core.get.call(null,coll,this$__11887.toString());
});
var G__11890__3 = (function (tsym11885,coll,not_found){
var tsym11885__11888 = this;
var this$__11889 = tsym11885__11888;
return cljs.core.get.call(null,coll,this$__11889.toString(),not_found);
});
G__11890 = function(tsym11885,coll,not_found){
switch(arguments.length){
case 2:
return G__11890__2.call(this,tsym11885,coll);
case 3:
return G__11890__3.call(this,tsym11885,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11890;
})()
;
String.prototype.apply = (function (tsym11882,args11883){
return tsym11882.call.apply(tsym11882,[tsym11882].concat(cljs.core.aclone.call(null,args11883)));
});
String['prototype']['apply'] = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__11891 = lazy_seq.x;
if(cljs.core.truth_(lazy_seq.realized))
{return x__11891;
} else
{lazy_seq.x = x__11891.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11892 = this;
var h__364__auto____11893 = this__11892.__hash;
if((h__364__auto____11893 != null))
{return h__364__auto____11893;
} else
{var h__364__auto____11894 = cljs.core.hash_coll.call(null,coll);
this__11892.__hash = h__364__auto____11894;
return h__364__auto____11894;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11895 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__11896 = this;
var this$__11897 = this;
return cljs.core.pr_str.call(null,this$__11897);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11898 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11899 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11900 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11901 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11902 = this;
return (new cljs.core.LazySeq(meta,this__11902.realized,this__11902.x,this__11902.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11903 = this;
return this__11903.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11904 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11904.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__11905 = [];
var s__11906 = s;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__11906)))
{ary__11905.push(cljs.core.first.call(null,s__11906));
{
var G__11907 = cljs.core.next.call(null,s__11906);
s__11906 = G__11907;
continue;
}
} else
{return ary__11905;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__11908 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__11909 = 0;
var xs__11910 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_(xs__11910))
{(ret__11908[i__11909] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__11910)));
{
var G__11911 = (i__11909 + 1);
var G__11912 = cljs.core.next.call(null,xs__11910);
i__11909 = G__11911;
xs__11910 = G__11912;
continue;
}
} else
{}
break;
}
return ret__11908;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__11913 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11914 = cljs.core.seq.call(null,init_val_or_seq);
var i__11915 = 0;
var s__11916 = s__11914;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11917 = s__11916;
if(cljs.core.truth_(and__3546__auto____11917))
{return (i__11915 < size);
} else
{return and__3546__auto____11917;
}
})()))
{(a__11913[i__11915] = cljs.core.first.call(null,s__11916));
{
var G__11920 = (i__11915 + 1);
var G__11921 = cljs.core.next.call(null,s__11916);
i__11915 = G__11920;
s__11916 = G__11921;
continue;
}
} else
{return a__11913;
}
break;
}
} else
{var n__685__auto____11918 = size;
var i__11919 = 0;
while(true){
if((i__11919 < n__685__auto____11918))
{(a__11913[i__11919] = init_val_or_seq);
{
var G__11922 = (i__11919 + 1);
i__11919 = G__11922;
continue;
}
} else
{}
break;
}
return a__11913;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__11923 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11924 = cljs.core.seq.call(null,init_val_or_seq);
var i__11925 = 0;
var s__11926 = s__11924;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11927 = s__11926;
if(cljs.core.truth_(and__3546__auto____11927))
{return (i__11925 < size);
} else
{return and__3546__auto____11927;
}
})()))
{(a__11923[i__11925] = cljs.core.first.call(null,s__11926));
{
var G__11930 = (i__11925 + 1);
var G__11931 = cljs.core.next.call(null,s__11926);
i__11925 = G__11930;
s__11926 = G__11931;
continue;
}
} else
{return a__11923;
}
break;
}
} else
{var n__685__auto____11928 = size;
var i__11929 = 0;
while(true){
if((i__11929 < n__685__auto____11928))
{(a__11923[i__11929] = init_val_or_seq);
{
var G__11932 = (i__11929 + 1);
i__11929 = G__11932;
continue;
}
} else
{}
break;
}
return a__11923;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__11933 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__11934 = cljs.core.seq.call(null,init_val_or_seq);
var i__11935 = 0;
var s__11936 = s__11934;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11937 = s__11936;
if(cljs.core.truth_(and__3546__auto____11937))
{return (i__11935 < size);
} else
{return and__3546__auto____11937;
}
})()))
{(a__11933[i__11935] = cljs.core.first.call(null,s__11936));
{
var G__11940 = (i__11935 + 1);
var G__11941 = cljs.core.next.call(null,s__11936);
i__11935 = G__11940;
s__11936 = G__11941;
continue;
}
} else
{return a__11933;
}
break;
}
} else
{var n__685__auto____11938 = size;
var i__11939 = 0;
while(true){
if((i__11939 < n__685__auto____11938))
{(a__11933[i__11939] = init_val_or_seq);
{
var G__11942 = (i__11939 + 1);
i__11939 = G__11942;
continue;
}
} else
{}
break;
}
return a__11933;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__11943 = s;
var i__11944 = n;
var sum__11945 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11946 = (i__11944 > 0);
if(and__3546__auto____11946)
{return cljs.core.seq.call(null,s__11943);
} else
{return and__3546__auto____11946;
}
})()))
{{
var G__11947 = cljs.core.next.call(null,s__11943);
var G__11948 = (i__11944 - 1);
var G__11949 = (sum__11945 + 1);
s__11943 = G__11947;
i__11944 = G__11948;
sum__11945 = G__11949;
continue;
}
} else
{return sum__11945;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11950 = cljs.core.seq.call(null,x);
if(cljs.core.truth_(s__11950))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__11950),concat.call(null,cljs.core.rest.call(null,s__11950),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__11953__delegate = function (x,y,zs){
var cat__11952 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__11951 = cljs.core.seq.call(null,xys);
if(cljs.core.truth_(xys__11951))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__11951),cat.call(null,cljs.core.rest.call(null,xys__11951),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});
return cat__11952.call(null,concat.call(null,x,y),zs);
};
var G__11953 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11953__delegate.call(this, x, y, zs);
};
G__11953.cljs$lang$maxFixedArity = 2;
G__11953.cljs$lang$applyTo = (function (arglist__11954){
var x = cljs.core.first(arglist__11954);
var y = cljs.core.first(cljs.core.next(arglist__11954));
var zs = cljs.core.rest(cljs.core.next(arglist__11954));
return G__11953__delegate(x, y, zs);
});
G__11953.cljs$lang$arity$variadic = G__11953__delegate;
return G__11953;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__11955__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__11955 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11955__delegate.call(this, a, b, c, d, more);
};
G__11955.cljs$lang$maxFixedArity = 4;
G__11955.cljs$lang$applyTo = (function (arglist__11956){
var a = cljs.core.first(arglist__11956);
var b = cljs.core.first(cljs.core.next(arglist__11956));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11956)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11956))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11956))));
return G__11955__delegate(a, b, c, d, more);
});
G__11955.cljs$lang$arity$variadic = G__11955__delegate;
return G__11955;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__11957 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__11958 = cljs.core._first.call(null,args__11957);
var args__11959 = cljs.core._rest.call(null,args__11957);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__11958);
} else
{return f.call(null,a__11958);
}
} else
{var b__11960 = cljs.core._first.call(null,args__11959);
var args__11961 = cljs.core._rest.call(null,args__11959);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__11958,b__11960);
} else
{return f.call(null,a__11958,b__11960);
}
} else
{var c__11962 = cljs.core._first.call(null,args__11961);
var args__11963 = cljs.core._rest.call(null,args__11961);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__11958,b__11960,c__11962);
} else
{return f.call(null,a__11958,b__11960,c__11962);
}
} else
{var d__11964 = cljs.core._first.call(null,args__11963);
var args__11965 = cljs.core._rest.call(null,args__11963);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__11958,b__11960,c__11962,d__11964);
} else
{return f.call(null,a__11958,b__11960,c__11962,d__11964);
}
} else
{var e__11966 = cljs.core._first.call(null,args__11965);
var args__11967 = cljs.core._rest.call(null,args__11965);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__11958,b__11960,c__11962,d__11964,e__11966);
} else
{return f.call(null,a__11958,b__11960,c__11962,d__11964,e__11966);
}
} else
{var f__11968 = cljs.core._first.call(null,args__11967);
var args__11969 = cljs.core._rest.call(null,args__11967);
if((argc === 6))
{if(f__11968.cljs$lang$arity$6)
{return f__11968.cljs$lang$arity$6(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968);
}
} else
{var g__11970 = cljs.core._first.call(null,args__11969);
var args__11971 = cljs.core._rest.call(null,args__11969);
if((argc === 7))
{if(f__11968.cljs$lang$arity$7)
{return f__11968.cljs$lang$arity$7(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970);
}
} else
{var h__11972 = cljs.core._first.call(null,args__11971);
var args__11973 = cljs.core._rest.call(null,args__11971);
if((argc === 8))
{if(f__11968.cljs$lang$arity$8)
{return f__11968.cljs$lang$arity$8(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972);
}
} else
{var i__11974 = cljs.core._first.call(null,args__11973);
var args__11975 = cljs.core._rest.call(null,args__11973);
if((argc === 9))
{if(f__11968.cljs$lang$arity$9)
{return f__11968.cljs$lang$arity$9(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974);
}
} else
{var j__11976 = cljs.core._first.call(null,args__11975);
var args__11977 = cljs.core._rest.call(null,args__11975);
if((argc === 10))
{if(f__11968.cljs$lang$arity$10)
{return f__11968.cljs$lang$arity$10(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976);
}
} else
{var k__11978 = cljs.core._first.call(null,args__11977);
var args__11979 = cljs.core._rest.call(null,args__11977);
if((argc === 11))
{if(f__11968.cljs$lang$arity$11)
{return f__11968.cljs$lang$arity$11(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978);
}
} else
{var l__11980 = cljs.core._first.call(null,args__11979);
var args__11981 = cljs.core._rest.call(null,args__11979);
if((argc === 12))
{if(f__11968.cljs$lang$arity$12)
{return f__11968.cljs$lang$arity$12(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980);
}
} else
{var m__11982 = cljs.core._first.call(null,args__11981);
var args__11983 = cljs.core._rest.call(null,args__11981);
if((argc === 13))
{if(f__11968.cljs$lang$arity$13)
{return f__11968.cljs$lang$arity$13(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982);
}
} else
{var n__11984 = cljs.core._first.call(null,args__11983);
var args__11985 = cljs.core._rest.call(null,args__11983);
if((argc === 14))
{if(f__11968.cljs$lang$arity$14)
{return f__11968.cljs$lang$arity$14(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984);
}
} else
{var o__11986 = cljs.core._first.call(null,args__11985);
var args__11987 = cljs.core._rest.call(null,args__11985);
if((argc === 15))
{if(f__11968.cljs$lang$arity$15)
{return f__11968.cljs$lang$arity$15(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986);
}
} else
{var p__11988 = cljs.core._first.call(null,args__11987);
var args__11989 = cljs.core._rest.call(null,args__11987);
if((argc === 16))
{if(f__11968.cljs$lang$arity$16)
{return f__11968.cljs$lang$arity$16(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988);
}
} else
{var q__11990 = cljs.core._first.call(null,args__11989);
var args__11991 = cljs.core._rest.call(null,args__11989);
if((argc === 17))
{if(f__11968.cljs$lang$arity$17)
{return f__11968.cljs$lang$arity$17(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990);
}
} else
{var r__11992 = cljs.core._first.call(null,args__11991);
var args__11993 = cljs.core._rest.call(null,args__11991);
if((argc === 18))
{if(f__11968.cljs$lang$arity$18)
{return f__11968.cljs$lang$arity$18(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992);
}
} else
{var s__11994 = cljs.core._first.call(null,args__11993);
var args__11995 = cljs.core._rest.call(null,args__11993);
if((argc === 19))
{if(f__11968.cljs$lang$arity$19)
{return f__11968.cljs$lang$arity$19(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992,s__11994);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992,s__11994);
}
} else
{var t__11996 = cljs.core._first.call(null,args__11995);
var args__11997 = cljs.core._rest.call(null,args__11995);
if((argc === 20))
{if(f__11968.cljs$lang$arity$20)
{return f__11968.cljs$lang$arity$20(a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992,s__11994,t__11996);
} else
{return f__11968.call(null,a__11958,b__11960,c__11962,d__11964,e__11966,f__11968,g__11970,h__11972,i__11974,j__11976,k__11978,l__11980,m__11982,n__11984,o__11986,p__11988,q__11990,r__11992,s__11994,t__11996);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__11998 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__11999 = cljs.core.bounded_count.call(null,args,(fixed_arity__11998 + 1));
if((bc__11999 <= fixed_arity__11998))
{return cljs.core.apply_to.call(null,f,bc__11999,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__12000 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12001 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12002 = cljs.core.bounded_count.call(null,arglist__12000,(fixed_arity__12001 + 1));
if((bc__12002 <= fixed_arity__12001))
{return cljs.core.apply_to.call(null,f,bc__12002,arglist__12000);
} else
{return f.cljs$lang$applyTo(arglist__12000);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12000));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__12003 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12004 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12005 = cljs.core.bounded_count.call(null,arglist__12003,(fixed_arity__12004 + 1));
if((bc__12005 <= fixed_arity__12004))
{return cljs.core.apply_to.call(null,f,bc__12005,arglist__12003);
} else
{return f.cljs$lang$applyTo(arglist__12003);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12003));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__12006 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12007 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12008 = cljs.core.bounded_count.call(null,arglist__12006,(fixed_arity__12007 + 1));
if((bc__12008 <= fixed_arity__12007))
{return cljs.core.apply_to.call(null,f,bc__12008,arglist__12006);
} else
{return f.cljs$lang$applyTo(arglist__12006);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12006));
}
});
var apply__6 = (function() { 
var G__12012__delegate = function (f,a,b,c,d,args){
var arglist__12009 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12010 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12011 = cljs.core.bounded_count.call(null,arglist__12009,(fixed_arity__12010 + 1));
if((bc__12011 <= fixed_arity__12010))
{return cljs.core.apply_to.call(null,f,bc__12011,arglist__12009);
} else
{return f.cljs$lang$applyTo(arglist__12009);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12009));
}
};
var G__12012 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12012__delegate.call(this, f, a, b, c, d, args);
};
G__12012.cljs$lang$maxFixedArity = 5;
G__12012.cljs$lang$applyTo = (function (arglist__12013){
var f = cljs.core.first(arglist__12013);
var a = cljs.core.first(cljs.core.next(arglist__12013));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12013)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12013))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12013)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12013)))));
return G__12012__delegate(f, a, b, c, d, args);
});
G__12012.cljs$lang$arity$variadic = G__12012__delegate;
return G__12012;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__12014){
var obj = cljs.core.first(arglist__12014);
var f = cljs.core.first(cljs.core.next(arglist__12014));
var args = cljs.core.rest(cljs.core.next(arglist__12014));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__12015__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__12015 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12015__delegate.call(this, x, y, more);
};
G__12015.cljs$lang$maxFixedArity = 2;
G__12015.cljs$lang$applyTo = (function (arglist__12016){
var x = cljs.core.first(arglist__12016);
var y = cljs.core.first(cljs.core.next(arglist__12016));
var more = cljs.core.rest(cljs.core.next(arglist__12016));
return G__12015__delegate(x, y, more);
});
G__12015.cljs$lang$arity$variadic = G__12015__delegate;
return G__12015;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__12017 = pred;
var G__12018 = cljs.core.next.call(null,coll);
pred = G__12017;
coll = G__12018;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____12019 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3548__auto____12019))
{return or__3548__auto____12019;
} else
{{
var G__12020 = pred;
var G__12021 = cljs.core.next.call(null,coll);
pred = G__12020;
coll = G__12021;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12022 = null;
var G__12022__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12022__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12022__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12022__3 = (function() { 
var G__12023__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__12023 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12023__delegate.call(this, x, y, zs);
};
G__12023.cljs$lang$maxFixedArity = 2;
G__12023.cljs$lang$applyTo = (function (arglist__12024){
var x = cljs.core.first(arglist__12024);
var y = cljs.core.first(cljs.core.next(arglist__12024));
var zs = cljs.core.rest(cljs.core.next(arglist__12024));
return G__12023__delegate(x, y, zs);
});
G__12023.cljs$lang$arity$variadic = G__12023__delegate;
return G__12023;
})()
;
G__12022 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__12022__0.call(this);
case 1:
return G__12022__1.call(this,x);
case 2:
return G__12022__2.call(this,x,y);
default:
return G__12022__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__12022.cljs$lang$maxFixedArity = 2;
G__12022.cljs$lang$applyTo = G__12022__3.cljs$lang$applyTo;
return G__12022;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12025__delegate = function (args){
return x;
};
var G__12025 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12025__delegate.call(this, args);
};
G__12025.cljs$lang$maxFixedArity = 0;
G__12025.cljs$lang$applyTo = (function (arglist__12026){
var args = cljs.core.seq(arglist__12026);;
return G__12025__delegate(args);
});
G__12025.cljs$lang$arity$variadic = G__12025__delegate;
return G__12025;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__12030 = null;
var G__12030__0 = (function (){
return f.call(null,g.call(null));
});
var G__12030__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12030__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12030__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12030__4 = (function() { 
var G__12031__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12031 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12031__delegate.call(this, x, y, z, args);
};
G__12031.cljs$lang$maxFixedArity = 3;
G__12031.cljs$lang$applyTo = (function (arglist__12032){
var x = cljs.core.first(arglist__12032);
var y = cljs.core.first(cljs.core.next(arglist__12032));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12032)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12032)));
return G__12031__delegate(x, y, z, args);
});
G__12031.cljs$lang$arity$variadic = G__12031__delegate;
return G__12031;
})()
;
G__12030 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12030__0.call(this);
case 1:
return G__12030__1.call(this,x);
case 2:
return G__12030__2.call(this,x,y);
case 3:
return G__12030__3.call(this,x,y,z);
default:
return G__12030__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12030.cljs$lang$maxFixedArity = 3;
G__12030.cljs$lang$applyTo = G__12030__4.cljs$lang$applyTo;
return G__12030;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__12033 = null;
var G__12033__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12033__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12033__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12033__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12033__4 = (function() { 
var G__12034__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12034__delegate.call(this, x, y, z, args);
};
G__12034.cljs$lang$maxFixedArity = 3;
G__12034.cljs$lang$applyTo = (function (arglist__12035){
var x = cljs.core.first(arglist__12035);
var y = cljs.core.first(cljs.core.next(arglist__12035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12035)));
return G__12034__delegate(x, y, z, args);
});
G__12034.cljs$lang$arity$variadic = G__12034__delegate;
return G__12034;
})()
;
G__12033 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12033__0.call(this);
case 1:
return G__12033__1.call(this,x);
case 2:
return G__12033__2.call(this,x,y);
case 3:
return G__12033__3.call(this,x,y,z);
default:
return G__12033__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12033.cljs$lang$maxFixedArity = 3;
G__12033.cljs$lang$applyTo = G__12033__4.cljs$lang$applyTo;
return G__12033;
})()
});
var comp__4 = (function() { 
var G__12036__delegate = function (f1,f2,f3,fs){
var fs__12027 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__12037__delegate = function (args){
var ret__12028 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12027),args);
var fs__12029 = cljs.core.next.call(null,fs__12027);
while(true){
if(cljs.core.truth_(fs__12029))
{{
var G__12038 = cljs.core.first.call(null,fs__12029).call(null,ret__12028);
var G__12039 = cljs.core.next.call(null,fs__12029);
ret__12028 = G__12038;
fs__12029 = G__12039;
continue;
}
} else
{return ret__12028;
}
break;
}
};
var G__12037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12037__delegate.call(this, args);
};
G__12037.cljs$lang$maxFixedArity = 0;
G__12037.cljs$lang$applyTo = (function (arglist__12040){
var args = cljs.core.seq(arglist__12040);;
return G__12037__delegate(args);
});
G__12037.cljs$lang$arity$variadic = G__12037__delegate;
return G__12037;
})()
;
};
var G__12036 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12036__delegate.call(this, f1, f2, f3, fs);
};
G__12036.cljs$lang$maxFixedArity = 3;
G__12036.cljs$lang$applyTo = (function (arglist__12041){
var f1 = cljs.core.first(arglist__12041);
var f2 = cljs.core.first(cljs.core.next(arglist__12041));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12041)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12041)));
return G__12036__delegate(f1, f2, f3, fs);
});
G__12036.cljs$lang$arity$variadic = G__12036__delegate;
return G__12036;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__12042__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12042 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12042__delegate.call(this, args);
};
G__12042.cljs$lang$maxFixedArity = 0;
G__12042.cljs$lang$applyTo = (function (arglist__12043){
var args = cljs.core.seq(arglist__12043);;
return G__12042__delegate(args);
});
G__12042.cljs$lang$arity$variadic = G__12042__delegate;
return G__12042;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__12044__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12044 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12044__delegate.call(this, args);
};
G__12044.cljs$lang$maxFixedArity = 0;
G__12044.cljs$lang$applyTo = (function (arglist__12045){
var args = cljs.core.seq(arglist__12045);;
return G__12044__delegate(args);
});
G__12044.cljs$lang$arity$variadic = G__12044__delegate;
return G__12044;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12046__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12046 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12046__delegate.call(this, args);
};
G__12046.cljs$lang$maxFixedArity = 0;
G__12046.cljs$lang$applyTo = (function (arglist__12047){
var args = cljs.core.seq(arglist__12047);;
return G__12046__delegate(args);
});
G__12046.cljs$lang$arity$variadic = G__12046__delegate;
return G__12046;
})()
;
});
var partial__5 = (function() { 
var G__12048__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12049__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12049 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12049__delegate.call(this, args);
};
G__12049.cljs$lang$maxFixedArity = 0;
G__12049.cljs$lang$applyTo = (function (arglist__12050){
var args = cljs.core.seq(arglist__12050);;
return G__12049__delegate(args);
});
G__12049.cljs$lang$arity$variadic = G__12049__delegate;
return G__12049;
})()
;
};
var G__12048 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12048__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12048.cljs$lang$maxFixedArity = 4;
G__12048.cljs$lang$applyTo = (function (arglist__12051){
var f = cljs.core.first(arglist__12051);
var arg1 = cljs.core.first(cljs.core.next(arglist__12051));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12051)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12051))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12051))));
return G__12048__delegate(f, arg1, arg2, arg3, more);
});
G__12048.cljs$lang$arity$variadic = G__12048__delegate;
return G__12048;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__12052 = null;
var G__12052__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__12052__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__12052__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__12052__4 = (function() { 
var G__12053__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__12053 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12053__delegate.call(this, a, b, c, ds);
};
G__12053.cljs$lang$maxFixedArity = 3;
G__12053.cljs$lang$applyTo = (function (arglist__12054){
var a = cljs.core.first(arglist__12054);
var b = cljs.core.first(cljs.core.next(arglist__12054));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12054)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12054)));
return G__12053__delegate(a, b, c, ds);
});
G__12053.cljs$lang$arity$variadic = G__12053__delegate;
return G__12053;
})()
;
G__12052 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__12052__1.call(this,a);
case 2:
return G__12052__2.call(this,a,b);
case 3:
return G__12052__3.call(this,a,b,c);
default:
return G__12052__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12052.cljs$lang$maxFixedArity = 3;
G__12052.cljs$lang$applyTo = G__12052__4.cljs$lang$applyTo;
return G__12052;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__12055 = null;
var G__12055__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12055__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__12055__4 = (function() { 
var G__12056__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__12056 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12056__delegate.call(this, a, b, c, ds);
};
G__12056.cljs$lang$maxFixedArity = 3;
G__12056.cljs$lang$applyTo = (function (arglist__12057){
var a = cljs.core.first(arglist__12057);
var b = cljs.core.first(cljs.core.next(arglist__12057));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12057)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12057)));
return G__12056__delegate(a, b, c, ds);
});
G__12056.cljs$lang$arity$variadic = G__12056__delegate;
return G__12056;
})()
;
G__12055 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12055__2.call(this,a,b);
case 3:
return G__12055__3.call(this,a,b,c);
default:
return G__12055__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12055.cljs$lang$maxFixedArity = 3;
G__12055.cljs$lang$applyTo = G__12055__4.cljs$lang$applyTo;
return G__12055;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__12058 = null;
var G__12058__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12058__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__12058__4 = (function() { 
var G__12059__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__12059 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12059__delegate.call(this, a, b, c, ds);
};
G__12059.cljs$lang$maxFixedArity = 3;
G__12059.cljs$lang$applyTo = (function (arglist__12060){
var a = cljs.core.first(arglist__12060);
var b = cljs.core.first(cljs.core.next(arglist__12060));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12060)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12060)));
return G__12059__delegate(a, b, c, ds);
});
G__12059.cljs$lang$arity$variadic = G__12059__delegate;
return G__12059;
})()
;
G__12058 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12058__2.call(this,a,b);
case 3:
return G__12058__3.call(this,a,b,c);
default:
return G__12058__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12058.cljs$lang$maxFixedArity = 3;
G__12058.cljs$lang$applyTo = G__12058__4.cljs$lang$applyTo;
return G__12058;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__12063 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12061 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12061))
{var s__12062 = temp__3698__auto____12061;
return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12062)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12062)));
} else
{return null;
}
})));
});
return mapi__12063.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12064 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12064))
{var s__12065 = temp__3698__auto____12064;
var x__12066 = f.call(null,cljs.core.first.call(null,s__12065));
if((x__12066 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__12065));
} else
{return cljs.core.cons.call(null,x__12066,keep.call(null,f,cljs.core.rest.call(null,s__12065)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__12076 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12073 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12073))
{var s__12074 = temp__3698__auto____12073;
var x__12075 = f.call(null,idx,cljs.core.first.call(null,s__12074));
if((x__12075 == null))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12074));
} else
{return cljs.core.cons.call(null,x__12075,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__12074)));
}
} else
{return null;
}
})));
});
return keepi__12076.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12083 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____12083))
{return p.call(null,y);
} else
{return and__3546__auto____12083;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12084 = p.call(null,x);
if(cljs.core.truth_(and__3546__auto____12084))
{var and__3546__auto____12085 = p.call(null,y);
if(cljs.core.truth_(and__3546__auto____12085))
{return p.call(null,z);
} else
{return and__3546__auto____12085;
}
} else
{return and__3546__auto____12084;
}
})());
});
var ep1__4 = (function() { 
var G__12121__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12086 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____12086))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____12086;
}
})());
};
var G__12121 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12121__delegate.call(this, x, y, z, args);
};
G__12121.cljs$lang$maxFixedArity = 3;
G__12121.cljs$lang$applyTo = (function (arglist__12122){
var x = cljs.core.first(arglist__12122);
var y = cljs.core.first(cljs.core.next(arglist__12122));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12122)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12122)));
return G__12121__delegate(x, y, z, args);
});
G__12121.cljs$lang$arity$variadic = G__12121__delegate;
return G__12121;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12087 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12087))
{return p2.call(null,x);
} else
{return and__3546__auto____12087;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12088 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12088))
{var and__3546__auto____12089 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____12089))
{var and__3546__auto____12090 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____12090))
{return p2.call(null,y);
} else
{return and__3546__auto____12090;
}
} else
{return and__3546__auto____12089;
}
} else
{return and__3546__auto____12088;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12091 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12091))
{var and__3546__auto____12092 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____12092))
{var and__3546__auto____12093 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____12093))
{var and__3546__auto____12094 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____12094))
{var and__3546__auto____12095 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____12095))
{return p2.call(null,z);
} else
{return and__3546__auto____12095;
}
} else
{return and__3546__auto____12094;
}
} else
{return and__3546__auto____12093;
}
} else
{return and__3546__auto____12092;
}
} else
{return and__3546__auto____12091;
}
})());
});
var ep2__4 = (function() { 
var G__12123__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12096 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____12096))
{return cljs.core.every_QMARK_.call(null,(function (p1__12067_SHARP_){
var and__3546__auto____12097 = p1.call(null,p1__12067_SHARP_);
if(cljs.core.truth_(and__3546__auto____12097))
{return p2.call(null,p1__12067_SHARP_);
} else
{return and__3546__auto____12097;
}
}),args);
} else
{return and__3546__auto____12096;
}
})());
};
var G__12123 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12123__delegate.call(this, x, y, z, args);
};
G__12123.cljs$lang$maxFixedArity = 3;
G__12123.cljs$lang$applyTo = (function (arglist__12124){
var x = cljs.core.first(arglist__12124);
var y = cljs.core.first(cljs.core.next(arglist__12124));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12124)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12124)));
return G__12123__delegate(x, y, z, args);
});
G__12123.cljs$lang$arity$variadic = G__12123__delegate;
return G__12123;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12098 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12098))
{var and__3546__auto____12099 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____12099))
{return p3.call(null,x);
} else
{return and__3546__auto____12099;
}
} else
{return and__3546__auto____12098;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12100 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12100))
{var and__3546__auto____12101 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____12101))
{var and__3546__auto____12102 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____12102))
{var and__3546__auto____12103 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____12103))
{var and__3546__auto____12104 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____12104))
{return p3.call(null,y);
} else
{return and__3546__auto____12104;
}
} else
{return and__3546__auto____12103;
}
} else
{return and__3546__auto____12102;
}
} else
{return and__3546__auto____12101;
}
} else
{return and__3546__auto____12100;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12105 = p1.call(null,x);
if(cljs.core.truth_(and__3546__auto____12105))
{var and__3546__auto____12106 = p2.call(null,x);
if(cljs.core.truth_(and__3546__auto____12106))
{var and__3546__auto____12107 = p3.call(null,x);
if(cljs.core.truth_(and__3546__auto____12107))
{var and__3546__auto____12108 = p1.call(null,y);
if(cljs.core.truth_(and__3546__auto____12108))
{var and__3546__auto____12109 = p2.call(null,y);
if(cljs.core.truth_(and__3546__auto____12109))
{var and__3546__auto____12110 = p3.call(null,y);
if(cljs.core.truth_(and__3546__auto____12110))
{var and__3546__auto____12111 = p1.call(null,z);
if(cljs.core.truth_(and__3546__auto____12111))
{var and__3546__auto____12112 = p2.call(null,z);
if(cljs.core.truth_(and__3546__auto____12112))
{return p3.call(null,z);
} else
{return and__3546__auto____12112;
}
} else
{return and__3546__auto____12111;
}
} else
{return and__3546__auto____12110;
}
} else
{return and__3546__auto____12109;
}
} else
{return and__3546__auto____12108;
}
} else
{return and__3546__auto____12107;
}
} else
{return and__3546__auto____12106;
}
} else
{return and__3546__auto____12105;
}
})());
});
var ep3__4 = (function() { 
var G__12125__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12113 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____12113))
{return cljs.core.every_QMARK_.call(null,(function (p1__12068_SHARP_){
var and__3546__auto____12114 = p1.call(null,p1__12068_SHARP_);
if(cljs.core.truth_(and__3546__auto____12114))
{var and__3546__auto____12115 = p2.call(null,p1__12068_SHARP_);
if(cljs.core.truth_(and__3546__auto____12115))
{return p3.call(null,p1__12068_SHARP_);
} else
{return and__3546__auto____12115;
}
} else
{return and__3546__auto____12114;
}
}),args);
} else
{return and__3546__auto____12113;
}
})());
};
var G__12125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12125__delegate.call(this, x, y, z, args);
};
G__12125.cljs$lang$maxFixedArity = 3;
G__12125.cljs$lang$applyTo = (function (arglist__12126){
var x = cljs.core.first(arglist__12126);
var y = cljs.core.first(cljs.core.next(arglist__12126));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12126)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12126)));
return G__12125__delegate(x, y, z, args);
});
G__12125.cljs$lang$arity$variadic = G__12125__delegate;
return G__12125;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__12127__delegate = function (p1,p2,p3,ps){
var ps__12116 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12069_SHARP_){
return p1__12069_SHARP_.call(null,x);
}),ps__12116);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12070_SHARP_){
var and__3546__auto____12117 = p1__12070_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____12117))
{return p1__12070_SHARP_.call(null,y);
} else
{return and__3546__auto____12117;
}
}),ps__12116);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12071_SHARP_){
var and__3546__auto____12118 = p1__12071_SHARP_.call(null,x);
if(cljs.core.truth_(and__3546__auto____12118))
{var and__3546__auto____12119 = p1__12071_SHARP_.call(null,y);
if(cljs.core.truth_(and__3546__auto____12119))
{return p1__12071_SHARP_.call(null,z);
} else
{return and__3546__auto____12119;
}
} else
{return and__3546__auto____12118;
}
}),ps__12116);
});
var epn__4 = (function() { 
var G__12128__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____12120 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3546__auto____12120))
{return cljs.core.every_QMARK_.call(null,(function (p1__12072_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12072_SHARP_,args);
}),ps__12116);
} else
{return and__3546__auto____12120;
}
})());
};
var G__12128 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12128__delegate.call(this, x, y, z, args);
};
G__12128.cljs$lang$maxFixedArity = 3;
G__12128.cljs$lang$applyTo = (function (arglist__12129){
var x = cljs.core.first(arglist__12129);
var y = cljs.core.first(cljs.core.next(arglist__12129));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12129)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12129)));
return G__12128__delegate(x, y, z, args);
});
G__12128.cljs$lang$arity$variadic = G__12128__delegate;
return G__12128;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__12127 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12127__delegate.call(this, p1, p2, p3, ps);
};
G__12127.cljs$lang$maxFixedArity = 3;
G__12127.cljs$lang$applyTo = (function (arglist__12130){
var p1 = cljs.core.first(arglist__12130);
var p2 = cljs.core.first(cljs.core.next(arglist__12130));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12130)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12130)));
return G__12127__delegate(p1, p2, p3, ps);
});
G__12127.cljs$lang$arity$variadic = G__12127__delegate;
return G__12127;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3548__auto____12132 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____12132))
{return or__3548__auto____12132;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____12133 = p.call(null,x);
if(cljs.core.truth_(or__3548__auto____12133))
{return or__3548__auto____12133;
} else
{var or__3548__auto____12134 = p.call(null,y);
if(cljs.core.truth_(or__3548__auto____12134))
{return or__3548__auto____12134;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__12170__delegate = function (x,y,z,args){
var or__3548__auto____12135 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____12135))
{return or__3548__auto____12135;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12170__delegate.call(this, x, y, z, args);
};
G__12170.cljs$lang$maxFixedArity = 3;
G__12170.cljs$lang$applyTo = (function (arglist__12171){
var x = cljs.core.first(arglist__12171);
var y = cljs.core.first(cljs.core.next(arglist__12171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12171)));
return G__12170__delegate(x, y, z, args);
});
G__12170.cljs$lang$arity$variadic = G__12170__delegate;
return G__12170;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3548__auto____12136 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12136))
{return or__3548__auto____12136;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____12137 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12137))
{return or__3548__auto____12137;
} else
{var or__3548__auto____12138 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____12138))
{return or__3548__auto____12138;
} else
{var or__3548__auto____12139 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____12139))
{return or__3548__auto____12139;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____12140 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12140))
{return or__3548__auto____12140;
} else
{var or__3548__auto____12141 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____12141))
{return or__3548__auto____12141;
} else
{var or__3548__auto____12142 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____12142))
{return or__3548__auto____12142;
} else
{var or__3548__auto____12143 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____12143))
{return or__3548__auto____12143;
} else
{var or__3548__auto____12144 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____12144))
{return or__3548__auto____12144;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__12172__delegate = function (x,y,z,args){
var or__3548__auto____12145 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____12145))
{return or__3548__auto____12145;
} else
{return cljs.core.some.call(null,(function (p1__12077_SHARP_){
var or__3548__auto____12146 = p1.call(null,p1__12077_SHARP_);
if(cljs.core.truth_(or__3548__auto____12146))
{return or__3548__auto____12146;
} else
{return p2.call(null,p1__12077_SHARP_);
}
}),args);
}
};
var G__12172 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12172__delegate.call(this, x, y, z, args);
};
G__12172.cljs$lang$maxFixedArity = 3;
G__12172.cljs$lang$applyTo = (function (arglist__12173){
var x = cljs.core.first(arglist__12173);
var y = cljs.core.first(cljs.core.next(arglist__12173));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12173)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12173)));
return G__12172__delegate(x, y, z, args);
});
G__12172.cljs$lang$arity$variadic = G__12172__delegate;
return G__12172;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3548__auto____12147 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12147))
{return or__3548__auto____12147;
} else
{var or__3548__auto____12148 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____12148))
{return or__3548__auto____12148;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____12149 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12149))
{return or__3548__auto____12149;
} else
{var or__3548__auto____12150 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____12150))
{return or__3548__auto____12150;
} else
{var or__3548__auto____12151 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____12151))
{return or__3548__auto____12151;
} else
{var or__3548__auto____12152 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____12152))
{return or__3548__auto____12152;
} else
{var or__3548__auto____12153 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____12153))
{return or__3548__auto____12153;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____12154 = p1.call(null,x);
if(cljs.core.truth_(or__3548__auto____12154))
{return or__3548__auto____12154;
} else
{var or__3548__auto____12155 = p2.call(null,x);
if(cljs.core.truth_(or__3548__auto____12155))
{return or__3548__auto____12155;
} else
{var or__3548__auto____12156 = p3.call(null,x);
if(cljs.core.truth_(or__3548__auto____12156))
{return or__3548__auto____12156;
} else
{var or__3548__auto____12157 = p1.call(null,y);
if(cljs.core.truth_(or__3548__auto____12157))
{return or__3548__auto____12157;
} else
{var or__3548__auto____12158 = p2.call(null,y);
if(cljs.core.truth_(or__3548__auto____12158))
{return or__3548__auto____12158;
} else
{var or__3548__auto____12159 = p3.call(null,y);
if(cljs.core.truth_(or__3548__auto____12159))
{return or__3548__auto____12159;
} else
{var or__3548__auto____12160 = p1.call(null,z);
if(cljs.core.truth_(or__3548__auto____12160))
{return or__3548__auto____12160;
} else
{var or__3548__auto____12161 = p2.call(null,z);
if(cljs.core.truth_(or__3548__auto____12161))
{return or__3548__auto____12161;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__12174__delegate = function (x,y,z,args){
var or__3548__auto____12162 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____12162))
{return or__3548__auto____12162;
} else
{return cljs.core.some.call(null,(function (p1__12078_SHARP_){
var or__3548__auto____12163 = p1.call(null,p1__12078_SHARP_);
if(cljs.core.truth_(or__3548__auto____12163))
{return or__3548__auto____12163;
} else
{var or__3548__auto____12164 = p2.call(null,p1__12078_SHARP_);
if(cljs.core.truth_(or__3548__auto____12164))
{return or__3548__auto____12164;
} else
{return p3.call(null,p1__12078_SHARP_);
}
}
}),args);
}
};
var G__12174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12174__delegate.call(this, x, y, z, args);
};
G__12174.cljs$lang$maxFixedArity = 3;
G__12174.cljs$lang$applyTo = (function (arglist__12175){
var x = cljs.core.first(arglist__12175);
var y = cljs.core.first(cljs.core.next(arglist__12175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12175)));
return G__12174__delegate(x, y, z, args);
});
G__12174.cljs$lang$arity$variadic = G__12174__delegate;
return G__12174;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__12176__delegate = function (p1,p2,p3,ps){
var ps__12165 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__12079_SHARP_){
return p1__12079_SHARP_.call(null,x);
}),ps__12165);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12080_SHARP_){
var or__3548__auto____12166 = p1__12080_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____12166))
{return or__3548__auto____12166;
} else
{return p1__12080_SHARP_.call(null,y);
}
}),ps__12165);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12081_SHARP_){
var or__3548__auto____12167 = p1__12081_SHARP_.call(null,x);
if(cljs.core.truth_(or__3548__auto____12167))
{return or__3548__auto____12167;
} else
{var or__3548__auto____12168 = p1__12081_SHARP_.call(null,y);
if(cljs.core.truth_(or__3548__auto____12168))
{return or__3548__auto____12168;
} else
{return p1__12081_SHARP_.call(null,z);
}
}
}),ps__12165);
});
var spn__4 = (function() { 
var G__12177__delegate = function (x,y,z,args){
var or__3548__auto____12169 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3548__auto____12169))
{return or__3548__auto____12169;
} else
{return cljs.core.some.call(null,(function (p1__12082_SHARP_){
return cljs.core.some.call(null,p1__12082_SHARP_,args);
}),ps__12165);
}
};
var G__12177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12177__delegate.call(this, x, y, z, args);
};
G__12177.cljs$lang$maxFixedArity = 3;
G__12177.cljs$lang$applyTo = (function (arglist__12178){
var x = cljs.core.first(arglist__12178);
var y = cljs.core.first(cljs.core.next(arglist__12178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12178)));
return G__12177__delegate(x, y, z, args);
});
G__12177.cljs$lang$arity$variadic = G__12177__delegate;
return G__12177;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__12176 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12176__delegate.call(this, p1, p2, p3, ps);
};
G__12176.cljs$lang$maxFixedArity = 3;
G__12176.cljs$lang$applyTo = (function (arglist__12179){
var p1 = cljs.core.first(arglist__12179);
var p2 = cljs.core.first(cljs.core.next(arglist__12179));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12179)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12179)));
return G__12176__delegate(p1, p2, p3, ps);
});
G__12176.cljs$lang$arity$variadic = G__12176__delegate;
return G__12176;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12180 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12180))
{var s__12181 = temp__3698__auto____12180;
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12181)),map.call(null,f,cljs.core.rest.call(null,s__12181)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12182 = cljs.core.seq.call(null,c1);
var s2__12183 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____12184 = s1__12182;
if(cljs.core.truth_(and__3546__auto____12184))
{return s2__12183;
} else
{return and__3546__auto____12184;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12182),cljs.core.first.call(null,s2__12183)),map.call(null,f,cljs.core.rest.call(null,s1__12182),cljs.core.rest.call(null,s2__12183)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12185 = cljs.core.seq.call(null,c1);
var s2__12186 = cljs.core.seq.call(null,c2);
var s3__12187 = cljs.core.seq.call(null,c3);
if(cljs.core.truth_((function (){var and__3546__auto____12188 = s1__12185;
if(cljs.core.truth_(and__3546__auto____12188))
{var and__3546__auto____12189 = s2__12186;
if(cljs.core.truth_(and__3546__auto____12189))
{return s3__12187;
} else
{return and__3546__auto____12189;
}
} else
{return and__3546__auto____12188;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12185),cljs.core.first.call(null,s2__12186),cljs.core.first.call(null,s3__12187)),map.call(null,f,cljs.core.rest.call(null,s1__12185),cljs.core.rest.call(null,s2__12186),cljs.core.rest.call(null,s3__12187)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__12192__delegate = function (f,c1,c2,c3,colls){
var step__12191 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12190 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12190))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12190),step.call(null,map.call(null,cljs.core.rest,ss__12190)));
} else
{return null;
}
})));
});
return map.call(null,(function (p1__12131_SHARP_){
return cljs.core.apply.call(null,f,p1__12131_SHARP_);
}),step__12191.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12192 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12192__delegate.call(this, f, c1, c2, c3, colls);
};
G__12192.cljs$lang$maxFixedArity = 4;
G__12192.cljs$lang$applyTo = (function (arglist__12193){
var f = cljs.core.first(arglist__12193);
var c1 = cljs.core.first(cljs.core.next(arglist__12193));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12193)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12193))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12193))));
return G__12192__delegate(f, c1, c2, c3, colls);
});
G__12192.cljs$lang$arity$variadic = G__12192__delegate;
return G__12192;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3698__auto____12194 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12194))
{var s__12195 = temp__3698__auto____12194;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12195),take.call(null,(n - 1),cljs.core.rest.call(null,s__12195)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12198 = (function (n,coll){
while(true){
var s__12196 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____12197 = (n > 0);
if(and__3546__auto____12197)
{return s__12196;
} else
{return and__3546__auto____12197;
}
})()))
{{
var G__12199 = (n - 1);
var G__12200 = cljs.core.rest.call(null,s__12196);
n = G__12199;
coll = G__12200;
continue;
}
} else
{return s__12196;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12198.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12201 = cljs.core.seq.call(null,coll);
var lead__12202 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(cljs.core.truth_(lead__12202))
{{
var G__12203 = cljs.core.next.call(null,s__12201);
var G__12204 = cljs.core.next.call(null,lead__12202);
s__12201 = G__12203;
lead__12202 = G__12204;
continue;
}
} else
{return s__12201;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12207 = (function (pred,coll){
while(true){
var s__12205 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3546__auto____12206 = s__12205;
if(cljs.core.truth_(and__3546__auto____12206))
{return pred.call(null,cljs.core.first.call(null,s__12205));
} else
{return and__3546__auto____12206;
}
})()))
{{
var G__12208 = pred;
var G__12209 = cljs.core.rest.call(null,s__12205);
pred = G__12208;
coll = G__12209;
continue;
}
} else
{return s__12205;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__12207.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12210 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12210))
{var s__12211 = temp__3698__auto____12210;
return cljs.core.concat.call(null,s__12211,cycle.call(null,s__12211));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12212 = cljs.core.seq.call(null,c1);
var s2__12213 = cljs.core.seq.call(null,c2);
if(cljs.core.truth_((function (){var and__3546__auto____12214 = s1__12212;
if(cljs.core.truth_(and__3546__auto____12214))
{return s2__12213;
} else
{return and__3546__auto____12214;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12212),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12213),interleave.call(null,cljs.core.rest.call(null,s1__12212),cljs.core.rest.call(null,s2__12213))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__12216__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12215 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12215))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12215),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12215)));
} else
{return null;
}
})));
};
var G__12216 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12216__delegate.call(this, c1, c2, colls);
};
G__12216.cljs$lang$maxFixedArity = 2;
G__12216.cljs$lang$applyTo = (function (arglist__12217){
var c1 = cljs.core.first(arglist__12217);
var c2 = cljs.core.first(cljs.core.next(arglist__12217));
var colls = cljs.core.rest(cljs.core.next(arglist__12217));
return G__12216__delegate(c1, c2, colls);
});
G__12216.cljs$lang$arity$variadic = G__12216__delegate;
return G__12216;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12220 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12218 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____12218))
{var coll__12219 = temp__3695__auto____12218;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12219),cat.call(null,cljs.core.rest.call(null,coll__12219),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});
return cat__12220.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__12221__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12221 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12221__delegate.call(this, f, coll, colls);
};
G__12221.cljs$lang$maxFixedArity = 2;
G__12221.cljs$lang$applyTo = (function (arglist__12222){
var f = cljs.core.first(arglist__12222);
var coll = cljs.core.first(cljs.core.next(arglist__12222));
var colls = cljs.core.rest(cljs.core.next(arglist__12222));
return G__12221__delegate(f, coll, colls);
});
G__12221.cljs$lang$arity$variadic = G__12221__delegate;
return G__12221;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12223 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12223))
{var s__12224 = temp__3698__auto____12223;
var f__12225 = cljs.core.first.call(null,s__12224);
var r__12226 = cljs.core.rest.call(null,s__12224);
if(cljs.core.truth_(pred.call(null,f__12225)))
{return cljs.core.cons.call(null,f__12225,filter.call(null,pred,r__12226));
} else
{return filter.call(null,pred,r__12226);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12228 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});
return walk__12228.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12227_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12227_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__12229__12230 = to;
if((G__12229__12230 != null))
{if((function (){var or__3548__auto____12231 = (G__12229__12230.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3548__auto____12231)
{return or__3548__auto____12231;
} else
{return G__12229__12230.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__12229__12230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12229__12230);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__12229__12230);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__12232__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.fromArray([]),cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__12232 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12232__delegate.call(this, f, c1, c2, c3, colls);
};
G__12232.cljs$lang$maxFixedArity = 4;
G__12232.cljs$lang$applyTo = (function (arglist__12233){
var f = cljs.core.first(arglist__12233);
var c1 = cljs.core.first(cljs.core.next(arglist__12233));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12233)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12233))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12233))));
return G__12232__delegate(f, c1, c2, c3, colls);
});
G__12232.cljs$lang$arity$variadic = G__12232__delegate;
return G__12232;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([])),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12234 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12234))
{var s__12235 = temp__3698__auto____12234;
var p__12236 = cljs.core.take.call(null,n,s__12235);
if((n === cljs.core.count.call(null,p__12236)))
{return cljs.core.cons.call(null,p__12236,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12235)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12237 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____12237))
{var s__12238 = temp__3698__auto____12237;
var p__12239 = cljs.core.take.call(null,n,s__12238);
if((n === cljs.core.count.call(null,p__12239)))
{return cljs.core.cons.call(null,p__12239,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12238)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12239,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__12240 = cljs.core.lookup_sentinel;
var m__12241 = m;
var ks__12242 = cljs.core.seq.call(null,ks);
while(true){
if(cljs.core.truth_(ks__12242))
{var m__12243 = cljs.core.get.call(null,m__12241,cljs.core.first.call(null,ks__12242),sentinel__12240);
if((sentinel__12240 === m__12243))
{return not_found;
} else
{{
var G__12244 = sentinel__12240;
var G__12245 = m__12243;
var G__12246 = cljs.core.next.call(null,ks__12242);
sentinel__12240 = G__12244;
m__12241 = G__12245;
ks__12242 = G__12246;
continue;
}
}
} else
{return m__12241;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12247,v){
var vec__12248__12249 = p__12247;
var k__12250 = cljs.core.nth.call(null,vec__12248__12249,0,null);
var ks__12251 = cljs.core.nthnext.call(null,vec__12248__12249,1);
if(cljs.core.truth_(ks__12251))
{return cljs.core.assoc.call(null,m,k__12250,assoc_in.call(null,cljs.core.get.call(null,m,k__12250),ks__12251,v));
} else
{return cljs.core.assoc.call(null,m,k__12250,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12252,f,args){
var vec__12253__12254 = p__12252;
var k__12255 = cljs.core.nth.call(null,vec__12253__12254,0,null);
var ks__12256 = cljs.core.nthnext.call(null,vec__12253__12254,1);
if(cljs.core.truth_(ks__12256))
{return cljs.core.assoc.call(null,m,k__12255,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12255),ks__12256,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12255,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12255),args));
}
};
var update_in = function (m,p__12252,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12252, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12257){
var m = cljs.core.first(arglist__12257);
var p__12252 = cljs.core.first(cljs.core.next(arglist__12257));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12257)));
return update_in__delegate(m, p__12252, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12262 = this;
var h__364__auto____12263 = this__12262.__hash;
if((h__364__auto____12263 != null))
{return h__364__auto____12263;
} else
{var h__364__auto____12264 = cljs.core.hash_coll.call(null,coll);
this__12262.__hash = h__364__auto____12264;
return h__364__auto____12264;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12265 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12266 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12267 = this;
var new_array__12268 = cljs.core.aclone.call(null,this__12267.array);
(new_array__12268[k] = v);
return (new cljs.core.Vector(this__12267.meta,new_array__12268,null));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12297 = null;
var G__12297__2 = (function (tsym12260,k){
var this__12269 = this;
var tsym12260__12270 = this;
var coll__12271 = tsym12260__12270;
return cljs.core._lookup.call(null,coll__12271,k);
});
var G__12297__3 = (function (tsym12261,k,not_found){
var this__12272 = this;
var tsym12261__12273 = this;
var coll__12274 = tsym12261__12273;
return cljs.core._lookup.call(null,coll__12274,k,not_found);
});
G__12297 = function(tsym12261,k,not_found){
switch(arguments.length){
case 2:
return G__12297__2.call(this,tsym12261,k);
case 3:
return G__12297__3.call(this,tsym12261,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12297;
})()
;
cljs.core.Vector.prototype.apply = (function (tsym12258,args12259){
return tsym12258.call.apply(tsym12258,[tsym12258].concat(cljs.core.aclone.call(null,args12259)));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12275 = this;
var new_array__12276 = cljs.core.aclone.call(null,this__12275.array);
new_array__12276.push(o);
return (new cljs.core.Vector(this__12275.meta,new_array__12276,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__12277 = this;
var this$__12278 = this;
return cljs.core.pr_str.call(null,this$__12278);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12279 = this;
return cljs.core.ci_reduce.call(null,this__12279.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12280 = this;
return cljs.core.ci_reduce.call(null,this__12280.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12281 = this;
if((this__12281.array.length > 0))
{var vector_seq__12282 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__12281.array.length))
{return cljs.core.cons.call(null,(this__12281.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});
return vector_seq__12282.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12283 = this;
return this__12283.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12284 = this;
var count__12285 = this__12284.array.length;
if((count__12285 > 0))
{return (this__12284.array[(count__12285 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12286 = this;
if((this__12286.array.length > 0))
{var new_array__12287 = cljs.core.aclone.call(null,this__12286.array);
new_array__12287.pop();
return (new cljs.core.Vector(this__12286.meta,new_array__12287,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12288 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12289 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12290 = this;
return (new cljs.core.Vector(meta,this__12290.array,this__12290.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12291 = this;
return this__12291.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12293 = this;
if((function (){var and__3546__auto____12294 = (0 <= n);
if(and__3546__auto____12294)
{return (n < this__12293.array.length);
} else
{return and__3546__auto____12294;
}
})())
{return (this__12293.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12295 = this;
if((function (){var and__3546__auto____12296 = (0 <= n);
if(and__3546__auto____12296)
{return (n < this__12295.array.length);
} else
{return and__3546__auto____12296;
}
})())
{return (this__12295.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12292 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12292.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__455__auto__){
return cljs.core.list.call(null,"cljs.core.VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__12298 = pv.cnt;
if((cnt__12298 < 32))
{return 0;
} else
{return (((cnt__12298 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__12299 = level;
var ret__12300 = node;
while(true){
if((ll__12299 === 0))
{return ret__12300;
} else
{var embed__12301 = ret__12300;
var r__12302 = cljs.core.pv_fresh_node.call(null,edit);
var ___12303 = cljs.core.pv_aset.call(null,r__12302,0,embed__12301);
{
var G__12304 = (ll__12299 - 5);
var G__12305 = r__12302;
ll__12299 = G__12304;
ret__12300 = G__12305;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__12306 = cljs.core.pv_clone_node.call(null,parent);
var subidx__12307 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__12306,subidx__12307,tailnode);
return ret__12306;
} else
{var temp__3695__auto____12308 = cljs.core.pv_aget.call(null,parent,subidx__12307);
if(cljs.core.truth_(temp__3695__auto____12308))
{var child__12309 = temp__3695__auto____12308;
var node_to_insert__12310 = push_tail.call(null,pv,(level - 5),child__12309,tailnode);
cljs.core.pv_aset.call(null,ret__12306,subidx__12307,node_to_insert__12310);
return ret__12306;
} else
{var node_to_insert__12311 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__12306,subidx__12307,node_to_insert__12311);
return ret__12306;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3546__auto____12312 = (0 <= i);
if(and__3546__auto____12312)
{return (i < pv.cnt);
} else
{return and__3546__auto____12312;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__12313 = pv.root;
var level__12314 = pv.shift;
while(true){
if((level__12314 > 0))
{{
var G__12315 = cljs.core.pv_aget.call(null,node__12313,((i >>> level__12314) & 31));
var G__12316 = (level__12314 - 5);
node__12313 = G__12315;
level__12314 = G__12316;
continue;
}
} else
{return node__12313.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__12317 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__12317,(i & 31),val);
return ret__12317;
} else
{var subidx__12318 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12317,subidx__12318,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12318),i,val));
return ret__12317;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__12319 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12320 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__12319));
if((function (){var and__3546__auto____12321 = (new_child__12320 == null);
if(and__3546__auto____12321)
{return (subidx__12319 === 0);
} else
{return and__3546__auto____12321;
}
})())
{return null;
} else
{var ret__12322 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12322,subidx__12319,new_child__12320);
return ret__12322;
}
} else
{if((subidx__12319 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__12323 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__12323,subidx__12319,null);
return ret__12323;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.vector_seq = (function vector_seq(v,offset){
var c__12324 = cljs.core._count.call(null,v);
if((c__12324 > 0))
{if((void 0 === cljs.core.t12325))
{
/**
* @constructor
*/
cljs.core.t12325 = (function (c,offset,v,vector_seq,__meta__389__auto__){
this.c = c;
this.offset = offset;
this.v = v;
this.vector_seq = vector_seq;
this.__meta__389__auto__ = __meta__389__auto__;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 282263648;
})
cljs.core.t12325.cljs$lang$type = true;
cljs.core.t12325.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.t12325");
});
cljs.core.t12325.prototype.cljs$core$ISeqable$ = true;
cljs.core.t12325.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (vseq){
var this__12326 = this;
return vseq;
});
cljs.core.t12325.prototype.cljs$core$ISeq$ = true;
cljs.core.t12325.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__12327 = this;
return cljs.core._nth.call(null,this__12327.v,this__12327.offset);
});
cljs.core.t12325.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__12328 = this;
var offset__12329 = (this__12328.offset + 1);
if((offset__12329 < this__12328.c))
{return this__12328.vector_seq.call(null,this__12328.v,offset__12329);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.t12325.prototype.cljs$core$ASeq$ = true;
cljs.core.t12325.prototype.cljs$core$IEquiv$ = true;
cljs.core.t12325.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (vseq,other){
var this__12330 = this;
return cljs.core.equiv_sequential.call(null,vseq,other);
});
cljs.core.t12325.prototype.cljs$core$ISequential$ = true;
cljs.core.t12325.prototype.cljs$core$IPrintable$ = true;
cljs.core.t12325.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (vseq,opts){
var this__12331 = this;
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,vseq);
});
cljs.core.t12325.prototype.cljs$core$IMeta$ = true;
cljs.core.t12325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (___390__auto__){
var this__12332 = this;
return this__12332.__meta__389__auto__;
});
cljs.core.t12325.prototype.cljs$core$IWithMeta$ = true;
cljs.core.t12325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___390__auto__,__meta__389__auto__){
var this__12333 = this;
return (new cljs.core.t12325(this__12333.c,this__12333.offset,this__12333.v,this__12333.vector_seq,__meta__389__auto__));
});
cljs.core.t12325;
} else
{}
return (new cljs.core.t12325(c__12324,offset,v,vector_seq,null));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2164209055;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12338 = this;
return (new cljs.core.TransientVector(this__12338.cnt,this__12338.shift,cljs.core.tv_editable_root.call(null,this__12338.root),cljs.core.tv_editable_tail.call(null,this__12338.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12339 = this;
var h__364__auto____12340 = this__12339.__hash;
if((h__364__auto____12340 != null))
{return h__364__auto____12340;
} else
{var h__364__auto____12341 = cljs.core.hash_coll.call(null,coll);
this__12339.__hash = h__364__auto____12341;
return h__364__auto____12341;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12342 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12343 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12344 = this;
if((function (){var and__3546__auto____12345 = (0 <= k);
if(and__3546__auto____12345)
{return (k < this__12344.cnt);
} else
{return and__3546__auto____12345;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__12346 = cljs.core.aclone.call(null,this__12344.tail);
(new_tail__12346[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__12344.meta,this__12344.cnt,this__12344.shift,this__12344.root,new_tail__12346,null));
} else
{return (new cljs.core.PersistentVector(this__12344.meta,this__12344.cnt,this__12344.shift,cljs.core.do_assoc.call(null,coll,this__12344.shift,this__12344.root,k,v),this__12344.tail,null));
}
} else
{if((k === this__12344.cnt))
{return cljs.core._conj.call(null,coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__12344.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__12391 = null;
var G__12391__2 = (function (tsym12336,k){
var this__12347 = this;
var tsym12336__12348 = this;
var coll__12349 = tsym12336__12348;
return cljs.core._lookup.call(null,coll__12349,k);
});
var G__12391__3 = (function (tsym12337,k,not_found){
var this__12350 = this;
var tsym12337__12351 = this;
var coll__12352 = tsym12337__12351;
return cljs.core._lookup.call(null,coll__12352,k,not_found);
});
G__12391 = function(tsym12337,k,not_found){
switch(arguments.length){
case 2:
return G__12391__2.call(this,tsym12337,k);
case 3:
return G__12391__3.call(this,tsym12337,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12391;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (tsym12334,args12335){
return tsym12334.call.apply(tsym12334,[tsym12334].concat(cljs.core.aclone.call(null,args12335)));
});
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__12353 = this;
var step_init__12354 = [0,init];
var i__12355 = 0;
while(true){
if((i__12355 < this__12353.cnt))
{var arr__12356 = cljs.core.array_for.call(null,v,i__12355);
var len__12357 = arr__12356.length;
var init__12361 = (function (){var j__12358 = 0;
var init__12359 = (step_init__12354[1]);
while(true){
if((j__12358 < len__12357))
{var init__12360 = f.call(null,init__12359,(j__12358 + i__12355),(arr__12356[j__12358]));
if(cljs.core.reduced_QMARK_.call(null,init__12360))
{return init__12360;
} else
{{
var G__12392 = (j__12358 + 1);
var G__12393 = init__12360;
j__12358 = G__12392;
init__12359 = G__12393;
continue;
}
}
} else
{(step_init__12354[0] = len__12357);
(step_init__12354[1] = init__12359);
return init__12359;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12361))
{return cljs.core.deref.call(null,init__12361);
} else
{{
var G__12394 = (i__12355 + (step_init__12354[0]));
i__12355 = G__12394;
continue;
}
}
} else
{return (step_init__12354[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12362 = this;
if(((this__12362.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__12363 = cljs.core.aclone.call(null,this__12362.tail);
new_tail__12363.push(o);
return (new cljs.core.PersistentVector(this__12362.meta,(this__12362.cnt + 1),this__12362.shift,this__12362.root,new_tail__12363,null));
} else
{var root_overflow_QMARK___12364 = ((this__12362.cnt >>> 5) > (1 << this__12362.shift));
var new_shift__12365 = ((root_overflow_QMARK___12364)?(this__12362.shift + 5):this__12362.shift);
var new_root__12367 = ((root_overflow_QMARK___12364)?(function (){var n_r__12366 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__12366,0,this__12362.root);
cljs.core.pv_aset.call(null,n_r__12366,1,cljs.core.new_path.call(null,null,this__12362.shift,(new cljs.core.VectorNode(null,this__12362.tail))));
return n_r__12366;
})():cljs.core.push_tail.call(null,coll,this__12362.shift,this__12362.root,(new cljs.core.VectorNode(null,this__12362.tail))));
return (new cljs.core.PersistentVector(this__12362.meta,(this__12362.cnt + 1),new_shift__12365,new_root__12367,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__12368 = this;
return cljs.core._nth.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__12369 = this;
return cljs.core._nth.call(null,coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__12370 = this;
var this$__12371 = this;
return cljs.core.pr_str.call(null,this$__12371);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__12372 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__12373 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12374 = this;
return cljs.core.vector_seq.call(null,coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12375 = this;
return this__12375.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12376 = this;
if((this__12376.cnt > 0))
{return cljs.core._nth.call(null,coll,(this__12376.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12377 = this;
if((this__12377.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12377.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12377.meta);
} else
{if((1 < (this__12377.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__12377.meta,(this__12377.cnt - 1),this__12377.shift,this__12377.root,this__12377.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__12378 = cljs.core.array_for.call(null,coll,(this__12377.cnt - 2));
var nr__12379 = cljs.core.pop_tail.call(null,coll,this__12377.shift,this__12377.root);
var new_root__12380 = (((nr__12379 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__12379);
var cnt_1__12381 = (this__12377.cnt - 1);
if((function (){var and__3546__auto____12382 = (5 < this__12377.shift);
if(and__3546__auto____12382)
{return (cljs.core.pv_aget.call(null,new_root__12380,1) == null);
} else
{return and__3546__auto____12382;
}
})())
{return (new cljs.core.PersistentVector(this__12377.meta,cnt_1__12381,(this__12377.shift - 5),cljs.core.pv_aget.call(null,new_root__12380,0),new_tail__12378,null));
} else
{return (new cljs.core.PersistentVector(this__12377.meta,cnt_1__12381,this__12377.shift,new_root__12380,new_tail__12378,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12384 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12385 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12386 = this;
return (new cljs.core.PersistentVector(meta,this__12386.cnt,this__12386.shift,this__12386.root,this__12386.tail,this__12386.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12387 = this;
return this__12387.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12388 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12389 = this;
if((function (){var and__3546__auto____12390 = (0 <= n);
if(and__3546__auto____12390)
{return (n < this__12389.cnt);
} else
{return and__3546__auto____12390;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12383 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__12383.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs){
var xs__12395 = cljs.core.seq.call(null,xs);
var out__12396 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(xs__12395))
{{
var G__12397 = cljs.core.next.call(null,xs__12395);
var G__12398 = cljs.core.conj_BANG_.call(null,out__12396,cljs.core.first.call(null,xs__12395));
xs__12395 = G__12397;
out__12396 = G__12398;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12396);
}
break;
}
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12399){
var args = cljs.core.seq(arglist__12399);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16200095;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12404 = this;
var h__364__auto____12405 = this__12404.__hash;
if((h__364__auto____12405 != null))
{return h__364__auto____12405;
} else
{var h__364__auto____12406 = cljs.core.hash_coll.call(null,coll);
this__12404.__hash = h__364__auto____12406;
return h__364__auto____12406;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12407 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12408 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__12409 = this;
var v_pos__12410 = (this__12409.start + key);
return (new cljs.core.Subvec(this__12409.meta,cljs.core._assoc.call(null,this__12409.v,v_pos__12410,val),this__12409.start,((this__12409.end > (v_pos__12410 + 1)) ? this__12409.end : (v_pos__12410 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12434 = null;
var G__12434__2 = (function (tsym12402,k){
var this__12411 = this;
var tsym12402__12412 = this;
var coll__12413 = tsym12402__12412;
return cljs.core._lookup.call(null,coll__12413,k);
});
var G__12434__3 = (function (tsym12403,k,not_found){
var this__12414 = this;
var tsym12403__12415 = this;
var coll__12416 = tsym12403__12415;
return cljs.core._lookup.call(null,coll__12416,k,not_found);
});
G__12434 = function(tsym12403,k,not_found){
switch(arguments.length){
case 2:
return G__12434__2.call(this,tsym12403,k);
case 3:
return G__12434__3.call(this,tsym12403,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12434;
})()
;
cljs.core.Subvec.prototype.apply = (function (tsym12400,args12401){
return tsym12400.call.apply(tsym12400,[tsym12400].concat(cljs.core.aclone.call(null,args12401)));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12417 = this;
return (new cljs.core.Subvec(this__12417.meta,cljs.core._assoc_n.call(null,this__12417.v,this__12417.end,o),this__12417.start,(this__12417.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__12418 = this;
var this$__12419 = this;
return cljs.core.pr_str.call(null,this$__12419);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12420 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12421 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12422 = this;
var subvec_seq__12423 = (function subvec_seq(i){
if((i === this__12422.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12422.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});
return subvec_seq__12423.call(null,this__12422.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12424 = this;
return (this__12424.end - this__12424.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12425 = this;
return cljs.core._nth.call(null,this__12425.v,(this__12425.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12426 = this;
if((this__12426.start === this__12426.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12426.meta,this__12426.v,this__12426.start,(this__12426.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__12427 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12428 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12429 = this;
return (new cljs.core.Subvec(meta,this__12429.v,this__12429.start,this__12429.end,this__12429.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12430 = this;
return this__12430.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12432 = this;
return cljs.core._nth.call(null,this__12432.v,(this__12432.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12433 = this;
return cljs.core._nth.call(null,this__12433.v,(this__12433.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12431 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12431.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__12435 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__12435,0,tl.length);
return ret__12435;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__12436 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__12437 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__12436,subidx__12437,(((level === 5))?tail_node:(function (){var child__12438 = cljs.core.pv_aget.call(null,ret__12436,subidx__12437);
if((child__12438 != null))
{return tv_push_tail.call(null,tv,(level - 5),child__12438,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__12436;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__12439 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__12440 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__12441 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__12439,subidx__12440));
if((function (){var and__3546__auto____12442 = (new_child__12441 == null);
if(and__3546__auto____12442)
{return (subidx__12440 === 0);
} else
{return and__3546__auto____12442;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__12439,subidx__12440,new_child__12441);
return node__12439;
}
} else
{if((subidx__12440 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__12439,subidx__12440,null);
return node__12439;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3546__auto____12443 = (0 <= i);
if(and__3546__auto____12443)
{return (i < tv.cnt);
} else
{return and__3546__auto____12443;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__12444 = tv.root;
var node__12445 = root__12444;
var level__12446 = tv.shift;
while(true){
if((level__12446 > 0))
{{
var G__12447 = cljs.core.tv_ensure_editable.call(null,root__12444.edit,cljs.core.pv_aget.call(null,node__12445,((i >>> level__12446) & 31)));
var G__12448 = (level__12446 - 5);
node__12445 = G__12447;
level__12446 = G__12448;
continue;
}
} else
{return node__12445.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 147;
this.cljs$lang$protocol_mask$partition1$ = 11;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$IFn$ = true;
cljs.core.TransientVector.prototype.call = (function() {
var G__12486 = null;
var G__12486__2 = (function (tsym12451,k){
var this__12453 = this;
var tsym12451__12454 = this;
var coll__12455 = tsym12451__12454;
return cljs.core._lookup.call(null,coll__12455,k);
});
var G__12486__3 = (function (tsym12452,k,not_found){
var this__12456 = this;
var tsym12452__12457 = this;
var coll__12458 = tsym12452__12457;
return cljs.core._lookup.call(null,coll__12458,k,not_found);
});
G__12486 = function(tsym12452,k,not_found){
switch(arguments.length){
case 2:
return G__12486__2.call(this,tsym12452,k);
case 3:
return G__12486__3.call(this,tsym12452,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12486;
})()
;
cljs.core.TransientVector.prototype.apply = (function (tsym12449,args12450){
return tsym12449.call.apply(tsym12449,[tsym12449].concat(cljs.core.aclone.call(null,args12450)));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12459 = this;
return cljs.core._nth.call(null,coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12460 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__12461 = this;
if(cljs.core.truth_(this__12461.root.edit))
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__12462 = this;
if((function (){var and__3546__auto____12463 = (0 <= n);
if(and__3546__auto____12463)
{return (n < this__12462.cnt);
} else
{return and__3546__auto____12463;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12464 = this;
if(cljs.core.truth_(this__12464.root.edit))
{return this__12464.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__12465 = this;
if(cljs.core.truth_(this__12465.root.edit))
{if((function (){var and__3546__auto____12466 = (0 <= n);
if(and__3546__auto____12466)
{return (n < this__12465.cnt);
} else
{return and__3546__auto____12466;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__12465.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__12469 = (function go(level,node){
var node__12467 = cljs.core.tv_ensure_editable.call(null,this__12465.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__12467,(n & 31),val);
return node__12467;
} else
{var subidx__12468 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__12467,subidx__12468,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__12467,subidx__12468)));
return node__12467;
}
}).call(null,this__12465.shift,this__12465.root);
this__12465.root = new_root__12469;
return tcoll;
}
} else
{if((n === this__12465.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__12465.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__12470 = this;
if(cljs.core.truth_(this__12470.root.edit))
{if((this__12470.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__12470.cnt))
{this__12470.cnt = 0;
return tcoll;
} else
{if((((this__12470.cnt - 1) & 31) > 0))
{this__12470.cnt = (this__12470.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__12471 = cljs.core.editable_array_for.call(null,tcoll,(this__12470.cnt - 2));
var new_root__12473 = (function (){var nr__12472 = cljs.core.tv_pop_tail.call(null,tcoll,this__12470.shift,this__12470.root);
if((nr__12472 != null))
{return nr__12472;
} else
{return (new cljs.core.VectorNode(this__12470.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3546__auto____12474 = (5 < this__12470.shift);
if(and__3546__auto____12474)
{return (cljs.core.pv_aget.call(null,new_root__12473,1) == null);
} else
{return and__3546__auto____12474;
}
})())
{var new_root__12475 = cljs.core.tv_ensure_editable.call(null,this__12470.root.edit,cljs.core.pv_aget.call(null,new_root__12473,0));
this__12470.root = new_root__12475;
this__12470.shift = (this__12470.shift - 5);
this__12470.cnt = (this__12470.cnt - 1);
this__12470.tail = new_tail__12471;
return tcoll;
} else
{this__12470.root = new_root__12473;
this__12470.cnt = (this__12470.cnt - 1);
this__12470.tail = new_tail__12471;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12476 = this;
return cljs.core._assoc_n_BANG_.call(null,tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12477 = this;
if(cljs.core.truth_(this__12477.root.edit))
{if(((this__12477.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__12477.tail[(this__12477.cnt & 31)] = o);
this__12477.cnt = (this__12477.cnt + 1);
return tcoll;
} else
{var tail_node__12478 = (new cljs.core.VectorNode(this__12477.root.edit,this__12477.tail));
var new_tail__12479 = cljs.core.make_array.call(null,32);
(new_tail__12479[0] = o);
this__12477.tail = new_tail__12479;
if(((this__12477.cnt >>> 5) > (1 << this__12477.shift)))
{var new_root_array__12480 = cljs.core.make_array.call(null,32);
var new_shift__12481 = (this__12477.shift + 5);
(new_root_array__12480[0] = this__12477.root);
(new_root_array__12480[1] = cljs.core.new_path.call(null,this__12477.root.edit,this__12477.shift,tail_node__12478));
this__12477.root = (new cljs.core.VectorNode(this__12477.root.edit,new_root_array__12480));
this__12477.shift = new_shift__12481;
this__12477.cnt = (this__12477.cnt + 1);
return tcoll;
} else
{var new_root__12482 = cljs.core.tv_push_tail.call(null,tcoll,this__12477.shift,this__12477.root,tail_node__12478);
this__12477.root = new_root__12482;
this__12477.cnt = (this__12477.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12483 = this;
if(cljs.core.truth_(this__12483.root.edit))
{this__12483.root.edit = null;
var len__12484 = (this__12483.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__12485 = cljs.core.make_array.call(null,len__12484);
cljs.core.array_copy.call(null,this__12483.tail,0,trimmed_tail__12485,0,len__12484);
return (new cljs.core.PersistentVector(null,this__12483.cnt,this__12483.shift,this__12483.root,trimmed_tail__12485,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12487 = this;
var h__364__auto____12488 = this__12487.__hash;
if((h__364__auto____12488 != null))
{return h__364__auto____12488;
} else
{var h__364__auto____12489 = cljs.core.hash_coll.call(null,coll);
this__12487.__hash = h__364__auto____12489;
return h__364__auto____12489;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12490 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__12491 = this;
var this$__12492 = this;
return cljs.core.pr_str.call(null,this$__12492);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12493 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12494 = this;
return cljs.core._first.call(null,this__12494.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12495 = this;
var temp__3695__auto____12496 = cljs.core.next.call(null,this__12495.front);
if(cljs.core.truth_(temp__3695__auto____12496))
{var f1__12497 = temp__3695__auto____12496;
return (new cljs.core.PersistentQueueSeq(this__12495.meta,f1__12497,this__12495.rear,null));
} else
{if((this__12495.rear == null))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12495.meta,this__12495.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12498 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12499 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12499.front,this__12499.rear,this__12499.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12500 = this;
return this__12500.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12501 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12501.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15929422;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12502 = this;
var h__364__auto____12503 = this__12502.__hash;
if((h__364__auto____12503 != null))
{return h__364__auto____12503;
} else
{var h__364__auto____12504 = cljs.core.hash_coll.call(null,coll);
this__12502.__hash = h__364__auto____12504;
return h__364__auto____12504;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12505 = this;
if(cljs.core.truth_(this__12505.front))
{return (new cljs.core.PersistentQueue(this__12505.meta,(this__12505.count + 1),this__12505.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12506 = this__12505.rear;
if(cljs.core.truth_(or__3548__auto____12506))
{return or__3548__auto____12506;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__12505.meta,(this__12505.count + 1),cljs.core.conj.call(null,this__12505.front,o),cljs.core.PersistentVector.fromArray([]),null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__12507 = this;
var this$__12508 = this;
return cljs.core.pr_str.call(null,this$__12508);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12509 = this;
var rear__12510 = cljs.core.seq.call(null,this__12509.rear);
if(cljs.core.truth_((function (){var or__3548__auto____12511 = this__12509.front;
if(cljs.core.truth_(or__3548__auto____12511))
{return or__3548__auto____12511;
} else
{return rear__12510;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12509.front,cljs.core.seq.call(null,rear__12510),null,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12512 = this;
return this__12512.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12513 = this;
return cljs.core._first.call(null,this__12513.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12514 = this;
if(cljs.core.truth_(this__12514.front))
{var temp__3695__auto____12515 = cljs.core.next.call(null,this__12514.front);
if(cljs.core.truth_(temp__3695__auto____12515))
{var f1__12516 = temp__3695__auto____12515;
return (new cljs.core.PersistentQueue(this__12514.meta,(this__12514.count - 1),f1__12516,this__12514.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__12514.meta,(this__12514.count - 1),cljs.core.seq.call(null,this__12514.rear),cljs.core.PersistentVector.fromArray([]),null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12517 = this;
return cljs.core.first.call(null,this__12517.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12518 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12519 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12520 = this;
return (new cljs.core.PersistentQueue(meta,this__12520.count,this__12520.front,this__12520.rear,this__12520.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12521 = this;
return this__12521.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12522 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([]),0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1048576;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12523 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12524 = array.length;
var i__12525 = 0;
while(true){
if((i__12525 < len__12524))
{if(cljs.core._EQ_.call(null,k,(array[i__12525])))
{return i__12525;
} else
{{
var G__12526 = (i__12525 + incr);
i__12525 = G__12526;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12527 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____12527))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12527;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case 2:
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case 4:
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.cljs$lang$arity$2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.cljs$lang$arity$4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__12528 = cljs.core.hash.call(null,a);
var b__12529 = cljs.core.hash.call(null,b);
if((a__12528 < b__12529))
{return -1;
} else
{if((a__12528 > b__12529))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__12531 = m.keys;
var len__12532 = ks__12531.length;
var so__12533 = m.strobj;
var out__12534 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__12535 = 0;
var out__12536 = cljs.core.transient$.call(null,out__12534);
while(true){
if((i__12535 < len__12532))
{var k__12537 = (ks__12531[i__12535]);
{
var G__12538 = (i__12535 + 1);
var G__12539 = cljs.core.assoc_BANG_.call(null,out__12536,k__12537,(so__12533[k__12537]));
i__12535 = G__12538;
out__12536 = G__12539;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__12536,k,v));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155021199;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12544 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12545 = this;
var h__364__auto____12546 = this__12545.__hash;
if((h__364__auto____12546 != null))
{return h__364__auto____12546;
} else
{var h__364__auto____12547 = cljs.core.hash_imap.call(null,coll);
this__12545.__hash = h__364__auto____12547;
return h__364__auto____12547;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12548 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12549 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12549.strobj,(this__12549.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12550 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var overwrite_QMARK___12551 = this__12550.strobj.hasOwnProperty(k);
if(cljs.core.truth_(overwrite_QMARK___12551))
{var new_strobj__12552 = goog.object.clone.call(null,this__12550.strobj);
(new_strobj__12552[k] = v);
return (new cljs.core.ObjMap(this__12550.meta,this__12550.keys,new_strobj__12552,(this__12550.update_count + 1),null));
} else
{if((this__12550.update_count < cljs.core.ObjMap.HASHMAP_THRESHOLD))
{var new_strobj__12553 = goog.object.clone.call(null,this__12550.strobj);
var new_keys__12554 = cljs.core.aclone.call(null,this__12550.keys);
(new_strobj__12553[k] = v);
new_keys__12554.push(k);
return (new cljs.core.ObjMap(this__12550.meta,new_keys__12554,new_strobj__12553,(this__12550.update_count + 1),null));
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12555 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12555.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12575 = null;
var G__12575__2 = (function (tsym12542,k){
var this__12556 = this;
var tsym12542__12557 = this;
var coll__12558 = tsym12542__12557;
return cljs.core._lookup.call(null,coll__12558,k);
});
var G__12575__3 = (function (tsym12543,k,not_found){
var this__12559 = this;
var tsym12543__12560 = this;
var coll__12561 = tsym12543__12560;
return cljs.core._lookup.call(null,coll__12561,k,not_found);
});
G__12575 = function(tsym12543,k,not_found){
switch(arguments.length){
case 2:
return G__12575__2.call(this,tsym12543,k);
case 3:
return G__12575__3.call(this,tsym12543,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12575;
})()
;
cljs.core.ObjMap.prototype.apply = (function (tsym12540,args12541){
return tsym12540.call.apply(tsym12540,[tsym12540].concat(cljs.core.aclone.call(null,args12541)));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12562 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__12563 = this;
var this$__12564 = this;
return cljs.core.pr_str.call(null,this$__12564);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12565 = this;
if((this__12565.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__12530_SHARP_){
return cljs.core.vector.call(null,p1__12530_SHARP_,(this__12565.strobj[p1__12530_SHARP_]));
}),this__12565.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12566 = this;
return this__12566.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12567 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12568 = this;
return (new cljs.core.ObjMap(meta,this__12568.keys,this__12568.strobj,this__12568.update_count,this__12568.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12569 = this;
return this__12569.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12570 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12570.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12571 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12572 = goog.isString.call(null,k);
if(cljs.core.truth_(and__3546__auto____12572))
{return this__12571.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12572;
}
})()))
{var new_keys__12573 = cljs.core.aclone.call(null,this__12571.keys);
var new_strobj__12574 = goog.object.clone.call(null,this__12571.strobj);
new_keys__12573.splice(cljs.core.scan_array.call(null,1,k,new_keys__12573),1);
cljs.core.js_delete.call(null,new_strobj__12574,k);
return (new cljs.core.ObjMap(this__12571.meta,new_keys__12573,new_strobj__12574,(this__12571.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 7537551;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12581 = this;
var h__364__auto____12582 = this__12581.__hash;
if((h__364__auto____12582 != null))
{return h__364__auto____12582;
} else
{var h__364__auto____12583 = cljs.core.hash_imap.call(null,coll);
this__12581.__hash = h__364__auto____12583;
return h__364__auto____12583;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12584 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12585 = this;
var bucket__12586 = (this__12585.hashobj[cljs.core.hash.call(null,k)]);
var i__12587 = (cljs.core.truth_(bucket__12586)?cljs.core.scan_array.call(null,2,k,bucket__12586):null);
if(cljs.core.truth_(i__12587))
{return (bucket__12586[(i__12587 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12588 = this;
var h__12589 = cljs.core.hash.call(null,k);
var bucket__12590 = (this__12588.hashobj[h__12589]);
if(cljs.core.truth_(bucket__12590))
{var new_bucket__12591 = cljs.core.aclone.call(null,bucket__12590);
var new_hashobj__12592 = goog.object.clone.call(null,this__12588.hashobj);
(new_hashobj__12592[h__12589] = new_bucket__12591);
var temp__3695__auto____12593 = cljs.core.scan_array.call(null,2,k,new_bucket__12591);
if(cljs.core.truth_(temp__3695__auto____12593))
{var i__12594 = temp__3695__auto____12593;
(new_bucket__12591[(i__12594 + 1)] = v);
return (new cljs.core.HashMap(this__12588.meta,this__12588.count,new_hashobj__12592,null));
} else
{new_bucket__12591.push(k,v);
return (new cljs.core.HashMap(this__12588.meta,(this__12588.count + 1),new_hashobj__12592,null));
}
} else
{var new_hashobj__12595 = goog.object.clone.call(null,this__12588.hashobj);
(new_hashobj__12595[h__12589] = [k,v]);
return (new cljs.core.HashMap(this__12588.meta,(this__12588.count + 1),new_hashobj__12595,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12596 = this;
var bucket__12597 = (this__12596.hashobj[cljs.core.hash.call(null,k)]);
var i__12598 = (cljs.core.truth_(bucket__12597)?cljs.core.scan_array.call(null,2,k,bucket__12597):null);
if(cljs.core.truth_(i__12598))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12621 = null;
var G__12621__2 = (function (tsym12579,k){
var this__12599 = this;
var tsym12579__12600 = this;
var coll__12601 = tsym12579__12600;
return cljs.core._lookup.call(null,coll__12601,k);
});
var G__12621__3 = (function (tsym12580,k,not_found){
var this__12602 = this;
var tsym12580__12603 = this;
var coll__12604 = tsym12580__12603;
return cljs.core._lookup.call(null,coll__12604,k,not_found);
});
G__12621 = function(tsym12580,k,not_found){
switch(arguments.length){
case 2:
return G__12621__2.call(this,tsym12580,k);
case 3:
return G__12621__3.call(this,tsym12580,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12621;
})()
;
cljs.core.HashMap.prototype.apply = (function (tsym12577,args12578){
return tsym12577.call.apply(tsym12577,[tsym12577].concat(cljs.core.aclone.call(null,args12578)));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12605 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__12606 = this;
var this$__12607 = this;
return cljs.core.pr_str.call(null,this$__12607);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12608 = this;
if((this__12608.count > 0))
{var hashes__12609 = cljs.core.js_keys.call(null,this__12608.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__12576_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12608.hashobj[p1__12576_SHARP_])));
}),hashes__12609);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12610 = this;
return this__12610.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12611 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12612 = this;
return (new cljs.core.HashMap(meta,this__12612.count,this__12612.hashobj,this__12612.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12613 = this;
return this__12613.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12614 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12614.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12615 = this;
var h__12616 = cljs.core.hash.call(null,k);
var bucket__12617 = (this__12615.hashobj[h__12616]);
var i__12618 = (cljs.core.truth_(bucket__12617)?cljs.core.scan_array.call(null,2,k,bucket__12617):null);
if(cljs.core.not.call(null,i__12618))
{return coll;
} else
{var new_hashobj__12619 = goog.object.clone.call(null,this__12615.hashobj);
if((3 > bucket__12617.length))
{cljs.core.js_delete.call(null,new_hashobj__12619,h__12616);
} else
{var new_bucket__12620 = cljs.core.aclone.call(null,bucket__12617);
new_bucket__12620.splice(i__12618,2);
(new_hashobj__12619[h__12616] = new_bucket__12620);
}
return (new cljs.core.HashMap(this__12615.meta,(this__12615.count - 1),new_hashobj__12619,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12622 = ks.length;
var i__12623 = 0;
var out__12624 = cljs.core.HashMap.EMPTY;
while(true){
if((i__12623 < len__12622))
{{
var G__12625 = (i__12623 + 1);
var G__12626 = cljs.core.assoc.call(null,out__12624,(ks[i__12623]),(vs[i__12623]));
i__12623 = G__12625;
out__12624 = G__12626;
continue;
}
} else
{return out__12624;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__12627 = m.arr;
var len__12628 = arr__12627.length;
var i__12629 = 0;
while(true){
if((len__12628 <= i__12629))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__12627[i__12629]),k))
{return i__12629;
} else
{if("\uFDD0'else")
{{
var G__12630 = (i__12629 + 2);
i__12629 = G__12630;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12635 = this;
return (new cljs.core.TransientArrayMap({},this__12635.arr.length,cljs.core.aclone.call(null,this__12635.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12636 = this;
var h__364__auto____12637 = this__12636.__hash;
if((h__364__auto____12637 != null))
{return h__364__auto____12637;
} else
{var h__364__auto____12638 = cljs.core.hash_imap.call(null,coll);
this__12636.__hash = h__364__auto____12638;
return h__364__auto____12638;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12639 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12640 = this;
var idx__12641 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12641 === -1))
{return not_found;
} else
{return (this__12640.arr[(idx__12641 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12642 = this;
var idx__12643 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12643 === -1))
{if((this__12642.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__12642.meta,(this__12642.cnt + 1),(function (){var G__12644__12645 = cljs.core.aclone.call(null,this__12642.arr);
G__12644__12645.push(k);
G__12644__12645.push(v);
return G__12644__12645;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__12642.arr[(idx__12643 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__12642.meta,this__12642.cnt,(function (){var G__12646__12647 = cljs.core.aclone.call(null,this__12642.arr);
(G__12646__12647[(idx__12643 + 1)] = v);
return G__12646__12647;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12648 = this;
return (cljs.core.array_map_index_of.call(null,coll,k) != -1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__12678 = null;
var G__12678__2 = (function (tsym12633,k){
var this__12649 = this;
var tsym12633__12650 = this;
var coll__12651 = tsym12633__12650;
return cljs.core._lookup.call(null,coll__12651,k);
});
var G__12678__3 = (function (tsym12634,k,not_found){
var this__12652 = this;
var tsym12634__12653 = this;
var coll__12654 = tsym12634__12653;
return cljs.core._lookup.call(null,coll__12654,k,not_found);
});
G__12678 = function(tsym12634,k,not_found){
switch(arguments.length){
case 2:
return G__12678__2.call(this,tsym12634,k);
case 3:
return G__12678__3.call(this,tsym12634,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12678;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (tsym12631,args12632){
return tsym12631.call.apply(tsym12631,[tsym12631].concat(cljs.core.aclone.call(null,args12632)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12655 = this;
var len__12656 = this__12655.arr.length;
var i__12657 = 0;
var init__12658 = init;
while(true){
if((i__12657 < len__12656))
{var init__12659 = f.call(null,init__12658,(this__12655.arr[i__12657]),(this__12655.arr[(i__12657 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__12659))
{return cljs.core.deref.call(null,init__12659);
} else
{{
var G__12679 = (i__12657 + 2);
var G__12680 = init__12659;
i__12657 = G__12679;
init__12658 = G__12680;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12660 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__12661 = this;
var this$__12662 = this;
return cljs.core.pr_str.call(null,this$__12662);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12663 = this;
if((this__12663.cnt > 0))
{var len__12664 = this__12663.arr.length;
var array_map_seq__12665 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__12664))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__12663.arr[i]),(this__12663.arr[(i + 1)])]),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
})));
});
return array_map_seq__12665.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12666 = this;
return this__12666.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12667 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12668 = this;
return (new cljs.core.PersistentArrayMap(meta,this__12668.cnt,this__12668.arr,this__12668.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12669 = this;
return this__12669.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12670 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12670.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12671 = this;
var idx__12672 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__12672 >= 0))
{var len__12673 = this__12671.arr.length;
var new_len__12674 = (len__12673 - 2);
if((new_len__12674 === 0))
{return cljs.core._empty.call(null,coll);
} else
{var new_arr__12675 = cljs.core.make_array.call(null,new_len__12674);
var s__12676 = 0;
var d__12677 = 0;
while(true){
if((s__12676 >= len__12673))
{return (new cljs.core.PersistentArrayMap(this__12671.meta,(this__12671.cnt - 1),new_arr__12675,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__12671.arr[s__12676])))
{{
var G__12681 = (s__12676 + 2);
var G__12682 = d__12677;
s__12676 = G__12681;
d__12677 = G__12682;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__12675[d__12677] = (this__12671.arr[s__12676]));
(new_arr__12675[(d__12677 + 1)] = (this__12671.arr[(s__12676 + 1)]));
{
var G__12683 = (s__12676 + 2);
var G__12684 = (d__12677 + 2);
s__12676 = G__12683;
d__12677 = G__12684;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__12685 = cljs.core.count.call(null,ks);
var i__12686 = 0;
var out__12687 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__12686 < len__12685))
{{
var G__12688 = (i__12686 + 1);
var G__12689 = cljs.core.assoc_BANG_.call(null,out__12687,(ks[i__12686]),(vs[i__12686]));
i__12686 = G__12688;
out__12687 = G__12689;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12687);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12690 = this;
if(cljs.core.truth_(this__12690.editable_QMARK_))
{var idx__12691 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12691 >= 0))
{(this__12690.arr[idx__12691] = (this__12690.arr[(this__12690.len - 2)]));
(this__12690.arr[(idx__12691 + 1)] = (this__12690.arr[(this__12690.len - 1)]));
var G__12692__12693 = this__12690.arr;
G__12692__12693.pop();
G__12692__12693.pop();
G__12692__12693;
this__12690.len = (this__12690.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12694 = this;
if(cljs.core.truth_(this__12694.editable_QMARK_))
{var idx__12695 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__12695 === -1))
{if(((this__12694.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__12694.len = (this__12694.len + 2);
this__12694.arr.push(key);
this__12694.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__12694.len,this__12694.arr),key,val);
}
} else
{if((val === (this__12694.arr[(idx__12695 + 1)])))
{return tcoll;
} else
{(this__12694.arr[(idx__12695 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__12696 = this;
if(cljs.core.truth_(this__12696.editable_QMARK_))
{if((function (){var G__12697__12698 = o;
if((G__12697__12698 != null))
{if((function (){var or__3548__auto____12699 = (G__12697__12698.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____12699)
{return or__3548__auto____12699;
} else
{return G__12697__12698.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12697__12698.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12697__12698);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12697__12698);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__12700 = cljs.core.seq.call(null,o);
var tcoll__12701 = tcoll;
while(true){
var temp__3695__auto____12702 = cljs.core.first.call(null,es__12700);
if(cljs.core.truth_(temp__3695__auto____12702))
{var e__12703 = temp__3695__auto____12702;
{
var G__12709 = cljs.core.next.call(null,es__12700);
var G__12710 = cljs.core._assoc_BANG_.call(null,tcoll__12701,cljs.core.key.call(null,e__12703),cljs.core.val.call(null,e__12703));
es__12700 = G__12709;
tcoll__12701 = G__12710;
continue;
}
} else
{return tcoll__12701;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12704 = this;
if(cljs.core.truth_(this__12704.editable_QMARK_))
{this__12704.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__12704.len,2),this__12704.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12705 = this;
return cljs.core._lookup.call(null,tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12706 = this;
if(cljs.core.truth_(this__12706.editable_QMARK_))
{var idx__12707 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__12707 === -1))
{return not_found;
} else
{return (this__12706.arr[(idx__12707 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__12708 = this;
if(cljs.core.truth_(this__12708.editable_QMARK_))
{return cljs.core.quot.call(null,this__12708.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__12711 = cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{}));
var i__12712 = 0;
while(true){
if((i__12712 < len))
{{
var G__12713 = cljs.core.assoc_BANG_.call(null,out__12711,(arr[i__12712]),(arr[(i__12712 + 1)]));
var G__12714 = (i__12712 + 2);
out__12711 = G__12713;
i__12712 = G__12714;
continue;
}
} else
{return out__12711;
}
break;
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__12715__12716 = cljs.core.aclone.call(null,arr);
(G__12715__12716[i] = a);
return G__12715__12716;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__12717__12718 = cljs.core.aclone.call(null,arr);
(G__12717__12718[i] = a);
(G__12717__12718[j] = b);
return G__12717__12718;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__12719 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__12719,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__12719,(2 * i),(new_arr__12719.length - (2 * i)));
return new_arr__12719;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__12720 = inode.ensure_editable(edit);
(editable__12720.arr[i] = a);
return editable__12720;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__12721 = inode.ensure_editable(edit);
(editable__12721.arr[i] = a);
(editable__12721.arr[j] = b);
return editable__12721;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__12722 = arr.length;
var i__12723 = 0;
var init__12724 = init;
while(true){
if((i__12723 < len__12722))
{var init__12727 = (function (){var k__12725 = (arr[i__12723]);
if((k__12725 != null))
{return f.call(null,init__12724,k__12725,(arr[(i__12723 + 1)]));
} else
{var node__12726 = (arr[(i__12723 + 1)]);
if((node__12726 != null))
{return node__12726.kv_reduce(f,init__12724);
} else
{return init__12724;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__12727))
{return cljs.core.deref.call(null,init__12727);
} else
{{
var G__12728 = (i__12723 + 2);
var G__12729 = init__12727;
i__12723 = G__12728;
init__12724 = G__12729;
continue;
}
}
} else
{return init__12724;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__12730 = this;
var inode__12731 = this;
if((this__12730.bitmap === bit))
{return null;
} else
{var editable__12732 = inode__12731.ensure_editable(e);
var earr__12733 = editable__12732.arr;
var len__12734 = earr__12733.length;
editable__12732.bitmap = (bit ^ editable__12732.bitmap);
cljs.core.array_copy.call(null,earr__12733,(2 * (i + 1)),earr__12733,(2 * i),(len__12734 - (2 * (i + 1))));
(earr__12733[(len__12734 - 2)] = null);
(earr__12733[(len__12734 - 1)] = null);
return editable__12732;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12735 = this;
var inode__12736 = this;
var bit__12737 = (1 << ((hash >>> shift) & 0x01f));
var idx__12738 = cljs.core.bitmap_indexed_node_index.call(null,this__12735.bitmap,bit__12737);
if(((this__12735.bitmap & bit__12737) === 0))
{var n__12739 = cljs.core.bit_count.call(null,this__12735.bitmap);
if(((2 * n__12739) < this__12735.arr.length))
{var editable__12740 = inode__12736.ensure_editable(edit);
var earr__12741 = editable__12740.arr;
(added_leaf_QMARK_[0] = true);
cljs.core.array_copy_downward.call(null,earr__12741,(2 * idx__12738),earr__12741,(2 * (idx__12738 + 1)),(2 * (n__12739 - idx__12738)));
(earr__12741[(2 * idx__12738)] = key);
(earr__12741[((2 * idx__12738) + 1)] = val);
editable__12740.bitmap = (editable__12740.bitmap | bit__12737);
return editable__12740;
} else
{if((n__12739 >= 16))
{var nodes__12742 = cljs.core.make_array.call(null,32);
var jdx__12743 = ((hash >>> shift) & 0x01f);
(nodes__12742[jdx__12743] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12744 = 0;
var j__12745 = 0;
while(true){
if((i__12744 < 32))
{if((((this__12735.bitmap >>> i__12744) & 1) === 0))
{{
var G__12798 = (i__12744 + 1);
var G__12799 = j__12745;
i__12744 = G__12798;
j__12745 = G__12799;
continue;
}
} else
{(nodes__12742[i__12744] = (((null != (this__12735.arr[j__12745])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__12735.arr[j__12745])),(this__12735.arr[j__12745]),(this__12735.arr[(j__12745 + 1)]),added_leaf_QMARK_):(this__12735.arr[(j__12745 + 1)])));
{
var G__12800 = (i__12744 + 1);
var G__12801 = (j__12745 + 2);
i__12744 = G__12800;
j__12745 = G__12801;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__12739 + 1),nodes__12742));
} else
{if("\uFDD0'else")
{var new_arr__12746 = cljs.core.make_array.call(null,(2 * (n__12739 + 4)));
cljs.core.array_copy.call(null,this__12735.arr,0,new_arr__12746,0,(2 * idx__12738));
(new_arr__12746[(2 * idx__12738)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__12746[((2 * idx__12738) + 1)] = val);
cljs.core.array_copy.call(null,this__12735.arr,(2 * idx__12738),new_arr__12746,(2 * (idx__12738 + 1)),(2 * (n__12739 - idx__12738)));
var editable__12747 = inode__12736.ensure_editable(edit);
editable__12747.arr = new_arr__12746;
editable__12747.bitmap = (editable__12747.bitmap | bit__12737);
return editable__12747;
} else
{return null;
}
}
}
} else
{var key_or_nil__12748 = (this__12735.arr[(2 * idx__12738)]);
var val_or_node__12749 = (this__12735.arr[((2 * idx__12738) + 1)]);
if((null == key_or_nil__12748))
{var n__12750 = val_or_node__12749.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12750 === val_or_node__12749))
{return inode__12736;
} else
{return cljs.core.edit_and_set.call(null,inode__12736,edit,((2 * idx__12738) + 1),n__12750);
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12748))
{if((val === val_or_node__12749))
{return inode__12736;
} else
{return cljs.core.edit_and_set.call(null,inode__12736,edit,((2 * idx__12738) + 1),val);
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return cljs.core.edit_and_set.call(null,inode__12736,edit,(2 * idx__12738),null,((2 * idx__12738) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__12748,val_or_node__12749,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__12751 = this;
var inode__12752 = this;
return cljs.core.create_inode_seq.call(null,this__12751.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12753 = this;
var inode__12754 = this;
var bit__12755 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12753.bitmap & bit__12755) === 0))
{return inode__12754;
} else
{var idx__12756 = cljs.core.bitmap_indexed_node_index.call(null,this__12753.bitmap,bit__12755);
var key_or_nil__12757 = (this__12753.arr[(2 * idx__12756)]);
var val_or_node__12758 = (this__12753.arr[((2 * idx__12756) + 1)]);
if((null == key_or_nil__12757))
{var n__12759 = val_or_node__12758.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12759 === val_or_node__12758))
{return inode__12754;
} else
{if((null != n__12759))
{return cljs.core.edit_and_set.call(null,inode__12754,edit,((2 * idx__12756) + 1),n__12759);
} else
{if((this__12753.bitmap === bit__12755))
{return null;
} else
{if("\uFDD0'else")
{return inode__12754.edit_and_remove_pair(edit,bit__12755,idx__12756);
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12757))
{(removed_leaf_QMARK_[0] = true);
return inode__12754.edit_and_remove_pair(edit,bit__12755,idx__12756);
} else
{if("\uFDD0'else")
{return inode__12754;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__12760 = this;
var inode__12761 = this;
if((e === this__12760.edit))
{return inode__12761;
} else
{var n__12762 = cljs.core.bit_count.call(null,this__12760.bitmap);
var new_arr__12763 = cljs.core.make_array.call(null,(((n__12762 < 0))?4:(2 * (n__12762 + 1))));
cljs.core.array_copy.call(null,this__12760.arr,0,new_arr__12763,0,(2 * n__12762));
return (new cljs.core.BitmapIndexedNode(e,this__12760.bitmap,new_arr__12763));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__12764 = this;
var inode__12765 = this;
return cljs.core.inode_kv_reduce.call(null,this__12764.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function() {
var G__12802 = null;
var G__12802__3 = (function (shift,hash,key){
var this__12766 = this;
var inode__12767 = this;
var bit__12768 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12766.bitmap & bit__12768) === 0))
{return null;
} else
{var idx__12769 = cljs.core.bitmap_indexed_node_index.call(null,this__12766.bitmap,bit__12768);
var key_or_nil__12770 = (this__12766.arr[(2 * idx__12769)]);
var val_or_node__12771 = (this__12766.arr[((2 * idx__12769) + 1)]);
if((null == key_or_nil__12770))
{return val_or_node__12771.inode_find((shift + 5),hash,key);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12770))
{return cljs.core.PersistentVector.fromArray([key_or_nil__12770,val_or_node__12771]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
});
var G__12802__4 = (function (shift,hash,key,not_found){
var this__12772 = this;
var inode__12773 = this;
var bit__12774 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12772.bitmap & bit__12774) === 0))
{return not_found;
} else
{var idx__12775 = cljs.core.bitmap_indexed_node_index.call(null,this__12772.bitmap,bit__12774);
var key_or_nil__12776 = (this__12772.arr[(2 * idx__12775)]);
var val_or_node__12777 = (this__12772.arr[((2 * idx__12775) + 1)]);
if((null == key_or_nil__12776))
{return val_or_node__12777.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12776))
{return cljs.core.PersistentVector.fromArray([key_or_nil__12776,val_or_node__12777]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
G__12802 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__12802__3.call(this,shift,hash,key);
case 4:
return G__12802__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12802;
})()
;
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__12778 = this;
var inode__12779 = this;
var bit__12780 = (1 << ((hash >>> shift) & 0x01f));
if(((this__12778.bitmap & bit__12780) === 0))
{return inode__12779;
} else
{var idx__12781 = cljs.core.bitmap_indexed_node_index.call(null,this__12778.bitmap,bit__12780);
var key_or_nil__12782 = (this__12778.arr[(2 * idx__12781)]);
var val_or_node__12783 = (this__12778.arr[((2 * idx__12781) + 1)]);
if((null == key_or_nil__12782))
{var n__12784 = val_or_node__12783.inode_without((shift + 5),hash,key);
if((n__12784 === val_or_node__12783))
{return inode__12779;
} else
{if((null != n__12784))
{return (new cljs.core.BitmapIndexedNode(null,this__12778.bitmap,cljs.core.clone_and_set.call(null,this__12778.arr,((2 * idx__12781) + 1),n__12784)));
} else
{if((this__12778.bitmap === bit__12780))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__12778.bitmap ^ bit__12780),cljs.core.remove_pair.call(null,this__12778.arr,idx__12781)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12782))
{return (new cljs.core.BitmapIndexedNode(null,(this__12778.bitmap ^ bit__12780),cljs.core.remove_pair.call(null,this__12778.arr,idx__12781)));
} else
{if("\uFDD0'else")
{return inode__12779;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12785 = this;
var inode__12786 = this;
var bit__12787 = (1 << ((hash >>> shift) & 0x01f));
var idx__12788 = cljs.core.bitmap_indexed_node_index.call(null,this__12785.bitmap,bit__12787);
if(((this__12785.bitmap & bit__12787) === 0))
{var n__12789 = cljs.core.bit_count.call(null,this__12785.bitmap);
if((n__12789 >= 16))
{var nodes__12790 = cljs.core.make_array.call(null,32);
var jdx__12791 = ((hash >>> shift) & 0x01f);
(nodes__12790[jdx__12791] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__12792 = 0;
var j__12793 = 0;
while(true){
if((i__12792 < 32))
{if((((this__12785.bitmap >>> i__12792) & 1) === 0))
{{
var G__12803 = (i__12792 + 1);
var G__12804 = j__12793;
i__12792 = G__12803;
j__12793 = G__12804;
continue;
}
} else
{(nodes__12790[i__12792] = (((null != (this__12785.arr[j__12793])))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__12785.arr[j__12793])),(this__12785.arr[j__12793]),(this__12785.arr[(j__12793 + 1)]),added_leaf_QMARK_):(this__12785.arr[(j__12793 + 1)])));
{
var G__12805 = (i__12792 + 1);
var G__12806 = (j__12793 + 2);
i__12792 = G__12805;
j__12793 = G__12806;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__12789 + 1),nodes__12790));
} else
{var new_arr__12794 = cljs.core.make_array.call(null,(2 * (n__12789 + 1)));
cljs.core.array_copy.call(null,this__12785.arr,0,new_arr__12794,0,(2 * idx__12788));
(new_arr__12794[(2 * idx__12788)] = key);
(added_leaf_QMARK_[0] = true);
(new_arr__12794[((2 * idx__12788) + 1)] = val);
cljs.core.array_copy.call(null,this__12785.arr,(2 * idx__12788),new_arr__12794,(2 * (idx__12788 + 1)),(2 * (n__12789 - idx__12788)));
return (new cljs.core.BitmapIndexedNode(null,(this__12785.bitmap | bit__12787),new_arr__12794));
}
} else
{var key_or_nil__12795 = (this__12785.arr[(2 * idx__12788)]);
var val_or_node__12796 = (this__12785.arr[((2 * idx__12788) + 1)]);
if((null == key_or_nil__12795))
{var n__12797 = val_or_node__12796.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12797 === val_or_node__12796))
{return inode__12786;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12785.bitmap,cljs.core.clone_and_set.call(null,this__12785.arr,((2 * idx__12788) + 1),n__12797)));
}
} else
{if(cljs.core._EQ_.call(null,key,key_or_nil__12795))
{if((val === val_or_node__12796))
{return inode__12786;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__12785.bitmap,cljs.core.clone_and_set.call(null,this__12785.arr,((2 * idx__12788) + 1),val)));
}
} else
{if("\uFDD0'else")
{(added_leaf_QMARK_[0] = true);
return (new cljs.core.BitmapIndexedNode(null,this__12785.bitmap,cljs.core.clone_and_set.call(null,this__12785.arr,(2 * idx__12788),null,((2 * idx__12788) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__12795,val_or_node__12796,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__12807 = array_node.arr;
var len__12808 = (2 * (array_node.cnt - 1));
var new_arr__12809 = cljs.core.make_array.call(null,len__12808);
var i__12810 = 0;
var j__12811 = 1;
var bitmap__12812 = 0;
while(true){
if((i__12810 < len__12808))
{if((function (){var and__3546__auto____12813 = (i__12810 != idx);
if(and__3546__auto____12813)
{return (null != (arr__12807[i__12810]));
} else
{return and__3546__auto____12813;
}
})())
{(new_arr__12809[j__12811] = (arr__12807[i__12810]));
{
var G__12814 = (i__12810 + 1);
var G__12815 = (j__12811 + 2);
var G__12816 = (bitmap__12812 | (1 << i__12810));
i__12810 = G__12814;
j__12811 = G__12815;
bitmap__12812 = G__12816;
continue;
}
} else
{{
var G__12817 = (i__12810 + 1);
var G__12818 = j__12811;
var G__12819 = bitmap__12812;
i__12810 = G__12817;
j__12811 = G__12818;
bitmap__12812 = G__12819;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__12812,new_arr__12809));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12820 = this;
var inode__12821 = this;
var idx__12822 = ((hash >>> shift) & 0x01f);
var node__12823 = (this__12820.arr[idx__12822]);
if((null == node__12823))
{return (new cljs.core.ArrayNode(null,(this__12820.cnt + 1),cljs.core.clone_and_set.call(null,this__12820.arr,idx__12822,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__12824 = node__12823.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12824 === node__12823))
{return inode__12821;
} else
{return (new cljs.core.ArrayNode(null,this__12820.cnt,cljs.core.clone_and_set.call(null,this__12820.arr,idx__12822,n__12824)));
}
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__12825 = this;
var inode__12826 = this;
var idx__12827 = ((hash >>> shift) & 0x01f);
var node__12828 = (this__12825.arr[idx__12827]);
if((null != node__12828))
{var n__12829 = node__12828.inode_without((shift + 5),hash,key);
if((n__12829 === node__12828))
{return inode__12826;
} else
{if((n__12829 == null))
{if((this__12825.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12826,null,idx__12827);
} else
{return (new cljs.core.ArrayNode(null,(this__12825.cnt - 1),cljs.core.clone_and_set.call(null,this__12825.arr,idx__12827,n__12829)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__12825.cnt,cljs.core.clone_and_set.call(null,this__12825.arr,idx__12827,n__12829)));
} else
{return null;
}
}
}
} else
{return inode__12826;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function() {
var G__12861 = null;
var G__12861__3 = (function (shift,hash,key){
var this__12830 = this;
var inode__12831 = this;
var idx__12832 = ((hash >>> shift) & 0x01f);
var node__12833 = (this__12830.arr[idx__12832]);
if((null != node__12833))
{return node__12833.inode_find((shift + 5),hash,key);
} else
{return null;
}
});
var G__12861__4 = (function (shift,hash,key,not_found){
var this__12834 = this;
var inode__12835 = this;
var idx__12836 = ((hash >>> shift) & 0x01f);
var node__12837 = (this__12834.arr[idx__12836]);
if((null != node__12837))
{return node__12837.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
G__12861 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__12861__3.call(this,shift,hash,key);
case 4:
return G__12861__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12861;
})()
;
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__12838 = this;
var inode__12839 = this;
return cljs.core.create_array_node_seq.call(null,this__12838.arr);
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__12840 = this;
var inode__12841 = this;
if((e === this__12840.edit))
{return inode__12841;
} else
{return (new cljs.core.ArrayNode(e,this__12840.cnt,cljs.core.aclone.call(null,this__12840.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12842 = this;
var inode__12843 = this;
var idx__12844 = ((hash >>> shift) & 0x01f);
var node__12845 = (this__12842.arr[idx__12844]);
if((null == node__12845))
{var editable__12846 = cljs.core.edit_and_set.call(null,inode__12843,edit,idx__12844,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__12846.cnt = (editable__12846.cnt + 1);
return editable__12846;
} else
{var n__12847 = node__12845.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__12847 === node__12845))
{return inode__12843;
} else
{return cljs.core.edit_and_set.call(null,inode__12843,edit,idx__12844,n__12847);
}
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12848 = this;
var inode__12849 = this;
var idx__12850 = ((hash >>> shift) & 0x01f);
var node__12851 = (this__12848.arr[idx__12850]);
if((null == node__12851))
{return inode__12849;
} else
{var n__12852 = node__12851.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__12852 === node__12851))
{return inode__12849;
} else
{if((null == n__12852))
{if((this__12848.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__12849,edit,idx__12850);
} else
{var editable__12853 = cljs.core.edit_and_set.call(null,inode__12849,edit,idx__12850,n__12852);
editable__12853.cnt = (editable__12853.cnt - 1);
return editable__12853;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__12849,edit,idx__12850,n__12852);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__12854 = this;
var inode__12855 = this;
var len__12856 = this__12854.arr.length;
var i__12857 = 0;
var init__12858 = init;
while(true){
if((i__12857 < len__12856))
{var node__12859 = (this__12854.arr[i__12857]);
if((node__12859 != null))
{var init__12860 = node__12859.kv_reduce(f,init__12858);
if(cljs.core.reduced_QMARK_.call(null,init__12860))
{return cljs.core.deref.call(null,init__12860);
} else
{{
var G__12862 = (i__12857 + 1);
var G__12863 = init__12860;
i__12857 = G__12862;
init__12858 = G__12863;
continue;
}
}
} else
{return null;
}
} else
{return init__12858;
}
break;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__12864 = (2 * cnt);
var i__12865 = 0;
while(true){
if((i__12865 < lim__12864))
{if(cljs.core._EQ_.call(null,key,(arr[i__12865])))
{return i__12865;
} else
{{
var G__12866 = (i__12865 + 2);
i__12865 = G__12866;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__12867 = this;
var inode__12868 = this;
if((hash === this__12867.collision_hash))
{var idx__12869 = cljs.core.hash_collision_node_find_index.call(null,this__12867.arr,this__12867.cnt,key);
if((idx__12869 === -1))
{var len__12870 = this__12867.arr.length;
var new_arr__12871 = cljs.core.make_array.call(null,(len__12870 + 2));
cljs.core.array_copy.call(null,this__12867.arr,0,new_arr__12871,0,len__12870);
(new_arr__12871[len__12870] = key);
(new_arr__12871[(len__12870 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return (new cljs.core.HashCollisionNode(null,this__12867.collision_hash,(this__12867.cnt + 1),new_arr__12871));
} else
{if(cljs.core._EQ_.call(null,(this__12867.arr[idx__12869]),val))
{return inode__12868;
} else
{return (new cljs.core.HashCollisionNode(null,this__12867.collision_hash,this__12867.cnt,cljs.core.clone_and_set.call(null,this__12867.arr,(idx__12869 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__12867.collision_hash >>> shift) & 0x01f)),[null,inode__12868])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__12872 = this;
var inode__12873 = this;
var idx__12874 = cljs.core.hash_collision_node_find_index.call(null,this__12872.arr,this__12872.cnt,key);
if((idx__12874 === -1))
{return inode__12873;
} else
{if((this__12872.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__12872.collision_hash,(this__12872.cnt - 1),cljs.core.remove_pair.call(null,this__12872.arr,cljs.core.quot.call(null,idx__12874,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function() {
var G__12901 = null;
var G__12901__3 = (function (shift,hash,key){
var this__12875 = this;
var inode__12876 = this;
var idx__12877 = cljs.core.hash_collision_node_find_index.call(null,this__12875.arr,this__12875.cnt,key);
if((idx__12877 < 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,key,(this__12875.arr[idx__12877])))
{return cljs.core.PersistentVector.fromArray([(this__12875.arr[idx__12877]),(this__12875.arr[(idx__12877 + 1)])]);
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
var G__12901__4 = (function (shift,hash,key,not_found){
var this__12878 = this;
var inode__12879 = this;
var idx__12880 = cljs.core.hash_collision_node_find_index.call(null,this__12878.arr,this__12878.cnt,key);
if((idx__12880 < 0))
{return not_found;
} else
{if(cljs.core._EQ_.call(null,key,(this__12878.arr[idx__12880])))
{return cljs.core.PersistentVector.fromArray([(this__12878.arr[idx__12880]),(this__12878.arr[(idx__12880 + 1)])]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
G__12901 = function(shift,hash,key,not_found){
switch(arguments.length){
case 3:
return G__12901__3.call(this,shift,hash,key);
case 4:
return G__12901__4.call(this,shift,hash,key,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12901;
})()
;
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__12881 = this;
var inode__12882 = this;
return cljs.core.create_inode_seq.call(null,this__12881.arr);
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function() {
var G__12902 = null;
var G__12902__1 = (function (e){
var this__12883 = this;
var inode__12884 = this;
if((e === this__12883.edit))
{return inode__12884;
} else
{var new_arr__12885 = cljs.core.make_array.call(null,(2 * (this__12883.cnt + 1)));
cljs.core.array_copy.call(null,this__12883.arr,0,new_arr__12885,0,(2 * this__12883.cnt));
return (new cljs.core.HashCollisionNode(e,this__12883.collision_hash,this__12883.cnt,new_arr__12885));
}
});
var G__12902__3 = (function (e,count,array){
var this__12886 = this;
var inode__12887 = this;
if((e === this__12886.edit))
{this__12886.arr = array;
this__12886.cnt = count;
return inode__12887;
} else
{return (new cljs.core.HashCollisionNode(this__12886.edit,this__12886.collision_hash,count,array));
}
});
G__12902 = function(e,count,array){
switch(arguments.length){
case 1:
return G__12902__1.call(this,e);
case 3:
return G__12902__3.call(this,e,count,array);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12902;
})()
;
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__12888 = this;
var inode__12889 = this;
if((hash === this__12888.collision_hash))
{var idx__12890 = cljs.core.hash_collision_node_find_index.call(null,this__12888.arr,this__12888.cnt,key);
if((idx__12890 === -1))
{if((this__12888.arr.length > (2 * this__12888.cnt)))
{var editable__12891 = cljs.core.edit_and_set.call(null,inode__12889,edit,(2 * this__12888.cnt),key,((2 * this__12888.cnt) + 1),val);
(added_leaf_QMARK_[0] = true);
editable__12891.cnt = (editable__12891.cnt + 1);
return editable__12891;
} else
{var len__12892 = this__12888.arr.length;
var new_arr__12893 = cljs.core.make_array.call(null,(len__12892 + 2));
cljs.core.array_copy.call(null,this__12888.arr,0,new_arr__12893,0,len__12892);
(new_arr__12893[len__12892] = key);
(new_arr__12893[(len__12892 + 1)] = val);
(added_leaf_QMARK_[0] = true);
return inode__12889.ensure_editable(edit,(this__12888.cnt + 1),new_arr__12893);
}
} else
{if(((this__12888.arr[(idx__12890 + 1)]) === val))
{return inode__12889;
} else
{return cljs.core.edit_and_set.call(null,inode__12889,edit,(idx__12890 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__12888.collision_hash >>> shift) & 0x01f)),[null,inode__12889,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__12894 = this;
var inode__12895 = this;
var idx__12896 = cljs.core.hash_collision_node_find_index.call(null,this__12894.arr,this__12894.cnt,key);
if((idx__12896 === -1))
{return inode__12895;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__12894.cnt === 1))
{return null;
} else
{var editable__12897 = inode__12895.ensure_editable(edit);
var earr__12898 = editable__12897.arr;
(earr__12898[idx__12896] = (earr__12898[((2 * this__12894.cnt) - 2)]));
(earr__12898[(idx__12896 + 1)] = (earr__12898[((2 * this__12894.cnt) - 1)]));
(earr__12898[((2 * this__12894.cnt) - 1)] = null);
(earr__12898[((2 * this__12894.cnt) - 2)] = null);
editable__12897.cnt = (editable__12897.cnt - 1);
return editable__12897;
}
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__12899 = this;
var inode__12900 = this;
return cljs.core.inode_kv_reduce.call(null,this__12899.arr,f,init);
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__12903 = cljs.core.hash.call(null,key1);
if((key1hash__12903 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12903,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12904 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__12903,key1,val1,added_leaf_QMARK___12904).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___12904);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__12905 = cljs.core.hash.call(null,key1);
if((key1hash__12905 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__12905,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___12906 = [false];
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__12905,key1,val1,added_leaf_QMARK___12906).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___12906);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12907 = this;
var h__364__auto____12908 = this__12907.__hash;
if((h__364__auto____12908 != null))
{return h__364__auto____12908;
} else
{var h__364__auto____12909 = cljs.core.hash_coll.call(null,coll);
this__12907.__hash = h__364__auto____12909;
return h__364__auto____12909;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12910 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__12911 = this;
var this$__12912 = this;
return cljs.core.pr_str.call(null,this$__12912);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12913 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12914 = this;
if((this__12914.s == null))
{return cljs.core.PersistentVector.fromArray([(this__12914.nodes[this__12914.i]),(this__12914.nodes[(this__12914.i + 1)])]);
} else
{return cljs.core.first.call(null,this__12914.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12915 = this;
if((this__12915.s == null))
{return cljs.core.create_inode_seq.call(null,this__12915.nodes,(this__12915.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__12915.nodes,this__12915.i,cljs.core.next.call(null,this__12915.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12916 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12917 = this;
return (new cljs.core.NodeSeq(meta,this__12917.nodes,this__12917.i,this__12917.s,this__12917.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12918 = this;
return this__12918.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12919 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12919.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__12920 = nodes.length;
var j__12921 = i;
while(true){
if((j__12921 < len__12920))
{if((null != (nodes[j__12921])))
{return (new cljs.core.NodeSeq(null,nodes,j__12921,null,null));
} else
{var temp__3695__auto____12922 = (nodes[(j__12921 + 1)]);
if(cljs.core.truth_(temp__3695__auto____12922))
{var node__12923 = temp__3695__auto____12922;
var temp__3695__auto____12924 = node__12923.inode_seq();
if(cljs.core.truth_(temp__3695__auto____12924))
{var node_seq__12925 = temp__3695__auto____12924;
return (new cljs.core.NodeSeq(null,nodes,(j__12921 + 2),node_seq__12925,null));
} else
{{
var G__12926 = (j__12921 + 2);
j__12921 = G__12926;
continue;
}
}
} else
{{
var G__12927 = (j__12921 + 2);
j__12921 = G__12927;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925324;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12928 = this;
var h__364__auto____12929 = this__12928.__hash;
if((h__364__auto____12929 != null))
{return h__364__auto____12929;
} else
{var h__364__auto____12930 = cljs.core.hash_coll.call(null,coll);
this__12928.__hash = h__364__auto____12930;
return h__364__auto____12930;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12931 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__12932 = this;
var this$__12933 = this;
return cljs.core.pr_str.call(null,this$__12933);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__12934 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12935 = this;
return cljs.core.first.call(null,this__12935.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12936 = this;
return cljs.core.create_array_node_seq.call(null,null,this__12936.nodes,this__12936.i,cljs.core.next.call(null,this__12936.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12938 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__12938.nodes,this__12938.i,this__12938.s,this__12938.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12939 = this;
return this__12939.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12940 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12940.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__12941 = nodes.length;
var j__12942 = i;
while(true){
if((j__12942 < len__12941))
{var temp__3695__auto____12943 = (nodes[j__12942]);
if(cljs.core.truth_(temp__3695__auto____12943))
{var nj__12944 = temp__3695__auto____12943;
var temp__3695__auto____12945 = nj__12944.inode_seq();
if(cljs.core.truth_(temp__3695__auto____12945))
{var ns__12946 = temp__3695__auto____12945;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__12942 + 1),ns__12946,null));
} else
{{
var G__12947 = (j__12942 + 1);
j__12942 = G__12947;
continue;
}
}
} else
{{
var G__12948 = (j__12942 + 1);
j__12942 = G__12948;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155545487;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__12953 = this;
return (new cljs.core.TransientHashMap({},this__12953.root,this__12953.cnt,this__12953.has_nil_QMARK_,this__12953.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12954 = this;
var h__364__auto____12955 = this__12954.__hash;
if((h__364__auto____12955 != null))
{return h__364__auto____12955;
} else
{var h__364__auto____12956 = cljs.core.hash_imap.call(null,coll);
this__12954.__hash = h__364__auto____12956;
return h__364__auto____12956;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__12957 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__12958 = this;
if((k == null))
{if(cljs.core.truth_(this__12958.has_nil_QMARK_))
{return this__12958.nil_val;
} else
{return not_found;
}
} else
{if((this__12958.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return cljs.core.nth.call(null,this__12958.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__12959 = this;
if((k == null))
{if(cljs.core.truth_((function (){var and__3546__auto____12960 = this__12959.has_nil_QMARK_;
if(cljs.core.truth_(and__3546__auto____12960))
{return (v === this__12959.nil_val);
} else
{return and__3546__auto____12960;
}
})()))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12959.meta,(cljs.core.truth_(this__12959.has_nil_QMARK_)?this__12959.cnt:(this__12959.cnt + 1)),this__12959.root,true,v,null));
}
} else
{var added_leaf_QMARK___12961 = [false];
var new_root__12962 = (((this__12959.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__12959.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___12961);
if((new_root__12962 === this__12959.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12959.meta,(cljs.core.truth_((added_leaf_QMARK___12961[0]))?(this__12959.cnt + 1):this__12959.cnt),new_root__12962,this__12959.has_nil_QMARK_,this__12959.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__12963 = this;
if((k == null))
{return this__12963.has_nil_QMARK_;
} else
{if((this__12963.root == null))
{return false;
} else
{if("\uFDD0'else")
{return cljs.core.not.call(null,(this__12963.root.inode_find(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__12984 = null;
var G__12984__2 = (function (tsym12951,k){
var this__12964 = this;
var tsym12951__12965 = this;
var coll__12966 = tsym12951__12965;
return cljs.core._lookup.call(null,coll__12966,k);
});
var G__12984__3 = (function (tsym12952,k,not_found){
var this__12967 = this;
var tsym12952__12968 = this;
var coll__12969 = tsym12952__12968;
return cljs.core._lookup.call(null,coll__12969,k,not_found);
});
G__12984 = function(tsym12952,k,not_found){
switch(arguments.length){
case 2:
return G__12984__2.call(this,tsym12952,k);
case 3:
return G__12984__3.call(this,tsym12952,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12984;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (tsym12949,args12950){
return tsym12949.call.apply(tsym12949,[tsym12949].concat(cljs.core.aclone.call(null,args12950)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__12970 = this;
var init__12971 = (cljs.core.truth_(this__12970.has_nil_QMARK_)?f.call(null,init,null,this__12970.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__12971))
{return cljs.core.deref.call(null,init__12971);
} else
{if((null != this__12970.root))
{return this__12970.root.kv_reduce(f,init__12971);
} else
{if("\uFDD0'else")
{return init__12971;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__12972 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__12973 = this;
var this$__12974 = this;
return cljs.core.pr_str.call(null,this$__12974);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12975 = this;
if((this__12975.cnt > 0))
{var s__12976 = (((null != this__12975.root))?this__12975.root.inode_seq():null);
if(cljs.core.truth_(this__12975.has_nil_QMARK_))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__12975.nil_val]),s__12976);
} else
{return s__12976;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12977 = this;
return this__12977.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12978 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12979 = this;
return (new cljs.core.PersistentHashMap(meta,this__12979.cnt,this__12979.root,this__12979.has_nil_QMARK_,this__12979.nil_val,this__12979.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12980 = this;
return this__12980.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12981 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__12981.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__12982 = this;
if((k == null))
{if(cljs.core.truth_(this__12982.has_nil_QMARK_))
{return (new cljs.core.PersistentHashMap(this__12982.meta,(this__12982.cnt - 1),this__12982.root,false,null,null));
} else
{return coll;
}
} else
{if((this__12982.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__12983 = this__12982.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__12983 === this__12982.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__12982.meta,(this__12982.cnt - 1),new_root__12983,this__12982.has_nil_QMARK_,this__12982.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__12985 = ks.length;
var i__12986 = 0;
var out__12987 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__12986 < len__12985))
{{
var G__12988 = (i__12986 + 1);
var G__12989 = cljs.core.assoc_BANG_.call(null,out__12987,(ks[i__12986]),(vs[i__12986]));
i__12986 = G__12988;
out__12987 = G__12989;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__12987);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 7;
this.cljs$lang$protocol_mask$partition0$ = 130;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__12990 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__12991 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__12992 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__12993 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__12994 = this;
if((k == null))
{if(cljs.core.truth_(this__12994.has_nil_QMARK_))
{return this__12994.nil_val;
} else
{return null;
}
} else
{if((this__12994.root == null))
{return null;
} else
{return cljs.core.nth.call(null,this__12994.root.inode_find(0,cljs.core.hash.call(null,k),k),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__12995 = this;
if((k == null))
{if(cljs.core.truth_(this__12995.has_nil_QMARK_))
{return this__12995.nil_val;
} else
{return not_found;
}
} else
{if((this__12995.root == null))
{return not_found;
} else
{return cljs.core.nth.call(null,this__12995.root.inode_find(0,cljs.core.hash.call(null,k),k,[null,not_found]),1);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12996 = this;
if(cljs.core.truth_(this__12996.edit))
{return this__12996.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__12997 = this;
var tcoll__12998 = this;
if(cljs.core.truth_(this__12997.edit))
{if((function (){var G__12999__13000 = o;
if((G__12999__13000 != null))
{if((function (){var or__3548__auto____13001 = (G__12999__13000.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3548__auto____13001)
{return or__3548__auto____13001;
} else
{return G__12999__13000.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__12999__13000.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12999__13000);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__12999__13000);
}
})())
{return tcoll__12998.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13002 = cljs.core.seq.call(null,o);
var tcoll__13003 = tcoll__12998;
while(true){
var temp__3695__auto____13004 = cljs.core.first.call(null,es__13002);
if(cljs.core.truth_(temp__3695__auto____13004))
{var e__13005 = temp__3695__auto____13004;
{
var G__13016 = cljs.core.next.call(null,es__13002);
var G__13017 = tcoll__13003.assoc_BANG_(cljs.core.key.call(null,e__13005),cljs.core.val.call(null,e__13005));
es__13002 = G__13016;
tcoll__13003 = G__13017;
continue;
}
} else
{return tcoll__13003;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__13006 = this;
var tcoll__13007 = this;
if(cljs.core.truth_(this__13006.edit))
{if((k == null))
{if((this__13006.nil_val === v))
{} else
{this__13006.nil_val = v;
}
if(cljs.core.truth_(this__13006.has_nil_QMARK_))
{} else
{this__13006.count = (this__13006.count + 1);
this__13006.has_nil_QMARK_ = true;
}
return tcoll__13007;
} else
{var added_leaf_QMARK___13008 = [false];
var node__13009 = (((this__13006.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__13006.root).inode_assoc_BANG_(this__13006.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___13008);
if((node__13009 === this__13006.root))
{} else
{this__13006.root = node__13009;
}
if(cljs.core.truth_((added_leaf_QMARK___13008[0])))
{this__13006.count = (this__13006.count + 1);
} else
{}
return tcoll__13007;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__13010 = this;
var tcoll__13011 = this;
if(cljs.core.truth_(this__13010.edit))
{if((k == null))
{if(cljs.core.truth_(this__13010.has_nil_QMARK_))
{this__13010.has_nil_QMARK_ = false;
this__13010.nil_val = null;
this__13010.count = (this__13010.count - 1);
return tcoll__13011;
} else
{return tcoll__13011;
}
} else
{if((this__13010.root == null))
{return tcoll__13011;
} else
{var removed_leaf_QMARK___13012 = [false];
var node__13013 = this__13010.root.inode_without_BANG_(this__13010.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___13012);
if((node__13013 === this__13010.root))
{} else
{this__13010.root = node__13013;
}
if(cljs.core.truth_((removed_leaf_QMARK___13012[0])))
{this__13010.count = (this__13010.count - 1);
} else
{}
return tcoll__13011;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__13014 = this;
var tcoll__13015 = this;
if(cljs.core.truth_(this__13014.edit))
{this__13014.edit = null;
return (new cljs.core.PersistentHashMap(null,this__13014.count,this__13014.root,this__13014.has_nil_QMARK_,this__13014.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__13018 = node;
var stack__13019 = stack;
while(true){
if((t__13018 != null))
{{
var G__13020 = (cljs.core.truth_(ascending_QMARK_)?t__13018.left:t__13018.right);
var G__13021 = cljs.core.conj.call(null,stack__13019,t__13018);
t__13018 = G__13020;
stack__13019 = G__13021;
continue;
}
} else
{return stack__13019;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15925322;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13022 = this;
var h__364__auto____13023 = this__13022.__hash;
if((h__364__auto____13023 != null))
{return h__364__auto____13023;
} else
{var h__364__auto____13024 = cljs.core.hash_coll.call(null,coll);
this__13022.__hash = h__364__auto____13024;
return h__364__auto____13024;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13025 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__13026 = this;
var this$__13027 = this;
return cljs.core.pr_str.call(null,this$__13027);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13028 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13029 = this;
if((this__13029.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__13029.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__13030 = this;
return cljs.core.peek.call(null,this__13030.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__13031 = this;
var t__13032 = cljs.core.peek.call(null,this__13031.stack);
var next_stack__13033 = cljs.core.tree_map_seq_push.call(null,(cljs.core.truth_(this__13031.ascending_QMARK_)?t__13032.right:t__13032.left),cljs.core.pop.call(null,this__13031.stack),this__13031.ascending_QMARK_);
if((next_stack__13033 != null))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__13033,this__13031.ascending_QMARK_,(this__13031.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13034 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13035 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__13035.stack,this__13035.ascending_QMARK_,this__13035.cnt,this__13035.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13036 = this;
return this__13036.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3546__auto____13037 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3546__auto____13037)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3546__auto____13037;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3546__auto____13038 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3546__auto____13038)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3546__auto____13038;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__13039 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__13039))
{return cljs.core.deref.call(null,init__13039);
} else
{var init__13040 = (((node.left != null))?tree_map_kv_reduce.call(null,node.left,f,init__13039):init__13039);
if(cljs.core.reduced_QMARK_.call(null,init__13040))
{return cljs.core.deref.call(null,init__13040);
} else
{var init__13041 = (((node.right != null))?tree_map_kv_reduce.call(null,node.right,f,init__13040):init__13040);
if(cljs.core.reduced_QMARK_.call(null,init__13041))
{return cljs.core.deref.call(null,init__13041);
} else
{return init__13041;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$ = true;
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13046 = this;
var h__364__auto____13047 = this__13046.__hash;
if((h__364__auto____13047 != null))
{return h__364__auto____13047;
} else
{var h__364__auto____13048 = cljs.core.hash_coll.call(null,coll);
this__13046.__hash = h__364__auto____13048;
return h__364__auto____13048;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$ = true;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13049 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13050 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13051 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13051.key,this__13051.val]),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$ = true;
cljs.core.BlackNode.prototype.call = (function() {
var G__13098 = null;
var G__13098__2 = (function (tsym13044,k){
var this__13052 = this;
var tsym13044__13053 = this;
var node__13054 = tsym13044__13053;
return cljs.core._lookup.call(null,node__13054,k);
});
var G__13098__3 = (function (tsym13045,k,not_found){
var this__13055 = this;
var tsym13045__13056 = this;
var node__13057 = tsym13045__13056;
return cljs.core._lookup.call(null,node__13057,k,not_found);
});
G__13098 = function(tsym13045,k,not_found){
switch(arguments.length){
case 2:
return G__13098__2.call(this,tsym13045,k);
case 3:
return G__13098__3.call(this,tsym13045,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13098;
})()
;
cljs.core.BlackNode.prototype.apply = (function (tsym13042,args13043){
return tsym13042.call.apply(tsym13042,[tsym13042].concat(cljs.core.aclone.call(null,args13043)));
});
cljs.core.BlackNode.prototype.cljs$core$ISequential$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13058 = this;
return cljs.core.PersistentVector.fromArray([this__13058.key,this__13058.val,o]);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13059 = this;
return this__13059.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13060 = this;
return this__13060.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__13061 = this;
var node__13062 = this;
return ins.balance_right(node__13062);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__13063 = this;
var node__13064 = this;
return (new cljs.core.RedNode(this__13063.key,this__13063.val,this__13063.left,this__13063.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__13065 = this;
var node__13066 = this;
return cljs.core.balance_right_del.call(null,this__13065.key,this__13065.val,this__13065.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__13067 = this;
var node__13068 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__13069 = this;
var node__13070 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13070,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__13071 = this;
var node__13072 = this;
return cljs.core.balance_left_del.call(null,this__13071.key,this__13071.val,del,this__13071.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__13073 = this;
var node__13074 = this;
return ins.balance_left(node__13074);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__13075 = this;
var node__13076 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__13076,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__13099 = null;
var G__13099__0 = (function (){
var this__13079 = this;
var this$__13080 = this;
return cljs.core.pr_str.call(null,this$__13080);
});
G__13099 = function(){
switch(arguments.length){
case 0:
return G__13099__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13099;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__13081 = this;
var node__13082 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13082,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__13083 = this;
var node__13084 = this;
return node__13084;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$ = true;
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13085 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13086 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13087 = this;
return cljs.core.list.call(null,this__13087.key,this__13087.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$ = true;
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13089 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$ = true;
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13090 = this;
return this__13090.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13091 = this;
return cljs.core.PersistentVector.fromArray([this__13091.key]);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$ = true;
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13092 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13092.key,this__13092.val]),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13093 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13094 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13094.key,this__13094.val]),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$ = true;
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13095 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13096 = this;
if((n === 0))
{return this__13096.key;
} else
{if((n === 1))
{return this__13096.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__13097 = this;
if((n === 0))
{return this__13097.key;
} else
{if((n === 1))
{return this__13097.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__13088 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16201119;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$ = true;
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13104 = this;
var h__364__auto____13105 = this__13104.__hash;
if((h__364__auto____13105 != null))
{return h__364__auto____13105;
} else
{var h__364__auto____13106 = cljs.core.hash_coll.call(null,coll);
this__13104.__hash = h__364__auto____13106;
return h__364__auto____13106;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$ = true;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__13107 = this;
return cljs.core._nth.call(null,node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__13108 = this;
return cljs.core._nth.call(null,node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$ = true;
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__13109 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__13109.key,this__13109.val]),k,v);
});
cljs.core.RedNode.prototype.cljs$core$IFn$ = true;
cljs.core.RedNode.prototype.call = (function() {
var G__13156 = null;
var G__13156__2 = (function (tsym13102,k){
var this__13110 = this;
var tsym13102__13111 = this;
var node__13112 = tsym13102__13111;
return cljs.core._lookup.call(null,node__13112,k);
});
var G__13156__3 = (function (tsym13103,k,not_found){
var this__13113 = this;
var tsym13103__13114 = this;
var node__13115 = tsym13103__13114;
return cljs.core._lookup.call(null,node__13115,k,not_found);
});
G__13156 = function(tsym13103,k,not_found){
switch(arguments.length){
case 2:
return G__13156__2.call(this,tsym13103,k);
case 3:
return G__13156__3.call(this,tsym13103,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13156;
})()
;
cljs.core.RedNode.prototype.apply = (function (tsym13100,args13101){
return tsym13100.call.apply(tsym13100,[tsym13100].concat(cljs.core.aclone.call(null,args13101)));
});
cljs.core.RedNode.prototype.cljs$core$ISequential$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$ = true;
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__13116 = this;
return cljs.core.PersistentVector.fromArray([this__13116.key,this__13116.val,o]);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$ = true;
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__13117 = this;
return this__13117.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__13118 = this;
return this__13118.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__13119 = this;
var node__13120 = this;
return (new cljs.core.RedNode(this__13119.key,this__13119.val,this__13119.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__13121 = this;
var node__13122 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__13123 = this;
var node__13124 = this;
return (new cljs.core.RedNode(this__13123.key,this__13123.val,this__13123.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__13125 = this;
var node__13126 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__13127 = this;
var node__13128 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__13128,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__13129 = this;
var node__13130 = this;
return (new cljs.core.RedNode(this__13129.key,this__13129.val,del,this__13129.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__13131 = this;
var node__13132 = this;
return (new cljs.core.RedNode(this__13131.key,this__13131.val,ins,this__13131.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__13133 = this;
var node__13134 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13133.left))
{return (new cljs.core.RedNode(this__13133.key,this__13133.val,this__13133.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__13133.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13133.right))
{return (new cljs.core.RedNode(this__13133.right.key,this__13133.right.val,(new cljs.core.BlackNode(this__13133.key,this__13133.val,this__13133.left,this__13133.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__13133.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__13134,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__13157 = null;
var G__13157__0 = (function (){
var this__13137 = this;
var this$__13138 = this;
return cljs.core.pr_str.call(null,this$__13138);
});
G__13157 = function(){
switch(arguments.length){
case 0:
return G__13157__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13157;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__13139 = this;
var node__13140 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13139.right))
{return (new cljs.core.RedNode(this__13139.key,this__13139.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13139.left,null)),this__13139.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__13139.left))
{return (new cljs.core.RedNode(this__13139.left.key,this__13139.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__13139.left.left,null)),(new cljs.core.BlackNode(this__13139.key,this__13139.val,this__13139.left.right,this__13139.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__13140,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__13141 = this;
var node__13142 = this;
return (new cljs.core.BlackNode(this__13141.key,this__13141.val,this__13141.left,this__13141.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$ = true;
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__13143 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__13144 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$ = true;
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__13145 = this;
return cljs.core.list.call(null,this__13145.key,this__13145.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$ = true;
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__13147 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$ = true;
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__13148 = this;
return this__13148.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__13149 = this;
return cljs.core.PersistentVector.fromArray([this__13149.key]);
});
cljs.core.RedNode.prototype.cljs$core$IVector$ = true;
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__13150 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__13150.key,this__13150.val]),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$ = true;
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13151 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__13152 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__13152.key,this__13152.val]),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$ = true;
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__13153 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$ = true;
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__13154 = this;
if((n === 0))
{return this__13154.key;
} else
{if((n === 1))
{return this__13154.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__13155 = this;
if((n === 0))
{return this__13155.key;
} else
{if((n === 1))
{return this__13155.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__13146 = this;
return cljs.core.PersistentVector.fromArray([]);
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__13158 = comp.call(null,k,tree.key);
if((c__13158 === 0))
{(found[0] = tree);
return null;
} else
{if((c__13158 < 0))
{var ins__13159 = tree_map_add.call(null,comp,tree.left,k,v,found);
if((ins__13159 != null))
{return tree.add_left(ins__13159);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__13160 = tree_map_add.call(null,comp,tree.right,k,v,found);
if((ins__13160 != null))
{return tree.add_right(ins__13160);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__13161 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13161))
{return (new cljs.core.RedNode(app__13161.key,app__13161.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__13161.left)),(new cljs.core.RedNode(right.key,right.val,app__13161.right,right.right)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__13161,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__13162 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__13162))
{return (new cljs.core.RedNode(app__13162.key,app__13162.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__13162.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__13162.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__13162,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if((tree != null))
{var c__13163 = comp.call(null,k,tree.key);
if((c__13163 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__13163 < 0))
{var del__13164 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3548__auto____13165 = (del__13164 != null);
if(or__3548__auto____13165)
{return or__3548__auto____13165;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__13164,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__13164,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__13166 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3548__auto____13167 = (del__13166 != null);
if(or__3548__auto____13167)
{return or__3548__auto____13167;
} else
{return ((found[0]) != null);
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__13166);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__13166,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__13168 = tree.key;
var c__13169 = comp.call(null,k,tk__13168);
if((c__13169 === 0))
{return tree.replace(tk__13168,v,tree.left,tree.right);
} else
{if((c__13169 < 0))
{return tree.replace(tk__13168,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__13168,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 209388431;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13174 = this;
var h__364__auto____13175 = this__13174.__hash;
if((h__364__auto____13175 != null))
{return h__364__auto____13175;
} else
{var h__364__auto____13176 = cljs.core.hash_imap.call(null,coll);
this__13174.__hash = h__364__auto____13176;
return h__364__auto____13176;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13177 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13178 = this;
var n__13179 = coll.entry_at(k);
if((n__13179 != null))
{return n__13179.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13180 = this;
var found__13181 = [null];
var t__13182 = cljs.core.tree_map_add.call(null,this__13180.comp,this__13180.tree,k,v,found__13181);
if((t__13182 == null))
{var found_node__13183 = cljs.core.nth.call(null,found__13181,0);
if(cljs.core._EQ_.call(null,v,found_node__13183.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13180.comp,cljs.core.tree_map_replace.call(null,this__13180.comp,this__13180.tree,k,v),this__13180.cnt,this__13180.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13180.comp,t__13182.blacken(),(this__13180.cnt + 1),this__13180.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13184 = this;
return (coll.entry_at(k) != null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__13216 = null;
var G__13216__2 = (function (tsym13172,k){
var this__13185 = this;
var tsym13172__13186 = this;
var coll__13187 = tsym13172__13186;
return cljs.core._lookup.call(null,coll__13187,k);
});
var G__13216__3 = (function (tsym13173,k,not_found){
var this__13188 = this;
var tsym13173__13189 = this;
var coll__13190 = tsym13173__13189;
return cljs.core._lookup.call(null,coll__13190,k,not_found);
});
G__13216 = function(tsym13173,k,not_found){
switch(arguments.length){
case 2:
return G__13216__2.call(this,tsym13173,k);
case 3:
return G__13216__3.call(this,tsym13173,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13216;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (tsym13170,args13171){
return tsym13170.call.apply(tsym13170,[tsym13170].concat(cljs.core.aclone.call(null,args13171)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13191 = this;
if((this__13191.tree != null))
{return cljs.core.tree_map_kv_reduce.call(null,this__13191.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13192 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13193 = this;
if((this__13193.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13193.tree,false,this__13193.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__13194 = this;
var this$__13195 = this;
return cljs.core.pr_str.call(null,this$__13195);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__13196 = this;
var coll__13197 = this;
var t__13198 = this__13196.tree;
while(true){
if((t__13198 != null))
{var c__13199 = this__13196.comp.call(null,k,t__13198.key);
if((c__13199 === 0))
{return t__13198;
} else
{if((c__13199 < 0))
{{
var G__13217 = t__13198.left;
t__13198 = G__13217;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__13218 = t__13198.right;
t__13198 = G__13218;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13200 = this;
if((this__13200.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13200.tree,ascending_QMARK_,this__13200.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13201 = this;
if((this__13201.cnt > 0))
{var stack__13202 = null;
var t__13203 = this__13201.tree;
while(true){
if((t__13203 != null))
{var c__13204 = this__13201.comp.call(null,k,t__13203.key);
if((c__13204 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__13202,t__13203),ascending_QMARK_,-1));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__13204 < 0))
{{
var G__13219 = cljs.core.conj.call(null,stack__13202,t__13203);
var G__13220 = t__13203.left;
stack__13202 = G__13219;
t__13203 = G__13220;
continue;
}
} else
{{
var G__13221 = stack__13202;
var G__13222 = t__13203.right;
stack__13202 = G__13221;
t__13203 = G__13222;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__13204 > 0))
{{
var G__13223 = cljs.core.conj.call(null,stack__13202,t__13203);
var G__13224 = t__13203.right;
stack__13202 = G__13223;
t__13203 = G__13224;
continue;
}
} else
{{
var G__13225 = stack__13202;
var G__13226 = t__13203.left;
stack__13202 = G__13225;
t__13203 = G__13226;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__13202 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__13202,ascending_QMARK_,-1));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13205 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13206 = this;
return this__13206.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13207 = this;
if((this__13207.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__13207.tree,true,this__13207.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13208 = this;
return this__13208.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13209 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13210 = this;
return (new cljs.core.PersistentTreeMap(this__13210.comp,this__13210.tree,this__13210.cnt,meta,this__13210.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13214 = this;
return this__13214.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13215 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__13215.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13211 = this;
var found__13212 = [null];
var t__13213 = cljs.core.tree_map_remove.call(null,this__13211.comp,this__13211.tree,k,found__13212);
if((t__13213 == null))
{if((cljs.core.nth.call(null,found__13212,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__13211.comp,null,0,this__13211.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__13211.comp,t__13213.blacken(),(this__13211.cnt - 1),this__13211.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__13227 = cljs.core.seq.call(null,keyvals);
var out__13228 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(cljs.core.truth_(in$__13227))
{{
var G__13229 = cljs.core.nnext.call(null,in$__13227);
var G__13230 = cljs.core.assoc_BANG_.call(null,out__13228,cljs.core.first.call(null,in$__13227),cljs.core.second.call(null,in$__13227));
in$__13227 = G__13229;
out__13228 = G__13230;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13228);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__13231){
var keyvals = cljs.core.seq(arglist__13231);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__13232){
var keyvals = cljs.core.seq(arglist__13232);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$__13233 = cljs.core.seq.call(null,keyvals);
var out__13234 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(cljs.core.truth_(in$__13233))
{{
var G__13235 = cljs.core.nnext.call(null,in$__13233);
var G__13236 = cljs.core.assoc.call(null,out__13234,cljs.core.first.call(null,in$__13233),cljs.core.second.call(null,in$__13233));
in$__13233 = G__13235;
out__13234 = G__13236;
continue;
}
} else
{return out__13234;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__13237){
var keyvals = cljs.core.seq(arglist__13237);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$__13238 = cljs.core.seq.call(null,keyvals);
var out__13239 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(cljs.core.truth_(in$__13238))
{{
var G__13240 = cljs.core.nnext.call(null,in$__13238);
var G__13241 = cljs.core.assoc.call(null,out__13239,cljs.core.first.call(null,in$__13238),cljs.core.second.call(null,in$__13238));
in$__13238 = G__13240;
out__13239 = G__13241;
continue;
}
} else
{return out__13239;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__13242){
var comparator = cljs.core.first(arglist__13242);
var keyvals = cljs.core.rest(arglist__13242);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13243_SHARP_,p2__13244_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13245 = p1__13243_SHARP_;
if(cljs.core.truth_(or__3548__auto____13245))
{return or__3548__auto____13245;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13244_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__13246){
var maps = cljs.core.seq(arglist__13246);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__13249 = (function (m,e){
var k__13247 = cljs.core.first.call(null,e);
var v__13248 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__13247))
{return cljs.core.assoc.call(null,m,k__13247,f.call(null,cljs.core.get.call(null,m,k__13247),v__13248));
} else
{return cljs.core.assoc.call(null,m,k__13247,v__13248);
}
});
var merge2__13251 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13249,(function (){var or__3548__auto____13250 = m1;
if(cljs.core.truth_(or__3548__auto____13250))
{return or__3548__auto____13250;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__13251,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__13252){
var f = cljs.core.first(arglist__13252);
var maps = cljs.core.rest(arglist__13252);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13253 = cljs.core.ObjMap.fromObject([],{});
var keys__13254 = cljs.core.seq.call(null,keyseq);
while(true){
if(cljs.core.truth_(keys__13254))
{var key__13255 = cljs.core.first.call(null,keys__13254);
var entry__13256 = cljs.core.get.call(null,map,key__13255,"\uFDD0'user/not-found");
{
var G__13257 = ((cljs.core.not_EQ_.call(null,entry__13256,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__13253,key__13255,entry__13256):ret__13253);
var G__13258 = cljs.core.next.call(null,keys__13254);
ret__13253 = G__13257;
keys__13254 = G__13258;
continue;
}
} else
{return ret__13253;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155022479;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13264 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__13264.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13265 = this;
var h__364__auto____13266 = this__13265.__hash;
if((h__364__auto____13266 != null))
{return h__364__auto____13266;
} else
{var h__364__auto____13267 = cljs.core.hash_iset.call(null,coll);
this__13265.__hash = h__364__auto____13267;
return h__364__auto____13267;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13268 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13269 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13269.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__13288 = null;
var G__13288__2 = (function (tsym13262,k){
var this__13270 = this;
var tsym13262__13271 = this;
var coll__13272 = tsym13262__13271;
return cljs.core._lookup.call(null,coll__13272,k);
});
var G__13288__3 = (function (tsym13263,k,not_found){
var this__13273 = this;
var tsym13263__13274 = this;
var coll__13275 = tsym13263__13274;
return cljs.core._lookup.call(null,coll__13275,k,not_found);
});
G__13288 = function(tsym13263,k,not_found){
switch(arguments.length){
case 2:
return G__13288__2.call(this,tsym13263,k);
case 3:
return G__13288__3.call(this,tsym13263,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13288;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (tsym13260,args13261){
return tsym13260.call.apply(tsym13260,[tsym13260].concat(cljs.core.aclone.call(null,args13261)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13276 = this;
return (new cljs.core.PersistentHashSet(this__13276.meta,cljs.core.assoc.call(null,this__13276.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__13277 = this;
var this$__13278 = this;
return cljs.core.pr_str.call(null,this$__13278);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13279 = this;
return cljs.core.keys.call(null,this__13279.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13280 = this;
return (new cljs.core.PersistentHashSet(this__13280.meta,cljs.core.dissoc.call(null,this__13280.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13281 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13282 = this;
var and__3546__auto____13283 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____13283)
{var and__3546__auto____13284 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____13284)
{return cljs.core.every_QMARK_.call(null,(function (p1__13259_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13259_SHARP_);
}),other);
} else
{return and__3546__auto____13284;
}
} else
{return and__3546__auto____13283;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13285 = this;
return (new cljs.core.PersistentHashSet(meta,this__13285.hash_map,this__13285.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13286 = this;
return this__13286.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13287 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__13287.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 131;
this.cljs$lang$protocol_mask$partition1$ = 17;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$ = true;
cljs.core.TransientHashSet.prototype.call = (function() {
var G__13306 = null;
var G__13306__2 = (function (tsym13292,k){
var this__13294 = this;
var tsym13292__13295 = this;
var tcoll__13296 = tsym13292__13295;
if((cljs.core._lookup.call(null,this__13294.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__13306__3 = (function (tsym13293,k,not_found){
var this__13297 = this;
var tsym13293__13298 = this;
var tcoll__13299 = tsym13293__13298;
if((cljs.core._lookup.call(null,this__13297.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__13306 = function(tsym13293,k,not_found){
switch(arguments.length){
case 2:
return G__13306__2.call(this,tsym13293,k);
case 3:
return G__13306__3.call(this,tsym13293,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13306;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (tsym13290,args13291){
return tsym13290.call.apply(tsym13290,[tsym13290].concat(cljs.core.aclone.call(null,args13291)));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__13300 = this;
return cljs.core._lookup.call(null,tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__13301 = this;
if((cljs.core._lookup.call(null,this__13301.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13302 = this;
return cljs.core.count.call(null,this__13302.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__13303 = this;
this__13303.transient_map = cljs.core.dissoc_BANG_.call(null,this__13303.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$ = true;
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13304 = this;
this__13304.transient_map = cljs.core.assoc_BANG_.call(null,this__13304.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13305 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__13305.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 208865423;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13311 = this;
var h__364__auto____13312 = this__13311.__hash;
if((h__364__auto____13312 != null))
{return h__364__auto____13312;
} else
{var h__364__auto____13313 = cljs.core.hash_iset.call(null,coll);
this__13311.__hash = h__364__auto____13313;
return h__364__auto____13313;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__13314 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__13315 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13315.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__13339 = null;
var G__13339__2 = (function (tsym13309,k){
var this__13316 = this;
var tsym13309__13317 = this;
var coll__13318 = tsym13309__13317;
return cljs.core._lookup.call(null,coll__13318,k);
});
var G__13339__3 = (function (tsym13310,k,not_found){
var this__13319 = this;
var tsym13310__13320 = this;
var coll__13321 = tsym13310__13320;
return cljs.core._lookup.call(null,coll__13321,k,not_found);
});
G__13339 = function(tsym13310,k,not_found){
switch(arguments.length){
case 2:
return G__13339__2.call(this,tsym13310,k);
case 3:
return G__13339__3.call(this,tsym13310,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13339;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (tsym13307,args13308){
return tsym13307.call.apply(tsym13307,[tsym13307].concat(cljs.core.aclone.call(null,args13308)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13322 = this;
return (new cljs.core.PersistentTreeSet(this__13322.meta,cljs.core.assoc.call(null,this__13322.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13323 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__13323.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__13324 = this;
var this$__13325 = this;
return cljs.core.pr_str.call(null,this$__13325);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__13326 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__13326.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__13327 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__13327.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__13328 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__13329 = this;
return cljs.core._comparator.call(null,this__13329.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13330 = this;
return cljs.core.keys.call(null,this__13330.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__13331 = this;
return (new cljs.core.PersistentTreeSet(this__13331.meta,cljs.core.dissoc.call(null,this__13331.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13332 = this;
return cljs.core.count.call(null,this__13332.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13333 = this;
var and__3546__auto____13334 = cljs.core.set_QMARK_.call(null,other);
if(and__3546__auto____13334)
{var and__3546__auto____13335 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3546__auto____13335)
{return cljs.core.every_QMARK_.call(null,(function (p1__13289_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13289_SHARP_);
}),other);
} else
{return and__3546__auto____13335;
}
} else
{return and__3546__auto____13334;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13336 = this;
return (new cljs.core.PersistentTreeSet(meta,this__13336.tree_map,this__13336.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13337 = this;
return this__13337.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13338 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__13338.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13340 = cljs.core.seq.call(null,coll);
var out__13341 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,in$__13340)))
{{
var G__13342 = cljs.core.next.call(null,in$__13340);
var G__13343 = cljs.core.conj_BANG_.call(null,out__13341,cljs.core.first.call(null,in$__13340));
in$__13340 = G__13342;
out__13341 = G__13343;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13341);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__13344){
var keys = cljs.core.seq(arglist__13344);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__13346){
var comparator = cljs.core.first(arglist__13346);
var keys = cljs.core.rest(arglist__13346);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__13347 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13348 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3695__auto____13348))
{var e__13349 = temp__3695__auto____13348;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13349));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13347,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13345_SHARP_){
var temp__3695__auto____13350 = cljs.core.find.call(null,smap,p1__13345_SHARP_);
if(cljs.core.truth_(temp__3695__auto____13350))
{var e__13351 = temp__3695__auto____13350;
return cljs.core.second.call(null,e__13351);
} else
{return p1__13345_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13359 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13352,seen){
while(true){
var vec__13353__13354 = p__13352;
var f__13355 = cljs.core.nth.call(null,vec__13353__13354,0,null);
var xs__13356 = vec__13353__13354;
var temp__3698__auto____13357 = cljs.core.seq.call(null,xs__13356);
if(cljs.core.truth_(temp__3698__auto____13357))
{var s__13358 = temp__3698__auto____13357;
if(cljs.core.contains_QMARK_.call(null,seen,f__13355))
{{
var G__13360 = cljs.core.rest.call(null,s__13358);
var G__13361 = seen;
p__13352 = G__13360;
seen = G__13361;
continue;
}
} else
{return cljs.core.cons.call(null,f__13355,step.call(null,cljs.core.rest.call(null,s__13358),cljs.core.conj.call(null,seen,f__13355)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});
return step__13359.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13362 = cljs.core.PersistentVector.fromArray([]);
var s__13363 = s;
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13363)))
{{
var G__13364 = cljs.core.conj.call(null,ret__13362,cljs.core.first.call(null,s__13363));
var G__13365 = cljs.core.next.call(null,s__13363);
ret__13362 = G__13364;
s__13363 = G__13365;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13362);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3548__auto____13366 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____13366)
{return or__3548__auto____13366;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13367 = x.lastIndexOf("/");
if((i__13367 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13367 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3548__auto____13368 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3548__auto____13368)
{return or__3548__auto____13368;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__13369 = x.lastIndexOf("/");
if((i__13369 > -1))
{return cljs.core.subs.call(null,x,2,i__13369);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13372 = cljs.core.ObjMap.fromObject([],{});
var ks__13373 = cljs.core.seq.call(null,keys);
var vs__13374 = cljs.core.seq.call(null,vals);
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13375 = ks__13373;
if(cljs.core.truth_(and__3546__auto____13375))
{return vs__13374;
} else
{return and__3546__auto____13375;
}
})()))
{{
var G__13376 = cljs.core.assoc.call(null,map__13372,cljs.core.first.call(null,ks__13373),cljs.core.first.call(null,vs__13374));
var G__13377 = cljs.core.next.call(null,ks__13373);
var G__13378 = cljs.core.next.call(null,vs__13374);
map__13372 = G__13376;
ks__13373 = G__13377;
vs__13374 = G__13378;
continue;
}
} else
{return map__13372;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__13381__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13370_SHARP_,p2__13371_SHARP_){
return max_key.call(null,k,p1__13370_SHARP_,p2__13371_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13381 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13381__delegate.call(this, k, x, y, more);
};
G__13381.cljs$lang$maxFixedArity = 3;
G__13381.cljs$lang$applyTo = (function (arglist__13382){
var k = cljs.core.first(arglist__13382);
var x = cljs.core.first(cljs.core.next(arglist__13382));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13382)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13382)));
return G__13381__delegate(k, x, y, more);
});
G__13381.cljs$lang$arity$variadic = G__13381__delegate;
return G__13381;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__13383__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13379_SHARP_,p2__13380_SHARP_){
return min_key.call(null,k,p1__13379_SHARP_,p2__13380_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13383 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13383__delegate.call(this, k, x, y, more);
};
G__13383.cljs$lang$maxFixedArity = 3;
G__13383.cljs$lang$applyTo = (function (arglist__13384){
var k = cljs.core.first(arglist__13384);
var x = cljs.core.first(cljs.core.next(arglist__13384));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13384)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13384)));
return G__13383__delegate(k, x, y, more);
});
G__13383.cljs$lang$arity$variadic = G__13383__delegate;
return G__13383;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13385 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____13385))
{var s__13386 = temp__3698__auto____13385;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13386),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13386)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13387 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____13387))
{var s__13388 = temp__3698__auto____13387;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13388))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13388),take_while.call(null,pred,cljs.core.rest.call(null,s__13388)));
} else
{return null;
}
} else
{return null;
}
})));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__13389 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__13389.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__13390 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3698__auto____13391 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3698__auto____13391))
{var vec__13392__13393 = temp__3698__auto____13391;
var e__13394 = cljs.core.nth.call(null,vec__13392__13393,0,null);
var s__13395 = vec__13392__13393;
if(cljs.core.truth_(include__13390.call(null,e__13394)))
{return s__13395;
} else
{return cljs.core.next.call(null,s__13395);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13390,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____13396 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3698__auto____13396))
{var vec__13397__13398 = temp__3698__auto____13396;
var e__13399 = cljs.core.nth.call(null,vec__13397__13398,0,null);
var s__13400 = vec__13397__13398;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__13399))?s__13400:cljs.core.next.call(null,s__13400)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__13401 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3698__auto____13402 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3698__auto____13402))
{var vec__13403__13404 = temp__3698__auto____13402;
var e__13405 = cljs.core.nth.call(null,vec__13403__13404,0,null);
var s__13406 = vec__13403__13404;
if(cljs.core.truth_(include__13401.call(null,e__13405)))
{return s__13406;
} else
{return cljs.core.next.call(null,s__13406);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__13401,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3698__auto____13407 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3698__auto____13407))
{var vec__13408__13409 = temp__3698__auto____13407;
var e__13410 = cljs.core.nth.call(null,vec__13408__13409,0,null);
var s__13411 = vec__13408__13409;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__13410))?s__13411:cljs.core.next.call(null,s__13411)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 16187486;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__13412 = this;
var h__364__auto____13413 = this__13412.__hash;
if((h__364__auto____13413 != null))
{return h__364__auto____13413;
} else
{var h__364__auto____13414 = cljs.core.hash_coll.call(null,rng);
this__13412.__hash = h__364__auto____13414;
return h__364__auto____13414;
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__13415 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__13416 = this;
var this$__13417 = this;
return cljs.core.pr_str.call(null,this$__13417);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__13418 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__13419 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__13420 = this;
var comp__13421 = (((this__13420.step > 0))?cljs.core._LT_:cljs.core._GT_);
if(cljs.core.truth_(comp__13421.call(null,this__13420.start,this__13420.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__13422 = this;
if(cljs.core.not.call(null,cljs.core._seq.call(null,rng)))
{return 0;
} else
{return Math['ceil'](((this__13422.end - this__13422.start) / this__13422.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__13423 = this;
return this__13423.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__13424 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13424.meta,(this__13424.start + this__13424.step),this__13424.end,this__13424.step,null));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__13425 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__13426 = this;
return (new cljs.core.Range(meta,this__13426.start,this__13426.end,this__13426.step,this__13426.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__13427 = this;
return this__13427.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__13428 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__13428.start + (n * this__13428.step));
} else
{if((function (){var and__3546__auto____13429 = (this__13428.start > this__13428.end);
if(and__3546__auto____13429)
{return (this__13428.step === 0);
} else
{return and__3546__auto____13429;
}
})())
{return this__13428.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__13430 = this;
if((n < cljs.core._count.call(null,rng)))
{return (this__13430.start + (n * this__13430.step));
} else
{if((function (){var and__3546__auto____13431 = (this__13430.start > this__13430.end);
if(and__3546__auto____13431)
{return (this__13430.step === 0);
} else
{return and__3546__auto____13431;
}
})())
{return this__13430.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__13432 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13432.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13433 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____13433))
{var s__13434 = temp__3698__auto____13433;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13434),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13434)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13436 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____13436))
{var s__13437 = temp__3698__auto____13436;
var fst__13438 = cljs.core.first.call(null,s__13437);
var fv__13439 = f.call(null,fst__13438);
var run__13440 = cljs.core.cons.call(null,fst__13438,cljs.core.take_while.call(null,(function (p1__13435_SHARP_){
return cljs.core._EQ_.call(null,fv__13439,f.call(null,p1__13435_SHARP_));
}),cljs.core.next.call(null,s__13437)));
return cljs.core.cons.call(null,run__13440,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13440),s__13437))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.fromObject([],{})),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13451 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3695__auto____13451))
{var s__13452 = temp__3695__auto____13451;
return reductions.call(null,f,cljs.core.first.call(null,s__13452),cljs.core.rest.call(null,s__13452));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13453 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(temp__3698__auto____13453))
{var s__13454 = temp__3698__auto____13453;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13454)),cljs.core.rest.call(null,s__13454));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__13456 = null;
var G__13456__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13456__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13456__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13456__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13456__4 = (function() { 
var G__13457__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13457 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13457__delegate.call(this, x, y, z, args);
};
G__13457.cljs$lang$maxFixedArity = 3;
G__13457.cljs$lang$applyTo = (function (arglist__13458){
var x = cljs.core.first(arglist__13458);
var y = cljs.core.first(cljs.core.next(arglist__13458));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13458)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13458)));
return G__13457__delegate(x, y, z, args);
});
G__13457.cljs$lang$arity$variadic = G__13457__delegate;
return G__13457;
})()
;
G__13456 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13456__0.call(this);
case 1:
return G__13456__1.call(this,x);
case 2:
return G__13456__2.call(this,x,y);
case 3:
return G__13456__3.call(this,x,y,z);
default:
return G__13456__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13456.cljs$lang$maxFixedArity = 3;
G__13456.cljs$lang$applyTo = G__13456__4.cljs$lang$applyTo;
return G__13456;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__13459 = null;
var G__13459__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13459__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13459__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13459__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13459__4 = (function() { 
var G__13460__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13460 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13460__delegate.call(this, x, y, z, args);
};
G__13460.cljs$lang$maxFixedArity = 3;
G__13460.cljs$lang$applyTo = (function (arglist__13461){
var x = cljs.core.first(arglist__13461);
var y = cljs.core.first(cljs.core.next(arglist__13461));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13461)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13461)));
return G__13460__delegate(x, y, z, args);
});
G__13460.cljs$lang$arity$variadic = G__13460__delegate;
return G__13460;
})()
;
G__13459 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13459__0.call(this);
case 1:
return G__13459__1.call(this,x);
case 2:
return G__13459__2.call(this,x,y);
case 3:
return G__13459__3.call(this,x,y,z);
default:
return G__13459__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13459.cljs$lang$maxFixedArity = 3;
G__13459.cljs$lang$applyTo = G__13459__4.cljs$lang$applyTo;
return G__13459;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__13462 = null;
var G__13462__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13462__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13462__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13462__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13462__4 = (function() { 
var G__13463__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13463__delegate.call(this, x, y, z, args);
};
G__13463.cljs$lang$maxFixedArity = 3;
G__13463.cljs$lang$applyTo = (function (arglist__13464){
var x = cljs.core.first(arglist__13464);
var y = cljs.core.first(cljs.core.next(arglist__13464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13464)));
return G__13463__delegate(x, y, z, args);
});
G__13463.cljs$lang$arity$variadic = G__13463__delegate;
return G__13463;
})()
;
G__13462 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13462__0.call(this);
case 1:
return G__13462__1.call(this,x);
case 2:
return G__13462__2.call(this,x,y);
case 3:
return G__13462__3.call(this,x,y,z);
default:
return G__13462__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13462.cljs$lang$maxFixedArity = 3;
G__13462.cljs$lang$applyTo = G__13462__4.cljs$lang$applyTo;
return G__13462;
})()
});
var juxt__4 = (function() { 
var G__13465__delegate = function (f,g,h,fs){
var fs__13455 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__13466 = null;
var G__13466__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__13441_SHARP_,p2__13442_SHARP_){
return cljs.core.conj.call(null,p1__13441_SHARP_,p2__13442_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__13455);
});
var G__13466__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13443_SHARP_,p2__13444_SHARP_){
return cljs.core.conj.call(null,p1__13443_SHARP_,p2__13444_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__13455);
});
var G__13466__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13445_SHARP_,p2__13446_SHARP_){
return cljs.core.conj.call(null,p1__13445_SHARP_,p2__13446_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__13455);
});
var G__13466__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13447_SHARP_,p2__13448_SHARP_){
return cljs.core.conj.call(null,p1__13447_SHARP_,p2__13448_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__13455);
});
var G__13466__4 = (function() { 
var G__13467__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13449_SHARP_,p2__13450_SHARP_){
return cljs.core.conj.call(null,p1__13449_SHARP_,cljs.core.apply.call(null,p2__13450_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__13455);
};
var G__13467 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13467__delegate.call(this, x, y, z, args);
};
G__13467.cljs$lang$maxFixedArity = 3;
G__13467.cljs$lang$applyTo = (function (arglist__13468){
var x = cljs.core.first(arglist__13468);
var y = cljs.core.first(cljs.core.next(arglist__13468));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13468)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13468)));
return G__13467__delegate(x, y, z, args);
});
G__13467.cljs$lang$arity$variadic = G__13467__delegate;
return G__13467;
})()
;
G__13466 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__13466__0.call(this);
case 1:
return G__13466__1.call(this,x);
case 2:
return G__13466__2.call(this,x,y);
case 3:
return G__13466__3.call(this,x,y,z);
default:
return G__13466__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__13466.cljs$lang$maxFixedArity = 3;
G__13466.cljs$lang$applyTo = G__13466__4.cljs$lang$applyTo;
return G__13466;
})()
};
var G__13465 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13465__delegate.call(this, f, g, h, fs);
};
G__13465.cljs$lang$maxFixedArity = 3;
G__13465.cljs$lang$applyTo = (function (arglist__13469){
var f = cljs.core.first(arglist__13469);
var g = cljs.core.first(cljs.core.next(arglist__13469));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13469)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13469)));
return G__13465__delegate(f, g, h, fs);
});
G__13465.cljs$lang$arity$variadic = G__13465__delegate;
return G__13465;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13471 = cljs.core.next.call(null,coll);
coll = G__13471;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13470 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_(and__3546__auto____13470))
{return (n > 0);
} else
{return and__3546__auto____13470;
}
})()))
{{
var G__13472 = (n - 1);
var G__13473 = cljs.core.next.call(null,coll);
n = G__13472;
coll = G__13473;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__13474 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13474),s))
{if((cljs.core.count.call(null,matches__13474) === 1))
{return cljs.core.first.call(null,matches__13474);
} else
{return cljs.core.vec.call(null,matches__13474);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__13475 = re.exec(s);
if((matches__13475 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__13475) === 1))
{return cljs.core.first.call(null,matches__13475);
} else
{return cljs.core.vec.call(null,matches__13475);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13476 = cljs.core.re_find.call(null,re,s);
var match_idx__13477 = s.search(re);
var match_str__13478 = ((cljs.core.coll_QMARK_.call(null,match_data__13476))?cljs.core.first.call(null,match_data__13476):match_data__13476);
var post_match__13479 = cljs.core.subs.call(null,s,(match_idx__13477 + cljs.core.count.call(null,match_str__13478)));
if(cljs.core.truth_(match_data__13476))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13476,re_seq.call(null,re,post_match__13479));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__13481__13482 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___13483 = cljs.core.nth.call(null,vec__13481__13482,0,null);
var flags__13484 = cljs.core.nth.call(null,vec__13481__13482,1,null);
var pattern__13485 = cljs.core.nth.call(null,vec__13481__13482,2,null);
return (new RegExp(pattern__13485,flags__13484));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13480_SHARP_){
return print_one.call(null,p1__13480_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13486 = cljs.core.get.call(null,opts,"\uFDD0'meta");
if(cljs.core.truth_(and__3546__auto____13486))
{var and__3546__auto____13490 = (function (){var G__13487__13488 = obj;
if((G__13487__13488 != null))
{if((function (){var or__3548__auto____13489 = (G__13487__13488.cljs$lang$protocol_mask$partition0$ & 65536);
if(or__3548__auto____13489)
{return or__3548__auto____13489;
} else
{return G__13487__13488.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__13487__13488.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13487__13488);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__13487__13488);
}
})();
if(cljs.core.truth_(and__3546__auto____13490))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13490;
}
} else
{return and__3546__auto____13486;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var and__3546__auto____13491 = (obj != null);
if(and__3546__auto____13491)
{return obj.cljs$lang$type;
} else
{return and__3546__auto____13491;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__13492__13493 = obj;
if((G__13492__13493 != null))
{if((function (){var or__3548__auto____13494 = (G__13492__13493.cljs$lang$protocol_mask$partition0$ & 268435456);
if(or__3548__auto____13494)
{return or__3548__auto____13494;
} else
{return G__13492__13493.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__13492__13493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13492__13493);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__13492__13493);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__13495 = cljs.core.first.call(null,objs);
var sb__13496 = (new goog.string.StringBuffer());
var G__13497__13498 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__13497__13498))
{var obj__13499 = cljs.core.first.call(null,G__13497__13498);
var G__13497__13500 = G__13497__13498;
while(true){
if((obj__13499 === first_obj__13495))
{} else
{sb__13496.append(" ");
}
var G__13501__13502 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13499,opts));
if(cljs.core.truth_(G__13501__13502))
{var string__13503 = cljs.core.first.call(null,G__13501__13502);
var G__13501__13504 = G__13501__13502;
while(true){
sb__13496.append(string__13503);
var temp__3698__auto____13505 = cljs.core.next.call(null,G__13501__13504);
if(cljs.core.truth_(temp__3698__auto____13505))
{var G__13501__13506 = temp__3698__auto____13505;
{
var G__13509 = cljs.core.first.call(null,G__13501__13506);
var G__13510 = G__13501__13506;
string__13503 = G__13509;
G__13501__13504 = G__13510;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13507 = cljs.core.next.call(null,G__13497__13500);
if(cljs.core.truth_(temp__3698__auto____13507))
{var G__13497__13508 = temp__3698__auto____13507;
{
var G__13511 = cljs.core.first.call(null,G__13497__13508);
var G__13512 = G__13497__13508;
obj__13499 = G__13511;
G__13497__13500 = G__13512;
continue;
}
} else
{}
break;
}
} else
{}
return sb__13496;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__13513 = cljs.core.pr_sb.call(null,objs,opts);
sb__13513.append("\n");
return [cljs.core.str(sb__13513)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13514 = cljs.core.first.call(null,objs);
var G__13515__13516 = cljs.core.seq.call(null,objs);
if(cljs.core.truth_(G__13515__13516))
{var obj__13517 = cljs.core.first.call(null,G__13515__13516);
var G__13515__13518 = G__13515__13516;
while(true){
if((obj__13517 === first_obj__13514))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13519__13520 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13517,opts));
if(cljs.core.truth_(G__13519__13520))
{var string__13521 = cljs.core.first.call(null,G__13519__13520);
var G__13519__13522 = G__13519__13520;
while(true){
cljs.core.string_print.call(null,string__13521);
var temp__3698__auto____13523 = cljs.core.next.call(null,G__13519__13522);
if(cljs.core.truth_(temp__3698__auto____13523))
{var G__13519__13524 = temp__3698__auto____13523;
{
var G__13527 = cljs.core.first.call(null,G__13519__13524);
var G__13528 = G__13519__13524;
string__13521 = G__13527;
G__13519__13522 = G__13528;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13525 = cljs.core.next.call(null,G__13515__13518);
if(cljs.core.truth_(temp__3698__auto____13525))
{var G__13515__13526 = temp__3698__auto____13525;
{
var G__13529 = cljs.core.first.call(null,G__13515__13526);
var G__13530 = G__13515__13526;
obj__13517 = G__13529;
G__13515__13518 = G__13530;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__13531){
var objs = cljs.core.seq(arglist__13531);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__13532){
var objs = cljs.core.seq(arglist__13532);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__13533){
var objs = cljs.core.seq(arglist__13533);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__13534){
var objs = cljs.core.seq(arglist__13534);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__13535){
var objs = cljs.core.seq(arglist__13535);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__13536){
var objs = cljs.core.seq(arglist__13536);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__13537){
var objs = cljs.core.seq(arglist__13537);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__13538){
var objs = cljs.core.seq(arglist__13538);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13539 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13539,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13540 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13540,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13541 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13541,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3698__auto____13542 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____13542))
{var nspc__13543 = temp__3698__auto____13542;
return [cljs.core.str(nspc__13543),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3698__auto____13544 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3698__auto____13544))
{var nspc__13545 = temp__3698__auto____13544;
return [cljs.core.str(nspc__13545),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13546 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13546,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__13547 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__13547,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1345404928;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13548 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__13549 = this;
var G__13550__13551 = cljs.core.seq.call(null,this__13549.watches);
if(cljs.core.truth_(G__13550__13551))
{var G__13553__13555 = cljs.core.first.call(null,G__13550__13551);
var vec__13554__13556 = G__13553__13555;
var key__13557 = cljs.core.nth.call(null,vec__13554__13556,0,null);
var f__13558 = cljs.core.nth.call(null,vec__13554__13556,1,null);
var G__13550__13559 = G__13550__13551;
var G__13553__13560 = G__13553__13555;
var G__13550__13561 = G__13550__13559;
while(true){
var vec__13562__13563 = G__13553__13560;
var key__13564 = cljs.core.nth.call(null,vec__13562__13563,0,null);
var f__13565 = cljs.core.nth.call(null,vec__13562__13563,1,null);
var G__13550__13566 = G__13550__13561;
f__13565.call(null,key__13564,this$,oldval,newval);
var temp__3698__auto____13567 = cljs.core.next.call(null,G__13550__13566);
if(cljs.core.truth_(temp__3698__auto____13567))
{var G__13550__13568 = temp__3698__auto____13567;
{
var G__13575 = cljs.core.first.call(null,G__13550__13568);
var G__13576 = G__13550__13568;
G__13553__13560 = G__13575;
G__13550__13561 = G__13576;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__13569 = this;
return this$.watches = cljs.core.assoc.call(null,this__13569.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__13570 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13570.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__13571 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13571.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__13572 = this;
return this__13572.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13573 = this;
return this__13573.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13574 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__13583__delegate = function (x,p__13577){
var map__13578__13579 = p__13577;
var map__13578__13580 = ((cljs.core.seq_QMARK_.call(null,map__13578__13579))?cljs.core.apply.call(null,cljs.core.hash_map,map__13578__13579):map__13578__13579);
var validator__13581 = cljs.core.get.call(null,map__13578__13580,"\uFDD0'validator");
var meta__13582 = cljs.core.get.call(null,map__13578__13580,"\uFDD0'meta");
return (new cljs.core.Atom(x,meta__13582,validator__13581,null));
};
var G__13583 = function (x,var_args){
var p__13577 = null;
if (goog.isDef(var_args)) {
  p__13577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13583__delegate.call(this, x, p__13577);
};
G__13583.cljs$lang$maxFixedArity = 1;
G__13583.cljs$lang$applyTo = (function (arglist__13584){
var x = cljs.core.first(arglist__13584);
var p__13577 = cljs.core.rest(arglist__13584);
return G__13583__delegate(x, p__13577);
});
G__13583.cljs$lang$arity$variadic = G__13583__delegate;
return G__13583;
})()
;
atom = function(x,var_args){
var p__13577 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13585 = a.validator;
if(cljs.core.truth_(temp__3698__auto____13585))
{var validate__13586 = temp__3698__auto____13585;
if(cljs.core.truth_(validate__13586.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",5917))))].join('')));
}
} else
{}
var old_value__13587 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13587,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__13588__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13588 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13588__delegate.call(this, a, f, x, y, z, more);
};
G__13588.cljs$lang$maxFixedArity = 5;
G__13588.cljs$lang$applyTo = (function (arglist__13589){
var a = cljs.core.first(arglist__13589);
var f = cljs.core.first(cljs.core.next(arglist__13589));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13589)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13589))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13589)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13589)))));
return G__13588__delegate(a, f, x, y, z, more);
});
G__13588.cljs$lang$arity$variadic = G__13588__delegate;
return G__13588;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13590){
var iref = cljs.core.first(arglist__13590);
var f = cljs.core.first(cljs.core.next(arglist__13590));
var args = cljs.core.rest(cljs.core.next(arglist__13590));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536887296;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__13591 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__13591.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__13592 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__13592.state,(function (p__13593){
var curr_state__13594 = p__13593;
var curr_state__13595 = ((cljs.core.seq_QMARK_.call(null,curr_state__13594))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__13594):curr_state__13594);
var done__13596 = cljs.core.get.call(null,curr_state__13595,"\uFDD0'done");
if(cljs.core.truth_(done__13596))
{return curr_state__13595;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__13592.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__13597__13598 = options;
var map__13597__13599 = ((cljs.core.seq_QMARK_.call(null,map__13597__13598))?cljs.core.apply.call(null,cljs.core.hash_map,map__13597__13598):map__13597__13598);
var keywordize_keys__13600 = cljs.core.get.call(null,map__13597__13599,"\uFDD0'keywordize-keys");
var keyfn__13601 = (cljs.core.truth_(keywordize_keys__13600)?cljs.core.keyword:cljs.core.str);
var f__13607 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__625__auto____13606 = (function iter__13602(s__13603){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13603__13604 = s__13603;
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13603__13604)))
{var k__13605 = cljs.core.first.call(null,s__13603__13604);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__13601.call(null,k__13605),thisfn.call(null,(x[k__13605]))]),iter__13602.call(null,cljs.core.rest.call(null,s__13603__13604)));
} else
{return null;
}
break;
}
})));
});
return iter__625__auto____13606.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__13607.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13608){
var x = cljs.core.first(arglist__13608);
var options = cljs.core.rest(arglist__13608);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__13609 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
return (function() { 
var G__13613__delegate = function (args){
var temp__3695__auto____13610 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13609),args);
if(cljs.core.truth_(temp__3695__auto____13610))
{var v__13611 = temp__3695__auto____13610;
return v__13611;
} else
{var ret__13612 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__13609,cljs.core.assoc,args,ret__13612);
return ret__13612;
}
};
var G__13613 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13613__delegate.call(this, args);
};
G__13613.cljs$lang$maxFixedArity = 0;
G__13613.cljs$lang$applyTo = (function (arglist__13614){
var args = cljs.core.seq(arglist__13614);;
return G__13613__delegate(args);
});
G__13613.cljs$lang$arity$variadic = G__13613__delegate;
return G__13613;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__13615 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__13615))
{{
var G__13616 = ret__13615;
f = G__13616;
continue;
}
} else
{return ret__13615;
}
break;
}
});
var trampoline__2 = (function() { 
var G__13617__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13617 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13617__delegate.call(this, f, args);
};
G__13617.cljs$lang$maxFixedArity = 1;
G__13617.cljs$lang$applyTo = (function (arglist__13618){
var f = cljs.core.first(arglist__13618);
var args = cljs.core.rest(arglist__13618);
return G__13617__delegate(f, args);
});
G__13617.cljs$lang$arity$variadic = G__13617__delegate;
return G__13617;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__13619 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__13619,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13619,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3548__auto____13620 = cljs.core._EQ_.call(null,child,parent);
if(or__3548__auto____13620)
{return or__3548__auto____13620;
} else
{var or__3548__auto____13621 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);
if(or__3548__auto____13621)
{return or__3548__auto____13621;
} else
{var and__3546__auto____13622 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3546__auto____13622)
{var and__3546__auto____13623 = cljs.core.vector_QMARK_.call(null,child);
if(and__3546__auto____13623)
{var and__3546__auto____13624 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3546__auto____13624)
{var ret__13625 = true;
var i__13626 = 0;
while(true){
if((function (){var or__3548__auto____13627 = cljs.core.not.call(null,ret__13625);
if(or__3548__auto____13627)
{return or__3548__auto____13627;
} else
{return (i__13626 === cljs.core.count.call(null,parent));
}
})())
{return ret__13625;
} else
{{
var G__13628 = isa_QMARK_.call(null,h,child.call(null,i__13626),parent.call(null,i__13626));
var G__13629 = (i__13626 + 1);
ret__13625 = G__13628;
i__13626 = G__13629;
continue;
}
}
break;
}
} else
{return and__3546__auto____13624;
}
} else
{return and__3546__auto____13623;
}
} else
{return and__3546__auto____13622;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6201))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6205))))].join('')));
}
var tp__13633 = "\uFDD0'parents".call(null,h);
var td__13634 = "\uFDD0'descendants".call(null,h);
var ta__13635 = "\uFDD0'ancestors".call(null,h);
var tf__13636 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3548__auto____13637 = ((cljs.core.contains_QMARK_.call(null,tp__13633.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__13635.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__13635.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__13633,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__13636.call(null,"\uFDD0'ancestors".call(null,h),tag,td__13634,parent,ta__13635),"\uFDD0'descendants":tf__13636.call(null,"\uFDD0'descendants".call(null,h),parent,ta__13635,tag,td__13634)});
})());
if(cljs.core.truth_(or__3548__auto____13637))
{return or__3548__auto____13637;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__13638 = "\uFDD0'parents".call(null,h);
var childsParents__13639 = (cljs.core.truth_(parentMap__13638.call(null,tag))?cljs.core.disj.call(null,parentMap__13638.call(null,tag),parent):cljs.core.set([]));
var newParents__13640 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13639))?cljs.core.assoc.call(null,parentMap__13638,tag,childsParents__13639):cljs.core.dissoc.call(null,parentMap__13638,tag));
var deriv_seq__13641 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13630_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13630_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13630_SHARP_),cljs.core.second.call(null,p1__13630_SHARP_)));
}),cljs.core.seq.call(null,newParents__13640)));
if(cljs.core.contains_QMARK_.call(null,parentMap__13638.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__13631_SHARP_,p2__13632_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13631_SHARP_,p2__13632_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13641));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__13642 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3548__auto____13644 = (cljs.core.truth_((function (){var and__3546__auto____13643 = xprefs__13642;
if(cljs.core.truth_(and__3546__auto____13643))
{return xprefs__13642.call(null,y);
} else
{return and__3546__auto____13643;
}
})())?true:null);
if(cljs.core.truth_(or__3548__auto____13644))
{return or__3548__auto____13644;
} else
{var or__3548__auto____13646 = (function (){var ps__13645 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__13645) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13645),prefer_table)))
{} else
{}
{
var G__13649 = cljs.core.rest.call(null,ps__13645);
ps__13645 = G__13649;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____13646))
{return or__3548__auto____13646;
} else
{var or__3548__auto____13648 = (function (){var ps__13647 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__13647) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13647),y,prefer_table)))
{} else
{}
{
var G__13650 = cljs.core.rest.call(null,ps__13647);
ps__13647 = G__13650;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3548__auto____13648))
{return or__3548__auto____13648;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____13651 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3548__auto____13651))
{return or__3548__auto____13651;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13660 = cljs.core.reduce.call(null,(function (be,p__13652){
var vec__13653__13654 = p__13652;
var k__13655 = cljs.core.nth.call(null,vec__13653__13654,0,null);
var ___13656 = cljs.core.nth.call(null,vec__13653__13654,1,null);
var e__13657 = vec__13653__13654;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13655))
{var be2__13659 = (cljs.core.truth_((function (){var or__3548__auto____13658 = (be == null);
if(or__3548__auto____13658)
{return or__3548__auto____13658;
} else
{return cljs.core.dominates.call(null,k__13655,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13657:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13659),k__13655,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__13655),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__13659)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__13659;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__13660))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13660));
return cljs.core.second.call(null,best_entry__13660);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3546__auto____13661 = mf;
if(and__3546__auto____13661)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3546__auto____13661;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3548__auto____13662 = (cljs.core._reset[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13662)
{return or__3548__auto____13662;
} else
{var or__3548__auto____13663 = (cljs.core._reset["_"]);
if(or__3548__auto____13663)
{return or__3548__auto____13663;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3546__auto____13664 = mf;
if(and__3546__auto____13664)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3546__auto____13664;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____13665 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13665)
{return or__3548__auto____13665;
} else
{var or__3548__auto____13666 = (cljs.core._add_method["_"]);
if(or__3548__auto____13666)
{return or__3548__auto____13666;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3546__auto____13667 = mf;
if(and__3546__auto____13667)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3546__auto____13667;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13668 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13668)
{return or__3548__auto____13668;
} else
{var or__3548__auto____13669 = (cljs.core._remove_method["_"]);
if(or__3548__auto____13669)
{return or__3548__auto____13669;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3546__auto____13670 = mf;
if(and__3546__auto____13670)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3546__auto____13670;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____13671 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13671)
{return or__3548__auto____13671;
} else
{var or__3548__auto____13672 = (cljs.core._prefer_method["_"]);
if(or__3548__auto____13672)
{return or__3548__auto____13672;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3546__auto____13673 = mf;
if(and__3546__auto____13673)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3546__auto____13673;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13674 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13674)
{return or__3548__auto____13674;
} else
{var or__3548__auto____13675 = (cljs.core._get_method["_"]);
if(or__3548__auto____13675)
{return or__3548__auto____13675;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3546__auto____13676 = mf;
if(and__3546__auto____13676)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3546__auto____13676;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3548__auto____13677 = (cljs.core._methods[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13677)
{return or__3548__auto____13677;
} else
{var or__3548__auto____13678 = (cljs.core._methods["_"]);
if(or__3548__auto____13678)
{return or__3548__auto____13678;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3546__auto____13679 = mf;
if(and__3546__auto____13679)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3546__auto____13679;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3548__auto____13680 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13680)
{return or__3548__auto____13680;
} else
{var or__3548__auto____13681 = (cljs.core._prefers["_"]);
if(or__3548__auto____13681)
{return or__3548__auto____13681;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3546__auto____13682 = mf;
if(and__3546__auto____13682)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3546__auto____13682;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3548__auto____13683 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);
if(or__3548__auto____13683)
{return or__3548__auto____13683;
} else
{var or__3548__auto____13684 = (cljs.core._dispatch["_"]);
if(or__3548__auto____13684)
{return or__3548__auto____13684;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13685 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13686 = cljs.core._get_method.call(null,mf,dispatch_val__13685);
if(cljs.core.truth_(target_fn__13686))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__13685)].join('')));
}
return cljs.core.apply.call(null,target_fn__13686,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 32;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__13687 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__13688 = this;
cljs.core.swap_BANG_.call(null,this__13688.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13688.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13688.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13688.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__13689 = this;
cljs.core.swap_BANG_.call(null,this__13689.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13689.method_cache,this__13689.method_table,this__13689.cached_hierarchy,this__13689.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__13690 = this;
cljs.core.swap_BANG_.call(null,this__13690.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13690.method_cache,this__13690.method_table,this__13690.cached_hierarchy,this__13690.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__13691 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13691.cached_hierarchy),cljs.core.deref.call(null,this__13691.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__13691.method_cache,this__13691.method_table,this__13691.cached_hierarchy,this__13691.hierarchy);
}
var temp__3695__auto____13692 = cljs.core.deref.call(null,this__13691.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3695__auto____13692))
{var target_fn__13693 = temp__3695__auto____13692;
return target_fn__13693;
} else
{var temp__3695__auto____13694 = cljs.core.find_and_cache_best_method.call(null,this__13691.name,dispatch_val,this__13691.hierarchy,this__13691.method_table,this__13691.prefer_table,this__13691.method_cache,this__13691.cached_hierarchy);
if(cljs.core.truth_(temp__3695__auto____13694))
{var target_fn__13695 = temp__3695__auto____13694;
return target_fn__13695;
} else
{return cljs.core.deref.call(null,this__13691.method_table).call(null,this__13691.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13696 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13696.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__13696.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__13696.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13696.method_cache,this__13696.method_table,this__13696.cached_hierarchy,this__13696.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__13697 = this;
return cljs.core.deref.call(null,this__13697.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__13698 = this;
return cljs.core.deref.call(null,this__13698.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__13699 = this;
return cljs.core.do_dispatch.call(null,mf,this__13699.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13700__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__13700 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13700__delegate.call(this, _, args);
};
G__13700.cljs$lang$maxFixedArity = 1;
G__13700.cljs$lang$applyTo = (function (arglist__13701){
var _ = cljs.core.first(arglist__13701);
var args = cljs.core.rest(arglist__13701);
return G__13700__delegate(_, args);
});
G__13700.cljs$lang$arity$variadic = G__13700__delegate;
return G__13700;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
