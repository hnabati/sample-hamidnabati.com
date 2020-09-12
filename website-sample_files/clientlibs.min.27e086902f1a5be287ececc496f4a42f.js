/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
;
var informaJq=null;
if(typeof jQuery!=="undefined"){informaJq=jQuery
}(function(a3,bR){if(bR!=undefined&&bR!=null){return
}var ak,y,aE=typeof undefined,m=a3.document,aM=a3.location,bj=a3.jQuery,J=a3.$,ac={},a7=[],u="1.9.1",aJ=a7.concat,aq=a7.push,a5=a7.slice,aN=a7.indexOf,B=ac.toString,X=ac.hasOwnProperty,aR=u.trim,bK=function(e,b5){return new bK.fn.init(e,b5,y)
},bB=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ae=/\S+/g,E=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bs=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bi=/^[\],:{}\s]*$/,bl=/(?:^|:|,)(?:\s*\[)+/g,bH=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a0=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,bU=/^-ms-/,aW=/-([\da-z])/gi,O=function(e,b5){return b5.toUpperCase()
},bY=function(e){if(m.addEventListener||e.type==="load"||m.readyState==="complete"){bm();
bK.ready()
}},bm=function(){if(m.addEventListener){m.removeEventListener("DOMContentLoaded",bY,false);
a3.removeEventListener("load",bY,false)
}else{m.detachEvent("onreadystatechange",bY);
a3.detachEvent("onload",bY)
}};
bK.fn=bK.prototype={jquery:u,constructor:bK,init:function(e,b7,b6){var b5,b8;
if(!e){return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b5=[null,e,null]
}else{b5=bs.exec(e)
}if(b5&&(b5[1]||!b7)){if(b5[1]){b7=b7 instanceof bK?b7[0]:b7;
bK.merge(this,bK.parseHTML(b5[1],b7&&b7.nodeType?b7.ownerDocument||b7:m,true));
if(a.test(b5[1])&&bK.isPlainObject(b7)){for(b5 in b7){if(bK.isFunction(this[b5])){this[b5](b7[b5])
}else{this.attr(b5,b7[b5])
}}}return this
}else{b8=m.getElementById(b5[2]);
if(b8&&b8.parentNode){if(b8.id!==b5[2]){return b6.find(e)
}this.length=1;
this[0]=b8
}this.context=m;
this.selector=e;
return this
}}else{if(!b7||b7.jquery){return(b7||b6).find(e)
}else{return this.constructor(b7).find(e)
}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}else{if(bK.isFunction(e)){return b6.ready(e)
}}}if(e.selector!==undefined){this.selector=e.selector;
this.context=e.context
}return bK.makeArray(e,this)
},selector:"",length:0,size:function(){return this.length
},toArray:function(){return a5.call(this)
},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(e){var b5=bK.merge(this.constructor(),e);
b5.prevObject=this;
b5.context=this.context;
return b5
},each:function(b5,e){return bK.each(this,b5,e)
},ready:function(e){bK.ready.promise().done(e);
return this
},slice:function(){return this.pushStack(a5.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b6){var e=this.length,b5=+b6+(b6<0?e:0);
return this.pushStack(b5>=0&&b5<e?[this[b5]]:[])
},map:function(e){return this.pushStack(bK.map(this,function(b6,b5){return e.call(b6,b5,b6)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:aq,sort:[].sort,splice:[].splice};
bK.fn.init.prototype=bK.fn;
bK.extend=bK.fn.extend=function(){var e,ca,b5,b6,cd,cb,b9=arguments[0]||{},b8=1,b7=arguments.length,cc=false;
if(typeof b9==="boolean"){cc=b9;
b9=arguments[1]||{};
b8=2
}if(typeof b9!=="object"&&!bK.isFunction(b9)){b9={}
}if(b7===b8){b9=this;
--b8
}for(;
b8<b7;
b8++){if((cd=arguments[b8])!=null){for(b6 in cd){e=b9[b6];
b5=cd[b6];
if(b9===b5){continue
}if(cc&&b5&&(bK.isPlainObject(b5)||(ca=bK.isArray(b5)))){if(ca){ca=false;
cb=e&&bK.isArray(e)?e:[]
}else{cb=e&&bK.isPlainObject(e)?e:{}
}b9[b6]=bK.extend(cc,cb,b5)
}else{if(b5!==undefined){b9[b6]=b5
}}}}}return b9
};
bK.extend({noConflict:function(e){if(a3.$===bK){a3.$=J
}if(e&&a3.jQuery===bK){a3.jQuery=bj
}return bK
},isReady:false,readyWait:1,holdReady:function(e){if(e){bK.readyWait++
}else{bK.ready(true)
}},ready:function(e){if(e===true?--bK.readyWait:bK.isReady){return
}if(!m.body){return setTimeout(bK.ready)
}bK.isReady=true;
if(e!==true&&--bK.readyWait>0){return
}ak.resolveWith(m,[bK]);
if(bK.fn.trigger){bK(m).trigger("ready").off("ready")
}},isFunction:function(e){return bK.type(e)==="function"
},isArray:Array.isArray||function(e){return bK.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){if(e==null){return String(e)
}return typeof e==="object"||typeof e==="function"?ac[B.call(e)]||"object":typeof e
},isPlainObject:function(b7){if(!b7||bK.type(b7)!=="object"||b7.nodeType||bK.isWindow(b7)){return false
}try{if(b7.constructor&&!X.call(b7,"constructor")&&!X.call(b7.constructor.prototype,"isPrototypeOf")){return false
}}catch(b6){return false
}var b5;
for(b5 in b7){}return b5===undefined||X.call(b7,b5)
},isEmptyObject:function(b5){var e;
for(e in b5){return false
}return true
},error:function(e){throw new Error(e)
},parseHTML:function(b8,b6,b7){if(!b8||typeof b8!=="string"){return null
}if(typeof b6==="boolean"){b7=b6;
b6=false
}b6=b6||m;
var b5=a.exec(b8),e=!b7&&[];
if(b5){return[b6.createElement(b5[1])]
}b5=bK.buildFragment([b8],b6,e);
if(e){bK(e).remove()
}return bK.merge([],b5.childNodes)
},parseJSON:function(e){if(a3.JSON&&a3.JSON.parse){return a3.JSON.parse(e)
}if(e===null){return e
}if(typeof e==="string"){e=bK.trim(e);
if(e){if(bi.test(e.replace(bH,"@").replace(a0,"]").replace(bl,""))){return(new Function("return "+e))()
}}}bK.error("Invalid JSON: "+e)
},parseXML:function(b7){var b5,b6;
if(!b7||typeof b7!=="string"){return null
}try{if(a3.DOMParser){b6=new DOMParser();
b5=b6.parseFromString(b7,"text/xml")
}else{b5=new ActiveXObject("Microsoft.XMLDOM");
b5.async="false";
b5.loadXML(b7)
}}catch(b8){b5=undefined
}if(!b5||!b5.documentElement||b5.getElementsByTagName("parsererror").length){bK.error("Invalid XML: "+b7)
}return b5
},noop:function(){},globalEval:function(e){if(e&&bK.trim(e)){(a3.execScript||function(b5){a3["eval"].call(a3,b5)
})(e)
}},camelCase:function(e){return e.replace(bU,"ms-").replace(aW,O)
},nodeName:function(b5,e){return b5.nodeName&&b5.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b9,ca,b5){var b8,b6=0,b7=b9.length,e=ad(b9);
if(b5){if(e){for(;
b6<b7;
b6++){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.apply(b9[b6],b5);
if(b8===false){break
}}}}else{if(e){for(;
b6<b7;
b6++){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}else{for(b6 in b9){b8=ca.call(b9[b6],b6,b9[b6]);
if(b8===false){break
}}}}return b9
},trim:aR&&!aR.call("\uFEFF\xA0")?function(e){return e==null?"":aR.call(e)
}:function(e){return e==null?"":(e+"").replace(E,"")
},makeArray:function(e,b6){var b5=b6||[];
if(e!=null){if(ad(Object(e))){bK.merge(b5,typeof e==="string"?[e]:e)
}else{aq.call(b5,e)
}}return b5
},inArray:function(b7,b5,b6){var e;
if(b5){if(aN){return aN.call(b5,b7,b6)
}e=b5.length;
b6=b6?b6<0?Math.max(0,e+b6):b6:0;
for(;
b6<e;
b6++){if(b6 in b5&&b5[b6]===b7){return b6
}}}return -1
},merge:function(b8,b6){var e=b6.length,b7=b8.length,b5=0;
if(typeof e==="number"){for(;
b5<e;
b5++){b8[b7++]=b6[b5]
}}else{while(b6[b5]!==undefined){b8[b7++]=b6[b5++]
}}b8.length=b7;
return b8
},grep:function(b5,ca,e){var b9,b6=[],b7=0,b8=b5.length;
e=!!e;
for(;
b7<b8;
b7++){b9=!!ca(b5[b7],b7);
if(e!==b9){b6.push(b5[b7])
}}return b6
},map:function(b6,cb,e){var ca,b8=0,b9=b6.length,b5=ad(b6),b7=[];
if(b5){for(;
b8<b9;
b8++){ca=cb(b6[b8],b8,e);
if(ca!=null){b7[b7.length]=ca
}}}else{for(b8 in b6){ca=cb(b6[b8],b8,e);
if(ca!=null){b7[b7.length]=ca
}}}return aJ.apply([],b7)
},guid:1,proxy:function(b8,b7){var e,b6,b5;
if(typeof b7==="string"){b5=b8[b7];
b7=b8;
b8=b5
}if(!bK.isFunction(b8)){return undefined
}e=a5.call(arguments,2);
b6=function(){return b8.apply(b7||this,e.concat(a5.call(arguments)))
};
b6.guid=b8.guid=b8.guid||bK.guid++;
return b6
},access:function(e,b9,cb,ca,b7,cd,cc){var b6=0,b5=e.length,b8=cb==null;
if(bK.type(cb)==="object"){b7=true;
for(b6 in cb){bK.access(e,b9,b6,cb[b6],true,cd,cc)
}}else{if(ca!==undefined){b7=true;
if(!bK.isFunction(ca)){cc=true
}if(b8){if(cc){b9.call(e,ca);
b9=null
}else{b8=b9;
b9=function(cf,ce,cg){return b8.call(bK(cf),cg)
}
}}if(b9){for(;
b6<b5;
b6++){b9(e[b6],cb,cc?ca:ca.call(e[b6],b6,b9(e[b6],cb)))
}}}}return b7?e:b8?b9.call(e):b5?b9(e[0],cb):cd
},now:function(){return(new Date()).getTime()
}});
bK.ready.promise=function(b8){if(!ak){ak=bK.Deferred();
if(m.readyState==="complete"){setTimeout(bK.ready)
}else{if(m.addEventListener){m.addEventListener("DOMContentLoaded",bY,false);
a3.addEventListener("load",bY,false)
}else{m.attachEvent("onreadystatechange",bY);
a3.attachEvent("onload",bY);
var b7=false;
try{b7=a3.frameElement==null&&m.documentElement
}catch(b6){}if(b7&&b7.doScroll){(function b5(){if(!bK.isReady){try{b7.doScroll("left")
}catch(b9){return setTimeout(b5,50)
}bm();
bK.ready()
}})()
}}}}return ak.promise(b8)
};
bK.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b5,e){ac["[object "+e+"]"]=e.toLowerCase()
});
function ad(b6){var b5=b6.length,e=bK.type(b6);
if(bK.isWindow(b6)){return false
}if(b6.nodeType===1&&b5){return true
}return e==="array"||e!=="function"&&(b5===0||typeof b5==="number"&&b5>0&&(b5-1) in b6)
}y=bK(m);
var b0={};
function ag(b5){var e=b0[b5]={};
bK.each(b5.match(ae)||[],function(b7,b6){e[b6]=true
});
return e
}bK.Callbacks=function(ce){ce=typeof ce==="string"?(b0[ce]||ag(ce)):bK.extend({},ce);
var b8,b7,e,b9,ca,b6,cb=[],cc=!ce.once&&[],b5=function(cf){b7=ce.memory&&cf;
e=true;
ca=b6||0;
b6=0;
b9=cb.length;
b8=true;
for(;
cb&&ca<b9;
ca++){if(cb[ca].apply(cf[0],cf[1])===false&&ce.stopOnFalse){b7=false;
break
}}b8=false;
if(cb){if(cc){if(cc.length){b5(cc.shift())
}}else{if(b7){cb=[]
}else{cd.disable()
}}}},cd={add:function(){if(cb){var cg=cb.length;
(function cf(ch){bK.each(ch,function(cj,ci){var ck=bK.type(ci);
if(ck==="function"){if(!ce.unique||!cd.has(ci)){cb.push(ci)
}}else{if(ci&&ci.length&&ck!=="string"){cf(ci)
}}})
})(arguments);
if(b8){b9=cb.length
}else{if(b7){b6=cg;
b5(b7)
}}}return this
},remove:function(){if(cb){bK.each(arguments,function(ch,cf){var cg;
while((cg=bK.inArray(cf,cb,cg))>-1){cb.splice(cg,1);
if(b8){if(cg<=b9){b9--
}if(cg<=ca){ca--
}}}})
}return this
},has:function(cf){return cf?bK.inArray(cf,cb)>-1:!!(cb&&cb.length)
},empty:function(){cb=[];
return this
},disable:function(){cb=cc=b7=undefined;
return this
},disabled:function(){return !cb
},lock:function(){cc=undefined;
if(!b7){cd.disable()
}return this
},locked:function(){return !cc
},fireWith:function(cg,cf){cf=cf||[];
cf=[cg,cf.slice?cf.slice():cf];
if(cb&&(!e||cc)){if(b8){cc.push(cf)
}else{b5(cf)
}}return this
},fire:function(){cd.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return cd
};
bK.extend({Deferred:function(b6){var b5=[["resolve","done",bK.Callbacks("once memory"),"resolved"],["reject","fail",bK.Callbacks("once memory"),"rejected"],["notify","progress",bK.Callbacks("memory")]],b7="pending",b8={state:function(){return b7
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b9=arguments;
return bK.Deferred(function(ca){bK.each(b5,function(cc,cb){var ce=cb[0],cd=bK.isFunction(b9[cc])&&b9[cc];
e[cb[1]](function(){var cf=cd&&cd.apply(this,arguments);
if(cf&&bK.isFunction(cf.promise)){cf.promise().done(ca.resolve).fail(ca.reject).progress(ca.notify)
}else{ca[ce+"With"](this===b8?ca.promise():this,cd?[cf]:arguments)
}})
});
b9=null
}).promise()
},promise:function(b9){return b9!=null?bK.extend(b9,b8):b8
}},e={};
b8.pipe=b8.then;
bK.each(b5,function(ca,b9){var cc=b9[2],cb=b9[3];
b8[b9[1]]=cc.add;
if(cb){cc.add(function(){b7=cb
},b5[ca^1][2].disable,b5[2][2].lock)
}e[b9[0]]=function(){e[b9[0]+"With"](this===e?b8:this,arguments);
return this
};
e[b9[0]+"With"]=cc.fireWith
});
b8.promise(e);
if(b6){b6.call(e,e)
}return e
},when:function(b8){var b6=0,ca=a5.call(arguments),e=ca.length,b5=e!==1||(b8&&bK.isFunction(b8.promise))?e:0,cd=b5===1?b8:bK.Deferred(),b7=function(cf,cg,ce){return function(ch){cg[cf]=this;
ce[cf]=arguments.length>1?a5.call(arguments):ch;
if(ce===cc){cd.notifyWith(cg,ce)
}else{if(!(--b5)){cd.resolveWith(cg,ce)
}}}
},cc,b9,cb;
if(e>1){cc=new Array(e);
b9=new Array(e);
cb=new Array(e);
for(;
b6<e;
b6++){if(ca[b6]&&bK.isFunction(ca[b6].promise)){ca[b6].promise().done(b7(b6,cb,ca)).fail(cd.reject).progress(b7(b6,b9,cc))
}else{--b5
}}}if(!b5){cd.resolveWith(cb,ca)
}return cd.promise()
}});
bK.support=(function(){var cg,cf,cd,cc,ce,cb,b7,b9,b6,b8,b5=m.createElement("div");
b5.setAttribute("className","t");
b5.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cf=b5.getElementsByTagName("*");
cd=b5.getElementsByTagName("a")[0];
if(!cf||!cd||!cf.length){return{}
}ce=m.createElement("select");
b7=ce.appendChild(m.createElement("option"));
cc=b5.getElementsByTagName("input")[0];
cd.style.cssText="top:1px;float:left;opacity:.5";
cg={getSetAttribute:b5.className!=="t",leadingWhitespace:b5.firstChild.nodeType===3,tbody:!b5.getElementsByTagName("tbody").length,htmlSerialize:!!b5.getElementsByTagName("link").length,style:/top/.test(cd.getAttribute("style")),hrefNormalized:cd.getAttribute("href")==="/a",opacity:/^0.5/.test(cd.style.opacity),cssFloat:!!cd.style.cssFloat,checkOn:!!cc.value,optSelected:b7.selected,enctype:!!m.createElement("form").enctype,html5Clone:m.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:m.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
cc.checked=true;
cg.noCloneChecked=cc.cloneNode(true).checked;
ce.disabled=true;
cg.optDisabled=!b7.disabled;
try{delete b5.test
}catch(ca){cg.deleteExpando=false
}cc=m.createElement("input");
cc.setAttribute("value","");
cg.input=cc.getAttribute("value")==="";
cc.value="t";
cc.setAttribute("type","radio");
cg.radioValue=cc.value==="t";
cc.setAttribute("checked","t");
cc.setAttribute("name","t");
cb=m.createDocumentFragment();
cb.appendChild(cc);
cg.appendChecked=cc.checked;
cg.checkClone=cb.cloneNode(true).cloneNode(true).lastChild.checked;
if(b5.attachEvent){b5.attachEvent("onclick",function(){cg.noCloneEvent=false
});
b5.cloneNode(true).click()
}for(b8 in {submit:true,change:true,focusin:true}){b5.setAttribute(b9="on"+b8,"t");
cg[b8+"Bubbles"]=b9 in a3||b5.attributes[b9].expando===false
}b5.style.backgroundClip="content-box";
b5.cloneNode(true).style.backgroundClip="";
cg.clearCloneStyle=b5.style.backgroundClip==="content-box";
bK(function(){var ch,ck,cj,ci="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",e=m.getElementsByTagName("body")[0];
if(!e){return
}ch=m.createElement("div");
ch.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
e.appendChild(ch).appendChild(b5);
b5.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cj=b5.getElementsByTagName("td");
cj[0].style.cssText="padding:0;margin:0;border:0;display:none";
b6=(cj[0].offsetHeight===0);
cj[0].style.display="";
cj[1].style.display="none";
cg.reliableHiddenOffsets=b6&&(cj[0].offsetHeight===0);
b5.innerHTML="";
b5.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cg.boxSizing=(b5.offsetWidth===4);
cg.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
if(a3.getComputedStyle){cg.pixelPosition=(a3.getComputedStyle(b5,null)||{}).top!=="1%";
cg.boxSizingReliable=(a3.getComputedStyle(b5,null)||{width:"4px"}).width==="4px";
ck=b5.appendChild(m.createElement("div"));
ck.style.cssText=b5.style.cssText=ci;
ck.style.marginRight=ck.style.width="0";
b5.style.width="1px";
cg.reliableMarginRight=!parseFloat((a3.getComputedStyle(ck,null)||{}).marginRight)
}if(typeof b5.style.zoom!==aE){b5.innerHTML="";
b5.style.cssText=ci+"width:1px;padding:1px;display:inline;zoom:1";
cg.inlineBlockNeedsLayout=(b5.offsetWidth===3);
b5.style.display="block";
b5.innerHTML="<div></div>";
b5.firstChild.style.width="5px";
cg.shrinkWrapBlocks=(b5.offsetWidth!==3);
if(cg.inlineBlockNeedsLayout){e.style.zoom=1
}}e.removeChild(ch);
ch=b5=cj=ck=null
});
cf=ce=cb=b7=cd=cc=null;
return cg
})();
var bx=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aO=/([A-Z])/g;
function bb(b7,b5,b9,b8){if(!bK.acceptData(b7)){return
}var ca,cc,cd=bK.expando,cb=typeof b5==="string",ce=b7.nodeType,e=ce?bK.cache:b7,b6=ce?b7[cd]:b7[cd]&&cd;
if((!b6||!e[b6]||(!b8&&!e[b6].data))&&cb&&b9===undefined){return
}if(!b6){if(ce){b7[cd]=b6=a7.pop()||bK.guid++
}else{b6=cd
}}if(!e[b6]){e[b6]={};
if(!ce){e[b6].toJSON=bK.noop
}}if(typeof b5==="object"||typeof b5==="function"){if(b8){e[b6]=bK.extend(e[b6],b5)
}else{e[b6].data=bK.extend(e[b6].data,b5)
}}ca=e[b6];
if(!b8){if(!ca.data){ca.data={}
}ca=ca.data
}if(b9!==undefined){ca[bK.camelCase(b5)]=b9
}if(cb){cc=ca[b5];
if(cc==null){cc=ca[bK.camelCase(b5)]
}}else{cc=ca
}return cc
}function ab(b7,b5,b8){if(!bK.acceptData(b7)){return
}var ca,b9,cb,cc=b7.nodeType,e=cc?bK.cache:b7,b6=cc?b7[bK.expando]:bK.expando;
if(!e[b6]){return
}if(b5){cb=b8?e[b6]:e[b6].data;
if(cb){if(!bK.isArray(b5)){if(b5 in cb){b5=[b5]
}else{b5=bK.camelCase(b5);
if(b5 in cb){b5=[b5]
}else{b5=b5.split(" ")
}}}else{b5=b5.concat(bK.map(b5,bK.camelCase))
}for(ca=0,b9=b5.length;
ca<b9;
ca++){delete cb[b5[ca]]
}if(!(b8?P:bK.isEmptyObject)(cb)){return
}}}if(!b8){delete e[b6].data;
if(!P(e[b6])){return
}}if(cc){bK.cleanData([b7],true)
}else{if(bK.support.deleteExpando||e!=e.window){delete e[b6]
}else{e[b6]=null
}}}bK.extend({cache:{},expando:"jQuery"+(u+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bK.cache[e[bK.expando]]:e[bK.expando];
return !!e&&!P(e)
},data:function(b5,e,b6){return bb(b5,e,b6)
},removeData:function(b5,e){return ab(b5,e)
},_data:function(b5,e,b6){return bb(b5,e,b6,true)
},_removeData:function(b5,e){return ab(b5,e,true)
},acceptData:function(b5){if(b5.nodeType&&b5.nodeType!==1&&b5.nodeType!==9){return false
}var e=b5.nodeName&&bK.noData[b5.nodeName.toLowerCase()];
return !e||e!==true&&b5.getAttribute("classid")===e
}});
bK.fn.extend({data:function(b7,ca){var b5,e,b8=this[0],b6=0,b9=null;
if(b7===undefined){if(this.length){b9=bK.data(b8);
if(b8.nodeType===1&&!bK._data(b8,"parsedAttrs")){b5=b8.attributes;
for(;
b6<b5.length;
b6++){e=b5[b6].name;
if(!e.indexOf("data-")){e=bK.camelCase(e.slice(5));
bz(b8,e,b9[e])
}}bK._data(b8,"parsedAttrs",true)
}}return b9
}if(typeof b7==="object"){return this.each(function(){bK.data(this,b7)
})
}return bK.access(this,function(cb){if(cb===undefined){return b8?bz(b8,b7,bK.data(b8,b7)):null
}this.each(function(){bK.data(this,b7,cb)
})
},null,ca,arguments.length>1,null,true)
},removeData:function(e){return this.each(function(){bK.removeData(this,e)
})
}});
function bz(b7,b6,b8){if(b8===undefined&&b7.nodeType===1){var b5="data-"+b6.replace(aO,"-$1").toLowerCase();
b8=b7.getAttribute(b5);
if(typeof b8==="string"){try{b8=b8==="true"?true:b8==="false"?false:b8==="null"?null:+b8+""===b8?+b8:bx.test(b8)?bK.parseJSON(b8):b8
}catch(b9){}bK.data(b7,b6,b8)
}else{b8=undefined
}}return b8
}function P(b5){var e;
for(e in b5){if(e==="data"&&bK.isEmptyObject(b5[e])){continue
}if(e!=="toJSON"){return false
}}return true
}bK.extend({queue:function(b6,b5,b7){var e;
if(b6){b5=(b5||"fx")+"queue";
e=bK._data(b6,b5);
if(b7){if(!e||bK.isArray(b7)){e=bK._data(b6,b5,bK.makeArray(b7))
}else{e.push(b7)
}}return e||[]
}},dequeue:function(b9,b8){b8=b8||"fx";
var b5=bK.queue(b9,b8),ca=b5.length,b7=b5.shift(),e=bK._queueHooks(b9,b8),b6=function(){bK.dequeue(b9,b8)
};
if(b7==="inprogress"){b7=b5.shift();
ca--
}e.cur=b7;
if(b7){if(b8==="fx"){b5.unshift("inprogress")
}delete e.stop;
b7.call(b9,b6,e)
}if(!ca&&e){e.empty.fire()
}},_queueHooks:function(b6,b5){var e=b5+"queueHooks";
return bK._data(b6,e)||bK._data(b6,e,{empty:bK.Callbacks("once memory").add(function(){bK._removeData(b6,b5+"queue");
bK._removeData(b6,e)
})})
}});
bK.fn.extend({queue:function(e,b5){var b6=2;
if(typeof e!=="string"){b5=e;
e="fx";
b6--
}if(arguments.length<b6){return bK.queue(this[0],e)
}return b5===undefined?this:this.each(function(){var b7=bK.queue(this,e,b5);
bK._queueHooks(this,e);
if(e==="fx"&&b7[0]!=="inprogress"){bK.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bK.dequeue(this,e)
})
},delay:function(b5,e){b5=bK.fx?bK.fx.speeds[b5]||b5:b5;
e=e||"fx";
return this.queue(e,function(b7,b6){var b8=setTimeout(b7,b5);
b6.stop=function(){clearTimeout(b8)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b6,ca){var b5,b7=1,cb=bK.Deferred(),b9=this,e=this.length,b8=function(){if(!(--b7)){cb.resolveWith(b9,[b9])
}};
if(typeof b6!=="string"){ca=b6;
b6=undefined
}b6=b6||"fx";
while(e--){b5=bK._data(b9[e],b6+"queueHooks");
if(b5&&b5.empty){b7++;
b5.empty.add(b8)
}}b8();
return cb.promise(ca)
}});
var a9,b1,bN=/[\t\r\n]/g,am=/\r/g,aH=/^(?:input|select|textarea|button|object)$/i,F=/^(?:a|area)$/i,N=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,at=/^(?:checked|selected)$/i,bQ=bK.support.getSetAttribute,bG=bK.support.input;
bK.fn.extend({attr:function(e,b5){return bK.access(this,bK.attr,e,b5,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bK.removeAttr(this,e)
})
},prop:function(e,b5){return bK.access(this,bK.prop,e,b5,arguments.length>1)
},removeProp:function(e){e=bK.propFix[e]||e;
return this.each(function(){try{this[e]=undefined;
delete this[e]
}catch(b5){}})
},addClass:function(cb){var b5,e,cc,b8,b6,b7=0,b9=this.length,ca=typeof cb==="string"&&cb;
if(bK.isFunction(cb)){return this.each(function(cd){bK(this).addClass(cb.call(this,cd,this.className))
})
}if(ca){b5=(cb||"").match(ae)||[];
for(;
b7<b9;
b7++){e=this[b7];
cc=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bN," "):" ");
if(cc){b6=0;
while((b8=b5[b6++])){if(cc.indexOf(" "+b8+" ")<0){cc+=b8+" "
}}e.className=bK.trim(cc)
}}}return this
},removeClass:function(cb){var b5,e,cc,b8,b6,b7=0,b9=this.length,ca=arguments.length===0||typeof cb==="string"&&cb;
if(bK.isFunction(cb)){return this.each(function(cd){bK(this).removeClass(cb.call(this,cd,this.className))
})
}if(ca){b5=(cb||"").match(ae)||[];
for(;
b7<b9;
b7++){e=this[b7];
cc=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bN," "):"");
if(cc){b6=0;
while((b8=b5[b6++])){while(cc.indexOf(" "+b8+" ")>=0){cc=cc.replace(" "+b8+" "," ")
}}e.className=cb?bK.trim(cc):""
}}}return this
},toggleClass:function(b7,b5){var b6=typeof b7,e=typeof b5==="boolean";
if(bK.isFunction(b7)){return this.each(function(b8){bK(this).toggleClass(b7.call(this,b8,this.className,b5),b5)
})
}return this.each(function(){if(b6==="string"){var ca,b9=0,b8=bK(this),cb=b5,cc=b7.match(ae)||[];
while((ca=cc[b9++])){cb=e?cb:!b8.hasClass(ca);
b8[cb?"addClass":"removeClass"](ca)
}}else{if(b6===aE||b6==="boolean"){if(this.className){bK._data(this,"__className__",this.className)
}this.className=this.className||b7===false?"":bK._data(this,"__className__")||""
}}})
},hasClass:function(e){var b7=" "+e+" ",b6=0,b5=this.length;
for(;
b6<b5;
b6++){if(this[b6].nodeType===1&&(" "+this[b6].className+" ").replace(bN," ").indexOf(b7)>=0){return true
}}return false
},val:function(b7){var b5,e,b8,b6=this[0];
if(!arguments.length){if(b6){e=bK.valHooks[b6.type]||bK.valHooks[b6.nodeName.toLowerCase()];
if(e&&"get" in e&&(b5=e.get(b6,"value"))!==undefined){return b5
}b5=b6.value;
return typeof b5==="string"?b5.replace(am,""):b5==null?"":b5
}return
}b8=bK.isFunction(b7);
return this.each(function(ca){var cb,b9=bK(this);
if(this.nodeType!==1){return
}if(b8){cb=b7.call(this,ca,b9.val())
}else{cb=b7
}if(cb==null){cb=""
}else{if(typeof cb==="number"){cb+=""
}else{if(bK.isArray(cb)){cb=bK.map(cb,function(cc){return cc==null?"":cc+""
})
}}}e=bK.valHooks[this.type]||bK.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,cb,"value")===undefined){this.value=cb
}})
}});
bK.extend({valHooks:{option:{get:function(e){var b5=e.attributes.value;
return !b5||b5.specified?e.value:e.text
}},select:{get:function(e){var ca,b6,cc=e.options,b8=e.selectedIndex,b7=e.type==="select-one"||b8<0,cb=b7?null:[],b9=b7?b8+1:cc.length,b5=b8<0?b9:b7?b8:0;
for(;
b5<b9;
b5++){b6=cc[b5];
if((b6.selected||b5===b8)&&(bK.support.optDisabled?!b6.disabled:b6.getAttribute("disabled")===null)&&(!b6.parentNode.disabled||!bK.nodeName(b6.parentNode,"optgroup"))){ca=bK(b6).val();
if(b7){return ca
}cb.push(ca)
}}return cb
},set:function(b5,b6){var e=bK.makeArray(b6);
bK(b5).find("option").each(function(){this.selected=bK.inArray(bK(this).val(),e)>=0
});
if(!e.length){b5.selectedIndex=-1
}return e
}}},attr:function(b9,b7,ca){var e,b8,b6,b5=b9.nodeType;
if(!b9||b5===3||b5===8||b5===2){return
}if(typeof b9.getAttribute===aE){return bK.prop(b9,b7,ca)
}b8=b5!==1||!bK.isXMLDoc(b9);
if(b8){b7=b7.toLowerCase();
e=bK.attrHooks[b7]||(N.test(b7)?b1:a9)
}if(ca!==undefined){if(ca===null){bK.removeAttr(b9,b7)
}else{if(e&&b8&&"set" in e&&(b6=e.set(b9,ca,b7))!==undefined){return b6
}else{b9.setAttribute(b7,ca+"");
return ca
}}}else{if(e&&b8&&"get" in e&&(b6=e.get(b9,b7))!==null){return b6
}else{if(typeof b9.getAttribute!==aE){b6=b9.getAttribute(b7)
}return b6==null?undefined:b6
}}},removeAttr:function(b6,b8){var e,b7,b5=0,b9=b8&&b8.match(ae);
if(b9&&b6.nodeType===1){while((e=b9[b5++])){b7=bK.propFix[e]||e;
if(N.test(e)){if(!bQ&&at.test(e)){b6[bK.camelCase("default-"+e)]=b6[b7]=false
}else{b6[b7]=false
}}else{bK.attr(b6,e,"")
}b6.removeAttribute(bQ?e:b7)
}}},attrHooks:{type:{set:function(e,b5){if(!bK.support.radioValue&&b5==="radio"&&bK.nodeName(e,"input")){var b6=e.value;
e.setAttribute("type",b5);
if(b6){e.value=b6
}return b5
}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b9,b7,ca){var b6,e,b8,b5=b9.nodeType;
if(!b9||b5===3||b5===8||b5===2){return
}b8=b5!==1||!bK.isXMLDoc(b9);
if(b8){b7=bK.propFix[b7]||b7;
e=bK.propHooks[b7]
}if(ca!==undefined){if(e&&"set" in e&&(b6=e.set(b9,ca,b7))!==undefined){return b6
}else{return(b9[b7]=ca)
}}else{if(e&&"get" in e&&(b6=e.get(b9,b7))!==null){return b6
}else{return b9[b7]
}}},propHooks:{tabIndex:{get:function(b5){var e=b5.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aH.test(b5.nodeName)||F.test(b5.nodeName)&&b5.href?0:undefined
}}}});
b1={get:function(b7,b5){var b8=bK.prop(b7,b5),e=typeof b8==="boolean"&&b7.getAttribute(b5),b6=typeof b8==="boolean"?bG&&bQ?e!=null:at.test(b5)?b7[bK.camelCase("default-"+b5)]:!!e:b7.getAttributeNode(b5);
return b6&&b6.value!==false?b5.toLowerCase():undefined
},set:function(b5,b6,e){if(b6===false){bK.removeAttr(b5,e)
}else{if(bG&&bQ||!at.test(e)){b5.setAttribute(!bQ&&bK.propFix[e]||e,e)
}else{b5[bK.camelCase("default-"+e)]=b5[e]=true
}}return e
}};
if(!bG||!bQ){bK.attrHooks.value={get:function(b6,b5){var e=b6.getAttributeNode(b5);
return bK.nodeName(b6,"input")?b6.defaultValue:e&&e.specified?e.value:undefined
},set:function(b5,b6,e){if(bK.nodeName(b5,"input")){b5.defaultValue=b6
}else{return a9&&a9.set(b5,b6,e)
}}}
}if(!bQ){a9=bK.valHooks.button={get:function(b6,b5){var e=b6.getAttributeNode(b5);
return e&&(b5==="id"||b5==="name"||b5==="coords"?e.value!=="":e.specified)?e.value:undefined
},set:function(b6,b7,b5){var e=b6.getAttributeNode(b5);
if(!e){b6.setAttributeNode((e=b6.ownerDocument.createAttribute(b5)))
}e.value=b7+="";
return b5==="value"||b7===b6.getAttribute(b5)?b7:undefined
}};
bK.attrHooks.contenteditable={get:a9.get,set:function(b5,b6,e){a9.set(b5,b6===""?false:b6,e)
}};
bK.each(["width","height"],function(b5,e){bK.attrHooks[e]=bK.extend(bK.attrHooks[e],{set:function(b6,b7){if(b7===""){b6.setAttribute(e,"auto");
return b7
}}})
})
}if(!bK.support.hrefNormalized){bK.each(["href","src","width","height"],function(b5,e){bK.attrHooks[e]=bK.extend(bK.attrHooks[e],{get:function(b7){var b6=b7.getAttribute(e,2);
return b6==null?undefined:b6
}})
});
bK.each(["href","src"],function(b5,e){bK.propHooks[e]={get:function(b6){return b6.getAttribute(e,4)
}}
})
}if(!bK.support.style){bK.attrHooks.style={get:function(e){return e.style.cssText||undefined
},set:function(e,b5){return(e.style.cssText=b5+"")
}}
}if(!bK.support.optSelected){bK.propHooks.selected=bK.extend(bK.propHooks.selected,{get:function(b5){var e=b5.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})
}if(!bK.support.enctype){bK.propFix.enctype="encoding"
}if(!bK.support.checkOn){bK.each(["radio","checkbox"],function(){bK.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}
})
}bK.each(["radio","checkbox"],function(){bK.valHooks[this]=bK.extend(bK.valHooks[this],{set:function(e,b5){if(bK.isArray(b5)){return(e.checked=bK.inArray(bK(e).val(),b5)>=0)
}}})
});
var bI=/^(?:input|select|textarea)$/i,a4=/^key/,bO=/^(?:mouse|contextmenu)|click/,bC=/^(?:focusinfocus|focusoutblur)$/,bv=/^([^.]*)(?:\.(.+)|)$/;
function T(){return true
}function Z(){return false
}bK.event={global:{},add:function(b8,cd,ci,ca,b9){var cb,cj,ck,b6,cf,cc,ch,b7,cg,e,b5,ce=bK._data(b8);
if(!ce){return
}if(ci.handler){b6=ci;
ci=b6.handler;
b9=b6.selector
}if(!ci.guid){ci.guid=bK.guid++
}if(!(cj=ce.events)){cj=ce.events={}
}if(!(cc=ce.handle)){cc=ce.handle=function(cl){return typeof bK!==aE&&(!cl||bK.event.triggered!==cl.type)?bK.event.dispatch.apply(cc.elem,arguments):undefined
};
cc.elem=b8
}cd=(cd||"").match(ae)||[""];
ck=cd.length;
while(ck--){cb=bv.exec(cd[ck])||[];
cg=b5=cb[1];
e=(cb[2]||"").split(".").sort();
cf=bK.event.special[cg]||{};
cg=(b9?cf.delegateType:cf.bindType)||cg;
cf=bK.event.special[cg]||{};
ch=bK.extend({type:cg,origType:b5,data:ca,handler:ci,guid:ci.guid,selector:b9,needsContext:b9&&bK.expr.match.needsContext.test(b9),namespace:e.join(".")},b6);
if(!(b7=cj[cg])){b7=cj[cg]=[];
b7.delegateCount=0;
if(!cf.setup||cf.setup.call(b8,ca,e,cc)===false){if(b8.addEventListener){b8.addEventListener(cg,cc,false)
}else{if(b8.attachEvent){b8.attachEvent("on"+cg,cc)
}}}}if(cf.add){cf.add.call(b8,ch);
if(!ch.handler.guid){ch.handler.guid=ci.guid
}}if(b9){b7.splice(b7.delegateCount++,0,ch)
}else{b7.push(ch)
}bK.event.global[cg]=true
}b8=null
},remove:function(b7,cd,ck,b8,cc){var ca,ch,cb,b9,cj,ci,cf,b6,cg,e,b5,ce=bK.hasData(b7)&&bK._data(b7);
if(!ce||!(ci=ce.events)){return
}cd=(cd||"").match(ae)||[""];
cj=cd.length;
while(cj--){cb=bv.exec(cd[cj])||[];
cg=b5=cb[1];
e=(cb[2]||"").split(".").sort();
if(!cg){for(cg in ci){bK.event.remove(b7,cg+cd[cj],ck,b8,true)
}continue
}cf=bK.event.special[cg]||{};
cg=(b8?cf.delegateType:cf.bindType)||cg;
b6=ci[cg]||[];
cb=cb[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");
b9=ca=b6.length;
while(ca--){ch=b6[ca];
if((cc||b5===ch.origType)&&(!ck||ck.guid===ch.guid)&&(!cb||cb.test(ch.namespace))&&(!b8||b8===ch.selector||b8==="**"&&ch.selector)){b6.splice(ca,1);
if(ch.selector){b6.delegateCount--
}if(cf.remove){cf.remove.call(b7,ch)
}}}if(b9&&!b6.length){if(!cf.teardown||cf.teardown.call(b7,e,ce.handle)===false){bK.removeEvent(b7,cg,ce.handle)
}delete ci[cg]
}}if(bK.isEmptyObject(ci)){delete ce.handle;
bK._removeData(b7,"events")
}},trigger:function(b5,cc,b8,cj){var cd,b7,ch,ci,cf,cb,ca,b9=[b8||m],cg=X.call(b5,"type")?b5.type:b5,b6=X.call(b5,"namespace")?b5.namespace.split("."):[];
ch=cb=b8=b8||m;
if(b8.nodeType===3||b8.nodeType===8){return
}if(bC.test(cg+bK.event.triggered)){return
}if(cg.indexOf(".")>=0){b6=cg.split(".");
cg=b6.shift();
b6.sort()
}b7=cg.indexOf(":")<0&&"on"+cg;
b5=b5[bK.expando]?b5:new bK.Event(cg,typeof b5==="object"&&b5);
b5.isTrigger=true;
b5.namespace=b6.join(".");
b5.namespace_re=b5.namespace?new RegExp("(^|\\.)"+b6.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b5.result=undefined;
if(!b5.target){b5.target=b8
}cc=cc==null?[b5]:bK.makeArray(cc,[b5]);
cf=bK.event.special[cg]||{};
if(!cj&&cf.trigger&&cf.trigger.apply(b8,cc)===false){return
}if(!cj&&!cf.noBubble&&!bK.isWindow(b8)){ci=cf.delegateType||cg;
if(!bC.test(ci+cg)){ch=ch.parentNode
}for(;
ch;
ch=ch.parentNode){b9.push(ch);
cb=ch
}if(cb===(b8.ownerDocument||m)){b9.push(cb.defaultView||cb.parentWindow||a3)
}}ca=0;
while((ch=b9[ca++])&&!b5.isPropagationStopped()){b5.type=ca>1?ci:cf.bindType||cg;
cd=(bK._data(ch,"events")||{})[b5.type]&&bK._data(ch,"handle");
if(cd){cd.apply(ch,cc)
}cd=b7&&ch[b7];
if(cd&&bK.acceptData(ch)&&cd.apply&&cd.apply(ch,cc)===false){b5.preventDefault()
}}b5.type=cg;
if(!cj&&!b5.isDefaultPrevented()){if((!cf._default||cf._default.apply(b8.ownerDocument,cc)===false)&&!(cg==="click"&&bK.nodeName(b8,"a"))&&bK.acceptData(b8)){if(b7&&b8[cg]&&!bK.isWindow(b8)){cb=b8[b7];
if(cb){b8[b7]=null
}bK.event.triggered=cg;
try{b8[cg]()
}catch(ce){}bK.event.triggered=undefined;
if(cb){b8[b7]=cb
}}}}return b5.result
},dispatch:function(e){e=bK.event.fix(e);
var b8,b9,cd,b5,b7,cc=[],cb=a5.call(arguments),b6=(bK._data(this,"events")||{})[e.type]||[],ca=bK.event.special[e.type]||{};
cb[0]=e;
e.delegateTarget=this;
if(ca.preDispatch&&ca.preDispatch.call(this,e)===false){return
}cc=bK.event.handlers.call(this,e,b6);
b8=0;
while((b5=cc[b8++])&&!e.isPropagationStopped()){e.currentTarget=b5.elem;
b7=0;
while((cd=b5.handlers[b7++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(cd.namespace)){e.handleObj=cd;
e.data=cd.data;
b9=((bK.event.special[cd.origType]||{}).handle||cd.handler).apply(b5.elem,cb);
if(b9!==undefined){if((e.result=b9)===false){e.preventDefault();
e.stopPropagation()
}}}}}if(ca.postDispatch){ca.postDispatch.call(this,e)
}return e.result
},handlers:function(e,b6){var b5,cb,b9,b8,ca=[],b7=b6.delegateCount,cc=e.target;
if(b7&&cc.nodeType&&(!e.button||e.type!=="click")){for(;
cc!=this;
cc=cc.parentNode||this){if(cc.nodeType===1&&(cc.disabled!==true||e.type!=="click")){b9=[];
for(b8=0;
b8<b7;
b8++){cb=b6[b8];
b5=cb.selector+" ";
if(b9[b5]===undefined){b9[b5]=cb.needsContext?bK(b5,this).index(cc)>=0:bK.find(b5,this,null,[cc]).length
}if(b9[b5]){b9.push(cb)
}}if(b9.length){ca.push({elem:cc,handlers:b9})
}}}}if(b7<b6.length){ca.push({elem:this,handlers:b6.slice(b7)})
}return ca
},fix:function(b7){if(b7[bK.expando]){return b7
}var b5,ca,b9,b6=b7.type,e=b7,b8=this.fixHooks[b6];
if(!b8){this.fixHooks[b6]=b8=bO.test(b6)?this.mouseHooks:a4.test(b6)?this.keyHooks:{}
}b9=b8.props?this.props.concat(b8.props):this.props;
b7=new bK.Event(e);
b5=b9.length;
while(b5--){ca=b9[b5];
b7[ca]=e[ca]
}if(!b7.target){b7.target=e.srcElement||m
}if(b7.target.nodeType===3){b7.target=b7.target.parentNode
}b7.metaKey=!!b7.metaKey;
return b8.filter?b8.filter(b7,e):b7
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b5,e){if(b5.which==null){b5.which=e.charCode!=null?e.charCode:e.keyCode
}return b5
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b7,b6){var e,b8,b9,b5=b6.button,ca=b6.fromElement;
if(b7.pageX==null&&b6.clientX!=null){b8=b7.target.ownerDocument||m;
b9=b8.documentElement;
e=b8.body;
b7.pageX=b6.clientX+(b9&&b9.scrollLeft||e&&e.scrollLeft||0)-(b9&&b9.clientLeft||e&&e.clientLeft||0);
b7.pageY=b6.clientY+(b9&&b9.scrollTop||e&&e.scrollTop||0)-(b9&&b9.clientTop||e&&e.clientTop||0)
}if(!b7.relatedTarget&&ca){b7.relatedTarget=ca===b7.target?b6.toElement:ca
}if(!b7.which&&b5!==undefined){b7.which=(b5&1?1:(b5&2?3:(b5&4?2:0)))
}return b7
}},special:{load:{noBubble:true},click:{trigger:function(){if(bK.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}}},focus:{trigger:function(){if(this!==m.activeElement&&this.focus){try{this.focus();
return false
}catch(b5){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===m.activeElement&&this.blur){this.blur();
return false
}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==undefined){e.originalEvent.returnValue=e.result
}}}},simulate:function(b6,b8,b7,b5){var b9=bK.extend(new bK.Event(),b7,{type:b6,isSimulated:true,originalEvent:{}});
if(b5){bK.event.trigger(b9,null,b8)
}else{bK.event.dispatch.call(b8,b9)
}if(b9.isDefaultPrevented()){b7.preventDefault()
}}};
bK.removeEvent=m.removeEventListener?function(b5,e,b6){if(b5.removeEventListener){b5.removeEventListener(e,b6,false)
}}:function(b6,b5,b7){var e="on"+b5;
if(b6.detachEvent){if(typeof b6[e]===aE){b6[e]=null
}b6.detachEvent(e,b7)
}};
bK.Event=function(b5,e){if(!(this instanceof bK.Event)){return new bK.Event(b5,e)
}if(b5&&b5.type){this.originalEvent=b5;
this.type=b5.type;
this.isDefaultPrevented=(b5.defaultPrevented||b5.returnValue===false||b5.getPreventDefault&&b5.getPreventDefault())?T:Z
}else{this.type=b5
}if(e){bK.extend(this,e)
}this.timeStamp=b5&&b5.timeStamp||bK.now();
this[bK.expando]=true
};
bK.Event.prototype={isDefaultPrevented:Z,isPropagationStopped:Z,isImmediatePropagationStopped:Z,preventDefault:function(){var b5=this.originalEvent;
this.isDefaultPrevented=T;
if(!b5){return
}if(b5.preventDefault){b5.preventDefault()
}else{b5.returnValue=false
}},stopPropagation:function(){var b5=this.originalEvent;
this.isPropagationStopped=T;
if(!b5){return
}if(b5.stopPropagation){b5.stopPropagation()
}b5.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=T;
this.stopPropagation()
}};
bK.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b5,e){bK.event.special[b5]={delegateType:e,bindType:e,handle:function(b8){var b6,ca=this,b9=b8.relatedTarget,b7=b8.handleObj;
if(!b9||(b9!==ca&&!bK.contains(ca,b9))){b8.type=b7.origType;
b6=b7.handler.apply(this,arguments);
b8.type=e
}return b6
}}
});
if(!bK.support.submitBubbles){bK.event.special.submit={setup:function(){if(bK.nodeName(this,"form")){return false
}bK.event.add(this,"click._submit keypress._submit",function(b7){var b6=b7.target,b5=bK.nodeName(b6,"input")||bK.nodeName(b6,"button")?b6.form:undefined;
if(b5&&!bK._data(b5,"submitBubbles")){bK.event.add(b5,"submit._submit",function(e){e._submit_bubble=true
});
bK._data(b5,"submitBubbles",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bK.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bK.nodeName(this,"form")){return false
}bK.event.remove(this,"._submit")
}}
}if(!bK.support.changeBubbles){bK.event.special.change={setup:function(){if(bI.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bK.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bK.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bK.event.simulate("change",this,e,true)
})
}return false
}bK.event.add(this,"beforeactivate._change",function(b6){var b5=b6.target;
if(bI.test(b5.nodeName)&&!bK._data(b5,"changeBubbles")){bK.event.add(b5,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bK.event.simulate("change",this.parentNode,e,true)
}});
bK._data(b5,"changeBubbles",true)
}})
},handle:function(b5){var e=b5.target;
if(this!==e||b5.isSimulated||b5.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b5.handleObj.handler.apply(this,arguments)
}},teardown:function(){bK.event.remove(this,"._change");
return !bI.test(this.nodeName)
}}
}if(!bK.support.focusinBubbles){bK.each({focus:"focusin",blur:"focusout"},function(b7,e){var b5=0,b6=function(b8){bK.event.simulate(e,b8.target,bK.event.fix(b8),true)
};
bK.event.special[e]={setup:function(){if(b5++===0){m.addEventListener(b7,b6,true)
}},teardown:function(){if(--b5===0){m.removeEventListener(b7,b6,true)
}}}
})
}bK.fn.extend({on:function(b6,e,b9,b8,b5){var b7,ca;
if(typeof b6==="object"){if(typeof e!=="string"){b9=b9||e;
e=undefined
}for(b7 in b6){this.on(b7,e,b9,b6[b7],b5)
}return this
}if(b9==null&&b8==null){b8=e;
b9=e=undefined
}else{if(b8==null){if(typeof e==="string"){b8=b9;
b9=undefined
}else{b8=b9;
b9=e;
e=undefined
}}}if(b8===false){b8=Z
}else{if(!b8){return this
}}if(b5===1){ca=b8;
b8=function(cb){bK().off(cb);
return ca.apply(this,arguments)
};
b8.guid=ca.guid||(ca.guid=bK.guid++)
}return this.each(function(){bK.event.add(this,b6,b8,b9,e)
})
},one:function(b5,e,b7,b6){return this.on(b5,e,b7,b6,1)
},off:function(b6,e,b8){var b5,b7;
if(b6&&b6.preventDefault&&b6.handleObj){b5=b6.handleObj;
bK(b6.delegateTarget).off(b5.namespace?b5.origType+"."+b5.namespace:b5.origType,b5.selector,b5.handler);
return this
}if(typeof b6==="object"){for(b7 in b6){this.off(b7,e,b6[b7])
}return this
}if(e===false||typeof e==="function"){b8=e;
e=undefined
}if(b8===false){b8=Z
}return this.each(function(){bK.event.remove(this,b6,b8,e)
})
},bind:function(e,b6,b5){return this.on(e,null,b6,b5)
},unbind:function(e,b5){return this.off(e,null,b5)
},delegate:function(e,b5,b7,b6){return this.on(b5,e,b7,b6)
},undelegate:function(e,b5,b6){return arguments.length===1?this.off(e,"**"):this.off(b5,e||"**",b6)
},trigger:function(e,b5){return this.each(function(){bK.event.trigger(e,b5,this)
})
},triggerHandler:function(e,b6){var b5=this[0];
if(b5){return bK.event.trigger(e,b6,b5,true)
}}});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(dc,cj){var cz,cd,cp,cJ,cL,cU,cV,di,cX,cD,cq,cf,c1,dd,cc,cH,cF,c7="sizzle"+-(new Date()),cK=dc.document,df={},dg=0,c2=0,b7=cB(),c6=cB(),cI=cB(),db=typeof cj,cP=1<<31,c9=[],da=c9.pop,b6=c9.push,co=c9.slice,cb=c9.indexOf||function(dk){var dj=0,e=this.length;
for(;
dj<e;
dj++){if(this[dj]===dk){return dj
}}return -1
},cr="[\\x20\\t\\r\\n\\f]",b5="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cM=b5.replace("w","w#"),ck="([*^$|!~]?=)",c4="\\["+cr+"*("+b5+")"+cr+"*(?:"+ck+cr+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cM+")|)|)"+cr+"*\\]",cm=":("+b5+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+c4.replace(3,8)+")*)|.*)\\)|)",ct=new RegExp("^"+cr+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cr+"+$","g"),cw=new RegExp("^"+cr+"*,"+cr+"*"),cC=new RegExp("^"+cr+"*([\\x20\\t\\r\\n\\f>+~])"+cr+"*"),cR=new RegExp(cm),cS=new RegExp("^"+cM+"$"),c0={ID:new RegExp("^#("+b5+")"),CLASS:new RegExp("^\\.("+b5+")"),NAME:new RegExp("^\\[name=['\"]?("+b5+")['\"]?\\]"),TAG:new RegExp("^("+b5.replace("w","w*")+")"),ATTR:new RegExp("^"+c4),PSEUDO:new RegExp("^"+cm),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cr+"*(even|odd|(([+-]|)(\\d*)n|)"+cr+"*(?:([+-]|)"+cr+"*(\\d+)|))"+cr+"*\\)|)","i"),needsContext:new RegExp("^"+cr+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cr+"*((?:-\\d)?\\d*)"+cr+"*\\)|)(?=[^-]|$)","i")},cY=/[\x20\t\r\n\f]*[+~]/,cO=/^[^{]+\{\s*\[native code/,cQ=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ca=/^(?:input|select|textarea|button)$/i,cn=/^h\d$/i,cN=/'|\\/g,cv=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cu=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,c3=function(e,dk){var dj="0x"+dk-65536;
return dj!==dj?dk:dj<0?String.fromCharCode(dj+65536):String.fromCharCode(dj>>10|55296,dj&1023|56320)
};
try{co.call(cK.documentElement.childNodes,0)[0].nodeType
}catch(cE){co=function(dj){var dk,e=[];
while((dk=this[dj++])){e.push(dk)
}return e
}
}function cG(e){return cO.test(e+"")
}function cB(){var e,dj=[];
return(e=function(dk,dl){if(dj.push(dk+=" ")>cp.cacheLength){delete e[dj.shift()]
}return(e[dk]=dl)
})
}function cl(e){e[c7]=true;
return e
}function ce(dj){var dl=cD.createElement("div");
try{return dj(dl)
}catch(dk){return false
}finally{dl=null
}}function cx(dr,dj,dv,dx){var dw,dn,dp,dt,du,dm,dl,e,dk,ds;
if((dj?dj.ownerDocument||dj:cK)!==cD){cX(dj)
}dj=dj||cD;
dv=dv||[];
if(!dr||typeof dr!=="string"){return dv
}if((dt=dj.nodeType)!==1&&dt!==9){return[]
}if(!cf&&!dx){if((dw=cQ.exec(dr))){if((dp=dw[1])){if(dt===9){dn=dj.getElementById(dp);
if(dn&&dn.parentNode){if(dn.id===dp){dv.push(dn);
return dv
}}else{return dv
}}else{if(dj.ownerDocument&&(dn=dj.ownerDocument.getElementById(dp))&&cH(dj,dn)&&dn.id===dp){dv.push(dn);
return dv
}}}else{if(dw[2]){b6.apply(dv,co.call(dj.getElementsByTagName(dr),0));
return dv
}else{if((dp=dw[3])&&df.getByClassName&&dj.getElementsByClassName){b6.apply(dv,co.call(dj.getElementsByClassName(dp),0));
return dv
}}}}if(df.qsa&&!c1.test(dr)){dl=true;
e=c7;
dk=dj;
ds=dt===9&&dr;
if(dt===1&&dj.nodeName.toLowerCase()!=="object"){dm=ch(dr);
if((dl=dj.getAttribute("id"))){e=dl.replace(cN,"\\$&")
}else{dj.setAttribute("id",e)
}e="[id='"+e+"'] ";
du=dm.length;
while(du--){dm[du]=e+ci(dm[du])
}dk=cY.test(dr)&&dj.parentNode||dj;
ds=dm.join(",")
}if(ds){try{b6.apply(dv,co.call(dk.querySelectorAll(ds),0));
return dv
}catch(dq){}finally{if(!dl){dj.removeAttribute("id")
}}}}}return de(dr.replace(ct,"$1"),dj,dv,dx)
}cL=cx.isXML=function(e){var dj=e&&(e.ownerDocument||e).documentElement;
return dj?dj.nodeName!=="HTML":false
};
cX=cx.setDocument=function(e){var dj=e?e.ownerDocument||e:cK;
if(dj===cD||dj.nodeType!==9||!dj.documentElement){return cD
}cD=dj;
cq=dj.documentElement;
cf=cL(dj);
df.tagNameNoComments=ce(function(dk){dk.appendChild(dj.createComment(""));
return !dk.getElementsByTagName("*").length
});
df.attributes=ce(function(dl){dl.innerHTML="<select></select>";
var dk=typeof dl.lastChild.getAttribute("multiple");
return dk!=="boolean"&&dk!=="string"
});
df.getByClassName=ce(function(dk){dk.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!dk.getElementsByClassName||!dk.getElementsByClassName("e").length){return false
}dk.lastChild.className="e";
return dk.getElementsByClassName("e").length===2
});
df.getByName=ce(function(dl){dl.id=c7+0;
dl.innerHTML="<a name='"+c7+"'></a><div name='"+c7+"'></div>";
cq.insertBefore(dl,cq.firstChild);
var dk=dj.getElementsByName&&dj.getElementsByName(c7).length===2+dj.getElementsByName(c7+0).length;
df.getIdNotName=!dj.getElementById(c7);
cq.removeChild(dl);
return dk
});
cp.attrHandle=ce(function(dk){dk.innerHTML="<a href='#'></a>";
return dk.firstChild&&typeof dk.firstChild.getAttribute!==db&&dk.firstChild.getAttribute("href")==="#"
})?{}:{href:function(dk){return dk.getAttribute("href",2)
},type:function(dk){return dk.getAttribute("type")
}};
if(df.getIdNotName){cp.find.ID=function(dm,dl){if(typeof dl.getElementById!==db&&!cf){var dk=dl.getElementById(dm);
return dk&&dk.parentNode?[dk]:[]
}};
cp.filter.ID=function(dl){var dk=dl.replace(cu,c3);
return function(dm){return dm.getAttribute("id")===dk
}
}
}else{cp.find.ID=function(dm,dl){if(typeof dl.getElementById!==db&&!cf){var dk=dl.getElementById(dm);
return dk?dk.id===dm||typeof dk.getAttributeNode!==db&&dk.getAttributeNode("id").value===dm?[dk]:cj:[]
}};
cp.filter.ID=function(dl){var dk=dl.replace(cu,c3);
return function(dn){var dm=typeof dn.getAttributeNode!==db&&dn.getAttributeNode("id");
return dm&&dm.value===dk
}
}
}cp.find.TAG=df.tagNameNoComments?function(dk,dl){if(typeof dl.getElementsByTagName!==db){return dl.getElementsByTagName(dk)
}}:function(dk,dp){var dq,dn=[],dm=0,dl=dp.getElementsByTagName(dk);
if(dk==="*"){while((dq=dl[dm++])){if(dq.nodeType===1){dn.push(dq)
}}return dn
}return dl
};
cp.find.NAME=df.getByName&&function(dk,dl){if(typeof dl.getElementsByName!==db){return dl.getElementsByName(name)
}};
cp.find.CLASS=df.getByClassName&&function(dl,dk){if(typeof dk.getElementsByClassName!==db&&!cf){return dk.getElementsByClassName(dl)
}};
dd=[];
c1=[":focus"];
if((df.qsa=cG(dj.querySelectorAll))){ce(function(dk){dk.innerHTML="<select><option selected=''></option></select>";
if(!dk.querySelectorAll("[selected]").length){c1.push("\\["+cr+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!dk.querySelectorAll(":checked").length){c1.push(":checked")
}});
ce(function(dk){dk.innerHTML="<input type='hidden' i=''/>";
if(dk.querySelectorAll("[i^='']").length){c1.push("[*^$]="+cr+"*(?:\"\"|'')")
}if(!dk.querySelectorAll(":enabled").length){c1.push(":enabled",":disabled")
}dk.querySelectorAll("*,:x");
c1.push(",.*:")
})
}if((df.matchesSelector=cG((cc=cq.matchesSelector||cq.mozMatchesSelector||cq.webkitMatchesSelector||cq.oMatchesSelector||cq.msMatchesSelector)))){ce(function(dk){df.disconnectedMatch=cc.call(dk,"div");
cc.call(dk,"[s!='']:x");
dd.push("!=",cm)
})
}c1=new RegExp(c1.join("|"));
dd=new RegExp(dd.join("|"));
cH=cG(cq.contains)||cq.compareDocumentPosition?function(dl,dk){var dn=dl.nodeType===9?dl.documentElement:dl,dm=dk&&dk.parentNode;
return dl===dm||!!(dm&&dm.nodeType===1&&(dn.contains?dn.contains(dm):dl.compareDocumentPosition&&dl.compareDocumentPosition(dm)&16))
}:function(dl,dk){if(dk){while((dk=dk.parentNode)){if(dk===dl){return true
}}}return false
};
cF=cq.compareDocumentPosition?function(dl,dk){var dm;
if(dl===dk){cV=true;
return 0
}if((dm=dk.compareDocumentPosition&&dl.compareDocumentPosition&&dl.compareDocumentPosition(dk))){if(dm&1||dl.parentNode&&dl.parentNode.nodeType===11){if(dl===dj||cH(cK,dl)){return -1
}if(dk===dj||cH(cK,dk)){return 1
}return 0
}return dm&4?-1:1
}return dl.compareDocumentPosition?-1:1
}:function(dl,dk){var ds,dp=0,dr=dl.parentNode,dn=dk.parentNode,dm=[dl],dq=[dk];
if(dl===dk){cV=true;
return 0
}else{if(!dr||!dn){return dl===dj?-1:dk===dj?1:dr?-1:dn?1:0
}else{if(dr===dn){return b8(dl,dk)
}}}ds=dl;
while((ds=ds.parentNode)){dm.unshift(ds)
}ds=dk;
while((ds=ds.parentNode)){dq.unshift(ds)
}while(dm[dp]===dq[dp]){dp++
}return dp?b8(dm[dp],dq[dp]):dm[dp]===cK?-1:dq[dp]===cK?1:0
};
cV=false;
[0,0].sort(cF);
df.detectDuplicates=cV;
return cD
};
cx.matches=function(dj,e){return cx(dj,null,null,e)
};
cx.matchesSelector=function(dk,dm){if((dk.ownerDocument||dk)!==cD){cX(dk)
}dm=dm.replace(cv,"='$1']");
if(df.matchesSelector&&!cf&&(!dd||!dd.test(dm))&&!c1.test(dm)){try{var dj=cc.call(dk,dm);
if(dj||df.disconnectedMatch||dk.document&&dk.document.nodeType!==11){return dj
}}catch(dl){}}return cx(dm,cD,null,[dk]).length>0
};
cx.contains=function(e,dj){if((e.ownerDocument||e)!==cD){cX(e)
}return cH(e,dj)
};
cx.attr=function(dj,e){var dk;
if((dj.ownerDocument||dj)!==cD){cX(dj)
}if(!cf){e=e.toLowerCase()
}if((dk=cp.attrHandle[e])){return dk(dj)
}if(cf||df.attributes){return dj.getAttribute(e)
}return((dk=dj.getAttributeNode(e))||dj.getAttribute(e))&&dj[e]===true?e:dk&&dk.specified?dk.value:null
};
cx.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
cx.uniqueSort=function(dk){var dl,dm=[],dj=1,e=0;
cV=!df.detectDuplicates;
dk.sort(cF);
if(cV){for(;
(dl=dk[dj]);
dj++){if(dl===dk[dj-1]){e=dm.push(dj)
}}while(e--){dk.splice(dm[e],1)
}}return dk
};
function b8(dj,e){var dl=e&&dj,dk=dl&&(~e.sourceIndex||cP)-(~dj.sourceIndex||cP);
if(dk){return dk
}if(dl){while((dl=dl.nextSibling)){if(dl===e){return -1
}}}return dj?1:-1
}function cy(e){return function(dk){var dj=dk.nodeName.toLowerCase();
return dj==="input"&&dk.type===e
}
}function b9(e){return function(dk){var dj=dk.nodeName.toLowerCase();
return(dj==="input"||dj==="button")&&dk.type===e
}
}function c5(e){return cl(function(dj){dj=+dj;
return cl(function(dk,dp){var dm,dl=e([],dk.length,dj),dn=dl.length;
while(dn--){if(dk[(dm=dl[dn])]){dk[dm]=!(dp[dm]=dk[dm])
}}})
})
}cJ=cx.getText=function(dm){var dl,dj="",dk=0,e=dm.nodeType;
if(!e){for(;
(dl=dm[dk]);
dk++){dj+=cJ(dl)
}}else{if(e===1||e===9||e===11){if(typeof dm.textContent==="string"){return dm.textContent
}else{for(dm=dm.firstChild;
dm;
dm=dm.nextSibling){dj+=cJ(dm)
}}}else{if(e===3||e===4){return dm.nodeValue
}}}return dj
};
cp=cx.selectors={cacheLength:50,createPseudo:cl,match:c0,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cu,c3);
e[3]=(e[4]||e[5]||"").replace(cu,c3);
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1].slice(0,3)==="nth"){if(!e[3]){cx.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));
e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){cx.error(e[0])
}}return e
},PSEUDO:function(dj){var e,dk=!dj[5]&&dj[2];
if(c0.CHILD.test(dj[0])){return null
}if(dj[4]){dj[2]=dj[4]
}else{if(dk&&cR.test(dk)&&(e=ch(dk,true))&&(e=dk.indexOf(")",dk.length-e)-dk.length)){dj[0]=dj[0].slice(0,e);
dj[2]=dk.slice(0,e)
}}return dj.slice(0,3)
}},filter:{TAG:function(e){if(e==="*"){return function(){return true
}
}e=e.replace(cu,c3).toLowerCase();
return function(dj){return dj.nodeName&&dj.nodeName.toLowerCase()===e
}
},CLASS:function(e){var dj=b7[e+" "];
return dj||(dj=new RegExp("(^|"+cr+")"+e+"("+cr+"|$)"))&&b7(e,function(dk){return dj.test(dk.className||(typeof dk.getAttribute!==db&&dk.getAttribute("class"))||"")
})
},ATTR:function(dk,dj,e){return function(dm){var dl=cx.attr(dm,dk);
if(dl==null){return dj==="!="
}if(!dj){return true
}dl+="";
return dj==="="?dl===e:dj==="!="?dl!==e:dj==="^="?e&&dl.indexOf(e)===0:dj==="*="?e&&dl.indexOf(e)>-1:dj==="$="?e&&dl.slice(-e.length)===e:dj==="~="?(" "+dl+" ").indexOf(e)>-1:dj==="|="?dl===e||dl.slice(0,e.length+1)===e+"-":false
}
},CHILD:function(dj,dm,dl,dn,dk){var dq=dj.slice(0,3)!=="nth",e=dj.slice(-4)!=="last",dp=dm==="of-type";
return dn===1&&dk===0?function(dr){return !!dr.parentNode
}:function(dx,dv,dA){var dr,dD,dy,dC,dz,du,dw=dq!==e?"nextSibling":"previousSibling",dB=dx.parentNode,dt=dp&&dx.nodeName.toLowerCase(),ds=!dA&&!dp;
if(dB){if(dq){while(dw){dy=dx;
while((dy=dy[dw])){if(dp?dy.nodeName.toLowerCase()===dt:dy.nodeType===1){return false
}}du=dw=dj==="only"&&!du&&"nextSibling"
}return true
}du=[e?dB.firstChild:dB.lastChild];
if(e&&ds){dD=dB[c7]||(dB[c7]={});
dr=dD[dj]||[];
dz=dr[0]===dg&&dr[1];
dC=dr[0]===dg&&dr[2];
dy=dz&&dB.childNodes[dz];
while((dy=++dz&&dy&&dy[dw]||(dC=dz=0)||du.pop())){if(dy.nodeType===1&&++dC&&dy===dx){dD[dj]=[dg,dz,dC];
break
}}}else{if(ds&&(dr=(dx[c7]||(dx[c7]={}))[dj])&&dr[0]===dg){dC=dr[1]
}else{while((dy=++dz&&dy&&dy[dw]||(dC=dz=0)||du.pop())){if((dp?dy.nodeName.toLowerCase()===dt:dy.nodeType===1)&&++dC){if(ds){(dy[c7]||(dy[c7]={}))[dj]=[dg,dC]
}if(dy===dx){break
}}}}}dC-=dk;
return dC===dn||(dC%dn===0&&dC/dn>=0)
}}
},PSEUDO:function(dl,dk){var e,dj=cp.pseudos[dl]||cp.setFilters[dl.toLowerCase()]||cx.error("unsupported pseudo: "+dl);
if(dj[c7]){return dj(dk)
}if(dj.length>1){e=[dl,dl,"",dk];
return cp.setFilters.hasOwnProperty(dl.toLowerCase())?cl(function(dp,dr){var dn,dm=dj(dp,dk),dq=dm.length;
while(dq--){dn=cb.call(dp,dm[dq]);
dp[dn]=!(dr[dn]=dm[dq])
}}):function(dm){return dj(dm,0,e)
}
}return dj
}},pseudos:{not:cl(function(e){var dj=[],dk=[],dl=cU(e.replace(ct,"$1"));
return dl[c7]?cl(function(dn,dt,dr,dp){var ds,dm=dl(dn,null,dp,[]),dq=dn.length;
while(dq--){if((ds=dm[dq])){dn[dq]=!(dt[dq]=ds)
}}}):function(dp,dn,dm){dj[0]=dp;
dl(dj,null,dm,dk);
return !dk.pop()
}
}),has:cl(function(e){return function(dj){return cx(e,dj).length>0
}
}),contains:cl(function(e){return function(dj){return(dj.textContent||dj.innerText||cJ(dj)).indexOf(e)>-1
}
}),lang:cl(function(e){if(!cS.test(e||"")){cx.error("unsupported lang: "+e)
}e=e.replace(cu,c3).toLowerCase();
return function(dk){var dj;
do{if((dj=cf?dk.getAttribute("xml:lang")||dk.getAttribute("lang"):dk.lang)){dj=dj.toLowerCase();
return dj===e||dj.indexOf(e+"-")===0
}}while((dk=dk.parentNode)&&dk.nodeType===1);
return false
}
}),target:function(e){var dj=dc.location&&dc.location.hash;
return dj&&dj.slice(1)===e.id
},root:function(e){return e===cq
},focus:function(e){return e===cD.activeElement&&(!cD.hasFocus||cD.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var dj=e.nodeName.toLowerCase();
return(dj==="input"&&!!e.checked)||(dj==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false
}}return true
},parent:function(e){return !cp.pseudos.empty(e)
},header:function(e){return cn.test(e.nodeName)
},input:function(e){return ca.test(e.nodeName)
},button:function(dj){var e=dj.nodeName.toLowerCase();
return e==="input"&&dj.type==="button"||e==="button"
},text:function(dj){var e;
return dj.nodeName.toLowerCase()==="input"&&dj.type==="text"&&((e=dj.getAttribute("type"))==null||e.toLowerCase()===dj.type)
},first:c5(function(){return[0]
}),last:c5(function(e,dj){return[dj-1]
}),eq:c5(function(e,dk,dj){return[dj<0?dj+dk:dj]
}),even:c5(function(e,dk){var dj=0;
for(;
dj<dk;
dj+=2){e.push(dj)
}return e
}),odd:c5(function(e,dk){var dj=1;
for(;
dj<dk;
dj+=2){e.push(dj)
}return e
}),lt:c5(function(e,dl,dk){var dj=dk<0?dk+dl:dk;
for(;
--dj>=0;
){e.push(dj)
}return e
}),gt:c5(function(e,dl,dk){var dj=dk<0?dk+dl:dk;
for(;
++dj<dl;
){e.push(dj)
}return e
})}};
for(cz in {radio:true,checkbox:true,file:true,password:true,image:true}){cp.pseudos[cz]=cy(cz)
}for(cz in {submit:true,reset:true}){cp.pseudos[cz]=b9(cz)
}function ch(dm,ds){var dj,dn,dq,dr,dp,dk,e,dl=c6[dm+" "];
if(dl){return ds?0:dl.slice(0)
}dp=dm;
dk=[];
e=cp.preFilter;
while(dp){if(!dj||(dn=cw.exec(dp))){if(dn){dp=dp.slice(dn[0].length)||dp
}dk.push(dq=[])
}dj=false;
if((dn=cC.exec(dp))){dj=dn.shift();
dq.push({value:dj,type:dn[0].replace(ct," ")});
dp=dp.slice(dj.length)
}for(dr in cp.filter){if((dn=c0[dr].exec(dp))&&(!e[dr]||(dn=e[dr](dn)))){dj=dn.shift();
dq.push({value:dj,type:dr,matches:dn});
dp=dp.slice(dj.length)
}}if(!dj){break
}}return ds?dp.length:dp?cx.error(dm):c6(dm,dk).slice(0)
}function ci(dl){var dk=0,dj=dl.length,e="";
for(;
dk<dj;
dk++){e+=dl[dk].value
}return e
}function cs(dm,dk,dl){var e=dk.dir,dn=dl&&e==="parentNode",dj=c2++;
return dk.first?function(dr,dq,dp){while((dr=dr[e])){if(dr.nodeType===1||dn){return dm(dr,dq,dp)
}}}:function(dt,dr,dq){var dv,dp,ds,du=dg+" "+dj;
if(dq){while((dt=dt[e])){if(dt.nodeType===1||dn){if(dm(dt,dr,dq)){return true
}}}}else{while((dt=dt[e])){if(dt.nodeType===1||dn){ds=dt[c7]||(dt[c7]={});
if((dp=ds[e])&&dp[0]===du){if((dv=dp[1])===true||dv===cd){return dv===true
}}else{dp=ds[e]=[du];
dp[1]=dm(dt,dr,dq)||cd;
if(dp[1]===true){return true
}}}}}}
}function dh(e){return e.length>1?function(dm,dl,dj){var dk=e.length;
while(dk--){if(!e[dk](dm,dl,dj)){return false
}}return true
}:e[0]
}function cZ(e,dj,dk,dl,dp){var dm,ds=[],dn=0,dq=e.length,dr=dj!=null;
for(;
dn<dq;
dn++){if((dm=e[dn])){if(!dk||dk(dm,dl,dp)){ds.push(dm);
if(dr){dj.push(dn)
}}}}return ds
}function cg(dk,dj,dm,dl,dn,e){if(dl&&!dl[c7]){dl=cg(dl)
}if(dn&&!dn[c7]){dn=cg(dn,e)
}return cl(function(dz,dw,dr,dy){var dB,dx,dt,ds=[],dA=[],dq=dw.length,dp=dz||cA(dj||"*",dr.nodeType?[dr]:dr,[]),du=dk&&(dz||!dj)?cZ(dp,ds,dk,dr,dy):dp,dv=dm?dn||(dz?dk:dq||dl)?[]:dw:du;
if(dm){dm(du,dv,dr,dy)
}if(dl){dB=cZ(dv,dA);
dl(dB,[],dr,dy);
dx=dB.length;
while(dx--){if((dt=dB[dx])){dv[dA[dx]]=!(du[dA[dx]]=dt)
}}}if(dz){if(dn||dk){if(dn){dB=[];
dx=dv.length;
while(dx--){if((dt=dv[dx])){dB.push((du[dx]=dt))
}}dn(null,(dv=[]),dB,dy)
}dx=dv.length;
while(dx--){if((dt=dv[dx])&&(dB=dn?cb.call(dz,dt):ds[dx])>-1){dz[dB]=!(dw[dB]=dt)
}}}}else{dv=cZ(dv===dw?dv.splice(dq,dv.length):dv);
if(dn){dn(null,dw,dv,dy)
}else{b6.apply(dw,dv)
}}})
}function c8(dp){var dj,dm,dk,dn=dp.length,ds=cp.relative[dp[0].type],dt=ds||cp.relative[" "],dl=ds?1:0,dq=cs(function(du){return du===dj
},dt,true),dr=cs(function(du){return cb.call(dj,du)>-1
},dt,true),e=[function(dw,dv,du){return(!ds&&(du||dv!==di))||((dj=dv).nodeType?dq(dw,dv,du):dr(dw,dv,du))
}];
for(;
dl<dn;
dl++){if((dm=cp.relative[dp[dl].type])){e=[cs(dh(e),dm)]
}else{dm=cp.filter[dp[dl].type].apply(null,dp[dl].matches);
if(dm[c7]){dk=++dl;
for(;
dk<dn;
dk++){if(cp.relative[dp[dk].type]){break
}}return cg(dl>1&&dh(e),dl>1&&ci(dp.slice(0,dl-1)).replace(ct,"$1"),dm,dl<dk&&c8(dp.slice(dl,dk)),dk<dn&&c8((dp=dp.slice(dk))),dk<dn&&ci(dp))
}e.push(dm)
}}return dh(e)
}function cW(dl,dk){var dn=0,e=dk.length>0,dm=dl.length>0,dj=function(dy,ds,dx,dw,dE){var dt,du,dz,dD=[],dC=0,dv="0",dp=dy&&[],dA=dE!=null,dB=di,dr=dy||dm&&cp.find.TAG("*",dE&&ds.parentNode||ds),dq=(dg+=dB==null?1:Math.random()||0.1);
if(dA){di=ds!==cD&&ds;
cd=dn
}for(;
(dt=dr[dv])!=null;
dv++){if(dm&&dt){du=0;
while((dz=dl[du++])){if(dz(dt,ds,dx)){dw.push(dt);
break
}}if(dA){dg=dq;
cd=++dn
}}if(e){if((dt=!dz&&dt)){dC--
}if(dy){dp.push(dt)
}}}dC+=dv;
if(e&&dv!==dC){du=0;
while((dz=dk[du++])){dz(dp,dD,ds,dx)
}if(dy){if(dC>0){while(dv--){if(!(dp[dv]||dD[dv])){dD[dv]=da.call(dw)
}}}dD=cZ(dD)
}b6.apply(dw,dD);
if(dA&&!dy&&dD.length>0&&(dC+dk.length)>1){cx.uniqueSort(dw)
}}if(dA){dg=dq;
di=dB
}return dp
};
return e?cl(dj):dj
}cU=cx.compile=function(e,dn){var dk,dj=[],dm=[],dl=cI[e+" "];
if(!dl){if(!dn){dn=ch(e)
}dk=dn.length;
while(dk--){dl=c8(dn[dk]);
if(dl[c7]){dj.push(dl)
}else{dm.push(dl)
}}dl=cI(e,cW(dm,dj))
}return dl
};
function cA(dj,dm,dl){var dk=0,e=dm.length;
for(;
dk<e;
dk++){cx(dj,dm[dk],dl)
}return dl
}function de(dk,e,dl,dp){var dm,dr,dj,ds,dq,dn=ch(dk);
if(!dp){if(dn.length===1){dr=dn[0]=dn[0].slice(0);
if(dr.length>2&&(dj=dr[0]).type==="ID"&&e.nodeType===9&&!cf&&cp.relative[dr[1].type]){e=cp.find.ID(dj.matches[0].replace(cu,c3),e)[0];
if(!e){return dl
}dk=dk.slice(dr.shift().value.length)
}dm=c0.needsContext.test(dk)?0:dr.length;
while(dm--){dj=dr[dm];
if(cp.relative[(ds=dj.type)]){break
}if((dq=cp.find[ds])){if((dp=dq(dj.matches[0].replace(cu,c3),cY.test(dr[0].type)&&e.parentNode||e))){dr.splice(dm,1);
dk=dp.length&&ci(dr);
if(!dk){b6.apply(dl,co.call(dp,0));
return dl
}break
}}}}}cU(dk,dn)(dp,e,cf,dl,cY.test(dk));
return dl
}cp.pseudos.nth=cp.pseudos.eq;
function cT(){}cp.filters=cT.prototype=cp.pseudos;
cp.setFilters=new cT();
cX();
cx.attr=bK.attr;
bK.find=cx;
bK.expr=cx.selectors;
bK.expr[":"]=bK.expr.pseudos;
bK.unique=cx.uniqueSort;
bK.text=cx.getText;
bK.isXMLDoc=cx.isXML;
bK.contains=cx.contains
})(a3);
var al=/Until$/,bu=/^(?:parents|prev(?:Until|All))/,ap=/^.[^:#\[\.,]*$/,A=bK.expr.match.needsContext,by={children:true,contents:true,next:true,prev:true};
bK.fn.extend({find:function(b5){var b8,b7,b6,e=this.length;
if(typeof b5!=="string"){b6=this;
return this.pushStack(bK(b5).filter(function(){for(b8=0;
b8<e;
b8++){if(bK.contains(b6[b8],this)){return true
}}}))
}b7=[];
for(b8=0;
b8<e;
b8++){bK.find(b5,this[b8],b7)
}b7=this.pushStack(e>1?bK.unique(b7):b7);
b7.selector=(this.selector?this.selector+" ":"")+b5;
return b7
},has:function(b7){var b6,b5=bK(b7,this),e=b5.length;
return this.filter(function(){for(b6=0;
b6<e;
b6++){if(bK.contains(this,b5[b6])){return true
}}})
},not:function(e){return this.pushStack(aP(this,e,false))
},filter:function(e){return this.pushStack(aP(this,e,true))
},is:function(e){return !!e&&(typeof e==="string"?A.test(e)?bK(e,this.context).index(this[0])>=0:bK.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b8,b7){var b9,b6=0,e=this.length,b5=[],ca=A.test(b8)||typeof b8!=="string"?bK(b8,b7||this.context):0;
for(;
b6<e;
b6++){b9=this[b6];
while(b9&&b9.ownerDocument&&b9!==b7&&b9.nodeType!==11){if(ca?ca.index(b9)>-1:bK.find.matchesSelector(b9,b8)){b5.push(b9);
break
}b9=b9.parentNode
}}return this.pushStack(b5.length>1?bK.unique(b5):b5)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bK.inArray(this[0],bK(e))
}return bK.inArray(e.jquery?e[0]:e,this)
},add:function(e,b5){var b7=typeof e==="string"?bK(e,b5):bK.makeArray(e&&e.nodeType?[e]:e),b6=bK.merge(this.get(),b7);
return this.pushStack(bK.unique(b6))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
bK.fn.andSelf=bK.fn.addBack;
function aY(b5,e){do{b5=b5[e]
}while(b5&&b5.nodeType!==1);
return b5
}bK.each({parent:function(b5){var e=b5.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bK.dir(e,"parentNode")
},parentsUntil:function(b5,e,b6){return bK.dir(b5,"parentNode",b6)
},next:function(e){return aY(e,"nextSibling")
},prev:function(e){return aY(e,"previousSibling")
},nextAll:function(e){return bK.dir(e,"nextSibling")
},prevAll:function(e){return bK.dir(e,"previousSibling")
},nextUntil:function(b5,e,b6){return bK.dir(b5,"nextSibling",b6)
},prevUntil:function(b5,e,b6){return bK.dir(b5,"previousSibling",b6)
},siblings:function(e){return bK.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bK.sibling(e.firstChild)
},contents:function(e){return bK.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bK.merge([],e.childNodes)
}},function(e,b5){bK.fn[e]=function(b8,b6){var b7=bK.map(this,b5,b8);
if(!al.test(e)){b6=b8
}if(b6&&typeof b6==="string"){b7=bK.filter(b6,b7)
}b7=this.length>1&&!by[e]?bK.unique(b7):b7;
if(this.length>1&&bu.test(e)){b7=b7.reverse()
}return this.pushStack(b7)
}
});
bK.extend({filter:function(b6,e,b5){if(b5){b6=":not("+b6+")"
}return e.length===1?bK.find.matchesSelector(e[0],b6)?[e[0]]:[]:bK.find.matches(b6,e)
},dir:function(b6,b5,b8){var e=[],b7=b6[b5];
while(b7&&b7.nodeType!==9&&(b8===undefined||b7.nodeType!==1||!bK(b7).is(b8))){if(b7.nodeType===1){e.push(b7)
}b7=b7[b5]
}return e
},sibling:function(b6,b5){var e=[];
for(;
b6;
b6=b6.nextSibling){if(b6.nodeType===1&&b6!==b5){e.push(b6)
}}return e
}});
function aP(b7,b6,e){b6=b6||0;
if(bK.isFunction(b6)){return bK.grep(b7,function(b9,b8){var ca=!!b6.call(b9,b8,b9);
return ca===e
})
}else{if(b6.nodeType){return bK.grep(b7,function(b8){return(b8===b6)===e
})
}else{if(typeof b6==="string"){var b5=bK.grep(b7,function(b8){return b8.nodeType===1
});
if(ap.test(b6)){return bK.filter(b6,b5,!e)
}else{b6=bK.filter(b6,b5)
}}}}return bK.grep(b7,function(b8){return(bK.inArray(b8,b6)>=0)===e
})
}function C(e){var b6=d.split("|"),b5=e.createDocumentFragment();
if(b5.createElement){while(b6.length){b5.createElement(b6.pop())
}}return b5
}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aC=/ jQuery\d+="(?:null|\d+)"/g,L=new RegExp("<(?:"+d+")[\\s/>]","i"),b4=/^\s+/,aF=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,n=/<([\w:]+)/,bZ=/<tbody/i,K=/<|&#?\w+;/,an=/<(?:script|style|link)/i,r=/^(?:checkbox|radio)$/i,bW=/checked\s*(?:[^=]|=\s*.checked.)/i,bA=/^$|\/(?:java|ecma)script/i,au=/^true\/(.*)/,aL=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,V={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:bK.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aT=C(m),k=aT.appendChild(m.createElement("div"));
V.optgroup=V.option;
V.tbody=V.tfoot=V.colgroup=V.caption=V.thead;
V.th=V.td;
bK.fn.extend({text:function(e){return bK.access(this,function(b5){return b5===undefined?bK.text(this):this.empty().append((this[0]&&this[0].ownerDocument||m).createTextNode(b5))
},null,e,arguments.length)
},wrapAll:function(e){if(bK.isFunction(e)){return this.each(function(b6){bK(this).wrapAll(e.call(this,b6))
})
}if(this[0]){var b5=bK(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b5.insertBefore(this[0])
}b5.map(function(){var b6=this;
while(b6.firstChild&&b6.firstChild.nodeType===1){b6=b6.firstChild
}return b6
}).append(this)
}return this
},wrapInner:function(e){if(bK.isFunction(e)){return this.each(function(b5){bK(this).wrapInner(e.call(this,b5))
})
}return this.each(function(){var b5=bK(this),b6=b5.contents();
if(b6.length){b6.wrapAll(e)
}else{b5.append(e)
}})
},wrap:function(e){var b5=bK.isFunction(e);
return this.each(function(b6){bK(this).wrapAll(b5?e.call(this,b6):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bK.nodeName(this,"body")){bK(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)
}})
},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})
},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})
},remove:function(e,b7){var b6,b5=0;
for(;
(b6=this[b5])!=null;
b5++){if(!e||bK.filter(e,[b6]).length>0){if(!b7&&b6.nodeType===1){bK.cleanData(l(b6))
}if(b6.parentNode){if(b7&&bK.contains(b6.ownerDocument,b6)){bt(l(b6,"script"))
}b6.parentNode.removeChild(b6)
}}}return this
},empty:function(){var b5,e=0;
for(;
(b5=this[e])!=null;
e++){if(b5.nodeType===1){bK.cleanData(l(b5,false))
}while(b5.firstChild){b5.removeChild(b5.firstChild)
}if(b5.options&&bK.nodeName(b5,"select")){b5.options.length=0
}}return this
},clone:function(b5,e){b5=b5==null?false:b5;
e=e==null?b5:e;
return this.map(function(){return bK.clone(this,b5,e)
})
},html:function(e){return bK.access(this,function(b8){var b7=this[0]||{},b6=0,b5=this.length;
if(b8===undefined){return b7.nodeType===1?b7.innerHTML.replace(aC,""):undefined
}if(typeof b8==="string"&&!an.test(b8)&&(bK.support.htmlSerialize||!L.test(b8))&&(bK.support.leadingWhitespace||!b4.test(b8))&&!V[(n.exec(b8)||["",""])[1].toLowerCase()]){b8=b8.replace(aF,"<$1></$2>");
try{for(;
b6<b5;
b6++){b7=this[b6]||{};
if(b7.nodeType===1){bK.cleanData(l(b7,false));
b7.innerHTML=b8
}}b7=0
}catch(b9){}}if(b7){this.empty().append(b8)
}},null,e,arguments.length)
},replaceWith:function(b5){var e=bK.isFunction(b5);
if(!e&&typeof b5!=="string"){b5=bK(b5).not(this).detach()
}return this.domManip([b5],true,function(b8){var b7=this.nextSibling,b6=this.parentNode;
if(b6){bK(this).remove();
b6.insertBefore(b8,b7)
}})
},detach:function(e){return this.remove(e,true)
},domManip:function(cc,ci,ch){cc=aJ.apply([],cc);
var ca,b6,e,b8,cf,cb,b9=0,b7=this.length,ce=this,cg=b7-1,cd=cc[0],b5=bK.isFunction(cd);
if(b5||!(b7<=1||typeof cd!=="string"||bK.support.checkClone||!bW.test(cd))){return this.each(function(ck){var cj=ce.eq(ck);
if(b5){cc[0]=cd.call(this,ck,ci?cj.html():undefined)
}cj.domManip(cc,ci,ch)
})
}if(b7){cb=bK.buildFragment(cc,this[0].ownerDocument,false,this);
ca=cb.firstChild;
if(cb.childNodes.length===1){cb=ca
}if(ca){ci=ci&&bK.nodeName(ca,"tr");
b8=bK.map(l(cb,"script"),v);
e=b8.length;
for(;
b9<b7;
b9++){b6=cb;
if(b9!==cg){b6=bK.clone(b6,true,true);
if(e){bK.merge(b8,l(b6,"script"))
}}ch.call(ci&&bK.nodeName(this[b9],"table")?z(this[b9],"tbody"):this[b9],b6,b9)
}if(e){cf=b8[b8.length-1].ownerDocument;
bK.map(b8,bd);
for(b9=0;
b9<e;
b9++){b6=b8[b9];
if(bA.test(b6.type||"")&&!bK._data(b6,"globalEval")&&bK.contains(cf,b6)){if(b6.src){bK.ajax({url:b6.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bK.globalEval((b6.text||b6.textContent||b6.innerHTML||"").replace(aL,""))
}}}}cb=ca=null
}}return this
}});
function z(b5,e){return b5.getElementsByTagName(e)[0]||b5.appendChild(b5.ownerDocument.createElement(e))
}function v(b5){var e=b5.getAttributeNode("type");
b5.type=(e&&e.specified)+"/"+b5.type;
return b5
}function bd(b5){var e=au.exec(b5.type);
if(e){b5.type=e[1]
}else{b5.removeAttribute("type")
}return b5
}function bt(e,b6){var b7,b5=0;
for(;
(b7=e[b5])!=null;
b5++){bK._data(b7,"globalEval",!b6||bK._data(b6[b5],"globalEval"))
}}function av(cb,b5){if(b5.nodeType!==1||!bK.hasData(cb)){return
}var b8,b7,e,ca=bK._data(cb),b9=bK._data(b5,ca),b6=ca.events;
if(b6){delete b9.handle;
b9.events={};
for(b8 in b6){for(b7=0,e=b6[b8].length;
b7<e;
b7++){bK.event.add(b5,b8,b6[b8][b7])
}}}if(b9.data){b9.data=bK.extend({},b9.data)
}}function S(b8,b5){var b9,b7,b6;
if(b5.nodeType!==1){return
}b9=b5.nodeName.toLowerCase();
if(!bK.support.noCloneEvent&&b5[bK.expando]){b6=bK._data(b5);
for(b7 in b6.events){bK.removeEvent(b5,b7,b6.handle)
}b5.removeAttribute(bK.expando)
}if(b9==="script"&&b5.text!==b8.text){v(b5).text=b8.text;
bd(b5)
}else{if(b9==="object"){if(b5.parentNode){b5.outerHTML=b8.outerHTML
}if(bK.support.html5Clone&&(b8.innerHTML&&!bK.trim(b5.innerHTML))){b5.innerHTML=b8.innerHTML
}}else{if(b9==="input"&&r.test(b8.type)){b5.defaultChecked=b5.checked=b8.checked;
if(b5.value!==b8.value){b5.value=b8.value
}}else{if(b9==="option"){b5.defaultSelected=b5.selected=b8.defaultSelected
}else{if(b9==="input"||b9==="textarea"){b5.defaultValue=b8.defaultValue
}}}}}}bK.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b5){bK.fn[e]=function(b6){var b7,b9=0,b8=[],cb=bK(b6),ca=cb.length-1;
for(;
b9<=ca;
b9++){b7=b9===ca?this:this.clone(true);
bK(cb[b9])[b5](b7);
aq.apply(b8,b7.get())
}return this.pushStack(b8)
}
});
function l(b7,e){var b5,b8,b6=0,b9=typeof b7.getElementsByTagName!==aE?b7.getElementsByTagName(e||"*"):typeof b7.querySelectorAll!==aE?b7.querySelectorAll(e||"*"):undefined;
if(!b9){for(b9=[],b5=b7.childNodes||b7;
(b8=b5[b6])!=null;
b6++){if(!e||bK.nodeName(b8,e)){b9.push(b8)
}else{bK.merge(b9,l(b8,e))
}}}return e===undefined||e&&bK.nodeName(b7,e)?bK.merge([b7],b9):b9
}function bX(e){if(r.test(e.type)){e.defaultChecked=e.checked
}}bK.extend({clone:function(b5,b7,e){var b9,b6,cc,b8,ca,cb=bK.contains(b5.ownerDocument,b5);
if(bK.support.html5Clone||bK.isXMLDoc(b5)||!L.test("<"+b5.nodeName+">")){cc=b5.cloneNode(true)
}else{k.innerHTML=b5.outerHTML;
k.removeChild(cc=k.firstChild)
}if((!bK.support.noCloneEvent||!bK.support.noCloneChecked)&&(b5.nodeType===1||b5.nodeType===11)&&!bK.isXMLDoc(b5)){b9=l(cc);
ca=l(b5);
for(b8=0;
(b6=ca[b8])!=null;
++b8){if(b9[b8]){S(b6,b9[b8])
}}}if(b7){if(e){ca=ca||l(b5);
b9=b9||l(cc);
for(b8=0;
(b6=ca[b8])!=null;
b8++){av(b6,b9[b8])
}}else{av(b5,cc)
}}b9=l(cc,"script");
if(b9.length>0){bt(b9,!cb&&l(b5,"script"))
}b9=ca=b6=null;
return cc
},buildFragment:function(b5,b7,cc,ch){var cd,b9,cb,cg,ci,cf,b6,ca=b5.length,b8=C(b7),e=[],ce=0;
for(;
ce<ca;
ce++){b9=b5[ce];
if(b9||b9===0){if(bK.type(b9)==="object"){bK.merge(e,b9.nodeType?[b9]:b9)
}else{if(!K.test(b9)){e.push(b7.createTextNode(b9))
}else{cg=cg||b8.appendChild(b7.createElement("div"));
ci=(n.exec(b9)||["",""])[1].toLowerCase();
b6=V[ci]||V._default;
cg.innerHTML=b6[1]+b9.replace(aF,"<$1></$2>")+b6[2];
cd=b6[0];
while(cd--){cg=cg.lastChild
}if(!bK.support.leadingWhitespace&&b4.test(b9)){e.push(b7.createTextNode(b4.exec(b9)[0]))
}if(!bK.support.tbody){b9=ci==="table"&&!bZ.test(b9)?cg.firstChild:b6[1]==="<table>"&&!bZ.test(b9)?cg:0;
cd=b9&&b9.childNodes.length;
while(cd--){if(bK.nodeName((cf=b9.childNodes[cd]),"tbody")&&!cf.childNodes.length){b9.removeChild(cf)
}}}bK.merge(e,cg.childNodes);
cg.textContent="";
while(cg.firstChild){cg.removeChild(cg.firstChild)
}cg=b8.lastChild
}}}}if(cg){b8.removeChild(cg)
}if(!bK.support.appendChecked){bK.grep(l(e,"input"),bX)
}ce=0;
while((b9=e[ce++])){if(ch&&bK.inArray(b9,ch)!==-1){continue
}cb=bK.contains(b9.ownerDocument,b9);
cg=l(b8.appendChild(b9),"script");
if(cb){bt(cg)
}if(cc){cd=0;
while((b9=cg[cd++])){if(bA.test(b9.type||"")){cc.push(b9)
}}}}cg=null;
return b8
},cleanData:function(b5,cd){var b7,cc,b6,b8,b9=0,ce=bK.expando,e=bK.cache,ca=bK.support.deleteExpando,cb=bK.event.special;
for(;
(b7=b5[b9])!=null;
b9++){if(cd||bK.acceptData(b7)){b6=b7[ce];
b8=b6&&e[b6];
if(b8){if(b8.events){for(cc in b8.events){if(cb[cc]){bK.event.remove(b7,cc)
}else{bK.removeEvent(b7,cc,b8.handle)
}}}if(e[b6]){delete e[b6];
if(ca){delete b7[ce]
}else{if(typeof b7.removeAttribute!==aE){b7.removeAttribute(ce)
}else{b7[ce]=null
}}a7.push(b6)
}}}}}});
var aG,bp,G,bh=/alpha\([^)]*\)/i,aU=/opacity\s*=\s*([^)]*)/,bo=/^(top|right|bottom|left)$/,H=/^(none|table(?!-c[ea]).+)/,aZ=/^margin/,ba=new RegExp("^("+bB+")(.*)$","i"),Y=new RegExp("^("+bB+")(?!px)[a-z%]+$","i"),U=new RegExp("^([+-])=("+bB+")","i"),bk={BODY:"block"},bc={position:"absolute",visibility:"hidden",display:"block"},bD={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],ax=["Webkit","O","Moz","ms"];
function b(b7,b5){if(b5 in b7){return b5
}var b8=b5.charAt(0).toUpperCase()+b5.slice(1),e=b5,b6=ax.length;
while(b6--){b5=ax[b6]+b8;
if(b5 in b7){return b5
}}return e
}function R(b5,e){b5=e||b5;
return bK.css(b5,"display")==="none"||!bK.contains(b5.ownerDocument,b5)
}function q(ca,e){var cb,b8,b9,b5=[],b6=0,b7=ca.length;
for(;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}b5[b6]=bK._data(b8,"olddisplay");
cb=b8.style.display;
if(e){if(!b5[b6]&&cb==="none"){b8.style.display=""
}if(b8.style.display===""&&R(b8)){b5[b6]=bK._data(b8,"olddisplay",bF(b8.nodeName))
}}else{if(!b5[b6]){b9=R(b8);
if(cb&&cb!=="none"||!b9){bK._data(b8,"olddisplay",b9?cb:bK.css(b8,"display"))
}}}}for(b6=0;
b6<b7;
b6++){b8=ca[b6];
if(!b8.style){continue
}if(!e||b8.style.display==="none"||b8.style.display===""){b8.style.display=e?b5[b6]||"":"none"
}}return ca
}bK.fn.extend({css:function(e,b5){return bK.access(this,function(ca,b7,cb){var b6,b9,cc={},b8=0;
if(bK.isArray(b7)){b9=bp(ca);
b6=b7.length;
for(;
b8<b6;
b8++){cc[b7[b8]]=bK.css(ca,b7[b8],false,b9)
}return cc
}return cb!==undefined?bK.style(ca,b7,cb):bK.css(ca,b7)
},e,b5,arguments.length>1)
},show:function(){return q(this,true)
},hide:function(){return q(this)
},toggle:function(b5){var e=typeof b5==="boolean";
return this.each(function(){if(e?b5:R(this)){bK(this).show()
}else{bK(this).hide()
}})
}});
bK.extend({cssHooks:{opacity:{get:function(b6,b5){if(b5){var e=G(b6,"opacity");
return e===""?"1":e
}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bK.support.cssFloat?"cssFloat":"styleFloat"},style:function(b7,b6,cd,b8){if(!b7||b7.nodeType===3||b7.nodeType===8||!b7.style){return
}var cb,cc,ce,b9=bK.camelCase(b6),b5=b7.style;
b6=bK.cssProps[b9]||(bK.cssProps[b9]=b(b5,b9));
ce=bK.cssHooks[b6]||bK.cssHooks[b9];
if(cd!==undefined){cc=typeof cd;
if(cc==="string"&&(cb=U.exec(cd))){cd=(cb[1]+1)*cb[2]+parseFloat(bK.css(b7,b6));
cc="number"
}if(cd==null||cc==="number"&&isNaN(cd)){return
}if(cc==="number"&&!bK.cssNumber[b9]){cd+="px"
}if(!bK.support.clearCloneStyle&&cd===""&&b6.indexOf("background")===0){b5[b6]="inherit"
}if(!ce||!("set" in ce)||(cd=ce.set(b7,cd,b8))!==undefined){try{b5[b6]=cd
}catch(ca){}}}else{if(ce&&"get" in ce&&(cb=ce.get(b7,false,b8))!==undefined){return cb
}return b5[b6]
}},css:function(ca,b8,b5,b9){var b7,cb,e,b6=bK.camelCase(b8);
b8=bK.cssProps[b6]||(bK.cssProps[b6]=b(ca.style,b6));
e=bK.cssHooks[b8]||bK.cssHooks[b6];
if(e&&"get" in e){cb=e.get(ca,true,b5)
}if(cb===undefined){cb=G(ca,b8,b9)
}if(cb==="normal"&&b8 in bD){cb=bD[b8]
}if(b5===""||b5){b7=parseFloat(cb);
return b5===true||bK.isNumeric(b7)?b7||0:cb
}return cb
},swap:function(b9,b8,ca,b7){var b6,b5,e={};
for(b5 in b8){e[b5]=b9.style[b5];
b9.style[b5]=b8[b5]
}b6=ca.apply(b9,b7||[]);
for(b5 in b8){b9.style[b5]=e[b5]
}return b6
}});
if(a3.getComputedStyle){bp=function(e){return a3.getComputedStyle(e,null)
};
G=function(b8,b6,ca){var b7,b5,cc,b9=ca||bp(b8),cb=b9?b9.getPropertyValue(b6)||b9[b6]:undefined,e=b8.style;
if(b9){if(cb===""&&!bK.contains(b8.ownerDocument,b8)){cb=bK.style(b8,b6)
}if(Y.test(cb)&&aZ.test(b6)){b7=e.width;
b5=e.minWidth;
cc=e.maxWidth;
e.minWidth=e.maxWidth=e.width=cb;
cb=b9.width;
e.width=b7;
e.minWidth=b5;
e.maxWidth=cc
}}return cb
}
}else{if(m.documentElement.currentStyle){bp=function(e){return e.currentStyle
};
G=function(b7,b5,ca){var b6,b9,cb,b8=ca||bp(b7),cc=b8?b8[b5]:undefined,e=b7.style;
if(cc==null&&e&&e[b5]){cc=e[b5]
}if(Y.test(cc)&&!bo.test(b5)){b6=e.left;
b9=b7.runtimeStyle;
cb=b9&&b9.left;
if(cb){b9.left=b7.currentStyle.left
}e.left=b5==="fontSize"?"1em":cc;
cc=e.pixelLeft+"px";
e.left=b6;
if(cb){b9.left=cb
}}return cc===""?"auto":cc
}
}}function aK(e,b6,b7){var b5=ba.exec(b6);
return b5?Math.max(0,b5[1]-(b7||0))+(b5[2]||"px"):b6
}function ay(b8,b5,e,ca,b7){var b6=e===(ca?"border":"content")?4:b5==="width"?1:0,b9=0;
for(;
b6<4;
b6+=2){if(e==="margin"){b9+=bK.css(b8,e+bV[b6],true,b7)
}if(ca){if(e==="content"){b9-=bK.css(b8,"padding"+bV[b6],true,b7)
}if(e!=="margin"){b9-=bK.css(b8,"border"+bV[b6]+"Width",true,b7)
}}else{b9+=bK.css(b8,"padding"+bV[b6],true,b7);
if(e!=="padding"){b9+=bK.css(b8,"border"+bV[b6]+"Width",true,b7)
}}}return b9
}function w(b8,b5,e){var b7=true,b9=b5==="width"?b8.offsetWidth:b8.offsetHeight,b6=bp(b8),ca=bK.support.boxSizing&&bK.css(b8,"boxSizing",false,b6)==="border-box";
if(b9<=0||b9==null){b9=G(b8,b5,b6);
if(b9<0||b9==null){b9=b8.style[b5]
}if(Y.test(b9)){return b9
}b7=ca&&(bK.support.boxSizingReliable||b9===b8.style[b5]);
b9=parseFloat(b9)||0
}return(b9+ay(b8,b5,e||(ca?"border":"content"),b7,b6))+"px"
}function bF(b6){var b5=m,e=bk[b6];
if(!e){e=a2(b6,b5);
if(e==="none"||!e){aG=(aG||bK("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b5.documentElement);
b5=(aG[0].contentWindow||aG[0].contentDocument).document;
b5.write("<!doctype html><html><body>");
b5.close();
e=a2(b6,b5);
aG.detach()
}bk[b6]=e
}return e
}function a2(e,b7){var b5=bK(b7.createElement(e)).appendTo(b7.body),b6=bK.css(b5[0],"display");
b5.remove();
return b6
}bK.each(["height","width"],function(b5,e){bK.cssHooks[e]={get:function(b8,b7,b6){if(b7){return b8.offsetWidth===0&&H.test(bK.css(b8,"display"))?bK.swap(b8,bc,function(){return w(b8,e,b6)
}):w(b8,e,b6)
}},set:function(b8,b9,b6){var b7=b6&&bp(b8);
return aK(b8,b9,b6?ay(b8,e,b6,bK.support.boxSizing&&bK.css(b8,"boxSizing",false,b7)==="border-box",b7):0)
}}
});
if(!bK.support.opacity){bK.cssHooks.opacity={get:function(b5,e){return aU.test((e&&b5.currentStyle?b5.currentStyle.filter:b5.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b8,b9){var b7=b8.style,b5=b8.currentStyle,e=bK.isNumeric(b9)?"alpha(opacity="+b9*100+")":"",b6=b5&&b5.filter||b7.filter||"";
b7.zoom=1;
if((b9>=1||b9==="")&&bK.trim(b6.replace(bh,""))===""&&b7.removeAttribute){b7.removeAttribute("filter");
if(b9===""||b5&&!b5.filter){return
}}b7.filter=bh.test(b6)?b6.replace(bh,e):b6+" "+e
}}
}bK(function(){if(!bK.support.reliableMarginRight){bK.cssHooks.marginRight={get:function(b5,e){if(e){return bK.swap(b5,{display:"inline-block"},G,[b5,"marginRight"])
}}}
}if(!bK.support.pixelPosition&&bK.fn.position){bK.each(["top","left"],function(e,b5){bK.cssHooks[b5]={get:function(b7,b6){if(b6){b6=G(b7,b5);
return Y.test(b6)?bK(b7).position()[b5]+"px":b6
}}}
})
}});
if(bK.expr&&bK.expr.filters){bK.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||(!bK.support.reliableHiddenOffsets&&((e.style&&e.style.display)||bK.css(e,"display"))==="none")
};
bK.expr.filters.visible=function(e){return !bK.expr.filters.hidden(e)
}
}bK.each({margin:"",padding:"",border:"Width"},function(e,b5){bK.cssHooks[e+b5]={expand:function(b8){var b7=0,b6={},b9=typeof b8==="string"?b8.split(" "):[b8];
for(;
b7<4;
b7++){b6[e+bV[b7]+b5]=b9[b7]||b9[b7-2]||b9[0]
}return b6
}};
if(!aZ.test(e)){bK.cssHooks[e+b5].set=aK
}});
var bw=/%20/g,aS=/\[\]$/,W=/\r?\n/g,c=/^(?:submit|button|image|reset|file)$/i,aw=/^(?:input|select|textarea|keygen)/i;
bK.fn.extend({serialize:function(){return bK.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=bK.prop(this,"elements");
return e?bK.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!bK(this).is(":disabled")&&aw.test(this.nodeName)&&!c.test(e)&&(this.checked||!r.test(e))
}).map(function(e,b5){var b6=bK(this).val();
return b6==null?null:bK.isArray(b6)?bK.map(b6,function(b7){return{name:b5.name,value:b7.replace(W,"\r\n")}
}):{name:b5.name,value:b6.replace(W,"\r\n")}
}).get()
}});
bK.param=function(e,b6){var b7,b5=[],b8=function(b9,ca){ca=bK.isFunction(ca)?ca():(ca==null?"":ca);
b5[b5.length]=encodeURIComponent(b9)+"="+encodeURIComponent(ca)
};
if(b6===undefined){b6=bK.ajaxSettings&&bK.ajaxSettings.traditional
}if(bK.isArray(e)||(e.jquery&&!bK.isPlainObject(e))){bK.each(e,function(){b8(this.name,this.value)
})
}else{for(b7 in e){j(b7,e[b7],b6,b8)
}}return b5.join("&").replace(bw,"+")
};
function j(b6,b8,b5,b7){var e;
if(bK.isArray(b8)){bK.each(b8,function(ca,b9){if(b5||aS.test(b6)){b7(b6,b9)
}else{j(b6+"["+(typeof b9==="object"?ca:"")+"]",b9,b5,b7)
}})
}else{if(!b5&&bK.type(b8)==="object"){for(e in b8){j(b6+"["+e+"]",b8[e],b5,b7)
}}else{b7(b6,b8)
}}}bK.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b5,e){bK.fn[e]=function(b7,b6){return arguments.length>0?this.on(e,null,b7,b6):this.trigger(e)
}
});
bK.fn.hover=function(e,b5){return this.mouseenter(e).mouseleave(b5||e)
};
var b3,aa,bP=bK.now(),aB=/\?/,ar=/#.*$/,Q=/([?&])_=[^&]*/,ai=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,D=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,p=/^(?:GET|HEAD)$/,aI=/^\/\//,aV=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,b2=bK.fn.load,x={},a8={},aX="*/".concat("*");
try{aa=aM.href
}catch(bg){aa=m.createElement("a");
aa.href="";
aa=aa.href
}b3=aV.exec(aa.toLowerCase())||[];
function bM(e){return function(b8,b9){if(typeof b8!=="string"){b9=b8;
b8="*"
}var b5,b6=0,b7=b8.toLowerCase().match(ae)||[];
if(bK.isFunction(b9)){while((b5=b7[b6++])){if(b5[0]==="+"){b5=b5.slice(1)||"*";
(e[b5]=e[b5]||[]).unshift(b9)
}else{(e[b5]=e[b5]||[]).push(b9)
}}}}
}function o(e,b6,ca,b7){var b5={},b8=(e===a8);
function b9(cb){var cc;
b5[cb]=true;
bK.each(e[cb]||[],function(ce,cd){var cf=cd(b6,ca,b7);
if(typeof cf==="string"&&!b8&&!b5[cf]){b6.dataTypes.unshift(cf);
b9(cf);
return false
}else{if(b8){return !(cc=cf)
}}});
return cc
}return b9(b6.dataTypes[0])||!b5["*"]&&b9("*")
}function t(b6,b7){var e,b5,b8=bK.ajaxSettings.flatOptions||{};
for(b5 in b7){if(b7[b5]!==undefined){(b8[b5]?b6:(e||(e={})))[b5]=b7[b5]
}}if(e){bK.extend(true,b6,e)
}return b6
}bK.fn.load=function(b7,ca,cb){if(typeof b7!=="string"&&b2){return b2.apply(this,arguments)
}var e,b6,b8,b5=this,b9=b7.indexOf(" ");
if(b9>=0){e=b7.slice(b9,b7.length);
b7=b7.slice(0,b9)
}if(bK.isFunction(ca)){cb=ca;
ca=undefined
}else{if(ca&&typeof ca==="object"){b8="POST"
}}if(b5.length>0){bK.ajax({url:b7,type:b8,dataType:"html",data:ca}).done(function(cc){b6=arguments;
b5.html(e?bK("<div>").append(bK.parseHTML(cc)).find(e):cc)
}).complete(cb&&function(cd,cc){b5.each(cb,b6||[cd.responseText,cc,cd])
})
}return this
};
bK.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b5){bK.fn[b5]=function(b6){return this.on(b5,b6)
}
});
bK.each(["get","post"],function(e,b5){bK[b5]=function(b6,b8,b9,b7){if(bK.isFunction(b8)){b7=b7||b9;
b9=b8;
b8=undefined
}return bK.ajax({url:b6,type:b5,dataType:b7,data:b8,success:b9})
}
});
bK.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:aa,type:"GET",isLocal:D.test(b3[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aX,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a3.String,"text html":true,"text json":bK.parseJSON,"text xml":bK.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(b5,e){return e?t(t(b5,bK.ajaxSettings),e):t(bK.ajaxSettings,b5)
},ajaxPrefilter:bM(x),ajaxTransport:bM(a8),ajax:function(b9,b6){if(typeof b9==="object"){b6=b9;
b9=undefined
}b6=b6||{};
var ci,ck,ca,cp,ce,b5,cl,b7,cd=bK.ajaxSetup({},b6),cr=cd.context||cd,cg=cd.context&&(cr.nodeType||cr.jquery)?bK(cr):bK.event,cq=bK.Deferred(),cn=bK.Callbacks("once memory"),cb=cd.statusCode||{},ch={},co={},b8=0,cc="canceled",cj={readyState:0,getResponseHeader:function(cs){var e;
if(b8===2){if(!b7){b7={};
while((e=ai.exec(cp))){b7[e[1].toLowerCase()]=e[2]
}}e=b7[cs.toLowerCase()]
}return e==null?null:e
},getAllResponseHeaders:function(){return b8===2?cp:null
},setRequestHeader:function(cs,ct){var e=cs.toLowerCase();
if(!b8){cs=co[e]=co[e]||cs;
ch[cs]=ct
}return this
},overrideMimeType:function(e){if(!b8){cd.mimeType=e
}return this
},statusCode:function(cs){var e;
if(cs){if(b8<2){for(e in cs){cb[e]=[cb[e],cs[e]]
}}else{cj.always(cs[cj.status])
}}return this
},abort:function(cs){var e=cs||cc;
if(cl){cl.abort(e)
}cf(0,e);
return this
}};
cq.promise(cj).complete=cn.add;
cj.success=cj.done;
cj.error=cj.fail;
cd.url=((b9||cd.url||aa)+"").replace(ar,"").replace(aI,b3[1]+"//");
cd.type=b6.method||b6.type||cd.method||cd.type;
cd.dataTypes=bK.trim(cd.dataType||"*").toLowerCase().match(ae)||[""];
if(cd.crossDomain==null){ci=aV.exec(cd.url.toLowerCase());
cd.crossDomain=!!(ci&&(ci[1]!==b3[1]||ci[2]!==b3[2]||(ci[3]||(ci[1]==="http:"?80:443))!=(b3[3]||(b3[1]==="http:"?80:443))))
}if(cd.data&&cd.processData&&typeof cd.data!=="string"){cd.data=bK.param(cd.data,cd.traditional)
}o(x,cd,b6,cj);
if(b8===2){return cj
}b5=cd.global;
if(b5&&bK.active++===0){bK.event.trigger("ajaxStart")
}cd.type=cd.type.toUpperCase();
cd.hasContent=!p.test(cd.type);
ca=cd.url;
if(!cd.hasContent){if(cd.data){ca=(cd.url+=(aB.test(ca)?"&":"?")+cd.data);
delete cd.data
}if(cd.cache===false){cd.url=Q.test(ca)?ca.replace(Q,"$1_="+bP++):ca+(aB.test(ca)?"&":"?")+"_="+bP++
}}if(cd.ifModified){if(bK.lastModified[ca]){cj.setRequestHeader("If-Modified-Since",bK.lastModified[ca])
}if(bK.etag[ca]){cj.setRequestHeader("If-None-Match",bK.etag[ca])
}}if(cd.data&&cd.hasContent&&cd.contentType!==false||b6.contentType){cj.setRequestHeader("Content-Type",cd.contentType)
}cj.setRequestHeader("Accept",cd.dataTypes[0]&&cd.accepts[cd.dataTypes[0]]?cd.accepts[cd.dataTypes[0]]+(cd.dataTypes[0]!=="*"?", "+aX+"; q=0.01":""):cd.accepts["*"]);
for(ck in cd.headers){cj.setRequestHeader(ck,cd.headers[ck])
}if(cd.beforeSend&&(cd.beforeSend.call(cr,cj,cd)===false||b8===2)){return cj.abort()
}cc="abort";
for(ck in {success:1,error:1,complete:1}){cj[ck](cd[ck])
}cl=o(a8,cd,b6,cj);
if(!cl){cf(-1,"No Transport")
}else{cj.readyState=1;
if(b5){cg.trigger("ajaxSend",[cj,cd])
}if(cd.async&&cd.timeout>0){ce=setTimeout(function(){cj.abort("timeout")
},cd.timeout)
}try{b8=1;
cl.send(ch,cf)
}catch(cm){if(b8<2){cf(-1,cm)
}else{throw cm
}}}function cf(cw,cs,cx,cu){var e,cA,cy,cv,cz,ct=cs;
if(b8===2){return
}b8=2;
if(ce){clearTimeout(ce)
}cl=undefined;
cp=cu||"";
cj.readyState=cw>0?4:0;
if(cx){cv=g(cd,cj,cx)
}if(cw>=200&&cw<300||cw===304){if(cd.ifModified){cz=cj.getResponseHeader("Last-Modified");
if(cz){bK.lastModified[ca]=cz
}cz=cj.getResponseHeader("etag");
if(cz){bK.etag[ca]=cz
}}if(cw===204){e=true;
ct="nocontent"
}else{if(cw===304){e=true;
ct="notmodified"
}else{e=ah(cd,cv);
ct=e.state;
cA=e.data;
cy=e.error;
e=!cy
}}}else{cy=ct;
if(cw||!ct){ct="error";
if(cw<0){cw=0
}}}cj.status=cw;
cj.statusText=(cs||ct)+"";
if(e){cq.resolveWith(cr,[cA,ct,cj])
}else{cq.rejectWith(cr,[cj,ct,cy])
}cj.statusCode(cb);
cb=undefined;
if(b5){cg.trigger(e?"ajaxSuccess":"ajaxError",[cj,cd,e?cA:cy])
}cn.fireWith(cr,[cj,ct]);
if(b5){cg.trigger("ajaxComplete",[cj,cd]);
if(!(--bK.active)){bK.event.trigger("ajaxStop")
}}}return cj
},getScript:function(e,b5){return bK.get(e,undefined,b5,"script")
},getJSON:function(e,b5,b6){return bK.get(e,b5,b6,"json")
}});
function g(cd,cc,b9){var e,b8,b7,ca,b5=cd.contents,cb=cd.dataTypes,b6=cd.responseFields;
for(ca in b6){if(ca in b9){cc[b6[ca]]=b9[ca]
}}while(cb[0]==="*"){cb.shift();
if(b8===undefined){b8=cd.mimeType||cc.getResponseHeader("Content-Type")
}}if(b8){for(ca in b5){if(b5[ca]&&b5[ca].test(b8)){cb.unshift(ca);
break
}}}if(cb[0] in b9){b7=cb[0]
}else{for(ca in b9){if(!cb[0]||cd.converters[ca+" "+cb[0]]){b7=ca;
break
}if(!e){e=ca
}}b7=b7||e
}if(b7){if(b7!==cb[0]){cb.unshift(b7)
}return b9[b7]
}}function ah(cf,b7){var b5,cb,cd,b8,ce={},b9=0,cc=cf.dataTypes.slice(),b6=cc[0];
if(cf.dataFilter){b7=cf.dataFilter(b7,cf.dataType)
}if(cc[1]){for(cd in cf.converters){ce[cd.toLowerCase()]=cf.converters[cd]
}}for(;
(cb=cc[++b9]);
){if(cb!=="*"){if(b6!=="*"&&b6!==cb){cd=ce[b6+" "+cb]||ce["* "+cb];
if(!cd){for(b5 in ce){b8=b5.split(" ");
if(b8[1]===cb){cd=ce[b6+" "+b8[0]]||ce["* "+b8[0]];
if(cd){if(cd===true){cd=ce[b5]
}else{if(ce[b5]!==true){cb=b8[0];
cc.splice(b9--,0,cb)
}}break
}}}}if(cd!==true){if(cd&&cf["throws"]){b7=cd(b7)
}else{try{b7=cd(b7)
}catch(ca){return{state:"parsererror",error:cd?ca:"No conversion from "+b6+" to "+cb}
}}}}b6=cb
}}return{state:"success",data:b7}
}bK.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bK.globalEval(e);
return e
}}});
bK.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bK.ajaxTransport("script",function(b6){if(b6.crossDomain){var e,b5=m.head||bK("head")[0]||m.documentElement;
return{send:function(b7,b8){e=m.createElement("script");
e.async=true;
if(b6.scriptCharset){e.charset=b6.scriptCharset
}e.src=b6.url;
e.onload=e.onreadystatechange=function(ca,b9){if(b9||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)
}e=null;
if(!b9){b8(200,"success")
}}};
b5.insertBefore(e,b5.firstChild)
},abort:function(){if(e){e.onload(undefined,true)
}}}
}});
var br=[],a6=/(=)\?(?=&|$)|\?\?/;
bK.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=br.pop()||(bK.expando+"_"+(bP++));
this[e]=true;
return e
}});
bK.ajaxPrefilter("json jsonp",function(b7,e,b8){var ca,b5,b6,b9=b7.jsonp!==false&&(a6.test(b7.url)?"url":typeof b7.data==="string"&&!(b7.contentType||"").indexOf("application/x-www-form-urlencoded")&&a6.test(b7.data)&&"data");
if(b9||b7.dataTypes[0]==="jsonp"){ca=b7.jsonpCallback=bK.isFunction(b7.jsonpCallback)?b7.jsonpCallback():b7.jsonpCallback;
if(b9){b7[b9]=b7[b9].replace(a6,"$1"+ca)
}else{if(b7.jsonp!==false){b7.url+=(aB.test(b7.url)?"&":"?")+b7.jsonp+"="+ca
}}b7.converters["script json"]=function(){if(!b6){bK.error(ca+" was not called")
}return b6[0]
};
b7.dataTypes[0]="json";
b5=a3[ca];
a3[ca]=function(){b6=arguments
};
b8.always(function(){a3[ca]=b5;
if(b7[ca]){b7.jsonpCallback=e.jsonpCallback;
br.push(ca)
}if(b6&&bK.isFunction(b5)){b5(b6[0])
}b6=b5=undefined
});
return"script"
}});
var aj,az,aA=0,aQ=a3.ActiveXObject&&function(){var e;
for(e in aj){aj[e](undefined,true)
}};
function bE(){try{return new a3.XMLHttpRequest()
}catch(b5){}}function be(){try{return new a3.ActiveXObject("Microsoft.XMLHTTP")
}catch(b5){}}bK.ajaxSettings.xhr=a3.ActiveXObject?function(){return !this.isLocal&&bE()||be()
}:bE;
az=bK.ajaxSettings.xhr();
bK.support.cors=!!az&&("withCredentials" in az);
az=bK.support.ajax=!!az;
if(az){bK.ajaxTransport(function(e){if(!e.crossDomain||bK.support.cors){var b5;
return{send:function(cb,b6){var b9,b7,ca=e.xhr();
if(e.username){ca.open(e.type,e.url,e.async,e.username,e.password)
}else{ca.open(e.type,e.url,e.async)
}if(e.xhrFields){for(b7 in e.xhrFields){ca[b7]=e.xhrFields[b7]
}}if(e.mimeType&&ca.overrideMimeType){ca.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!cb["X-Requested-With"]){cb["X-Requested-With"]="XMLHttpRequest"
}try{for(b7 in cb){ca.setRequestHeader(b7,cb[b7])
}}catch(b8){}ca.send((e.hasContent&&e.data)||null);
b5=function(ce,cd){var cc,cf,ci,cg;
try{if(b5&&(cd||ca.readyState===4)){b5=undefined;
if(b9){ca.onreadystatechange=bK.noop;
if(aQ){delete aj[b9]
}}if(cd){if(ca.readyState!==4){ca.abort()
}}else{cg={};
cc=ca.status;
cf=ca.getAllResponseHeaders();
if(typeof ca.responseText==="string"){cg.text=ca.responseText
}try{ci=ca.statusText
}catch(ch){ci=""
}if(!cc&&e.isLocal&&!e.crossDomain){cc=cg.text?200:404
}else{if(cc===1223){cc=204
}}}}}catch(cj){if(!cd){b6(-1,cj)
}}if(cg){b6(cc,ci,cg,cf)
}};
if(!e.async){b5()
}else{if(ca.readyState===4){setTimeout(b5)
}else{b9=++aA;
if(aQ){if(!aj){aj={};
bK(a3).unload(aQ)
}aj[b9]=b5
}ca.onreadystatechange=b5
}}},abort:function(){if(b5){b5(undefined,true)
}}}
}})
}var M,af,bT=/^(?:toggle|show|hide)$/,bL=new RegExp("^(?:([+-])=|)("+bB+")([a-z%]*)$","i"),bS=/queueHooks$/,aD=[h],a1={"*":[function(e,cb){var b7,cc,cd=this.createTween(e,cb),b8=bL.exec(cb),b9=cd.cur(),b5=+b9||0,b6=1,ca=20;
if(b8){b7=+b8[2];
cc=b8[3]||(bK.cssNumber[e]?"":"px");
if(cc!=="px"&&b5){b5=bK.css(cd.elem,e,true)||b7||1;
do{b6=b6||".5";
b5=b5/b6;
bK.style(cd.elem,e,b5+cc)
}while(b6!==(b6=cd.cur()/b9)&&b6!==1&&--ca)
}cd.unit=cc;
cd.start=b5;
cd.end=b8[1]?b5+(b8[1]+1)*b7:b7
}return cd
}]};
function bn(){setTimeout(function(){M=undefined
});
return(M=bK.now())
}function bf(b5,e){bK.each(e,function(ca,b8){var b9=(a1[ca]||[]).concat(a1["*"]),b6=0,b7=b9.length;
for(;
b6<b7;
b6++){if(b9[b6].call(b5,ca,b8)){return
}}})
}function f(b6,ca,cd){var ce,e,b9=0,b5=aD.length,cc=bK.Deferred().always(function(){delete b8.elem
}),b8=function(){if(e){return false
}var ck=M||bn(),ch=Math.max(0,b7.startTime+b7.duration-ck),cf=ch/b7.duration||0,cj=1-cf,cg=0,ci=b7.tweens.length;
for(;
cg<ci;
cg++){b7.tweens[cg].run(cj)
}cc.notifyWith(b6,[b7,cj,ch]);
if(cj<1&&ci){return ch
}else{cc.resolveWith(b6,[b7]);
return false
}},b7=cc.promise({elem:b6,props:bK.extend({},ca),opts:bK.extend(true,{specialEasing:{}},cd),originalProperties:ca,originalOptions:cd,startTime:M||bn(),duration:cd.duration,tweens:[],createTween:function(ch,cf){var cg=bK.Tween(b6,b7.opts,ch,cf,b7.opts.specialEasing[ch]||b7.opts.easing);
b7.tweens.push(cg);
return cg
},stop:function(cg){var cf=0,ch=cg?b7.tweens.length:0;
if(e){return this
}e=true;
for(;
cf<ch;
cf++){b7.tweens[cf].run(1)
}if(cg){cc.resolveWith(b6,[b7,cg])
}else{cc.rejectWith(b6,[b7,cg])
}return this
}}),cb=b7.props;
ao(cb,b7.opts.specialEasing);
for(;
b9<b5;
b9++){ce=aD[b9].call(b7,b6,cb,b7.opts);
if(ce){return ce
}}bf(b7,cb);
if(bK.isFunction(b7.opts.start)){b7.opts.start.call(b6,b7)
}bK.fx.timer(bK.extend(b8,{elem:b6,anim:b7,queue:b7.opts.queue}));
return b7.progress(b7.opts.progress).done(b7.opts.done,b7.opts.complete).fail(b7.opts.fail).always(b7.opts.always)
}function ao(b7,b9){var b8,b6,b5,ca,e;
for(b5 in b7){b6=bK.camelCase(b5);
ca=b9[b6];
b8=b7[b5];
if(bK.isArray(b8)){ca=b8[1];
b8=b7[b5]=b8[0]
}if(b5!==b6){b7[b6]=b8;
delete b7[b5]
}e=bK.cssHooks[b6];
if(e&&"expand" in e){b8=e.expand(b8);
delete b7[b6];
for(b5 in b8){if(!(b5 in b7)){b7[b5]=b8[b5];
b9[b5]=ca
}}}else{b9[b6]=ca
}}}bK.Animation=bK.extend(f,{tweener:function(b5,b8){if(bK.isFunction(b5)){b8=b5;
b5=["*"]
}else{b5=b5.split(" ")
}var b7,e=0,b6=b5.length;
for(;
e<b6;
e++){b7=b5[e];
a1[b7]=a1[b7]||[];
a1[b7].unshift(b8)
}},prefilter:function(b5,e){if(e){aD.unshift(b5)
}else{aD.push(b5)
}}});
function h(b8,ce,e){var b6,cd,b7,cg,ck,ca,cj,ci,ch,b9=this,b5=b8.style,cf={},cc=[],cb=b8.nodeType&&R(b8);
if(!e.queue){ci=bK._queueHooks(b8,"fx");
if(ci.unqueued==null){ci.unqueued=0;
ch=ci.empty.fire;
ci.empty.fire=function(){if(!ci.unqueued){ch()
}}
}ci.unqueued++;
b9.always(function(){b9.always(function(){ci.unqueued--;
if(!bK.queue(b8,"fx").length){ci.empty.fire()
}})
})
}if(b8.nodeType===1&&("height" in ce||"width" in ce)){e.overflow=[b5.overflow,b5.overflowX,b5.overflowY];
if(bK.css(b8,"display")==="inline"&&bK.css(b8,"float")==="none"){if(!bK.support.inlineBlockNeedsLayout||bF(b8.nodeName)==="inline"){b5.display="inline-block"
}else{b5.zoom=1
}}}if(e.overflow){b5.overflow="hidden";
if(!bK.support.shrinkWrapBlocks){b9.always(function(){b5.overflow=e.overflow[0];
b5.overflowX=e.overflow[1];
b5.overflowY=e.overflow[2]
})
}}for(cd in ce){cg=ce[cd];
if(bT.exec(cg)){delete ce[cd];
ca=ca||cg==="toggle";
if(cg===(cb?"hide":"show")){continue
}cc.push(cd)
}}b7=cc.length;
if(b7){ck=bK._data(b8,"fxshow")||bK._data(b8,"fxshow",{});
if("hidden" in ck){cb=ck.hidden
}if(ca){ck.hidden=!cb
}if(cb){bK(b8).show()
}else{b9.done(function(){bK(b8).hide()
})
}b9.done(function(){var cl;
bK._removeData(b8,"fxshow");
for(cl in cf){bK.style(b8,cl,cf[cl])
}});
for(cd=0;
cd<b7;
cd++){b6=cc[cd];
cj=b9.createTween(b6,cb?ck[b6]:0);
cf[b6]=ck[b6]||bK.style(b8,b6);
if(!(b6 in ck)){ck[b6]=cj.start;
if(cb){cj.end=cj.start;
cj.start=b6==="width"||b6==="height"?1:0
}}}}}function I(b6,b5,b8,e,b7){return new I.prototype.init(b6,b5,b8,e,b7)
}bK.Tween=I;
I.prototype={constructor:I,init:function(b7,b5,b9,e,b8,b6){this.elem=b7;
this.prop=b9;
this.easing=b8||"swing";
this.options=b5;
this.start=this.now=this.cur();
this.end=e;
this.unit=b6||(bK.cssNumber[b9]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b6){var b5,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=b5=bK.easing[this.easing](b6,this.options.duration*b6,0,1,this.options.duration)
}else{this.pos=b5=b6
}this.now=(this.end-this.start)*b5+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(b5){var e;
if(b5.elem[b5.prop]!=null&&(!b5.elem.style||b5.elem.style[b5.prop]==null)){return b5.elem[b5.prop]
}e=bK.css(b5.elem,b5.prop,"");
return !e||e==="auto"?0:e
},set:function(e){if(bK.fx.step[e.prop]){bK.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bK.cssProps[e.prop]]!=null||bK.cssHooks[e.prop])){bK.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bK.each(["toggle","show","hide"],function(b5,e){var b6=bK.fn[e];
bK.fn[e]=function(b7,b9,b8){return b7==null||typeof b7==="boolean"?b6.apply(this,arguments):this.animate(bJ(e,true),b7,b9,b8)
}
});
bK.fn.extend({fadeTo:function(e,b7,b6,b5){return this.filter(R).css("opacity",0).show().end().animate({opacity:b7},e,b6,b5)
},animate:function(ca,b7,b9,b8){var b6=bK.isEmptyObject(ca),e=bK.speed(b7,b9,b8),b5=function(){var cb=f(this,bK.extend({},ca),e);
b5.finish=function(){cb.stop(true)
};
if(b6||bK._data(this,"finish")){cb.stop(true)
}};
b5.finish=b5;
return b6||e.queue===false?this.each(b5):this.queue(e.queue,b5)
},stop:function(b6,b5,e){var b7=function(b8){var b9=b8.stop;
delete b8.stop;
b9(e)
};
if(typeof b6!=="string"){e=b5;
b5=b6;
b6=undefined
}if(b5&&b6!==false){this.queue(b6||"fx",[])
}return this.each(function(){var cb=true,b8=b6!=null&&b6+"queueHooks",ca=bK.timers,b9=bK._data(this);
if(b8){if(b9[b8]&&b9[b8].stop){b7(b9[b8])
}}else{for(b8 in b9){if(b9[b8]&&b9[b8].stop&&bS.test(b8)){b7(b9[b8])
}}}for(b8=ca.length;
b8--;
){if(ca[b8].elem===this&&(b6==null||ca[b8].queue===b6)){ca[b8].anim.stop(e);
cb=false;
ca.splice(b8,1)
}}if(cb||!e){bK.dequeue(this,b6)
}})
},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b7,ca=bK._data(this),b6=ca[e+"queue"],b5=ca[e+"queueHooks"],b9=bK.timers,b8=b6?b6.length:0;
ca.finish=true;
bK.queue(this,e,[]);
if(b5&&b5.cur&&b5.cur.finish){b5.cur.finish.call(this)
}for(b7=b9.length;
b7--;
){if(b9[b7].elem===this&&b9[b7].queue===e){b9[b7].anim.stop(true);
b9.splice(b7,1)
}}for(b7=0;
b7<b8;
b7++){if(b6[b7]&&b6[b7].finish){b6[b7].finish.call(this)
}}delete ca.finish
})
}});
function bJ(b6,b8){var b7,e={height:b6},b5=0;
b8=b8?1:0;
for(;
b5<4;
b5+=2-b8){b7=bV[b5];
e["margin"+b7]=e["padding"+b7]=b6
}if(b8){e.opacity=e.width=b6
}return e
}bK.each({slideDown:bJ("show"),slideUp:bJ("hide"),slideToggle:bJ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b5){bK.fn[e]=function(b6,b8,b7){return this.animate(b5,b6,b8,b7)
}
});
bK.speed=function(b6,b7,b5){var e=b6&&typeof b6==="object"?bK.extend({},b6):{complete:b5||!b5&&b7||bK.isFunction(b6)&&b6,duration:b6,easing:b5&&b7||b7&&!bK.isFunction(b7)&&b7};
e.duration=bK.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bK.fx.speeds?bK.fx.speeds[e.duration]:bK.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bK.isFunction(e.old)){e.old.call(this)
}if(e.queue){bK.dequeue(this,e.queue)
}};
return e
};
bK.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bK.timers=[];
bK.fx=I.prototype.init;
bK.fx.tick=function(){var b6,b5=bK.timers,e=0;
M=bK.now();
for(;
e<b5.length;
e++){b6=b5[e];
if(!b6()&&b5[e]===b6){b5.splice(e--,1)
}}if(!b5.length){bK.fx.stop()
}M=undefined
};
bK.fx.timer=function(e){if(e()&&bK.timers.push(e)){bK.fx.start()
}};
bK.fx.interval=13;
bK.fx.start=function(){if(!af){af=setInterval(bK.fx.tick,bK.fx.interval)
}};
bK.fx.stop=function(){clearInterval(af);
af=null
};
bK.fx.speeds={slow:600,fast:200,_default:400};
bK.fx.step={};
if(bK.expr&&bK.expr.filters){bK.expr.filters.animated=function(e){return bK.grep(bK.timers,function(b5){return e===b5.elem
}).length
}
}bK.fn.offset=function(b5){if(arguments.length){return b5===undefined?this:this.each(function(ca){bK.offset.setOffset(this,b5,ca)
})
}var e,b9,b7={top:0,left:0},b6=this[0],b8=b6&&b6.ownerDocument;
if(!b8){return
}e=b8.documentElement;
if(!bK.contains(e,b6)){return b7
}if(typeof b6.getBoundingClientRect!==aE){b7=b6.getBoundingClientRect()
}b9=bq(b8);
return{top:b7.top+(b9.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b7.left+(b9.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
};
bK.offset={setOffset:function(b7,cg,ca){var cb=bK.css(b7,"position");
if(cb==="static"){b7.style.position="relative"
}var b9=bK(b7),b5=b9.offset(),e=bK.css(b7,"top"),ce=bK.css(b7,"left"),cf=(cb==="absolute"||cb==="fixed")&&bK.inArray("auto",[e,ce])>-1,cd={},cc={},b6,b8;
if(cf){cc=b9.position();
b6=cc.top;
b8=cc.left
}else{b6=parseFloat(e)||0;
b8=parseFloat(ce)||0
}if(bK.isFunction(cg)){cg=cg.call(b7,ca,b5)
}if(cg.top!=null){cd.top=(cg.top-b5.top)+b6
}if(cg.left!=null){cd.left=(cg.left-b5.left)+b8
}if("using" in cg){cg.using.call(b7,cd)
}else{b9.css(cd)
}}};
bK.fn.extend({position:function(){if(!this[0]){return
}var b6,b7,e={top:0,left:0},b5=this[0];
if(bK.css(b5,"position")==="fixed"){b7=b5.getBoundingClientRect()
}else{b6=this.offsetParent();
b7=this.offset();
if(!bK.nodeName(b6[0],"html")){e=b6.offset()
}e.top+=bK.css(b6[0],"borderTopWidth",true);
e.left+=bK.css(b6[0],"borderLeftWidth",true)
}return{top:b7.top-e.top-bK.css(b5,"marginTop",true),left:b7.left-e.left-bK.css(b5,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||m.documentElement;
while(e&&(!bK.nodeName(e,"html")&&bK.css(e,"position")==="static")){e=e.offsetParent
}return e||m.documentElement
})
}});
bK.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b6,b5){var e=/Y/.test(b5);
bK.fn[b6]=function(b7){return bK.access(this,function(b8,cb,ca){var b9=bq(b8);
if(ca===undefined){return b9?(b5 in b9)?b9[b5]:b9.document.documentElement[cb]:b8[cb]
}if(b9){b9.scrollTo(!e?ca:bK(b9).scrollLeft(),e?ca:bK(b9).scrollTop())
}else{b8[cb]=ca
}},b6,b7,arguments.length,null)
}
});
function bq(e){return bK.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bK.each({Height:"height",Width:"width"},function(e,b5){bK.each({padding:"inner"+e,content:b5,"":"outer"+e},function(b6,b7){bK.fn[b7]=function(cb,ca){var b9=arguments.length&&(b6||typeof cb!=="boolean"),b8=b6||(cb===true||ca===true?"margin":"border");
return bK.access(this,function(cd,cc,ce){var cf;
if(bK.isWindow(cd)){return cd.document.documentElement["client"+e]
}if(cd.nodeType===9){cf=cd.documentElement;
return Math.max(cd.body["scroll"+e],cf["scroll"+e],cd.body["offset"+e],cf["offset"+e],cf["client"+e])
}return ce===undefined?bK.css(cd,cc,b8):bK.style(cd,cc,ce,b8)
},b5,b9?cb:undefined,b9,null)
}
})
});
if(a3.jQuery!=undefined&&a3.jQuery!=null){a3.originaljQuery=a3.jQuery
}a3.jQuery=a3.$=bK;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bK
})
}})(window,informaJq);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(a){var b=a.fn.jquery.split(" ")[0].split(".");
if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(jQuery),+function(a){function b(){var d=document.createElement("bootstrap"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in f){if(void 0!==d.style[c]){return{end:f[c]}
}}return !1
}a.fn.emulateTransitionEnd=function(d){var c=!1,f=this;
a(this).one("bsTransitionEnd",function(){c=!0
});
var g=function(){c||a(f).trigger(a.support.transition.end)
};
return setTimeout(g,d),this
},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(c){return a(c.target).is(this)?c.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(b){function c(g){return this.each(function(){var e=b(this),h=e.data("bs.alert");
h||e.data("bs.alert",h=new d(this)),"string"==typeof g&&h[g].call(e)
})
}var a='[data-dismiss="alert"]',d=function(g){b(g).on("click",a,this.close)
};
d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(k){function h(){g.detach().trigger("closed.bs.alert").remove()
}var l=b(this),j=l.attr("data-target");
j||(j=l.attr("href"),j=j&&j.replace(/.*(?=#[^\s]*$)/,""));
var g=b("#"===j?[]:j);
k&&k.preventDefault(),g.length||(g=l.closest(".alert")),g.trigger(k=b.Event("close.bs.alert")),k.isDefaultPrevented()||(g.removeClass("in"),b.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",h).emulateTransitionEnd(d.TRANSITION_DURATION):h())
};
var f=b.fn.alert;
b.fn.alert=c,b.fn.alert.Constructor=d,b.fn.alert.noConflict=function(){return b.fn.alert=f,this
},b(document).on("click.bs.alert.data-api",a,d.prototype.close)
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.button"),e="object"==typeof f&&f;
h||g.data("bs.button",h=new a(this,e)),"toggle"==f?h.toggle():f&&h.setState(f)
})
}var a=function(f,g){this.$element=b(f),this.options=b.extend({},a.DEFAULTS,g),this.isLoading=!1
};
a.VERSION="3.3.7",a.DEFAULTS={loadingText:"loading..."},a.prototype.setState=function(h){var f="disabled",j=this.$element,k=j.is("input")?"val":"html",g=j.data();
h+="Text",null==g.resetText&&j.data("resetText",j[k]()),setTimeout(b.proxy(function(){j[k](null==g[h]?this.options[h]:g[h]),"loadingText"==h?(this.isLoading=!0,j.addClass(f).attr(f,f).prop(f,!0)):this.isLoading&&(this.isLoading=!1,j.removeClass(f).removeAttr(f).prop(f,!1))
},this),0)
},a.prototype.toggle=function(){var g=!0,h=this.$element.closest('[data-toggle="buttons"]');
if(h.length){var f=this.$element.find("input");
"radio"==f.prop("type")?(f.prop("checked")&&(g=!1),h.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==f.prop("type")&&(f.prop("checked")!==this.$element.hasClass("active")&&(g=!1),this.$element.toggleClass("active")),f.prop("checked",this.$element.hasClass("active")),g&&f.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var d=b.fn.button;
b.fn.button=c,b.fn.button.Constructor=a,b.fn.button.noConflict=function(){return b.fn.button=d,this
},b(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var f=b(e.target).closest(".btn");
c.call(f,"toggle"),b(e.target).is('input[type="radio"], input[type="checkbox"]')||(e.preventDefault(),f.is("input,button")?f.trigger("focus"):f.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){b(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))
})
}(jQuery),+function(b){function c(g){return this.each(function(){var j=b(this),k=j.data("bs.carousel"),h=b.extend({},a.DEFAULTS,j.data(),"object"==typeof g&&g),e="string"==typeof g?g:h.slide;
k||j.data("bs.carousel",k=new a(this,h)),"number"==typeof g?k.to(g):e?k[e]():h.interval&&k.pause().cycle()
})
}var a=function(h,g){this.$element=b(h),this.$indicators=this.$element.find(".carousel-indicators"),this.options=g,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))
};
a.VERSION="3.3.7",a.TRANSITION_DURATION=600,a.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},a.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}e.preventDefault()
}},a.prototype.cycle=function(g){return g||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval)),this
},a.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)
},a.prototype.getItemForDirection=function(h,k){var g=this.getItemIndex(k),l="prev"==h&&0===g||"next"==h&&g==this.$items.length-1;
if(l&&!this.options.wrap){return k
}var m="prev"==h?-1:1,j=(g+m)%this.$items.length;
return this.$items.eq(j)
},a.prototype.to=function(h){var j=this,g=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return h>this.$items.length-1||0>h?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){j.to(h)
}):g==h?this.pause().cycle():this.slide(h>g?"next":"prev",this.$items.eq(h))
},a.prototype.pause=function(g){return g||(this.paused=!0),this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},a.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},a.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},a.prototype.slide=function(u,k){var m=this.$element.find(".item.active"),y=k||this.getItemForDirection(u,m),x=this.interval,g="next"==u?"left":"right",q=this;
if(y.hasClass("active")){return this.sliding=!1
}var t=y[0],v=b.Event("slide.bs.carousel",{relatedTarget:t,direction:g});
if(this.$element.trigger(v),!v.isDefaultPrevented()){if(this.sliding=!0,x&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var j=b(this.$indicators.children()[this.getItemIndex(y)]);
j&&j.addClass("active")
}var w=b.Event("slid.bs.carousel",{relatedTarget:t,direction:g});
return b.support.transition&&this.$element.hasClass("slide")?(y.addClass(u),y[0].offsetWidth,m.addClass(g),y.addClass(g),m.one("bsTransitionEnd",function(){y.removeClass([u,g].join(" ")).addClass("active"),m.removeClass(["active",g].join(" ")),q.sliding=!1,setTimeout(function(){q.$element.trigger(w)
},0)
}).emulateTransitionEnd(a.TRANSITION_DURATION)):(m.removeClass("active"),y.addClass("active"),this.sliding=!1,this.$element.trigger(w)),x&&this.cycle(),this
}};
var d=b.fn.carousel;
b.fn.carousel=c,b.fn.carousel.Constructor=a,b.fn.carousel.noConflict=function(){return b.fn.carousel=d,this
};
var f=function(g){var k,l=b(this),h=b(l.attr("data-target")||(k=l.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,""));
if(h.hasClass("carousel")){var e=b.extend({},h.data(),l.data()),j=l.attr("data-slide-to");
j&&(e.interval=!1),c.call(h,e),j&&h.data("bs.carousel").to(j),g.preventDefault()
}};
b(document).on("click.bs.carousel.data-api","[data-slide]",f).on("click.bs.carousel.data-api","[data-slide-to]",f),b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var e=b(this);
c.call(e,e.data())
})
})
}(jQuery),+function(b){function c(h){var g,j=h.attr("data-target")||(g=h.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return b(j)
}function a(g){return this.each(function(){var e=b(this),j=e.data("bs.collapse"),h=b.extend({},d.DEFAULTS,e.data(),"object"==typeof g&&g);
!j&&h.toggle&&/show|hide/.test(g)&&(h.toggle=!1),j||e.data("bs.collapse",j=new d(this,h)),"string"==typeof g&&j[g]()
})
}var d=function(h,g){this.$element=b(h),this.options=b.extend({},d.DEFAULTS,g),this.$trigger=b('[data-toggle="collapse"][href="#'+h.id+'"],[data-toggle="collapse"][data-target="#'+h.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var e=this.$element.hasClass("width");
return e?"width":"height"
},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var m,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(o&&o.length&&(m=o.data("bs.collapse"),m&&m.transitioning))){var j=b.Event("show.bs.collapse");
if(this.$element.trigger(j),!j.isDefaultPrevented()){o&&o.length&&(a.call(o,"hide"),m||o.data("bs.collapse",null));
var h=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[h](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var k=function(){this.$element.removeClass("collapsing").addClass("collapse in")[h](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!b.support.transition){return k.call(this)
}var g=b.camelCase(["scroll",h].join("-"));
this.$element.one("bsTransitionEnd",b.proxy(k,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[h](this.$element[0][g])
}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var h=b.Event("hide.bs.collapse");
if(this.$element.trigger(h),!h.isDefaultPrevented()){var g=this.dimension();
this.$element[g](this.$element[g]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var j=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return b.support.transition?void this.$element[g](0).one("bsTransitionEnd",b.proxy(j,this)).emulateTransitionEnd(d.TRANSITION_DURATION):j.call(this)
}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},d.prototype.getParent=function(){return b(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(b.proxy(function(e,g){var h=b(g);
this.addAriaAndCollapsedClass(c(h),h)
},this)).end()
},d.prototype.addAriaAndCollapsedClass=function(h,j){var g=h.hasClass("in");
h.attr("aria-expanded",g),j.toggleClass("collapsed",!g).attr("aria-expanded",g)
};
var f=b.fn.collapse;
b.fn.collapse=a,b.fn.collapse.Constructor=d,b.fn.collapse.noConflict=function(){return b.fn.collapse=f,this
},b(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(j){var k=b(this);
k.attr("data-target")||j.preventDefault();
var g=c(k),e=g.data("bs.collapse"),h=e?"toggle":k.data();
a.call(g,h)
})
}(jQuery),+function(d){function h(l){var a=l.attr("data-target");
a||(a=l.attr("href"),a=a&&/#[A-Za-z]/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));
var m=a&&d(a);
return m&&m.length?m:l.parent()
}function c(a){a&&3===a.which||(d(k).remove(),d(f).each(function(){var l=d(this),m=h(l),e={relatedTarget:this};
m.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&d.contains(m[0],a.target)||(m.trigger(a=d.Event("hide.bs.dropdown",e)),a.isDefaultPrevented()||(l.attr("aria-expanded","false"),m.removeClass("open").trigger(d.Event("hidden.bs.dropdown",e)))))
}))
}function j(a){return this.each(function(){var e=d(this),l=e.data("bs.dropdown");
l||e.data("bs.dropdown",l=new b(this)),"string"==typeof a&&l[a].call(e)
})
}var k=".dropdown-backdrop",f='[data-toggle="dropdown"]',b=function(a){d(a).on("click.bs.dropdown",this.toggle)
};
b.VERSION="3.3.7",b.prototype.toggle=function(p){var q=d(this);
if(!q.is(".disabled, :disabled")){var l=h(q),e=l.hasClass("open");
if(c(),!e){"ontouchstart" in document.documentElement&&!l.closest(".navbar-nav").length&&d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click",c);
var m={relatedTarget:this};
if(l.trigger(p=d.Event("show.bs.dropdown",m)),p.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),l.toggleClass("open").trigger(d.Event("shown.bs.dropdown",m))
}return !1
}},b.prototype.keydown=function(p){if(/(38|40|27|32)/.test(p.which)&&!/input|textarea/i.test(p.target.tagName)){var u=d(this);
if(p.preventDefault(),p.stopPropagation(),!u.is(".disabled, :disabled")){var v=h(u),m=v.hasClass("open");
if(!m&&27!=p.which||m&&27==p.which){return 27==p.which&&v.find(f).trigger("focus"),u.trigger("click")
}var t=" li:not(.disabled):visible a",e=v.find(".dropdown-menu"+t);
if(e.length){var q=e.index(p.target);
38==p.which&&q>0&&q--,40==p.which&&q<e.length-1&&q++,~q||(q=0),e.eq(q).trigger("focus")
}}}};
var g=d.fn.dropdown;
d.fn.dropdown=j,d.fn.dropdown.Constructor=b,d.fn.dropdown.noConflict=function(){return d.fn.dropdown=g,this
},d(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",f,b.prototype.toggle).on("keydown.bs.dropdown.data-api",f,b.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",b.prototype.keydown)
}(jQuery),+function(b){function c(f,g){return this.each(function(){var j=b(this),h=j.data("bs.modal"),e=b.extend({},a.DEFAULTS,j.data(),"object"==typeof f&&f);
h||j.data("bs.modal",h=new a(this,e)),"string"==typeof f?h[f](g):e.show&&h.show(g)
})
}var a=function(g,f){this.options=f,this.$body=b(document.body),this.$element=b(g),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,b.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
a.VERSION="3.3.7",a.TRANSITION_DURATION=300,a.BACKDROP_TRANSITION_DURATION=150,a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
},a.prototype.show=function(f){var g=this,h=b.Event("show.bs.modal",{relatedTarget:f});
this.$element.trigger(h),this.isShown||h.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){g.$element.one("mouseup.dismiss.bs.modal",function(j){b(j.target).is(g.$element)&&(g.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var j=b.support.transition&&g.$element.hasClass("fade");
g.$element.parent().length||g.$element.appendTo(g.$body),g.$element.show().scrollTop(0),g.adjustDialog(),j&&g.$element[0].offsetWidth,g.$element.addClass("in"),g.enforceFocus();
var e=b.Event("shown.bs.modal",{relatedTarget:f});
j?g.$dialog.one("bsTransitionEnd",function(){g.$element.trigger("focus").trigger(e)
}).emulateTransitionEnd(a.TRANSITION_DURATION):g.$element.trigger("focus").trigger(e)
}))
},a.prototype.hide=function(f){f&&f.preventDefault(),f=b.Event("hide.bs.modal"),this.$element.trigger(f),this.isShown&&!f.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(a.TRANSITION_DURATION):this.hideModal())
},a.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(e){document===e.target||this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")
},this))
},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(e){27==e.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},a.prototype.resize=function(){this.isShown?b(window).on("resize.bs.modal",b.proxy(this.handleUpdate,this)):b(window).off("resize.bs.modal")
},a.prototype.hideModal=function(){var e=this;
this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")
})
},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},a.prototype.backdrop=function(h){var j=this,k=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var g=b.support.transition&&k;
if(this.$backdrop=b(document.createElement("div")).addClass("modal-backdrop "+k).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",b.proxy(function(e){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),g&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!h){return
}g?this.$backdrop.one("bsTransitionEnd",h).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):h()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var f=function(){j.removeBackdrop(),h&&h()
};
b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION):f()
}else{h&&h()
}}},a.prototype.handleUpdate=function(){this.adjustDialog()
},a.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
},a.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},a.prototype.checkScrollbar=function(){var f=window.innerWidth;
if(!f){var g=document.documentElement.getBoundingClientRect();
f=g.right-Math.abs(g.left)
}this.bodyIsOverflowing=document.body.clientWidth<f,this.scrollbarWidth=this.measureScrollbar()
},a.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)
},a.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},a.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure",this.$body.append(f);
var g=f.offsetWidth-f.clientWidth;
return this.$body[0].removeChild(f),g
};
var d=b.fn.modal;
b.fn.modal=c,b.fn.modal.Constructor=a,b.fn.modal.noConflict=function(){return b.fn.modal=d,this
},b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(f){var h=b(this),j=h.attr("href"),g=b(h.attr("data-target")||j&&j.replace(/.*(?=#[^\s]+$)/,"")),e=g.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(j)&&j},g.data(),h.data());
h.is("a")&&f.preventDefault(),g.one("show.bs.modal",function(k){k.isDefaultPrevented()||g.one("hidden.bs.modal",function(){h.is(":visible")&&h.trigger("focus")
})
}),c.call(g,e,this)
})
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.tooltip"),e="object"==typeof f&&f;
(h||!/destroy|hide/.test(f))&&(h||g.data("bs.tooltip",h=new a(this,e)),"string"==typeof f&&h[f]())
})
}var a=function(f,g){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",f,g)
};
a.VERSION="3.3.7",a.TRANSITION_DURATION=150,a.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},a.prototype.init=function(m,h,p){if(this.enabled=!0,this.type=m,this.$element=b(h),this.options=this.getOptions(p),this.$viewport=this.options.viewport&&b(b.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var q=this.options.trigger.split(" "),j=q.length;
j--;
){var g=q[j];
if("click"==g){this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this))
}else{if("manual"!=g){var k="hover"==g?"mouseenter":"focusin",f="hover"==g?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,b.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,b.proxy(this.leave,this))
}}}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},a.prototype.getDefaults=function(){return a.DEFAULTS
},a.prototype.getOptions=function(f){return f=b.extend({},this.getDefaults(),this.$element.data(),f),f.delay&&"number"==typeof f.delay&&(f.delay={show:f.delay,hide:f.delay}),f
},a.prototype.getDelegateOptions=function(){var g={},f=this.getDefaults();
return this._options&&b.each(this._options,function(e,h){f[e]!=h&&(g[e]=h)
}),g
},a.prototype.enter=function(g){var f=g instanceof this.constructor?g:b(g.currentTarget).data("bs."+this.type);
return f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f)),g instanceof b.Event&&(f.inState["focusin"==g.type?"focus":"hover"]=!0),f.tip().hasClass("in")||"in"==f.hoverState?void (f.hoverState="in"):(clearTimeout(f.timeout),f.hoverState="in",f.options.delay&&f.options.delay.show?void (f.timeout=setTimeout(function(){"in"==f.hoverState&&f.show()
},f.options.delay.show)):f.show())
},a.prototype.isInStateTrue=function(){for(var e in this.inState){if(this.inState[e]){return !0
}}return !1
},a.prototype.leave=function(g){var f=g instanceof this.constructor?g:b(g.currentTarget).data("bs."+this.type);
return f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f)),g instanceof b.Event&&(f.inState["focusout"==g.type?"focus":"hover"]=!1),f.isInStateTrue()?void 0:(clearTimeout(f.timeout),f.hoverState="out",f.options.delay&&f.options.delay.hide?void (f.timeout=setTimeout(function(){"out"==f.hoverState&&f.hide()
},f.options.delay.hide)):f.hide())
},a.prototype.show=function(){var A=b.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(A);
var q=b.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(A.isDefaultPrevented()||!q){return
}var t=this,F=this.tip(),D=this.getUID(this.type);
this.setContent(),F.attr("id",D),this.$element.attr("aria-describedby",D),this.options.animation&&F.addClass("fade");
var j="function"==typeof this.options.placement?this.options.placement.call(this,F[0],this.$element[0]):this.options.placement,w=/\s?auto?\s?/i,x=w.test(j);
x&&(j=j.replace(w,"")||"top"),F.detach().css({top:0,left:0,display:"block"}).addClass(j).data("bs."+this.type,this),this.options.container?F.appendTo(this.options.container):F.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var B=this.getPosition(),k=F[0].offsetWidth,C=F[0].offsetHeight;
if(x){var z=j,E=this.getPosition(this.$viewport);
j="bottom"==j&&B.bottom+C>E.bottom?"top":"top"==j&&B.top-C<E.top?"bottom":"right"==j&&B.right+k>E.width?"left":"left"==j&&B.left-k<E.left?"right":j,F.removeClass(z).addClass(j)
}var y=this.getCalculatedOffset(j,B,k,C);
this.applyPlacement(y,j);
var v=function(){var e=t.hoverState;
t.$element.trigger("shown.bs."+t.type),t.hoverState=null,"out"==e&&t.leave(t)
};
b.support.transition&&this.$tip.hasClass("fade")?F.one("bsTransitionEnd",v).emulateTransitionEnd(a.TRANSITION_DURATION):v()
}},a.prototype.applyPlacement=function(w,t){var k=this.tip(),m=k[0].offsetWidth,A=k[0].offsetHeight,z=parseInt(k.css("margin-top"),10),g=parseInt(k.css("margin-left"),10);
isNaN(z)&&(z=0),isNaN(g)&&(g=0),w.top+=z,w.left+=g,b.offset.setOffset(k[0],b.extend({using:function(e){k.css({top:Math.round(e.top),left:Math.round(e.left)})
}},w),0),k.addClass("in");
var q=k[0].offsetWidth,u=k[0].offsetHeight;
"top"==t&&u!=A&&(w.top=w.top+A-u);
var x=this.getViewportAdjustedDelta(t,w,q,u);
x.left?w.left+=x.left:w.top+=x.top;
var j=/top|bottom/.test(t),y=j?2*x.left-m+q:2*x.top-A+u,v=j?"offsetWidth":"offsetHeight";
k.offset(w),this.replaceArrow(y,k[0][v],j)
},a.prototype.replaceArrow=function(g,h,f){this.arrow().css(f?"left":"top",50*(1-g/h)+"%").css(f?"top":"left","")
},a.prototype.setContent=function(){var f=this.tip(),g=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](g),f.removeClass("fade in top bottom left right")
},a.prototype.hide=function(h){function j(){"in"!=k.hoverState&&g.detach(),k.$element&&k.$element.removeAttr("aria-describedby").trigger("hidden.bs."+k.type),h&&h()
}var k=this,g=b(this.$tip),f=b.Event("hide.bs."+this.type);
return this.$element.trigger(f),f.isDefaultPrevented()?void 0:(g.removeClass("in"),b.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",j).emulateTransitionEnd(a.TRANSITION_DURATION):j(),this.hoverState=null,this)
},a.prototype.fixTitle=function(){var e=this.$element;
(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")
},a.prototype.hasContent=function(){return this.getTitle()
},a.prototype.getPosition=function(m){m=m||this.$element;
var h=m[0],p="BODY"==h.tagName,q=h.getBoundingClientRect();
null==q.width&&(q=b.extend({},q,{width:q.right-q.left,height:q.bottom-q.top}));
var j=window.SVGElement&&h instanceof window.SVGElement,g=p?{top:0,left:0}:j?null:m.offset(),k={scroll:p?document.documentElement.scrollTop||document.body.scrollTop:m.scrollTop()},f=p?{width:b(window).width(),height:b(window).height()}:null;
return b.extend({},q,k,f,g)
},a.prototype.getCalculatedOffset=function(g,h,f,j){return"bottom"==g?{top:h.top+h.height,left:h.left+h.width/2-f/2}:"top"==g?{top:h.top-j,left:h.left+h.width/2-f/2}:"left"==g?{top:h.top+h.height/2-j/2,left:h.left-f}:{top:h.top+h.height/2-j/2,left:h.left+h.width}
},a.prototype.getViewportAdjustedDelta=function(w,q,m,g){var j={top:0,left:0};
if(!this.$viewport){return j
}var x=this.options.viewport&&this.options.viewport.padding||0,v=this.getPosition(this.$viewport);
if(/right|left/.test(w)){var f=q.top-x-v.scroll,k=q.top+x-v.scroll+g;
f<v.top?j.top=v.top-f:k>v.top+v.height&&(j.top=v.top+v.height-k)
}else{var p=q.left-x,u=q.left+x+m;
p<v.left?j.left=v.left-p:u>v.right&&(j.left=v.left+v.width-u)
}return j
},a.prototype.getTitle=function(){var g,h=this.$element,f=this.options;
return g=h.attr("data-original-title")||("function"==typeof f.title?f.title.call(h[0]):f.title)
},a.prototype.getUID=function(e){do{e+=~~(1000000*Math.random())
}while(document.getElementById(e));
return e
},a.prototype.tip=function(){if(!this.$tip&&(this.$tip=b(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},a.prototype.enable=function(){this.enabled=!0
},a.prototype.disable=function(){this.enabled=!1
},a.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},a.prototype.toggle=function(g){var f=this;
g&&(f=b(g.currentTarget).data("bs."+this.type),f||(f=new this.constructor(g.currentTarget,this.getDelegateOptions()),b(g.currentTarget).data("bs."+this.type,f))),g?(f.inState.click=!f.inState.click,f.isInStateTrue()?f.enter(f):f.leave(f)):f.tip().hasClass("in")?f.leave(f):f.enter(f)
},a.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null,e.$element=null
})
};
var d=b.fn.tooltip;
b.fn.tooltip=c,b.fn.tooltip.Constructor=a,b.fn.tooltip.noConflict=function(){return b.fn.tooltip=d,this
}
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.popover"),e="object"==typeof f&&f;
(h||!/destroy|hide/.test(f))&&(h||g.data("bs.popover",h=new a(this,e)),"string"==typeof f&&h[f]())
})
}var a=function(f,g){this.init("popover",f,g)
};
if(!b.fn.tooltip){throw new Error("Popover requires tooltip.js")
}a.VERSION="3.3.7",a.DEFAULTS=b.extend({},b.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.prototype=b.extend({},b.fn.tooltip.Constructor.prototype),a.prototype.constructor=a,a.prototype.getDefaults=function(){return a.DEFAULTS
},a.prototype.setContent=function(){var g=this.tip(),h=this.getTitle(),f=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](h),g.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof f?"html":"append":"text"](f),g.removeClass("fade top bottom left right in"),g.find(".popover-title").html()||g.find(".popover-title").hide()
},a.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},a.prototype.getContent=function(){var f=this.$element,g=this.options;
return f.attr("data-content")||("function"==typeof g.content?g.content.call(f[0]):g.content)
},a.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var d=b.fn.popover;
b.fn.popover=c,b.fn.popover.Constructor=a,b.fn.popover.noConflict=function(){return b.fn.popover=d,this
}
}(jQuery),+function(b){function c(e,f){this.$body=b(document.body),this.$scrollElement=b(b(e).is(document.body)?window:e),this.options=b.extend({},c.DEFAULTS,f),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this)),this.refresh(),this.process()
}function a(e){return this.each(function(){var g=b(this),h=g.data("bs.scrollspy"),f="object"==typeof e&&e;
h||g.data("bs.scrollspy",h=new c(this,f)),"string"==typeof e&&h[e]()
})
}c.VERSION="3.3.7",c.DEFAULTS={offset:10},c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},c.prototype.refresh=function(){var g=this,f="offset",h=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),b.isWindow(this.$scrollElement[0])||(f="position",h=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var k=b(this),l=k.data("target")||k.attr("href"),j=/^#./.test(l)&&b(l);
return j&&j.length&&j.is(":visible")&&[[j[f]().top+h,l]]||null
}).sort(function(j,k){return j[0]-k[0]
}).each(function(){g.offsets.push(this[0]),g.targets.push(this[1])
})
},c.prototype.process=function(){var h,k=this.$scrollElement.scrollTop()+this.options.offset,g=this.getScrollHeight(),l=this.options.offset+g-this.$scrollElement.height(),m=this.offsets,j=this.targets,f=this.activeTarget;
if(this.scrollHeight!=g&&this.refresh(),k>=l){return f!=(h=j[j.length-1])&&this.activate(h)
}if(f&&k<m[0]){return this.activeTarget=null,this.clear()
}for(h=m.length;
h--;
){f!=j[h]&&k>=m[h]&&(void 0===m[h+1]||k<m[h+1])&&this.activate(j[h])
}},c.prototype.activate=function(g){this.activeTarget=g,this.clear();
var f=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]',h=b(f).parents("li").addClass("active");
h.parent(".dropdown-menu").length&&(h=h.closest("li.dropdown").addClass("active")),h.trigger("activate.bs.scrollspy")
},c.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var d=b.fn.scrollspy;
b.fn.scrollspy=a,b.fn.scrollspy.Constructor=c,b.fn.scrollspy.noConflict=function(){return b.fn.scrollspy=d,this
},b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var f=b(this);
a.call(f,f.data())
})
})
}(jQuery),+function(b){function c(g){return this.each(function(){var e=b(this),h=e.data("bs.tab");
h||e.data("bs.tab",h=new a(this)),"string"==typeof g&&h[g]()
})
}var a=function(g){this.element=b(g)
};
a.VERSION="3.3.7",a.TRANSITION_DURATION=150,a.prototype.show=function(){var l=this.element,h=l.closest("ul:not(.dropdown-menu)"),m=l.data("target");
if(m||(m=l.attr("href"),m=m&&m.replace(/.*(?=#[^\s]*$)/,"")),!l.parent("li").hasClass("active")){var p=h.find(".active:last a"),j=b.Event("hide.bs.tab",{relatedTarget:l[0]}),g=b.Event("show.bs.tab",{relatedTarget:p[0]});
if(p.trigger(j),l.trigger(g),!g.isDefaultPrevented()&&!j.isDefaultPrevented()){var k=b(m);
this.activate(l.closest("li"),h),this.activate(k,k.parent(),function(){p.trigger({type:"hidden.bs.tab",relatedTarget:l[0]}),l.trigger({type:"shown.bs.tab",relatedTarget:p[0]})
})
}}},a.prototype.activate=function(k,l,m){function h(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').removeAttr("aria-expanded"),k.addClass("active").find('[data-toggle="tab"]').removeAttr("aria-expanded"),j?(k[0].offsetWidth,k.addClass("in")):k.removeClass("fade"),k.parent(".dropdown-menu").length&&k.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').removeAttr("aria-expanded"),m&&m()
}var g=l.find("> .active"),j=m&&b.support.transition&&(g.length&&g.hasClass("fade")||!!l.find("> .fade").length);
g.length&&j?g.one("bsTransitionEnd",h).emulateTransitionEnd(a.TRANSITION_DURATION):h(),g.removeClass("in")
};
var d=b.fn.tab;
b.fn.tab=c,b.fn.tab.Constructor=a,b.fn.tab.noConflict=function(){return b.fn.tab=d,this
};
var f=function(e){e.preventDefault(),c.call(b(this),"show")
};
b(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',f).on("click.bs.tab.data-api",'[data-toggle="pill"]',f)
}(jQuery),+function(b){function c(f){return this.each(function(){var g=b(this),h=g.data("bs.affix"),e="object"==typeof f&&f;
h||g.data("bs.affix",h=new a(this,e)),"string"==typeof f&&h[f]()
})
}var a=function(f,g){this.options=b.extend({},a.DEFAULTS,g),this.$target=b(this.options.target).on("scroll.bs.affix.data-api",b.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",b.proxy(this.checkPositionWithEventLoop,this)),this.$element=b(f),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
a.VERSION="3.3.7",a.RESET="affix affix-top affix-bottom",a.DEFAULTS={offset:0,target:window},a.prototype.getState=function(v,q,m,g){var j=this.$target.scrollTop(),w=this.$element.offset(),u=this.$target.height();
if(null!=m&&"top"==this.affixed){return m>j?"top":!1
}if("bottom"==this.affixed){return null!=m?j+this.unpin<=w.top?!1:"bottom":v-g>=j+u?!1:"bottom"
}var f=null==this.affixed,k=f?j:w.top,p=f?u:q;
return null!=m&&m>=j?"top":null!=g&&k+p>=v-g?"bottom":!1
},a.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(a.RESET).addClass("affix");
var f=this.$target.scrollTop(),g=this.$element.offset();
return this.pinnedOffset=g.top-f
},a.prototype.checkPositionWithEventLoop=function(){setTimeout(b.proxy(this.checkPosition,this),1)
},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var p=this.$element.height(),q=this.options.offset,t=q.top,k=q.bottom,g=Math.max(b(document).height(),b(document.body).height());
"object"!=typeof q&&(k=t=q),"function"==typeof t&&(t=q.top(this.$element)),"function"==typeof k&&(k=q.bottom(this.$element));
var m=this.getState(g,p,t,k);
if(this.affixed!=m){null!=this.unpin&&this.$element.css("top","");
var f="affix"+(m?"-"+m:""),j=b.Event(f+".bs.affix");
if(this.$element.trigger(j),j.isDefaultPrevented()){return
}this.affixed=m,this.unpin="bottom"==m?this.getPinnedOffset():null,this.$element.removeClass(a.RESET).addClass(f).trigger(f.replace("affix","affixed")+".bs.affix")
}"bottom"==m&&this.$element.offset({top:g-p-k})
}};
var d=b.fn.affix;
b.fn.affix=c,b.fn.affix.Constructor=a,b.fn.affix.noConflict=function(){return b.fn.affix=d,this
},b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var e=b(this),f=e.data();
f.offset=f.offset||{},null!=f.offsetBottom&&(f.offset.bottom=f.offsetBottom),null!=f.offsetTop&&(f.offset.top=f.offsetTop),c.call(e,f)
})
})
}(jQuery);
!function(b){var a=function(d,c){this.options=c;
this.$tabs=b(d);
this._accordionVisible=false;
this._initAccordion();
this._checkStateOnResize();
var e=this;
setTimeout(function(){e.checkState()
},0)
};
a.DEFAULTS={accordionClass:"visible-xs",tabsClass:"hidden-xs",accordionTemplate:function(e,c,f,d){return'<div class="panel panel-default">   <div class="panel-heading">      <h4 class="panel-title">      </h4>   </div>   <div id="'+c+'" class="panel-collapse collapse '+(d?"in":"")+'">       <div class="panel-body js-tabcollapse-panel-body">       </div>   </div></div>'
}};
a.prototype.checkState=function(){if(this.$tabs.is(":visible")&&this._accordionVisible){this.showTabs();
this._accordionVisible=false
}else{if(this.$accordion.is(":visible")&&!this._accordionVisible){this.showAccordion();
this._accordionVisible=true
}}};
a.prototype.showTabs=function(){var d=this;
this.$tabs.trigger(b.Event("show-tabs.bs.tabcollapse"));
var e=this.$accordion.find(".js-tabcollapse-panel-heading").detach();
e.each(function(){var g=b(this),j=g.data("bs.tabcollapse.parentLi");
var h=d._panelHeadingToTabHeading(g);
j.removeClass("active");
if(j.parent().hasClass("dropdown-menu")&&!j.siblings("li").hasClass("active")){j.parent().parent().removeClass("active")
}if(!h.hasClass("collapsed")){j.addClass("active");
if(j.parent().hasClass("dropdown-menu")){j.parent().parent().addClass("active")
}}else{h.removeClass("collapsed")
}j.append(g)
});
if(!b("li").hasClass("active")){b("li").first().addClass("active")
}var c=this.$accordion.find(".js-tabcollapse-panel-body");
c.each(function(){var h=b(this),g=h.data("bs.tabcollapse.tabpane");
g.append(h.contents().detach())
});
this.$accordion.html("");
if(this.options.updateLinks){var f=this.getTabContentElement();
f.find('[data-toggle-was="tab"], [data-toggle-was="pill"]').each(function(){var h=b(this);
var g=h.attr("href").replace(/-collapse$/g,"");
h.attr({"data-toggle":h.attr("data-toggle-was"),"data-toggle-was":"","data-parent":"",href:g})
})
}this.$tabs.trigger(b.Event("shown-tabs.bs.tabcollapse"))
};
a.prototype.getTabContentElement=function(){var c=b(this.options.tabContentSelector);
if(c.length===0){c=this.$tabs.siblings(".tab-content")
}return c
};
a.prototype.showAccordion=function(){this.$tabs.trigger(b.Event("show-accordion.bs.tabcollapse"));
var d=this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'),c=this;
d.each(function(){var g=b(this),h=g.parent();
g.data("bs.tabcollapse.parentLi",h);
c.$accordion.append(c._createAccordionGroup(c.$accordion.attr("id"),g.detach()))
});
if(this.options.updateLinks){var f=this.$accordion.attr("id");
var e=this.$accordion.find(".js-tabcollapse-panel-body");
e.find('[data-toggle="tab"], [data-toggle="pill"]').each(function(){var h=b(this);
var g=h.attr("href")+"-collapse";
h.attr({"data-toggle-was":h.attr("data-toggle"),"data-toggle":"collapse","data-parent":"#"+f,href:g})
})
}this.$tabs.trigger(b.Event("shown-accordion.bs.tabcollapse"))
};
a.prototype._panelHeadingToTabHeading=function(d){var c=d.attr("href").replace(/-collapse$/g,"");
d.attr({"data-toggle":"tab",href:c,"data-parent":""});
return d
};
a.prototype._tabHeadingToPanelHeading=function(d,c,f,e){d.addClass("js-tabcollapse-panel-heading "+(e?"":"collapsed"));
d.attr({"data-toggle":"collapse","data-parent":"#"+f,href:"#"+c});
return d
};
a.prototype._checkStateOnResize=function(){var c=this;
b(window).resize(function(){clearTimeout(c._resizeTimeout);
c._resizeTimeout=setTimeout(function(){c.checkState()
},100)
})
};
a.prototype._initAccordion=function(){var d=function(){var f="",g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var h=0;
h<5;
h++){f+=g.charAt(Math.floor(Math.random()*g.length))
}return f
};
var e=this.$tabs.attr("id"),c=(e?e:d())+"-accordion";
this.$accordion=b('<div class="panel-group '+this.options.accordionClass+'" id="'+c+'"></div>');
this.$tabs.after(this.$accordion);
this.$tabs.addClass(this.options.tabsClass);
this.getTabContentElement().addClass(this.options.tabsClass)
};
a.prototype._createAccordionGroup=function(j,f){var e=f.attr("data-target"),g=f.data("bs.tabcollapse.parentLi").is(".active");
if(!e){e=f.attr("href");
e=e&&e.replace(/.*(?=#[^\s]*$)/,"")
}var c=b(e),d=c.attr("id")+"-collapse",h=b(this.options.accordionTemplate(f,d,j,g));
h.find(".panel-heading > .panel-title").append(this._tabHeadingToPanelHeading(f,d,j,g));
h.find(".panel-body").append(c.contents().detach()).data("bs.tabcollapse.tabpane",c);
return h
};
b.fn.tabCollapse=function(c){return this.each(function(){var f=b(this);
var e=f.data("bs.tabcollapse");
var d=b.extend({},a.DEFAULTS,f.data(),typeof c==="object"&&c);
if(!e){f.data("bs.tabcollapse",new a(this,d))
}})
};
b.fn.tabCollapse.Constructor=a
}(window.jQuery);
/*!
* Parsley.js
* Version 2.8.0 - built Wed, Sep 13th 2017, 11:04 pm
* http://parsleyjs.org
* Guillaume Potier - <guillaume@wisembly.com>
* Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
* MIT Licensed
*/
;
function _toConsumableArray(c){if(Array.isArray(c)){for(var b=0,a=Array(c.length);
b<c.length;
b++){a[b]=c[b]
}return a
}return Array.from(c)
}var _slice=Array.prototype.slice,_slicedToArray=function(){function a(h,k){var g=[],d=!0,b=!1,m=void 0;
try{for(var j,c=h[Symbol.iterator]();
!(d=(j=c.next()).done)&&(g.push(j.value),!k||g.length!==k);
d=!0){}}catch(f){b=!0,m=f
}finally{try{!d&&c["return"]&&c["return"]()
}finally{if(b){throw m
}}}return g
}return function(c,b){if(Array.isArray(c)){return c
}if(Symbol.iterator in Object(c)){return a(c,b)
}throw new TypeError("Invalid attempt to destructure non-iterable instance")
}
}(),_extends=Object.assign||function(c){for(var b=1;
b<arguments.length;
b++){var a=arguments[b];
for(var d in a){Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d])
}}return c
};
!function(b,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],a):b.parsley=a(b.jQuery)
}(this,function(at){function ae(b,a){return b.parsleyAdaptedCallback||(b.parsleyAdaptedCallback=function(){var c=Array.prototype.slice.call(arguments,0);
c.unshift(this),b.apply(a||K,c)
}),b.parsleyAdaptedCallback
}function ao(a){return 0===a.lastIndexOf(U,0)?a.substr(U.length):a
}function ak(){var b=this,a=window||global;
_extends(this,{isNativeEvent:function(c){return c.originalEvent&&c.originalEvent.isTrusted!==!1
},fakeInputEvent:function(c){b.isNativeEvent(c)&&at(c.target).trigger("input")
},misbehaves:function(c){b.isNativeEvent(c)&&(b.behavesOk(c),at(document).on("change.inputevent",c.data.selector,b.fakeInputEvent),b.fakeInputEvent(c))
},behavesOk:function(c){b.isNativeEvent(c)&&at(document).off("input.inputevent",c.data.selector,b.behavesOk).off("change.inputevent",c.data.selector,b.misbehaves)
},install:function(){if(!a.inputEventPatched){a.inputEventPatched="0.0.3";
for(var e=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],d=0;
d<e.length;
d++){var c=e[d];
at(document).on("input.inputevent",c,{selector:c},b.behavesOk).on("change.inputevent",c,{selector:c},b.misbehaves)
}}},uninstall:function(){delete a.inputEventPatched,at(document).off(".inputevent")
}})
}var ag=1,af={},ax={attr:function(h,d,c){var k,g,f,b=new RegExp("^"+d,"i");
if("undefined"==typeof c){c={}
}else{for(k in c){c.hasOwnProperty(k)&&delete c[k]
}}if(!h){return c
}for(f=h.attributes,k=f.length;
k--;
){g=f[k],g&&g.specified&&b.test(g.name)&&(c[this.camelize(g.name.slice(d.length))]=this.deserializeValue(g.value))
}return c
},checkAttr:function(c,b,a){return c.hasAttribute(b+a)
},setAttr:function(c,b,a,d){c.setAttribute(this.dasherize(b+a),String(d))
},getType:function(a){return a.getAttribute("type")||"text"
},generateID:function(){return""+ag++
},deserializeValue:function(c){var b;
try{return c?"true"==c||"false"!=c&&("null"==c?null:isNaN(b=Number(c))?/^[\[\{]/.test(c)?JSON.parse(c):c:b):c
}catch(a){return c
}},camelize:function(a){return a.replace(/-+(.)?/g,function(c,b){return b?b.toUpperCase():""
})
},dasherize:function(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()
},warn:function(){var a;
window.console&&"function"==typeof window.console.warn&&(a=window.console).warn.apply(a,arguments)
},warnOnce:function(a){af[a]||(af[a]=!0,this.warn.apply(this,arguments))
},_resetWarnings:function(){af={}
},trimString:function(a){return a.replace(/^\s+|\s+$/g,"")
},parse:{date:function B(k){var f=k.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
if(!f){return null
}var d=f.map(function(a){return parseInt(a,10)
}),l=_slicedToArray(d,4),h=(l[0],l[1]),g=l[2],b=l[3],c=new Date(h,g-1,b);
return c.getFullYear()!==h||c.getMonth()+1!==g||c.getDate()!==b?null:c
},string:function(a){return a
},integer:function(a){return isNaN(a)?null:parseInt(a,10)
},number:function(a){if(isNaN(a)){throw null
}return parseFloat(a)
},"boolean":function(a){return !/^\s*false\s*$/i.test(a)
},object:function(a){return ax.deserializeValue(a)
},regexp:function(b){var a="";
return/^\/.*\/(?:[gimy]*)$/.test(b)?(a=b.replace(/.*\/([gimy]*)$/,"$1"),b=b.replace(new RegExp("^/(.*?)/"+a+"$"),"$1")):b="^"+b+"$",new RegExp(b,a)
}},parseRequirement:function(c,b){var a=this.parse[c||"string"];
if(!a){throw'Unknown requirement specification: "'+c+'"'
}var d=a(b);
if(null===d){throw"Requirement is not a "+c+': "'+b+'"'
}return d
},namespaceEvents:function(b,a){return b=this.trimString(b||"").split(/\s+/),b[0]?at.map(b,function(c){return c+"."+a
}).join(" "):""
},difference:function(b,a){var c=[];
return at.each(b,function(f,d){a.indexOf(d)==-1&&c.push(d)
}),c
},all:function(a){return at.when.apply(at,_toConsumableArray(a).concat([42,42]))
},objectCreate:Object.create||function(){var a=function(){};
return function(c){if(arguments.length>1){throw Error("Second argument not supported")
}if("object"!=typeof c){throw TypeError("Argument must be an object")
}a.prototype=c;
var b=new a;
return a.prototype=null,b
}
}(),_SubmitSelector:'input[type="submit"], button:submit'},aj={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(a){},errorsContainer:function(a){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},am=function(){this.__id__=ax.generateID()
};
am.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var b=this,a=function(){var c=at.Deferred();
return !0!==b.validationResult&&c.reject(),c.resolve().promise()
};
return[a,a]
},actualizeOptions:function(){return ax.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this
},_resetOptions:function(b){this.domOptions=ax.objectCreate(this.parent.options),this.options=ax.objectCreate(this.domOptions);
for(var a in b){b.hasOwnProperty(a)&&(this.options[a]=b[a])
}this.actualizeOptions()
},_listeners:null,on:function(c,b){this._listeners=this._listeners||{};
var a=this._listeners[c]=this._listeners[c]||[];
return a.push(b),this
},subscribe:function(b,a){at.listenTo(this,b.toLowerCase(),a)
},off:function(c,b){var a=this._listeners&&this._listeners[c];
if(a){if(b){for(var d=a.length;
d--;
){a[d]===b&&a.splice(d,1)
}}else{delete this._listeners[c]
}}return this
},unsubscribe:function(b,a){at.unsubscribeTo(this,b.toLowerCase())
},trigger:function(f,b,a){b=b||this;
var g,d=this._listeners&&this._listeners[f];
if(d){for(var c=d.length;
c--;
){if(g=d[c].call(b,b,a),g===!1){return g
}}}return !this.parent||this.parent.trigger(f,b,a)
},asyncIsValid:function(b,a){return ax.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:b,force:a})
},_findRelated:function(){return this.options.multiple?at(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element
}};
var ad=function(c,b){var a=c.match(/^\s*\[(.*)\]\s*$/);
if(!a){throw'Requirement is not an array: "'+c+'"'
}var d=a[1].split(",").map(ax.trimString);
if(d.length!==b){throw"Requirement has "+d.length+" values when "+b+" are needed"
}return d
},au=function(f,b,a){var h=null,d={};
for(var c in f){if(c){var g=a(c);
"string"==typeof g&&(g=ax.parseRequirement(f[c],g)),d[c]=g
}else{h=ax.parseRequirement(f[c],b)
}}return[h,d]
},ap=function(a){at.extend(!0,this,a)
};
ap.prototype={validate:function(c,b){if(this.fn){return arguments.length>3&&(b=[].slice.call(arguments,1,-1)),this.fn(c,b)
}if(Array.isArray(c)){if(!this.validateMultiple){throw"Validator `"+this.name+"` does not handle multiple values"
}return this.validateMultiple.apply(this,arguments)
}var a=arguments[arguments.length-1];
if(this.validateDate&&a._isDateInput()){return arguments[0]=ax.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments)
}if(this.validateNumber){return !isNaN(c)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments))
}if(this.validateString){return this.validateString.apply(this,arguments)
}throw"Validator `"+this.name+"` only handles multiple values"
},parseRequirements:function(b,a){if("string"!=typeof b){return Array.isArray(b)?b:[b]
}var e=this.requirementType;
if(Array.isArray(e)){for(var d=ad(b,e.length),c=0;
c<d.length;
c++){d[c]=ax.parseRequirement(e[c],d[c])
}return d
}return at.isPlainObject(e)?au(e,b,a):[ax.parseRequirement(e,b)]
},requirementType:"string",priority:2};
var ai=function(b,a){this.__class__="ValidatorRegistry",this.locale="en",this.init(b||{},a||{})
},av={email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(a){return null!==ax.parse.date(a)
}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$","i")};
av.range=av.number;
var ar=function(b){var a=(""+b).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
return a?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0
},al=function(b,a){return a.map(ax.parse[b])
},aq=function(b,a){return function(c){for(var f=arguments.length,e=Array(f>1?f-1:0),d=1;
d<f;
d++){e[d-1]=arguments[d]
}return e.pop(),a.apply(void 0,[c].concat(_toConsumableArray(al(b,e))))
}
},ac=function(a){return{validateDate:aq("date",a),validateNumber:aq("number",a),requirementType:a.length<=2?"string":["string","string"],priority:30}
};
ai.prototype={init:function(c,b){this.catalog=b,this.validators=_extends({},this.validators);
for(var a in c){this.addValidator(a,c[a].fn,c[a].priority)
}window.Parsley.trigger("parsley:validator:init")
},setLocale:function(a){if("undefined"==typeof this.catalog[a]){throw new Error(a+" is not available in the catalog")
}return this.locale=a,this
},addCatalog:function(c,b,a){return"object"==typeof b&&(this.catalog[c]=b),!0===a?this.setLocale(c):this
},addMessage:function(c,b,a){return"undefined"==typeof this.catalog[c]&&(this.catalog[c]={}),this.catalog[c][b]=a,this
},addMessages:function(c,b){for(var a in b){this.addMessage(c,a,b[a])
}return this
},addValidator:function(c,b,a){if(this.validators[c]){ax.warn('Validator "'+c+'" is already defined.')
}else{if(aj.hasOwnProperty(c)){return void ax.warn('"'+c+'" is a restricted keyword and is not a valid validator name.')
}}return this._setValidator.apply(this,arguments)
},hasValidator:function(a){return !!this.validators[a]
},updateValidator:function(c,b,a){return this.validators[c]?this._setValidator.apply(this,arguments):(ax.warn('Validator "'+c+'" is not already defined.'),this.addValidator.apply(this,arguments))
},removeValidator:function(a){return this.validators[a]||ax.warn('Validator "'+a+'" is not defined.'),delete this.validators[a],this
},_setValidator:function(c,b,a){"object"!=typeof b&&(b={fn:b,priority:a}),b.validate||(b=new ap(b)),this.validators[c]=b;
for(var d in b.messages||{}){this.addMessage(d,c,b.messages[d])
}return this
},getErrorMessage:function(c){var b;
if("type"===c.name){var a=this.catalog[this.locale][c.name]||{};
b=a[c.requirements]
}else{b=this.formatMessage(this.catalog[this.locale][c.name],c.requirements)
}return b||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage
},formatMessage:function(c,b){if("object"==typeof b){for(var a in b){c=this.formatMessage(c,b[a])
}return c
}return"string"==typeof c?c.replace(/%s/i,b):""
},validators:{notblank:{validateString:function(a){return/\S/.test(a)
},priority:2},required:{validateMultiple:function(a){return a.length>0
},validateString:function(a){return/\S/.test(a)
},priority:512},type:{validateString:function(k,v){var h=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],f=h.step,b=void 0===f?"any":f,w=h.base,p=void 0===w?0:w,c=av[v];
if(!c){throw new Error("validator type `"+v+"` is not supported")
}if(!c.test(k)){return !1
}if("number"===v&&!/^any$/i.test(b||"")){var g=Number(k),q=Math.max(ar(b),ar(p));
if(ar(g)>q){return !1
}var m=function(a){return Math.round(a*Math.pow(10,q))
};
if((m(g)-m(p))%m(b)!=0){return !1
}}return !0
},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(b,a){return a.test(b)
},requirementType:"regexp",priority:64},minlength:{validateString:function(b,a){return b.length>=a
},requirementType:"integer",priority:30},maxlength:{validateString:function(b,a){return b.length<=a
},requirementType:"integer",priority:30},length:{validateString:function(c,b,a){return c.length>=b&&c.length<=a
},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(b,a){return b.length>=a
},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(b,a){return b.length<=a
},requirementType:"integer",priority:30},check:{validateMultiple:function(c,b,a){return c.length>=b&&c.length<=a
},requirementType:["integer","integer"],priority:30},min:ac(function(b,a){return b>=a
}),max:ac(function(b,a){return b<=a
}),range:ac(function(c,b,a){return c>=b&&c<=a
}),equalto:{validateString:function(b,a){var c=at(a);
return c.length?b===c.val():b===a
},priority:256}}};
var Z={},ay=function an(h,d,c){for(var l=[],g=[],f=0;
f<h.length;
f++){for(var b=!1,k=0;
k<d.length;
k++){if(h[f].assert.name===d[k].assert.name){b=!0;
break
}}b?g.push(h[f]):l.push(h[f])
}return{kept:g,added:l,removed:c?[]:an(d,h,!0).added}
};
Z.Form={_actualizeTriggers:function(){var a=this;
this.$element.on("submit.Parsley",function(b){a.onSubmitValidate(b)
}),this.$element.on("click.Parsley",ax._SubmitSelector,function(b){a.onSubmitButton(b)
}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")
},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus){return null
}for(var b=0;
b<this.fields.length;
b++){var a=this.fields[b];
if(!0!==a.validationResult&&a.validationResult.length>0&&"undefined"==typeof a.options.noFocus&&(this._focusedField=a.$element,"first"===this.options.focus)){break
}}return null===this._focusedField?null:this._focusedField.focus()
},_destroyUI:function(){this.$element.off(".Parsley")
}},Z.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var a=ay(this.validationResult,this._ui.lastValidationResult);
this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(a),this._actualizeTriggers(),!a.kept.length&&!a.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())
}},getErrorsMessages:function(){if(!0===this.validationResult){return[]
}for(var b=[],a=0;
a<this.validationResult.length;
a++){b.push(this.validationResult[a].errorMessage||this._getErrorMessage(this.validationResult[a].assert))
}return b
},addError:function(f){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=b.message,g=b.assert,d=b.updateClass,c=void 0===d||d;
this._buildUI(),this._addError(f,{message:a,assert:g}),c&&this._errorClass()
},updateError:function(f){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=b.message,g=b.assert,d=b.updateClass,c=void 0===d||d;
this._buildUI(),this._updateError(f,{message:a,assert:g}),c&&this._errorClass()
},removeError:function(c){var b=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=b.updateClass,d=void 0===a||a;
this._buildUI(),this._removeError(c),d&&this._manageStatusClass()
},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()
},_manageErrorsMessages:function(b){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage){return b.added.length||b.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(at(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove()
}for(var a=0;
a<b.removed.length;
a++){this._removeError(b.removed[a].assert.name)
}for(a=0;
a<b.added.length;
a++){this._addError(b.added[a].assert.name,{message:b.added[a].errorMessage,assert:b.added[a].assert})
}for(a=0;
a<b.kept.length;
a++){this._updateError(b.kept[a].assert.name,{message:b.kept[a].errorMessage,assert:b.kept[a].assert})
}}},_addError:function(b,a){var d=a.message,c=a.assert;
this._insertErrorWrapper(),this._ui.$errorsWrapper.addClass("filled").append(at(this.options.errorTemplate).addClass("parsley-"+b).html(d||this._getErrorMessage(c)))
},_updateError:function(c,b){var a=b.message,d=b.assert;
this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+c).html(a||this._getErrorMessage(d))
},_removeError:function(a){this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+a).remove()
},_getErrorMessage:function(b){var a=b.name+"Message";
return"undefined"!=typeof this.options[a]?window.Parsley.formatMessage(this.options[a],b.requirements):window.Parsley.getErrorMessage(b)
},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var a={};
this.element.setAttribute(this.options.namespace+"id",this.__id__),a.$errorClassHandler=this._manageClassHandler(),a.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),a.$errorsWrapper=at(this.options.errorsWrapper).attr("id",a.errorsWrapperId),a.lastValidationResult=[],a.validationInformationVisible=!1,this._ui=a
}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler&&at(this.options.classHandler).length){return at(this.options.classHandler)
}var b=this.options.classHandler;
if("string"==typeof this.options.classHandler&&"function"==typeof window[this.options.classHandler]&&(b=window[this.options.classHandler]),"function"==typeof b){var a=b.call(this,this);
if("undefined"!=typeof a&&a.length){return a
}}else{if("object"==typeof b&&b instanceof jQuery&&b.length){return b
}b&&ax.warn("The class handler `"+b+"` does not exist in DOM nor as a global JS function")
}return this._inputHolder()
},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element
},_insertErrorWrapper:function(){var a=this.options.errorsContainer;
if(0!==this._ui.$errorsWrapper.parent().length){return this._ui.$errorsWrapper.parent()
}if("string"==typeof a){if(at(a).length){return at(a).append(this._ui.$errorsWrapper)
}"function"==typeof window[a]?a=window[a]:ax.warn("The errors container `"+a+"` does not exist in DOM nor as a global JS function")
}return"function"==typeof a&&(a=a.call(this,this)),"object"==typeof a&&a.length?a.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)
},_actualizeTriggers:function(){var c,b=this,a=this._findRelated();
a.off(".Parsley"),this._failedOnce?a.on(ax.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){b._validateIfNeeded()
}):(c=ax.namespaceEvents(this.options.trigger,"Parsley"))&&a.on(c,function(d){b._validateIfNeeded(d)
})
},_validateIfNeeded:function(b){var a=this;
b&&/key|input/.test(b.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return a.validate()
},this.options.debounce)):this.validate())
},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)
},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui
},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
}};
var ab=function(b,a,c){this.__class__="Form",this.element=b,this.$element=at(b),this.domOptions=a,this.options=c,this.parent=window.Parsley,this.fields=[],this.validationResult=null
},aw={pending:null,resolved:!0,rejected:!1};
ab.prototype={onSubmitValidate:function(c){var b=this;
if(!0!==c.parsley){var a=this._submitSource||this.$element.find(ax._SubmitSelector)[0];
if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!a||null===a.getAttribute("formnovalidate")){window.Parsley._remoteCache={};
var d=this.whenValidate({event:c});
"resolved"===d.state()&&!1!==this._trigger("submit")||(c.stopImmediatePropagation(),c.preventDefault(),"pending"===d.state()&&d.done(function(){b._submit(a)
}))
}}},onSubmitButton:function(a){this._submitSource=a.currentTarget
},_submit:function(b){if(!1!==this._trigger("submit")){if(b){var a=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);
0===a.length&&(a=at('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),a.attr({name:b.getAttribute("name"),value:b.getAttribute("value")})
}this.$element.trigger(_extends(at.Event("submit"),{parsley:!0}))
}},validate:function(b){if(arguments.length>=1&&!at.isPlainObject(b)){ax.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
var a=_slice.call(arguments),e=a[0],d=a[1],c=a[2];
b={group:e,force:d,event:c}
}return aw[this.whenValidate(b).state()]
},whenValidate:function(){var c,b=this,g=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=g.group,d=g.force,f=g.event;
this.submitEvent=f,f&&(this.submitEvent=_extends({},f,{preventDefault:function(){ax.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),b.validationResult=!1
}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();
var a=this._withoutReactualizingFormOptions(function(){return at.map(b.fields,function(h){return h.whenValidate({force:d,group:e})
})
});
return(c=ax.all(a).done(function(){b._trigger("success")
}).fail(function(){b.validationResult=!1,b.focus(),b._trigger("error")
}).always(function(){b._trigger("validated")
})).pipe.apply(c,_toConsumableArray(this._pipeAccordingToValidationResult()))
},isValid:function(b){if(arguments.length>=1&&!at.isPlainObject(b)){ax.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
var a=_slice.call(arguments),d=a[0],c=a[1];
b={group:d,force:c}
}return aw[this.whenValid(b).state()]
},whenValid:function(){var b=this,a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=a.group,d=a.force;
this._refreshFields();
var c=this._withoutReactualizingFormOptions(function(){return at.map(b.fields,function(f){return f.whenValid({group:e,force:d})
})
});
return ax.all(c)
},refresh:function(){return this._refreshFields(),this
},reset:function(){for(var a=0;
a<this.fields.length;
a++){this.fields[a].reset()
}this._trigger("reset")
},destroy:function(){this._destroyUI();
for(var a=0;
a<this.fields.length;
a++){this.fields[a].destroy()
}this.$element.removeData("Parsley"),this._trigger("destroy")
},_refreshFields:function(){return this.actualizeOptions()._bindFields()
},_bindFields:function(){var b=this,a=this.fields;
return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){b.$element.find(b.options.inputs).not(b.options.excluded).each(function(f,c){var g=new window.Parsley.Factory(c,{},b);
if(("Field"===g.__class__||"FieldMultiple"===g.__class__)&&!0!==g.options.excluded){var d=g.__class__+"-"+g.__id__;
"undefined"==typeof b.fieldsMappedById[d]&&(b.fieldsMappedById[d]=g,b.fields.push(g))
}}),at.each(ax.difference(a,b.fields),function(d,c){c.reset()
})
}),this
},_withoutReactualizingFormOptions:function(c){var b=this.actualizeOptions;
this.actualizeOptions=function(){return this
};
var a=c();
return this.actualizeOptions=b,a
},_trigger:function(a){return this.trigger("form:"+a)
}};
var N=function(h,d,c,k,g){var f=window.Parsley._validatorRegistry.validators[d],b=new ap(f);
k=k||h.options[d+"Priority"]||b.priority,g=!0===g,_extends(this,{validator:b,name:d,requirements:c,priority:k,isDomConstraint:g}),this._parseRequirements(h.options)
},W=function(b){var a=b[0].toUpperCase();
return a+b.slice(1)
};
N.prototype={validate:function(c,b){var a;
return(a=this.validator).validate.apply(a,[c].concat(_toConsumableArray(this.requirementList),[b]))
},_parseRequirements:function(b){var a=this;
this.requirementList=this.validator.parseRequirements(this.requirements,function(c){return b[a.name+W(c)]
})
}};
var Q=function(b,a,d,c){this.__class__="Field",this.element=b,this.$element=at(b),"undefined"!=typeof c&&(this.parent=c),this.options=d,this.domOptions=a,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()
},X={pending:null,resolved:!0,rejected:!1};
Q.prototype={validate:function(b){arguments.length>=1&&!at.isPlainObject(b)&&(ax.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),b={options:b});
var a=this.whenValidate(b);
if(!a){return !0
}switch(a.state()){case"pending":return null;
case"resolved":return !0;
case"rejected":return this.validationResult
}},whenValidate:function(){var d,b=this,a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],f=a.force,c=a.group;
if(this.refresh(),!c||this._isInGroup(c)){return this.value=this.getValue(),this._trigger("validate"),(d=this.whenValid({force:f,value:this.value,_refreshed:!0}).always(function(){b._reflowUI()
}).done(function(){b._trigger("success")
}).fail(function(){b._trigger("error")
}).always(function(){b._trigger("validated")
})).pipe.apply(d,_toConsumableArray(this._pipeAccordingToValidationResult()))
}},hasConstraints:function(){return 0!==this.constraints.length
},needsValidation:function(a){return"undefined"==typeof a&&(a=this.getValue()),!(!a.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)
},_isInGroup:function(a){return Array.isArray(this.options.group)?-1!==at.inArray(a,this.options.group):this.options.group===a
},isValid:function(b){if(arguments.length>=1&&!at.isPlainObject(b)){ax.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
var a=_slice.call(arguments),e=a[0],d=a[1];
b={force:e,value:d}
}var c=this.whenValid(b);
return !c||X[c.state()]
},whenValid:function(){var k=this,f=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],c=f.force,a=void 0!==c&&c,m=f.value,b=f.group,e=f._refreshed;
if(e||this.refresh(),!b||this._isInGroup(b)){if(this.validationResult=!0,!this.hasConstraints()){return at.when()
}if("undefined"!=typeof m&&null!==m||(m=this.getValue()),!this.needsValidation(m)&&!0!==a){return at.when()
}var h=this._getGroupedConstraints(),g=[];
return at.each(h,function(d,o){var l=ax.all(at.map(o,function(n){return k._validateConstraint(m,n)
}));
if(g.push(l),"rejected"===l.state()){return !1
}}),ax.all(g)
}},_validateConstraint:function(b,a){var d=this,c=a.validate(b,this);
return !1===c&&(c=at.Deferred().reject()),ax.all([c]).fail(function(f){d.validationResult instanceof Array||(d.validationResult=[]),d.validationResult.push({assert:a,errorMessage:"string"==typeof f&&f})
})
},getValue:function(){var a;
return a="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof a||null===a?"":this._handleWhitespace(a)
},reset:function(){return this._resetUI(),this._trigger("reset")
},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")
},refresh:function(){return this._refreshConstraints(),this
},_refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()
},refreshConstraints:function(){return ax.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"),this.refresh()
},addConstraint:function(d,b,a,f){if(window.Parsley._validatorRegistry.validators[d]){var c=new N(this,d,b,a,f);
"undefined"!==this.constraintsByName[c.name]&&this.removeConstraint(c.name),this.constraints.push(c),this.constraintsByName[c.name]=c
}return this
},removeConstraint:function(b){for(var a=0;
a<this.constraints.length;
a++){if(b===this.constraints[a].name){this.constraints.splice(a,1);
break
}}return delete this.constraintsByName[b],this
},updateConstraint:function(c,b,a){return this.removeConstraint(c).addConstraint(c,b,a)
},_bindConstraints:function(){for(var c=[],b={},a=0;
a<this.constraints.length;
a++){!1===this.constraints[a].isDomConstraint&&(c.push(this.constraints[a]),b[this.constraints[a].name]=this.constraints[a])
}this.constraints=c,this.constraintsByName=b;
for(var d in this.options){this.addConstraint(d,this.options[d],void 0,!0)
}return this._bindHtml5Constraints()
},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);
var c=this.element.getAttribute("min"),b=this.element.getAttribute("max");
null!==c&&null!==b?this.addConstraint("range",[c,b],void 0,!0):null!==c?this.addConstraint("min",c,void 0,!0):null!==b&&this.addConstraint("max",b,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);
var a=ax.getType(this.element);
return"number"===a?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:c||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(a)?this.addConstraint("type",a,void 0,!0):this
},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements
},_trigger:function(a){return this.trigger("field:"+a)
},_handleWhitespace:function(a){return !0===this.options.trimValue&&ax.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(a=a.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(a=ax.trimString(a)),a
},_isDateInput:function(){var a=this.constraintsByName.type;
return a&&"date"===a.requirements
},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled){return[this.constraints]
}for(var c=[],b={},a=0;
a<this.constraints.length;
a++){var d=this.constraints[a].priority;
b[d]||c.push(b[d]=[]),b[d].push(this.constraints[a])
}return c.sort(function(g,f){return f[0].priority-g[0].priority
}),c
}};
var aa=Q,Y=function(){this.__class__="FieldMultiple"
};
Y.prototype={addElement:function(a){return this.$elements.push(a),this
},_refreshConstraints:function(){var b;
if(this.constraints=[],"SELECT"===this.element.nodeName){return this.actualizeOptions()._bindConstraints(),this
}for(var a=0;
a<this.$elements.length;
a++){if(at("html").has(this.$elements[a]).length){b=this.$elements[a].data("FieldMultiple")._refreshConstraints().constraints;
for(var c=0;
c<b.length;
c++){this.addConstraint(b[c].name,b[c].requirements,b[c].priority,b[c].isDomConstraint)
}}else{this.$elements.splice(a,1)
}}return this
},getValue:function(){if("function"==typeof this.options.value){return this.options.value(this)
}if("undefined"!=typeof this.options.value){return this.options.value
}if("INPUT"===this.element.nodeName){var b=ax.getType(this.element);
if("radio"===b){return this._findRelated().filter(":checked").val()||""
}if("checkbox"===b){var a=[];
return this._findRelated().filter(":checked").each(function(){a.push(at(this).val())
}),a
}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val()
},_init:function(){return this.$elements=[this.$element],this
}};
var H=function(b,a,d){this.element=b,this.$element=at(b);
var c=this.$element.data("Parsley");
if(c){return"undefined"!=typeof d&&c.parent===window.Parsley&&(c.parent=d,c._resetOptions(c.options)),"object"==typeof a&&_extends(c.options,a),c
}if(!this.$element.length){throw new Error("You must bind Parsley on an existing element.")
}if("undefined"!=typeof d&&"Form"!==d.__class__){throw new Error("Parent instance must be a Form instance")
}return this.parent=d||window.Parsley,this.init(a)
};
H.prototype={init:function(a){return this.__class__="Parsley",this.__version__="2.8.0",this.__id__=ax.generateID(),this._resetOptions(a),"FORM"===this.element.nodeName||ax.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")
},isMultiple:function(){var a=ax.getType(this.element);
return"radio"===a||"checkbox"===a||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")
},handleMultiple:function(){var b,a,e=this;
if(this.options.multiple=this.options.multiple||(b=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")){return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple")
}if(!this.options.multiple){return ax.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this
}this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),b&&at('input[name="'+b+'"]').each(function(h,g){var f=ax.getType(g);
"radio"!==f&&"checkbox"!==f||g.setAttribute(e.options.namespace+"multiple",e.options.multiple)
});
for(var d=this._findRelated(),c=0;
c<d.length;
c++){if(a=at(d.get(c)).data("Parsley"),"undefined"!=typeof a){this.$element.data("FieldMultiple")||a.addElement(this.$element);
break
}}return this.bind("parsleyField",!0),a||this.bind("parsleyFieldMultiple")
},bind:function(b,a){var c;
switch(b){case"parsleyForm":c=at.extend(new ab(this.element,this.domOptions,this.options),new am,window.ParsleyExtend)._bindFields();
break;
case"parsleyField":c=at.extend(new aa(this.element,this.domOptions,this.options,this.parent),new am,window.ParsleyExtend);
break;
case"parsleyFieldMultiple":c=at.extend(new aa(this.element,this.domOptions,this.options,this.parent),new Y,new am,window.ParsleyExtend)._init();
break;
default:throw new Error(b+"is not a supported Parsley type")
}return this.options.multiple&&ax.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof a?(this.$element.data("FieldMultiple",c),c):(this.$element.data("Parsley",c),c._actualizeTriggers(),c._trigger("init"),c)
}};
var j=at.fn.jquery.split(".");
if(parseInt(j[0])<=1&&parseInt(j[1])<8){throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better."
}j.forEach||ax.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
var z=_extends(new am,{element:document,$element:at(document),actualizeOptions:null,_resetOptions:null,Factory:H,version:"2.8.0"});
_extends(aa.prototype,Z.Field,am.prototype),_extends(ab.prototype,Z.Form,am.prototype),_extends(H.prototype,am.prototype),at.fn.parsley=at.fn.psly=function(b){if(this.length>1){var a=[];
return this.each(function(){a.push(at(this).parsley(b))
}),a
}if(0!=this.length){return new H(this[0],b)
}},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),z.options=_extends(ax.objectCreate(aj),window.ParsleyConfig),window.ParsleyConfig=z.options,window.Parsley=window.psly=z,z.Utils=ax,window.ParsleyUtils={},at.each(ax,function(b,a){"function"==typeof a&&(window.ParsleyUtils[b]=function(){return ax.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),ax[b].apply(ax,arguments)
})
});
var J=window.Parsley._validatorRegistry=new ai(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);
window.ParsleyValidator={},at.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "),function(b,a){window.Parsley[a]=function(){return J[a].apply(J,arguments)
},window.ParsleyValidator[a]=function(){var c;
return ax.warnOnce("Accessing the method '"+a+"' through Validator is deprecated. Simply call 'window.Parsley."+a+"(...)'"),(c=window.Parsley)[a].apply(c,arguments)
}
}),window.Parsley.UI=Z,window.ParsleyUI={removeError:function(c,b,a){var d=!0!==a;
return ax.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),c.removeError(b,{updateClass:d})
},getErrorsMessages:function(a){return ax.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),a.getErrorsMessages()
}},at.each("addError updateError".split(" "),function(b,a){window.ParsleyUI[a]=function(g,c,k,f,d){var h=!0!==d;
return ax.warnOnce("Accessing UI is deprecated. Call '"+a+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),g[a](c,{message:k,assert:f,updateClass:h})
}
}),!1!==window.ParsleyConfig.autoBind&&at(function(){at("[data-parsley-validate]").length&&at("[data-parsley-validate]").parsley()
});
var K=at({}),G=function(){ax.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
},U="parsley:";
at.listen=function(b,c){var a;
if(G(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(a=arguments[1],c=arguments[2]),"function"!=typeof c){throw new Error("Wrong parameters")
}window.Parsley.on(ao(b),ae(c,a))
},at.listenTo=function(b,c,a){if(G(),!(b instanceof aa||b instanceof ab)){throw new Error("Must give Parsley instance")
}if("string"!=typeof c||"function"!=typeof a){throw new Error("Wrong parameters")
}b.on(ao(c),ae(a))
},at.unsubscribe=function(b,a){if(G(),"string"!=typeof b||"function"!=typeof a){throw new Error("Wrong arguments")
}window.Parsley.off(ao(b),a.parsleyAdaptedCallback)
},at.unsubscribeTo=function(b,a){if(G(),!(b instanceof aa||b instanceof ab)){throw new Error("Must give Parsley instance")
}b.off(ao(a))
},at.unsubscribeAll=function(a){G(),window.Parsley.off(ao(a)),at("form,input,textarea,select").each(function(){var b=at(this).data("Parsley");
b&&b.off(ao(a))
})
},at.emit=function(d,a){var f;
G();
var c=a instanceof aa||a instanceof ab,b=Array.prototype.slice.call(arguments,c?2:1);
b.unshift(ao(d)),c||(a=window.Parsley),(f=a).trigger.apply(f,_toConsumableArray(b))
};
at.extend(!0,z,{asyncValidators:{"default":{fn:function(a){return a.status>=200&&a.status<300
},url:!1},reverse:{fn:function(a){return a.status<200||a.status>=300
},url:!1}},addAsyncValidator:function(c,b,a,d){return z.asyncValidators[c]={fn:b,url:a||!1,options:d||{}},this
}}),z.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(v,g,e,b){var w,p,c={},f=e.validator||(!0===e.reverse?"reverse":"default");
if("undefined"==typeof z.asyncValidators[f]){throw new Error("Calling an undefined async validator: `"+f+"`")
}g=z.asyncValidators[f].url||g,g.indexOf("{value}")>-1?g=g.replace("{value}",encodeURIComponent(v)):c[b.element.getAttribute("name")||b.element.getAttribute("id")]=v;
var q=at.extend(!0,e.options||{},z.asyncValidators[f].options);
w=at.extend(!0,{},{url:g,data:c,type:"GET"},q),b.trigger("field:ajaxoptions",b,w),p=at.param(w),"undefined"==typeof z._remoteCache&&(z._remoteCache={});
var m=z._remoteCache[p]=z._remoteCache[p]||at.ajax(w),k=function(){var a=z.asyncValidators[f].fn.call(b,m,g,e);
return a||(a=at.Deferred().reject()),at.when(a)
};
return m.then(k,k)
},priority:-1}),z.on("form:submit",function(){z._remoteCache={}
}),am.prototype.addAsyncValidator=function(){return ax.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),z.addAsyncValidator.apply(z,arguments)
},z.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),z.setLocale("en");
var L=new ak;
L.install();
var ah=z;
return ah
});
(function(k,f){var c=k(window);
function o(){return new Date(Date.UTC.apply(Date,arguments))
}function g(){var r=new Date();
return o(r.getFullYear(),r.getMonth(),r.getDate())
}function m(r){return function(){return this[r].apply(this,arguments)
}
}var e=(function(){var r={get:function(t){return this.slice(t)[0]
},contains:function(w){var v=w&&w.valueOf();
for(var u=0,t=this.length;
u<t;
u++){if(this[u].valueOf()===v){return u
}}return -1
},remove:function(t){this.splice(t,1)
},replace:function(t){if(!t){return
}if(!k.isArray(t)){t=[t]
}this.clear();
this.push.apply(this,t)
},clear:function(){this.splice(0)
},copy:function(){var t=new e();
t.replace(this);
return t
}};
return function(){var t=[];
t.push.apply(t,arguments);
k.extend(t,r);
return t
}
})();
var l=function(t,r){this.dates=new e();
this.viewDate=g();
this.focusDate=null;
this._process_options(r);
this.element=k(t);
this.isInline=false;
this.isInput=this.element.is("input");
this.component=this.element.is(".date")?this.element.find(".add-on, .input-group-addon, .btn"):false;
this.hasInput=this.component&&this.element.find("input").length;
if(this.component&&this.component.length===0){this.component=false
}this.picker=k(n.template);
this._buildEvents();
this._attachEvents();
if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element)
}else{this.picker.addClass("datepicker-dropdown dropdown-menu")
}if(this.o.rtl){this.picker.addClass("datepicker-rtl")
}this.viewMode=this.o.startView;
if(this.o.calendarWeeks){this.picker.find("tfoot th.today").attr("colspan",function(u,v){return parseInt(v)+1
})
}this._allow_update=false;
this.setStartDate(this._o.startDate);
this.setEndDate(this._o.endDate);
this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
this.fillDow();
this.fillMonths();
this._allow_update=true;
this.update();
this.showMode();
if(this.isInline){this.show()
}};
l.prototype={constructor:l,_process_options:function(r){this._o=k.extend({},this._o,r);
var w=this.o=k.extend({},this._o);
var v=w.language;
if(!b[v]){v=v.split("-")[0];
if(!b[v]){v=h.language
}}w.language=v;
switch(w.startView){case 2:case"decade":w.startView=2;
break;
case 1:case"year":w.startView=1;
break;
default:w.startView=0
}switch(w.minViewMode){case 1:case"months":w.minViewMode=1;
break;
case 2:case"years":w.minViewMode=2;
break;
default:w.minViewMode=0
}w.startView=Math.max(w.startView,w.minViewMode);
if(w.multidate!==true){w.multidate=Number(w.multidate)||false;
if(w.multidate!==false){w.multidate=Math.max(0,w.multidate)
}else{w.multidate=1
}}w.multidateSeparator=String(w.multidateSeparator);
w.weekStart%=7;
w.weekEnd=((w.weekStart+6)%7);
var t=n.parseFormat(w.format);
if(w.startDate!==-Infinity){if(!!w.startDate){if(w.startDate instanceof Date){w.startDate=this._local_to_utc(this._zero_time(w.startDate))
}else{w.startDate=n.parseDate(w.startDate,t,w.language)
}}else{w.startDate=-Infinity
}}if(w.endDate!==Infinity){if(!!w.endDate){if(w.endDate instanceof Date){w.endDate=this._local_to_utc(this._zero_time(w.endDate))
}else{w.endDate=n.parseDate(w.endDate,t,w.language)
}}else{w.endDate=Infinity
}}w.daysOfWeekDisabled=w.daysOfWeekDisabled||[];
if(!k.isArray(w.daysOfWeekDisabled)){w.daysOfWeekDisabled=w.daysOfWeekDisabled.split(/[,\s]*/)
}w.daysOfWeekDisabled=k.map(w.daysOfWeekDisabled,function(y){return parseInt(y,10)
});
var u=String(w.orientation).toLowerCase().split(/\s+/g),x=w.orientation.toLowerCase();
u=k.grep(u,function(y){return(/^auto|left|right|top|bottom$/).test(y)
});
w.orientation={x:"auto",y:"auto"};
if(!x||x==="auto"){}else{if(u.length===1){switch(u[0]){case"top":case"bottom":w.orientation.y=u[0];
break;
case"left":case"right":w.orientation.x=u[0];
break
}}else{x=k.grep(u,function(y){return(/^left|right$/).test(y)
});
w.orientation.x=x[0]||"auto";
x=k.grep(u,function(y){return(/^top|bottom$/).test(y)
});
w.orientation.y=x[0]||"auto"
}}},_events:[],_secondaryEvents:[],_applyEvents:function(r){for(var t=0,v,u,w;
t<r.length;
t++){v=r[t][0];
if(r[t].length===2){u=f;
w=r[t][1]
}else{if(r[t].length===3){u=r[t][1];
w=r[t][2]
}}v.on(w,u)
}},_unapplyEvents:function(r){for(var t=0,v,w,u;
t<r.length;
t++){v=r[t][0];
if(r[t].length===2){u=f;
w=r[t][1]
}else{if(r[t].length===3){u=r[t][1];
w=r[t][2]
}}v.off(w,u)
}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:k.proxy(this.show,this),keyup:k.proxy(function(r){if(k.inArray(r.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update()
}},this),keydown:k.proxy(this.keydown,this)}]]
}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:k.proxy(this.show,this),keyup:k.proxy(function(r){if(k.inArray(r.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update()
}},this),keydown:k.proxy(this.keydown,this)}],[this.component,{click:k.proxy(this.show,this)}]]
}else{if(this.element.is("div")){this.isInline=true
}else{this._events=[[this.element,{click:k.proxy(this.show,this)}]]
}}}this._events.push([this.element,"*",{blur:k.proxy(function(r){this._focused_from=r.target
},this)}],[this.element,{blur:k.proxy(function(r){this._focused_from=r.target
},this)}]);
this._secondaryEvents=[[this.picker,{click:k.proxy(this.click,this)}],[k(window),{resize:k.proxy(this.place,this)}],[k(document),{"mousedown touchstart":k.proxy(function(r){if(!(this.element.is(r.target)||this.element.find(r.target).length||this.picker.is(r.target)||this.picker.find(r.target).length)){this.hide()
}},this)}]]
},_attachEvents:function(){this._detachEvents();
this._applyEvents(this._events)
},_detachEvents:function(){this._unapplyEvents(this._events)
},_attachSecondaryEvents:function(){this._detachSecondaryEvents();
this._applyEvents(this._secondaryEvents)
},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)
},_trigger:function(u,v){var t=v||this.dates.get(-1),r=this._utc_to_local(t);
this.element.trigger({type:u,date:r,dates:k.map(this.dates,this._utc_to_local),format:k.proxy(function(w,y){if(arguments.length===0){w=this.dates.length-1;
y=this.o.format
}else{if(typeof w==="string"){y=w;
w=this.dates.length-1
}}y=y||this.o.format;
var x=this.dates.get(w);
return n.formatDate(x,y,this.o.language)
},this)})
},show:function(){if(!this.isInline){this.picker.appendTo("body")
}this.picker.show();
this.place();
this._attachSecondaryEvents();
this._trigger("show")
},hide:function(){if(this.isInline){return
}if(!this.picker.is(":visible")){return
}this.focusDate=null;
this.picker.hide().detach();
this._detachSecondaryEvents();
this.viewMode=this.o.startView;
this.showMode();
if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()
}this._trigger("hide")
},remove:function(){this.hide();
this._detachEvents();
this._detachSecondaryEvents();
this.picker.remove();
delete this.element.data().datepicker;
if(!this.isInput){delete this.element.data().date
}},_utc_to_local:function(r){return r&&new Date(r.getTime()+(r.getTimezoneOffset()*60000))
},_local_to_utc:function(r){return r&&new Date(r.getTime()-(r.getTimezoneOffset()*60000))
},_zero_time:function(r){return r&&new Date(r.getFullYear(),r.getMonth(),r.getDate())
},_zero_utc_time:function(r){return r&&new Date(Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()))
},getDates:function(){return k.map(this.dates,this._utc_to_local)
},getUTCDates:function(){return k.map(this.dates,function(r){return new Date(r)
})
},getDate:function(){return this._utc_to_local(this.getUTCDate())
},getUTCDate:function(){return new Date(this.dates.get(-1))
},setDates:function(){var r=k.isArray(arguments[0])?arguments[0]:arguments;
this.update.apply(this,r);
this._trigger("changeDate");
this.setValue()
},setUTCDates:function(){var r=k.isArray(arguments[0])?arguments[0]:arguments;
this.update.apply(this,k.map(r,this._utc_to_local));
this._trigger("changeDate");
this.setValue()
},setDate:m("setDates"),setUTCDate:m("setUTCDates"),setValue:function(){var r=this.getFormattedDate();
if(!this.isInput){if(this.component){this.element.find("input").val(r).change()
}}else{this.element.val(r).change()
}},getFormattedDate:function(r){if(r===f){r=this.o.format
}var t=this.o.language;
return k.map(this.dates,function(u){return n.formatDate(u,r,t)
}).join(this.o.multidateSeparator)
},setStartDate:function(r){this._process_options({startDate:r});
this.update();
this.updateNavArrows()
},setEndDate:function(r){this._process_options({endDate:r});
this.update();
this.updateNavArrows()
},setDaysOfWeekDisabled:function(r){this._process_options({daysOfWeekDisabled:r});
this.update();
this.updateNavArrows()
},place:function(){if(this.isInline){return
}var G=this.picker.outerWidth(),C=this.picker.outerHeight(),w=10,y=c.width(),t=c.height(),x=c.scrollTop();
var E=parseInt(this.element.parents().filter(function(){return k(this).css("z-index")!=="auto"
}).first().css("z-index"))+10;
var B=this.component?this.component.parent().offset():this.element.offset();
var F=this.component?this.component.outerHeight(true):this.element.outerHeight(false);
var v=this.component?this.component.outerWidth(true):this.element.outerWidth(false);
var A=B.left,D=B.top;
this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");
if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);
if(this.o.orientation.x==="right"){A-=G-v
}}else{this.picker.addClass("datepicker-orient-left");
if(B.left<0){A-=B.left-w
}else{if(B.left+G>y){A=y-G-w
}}}var r=this.o.orientation.y,u,z;
if(r==="auto"){u=-x+B.top-C;
z=x+t-(B.top+F+C);
if(Math.max(u,z)===z){r="top"
}else{r="bottom"
}}this.picker.addClass("datepicker-orient-"+r);
if(r==="top"){D+=F
}else{D-=C+parseInt(this.picker.css("padding-top"))
}this.picker.css({top:D,left:A,zIndex:E})
},_allow_update:true,update:function(){if(!this._allow_update){return
}var t=this.dates.copy(),u=[],r=false;
if(arguments.length){k.each(arguments,k.proxy(function(w,v){if(v instanceof Date){v=this._local_to_utc(v)
}u.push(v)
},this));
r=true
}else{u=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();
if(u&&this.o.multidate){u=u.split(this.o.multidateSeparator)
}else{u=[u]
}delete this.element.data().date
}u=k.map(u,k.proxy(function(v){return n.parseDate(v,this.o.format,this.o.language)
},this));
u=k.grep(u,k.proxy(function(v){return(v<this.o.startDate||v>this.o.endDate||!v)
},this),true);
this.dates.replace(u);
if(this.dates.length){this.viewDate=new Date(this.dates.get(-1))
}else{if(this.viewDate<this.o.startDate){this.viewDate=new Date(this.o.startDate)
}else{if(this.viewDate>this.o.endDate){this.viewDate=new Date(this.o.endDate)
}}}if(r){this.setValue()
}else{if(u.length){if(String(t)!==String(this.dates)){this._trigger("changeDate")
}}}if(!this.dates.length&&t.length){this._trigger("clearDate")
}this.fill()
},fillDow:function(){var t=this.o.weekStart,u="<tr>";
if(this.o.calendarWeeks){var r='<th class="cw">&nbsp;</th>';
u+=r;
this.picker.find(".datepicker-days thead tr:first-child").prepend(r)
}while(t<this.o.weekStart+7){u+='<th class="dow">'+b[this.o.language].daysMin[(t++)%7]+"</th>"
}u+="</tr>";
this.picker.find(".datepicker-days thead").append(u)
},fillMonths:function(){var t="",r=0;
while(r<12){t+='<span class="month">'+b[this.o.language].monthsShort[r++]+"</span>"
}this.picker.find(".datepicker-months td").html(t)
},setRange:function(r){if(!r||!r.length){delete this.range
}else{this.range=k.map(r,function(t){return t.valueOf()
})
}this.fill()
},getClassNames:function(u){var r=[],v=this.viewDate.getUTCFullYear(),w=this.viewDate.getUTCMonth(),t=new Date();
if(u.getUTCFullYear()<v||(u.getUTCFullYear()===v&&u.getUTCMonth()<w)){r.push("old")
}else{if(u.getUTCFullYear()>v||(u.getUTCFullYear()===v&&u.getUTCMonth()>w)){r.push("new")
}}if(this.focusDate&&u.valueOf()===this.focusDate.valueOf()){r.push("focused")
}if(this.o.todayHighlight&&u.getUTCFullYear()===t.getFullYear()&&u.getUTCMonth()===t.getMonth()&&u.getUTCDate()===t.getDate()){r.push("today")
}if(this.dates.contains(u)!==-1){r.push("active")
}if(u.valueOf()<this.o.startDate||u.valueOf()>this.o.endDate||k.inArray(u.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){r.push("disabled")
}if(this.range){if(u>this.range[0]&&u<this.range[this.range.length-1]){r.push("range")
}if(k.inArray(u.valueOf(),this.range)!==-1){r.push("selected")
}}return r
},fill:function(){var N=new Date(this.viewDate),C=N.getUTCFullYear(),O=N.getUTCMonth(),H=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,L=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,z=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,I=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,A=b[this.o.language].today||b.en.today||"",u=b[this.o.language].clear||b.en.clear||"",w;
this.picker.find(".datepicker-days thead th.datepicker-switch").text(b[this.o.language].months[O]+" "+C);
this.picker.find("tfoot th.today").text(A).toggle(this.o.todayBtn!==false);
this.picker.find("tfoot th.clear").text(u).toggle(this.o.clearBtn!==false);
this.updateNavArrows();
this.fillMonths();
var Q=o(C,O-1,28),K=n.getDaysInMonth(Q.getUTCFullYear(),Q.getUTCMonth());
Q.setUTCDate(K);
Q.setUTCDate(K-(Q.getUTCDay()-this.o.weekStart+7)%7);
var r=new Date(Q);
r.setUTCDate(r.getUTCDate()+42);
r=r.valueOf();
var B=[];
var F;
while(Q.valueOf()<r){if(Q.getUTCDay()===this.o.weekStart){B.push("<tr>");
if(this.o.calendarWeeks){var t=new Date(+Q+(this.o.weekStart-Q.getUTCDay()-7)%7*86400000),x=new Date(Number(t)+(7+4-t.getUTCDay())%7*86400000),v=new Date(Number(v=o(x.getUTCFullYear(),0,1))+(7+4-v.getUTCDay())%7*86400000),D=(x-v)/86400000/7+1;
B.push('<td class="cw">'+D+"</td>")
}}F=this.getClassNames(Q);
F.push("day");
if(this.o.beforeShowDay!==k.noop){var E=this.o.beforeShowDay(this._utc_to_local(Q));
if(E===f){E={}
}else{if(typeof(E)==="boolean"){E={enabled:E}
}else{if(typeof(E)==="string"){E={classes:E}
}}}if(E.enabled===false){F.push("disabled")
}if(E.classes){F=F.concat(E.classes.split(/\s+/))
}if(E.tooltip){w=E.tooltip
}}F=k.unique(F);
B.push('<td class="'+F.join(" ")+'"'+(w?' title="'+w+'"':"")+">"+Q.getUTCDate()+"</td>");
if(Q.getUTCDay()===this.o.weekEnd){B.push("</tr>")
}Q.setUTCDate(Q.getUTCDate()+1)
}this.picker.find(".datepicker-days tbody").empty().append(B.join(""));
var y=this.picker.find(".datepicker-months").find("th:eq(1)").text(C).end().find("span").removeClass("active");
k.each(this.dates,function(R,S){if(S.getUTCFullYear()===C){y.eq(S.getUTCMonth()).addClass("active")
}});
if(C<H||C>z){y.addClass("disabled")
}if(C===H){y.slice(0,L).addClass("disabled")
}if(C===z){y.slice(I+1).addClass("disabled")
}B="";
C=parseInt(C/10,10)*10;
var P=this.picker.find(".datepicker-years").find("th:eq(1)").text(C+"-"+(C+9)).end().find("td");
C-=1;
var G=k.map(this.dates,function(R){return R.getUTCFullYear()
}),M;
for(var J=-1;
J<11;
J++){M=["year"];
if(J===-1){M.push("old")
}else{if(J===10){M.push("new")
}}if(k.inArray(C,G)!==-1){M.push("active")
}if(C<H||C>z){M.push("disabled")
}B+='<span class="'+M.join(" ")+'">'+C+"</span>";
C+=1
}P.html(B)
},updateNavArrows:function(){if(!this._allow_update){return
}var u=new Date(this.viewDate),r=u.getUTCFullYear(),t=u.getUTCMonth();
switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&r<=this.o.startDate.getUTCFullYear()&&t<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.o.endDate!==Infinity&&r>=this.o.endDate.getUTCFullYear()&&t>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break;
case 1:case 2:if(this.o.startDate!==-Infinity&&r<=this.o.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})
}else{this.picker.find(".prev").css({visibility:"visible"})
}if(this.o.endDate!==Infinity&&r>=this.o.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})
}else{this.picker.find(".next").css({visibility:"visible"})
}break
}},click:function(w){w.preventDefault();
var x=k(w.target).closest("span, td, th"),z,y,A;
if(x.length===1){switch(x[0].nodeName.toLowerCase()){case"th":switch(x[0].className){case"datepicker-switch":this.showMode(1);
break;
case"prev":case"next":var r=n.modes[this.viewMode].navStep*(x[0].className==="prev"?-1:1);
switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,r);
this._trigger("changeMonth",this.viewDate);
break;
case 1:case 2:this.viewDate=this.moveYear(this.viewDate,r);
if(this.viewMode===1){this._trigger("changeYear",this.viewDate)
}break
}this.fill();
break;
case"today":var t=new Date();
t=o(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0);
this.showMode(-2);
var u=this.o.todayBtn==="linked"?null:"view";
this._setDate(t,u);
break;
case"clear":var v;
if(this.isInput){v=this.element
}else{if(this.component){v=this.element.find("input")
}}if(v){v.val("").change()
}this.update();
this._trigger("changeDate");
if(this.o.autoclose){this.hide()
}break
}break;
case"span":if(!x.is(".disabled")){this.viewDate.setUTCDate(1);
if(x.is(".month")){A=1;
y=x.parent().find("span").index(x);
z=this.viewDate.getUTCFullYear();
this.viewDate.setUTCMonth(y);
this._trigger("changeMonth",this.viewDate);
if(this.o.minViewMode===1){this._setDate(o(z,y,A))
}}else{A=1;
y=0;
z=parseInt(x.text(),10)||0;
this.viewDate.setUTCFullYear(z);
this._trigger("changeYear",this.viewDate);
if(this.o.minViewMode===2){this._setDate(o(z,y,A))
}}this.showMode(-1);
this.fill()
}break;
case"td":if(x.is(".day")&&!x.is(".disabled")){A=parseInt(x.text(),10)||1;
z=this.viewDate.getUTCFullYear();
y=this.viewDate.getUTCMonth();
if(x.is(".old")){if(y===0){y=11;
z-=1
}else{y-=1
}}else{if(x.is(".new")){if(y===11){y=0;
z+=1
}else{y+=1
}}}this._setDate(o(z,y,A))
}break
}}if(this.picker.is(":visible")&&this._focused_from){k(this._focused_from).focus()
}delete this._focused_from
},_toggle_multidate:function(t){var r=this.dates.contains(t);
if(!t){this.dates.clear()
}else{if(r!==-1){this.dates.remove(r)
}else{this.dates.push(t)
}}if(typeof this.o.multidate==="number"){while(this.dates.length>this.o.multidate){this.dates.remove(0)
}}},_setDate:function(r,u){if(!u||u==="date"){this._toggle_multidate(r&&new Date(r))
}if(!u||u==="view"){this.viewDate=r&&new Date(r)
}this.fill();
this.setValue();
this._trigger("changeDate");
var t;
if(this.isInput){t=this.element
}else{if(this.component){t=this.element.find("input")
}}if(t){t.change()
}if(this.o.autoclose&&(!u||u==="date")){this.hide()
}},moveMonth:function(r,t){if(!r){return f
}if(!t){return r
}var w=new Date(r.valueOf()),A=w.getUTCDate(),x=w.getUTCMonth(),v=Math.abs(t),z,y;
t=t>0?1:-1;
if(v===1){y=t===-1?function(){return w.getUTCMonth()===x
}:function(){return w.getUTCMonth()!==z
};
z=x+t;
w.setUTCMonth(z);
if(z<0||z>11){z=(z+12)%12
}}else{for(var u=0;
u<v;
u++){w=this.moveMonth(w,t)
}z=w.getUTCMonth();
w.setUTCDate(A);
y=function(){return z!==w.getUTCMonth()
}
}while(y()){w.setUTCDate(--A);
w.setUTCMonth(z)
}return w
},moveYear:function(t,r){return this.moveMonth(t,r*12)
},dateWithinRange:function(r){return r>=this.o.startDate&&r<=this.o.endDate
},keydown:function(y){if(this.picker.is(":not(:visible)")){if(y.keyCode===27){this.show()
}return
}var u=false,t,r,w,x=this.focusDate||this.viewDate;
switch(y.keyCode){case 27:if(this.focusDate){this.focusDate=null;
this.viewDate=this.dates.get(-1)||this.viewDate;
this.fill()
}else{this.hide()
}y.preventDefault();
break;
case 37:case 39:if(!this.o.keyboardNavigation){break
}t=y.keyCode===37?-1:1;
if(y.ctrlKey){r=this.moveYear(this.dates.get(-1)||g(),t);
w=this.moveYear(x,t);
this._trigger("changeYear",this.viewDate)
}else{if(y.shiftKey){r=this.moveMonth(this.dates.get(-1)||g(),t);
w=this.moveMonth(x,t);
this._trigger("changeMonth",this.viewDate)
}else{r=new Date(this.dates.get(-1)||g());
r.setUTCDate(r.getUTCDate()+t);
w=new Date(x);
w.setUTCDate(x.getUTCDate()+t)
}}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=w;
this.setValue();
this.fill();
y.preventDefault()
}break;
case 38:case 40:if(!this.o.keyboardNavigation){break
}t=y.keyCode===38?-1:1;
if(y.ctrlKey){r=this.moveYear(this.dates.get(-1)||g(),t);
w=this.moveYear(x,t);
this._trigger("changeYear",this.viewDate)
}else{if(y.shiftKey){r=this.moveMonth(this.dates.get(-1)||g(),t);
w=this.moveMonth(x,t);
this._trigger("changeMonth",this.viewDate)
}else{r=new Date(this.dates.get(-1)||g());
r.setUTCDate(r.getUTCDate()+t*7);
w=new Date(x);
w.setUTCDate(x.getUTCDate()+t*7)
}}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=w;
this.setValue();
this.fill();
y.preventDefault()
}break;
case 32:break;
case 13:x=this.focusDate||this.dates.get(-1)||this.viewDate;
this._toggle_multidate(x);
u=true;
this.focusDate=null;
this.viewDate=this.dates.get(-1)||this.viewDate;
this.setValue();
this.fill();
if(this.picker.is(":visible")){y.preventDefault();
if(this.o.autoclose){this.hide()
}}break;
case 9:this.focusDate=null;
this.viewDate=this.dates.get(-1)||this.viewDate;
this.fill();
this.hide();
break
}if(u){if(this.dates.length){this._trigger("changeDate")
}else{this._trigger("clearDate")
}var v;
if(this.isInput){v=this.element
}else{if(this.component){v=this.element.find("input")
}}if(v){v.change()
}}},showMode:function(r){if(r){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+r))
}this.picker.find(">div").hide().filter(".datepicker-"+n.modes[this.viewMode].clsName).css("display","block");
this.updateNavArrows()
}};
var q=function(t,r){this.element=k(t);
this.inputs=k.map(r.inputs,function(u){return u.jquery?u[0]:u
});
delete r.inputs;
k(this.inputs).datepicker(r).bind("changeDate",k.proxy(this.dateUpdated,this));
this.pickers=k.map(this.inputs,function(u){return k(u).data("datepicker")
});
this.updateDates()
};
q.prototype={updateDates:function(){this.dates=k.map(this.pickers,function(r){return r.getUTCDate()
});
this.updateRanges()
},updateRanges:function(){var r=k.map(this.dates,function(t){return t.valueOf()
});
k.each(this.pickers,function(t,u){u.setRange(r)
})
},dateUpdated:function(v){if(this.updating){return
}this.updating=true;
var w=k(v.target).data("datepicker"),u=w.getUTCDate(),t=k.inArray(v.target,this.inputs),r=this.inputs.length;
if(t===-1){return
}k.each(this.pickers,function(x,y){if(!y.getUTCDate()){y.setUTCDate(u)
}});
if(u<this.dates[t]){while(t>=0&&u<this.dates[t]){this.pickers[t--].setUTCDate(u)
}}else{if(u>this.dates[t]){while(t<r&&u>this.dates[t]){this.pickers[t++].setUTCDate(u)
}}}this.updateDates();
delete this.updating
},remove:function(){k.map(this.pickers,function(r){r.remove()
});
delete this.element.data().datepicker
}};
function j(v,y){var x=k(v).data(),r={},w,u=new RegExp("^"+y.toLowerCase()+"([A-Z])");
y=new RegExp("^"+y.toLowerCase());
function z(B,A){return A.toLowerCase()
}for(var t in x){if(y.test(t)){w=t.replace(u,z);
r[w]=x[t]
}}return r
}function a(u){var r={};
if(!b[u]){u=u.split("-")[0];
if(!b[u]){return
}}var t=b[u];
k.each(p,function(w,v){if(v in t){r[v]=t[v]
}});
return r
}var d=k.fn.datepickerBootstrap;
k.fn.datepickerBootstrap=function(u){var r=Array.apply(null,arguments);
r.shift();
var t;
this.each(function(){var C=k(this),A=C.data("datepicker"),w=typeof u==="object"&&u;
if(!A){var y=j(this,"date"),v=k.extend({},h,y,w),x=a(v.language),z=k.extend({},h,x,y,w);
if(C.is(".input-daterange")||z.inputs){var B={inputs:z.inputs||C.find("input").toArray()};
C.data("datepicker",(A=new q(this,k.extend(z,B))))
}else{C.data("datepicker",(A=new l(this,z)))
}}if(typeof u==="string"&&typeof A[u]==="function"){t=A[u].apply(A,r);
if(t!==f){return false
}}});
if(t!==f){return t
}else{return this
}};
var h=k.fn.datepickerBootstrap.defaults={autoclose:false,beforeShowDay:k.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:"mm-dd-yyyy",keyboardNavigation:true,language:"en",minViewMode:0,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};
var p=k.fn.datepickerBootstrap.locale_opts=["format","rtl","weekStart"];
k.fn.datepickerBootstrap.Constructor=l;
var b=k.fn.datepickerBootstrap.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};
var n={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(r){return(((r%4===0)&&(r%100!==0))||(r%400===0))
},getDaysInMonth:function(r,t){return[31,(n.isLeapYear(r)?29:28),31,30,31,30,31,31,30,31,30,31][t]
},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(u){var r=u.replace(this.validParts,"\0").split("\0"),t=u.match(this.validParts);
if(!r||!r.length||!t||t.length===0){throw new Error("Invalid date format.")
}return{separators:r,parts:t}
},parseDate:function(I,F,C){if(!I){return f
}if(I instanceof Date){return I
}if(typeof F==="string"){F=n.parseFormat(F)
}var u=/([\-+]\d+)([dmwy])/,A=I.match(/([\-+]\d+)([dmwy])/g),B,z,E;
if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(I)){I=new Date();
for(E=0;
E<A.length;
E++){B=u.exec(A[E]);
z=parseInt(B[1]);
switch(B[2]){case"d":I.setUTCDate(I.getUTCDate()+z);
break;
case"m":I=l.prototype.moveMonth.call(l.prototype,I,z);
break;
case"w":I.setUTCDate(I.getUTCDate()+z*7);
break;
case"y":I=l.prototype.moveYear.call(l.prototype,I,z);
break
}}return o(I.getUTCFullYear(),I.getUTCMonth(),I.getUTCDate(),0,0,0)
}A=I&&I.match(this.nonpunctuation)||[];
I=new Date();
var v={},G=["yyyy","yy","M","MM","m","mm","d","dd"],y={yyyy:function(L,K){return L.setUTCFullYear(K)
},yy:function(L,K){return L.setUTCFullYear(2000+K)
},m:function(L,K){if(isNaN(L)){return L
}K-=1;
while(K<0){K+=12
}K%=12;
L.setUTCMonth(K);
while(L.getUTCMonth()!==K){L.setUTCDate(L.getUTCDate()-1)
}return L
},d:function(L,K){return L.setUTCDate(K)
}},J,t;
y.M=y.MM=y.mm=y.m;
y.dd=y.d;
I=o(I.getFullYear(),I.getMonth(),I.getDate(),0,0,0);
var r=F.parts.slice();
if(A.length!==r.length){r=k(r).filter(function(K,L){return k.inArray(L,G)!==-1
}).toArray()
}function H(){var K=this.slice(0,A[E].length),L=A[E].slice(0,K.length);
return K===L
}if(A.length===r.length){var D;
for(E=0,D=r.length;
E<D;
E++){J=parseInt(A[E],10);
B=r[E];
if(isNaN(J)){switch(B){case"MM":t=k(b[C].months).filter(H);
J=k.inArray(t[0],b[C].months)+1;
break;
case"M":t=k(b[C].monthsShort).filter(H);
J=k.inArray(t[0],b[C].monthsShort)+1;
break
}}v[B]=J
}var w,x;
for(E=0;
E<G.length;
E++){x=G[E];
if(x in v&&!isNaN(v[x])){w=new Date(I);
y[x](w,v[x]);
if(!isNaN(w)){I=w
}}}}return I
},formatDate:function(r,w,y){if(!r){return""
}if(typeof w==="string"){w=n.parseFormat(w)
}var x={d:r.getUTCDate(),D:b[y].daysShort[r.getUTCDay()],DD:b[y].days[r.getUTCDay()],m:r.getUTCMonth()+1,M:b[y].monthsShort[r.getUTCMonth()],MM:b[y].months[r.getUTCMonth()],yy:r.getUTCFullYear().toString().substring(2),yyyy:r.getUTCFullYear()};
x.dd=(x.d<10?"0":"")+x.d;
x.mm=(x.m<10?"0":"")+x.m;
r=[];
var v=k.extend([],w.separators);
for(var u=0,t=w.parts.length;
u<=t;
u++){if(v.length){r.push(v.shift())
}r.push(x[w.parts[u]])
}return r.join("")
},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};
n.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+n.headTemplate+"<tbody></tbody>"+n.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+n.headTemplate+n.contTemplate+n.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+n.headTemplate+n.contTemplate+n.footTemplate+"</table></div></div>";
k.fn.datepickerBootstrap.DPGlobal=n;
k.fn.datepickerBootstrap.noConflict=function(){k.fn.datepickerBootstrap=d;
return this
};
k(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var r=k(this);
if(r.data("datepicker")){return
}t.preventDefault();
r.datepicker("show")
});
k(function(){k('[data-provide="datepicker-inline"]').datepickerBootstrap()
})
}(window.jQuery));
(function(c){var b=0,a=0;
c.fn.flexisel=function(n){var g=c.extend({visibleItems:4,animationSpeed:200,autoPlay:false,autoPlaySpeed:3000,pauseOnHover:true,setMaxWidthAndHeight:false,enableResponsiveBreakpoints:true,flipPage:false,clone:true,responsiveBreakpoints:{portrait:{changePoint:480,visibleItems:1},landscape:{changePoint:640,visibleItems:2},tablet:{changePoint:768,visibleItems:3}}},n);
var h=c(this);
var f=c.extend(g,n);
var k;
var l=true;
var j=f.visibleItems;
var m=h.children().length;
var d=[];
var e={init:function(){a++;
return this.each(function(){e.appendHTML();
e.setEventHandlers();
e.initializeItems()
})
},initializeItems:function(){var r=h.parent();
var q=r.height();
var p=h.children();
e.sortResponsiveObject(f.responsiveBreakpoints);
var o=r.width();
k=(o)/j;
p.width(k);
if(f.clone){p.last().insertBefore(p.first());
p.last().insertBefore(p.first());
h.css({left:-k})
}h.fadeIn();
c(window).trigger("resize");
c(".nbs-flexisel-item").each(function(){var t=c(this);
t.on("focus",function(v){c(this).on("keypress",function(){if(v.keyCode===13){t.find("a").trigger("click")
}})
});
var u=c("body");
t.find("a.thumbnail").on("click",function(w){w.preventDefault();
if(u.find("#imageGalleryModal").length==0){f.modalForImageGallery+='<div id="imageGalleryModal" class="modal fade" tabindex="-1" role="dialog">';
f.modalForImageGallery+='<div class="vertical-alignment-helper">';
f.modalForImageGallery+='<div class="modal-dialog vertical-align-center">';
f.modalForImageGallery+='<div class="modal-content">';
f.modalForImageGallery+='<div class="modal-header img-pop-up-header"><button type="button" class="close popup-img-close" data-dismiss="modal">x</button></div>';
f.modalForImageGallery+='<div class="modal-body text-center"></div>';
f.modalForImageGallery+='<div class="modal-footer img-pop-up-footer"></div>';
f.modalForImageGallery+="</div></div></div></div>"
}var y=c(this).attr("href");
y=(y==""||typeof(y)==="undefined")?"javascript:void(0)":y;
var x=c(this).find("img").attr("src");
u.append(f.modalForImageGallery);
var v=c("#imageGalleryModal").modal({backdrop:"static",keyboard:false,show:true});
v.find(".modal-body").html('<a href="'+y+'" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-left" target="_blank"><img src="'+x+'" class="img-responsive row" style="display:inline" /></a>')
})
})
},appendHTML:function(){h.addClass("nbs-flexisel-ul");
h.wrap("<div class='nbs-flexisel-container' tab-index='0'><div class='nbs-flexisel-inner'></div></div>");
h.find("li").addClass("nbs-flexisel-item").attr("tabindex","0");
var r=h.parent();
if(f.setMaxWidthAndHeight){var q=c(".nbs-flexisel-item img").width();
var p=c(".nbs-flexisel-item img").height();
c(".nbs-flexisel-item img").css("max-width",q);
c(".nbs-flexisel-item img").css("max-height",p)
}c("<div class='nbs-flexisel-nav-left' tabindex='0' style='width:15px;height:55px;'></div><div class='nbs-flexisel-nav-right' style='width:15px;height:55px;'></div>").insertAfter(r);
if(f.clone){var o=h.children().clone();
h.append(o)
}},setEventHandlers:function(){var q=h.parent();
var t=q.parent();
var p=h.children();
var r=t.find(".nbs-flexisel-nav-left");
var o=t.find(".nbs-flexisel-nav-right");
c(window).on("resize",function(u){resizeTimeout=setTimeout(function(){e.setResponsiveEvents();
var v=c(q).width();
var w=c(q).height();
k=(v)/j;
p.width(k);
if(f.clone){h.css({left:-k})
}else{h.css({left:0})
}if(!f.clone&&m<=j){r.add(o).css("visibility","hidden")
}else{r.add(o).css("visibility","visible");
var x=(r.height())/2;
var y=(w/2)-x;
r.css("top",y+"px");
o.css("top",y+"px")
}},100)
});
c('a[data-toggle="tab"]').on("show.bs.tab",function(v){var u=c(v.target);
if(b==0){var w=u.attr("href").split("#");
c("#"+w[1]).find(".nbs-flexisel-nav-right").trigger("click");
setTimeout(function(){c("#"+w[1]).find(".nbs-flexisel-nav-left,.nbs-flexisel-nav-right").height(c("#"+w[1]).find(".nbs-flexisel-inner").height()).addClass("forcedTopZero")
},1000)
}b++;
if(a==b){b=0
}});
c('[id^="myTab_tab_panel_"],.panel-collapse').on("show.bs.collapse",function(v){var u=c(v.target);
if(b==0){c(v.target).find(".nbs-flexisel-nav-right").trigger("click");
setTimeout(function(){var w=u.find(".nbs-flexisel-nav-left,.nbs-flexisel-nav-right");
w.height(u.find(".nbs-flexisel-inner").height()).addClass("forcedTopZero")
},1000)
}b++;
if(a==b){b=0
}});
c(r).on({click:function(){e.scrollLeft()
},focus:function(){c(this).on("keypress",function(u){if(u.keyCode===13){e.scrollLeft()
}})
}});
c(o).on({click:function(){e.scrollRight()
},focus:function(){c(this).on("keypress",function(u){if(u.keyCode===13){e.scrollRight()
}})
}});
if(f.pauseOnHover===true){c(".nbs-flexisel-item").on({mouseenter:function(){l=false
},mouseleave:function(){l=true
}})
}if(f.autoPlay===true){setInterval(function(){if(l===true){e.scrollRight()
}},f.autoPlaySpeed)
}h[0].addEventListener("touchstart",e.touchHandler.handleTouchStart,false);
h[0].addEventListener("touchmove",e.touchHandler.handleTouchMove,false)
},setResponsiveEvents:function(){var o=c("html").width();
if(f.enableResponsiveBreakpoints){var q=d[d.length-1].changePoint;
for(var p in d){if(o>=q){j=f.visibleItems;
break
}else{if(o<d[p].changePoint){j=d[p].visibleItems;
break
}else{continue
}}}}},sortResponsiveObject:function(q){var o=[];
for(var p in q){o.push(q[p])
}o.sort(function(t,r){return t.changePoint-r.changePoint
});
d=o
},scrollLeft:function(){if(h.position().left<0){if(l===true){l=false;
var r=h.parent();
var p=r.width();
k=(p)/j;
var q=h.children();
var o=(f.flipPage)?p:k;
h.animate({left:"+="+o},{queue:false,duration:f.animationSpeed,easing:"linear",complete:function(){if(f.clone){q.last().insertBefore(q.first())
}e.adjustScroll();
l=true
}})
}}},scrollRight:function(){var u=h.parent();
var p=u.width();
k=(p)/j;
var t=(k-p);
var r=(h.position().left+((m-j)*k)-p);
var o=(f.flipPage)?p:k;
if((t<=Math.ceil(r))&&(!f.clone)){if(l===true){l=false;
h.animate({left:"-="+o},{queue:false,duration:f.animationSpeed,easing:"linear",complete:function(){e.adjustScroll();
l=true
}})
}}else{if(f.clone){if(l===true){l=false;
var q=h.children();
h.animate({left:"-="+o},{queue:false,duration:f.animationSpeed,easing:"linear",complete:function(){q.first().insertAfter(q.last());
e.adjustScroll();
l=true
}})
}}}},adjustScroll:function(){var r=h.parent();
var q=h.children();
var p=r.width();
k=(p)/j;
q.width(k);
var o=(f.flipPage)?p:k;
if(f.clone){h.css({left:-o})
}},touchHandler:{xDown:null,yDown:null,handleTouchStart:function(o){this.xDown=o.touches[0].clientX;
this.yDown=o.touches[0].clientY
},handleTouchMove:function(o){if(!this.xDown||!this.yDown){return
}var r=o.touches[0].clientX;
var p=o.touches[0].clientY;
var t=this.xDown-r;
var q=this.yDown-p;
if(Math.abs(t)>0){if(t>0){e.scrollRight()
}else{e.scrollLeft()
}}this.xDown=null;
this.yDown=null;
l=true
}}};
if(e[n]){return e[n].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof n==="object"||!n){return e.init.apply(this)
}else{c.error('Method "'+method+'" does not exist in flexisel plugin!')
}}}
})(jQuery);
/*!
 * SmartMenus jQuery Plugin - v1.0.0 - January 27, 2016
 * http://www.smartmenus.org/
 *
 * Copyright Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com
 *
 * Licensed MIT
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof module==="object"&&typeof module.exports==="object"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=[],e=!!window.createPopup,f=false,d="ontouchstart" in window,h=false,g=window.requestAnimationFrame||function(m){return setTimeout(m,1000/60)
},c=window.cancelAnimationFrame||function(m){clearTimeout(m)
};
function l(n){var o=".smartmenus_mouse";
if(!h&&!n){var p=true,m=null;
a(document).bind(j([["mousemove",function(u){var v={x:u.pageX,y:u.pageY,timeStamp:new Date().getTime()};
if(m){var r=Math.abs(m.x-v.x),q=Math.abs(m.y-v.y);
if((r>0||q>0)&&r<=2&&q<=2&&v.timeStamp-m.timeStamp<=300){f=true;
if(p){var t=a(u.target).closest("a");
if(t.is("a")){a.each(b,function(){if(a.contains(this.$root[0],t[0])){this.itemEnter({currentTarget:t[0]});
return false
}})
}p=false
}}}m=v
}],[d?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(q){if(k(q.originalEvent)){f=false
}}]],o));
h=true
}else{if(h&&n){a(document).unbind(o);
h=false
}}}function k(m){return !/^(4|mouse)$/.test(m.pointerType)
}function j(m,o){if(!o){o=""
}var n={};
a.each(m,function(p,q){n[q[0].split(" ").join(o+" ")+o]=q[1]
});
return n
}a.SmartMenus=function(n,m){this.$root=a(n);
this.opts=m;
this.rootId="";
this.accessIdPrefix="";
this.$subArrow=null;
this.activatedItems=[];
this.visibleSubMenus=[];
this.showTimeout=0;
this.hideTimeout=0;
this.scrollTimeout=0;
this.clickActivated=false;
this.focusActivated=false;
this.zIndexInc=0;
this.idInc=0;
this.$firstLink=null;
this.$firstSub=null;
this.disabled=false;
this.$disableOverlay=null;
this.$touchScrollingSub=null;
this.cssTransforms3d="perspective" in n.style||"webkitPerspective" in n.style;
this.wasCollapsible=false;
this.init()
};
a.extend(a.SmartMenus,{hideAll:function(){a.each(b,function(){this.menuHideAll()
})
},destroy:function(){while(b.length){b[0].destroy()
}l(true)
},prototype:{init:function(o){var m=this;
if(!o){b.push(this);
this.rootId=(new Date().getTime()+Math.random()+"").replace(/\D/g,"");
this.accessIdPrefix="sm-"+this.rootId+"-";
if(this.$root.hasClass("sm-rtl")){this.opts.rightToLeftSubMenus=true
}var t=".smartmenus";
this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(j([["mouseover focusin",a.proxy(this.rootOver,this)],["mouseout focusout",a.proxy(this.rootOut,this)],["keydown",a.proxy(this.rootKeyDown,this)]],t)).delegate("a",j([["mouseenter",a.proxy(this.itemEnter,this)],["mouseleave",a.proxy(this.itemLeave,this)],["mousedown",a.proxy(this.itemDown,this)],["focus",a.proxy(this.itemFocus,this)],["blur",a.proxy(this.itemBlur,this)],["click",a.proxy(this.itemClick,this)]],t));
t+=this.rootId;
if(this.opts.hideOnClick){a(document).bind(j([["touchstart",a.proxy(this.docTouchStart,this)],["touchmove",a.proxy(this.docTouchMove,this)],["touchend",a.proxy(this.docTouchEnd,this)],["click",a.proxy(this.docClick,this)]],t))
}a(window).bind(j([["resize orientationchange",a.proxy(this.winResize,this)]],t));
if(this.opts.subIndicators){this.$subArrow=a("<span/>").addClass("sub-arrow");
if(this.opts.subIndicatorsText){this.$subArrow.html(this.opts.subIndicatorsText)
}}l()
}this.$firstSub=this.$root.find("ul").each(function(){m.menuInit(a(this))
}).eq(0);
this.$firstLink=this.$root.find("a").eq(0);
if(this.opts.markCurrentItem){var q=/(index|default)\.[^#\?\/]*/i,n=/#.*/,r=window.location.href.replace(q,""),p=r.replace(n,"");
this.$root.find("a").each(function(){var u=this.href.replace(q,""),v=a(this);
if(u==r||u==p){v.addClass("current");
if(m.opts.markCurrentTree){v.parentsUntil("[data-smartmenus-id]","ul").each(function(){a(this).dataSM("parent-a").addClass("current")
})
}}})
}this.wasCollapsible=this.isCollapsible()
},destroy:function(n){if(!n){var o=".smartmenus";
this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(o).undelegate(o);
o+=this.rootId;
a(document).unbind(o);
a(window).unbind(o);
if(this.opts.subIndicators){this.$subArrow=null
}}this.menuHideAll();
var m=this;
this.$root.find("ul").each(function(){var p=a(this);
if(p.dataSM("scroll-arrows")){p.dataSM("scroll-arrows").remove()
}if(p.dataSM("shown-before")){if(m.opts.subMenusMinWidth||m.opts.subMenusMaxWidth){p.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap")
}if(p.dataSM("scroll-arrows")){p.dataSM("scroll-arrows").remove()
}p.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})
}if((p.attr("id")||"").indexOf(m.accessIdPrefix)==0){p.removeAttr("id")
}}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded");
this.$root.find("a.has-submenu").each(function(){var p=a(this);
if(p.attr("id").indexOf(m.accessIdPrefix)==0){p.removeAttr("id")
}}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub");
if(this.opts.subIndicators){this.$root.find("span.sub-arrow").remove()
}if(this.opts.markCurrentItem){this.$root.find("a.current").removeClass("current")
}if(!n){this.$root=null;
this.$firstLink=null;
this.$firstSub=null;
if(this.$disableOverlay){this.$disableOverlay.remove();
this.$disableOverlay=null
}b.splice(a.inArray(this,b),1)
}},disable:function(m){if(!this.disabled){this.menuHideAll();
if(!m&&!this.opts.isPopup&&this.$root.is(":visible")){var n=this.$root.offset();
this.$disableOverlay=a('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:n.top,left:n.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(true),opacity:0}).appendTo(document.body)
}this.disabled=true
}},docClick:function(m){if(this.$touchScrollingSub){this.$touchScrollingSub=null;
return
}if(this.visibleSubMenus.length&&!a.contains(this.$root[0],m.target)||a(m.target).is("a")){this.menuHideAll()
}},docTouchEnd:function(n){if(!this.lastTouch){return
}if(this.visibleSubMenus.length&&(this.lastTouch.x2===undefined||this.lastTouch.x1==this.lastTouch.x2)&&(this.lastTouch.y2===undefined||this.lastTouch.y1==this.lastTouch.y2)&&(!this.lastTouch.target||!a.contains(this.$root[0],this.lastTouch.target))){if(this.hideTimeout){clearTimeout(this.hideTimeout);
this.hideTimeout=0
}var m=this;
this.hideTimeout=setTimeout(function(){m.menuHideAll()
},350)
}this.lastTouch=null
},docTouchMove:function(n){if(!this.lastTouch){return
}var m=n.originalEvent.touches[0];
this.lastTouch.x2=m.pageX;
this.lastTouch.y2=m.pageY
},docTouchStart:function(n){var m=n.originalEvent.touches[0];
this.lastTouch={x1:m.pageX,y1:m.pageY,target:m.target}
},enable:function(){if(this.disabled){if(this.$disableOverlay){this.$disableOverlay.remove();
this.$disableOverlay=null
}this.disabled=false
}},getClosestMenu:function(n){var m=a(n).closest("ul");
while(m.dataSM("in-mega")){m=m.parent().closest("ul")
}return m[0]||null
},getHeight:function(m){return this.getOffset(m,true)
},getOffset:function(o,m){var n;
if(o.css("display")=="none"){n={position:o[0].style.position,visibility:o[0].style.visibility};
o.css({position:"absolute",visibility:"hidden"}).show()
}var p=o[0].getBoundingClientRect&&o[0].getBoundingClientRect(),q=p&&(m?p.height||p.bottom-p.top:p.width||p.right-p.left);
if(!q&&q!==0){q=m?o[0].offsetHeight:o[0].offsetWidth
}if(n){o.hide().css(n)
}return q
},getStartZIndex:function(m){var n=parseInt(this[m?"$root":"$firstSub"].css("z-index"));
if(!m&&isNaN(n)){n=parseInt(this.$root.css("z-index"))
}return !isNaN(n)?n:1
},getTouchPoint:function(m){return m.touches&&m.touches[0]||m.changedTouches&&m.changedTouches[0]||m
},getViewport:function(m){var n=m?"Height":"Width",p=document.documentElement["client"+n],o=window["inner"+n];
if(o){p=Math.min(p,o)
}return p
},getViewportHeight:function(){return this.getViewport(true)
},getViewportWidth:function(){return this.getViewport()
},getWidth:function(m){return this.getOffset(m)
},handleEvents:function(){return !this.disabled&&this.isCSSOn()
},handleItemEvents:function(m){return this.handleEvents()&&!this.isLinkInMegaMenu(m)
},isCollapsible:function(){return this.$firstSub.css("position")=="static"
},isCSSOn:function(){return this.$firstLink.css("display")=="block"
},isFixed:function(){var m=this.$root.css("position")=="fixed";
if(!m){this.$root.parentsUntil("body").each(function(){if(a(this).css("position")=="fixed"){m=true;
return false
}})
}return m
},isLinkInMegaMenu:function(m){return a(this.getClosestMenu(m[0])).hasClass("mega-menu")
},isTouchMode:function(){return !f||this.opts.noMouseOver||this.isCollapsible()
},itemActivate:function(q,m){var o=q.closest("ul"),r=o.dataSM("level");
if(r>1&&(!this.activatedItems[r-2]||this.activatedItems[r-2][0]!=o.dataSM("parent-a")[0])){var n=this;
a(o.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(o).each(function(){n.itemActivate(a(this).dataSM("parent-a"))
})
}if(!this.isCollapsible()||m){this.menuHideSubMenus(!this.activatedItems[r-1]||this.activatedItems[r-1][0]!=q[0]?r-1:r)
}this.activatedItems[r-1]=q;
if(this.$root.triggerHandler("activate.smapi",q[0])===false){return
}var p=q.dataSM("sub");
if(p&&(this.isTouchMode()||(!this.opts.showOnClick||this.clickActivated))){this.menuShow(p)
}},itemBlur:function(n){var m=a(n.currentTarget);
if(!this.handleItemEvents(m)){return
}this.$root.triggerHandler("blur.smapi",m[0])
},itemClick:function(p){var o=a(p.currentTarget);
if(!this.handleItemEvents(o)){return
}if(this.$touchScrollingSub&&this.$touchScrollingSub[0]==o.closest("ul")[0]){this.$touchScrollingSub=null;
p.stopPropagation();
return false
}if(this.$root.triggerHandler("click.smapi",o[0])===false){return false
}var q=a(p.target).is("span.sub-arrow"),n=o.dataSM("sub"),m=n?n.dataSM("level")==2:false;
if(n&&!n.is(":visible")){if(this.opts.showOnClick&&m){this.clickActivated=true
}this.itemActivate(o);
if(n.is(":visible")){this.focusActivated=true;
return false
}}else{if(this.isCollapsible()&&q){this.itemActivate(o);
this.menuHide(n);
return false
}}if(this.opts.showOnClick&&m||o.hasClass("disabled")||this.$root.triggerHandler("select.smapi",o[0])===false){return false
}},itemDown:function(n){var m=a(n.currentTarget);
if(!this.handleItemEvents(m)){return
}m.dataSM("mousedown",true)
},itemEnter:function(o){var n=a(o.currentTarget);
if(!this.handleItemEvents(n)){return
}if(!this.isTouchMode()){if(this.showTimeout){clearTimeout(this.showTimeout);
this.showTimeout=0
}var m=this;
this.showTimeout=setTimeout(function(){m.itemActivate(n)
},this.opts.showOnClick&&n.closest("ul").dataSM("level")==1?1:this.opts.showTimeout)
}this.$root.triggerHandler("mouseenter.smapi",n[0])
},itemFocus:function(n){var m=a(n.currentTarget);
if(!this.handleItemEvents(m)){return
}if(this.focusActivated&&(!this.isTouchMode()||!m.dataSM("mousedown"))&&(!this.activatedItems.length||this.activatedItems[this.activatedItems.length-1][0]!=m[0])){this.itemActivate(m,true)
}this.$root.triggerHandler("focus.smapi",m[0])
},itemLeave:function(n){var m=a(n.currentTarget);
if(!this.handleItemEvents(m)){return
}if(!this.isTouchMode()){m[0].blur();
if(this.showTimeout){clearTimeout(this.showTimeout);
this.showTimeout=0
}}m.removeDataSM("mousedown");
this.$root.triggerHandler("mouseleave.smapi",m[0])
},menuHide:function(n){if(this.$root.triggerHandler("beforehide.smapi",n[0])===false){return
}n.stop(true,true);
if(n.css("display")!="none"){var m=function(){n.css("z-index","")
};
if(this.isCollapsible()){if(this.opts.collapsibleHideFunction){this.opts.collapsibleHideFunction.call(this,n,m)
}else{n.hide(this.opts.collapsibleHideDuration,m)
}}else{if(this.opts.hideFunction){this.opts.hideFunction.call(this,n,m)
}else{n.hide(this.opts.hideDuration,m)
}}if(n.dataSM("ie-shim")){n.dataSM("ie-shim").remove().css({"-webkit-transform":"",transform:""})
}if(n.dataSM("scroll")){this.menuScrollStop(n);
n.css({"touch-action":"","-ms-touch-action":"","-webkit-transform":"",transform:""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()
}n.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded","false");
n.attr({"aria-expanded":"false","aria-hidden":"true"});
var o=n.dataSM("level");
this.activatedItems.splice(o-1,1);
this.visibleSubMenus.splice(a.inArray(n,this.visibleSubMenus),1);
this.$root.triggerHandler("hide.smapi",n[0])
}},menuHideAll:function(){if(this.showTimeout){clearTimeout(this.showTimeout);
this.showTimeout=0
}var n=this.opts.isPopup?1:0;
for(var m=this.visibleSubMenus.length-1;
m>=n;
m--){this.menuHide(this.visibleSubMenus[m])
}if(this.opts.isPopup){this.$root.stop(true,true);
if(this.$root.is(":visible")){if(this.opts.hideFunction){this.opts.hideFunction.call(this,this.$root)
}else{this.$root.hide(this.opts.hideDuration)
}if(this.$root.dataSM("ie-shim")){this.$root.dataSM("ie-shim").remove()
}}}this.activatedItems=[];
this.visibleSubMenus=[];
this.clickActivated=false;
this.focusActivated=false;
this.zIndexInc=0;
this.$root.triggerHandler("hideAll.smapi")
},menuHideSubMenus:function(o){for(var m=this.activatedItems.length-1;
m>=o;
m--){var n=this.activatedItems[m].dataSM("sub");
if(n){this.menuHide(n)
}}},menuIframeShim:function(m){if(e&&this.opts.overlapControlsInIE&&!m.dataSM("ie-shim")){m.dataSM("ie-shim",a("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))
}},menuInit:function(m){if(!m.dataSM("in-mega")){if(m.hasClass("mega-menu")){m.find("ul").dataSM("in-mega",true)
}var r=2,n=m[0];
while((n=n.parentNode.parentNode)!=this.$root[0]){r++
}var o=m.prevAll("a").eq(-1);
if(!o.length){o=m.prevAll().find("a").eq(-1)
}o.addClass("has-submenu").dataSM("sub",m);
m.dataSM("parent-a",o).dataSM("level",r).parent().dataSM("sub",m);
var p=o.attr("id")||this.accessIdPrefix+(++this.idInc),q=m.attr("id")||this.accessIdPrefix+(++this.idInc);
o.attr({id:p,"aria-haspopup":"true","aria-controls":q,"aria-expanded":"false"});
m.attr({id:q,role:"group","aria-hidden":"true","aria-labelledby":p,"aria-expanded":"false"});
if(this.opts.subIndicators){o[this.opts.subIndicatorsPos](this.$subArrow.clone())
}}},menuPosition:function(M){var t=M.dataSM("parent-a"),F=t.closest("li"),G=F.parent(),m=M.dataSM("level"),v=this.getWidth(M),L=this.getHeight(M),w=t.offset(),p=w.left,n=w.top,r=this.getWidth(t),H=this.getHeight(t),J=a(window),z=J.scrollLeft(),u=J.scrollTop(),B=this.getViewportWidth(),N=this.getViewportHeight(),A=G.parent().is("[data-sm-horizontal-sub]")||m==2&&!G.hasClass("sm-vertical"),D=this.opts.rightToLeftSubMenus&&!F.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&F.is("[data-sm-reverse]"),q=m==2?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,o=m==2?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY,E,C;
if(A){E=D?r-v-q:q;
C=this.opts.bottomToTopSubMenus?-L-o:H+o
}else{E=D?q-v:r-q;
C=this.opts.bottomToTopSubMenus?H-o-L:o
}if(this.opts.keepInViewport){var P=p+E,O=n+C;
if(D&&P<z){E=A?z-P+E:r-q
}else{if(!D&&P+v>z+B){E=A?z+B-v-P+E:q-v
}}if(!A){if(L<N&&O+L>u+N){C+=u+N-L-O
}else{if(L>=N||O<u){C+=u-O
}}}if(A&&(O+L>u+N+0.49||O<u)||!A&&L>N+0.49){var I=this;
if(!M.dataSM("scroll-arrows")){M.dataSM("scroll-arrows",a([a('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],a('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){M.dataSM("scroll").up=a(this).hasClass("scroll-up");
I.menuScroll(M)
},mouseleave:function(x){I.menuScrollStop(M);
I.menuScrollOut(M,x)
},"mousewheel DOMMouseScroll":function(x){x.preventDefault()
}}).insertAfter(M))
}var K=".smartmenus_scroll";
M.dataSM("scroll",{y:this.cssTransforms3d?0:C-H,step:1,itemH:H,subH:L,arrowDownH:this.getHeight(M.dataSM("scroll-arrows").eq(1))}).bind(j([["mouseover",function(x){I.menuScrollOver(M,x)
}],["mouseout",function(x){I.menuScrollOut(M,x)
}],["mousewheel DOMMouseScroll",function(x){I.menuScrollMousewheel(M,x)
}]],K)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:E+(parseInt(M.css("border-left-width"))||0),width:v-(parseInt(M.css("border-left-width"))||0)-(parseInt(M.css("border-right-width"))||0),zIndex:M.css("z-index")}).eq(A&&this.opts.bottomToTopSubMenus?0:1).show();
if(this.isFixed()){M.css({"touch-action":"none","-ms-touch-action":"none"}).bind(j([[d?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(x){I.menuScrollTouch(M,x)
}]],K))
}}}M.css({top:"auto",left:"0",marginLeft:E,marginTop:C-H});
this.menuIframeShim(M);
if(M.dataSM("ie-shim")){M.dataSM("ie-shim").css({zIndex:M.css("z-index"),width:v,height:L,marginLeft:E,marginTop:C-H})
}},menuScroll:function(t,n,o){var q=t.dataSM("scroll"),r=t.dataSM("scroll-arrows"),p=q.up?q.upEnd:q.downEnd,u;
if(!n&&q.momentum){q.momentum*=0.92;
u=q.momentum;
if(u<0.5){this.menuScrollStop(t);
return
}}else{u=o||(n||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(q.step))
}var m=t.dataSM("level");
if(this.activatedItems[m-1]&&this.activatedItems[m-1].dataSM("sub")&&this.activatedItems[m-1].dataSM("sub").is(":visible")){this.menuHideSubMenus(m-1)
}q.y=q.up&&p<=q.y||!q.up&&p>=q.y?q.y:(Math.abs(p-q.y)>u?q.y+(q.up?u:-u):p);
t.add(t.dataSM("ie-shim")).css(this.cssTransforms3d?{"-webkit-transform":"translate3d(0, "+q.y+"px, 0)",transform:"translate3d(0, "+q.y+"px, 0)"}:{marginTop:q.y});
if(f&&(q.up&&q.y>q.downEnd||!q.up&&q.y<q.upEnd)){r.eq(q.up?1:0).show()
}if(q.y==p){if(f){r.eq(q.up?0:1).hide()
}this.menuScrollStop(t)
}else{if(!n){if(this.opts.scrollAccelerate&&q.step<this.opts.scrollStep){q.step+=0.2
}var v=this;
this.scrollTimeout=g(function(){v.menuScroll(t)
})
}}},menuScrollMousewheel:function(n,o){if(this.getClosestMenu(o.target)==n[0]){o=o.originalEvent;
var m=(o.wheelDelta||-o.detail)>0;
if(n.dataSM("scroll-arrows").eq(m?0:1).is(":visible")){n.dataSM("scroll").up=m;
this.menuScroll(n,true)
}}o.preventDefault()
},menuScrollOut:function(m,n){if(f){if(!/^scroll-(up|down)/.test((n.relatedTarget||"").className)&&(m[0]!=n.relatedTarget&&!a.contains(m[0],n.relatedTarget)||this.getClosestMenu(n.relatedTarget)!=m[0])){m.dataSM("scroll-arrows").css("visibility","hidden")
}}},menuScrollOver:function(o,p){if(f){if(!/^scroll-(up|down)/.test(p.target.className)&&this.getClosestMenu(p.target)==o[0]){this.menuScrollRefreshData(o);
var n=o.dataSM("scroll"),m=a(window).scrollTop()-o.dataSM("parent-a").offset().top-n.itemH;
o.dataSM("scroll-arrows").eq(0).css("margin-top",m).end().eq(1).css("margin-top",m+this.getViewportHeight()-n.arrowDownH).end().css("visibility","visible")
}}},menuScrollRefreshData:function(o){var n=o.dataSM("scroll"),m=a(window).scrollTop()-o.dataSM("parent-a").offset().top-n.itemH;
if(this.cssTransforms3d){m=-(parseFloat(o.css("margin-top"))-m)
}a.extend(n,{upEnd:m,downEnd:m+this.getViewportHeight()-n.subH})
},menuScrollStop:function(m){if(this.scrollTimeout){c(this.scrollTimeout);
this.scrollTimeout=0;
m.dataSM("scroll").step=1;
return true
}},menuScrollTouch:function(q,r){r=r.originalEvent;
if(k(r)){var n=this.getTouchPoint(r);
if(this.getClosestMenu(n.target)==q[0]){var p=q.dataSM("scroll");
if(/(start|down)$/i.test(r.type)){if(this.menuScrollStop(q)){r.preventDefault();
this.$touchScrollingSub=q
}else{this.$touchScrollingSub=null
}this.menuScrollRefreshData(q);
a.extend(p,{touchStartY:n.pageY,touchStartTime:r.timeStamp})
}else{if(/move$/i.test(r.type)){var o=p.touchY!==undefined?p.touchY:p.touchStartY;
if(o!==undefined&&o!=n.pageY){this.$touchScrollingSub=q;
var m=o<n.pageY;
if(p.up!==undefined&&p.up!=m){a.extend(p,{touchStartY:n.pageY,touchStartTime:r.timeStamp})
}a.extend(p,{up:m,touchY:n.pageY});
this.menuScroll(q,true,Math.abs(n.pageY-o))
}r.preventDefault()
}else{if(p.touchY!==undefined){if(p.momentum=Math.pow(Math.abs(n.pageY-p.touchStartY)/(r.timeStamp-p.touchStartTime),2)*15){this.menuScrollStop(q);
this.menuScroll(q);
r.preventDefault()
}delete p.touchY
}}}}}},menuShow:function(o){if(!o.dataSM("beforefirstshowfired")){o.dataSM("beforefirstshowfired",true);
if(this.$root.triggerHandler("beforefirstshow.smapi",o[0])===false){return
}}if(this.$root.triggerHandler("beforeshow.smapi",o[0])===false){return
}o.dataSM("shown-before",true).stop(true,true);
if(!o.is(":visible")){var n=o.dataSM("parent-a");
if(this.opts.keepHighlighted||this.isCollapsible()){n.addClass("highlighted")
}if(this.isCollapsible()){o.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""})
}else{o.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1);
if(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth){o.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap");
if(this.opts.subMenusMinWidth){o.css("min-width",this.opts.subMenusMinWidth)
}if(this.opts.subMenusMaxWidth){var p=this.getWidth(o);
o.css("max-width",this.opts.subMenusMaxWidth);
if(p>this.getWidth(o)){o.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)
}}}this.menuPosition(o);
if(o.dataSM("ie-shim")){o.dataSM("ie-shim").insertBefore(o)
}}var m=function(){o.css("overflow","")
};
if(this.isCollapsible()){if(this.opts.collapsibleShowFunction){this.opts.collapsibleShowFunction.call(this,o,m)
}else{o.show(this.opts.collapsibleShowDuration,m)
}}else{if(this.opts.showFunction){this.opts.showFunction.call(this,o,m)
}else{o.show(this.opts.showDuration,m)
}}n.attr("aria-expanded","true");
o.attr({"aria-expanded":"true","aria-hidden":"false"});
this.visibleSubMenus.push(o);
this.$root.triggerHandler("show.smapi",o[0])
}},popupHide:function(m){if(this.hideTimeout){clearTimeout(this.hideTimeout);
this.hideTimeout=0
}var n=this;
this.hideTimeout=setTimeout(function(){n.menuHideAll()
},m?1:this.opts.hideTimeout)
},popupShow:function(p,o){if(!this.opts.isPopup){alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
return
}if(this.hideTimeout){clearTimeout(this.hideTimeout);
this.hideTimeout=0
}this.$root.dataSM("shown-before",true).stop(true,true);
if(!this.$root.is(":visible")){this.$root.css({left:p,top:o});
this.menuIframeShim(this.$root);
if(this.$root.dataSM("ie-shim")){this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:p,top:o}).insertBefore(this.$root)
}var n=this,m=function(){n.$root.css("overflow","")
};
if(this.opts.showFunction){this.opts.showFunction.call(this,this.$root,m)
}else{this.$root.show(this.opts.showDuration,m)
}this.visibleSubMenus[0]=this.$root
}},refresh:function(){this.destroy(true);
this.init(true)
},rootKeyDown:function(p){if(!this.handleEvents()){return
}switch(p.keyCode){case 27:var n=this.activatedItems[0];
if(n){this.menuHideAll();
n[0].focus();
var o=n.dataSM("sub");
if(o){this.menuHide(o)
}}break;
case 32:var m=a(p.target);
if(m.is("a")&&this.handleItemEvents(m)){var o=m.dataSM("sub");
if(o&&!o.is(":visible")){this.itemClick({currentTarget:p.target});
p.preventDefault()
}}break
}},rootOut:function(n){if(!this.handleEvents()||this.isTouchMode()||n.target==this.$root[0]){return
}if(this.hideTimeout){clearTimeout(this.hideTimeout);
this.hideTimeout=0
}if(!this.opts.showOnClick||!this.opts.hideOnClick){var m=this;
this.hideTimeout=setTimeout(function(){m.menuHideAll()
},this.opts.hideTimeout)
}},rootOver:function(m){if(!this.handleEvents()||this.isTouchMode()||m.target==this.$root[0]){return
}if(this.hideTimeout){clearTimeout(this.hideTimeout);
this.hideTimeout=0
}},winResize:function(n){if(!this.handleEvents()){if(this.$disableOverlay){var o=this.$root.offset();
this.$disableOverlay.css({top:o.top,left:o.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})
}return
}if(!("onorientationchange" in window)||n.type=="orientationchange"){var m=this.isCollapsible();
if(!(this.wasCollapsible&&m)){if(this.activatedItems.length){this.activatedItems[this.activatedItems.length-1][0].blur()
}this.menuHideAll()
}this.wasCollapsible=m
}}}});
a.fn.dataSM=function(m,n){if(n){return this.data(m+"_smartmenus",n)
}return this.data(m+"_smartmenus")
};
a.fn.removeDataSM=function(m){return this.removeData(m+"_smartmenus")
};
a.fn.smartmenus=function(n){if(typeof n=="string"){var m=arguments,p=n;
Array.prototype.shift.call(m);
return this.each(function(){var q=a(this).data("smartmenus");
if(q&&q[p]){q[p].apply(q,m)
}})
}var o=a.extend({},a.fn.smartmenus.defaults,n);
return this.each(function(){new a.SmartMenus(this,o)
})
};
a.fn.smartmenus.defaults={isPopup:false,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:true,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollAccelerate:true,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(n,m){n.fadeOut(200,m)
},collapsibleShowDuration:0,collapsibleShowFunction:function(n,m){n.slideDown(200,m)
},collapsibleHideDuration:0,collapsibleHideFunction:function(n,m){n.slideUp(200,m)
},showOnClick:false,hideOnClick:true,noMouseOver:false,keepInViewport:true,keepHighlighted:true,markCurrentItem:false,markCurrentTree:true,rightToLeftSubMenus:false,bottomToTopSubMenus:false,overlapControlsInIE:true};
return a
}));
/*!
 * SmartMenus jQuery Plugin Bootstrap Addon - v0.3.0 - January 27, 2016
 * http://www.smartmenus.org/
 *
 * Copyright Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com
 *
 * Licensed MIT
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","jquery.smartmenus"],a)
}else{if(typeof module==="object"&&typeof module.exports==="object"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){a.extend(a.SmartMenus.Bootstrap={},{keydownFix:false,init:function(){var b=a("ul.navbar-nav:not([data-sm-skip])");
b.each(function(){var h=a(this),g=h.data("smartmenus");
if(!g){h.smartmenus({subMenusSubOffsetX:2,subMenusSubOffsetY:-6,subIndicators:false,collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:h.hasClass("navbar-right"),bottomToTopSubMenus:h.closest(".navbar").hasClass("navbar-fixed-bottom")}).bind({"show.smapi":function(l,m){var j=a(m),k=j.dataSM("scroll-arrows");
if(k){k.css("background-color",a(document.body).css("background-color"))
}j.parent().addClass("open")
},"hide.smapi":function(j,k){a(k).parent().removeClass("open")
}});
function f(){h.find("a.current").parent().addClass("active");
h.find("a.has-submenu").each(function(){var j=a(this);
if(j.is('[data-toggle="dropdown"]')){j.dataSM("bs-data-toggle-dropdown",true).removeAttr("data-toggle")
}if(j.is('[role="button"]')){j.dataSM("bs-role-button",true).removeAttr("role")
}})
}f();
function c(){h.find("a.current").parent().removeClass("active");
h.find("a.has-submenu").each(function(){var j=a(this);
if(j.dataSM("bs-data-toggle-dropdown")){j.attr("data-toggle","dropdown").removeDataSM("bs-data-toggle-dropdown")
}if(j.dataSM("bs-role-button")){j.attr("role","button").removeDataSM("bs-role-button")
}})
}g=h.data("smartmenus");
g.isCollapsible=function(){return !/^(left|right)$/.test(this.$firstLink.parent().css("float"))
};
g.refresh=function(){a.SmartMenus.prototype.refresh.call(this);
f();
d(true)
};
g.destroy=function(j){c();
a.SmartMenus.prototype.destroy.call(this,j)
};
if(h.is("[data-sm-skip-collapsible-behavior]")){h.bind({"click.smapi":function(m,k){if(g.isCollapsible()){var j=a(k),l=j.parent().dataSM("sub");
if(l&&l.dataSM("shown-before")&&l.is(":visible")){g.itemActivate(j);
g.menuHide(l);
return false
}}}})
}var e;
function d(k){var l=g.getViewportWidth();
if(l!=e||k){var j=h.find(".caret");
if(g.isCollapsible()){h.addClass("sm-collapsible");
if(!h.is("[data-sm-skip-collapsible-behavior]")){j.addClass("navbar-toggle sub-arrow")
}}else{h.removeClass("sm-collapsible");
if(!h.is("[data-sm-skip-collapsible-behavior]")){j.removeClass("navbar-toggle sub-arrow")
}}e=l
}}d();
a(window).bind("resize.smartmenus"+g.rootId,d)
}});
if(b.length&&!a.SmartMenus.Bootstrap.keydownFix){a(document).off("keydown.bs.dropdown.data-api",".dropdown-menu");
if(a.fn.dropdown&&a.fn.dropdown.Constructor){a(document).on("keydown.bs.dropdown.data-api",'.dropdown-menu:not([id^="sm-"])',a.fn.dropdown.Constructor.prototype.keydown)
}a.SmartMenus.Bootstrap.keydownFix=true
}}});
a(a.SmartMenus.Bootstrap.init);
return a
}));
/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
(function(d,c,a,f){var e={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6000,useLeft:false,closable:true,loop:true,escKey:true,keyPress:true,controls:true,slideEndAnimatoin:true,hideControlOnEnd:false,mousewheel:true,getCaptionFromTitleOrAlt:true,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:false,preload:1,showAfterLoad:true,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:false,iframeMaxWidth:"100%",download:true,counter:true,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:true,enableDrag:true,dynamic:false,dynamicEl:[],galleryId:1};
function b(h,g){this.el=h;
this.$el=d(h);
this.s=d.extend({},e,g);
if(this.s.dynamic&&this.s.dynamicEl!=="undefined"&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length){throw ("When using dynamic mode, you must also define dynamicEl as an Array.")
}this.modules={};
this.lGalleryOn=false;
this.lgBusy=false;
this.hideBartimeout=false;
this.isTouch=("ontouchstart" in a.documentElement);
if(this.s.slideEndAnimatoin){this.s.hideControlOnEnd=false
}if(this.s.dynamic){this.$items=this.s.dynamicEl
}else{if(this.s.selector==="this"){this.$items=this.$el
}else{if(this.s.selector!==""){if(this.s.selectWithin){this.$items=d(this.s.selectWithin).find(this.s.selector)
}else{this.$items=this.$el.find(d(this.s.selector))
}}else{this.$items=this.$el.children()
}}}this.$slide="";
this.$outer="";
this.init();
return this
}b.prototype.init=function(){var h=this;
if(h.s.preload>h.$items.length){h.s.preload=h.$items.length
}var g=c.location.hash;
if(g.indexOf("lg="+this.s.galleryId)>0){h.index=parseInt(g.split("&slide=")[1],10);
d("body").addClass("lg-from-hash");
if(!d("body").hasClass("lg-on")){setTimeout(function(){h.build(h.index)
});
d("body").addClass("lg-on")
}}if(h.s.dynamic){h.$el.trigger("onBeforeOpen.lg");
h.index=h.s.index||0;
if(!d("body").hasClass("lg-on")){setTimeout(function(){h.build(h.index);
d("body").addClass("lg-on")
})
}}else{h.$items.on("click.lgcustom",function(j){try{j.preventDefault();
j.preventDefault()
}catch(k){j.returnValue=false
}h.$el.trigger("onBeforeOpen.lg");
h.index=h.s.index||h.$items.index(this);
if(!d("body").hasClass("lg-on")){h.build(h.index);
d("body").addClass("lg-on")
}})
}};
b.prototype.build=function(g){var h=this;
h.structure();
d.each(d.fn.lightGallery.modules,function(j){h.modules[j]=new d.fn.lightGallery.modules[j](h.el)
});
h.slide(g,false,false);
if(h.s.keyPress){h.keyPress()
}if(h.$items.length>1){h.arrow();
setTimeout(function(){h.enableDrag();
h.enableSwipe()
},50);
if(h.s.mousewheel){h.mousewheel()
}}h.counter();
h.closeGallery();
h.$el.trigger("onAfterOpen.lg");
h.$outer.on("mousemove.lg click.lg touchstart.lg",function(){h.$outer.removeClass("lg-hide-items");
clearTimeout(h.hideBartimeout);
h.hideBartimeout=setTimeout(function(){h.$outer.addClass("lg-hide-items")
},h.s.hideBarsDelay)
})
};
b.prototype.structure=function(){var l="";
var g="";
var h=0;
var k="";
var j;
var n=this;
d("body").append('<div class="lg-backdrop"></div>');
d(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms");
for(h=0;
h<this.$items.length;
h++){l+='<div class="lg-item"></div>'
}if(this.s.controls&&this.$items.length>1){g='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"
}if(this.s.appendSubHtmlTo===".lg-sub-html"){k='<div class="lg-sub-html"></div>'
}j='<div class="lg-outer '+this.s.adClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+l+'</div><div class="lg-toolbar group"><div class="addthis_sharing_toolbox"></div><span class="lg-close lg-icon"></span></div>'+g+k+"</div></div>";
d("body").append(j);
this.$outer=d(".lg-outer");
this.$slide=this.$outer.find(".lg-item");
if(this.s.useLeft){this.$outer.addClass("lg-use-left");
this.s.mode="lg-slide"
}else{this.$outer.addClass("lg-use-css3")
}n.setTop();
d(c).on("resize.lg orientationchange.lg",function(){setTimeout(function(){n.setTop()
},100)
});
this.$slide.eq(this.index).addClass("lg-current");
if(this.doCss()){this.$outer.addClass("lg-css3")
}else{this.$outer.addClass("lg-css");
this.s.speed=0
}this.$outer.addClass(this.s.mode);
if(this.s.enableDrag&&this.$items.length>1){this.$outer.addClass("lg-grab")
}if(this.s.showAfterLoad){this.$outer.addClass("lg-show-after-load")
}if(this.doCss()){var m=this.$outer.find(".lg-inner");
m.css("transition-timing-function",this.s.cssEasing);
m.css("transition-duration",this.s.speed+"ms")
}d(".lg-backdrop").addClass("in");
setTimeout(function(){n.$outer.addClass("lg-visible")
},this.s.backdropDuration);
if(this.s.download){this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')
}this.prevScrollTop=d(c).scrollTop()
};
b.prototype.setTop=function(){if(this.s.height!=="100%"){var g=d(c).height();
var j=(g-parseInt(this.s.height,10))/2;
var h=this.$outer.find(".lg");
if(g>=parseInt(this.s.height,10)){h.css("top",j+"px")
}else{h.css("top","0px")
}}};
b.prototype.doCss=function(){var g=function(){var k=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"];
var h=a.documentElement;
var j=0;
for(j=0;
j<k.length;
j++){if(k[j] in h.style){return true
}}};
if(g()){return true
}return false
};
b.prototype.isVideo=function(n,h){var k;
if(this.s.dynamic){k=this.s.dynamicEl[h].html
}else{k=this.$items.eq(h).attr("data-html")
}if(!n&&k){return{html5:true}
}var j=n.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
var g=n.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
var l=n.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
var m=n.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
if(j){return{youtube:j}
}else{if(g){return{vimeo:g}
}else{if(l){return{dailymotion:l}
}else{if(m){return{vk:m}
}}}}};
b.prototype.counter=function(){if(this.s.counter){d(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+'</span></div><div><div class="twitter textcenter paddingZero"><a href="https://twitter.com/intent/tweet?text=Hello&url='+location.href+'"class="ss-twitter-share-button" target="_blank"><i></i>Tweet</a> </div><div class="facebook fb-btns textcenter paddingZero"><a class="ss-fb-share-button fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='+location.href+'&src=sdkpreparse>"><i></i>Share</a></div></div>')
}};
b.prototype.addHtml=function(h){var k=null;
var l;
var g;
if(this.s.dynamic){if(this.s.dynamicEl[h].subHtmlUrl){l=this.s.dynamicEl[h].subHtmlUrl
}else{k=this.s.dynamicEl[h].subHtml
}}else{g=this.$items.eq(h);
if(g.attr("data-sub-html-url")){l=g.attr("data-sub-html-url")
}else{k=g.attr("data-sub-html");
if(this.s.getCaptionFromTitleOrAlt&&!k){k=g.attr("title")||g.find("img").first().attr("alt")
}}}if(!l){if(typeof k!=="undefined"&&k!==null){var j=k.substring(0,1);
if(j==="."||j==="#"){if(this.s.subHtmlSelectorRelative&&!this.s.dynamic){k=g.find(k).html()
}else{k=d(k).html()
}}}else{k=""
}}if(this.s.appendSubHtmlTo===".lg-sub-html"){if(l){this.$outer.find(this.s.appendSubHtmlTo).load(l)
}else{this.$outer.find(this.s.appendSubHtmlTo).html(k)
}}else{if(l){this.$slide.eq(h).load(l)
}else{this.$slide.eq(h).append(k)
}}if(typeof k!=="undefined"&&k!==null){if(k===""){this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html")
}else{this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")
}}this.$el.trigger("onAfterAppendSubHtml.lg",[h])
};
b.prototype.preload=function(h){var k=1;
var g=1;
for(k=1;
k<=this.s.preload;
k++){if(k>=this.$items.length-h){break
}this.loadContent(h+k,false,0)
}for(g=1;
g<=this.s.preload;
g++){if(h-g<0){break
}this.loadContent(h-g,false,0)
}};
b.prototype.loadContent=function(k,l,y){var r=this;
var u=false;
var z;
var o;
var x;
var j;
var q;
var h;
var p=function(F){var A=[];
var C=[];
for(var E=0;
E<F.length;
E++){var G=F[E].split(" ");
if(G[0]===""){G.splice(0,1)
}C.push(G[0]);
A.push(G[1])
}var D=d(c).width();
for(var B=0;
B<A.length;
B++){if(parseInt(A[B],10)>D){o=C[B];
break
}}};
if(r.s.dynamic){if(r.s.dynamicEl[k].poster){u=true;
x=r.s.dynamicEl[k].poster
}h=r.s.dynamicEl[k].html;
o=r.s.dynamicEl[k].src;
if(r.s.dynamicEl[k].responsive){var w=r.s.dynamicEl[k].responsive.split(",");
p(w)
}j=r.s.dynamicEl[k].srcset;
q=r.s.dynamicEl[k].sizes
}else{if(r.$items.eq(k).attr("data-poster")){u=true;
x=r.$items.eq(k).attr("data-poster")
}h=r.$items.eq(k).attr("data-html");
o=r.$items.eq(k).attr("href")||r.$items.eq(k).attr("data-src");
if(r.$items.eq(k).attr("data-responsive")){var m=r.$items.eq(k).attr("data-responsive").split(",");
p(m)
}j=r.$items.eq(k).attr("data-srcset");
q=r.$items.eq(k).attr("data-sizes")
}var n=false;
if(r.s.dynamic){if(r.s.dynamicEl[k].iframe){n=true
}}else{if(r.$items.eq(k).attr("data-iframe")==="true"){n=true
}}var t=r.isVideo(o,k);
if(!r.$slide.eq(k).hasClass("lg-loaded")){if(n){r.$slide.eq(k).prepend('<div class="lg-video-cont" style="max-width:'+r.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>')
}else{if(u){var g="";
if(t&&t.youtube){g="lg-has-youtube"
}else{if(t&&t.vimeo){g="lg-has-vimeo"
}else{g="lg-has-html5"
}}r.$slide.eq(k).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+x+'" /></div></div>')
}else{if(t){r.$slide.eq(k).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
r.$el.trigger("hasVideo.lg",[k,o,h])
}else{r.$slide.eq(k).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+o+'" /></div>')
}}}r.$el.trigger("onAferAppendSlide.lg",[k]);
z=r.$slide.eq(k).find(".lg-object");
if(q){z.attr("sizes",q)
}if(j){z.attr("srcset",j);
try{picturefill({elements:[z[0]]})
}catch(v){console.error("Make sure you have included Picturefill version 2")
}}if(this.s.appendSubHtmlTo!==".lg-sub-html"){r.addHtml(k)
}r.$slide.eq(k).addClass("lg-loaded")
}r.$slide.eq(k).find(".lg-object").on("load.lg error.lg",function(){var A=0;
if(y&&!d("body").hasClass("lg-from-hash")){A=y
}setTimeout(function(){r.$slide.eq(k).addClass("lg-complete");
r.$el.trigger("onSlideItemLoad.lg",[k,y||0])
},A)
});
if(t&&t.html5&&!u){r.$slide.eq(k).addClass("lg-complete")
}if(l===true){if(!r.$slide.eq(k).hasClass("lg-complete")){r.$slide.eq(k).find(".lg-object").on("load.lg error.lg",function(){r.preload(k)
})
}else{r.preload(k)
}}};
b.prototype.slide=function(n,p,k){var l=this.$outer.find(".lg-current").index();
var m=this;
if(m.lGalleryOn&&(l===n)){return
}var o=this.$slide.length;
var t=m.lGalleryOn?this.s.speed:0;
var h=false;
var g=false;
if(!m.lgBusy){if(this.s.download){var j;
if(m.s.dynamic){j=m.s.dynamicEl[n].downloadUrl!==false&&(m.s.dynamicEl[n].downloadUrl||m.s.dynamicEl[n].src)
}else{j=m.$items.eq(n).attr("data-download-url")!=="false"&&(m.$items.eq(n).attr("data-download-url")||m.$items.eq(n).attr("href")||m.$items.eq(n).attr("data-src"))
}if(j){d("#lg-download").attr("href",j);
m.$outer.removeClass("lg-hide-download")
}else{m.$outer.addClass("lg-hide-download")
}}this.$el.trigger("onBeforeSlide.lg",[l,n,p,k]);
m.lgBusy=true;
clearTimeout(m.hideBartimeout);
if(this.s.appendSubHtmlTo===".lg-sub-html"){setTimeout(function(){m.addHtml(n)
},t)
}this.arrowDisable(n);
if(!p){m.$outer.addClass("lg-no-trans");
this.$slide.removeClass("lg-prev-slide lg-next-slide");
if(n<l){g=true;
if((n===0)&&(l===o-1)&&!k){g=false;
h=true
}}else{if(n>l){h=true;
if((n===o-1)&&(l===0)&&!k){g=true;
h=false
}}}if(g){this.$slide.eq(n).addClass("lg-prev-slide");
this.$slide.eq(l).addClass("lg-next-slide")
}else{if(h){this.$slide.eq(n).addClass("lg-next-slide");
this.$slide.eq(l).addClass("lg-prev-slide")
}}setTimeout(function(){m.$slide.removeClass("lg-current");
m.$slide.eq(n).addClass("lg-current");
m.$outer.removeClass("lg-no-trans")
},50)
}else{var q=n-1;
var r=n+1;
if((n===0)&&(l===o-1)){r=0;
q=o-1
}else{if((n===o-1)&&(l===0)){r=0;
q=o-1
}}this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
m.$slide.eq(q).addClass("lg-prev-slide");
m.$slide.eq(r).addClass("lg-next-slide");
m.$slide.eq(n).addClass("lg-current")
}if(m.lGalleryOn){setTimeout(function(){m.loadContent(n,true,0)
},this.s.speed+50);
setTimeout(function(){m.lgBusy=false;
m.$el.trigger("onAfterSlide.lg",[l,n,p,k])
},this.s.speed)
}else{m.loadContent(n,true,m.s.backdropDuration);
m.lgBusy=false;
m.$el.trigger("onAfterSlide.lg",[l,n,p,k])
}m.lGalleryOn=true;
if(this.s.counter){d("#lg-counter-current").text(n+1)
}}};
b.prototype.goToNextSlide=function(g){var h=this;
if(!h.lgBusy){if((h.index+1)<h.$slide.length){h.index++;
h.$el.trigger("onBeforeNextSlide.lg",[h.index]);
h.slide(h.index,g,false)
}else{if(h.s.loop){h.index=0;
h.$el.trigger("onBeforeNextSlide.lg",[h.index]);
h.slide(h.index,g,false)
}else{if(h.s.slideEndAnimatoin){h.$outer.addClass("lg-right-end");
setTimeout(function(){h.$outer.removeClass("lg-right-end")
},400)
}}}}};
b.prototype.goToPrevSlide=function(g){var h=this;
if(!h.lgBusy){if(h.index>0){h.index--;
h.$el.trigger("onBeforePrevSlide.lg",[h.index,g]);
h.slide(h.index,g,false)
}else{if(h.s.loop){h.index=h.$items.length-1;
h.$el.trigger("onBeforePrevSlide.lg",[h.index,g]);
h.slide(h.index,g,false)
}else{if(h.s.slideEndAnimatoin){h.$outer.addClass("lg-left-end");
setTimeout(function(){h.$outer.removeClass("lg-left-end")
},400)
}}}}};
b.prototype.keyPress=function(){var g=this;
if(this.$items.length>1){d(c).on("keyup.lg",function(h){if(g.$items.length>1){if(h.keyCode===37){h.preventDefault();
g.goToPrevSlide()
}if(h.keyCode===39){h.preventDefault();
g.goToNextSlide()
}}})
}d(c).on("keydown.lg",function(h){if(g.s.escKey===true&&h.keyCode===27){h.preventDefault();
if(!g.$outer.hasClass("lg-thumb-open")){g.destroy()
}else{g.$outer.removeClass("lg-thumb-open")
}}})
};
b.prototype.arrow=function(){var g=this;
this.$outer.find(".lg-prev").on("click.lg",function(){g.goToPrevSlide()
});
this.$outer.find(".lg-next").on("click.lg",function(){g.goToNextSlide()
})
};
b.prototype.arrowDisable=function(g){if(!this.s.loop&&this.s.hideControlOnEnd){if((g+1)<this.$slide.length){this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled")
}else{this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled")
}if(g>0){this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled")
}else{this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled")
}}};
b.prototype.setTranslate=function(h,j,g){if(this.s.useLeft){h.css("left",j)
}else{h.css({transform:"translate3d("+(j)+"px, "+g+"px, 0px)"})
}};
b.prototype.touchMove=function(h,g){var j=g-h;
if(Math.abs(j)>15){this.$outer.addClass("lg-dragging");
this.setTranslate(this.$slide.eq(this.index),j,0);
this.setTranslate(d(".lg-prev-slide"),-this.$slide.eq(this.index).width()+j,0);
this.setTranslate(d(".lg-next-slide"),this.$slide.eq(this.index).width()+j,0)
}};
b.prototype.touchEnd=function(h){var g=this;
if(g.s.mode!=="lg-slide"){g.$outer.addClass("lg-slide")
}this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0");
setTimeout(function(){g.$outer.removeClass("lg-dragging");
if((h<0)&&(Math.abs(h)>g.s.swipeThreshold)){g.goToNextSlide(true)
}else{if((h>0)&&(Math.abs(h)>g.s.swipeThreshold)){g.goToPrevSlide(true)
}else{if(Math.abs(h)<5){g.$el.trigger("onSlideClick.lg")
}}}g.$slide.removeAttr("style")
});
setTimeout(function(){if(!g.$outer.hasClass("lg-dragging")&&g.s.mode!=="lg-slide"){g.$outer.removeClass("lg-slide")
}},g.s.speed+100)
};
b.prototype.enableSwipe=function(){var k=this;
var j=0;
var g=0;
var h=false;
if(k.s.enableSwipe&&k.isTouch&&k.doCss()){k.$slide.on("touchstart.lg",function(l){if(!k.$outer.hasClass("lg-zoomed")&&!k.lgBusy){l.preventDefault();
k.manageSwipeClass();
j=l.originalEvent.targetTouches[0].pageX
}});
k.$slide.on("touchmove.lg",function(l){if(!k.$outer.hasClass("lg-zoomed")){l.preventDefault();
g=l.originalEvent.targetTouches[0].pageX;
k.touchMove(j,g);
h=true
}});
k.$slide.on("touchend.lg",function(){if(!k.$outer.hasClass("lg-zoomed")){if(h){h=false;
k.touchEnd(g-j)
}else{k.$el.trigger("onSlideClick.lg")
}}})
}};
b.prototype.enableDrag=function(){var l=this;
var k=0;
var h=0;
var g=false;
var j=false;
if(l.s.enableDrag&&!l.isTouch&&l.doCss()){l.$slide.on("mousedown.lg",function(m){if(!l.$outer.hasClass("lg-zoomed")){if(d(m.target).hasClass("lg-object")||d(m.target).hasClass("lg-video-play")){m.preventDefault();
if(!l.lgBusy){l.manageSwipeClass();
k=m.pageX;
g=true;
l.$outer.scrollLeft+=1;
l.$outer.scrollLeft-=1;
l.$outer.removeClass("lg-grab").addClass("lg-grabbing");
l.$el.trigger("onDragstart.lg")
}}}});
d(c).on("mousemove.lg",function(m){if(g){j=true;
h=m.pageX;
l.touchMove(k,h);
l.$el.trigger("onDragmove.lg")
}});
d(c).on("mouseup.lg",function(m){if(j){j=false;
l.touchEnd(h-k);
l.$el.trigger("onDragend.lg")
}else{if(d(m.target).hasClass("lg-object")||d(m.target).hasClass("lg-video-play")){l.$el.trigger("onSlideClick.lg")
}}if(g){g=false;
l.$outer.removeClass("lg-grabbing").addClass("lg-grab")
}})
}};
b.prototype.manageSwipeClass=function(){var g=this.index+1;
var h=this.index-1;
var j=this.$slide.length;
if(this.s.loop){if(this.index===0){h=j-1
}else{if(this.index===j-1){g=0
}}}this.$slide.removeClass("lg-next-slide lg-prev-slide");
if(h>-1){this.$slide.eq(h).addClass("lg-prev-slide")
}this.$slide.eq(g).addClass("lg-next-slide")
};
b.prototype.mousewheel=function(){var g=this;
g.$outer.on("mousewheel.lg",function(h){if(!h.deltaY){return
}if(h.deltaY>0){g.goToPrevSlide()
}else{g.goToNextSlide()
}h.preventDefault()
})
};
b.prototype.closeGallery=function(){var h=this;
var g=false;
this.$outer.find(".lg-close").on("click.lg",function(){h.destroy()
});
if(h.s.closable){h.$outer.on("mousedown.lg",function(j){if(d(j.target).is(".lg-outer")||d(j.target).is(".lg-item ")||d(j.target).is(".lg-img-wrap")){g=true
}else{g=false
}});
h.$outer.on("mouseup.lg",function(j){if(d(j.target).is(".lg-outer")||d(j.target).is(".lg-item ")||d(j.target).is(".lg-img-wrap")&&g){if(!h.$outer.hasClass("lg-dragging")){h.destroy()
}}})
}};
b.prototype.destroy=function(g){var h=this;
if(!g){h.$el.trigger("onBeforeClose.lg")
}d(c).scrollTop(h.prevScrollTop);
if(g){if(!h.s.dynamic){this.$items.off("click.lg click.lgcustom")
}d.removeData(h.el,"lightGallery")
}this.$el.off(".lg.tm");
d.each(d.fn.lightGallery.modules,function(j){if(h.modules[j]){h.modules[j].destroy()
}});
this.lGalleryOn=false;
clearTimeout(h.hideBartimeout);
this.hideBartimeout=false;
d(c).off(".lg");
d("body").removeClass("lg-on lg-from-hash");
if(h.$outer){h.$outer.removeClass("lg-visible")
}d(".lg-backdrop").removeClass("in");
setTimeout(function(){if(h.$outer){h.$outer.remove()
}d(".lg-backdrop").remove();
if(!g){h.$el.trigger("onCloseAfter.lg")
}},h.s.backdropDuration+50)
};
d.fn.lightGallery=function(g){return this.each(function(){if(!d.data(this,"lightGallery")){d.data(this,"lightGallery",new b(this,g))
}else{try{d(this).data("lightGallery").init()
}catch(h){console.error("lightGallery has not initiated properly")
}}})
};
d.fn.lightGallery.modules={}
})(jQuery,window,document);
/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
(function(c,b,a,f){var e={autoplay:false,pause:5000,progressBar:true,fourceAutoplay:false,autoplayControls:true,appendAutoplayControlsTo:".lg-toolbar"};
var d=function(g){this.core=c(g).data("lightGallery");
this.$el=c(g);
if(this.core.$items.length<2){return false
}this.core.s=c.extend({},e,this.core.s);
this.interval=false;
this.fromAuto=true;
this.canceledOnTouch=false;
this.fourceAutoplayTemp=this.core.s.fourceAutoplay;
if(!this.core.doCss()){this.core.s.progressBar=false
}this.init();
return this
};
d.prototype.init=function(){var g=this;
if(g.core.s.autoplayControls){g.controls()
}if(g.core.s.progressBar){g.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>')
}g.progress();
if(g.core.s.autoplay){g.startlAuto()
}g.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){if(g.interval){g.cancelAuto();
g.canceledOnTouch=true
}});
g.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){if(!g.interval&&g.canceledOnTouch){g.startlAuto();
g.canceledOnTouch=false
}})
};
d.prototype.progress=function(){var j=this;
var h;
var g;
j.$el.on("onBeforeSlide.lg.tm",function(){if(j.core.s.progressBar&&j.fromAuto){h=j.core.$outer.find(".lg-progress-bar");
g=j.core.$outer.find(".lg-progress");
if(j.interval){g.removeAttr("style");
h.removeClass("lg-start");
setTimeout(function(){g.css("transition","width "+(j.core.s.speed+j.core.s.pause)+"ms ease 0s");
h.addClass("lg-start")
},20)
}}if(!j.fromAuto&&!j.core.s.fourceAutoplay){j.cancelAuto()
}j.fromAuto=false
})
};
d.prototype.controls=function(){var h=this;
var g='<span class="lg-autoplay-button lg-icon"></span>';
c(this.core.s.appendAutoplayControlsTo).append(g);
h.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){if(c(h.core.$outer).hasClass("lg-show-autoplay")){h.cancelAuto();
h.core.s.fourceAutoplay=false
}else{if(!h.interval){h.startlAuto();
h.core.s.fourceAutoplay=h.fourceAutoplayTemp
}}})
};
d.prototype.startlAuto=function(){var g=this;
g.core.$outer.find(".lg-progress").css("transition","width "+(g.core.s.speed+g.core.s.pause)+"ms ease 0s");
g.core.$outer.addClass("lg-show-autoplay");
g.core.$outer.find(".lg-progress-bar").addClass("lg-start");
g.interval=setInterval(function(){if(g.core.index+1<g.core.$items.length){g.core.index++
}else{g.core.index=0
}g.fromAuto=true;
g.core.slide(g.core.index,false,false)
},g.core.s.speed+g.core.s.pause)
};
d.prototype.cancelAuto=function(){clearInterval(this.interval);
this.interval=false;
this.core.$outer.find(".lg-progress").removeAttr("style");
this.core.$outer.removeClass("lg-show-autoplay");
this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
};
d.prototype.destroy=function(){this.cancelAuto();
this.core.$outer.find(".lg-progress-bar").remove()
};
c.fn.lightGallery.modules.autoplay=d
})(jQuery,window,document);
/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
(function(c,b,a,e){var d={thumbnail:true,animateThumb:true,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:false,showThumbByDefault:true,toogleThumb:true,pullCaptionUp:true,enableThumbDrag:true,enableThumbSwipe:true,swipeThreshold:50,loadYoutubeThumbnail:true,youtubeThumbSize:1,loadVimeoThumbnail:true,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:true};
var f=function(g){this.core=c(g).data("lightGallery");
this.core.s=c.extend({},d,this.core.s);
this.$el=c(g);
this.$thumbOuter=null;
this.thumbOuterWidth=0;
this.thumbTotalWidth=(this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin));
this.thumbIndex=this.core.index;
this.left=0;
this.init();
return this
};
f.prototype.init=function(){var g=this;
if(this.core.s.thumbnail&&this.core.$items.length>1){if(this.core.s.showThumbByDefault){setTimeout(function(){g.core.$outer.addClass("lg-thumb-open")
},700)
}if(this.core.s.pullCaptionUp){this.core.$outer.addClass("lg-pull-caption-up")
}this.build();
if(this.core.s.animateThumb){if(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()){this.enableThumbDrag()
}if(this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()){this.enableThumbSwipe()
}this.thumbClickable=false
}else{this.thumbClickable=true
}this.toogle();
this.thumbkeyPress()
}};
f.prototype.build=function(){var n=this;
var k="";
var g="";
var m;
var j='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';
switch(this.core.s.vimeoThumbSize){case"thumbnail_large":g="640";
break;
case"thumbnail_medium":g="200x150";
break;
case"thumbnail_small":g="100x75"
}n.core.$outer.addClass("lg-has-thumb");
n.core.$outer.find(".lg").append(j);
n.$thumbOuter=n.core.$outer.find(".lg-thumb-outer");
n.thumbOuterWidth=n.$thumbOuter.width();
if(n.core.s.animateThumb){n.core.$outer.find(".lg-thumb").css({width:n.thumbTotalWidth+"px",position:"relative"})
}if(this.core.s.animateThumb){n.$thumbOuter.css("height",n.core.s.thumbContHeight+"px")
}function l(u,o,p){var r=n.core.isVideo(u,p)||{};
var t;
var q="";
if(r.youtube||r.vimeo||r.dailymotion){if(r.youtube){if(n.core.s.loadYoutubeThumbnail){t="//img.youtube.com/vi/"+r.youtube[1]+"/"+n.core.s.youtubeThumbSize+".jpg"
}else{t=o
}}else{if(r.vimeo){if(n.core.s.loadVimeoThumbnail){t="//i.vimeocdn.com/video/error_"+g+".jpg";
q=r.vimeo[1]
}else{t=o
}}else{if(r.dailymotion){if(n.core.s.loadDailymotionThumbnail){t="//www.dailymotion.com/thumbnail/video/"+r.dailymotion[1]
}else{t=o
}}}}}else{t=o
}k+='<div data-vimeo-id="'+q+'" class="lg-thumb-item" style="width:'+n.core.s.thumbWidth+"px; margin-right: "+n.core.s.thumbMargin+'px"><img src="'+t+'" /></div>';
q=""
}if(n.core.s.dynamic){for(var h=0;
h<n.core.s.dynamicEl.length;
h++){l(n.core.s.dynamicEl[h].src,n.core.s.dynamicEl[h].thumb,h)
}}else{n.core.$items.each(function(o){if(!n.core.s.exThumbImage){l(c(this).attr("href")||c(this).attr("data-src"),c(this).find("img").attr("src"),o)
}else{l(c(this).attr("href")||c(this).attr("data-src"),c(this).attr(n.core.s.exThumbImage),o)
}})
}n.core.$outer.find(".lg-thumb").html(k);
m=n.core.$outer.find(".lg-thumb-item");
m.each(function(){var p=c(this);
var o=p.attr("data-vimeo-id");
if(o){c.getJSON("//www.vimeo.com/api/v2/video/"+o+".json?callback=?",{format:"json"},function(q){p.find("img").attr("src",q[0][n.core.s.vimeoThumbSize])
})
}});
m.eq(n.core.index).addClass("active");
n.core.$el.on("onBeforeSlide.lg.tm",function(){m.removeClass("active");
m.eq(n.core.index).addClass("active")
});
m.on("click.lg touchend.lg",function(){var o=c(this);
setTimeout(function(){if((n.thumbClickable&&!n.core.lgBusy)||!n.core.doCss()){n.core.index=o.index();
n.core.slide(n.core.index,false,true)
}},50)
});
n.core.$el.on("onBeforeSlide.lg.tm",function(){n.animateThumb(n.core.index)
});
c(b).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){n.animateThumb(n.core.index);
n.thumbOuterWidth=n.$thumbOuter.width()
},200)
})
};
f.prototype.setTranslate=function(g){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+(g)+"px, 0px, 0px)"})
};
f.prototype.animateThumb=function(h){var j=this.core.$outer.find(".lg-thumb");
if(this.core.s.animateThumb){var g;
switch(this.core.s.currentPagerPosition){case"left":g=0;
break;
case"middle":g=(this.thumbOuterWidth/2)-(this.core.s.thumbWidth/2);
break;
case"right":g=this.thumbOuterWidth-this.core.s.thumbWidth
}this.left=((this.core.s.thumbWidth+this.core.s.thumbMargin)*h-1)-g;
if(this.left>(this.thumbTotalWidth-this.thumbOuterWidth)){this.left=this.thumbTotalWidth-this.thumbOuterWidth
}if(this.left<0){this.left=0
}if(this.core.lGalleryOn){if(!j.hasClass("on")){this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms")
}if(!this.core.doCss()){j.animate({left:-this.left+"px"},this.core.s.speed)
}}else{if(!this.core.doCss()){j.css("left",-this.left+"px")
}}this.setTranslate(this.left)
}};
f.prototype.enableThumbDrag=function(){var m=this;
var k=0;
var h=0;
var g=false;
var j=false;
var l=0;
m.$thumbOuter.addClass("lg-grab");
m.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(n){if(m.thumbTotalWidth>m.thumbOuterWidth){n.preventDefault();
k=n.pageX;
g=true;
m.core.$outer.scrollLeft+=1;
m.core.$outer.scrollLeft-=1;
m.thumbClickable=false;
m.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing")
}});
c(b).on("mousemove.lg.thumb",function(n){if(g){l=m.left;
j=true;
h=n.pageX;
m.$thumbOuter.addClass("lg-dragging");
l=l-(h-k);
if(l>(m.thumbTotalWidth-m.thumbOuterWidth)){l=m.thumbTotalWidth-m.thumbOuterWidth
}if(l<0){l=0
}m.setTranslate(l)
}});
c(b).on("mouseup.lg.thumb",function(){if(j){j=false;
m.$thumbOuter.removeClass("lg-dragging");
m.left=l;
if(Math.abs(h-k)<m.core.s.swipeThreshold){m.thumbClickable=true
}}else{m.thumbClickable=true
}if(g){g=false;
m.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")
}})
};
f.prototype.enableThumbSwipe=function(){var l=this;
var j=0;
var g=0;
var h=false;
var k=0;
l.core.$outer.find(".lg-thumb").on("touchstart.lg",function(m){if(l.thumbTotalWidth>l.thumbOuterWidth){m.preventDefault();
j=m.originalEvent.targetTouches[0].pageX;
l.thumbClickable=false
}});
l.core.$outer.find(".lg-thumb").on("touchmove.lg",function(m){if(l.thumbTotalWidth>l.thumbOuterWidth){m.preventDefault();
g=m.originalEvent.targetTouches[0].pageX;
h=true;
l.$thumbOuter.addClass("lg-dragging");
k=l.left;
k=k-(g-j);
if(k>(l.thumbTotalWidth-l.thumbOuterWidth)){k=l.thumbTotalWidth-l.thumbOuterWidth
}if(k<0){k=0
}l.setTranslate(k)
}});
l.core.$outer.find(".lg-thumb").on("touchend.lg",function(){if(l.thumbTotalWidth>l.thumbOuterWidth){if(h){h=false;
l.$thumbOuter.removeClass("lg-dragging");
if(Math.abs(g-j)<l.core.s.swipeThreshold){l.thumbClickable=true
}l.left=k
}else{l.thumbClickable=true
}}else{l.thumbClickable=true
}})
};
f.prototype.toogle=function(){var g=this;
if(g.core.s.toogleThumb){g.core.$outer.addClass("lg-can-toggle");
g.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
g.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){g.core.$outer.toggleClass("lg-thumb-open")
})
}};
f.prototype.thumbkeyPress=function(){var g=this;
c(b).on("keydown.lg.thumb",function(h){if(h.keyCode===38){h.preventDefault();
g.core.$outer.addClass("lg-thumb-open")
}else{if(h.keyCode===40){h.preventDefault();
g.core.$outer.removeClass("lg-thumb-open")
}}})
};
f.prototype.destroy=function(){if(this.core.s.thumbnail&&this.core.$items.length>1){c(b).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb");
this.$thumbOuter.remove();
this.core.$outer.removeClass("lg-has-thumb")
}};
c.fn.lightGallery.modules.Thumbnail=f
})(jQuery,window,document);
/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
(function(d,c,a,f){var e={hash:true};
var b=function(g){this.core=d(g).data("lightGallery");
this.core.s=d.extend({},e,this.core.s);
if(this.core.s.hash){this.oldHash=c.location.hash;
this.init()
}return this
};
b.prototype.init=function(){var h=this;
var g;
h.core.$el.on("onAfterSlide.lg.tm",function(l,k,j){c.location.hash="lg="+h.core.s.galleryId+"&slide="+j
});
d(c).on("hashchange.lg.hash",function(){g=c.location.hash;
var j=parseInt(g.split("&slide=")[1],10);
if((g.indexOf("lg="+h.core.s.galleryId)>-1)){h.core.slide(j,false,false)
}else{if(h.core.lGalleryOn){h.core.destroy()
}}})
};
b.prototype.destroy=function(){if(!this.core.s.hash){return
}if(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0){c.location.hash=this.oldHash
}else{if(history.pushState){history.pushState("",a.title,c.location.pathname+c.location.search)
}else{c.location.hash=""
}}this.core.$el.off(".lg.hash")
};
d.fn.lightGallery.modules.hash=b
})(jQuery,window,document);
$(document).ready(function(){});
(function(a){var d=a,h=d.document;
var g="cbinstance";
/*!
     * contentloaded.js
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */
;
function b(m,q){var l=false,p=true,t=m.document,r=t.documentElement,w=t.addEventListener?"addEventListener":"attachEvent",u=t.addEventListener?"removeEventListener":"detachEvent",k=t.addEventListener?"":"on",v=function(x){if(x.type=="readystatechange"&&t.readyState!="complete"){return
}(x.type=="load"?m:t)[u](k+x.type,v,false);
if(!l&&(l=true)){q.call(m,x.type||x)
}},o=function(){try{r.doScroll("left")
}catch(x){setTimeout(o,50);
return
}v("poll")
};
if(t.readyState=="complete"){q.call(m,"lazy")
}else{if(t.createEventObject&&r.doScroll){try{p=!m.frameElement
}catch(n){}if(p){o()
}}t[w](k+"DOMContentLoaded",v,false);
t[w](k+"readystatechange",v,false);
m[w](k+"load",v,false)
}}var f={get:function(k){return decodeURIComponent(h.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(k).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null
},set:function(m,q,l,p,n,o){if(!m||/^(?:expires|max\-age|path|domain|secure)$/i.test(m)){return false
}var k="";
if(l){switch(l.constructor){case Number:k=l===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+l;
break;
case String:k="; expires="+l;
break;
case Date:k="; expires="+l.toUTCString();
break
}}h.cookie=encodeURIComponent(m)+"="+encodeURIComponent(q)+k+(n?"; domain="+n:"")+(p?"; path="+p:"")+(o?"; secure":"");
return true
},has:function(k){return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(k).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(h.cookie)
},remove:function(k,m,l){if(!k||!this.has(k)){return false
}h.cookie=encodeURIComponent(k)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(l?"; domain="+l:"")+(m?"; path="+m:"");
return true
}};
var e={merge:function(){var n={},l=0,m=arguments.length,k;
if(0===m){return n
}for(;
l<m;
l++){for(k in arguments[l]){if(Object.prototype.hasOwnProperty.call(arguments[l],k)){n[k]=arguments[l][k]
}}}return n
},str2bool:function(k){k=""+k;
switch(k.toLowerCase()){case"false":case"no":case"0":case"":return false;
default:return true
}},fade_in:function(k){if(k.style.opacity<1){k.style.opacity=(parseFloat(k.style.opacity)+0.05).toFixed(2);
d.setTimeout(function(){e.fade_in(k)
},50)
}},get_data_attribs:function(l){var o={};
if(Object.prototype.hasOwnProperty.call(l,"dataset")){o=l.dataset
}else{var p=l.attributes;
var m;
for(m in p){if(Object.prototype.hasOwnProperty.call(p,m)){var k=p[m];
if(/^data-/.test(k.name)){var n=e.camelize(k.name.substr(5));
o[n]=k.value
}}}}return o
},normalize_keys:function(k){var n={};
for(var m in k){if(Object.prototype.hasOwnProperty.call(k,m)){var l=e.camelize(m);
n[l]=k[l]?k[l]:k[m]
}}return n
},camelize:function(q){var p="-",l=q.indexOf(p);
while(l!=-1){var o=(l===(q.length-1)),m=o?"":q[l+1],k=m.toUpperCase(),n=o?p:p+m;
q=q.replace(n,k);
l=q.indexOf(p)
}return q
},find_script_by_id:function(o){var k=h.getElementsByTagName("script");
for(var n=0,m=k.length;
n<m;
n++){if(o===k[n].id){return k[n]
}}return null
}};
var c=e.find_script_by_id("cookiebanner");
var j=a.Cookiebanner=function(k){this.init(k)
};
j.prototype={cookiejar:f,init:function(n){this.inserted=false;
this.closed=false;
this.test_mode=false;
var m='We use cookies to help provide you with the best possible online experience. Please read our <a href="http://www.informamarkets.com/privacy-policy" target="_blank">Privacy Policy</a>  and <a href="http://www.informamarkets.com/cookie-policy" target="_blank">Cookie Policy</a> for information about which cookies we use and what information we collect on our site. By continuing to use this site, you agree that we may store and access cookies on your device.';
var k="";
this.default_options={cookie:document.querySelector("#cookiePolicyName").value,closeText:"I Agree",cookieDomain:null,cookiePath:"/",debug:false,expires:Infinity,zindex:255,mask:false,maskOpacity:0.5,maskBackground:"#000",height:"auto",minHeight:"21px",bg:"#000",fg:"#ddd",link:"#aaa",position:"bottom",message:m,linkmsg:k,effect:null,fontSize:"14px",fontFamily:"arial, sans-serif",instance:g,textAlign:"center",acceptOnScroll:false,acceptOnClick:false};
this.options=this.default_options;
this.script_el=c;
if(this.script_el){var l=e.get_data_attribs(this.script_el);
this.options=e.merge(this.options,l)
}if(n){n=e.normalize_keys(n);
this.options=e.merge(this.options,n)
}g=this.options.instance;
this.options.zindex=parseInt(this.options.zindex,10);
this.options.mask=e.str2bool(this.options.mask);
if("string"===typeof this.options.expires){if("function"===typeof a[this.options.expires]){this.options.expires=a[this.options.expires]
}}if("function"===typeof this.options.expires){this.options.expires=this.options.expires()
}if(this.script_el){this.run()
}},log:function(){if("undefined"!==typeof console){console.log.apply(console,arguments)
}},run:function(){if(!this.agreed()){var k=this;
b(d,function(){k.insert()
})
}},build_viewport_mask:function(){var l=null;
if(true===this.options.mask){var k=this.options.maskOpacity;
var m=this.options.maskBackground;
var o='<div id="cookiebanner-mask" style="position:fixed;top:0;left:0;width:100%;height:100%;background:'+m+";zoom:1;filter:alpha(opacity="+(k*100)+");opacity:"+k+";z-index:"+this.options.zindex+';"></div>';
var n=h.createElement("div");
n.innerHTML=o;
l=n.firstChild
}return l
},agree:function(){this.cookiejar.set(this.options.cookie,1,this.options.expires,this.options.cookiePath);
return true
},agreed:function(){return this.cookiejar.has(this.options.cookie)
},close:function(){if(this.inserted){if(!this.closed){if(this.element){this.element.parentNode.removeChild(this.element)
}if(this.element_mask){this.element_mask.parentNode.removeChild(this.element_mask)
}this.closed=true
}}return this.closed
},agree_and_close:function(){this.agree(arguments[0]);
return this.close()
},cleanup:function(){this.close();
return this.unload()
},unload:function(){if(this.script_el){this.script_el.parentNode.removeChild(this.script_el)
}a[g]=undefined;
return true
},insert:function(){this.element_mask=this.build_viewport_mask();
var p=this.options.zindex;
if(this.element_mask){p+=1
}var n=h.createElement("div");
n.className="cookiebanner";
n.style.position="fixed";
n.style.left=0;
n.style.right=0;
n.style.minHeight=this.options.minHeight;
n.style.zIndex=p;
n.style.background=this.options.bg;
n.style.color=this.options.fg;
n.style.lineHeight=n.style.minHeight;
n.style.padding="5px 16px";
n.style.fontFamily=this.options.fontFamily;
n.style.fontSize=this.options.fontSize;
if("top"===this.options.position){n.style.top=0
}else{n.style.bottom=0
}n.innerHTML='<span class="cookieblock">'+this.options.message+" <a>"+this.options.linkmsg+'</a></span><div class="cookieblock cookiebanner-close "><div class="cookieButton" style="text-align: center;">'+this.options.closeText+"</div></div>";
this.element=n;
var o=n.getElementsByTagName("a")[0];
var m=n.getElementsByTagName("div")[0];
m.style.cursor="pointer";
function k(r,t,q){var v=r.addEventListener?"addEventListener":"attachEvent",u=r.addEventListener?"":"on";
r[v](u+t,q,false)
}var l=this;
k(m,"click",function(){var q=document.querySelector("#cookiePolicyName").value;
l.agree_and_close(q)
});
if(this.element_mask){k(this.element_mask,"click",function(){l.agree_and_close()
});
h.body.appendChild(this.element_mask)
}if(this.options.acceptOnScroll){k(window,"scroll",function(){l.agree_and_close()
})
}if(this.options.acceptOnClick){k(window,"click",function(){l.agree_and_close()
})
}h.body.appendChild(this.element);
this.inserted=true;
if("fade"===this.options.effect){this.element.style.opacity=0;
e.fade_in(this.element)
}else{this.element.style.opacity=1
}}};
if(c){if(!a[g]){a[g]=new j()
}}})(window);
/*!
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
;
var mejs=mejs||{};
mejs.version="2.22.0";
mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/dailymotion","video/x-dailymotion","application/x-mpegURL"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)
},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
},absolutizeUrl:function(a){var b=document.createElement("div");
b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';
return b.firstChild.href
},getScriptPath:function(o){var l=0,g,m="",c="",h,e,b,a,d,f=document.getElementsByTagName("script"),n=f.length,k=o.length;
for(;
l<n;
l++){b=f[l].src;
h=b.lastIndexOf("/");
if(h>-1){d=b.substring(h+1);
a=b.substring(0,h+1)
}else{d=b;
a=""
}for(g=0;
g<k;
g++){c=o[g];
e=d.indexOf(c);
if(e>-1){m=a;
break
}}if(m!==""){break
}}return m
},calculateTimeFormat:function(g,d,c){if(g<0){g=0
}if(typeof c=="undefined"){c=25
}var p=d.timeFormat,t=p[0],u=(p[1]==p[0]),e=u?2:1,f=":",q=Math.floor(g/3600)%24,m=Math.floor(g/60)%60,l=Math.floor(g%60),k=Math.floor(((g%1)*c).toFixed(3)),b=[[k,"f"],[l,"s"],[m,"m"],[q,"h"]];
if(p.length<e){f=p[e]
}var h=false;
for(var o=0,r=b.length;
o<r;
o++){if(p.indexOf(b[o][1])!==-1){h=true
}else{if(h){var a=false;
for(var n=o;
n<r;
n++){if(b[n][0]>0){a=true;
break
}}if(!a){break
}if(!u){p=t+p
}p=b[o][1]+f+p;
if(u){p=b[o][1]+p
}t=b[o][1]
}}}d.currentTimeFormat=p
},twoDigitsString:function(a){if(a<10){return"0"+a
}return String(a)
},secondsToTimeCode:function(b,j){if(b<0){b=0
}if(typeof j!=="object"){var h="m:ss";
h=arguments[1]?"hh:mm:ss":h;
h=arguments[2]?h+":ff":h;
j={currentTimeFormat:h,framesPerSecond:arguments[3]||25}
}var a=j.framesPerSecond;
if(typeof a==="undefined"){a=25
}var h=j.currentTimeFormat,f=Math.floor(b/3600)%24,c=Math.floor(b/60)%60,g=Math.floor(b%60),e=Math.floor(((b%1)*a).toFixed(3));
lis=[[e,"f"],[g,"s"],[c,"m"],[f,"h"]];
var d=h;
for(i=0,len=lis.length;
i<len;
i++){d=d.replace(lis[i][1]+lis[i][1],this.twoDigitsString(lis[i][0]));
d=d.replace(lis[i][1],lis[i][0])
}return d
},timeCodeToSeconds:function(c,k,d,e){if(typeof d=="undefined"){d=false
}else{if(typeof e=="undefined"){e=25
}}var f=c.split(":"),a=parseInt(f[0],10),b=parseInt(f[1],10),h=parseInt(f[2],10),j=0,g=0;
if(d){j=parseInt(f[3])/e
}g=(a*3600)+(b*60)+h+j;
return g
},convertSMPTEtoSeconds:function(a){if(typeof a!="string"){return false
}a=a.replace(",",".");
var d=0,b=(a.indexOf(".")!=-1)?a.split(".")[1].length:0,e=1;
a=a.split(":").reverse();
for(var c=0;
c<a.length;
c++){e=1;
if(c>0){e=Math.pow(60,c)
}d+=Number(a[c])*e
}return Number(d.toFixed(b))
},removeSwf:function(b){var a=document.getElementById(b);
if(a&&/object|embed/i.test(a.nodeName)){if(mejs.MediaFeatures.isIE){a.style.display="none";
(function(){if(a.readyState==4){mejs.Utility.removeObjectInIE(b)
}else{setTimeout(arguments.callee,10)
}})()
}else{a.parentNode.removeChild(a)
}}},removeObjectInIE:function(c){var b=document.getElementById(c);
if(b){for(var a in b){if(typeof b[a]=="function"){b[a]=null
}}b.parentNode.removeChild(b)
}},determineScheme:function(a){if(a&&a.indexOf("://")!=-1){return a.substr(0,a.indexOf("://")+3)
}return"//"
}};
mejs.PluginDetector={hasPluginVersion:function(c,a){var b=this.plugins[c];
a[1]=a[1]||0;
a[2]=a[2]||0;
return(b[0]>a[0]||(b[0]==a[0]&&b[1]>a[1])||(b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]))?true:false
},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(d,c,e,a,b){this.plugins[d]=this.detectPlugin(c,e,a,b)
},detectPlugin:function(g,b,c,k){var h=[0,0,0],j,d,a;
if(typeof(this.nav.plugins)!="undefined"&&typeof this.nav.plugins[g]=="object"){j=this.nav.plugins[g].description;
if(j&&!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){h=j.replace(g,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");
for(d=0;
d<h.length;
d++){h[d]=parseInt(h[d].match(/\d+/),10)
}}}else{if(typeof(window.ActiveXObject)!="undefined"){try{a=new ActiveXObject(c);
if(a){h=k(a)
}}catch(f){}}}return h
}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(b){var a=[],c=b.GetVariable("$version");
if(c){c=c.split(" ")[1].split(",");
a=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]
}return a
});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(b){var a=[0,0,0,0],c=function(f,d,e,g){while(f.isVersionSupported(d[0]+"."+d[1]+"."+d[2]+"."+d[3])){d[e]+=g
}d[e]-=g
};
c(b,a,0,1);
c(b,a,1,1);
c(b,a,2,10000);
c(b,a,2,1000);
c(b,a,2,100);
c(b,a,2,10);
c(b,a,2,1);
c(b,a,3,1);
return a
});
mejs.MediaFeatures={init:function(){var f=this,k=document,j=mejs.PluginDetector.nav,c=mejs.PluginDetector.ua.toLowerCase(),b,a,g=["source","track","audio","video"];
f.isiPad=(c.match(/ipad/i)!==null);
f.isiPhone=(c.match(/iphone/i)!==null);
f.isiOS=f.isiPhone||f.isiPad;
f.isAndroid=(c.match(/android/i)!==null);
f.isBustedAndroid=(c.match(/android 2\.[12]/)!==null);
f.isBustedNativeHTTPS=(location.protocol==="https:"&&(c.match(/android [12]\./)!==null||c.match(/macintosh.* version.* safari/)!==null));
f.isIE=(j.appName.toLowerCase().indexOf("microsoft")!=-1||j.appName.toLowerCase().match(/trident/gi)!==null);
f.isChrome=(c.match(/chrome/gi)!==null);
f.isChromium=(c.match(/chromium/gi)!==null);
f.isFirefox=(c.match(/firefox/gi)!==null);
f.isWebkit=(c.match(/webkit/gi)!==null);
f.isGecko=(c.match(/gecko/gi)!==null)&&!f.isWebkit&&!f.isIE;
f.isOpera=(c.match(/opera/gi)!==null);
f.hasTouch=("ontouchstart" in window);
f.svgAsImg=!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");
for(b=0;
b<g.length;
b++){a=document.createElement(g[b])
}f.supportsMediaTag=(typeof a.canPlayType!=="undefined"||f.isBustedAndroid);
try{a.canPlayType("video/mp4")
}catch(h){f.supportsMediaTag=false
}f.supportsPointerEvents=(function(){var e=document.createElement("x"),l=document.documentElement,m=window.getComputedStyle,d;
if(!("pointerEvents" in e.style)){return false
}e.style.pointerEvents="auto";
e.style.pointerEvents="x";
l.appendChild(e);
d=m&&m(e,"").pointerEvents==="auto";
l.removeChild(e);
return !!d
})();
f.hasFirefoxPluginMovingProblem=false;
f.hasiOSFullScreen=(typeof a.webkitEnterFullscreen!=="undefined");
f.hasNativeFullscreen=(typeof a.requestFullscreen!=="undefined");
f.hasWebkitNativeFullScreen=(typeof a.webkitRequestFullScreen!=="undefined");
f.hasMozNativeFullScreen=(typeof a.mozRequestFullScreen!=="undefined");
f.hasMsNativeFullScreen=(typeof a.msRequestFullscreen!=="undefined");
f.hasTrueNativeFullScreen=(f.hasWebkitNativeFullScreen||f.hasMozNativeFullScreen||f.hasMsNativeFullScreen);
f.nativeFullScreenEnabled=f.hasTrueNativeFullScreen;
if(f.hasMozNativeFullScreen){f.nativeFullScreenEnabled=document.mozFullScreenEnabled
}else{if(f.hasMsNativeFullScreen){f.nativeFullScreenEnabled=document.msFullscreenEnabled
}}if(f.isChrome){f.hasiOSFullScreen=false
}if(f.hasTrueNativeFullScreen){f.fullScreenEventName="";
if(f.hasWebkitNativeFullScreen){f.fullScreenEventName="webkitfullscreenchange"
}else{if(f.hasMozNativeFullScreen){f.fullScreenEventName="mozfullscreenchange"
}else{if(f.hasMsNativeFullScreen){f.fullScreenEventName="MSFullscreenChange"
}}}f.isFullScreen=function(){if(f.hasMozNativeFullScreen){return k.mozFullScreen
}else{if(f.hasWebkitNativeFullScreen){return k.webkitIsFullScreen
}else{if(f.hasMsNativeFullScreen){return k.msFullscreenElement!==null
}}}};
f.requestFullScreen=function(d){if(f.hasWebkitNativeFullScreen){d.webkitRequestFullScreen()
}else{if(f.hasMozNativeFullScreen){d.mozRequestFullScreen()
}else{if(f.hasMsNativeFullScreen){d.msRequestFullscreen()
}}}};
f.cancelFullScreen=function(){if(f.hasWebkitNativeFullScreen){document.webkitCancelFullScreen()
}else{if(f.hasMozNativeFullScreen){document.mozCancelFullScreen()
}else{if(f.hasMsNativeFullScreen){document.msExitFullscreen()
}}}}
}if(f.hasiOSFullScreen&&c.match(/mac os x 10_5/i)){f.hasNativeFullScreen=false;
f.hasiOSFullScreen=false
}}};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a
},setMuted:function(a){this.muted=a
},setVolume:function(a){this.volume=a
},stop:function(){this.pause()
},setSrc:function(a){var c=this.getElementsByTagName("source");
while(c.length>0){this.removeChild(c[0])
}if(typeof a=="string"){this.src=a
}else{var b,d;
for(b=0;
b<a.length;
b++){d=a[b];
if(this.canPlayType(d.type)){this.src=d.src;
break
}}}},setVideoSize:function(b,a){this.width=b;
this.height=a
}};
mejs.PluginMediaElement=function(b,c,a){this.id=b;
this.pluginType=c;
this.src=a;
this.events={};
this.attributes={}
};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.playVideo()
}else{this.pluginApi.playMedia()
}this.paused=false
}},load:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){}else{this.pluginApi.loadMedia()
}this.paused=false
}},pause:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){if(this.pluginApi.getPlayerState()==1){this.pluginApi.pauseVideo()
}}else{this.pluginApi.pauseMedia()
}this.paused=true
}},stop:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.stopVideo()
}else{this.pluginApi.stopMedia()
}this.paused=true
}},canPlayType:function(e){var d,c,a,b=mejs.plugins[this.pluginType];
for(d=0;
d<b.length;
d++){a=b[d];
if(mejs.PluginDetector.hasPluginVersion(this.pluginType,a.version)){for(c=0;
c<a.types.length;
c++){if(e==a.types[c]){return"probably"
}}}}return""
},positionFullscreenButton:function(a,c,b){if(this.pluginApi!=null&&this.pluginApi.positionFullscreenButton){this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(c),b)
}},hideFullscreenButton:function(){if(this.pluginApi!=null&&this.pluginApi.hideFullscreenButton){this.pluginApi.hideFullscreenButton()
}},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
this.src=mejs.Utility.absolutizeUrl(a)
}else{var b,c;
for(b=0;
b<a.length;
b++){c=a[b];
if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
this.src=mejs.Utility.absolutizeUrl(c.src);
break
}}}},setCurrentTime:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.seekTo(a)
}else{this.pluginApi.setCurrentTime(a)
}this.currentTime=a
}},setVolume:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"){this.pluginApi.setVolume(a*100)
}else{this.pluginApi.setVolume(a)
}this.volume=a
}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"){if(a){this.pluginApi.mute()
}else{this.pluginApi.unMute()
}this.muted=a;
this.dispatchEvent({type:"volumechange"})
}else{this.pluginApi.setMuted(a)
}this.muted=a
}},setVideoSize:function(b,a){if(this.pluginElement&&this.pluginElement.style){this.pluginElement.style.width=b+"px";
this.pluginElement.style.height=a+"px"
}if(this.pluginApi!=null&&this.pluginApi.setVideoSize){this.pluginApi.setVideoSize(b,a)
}},setFullscreen:function(a){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.pluginApi.setFullscreen(a)
}},enterFullScreen:function(){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.setFullscreen(true)
}},exitFullScreen:function(){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.setFullscreen(false)
}},addEventListener:function(b,c,a){this.events[b]=this.events[b]||[];
this.events[b].push(c)
},removeEventListener:function(a,d){if(!a){this.events={};
return true
}var c=this.events[a];
if(!c){return true
}if(!d){this.events[a]=[];
return true
}for(var b=0;
b<c.length;
b++){if(c[b]===d){this.events[a].splice(b,1);
return true
}}return false
},dispatchEvent:function(d){var b,a,c=this.events[d.type];
if(c){for(b=0;
b<c.length;
b++){c[b].apply(this,[d])
}}},hasAttribute:function(a){return(a in this.attributes)
},removeAttribute:function(a){delete this.attributes[a]
},getAttribute:function(a){if(this.hasAttribute(a)){return this.attributes[a]
}return""
},setAttribute:function(a,b){this.attributes[a]=b
},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id)
}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",flashScriptAccess:"sameDomain",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};
mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)
};
mejs.HtmlMediaElementShim={create:function(e,d){var n={},k=(typeof(e)=="string")?document.getElementById(e):e,h=k.tagName.toLowerCase(),g=(h==="audio"||h==="video"),b=(g)?k.getAttribute("src"):k.getAttribute("href"),l=k.getAttribute("poster"),f=k.getAttribute("autoplay"),j=k.getAttribute("preload"),m=k.getAttribute("controls"),a,c;
for(c in mejs.MediaElementDefaults){n[c]=mejs.MediaElementDefaults[c]
}for(c in d){n[c]=d[c]
}b=(typeof b=="undefined"||b===null||b=="")?null:b;
l=(typeof l=="undefined"||l===null)?"":l;
j=(typeof j=="undefined"||j===null||j==="false")?"none":j;
f=!(typeof f=="undefined"||f===null||f==="false");
m=!(typeof m=="undefined"||m===null||m==="false");
a=this.determinePlayback(k,n,mejs.MediaFeatures.supportsMediaTag,g,b);
a.url=(a.url!==null)?mejs.Utility.absolutizeUrl(a.url):"";
a.scheme=mejs.Utility.determineScheme(a.url);
if(a.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){k.src=a.url;
k.addEventListener("click",function(){k.play()
},false)
}return this.updateNative(a,n,f,j)
}else{if(a.method!==""){return this.createPlugin(a,n,l,f,j,m)
}else{this.createErrorMessage(a,n,l);
return this
}}},determinePlayback:function(u,c,h,w,f){var o=[],t,r,q,p,m,d,g={method:"",url:"",htmlMediaElement:u,isVideo:(u.tagName.toLowerCase()!="audio"),scheme:""},a,b,v,x,e;
if(typeof c.type!="undefined"&&c.type!==""){if(typeof c.type=="string"){o.push({type:c.type,url:f})
}else{for(t=0;
t<c.type.length;
t++){o.push({type:c.type[t],url:f})
}}}else{if(f!==null){d=this.formatType(f,u.getAttribute("type"));
o.push({type:d,url:f})
}else{for(t=0;
t<u.childNodes.length;
t++){m=u.childNodes[t];
if(m.nodeType==1&&m.tagName.toLowerCase()=="source"){f=m.getAttribute("src");
d=this.formatType(f,m.getAttribute("type"));
e=m.getAttribute("media");
if(!e||!window.matchMedia||(window.matchMedia&&window.matchMedia(e).matches)){o.push({type:d,url:f})
}}}}}if(!w&&o.length>0&&o[0].url!==null&&this.getTypeFromFile(o[0].url).indexOf("audio")>-1){g.isVideo=false
}if(mejs.MediaFeatures.isBustedAndroid){u.canPlayType=function(j){return(j.match(/video\/(mp4|m4v)/gi)!==null)?"maybe":""
}
}if(mejs.MediaFeatures.isChromium){u.canPlayType=function(j){return(j.match(/video\/(webm|ogv|ogg)/gi)!==null)?"maybe":""
}
}if(h&&(c.mode==="auto"||c.mode==="auto_plugin"||c.mode==="native")&&!(mejs.MediaFeatures.isBustedNativeHTTPS&&c.httpsBasicAuthSite===true)){if(!w){x=document.createElement(g.isVideo?"video":"audio");
u.parentNode.insertBefore(x,u);
u.style.display="none";
g.htmlMediaElement=u=x
}for(t=0;
t<o.length;
t++){if(o[t].type=="video/m3u8"||u.canPlayType(o[t].type).replace(/no/,"")!==""||u.canPlayType(o[t].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""||u.canPlayType(o[t].type.replace(/m4a/,"mp4")).replace(/no/,"")!==""){g.method="native";
g.url=o[t].url;
break
}}if(g.method==="native"){if(g.url!==null){u.src=g.url
}if(c.mode!=="auto_plugin"){return g
}}}if(c.mode==="auto"||c.mode==="auto_plugin"||c.mode==="shim"){for(t=0;
t<o.length;
t++){d=o[t].type;
for(r=0;
r<c.plugins.length;
r++){a=c.plugins[r];
b=mejs.plugins[a];
for(q=0;
q<b.length;
q++){v=b[q];
if(v.version==null||mejs.PluginDetector.hasPluginVersion(a,v.version)){for(p=0;
p<v.types.length;
p++){if(d.toLowerCase()==v.types[p].toLowerCase()){g.method=a;
g.url=o[t].url;
return g
}}}}}}}if(c.mode==="auto_plugin"&&g.method==="native"){return g
}if(g.method===""&&o.length>0){g.url=o[0].url
}return g
},formatType:function(a,b){if(a&&!b){return this.getTypeFromFile(a)
}else{if(b&&~b.indexOf(";")){return b.substr(0,b.indexOf(";"))
}else{return b
}}},getTypeFromFile:function(a){a=a.split("?")[0];
var b=a.substring(a.lastIndexOf(".")+1).toLowerCase(),c=/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(b)?"video/":"audio/";
return this.getTypeFromExtension(b,c)
},getTypeFromExtension:function(a,b){b=b||"";
switch(a){case"mp4":case"m4v":case"m4a":case"f4v":case"f4a":return b+"mp4";
case"flv":return b+"x-flv";
case"webm":case"webma":case"webmv":return b+"webm";
case"ogg":case"oga":case"ogv":return b+"ogg";
case"m3u8":return"application/x-mpegurl";
case"ts":return b+"mp2t";
default:return b+a
}},createErrorMessage:function(d,c,h){var f=d.htmlMediaElement,a=document.createElement("div"),b=c.customError;
a.className="me-cannotplay";
try{a.style.width=f.width+"px";
a.style.height=f.height+"px"
}catch(g){}if(!b){b='<a href="'+d.url+'">';
if(h!==""){b+='<img src="'+h+'" width="100%" height="100%" alt="" />'
}b+="<span>"+mejs.i18n.t("Download File")+"</span></a>"
}a.innerHTML=b;
f.parentNode.insertBefore(a,f);
f.style.display="none";
c.error(f)
},createPlugin:function(o,b,d,f,e,j){var u=o.htmlMediaElement,n=1,m=1,x="me_"+o.method+"_"+(mejs.meIndex++),p=new mejs.PluginMediaElement(x,o.method,o.url),h=document.createElement("div"),c,q,k;
p.tagName=u.tagName;
for(var t=0;
t<u.attributes.length;
t++){var g=u.attributes[t];
if(g.specified){p.setAttribute(g.name,g.value)
}}q=u.parentNode;
while(q!==null&&q.tagName!=null&&q.tagName.toLowerCase()!=="body"&&q.parentNode!=null&&q.parentNode.tagName!=null&&q.parentNode.constructor!=null&&q.parentNode.constructor.name==="ShadowRoot"){if(q.parentNode.tagName.toLowerCase()==="p"){q.parentNode.parentNode.insertBefore(q,q.parentNode);
break
}q=q.parentNode
}if(o.isVideo){n=(b.pluginWidth>0)?b.pluginWidth:(b.videoWidth>0)?b.videoWidth:(u.getAttribute("width")!==null)?u.getAttribute("width"):b.defaultVideoWidth;
m=(b.pluginHeight>0)?b.pluginHeight:(b.videoHeight>0)?b.videoHeight:(u.getAttribute("height")!==null)?u.getAttribute("height"):b.defaultVideoHeight;
n=mejs.Utility.encodeUrl(n);
m=mejs.Utility.encodeUrl(m)
}else{if(b.enablePluginDebug){n=320;
m=240
}}p.success=b.success;
h.className="me-plugin";
h.id=x+"_container";
if(o.isVideo){u.parentNode.insertBefore(h,u)
}else{document.body.insertBefore(h,document.body.childNodes[0])
}if(o.method==="flash"||o.method==="silverlight"){k=["id="+x,"isvideo="+((o.isVideo)?"true":"false"),"autoplay="+((f)?"true":"false"),"preload="+e,"width="+n,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+m,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];
if(o.url!==null){if(o.method=="flash"){k.push("file="+mejs.Utility.encodeUrl(o.url))
}else{k.push("file="+o.url)
}}if(b.enablePluginDebug){k.push("debug=true")
}if(b.enablePluginSmoothing){k.push("smoothing=true")
}if(b.enablePseudoStreaming){k.push("pseudostreaming=true")
}if(j){k.push("controls=true")
}if(b.pluginVars){k=k.concat(b.pluginVars)
}window[x+"_init"]=function(){switch(p.pluginType){case"flash":p.pluginElement=p.pluginApi=document.getElementById(x);
break;
case"silverlight":p.pluginElement=document.getElementById(p.id);
p.pluginApi=p.pluginElement.Content.MediaElementJS;
break
}if(p.pluginApi!=null&&p.success){p.success(p,u)
}};
window[x+"_event"]=function(A,z){var C,B,y;
C={type:A,target:p};
for(B in z){p[B]=z[B];
C[B]=z[B]
}y=z.bufferedTime||0;
C.target.buffered=C.buffered={start:function(D){return 0
},end:function(D){return y
},length:1};
p.dispatchEvent(C)
}
}switch(o.method){case"silverlight":h.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+x+'" name="'+x+'" width="'+n+'" height="'+m+'" class="mejs-shim"><param name="initParams" value="'+k.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';
break;
case"flash":if(mejs.MediaFeatures.isIE){c=document.createElement("div");
h.appendChild(c);
c.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+x+'" width="'+n+'" height="'+m+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?"+(new Date().getTime())+'" /><param name="flashvars" value="'+k.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+b.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'
}else{h.innerHTML='<embed id="'+x+'" name="'+x+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="'+b.flashScriptAccess+'" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+k.join("&")+'" width="'+n+'" height="'+m+'" scale="default"class="mejs-shim"></embed>'
}break;
case"youtube":var l;
if(o.url.lastIndexOf("youtu.be")!=-1){l=o.url.substr(o.url.lastIndexOf("/")+1);
if(l.indexOf("?")!=-1){l=l.substr(0,l.indexOf("?"))
}}else{var w=o.url.match(/[?&]v=([^&#]+)|&|#|$/);
if(w){l=w[1]
}}youtubeSettings={container:h,containerId:h.id,pluginMediaElement:p,pluginId:x,videoId:l,height:m,width:n,scheme:o.scheme};
if(window.postMessage){mejs.YouTubeApi.enqueueIframe(youtubeSettings)
}else{if(mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])){mejs.YouTubeApi.createFlash(youtubeSettings,b)
}}break;
case"vimeo":var v=x+"_player";
p.vimeoid=o.url.substr(o.url.lastIndexOf("/")+1);
h.innerHTML='<iframe src="'+o.scheme+"player.vimeo.com/video/"+p.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+v+'" width="'+n+'" height="'+m+'" frameborder="0" class="mejs-shim" id="'+v+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
if(typeof($f)=="function"){var r=$f(h.childNodes[0]),a=-1;
r.addEvent("ready",function(){r.playVideo=function(){r.api("play")
};
r.stopVideo=function(){r.api("unload")
};
r.pauseVideo=function(){r.api("pause")
};
r.seekTo=function(z){r.api("seekTo",z)
};
r.setVolume=function(z){r.api("setVolume",z)
};
r.setMuted=function(z){if(z){r.lastVolume=r.api("getVolume");
r.api("setVolume",0)
}else{r.api("setVolume",r.lastVolume);
delete r.lastVolume
}};
r.getPlayerState=function(){return a
};
function y(B,A,z,D){var C={type:z,target:A};
if(z=="timeupdate"){A.currentTime=C.currentTime=D.seconds;
A.duration=C.duration=D.duration
}A.dispatchEvent(C)
}r.addEvent("play",function(){a=1;
y(r,p,"play");
y(r,p,"playing")
});
r.addEvent("pause",function(){a=2;
y(r,p,"pause")
});
r.addEvent("finish",function(){a=0;
y(r,p,"ended")
});
r.addEvent("playProgress",function(z){y(r,p,"timeupdate",z)
});
r.addEvent("seek",function(z){a=3;
y(r,p,"seeked",z)
});
r.addEvent("loadProgress",function(z){a=3;
y(r,p,"progress",z)
});
p.pluginElement=h;
p.pluginApi=r;
p.success(p,p.pluginElement)
})
}else{console.warn("You need to include froogaloop for vimeo to work")
}break
}u.style.display="none";
u.removeAttribute("autoplay");
return p
},updateNative:function(d,c,f,b){var e=d.htmlMediaElement,a;
for(a in mejs.HtmlMediaElement){e[a]=mejs.HtmlMediaElement[a]
}c.success(e,e);
return e
}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(c){if(!this.isIframeStarted){var a=document.createElement("script");
a.src=c.scheme+"www.youtube.com/player_api";
var b=document.getElementsByTagName("script")[0];
b.parentNode.insertBefore(a,b);
this.isIframeStarted=true
}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded){this.createIframe(a)
}else{this.loadIframeApi(a);
this.iframeQueue.push(a)
}},createIframe:function(c){var b=c.pluginMediaElement,a=new YT.Player(c.containerId,{height:c.height,width:c.width,videoId:c.videoId,playerVars:{controls:0,wmode:"transparent"},events:{onReady:function(){a.setVideoSize=function(e,d){a.setSize(e,d)
};
c.pluginMediaElement.pluginApi=a;
c.pluginMediaElement.pluginElement=document.getElementById(c.containerId);
b.success(b,b.pluginElement);
setInterval(function(){mejs.YouTubeApi.createEvent(a,b,"timeupdate")
},250)
},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,a,b)
}}})
},createEvent:function(d,c,b){var e={type:b,target:c};
if(d&&d.getDuration){c.currentTime=e.currentTime=d.getCurrentTime();
c.duration=e.duration=d.getDuration();
e.paused=c.paused;
e.ended=c.ended;
e.muted=d.isMuted();
e.volume=d.getVolume()/100;
e.bytesTotal=d.getVideoBytesTotal();
e.bufferedBytes=d.getVideoBytesLoaded();
var a=e.bufferedBytes/e.bytesTotal*e.duration;
e.target.buffered=e.buffered={start:function(f){return 0
},end:function(f){return a
},length:1}
}c.dispatchEvent(e)
},iFrameReady:function(){this.isLoaded=true;
this.isIframeLoaded=true;
while(this.iframeQueue.length>0){var a=this.iframeQueue.pop();
this.createIframe(a)
}},flashPlayers:{},createFlash:function(c){this.flashPlayers[c.pluginId]=c;
var b,a=c.scheme+"www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+c.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
if(mejs.MediaFeatures.isIE){b=document.createElement("div");
c.container.appendChild(b);
b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+c.scheme+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+c.pluginId+'" width="'+c.width+'" height="'+c.height+'" class="mejs-shim"><param name="movie" value="'+a+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+options.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /></object>'
}else{c.container.innerHTML='<object type="application/x-shockwave-flash" id="'+c.pluginId+'" data="'+a+'" width="'+c.width+'" height="'+c.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="'+options.flashScriptAccess+'"><param name="wmode" value="transparent"></object>'
}},flashReady:function(e){var c=this.flashPlayers[e],b=document.getElementById(e),a=c.pluginMediaElement;
a.pluginApi=a.pluginElement=b;
c.success(a,a.pluginElement);
b.cueVideoById(c.videoId);
var d=c.containerId+"_callback";
window[d]=function(f){mejs.YouTubeApi.handleStateChange(f,b,a)
};
b.addEventListener("onStateChange",d);
setInterval(function(){mejs.YouTubeApi.createEvent(b,a,"timeupdate")
},250);
mejs.YouTubeApi.createEvent(b,a,"canplay")
},handleStateChange:function(c,b,a){switch(c){case -1:a.paused=true;
a.ended=true;
mejs.YouTubeApi.createEvent(b,a,"loadedmetadata");
break;
case 0:a.paused=false;
a.ended=true;
mejs.YouTubeApi.createEvent(b,a,"ended");
break;
case 1:a.paused=false;
a.ended=false;
mejs.YouTubeApi.createEvent(b,a,"play");
mejs.YouTubeApi.createEvent(b,a,"playing");
break;
case 2:a.paused=true;
a.ended=false;
mejs.YouTubeApi.createEvent(b,a,"pause");
break;
case 3:mejs.YouTubeApi.createEvent(b,a,"progress");
break;
case 5:break
}}};
window.onYouTubePlayerAPIReady=function(){mejs.YouTubeApi.iFrameReady()
};
window.onYouTubePlayerReady=function(a){mejs.YouTubeApi.flashReady(a)
};
window.mejs=mejs;
window.MediaElement=mejs.MediaElement;
(function(b,a,d){var c={locale:{language:(a.i18n&&a.i18n.locale.language)||"",strings:(a.i18n&&a.i18n.locale.strings)||{}},ietf_lang_regex:/^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,methods:{}};
c.getLanguage=function(){var e=c.locale.language||window.navigator.userLanguage||window.navigator.language;
return c.ietf_lang_regex.exec(e)?e:null
};
if(typeof mejsL10n!="undefined"){c.locale.language=mejsL10n.language
}c.methods.checkPlain=function(h){var g,f,e={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};
h=String(h);
for(g in e){if(e.hasOwnProperty(g)){f=new RegExp(g,"g");
h=h.replace(f,e[g])
}}return h
};
c.methods.t=function(f,e){if(c.locale.strings&&c.locale.strings[e.context]&&c.locale.strings[e.context][f]){f=c.locale.strings[e.context][f]
}return c.methods.checkPlain(f)
};
c.t=function(f,e){if(typeof f==="string"&&f.length>0){var g=c.getLanguage();
e=e||{context:g};
return c.methods.t(f,e)
}else{throw {name:"InvalidArgumentException",message:"First argument is either not a string or empty."}
}};
a.i18n=c
}(document,mejs));
(function(a,b){if(typeof mejsL10n!="undefined"){a[mejsL10n.language]=mejsL10n.strings
}}(mejs.i18n.locale.strings));
/*!
 *
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
;
if(typeof jQuery!="undefined"){mejs.$=jQuery
}else{if(typeof Zepto!="undefined"){mejs.$=Zepto;
Zepto.fn.outerWidth=function(a){var b=$(this).width();
if(a){b+=parseInt($(this).css("margin-right"),10);
b+=parseInt($(this).css("margin-left"),10)
}return b
}
}else{if(typeof ender!="undefined"){mejs.$=ender
}}}(function(a){mejs.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(b){return(b.duration*0.05)
},defaultSeekForwardInterval:function(b){return(b.duration*0.05)
},setDimensions:true,audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,timeFormat:"",alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,hideVideoControlsOnLoad:false,clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,stretching:"auto",enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(b,c){if(c.paused||c.ended){c.play()
}else{c.pause()
}}},{keys:[38],action:function(b,d){b.container.find(".mejs-volume-slider").css("display","block");
if(b.isVideo){b.showControls();
b.startControlsTimer()
}var c=Math.min(d.volume+0.1,1);
d.setVolume(c)
}},{keys:[40],action:function(b,d){b.container.find(".mejs-volume-slider").css("display","block");
if(b.isVideo){b.showControls();
b.startControlsTimer()
}var c=Math.max(d.volume-0.1,0);
d.setVolume(c)
}},{keys:[37,227],action:function(b,d){if(!isNaN(d.duration)&&d.duration>0){if(b.isVideo){b.showControls();
b.startControlsTimer()
}var c=Math.max(d.currentTime-b.options.defaultSeekBackwardInterval(d),0);
d.setCurrentTime(c)
}}},{keys:[39,228],action:function(b,d){if(!isNaN(d.duration)&&d.duration>0){if(b.isVideo){b.showControls();
b.startControlsTimer()
}var c=Math.min(d.currentTime+b.options.defaultSeekForwardInterval(d),d.duration);
d.setCurrentTime(c)
}}},{keys:[70],action:function(b,c){if(typeof b.enterFullScreen!="undefined"){if(b.isFullScreen){b.exitFullScreen()
}else{b.enterFullScreen()
}}}},{keys:[77],action:function(b,c){b.container.find(".mejs-volume-slider").css("display","block");
if(b.isVideo){b.showControls();
b.startControlsTimer()
}if(b.media.muted){b.setMuted(false)
}else{b.setMuted(true)
}}}]};
mejs.mepIndex=0;
mejs.players={};
mejs.MediaElementPlayer=function(c,d){if(!(this instanceof mejs.MediaElementPlayer)){return new mejs.MediaElementPlayer(c,d)
}var b=this;
b.$media=b.$node=a(c);
b.node=b.media=b.$media[0];
if(!b.node){return
}if(typeof b.node.player!="undefined"){return b.node.player
}if(typeof d=="undefined"){d=b.$node.data("mejsoptions")
}b.options=a.extend({},mejs.MepDefaults,d);
if(!b.options.timeFormat){b.options.timeFormat="mm:ss";
if(b.options.alwaysShowHours){b.options.timeFormat="hh:mm:ss"
}if(b.options.showTimecodeFrameCount){b.options.timeFormat+=":ff"
}}mejs.Utility.calculateTimeFormat(0,b.options,b.options.framesPerSecond||25);
b.id="mep_"+mejs.mepIndex++;
mejs.players[b.id]=b;
b.init();
return b
};
mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var e=this,f=mejs.MediaFeatures,h=a.extend(true,{},e.options,{success:function(k,j){e.meReady(k,j)
},error:function(j){e.handleError(j)
}}),d=e.media.tagName.toLowerCase();
e.isDynamic=(d!=="audio"&&d!=="video");
if(e.isDynamic){e.isVideo=e.options.isVideo
}else{e.isVideo=(d!=="audio"&&e.options.isVideo)
}if((f.isiPad&&e.options.iPadUseNativeControls)||(f.isiPhone&&e.options.iPhoneUseNativeControls)){e.$media.attr("controls","controls");
if(f.isiPad&&e.media.getAttribute("autoplay")!==null){e.play()
}}else{if(f.isAndroid&&e.options.AndroidUseNativeControls){}else{e.$media.removeAttr("controls");
var b=e.isVideo?mejs.i18n.t("Video Player"):mejs.i18n.t("Audio Player");
a('<span class="mejs-offscreen">'+b+"</span>").insertBefore(e.$media);
e.container=a('<div id="'+e.id+'" class="mejs-container '+(mejs.MediaFeatures.svgAsImg?"svg":"no-svg")+'" tabindex="0" role="application" aria-label="'+b+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(e.$media[0].className).insertBefore(e.$media).focus(function(k){if(!e.controlsAreVisible&&!e.hasFocus){e.showControls(true);
if(!e.hasMsNativeFullScreen){var j=e.container.find(".mejs-playpause-button > button");
j.focus()
}}});
if(e.options.stretching==="fill"&&!e.container.parent("mejs-fill-container").length){e.outerContainer=e.$media.parent();
e.container.wrap('<div class="mejs-fill-container"/>')
}e.container.addClass((f.isAndroid?"mejs-android ":"")+(f.isiOS?"mejs-ios ":"")+(f.isiPad?"mejs-ipad ":"")+(f.isiPhone?"mejs-iphone ":"")+(e.isVideo?"mejs-video ":"mejs-audio "));
e.container.find(".mejs-mediaelement").append(e.$media);
e.node.player=e;
e.controls=e.container.find(".mejs-controls");
e.layers=e.container.find(".mejs-layers");
var g=(e.isVideo?"video":"audio"),c=g.substring(0,1).toUpperCase()+g.substring(1);
if(e.options[g+"Width"]>0||e.options[g+"Width"].toString().indexOf("%")>-1){e.width=e.options[g+"Width"]
}else{if(e.media.style.width!==""&&e.media.style.width!==null){e.width=e.media.style.width
}else{if(e.media.getAttribute("width")!==null){e.width=e.$media.attr("width")
}else{e.width=e.options["default"+c+"Width"]
}}}if(e.options[g+"Height"]>0||e.options[g+"Height"].toString().indexOf("%")>-1){e.height=e.options[g+"Height"]
}else{if(e.media.style.height!==""&&e.media.style.height!==null){e.height=e.media.style.height
}else{if(e.$media[0].getAttribute("height")!==null){e.height=e.$media.attr("height")
}else{e.height=e.options["default"+c+"Height"]
}}}e.setPlayerSize(e.width,e.height);
h.pluginWidth=e.width;
h.pluginHeight=e.height
}}mejs.MediaElement(e.$media[0],h);
if(typeof(e.container)!="undefined"&&e.controlsAreVisible){e.container.trigger("controlsshown")
}},showControls:function(b){var c=this;
b=typeof b=="undefined"||b;
if(c.controlsAreVisible){return
}if(b){c.controls.removeClass("mejs-offscreen").stop(true,true).fadeIn(200,function(){c.controlsAreVisible=true;
c.container.trigger("controlsshown")
});
c.container.find(".mejs-control").removeClass("mejs-offscreen").stop(true,true).fadeIn(200,function(){c.controlsAreVisible=true
})
}else{c.controls.removeClass("mejs-offscreen").css("display","block");
c.container.find(".mejs-control").removeClass("mejs-offscreen").css("display","block");
c.controlsAreVisible=true;
c.container.trigger("controlsshown")
}c.setControlsSize()
},hideControls:function(b){var c=this;
b=typeof b=="undefined"||b;
if(!c.controlsAreVisible||c.options.alwaysShowControls||c.keyboardAction){return
}if(b){c.controls.stop(true,true).fadeOut(200,function(){a(this).addClass("mejs-offscreen").css("display","block");
c.controlsAreVisible=false;
c.container.trigger("controlshidden")
});
c.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){a(this).addClass("mejs-offscreen").css("display","block")
})
}else{c.controls.addClass("mejs-offscreen").css("display","block");
c.container.find(".mejs-control").addClass("mejs-offscreen").css("display","block");
c.controlsAreVisible=false;
c.container.trigger("controlshidden")
}},controlsTimer:null,startControlsTimer:function(c){var b=this;
c=typeof c!="undefined"?c:1500;
b.killControlsTimer("start");
b.controlsTimer=setTimeout(function(){b.hideControls();
b.killControlsTimer("hide")
},c)
},killControlsTimer:function(c){var b=this;
if(b.controlsTimer!==null){clearTimeout(b.controlsTimer);
delete b.controlsTimer;
b.controlsTimer=null
}},controlsEnabled:true,disableControls:function(){var b=this;
b.killControlsTimer();
b.hideControls(false);
this.controlsEnabled=false
},enableControls:function(){var b=this;
b.showControls(false);
b.controlsEnabled=true
},meReady:function(c,g){var l=this,k=mejs.MediaFeatures,h=g.getAttribute("autoplay"),d=!(typeof h=="undefined"||h===null||h==="false"),b,m;
if(l.created){return
}else{l.created=true
}l.media=c;
l.domNode=g;
if(!(k.isAndroid&&l.options.AndroidUseNativeControls)&&!(k.isiPad&&l.options.iPadUseNativeControls)&&!(k.isiPhone&&l.options.iPhoneUseNativeControls)){l.buildposter(l,l.controls,l.layers,l.media);
l.buildkeyboard(l,l.controls,l.layers,l.media);
l.buildoverlays(l,l.controls,l.layers,l.media);
l.findTracks();
for(b in l.options.features){m=l.options.features[b];
if(l["build"+m]){try{l["build"+m](l,l.controls,l.layers,l.media)
}catch(j){}}}l.container.trigger("controlsready");
l.setPlayerSize(l.width,l.height);
l.setControlsSize();
if(l.isVideo){if(mejs.MediaFeatures.hasTouch){l.$media.bind("touchstart",function(){if(l.controlsAreVisible){l.hideControls(false)
}else{if(l.controlsEnabled){l.showControls(false)
}}})
}else{l.clickToPlayPauseCallback=function(){if(l.options.clickToPlayPause){if(l.media.paused){l.play()
}else{l.pause()
}}};
l.media.addEventListener("click",l.clickToPlayPauseCallback,false);
l.container.bind("mouseenter",function(){if(l.controlsEnabled){if(!l.options.alwaysShowControls){l.killControlsTimer("enter");
l.showControls();
l.startControlsTimer(2500)
}}}).bind("mousemove",function(){if(l.controlsEnabled){if(!l.controlsAreVisible){l.showControls()
}if(!l.options.alwaysShowControls){l.startControlsTimer(2500)
}}}).bind("mouseleave",function(){if(l.controlsEnabled){if(!l.media.paused&&!l.options.alwaysShowControls){l.startControlsTimer(1000)
}}})
}if(l.options.hideVideoControlsOnLoad){l.hideControls(false)
}if(d&&!l.options.alwaysShowControls){l.hideControls()
}if(l.options.enableAutosize){l.media.addEventListener("loadedmetadata",function(n){if(l.options.videoHeight<=0&&l.domNode.getAttribute("height")===null&&!isNaN(n.target.videoHeight)){l.setPlayerSize(n.target.videoWidth,n.target.videoHeight);
l.setControlsSize();
l.media.setVideoSize(n.target.videoWidth,n.target.videoHeight)
}},false)
}}l.media.addEventListener("play",function(){var e;
for(e in mejs.players){var n=mejs.players[e];
if(n.id!=l.id&&l.options.pauseOtherPlayers&&!n.paused&&!n.ended){n.pause()
}n.hasFocus=false
}l.hasFocus=true
},false);
l.media.addEventListener("ended",function(n){if(l.options.autoRewind){try{l.media.setCurrentTime(0);
window.setTimeout(function(){a(l.container).find(".mejs-overlay-loading").parent().hide()
},20)
}catch(o){}}l.media.pause();
if(l.setProgressRail){l.setProgressRail()
}if(l.setCurrentRail){l.setCurrentRail()
}if(l.options.loop){l.play()
}else{if(!l.options.alwaysShowControls&&l.controlsEnabled){l.showControls()
}}},false);
l.media.addEventListener("loadedmetadata",function(n){if(l.updateDuration){l.updateDuration()
}if(l.updateCurrent){l.updateCurrent()
}if(!l.isFullScreen){l.setPlayerSize(l.width,l.height);
l.setControlsSize()
}},false);
var f=null;
l.media.addEventListener("timeupdate",function(){if(f!==this.duration){f=this.duration;
mejs.Utility.calculateTimeFormat(f,l.options,l.options.framesPerSecond||25);
if(l.updateDuration){l.updateDuration()
}if(l.updateCurrent){l.updateCurrent()
}l.setControlsSize()
}},false);
l.container.focusout(function(o){if(o.relatedTarget){var n=a(o.relatedTarget);
if(l.keyboardAction&&n.parents(".mejs-container").length===0){l.keyboardAction=false;
l.hideControls(true)
}}});
setTimeout(function(){l.setPlayerSize(l.width,l.height);
l.setControlsSize()
},50);
l.globalBind("resize",function(){if(!(l.isFullScreen||(mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen))){l.setPlayerSize(l.width,l.height)
}l.setControlsSize()
});
if(l.media.pluginType=="youtube"&&(k.isiOS||k.isAndroid)){l.container.find(".mejs-overlay-play").hide();
l.container.find(".mejs-poster").hide()
}}if(d&&c.pluginType=="native"){l.play()
}if(l.options.success){if(typeof l.options.success=="string"){window[l.options.success](l.media,l.domNode,l)
}else{l.options.success(l.media,l.domNode,l)
}}},handleError:function(c){var b=this;
if(b.controls){b.controls.hide()
}if(b.options.error){b.options.error(c)
}},setPlayerSize:function(d,b){var c=this;
if(!c.options.setDimensions){return false
}if(typeof d!="undefined"){c.width=d
}if(typeof b!="undefined"){c.height=b
}switch(c.options.stretching){case"fill":if(c.isVideo){this.setFillMode()
}else{this.setDimensions(c.width,c.height)
}break;
case"responsive":this.setResponsiveMode();
break;
case"none":this.setDimensions(c.width,c.height);
break;
default:if(this.hasFluidMode()===true){this.setResponsiveMode()
}else{this.setDimensions(c.width,c.height)
}break
}},hasFluidMode:function(){var b=this;
return(b.height.toString().indexOf("%")>0||(b.$node.css("max-width")!=="none"&&b.$node.css("max-width")!=="t.width")||(b.$node[0].currentStyle&&b.$node[0].currentStyle.maxWidth==="100%"))
},setResponsiveMode:function(){var e=this;
var g=(function(){if(e.isVideo){if(e.media.videoWidth&&e.media.videoWidth>0){return e.media.videoWidth
}else{if(e.media.getAttribute("width")!==null){return e.media.getAttribute("width")
}else{return e.options.defaultVideoWidth
}}}else{return e.options.defaultAudioWidth
}})();
var c=(function(){if(e.isVideo){if(e.media.videoHeight&&e.media.videoHeight>0){return e.media.videoHeight
}else{if(e.media.getAttribute("height")!==null){return e.media.getAttribute("height")
}else{return e.options.defaultVideoHeight
}}}else{return e.options.defaultAudioHeight
}})();
var f=e.container.parent().closest(":visible").width(),d=e.container.parent().closest(":visible").height(),b=e.isVideo||!e.options.autosizeProgress?parseInt(f*c/g,10):c;
if(isNaN(b)||(d!==0&&b>d&&d>c)){b=d
}if(e.container.parent().length>0&&e.container.parent()[0].tagName.toLowerCase()==="body"){f=a(window).width();
b=a(window).height()
}if(b&&f){e.container.width(f).height(b);
e.$media.add(e.container.find(".mejs-shim")).width("100%").height("100%");
if(e.isVideo){if(e.media.setVideoSize){e.media.setVideoSize(f,b)
}}e.layers.children(".mejs-layer").width("100%").height("100%")
}},setFillMode:function(){var n=this,j=n.outerContainer;
if(!j.width()){j.height(n.$media.width())
}if(!j.height()){j.height(n.$media.height())
}var l=j.width(),g=j.height();
n.setDimensions("100%","100%");
n.container.find(".mejs-poster img").css("display","block");
targetElement=n.container.find("object, embed, iframe, video");
var h=n.height,b=n.width,e=l,m=(h*l)/b,d=(b*g)/h,k=g,o=!(d>l),f=o?Math.floor(e):Math.floor(d),c=o?Math.floor(m):Math.floor(k);
if(o){targetElement.height(c).width(l);
if(n.media.setVideoSize){n.media.setVideoSize(l,c)
}}else{targetElement.height(g).width(f);
if(n.media.setVideoSize){n.media.setVideoSize(f,g)
}}targetElement.css({"margin-left":Math.floor((l-f)/2),"margin-top":0})
},setDimensions:function(d,b){var c=this;
c.container.width(d).height(b);
c.layers.children(".mejs-layer").width(d).height(b)
},setControlsSize:function(){var d=this,g=0,j=0,h=d.controls.find(".mejs-time-rail"),f=d.controls.find(".mejs-time-total"),e=h.siblings(),c=e.last(),b=null;
if(!d.container.is(":visible")||!h.length||!h.is(":visible")){return
}if(d.options&&!d.options.autosizeProgress){j=parseInt(h.css("width"),10)
}if(j===0||!j){e.each(function(){var k=a(this);
if(k.css("position")!="absolute"&&k.is(":visible")){g+=a(this).outerWidth(true)
}});
j=d.controls.width()-g-(h.outerWidth(true)-h.width())
}do{h.width(j);
f.width(j-(f.outerWidth(true)-f.width()));
if(c.css("position")!="absolute"){b=c.length?c.position():null;
j--
}}while(b!==null&&b.top.toFixed(2)>0&&j>0);
d.container.trigger("controlsresize")
},buildposter:function(e,b,g,f){var d=this,h=a('<div class="mejs-poster mejs-layer"></div>').appendTo(g),c=e.$media.attr("poster");
if(e.options.poster!==""){c=e.options.poster
}if(c){d.setPoster(c)
}else{h.hide()
}f.addEventListener("play",function(){h.hide()
},false);
if(e.options.showPosterWhenEnded&&e.options.autoRewind){f.addEventListener("ended",function(){h.show()
},false)
}},setPoster:function(c){var d=this,e=d.container.find(".mejs-poster"),b=e.find("img");
if(b.length===0){b=a('<img width="100%" height="100%" alt="" />').appendTo(e)
}b.attr("src",c);
e.css({"background-image":"url("+c+")"})
},buildoverlays:function(f,b,h,g){var e=this;
if(!f.isVideo){return
}var j=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(h),c=a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(h),d=a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(h).bind("click",function(){if(e.options.clickToPlayPause){if(g.paused){g.play()
}}});
g.addEventListener("play",function(){d.hide();
j.hide();
b.find(".mejs-time-buffering").hide();
c.hide()
},false);
g.addEventListener("playing",function(){d.hide();
j.hide();
b.find(".mejs-time-buffering").hide();
c.hide()
},false);
g.addEventListener("seeking",function(){j.show();
b.find(".mejs-time-buffering").show()
},false);
g.addEventListener("seeked",function(){j.hide();
b.find(".mejs-time-buffering").hide()
},false);
g.addEventListener("pause",function(){if(!mejs.MediaFeatures.isiPhone){d.show()
}},false);
g.addEventListener("waiting",function(){j.show();
b.find(".mejs-time-buffering").show()
},false);
g.addEventListener("loadeddata",function(){j.show();
b.find(".mejs-time-buffering").show();
if(mejs.MediaFeatures.isAndroid){g.canplayTimeout=window.setTimeout(function(){if(document.createEvent){var k=document.createEvent("HTMLEvents");
k.initEvent("canplay",true,true);
return g.dispatchEvent(k)
}},300)
}},false);
g.addEventListener("canplay",function(){j.hide();
b.find(".mejs-time-buffering").hide();
clearTimeout(g.canplayTimeout)
},false);
g.addEventListener("error",function(k){e.handleError(k);
j.hide();
d.hide();
c.show();
c.find(".mejs-overlay-error").html("Error loading this resource")
},false);
g.addEventListener("keydown",function(k){e.onkeydown(f,g,k)
},false)
},buildkeyboard:function(d,b,f,e){var c=this;
c.container.keydown(function(){c.keyboardAction=true
});
c.globalBind("keydown",function(g){d.hasFocus=a(g.target).closest(".mejs-container").length!==0&&a(g.target).closest(".mejs-container").attr("id")===d.$media.closest(".mejs-container").attr("id");
return c.onkeydown(d,e,g)
});
c.globalBind("click",function(g){d.hasFocus=a(g.target).closest(".mejs-container").length!==0
})
},onkeydown:function(h,l,k){if(h.hasFocus&&h.options.enableKeyboard){for(var g=0,b=h.options.keyActions.length;
g<b;
g++){var f=h.options.keyActions[g];
for(var c=0,d=f.keys.length;
c<d;
c++){if(k.keyCode==f.keys[c]){if(typeof(k.preventDefault)=="function"){k.preventDefault()
}f.action(h,l,k.keyCode,k);
return false
}}}}return true
},findTracks:function(){var b=this,c=b.$media.find("track");
b.tracks=[];
c.each(function(e,d){d=a(d);
b.tracks.push({srclang:(d.attr("srclang"))?d.attr("srclang").toLowerCase():"",src:d.attr("src"),kind:d.attr("kind"),label:d.attr("label")||"",entries:[],isLoaded:false})
})
},changeSkin:function(b){this.container[0].className="mejs-container "+b;
this.setPlayerSize(this.width,this.height);
this.setControlsSize()
},play:function(){this.load();
this.media.play()
},pause:function(){try{this.media.pause()
}catch(b){}},load:function(){if(!this.isLoaded){this.media.load()
}this.isLoaded=true
},setMuted:function(b){this.media.setMuted(b)
},setCurrentTime:function(b){this.media.setCurrentTime(b)
},getCurrentTime:function(){return this.media.currentTime
},setVolume:function(b){this.media.setVolume(b)
},getVolume:function(){return this.media.volume
},setSrc:function(b){this.media.setSrc(b)
},remove:function(){var c=this,f,b;
c.container.prev(".mejs-offscreen").remove();
for(f in c.options.features){b=c.options.features[f];
if(c["clean"+b]){try{c["clean"+b](c)
}catch(d){}}}if(!c.isDynamic){c.$media.prop("controls",true);
c.$node.clone().insertBefore(c.container).show();
c.$node.remove()
}else{c.$node.insertBefore(c.container)
}if(c.media.pluginType!=="native"){c.media.remove()
}delete mejs.players[c.id];
if(typeof c.container=="object"){c.container.remove()
}c.globalUnbind();
delete c.node.player
},rebuildtracks:function(){var b=this;
b.findTracks();
b.buildtracks(b,b.controls,b.layers,b.media)
},resetSize:function(){var b=this;
setTimeout(function(){b.setPlayerSize(b.width,b.height);
b.setControlsSize()
},50)
}};
(function(){var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
function b(e,f){var d={d:[],w:[]};
a.each((e||"").split(" "),function(h,g){var j=g+"."+f;
if(j.indexOf(".")===0){d.d.push(j);
d.w.push(j)
}else{d[c.test(g)?"w":"d"].push(j)
}});
d.d=d.d.join(" ");
d.w=d.w.join(" ");
return d
}mejs.MediaElementPlayer.prototype.globalBind=function(e,f,h){var d=this;
var g=d.node?d.node.ownerDocument:document;
e=b(e,d.id);
if(e.d){a(g).bind(e.d,f,h)
}if(e.w){a(window).bind(e.w,f,h)
}};
mejs.MediaElementPlayer.prototype.globalUnbind=function(e,g){var d=this;
var f=d.node?d.node.ownerDocument:document;
e=b(e,d.id);
if(e.d){a(f).unbind(e.d,g)
}if(e.w){a(window).unbind(e.w,g)
}}
})();
if(typeof a!="undefined"){a.fn.mediaelementplayer=function(b){if(b===false){this.each(function(){var c=a(this).data("mediaelementplayer");
if(c){c.remove()
}a(this).removeData("mediaelementplayer")
})
}else{this.each(function(){a(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,b))
})
}return this
};
a(document).ready(function(){a(".mejs-player").mediaelementplayer()
})
}window.MediaElementPlayer=mejs.MediaElementPlayer
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{playText:mejs.i18n.t("Play"),pauseText:mejs.i18n.t("Pause")});
a.extend(MediaElementPlayer.prototype,{buildplaypause:function(g,h,e,c){var j=this,f=j.options,d=a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+j.id+'" title="'+f.playText+'" aria-label="'+f.playText+'"></button></div>').appendTo(h).click(function(l){l.preventDefault();
if(c.paused){c.play()
}else{c.pause()
}return false
}),k=d.find("button");
function b(l){if("play"===l){d.removeClass("mejs-play").addClass("mejs-pause");
k.attr({title:f.pauseText,"aria-label":f.pauseText})
}else{d.removeClass("mejs-pause").addClass("mejs-play");
k.attr({title:f.playText,"aria-label":f.playText})
}}b("pse");
c.addEventListener("play",function(){b("play")
},false);
c.addEventListener("playing",function(){b("play")
},false);
c.addEventListener("pause",function(){b("pse")
},false);
c.addEventListener("paused",function(){b("pse")
},false)
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{stopText:"Stop"});
a.extend(MediaElementPlayer.prototype,{buildstop:function(d,b,f,e){var c=this;
a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+c.id+'" title="'+c.options.stopText+'" aria-label="'+c.options.stopText+'"></button></div>').appendTo(b).click(function(){if(!e.paused){e.pause()
}if(e.currentTime>0){e.setCurrentTime(0);
e.pause();
b.find(".mejs-time-current").width("0px");
b.find(".mejs-time-handle").css("left","0px");
b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0,d.options));
b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0,d.options));
f.find(".mejs-poster").show()
}})
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{progessHelpText:mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")});
a.extend(MediaElementPlayer.prototype,{buildprogress:function(q,m,j,g){a('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(m);
m.find(".mejs-time-buffering").hide();
var l=this,x=m.find(".mejs-time-total"),r=m.find(".mejs-time-loaded"),n=m.find(".mejs-time-current"),v=m.find(".mejs-time-handle"),k=m.find(".mejs-time-float"),p=m.find(".mejs-time-float-current"),o=m.find(".mejs-time-slider"),u=function(B){var C=x.offset(),z=x.width(),y=0,A=0,D=0,t;
if(B.originalEvent&&B.originalEvent.changedTouches){t=B.originalEvent.changedTouches[0].pageX
}else{if(B.changedTouches){t=B.changedTouches[0].pageX
}else{t=B.pageX
}}if(g.duration){if(t<C.left){t=C.left
}else{if(t>z+C.left){t=z+C.left
}}D=t-C.left;
y=(D/z);
A=(y<=0.02)?0:y*g.duration;
if(w&&A!==g.currentTime){g.setCurrentTime(A)
}if(!mejs.MediaFeatures.hasTouch){k.css("left",D);
p.html(mejs.Utility.secondsToTimeCode(A,q.options));
k.show()
}}},w=false,f=false,b=0,e=false,d=q.options.autoRewind;
var c=function(z){var B=g.currentTime,A=mejs.i18n.t("Time Slider"),y=mejs.Utility.secondsToTimeCode(B,q.options),t=g.duration;
o.attr({"aria-label":A,"aria-valuemin":0,"aria-valuemax":t,"aria-valuenow":B,"aria-valuetext":y,role:"slider",tabindex:0})
};
var h=function(){var t=new Date();
if(t-b>=1000){g.play()
}};
o.bind("focus",function(t){q.options.autoRewind=false
});
o.bind("blur",function(t){q.options.autoRewind=d
});
o.bind("keydown",function(B){if((new Date()-b)>=1000){e=g.paused
}var A=B.keyCode,z=g.duration,C=g.currentTime,t=q.options.defaultSeekForwardInterval(z),y=q.options.defaultSeekBackwardInterval(z);
switch(A){case 37:case 40:C-=y;
break;
case 39:case 38:C+=t;
break;
case 36:C=0;
break;
case 35:C=z;
break;
case 32:case 13:g.paused?g.play():g.pause();
return;
default:return
}C=C<0?0:(C>=z?z:Math.floor(C));
b=new Date();
if(!e){g.pause()
}if(C<g.duration&&!e){setTimeout(h,1100)
}g.setCurrentTime(C);
B.preventDefault();
B.stopPropagation();
return false
});
x.bind("mousedown touchstart",function(t){if(t.which===1||t.which===0){w=true;
u(t);
l.globalBind("mousemove.dur touchmove.dur",function(y){u(y)
});
l.globalBind("mouseup.dur touchend.dur",function(y){w=false;
k.hide();
l.globalUnbind(".dur")
})
}}).bind("mouseenter",function(t){f=true;
l.globalBind("mousemove.dur",function(y){u(y)
});
if(!mejs.MediaFeatures.hasTouch){k.show()
}}).bind("mouseleave",function(t){f=false;
if(!w){l.globalUnbind(".dur");
k.hide()
}});
g.addEventListener("progress",function(t){q.setProgressRail(t);
q.setCurrentRail(t)
},false);
g.addEventListener("timeupdate",function(t){q.setProgressRail(t);
q.setCurrentRail(t);
c(t)
},false);
l.container.on("controlsresize",function(){q.setProgressRail();
q.setCurrentRail()
});
l.loaded=r;
l.total=x;
l.current=n;
l.handle=v
},setProgressRail:function(f){var b=this,d=(f!==undefined)?f.target:b.media,c=null;
if(d&&d.buffered&&d.buffered.length>0&&d.buffered.end&&d.duration){c=d.buffered.end(d.buffered.length-1)/d.duration
}else{if(d&&d.bytesTotal!==undefined&&d.bytesTotal>0&&d.bufferedBytes!==undefined){c=d.bufferedBytes/d.bytesTotal
}else{if(f&&f.lengthComputable&&f.total!==0){c=f.loaded/f.total
}}}if(c!==null){c=Math.min(1,Math.max(0,c));
if(b.loaded&&b.total){b.loaded.width(b.total.width()*c)
}}},setCurrentRail:function(){var b=this;
if(b.media.currentTime!==undefined&&b.media.duration){if(b.total&&b.handle){var d=Math.round(b.total.width()*b.media.currentTime/b.media.duration),c=d-Math.round(b.handle.outerWidth(true)/2);
b.current.width(d);
b.handle.css("left",c)
}}}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"});
a.extend(MediaElementPlayer.prototype,{buildcurrent:function(d,b,f,e){var c=this;
a('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">'+mejs.Utility.secondsToTimeCode(0,d.options)+"</span></div>").appendTo(b);
c.currenttime=c.controls.find(".mejs-currenttime");
e.addEventListener("timeupdate",function(){d.updateCurrent()
},false)
},buildduration:function(d,b,f,e){var c=this;
if(b.children().last().find(".mejs-currenttime").length>0){a(c.options.timeAndDurationSeparator+'<span class="mejs-duration">'+mejs.Utility.secondsToTimeCode(c.options.duration,c.options)+"</span>").appendTo(b.find(".mejs-time"))
}else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+mejs.Utility.secondsToTimeCode(c.options.duration,c.options)+"</span></div>").appendTo(b)
}c.durationD=c.controls.find(".mejs-duration");
e.addEventListener("timeupdate",function(){d.updateDuration()
},false)
},updateCurrent:function(){var b=this;
var c=b.media.currentTime;
if(isNaN(c)){c=0
}if(b.currenttime){b.currenttime.html(mejs.Utility.secondsToTimeCode(c,b.options))
}},updateDuration:function(){var b=this;
var c=b.media.duration;
if(b.options.duration>0){c=b.options.duration
}if(isNaN(c)){c=0
}b.container.toggleClass("mejs-long-video",c>3600);
if(b.durationD&&c>0){b.durationD.html(mejs.Utility.secondsToTimeCode(c,b.options))
}}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),allyVolumeControlText:mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});
a.extend(MediaElementPlayer.prototype,{buildvolume:function(o,p,j,d){if((mejs.MediaFeatures.isAndroid||mejs.MediaFeatures.isiOS)&&this.options.hideVolumeOnTouchDevices){return
}var q=this,m=(q.isVideo)?q.options.videoVolume:q.options.audioVolume,f=(m=="horizontal")?a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+q.id+'" title="'+q.options.muteText+'" aria-label="'+q.options.muteText+'"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">'+q.options.allyVolumeControlText+'</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(p):a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+q.id+'" title="'+q.options.muteText+'" aria-label="'+q.options.muteText+'"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">'+q.options.allyVolumeControlText+'</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(p),r=q.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),b=q.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),h=q.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),g=q.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),n=function(y,z){if(!r.is(":visible")&&typeof z=="undefined"){r.show();
n(y,true);
r.hide();
return
}y=Math.max(0,y);
y=Math.min(y,1);
if(y===0){f.removeClass("mejs-mute").addClass("mejs-unmute");
f.children("button").attr("title",mejs.i18n.t("Unmute")).attr("aria-label",mejs.i18n.t("Unmute"))
}else{f.removeClass("mejs-unmute").addClass("mejs-mute");
f.children("button").attr("title",mejs.i18n.t("Mute")).attr("aria-label",mejs.i18n.t("Mute"))
}var v=b.position();
if(m=="vertical"){var w=b.height(),u=w-(w*y);
g.css("top",Math.round(v.top+u-(g.height()/2)));
h.height(w-u);
h.css("top",v.top+u)
}else{var t=b.width(),x=t*y;
g.css("left",Math.round(v.left+x-(g.width()/2)));
h.width(Math.round(x))
}},c=function(x){var v=null,t=b.offset();
if(m==="vertical"){var u=b.height(),w=x.pageY-t.top;
v=(u-w)/u;
if(t.top===0||t.left===0){return
}}else{var z=b.width(),y=x.pageX-t.left;
v=y/z
}v=Math.max(0,v);
v=Math.min(v,1);
n(v);
if(v===0){d.setMuted(true)
}else{d.setMuted(false)
}d.setVolume(v)
},l=false,e=false;
f.hover(function(){r.show();
e=true
},function(){e=false;
if(!l&&m=="vertical"){r.hide()
}});
var k=function(u){var t=Math.floor(d.volume*100);
r.attr({"aria-label":mejs.i18n.t("Volume Slider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t,"aria-valuetext":t+"%",role:"slider",tabindex:0})
};
r.bind("mouseover",function(){e=true
}).bind("mousedown",function(t){c(t);
q.globalBind("mousemove.vol",function(u){c(u)
});
q.globalBind("mouseup.vol",function(){l=false;
q.globalUnbind(".vol");
if(!e&&m=="vertical"){r.hide()
}});
l=true;
return false
}).bind("keydown",function(v){var u=v.keyCode;
var t=d.volume;
switch(u){case 38:t=Math.min(t+0.1,1);
break;
case 40:t=Math.max(0,t-0.1);
break;
default:return true
}l=false;
n(t);
d.setVolume(t);
return false
});
f.find("button").click(function(){d.setMuted(!d.muted)
});
f.find("button").bind("focus",function(){r.show()
});
d.addEventListener("volumechange",function(t){if(!l){if(d.muted){n(0);
f.removeClass("mejs-mute").addClass("mejs-unmute")
}else{n(d.volume);
f.removeClass("mejs-unmute").addClass("mejs-mute")
}}k(t)
},false);
if(o.options.startVolume===0){d.setMuted(true)
}if(d.pluginType==="native"){d.setVolume(o.options.startVolume)
}q.container.on("controlsresize",function(){n(d.volume)
})
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""
},fullscreenText:mejs.i18n.t("Fullscreen")});
a.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,fullscreenMode:"",buildfullscreen:function(f,d,j,h){if(!f.isVideo){return
}f.isInIframe=(window.location!=window.parent.location);
h.addEventListener("play",function(){f.detectFullscreenMode()
});
var e=this,b=null,g=a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+e.id+'" title="'+e.options.fullscreenText+'" aria-label="'+e.options.fullscreenText+'"></button></div>').appendTo(d).on("click",function(){var k=(mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen())||f.isFullScreen;
if(k){f.exitFullScreen()
}else{f.enterFullScreen()
}}).on("mouseover",function(){if(e.fullscreenMode=="plugin-hover"){if(b!==null){clearTimeout(b);
delete b
}var k=g.offset(),l=f.container.offset();
h.positionFullscreenButton(k.left-l.left,k.top-l.top,true)
}}).on("mouseout",function(){if(e.fullscreenMode=="plugin-hover"){if(b!==null){clearTimeout(b);
delete b
}b=setTimeout(function(){h.hideFullscreenButton()
},1500)
}});
f.fullscreenBtn=g;
e.globalBind("keydown",function(k){if(k.keyCode==27&&((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen())||e.isFullScreen)){f.exitFullScreen()
}});
e.normalHeight=0;
e.normalWidth=0;
if(mejs.MediaFeatures.hasTrueNativeFullScreen){var c=function(k){if(f.isFullScreen){if(mejs.MediaFeatures.isFullScreen()){f.isNativeFullScreen=true;
f.setControlsSize()
}else{f.isNativeFullScreen=false;
f.exitFullScreen()
}}};
f.globalBind(mejs.MediaFeatures.fullScreenEventName,c)
}},detectFullscreenMode:function(){var b=this,d="",c=mejs.MediaFeatures;
if(c.hasTrueNativeFullScreen&&b.media.pluginType==="native"){d="native-native"
}else{if(c.hasTrueNativeFullScreen&&b.media.pluginType!=="native"&&!c.hasFirefoxPluginMovingProblem){d="plugin-native"
}else{if(b.usePluginFullScreen){if(mejs.MediaFeatures.supportsPointerEvents){d="plugin-click";
b.createPluginClickThrough()
}else{d="plugin-hover"
}}else{d="fullwindow"
}}}b.fullscreenMode=d;
return d
},isPluginClickThroughCreated:false,createPluginClickThrough:function(){var g=this;
if(g.isPluginClickThroughCreated){return
}var c=false,d=function(){if(c){for(var k in f){f[k].hide()
}g.fullscreenBtn.css("pointer-events","");
g.controls.css("pointer-events","");
g.media.removeEventListener("click",g.clickToPlayPauseCallback);
c=false
}},f={},h=["top","left","right","bottom"],e,b,j=function(){var l=fullscreenBtn.offset().left-g.container.offset().left,p=fullscreenBtn.offset().top-g.container.offset().top,k=fullscreenBtn.outerWidth(true),o=fullscreenBtn.outerHeight(true),n=g.container.width(),m=g.container.height();
for(e in f){f[e].css({position:"absolute",top:0,left:0})
}f.top.width(n).height(p);
f.left.width(l).height(o).css({top:p});
f.right.width(n-l-k).height(o).css({top:p,left:l+k});
f.bottom.width(n).height(m-o-p).css({top:p+o})
};
g.globalBind("resize",function(){j()
});
for(e=0,b=h.length;
e<b;
e++){f[h[e]]=a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(d).hide()
}fullscreenBtn.on("mouseover",function(){if(!g.isFullScreen){var k=fullscreenBtn.offset(),l=player.container.offset();
media.positionFullscreenButton(k.left-l.left,k.top-l.top,false);
g.fullscreenBtn.css("pointer-events","none");
g.controls.css("pointer-events","none");
g.media.addEventListener("click",g.clickToPlayPauseCallback);
for(e in f){f[e].show()
}j();
c=true
}});
media.addEventListener("fullscreenchange",function(k){g.isFullScreen=!g.isFullScreen;
if(g.isFullScreen){g.media.removeEventListener("click",g.clickToPlayPauseCallback)
}else{g.media.addEventListener("click",g.clickToPlayPauseCallback)
}d()
});
g.globalBind("mousemove",function(l){if(c){var k=fullscreenBtn.offset();
if(l.pageY<k.top||l.pageY>k.top+fullscreenBtn.outerHeight(true)||l.pageX<k.left||l.pageX>k.left+fullscreenBtn.outerWidth(true)){fullscreenBtn.css("pointer-events","");
g.controls.css("pointer-events","");
c=false
}}});
g.isPluginClickThroughCreated=true
},cleanfullscreen:function(b){b.exitFullScreen()
},containerSizeTimeout:null,enterFullScreen:function(){var b=this;
if(mejs.MediaFeatures.hasiOSFullScreen){b.media.webkitEnterFullscreen();
return
}a(document.documentElement).addClass("mejs-fullscreen");
b.normalHeight=b.container.height();
b.normalWidth=b.container.width();
if(b.fullscreenMode==="native-native"||b.fullscreenMode==="plugin-native"){mejs.MediaFeatures.requestFullScreen(b.container[0]);
if(b.isInIframe){setTimeout(function c(){if(b.isNativeFullScreen){var h=0.002,e=a(window).width(),g=screen.width,d=Math.abs(g-e),f=g*h;
if(d>f){b.exitFullScreen()
}else{setTimeout(c,500)
}}},1000)
}}else{if(b.fullscreeMode=="fullwindow"){}}b.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
b.containerSizeTimeout=setTimeout(function(){b.container.css({width:"100%",height:"100%"});
b.setControlsSize()
},500);
if(b.media.pluginType==="native"){b.$media.width("100%").height("100%")
}else{b.container.find(".mejs-shim").width("100%").height("100%");
setTimeout(function(){var f=a(window),d=f.width(),e=f.height();
b.media.setVideoSize(d,e)
},500)
}b.layers.children("div").width("100%").height("100%");
if(b.fullscreenBtn){b.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen")
}b.setControlsSize();
b.isFullScreen=true;
b.container.find(".mejs-captions-text").css("font-size",screen.width/b.width*1*100+"%");
b.container.find(".mejs-captions-position").css("bottom","45px");
b.container.trigger("enteredfullscreen")
},exitFullScreen:function(){var b=this;
clearTimeout(b.containerSizeTimeout);
if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||b.isFullScreen)){mejs.MediaFeatures.cancelFullScreen()
}a(document.documentElement).removeClass("mejs-fullscreen");
b.container.removeClass("mejs-container-fullscreen").width(b.normalWidth).height(b.normalHeight);
if(b.media.pluginType==="native"){b.$media.width(b.normalWidth).height(b.normalHeight)
}else{b.container.find(".mejs-shim").width(b.normalWidth).height(b.normalHeight);
b.media.setVideoSize(b.normalWidth,b.normalHeight)
}b.layers.children("div").width(b.normalWidth).height(b.normalHeight);
b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
b.setControlsSize();
b.isFullScreen=false;
b.container.find(".mejs-captions-text").css("font-size","");
b.container.find(".mejs-captions-position").css("bottom","");
b.container.trigger("exitedfullscreen")
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x"});
a.extend(MediaElementPlayer.prototype,{buildspeed:function(o,p,j,c){var q=this;
if(q.media.pluginType=="native"){var d=null,g=null,b=null,n=null;
var f=[];
var e=false;
for(var h=0,m=q.options.speeds.length;
h<m;
h++){var r=q.options.speeds[h];
if(typeof(r)==="string"){f.push({name:r+q.options.speedChar,value:r});
if(r===q.options.defaultSpeed){e=true
}}else{f.push(r);
if(r.value===q.options.defaultSpeed){e=true
}}}if(!e){f.push({name:q.options.defaultSpeed+q.options.speedChar,value:q.options.defaultSpeed})
}f.sort(function(u,t){return parseFloat(t.value)-parseFloat(u.value)
});
var l=function(t){for(h=0,m=f.length;
h<m;
h++){if(f[h].value===t){return f[h].name
}}};
var k='<div class="mejs-button mejs-speed-button"><button type="button">'+l(q.options.defaultSpeed)+'</button><div class="mejs-speed-selector"><ul>';
for(h=0,il=f.length;
h<il;
h++){n=q.id+"-speed-"+f[h].value;
k+='<li><input type="radio" name="speed" value="'+f[h].value+'" id="'+n+'" '+(f[h].value===q.options.defaultSpeed?" checked":"")+' /><label for="'+n+'" '+(f[h].value===q.options.defaultSpeed?' class="mejs-speed-selected"':"")+">"+f[h].name+"</label></li>"
}k+="</ul></div></div>";
d=a(k).appendTo(p);
g=d.find(".mejs-speed-selector");
b=q.options.defaultSpeed;
c.addEventListener("loadedmetadata",function(t){if(b){c.playbackRate=parseFloat(b)
}},true);
g.on("click",'input[type="radio"]',function(){var t=a(this).attr("value");
b=t;
c.playbackRate=parseFloat(t);
d.find("button").html(l(t));
d.find(".mejs-speed-selected").removeClass("mejs-speed-selected");
d.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
});
d.one("mouseenter focusin",function(){g.height(d.find(".mejs-speed-selector ul").outerHeight(true)+d.find(".mejs-speed-translations").outerHeight(true)).css("top",(-1*g.height())+"px")
})
}}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),tracksAriaLive:false,hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});
a.extend(MediaElementPlayer.prototype,{hasChapters:false,cleartracks:function(c,b,e,d){if(c){if(c.captions){c.captions.remove()
}if(c.chapters){c.chapters.remove()
}if(c.captionsText){c.captionsText.remove()
}if(c.captionsButton){c.captionsButton.remove()
}}},buildtracks:function(f,c,j,h){if(f.tracks.length===0){return
}var e=this,b=e.options.tracksAriaLive?'role="log" aria-live="assertive" aria-atomic="false"':"",d;
if(e.domNode.textTracks){for(d=e.domNode.textTracks.length-1;
d>=0;
d--){e.domNode.textTracks[d].mode="hidden"
}}e.cleartracks(f,c,j,h);
f.chapters=a('<div class="mejs-chapters mejs-layer"></div>').prependTo(j).hide();
f.captions=a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" '+b+'><span class="mejs-captions-text"></span></div></div>').prependTo(j).hide();
f.captionsText=f.captions.find(".mejs-captions-text");
f.captionsButton=a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+e.id+'" title="'+e.options.tracksText+'" aria-label="'+e.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+f.id+'_captions" id="'+f.id+'_captions_none" value="none" checked="checked" /><label for="'+f.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(c);
var g=0;
for(d=0;
d<f.tracks.length;
d++){if(f.tracks[d].kind=="subtitles"){g++
}}if(e.options.toggleCaptionsButtonWhenOnlyOne&&g==1){f.captionsButton.on("click",function(){if(f.selectedTrack===null){lang=f.tracks[0].srclang
}else{lang="none"
}f.setTrack(lang)
})
}else{f.captionsButton.on("mouseenter focusin",function(){a(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")
}).on("click","input[type=radio]",function(){lang=this.value;
f.setTrack(lang)
});
f.captionsButton.on("mouseleave focusout",function(){a(this).find(".mejs-captions-selector").addClass("mejs-offscreen")
})
}if(!f.options.alwaysShowControls){f.container.bind("controlsshown",function(){f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
}).bind("controlshidden",function(){if(!h.paused){f.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
}})
}else{f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
}f.trackToLoad=-1;
f.selectedTrack=null;
f.isLoadingTrack=false;
for(d=0;
d<f.tracks.length;
d++){if(f.tracks[d].kind=="subtitles"){f.addTrackButton(f.tracks[d].srclang,f.tracks[d].label)
}}f.loadNextTrack();
h.addEventListener("timeupdate",function(k){f.displayCaptions()
},false);
if(f.options.slidesSelector!==""){f.slidesContainer=a(f.options.slidesSelector);
h.addEventListener("timeupdate",function(k){f.displaySlides()
},false)
}h.addEventListener("loadedmetadata",function(k){f.displayChapters()
},false);
f.container.hover(function(){if(f.hasChapters){f.chapters.removeClass("mejs-offscreen");
f.chapters.fadeIn(200).height(f.chapters.find(".mejs-chapter").outerHeight())
}},function(){if(f.hasChapters&&!h.paused){f.chapters.fadeOut(200,function(){a(this).addClass("mejs-offscreen");
a(this).css("display","block")
})
}});
e.container.on("controlsresize",function(){e.adjustLanguageBox()
});
if(f.node.getAttribute("autoplay")!==null){f.chapters.addClass("mejs-offscreen")
}},setTrack:function(d){var c=this,b;
if(d=="none"){c.selectedTrack=null;
c.captionsButton.removeClass("mejs-captions-enabled")
}else{for(b=0;
b<c.tracks.length;
b++){if(c.tracks[b].srclang==d){if(c.selectedTrack===null){c.captionsButton.addClass("mejs-captions-enabled")
}c.selectedTrack=c.tracks[b];
c.captions.attr("lang",c.selectedTrack.srclang);
c.displayCaptions();
break
}}}},loadNextTrack:function(){var b=this;
b.trackToLoad++;
if(b.trackToLoad<b.tracks.length){b.isLoadingTrack=true;
b.loadTrack(b.trackToLoad)
}else{b.isLoadingTrack=false;
b.checkForTracks()
}},loadTrack:function(c){var d=this,b=d.tracks[c],e=function(){b.isLoaded=true;
d.enableTrackButton(b.srclang,b.label);
d.loadNextTrack()
};
a.ajax({url:b.src,dataType:"text",success:function(f){if(typeof f=="string"&&(/<tt\s+xml/ig).exec(f)){b.entries=mejs.TrackFormatParser.dfxp.parse(f)
}else{b.entries=mejs.TrackFormatParser.webvtt.parse(f)
}e();
if(b.kind=="chapters"){d.media.addEventListener("play",function(g){if(d.media.duration>0){d.displayChapters(b)
}},false)
}if(b.kind=="slides"){d.setupSlides(b)
}},error:function(){d.removeTrackButton(b.srclang);
d.loadNextTrack()
}})
},enableTrackButton:function(d,b){var c=this;
if(b===""){b=mejs.language.codes[d]||d
}c.captionsButton.find("input[value="+d+"]").prop("disabled",false).siblings("label").html(b);
if(c.options.startLanguage==d){a("#"+c.id+"_captions_"+d).prop("checked",true).trigger("click")
}c.adjustLanguageBox()
},removeTrackButton:function(c){var b=this;
b.captionsButton.find("input[value="+c+"]").closest("li").remove();
b.adjustLanguageBox()
},addTrackButton:function(d,b){var c=this;
if(b===""){b=mejs.language.codes[d]||d
}c.captionsButton.find("ul").append(a('<li><input type="radio" name="'+c.id+'_captions" id="'+c.id+"_captions_"+d+'" value="'+d+'" disabled="disabled" /><label for="'+c.id+"_captions_"+d+'">'+b+" (loading)</label></li>"));
c.adjustLanguageBox();
c.container.find(".mejs-captions-translations option[value="+d+"]").remove()
},adjustLanguageBox:function(){var b=this;
b.captionsButton.find(".mejs-captions-selector").height(b.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+b.captionsButton.find(".mejs-captions-translations").outerHeight(true))
},checkForTracks:function(){var b=this,c=false;
if(b.options.hideCaptionsButtonWhenEmpty){for(i=0;
i<b.tracks.length;
i++){if(b.tracks[i].kind=="subtitles"&&b.tracks[i].isLoaded){c=true;
break
}}if(!c){b.captionsButton.hide();
b.setControlsSize()
}}},displayCaptions:function(){if(typeof this.tracks=="undefined"){return
}var d=this,c,b=d.selectedTrack;
if(b!==null&&b.isLoaded){for(c=0;
c<b.entries.times.length;
c++){if(d.media.currentTime>=b.entries.times[c].start&&d.media.currentTime<=b.entries.times[c].stop){d.captionsText.html(b.entries.text[c]).attr("class","mejs-captions-text "+(b.entries.times[c].identifier||""));
d.captions.show().height(0);
return
}}d.captions.hide()
}else{d.captions.hide()
}},setupSlides:function(b){var c=this;
c.slides=b;
c.slides.entries.imgs=[c.slides.entries.text.length];
c.showSlide(0)
},showSlide:function(d){if(typeof this.tracks=="undefined"||typeof this.slidesContainer=="undefined"){return
}var e=this,c=e.slides.entries.text[d],b=e.slides.entries.imgs[d];
if(typeof b=="undefined"||typeof b.fadeIn=="undefined"){e.slides.entries.imgs[d]=b=a('<img src="'+c+'">').on("load",function(){b.appendTo(e.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
})
}else{if(!b.is(":visible")&&!b.is(":animated")){b.fadeIn().siblings(":visible").fadeOut()
}}},displaySlides:function(){if(typeof this.slides=="undefined"){return
}var c=this,d=c.slides,b;
for(b=0;
b<d.entries.times.length;
b++){if(c.media.currentTime>=d.entries.times[b].start&&c.media.currentTime<=d.entries.times[b].stop){c.showSlide(b);
return
}}},displayChapters:function(){var c=this,b;
for(b=0;
b<c.tracks.length;
b++){if(c.tracks[b].kind=="chapters"&&c.tracks[b].isLoaded){c.drawChapters(c.tracks[b]);
c.hasChapters=true;
break
}}},drawChapters:function(f){var c=this,b,d,e=0,g=0;
c.chapters.empty();
for(b=0;
b<f.entries.times.length;
b++){d=f.entries.times[b].stop-f.entries.times[b].start;
e=Math.floor(d/c.media.duration*100);
if(e+g>100||b==f.entries.times.length-1&&e+g<100){e=100-g
}c.chapters.append(a('<div class="mejs-chapter" rel="'+f.entries.times[b].start+'" style="left: '+g.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+((b==f.entries.times.length-1)?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+f.entries.text[b]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(f.entries.times[b].start,c.options)+"&ndash;"+mejs.Utility.secondsToTimeCode(f.entries.times[b].stop,c.options)+"</span></div></div>"));
g+=e
}c.chapters.find("div.mejs-chapter").click(function(){c.media.setCurrentTime(parseFloat(a(this).attr("rel")));
if(c.media.paused){c.media.play()
}});
c.chapters.show()
}});
mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};
mejs.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(h){var f=0,d=mejs.TrackFormatParser.split2(h,/\r?\n/),c={text:[],times:[]},b,g,e;
for(;
f<d.length;
f++){b=this.pattern_timecode.exec(d[f]);
if(b&&f<d.length){if((f-1)>=0&&d[f-1]!==""){e=d[f-1]
}f++;
g=d[f];
f++;
while(d[f]!==""&&f<d.length){g=g+"\n"+d[f];
f++
}g=a.trim(g).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");
c.text.push(g);
c.times.push({identifier:e,start:(mejs.Utility.convertSMPTEtoSeconds(b[1])===0)?0.2:mejs.Utility.convertSMPTEtoSeconds(b[1]),stop:mejs.Utility.convertSMPTEtoSeconds(b[3]),settings:b[5]})
}e=""
}return c
}},dfxp:{parse:function(j){j=a(j).filter("tt");
var g=0,c=j.children("div").eq(0),n=c.find("p"),f=j.find("#"+c.attr("style")),m,l,h={text:[],times:[]};
if(f.length){var e=f.removeAttr("id").get(0).attributes;
if(e.length){m={};
for(g=0;
g<e.length;
g++){m[e[g].name.split(":")[1]]=e[g].value
}}}for(g=0;
g<n.length;
g++){var b;
var k={start:null,stop:null,style:null};
if(n.eq(g).attr("begin")){k.start=mejs.Utility.convertSMPTEtoSeconds(n.eq(g).attr("begin"))
}if(!k.start&&n.eq(g-1).attr("end")){k.start=mejs.Utility.convertSMPTEtoSeconds(n.eq(g-1).attr("end"))
}if(n.eq(g).attr("end")){k.stop=mejs.Utility.convertSMPTEtoSeconds(n.eq(g).attr("end"))
}if(!k.stop&&n.eq(g+1).attr("begin")){k.stop=mejs.Utility.convertSMPTEtoSeconds(n.eq(g+1).attr("begin"))
}if(m){b="";
for(var d in m){b+=d+":"+m[d]+";"
}}if(b){k.style=b
}if(k.start===0){k.start=0.2
}h.times.push(k);
l=a.trim(n.eq(g).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");
h.text.push(l);
if(h.times.start===0){h.times.start=2
}}return h
}},split2:function(c,b){return c.split(b)
}};
if("x\n\ny".split(/\n/gi).length!=3){mejs.TrackFormatParser.split2=function(f,d){var e=[],b="",c;
for(c=0;
c<f.length;
c++){b+=f.substring(c,c+1);
if(d.test(b)){e.push(b.replace(d,""));
b=""
}}e.push(b);
return e
}
}})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(b){if(typeof b.enterFullScreen=="undefined"){return null
}if(b.isFullScreen){return mejs.i18n.t("Turn off Fullscreen")
}else{return mejs.i18n.t("Go Fullscreen")
}},click:function(b){if(b.isFullScreen){b.exitFullScreen()
}else{b.enterFullScreen()
}}},{render:function(b){if(b.media.muted){return mejs.i18n.t("Unmute")
}else{return mejs.i18n.t("Mute")
}},click:function(b){if(b.media.muted){b.setMuted(false)
}else{b.setMuted(true)
}}},{isSeparator:true},{render:function(b){return mejs.i18n.t("Download Video")
},click:function(b){window.location.href=b.media.currentSrc
}}]});
a.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(c,b,e,d){c.contextMenu=a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
c.container.bind("contextmenu",function(f){if(c.isContextMenuEnabled){f.preventDefault();
c.renderContextMenu(f.clientX-1,f.clientY-1);
return false
}});
c.container.bind("click",function(){c.contextMenu.hide()
});
c.contextMenu.bind("mouseleave",function(){c.startContextMenuTimer()
})
},cleancontextmenu:function(b){b.contextMenu.remove()
},isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true
},disableContextMenu:function(){this.isContextMenuEnabled=false
},contextMenuTimeout:null,startContextMenuTimer:function(){var b=this;
b.killContextMenuTimer();
b.contextMenuTimer=setTimeout(function(){b.hideContextMenu();
b.killContextMenuTimer()
},750)
},killContextMenuTimer:function(){var b=this.contextMenuTimer;
if(b!=null){clearTimeout(b);
delete b;
b=null
}},hideContextMenu:function(){this.contextMenu.hide()
},renderContextMenu:function(b,j){var g=this,f="",d=g.options.contextMenuItems;
for(var e=0,c=d.length;
e<c;
e++){if(d[e].isSeparator){f+='<div class="mejs-contextmenu-separator"></div>'
}else{var h=d[e].render(g);
if(h!=null){f+='<div class="mejs-contextmenu-item" data-itemindex="'+e+'" id="element-'+(Math.random()*1000000)+'">'+h+"</div>"
}}}g.contextMenu.empty().append(a(f)).css({top:j,left:b}).show();
g.contextMenu.find(".mejs-contextmenu-item").each(function(){var k=a(this),l=parseInt(k.data("itemindex"),10),m=g.options.contextMenuItems[l];
if(typeof m.show!="undefined"){m.show(k,g)
}k.click(function(){if(typeof m.click!="undefined"){m.click(g)
}g.contextMenu.hide()
})
});
setTimeout(function(){g.killControlsTimer("rev3")
},100)
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{skipBackInterval:30,skipBackText:mejs.i18n.t("Skip back %1 seconds")});
a.extend(MediaElementPlayer.prototype,{buildskipback:function(e,c,h,g){var d=this,f=d.options.skipBackText.replace("%1",d.options.skipBackInterval),b=a('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="'+d.id+'" title="'+f+'" aria-label="'+f+'">'+d.options.skipBackInterval+"</button></div>").appendTo(c).click(function(){g.setCurrentTime(Math.max(g.currentTime-d.options.skipBackInterval,0));
a(this).find("button").blur()
})
}})
})(mejs.$);
(function(a){a.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});
a.extend(MediaElementPlayer.prototype,{buildpostroll:function(e,c,g,f){var d=this,b=d.container.find('link[rel="postroll"]').attr("href");
if(typeof b!=="undefined"){e.postroll=a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+d.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(g).hide();
d.media.addEventListener("ended",function(h){a.ajax({dataType:"html",url:b,success:function(j,k){g.find(".mejs-postroll-layer-content").html(j)
}});
e.postroll.show()
},false)
}}})
})(mejs.$);
(function(){var d="data-eaem-nested";
var a=".coral-Form-fieldwrapper";
function b(){function f(h){var j={},g;
h.each(function(l,k){g=$(k).children("[name$='@Delete']").attr("name");
g=g.substring(0,g.indexOf("@"));
g=g.substring(2);
j[g]=$(k)
});
return j
}function e(j,g,h){if(_.isEmpty(h)||_.isEmpty(j)){return
}_.each(j,function(l,k){if(k=="jcr:primaryType"){return
}g.find(".js-coral-Multifield-add").click();
_.each(l,function(m,n){if(n=="jcr:primaryType"){return
}var o=g.find("[name='./"+n+"']").last();
if(_.isEmpty(o)){return
}o.val(m)
})
})
}if(location.href.match("/mnt/overlay/")){$(window).on("load",function(){var h=$("["+d+"]");
if(_.isEmpty(h)){return
}var k=f(h),g=$(".cq-siteadmin-admin-properties"),j=g.attr("action")+".infinity.json";
$.ajax(j).done(l);
function l(m){_.each(k,function(n,o){e(m[o],n,o)
})
}})
}else{$(document).on("dialog-ready",function(){var h=$("["+d+"]");
if(_.isEmpty(h)){return
}var k=f(h),g=$(".cq-dialog"),j=g.attr("action")+".infinity.json";
$.ajax(j).done(l);
function l(m){_.each(k,function(n,o){e(m[o],n,o)
})
}})
}}function c(){function e(g,k,j,f){var h=j.attr("name");
if(!h){return
}if(h.indexOf("./")==0){h=h.substring(2)
}j.remove();
$("<input />").attr("type","hidden").attr("name",k+"/"+f+"/"+h).attr("value",j.val()).appendTo(g)
}$(document).on("click",".cq-dialog-submit",function(){var h=$("["+d+"]");
if(_.isEmpty(h)){return
}var f=$(this).closest("form.foundation-form"),j,g;
h.each(function(l,k){j=$(k).find("[class='coral-Form-fieldset']");
j.each(function(m,n){g=$(n).children().children(a);
g.each(function(o,p){e(f,$(n).data("name"),$(p).find("[name]"),(m+1))
})
})
})
});
$(document).on("click",".foundation-layout-inline2-item",function(){var h=$("["+d+"]");
if(_.isEmpty(h)){return
}var f=$("#cq-sites-properties-form"),j,g;
h.each(function(l,k){j=$(k).find("[class='coral-Form-fieldset']");
j.each(function(m,n){g=$(n).children().children(a);
g.each(function(o,p){e(f,$(n).data("name"),$(p).find("[name]"),(m+1))
})
})
})
})
}$(document).ready(function(){b();
c()
})
})();
window.Modernizr=function(at,ae,aj){function ag(a){aw.cssText=a
}function ai(b,a){return ag(B.join(b+";")+(a||""))
}function ax(b,a){return typeof b===a
}function ao(b,a){return !!~(""+b).indexOf(a)
}function av(c,a){for(var b in c){var d=c[b];
if(!ao(d,"-")&&aw[d]!==aj){return"pfx"==a?d:!0
}}return !1
}function af(d,b,c){for(var f in d){var a=b[d[f]];
if(a!==aj){return c===!1?d[f]:ax(a,"function")?a.bind(c||b):a
}}return !1
}function ad(c,a,f){var b=c.charAt(0).toUpperCase()+c.slice(1),d=(c+" "+am.join(b+" ")+b).split(" ");
return ax(a,"string")||ax(a,"undefined")?av(d,a):(d=(c+" "+q.join(b+" ")+b).split(" "),af(d,a,f))
}function al(){ah.input=function(c){for(var a=0,b=c.length;
b>a;
a++){an[c[a]]=!!(c[a] in R)
}return an.list&&(an.list=!(!ae.createElement("datalist")||!at.HTMLDataListElement)),an
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ah.inputtypes=function(g){for(var f,h,b,d=0,j=g.length;
j>d;
d++){R.setAttribute("type",h=g[d]),f="text"!==R.type,f&&(R.value=aa,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(h)&&R.style.WebkitAppearance!==aj?(aq.appendChild(R),b=ae.defaultView,f=b.getComputedStyle&&"textfield"!==b.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,aq.removeChild(R)):/^(search|tel)$/.test(h)||(f=/^(url|email)$/.test(h)?R.checkValidity&&R.checkValidity()===!1:R.value!=aa)),G[g[d]]=!!f
}return G
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var au,ar,ak="2.8.3",ah={},ap=!0,aq=ae.documentElement,ac="modernizr",Z=ae.createElement(ac),aw=Z.style,R=ae.createElement("input"),aa=":)",ab={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),V="Webkit Moz O ms",am=V.split(" "),q=V.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},J={},G={},an={},X=[],U=X.slice,Q=function(k,g,b,f){var t,j,p,w,v=ae.createElement("div"),h=ae.body,m=h||ae.createElement("body");
if(parseInt(b,10)){for(;
b--;
){p=ae.createElement("div"),p.id=f?f[b]:ac+(b+1),v.appendChild(p)
}}return t=["&#173;",'<style id="s',ac,'">',k,"</style>"].join(""),v.id=ac,(h?v:m).innerHTML+=t,m.appendChild(v),h||(m.style.background="",m.style.overflow="hidden",w=aq.style.overflow,aq.style.overflow="hidden",aq.appendChild(m)),j=g(v,k),h?v.parentNode.removeChild(v):(m.parentNode.removeChild(m),aq.style.overflow=w),!!j
},Y=function(a){var c=at.matchMedia||at.msMatchMedia;
if(c){return c(a)&&c(a).matches||!1
}var b;
return Q("@media "+a+" { #"+ac+" { position: absolute; } }",function(d){b="absolute"==(at.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position
}),b
},W=function(){function b(d,f){f=f||ae.createElement(a[d]||"div"),d="on"+d;
var c=d in f;
return c||(f.setAttribute||(f=ae.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(d,""),c=ax(f[d],"function"),ax(f[d],"undefined")||(f[d]=aj),f.removeAttribute(d))),f=null,c
}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return b
}(),K={}.hasOwnProperty;
ar=ax(K,"undefined")||ax(K.call,"undefined")?function(b,a){return a in b&&ax(b.constructor.prototype[a],"undefined")
}:function(b,a){return K.call(b,a)
},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;
if("function"!=typeof a){throw new TypeError
}var d=U.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};
g.prototype=a.prototype;
var e=new g,f=a.apply(e,d.concat(U.call(arguments)));
return Object(f)===f?f:e
}return a.apply(c,d.concat(U.call(arguments)))
};
return b
}),J.flexbox=function(){return ad("flexWrap")
},J.flexboxlegacy=function(){return ad("boxDirection")
},J.canvas=function(){var a=ae.createElement("canvas");
return !(!a.getContext||!a.getContext("2d"))
},J.canvastext=function(){return !(!ah.canvas||!ax(ae.createElement("canvas").getContext("2d").fillText,"function"))
},J.webgl=function(){return !!at.WebGLRenderingContext
},J.touch=function(){var a;
return"ontouchstart" in at||at.DocumentTouch&&ae instanceof DocumentTouch?a=!0:Q(["@media (",B.join("touch-enabled),("),ac,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop
}),a
},J.geolocation=function(){return"geolocation" in navigator
},J.postmessage=function(){return !!at.postMessage
},J.websqldatabase=function(){return !!at.openDatabase
},J.indexedDB=function(){return !!ad("indexedDB",at)
},J.hashchange=function(){return W("hashchange",at)&&(ae.documentMode===aj||ae.documentMode>7)
},J.history=function(){return !(!at.history||!history.pushState)
},J.draganddrop=function(){var a=ae.createElement("div");
return"draggable" in a||"ondragstart" in a&&"ondrop" in a
},J.websockets=function(){return"WebSocket" in at||"MozWebSocket" in at
},J.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),ao(aw.backgroundColor,"rgba")
},J.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),ao(aw.backgroundColor,"rgba")||ao(aw.backgroundColor,"hsla")
},J.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(aw.background)
},J.backgroundsize=function(){return ad("backgroundSize")
},J.borderimage=function(){return ad("borderImage")
},J.borderradius=function(){return ad("borderRadius")
},J.boxshadow=function(){return ad("boxShadow")
},J.textshadow=function(){return""===ae.createElement("div").style.textShadow
},J.opacity=function(){return ai("opacity:.55"),/^0.55$/.test(aw.opacity)
},J.cssanimations=function(){return ad("animationName")
},J.csscolumns=function(){return ad("columnCount")
},J.cssgradients=function(){var b="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";
return ag((b+"-webkit- ".split(" ").join(a+b)+B.join(c+b)).slice(0,-b.length)),ao(aw.backgroundImage,"gradient")
},J.cssreflections=function(){return ad("boxReflect")
},J.csstransforms=function(){return !!ad("transform")
},J.csstransforms3d=function(){var a=!!ad("perspective");
return a&&"webkitPerspective" in aq.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight
}),a
},J.csstransitions=function(){return ad("transition")
},J.fontface=function(){var a;
return Q('@font-face {font-family:"font";src:url("https://")}',function(f,d){var e=ae.getElementById("smodernizr"),b=e.sheet||e.styleSheet,c=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])
}),a
},J.generatedcontent=function(){var a;
return Q(["#",ac,"{font:0/0 a}#",ac,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3
}),a
},J.video=function(){var b=ae.createElement("video"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(a){}return c
},J.audio=function(){var b=ae.createElement("audio"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(a){}return c
},J.localstorage=function(){try{return localStorage.setItem(ac,ac),localStorage.removeItem(ac),!0
}catch(a){return !1
}},J.sessionstorage=function(){try{return sessionStorage.setItem(ac,ac),sessionStorage.removeItem(ac),!0
}catch(a){return !1
}},J.webworkers=function(){return !!at.Worker
},J.applicationcache=function(){return !!at.applicationCache
},J.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(I.svg,"svg").createSVGRect
},J.inlinesvg=function(){var a=ae.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==I.svg
},J.smil=function(){return !!ae.createElementNS&&/SVGAnimate/.test(ab.call(ae.createElementNS(I.svg,"animate")))
},J.svgclippaths=function(){return !!ae.createElementNS&&/SVGClipPath/.test(ab.call(ae.createElementNS(I.svg,"clipPath")))
};
for(var O in J){ar(J,O)&&(au=O.toLowerCase(),ah[au]=J[O](),X.push((ah[au]?"":"no-")+au))
}return ah.input||al(),ah.addTest=function(c,a){if("object"==typeof c){for(var b in c){ar(c,b)&&ah.addTest(b,c[b])
}}else{if(c=c.toLowerCase(),ah[c]!==aj){return ah
}a="function"==typeof a?a():a,"undefined"!=typeof ap&&ap&&(aq.className+=" "+(a?"":"no-")+c),ah[c]=a
}return ah
},ag(""),Z=R=null,function(P,w){function D(d,a){var f=d.createElement("p"),c=d.getElementsByTagName("head")[0]||d.documentElement;
return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)
}function z(){var a=b.elements;
return"string"==typeof a?a.split(" "):a
}function C(c){var a=j[c[L]];
return a||(a={},M++,c[L]=M,j[M]=a),a
}function ay(f,g,d){if(g||(g=w),F){return g.createElement(f)
}d||(d=C(g));
var c;
return c=d.cache[f]?d.cache[f].cloneNode():A.test(f)?(d.cache[f]=d.createElem(f)).cloneNode():d.createElem(f),!c.canHaveChildren||E.test(f)||c.tagUrn?c:d.frag.appendChild(c)
}function H(h,m){if(h||(h=w),F){return h.createDocumentFragment()
}m=m||C(h);
for(var d=m.frag.cloneNode(),f=0,l=z(),g=l.length;
g>f;
f++){d.createElement(l[f])
}return d
}function T(c,a){a.cache||(a.cache={},a.createElem=c.createElement,a.createFrag=c.createDocumentFragment,a.frag=a.createFrag()),c.createElement=function(d){return b.shivMethods?ay(d,c,a):a.createElem(d)
},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'
})+");return n}")(b,a.frag)
}function x(c){c||(c=w);
var a=C(c);
return !b.shivCSS||k||a.hasCSS||(a.hasCSS=!!D(c,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||T(c,a),c
}var k,F,S="3.7.0",N=P.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,A=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,L="_html5shiv",M=0,j={};
!function(){try{var a=w.createElement("a");
a.innerHTML="<xyz></xyz>",k="hidden" in a,F=1==a.childNodes.length||function(){w.createElement("a");
var d=w.createDocumentFragment();
return"undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement
}()
}catch(c){k=!0,F=!0
}}();
var b={elements:N.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:S,shivCSS:N.shivCSS!==!1,supportsUnknownElements:F,shivMethods:N.shivMethods!==!1,type:"default",shivDocument:x,createElement:ay,createDocumentFragment:H};
P.html5=b,x(w)
}(this,ae),ah._version=ak,ah._prefixes=B,ah._domPrefixes=q,ah._cssomPrefixes=am,ah.mq=Y,ah.hasEvent=W,ah.testProp=function(a){return av([a])
},ah.testAllProps=ad,ah.testStyles=Q,ah.prefixed=function(b,a,c){return a?ad(b,a,c):ad(b,"pfx")
},aq.className=aq.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ap?" js "+X.join(" "):""),ah
}(this,this.document);
(function(b){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{var a;
if(typeof window!=="undefined"){a=window
}else{if(typeof global!=="undefined"){a=global
}else{if(typeof self!=="undefined"){a=self
}else{a=this
}}}a.oauthioWeb=b()
}}})(function(){var define,module,exports;
return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;
if(!u&&a){return a(o,!0)
}if(i){return i(o,!0)
}var f=new Error("Cannot find module '"+o+"'");
throw f.code="MODULE_NOT_FOUND",f
}var l=n[o]={exports:{}};
t[o][0].call(l.exports,function(e){var n=t[o][1][e];
return s(n?n:e)
},l,l.exports,e,t,n,r)
}return n[o].exports
}var i=typeof require=="function"&&require;
for(var o=0;
o<r.length;
o++){s(r[o])
}return s
})({1:[function(require,module,exports){module.exports={oauthd_url:"https://oauth.io",oauthd_api:"https://oauth.io/api",version:"web-0.5.2",options:{}}
},{}],2:[function(require,module,exports){module.exports=function(Materia){var $,apiCall;
$=Materia.getJquery();
apiCall=(function(_this){return function(type,url,params){var base,defer;
defer=$.Deferred();
base=Materia.getOAuthdURL();
$.ajax({url:base+url,type:type,data:params}).then((function(data){return defer.resolve(data)
}),(function(err){return defer.reject(err&&err.responseJSON)
}));
return defer.promise()
}
})(this);
return{get:(function(_this){return function(url,params){return apiCall("get",url,params)
}
})(this),post:(function(_this){return function(url,params){return apiCall("post",url,params)
}
})(this),put:(function(_this){return function(url,params){return apiCall("put",url,params)
}
})(this),del:(function(_this){return function(url,params){return apiCall("delete",url,params)
}
})(this)}
}
},{}],3:[function(require,module,exports){var Location,Url,cache,config,cookies,lstorage;
config=require("../config");
Url=require("../tools/url");
Location=require("../tools/location_operations");
cookies=require("../tools/cookies");
lstorage=require("../tools/lstorage");
cache=require("../tools/cache");
module.exports=function(window,document,jquery,navigator){var Materia,location_operations,storage;
Url=Url(document);
location_operations=Location(document);
storage=lstorage.active()&&lstorage||cookies;
cookies.init(config,document);
cache.init(storage,config);
Materia={initialize:function(public_key,options){var i;
config.key=public_key;
if(options){for(i in options){config.options[i]=options[i]
}}},setOAuthdURL:function(url){config.oauthd_url=url;
config.oauthd_base=Url.getAbsUrl(config.oauthd_url).match(/^.{2,5}:\/\/[^\/]+/)[0]
},getOAuthdURL:function(){return config.oauthd_url
},getVersion:function(){return config.version
},extend:function(name,module){return this[name]=module(this)
},getConfig:function(){return config
},getWindow:function(){return window
},getDocument:function(){return document
},getNavigator:function(){return navigator
},getJquery:function(){return jquery
},getUrl:function(){return Url
},getCache:function(){return cache
},getStorage:function(){return storage
},getLocationOperations:function(){return location_operations
}};
return Materia
}
},{"../config":1,"../tools/cache":9,"../tools/cookies":10,"../tools/location_operations":12,"../tools/lstorage":13,"../tools/url":15}],4:[function(require,module,exports){var cookies,oauthio_requests,sha1;
cookies=require("../tools/cookies");
oauthio_requests=require("./request");
sha1=require("../tools/sha1");
module.exports=function(Materia){var $,Url,cache,client_states,config,document,location_operations,oauth,oauth_result,oauthio,parse_urlfragment,providers_api,window;
Url=Materia.getUrl();
config=Materia.getConfig();
document=Materia.getDocument();
window=Materia.getWindow();
$=Materia.getJquery();
cache=Materia.getCache();
providers_api=require("./providers")(Materia);
config.oauthd_base=Url.getAbsUrl(config.oauthd_url).match(/^.{2,5}:\/\/[^\/]+/)[0];
client_states=[];
oauth_result=void 0;
(parse_urlfragment=function(){var cookie_state,results;
results=/[\\#&]oauthio=([^&]*)/.exec(document.location.hash);
if(results){document.location.hash=document.location.hash.replace(/&?oauthio=[^&]*/,"");
oauth_result=decodeURIComponent(results[1].replace(/\+/g," "));
cookie_state=cookies.read("oauthio_state");
if(cookie_state){client_states.push(cookie_state);
cookies.erase("oauthio_state")
}}})();
location_operations=Materia.getLocationOperations();
oauthio={request:oauthio_requests(Materia,client_states,providers_api)};
oauth={initialize:function(public_key,options){return Materia.initialize(public_key,options)
},setOAuthdURL:function(url){config.oauthd_url=url;
config.oauthd_base=Url.getAbsUrl(config.oauthd_url).match(/^.{2,5}:\/\/[^\/]+/)[0]
},create:function(provider,tokens,request){var i,make_res,make_res_endpoint,res;
if(!tokens){return cache.tryCache(oauth,provider,true)
}if(typeof request!=="object"){providers_api.fetchDescription(provider)
}make_res=function(method){return oauthio.request.mkHttp(provider,tokens,request,method)
};
make_res_endpoint=function(method,url){return oauthio.request.mkHttpEndpoint(provider,tokens,request,method,url)
};
res={};
for(i in tokens){res[i]=tokens[i]
}res.toJson=function(){var a;
a={};
if(res.access_token!=null){a.access_token=res.access_token
}if(res.oauth_token!=null){a.oauth_token=res.oauth_token
}if(res.oauth_token_secret!=null){a.oauth_token_secret=res.oauth_token_secret
}if(res.expires_in!=null){a.expires_in=res.expires_in
}if(res.token_type!=null){a.token_type=res.token_type
}if(res.id_token!=null){a.id_token=res.id_token
}if(res.provider!=null){a.provider=res.provider
}if(res.email!=null){a.email=res.email
}return a
};
res.get=make_res("GET");
res.post=make_res("POST");
res.put=make_res("PUT");
res.patch=make_res("PATCH");
res.del=make_res("DELETE");
res.me=oauthio.request.mkHttpMe(provider,tokens,request,"GET");
return res
},popup:function(provider,opts,callback){var defer,frm,getMessage,gotmessage,interval,res,url,wnd,wndTimeout,wnd_options,wnd_settings;
gotmessage=false;
getMessage=function(e){if(!gotmessage){if(e.origin!==config.oauthd_base){return
}try{wnd.close()
}catch(_error){}opts.data=e.data;
oauthio.request.sendCallback(opts,defer);
return gotmessage=true
}};
wnd=void 0;
frm=void 0;
wndTimeout=void 0;
defer=$.Deferred();
opts=opts||{};
if(!config.key){if(defer!=null){defer.reject(new Error("OAuth object must be initialized"))
}if(callback==null){return defer.promise()
}else{return callback(new Error("OAuth object must be initialized"))
}}if(arguments.length===2&&typeof opts==="function"){callback=opts;
opts={}
}if(cache.cacheEnabled(opts.cache)){res=cache.tryCache(oauth,provider,opts.cache);
if(res){if(defer!=null){defer.resolve(res)
}if(callback){return callback(null,res)
}else{return defer.promise()
}}}if(!opts.state){opts.state=sha1.create_hash();
opts.state_type="client"
}client_states.push(opts.state);
url=config.oauthd_url+"/auth/"+provider+"?k="+config.key;
url+="&d="+encodeURIComponent(Url.getAbsUrl("/"));
if(opts){url+="&opts="+encodeURIComponent(JSON.stringify(opts))
}if(opts.wnd_settings){wnd_settings=opts.wnd_settings;
delete opts.wnd_settings
}else{wnd_settings={width:Math.floor(window.outerWidth*0.8),height:Math.floor(window.outerHeight*0.5)}
}if(wnd_settings.width<1000){wnd_settings.width=1000
}if(wnd_settings.height<630){wnd_settings.height=630
}wnd_settings.left=Math.floor(window.screenX+(window.outerWidth-wnd_settings.width)/2);
wnd_settings.top=Math.floor(window.screenY+(window.outerHeight-wnd_settings.height)/8);
wnd_options="width="+wnd_settings.width+",height="+wnd_settings.height;
wnd_options+=",toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0";
wnd_options+=",left="+wnd_settings.left+",top="+wnd_settings.top;
opts={provider:provider,cache:opts.cache};
opts.callback=function(e,r){if(window.removeEventListener){window.removeEventListener("message",getMessage,false)
}else{if(window.detachEvent){window.detachEvent("onmessage",getMessage)
}else{if(document.detachEvent){document.detachEvent("onmessage",getMessage)
}}}opts.callback=function(){};
if(wndTimeout){clearTimeout(wndTimeout);
wndTimeout=undefined
}if(callback){return callback(e,r)
}else{return undefined
}};
if(window.attachEvent){window.attachEvent("onmessage",getMessage)
}else{if(document.attachEvent){document.attachEvent("onmessage",getMessage)
}else{if(window.addEventListener){window.addEventListener("message",getMessage,false)
}}}if(typeof chrome!=="undefined"&&chrome.runtime&&chrome.runtime.onMessageExternal){chrome.runtime.onMessageExternal.addListener(function(request,sender,sendResponse){request.origin=sender.url.match(/^.{2,5}:\/\/[^\/]+/)[0];
return getMessage(request)
})
}if(!frm&&(navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0)){frm=document.createElement("iframe");
frm.src=config.oauthd_url+"/auth/iframe?d="+encodeURIComponent(Url.getAbsUrl("/"));
frm.width=0;
frm.height=0;
frm.frameBorder=0;
frm.style.visibility="hidden";
document.body.appendChild(frm)
}wndTimeout=setTimeout(function(){if(defer!=null){defer.reject(new Error("Authorization timed out"))
}if(opts.callback&&typeof opts.callback==="function"){opts.callback(new Error("Authorization timed out"))
}try{wnd.close()
}catch(_error){}},1200*1000);
wnd=window.open(url,"Authorization",wnd_options);
if(wnd){wnd.focus();
interval=window.setInterval(function(){if(wnd===null||wnd.closed){window.clearInterval(interval);
if(!gotmessage){if(defer!=null){defer.reject(new Error("The popup was closed"))
}if(opts.callback&&typeof opts.callback==="function"){return opts.callback(new Error("The popup was closed"))
}}}},500)
}else{if(defer!=null){defer.reject(new Error("Could not open a popup"))
}if(opts.callback&&typeof opts.callback==="function"){opts.callback(new Error("Could not open a popup"))
}}return defer!=null?defer.promise():void 0
},redirect:function(provider,opts,url){var redirect_uri,res;
if(arguments.length===2){url=opts;
opts={}
}if(typeof url!=="string"){throw new Error("You must specify an url")
}if(cache.cacheEnabled(opts.cache)){res=cache.tryCache(oauth,provider,opts.cache);
if(res){url=Url.getAbsUrl(url)+(url.indexOf("#")===-1?"#":"&")+"oauthio=cache:"+provider;
location_operations.changeHref(url);
location_operations.reload();
return
}}if(!opts.state){opts.state=sha1.create_hash();
opts.state_type="client"
}cookies.create("oauthio_state",opts.state);
redirect_uri=encodeURIComponent(Url.getAbsUrl(url));
url=config.oauthd_url+"/auth/"+provider+"?k="+config.key;
url+="&redirect_uri="+redirect_uri;
if(opts){url+="&opts="+encodeURIComponent(JSON.stringify(opts))
}location_operations.changeHref(url)
},isRedirect:function(provider){var cache_provider,data,e;
if(oauth_result==null){return false
}if((oauth_result!=null?oauth_result.substr(0,6):void 0)==="cache:"){cache_provider=oauth_result!=null?oauth_result.substr(6):void 0;
if(!provider){return cache_provider
}return cache_provider.toLowerCase()===provider.toLowerCase()
}try{data=JSON.parse(oauth_result)
}catch(_error){e=_error;
return false
}if(provider){return data.provider.toLowerCase()===provider.toLowerCase()
}return data.provider
},callback:function(provider,opts,callback){var defer,err,res;
defer=$.Deferred();
if(arguments.length===1&&typeof provider==="function"){callback=provider;
provider=undefined;
opts={}
}if(arguments.length===1&&typeof provider==="string"){opts={}
}if(arguments.length===2&&typeof opts==="function"){callback=opts;
opts={}
}if(cache.cacheEnabled(opts!=null?opts.cache:void 0)||(oauth_result!=null?oauth_result.substr(0,6):void 0)==="cache:"){if(!provider&&(oauth_result!=null?oauth_result.substr(0,6):void 0)==="cache:"){provider=oauth_result.substr(6)
}res=cache.tryCache(oauth,provider,true);
if(res){if(callback){if(res){return callback(null,res)
}}else{if(defer!=null){defer.resolve(res)
}return defer!=null?defer.promise():void 0
}}else{if((oauth_result!=null?oauth_result.substr(0,6):void 0)==="cache:"){err=new Error("Could not fetch data from cache");
if(callback){return callback(err)
}else{if(defer!=null){defer.reject(err)
}return defer!=null?defer.promise():void 0
}}}}if(!oauth_result){return
}oauthio.request.sendCallback({data:oauth_result,provider:provider,cache:opts!=null?opts.cache:void 0,expires:opts!=null?opts.expires:void 0,callback:callback},defer);
return defer!=null?defer.promise():void 0
},clearCache:function(provider){return cache.clearCache(provider)
},http_me:function(opts){if(oauthio.request.http_me){oauthio.request.http_me(opts)
}},http:function(opts){if(oauthio.request.http){oauthio.request.http(opts)
}},getVersion:function(){return Materia.getVersion.apply(this)
}};
return oauth
}
},{"../tools/cookies":10,"../tools/sha1":14,"./providers":5,"./request":6}],5:[function(require,module,exports){var config;
config=require("../config");
module.exports=function(Materia){var $,providers_api,providers_cb,providers_desc;
$=Materia.getJquery();
providers_desc={};
providers_cb={};
providers_api={execProvidersCb:function(provider,e,r){var cbs,i;
if(providers_cb[provider]){cbs=providers_cb[provider];
delete providers_cb[provider];
for(i in cbs){cbs[i](e,r)
}}},fetchDescription:function(provider){if(providers_desc[provider]){return
}providers_desc[provider]=true;
$.ajax({url:config.oauthd_api+"/providers/"+provider,data:{extend:true},dataType:"json"}).done(function(data){providers_desc[provider]=data.data;
providers_api.execProvidersCb(provider,null,data.data)
}).always(function(){if(typeof providers_desc[provider]!=="object"){delete providers_desc[provider];
providers_api.execProvidersCb(provider,new Error("Unable to fetch request description"))
}})
},getDescription:function(provider,opts,callback){opts=opts||{};
if(typeof providers_desc[provider]==="object"){return callback(null,providers_desc[provider])
}if(!providers_desc[provider]){providers_api.fetchDescription(provider)
}if(!opts.wait){return callback(null,{})
}providers_cb[provider]=providers_cb[provider]||[];
providers_cb[provider].push(callback)
}};
return providers_api
}
},{"../config":1}],6:[function(require,module,exports){var Url,indexOf=[].indexOf||function(item){for(var i=0,l=this.length;
i<l;
i++){if(i in this&&this[i]===item){return i
}}return -1
};
Url=require("../tools/url")();
module.exports=function(Materia,client_states,providers_api){var $,cache,config,extended_methods,fetched_methods;
$=Materia.getJquery();
config=Materia.getConfig();
cache=Materia.getCache();
extended_methods=[];
fetched_methods=false;
return{retrieveMethods:function(){var defer;
defer=$.Deferred();
if(!fetched_methods){$.ajax(config.oauthd_url+"/api/extended-endpoints").then(function(data){extended_methods=data.data;
fetched_methods=true;
return defer.resolve()
}).fail(function(e){fetched_methods=true;
return defer.reject(e)
})
}else{defer.resolve(extended_methods)
}return defer.promise()
},generateMethods:function(request_object,tokens,provider){var j,k,kk,len,name_array,pt,results,v,vv;
if(extended_methods!=null){results=[];
for(k=j=0,len=extended_methods.length;
j<len;
k=++j){v=extended_methods[k];
name_array=v.name.split(".");
pt=request_object;
results.push((function(){var l,len1,results1;
results1=[];
for(kk=l=0,len1=name_array.length;
l<len1;
kk=++l){vv=name_array[kk];
if(kk<name_array.length-1){if(pt[vv]==null){pt[vv]={}
}results1.push(pt=pt[vv])
}else{results1.push(pt[vv]=this.mkHttpAll(provider,tokens,v,arguments))
}}return results1
}).apply(this,arguments))
}return results
}},http:function(opts){var defer,desc_opts,doRequest,i,options;
doRequest=function(){var i,k,qs,request;
request=options.oauthio.request||{};
if(!request.cors){options.url=encodeURIComponent(options.url);
if(options.url[0]!=="/"){options.url="/"+options.url
}options.url=config.oauthd_url+"/request/"+options.oauthio.provider+options.url;
options.headers=options.headers||{};
options.headers.oauthio="k="+config.key;
if(options.oauthio.tokens.oauth_token&&options.oauthio.tokens.oauth_token_secret){options.headers.oauthio+="&oauthv=1"
}for(k in options.oauthio.tokens){options.headers.oauthio+="&"+encodeURIComponent(k)+"="+encodeURIComponent(options.oauthio.tokens[k])
}delete options.oauthio;
return $.ajax(options)
}if(options.oauthio.tokens){if(options.oauthio.tokens.access_token){options.oauthio.tokens.token=options.oauthio.tokens.access_token
}if(!options.url.match(/^[a-z]{2,16}:\/\//)){if(options.url[0]!=="/"){options.url="/"+options.url
}options.url=request.url+options.url
}options.url=Url.replaceParam(options.url,options.oauthio.tokens,request.parameters);
if(request.query){qs=[];
for(i in request.query){qs.push(encodeURIComponent(i)+"="+encodeURIComponent(Url.replaceParam(request.query[i],options.oauthio.tokens,request.parameters)))
}if(indexOf.call(options.url,"?")>=0){options.url+="&"+qs
}else{options.url+="?"+qs
}}if(request.headers){options.headers=options.headers||{};
for(i in request.headers){options.headers[i]=Url.replaceParam(request.headers[i],options.oauthio.tokens,request.parameters)
}}delete options.oauthio;
return $.ajax(options)
}};
options={};
i=void 0;
for(i in opts){options[i]=opts[i]
}if(!options.oauthio.request||options.oauthio.request===true){desc_opts={wait:!!options.oauthio.request};
defer=$.Deferred();
providers_api.getDescription(options.oauthio.provider,desc_opts,function(e,desc){if(e){return defer.reject(e)
}if(options.oauthio.tokens.oauth_token&&options.oauthio.tokens.oauth_token_secret){options.oauthio.request=desc.oauth1&&desc.oauth1.request
}else{options.oauthio.request=desc.oauth2&&desc.oauth2.request
}defer.resolve()
});
return defer.then(doRequest)
}else{return doRequest()
}},http_me:function(opts){var defer,desc_opts,doRequest,k,options;
doRequest=function(){var defer,k,promise,request;
defer=$.Deferred();
request=options.oauthio.request||{};
options.url=config.oauthd_url+"/auth/"+options.oauthio.provider+"/me";
options.headers=options.headers||{};
options.headers.oauthio="k="+config.key;
if(options.oauthio.tokens.oauth_token&&options.oauthio.tokens.oauth_token_secret){options.headers.oauthio+="&oauthv=1"
}for(k in options.oauthio.tokens){options.headers.oauthio+="&"+encodeURIComponent(k)+"="+encodeURIComponent(options.oauthio.tokens[k])
}delete options.oauthio;
promise=$.ajax(options);
$.when(promise).done(function(data){defer.resolve(data.data)
}).fail(function(data){if(data.responseJSON){defer.reject(data.responseJSON.data)
}else{defer.reject(new Error("An error occured while trying to access the resource"))
}});
return defer.promise()
};
options={};
for(k in opts){options[k]=opts[k]
}if(!options.oauthio.request||options.oauthio.request===true){desc_opts={wait:!!options.oauthio.request};
defer=$.Deferred();
providers_api.getDescription(options.oauthio.provider,desc_opts,function(e,desc){if(e){return defer.reject(e)
}if(options.oauthio.tokens.oauth_token&&options.oauthio.tokens.oauth_token_secret){options.oauthio.request=desc.oauth1&&desc.oauth1.request
}else{options.oauthio.request=desc.oauth2&&desc.oauth2.request
}defer.resolve()
});
return defer.then(doRequest)
}else{return doRequest()
}},http_all:function(options,endpoint_descriptor,parameters){var doRequest;
doRequest=function(){var defer,k,promise,request;
defer=$.Deferred();
request=options.oauthio.request||{};
options.headers=options.headers||{};
options.headers.oauthio="k="+config.key;
if(options.oauthio.tokens.oauth_token&&options.oauthio.tokens.oauth_token_secret){options.headers.oauthio+="&oauthv=1"
}for(k in options.oauthio.tokens){options.headers.oauthio+="&"+encodeURIComponent(k)+"="+encodeURIComponent(options.oauthio.tokens[k])
}delete options.oauthio;
promise=$.ajax(options);
$.when(promise).done(function(data){var error;
if(typeof data.data==="string"){try{data.data=JSON.parse(data.data)
}catch(_error){error=_error;
data.data=data.data
}finally{defer.resolve(data.data)
}}}).fail(function(data){if(data.responseJSON){defer.reject(data.responseJSON.data)
}else{defer.reject(new Error("An error occured while trying to access the resource"))
}});
return defer.promise()
};
return doRequest()
},mkHttp:function(provider,tokens,request,method){var base;
base=this;
return function(opts,opts2){var i,options;
options={};
if(typeof opts==="string"){if(typeof opts2==="object"){for(i in opts2){options[i]=opts2[i]
}}options.url=opts
}else{if(typeof opts==="object"){for(i in opts){options[i]=opts[i]
}}}options.type=options.type||method;
options.oauthio={provider:provider,tokens:tokens,request:request};
return base.http(options)
}
},mkHttpMe:function(provider,tokens,request,method){var base;
base=this;
return function(filter){var options;
options={};
options.type=options.type||method;
options.oauthio={provider:provider,tokens:tokens,request:request};
options.data=options.data||{};
if(filter){options.data.filter=filter.join(",")
}return base.http_me(options)
}
},mkHttpAll:function(provider,tokens,endpoint_descriptor){var base;
base=this;
return function(){var k,options,th_param,v;
options={};
options.type=endpoint_descriptor.method;
options.url=config.oauthd_url+endpoint_descriptor.endpoint.replace(":provider",provider);
options.oauthio={provider:provider,tokens:tokens};
options.data={};
for(k in arguments){v=arguments[k];
th_param=endpoint_descriptor.params[k];
if(th_param!=null){options.data[th_param.name]=v
}}options.data=options.data||{};
return base.http_all(options,endpoint_descriptor,arguments)
}
},sendCallback:function(opts,defer){var base,data,e,err,i,make_res,request,res,tokens;
base=this;
data=void 0;
err=void 0;
try{data=JSON.parse(opts.data)
}catch(_error){e=_error;
defer.reject(new Error("Error while parsing result"));
return opts.callback(new Error("Error while parsing result"))
}if(!data||!data.provider){return
}if(opts.provider&&data.provider.toLowerCase()!==opts.provider.toLowerCase()){err=new Error("Returned provider name does not match asked provider");
defer.reject(err);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(err)
}else{return
}}if(data.status==="error"||data.status==="fail"){err=new Error(data.message);
err.body=data.data;
defer.reject(err);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(err)
}else{return
}}if(data.status!=="success"||!data.data){err=new Error();
err.body=data.data;
defer.reject(err);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(err)
}else{return
}}data.state=data.state.replace(/\s+/g,"");
i=0;
while(i<client_states.length){client_states[i]=client_states[i].replace(/\s+/g,"");
i++
}if(!data.state||client_states.indexOf(data.state)===-1){defer.reject(new Error("State is not matching"));
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(new Error("State is not matching"))
}else{return
}}if(!opts.provider){data.data.provider=data.provider
}res=data.data;
res.provider=data.provider.toLowerCase();
if(cache.cacheEnabled(opts.cache)&&res){if(opts.expires&&!res.expires_in){res.expires_in=opts.expires
}cache.storeCache(data.provider,res)
}request=res.request;
delete res.request;
tokens=void 0;
if(res.access_token){tokens={access_token:res.access_token}
}else{if(res.oauth_token&&res.oauth_token_secret){tokens={oauth_token:res.oauth_token,oauth_token_secret:res.oauth_token_secret}
}}if(!request){defer.resolve(res);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(null,res)
}else{return
}}if(request.required){for(i in request.required){tokens[request.required[i]]=res[request.required[i]]
}}make_res=function(method){return base.mkHttp(data.provider,tokens,request,method)
};
res.toJson=function(){var a;
a={};
if(res.access_token!=null){a.access_token=res.access_token
}if(res.oauth_token!=null){a.oauth_token=res.oauth_token
}if(res.oauth_token_secret!=null){a.oauth_token_secret=res.oauth_token_secret
}if(res.expires_in!=null){a.expires_in=res.expires_in
}if(res.token_type!=null){a.token_type=res.token_type
}if(res.id_token!=null){a.id_token=res.id_token
}if(res.provider!=null){a.provider=res.provider
}if(res.email!=null){a.email=res.email
}return a
};
res.get=make_res("GET");
res.post=make_res("POST");
res.put=make_res("PUT");
res.patch=make_res("PATCH");
res.del=make_res("DELETE");
res.me=base.mkHttpMe(data.provider,tokens,request,"GET");
return this.retrieveMethods().then((function(_this){return function(){_this.generateMethods(res,tokens,data.provider);
defer.resolve(res);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(null,res)
}else{}}
})(this)).fail((function(_this){return function(e){console.log("Could not retrieve methods",e);
defer.resolve(res);
if(opts.callback&&typeof opts.callback==="function"){return opts.callback(null,res)
}else{}}
})(this))
}}
}
},{"../tools/url":15}],7:[function(require,module,exports){module.exports=function(Materia){var $,UserObject,config,lastSave,storage;
$=Materia.getJquery();
config=Materia.getConfig();
storage=Materia.getStorage();
lastSave=null;
UserObject=(function(){function UserObject(data){this.token=data.token;
this.data=data.user;
this.providers=data.providers;
lastSave=this.getEditableData()
}UserObject.prototype.getEditableData=function(){var data,key;
data=[];
for(key in this.data){if(["id","email"].indexOf(key)===-1){data.push({key:key,value:this.data[key]})
}}return data
};
UserObject.prototype.save=function(){var d,dataToSave,i,j,keyIsInLastSave,len,len1,ref;
dataToSave={};
for(i=0,len=lastSave.length;
i<len;
i++){d=lastSave[i];
if(this.data[d.key]!==d.value){dataToSave[d.key]=this.data[d.key]
}if(this.data[d.key]===null){delete this.data[d.key]
}}keyIsInLastSave=function(key){var j,len1,o;
for(j=0,len1=lastSave.length;
j<len1;
j++){o=lastSave[j];
if(o.key===key){return true
}}return false
};
ref=this.getEditableData();
for(j=0,len1=ref.length;
j<len1;
j++){d=ref[j];
if(!keyIsInLastSave(d.key)){dataToSave[d.key]=this.data[d.key]
}}this.saveLocal();
return Materia.API.put("/api/usermanagement/user?k="+config.key+"&token="+this.token,dataToSave)
};
UserObject.prototype.select=function(provider){var OAuthResult;
OAuthResult=null;
return OAuthResult
};
UserObject.prototype.saveLocal=function(){var copy;
copy={token:this.token,user:this.data,providers:this.providers};
storage.erase("oio_auth");
return storage.create("oio_auth",JSON.stringify(copy),21600)
};
UserObject.prototype.hasProvider=function(provider){var ref;
return((ref=this.providers)!=null?ref.indexOf(provider):void 0)!==-1
};
UserObject.prototype.getProviders=function(){var defer;
defer=$.Deferred();
Materia.API.get("/api/usermanagement/user/providers?k="+config.key+"&token="+this.token).done((function(_this){return function(providers){_this.providers=providers.data;
_this.saveLocal();
return defer.resolve(_this.providers)
}
})(this)).fail(function(err){return defer.reject(err)
});
return defer.promise()
};
UserObject.prototype.addProvider=function(oauthRes){var defer;
defer=$.Deferred();
if(typeof oauthRes.toJson==="function"){oauthRes=oauthRes.toJson()
}oauthRes.email=this.data.email;
this.providers.push(oauthRes.provider);
Materia.API.post("/api/usermanagement/user/providers?k="+config.key+"&token="+this.token,oauthRes).done((function(_this){return function(res){_this.data=res.data;
_this.saveLocal();
return defer.resolve()
}
})(this)).fail((function(_this){return function(err){_this.providers.splice(_this.providers.indexOf(oauthRes.provider),1);
return defer.reject(err)
}
})(this));
return defer.promise()
};
UserObject.prototype.removeProvider=function(provider){var defer;
defer=$.Deferred();
this.providers.splice(this.providers.indexOf(provider),1);
Materia.API.del("/api/usermanagement/user/providers/"+provider+"?k="+config.key+"&token="+this.token).done((function(_this){return function(res){_this.saveLocal();
return defer.resolve(res)
}
})(this)).fail((function(_this){return function(err){_this.providers.push(provider);
return defer.reject(err)
}
})(this));
return defer.promise()
};
UserObject.prototype.changePassword=function(oldPassword,newPassword){return Materia.API.post("/api/usermanagement/user/password?k="+config.key+"&token="+this.token,{password:newPassword})
};
UserObject.prototype.isLoggued=function(){return Materia.User.isLogged()
};
UserObject.prototype.isLogged=function(){return Materia.User.isLogged()
};
UserObject.prototype.logout=function(){var defer;
defer=$.Deferred();
storage.erase("oio_auth");
Materia.API.post("/api/usermanagement/user/logout?k="+config.key+"&token="+this.token).done(function(){return defer.resolve()
}).fail(function(err){return defer.reject(err)
});
return defer.promise()
};
return UserObject
})();
return{initialize:function(public_key,options){return Materia.initialize(public_key,options)
},setOAuthdURL:function(url){return Materia.setOAuthdURL(url)
},signup:function(data){var defer;
defer=$.Deferred();
if(typeof data.toJson==="function"){data=data.toJson()
}Materia.API.post("/api/usermanagement/signup?k="+config.key,data).done(function(res){storage.create("oio_auth",JSON.stringify(res.data),res.data.expires_in||21600);
return defer.resolve(new UserObject(res.data))
}).fail(function(err){return defer.reject(err)
});
return defer.promise()
},signin:function(email,password){var defer,signinData;
defer=$.Deferred();
if(typeof email!=="string"&&!password){signinData=email;
if(typeof signinData.toJson==="function"){signinData=signinData.toJson()
}Materia.API.post("/api/usermanagement/signin?k="+config.key,signinData).done(function(res){storage.create("oio_auth",JSON.stringify(res.data),res.data.expires_in||21600);
return defer.resolve(new UserObject(res.data))
}).fail(function(err){return defer.reject(err)
})
}else{Materia.API.post("/api/usermanagement/signin?k="+config.key,{email:email,password:password}).done(function(res){storage.create("oio_auth",JSON.stringify(res.data),res.data.expires_in||21600);
return defer.resolve(new UserObject(res.data))
}).fail(function(err){return defer.reject(err)
})
}return defer.promise()
},confirmResetPassword:function(newPassword,sptoken){return Materia.API.post("/api/usermanagement/user/password?k="+config.key,{password:newPassword,token:sptoken})
},resetPassword:function(email,callback){return Materia.API.post("/api/usermanagement/user/password/reset?k="+config.key,{email:email})
},refreshIdentity:function(){var defer;
defer=$.Deferred();
Materia.API.get("/api/usermanagement/user?k="+config.key+"&token="+JSON.parse(storage.read("oio_auth")).token).done(function(res){return defer.resolve(new UserObject(res.data))
}).fail(function(err){return defer.reject(err)
});
return defer.promise()
},getIdentity:function(){var user;
user=storage.read("oio_auth");
if(!user){return null
}return new UserObject(JSON.parse(user))
},isLogged:function(){var a;
a=storage.read("oio_auth");
if(a){return true
}return false
}}
}
},{}],8:[function(require,module,exports){(function(){var Materia,jquery;
jquery=require("./tools/jquery-lite.js");
Materia=require("./lib/core")(window,document,jquery,navigator);
Materia.extend("OAuth",require("./lib/oauth"));
Materia.extend("API",require("./lib/api"));
Materia.extend("User",require("./lib/user"));
if(typeof angular!=="undefined"&&angular!==null){angular.module("oauthio",[]).factory("Materia",[function(){return Materia
}]).factory("OAuth",[function(){return Materia.OAuth
}]).factory("User",[function(){return Materia.User
}])
}window.Materia=exports.Materia=Materia;
window.User=exports.User=exports.Materia.User;
window.OAuth=exports.OAuth=exports.Materia.OAuth;
if(typeof define==="function"&&define.amd){define(function(){return exports
})
}if((typeof module!=="undefined"&&module!==null?module.exports:void 0)){module.exports=exports
}return exports
})()
},{"./lib/api":2,"./lib/core":3,"./lib/oauth":4,"./lib/user":7,"./tools/jquery-lite.js":11}],9:[function(require,module,exports){module.exports={init:function(storage,config){this.config=config;
return this.storage=storage
},tryCache:function(OAuth,provider,cache){var e,i,res;
if(this.cacheEnabled(cache)){cache=this.storage.read("oauthio_provider_"+provider);
if(!cache){return false
}cache=decodeURIComponent(cache)
}if(typeof cache==="string"){try{cache=JSON.parse(cache)
}catch(_error){e=_error;
return false
}}if(typeof cache==="object"){res={};
for(i in cache){if(i!=="request"&&typeof cache[i]!=="function"){res[i]=cache[i]
}}return OAuth.create(provider,res,cache.request)
}return false
},storeCache:function(provider,cache){var expires;
expires=3600;
if(cache.expires_in){expires=cache.expires_in
}else{if(this.config.options.expires||this.config.options.expires===false){expires=this.config.options.expires
}}this.storage.create("oauthio_provider_"+provider,encodeURIComponent(JSON.stringify(cache)),expires)
},cacheEnabled:function(cache){if(typeof cache==="undefined"){return this.config.options.cache
}return cache
},clearCache:function(provider){if(provider){this.storage.erase("oauthio_provider_"+provider)
}else{this.storage.eraseFrom("oauthio_provider_")
}}}
},{}],10:[function(require,module,exports){module.exports={init:function(config,document){this.config=config;
return this.document=document
},create:function(name,value,expires){var date;
this.erase(name);
date=new Date();
if(expires){date.setTime(date.getTime()+(expires||1200)*1000)
}else{date.setFullYear(date.getFullYear()+3)
}expires="; expires="+date.toGMTString();
this.document.cookie=name+"="+value+expires+"; path=/"
},read:function(name){var c,ca,i,nameEQ;
nameEQ=name+"=";
ca=this.document.cookie.split(";");
i=0;
while(i<ca.length){c=ca[i];
while(c.charAt(0)===" "){c=c.substring(1,c.length)
}if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length)
}i++
}return null
},erase:function(name){var date;
date=new Date();
date.setTime(date.getTime()-86400000);
this.document.cookie=name+"=; expires="+date.toGMTString()+"; path=/"
},eraseFrom:function(prefix){var cname,cookie,cookies,j,len;
cookies=this.document.cookie.split(";");
for(j=0,len=cookies.length;
j<len;
j++){cookie=cookies[j];
cname=cookie.split("=")[0].trim();
if(cname.substr(0,prefix.length)===prefix){this.erase(cname)
}}}}
},{}],11:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.1 -attributes,-attributes/attr,-attributes/classes,-attributes/prop,-attributes/support,-attributes/val,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-css,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-data/var/data_user,-deprecated,-event/alias,-event/support,-intro,-manipulation/_evalUrl,-manipulation/support,-manipulation/var,-manipulation/var/rcheckableType,-manipulation,-outro,-queue,-queue/delay,-selector-native,-selector-sizzle,-sizzle/dist,-sizzle/dist/sizzle,-sizzle/dist/min,-sizzle/test,-sizzle/test/jquery,-traversing,-traversing/findFilter,-traversing/var/rneedsContext,-traversing/var,-wrap,-exports,-exports/amd
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-12T19:37Z
 */
(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document")
}return factory(w)
}
}else{factory(global)
}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var document=window.document,version="2.1.1 -attributes,-attributes/attr,-attributes/classes,-attributes/prop,-attributes/support,-attributes/val,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-css,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-data/var/data_user,-deprecated,-event/alias,-event/support,-intro,-manipulation/_evalUrl,-manipulation/support,-manipulation/var,-manipulation/var/rcheckableType,-manipulation,-outro,-queue,-queue/delay,-selector-native,-selector-sizzle,-sizzle/dist,-sizzle/dist/sizzle,-sizzle/dist/min,-sizzle/test,-sizzle/test/jquery,-traversing,-traversing/findFilter,-traversing/var/rneedsContext,-traversing/var,-wrap,-exports,-exports/amd",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)
},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()
};
jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)
},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this)
},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret
},each:function(callback,args){return jQuery.each(this,callback,args)
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},slice:function(){return this.pushStack(slice.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(i){var len=this.length,j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:push,sort:arr.sort,splice:arr.splice};
jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;
if(typeof target==="boolean"){deep=target;
target=arguments[i]||{};
i++
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(i===length){target=this;
i--
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(name in options){src=target[name];
copy=options[name];
if(target===copy){continue
}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]
}else{clone=src&&jQuery.isPlainObject(src)?src:{}
}target[name]=jQuery.extend(deep,clone,copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg)
},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"
},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window
},isNumeric:function(obj){return !jQuery.isArray(obj)&&obj-parseFloat(obj)>=0
},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false
}if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false
}return true
},isEmptyObject:function(obj){var name;
for(name in obj){return false
}return true
},type:function(obj){if(obj==null){return obj+""
}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj
},globalEval:function(code){var script,indirect=eval;
code=jQuery.trim(code);
if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");
script.text=code;
document.head.appendChild(script).parentNode.removeChild(script)
}else{indirect(code)
}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()
},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);
if(args){if(isArray){for(;
i<length;
i++){value=callback.apply(obj[i],args);
if(value===false){break
}}}else{for(i in obj){value=callback.apply(obj[i],args);
if(value===false){break
}}}}else{if(isArray){for(;
i<length;
i++){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}}return obj
},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")
},makeArray:function(arr,results){var ret=results||[];
if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)
}else{push.call(ret,arr)
}}return ret
},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)
},merge:function(first,second){var len=+second.length,j=0,i=first.length;
for(;
j<len;
j++){first[i++]=second[j]
}first.length=i;
return first
},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
for(;
i<length;
i++){callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){matches.push(elems[i])
}}return matches
},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];
if(isArray){for(;
i<length;
i++){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}else{for(i in elems){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}return concat.apply([],ret)
},guid:1,proxy:function(fn,context){var tmp,args,proxy;
if(typeof context==="string"){tmp=fn[context];
context=fn;
fn=tmp
}if(!jQuery.isFunction(fn)){return undefined
}args=slice.call(arguments,2);
proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy
},now:Date.now,support:support});
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()
});
function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){return false
}if(obj.nodeType===1&&length){return true
}return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1) in obj
}var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;
if(!selector){return this
}if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]
}else{match=rquickExpr.exec(selector)
}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])
}else{this.attr(match,context[match])
}}}return this
}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){this.length=1;
this[0]=elem
}this.context=document;
this.selector=selector;
return this
}}else{if(!context||context.jquery){return(context||rootjQuery).find(selector)
}else{return this.constructor(context).find(selector)
}}}else{if(selector.nodeType){this.context=this[0]=selector;
this.length=1;
return this
}else{if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)
}}}if(selector.selector!==undefined){this.selector=selector.selector;
this.context=selector.context
}return jQuery.makeArray(selector,this)
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rnotwhite=(/\S+/g);
var optionsCache={};
function createOptions(options){var object=optionsCache[options]={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true
});
return object
}jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);
var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;
fired=true;
firingIndex=firingStart||0;
firingStart=0;
firingLength=list.length;
firing=true;
for(;
list&&firingIndex<firingLength;
firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;
break
}}firing=false;
if(list){if(stack){if(stack.length){fire(stack.shift())
}}else{if(memory){list=[]
}else{self.disable()
}}}},self={add:function(){if(list){var start=list.length;
(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);
if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)
}}else{if(arg&&arg.length&&type!=="string"){add(arg)
}}})
})(arguments);
if(firing){firingLength=list.length
}else{if(memory){firingStart=start;
fire(memory)
}}}return this
},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;
while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);
if(firing){if(index<=firingLength){firingLength--
}if(index<=firingIndex){firingIndex--
}}}})
}return this
},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)
},empty:function(){list=[];
firingLength=0;
return this
},disable:function(){list=stack=memory=undefined;
return this
},disabled:function(){return !list
},lock:function(){stack=undefined;
if(!memory){self.disable()
}return this
},locked:function(){return !stack
},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];
args=[context,args.slice?args.slice():args];
if(firing){stack.push(args)
}else{fire(args)
}}return this
},fire:function(){self.fireWith(this,arguments);
return this
},fired:function(){return !!fired
}};
return self
};
jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state
},always:function(){deferred.done(arguments).fail(arguments);
return this
},then:function(){var fns=arguments;
return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)
}})
});
fns=null
}).promise()
},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise
}},deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){list.add(function(){state=stateString
},tuples[i^1][2].disable,tuples[2][2].lock)
}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this
};
deferred[tuple[0]+"With"]=list.fireWith
});
promise.promise(deferred);
if(func){func.call(deferred,deferred)
}return deferred
},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){deferred.notifyWith(contexts,values)
}else{if(!(--remaining)){deferred.resolveWith(contexts,values)
}}}
},progressValues,progressContexts,resolveContexts;
if(length>1){progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;
i<length;
i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))
}else{--remaining
}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)
}return deferred.promise()
}});
var readyList;
jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);
return this
};
jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++
}else{jQuery.ready(true)
}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return
}jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){return
}readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");
jQuery(document).off("ready")
}}});
function completed(){document.removeEventListener("DOMContentLoaded",completed,false);
window.removeEventListener("load",completed,false);
jQuery.ready()
}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
if(document.readyState==="complete"){setTimeout(jQuery.ready)
}else{document.addEventListener("DOMContentLoaded",completed,false);
window.addEventListener("load",completed,false)
}}return readyList.promise(obj)
};
jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;
if(jQuery.type(key)==="object"){chainable=true;
for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)
}}else{if(value!==undefined){chainable=true;
if(!jQuery.isFunction(value)){raw=true
}if(bulk){if(raw){fn.call(elems,value);
fn=null
}else{bulk=fn;
fn=function(elem,key,value){return bulk.call(jQuery(elem),value)
}
}}if(fn){for(;
i<len;
i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))
}}}}return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet
};
jQuery.acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType)
};
function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}});
this.expando=jQuery.expando+Math.random()
}Data.uid=1;
Data.accepts=jQuery.acceptData;
Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0
}var descriptor={},unlock=owner[this.expando];
if(!unlock){unlock=Data.uid++;
try{descriptor[this.expando]={value:unlock};
Object.defineProperties(owner,descriptor)
}catch(e){descriptor[this.expando]=unlock;
jQuery.extend(owner,descriptor)
}}if(!this.cache[unlock]){this.cache[unlock]={}
}return unlock
},set:function(owner,data,value){var prop,unlock=this.key(owner),cache=this.cache[unlock];
if(typeof data==="string"){cache[data]=value
}else{if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data)
}else{for(prop in data){cache[prop]=data[prop]
}}}return cache
},get:function(owner,key){var cache=this.cache[this.key(owner)];
return key===undefined?cache:cache[key]
},access:function(owner,key,value){var stored;
if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);
return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))
}this.set(owner,key,value);
return value!==undefined?value:key
},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];
if(key===undefined){this.cache[unlock]={}
}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase))
}else{camel=jQuery.camelCase(key);
if(key in cache){name=[key,camel]
}else{name=camel;
name=name in cache?[name]:(name.match(rnotwhite)||[])
}}i=name.length;
while(i--){delete cache[name[i]]
}}},hasData:function(owner){return !jQuery.isEmptyObject(this.cache[owner[this.expando]]||{})
},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]]
}}};
var data_priv=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){var name;
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data
}catch(e){}data_user.set(elem,key,data)
}else{data=undefined
}}return data
}jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem)
},data:function(elem,name,data){return data_user.access(elem,name,data)
},removeData:function(elem,name){data_user.remove(elem,name)
},_data:function(elem,name,data){return data_priv.access(elem,name,data)
},_removeData:function(elem,name){data_priv.remove(elem,name)
}});
jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
if(key===undefined){if(this.length){data=data_user.get(elem);
if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;
while(i--){if(attrs[i]){name=attrs[i].name;
if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name])
}}}data_priv.set(elem,"hasDataAttrs",true)
}}return data
}if(typeof key==="object"){return this.each(function(){data_user.set(this,key)
})
}return access(this,function(value){var data,camelKey=jQuery.camelCase(key);
if(elem&&value===undefined){data=data_user.get(elem,key);
if(data!==undefined){return data
}data=data_user.get(elem,camelKey);
if(data!==undefined){return data
}data=dataAttr(elem,camelKey,undefined);
if(data!==undefined){return data
}return
}this.each(function(){var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);
if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)
}})
},null,value,arguments.length>1,null,true)
},removeData:function(key){return this.each(function(){data_user.remove(this,key)
})
}});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var strundefined=typeof undefined;
var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true
}function returnFalse(){return false
}function safeActiveElement(){try{return document.activeElement
}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);
if(!elemData){return
}if(handler.handler){handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector
}if(!handler.guid){handler.guid=jQuery.guid++
}if(!(events=elemData.events)){events=elemData.events={}
}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined
}
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);
if(!(handlers=events[type])){handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)
}}}if(special.add){special.add.call(elem,handleObj);
if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid
}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)
}else{handlers.push(handleObj)
}jQuery.event.global[type]=true
}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);
if(!elemData||!(events=elemData.events)){return
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)
}continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);
if(handleObj.selector){handlers.delegateCount--
}if(special.remove){special.remove.call(elem,handleObj)
}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)
}delete events[type]
}}if(jQuery.isEmptyObject(events)){delete elemData.handle;
data_priv.remove(elem,"events")
}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){return
}if(rfocusMorph.test(type+jQuery.event.triggered)){return
}if(type.indexOf(".")>=0){namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort()
}ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
event.result=undefined;
if(!event.target){event.target=elem
}data=data==null?[event]:jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return
}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode
}for(;
cur;
cur=cur.parentNode){eventPath.push(cur);
tmp=cur
}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)
}}i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;
handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");
if(handle){handle.apply(cur,data)
}handle=ontype&&cur[ontype];
if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);
if(event.result===false){event.preventDefault()
}}}event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];
if(tmp){elem[ontype]=null
}jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){elem[ontype]=tmp
}}}}return event.result
},dispatch:function(event){event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return
}handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();
event.stopPropagation()
}}}}}if(special.postDispatch){special.postDispatch.call(this,event)
}return event.result
},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;
cur!==this;
cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];
for(i=0;
i<delegateCount;
i++){handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length
}if(matches[sel]){matches.push(handleObj)
}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})
}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})
}return handlerQueue
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode
}return event
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;
if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)
}if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))
}return event
}},fix:function(event){if(event[jQuery.expando]){return event
}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];
if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}
}copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){prop=copy[i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=document
}if(event.target.nodeType===3){event.target=event.target.parentNode
}return fixHook.filter?fixHook.filter(event,originalEvent):event
},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();
return false
}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();
return false
}},_default:function(event){return jQuery.nodeName(event.target,"a")
}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result
}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});
if(bubble){jQuery.event.trigger(e,null,elem)
}else{jQuery.event.dispatch.call(elem,e)
}if(e.isDefaultPrevented()){event.preventDefault()
}}};
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)
}};
jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse
}else{this.type=src
}if(props){jQuery.extend(this,props)
}this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true
};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&e.preventDefault){e.preventDefault()
}},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&e.stopPropagation){e.stopPropagation()
}},stopImmediatePropagation:function(){var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()
}this.stopPropagation()
}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix
}return ret
}}
});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)
};
jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);
if(!attaches){doc.addEventListener(orig,handler,true)
}data_priv.access(doc,fix,(attaches||0)+1)
},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;
if(!attaches){doc.removeEventListener(orig,handler,true);
data_priv.remove(doc,fix)
}else{data_priv.access(doc,fix,attaches)
}}}
})
}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;
if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;
selector=undefined
}for(type in types){this.on(type,selector,data,types[type],one)
}return this
}if(data==null&&fn==null){fn=selector;
data=selector=undefined
}else{if(fn==null){if(typeof selector==="string"){fn=data;
data=undefined
}else{fn=data;
data=selector;
selector=undefined
}}}if(fn===false){fn=returnFalse
}else{if(!fn){return this
}}if(one===1){origFn=fn;
fn=function(event){jQuery().off(event);
return origFn.apply(this,arguments)
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)
}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)
})
},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)
},off:function(types,selector,fn){var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;
jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);
return this
}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])
}return this
}if(selector===false||typeof selector==="function"){fn=selector;
selector=undefined
}if(fn===false){fn=returnFalse
}return this.each(function(){jQuery.event.remove(this,types,fn,selector)
})
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){var elem=this[0];
if(elem){return jQuery.event.trigger(type,data,elem,true)
}}});
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"")
};
jQuery.parseXML=function(data){var xml,tmp;
if(!data||typeof data!=="string"){return null
}try{tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml")
}catch(e){xml=undefined
}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)
}return xml
};
var ajaxLocParts,ajaxLocation,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*");
try{ajaxLocation=location.href
}catch(e){ajaxLocation=document.createElement("a");
ajaxLocation.href="";
ajaxLocation=ajaxLocation.href
}ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;
dataTypeExpression="*"
}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func)
}else{(structure[dataType]=structure[dataType]||[]).push(func)
}}}}
}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);
function inspect(dataType){var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false
}else{if(seekingTransport){return !(selected=dataTypeOrTransport)
}}});
return selected
}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")
}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]
}}if(deep){jQuery.extend(true,target,deep)
}return target
}function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){dataTypes.shift();
if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")
}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);
break
}}}if(dataTypes[0] in responses){finalDataType=dataTypes[0]
}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;
break
}if(!firstDataType){firstDataType=type
}}finalDataType=finalDataType||firstDataType
}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)
}return responses[finalDataType]
}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]
}}current=dataTypes.shift();
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response
}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)
}prev=current;
current=dataTypes.shift();
if(current){if(current==="*"){current=prev
}else{if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){for(conv2 in converters){tmp=conv2.split(" ");
if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];
if(conv){if(conv===true){conv=converters[conv2]
}else{if(converters[conv2]!==true){current=tmp[0];
dataTypes.unshift(tmp[1])
}}break
}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)
}else{try{response=conv(response)
}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}
}}}}}}}return{state:"success",data:response}
}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)
},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;
url=undefined
}options=options||{};
var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;
if(state===2){if(!responseHeaders){responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]
}}match=responseHeaders[key.toLowerCase()]
}return match==null?null:match
},getAllResponseHeaders:function(){return state===2?responseHeadersString:null
},setRequestHeader:function(name,value){var lname=name.toLowerCase();
if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value
}return this
},overrideMimeType:function(type){if(!state){s.mimeType=type
}return this
},statusCode:function(map){var code;
if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]
}}else{jqXHR.always(map[jqXHR.status])
}}return this
},abort:function(statusText){var finalText=statusText||strAbort;
if(transport){transport.abort(finalText)
}done(0,finalText);
return this
}};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))
}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){return jqXHR
}fireGlobals=s.global;
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data
}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++
}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])
}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])
}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)
}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])
}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()
}strAbort="abort";
for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i])
}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){done(-1,"No Transport")
}else{jqXHR.readyState=1;
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])
}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")
},s.timeout)
}try{state=1;
transport.send(requestHeaders,done)
}catch(e){if(state<2){done(-1,e)
}else{throw e
}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
if(state===2){return
}state=2;
if(timeoutTimer){clearTimeout(timeoutTimer)
}transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){response=ajaxHandleResponses(s,jqXHR,responses)
}response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){jQuery.lastModified[cacheURL]=modified
}modified=jqXHR.getResponseHeader("etag");
if(modified){jQuery.etag[cacheURL]=modified
}}if(status===204||s.type==="HEAD"){statusText="nocontent"
}else{if(status===304){statusText="notmodified"
}else{statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error
}}}else{error=statusText;
if(status||!statusText){statusText="error";
if(status<0){status=0
}}}jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])
}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])
}jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}return jqXHR
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")
}});
jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;
callback=data;
data=undefined
}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})
}
});
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)
}
});
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){var name;
if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)
}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)
}})
}else{if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)
}}else{add(prefix,obj)
}}}jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
};
if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional
}if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)
}}return s.join("&").replace(r20,"+")
};
jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this
}).filter(function(){var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}).get()
}});
jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest()
}catch(e){}};
var xhrId=0,xhrCallbacks={},xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();
if(window.ActiveXObject){jQuery(window).on("unload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]()
}})
}support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){var callback;
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;
xhr.open(options.type,options.url,options.async,options.username,options.password);
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]
}}if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)
}if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"
}for(i in headers){xhr.setRequestHeader(i,headers[i])
}callback=function(type){return function(){if(callback){delete xhrCallbacks[id];
callback=xhr.onload=xhr.onerror=null;
if(type==="abort"){xhr.abort()
}else{if(type==="error"){complete(xhr.status,xhr.statusText)
}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders())
}}}}
};
xhr.onload=callback();
xhr.onerror=callback("error");
callback=xhrCallbacks[id]=callback("abort");
try{xhr.send(options.hasContent&&options.data||null)
}catch(e){if(callback){throw e
}}},abort:function(){if(callback){callback()
}}}
}});
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);
return text
}}});
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false
}if(s.crossDomain){s.type="GET"
}});
jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;
return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();
callback=null;
if(evt){complete(evt.type==="error"?404:200,evt.type)
}});
document.head.appendChild(script[0])
},abort:function(){if(callback){callback()
}}}
}});
var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback
}});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)
}else{if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName
}}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")
}return responseContainer[0]
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){responseContainer=arguments
};
jqXHR.always(function(){window[callbackName]=overwritten;
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName)
}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])
}responseContainer=overwritten=undefined
});
return"script"
}});
jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null
}if(typeof context==="boolean"){keepScripts=context;
context=false
}context=context||document;
var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];
if(parsed){return[context.createElement(parsed[1])]
}parsed=jQuery.buildFragment([data],context,scripts);
if(scripts&&scripts.length){jQuery(scripts).remove()
}return jQuery.merge([],parsed.childNodes)
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)
}var selector,type,response,self=this,off=url.indexOf(" ");
if(off>=0){selector=jQuery.trim(url.slice(off));
url=url.slice(0,off)
}if(jQuery.isFunction(params)){callback=params;
params=undefined
}else{if(params&&typeof params==="object"){type="POST"
}}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;
self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)
}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])
})
}return this
};
jQuery.noConflict=function(){};
return jQuery;
return jQuery
}))
},{}],12:[function(require,module,exports){module.exports=function(document){return{reload:function(){return document.location.reload()
},getHash:function(){return document.location.hash
},setHash:function(newHash){return document.location.hash=newHash
},changeHref:function(newLocation){return document.location.href=newLocation
}}
}
},{}],13:[function(require,module,exports){var useCache;
useCache=function(callback){var cacheobj;
cacheobj=localStorage.getItem("oauthio_cache");
if(cacheobj){cacheobj=JSON.parse(cacheobj)
}else{cacheobj={}
}return callback(cacheobj,function(){return localStorage.setItem("oauthio_cache",JSON.stringify(cacheobj))
})
};
module.exports={init:function(config,document){this.config=config;
return this.document=document
},active:function(){return typeof localStorage!=="undefined"&&localStorage!==null
},create:function(name,value,expires){var date;
this.erase(name);
date=new Date();
localStorage.setItem(name,value);
useCache(function(cacheobj,cacheupdate){cacheobj[name]=expires?date.getTime()+(expires||1200)*1000:false;
return cacheupdate()
})
},read:function(name){return useCache(function(cacheobj,cacheupdate){if(cacheobj[name]==null){return null
}if(cacheobj[name]===false){return localStorage.getItem(name)
}else{if((new Date()).getTime()>cacheobj[name]){localStorage.removeItem(name);
delete cacheobj[name];
cacheupdate();
return null
}else{return localStorage.getItem(name)
}}})
},erase:function(name){return useCache(function(cacheobj,cacheupdate){localStorage.removeItem(name);
delete cacheobj[name];
return cacheupdate()
})
},eraseFrom:function(prefix){useCache(function(cacheobj,cacheupdate){var cachenames,i,len,name;
cachenames=Object.keys(cacheobj);
for(i=0,len=cachenames.length;
i<len;
i++){name=cachenames[i];
if(name.substr(0,prefix.length)===prefix){localStorage.removeItem(name);
delete cacheobj[name]
}}return cacheupdate()
})
}}
},{}],14:[function(require,module,exports){var b64pad,hexcase;
hexcase=0;
b64pad="";
module.exports={hex_sha1:function(s){return this.rstr2hex(this.rstr_sha1(this.str2rstr_utf8(s)))
},b64_sha1:function(s){return this.rstr2b64(this.rstr_sha1(this.str2rstr_utf8(s)))
},any_sha1:function(s,e){return this.rstr2any(this.rstr_sha1(this.str2rstr_utf8(s)),e)
},hex_hmac_sha1:function(k,d){return this.rstr2hex(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)))
},b64_hmac_sha1:function(k,d){return this.rstr2b64(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)))
},any_hmac_sha1:function(k,d,e){return this.rstr2any(this.rstr_hmac_sha1(this.str2rstr_utf8(k),this.str2rstr_utf8(d)),e)
},sha1_vm_test:function(){return thishex_sha1("abc").toLowerCase()==="a9993e364706816aba3e25717850c26c9cd0d89d"
},rstr_sha1:function(s){return this.binb2rstr(this.binb_sha1(this.rstr2binb(s),s.length*8))
},rstr_hmac_sha1:function(key,data){var bkey,hash,i,ipad,opad;
bkey=this.rstr2binb(key);
if(bkey.length>16){bkey=this.binb_sha1(bkey,key.length*8)
}ipad=Array(16);
opad=Array(16);
i=0;
while(i<16){ipad[i]=bkey[i]^909522486;
opad[i]=bkey[i]^1549556828;
i++
}hash=this.binb_sha1(ipad.concat(this.rstr2binb(data)),512+data.length*8);
return this.binb2rstr(this.binb_sha1(opad.concat(hash),512+160))
},rstr2hex:function(input){var e,hex_tab,i,output,x;
try{hexcase
}catch(_error){e=_error;
hexcase=0
}hex_tab=(hexcase?"0123456789ABCDEF":"0123456789abcdef");
output="";
x=void 0;
i=0;
while(i<input.length){x=input.charCodeAt(i);
output+=hex_tab.charAt((x>>>4)&15)+hex_tab.charAt(x&15);
i++
}return output
},rstr2b64:function(input){var e,i,j,len,output,tab,triplet;
try{b64pad
}catch(_error){e=_error;
b64pad=""
}tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
output="";
len=input.length;
i=0;
while(i<len){triplet=(input.charCodeAt(i)<<16)|(i+1<len?input.charCodeAt(i+1)<<8:0)|(i+2<len?input.charCodeAt(i+2):0);
j=0;
while(j<4){if(i*8+j*6>input.length*8){output+=b64pad
}else{output+=tab.charAt((triplet>>>6*(3-j))&63)
}j++
}i+=3
}return output
},rstr2any:function(input,encoding){var dividend,divisor,full_length,i,output,q,quotient,remainders,x;
divisor=encoding.length;
remainders=Array();
i=void 0;
q=void 0;
x=void 0;
quotient=void 0;
dividend=Array(Math.ceil(input.length/2));
i=0;
while(i<dividend.length){dividend[i]=(input.charCodeAt(i*2)<<8)|input.charCodeAt(i*2+1);
i++
}while(dividend.length>0){quotient=Array();
x=0;
i=0;
while(i<dividend.length){x=(x<<16)+dividend[i];
q=Math.floor(x/divisor);
x-=q*divisor;
if(quotient.length>0||q>0){quotient[quotient.length]=q
}i++
}remainders[remainders.length]=x;
dividend=quotient
}output="";
i=remainders.length-1;
while(i>=0){output+=encoding.charAt(remainders[i]);
i--
}full_length=Math.ceil(input.length*8/(Math.log(encoding.length)/Math.log(2)));
i=output.length;
while(i<full_length){output=encoding[0]+output;
i++
}return output
},str2rstr_utf8:function(input){var i,output,x,y;
output="";
i=-1;
x=void 0;
y=void 0;
while(++i<input.length){x=input.charCodeAt(i);
y=(i+1<input.length?input.charCodeAt(i+1):0);
if(55296<=x&&x<=56319&&56320<=y&&y<=57343){x=65536+((x&1023)<<10)+(y&1023);
i++
}if(x<=127){output+=String.fromCharCode(x)
}else{if(x<=2047){output+=String.fromCharCode(192|((x>>>6)&31),128|(x&63))
}else{if(x<=65535){output+=String.fromCharCode(224|((x>>>12)&15),128|((x>>>6)&63),128|(x&63))
}else{if(x<=2097151){output+=String.fromCharCode(240|((x>>>18)&7),128|((x>>>12)&63),128|((x>>>6)&63),128|(x&63))
}}}}}return output
},str2rstr_utf16le:function(input){var i,output;
output="";
i=0;
while(i<input.length){output+=String.fromCharCode(input.charCodeAt(i)&255,(input.charCodeAt(i)>>>8)&255);
i++
}return output
},str2rstr_utf16be:function(input){var i,output;
output="";
i=0;
while(i<input.length){output+=String.fromCharCode((input.charCodeAt(i)>>>8)&255,input.charCodeAt(i)&255);
i++
}return output
},rstr2binb:function(input){var i,output;
output=Array(input.length>>2);
i=0;
while(i<output.length){output[i]=0;
i++
}i=0;
while(i<input.length*8){output[i>>5]|=(input.charCodeAt(i/8)&255)<<(24-i%32);
i+=8
}return output
},binb2rstr:function(input){var i,output;
output="";
i=0;
while(i<input.length*32){output+=String.fromCharCode((input[i>>5]>>>(24-i%32))&255);
i+=8
}return output
},binb_sha1:function(x,len){var a,b,c,d,e,i,j,olda,oldb,oldc,oldd,olde,t,w;
x[len>>5]|=128<<(24-len%32);
x[((len+64>>9)<<4)+15]=len;
w=Array(80);
a=1732584193;
b=-271733879;
c=-1732584194;
d=271733878;
e=-1009589776;
i=0;
while(i<x.length){olda=a;
oldb=b;
oldc=c;
oldd=d;
olde=e;
j=0;
while(j<80){if(j<16){w[j]=x[i+j]
}else{w[j]=this.bit_rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1)
}t=this.safe_add(this.safe_add(this.bit_rol(a,5),this.sha1_ft(j,b,c,d)),this.safe_add(this.safe_add(e,w[j]),this.sha1_kt(j)));
e=d;
d=c;
c=this.bit_rol(b,30);
b=a;
a=t;
j++
}a=this.safe_add(a,olda);
b=this.safe_add(b,oldb);
c=this.safe_add(c,oldc);
d=this.safe_add(d,oldd);
e=this.safe_add(e,olde);
i+=16
}return Array(a,b,c,d,e)
},sha1_ft:function(t,b,c,d){if(t<20){return(b&c)|((~b)&d)
}if(t<40){return b^c^d
}if(t<60){return(b&c)|(b&d)|(c&d)
}return b^c^d
},sha1_kt:function(t){if(t<20){return 1518500249
}else{if(t<40){return 1859775393
}else{if(t<60){return -1894007588
}else{return -899497514
}}}},safe_add:function(x,y){var lsw,msw;
lsw=(x&65535)+(y&65535);
msw=(x>>16)+(y>>16)+(lsw>>16);
return(msw<<16)|(lsw&65535)
},bit_rol:function(num,cnt){return(num<<cnt)|(num>>>(32-cnt))
},create_hash:function(){var hash;
hash=this.b64_sha1((new Date()).getTime()+":"+Math.floor(Math.random()*9999999));
return hash.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"")
}}
},{}],15:[function(require,module,exports){module.exports=function(document){return{getAbsUrl:function(url){var base_url;
if(url.match(/^.{2,5}:\/\//)){return url
}if(url[0]==="/"){return document.location.protocol+"//"+document.location.host+url
}base_url=document.location.protocol+"//"+document.location.host+document.location.pathname;
if(base_url[base_url.length-1]!=="/"&&url[0]!=="#"){return base_url+"/"+url
}return base_url+url
},replaceParam:function(param,rep,rep2){param=param.replace(/\{\{(.*?)\}\}/g,function(m,v){return rep[v]||""
});
if(rep2){param=param.replace(/\{(.*?)\}/g,function(m,v){return rep2[v]||""
})
}return param
}}
}
},{}]},{},[8])(8)
});
var informaGlobal=window.informaGlobal||{};
informaGlobal.mock=informaGlobal.mock||{};
informaGlobal.mock=(function(d,c,a,e){var b={};
b.init=function(){};
b.pageLoad=function(){};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.mock.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.helpers=(function(d,c,a,e){var b={};
b.init=function(){};
b.getMDMID=function(){var l=informaGlobal.helpers.getCookie("informaId");
var g=atob(l);
var h=g.split("|");
var k="";
for(var f=0;
f<h.length;
f++){var m=h[f].split("%");
if(m[0]==="utm_MDMContactID"){k=m[1];
return k
}}return null
};
b.getQueryParameters=function(){var g=location.search.substr(1);
var f={};
g.split("&").forEach(function(h){var j=h.split("=");
f[j[0]]=decodeURIComponent(j[1])
});
return f
};
b.conversion=function(f){if(f=="false"){f=false
}if(f=="true"){f=true
}return f
};
b.getCookie=function(h){var g=h+"=";
var f=a.cookie.split(";");
for(var j=0;
j<f.length;
j++){var k=f[j];
while(k.charAt(0)==" "){k=k.substring(1)
}if(k.indexOf(g)==0){return k.substring(g.length,k.length)
}}return""
};
b.setCookie=function(h,g){var j=new Date();
j.setTime(j.getTime()+(g*24*60*60*1000));
var f="expires="+j.toUTCString();
a.cookie="informaId="+h+";"+f+";path=/"
};
b.getSatelliteTrackFormSuccess=function(){try{_satellite.track("Form_Success")
}catch(f){console.log("getSatelliteTrackFormSuccess"+f)
}};
b.getSatelliteTrackFormError=function(){try{_satellite.track("Form_Error")
}catch(f){console.log("getSatelliteTrackFormError"+f)
}};
b.getMarketingClouldID=function(){try{if(c!=e&&c!=null&&c.s!=e&&c.s!=null){return c.s.marketingCloudVisitorID
}return null
}catch(f){console.log("getMarketingClouldID"+f)
}return null
};
b.getFormsCurrentTime=function(h){try{var n={"Default Form":"DF","Visitor Registration":"VR","Media Registration":"MR","Delegate Registration":"DR","Book A Stand":"BAS","Visa Form":"VF"};
var f=d(h).parents(".form-container");
var g=f.find(".formCategory").data("formcategoryvalue");
var j=f.find(".formCategory").data("formprefixvalue");
var l="";
if(typeof j!="undefined"){l=j
}else{l=n[g]
}var m=new Date();
var o=m.getTime();
return l+o
}catch(k){console.log("getFormsCurrentTime"+k)
}};
b.getHostName=function(g){try{var f=a.createElement("a");
f.href=g;
return f.hostname
}catch(h){}};
b.setCookieParams=function(){if(c.location.href.indexOf("?")!=-1){var j="";
var k=decodeURIComponent(c.location.href.slice(c.location.href.indexOf("?")+1));
var g=k.split("&");
for(var f=0;
f<g.length;
f++){var h=g[f].split("=");
j=j+h[0]+"%"+h[1];
if(g.length-1!=f){j=j+"|"
}}informaGlobal.helpers.setCookie(btoa(j),30)
}};
b.writeInsideDom=function(f,g){console.log(f+" :: "+g);
var h=setInterval(function(){var j=d("body");
if(typeof(j.find(f)[0])==="object"){j.find(f).html(g);
clearInterval(h)
}},500)
};
b.getUtmParameterValue=function(g){var f=g.split(":");
return f[1]
};
b.persistUrnData=function(h){try{if(sessionStorage!=e&&sessionStorage!=null){sessionStorage.setItem("urnData",JSON.stringify(h));
return
}}catch(g){}try{var j=new Date();
j.setTime(j.getTime()+(365*24*60*60*1000));
var f="expires="+j.toUTCString();
a.cookie="informa_urnData="+JSON.stringify(h)+";"+f+";path=/"
}catch(g){}};
b.clearUrnData=function(){try{if(sessionStorage!=e&&sessionStorage!=null){sessionStorage.setItem("urnData",null);
sessionStorage.removeItem("urnData")
}}catch(f){}a.cookie="informa_urnData=;Thu, 01 Jan 1970 00:00:01 GMT;path=/"
};
b.fetchUrnData=function(){try{if(sessionStorage!=e&&sessionStorage!=null){var h=sessionStorage.getItem("urnData");
if(h!=e&&h!=null){return JSON.parse(h)
}return null
}}catch(g){}try{var f=getCookie("informa_urnData");
if(f!=e&&f!=null){return JSON.parse(f)
}}catch(g){}return null
};
b.populateFormAndUTMparameters=function(){try{setTimeout(function(){var k=informaGlobal.helpers.getCookie("utm_parameters");
var B=informaGlobal.helpers.getCookie("promoCodeCookie");
var g="";
var m="";
var h="";
var x="";
var o="";
var w="";
var r="";
if(typeof B!="undefined"){w=informaGlobal.helpers.getUtmParameterValue(B);
if(w==e){w=""
}}if(typeof k!="undefined"){var v=k.split(",");
if(typeof v[0]!="undefined"){g=informaGlobal.helpers.getUtmParameterValue(v[0]);
if(g=="undefined"){g=""
}}if(typeof v[1]!="undefined"){m=informaGlobal.helpers.getUtmParameterValue(v[1]);
if(m=="undefined"){m=""
}}if(typeof v[2]!="undefined"){h=informaGlobal.helpers.getUtmParameterValue(v[2]);
if(h=="undefined"){h=""
}}if(typeof v[3]!="undefined"){r=informaGlobal.helpers.getUtmParameterValue(v[3]);
if(r=="undefined"){r=""
}}if(typeof v[4]!="undefined"){x=informaGlobal.helpers.getUtmParameterValue(v[4]);
if(x=="undefined"){x=""
}}if(typeof v[5]!="undefined"){o=informaGlobal.helpers.getUtmParameterValue(v[5]);
if(o=="undefined"){o=""
}}}var E=d("#thirdPartyFormDetails").val();
var j=d.parseJSON(E);
var p=d("#thirdPartyReportsuitID").val();
var A=Object.keys(j);
var l="reportSuite="+p+"&utm_source="+g+"&utm_medium="+m+"&utm_campaign="+h+"&utm_content="+x+"&utm_term="+o+"&utmMDMContactID="+r+"&PromoCode="+w;
if(a.getElementById("iFrameForm")){var u=a.getElementById("iFrameForm").src;
var z=d("<a>").prop("href",u).prop("hostname");
if(A.indexOf(z)!=-1){var q=j[z];
if(typeof q!="undefined"){var D=null;
var F=null;
var t=null;
var C=null;
if(typeof q==="string"){D=q.split(",");
F=D[0].substr(1,D[0].length);
t=D[1];
C=D[2].substr(0,D[2].length-1)
}else{D=q;
F=D[0];
t=D[1];
C=D[2]
}var y;
var n=l+"&formId="+F+"&formName="+t+"&formType="+C;
if(u.indexOf("?")!=-1){y=u+"&"+n
}else{y=u+"?"+n
}a.getElementById("iFrameForm").src=y
}}}d("a[href]").each(function(L,I){var M=d("<a>").prop("href",I).prop("hostname");
if(A.indexOf(M)!=-1){var G=j[M];
if(typeof G!="undefined"){var J=null;
var N=null;
var O=null;
var K=null;
if(typeof G==="string"){J=G.split(",");
N=J[0].substr(1,J[0].length);
O=J[1];
K=J[2].substr(0,J[2].length-1)
}else{J=G;
N=J[0];
O=J[1];
K=J[2]
}var H=l+"&formId="+N+"&formName="+O+"&formType="+K;
if(d(this).attr("href").indexOf("?")!=-1){d(I).attr("href",I+"&"+H)
}else{d(I).attr("href",I+"?"+H)
}}}})
},2000)
}catch(f){}};
b.pageLoad=function(){};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.helpers.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.page=informaGlobal.page||{};
informaGlobal.page=(function(d,c,a,e){var b={};
b.settings={intrVal:null,timer:null,modalForImageGallery:"",currentClone:[],commonFlexiselSettings:{visibleItems:5,itemsToScroll:1,animationSpeed:400,infinite:true,navigationTargetSelector:"#navigator",autoPlay:true,autoPlaySpeed:3000,pauseOnHover:true,responsiveBreakpoints:{mobilePortrait:{changePoint:480,visibleItems:1,itemsToScroll:1,infinite:true},mobileLandscape:{changePoint:640,visibleItems:2,itemsToScroll:1,infinite:true},tabletRange:{changePoint:991,visibleItems:3,itemsToScroll:1,infinite:true},desktop:{changePoint:1024,visibleItems:4,itemsToScroll:1,infinite:true}}},graphicFlexiselSettings:{visibleItems:3,itemsToScroll:1,animationSpeed:400,infinite:true,navigationTargetSelector:"#navigator",responsiveBreakpoints:{mobilePortrait:{changePoint:480,visibleItems:1,itemsToScroll:1,infinite:true},mobileLandscape:{changePoint:640,visibleItems:3,itemsToScroll:1,infinite:true}}}};
b.init=function(){};
b.pageLoad=function(){};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.page.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=(function(d,c,a,e){var b={};
b.init=function(){c.informaInitRecaptcha=this.initRecaptcha
};
b.initForms=function(){$bookStandFormOneAccessibility=d(".bookStandFormOne");
if($bookStandFormOneAccessibility.hasClass("form-alignments-fo1")){$bookStandFormOneAccessibility.find("form.informa-form").attr("role","form");
$bookStandFormOneAccessibility.find("form.informa-form").find(".tooltip-mobile").attr("role","tooltip")
}};
b.formRedirectionURL=function(){d.fn.serializeObject=function(){var g=this;
console.log(this);
var h={};
var f=d(g).serializeArray();
d.each(f,function(){if(h[this.name]!==e){if(!h[this.name].push){h[this.name]=[h[this.name]]
}h[this.name].push(this.value||null)
}else{h[this.name]=this.value||null
}});
return h
}
};
b.checkCountry=function(j,f){var h=d(j).find(".element-addressState");
var k=/^[a-zA-Z0-9\s]{0,10}$/g;
if(f.val()=="US"){k=/(^\d{5}$)|(^\d{5}-\d{4}$)/g
}else{if(f.val()=="CA"){k=/^[a-zA-Z]\d{1}[a-zA-Z](\s)\d{1}[a-zA-Z]\d{1}$/g
}else{k=/^[a-zA-Z0-9\s]{0,10}$/g
}}var g=d(j).find(".element-addressPostcode");
g.attr("data-validation-pattern",k);
if(h.length>0){if(f.val()=="US"||f.val()=="CA"){if(h.val().length>2){h.val("")
}h.attr("maxlength",2)
}else{h.attr("maxlength",60)
}}};
b.checkCountryOfResidence=function(j,k){if(informaGlobal.forms.countryData==e||informaGlobal.forms.countryData==null){informaGlobal.forms.loadCountryData()
}var m=d(j).find(".subscriptionDiv");
var p=d(j).find(".optInSelect");
var q=d(j).find(".optInCheckbox");
var g=d(j).find(".subscriptionType");
var r=d(j).find(".subscription_privacy_statement");
var o=d(j).find(".stateOfResidenceDiv");
var n=d(j).find(".stateOfResidenceSelect");
try{var l=informaGlobal.forms.getSubscriptionType(k[0].value);
var v=informaGlobal.forms.getStateProvinceList(k[0].value);
var h=l.toLowerCase();
var u=d(j).find("."+h+"Subscription");
var f=d(j).find("."+h+"Select");
if(v!=null&&v.constructor===Object&&Object.keys(v).length!=0){n.attr("data-validation-required","true");
n.empty();
n.append(d("<option></option>").attr("value","").attr("disabled","true").attr("selected","true").text("Select State of Residence"));
d.each(v,function(x,w){n.append(d("<option></option>").attr("value",x).text(w))
});
o.show()
}else{n.attr("data-validation-required","false");
o.hide()
}g.val(l);
m.hide();
r.hide();
u.show();
p.attr("data-validation-required","false");
q.attr("data-validation-required","false");
f.attr("data-validation-required","true");
if(h=="relaxed"){d(j).find(".relaxedcheckbox").attr("data-validation-required","true")
}}catch(t){}};
b.loadCountryData=function(){d.ajax({type:"GET",url:"/content/data/informa/servlet/subscriptions",success:function(f){informaGlobal.forms.countryData=new Object();
if(f!==null&&f.hasOwnProperty("countryData")){for(var g=0;
g<f.countryData.length;
++g){informaGlobal.forms.countryData[f.countryData[g].countryCode]=f.countryData[g]
}}}})
};
b.isGdpr=function(g){var f=informaGlobal.forms.getSubscriptionType(g);
return(f=="GDPR"||f=="CASL")
};
b.getSubscriptionType=function(g){var f="STANDARD";
if(informaGlobal.forms.countryData!=e&&informaGlobal.forms.countryData!=null&&informaGlobal.forms.countryData[g]!=e){f=informaGlobal.forms.countryData[g].subscriptionType
}return f
};
b.getStateProvinceList=function(g){var h=null;
var f={};
if(informaGlobal.forms.countryData!=e&&informaGlobal.forms.countryData!=null&&informaGlobal.forms.countryData[g]!=e&&informaGlobal.forms.countryData[g].stateProvinceList!=e){h=informaGlobal.forms.countryData[g].stateProvinceList;
Object.keys(h).sort().forEach(function(j){f[j]=h[j]
})
}return f
};
b.updateOptIn=function(k,l){var h=k.find(".country-of-residence-hidden-field");
var j=l.countryOfResidence;
if(h==null&&l.personalShippingAddressCountry==null){l.personalShippingAddressCountry=j
}if(informaGlobal.forms.isGdpr(j)){var m="false";
var f=(l.marketingOptInCasl=="yes")?"true":null;
l.marketingOptIn=f;
l.marketingOptInPrefType=(f)?"not_null":"";
l.marketingCheckBoxAuthoredToTrue=m;
var g=(l.thirdPartyOptInCasl=="yes")?"true":null;
l.thirdPartyOptIn=g;
l.thirdPartyOptInPrefType=(g)?"not_null":"";
l.thirdPartyCheckBoxAuthoredToTrue=m
}else{if(l.marketingCheckBoxAuthoredToTrue=="true"&&l.marketingOptIn==null){l.marketingCheckBoxAuthoredToTrue="false"
}if(l.marketingCheckBoxAuthoredToTrue=="false"&&l.marketingOptIn=="true"){l.marketingCheckBoxAuthoredToTrue="false"
}if(l.thirdPartyCheckBoxAuthoredToTrue=="true"&&l.thirdPartyOptIn==null){l.thirdPartyCheckBoxAuthoredToTrue="false"
}if(l.thirdPartyCheckBoxAuthoredToTrue=="false"&&l.thirdPartyOptIn=="true"){l.thirdPartyCheckBoxAuthoredToTrue="false"
}}return l
};
b.postFormErrorsToAnalytics=function(l){var k=d(l).find(".element-validation-error");
var n=k.length;
var g="";
for(var f=0;
f<n;
f++){try{if(d("#"+k[f].id).closest("div.form-group").hasClass("has-error")){g+=k[f].id+":"+d("#"+k[f].id).closest(".form-group").find("small").text()+" &"
}}catch(m){}}if(g.length>0){g=g.substring(0,g.length-1)
}if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var h=digital_data[0];
h.pagedata.analyticsFormFieldError=g
}d(l).find('[name="analyticsFormFieldErrors"]').val(g);
try{_satellite.track("Form_Field_Errors")
}catch(j){console.log("Form_Field_Errors"+j)
}};
b.initInformaForm=function(j){var g=d(j).parents(".form-container");
var f=g.find(".form-title-container").data("formtitlevalue");
d(j).find("input[name='formTitle']").val(f);
d(j).find("[name='title']").change(function(){var m=d(this).find("option:selected").text();
var l=d(this).val();
d(j).find("[name='titleSelectedText']").val(m)
});
var h=d(j).find(".element-addresscountry");
informaGlobal.forms.checkCountry(j,h);
var k=d(j).find(".element-countryofresidence");
d(k).on("change",function(){informaGlobal.forms.checkCountryOfResidence(j,k)
});
informaGlobal.forms.checkCountryOfResidence(j,k);
d(j).find("[name='DownloadPDF']").click(function(){d(j).on("submit",function(){d(j).attr("action","/content/data/informa/servlet/pdfform.html")
})
});
d(j).find(".form-submit").on("click",function(q){var p=d(j).parsley().validate();
console.log("ValidationResults: "+p);
if(!d(j).parsley().isValid()){informaGlobal.forms.postFormErrorsToAnalytics(j);
q.preventDefault()
}return;
if(d(j).parsley().isValid()){var r=d(j).find("[name='paymentMethod']").val();
var w=d(j).find("[name='sessionId']").val();
var x=this;
if(!q.isDefaultPrevented()){q.preventDefault();
if(informaGlobal.forms.validation.activeEle==e||informaGlobal.forms.validation.activeEle==null||informaGlobal.forms.validation.activeEle.nodeName==e||d(informaGlobal.forms.validation.activeEle).val()!="DownloadPDF"){d.fn.serializeObject=function(){var z=this;
console.log(this);
var A={};
var y=d(z).serializeArray();
d.each(y,function(){if(A[this.name]!==e){if(!A[this.name].push){A[this.name]=[A[this.name]]
}A[this.name].push(this.value||null)
}else{A[this.name]=this.value||null
}});
if(email_disabed_val=="Yes"){A.emailPreference="Yes"
}else{A.emailPreference="No"
}return A
};
var o={};
o=d(j).serializeObject();
var t=Math.ceil(Math.random()*100);
o.mcID=informaGlobal.helpers.getMarketingClouldID();
var n=JSON.stringify(o);
var v=d(j).find("[name='fileToUpload']").val();
var m;
if(v!=e&&v!=null){m=d(j).find("[name='fileToUpload']")[0].files[0]
}if(w==e&&w==null){w=0
}if(r==e&&r==null){r="Nopay"
}var u=d(j).find("[name='currentPagePath']").val();
var l=new FormData();
l.append("fileToUpload",m);
l.append("pagePath",u);
console.log(n);
if(m!=e&&m!=null){d(j).find(".submit-loadgif span").show();
d.ajax({type:"POST",url:"/content/data/informa/servlet/box",processData:false,contentType:false,data:l,success:function(A){d(j).find(".submit-loadgif span").hide();
var z=jQuery.parseJSON(A);
var y=z.boxUrl;
console.log("Box URl::::::"+y);
informaGlobal.forms.events.fileUpload[j]=y;
console.log(informaGlobal.forms.events.fileUpload[j]);
if(z.Status=="true"&&!(r=="PM_CRDTCRD"||r=="PM_DEBTCRD")){console.log(w+" :: "+typeof(w));
informaGlobal.forms.events.handleFormSubmit(j,w);
q.preventDefault()
}else{if(z.Status=="true"&&(r=="PM_CRDTCRD"||r=="PM_DEBTCRD")){console.log("Box:Calling registrationFormValidation");
console.log(w+" :: "+typeof(w));
informaGlobal.forms.validation.formValidator(j,w);
q.preventDefault()
}else{d(j).find("small.file-upload-failed").css("display","block").html("File Upload Failed")
}}},error:function(y,A,z){alert("Status1: "+A);
alert("Error: "+z)
}})
}else{if(r=="PM_CRDTCRD"||r=="PM_DEBTCRD"){console.log(w+" :: "+typeof(w));
informaGlobal.forms.validation.formValidator(j,w);
q.preventDefault()
}else{console.log(w+" :: "+typeof(w));
informaGlobal.forms.events.handleFormSubmit(j,w);
q.preventDefault()
}}}}}else{q.preventDefault()
}})
};
b.initRecaptcha=function(){var f=d("div.informa-form").parents("form");
f.each(function(h,k){console.log("init captcha"+h);
var j=d(k).find(".g-recaptcha");
if(j.length==0){return
}j.attr("data-validation-required","true");
j.addClass("informa-validated-field");
var l=d(k).find(".g-recaptcha")[0];
var g=grecaptcha.render(l,{sitekey:j.data("sitekey"),callback:informaGlobal.forms.createRecaptchaCallback(k),"expired-callback":informaGlobal.forms.createRecaptchaInvalidateCallback(k)});
j.data("captcha-client-id",g);
d(k).parsley({namespace:"data-validation-"}).refresh();
j.parsley({value:informaGlobal.forms.createRecaptchaValueProvider(k)})
})
};
b.createRecaptchaValueProvider=function(g){var f=function(k){var h=d(g).find(".g-recaptcha");
var j=grecaptcha.getResponse(h.data("captcha-client-id"));
return j
};
return f
};
b.createRecaptchaCallback=function(g){var f=function(h){informaGlobal.forms.events.handleRecaptchaCallback(g,h)
};
return f
};
b.createRecaptchaInvalidateCallback=function(g){var f=function(h){informaGlobal.forms.events.handleRecaptchaInvalidate(g)
};
return f
};
b.pageLoad=function(){var f=this;
this.loadCountryData();
this.pageForms=d("div.informa-form").parents("form");
this.pageForms.addClass("informa-form");
this.pageForms.parsley({namespace:"data-validation-",inputs:"input,textarea,select,.informa-validated-field",errorClass:"parsley-error element-validation-error",errorsContainer:function(k){try{if(d(k.element).hasClass("element-formsessionid")){console.log("container?");
console.log(k);
var h=d(k.element).parents(".options-set");
console.log(h);
return h
}var g=d(k.element).data("parsley-multiple");
if(g!=e&&g!=null&&g!=""){var h=d(k.element).closest(".form-group");
return h
}var g=d(k.element).data("validation-multiple");
if(g!=e&&g!=null&&g!=""){var h=d(k.element).closest(".form-group");
return h
}var l=d(k.element).attr("name");
if(l=="communicationPreferenceCheck"||l=="communicationPreferenceCheck[]"){var h=d(k.element).closest(".form-group");
return h
}var h=d(k.element).closest(".form-group");
if(h.length>0){return h
}else{return d(k.element).parent()
}}catch(j){}return e
},errorsWrapper:'<ul class="parsley-errors-list error-help-block"></ul>'});
this.initForms();
console.log(this.pageForms);
this.pageForms.each(function(g,h){f.initInformaForm(h)
})
};
b.documentReady=function(){if(d("div.informa-form").length!=0){informaGlobal.page.events.checkPaymentErrorMsg()
}};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.events=(function(d,c,a,e){var b={};
b.fileUpload={};
b.init=function(){};
b.pageLoad=function(){var f=[];
f={forms:informaGlobal.forms,"forms.elements":informaGlobal.forms.elements,"forms.validation":informaGlobal.forms.validation,"forms.lang":informaGlobal.forms.lang,"forms.validation.misc":informaGlobal.forms.validation.misc,"forms.validation.fields":informaGlobal.forms.validation.fields,"forms.prepopulate":informaGlobal.forms.prepopulate};
for(var g in f){try{var k=f[g];
if(k!=e&&k!=null){if(typeof k.pageLoad==="function"){var j=k.pageLoad.bind(k);
j()
}else{console.warn(g+" does not contain pageLoad")
}}else{console.error("Could not initialize pageLoad for "+g)
}}catch(h){console.error("Exception caught for pageLoad: "+g,h)
}}d(".reset-btn").on("click",this.handleResetForm);
d("#TermsandConditions").click(this.handleTermsAndConditions);
d("#preferencewithInforma").click(this.handleCommunicationPreferences);
d(".is-primary-checkbox").change(this.handlePrimaryCheckBox);
d(".resetdate").on("click",this.handleDatePickerReset);
d(".informa-form-element.marketingOptIn, .informa-form-element.similarEventsOptIn, .informa-form-element.thirdPartyOptIn").click(this.handleOptInsClick);
d(".informa-form-element.marketingOptInSelect, .informa-form-element.similarEventsOptInSelect, .informa-form-element.thirdPartyOptInSelect").on("change",this.handleOptInsChange);
d(".glyphicon-eye-open").on("click",this.handlePersonalizationClick)
};
b.handleDatePickerReset=function(){var k=d("body");
var j=k.find(".datepicker-dropdown");
var h=k.find(".datepicker-dropdown tr td");
var g=k.find(".datepicker-dropdown tr td.active");
var f=k.find(".datepicker-dropdown table");
h.attr({role:"gridcell","aria-selected":"false"});
f.attr({role:"grid","aria-labelledby":"month"});
j.find(".datepicker-switch").attr({role:"heading","aria-live":"assertive","aria-atomic":"true"});
if(d(".day").hasClass("active")){g.attr({"aria-selected":"true"})
}};
b.handleResetForm=function(){var g=d(this).parents("form");
g.find(".element-file-box").html(" ");
g.find(".file-upload-failed").hide();
g.find("#quickSignupdiv").hide();
g.find(".is-primary-checkbox").prop("disabled",false);
g.find(".resetdate").datepickerBootstrap("update","");
try{grecaptcha.reset(g.find(".g-recaptcha").data("captcha-client-id"))
}catch(f){console.log("exception occured in google recaptcha handler")
}g.Parsley.reset()
};
b.handleTermsAndConditions=function(){var f=d(this).parents("form");
if(d(this).is(":checked")){d(f).find(".form-submit").removeAttr("disabled","disabled")
}else{d(f).find(".form-submit").attr("disabled","disabled")
}};
b.handleCommunicationPreferences=function(){var f=d(this).parents("form");
if(d(this).is(":checked")){$form.find(".preferencedcommuwithInforma-options").removeClass("hide");
$form.find(".preferencedcommuwithInforma-channels").removeClass("hide")
}else{$form.find(".preferencedcommuwithInforma-options").addClass("hide");
$form.find(".preferencedcommuwithInforma-channels").addClass("hide")
}};
b.handlePersonalizationClick=function(){var f=d(this).prev("input");
(f.attr("type")==="password")?f.attr("type","text"):f.attr("type","password")
};
b.handlePrimaryCheckBox=function(){var f=d(".is-primary-checkbox:not(:checked)");
if(d(".is-primary-checkbox:checked").length==1){f.prop("disabled",true);
f.prop("disabled",true).parents(".is-primary-input-div").find(".error-help-block").css("display","none")
}else{f.prop("disabled",false)
}};
b.handleFormSubmit=function(h,r){d(h).find("input[name='mcID']").val(informaGlobal.helpers.getMarketingClouldID());
var C="";
if(d(h).find("[name='priorityCode']").length>0){C=d(h).find("[name='priorityCode']").val()
}var q={};
q=d(h).serializeObject();
var I=Math.ceil(Math.random()*100);
q.mcID=informaGlobal.helpers.getMarketingClouldID();
q.sessionPrice=r;
if(informaGlobal.forms.events.fileUpload[h]!=e&&informaGlobal.events.events.fileUpload[h]!=null){q.fileUploadURL=informaGlobal.forms.events.fileUpload[h]
}console.log("fileUpload:::"+informaGlobal.forms.events.fileUpload[h]);
var E=[];
var v=d(h).find(".demographic_gender");
var F=1;
d(h).find(".demographic-questions").each(function(){var M="";
var N="";
var O=1;
var P=0;
d(this).find("input").each(function(){switch(true){case (d(this).attr("type")=="text"):M=d(this).attr("name");
N=d(this).val();
(N!="")?E.push(M+"|"+N+"|"+F):"";
F++;
break;
case (d(this).attr("type")=="radio"):M=d(this).attr("name");
P=d(this).parent().parent().children("div").length;
if(d(this).is(":checked")){N=d(this).val();
E.push(M+"|"+N+"|"+F);
F++;
O=P
}else{if(P==O){N="";
E.push(M+"|"+N+"|"+F);
F++;
O=0
}}O++;
break;
default:break
}})
});
if(E!=""&&E!=null&&E!=e){q.demographicQuestions=E
}var p=[];
var A=d(h).find("input[type=checkbox].natureOfBusinessValues:checked");
d(A).each(function(){p.push(d(this).val())
});
if(p!=""&&p!=null&&p!=e){q.natureOfBusiness=p
}var n=[];
var w=d(h).find("input[type=checkbox].interestLevelValues:checked");
d(w).each(function(){n.push(d(this).val())
});
if(n!=""&&n!=null&&n!=e){q.interestLevel=n
}var y="";
var L;
var G="";
var K;
var l="";
var J;
var m=informaGlobal.helpers.getCookie("informaId");
var u=atob(m);
var x=u.split("|");
for(var B=0;
B<x.length;
B++){var t=x[B].split("%");
if(t[0]==="utm_content"){L=t[1]
}if(t[0]==="utm_refcode"){K=t[1]
}if(t[0]==="utm_term"){J=t[1]
}}var g="";
var o="";
var k="";
try{var m=informaGlobal.helpers.getCookie("utm_parameters");
if(typeof m!="undefined"){var D=m.split(",");
for(var B=0;
B<D.length;
B++){var f=D[B].split(":");
if(f[0]==="utm_source"&&f[1].indexOf("undefined")==-1){l=f[1]
}if(f[0]==="utm_campaign"&&f[1].indexOf("undefined")==-1){y=f[1]
}if(f[0]==="utm_medium"&&f[1].indexOf("undefined")==-1){G=f[1]
}}}}catch(H){console.log("error occured while procesing utm parameters")
}q.utmCampaign=y;
q.utmContent=L;
q.utmMedium=G;
q.utmRefCode=K;
q.utmSource=l;
q.utmTerm=J;
q.uRN=informaGlobal.helpers.getFormsCurrentTime(h);
console.log("object value"+JSON.stringify(q));
var z=JSON.stringify(q);
d.ajax({type:"POST",url:"/content/data/informa/servlet/formsubmit.html",data:{postdata:z},success:function(O){console.log("submit",O);
var M=jQuery.parseJSON(O);
var N=M.formStatus;
var j=M.quickSignupMessage;
console.log("Success");
if(N=="true"){console.log("if true");
var R="";
if(q.businessEmailAddress!=null){R=q.thankyouPage+"?emailID="+q.businessEmailAddress+"&uRN="+q.uRN+"&quickSignupMessage="+j+"&priorityCode="+C;
if(q.urlValue!=null){R=R+"&urlValue="+q.urlValue+"&downloadLabel="+q.downloadLabel+"&downloadImage="+q.downloadImage+"&downloadAltText="+q.downloadAltText;
console.log("Load URL --> "+R)
}c.name=q.businessEmailAddress+"/"+q.uRN+"/"+j;
informaGlobal.helpers.persistUrnData({email:q.businessEmailAddress,urn:q.uRN,signup:j})
}if(q.personalEmailAddress!=null){R=q.thankyouPage+"?emailID="+q.personalEmailAddress+"&uRN="+q.uRN+"&quickSignupMessage="+j+"&priorityCode="+C;
if(q.urlValue!=null){R=R+"&urlValue="+q.urlValue+"&downloadLabel="+q.downloadLabel+"&downloadImage="+q.downloadImage+"&downloadAltText="+q.downloadAltText;
console.log("Load URL --> "+R)
}c.name=q.personalEmailAddress+"/"+q.uRN+"/"+j;
informaGlobal.helpers.persistUrnData({email:q.personalEmailAddress,urn:q.uRN,signup:j})
}c.location.href=R
}else{var Q=d(h).find(".formSubmissionModal").modal({backdrop:"static",keyboard:false,show:true});
Q.find(".modal-title").html("Error");
Q.find(".modal-body > p").html("Invalid Captcha");
informaGlobal.forms.events.enableSubmitButton(h);
d(h).find('[name="analyticsFormErrors"]').val("Form_Error");
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var P=digital_data[0];
P.pagedata.analyticsformError="Form_Error"
}informaGlobal.helpers.getSatelliteTrackFormError()
}},error:function(O){var N=d(h).find(".formSubmissionModal").modal({backdrop:"static",keyboard:false,show:true});
console.log(O);
var j=jQuery.parseJSON(O.responseText);
if(j.hasOwnProperty("emailValidationVO")&&j.emailValidationVO!=null){j.message=j.message.replace("${emailAddress}",j.emailValidationVO.emailAddress)
}N.find(".modal-title").html("Error");
N.find(".modal-body > p").html(j.message);
d(h).find('[name="analyticsFormErrors"]').val("Form_Error");
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var M=digital_data[0];
M.pagedata.analyticsformError="Form_Error"
}informaGlobal.helpers.getSatelliteTrackFormError()
}})
};
b.enableSubmitButton=function(f){d(f).find("input[type=submit]").removeAttr("disabled")
};
b.handleRecaptchaCallback=function(h,g){var f=d(h).find(".g-recaptcha");
f.parsley().validate({force:true})
};
b.handleRecaptchaInvalidate=function(h){var g=d(h).find('[name="formCaptchareqMesg"]').val();
var f=d(h).find(".g-recaptcha");
f.parsley().validate({force:true})
};
b.documentReady=function(){var f=[];
f={forms:informaGlobal.forms,"forms.elements":informaGlobal.forms.elements,"forms.validation":informaGlobal.forms.validation,"forms.lang":informaGlobal.forms.lang,"forms.validation.misc":informaGlobal.forms.validation.misc,"forms.validation.fields":informaGlobal.forms.validation.fields,"forms.prepopulate":informaGlobal.forms.prepopulate};
for(var g in f){try{var k=f[g];
if(k!=e&&k!=null){if(typeof k.documentReady==="function"){var j=k.documentReady.bind(k);
j()
}else{console.warn(g+" does not contain documentReady")
}}else{console.error("Could not initialize documentReady for "+g)
}}catch(h){console.error("Exception caught for documentReady: "+g,h)
}}};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.events.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.elements=(function(d,c,a,e){var b={};
b.init=function(){};
b.initDateOfBirth=function(){var f=new Date();
d("#dateOfBirth,.informa-form-element.element-DOB").datepickerBootstrap({format:"dd-mm-yyyy",endDate:f,autoclose:true}).on("hide changeDate",function(g){d(this).parsley().validate({force:true})
})
};
b.initArrivalDate=function(){d("#arrivalDate,.informa-form-element.element-arrivaldate").datepickerBootstrap({format:"dd-mm-yyyy",startDate:"-0d",autoclose:true}).on("hide changeDate",function(f){d(this).parsley().validate({force:true})
})
};
b.initDepartureDate=function(){d("#departureDate,.informa-form-element.element-departuredate").datepickerBootstrap({format:"dd-mm-yyyy",startDate:"-0d",autoclose:true}).on("hide changeDate",function(f){d(this).parsley().validate({force:true})
})
};
b.initPassportDates=function(){var f=new Date();
d("#passportExpiration,.informa-form-element.element-passportexpiration").datepickerBootstrap({format:"dd-mm-yyyy",startDate:"-0d",autoclose:true}).on("hide changeDate",function(g){d(this).parsley().validate({force:true})
});
d("#passportIssuedDate,.informa-form-element.element-passportissueddate").datepickerBootstrap({format:"dd-mm-yyyy",endDate:f,autoclose:true}).on("hide changeDate",function(g){d(this).parsley().validate({force:true})
})
};
b.initAddressCountry=function(){d(".element-addresscountry").on("change",function(f){form=d(this).parents("form");
informaGlobal.forms.checkCountry(form,d(this))
})
};
b.pageLoad=function(){this.initDateOfBirth();
this.initArrivalDate();
this.initDepartureDate();
this.initPassportDates();
this.initAddressCountry()
};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.elements.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.lang=(function(d,c,a,e){var b={};
b.init=function(){this.language="en"
};
b.setLanguage=function(f){this.langauge=f
};
b.messages={en:{required:"Please enter value","security question required":"Please Select value","security answer required":"Security answer is required","password required":"Password is required","confirm password required":"The confirm password is required","weak password":"Password is weak","passwords do not match":"Passwords do not match","invalid email":"The value is not valid","upload file":"Please upload a file"}};
b.t=function(f,g){if(g==null){g=this.language
}return this.messages[g][f]
};
b.otherMessages={answerRequiredMsg:d("#answerRequiredMsg").val(),firstNameRequiredMsg:d("#firstNameRequiredMsg").val(),lastNameRequiredMsg:d("#lastNameRequiredMsg").val(),emailRequiredMsg:d("#emailRequiredMsg").val(),passwordRequiredMessage:d("#passwordRequiredMessage").val(),confirmPasswordRequiredMessage:d("#confirmPasswordRequiredMessage").val(),signupLink:d("#signupLink").val()};
formID="";
b.pageLoad=function(){if(informaGlobal.forms.pageForms==e||informaGlobal.forms.pageForms==null){return
}informaGlobal.forms.pageForms.each(function(f,g){d(g).find(".informa-form-element").each(function(j,h){if(d(h).data("validation-required")=="true"&&d(h).data("validation-required-message")!=e&&d(h).data("validation-required-message").trim()==""){try{d(h).attr("data-validation-type-message",Parsley._validatorRegistry.catalog.en.required)
}catch(k){console.log("Couldn't find language for form validation")
}}if(d(h).data("validation-type")=="email"&&d(h).data("validation-type-message")!=e&&d(h).data("validation-type-message").trim()==""){try{d(h).attr("data-validation-type-message",Parsley._validatorRegistry.catalog.en.type.email)
}catch(k){console.log("Couldn't find language for form validation")
}}if((d(h).data("validation-pattern")!=e||d(h).attr("pattern")!=e)&&d(h).data("validation-pattern-message")!=e&&d(h).data("validation-pattern-message").trim()==""){try{d(h).attr("data-validation-type-message",Parsley._validatorRegistry.catalog.en.pattern)
}catch(k){console.log("Couldn't find language for form validation")
}}})
})
};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.lang.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.prepopulate=(function(d,c,a,e){var b={};
b.init=function(){b.userData=null
};
b.fetchUserData=function(f){if(f==e||f==null){return
}if(b.userData!=null){f(b.userData);
return
}var h=informaGlobal.helpers.getMarketingClouldID();
var j=informaGlobal.helpers.getMDMID();
var g=null;
if(typeof ContextHub!="undefined"&&ContextHub!=null&&ContextHub.getStore("profileinfo")!=null&&ContextHub.getStore("profileinfo").getItem("webProfileId")!=null&&ContextHub.getStore("profileinfo").getItem("webProfileId")!=""){g=ContextHub.getStore("profileinfo").getItem("webProfileId").toUpperCase()
}if((h!=e&&h!=null&&h!="")||(j!=e&&j!=null&&j!="")||(g!=e&&g!=null&&g!="")){d.ajax({type:"GET",url:"/content/data/informa/servlet/v2/formprepopulate",data:{webProfileID:g,mdmID:j,mcID:h},success:function(k){console.log(k);
b.userData=k;
f(b.userData)
}})
}};
b.pageLoad=function(){};
b.documentReady=function(){informaGlobal.forms.prepopulate.fetchUserData(function(f){if(informaGlobal.forms.pageForms==e||informaGlobal.forms.pageForms==null){return
}informaGlobal.forms.pageForms.each(function(g,h){for(var l in f){if(l.match(/[a-zA-Z0-9_-]+/g)){var j=d(h).find('[name="'+l+'"]');
if(j.length>0){j.val(f[l])
}else{console.log("Couldn't find field",l)
}}}var k=d(h).find(".element-countryofresidence");
informaGlobal.forms.checkCountryOfResidence(h,k)
})
})
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.lang.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.validation=(function(d,c,a,e){var b={};
b.init=function(){b.activeEle=null;
try{b.activeEle=a.activeElement
}catch(f){console.log("Couldn't fetch active element",f)
}c.Parsley.addValidator("recaptcha",{validateString:function(g){console.log(g);
if(/\S/.test(g)==false){return false
}return false
},priority:600,messages:{en:"Invalid captcha value"}})
};
b.pageLoad=function(){};
b.documentReady=function(){};
b.formValidator=function(g,o){console.log(" inside validation ");
var n={};
n=d(g).serializeObject();
var E=Math.ceil(Math.random()*100);
n.sessionPrice=o;
n.mcID=informaGlobal.helpers.getMarketingClouldID();
if(informaGlobal.forms.events.fileUpload[g]!=e&&informaGlobal.forms.events.fileUpload[g]!=null){n.fileUploadURL=informaGlobal.forms.events.fileUpload[g]
}var A=[];
var r=d(g).find(".demographic_gender");
var B=1;
d(g).find(".demographic-questions").each(function(){var I="";
var J="";
var K=1;
var L=0;
d(this).find("input").each(function(){switch(true){case (d(this).attr("type")=="text"):I=d(this).attr("name");
J=d(this).val();
(J!="")?A.push(I+"|"+J+"|"+B):"";
B++;
break;
case (d(this).attr("type")=="radio"):I=d(this).attr("name");
L=d(this).parent().parent().children("div").length;
if(d(this).is(":checked")){J=d(this).val();
A.push(I+"|"+J+"|"+B);
B++;
K=L
}else{if(L==K){J="";
A.push(I+"|"+J+"|"+B);
B++;
K=0
}}K++;
break;
default:break
}})
});
if(A!=""&&A!=null&&A!=e){n.demographicQuestions=A
}var m=[];
var x=d(g).find("input[type=checkbox].natureOfBusinessValues:checked");
d(x).each(function(){m.push(d(this).val())
});
if(m!=""&&m!=null&&m!=e){n.natureOfBusiness=m
}var l=[];
var t=d(g).find("input[type=checkbox].interestLevelValues:checked");
d(t).each(function(){l.push(d(this).val())
});
if(l!=""&&l!=null&&l!=e){n.interestLevel=l
}var v="";
var H;
var C="";
var F;
var h="";
var G;
var k=informaGlobal.helpers.getCookie("informaId");
var q=atob(k);
var u=q.split("|");
for(var y=0;
y<u.length;
y++){var p=u[y].split("%");
if(p[0]==="utm_content"){H=p[1]
}if(p[0]==="utmRefCode"){F=p[1]
}if(p[0]==="utm_term"){G=p[1]
}}try{var k=informaGlobal.helpers.getCookie("utm_parameters");
if(typeof k!="undefined"){var z=k.split(",");
for(var y=0;
y<z.length;
y++){var f=z[y].split(":");
if(f[0]==="utm_source"&&f[1].indexOf("undefined")==-1){h=f[1]
}if(f[0]==="utm_campaign"&&f[1].indexOf("undefined")==-1){v=f[1]
}if(f[0]==="utm_medium"&&f[1].indexOf("undefined")==-1){C=f[1]
}}}}catch(D){console.log("error occured while procesing utm parameters")
}n.utmCampaign=v;
n.utmContent=H;
n.utmMedium=C;
n.utmRefCode=F;
n.utmSource=h;
n.utmTerm=G;
n.uRN=informaGlobal.helpers.getFormsCurrentTime(g);
var w=JSON.stringify(n);
console.log("form validation data",w);
d.ajax({type:"POST",url:"/content/data/informa/servlet/formValidation.html",data:{postdata:w},success:function(I){console.log("validation",I);
var j=I;
if(j=="true"){c.location=n.paymentRedirection+"?q=Pay"
}else{var K=d(g).find(".formSubmissionModal").modal({backdrop:"static",keyboard:false,show:true});
K.find(".modal-title").html("Error");
K.find(".modal-body > p").html("Invalid Captcha");
d(g).find('[name="analyticsFormErrors"]').val("Form_Error");
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var J=digital_data[0];
J.pagedata.analyticsformError="Form_Error"
}informaGlobal.helpers.getSatelliteTrackFormError()
}},error:function(K,M,L){var J=d(g).find(".formSubmissionModal").modal({backdrop:"static",keyboard:false,show:true});
console.log(K);
var j=jQuery.parseJSON(K.responseText);
if(j.hasOwnProperty("emailValidationVO")&&j.emailValidationVO!=null){j.message=j.message.replace("${emailAddress}",j.emailValidationVO.emailAddress)
}J.find(".modal-title").html("Error");
J.find(".modal-body > p").html(j.message);
d(g).find('[name="analyticsFormErrors"]').val("Form_Error");
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var I=digital_data[0];
I.pagedata.analyticsformError="Form_Error"
}informaGlobal.helpers.getSatelliteTrackFormError()
}})
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.validation.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.validation=informaGlobal.forms.validation||{};
informaGlobal.forms.validation.fields=(function(d,c,a,e){var b={};
b.init=function(){};
b.isRequired=function(f,h){if(d(f).find(".element-"+h).length){var g=d(f).find(".element-"+h).data("validation-required");
if(g!=null&&(g=="true"||g==true)){return true
}}if(d(f).find("[name='"+h+"']").length){var g=d(f).find("[name='"+h+"']").data("validation-required");
if(g!=null&&(g=="true"||g==true)){return true
}}return false
};
b.getFieldRequiredMessage=function(f,h){if(d(f).find(".element-"+h).length){var g=d(f).find(".element-"+h).data("validation-message-required");
if(g!=null&&g!=""){return g
}}if(d(f).find("[name='"+h+"']").length){var g=d(f).find("[name='"+h+"']").data("validation-message-required");
if(g!=null&&g!=""){return g
}}return informaGlobal.forms.lang.t("required")
};
b.setupValidation=function(g){var f=informaGlobal.forms;
d(g).bootstrapValidator({feedbackIcons:{validating:"glyphicon glyphicon-refresh"},excluded:":disabled",fields:{firstName:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"firstName"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"firstName")}}},surname:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"surname"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"surname")}}},personalEmailAddress:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalemail"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalemail")},regexp:{regexp:"^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$",message:f.lang.t("invalid email")}}},businessEmailAddress:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessemail"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessemail")},regexp:{regexp:"^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$",message:f.lang.t("invalid email")}}},countryOfResidence:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"countryOfResidence"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"countryOfResidence")}}},personalBillingAddressLine1:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressLine1"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressLine1")}}},personalBillingAddressLine2:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressLine2"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressLine2")}}},personalBillingAddressLine3:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressLine3"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressLine3")}}},personalBillingAddressCity:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddresscity"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddresscity")}}},personalBillingAddressState:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressState"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressState")}}},personalBillingAddressPostcode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressPostcode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressPostcode")}}},personalBillingAddressPOBox:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalBillingaddressPObox"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddressPObox")}}},personalBillingAddressCountry:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"personalBillingaddresscountry"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalBillingaddresscountry")}}},businessBillingAddressLine1:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressLine1"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressLine1")}}},businessBillingAddressLine2:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressLine2"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressLine2")}}},businessBillingAddressLine3:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressLine3"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressLine3")}}},businessBillingAddressCity:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddresscity"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddresscity")}}},businessBillingAddressState:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressState"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressState")}}},businessBillingAddressPostcode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressPostcode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressPostcode")}}},businessBillingAddressPOBox:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessBillingaddressPObox"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddressPObox")}}},businessBillingAddressCountry:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"businessBillingaddresscountry"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessBillingaddresscountry")}}},personalShippingAddressLine1:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressLine1"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressLine1")}}},personalShippingAddressLine2:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressLine2"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressLine2")}}},personalShippingAddressLine3:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressLine3"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressLine3")}}},personalShippingAddressCity:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddresscity"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddresscity")}}},personalShippingAddressState:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressState"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressState")}}},personalShippingAddressPostcode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressPostcode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressPostcode")}}},personalShippingAddressPOBox:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalShippingaddressPObox"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddressPObox")}}},personalShippingAddressCountry:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"personalShippingaddresscountry"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalShippingaddresscountry")}}},businessShippingAddressLine1:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressLine1"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressLine1")}}},businessShippingAddressLine2:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressLine2"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressLine2")}}},businessShippingAddressLine3:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressLine3"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressLine3")}}},businessShippingAddressCity:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddresscity"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddresscity")}}},businessShippingAddressState:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressState"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressState")}}},businessShippingAddressPostcode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressPostcode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressPostcode")}}},businessShippingAddressPOBox:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessShippingaddressPObox"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddressPObox")}}},businessShippingAddressCountry:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"businessShippingaddresscountry"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessShippingaddresscountry")}}},jobTitle:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"jobtitle"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"jobtitle")}}},facebook:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"facebook"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"facebook")}}},instagram:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"instagram"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"instagram")}}},linkedIn:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"linkedin"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"linkedin")}}},middleName:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"middlename"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"middlename")}}},organizationAlias:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"organizationAlias"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"organizationAlias")}}},pinterest:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"pinterest"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"pinterest")}}},skype:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"skype"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"skype")}}},twitter:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"twitter"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"twitter")}}},webaddressBusiness:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"webaddressBusiness"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"webaddressBusiness")}}},priorityCode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"vipcode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"vipcode")}}},webAddressPersonal:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"webaddressPersonal"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"webaddressPersonal")}}},alias:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"alias"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"alias")}}},personalFaxAreaCode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalfaxAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalfaxAreacode")}}},businessFaxAreaCode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessfaxAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessfaxAreacode")}}},personalFaxBaseNumber:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalfaxbasenumber"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalfaxbasenumber")}}},businessFaxBaseNumber:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessfaxbasenumber"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessfaxbasenumber")}}},personalFaxExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalfaxextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalfaxextension")}}},businessFaxExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessfaxextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessfaxextension")}}},purchaseAmount:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"purchaseAmount"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"purchaseAmount")}}},purchasingBudget:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"purchasingbudget"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"purchasingbudget")}}},ageRange:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"agerange"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"agerange")}}},degree:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"degree"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"degree")}}},eventType:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"eventtype"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"eventtype")}}},personalFaxCountryCode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"personalfaxcountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalfaxcountrycode")}}},businessFaxCountryCode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"businessfaxcountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessfaxcountrycode")}}},gender:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"gender"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"gender")}}},incomeCurrency:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"incomecurrency"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"incomecurrency")}}},incomeRange:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"incomerange"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"incomerange")}}},industryName:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"industryname"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"industryname")}}},jobFunction:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"jobfunction"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"jobfunction")}}},mainLanguage:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"mainlanguage"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"mainlanguage")}}},nameSuffix:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"namesuffix"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"namesuffix")}}},nationality:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"nationality"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"nationality")}}},organisationSizeInPersons:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"organisationsize"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"organisationsize")}}},organizationBusinessType:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"organizationbusinesstype"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"organizationbusinesstype")}}},paymentMethod:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"paymentmethod"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"paymentmethod")}}},productName:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"productname"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"productname")}}},informaProductCode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"producttype"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"producttype")}}},secondaryLanguage:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"secondarylanguage"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"secondarylanguage")}}},title:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"title"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"title")}}},dateOfBirth:{enabled:f.validation.fields.isRequired(g,"DOB"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"DOB")}}},arrivalDate:{enabled:f.validation.fields.isRequired(g,"arrivalDate"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"arrivalDate")}}},departureDate:{enabled:f.validation.fields.isRequired(g,"departureDate"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"departureDate")}}},personalMobilePhoneNumberCountrycode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"personalMobilephonenumberCountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalMobilephonenumberCountrycode")}}},businessMobilePhoneNumberCountrycode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"businessMobilephonenumberCountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessMobilephonenumberCountrycode")}}},personalLandlinePhoneNumberCountrycode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"personalLandlinephonenumberCountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalLandlinephonenumberCountrycode")}}},businessLandlinePhoneNumberCountrycode:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"businessLandlinephonenumberCountrycode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessLandlinephonenumberCountrycode")}}},personalMobilePhoneNumberAreacode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalMobilephonenumberAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalMobilephonenumberAreacode")}}},businessMobilePhoneNumberAreacode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessMobilephonenumberAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessMobilephonenumberAreacode")}}},personalLandlinePhoneNumberAreacode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalLandlinephonenumberAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalLandlinephonenumberAreacode")}}},businessLandlinePhoneNumberAreacode:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessLandlinephonenumberAreacode"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessLandlinephonenumberAreacode")}}},personalMobilePhoneNumberCategory:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalMobilephonenumberCategory"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalMobilephonenumberCategory")}}},businessMobilePhoneNumberCategory:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessMobilephonenumberCategory"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessMobilephonenumberCategory")}}},personalLandlinePhoneNumberCategory:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalLandlinephonenumberCategory"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalLandlinephonenumberCategory")}}},businessLandlinePhoneNumberCategory:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessLandlinephonenumberCategory"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessLandlinephonenumberCategory")}}},personalMobilePhoneNumberExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalMobilephonenumberextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalMobilephonenumberextension")}}},businessMobilePhoneNumberExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessMobilephonenumberextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessMobilephonenumberextension")}}},personalLandlinePhoneNumberExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"personalLandlinephonenumberextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"personalLandlinephonenumberextension")}}},businessLandlinePhoneNumberExtension:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"businessLandlinephonenumberextension"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"businessLandlinephonenumberextension")}}},organizationBusinessVolume:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"organizationBusinessvolume"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"organizationBusinessvolume")}}},"InterestLevel[]":{enabled:f.validation.fields.isRequired(g,"interestLevel"),trigger:"blur",validators:{choice:{min:1,message:f.validation.fields.getFieldRequiredMessage(g,"interestLevel")}}},"NatureOfBusiness[]":{enabled:f.validation.fields.isRequired(g,"natureOfBusiness"),trigger:"blur",validators:{choice:{min:1,message:f.validation.fields.getFieldRequiredMessage(g,"natureOfBusiness")}}},"communicationPreferenceCheck[]":{enabled:f.validation.fields.isRequired(g,"subscriptions"),trigger:"blur",validators:{choice:{min:1,message:f.validation.fields.getFieldRequiredMessage(g,"subscriptions")}}},formSessionId:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"session"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"session")}}},passportIssuedDate:{enabled:f.validation.fields.isRequired(g,"passportIssuedDate"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"passportIssuedDate")}}},passportExpiration:{enabled:f.validation.fields.isRequired(g,"passportExpiration"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"passportExpiration")}}},passportNumber:{trigger:"blur change",enabled:f.validation.fields.isRequired(g,"passportNumber"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"passportNumber")}}},passportPlaceOfIssue:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"passportPlaceOfIssue"),validators:{notEmpty:{message:f.validation.fields.getFieldRequiredMessage(g,"passportPlaceOfIssue")}}},fileToUpload:{trigger:"blur",enabled:f.validation.fields.isRequired(g,"fileUpload"),validators:{notEmpty:{message:f.lang.t("upload file")}}},securityQuestion:{trigger:"blur",validators:{notEmpty:{message:f.lang.t("security question required")}}},securityAnswer:{trigger:"blur",validators:{notEmpty:{message:f.lang.t("security answer required")}}},password:{trigger:"blur",validators:{notEmpty:{message:f.lang.t("password required")},regexp:{regexp:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,message:f.lang.t("weak password")}}},confirmPassword:{trigger:"blur",validators:{notEmpty:{message:f.lang.t("confirm password required")},identical:{field:"password",message:f.lang.t("passwords do not match")}}}}}).on("error.validator.bv",function(j,h){h.element.data("bv.messages").find('.help-block[data-bv-for="'+h.field+'"]').hide().filter('[data-bv-validator="'+h.validator+'"]').show()
})
};
b.pageLoad=function(){};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.validation.fields.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.forms=informaGlobal.forms||{};
informaGlobal.forms.validation=informaGlobal.forms.validation||{};
informaGlobal.forms.validation.misc=(function(d,c,a,e){var b={};
b.init=function(){};
b.pageLoad=function(){};
b.documentReady=function(){};
b.initConfirmEmailChangeForm=function(){d("#confirm-email-change-form").bootstrapValidator({message:"This value is not valid",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove"},fields:{ConfirmEmailChange:{validators:{notEmpty:{message:"The email address is required and can't be empty"},emailAddress:{message:"The input is not a valid email address"}}},ConfirmEmailChangePswd:{validators:{notEmpty:{message:"The password is required and can't be empty"}}}}})
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.forms.validation.misc.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=(function(d,c,a,e){var b={};
b.init=function(){};
b.initVerticalTab=function(){d('li[role="tab"] > a').on({click:function(f){var h=d(this).attr("aria-controls");
var g=d("#"+h);
d("div[role='tabpanel']").attr({"aria-hidden":"true",tabindex:"-1"});
g.attr({"aria-hidden":"false",tabindex:"0"})
},keydown:function(g){if((g.which==39)||(g.which==37)){var f=d(this).attr("aria-selected");
if(f=="true"){d("li a[aria-selected='false']").attr({"aria-selected":"true",tabindex:"0"}).focus();
d(this).attr({"aria-selected":"false",tabindex:"-1"});
var j=d("li a[aria-selected='true']").attr("aria-controls");
var h=d("#"+j);
d("div[role='tabpanel']").attr({"aria-hidden":"true",tabindex:"-1"});
h.attr({"aria-hidden":"false",tabindex:"0"})
}}else{if(g.which==13){d(this).trigger("click")
}}},focus:function(){d(this).parent().attr("aria-selected","true")
},blur:function(){d(this).parent().attr("aria-selected","false")
}})
};
b.dataTable=function(){d.fn.dataTableExt.oApi.fnFilterAll=function(n,l,g,j,m){var k=d.fn.dataTableSettings;
for(var h=0;
h<k.length;
h++){k[h].oInstance.fnFilter(l,g,j,m)
}};
d("table").each(function(){d(this).dataTable({language:{emptyTable:"No Records",zeroRecords:d(".filterMessageElement").val()}})
});
d('a[data-toggle="tab"]').on("click",function(g){d(".loader").removeClass("hide");
d(".dataTablePlugin").addClass("hide");
informaGlobal.page.settings.intrVal=setInterval(function(){d(d.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc()
},1000);
setTimeout(function(){clearInterval(informaGlobal.page.settings.intrVal);
d(".loader").addClass("hide");
d(".dataTablePlugin").removeClass("hide")
},3000)
});
var f=d("table").dataTable();
d(".searchAllElement").keyup(function(){f.fnFilterAll(this.value)
})
};
b.initNav=function(){d(".countriesContainer").html(d(".countriesElementList").html());
d(".languageContainer").html(d(".languageElementList").html());
d(".signinContainer").html(d("#sigin").html());
d(".dynamicToggle").on("click",function(f){d("span",this).toggleClass("navArrowRight navArrowDown")
});
d(".mainNav .dropdown a").on("click",function(f){d("span",this).toggleClass("navArrowRight navArrowDown")
});
d(".navbar-header").on("focus",function(){d(this).on("keypress",function(f){if(f.keyCode===13){d(this).trigger("click")
}})
});
d(".innerMenuTopnav li").each(function(){var g=d(this);
var f=g.parent();
if(d(this).hasClass("active")){f.parent().addClass("active")
}});
d('[data-toggle="offcanvas"], .overlay').click(function(){d(".overlay").toggleClass("active"),d("body").toggleClass("active"),d(".row-offcanvas").toggleClass("active"),d(".sidebar-offcanvas").toggleClass("active"),d(".navbar-toggle").toggleClass("collapsed"),d(".navbar-collapse").addClass("transition"),d(".transition").one(s,function(){d(".navbar-collapse").removeClass("transition"),d(".hamBurger .navbar-header button").hide()
})
}),d(" .mobileLayoutcross .navbar-header").click(function(){d(".overlay").removeClass("active"),d("body").removeClass("active"),d(".navbar .navbar-element").removeClass("in"),d(".row-offcanvas").removeClass("active"),d(".sidebar-offcanvas").removeClass("active"),d(".navbar-toggle").addClass("collapsed"),d(".transition").one(s,function(){d(".navbar-collapse").removeClass("transition"),d(".hamBurger .navbar-header button").show()
})
})
};
b.initTabs=function(){(typeof(d.fn.tabCollapse)==="function")?d("[id^='myTab_']").tabCollapse():null;
d("[id^='myTab_']").on("shown-tabs.bs.tabcollapse",function(){var g=d(this);
var f=g.find("a.js-tabcollapse-panel-heading");
f.each(function(j){var k=d(this);
var h=d(this).attr("href");
var l=d(this).data("target");
if(h+"-collapse"==l){k.data("target",h);
k.attr("data-target",h)
}})
});
d("[id^='myTab_']").on("shown-accordion.bs.tabcollapse",function(){var g=d(this);
var j=g.attr("id");
var h=d("#"+j+"-accordion");
var f=h.find("a.js-tabcollapse-panel-heading");
f.each(function(l){var m=d(this);
var k=d(this).attr("href");
var n=d(this).data("target");
if(n+"-collapse"==k){m.data("target",k);
m.attr("data-target",k)
}})
});
d("li[role='tab']").click(function(){d("li[role='tab']").attr("aria-selected","false");
d(this).attr("aria-selected","true")
});
d("li[role='tab'] a").click(function(){d("li[role='tab'] a").removeAttr("aria-expanded")
})
};
b.initCarousel=function(){if(typeof(d.fn.flexisel)==="function"){d(".carousel > ul").each(function(){var f=d(this).data("slidereffect");
if(f!="undefined"&&d(c).width()>f){return false
}d(this).flexisel(informaGlobal.page.settings.commonFlexiselSettings)
})
}(typeof(d.fn.carousel)==="function")?d("#myCarousel").carousel({interval:3000,cycle:true}):null;
d("ol.carousel-indicators > li").on("focus",function(){d(this).on("keypress",function(f){if(f.keyCode===13){d(this).trigger("click")
}})
})
};
b.initAccordian=function(){d(".accordion .panel-group").on("hidden.bs.collapse shown.bs.collapse",function(f){d(f.target).prev(".panel-prev").find("i.indicator").toggleClass("accordion-minus accordion-plus")
});
d(".accordion-xs-collapse").each(function(){d(this).collapse({toggle:false})
});
d(".accordion-xs-toggle").on("click",function(){var k=d(this),f=k.parent(".tr"),j=f.find(".accordion-xs-collapse");
if(Modernizr.mq("only screen and (max-width: 786px)")&&j.length){var g=f.siblings(".tr"),h=g.find(".accordion-xs-toggle"),l=g.find(".accordion-xs-collapse");
j.collapse("toggle");
l.collapse("hide");
k.toggleClass("collapsed");
h.removeClass("collapsed")
}});
d(".in.panel-collapse-content").css({background:" #fff","margin-right":"-7px","margin-left":"-7px","margin-bottom":"-8px"})
};
b.initDialogElements=function(){d(".callaction-btn,.close").on("focus",function(){d(this).on("keypress",function(f){if(f.keyCode===13){d(this).trigger("click")
}})
})
};
b.initHeader=function(){d(".siteNameContainer").html(d(".siteNameElement").html());
d(".informa").show();
d("#informaDetails").hide();
d(".dropdown button").on("click",function(){var f=d(this);
d("#informaDetails").slideToggle("slow");
if(!d(".caret").hasClass("down")){d(".caret").addClass("down");
d(f).attr("aria-expanded","true")
}else{d(".caret").removeClass("down");
d(f).attr("aria-expanded","false")
}})
};
b.initSearch=function(){d(".searchBtnSection").hide();
d(".searchBtn").click(function(){d(".searchBtnSection").toggle("slow")
});
if(d("html").prop("dir")=="rtl"){d("#header_search").removeClass("navbar-right");
d("#header_search").find("form").removeClass("pull-right").addClass("pull-left")
}};
b.initTooltips=function(){d('[data-toggle="tooltip"]').tooltip()
};
b.initReadMore=function(){d(".tab-collapse-nav-tabs-anchor a").on("click",function(g){var f=d(this);
if(!f.hasClass("active")){d(".tab-collapse-nav-tabs-anchor a").removeClass("active");
f.addClass("active")
}else{g.preventDefault()
}});
d(".tab-collapse-nav-tabs-anchor > li > a").click(function(){d(".tab-collapse-nav-tabs-anchor > li.active").removeClass("active");
d(this).parent().addClass("active")
})
};
b.pageLoad=function(){this.initNav();
this.initTooltips();
this.initTabs();
this.initCarousel();
this.initAccordian();
this.initDialogElements();
this.initHeader();
this.initSearch()
};
b.documentReady=function(){this.initReadMore();
this.initVerticalTab()
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=informaGlobal.ui||{};
informaGlobal.ui.calendar=(function(d,c,a,e){var b={};
b.init=function(){};
b.pageLoad=function(){};
b.documentReady=function(){d(".calendarDownload.ics-enabled").click(function(){var j=d(this).parents(".eventDateContainer");
var k=new Array();
k[0]=j.attr("startTime");
if(k[0]==e||k[0]==null||k[0]==""){k[0]=j.attr("start")
}k[1]=j.attr("endTime");
if(k[1]==e||k[1]==null||k[1]==""){k[1]=j.attr("end")
}k[2]=j.attr("startDate");
k[3]=j.attr("endDate");
k[4]=j.attr("subject");
k[5]=j.attr("venueAddress");
var f=j.attr("title");
var l=j.attr("fileName");
if(l==e||l==null){l=f
}k[6]=l;
var h=JSON.stringify(k);
var g="/content/data/informa/servlet/calendar.html?data="+h;
c.location.href=(g)
})
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.calendar.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=informaGlobal.ui||{};
informaGlobal.ui.events=(function(d,c,a,e){var b={};
b.init=function(){d(c).on("reset",this.handleResize)
};
b.handleResize=function(){var f=this.innerWidth;
switch(true){case (f>980):d(".alignTopSection").css("height",d(".headerLogo").css("height"));
d(".logoImagContainer , .eventDatePlace, .eventRightsection").addClass("headerLogoSectionContainer");
d(".searchContainer").addClass("eventRightNavContainer");
break;
case (f<769):d(".alignTopSection").css("height","auto");
d(".eventDatePlace").css({padding:"0","float":"left"});
d(".logoImagContainer , .eventDatePlace, .eventRightsection").removeClass("headerLogoSectionContainer");
d(".searchContainer").removeClass("eventRightNavContainer");
d(".form-container").removeClass("form-error");
break;
default:if(d(".form-container").hasClass("form-error-resize")){d(".form-container").addClass("form-error")
}break
}if(typeof(d.fn.selectpicker)==="function"){d(".loader").removeClass("hide");
d(".dataTablePlugin").addClass("hide");
informaGlobal.page.settings.intrVal=setInterval(function(){d(d.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc()
},1000);
setTimeout(function(){clearInterval(informaGlobal.page.settings.intrVal);
d(".loader").addClass("hide");
d(".dataTablePlugin").removeClass("hide")
},3000)
}setTimeout(function(){if(Modernizr.mq("only screen and (max-width: 786px)")){d(".accordion-xs-collapse").addClass("collapse")
}else{d(".accordion-xs-collapse").removeClass("collapse")
}},200);
informaGlobal.ui.events.handleResizeCarousel();
informaGlobal.ui.events.addBannerImage()
};
b.addBannerImage=function(){d("body").find(".bannerHidden").each(function(){var f=d(this).html();
if(f<=d(c).width()){d(this).siblings(".banner-section").show()
}else{d(this).siblings(".banner-section").hide()
}})
};
b.handleResizeCarousel=function(){if(d(".graphicCarousel").length>0){if(Modernizr.mq("only screen and (min-width: 787px)")){d(".graphicCarousel").each(function(f){var g=d(this);
if(informaGlobal.page.settings.currentClone.length>0){g.parent().html(informaGlobal.page.settings.currentClone[f][0]);
informaGlobal.page.settings.currentClone[f]=""
}})
}else{d(".graphicCarousel").each(function(f){var g=d(this);
if(g.find(".nbs-flexisel-ul").length==0){informaGlobal.page.settings.currentClone.splice(f,0,g.clone())
}if(g.find(".nbs-flexisel-ul").length==0){g.find("ul").flexisel(informaGlobal.page.settings.graphicFlexiselSettings)
}})
}}};
b.pageLoad=function(){var f=[];
f={ui:informaGlobal.ui,"ui.eventsList":informaGlobal.ui.eventsListing,"ui.geo":informaGlobal.ui.geo,"ui.media":informaGlobal.ui.media,"ui.calendar":informaGlobal.ui.calendar};
for(var g in f){try{var k=f[g];
if(k!=e&&k!=null){if(typeof k.pageLoad==="function"){var j=k.pageLoad.bind(k);
j()
}else{console.warn(g+" does not contain pageLoad")
}}else{console.error("Could not initialize pageLoad for "+g)
}}catch(h){console.error("Exception caught for pageLoad: "+g,h)
}}setTimeout(function(){if(Modernizr.mq("only screen and (max-width: 786px)")){d(".accordion-xs-collapse").addClass("collapse")
}else{d(".accordion-xs-collapse").removeClass("collapse")
}},200);
setTimeout(function(){a.querySelectorAll(".informaSearchTabsListsArea").forEach(function(m,p,o){var l=0;
var n="";
m.querySelectorAll("tr > th").forEach(function(r,q,t){l=parseInt(l)+parseInt(r.getAttribute("data-width"));
if((100-l)==-1){r.style.width=parseInt(r.getAttribute("data-width"))-parseInt(1)+"%"
}else{if((100-l)==1){r.style.width=parseInt(r.getAttribute("data-width"))+parseInt(1)+"%"
}else{r.style.width=r.getAttribute("data-width")+"%"
}}})
})
},400);
try{this.addBannerImage()
}catch(h){console.error("Couldn't addBannerImage",h)
}};
b.documentReady=function(){var f=[];
f={ui:informaGlobal.ui,"ui.eventsList":informaGlobal.ui.eventsListing,"ui.geo":informaGlobal.ui.geo,"ui.media":informaGlobal.ui.media,"ui.calendar":informaGlobal.ui.calendar};
for(var g in f){try{var k=f[g];
if(k!=e&&k!=null){if(typeof k.documentReady==="function"){var j=k.documentReady.bind(k);
j()
}else{console.warn(g+" does not contain documentReady")
}}else{console.error("Could not initialize documentReady for "+g)
}}catch(h){console.error("Exception caught for documentReady: "+g,h)
}}d(".listview-variant-2").each(function(){d(this).find(".list-item-rows").each(function(){if(d(this).find(".accordion-xs-collapse > .inner").children(".hide").length==2){d(this).find(".accordion-xs-toggle").addClass("nocollapsed")
}})
});
try{this.addBannerImage()
}catch(h){console.error("Couldn't addBannerImage",h)
}try{this.handleResizeCarousel()
}catch(h){console.error("Couldn't handleResizeCarousel",h)
}};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.events.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=informaGlobal.ui||{};
informaGlobal.ui.geo=(function(d,c,a,e){var b={};
b.init=function(){};
b.pageLoad=function(){d("#myTab_tab_panel .travel-accordian").on("click",function(){c.informaGlobal.ui.geo.mapInitialize()
});
d(".travel-Tab-title").on("click",function(f){if(d.fn&&d.fn.dataTable&&typeof d.fn.dataTable.tables==="function"){d(d.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc()
}})
};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.geo.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=informaGlobal.ui||{};
informaGlobal.ui.eventsListing=(function(d,c,a,e){var b={};
b.init=function(){this.page=1;
this.totalEvents=0;
this.filters=null;
this.needsInit=true;
this.cachedGlobal=[]
};
b.buildFilterLink=function(n){var o=c.location.href;
var h=false;
var j={};
var u="";
if(o.indexOf("#")>0){u=o.substring(o.indexOf("#"));
o=o.substring(0,o.indexOf("#"))
}if(o.indexOf("?")<0){o+="?"
}else{if(o.indexOf("?")<o.length-1){var k=o.substring(o.indexOf("?")+1);
tmpParams=k.split("&");
for(var r=0;
r<tmpParams.length;
r++){var g=tmpParams[r];
parts=g.split("=");
j[parts[0]]=parts[1]
}o=o.substring(0,o.indexOf("?")+1)
}}var f=Object.keys(j);
var v=Object.keys(n);
var l=true;
for(var q=0;
q<f.length;
q++){var g=f[q];
var p=j[g];
var w=false;
for(var m=0;
m<v.length;
m++){var t=v[m];
if(t===g){w=true;
break
}}if(!w){if(l){o+=g+"="+encodeURIComponent(p);
l=false
}else{o+="&"+g+"="+encodeURIComponent(p)
}}}for(var q=0;
q<v.length;
q++){var t=v[q];
var p=n[t];
if(p===null){continue
}if(l){o+=t+"="+encodeURIComponent(p);
l=false
}else{o+="&"+t+"="+encodeURIComponent(p)
}}o=o+u;
return o
};
b.checkQueryFilters=function(r){var p=this;
var h=r.find(".event-items-list");
var f=d('<div class="items"></div>');
h.append(f);
var g=c.location.href;
var l=this.getQueryItem(g,"search");
var m=this.getQueryItem(g,"region");
var o=this.getQueryItem(g,"date");
var k=this.getQueryItem(g,"sector");
var k=this.getQueryItem(g,"country");
var q=this.getQueryItem(g,"subsector");
var n={};
if(typeof l!=="undefined"&&l!==null&&l!==""&&l!=="_all"){n.searchFilter=this.decodeEntities(l);
r.find(".form-control.element-eventSearch").val(n.searchFilter)
}if(typeof m!=="undefined"&&m!==null&&m!==""&&m!=="_all"&&m.length>0){n.regionFilter=this.decodeEntities(m);
r.find(".form-control.element-eventRegion").val(n.regionFilter)
}if(typeof countryFilter!=="undefined"&&countryFilter!==null&&countryFilter!==""&&countryFilter!=="_all"&&countryFilter.length>0){n.countryFilter=this.decodeEntities(countryFilter);
r.find(".form-control.element-eventCountry").val(n.countryFilter)
}if(typeof o!=="undefined"&&o!==null&&o!==""&&o!=="_all"){n.dateFilter=this.decodeEntities(o);
r.find(".form-control.element-timeOfYear").val(n.dateFilter)
}if(typeof k!=="undefined"&&k!==null&&k!==""&&k!=="_all"&&k.length>0){n.sectorFilter=this.decodeEntities(k);
r.find(".form-control.element-eventSector").val(n.sectorFilter)
}if(typeof q!=="undefined"&&q!==null&&q!==""&&q!=="_all"&&q.length>0){n.subSectorFilter=this.decodeEntities(q);
r.find(".form-control.element-eventSubSector").val(n.subSectorFilter)
}var j=false;
var t=Object.keys(n);
j=t.length>0;
if(j){this.applyFilters(r,n)
}else{this.fetchPage(r,f,function(u){p.needsInit=false;
r.find(".loader").removeClass("show");
if(p.cachedGlobal.length==p.totalEvents){r.find(".event-items-list-actions").css("display","none")
}p.updateStats(r.find(".event-items-stats"),p.cachedGlobal.length,p.totalEvents)
})
}};
b.wireFilters=function(f,h){var g=this;
if(d.fn.multiselect){f.find(".event-listing-filters select.select-multiple").each(function(){d(this).attr("multiple","multiple");
let $all=d(this).find('option[value="_all"]');
let label=$all.text();
$all.remove();
d(this).multiselect({nonSelectedText:label,maxHeight:250,includeSelectAllOption:true,includeResetOption:true,includeResetDivider:true})
})
}else{if(h<10){setTimeout(function(){g.wireFilters(f,h+1)
},100)
}}};
b.pageLoad=function(){var f=d(".event-listing.exhibitor-listing");
var g=this;
f.each(function(){var h=d(this);
g.wireFilters(h);
h.find(".filter-actions .share").each(function(){d(this).on("click",function(q){q.preventDefault();
var l=h.find(".form-control.element-eventSearch").val();
var m=h.find(".form-control.element-eventRegion").val();
var o=h.find(".form-control.element-eventCountry").val();
var n=h.find(".form-control.element-timeOfYear").val();
var k=h.find(".form-control.element-eventSector").val();
var t=h.find(".form-control.element-eventSubSector").val();
var p={};
if(typeof l!=="undefined"&&l!==null&&l!==""&&l!=="_all"){p.search=l
}else{p.search=null
}if(typeof m!=="undefined"&&m!==null&&m!==""&&m!=="_all"&&m.length>0){p.region=m
}else{p.region=null
}if(typeof o!=="undefined"&&o!==null&&o!==""&&o!=="_all"&&o.length>0){p.country=o
}else{p.country=null
}if(typeof n!=="undefined"&&n!==null&&n!==""&&n!=="_all"){p.date=n
}else{p.date=null
}if(typeof k!=="undefined"&&k!==null&&k!==""&&k!=="_all"&&k.length>0){p.sector=k
}else{p.sector=null
}if(typeof t!=="undefined"&&t!==null&&t!==""&&t!=="_all"&&t.length>0){p.subsector=t
}else{p.subsector=null
}if(Object.keys(p).length===0){return
}var r=g.buildFilterLink(p);
c.prompt("Share this list of events\nPlease copy the link below",r)
})
});
h.find(".grid-icon").each(function(){d(this).on("click",function(k){k.preventDefault();
h.addClass("display-grid");
h.removeClass("display-list");
d(this).addClass("active");
h.find(".list-icon").each(function(){d(this).removeClass("active")
})
})
});
h.find(".list-icon").each(function(){d(this).on("click",function(k){k.preventDefault();
h.removeClass("display-grid");
h.addClass("display-list");
d(this).addClass("active");
h.find(".grid-icon").each(function(){d(this).removeClass("active")
})
})
});
h.find(".reset-button").each(function(){d(this).on("click",function(k){k.preventDefault();
h.find(".event-listing-filters select").each(function(){if(d.fn.multiselect){d(this).multiselect("deselectAll",false);
d(this).multiselect("updateButtonText")
}else{d(this).val("_all")
}});
h.find(".event-listing-filters .element-eventSearch").val("");
g.handleFilters(h)
})
});
var j=h.data("url");
console.log("initializing events listing",j);
g.dataUrl=j;
h.find(".event-items-list-action.event-items-list-action-load-more").on("click",function(k){g.nextPage(h,h.find(".event-items-list .items"));
k.preventDefault();
return false
});
h.find(".event-listing-filter-form select").on("change",function(m){if(d(this).hasClass("element-eventSector")){var l=d(".event-listing-filter-form select.element-eventSubSector");
if(d(this).val()==="_all"||d(this).val().length===0||(Array.isArray(d(this).val())&&d(this).val().length>1)){l.attr("disabled","disabled");
if(d.fn.multiselect){l.multiselect("disable")
}}else{l.removeAttr("disabled");
if(d.fn.multiselect){l.multiselect("enable")
}}if(!Array.isArray(d(this).val())||d(this).val().length==1){var l=d(".event-listing-filter-form select.element-eventSubSector");
l.val("_all");
var n=d(this).val();
var k="/content/data/informa/lov/data.eventEditionsSubSectors.json?cache="+Date.now();
if(n!="_all"&&n.length>0){k="/content/data/informa/lov/data.eventEditionsSubSectors.json?cache="+Date.now()+"&filter=$[?(@.value=~/^"+n+"_.*$/)]"
}d.get(k,function(p){if(d.fn.multiselect){if(p&&p.length){for(var o=0;
o<p.length;
o++){p[o].label=p[o].title=p[o].text
}}l.multiselect("dataprovider",p)
}else{l.empty();
l.append(d("<option></option>").attr("value","_all").text("All Sub-Sectors"));
if(p&&p.length){d.each(p,function(q,r){l.append(d("<option></option>").attr("value",r.value).text(r.text))
})
}}})
}}g.handleFilters(h);
return false
});
h.find(".event-listing-filter-form .element-eventSearch").on("input",function(k){g.handleFilters(h);
k.preventDefault();
return false
});
g.checkQueryFilters(h)
})
};
b.decodeEntities=(function(){var f=a.createElement("div");
function g(j){if(j&&typeof j==="string"){j=j.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi,"");
j=j.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi,"");
f.innerHTML=j;
j=f.textContent;
f.textContent=""
}else{if(Array.isArray(j)){for(var h=0;
h<j.length;
h++){j[h]=this.decodeEntities(j[h])
}}}return j
}return g
})();
b.joinQuoted=function(f){if(!Array.isArray(f)){return"'"+f+"'"
}return f.map(function(g){return"'"+g+"'"
}).join(",")
};
b.joinSplit=function(f){if(!Array.isArray(f)){return f
}return f.map(function(g){return"\\|"+g+"\\|"
}).join("|")
};
b.getQueryItem=function(g,h){var k=g.indexOf("?");
var l=g.substring(k+1);
var m=l.split("&");
for(var j=0;
j<m.length;
j++){var n=m[j].split("=");
if(decodeURIComponent(n[0])==h){var f=decodeURIComponent(n[1]);
if(f.indexOf("#")>=0){f=f.substring(0,f.indexOf("#"))
}return f
}}};
b.fetchPage=function(h,f,l){h.find(".loader").addClass("show");
if(!this.dataUrl||this.dataUrl===""){return
}var k=this.dataUrl.indexOf("?");
var g=this.dataUrl.substring(0,k);
g+="?sort=/eventStartDate,/eventEndDate";
g+="&filter="+encodeURIComponent(this.getQueryItem(this.dataUrl,"filter"));
if(this.filters!=null&&this.filters.length>0){g+="&limit=300";
g+="&filter="+this.filters
}else{g+="&limit="+this.getQueryItem(this.dataUrl,"limit");
g+="&page="+this.page
}var j=this;
d.get(g,function(n){if(n!=e&&n!=null){if((j.filters==null||j.filters.length==0)&&j.totalEvents==0){j.totalEvents=n.total
}if(n.items!=e&&n.items!=null){for(var m=0;
m<n.items.length;
m++){var o=n.items[m];
if(j.filters==null||j.filters.length==0){j.cachedGlobal.push(o)
}j.renderItem(f,o)
}}}l(f)
})
};
b.renderItem=function(o,A){var h=d('<div class="event-item event-item-id-'+A.eventEditionCode+'"></div>');
h.attr("data-id",A.eventEditionId);
h.attr("data-start-date",A.eventStartDate);
h.attr("data-end-date",A.eventEndDate);
h.attr("data-city",A.cityFreeText);
h.attr("data-country",A.locationCountry);
h.attr("data-region",A.regionName);
var j=d('<div class="event-logo item-logo"></div>');
var D=d('<img class="event-logo-image item-logo-image" />');
if(A.showLogo&&A.showLogo!==""){D.attr("src",A.showLogo)
}else{D.addClass("missing");
j.addClass("missing")
}D.attr("alt",A.eventSeriesName);
j.append(D);
var u=c.navigator.userLanguage||c.navigator.language;
moment.locale(u);
var g=d('<div class="event-data item-data"></div>');
var r=A.eventStartDate;
var v=A.eventEndDate;
var f=null;
try{f=moment(A.eventEndDate);
v=f.format("DD MMMM, YYYY")
}catch(k){}try{var y=moment(A.eventStartDate);
if(f===null||f.year()!=y.year()){r=y.format("DD MMMM, YYYY")
}else{if(f.month()!=y.month()){r=y.format("DD MMMM")
}else{r=y.format("DD")
}}}catch(k){}var q=d('<span class="item-name event-name event-title"></span>');
q.text(A.eventEditionShortName);
if(A.showLogo&&A.showLogo!==""){q.addClass("has-logo")
}var x=d('<div class="event-dates item-dates"></div>');
var z=d('<span class="event-start-date item-start-date"></span>');
var C=d('<span class="event-date-separator item-date-separator">-</span>');
z.text(r);
var E=d('<span class="event-end-date item-end-date"></span>');
E.text(v);
if(A.eventStartDate==A.eventEndDate){x.append(v)
}else{x.append(z);
x.append(C);
x.append(E)
}var n=d('<div class="event-location item-location"></div>');
var p=d('<span class="event-location-city item-location-city"></span>');
var w=d('<span class="event-location-state item-location-state"></span>');
var m=d('<span class="event-location-separator item-location-separator"></span>');
var B=d('<span class="event-location-country item-location-country"></span>');
if(A.cityFreeText&&A.cityFreeText!==""&&A.cityFreeText!=="null"){p.text(A.cityFreeText);
p.addClass("first")
}else{p.addClass("missing")
}if(A.stateFreeText&&A.stateFreeText!==""&&A.stateFreeText!=="null"){w.text(A.stateFreeText);
if(A.cityFreeText&&A.cityFreeText!==""&&A.cityFreeText!=="null"){m.text(",")
}else{w.addClass("first")
}}else{m.addClass("missing");
w.addClass("missing")
}if(A.locationCountry&&A.locationCountry!==""&&A.locationCountry!=="null"){if(A.cityFreeText&&A.cityFreeText!==""&&A.cityFreeText!="null"){if(!A.stateFreeText||A.stateFreeText===""||A.stateFreeText==="null"){m.removeClass("missing");
m.text(",")
}}else{if(!A.stateFreeText||A.stateFreeText===""||A.stateFreeText==="null"){B.addClass("first")
}}B.text(A.locationCountry)
}else{B.addClass("missing")
}n.append(p);
n.append(m);
n.append(w);
n.append(B);
var t=d('<div class="event-actions item-actions actions"></div>');
var l=d('<a class="event-website item-website website"></a>');
l.attr("target","_blank");
l.text("View Event Site");
if(A.URL&&A.URL!==""&&A.URL!=="null"){if(A.URL.startsWith("http://")||A.URL.startsWith("https://")){l.attr("href",A.URL)
}else{l.attr("href","https://"+A.URL)
}}else{l.attr("href","#");
l.addClass("disabled");
l.attr("onClick","event.preventDefault();")
}t.append(l);
g.append(q);
g.append(x);
g.append(n);
h.append(j);
h.append(g);
h.append(t);
o.append(h)
};
b.updateStats=function(f,k,m){var j=d('<div class="stats-content"></div>');
var l=d('<span class="stats-text"></span>');
var g=d('<span class="stats-data"></span>');
var o=d('<span class="stats-text stats-separator"></span>');
var n=d('<span class="stats-data"></span>');
var h=d('<span class="stats-text"></span>');
l.text("Showing ");
o.text(" of ");
h.text(" Events Found");
if(k==e||k==null){k=0
}if(m==e||m==null){m=0
}j.append(l);
if(k==m){g.text(k);
j.append(g)
}else{n.text(m);
g.text(k);
j.append(g);
j.append(o);
j.append(n)
}j.append(h);
f.empty();
f.append(j)
};
b.nextPage=function(g,f){this.page+=1;
var h=this;
this.fetchPage(g,f,function(j){g.find(".loader").removeClass("show");
if(h.cachedGlobal.length==h.totalEvents){g.find(".event-items-list-actions").css("display","none")
}h.updateStats(g.find(".event-items-stats"),h.cachedGlobal.length,h.totalEvents)
})
};
b.getMonthFromString=function(h){h=h.substring(0,3).toLowerCase();
var f=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
var g=f.indexOf(h)+1;
return g
};
b.getPadding=function(f){if(f>=10){return f
}return"0"+f
};
b.handleFilters=function(j){var h=j.find(".form-control.element-eventSearch").val();
var f=j.find(".form-control.element-eventCountry").val();
var g=j.find(".form-control.element-eventRegion").val();
var l=j.find(".form-control.element-timeOfYear").val();
var k=j.find(".form-control.element-eventSector").val();
var n=j.find(".form-control.element-eventSubSector").val();
var m={searchFilter:h,regionFilter:g,dateFilter:l,sectorFilter:k,subSectorFilter:n,countryFilter:f};
this.applyFilters(j,m)
};
b.applyFilters=function(h,n){var u=h.find(".event-items-list");
var j=n.searchFilter;
var m=n.regionFilter;
var l=n.dateFilter;
var g=n.countryFilter;
var q=n.sectorFilter;
var p=n.subSectorFilter;
var t=[];
if(typeof j!=="undefined"&&j!=null&&j.trim()!=""&&j.length>2){j=j.replace(/[^a-zA-Z0-9]/g,".");
t.push("(@.eventSeriesName =~ /.*"+j+".*/i)")
}if(typeof cityFilter!=="undefined"&&cityFilter&&cityFilter!="_all"){t.push("(@.cityFreeText=='"+this.decodeEntities(cityFilter)+"')")
}if(typeof q!=="undefined"&&q&&(q!="_all"||q.length>0)){t.push("(@._sectors =~ /.*("+this.joinSplit(this.decodeEntities(q))+").*/)")
}if(typeof p!=="undefined"&&p&&(p!="_all"||p.length>0)){t.push("(@._sectors =~ /.*("+this.joinSplit(this.decodeEntities(p))+").*/)")
}if(typeof g!=="undefined"&&g&&(g!="_all"||g.length>0)){t.push("(@.locationCountry in ["+this.joinQuoted(this.decodeEntities(g))+"])")
}if(typeof m!=="undefined"&&m&&(m!="_all"||m.length>0)){t.push("(@.regionName in ["+this.joinQuoted(this.decodeEntities(m))+"])")
}if(typeof l!=="undefined"&&l&&l!="_all"){var w=l.split("-");
var A=w[0];
var B=this.getMonthFromString(w[1]);
var f=A+"-"+this.getPadding(B)+"-01";
var z=A+1;
var v=A+"-"+this.getPadding(B+1)+"-01";
if(B==12){v=z+"-01-01"
}t.push("(@.eventStartDate>='"+f+"')");
t.push("(@.eventEndDate<'"+v+"')")
}if(t.length==0&&(!this.filters||this.filters.length==0)){return
}else{if(t.length==""){this.filters=null
}else{this.filters="{B64}"+btoa("$[?("+t.join(" && ")+")]").replace(/\+/g,"-").replace(/\//g,"_")
}}if(this.filters&&this.filters.length>0){h.find(".filter-actions .share").addClass("active");
h.find(".event-items-list-actions").css("display","none");
var r=d('<div class="items"></div>');
var k=this;
this.fetchPage(h,r,function(x){u.empty();
u.append(x);
h.find(".loader").removeClass("show");
if(x.length>0){k.updateStats(h.find(".event-items-stats"),x[0].children.length,x[0].children.length)
}else{k.updateStats(h.find(".event-items-stats"),0,0)
}})
}else{h.find(".filter-actions .share").removeClass("active");
var k=this;
if(this.needsInit){var u=h.find(".event-items-list");
u.empty();
var r=d('<div class="items"></div>');
u.append(r);
this.fetchPage(h,r,function(x){k.needsInit=false;
h.find(".loader").removeClass("show");
if(k.cachedGlobal.length==k.totalEvents){h.find(".event-items-list-actions").css("display","none")
}else{h.find(".event-items-list-actions").css("display","block")
}k.updateStats(h.find(".event-items-stats"),k.cachedGlobal.length,k.totalEvents)
})
}else{if(this.cachedGlobal.length!=this.totalEvents){h.find(".event-items-list-actions").css("display","block")
}var r=d('<div class="items"></div>');
for(var o=0;
o<this.cachedGlobal.length;
o++){var y=this.cachedGlobal[o];
this.renderItem(r,y)
}this.updateStats(h.find(".event-items-stats"),this.cachedGlobal.length,this.totalEvents);
u.empty();
u.append(r)
}}};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.eventsListing.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.ui=informaGlobal.ui||{};
informaGlobal.ui.media=(function(d,c,a,e){var b={};
b.init=function(){};
b.initMediaPlayer=function(){d(".videoHolder").on({click:function(){var f=d(this);
informaGlobal.ui.media.mediaPlayerDefinition(f)
},keypress:function(g){var f=d(this);
if(g.keyCode===13){informaGlobal.ui.media.mediaPlayerDefinition(f)
}}})
};
b.mediaPlayerDefinition=function(l){var j="";
var f="";
var g=l.data("url").match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
var m=(g&&g[7].length==11)?g[7]:false;
var h=l.data("autoplay");
var n=l.data("url").split("?");
f=(h)?"https://www.youtube.com/embed/"+m+"?autoplay=1&"+n[1]:"https://www.youtube.com/embed/"+m+"?autoplay=0&"+n[1];
j+='<div id="youtubeVideoModal" class="modal videoOverlay fade" tabindex="-1" role="dialog">';
j+='<div class="vertical-alignment-helper">';
j+='<div class="modal-dialog vertical-align-center">';
j+='<div class="modal-content">';
j+='<div class="modal-header img-pop-up-header"><button type="button" class="close popup-img-close" data-dismiss="modal">x</button></div>';
j+='<div class="modal-body"></div>';
j+='<div class="modal-footer img-pop-up-footer"></div>';
j+="</div></div></div></div>";
d("body").append(j);
d("#youtubeVideoModal").on("hidden.bs.modal",function(){d("body").find("#youtubeVideoModal").remove()
});
var k=d("#youtubeVideoModal").modal({backdrop:"static",keyboard:false,show:true});
k.find(".modal-body").html('<iframe width="100%" height="315" src="'+f+'" frameborder="0" allowfullscreen></iframe>');
d("input,a,img,video,iframe").each(function(){d(this).attr("tabindex","-1")
});
d(".videoHolder").attr("tabindex","-1");
d(".videoOverlay input,.videoOverlay a,.videoOverlay img,.videoOverlay video").each(function(){d(this).removeAttr("tabIndex")
});
d("#videoTray > p").focus()
};
b.removeYoutubeVideo=function(){d("input,a,img,video,iframe").each(function(){if(d(this).attr("tabindex")==-1){d(this).attr("tabindex","0")
}});
d(".videoHolder").attr("tabindex","0");
if(informaGlobal.forms.validation.activeEle!=e&&informaGlobal.forms.validation.activeEle!=null){informaGlobal.forms.validation.activeEle.focus()
}};
b.playVideo=function(f){var g=new MediaElementPlayer("#player",{autoPlay:f.data("autoplay"),success:function(h,j){if(this.autoPlay){h.play()
}}})
};
b.initLightBoxSearch=function(){d(a).on("click",".search_filter_button",function(){c.location=c.location.pathname+"?freeText="+escape(typeof(d("#search_freeText").val())!="undefined"?d("#search_freeText").val():"")+"&fieldOne="+escape(typeof(d("#sector_data").val())!="undefined"?d("#sector_data").val():"")+"&fieldTwo="+escape(typeof(d("#country_data").val())!="undefined"?d("#country_data").val():"")+"&fieldThree="+escape(typeof(d("#city_data").val())!="undefined"?d("#city_data").val():"")
})
};
b.pageLoad=function(){d(".lightgallery").lightGallery();
this.initMediaPlayer()
};
b.documentReady=function(){this.initLightBoxSearch()
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.ui.media.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.page=informaGlobal.page||{};
informaGlobal.page.thankyou=(function(d,c,a,e){var b={};
b.init=function(){};
b.pageLoad=function(){var w=informaGlobal.helpers.getQueryParameters();
var r=w.uRN;
console.log("urn"+w.uRN);
var n=d("#thankYouConfirmationMarkup").html();
if(typeof n!="undefined"){if(w.priorityCode!="undefined"||w.priorityCode!=""){if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var u=digital_data[0];
u.pagedata.analyticsPriorityCode=w.priorityCode
}}console.log("transactionid"+w.TransactionID);
if(w.uRN==""||w.uRN=="undefined"){n=n.replace("{uRN}","")
}else{console.log("urn");
n=n.replace("{uRN}","Unique Identification Number-"+w.uRN)
}n=n.replace("{emailID}",w.emailID);
if(w.TransactionID==""||typeof w.TransactionID=="undefined"){n=n.replace("{TransactionID}","")
}else{n=n.replace("{TransactionID}","Transaction ID-"+w.TransactionID)
}if(typeof w.quickSignupMessage==""||w.quickSignupMessage=="undefined"){n=n.replace("{quickSignupMessage}","")
}else{n=n.replace("{quickSignupMessage}",w.quickSignupMessage)
}if(w.urlValue==""||w.urlValue=="undefined"){n=n.replace("{downloadFile}","")
}else{n=n.replace("{downloadFile}","<a id='downloadFile'></a>")
}if(w.downloadImage==""||w.downloadImage=="undefined"){n=n.replace("{downloadImageFile}","")
}else{n=n.replace("{downloadImageFile}","<a id='downloadImageHref'><img id='imgFile'></img></a>")
}d("#thankYouConfirmationMarkup").replaceWith(n);
if(w.urlValue!=""&&typeof w.urlValue!="undefined"){d("#downloadFile").text(w.downloadLabel);
d("#downloadFile").attr("href",w.urlValue);
var f=w.urlValue.split("/").pop();
d("#downloadFile").attr("download",f)
}if(w.downloadImage!=""&&typeof w.downloadImage!="undefined"){d("#imgFile").attr("src",w.downloadImage);
d("#imgFile").attr("alt",w.downloadAltText);
d("#downloadImageHref").attr("href",w.urlValue);
var f=w.urlValue.split("/").pop();
d("#downloadImageHref").attr("download",f)
}}if(c.location.href.indexOf("?")!=-1){var m="";
var g=decodeURIComponent(c.location.href.slice(c.location.href.indexOf("?")+1));
var x="";
var t="";
var j="";
var l="";
var v=g.split("&");
for(var o=0;
o<v.length;
o++){var h=v[o].split("=");
m=m+h[0]+"%"+h[1];
if(h[0]=="uRN"){if(h[1]!="null"&&h[1]!=e){x=h[1];
var p="Unique Registration Number :"+x;
d("#uRNPayment").text(p)
}}if(h[0]=="emailID"){if(h[1]!="null"&&h[1]!=e){t=h[1];
var p="Email ID: "+t;
d("#emailID").text(p)
}}if(h[0]=="TransactionID"){if(h[1]!="null"&&h[1]!=e){j=h[1];
var p="Transaction ID: "+j;
d("#transactionID").text(p)
}}if(h[0]=="quickSignupMessage"){if(h[1]!="null"&&h[1]!=e){l=h[1];
if(l!=""){var p="Quick sign up with informa : "+l;
d("#quickSignupMessage").text(p)
}}}}}if(d("#transactionID").length==0||d("#transactionID").text().length==0){try{d("#uRNPayment").text("");
d("#emailID").text("")
}catch(k){console.log("Failed to set urnPayment/emailID")
}var q=informaGlobal.helpers.fetchUrnData();
if(q!=e&&q!=null){try{if(q.email!=e&&q.email!=null){d("#successEmail").text(q.email)
}if(q.urn!=e&&q.urn!=null){d("#uRNValue").text("Unique Registration Number : "+q.urn);
informaGlobal.helpers.getSatelliteTrackFormSuccess()
}if(q.signup!=e&&q.signup!=null&&q.signup!="undefined"){d("#quickSignUpMessage").text("Quick sign up with informa : "+q.signup)
}}catch(k){console.log("Failed to handle setting of urn data to elements")
}}c.name="";
informaGlobal.helpers.clearUrnData()
}};
b.documentReady=function(){};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.page.thankyou.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.page=informaGlobal.page||{};
informaGlobal.page.events=(function(d,c,a,e){var b={};
b.init=function(){d(c).on("load",this.pageLoad);
d(a).ready(this.documentReady)
};
b.handleThirdPartyUrls=function(){console.log("webprofile Info");
if(typeof ContextHub!="undefined"&&ContextHub!=null&&ContextHub.getStore("profileinfo")!=null&&ContextHub.getStore("profileinfo").getItem("webProfileId")!=null&&ContextHub.getStore("profileinfo").getItem("webProfileId")!=""){try{var k=ContextHub.getStore("profileinfo").getItem("webProfileId").toUpperCase()
}catch(l){console.log("Invalid contexthub store");
return
}var p=d("#reportSuite");
var q=p.data("location");
if(q==null||q==e){q=""
}if(d(this).attr("id")=="thirdPartyRedirect"){var o=informaGlobal.helpers.getMarketingClouldID();
var h="";
var g=informaGlobal.helpers.getCookie("informaId");
var r=atob(g);
var n=r.split("|");
for(var m=0;
m<n.length;
m++){var f=n[m].split("%");
if(f[0]==="utm_MDMContactID"){h=f[1]
}}this.href+="?reportSuite="+q+"&FormID="+formID+"&WebProfileID="+k+"&MDMContactID="+h+"&mcid="+o;
console.log(this.href)
}}};
b.checkPaymentErrorMsg=function(){var f=informaGlobal.helpers.getQueryParameters();
if(typeof f.status!="undefined"&&f.status!=null&&f.status=="0"){if(typeof f.message!="undefined"&&f.message!=null&&f.message!=""){alert(f.message)
}}};
b.initAnalytics=function(){informaGlobal.page.events.analyticsCaptureName();
informaGlobal.page.events.analyticsSetFormDetails();
var g=informaGlobal.helpers.getMDMID();
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var f=digital_data[0];
f.pagedata.analyticsMDMID=g;
f.pagedata.analyticsSearchResultsCount=d("#analyticsSearchResultsCount").val();
f.pagedata.analyticsResultStyle=d("#analyticsResultStyle").val();
f.pagedata.analyticsPageNotFound=d("#pageNotFound").val();
f.pagedata.analyticssitename=informaGlobal.helpers.getHostName(c.location.href)
}try{if(typeof ContextHub!="undefined"&&ContextHub!=null&&ContextHub.getStore("profileinfo")!=null&&ContextHub.getStore("profileinfo").getItem("firstName")!=""){if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var f=digital_data[0];
f.profileinfo.webProfileId=ContextHub.getStore("profileinfo").getItem("webProfileId");
f.profileinfo.webAddressPersonal=ContextHub.getStore("profileinfo").getItem("webAddressPersonal")
}}}catch(h){console.log(h)
}if(typeof ContextHub!="undefined"&&ContextHub!=null){ContextHub.set("eventdata",{analyticsEventEdition:d("#analyticsEventEdition").val(),analyticsRegion:d("#analyticsRegion").val(),analyticsBrand:d("#analyticsBrand").val(),analyticsEventSeries:d("#analyticsEventSeries").val(),analyticsBusinessUnit:d("#analyticsBusinessUnit").val(),analyticsSiteIndex:d("#analyticsSiteIndex").val(),analyticseventEditionCode:d("#analyticseventEditionCode").val(),analyticsVertical:d("#analyticsVertical").val(),analyticsExhibitionId:d("#analyticsExhibitionId").val()});
ContextHub.set("pagedata",{analyticsPageName:d("#analyticsPageName").val(),analyticsSection:d("#analyticsSection").val(),analyticsSubSection:d("#analyticsSubSection").val(),analyticsSubSectionOne:d("#analyticsSubSectionOne").val(),analyticsSubSectionTwo:d("#analyticsSubSectionTwo").val(),analyticsSearchResultsCount:d("#analyticsSearchResultsCount").val(),analyticsResultStyle:d("#analyticsResultStyle").val(),analyticsFormStep:"Step1",analyticsFormError:"",analyticsPageNotFound:d("#pageNotFound").val(),referrer:informaGlobal.helpers.getHostName(a.referrer),analyticsMDMID:informaGlobal.helpers.getMDMID()})
}};
b.analyticsCaptureName=function(){try{if(typeof ContextHub!="undefined"&&ContextHub!=null&&ContextHub.getStore("profileinfo")!=null&&ContextHub.getStore("profileinfo").getItem("firstName")!=""){d('[name="headerfirstName"]').html(ContextHub.getStore("profileinfo").getItem("firstName").toUpperCase());
d('[name="headerlastName"]').html(ContextHub.getStore("profileinfo").getItem("lastName").toUpperCase());
d("#userLoggedin").removeClass("hide");
d("#userLoggedout").addClass("hide");
d("#userLoggedin-hembrg").removeClass("hide");
d("#userLoggedout-hembrg").addClass("hide")
}else{d("#userLoggedin").addClass("hide");
d("#userLoggedout").removeClass("hide");
d("#userLoggedin-hembrg").addClass("hide");
d("#userLoggedout-hembrg").removeClass("hide")
}}catch(f){console.log(f)
}};
b.analyticsSetFormDetails=function(){try{var m=d(".eventEditionCode");
var k=m.data("location")+"-";
var f=d(".formCategory").data("formcategoryvalue");
var j="-"+d(".formName").data("formnamevalue");
var h=d(".formCategory").data("formprefixvalue");
if(k==null||k=="undefined-"){k=""
}if(j==null||j=="-undefined"){j=""
}formID=k+f+j;
console.log("formID"+formID);
d("#analyticsFormId").val(formID);
d("#analyticsFormName").val(d(".form-title-container").data("formtitlevalue"));
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var l=digital_data[0];
l.pagedata.analyticsFormEmailId=formID;
l.pagedata.analyticsFormName=d(".form-title-container").data("formtitlevalue");
l.pagedata.analyticsFormCategory=f;
l.pagedata.analyticsFormId=formID
}var g=informaGlobal.helpers.fetchUrnData();
if(g!=e&&g!=null){if(g.email!=e&&g.email!=null){d("#analyticsFormEmailId").val(g.email);
if(typeof digital_data!="undefined"&&digital_data!=null&&digital_data.length>0){var l=digital_data[0];
l.pagedata.analyticsFormEmailId=g.email
}}}}catch(n){console.log(n)
}};
b.pageLoad=function(){var f=[];
f={page:c.informaGlobal.page,"ui.events":c.informaGlobal.ui.events,helpers:c.informaGlobal.helpers,"forms.events":c.informaGlobal.forms.events,"page.thankyou":c.informaGlobal.page.thankyou};
for(var g in f){try{var k=f[g];
if(k!=e&&k!=null){if(typeof k.pageLoad==="function"){var j=k.pageLoad.bind(k);
j()
}else{console.warn(g+" does not contain pageLoad")
}}else{console.error("Could not initialize pageLoad for "+g)
}}catch(h){console.error("Exception caught for pageLoad: "+g,h)
}}d("a").click(c.informaGlobal.page.events.handleThirdPartyUrls)
};
b.documentReady=function(){var g=[];
g={page:c.informaGlobal.page,"ui.events":c.informaGlobal.ui.events,"forms.events":c.informaGlobal.forms.events,"page.thankyou":c.informaGlobal.page.thankyou};
for(var h in g){try{var l=g[h];
if(l!=e&&l!=null){if(typeof l.documentReady==="function"){var k=l.documentReady.bind(l);
k()
}else{console.warn(h+" does not contain documentReady")
}}else{console.error("Could not initialize documentReady for "+h)
}}catch(j){console.error("Exception caught for documentReady: "+h,j)
}}try{c.informaGlobal.page.events.initAnalytics()
}catch(j){console.error("Couldn't call page.events.initAnalytics",j)
}try{(typeof(d.fn.dataTable)==="function")?informaGlobal.ui.dataTable():null;
(typeof(d.fn.selectpicker)==="function")?d(".selectPicker").each(function(){d(this).selectpicker()
}):null
}catch(j){console.error("Couldn't handle selectPicker",j)
}try{c.informaGlobal.helpers.setCookieParams()
}catch(j){console.error("Couldn't call helpers.setCookieParams",j)
}try{var f=d("#thirdPartyFormDetails");
if(f.length>0){if(f.val()!=null&&f.val()!=""){c.informaGlobal.helpers.populateFormAndUTMparameters()
}}}catch(j){console.error("Couldn't call helpers.populateFormAndUTMparameters",j)
}};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.page.events.init();
var informaGlobal=window.informaGlobal||{};
informaGlobal.anchor=informaGlobal.anchor||{};
informaGlobal.anchor=(function(d,c,a,e){var b={};
b.init=function(){d(c).on("load",this.pageLoad)
};
b.documentReady=function(){};
b.pageLoad=function(){try{var g=c.location.hash.substr(1);
if(g==null||g==""){return
}d('a[data-expando-link="true"]').each(function(h,p){if(d(p).attr("name")==g){var o=d(p).data("expando-group");
var l=d(p).data("expando-aria");
var m=d(p).data("expando-activator");
var n=d(p).data("expando-activator-group");
var k=d(p).data("expando-animate-scroll");
if(k!=null&&(k=="true"||k==true)){k=true
}else{k=false
}var j=d(p).data("expando-root");
if(o!=null&&o!=null){d(o).collapse("hide");
d(o).removeClass("in");
d(o).removeClass("active")
}if(n!=null&&n!=""){d(n).removeClass("active");
d(n).removeAttr("aria-expanded");
d(n).removeAttr("aria-selected")
}if(m!=null&&m!=""){d(m).addClass("active");
d(m).attr("aria-selected","true")
}if(l!=null&&l!=""){d(l).attr("aria-expanded","true")
}if(j!=null&&j!=""){informaGlobal.anchor.tryExpand(p,j,k)
}}})
}catch(f){console.log("Failed to handle accordion navigation")
}};
b.tryExpand=function(h,f,g){if(d(f).length==0){return
}if(d(f).hasClass("collapsing")==false){d(f).collapse("show");
d(f).addClass("active")
}setTimeout(function(){if(d(f).hasClass("in")){if(g){d(a.body).animate({scrollTop:d(f).offset().top},800)
}}else{informaGlobal.anchor.tryExpand(h,f,g)
}},100)
};
return b
})(jQuery,window,document);
window.informaGlobal=window.informaGlobal||informaGlobal;
window.informaGlobal.anchor.init();
var informaColumnSorter=(function(d,c,b){d(b).ready(function(){try{if(c.CQ&&c.CQ.wcm){return
}d('.column-control-columns[data-sort="true"]').each(function(){var h=d(this).data("sort-key");
var j=d(this).find(".column-item-wrapper");
j.sort(a(h));
j.detach();
var g=d(this).find(".column");
var f=0;
j.each(function(){d(g[f]).append(this);
f=(f+1)%g.length
})
});
d(c).resize(function(){var f=c.innerWidth;
if(f==796||f<769){d('.column-control-columns[data-sort="true"]').each(function(){var h=d(this).data("sort-key");
var g=d(this).find(".column-item-wrapper");
g.unwrap();
var j=g.parent();
g.sort(a(h)).appendTo(j)
})
}})
}catch(e){console.log("Failed to handle sorting")
}});
var a=function(e){var f=function(h,g){var l=1;
var j=h.getAttribute("data-"+e);
var k=g.getAttribute("data-"+e);
if(j!=undefined&&j!=null&&j!=""&&(k==undefined||k==null||k==="")){k=Number.MAX_VALUE
}if(k!=undefined&&k!=null&&k!=""&&(j==undefined||j==null||j==="")){j=Number.MAX_VALUE
}if(j==undefined||j==null||j===""){j=h.getAttribute("data-modified");
l=-1
}if(k==undefined||k==null||k===""){k=g.getAttribute("data-modified");
l=-1
}if(j>k){return(1*l)
}if(j<k){return(-1*l)
}return 0
};
return f
}
})(jQuery,window,document);
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}})(function(g){var b=[],e=[],f={precision:100,elapse:false,defer:false};
e.push(/^[0-9]*$/.source);
e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
e=new RegExp(e.join("|"));
function d(l){if(l instanceof Date){return l
}if(String(l).match(e)){if(String(l).match(/^[0-9]*$/)){l=Number(l)
}if(String(l).match(/\-/)){l=String(l).replace(/\-/g,"/")
}return new Date(l)
}else{throw new Error("Couldn't cast `"+l+"` to a date object.")
}}var c={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"};
function j(m){var l=m.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");
return new RegExp(l)
}function h(m,l){return function(w){if(l){return l
}var o=w.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
if(o){for(var p=0,q=o.length;
p<q;
++p){var t=o[p].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),r=j(t[0]),n=t[1]||"",u=t[3]||"",v=null;
t=t[2];
if(c.hasOwnProperty(t)){v=c[t];
v=Number(m[v])
}if(v!==null){if(n==="!"){v=k(u,v)
}if(n===""){if(v<10){v="0"+v.toString()
}}w=w.replace(r,v.toString())
}}}w=w.replace(/%%/,"%");
return w
}
}function k(o,n){var l="s",m="";
if(o){o=o.replace(/(:|;|\s)/gi,"").split(/\,/);
if(o.length===1){l=o[0]
}else{m=o[0];
l=o[1]
}}if(Math.abs(n)>1){return l
}else{return m
}}var a=function(m,n,o,l){this.el=m;
this.$el=g(m);
this.interval=null;
this.expiry=o;
this.offset={};
this.options=g.extend({},f);
this.instanceNumber=b.length;
b.push(this);
this.$el.data("countdown-instance",this.instanceNumber);
if(l){if(typeof l==="function"){this.$el.on("update.countdown",l);
this.$el.on("stoped.countdown",l);
this.$el.on("finish.countdown",l)
}else{this.options=g.extend({},f,l)
}}this.setFinalDate(n);
if(this.options.defer===false){this.start()
}};
g.extend(a.prototype,{start:function(){if(this.interval!==null){clearInterval(this.interval)
}var l=this;
this.update();
this.interval=setInterval(function(){l.update.call(l)
},this.options.precision)
},stop:function(){clearInterval(this.interval);
this.interval=null;
this.dispatchEvent("stoped")
},toggle:function(){if(this.interval){this.stop()
}else{this.start()
}},pause:function(){this.stop()
},resume:function(){this.start()
},remove:function(){this.stop.call(this);
b[this.instanceNumber]=null;
delete this.$el.data().countdownInstance
},setFinalDate:function(l){this.finalDate=d(l)
},update:function(){if(this.$el.closest("html").length===0){this.remove();
return
}var m=g._data(this.el,"events")!==undefined,n=new Date(),l;
l=this.finalDate.getTime()-n.getTime();
l=Math.ceil(l/1000);
l=!this.options.elapse&&l<0?0:Math.abs(l);
if(this.totalSecsLeft===l||!m){return
}else{this.totalSecsLeft=l
}this.elapsed=n>=this.finalDate;
this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-n.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft};
if(!this.options.elapse&&this.totalSecsLeft===0){this.stop();
this.dispatchEvent("finish")
}else{this.dispatchEvent("update")
}},dispatchEvent:function(l){var m=g.Event(l+".countdown");
m.finalDate=this.finalDate;
m.elapsed=this.elapsed;
m.offset=g.extend({},this.offset);
if(l==="finish"){m.strftime=h(this.offset,this.expiry)
}else{m.strftime=h(this.offset)
}this.$el.trigger(m)
}});
g.fn.countdown=function(){var l=Array.prototype.slice.call(arguments,0);
return this.each(function(){var n=g(this).data("countdown-instance");
if(n!==undefined){var m=b[n],o=l[0];
if(a.prototype.hasOwnProperty(o)){m[o].apply(m,l.slice(2))
}else{if(String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){m.setFinalDate.call(m,o);
m.start()
}else{g.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,o))
}}}else{new a(this,l[0],l[1],l[2])
}})
}
});
function searchcount(c,b){var d=b+".html";
$("#project-detail-page").empty();
$("#project-detail-page").html("<h2 id='loader'>Loading....</h2>");
$("#project-detail-page").load(d+"#par_page");
ContextHub.set("pagedata",{analyticsSearchindex:c});
var a=digital_data[0];
a.pagedata.analyticsSearchindex=c
}$(document).ready(function(){$(".countDisplay").each(function(a){$(this).countdown(new Date($(this).data("eventdate")),$(this).data("expirytext"),function(b){var c=$(this).data("labels");
$(this).html(b.strftime(c.split(" ").reduce(function(d,e){return d+"<span>"+e+"</span> "
},"")))
})
})
});