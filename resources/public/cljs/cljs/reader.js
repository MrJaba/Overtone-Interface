goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
void 0;cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3546__auto____4795 = reader;
if(and__3546__auto____4795)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3546__auto____4795;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{return (function (){var or__3548__auto____4796 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);
if(or__3548__auto____4796)
{return or__3548__auto____4796;
} else
{var or__3548__auto____4797 = (cljs.reader.read_char["_"]);
if(or__3548__auto____4797)
{return or__3548__auto____4797;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3546__auto____4798 = reader;
if(and__3546__auto____4798)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3546__auto____4798;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{return (function (){var or__3548__auto____4799 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);
if(or__3548__auto____4799)
{return or__3548__auto____4799;
} else
{var or__3548__auto____4800 = (cljs.reader.unread["_"]);
if(or__3548__auto____4800)
{return or__3548__auto____4800;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
void 0;
/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__454__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__4801 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4801.buffer_atom)))
{var idx__4802 = cljs.core.deref.call(null,this__4801.index_atom);
cljs.core.swap_BANG_.call(null,this__4801.index_atom,cljs.core.inc);
return (this__4801.s[idx__4802]);
} else
{var buf__4803 = cljs.core.deref.call(null,this__4801.buffer_atom);
cljs.core.swap_BANG_.call(null,this__4801.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4803);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__4804 = this;
return cljs.core.swap_BANG_.call(null,this__4804.buffer_atom,(function (p1__4794_SHARP_){
return cljs.core.cons.call(null,ch,p1__4794_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4805 = goog.string.isBreakingWhitespace.call(null,ch);
if(cljs.core.truth_(or__3548__auto____4805))
{return or__3548__auto____4805;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____4806 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3548__auto____4806)
{return or__3548__auto____4806;
} else
{var and__3546__auto____4808 = (function (){var or__3548__auto____4807 = ("+" === initch);
if(or__3548__auto____4807)
{return or__3548__auto____4807;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3546__auto____4808))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4809 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__4809);
return next_ch__4809;
})());
} else
{return and__3546__auto____4808;
}
}
});
void 0;
void 0;
void 0;
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4810){
var rdr = cljs.core.first(arglist__4810);
var msg = cljs.core.rest(arglist__4810);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4811 = (ch != "#");
if(and__3546__auto____4811)
{var and__3546__auto____4812 = (ch != "'");
if(and__3546__auto____4812)
{var and__3546__auto____4813 = (ch != ":");
if(and__3546__auto____4813)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3546__auto____4813;
}
} else
{return and__3546__auto____4812;
}
} else
{return and__3546__auto____4811;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4814 = (new goog.string.StringBuffer(initch));
var ch__4815 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3548__auto____4816 = (ch__4815 == null);
if(or__3548__auto____4816)
{return or__3548__auto____4816;
} else
{var or__3548__auto____4817 = cljs.reader.whitespace_QMARK_.call(null,ch__4815);
if(or__3548__auto____4817)
{return or__3548__auto____4817;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4815);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__4815);
return sb__4814.toString();
} else
{{
var G__4818 = (function (){sb__4814.append(ch__4815);
return sb__4814;
})();
var G__4819 = cljs.reader.read_char.call(null,rdr);
sb__4814 = G__4818;
ch__4815 = G__4819;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__4820 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3548__auto____4821 = (ch__4820 === "n");
if(or__3548__auto____4821)
{return or__3548__auto____4821;
} else
{var or__3548__auto____4822 = (ch__4820 === "r");
if(or__3548__auto____4822)
{return or__3548__auto____4822;
} else
{return (ch__4820 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__4823 = re.exec(s);
if((matches__4823 != null))
{if((matches__4823.length === 1))
{return (matches__4823[0]);
} else
{return matches__4823;
}
} else
{return null;
}
});
cljs.reader.match_int = (function match_int(s){
var groups__4824 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__4825 = (groups__4824[2]);
if((!(function (){var or__3548__auto____4826 = (group3__4825 == null);
if(or__3548__auto____4826)
{return or__3548__auto____4826;
} else
{return (group3__4825.length < 1);
}
})()))
{return 0;
} else
{var negate__4827 = ((("-" === (groups__4824[1])))?-1:1);
var a__4828 = (cljs.core.truth_((groups__4824[3]))?[(groups__4824[3]),10]:(cljs.core.truth_((groups__4824[4]))?[(groups__4824[4]),16]:(cljs.core.truth_((groups__4824[5]))?[(groups__4824[5]),8]:(cljs.core.truth_((groups__4824[7]))?[(groups__4824[7]),parseInt((groups__4824[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__4829 = (a__4828[0]);
var radix__4830 = (a__4828[1]);
if((n__4829 == null))
{return null;
} else
{return (negate__4827 * parseInt(n__4829,radix__4830));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4831 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__4832 = (groups__4831[1]);
var denominator__4833 = (groups__4831[2]);
return (parseInt(numinator__4832) / parseInt(denominator__4833));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__4834 = re.exec(s);
if((function (){var and__3546__auto____4835 = (matches__4834 != null);
if(and__3546__auto____4835)
{return ((matches__4834[0]) === s);
} else
{return and__3546__auto____4835;
}
})())
{if((matches__4834.length === 1))
{return (matches__4834[0]);
} else
{return matches__4834;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if(("f" === c))
{return "\f";
} else
{if(("b" === c))
{return "\b";
} else
{if(("\"" === c))
{return "\"";
} else
{if(("\\" === c))
{return "\\";
} else
{if(("n" === c))
{return "\n";
} else
{if(("r" === c))
{return "\r";
} else
{if(("t" === c))
{return "\t";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__4836 = cljs.reader.read_char.call(null,reader);
var mapresult__4837 = cljs.reader.escape_char_map.call(null,ch__4836);
if(cljs.core.truth_(mapresult__4837))
{return mapresult__4837;
} else
{if((function (){var or__3548__auto____4838 = ("u" === ch__4836);
if(or__3548__auto____4838)
{return or__3548__auto____4838;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4836);
}
})())
{return cljs.reader.read_unicode_char.call(null,reader,ch__4836);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape character: \\",ch__4836);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4839 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__4839)))
{{
var G__4840 = cljs.reader.read_char.call(null,rdr);
ch__4839 = G__4840;
continue;
}
} else
{return ch__4839;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4841 = cljs.core.transient$.call(null,cljs.core.PersistentVector.fromArray([]));
while(true){
var ch__4842 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__4842))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__4842))
{return cljs.core.persistent_BANG_.call(null,a__4841);
} else
{var temp__3695__auto____4843 = cljs.reader.macros.call(null,ch__4842);
if(cljs.core.truth_(temp__3695__auto____4843))
{var macrofn__4844 = temp__3695__auto____4843;
var mret__4845 = macrofn__4844.call(null,rdr,ch__4842);
{
var G__4847 = (((mret__4845 === rdr))?a__4841:cljs.core.conj_BANG_.call(null,a__4841,mret__4845));
a__4841 = G__4847;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4842);
var o__4846 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__4848 = (((o__4846 === rdr))?a__4841:cljs.core.conj_BANG_.call(null,a__4841,o__4846));
a__4841 = G__4848;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
void 0;
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__4849 = cljs.reader.read_char.call(null,rdr);
var dm__4850 = cljs.reader.dispatch_macros.call(null,ch__4849);
if(cljs.core.truth_(dm__4850))
{return dm__4850.call(null,rdr,_);
} else
{var temp__3695__auto____4851 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__4849);
if(cljs.core.truth_(temp__3695__auto____4851))
{var obj__4852 = temp__3695__auto____4851;
return obj__4852;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4849);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__4853 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4853)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4853);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4854 = (new goog.string.StringBuffer(initch));
var ch__4855 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4856 = (ch__4855 == null);
if(or__3548__auto____4856)
{return or__3548__auto____4856;
} else
{var or__3548__auto____4857 = cljs.reader.whitespace_QMARK_.call(null,ch__4855);
if(or__3548__auto____4857)
{return or__3548__auto____4857;
} else
{return cljs.reader.macros.call(null,ch__4855);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4855);
var s__4858 = buffer__4854.toString();
var or__3548__auto____4859 = cljs.reader.match_number.call(null,s__4858);
if(cljs.core.truth_(or__3548__auto____4859))
{return or__3548__auto____4859;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4858,"]");
}
} else
{{
var G__4860 = (function (){buffer__4854.append(ch__4855);
return buffer__4854;
})();
var G__4861 = cljs.reader.read_char.call(null,reader);
buffer__4854 = G__4860;
ch__4855 = G__4861;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__4862 = (new goog.string.StringBuffer());
var ch__4863 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__4863 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__4863))
{{
var G__4864 = (function (){buffer__4862.append(cljs.reader.escape_char.call(null,buffer__4862,reader));
return buffer__4862;
})();
var G__4865 = cljs.reader.read_char.call(null,reader);
buffer__4862 = G__4864;
ch__4863 = G__4865;
continue;
}
} else
{if(("\"" === ch__4863))
{return buffer__4862.toString();
} else
{if("\uFDD0'default")
{{
var G__4866 = (function (){buffer__4862.append(ch__4863);
return buffer__4862;
})();
var G__4867 = cljs.reader.read_char.call(null,reader);
buffer__4862 = G__4866;
ch__4863 = G__4867;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__4868 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains.call(null,token__4868,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4868,0,token__4868.indexOf("/")),cljs.core.subs.call(null,token__4868,(token__4868.indexOf("/") + 1),token__4868.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4868,cljs.core.symbol.call(null,token__4868));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4869 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__4870 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__4869);
var token__4871 = (a__4870[0]);
var ns__4872 = (a__4870[1]);
var name__4873 = (a__4870[2]);
if(cljs.core.truth_((function (){var or__3548__auto____4875 = (function (){var and__3546__auto____4874 = (!(void 0 === ns__4872));
if(and__3546__auto____4874)
{return (ns__4872.substring((ns__4872.length - 2),ns__4872.length) === ":/");
} else
{return and__3546__auto____4874;
}
})();
if(cljs.core.truth_(or__3548__auto____4875))
{return or__3548__auto____4875;
} else
{var or__3548__auto____4876 = ((name__4873[(name__4873.length - 1)]) === ":");
if(or__3548__auto____4876)
{return or__3548__auto____4876;
} else
{return (!(token__4871.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__4871);
} else
{if(cljs.core.truth_(ns__4872))
{return cljs.core.keyword.call(null,ns__4872.substring(0,ns__4872.indexOf("/")),name__4873);
} else
{return cljs.core.keyword.call(null,token__4871);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__4877 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__4877))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4878 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__4879__4880 = o__4878;
if((G__4879__4880 != null))
{if((function (){var or__3548__auto____4881 = (G__4879__4880.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3548__auto____4881)
{return or__3548__auto____4881;
} else
{return G__4879__4880.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__4879__4880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__4879__4880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__4879__4880);
}
})())
{return cljs.core.with_meta.call(null,o__4878,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4878),m__4877));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if(("@" === c))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if(("`" === c))
{return cljs.reader.not_implemented;
} else
{if(("\"" === c))
{return cljs.reader.read_string_STAR_;
} else
{if(("#" === c))
{return cljs.reader.read_dispatch;
} else
{if(("%" === c))
{return cljs.reader.not_implemented;
} else
{if(("'" === c))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if(("(" === c))
{return cljs.reader.read_list;
} else
{if((")" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((":" === c))
{return cljs.reader.read_keyword;
} else
{if((";" === c))
{return cljs.reader.not_implemented;
} else
{if(("[" === c))
{return cljs.reader.read_vector;
} else
{if(("{" === c))
{return cljs.reader.read_map;
} else
{if(("\\" === c))
{return cljs.reader.read_char;
} else
{if(("]" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if(("}" === c))
{return cljs.reader.read_unmatched_delimiter;
} else
{if(("^" === c))
{return cljs.reader.read_meta;
} else
{if(("~" === c))
{return cljs.reader.not_implemented;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if(("_" === s))
{return cljs.reader.read_discard;
} else
{if(("!" === s))
{return cljs.reader.read_comment;
} else
{if(("\"" === s))
{return cljs.reader.read_regex;
} else
{if(("<" === s))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if(("{" === s))
{return cljs.reader.read_set;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__4882 = cljs.reader.read_char.call(null,reader);
if((ch__4882 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__4882))
{{
var G__4885 = reader;
var G__4886 = eof_is_error;
var G__4887 = sentinel;
var G__4888 = is_recursive;
reader = G__4885;
eof_is_error = G__4886;
sentinel = G__4887;
is_recursive = G__4888;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__4882))
{{
var G__4889 = cljs.reader.read_comment.call(null,reader,ch__4882);
var G__4890 = eof_is_error;
var G__4891 = sentinel;
var G__4892 = is_recursive;
reader = G__4889;
eof_is_error = G__4890;
sentinel = G__4891;
is_recursive = G__4892;
continue;
}
} else
{if("\uFDD0'else")
{var f__4883 = cljs.reader.macros.call(null,ch__4882);
var res__4884 = (cljs.core.truth_(f__4883)?f__4883.call(null,reader,ch__4882):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__4882))?cljs.reader.read_number.call(null,reader,ch__4882):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__4882):null)));
if((res__4884 === reader))
{{
var G__4893 = reader;
var G__4894 = eof_is_error;
var G__4895 = sentinel;
var G__4896 = is_recursive;
reader = G__4893;
eof_is_error = G__4894;
sentinel = G__4895;
is_recursive = G__4896;
continue;
}
} else
{return res__4884;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__4897 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__4897,true,null,false);
});
cljs.reader.read_date = (function read_date(str){
return (new Date(Date.parse.call(null,str)));
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.core.identity,"uuid":cljs.core.identity,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__4898 = cljs.reader.read_symbol.call(null,rdr,initch);
var form__4899 = cljs.reader.read.call(null,rdr,true,null,false);
var pfn__4900 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__4898));
if(cljs.core.truth_(pfn__4900))
{return pfn__4900.call(null,form__4899);
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__4898),cljs.core.pr_str.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__4901 = cljs.core.name.call(null,tag);
var old_parser__4902 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__4901);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__4901,f);
return old_parser__4902;
});
