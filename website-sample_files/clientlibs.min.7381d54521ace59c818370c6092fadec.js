(function(){var n;
var g=[],t=[];
var J=0;
var a=+new Date+"";
var b=75;
var l=40;
var G=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var y=/\b__p \+= '';/g,T=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var B=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var E=/\w*$/;
var r=/^\s*function[ \n\r\t]+\w/;
var o=/<%=([\s\S]+?)%>/g;
var Y=RegExp("^["+G+"]*0+(?=.$)");
var R=/($^)/;
var j=/\bthis\b/;
var V=/['\n\r\t\u2028\u2029\\]/g;
var z=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"];
var ab=0;
var U="[object Arguments]",v="[object Array]",C="[object Boolean]",K="[object Date]",ad="[object Function]",H="[object Number]",c="[object Object]",L="[object RegExp]",I="[object String]";
var w={};
w[ad]=false;
w[U]=w[v]=w[C]=w[K]=w[H]=w[c]=w[L]=w[I]=true;
var O={leading:false,maxWait:0,trailing:false};
var m={configurable:false,enumerable:false,value:null,writable:false};
var F={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var N={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var D=(F[typeof window]&&window)||this;
var W=F[typeof exports]&&exports&&!exports.nodeType&&exports;
var A=F[typeof module]&&module&&!module.nodeType&&module;
var Q=A&&A.exports===W&&W;
var x=F[typeof global]&&global;
if(x&&(x.global===x||x.window===x)){D=x
}function h(ai,ah,af){var ae=(af||0)-1,ag=ai?ai.length:0;
while(++ae<ag){if(ai[ae]===ah){return ae
}}return -1
}function P(ae,ah){var ag=typeof ah;
ae=ae.cache;
if(ag=="boolean"||ah==null){return ae[ah]?0:-1
}if(ag!="number"&&ag!="string"){ag="object"
}var af=ag=="number"?ah:a+ah;
ae=(ae=ae[ag])&&ae[af];
return ag=="object"?(ae&&h(ae,ah)>-1?0:-1):(ae?0:-1)
}function M(ai){var af=this.cache,ah=typeof ai;
if(ah=="boolean"||ai==null){af[ai]=true
}else{if(ah!="number"&&ah!="string"){ah="object"
}var ag=ah=="number"?ai:a+ai,ae=af[ah]||(af[ah]={});
if(ah=="object"){(ae[ag]||(ae[ag]=[])).push(ai)
}else{ae[ag]=true
}}}function q(ae){return ae.charCodeAt(0)
}function X(ag,af){var aj=ag.criteria,al=af.criteria,ah=-1,ai=aj.length;
while(++ah<ai){var ak=aj[ah],ae=al[ah];
if(ak!==ae){if(ak>ae||typeof ak=="undefined"){return 1
}if(ak<ae||typeof ae=="undefined"){return -1
}}}return ag.index-af.index
}function aa(al){var ah=-1,aj=al.length,ak=al[0],ag=al[(aj/2)|0],ai=al[aj-1];
if(ak&&typeof ak=="object"&&ag&&typeof ag=="object"&&ai&&typeof ai=="object"){return false
}var af=s();
af["false"]=af["null"]=af["true"]=af["undefined"]=false;
var ae=s();
ae.array=al;
ae.cache=af;
ae.push=M;
while(++ah<aj){ae.push(al[ah])
}return ae
}function f(ae){return"\\"+N[ae]
}function d(){return g.pop()||[]
}function s(){return t.pop()||{array:null,cache:null,criteria:null,"false":false,index:0,"null":false,number:null,object:null,push:null,string:null,"true":false,"undefined":false,value:null}
}function S(ae){ae.length=0;
if(g.length<l){g.push(ae)
}}function p(af){var ae=af.cache;
if(ae){p(ae)
}af.array=af.cache=af.criteria=af.object=af.number=af.string=af.value=null;
if(t.length<l){t.push(af)
}}function u(aj,ai,af){ai||(ai=0);
if(typeof af=="undefined"){af=aj?aj.length:0
}var ag=-1,ah=af-ai||0,ae=Array(ah<0?0:ah);
while(++ag<ah){ae[ag]=aj[ai+ag]
}return ae
}function Z(aj){aj=aj?ac.defaults(D.Object(),aj,ac.pick(D,z)):D;
var aH=aj.Array,cf=aj.Boolean,cg=aj.Date,a0=aj.Function,b5=aj.Math,bf=aj.Number,c3=aj.Object,cH=aj.RegExp,cq=aj.String,aI=aj.TypeError;
var b9=[];
var cL=c3.prototype;
var cX=aj._;
var aB=cL.toString;
var b2=cH("^"+cq(aB).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");
var aX=b5.ceil,bT=aj.clearTimeout,cP=b5.floor,bD=a0.prototype.toString,av=b6(av=c3.getPrototypeOf)&&av,a1=cL.hasOwnProperty,ay=b9.push,aY=aj.setTimeout,co=b9.splice,cK=b9.unshift;
var cI=(function(){try{var dj={},dh=b6(dh=c3.defineProperty)&&dh,at=dh(dj,dj,dj)&&dh
}catch(di){}return at
}());
var ax=b6(ax=c3.create)&&ax,bg=b6(bg=aH.isArray)&&bg,aK=aj.isFinite,bF=aj.isNaN,ck=b6(ck=c3.keys)&&ck,cl=b5.max,ao=b5.min,dc=aj.parseInt,bL=b5.random;
var cM={};
cM[v]=aH;
cM[C]=cf;
cM[K]=cg;
cM[ad]=a0;
cM[c]=c3;
cM[H]=bf;
cM[L]=cH;
cM[I]=cq;
function aV(at){return(at&&typeof at=="object"&&!bE(at)&&a1.call(at,"__wrapped__"))?at:new cR(at)
}function cR(dh,at){this.__chain__=!!at;
this.__wrapped__=dh
}cR.prototype=aV.prototype;
var aG=aV.support={};
aG.funcDecomp=!b6(aj.WinRTError)&&j.test(Z);
aG.funcNames=typeof a0.name=="string";
aV.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:o,variable:"",imports:{_:aV}};
function ar(dk){var dj=dk[0],dh=dk[2],at=dk[4];
function di(){if(dh){var dn=u(dh);
ay.apply(dn,arguments)
}if(this instanceof di){var dm=b1(dj.prototype),dl=dj.apply(dm,dn||arguments);
return df(dl)?dl:dm
}return dj.apply(at,dn||arguments)
}af(di,dk);
return di
}function bk(dq,dm,dr,dk,di){if(dr){var ds=dr(dq);
if(typeof ds!="undefined"){return ds
}}var dj=df(dq);
if(dj){var dn=aB.call(dq);
if(!w[dn]){return dq
}var dp=cM[dn];
switch(dn){case C:case K:return new dp(+dq);
case H:case I:return new dp(dq);
case L:ds=dp(dq.source,E.exec(dq));
ds.lastIndex=dq.lastIndex;
return ds
}}else{return dq
}var dl=bE(dq);
if(dm){var dh=!dk;
dk||(dk=d());
di||(di=d());
var at=dk.length;
while(at--){if(dk[at]==dq){return di[at]
}}ds=dl?dp(dq.length):{}
}else{ds=dl?u(dq):bt({},dq)
}if(dl){if(a1.call(dq,"index")){ds.index=dq.index
}if(a1.call(dq,"input")){ds.input=dq.input
}}if(!dm){return ds
}dk.push(dq);
di.push(ds);
(dl?bC:bP)(dq,function(dt,du){ds[du]=bk(dt,dm,dr,dk,di)
});
if(dh){S(dk);
S(di)
}return ds
}function b1(at,dh){return df(at)?ax(at):{}
}if(!ax){b1=(function(){function at(){}return function(di){if(df(di)){at.prototype=di;
var dh=new at;
at.prototype=null
}return dh||aj.Object()
}
}())
}function cv(dh,at,dk){if(typeof dh!="function"){return bl
}if(typeof at=="undefined"||!("prototype" in dh)){return dh
}var dj=dh.__bindData__;
if(typeof dj=="undefined"){if(aG.funcNames){dj=!dh.name
}dj=dj||!aG.funcDecomp;
if(!dj){var di=bD.call(dh);
if(!aG.funcNames){dj=!r.test(di)
}if(!dj){dj=j.test(di);
af(dh,dj)
}}}if(dj===false||(dj!==true&&dj[1]&1)){return dh
}switch(dk){case 1:return function(dl){return dh.call(at,dl)
};
case 2:return function(dm,dl){return dh.call(at,dm,dl)
};
case 3:return function(dm,dl,dn){return dh.call(at,dm,dl,dn)
};
case 4:return function(dl,dn,dm,dp){return dh.call(at,dl,dn,dm,dp)
}
}return bZ(dh,at)
}function bn(dj){var dl=dj[0],di=dj[1],dn=dj[2],dh=dj[3],dr=dj[4],at=dj[5];
var dk=di&1,dt=di&2,dq=di&4,dp=di&8,ds=dl;
function dm(){var dv=dk?dr:this;
if(dn){var dw=u(dn);
ay.apply(dw,arguments)
}if(dh||dq){dw||(dw=u(arguments));
if(dh){ay.apply(dw,dh)
}if(dq&&dw.length<at){di|=16&~32;
return bn([dl,(dp?di:di&~3),dw,null,dr,at])
}}dw||(dw=arguments);
if(dt){dl=dv[ds]
}if(this instanceof dm){dv=b1(dl.prototype);
var du=dl.apply(dv,dw);
return df(du)?du:dv
}return dl.apply(dv,dw)
}af(dm,dj);
return dm
}function de(dj,dn){var di=-1,dk=b7(),dh=dj?dj.length:0,dl=dh>=b&&dk===h,dp=[];
if(dl){var at=aa(dn);
if(at){dk=P;
dn=at
}else{dl=false
}}while(++di<dh){var dm=dj[di];
if(dk(dn,dm)<0){dp.push(dm)
}}if(dl){p(dn)
}return dp
}function bV(dj,dl,dh,dm){var di=(dm||0)-1,at=dj?dj.length:0,dr=[];
while(++di<at){var dn=dj[di];
if(dn&&typeof dn=="object"&&typeof dn.length=="number"&&(bE(dn)||a6(dn))){if(!dl){dn=bV(dn,dl,dh)
}var dq=-1,dk=dn.length,dp=dr.length;
dr.length+=dk;
while(++dq<dk){dr[dp++]=dn[dq]
}}else{if(!dh){dr.push(dn)
}}}return dr
}function bd(dz,dy,dn,dv,dB,dA){if(dn){var dt=dn(dz,dy);
if(typeof dt!="undefined"){return !!dt
}}if(dz===dy){return dz!==0||(1/dz==1/dy)
}var dm=typeof dz,dk=typeof dy;
if(dz===dz&&!(dz&&F[dm])&&!(dy&&F[dk])){return false
}if(dz==null||dy==null){return dz===dy
}var dh=aB.call(dz),dr=aB.call(dy);
if(dh==U){dh=c
}if(dr==U){dr=c
}if(dh!=dr){return false
}switch(dh){case C:case K:return +dz==+dy;
case H:return(dz!=+dz)?dy!=+dy:(dz==0?(1/dz==1/dy):dz==+dy);
case L:case I:return dz==cq(dy)
}var dp=dh==v;
if(!dp){var du=a1.call(dz,"__wrapped__"),at=a1.call(dy,"__wrapped__");
if(du||at){return bd(du?dz.__wrapped__:dz,at?dy.__wrapped__:dy,dn,dv,dB,dA)
}if(dh!=c){return false
}var dl=dz.constructor,di=dy.constructor;
if(dl!=di&&!(az(dl)&&dl instanceof dl&&az(di)&&di instanceof di)&&("constructor" in dz&&"constructor" in dy)){return false
}}var ds=!dB;
dB||(dB=d());
dA||(dA=d());
var dj=dB.length;
while(dj--){if(dB[dj]==dz){return dA[dj]==dy
}}var dw=0;
dt=true;
dB.push(dz);
dA.push(dy);
if(dp){dj=dz.length;
dw=dy.length;
dt=dw==dj;
if(dt||dv){while(dw--){var dq=dj,dx=dy[dw];
if(dv){while(dq--){if((dt=bd(dz[dq],dx,dn,dv,dB,dA))){break
}}}else{if(!(dt=bd(dz[dw],dx,dn,dv,dB,dA))){break
}}}}}else{ak(dy,function(dE,dD,dC){if(a1.call(dC,dD)){dw++;
return(dt=a1.call(dz,dD)&&bd(dz[dD],dE,dn,dv,dB,dA))
}});
if(dt&&!dv){ak(dz,function(dE,dD,dC){if(a1.call(dC,dD)){return(dt=--dw>-1)
}})
}}dB.pop();
dA.pop();
if(ds){S(dB);
S(dA)
}return dt
}function ai(dh,di,dk,at,dj){(bE(di)?bC:bP)(di,function(ds,dn){var dr,dp,dm=ds,dq=dh[dn];
if(ds&&((dp=bE(ds))||aP(ds))){var dt=at.length;
while(dt--){if((dr=at[dt]==ds)){dq=dj[dt];
break
}}if(!dr){var dl;
if(dk){dm=dk(dq,ds);
if((dl=typeof dm!="undefined")){dq=dm
}}if(!dl){dq=dp?(bE(dq)?dq:[]):(aP(dq)?dq:{})
}at.push(ds);
dj.push(dq);
if(!dl){ai(dq,ds,dk,at,dj)
}}}else{if(dk){dm=dk(dq,ds);
if(typeof dm=="undefined"){dm=ds
}}if(typeof dm!="undefined"){dq=dm
}}dh[dn]=dq
})
}function aq(dh,at){return dh+cP(bL()*(at-dh+1))
}function ag(dm,dj,dr){var dl=-1,dn=b7(),di=dm?dm.length:0,ds=[];
var dp=!dj&&di>=b&&dn===h,dh=(dr||dp)?d():ds;
if(dp){var at=aa(dh);
dn=P;
dh=at
}while(++dl<di){var dq=dm[dl],dk=dr?dr(dq,dl,dm):dq;
if(dj?!dl||dh[dh.length-1]!==dk:dn(dh,dk)<0){if(dr||dp){dh.push(dk)
}ds.push(dq)
}}if(dp){S(dh.array);
p(dh)
}else{if(dr){S(dh)
}}return ds
}function bU(at){return function(dm,dn,di){var dh={};
dn=aV.createCallback(dn,di,3);
var dj=-1,dk=dm?dm.length:0;
if(typeof dk=="number"){while(++dj<dk){var dl=dm[dj];
at(dh,dl,dn(dl,dj,dm),dm)
}}else{bP(dm,function(dq,dp,dr){at(dh,dq,dn(dq,dp,dr),dr)
})
}return dh
}
}function cN(dm,dj,dn,di,dt,at){var dl=dj&1,du=dj&2,dr=dj&4,dq=dj&8,dh=dj&16,dp=dj&32;
if(!du&&!az(dm)){throw new aI
}if(dh&&!dn.length){dj&=~16;
dh=dn=false
}if(dp&&!di.length){dj&=~32;
dp=di=false
}var dk=dm&&dm.__bindData__;
if(dk&&dk!==true){dk=u(dk);
if(dk[2]){dk[2]=u(dk[2])
}if(dk[3]){dk[3]=u(dk[3])
}if(dl&&!(dk[1]&1)){dk[4]=dt
}if(!dl&&dk[1]&1){dj|=8
}if(dr&&!(dk[1]&4)){dk[5]=at
}if(dh){ay.apply(dk[2]||(dk[2]=[]),dn)
}if(dp){cK.apply(dk[3]||(dk[3]=[]),di)
}dk[1]|=dj;
return cN.apply(null,dk)
}var ds=(dj==1||dj===17)?ar:bn;
return ds([dm,dj,dn,di,dt,at])
}function bp(at){return aU[at]
}function b7(){var at=(at=aV.indexOf)===c6?h:at;
return at
}function b6(at){return typeof at=="function"&&b2.test(at)
}var af=!cI?ah:function(at,dh){m.value=dh;
cI(at,"__bindData__",m)
};
function aM(di){var dh,at;
if(!(di&&aB.call(di)==c)||(dh=di.constructor,az(dh)&&!(dh instanceof dh))){return false
}ak(di,function(dk,dj){at=dj
});
return typeof at=="undefined"||a1.call(di,at)
}function bq(at){return bW[at]
}function a6(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aB.call(at)==U||false
}var bE=bg||function(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aB.call(at)==v||false
};
var be=function(di){var dh,dj=di,at=[];
if(!dj){return at
}if(!(F[typeof di])){return at
}for(dh in dj){if(a1.call(dj,dh)){at.push(dh)
}}return at
};
var cb=!ck?be:function(at){if(!df(at)){return[]
}return ck(at)
};
var aU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bW=b8(aU);
var cc=cH("("+cb(bW).join("|")+")","g"),ci=cH("["+cb(aU).join("")+"]","g");
var bt=function(dk,at,dn){var dm,dj=dk,dt=dj;
if(!dj){return dt
}var dq=arguments,dh=0,dl=typeof dn=="number"?2:dq.length;
if(dl>3&&typeof dq[dl-2]=="function"){var ds=cv(dq[--dl-1],dq[dl--],2)
}else{if(dl>2&&typeof dq[dl-1]=="function"){ds=dq[--dl]
}}while(++dh<dl){dj=dq[dh];
if(dj&&F[typeof dj]){var dp=-1,dr=F[typeof dj]&&cb(dj),di=dr?dr.length:0;
while(++dp<di){dm=dr[dp];
dt[dm]=ds?ds(dt[dm],dj[dm]):dj[dm]
}}}return dt
};
function cD(di,dh,dj,at){if(typeof dh!="boolean"&&dh!=null){at=dj;
dj=dh;
dh=false
}return bk(di,dh,typeof dj=="function"&&cv(dj,at,1))
}function db(dh,di,at){return bk(dh,true,typeof di=="function"&&cv(di,at,1))
}function aR(dh,di){var at=b1(dh);
return di?bt(at,di):at
}var bu=function(dk,at,dn){var dm,dj=dk,ds=dj;
if(!dj){return ds
}var dq=arguments,dh=0,dl=typeof dn=="number"?2:dq.length;
while(++dh<dl){dj=dq[dh];
if(dj&&F[typeof dj]){var dp=-1,dr=F[typeof dj]&&cb(dj),di=dr?dr.length:0;
while(++dp<di){dm=dr[dp];
if(typeof ds[dm]=="undefined"){ds[dm]=dj[dm]
}}}}return ds
};
function ct(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
bP(di,function(dm,dl,dk){if(dj(dm,dl,dk)){at=dl;
return false
}});
return at
}function bO(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
c2(di,function(dm,dl,dk){if(dj(dm,dl,dk)){at=dl;
return false
}});
return at
}var ak=function(dk,dl,dh){var di,dj=dk,at=dj;
if(!dj){return at
}if(!F[typeof dj]){return at
}dl=dl&&typeof dh=="undefined"?dl:cv(dl,dh,3);
for(di in dj){if(dl(dj[di],di,dk)===false){return at
}}return at
};
function cu(dh,dk,at){var dj=[];
ak(dh,function(dm,dl){dj.push(dl,dm)
});
var di=dj.length;
dk=cv(dk,at,3);
while(di--){if(dk(dj[di--],dj[di],dh)===false){break
}}return dh
}var bP=function(di,dn,dl){var dj,dh=di,dp=dh;
if(!dh){return dp
}if(!F[typeof dh]){return dp
}dn=dn&&typeof dl=="undefined"?dn:cv(dn,dl,3);
var dk=-1,dm=F[typeof dh]&&cb(dh),at=dm?dm.length:0;
while(++dk<at){dj=dm[dk];
if(dn(dh[dj],dj,di)===false){return dp
}}return dp
};
function c2(dh,dl,at){var dj=cb(dh),dk=dj.length;
dl=cv(dl,at,3);
while(dk--){var di=dj[dk];
if(dl(dh[di],di,dh)===false){break
}}return dh
}function cJ(dh){var at=[];
ak(dh,function(dj,di){if(az(dj)){at.push(di)
}});
return at.sort()
}function cZ(at,dh){return at?a1.call(at,dh):false
}function b8(di){var dh=-1,dk=cb(di),dl=dk.length,at={};
while(++dh<dl){var dj=dk[dh];
at[di[dj]]=dj
}return at
}function bI(at){return at===true||at===false||at&&typeof at=="object"&&aB.call(at)==C||false
}function a9(at){return at&&typeof at=="object"&&aB.call(at)==K||false
}function b3(at){return at&&at.nodeType===1||false
}function cr(dj){var at=true;
if(!dj){return at
}var dh=aB.call(dj),di=dj.length;
if((dh==v||dh==I||dh==U)||(dh==c&&typeof di=="number"&&az(dj.splice))){return !di
}bP(dj,function(){return(at=false)
});
return at
}function b4(di,at,dj,dh){return bd(di,at,typeof dj=="function"&&cv(dj,dh,2))
}function aL(at){return aK(at)&&!bF(parseFloat(at))
}function az(at){return typeof at=="function"
}function df(at){return !!(at&&F[typeof at])
}function bR(at){return bs(at)&&at!=+at
}function c5(at){return at===null
}function bs(at){return typeof at=="number"||at&&typeof at=="object"&&aB.call(at)==H||false
}var aP=!av?aM:function(di){if(!(di&&aB.call(di)==c)){return false
}var at=di.valueOf,dh=b6(at)&&(dh=av(at))&&av(dh);
return dh?(di==dh||av(di)==dh):aM(di)
};
function cT(at){return at&&typeof at=="object"&&aB.call(at)==L||false
}function cA(at){return typeof at=="string"||at&&typeof at=="object"&&aB.call(at)==I||false
}function bY(at){return typeof at=="undefined"
}function bi(di,dj,dh){var at={};
dj=aV.createCallback(dj,dh,3);
bP(di,function(dm,dl,dk){at[dl]=dj(dm,dl,dk)
});
return at
}function bK(dk){var dj=arguments,dl=2;
if(!df(dk)){return dk
}if(typeof dj[2]!="number"){dl=dj.length
}if(dl>3&&typeof dj[dl-2]=="function"){var dn=cv(dj[--dl-1],dj[dl--],2)
}else{if(dl>2&&typeof dj[dl-1]=="function"){dn=dj[--dl]
}}var di=u(arguments,1,dl),dh=-1,at=d(),dm=d();
while(++dh<dl){ai(dk,di[dh],dn,at,dm)
}S(at);
S(dm);
return dk
}function cw(dj,dn,dh){var at={};
if(typeof dn!="function"){var dl=[];
ak(dj,function(dq,dp){dl.push(dp)
});
dl=de(dl,bV(arguments,true,false,1));
var di=-1,dm=dl.length;
while(++di<dm){var dk=dl[di];
at[dk]=dj[dk]
}}else{dn=aV.createCallback(dn,dh,3);
ak(dj,function(dr,dq,dp){if(!dn(dr,dq,dp)){at[dq]=dr
}})
}return at
}function bA(di){var dh=-1,dk=cb(di),dl=dk.length,at=aH(dl);
while(++dh<dl){var dj=dk[dh];
at[dh]=[dj,di[dj]]
}return at
}function bM(dj,dn,dh){var at={};
if(typeof dn!="function"){var di=-1,dl=bV(arguments,true,false,1),dm=df(dj)?dl.length:0;
while(++di<dm){var dk=dl[di];
if(dk in dj){at[dk]=dj[dk]
}}}else{dn=aV.createCallback(dn,dh,3);
ak(dj,function(dr,dq,dp){if(dn(dr,dq,dp)){at[dq]=dr
}})
}return at
}function cY(di,dm,dh,at){var dl=bE(di);
if(dh==null){if(dl){dh=[]
}else{var dk=di&&di.constructor,dj=dk&&dk.prototype;
dh=b1(dj)
}}if(dm){dm=aV.createCallback(dm,at,4);
(dl?bC:bP)(di,function(dq,dp,dn){return dm(dh,dq,dp,dn)
})
}return dh
}function bx(di){var dh=-1,dj=cb(di),dk=dj.length,at=aH(dk);
while(++dh<dk){at[dh]=di[dj[dh]]
}return at
}function cO(dl){var di=arguments,dh=-1,dj=bV(di,true,false,1),dk=(di[2]&&di[2][di[1]]===dl)?1:dj.length,at=aH(dk);
while(++dh<dk){at[dh]=dl[dj[dh]]
}return at
}function a5(dm,dl,dj){var dh=-1,di=b7(),dk=dm?dm.length:0,at=false;
dj=(dj<0?cl(0,dk+dj):dj)||0;
if(bE(dm)){at=di(dm,dl,dj)>-1
}else{if(typeof dk=="number"){at=(cA(dm)?dm.indexOf(dl,dj):di(dm,dl,dj))>-1
}else{bP(dm,function(dn){if(++dh>=dj){return !(at=dn===dl)
}})
}}return at
}var bJ=bU(function(at,di,dh){(a1.call(at,dh)?at[dh]++:at[dh]=1)
});
function aA(dk,dl,dh){var at=true;
dl=aV.createCallback(dl,dh,3);
var di=-1,dj=dk?dk.length:0;
if(typeof dj=="number"){while(++di<dj){if(!(at=!!dl(dk[di],di,dk))){break
}}}else{bP(dk,function(dn,dm,dp){return(at=!!dl(dn,dm,dp))
})
}return at
}function bQ(dl,dm,dh){var at=[];
dm=aV.createCallback(dm,dh,3);
var di=-1,dj=dl?dl.length:0;
if(typeof dj=="number"){while(++di<dj){var dk=dl[di];
if(dm(dk,di,dl)){at.push(dk)
}}}else{bP(dl,function(dp,dn,dq){if(dm(dp,dn,dq)){at.push(dp)
}})
}return at
}function bH(dl,dm,dh){dm=aV.createCallback(dm,dh,3);
var di=-1,dj=dl?dl.length:0;
if(typeof dj=="number"){while(++di<dj){var dk=dl[di];
if(dm(dk,di,dl)){return dk
}}}else{var at;
bP(dl,function(dp,dn,dq){if(dm(dp,dn,dq)){at=dp;
return false
}});
return at
}}function c9(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
au(di,function(dl,dk,dm){if(dj(dl,dk,dm)){at=dl;
return false
}});
return at
}function bC(dj,dk,at){var dh=-1,di=dj?dj.length:0;
dk=dk&&typeof at=="undefined"?dk:cv(dk,at,3);
if(typeof di=="number"){while(++dh<di){if(dk(dj[dh],dh,dj)===false){break
}}}else{bP(dj,dk)
}return dj
}function au(dj,dk,at){var di=dj?dj.length:0;
dk=dk&&typeof at=="undefined"?dk:cv(dk,at,3);
if(typeof di=="number"){while(di--){if(dk(dj[di],di,dj)===false){break
}}}else{var dh=cb(dj);
di=dh.length;
bP(dj,function(dm,dl,dn){dl=dh?dh[--di]:--di;
return dk(dn[dl],dl,dn)
})
}return dj
}var br=bU(function(at,di,dh){(a1.call(at,dh)?at[dh]:at[dh]=[]).push(di)
});
var c7=bU(function(at,di,dh){at[dh]=di
});
function aJ(dm,dh){var dj=u(arguments,2),di=-1,dl=typeof dh=="function",dk=dm?dm.length:0,at=aH(typeof dk=="number"?dk:0);
bC(dm,function(dn){at[++di]=(dl?dh:dn[dh]).apply(dn,dj)
});
return at
}function bm(dk,dl,dh){var di=-1,dj=dk?dk.length:0;
dl=aV.createCallback(dl,dh,3);
if(typeof dj=="number"){var at=aH(dj);
while(++di<dj){at[di]=dl(dk[di],di,dk)
}}else{at=[];
bP(dk,function(dn,dm,dp){at[++di]=dl(dn,dm,dp)
})
}return at
}function bj(dm,dn,dh){var dk=-Infinity,at=dk;
if(typeof dn!="function"&&dh&&dh[dn]===dm){dn=null
}if(dn==null&&bE(dm)){var di=-1,dj=dm.length;
while(++di<dj){var dl=dm[di];
if(dl>at){at=dl
}}}else{dn=(dn==null&&cA(dm))?q:aV.createCallback(dn,dh,3);
bC(dm,function(dq,dp,ds){var dr=dn(dq,dp,ds);
if(dr>dk){dk=dr;
at=dq
}})
}return at
}function cn(dm,dn,dh){var dk=Infinity,at=dk;
if(typeof dn!="function"&&dh&&dh[dn]===dm){dn=null
}if(dn==null&&bE(dm)){var di=-1,dj=dm.length;
while(++di<dj){var dl=dm[di];
if(dl<at){at=dl
}}}else{dn=(dn==null&&cA(dm))?q:aV.createCallback(dn,dh,3);
bC(dm,function(dq,dp,ds){var dr=dn(dq,dp,ds);
if(dr<dk){dk=dr;
at=dq
}})
}return at
}var da=bm;
function cp(dl,dm,dh,at){if(!dl){return dh
}var dj=arguments.length<3;
dm=aV.createCallback(dm,at,4);
var di=-1,dk=dl.length;
if(typeof dk=="number"){if(dj){dh=dl[++di]
}while(++di<dk){dh=dm(dh,dl[di],di,dl)
}}else{bP(dl,function(dp,dn,dq){dh=dj?(dj=false,dp):dm(dh,dp,dn,dq)
})
}return dh
}function cV(dj,dk,dh,at){var di=arguments.length<3;
dk=aV.createCallback(dk,at,4);
au(dj,function(dm,dl,dn){dh=di?(di=false,dm):dk(dh,dm,dl,dn)
});
return dh
}function aC(dh,di,at){di=aV.createCallback(di,at,3);
return bQ(dh,function(dk,dj,dl){return !di(dk,dj,dl)
})
}function cU(di,dj,dh){if(di&&typeof di.length!="number"){di=bx(di)
}if(dj==null||dh){return di?di[aq(0,di.length-1)]:n
}var at=by(di);
at.length=ao(cl(0,dj),at.length);
return at
}function by(dj){var dh=-1,di=dj?dj.length:0,at=aH(typeof di=="number"?di:0);
bC(dj,function(dl){var dk=aq(0,++dh);
at[dh]=at[dk];
at[dk]=dl
});
return at
}function a8(dh){var at=dh?dh.length:0;
return typeof at=="number"?at:cb(dh).length
}function a7(dk,dl,dh){var at;
dl=aV.createCallback(dl,dh,3);
var di=-1,dj=dk?dk.length:0;
if(typeof dj=="number"){while(++di<dj){if((at=dl(dk[di],di,dk))){break
}}}else{bP(dk,function(dn,dm,dp){return !(at=dl(dn,dm,dp))
})
}return !!at
}function ba(dm,dn,dh){var dj=-1,dl=bE(dn),dk=dm?dm.length:0,at=aH(typeof dk=="number"?dk:0);
if(!dl){dn=aV.createCallback(dn,dh,3)
}bC(dm,function(dr,dq,ds){var dp=at[++dj]=s();
if(dl){dp.criteria=bm(dn,function(dt){return dr[dt]
})
}else{(dp.criteria=d())[0]=dn(dr,dq,ds)
}dp.index=dj;
dp.value=dr
});
dk=at.length;
at.sort(X);
while(dk--){var di=at[dk];
at[dk]=di.value;
if(!dl){S(di.criteria)
}p(di)
}return at
}function aE(at){if(at&&typeof at.length=="number"){return u(at)
}return bx(at)
}var al=bQ;
function aQ(dk){var dh=-1,di=dk?dk.length:0,at=[];
while(++dh<di){var dj=dk[dh];
if(dj){at.push(dj)
}}return at
}function ae(at){return de(at,bV(arguments,true,true,1))
}function c4(dk,dj,at){var dh=-1,di=dk?dk.length:0;
dj=aV.createCallback(dj,at,3);
while(++dh<di){if(dj(dk[dh],dh,dk)){return dh
}}return -1
}function aN(dj,di,at){var dh=dj?dj.length:0;
di=aV.createCallback(di,at,3);
while(dh--){if(di(dj[dh],dh,dj)){return dh
}}return -1
}function bh(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=-1;
dk=aV.createCallback(dk,at,3);
while(++dh<di&&dk(dl[dh],dh,dl)){dj++
}}else{dj=dk;
if(dj==null||at){return dl?dl[0]:n
}}return u(dl,0,ao(cl(0,dj),di))
}function cC(dj,at,di,dh){if(typeof at!="boolean"&&at!=null){dh=di;
di=(typeof at!="function"&&dh&&dh[at]===dj)?null:at;
at=false
}if(di!=null){dj=bm(dj,di,dh)
}return bV(dj,at)
}function c6(dk,dj,dh){if(typeof dh=="number"){var di=dk?dk.length:0;
dh=(dh<0?cl(0,di+dh):dh||0)
}else{if(dh){var at=bb(dk,dj);
return dk[at]===dj?at:-1
}}return h(dk,dj,dh)
}function c8(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=di;
dk=aV.createCallback(dk,at,3);
while(dh--&&dk(dl[dh],dh,dl)){dj++
}}else{dj=(dk==null||at)?1:dk||dj
}return u(dl,0,ao(cl(0,di-dj),di))
}function cz(){var dq=[],di=-1,dl=arguments.length,dp=d(),dr=b7(),dk=dr===h,dh=d();
while(++di<dl){var ds=arguments[di];
if(bE(ds)||a6(ds)){dq.push(ds);
dp.push(dk&&ds.length>=b&&aa(di?dq[di]:dh))
}}var dn=dq[0],dm=-1,dj=dn?dn.length:0,dt=[];
outer:while(++dm<dj){var at=dp[0];
ds=dn[dm];
if((at?P(at,ds):dr(dh,ds))<0){di=dl;
(at||dh).push(ds);
while(--di){at=dp[di];
if((at?P(at,ds):dr(dq[di],ds))<0){continue outer
}}dt.push(ds)
}}while(dl--){at=dp[dl];
if(at){p(at)
}}S(dp);
S(dh);
return dt
}function bv(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=di;
dk=aV.createCallback(dk,at,3);
while(dh--&&dk(dl[dh],dh,dl)){dj++
}}else{dj=dk;
if(dj==null||at){return dl?dl[di-1]:n
}}return u(dl,cl(0,di-dj))
}function dg(dj,di,dh){var at=dj?dj.length:0;
if(typeof dh=="number"){at=(dh<0?cl(0,at+dh):ao(dh,at-1))+1
}while(at--){if(dj[at]===di){return at
}}return -1
}function cd(dm){var di=arguments,at=0,dk=di.length,dj=dm?dm.length:0;
while(++at<dk){var dh=-1,dl=di[at];
while(++dh<dj){if(dm[dh]===dl){co.call(dm,dh--,1);
dj--
}}}return dm
}function aZ(dl,dh,dk){dl=+dl||0;
dk=typeof dk=="number"?dk:(+dk||1);
if(dh==null){dh=dl;
dl=0
}var di=-1,dj=cl(0,aX((dh-dl)/(dk||1))),at=aH(dj);
while(++di<dj){at[di]=dl;
dl+=dk
}return at
}function aO(dm,dl,dh){var di=-1,dj=dm?dm.length:0,at=[];
dl=aV.createCallback(dl,dh,3);
while(++di<dj){var dk=dm[di];
if(dl(dk,di,dm)){at.push(dk);
co.call(dm,di--,1);
dj--
}}return at
}function ca(dl,dk,at){if(typeof dk!="number"&&dk!=null){var dj=0,dh=-1,di=dl?dl.length:0;
dk=aV.createCallback(dk,at,3);
while(++dh<di&&dk(dl[dh],dh,dl)){dj++
}}else{dj=(dk==null||at)?1:cl(0,dk)
}return u(dl,dj)
}function bb(dm,dk,dl,dh){var at=0,dj=dm?dm.length:at;
dl=dl?aV.createCallback(dl,dh,1):bl;
dk=dl(dk);
while(at<dj){var di=(at+dj)>>>1;
(dl(dm[di])<dk)?at=di+1:dj=di
}return at
}function aw(){return ag(bV(arguments,true,true))
}function bS(dj,di,dh,at){if(typeof di!="boolean"&&di!=null){at=dh;
dh=(typeof di!="function"&&at&&at[di]===dj)?null:di;
di=false
}if(dh!=null){dh=aV.createCallback(dh,at,3)
}return ag(dj,di,dh)
}function c1(at){return de(at,u(arguments,1))
}function b0(){var dh=-1,di=arguments.length;
while(++dh<di){var dj=arguments[dh];
if(bE(dj)||a6(dj)){var at=at?ag(de(at,dj).concat(de(dj,at))):dj
}}return at||[]
}function ap(){var dj=arguments.length>1?arguments:arguments[0],dh=-1,di=dj?bj(da(dj,"length")):0,at=aH(di<0?0:di);
while(++dh<di){at[dh]=da(dj,dh)
}return at
}function cE(dl,dh){var di=-1,dk=dl?dl.length:0,at={};
if(!dh&&dk&&!bE(dl[0])){dh=[]
}while(++di<dk){var dj=dl[di];
if(dh){at[dj]=dh[di]
}else{if(dj){at[dj[0]]=dj[1]
}}}return at
}function aT(dh,at){if(!az(at)){throw new aI
}return function(){if(--dh<1){return at.apply(this,arguments)
}}
}function bZ(dh,at){return arguments.length>2?cN(dh,17,u(arguments,2),null,at):cN(dh,1,null,null,at)
}function bw(di){var at=arguments.length>1?bV(arguments,true,false,1):cJ(di),dh=-1,dk=at.length;
while(++dh<dk){var dj=at[dh];
di[dj]=cN(di[dj],1,null,null,di)
}return di
}function cS(at,dh){return arguments.length>2?cN(dh,19,u(arguments,2),null,at):cN(dh,3,null,null,at)
}function cG(){var at=arguments,dh=at.length;
while(dh--){if(!az(at[dh])){throw new aI
}}return function(){var di=arguments,dj=at.length;
while(dj--){di=[at[dj].apply(this,di)]
}return di[0]
}
}function cQ(at,dh){dh=typeof dh=="number"?dh:(+dh||at.length);
return cN(at,4,null,null,null,dh)
}function cF(dj,dp,dv){var dr,dm,dw,at,dt,du,ds,dn=0,dl=false,dq=true;
if(!az(dj)){throw new aI
}dp=cl(0,dp)||0;
if(dv===true){var di=true;
dq=false
}else{if(df(dv)){di=dv.leading;
dl="maxWait" in dv&&(cl(dp,dv.maxWait)||0);
dq="trailing" in dv?dv.trailing:dq
}}var dk=function(){var dy=dp-(ch()-at);
if(dy<=0){if(dm){bT(dm)
}var dx=ds;
dm=du=ds=n;
if(dx){dn=ch();
dw=dj.apply(dt,dr);
if(!du&&!dm){dr=dt=null
}}}else{du=aY(dk,dy)
}};
var dh=function(){if(du){bT(du)
}dm=du=ds=n;
if(dq||(dl!==dp)){dn=ch();
dw=dj.apply(dt,dr);
if(!du&&!dm){dr=dt=null
}}};
return function(){dr=arguments;
at=ch();
dt=this;
ds=dq&&(du||!di);
if(dl===false){var dx=di&&!du
}else{if(!dm&&!di){dn=at
}var dz=dl-(at-dn),dy=dz<=0;
if(dy){if(dm){dm=bT(dm)
}dn=at;
dw=dj.apply(dt,dr)
}else{if(!dm){dm=aY(dh,dz)
}}}if(dy&&du){du=bT(du)
}else{if(!du&&dp!==dl){du=aY(dk,dp)
}}if(dx){dy=true;
dw=dj.apply(dt,dr)
}if(dy&&!du&&!dm){dr=dt=null
}return dw
}
}function a2(dh){if(!az(dh)){throw new aI
}var at=u(arguments,1);
return aY(function(){dh.apply(n,at)
},1)
}function bN(dh,di){if(!az(dh)){throw new aI
}var at=u(arguments,2);
return aY(function(){dh.apply(n,at)
},di)
}function a4(dh,di){if(!az(dh)){throw new aI
}var at=function(){var dj=at.cache,dk=di?di.apply(this,arguments):a+arguments[0];
return a1.call(dj,dk)?dj[dk]:(dj[dk]=dh.apply(this,arguments))
};
at.cache={};
return at
}function cy(di){var dh,at;
if(!az(di)){throw new aI
}return function(){if(dh){return at
}dh=true;
at=di.apply(this,arguments);
di=null;
return at
}
}function cW(at){return cN(at,16,u(arguments,1))
}function cs(at){return cN(at,32,null,u(arguments,1))
}function cm(dh,di,at){var dk=true,dj=true;
if(!az(dh)){throw new aI
}if(at===false){dk=false
}else{if(df(at)){dk="leading" in at?at.leading:dk;
dj="trailing" in at?at.trailing:dj
}}O.leading=dk;
O.maxWait=di;
O.trailing=dj;
return cF(dh,di,O)
}function bX(at,dh){return cN(dh,16,[at])
}function cx(at){return function(){return at
}
}function aF(dl,dh,dm){var dk=typeof dl;
if(dl==null||dk=="function"){return cv(dl,dh,dm)
}if(dk!="object"){return a3(dl)
}var dj=cb(dl),di=dj[0],at=dl[di];
if(dj.length==1&&at===at&&!df(at)){return function(dp){var dn=dp[di];
return at===dn&&(at!==0||(1/at==1/dn))
}
}return function(dp){var dq=dj.length,dn=false;
while(dq--){if(!(dn=bd(dp[dj[dq]],dl[dj[dq]],null,true))){break
}}return dn
}
}function bc(at){return at==null?"":cq(at).replace(ci,bp)
}function bl(at){return at
}function aD(dh,dm,at){var di=true,dk=dm&&cJ(dm);
if(!dm||(!at&&!dk.length)){if(at==null){at=dm
}dj=cR;
dm=dh;
dh=aV;
dk=cJ(dm)
}if(at===false){di=false
}else{if(df(at)&&"chain" in at){di=at.chain
}}var dj=dh,dl=az(dj);
bC(dk,function(dn){var dp=dh[dn]=dm[dn];
if(dl){dj.prototype[dn]=function(){var dr=this.__chain__,dt=this.__wrapped__,ds=[dt];
ay.apply(ds,arguments);
var dq=dp.apply(dh,ds);
if(di||dr){if(dt===dq&&df(dq)){return this
}dq=new dj(dq);
dq.__chain__=dr
}return dq
}
}})
}function c0(){aj._=cX;
return this
}function ah(){}var ch=b6(ch=cg.now)&&ch||function(){return new cg().getTime()
};
var dd=dc(G+"08")==8?dc:function(dh,at){return dc(cA(dh)?dh.replace(Y,""):dh,at||0)
};
function a3(at){return function(dh){return dh[at]
}
}function ce(di,at,dl){var dk=di==null,dh=at==null;
if(dl==null){if(typeof di=="boolean"&&dh){dl=di;
di=1
}else{if(!dh&&typeof at=="boolean"){dl=at;
dh=true
}}}if(dk&&dh){at=1
}di=+di||0;
if(dh){at=di;
di=0
}else{at=+at||0
}if(dl||di%1||at%1){var dj=bL();
return ao(di+(dj*(at-di+parseFloat("1e-"+((dj+"").length-1)))),at)
}return aq(di,at)
}function aS(at,dh){if(at){var di=at[dh];
return az(di)?at[dh]():di
}}function bG(du,dn,dx){var dk=aV.templateSettings;
du=cq(du||"");
dx=bu({},dx,dk);
var di=bu({},dx.imports,dk.imports),dp=cb(di),dj=bx(di);
var dt,dq=0,ds=dx.interpolate||R,dh="__p += '";
var dw=cH((dx.escape||R).source+"|"+ds.source+"|"+(ds===o?B:R).source+"|"+(dx.evaluate||R).source+"|$","g");
du.replace(dw,function(dy,dC,dA,dz,dB,dD){dA||(dA=dz);
dh+=du.slice(dq,dD).replace(V,f);
if(dC){dh+="' +\n__e("+dC+") +\n'"
}if(dB){dt=true;
dh+="';\n"+dB+";\n__p += '"
}if(dA){dh+="' +\n((__t = ("+dA+")) == null ? '' : __t) +\n'"
}dq=dD+dy.length;
return dy
});
dh+="';\n";
var dl=dx.variable,dm=dl;
if(!dm){dl="obj";
dh="with ("+dl+") {\n"+dh+"\n}\n"
}dh=(dt?dh.replace(y,""):dh).replace(T,"$1").replace(e,"$1;");
dh="function("+dl+") {\n"+(dm?"":dl+" || ("+dl+" = {});\n")+"var __t, __p = '', __e = _.escape"+(dt?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+dh+"return __p\n}";
var at="\n/*\n//# sourceURL="+(dx.sourceURL||"/lodash/template/source["+(ab++)+"]")+"\n*/";
try{var dv=a0(dp,"return "+dh+at).apply(n,dj)
}catch(dr){dr.source=dh;
throw dr
}if(dn){return dv(dn)
}dv.source=dh;
return dv
}function am(dk,dj,dh){dk=(dk=+dk)>-1?dk:0;
var di=-1,at=aH(dk);
dj=cv(dj,dh,1);
while(++di<dk){at[di]=dj(di)
}return at
}function an(at){return at==null?"":cq(at).replace(cc,bq)
}function cj(at){var dh=++J;
return cq(at==null?"":at)+dh
}function bz(at){at=new cR(at);
at.__chain__=true;
return at
}function cB(at,dh){dh(at);
return at
}function bB(){this.__chain__=true;
return this
}function bo(){return cq(this.__wrapped__)
}function aW(){return this.__wrapped__
}aV.after=aT;
aV.assign=bt;
aV.at=cO;
aV.bind=bZ;
aV.bindAll=bw;
aV.bindKey=cS;
aV.chain=bz;
aV.compact=aQ;
aV.compose=cG;
aV.constant=cx;
aV.countBy=bJ;
aV.create=aR;
aV.createCallback=aF;
aV.curry=cQ;
aV.debounce=cF;
aV.defaults=bu;
aV.defer=a2;
aV.delay=bN;
aV.difference=ae;
aV.filter=bQ;
aV.flatten=cC;
aV.forEach=bC;
aV.forEachRight=au;
aV.forIn=ak;
aV.forInRight=cu;
aV.forOwn=bP;
aV.forOwnRight=c2;
aV.functions=cJ;
aV.groupBy=br;
aV.indexBy=c7;
aV.initial=c8;
aV.intersection=cz;
aV.invert=b8;
aV.invoke=aJ;
aV.keys=cb;
aV.map=bm;
aV.mapValues=bi;
aV.max=bj;
aV.memoize=a4;
aV.merge=bK;
aV.min=cn;
aV.omit=cw;
aV.once=cy;
aV.pairs=bA;
aV.partial=cW;
aV.partialRight=cs;
aV.pick=bM;
aV.pluck=da;
aV.property=a3;
aV.pull=cd;
aV.range=aZ;
aV.reject=aC;
aV.remove=aO;
aV.rest=ca;
aV.shuffle=by;
aV.sortBy=ba;
aV.tap=cB;
aV.throttle=cm;
aV.times=am;
aV.toArray=aE;
aV.transform=cY;
aV.union=aw;
aV.uniq=bS;
aV.values=bx;
aV.where=al;
aV.without=c1;
aV.wrap=bX;
aV.xor=b0;
aV.zip=ap;
aV.zipObject=cE;
aV.collect=bm;
aV.drop=ca;
aV.each=bC;
aV.eachRight=au;
aV.extend=bt;
aV.methods=cJ;
aV.object=cE;
aV.select=bQ;
aV.tail=ca;
aV.unique=bS;
aV.unzip=ap;
aD(aV);
aV.clone=cD;
aV.cloneDeep=db;
aV.contains=a5;
aV.escape=bc;
aV.every=aA;
aV.find=bH;
aV.findIndex=c4;
aV.findKey=ct;
aV.findLast=c9;
aV.findLastIndex=aN;
aV.findLastKey=bO;
aV.has=cZ;
aV.identity=bl;
aV.indexOf=c6;
aV.isArguments=a6;
aV.isArray=bE;
aV.isBoolean=bI;
aV.isDate=a9;
aV.isElement=b3;
aV.isEmpty=cr;
aV.isEqual=b4;
aV.isFinite=aL;
aV.isFunction=az;
aV.isNaN=bR;
aV.isNull=c5;
aV.isNumber=bs;
aV.isObject=df;
aV.isPlainObject=aP;
aV.isRegExp=cT;
aV.isString=cA;
aV.isUndefined=bY;
aV.lastIndexOf=dg;
aV.mixin=aD;
aV.noConflict=c0;
aV.noop=ah;
aV.now=ch;
aV.parseInt=dd;
aV.random=ce;
aV.reduce=cp;
aV.reduceRight=cV;
aV.result=aS;
aV.runInContext=Z;
aV.size=a8;
aV.some=a7;
aV.sortedIndex=bb;
aV.template=bG;
aV.unescape=an;
aV.uniqueId=cj;
aV.all=aA;
aV.any=a7;
aV.detect=bH;
aV.findWhere=bH;
aV.foldl=cp;
aV.foldr=cV;
aV.include=a5;
aV.inject=cp;
aD(function(){var at={};
bP(aV,function(di,dh){if(!aV.prototype[dh]){at[dh]=di
}});
return at
}(),false);
aV.first=bh;
aV.last=bv;
aV.sample=cU;
aV.take=bh;
aV.head=bh;
bP(aV,function(di,dh){var at=dh!=="sample";
if(!aV.prototype[dh]){aV.prototype[dh]=function(dm,dl){var dk=this.__chain__,dj=di(this.__wrapped__,dm,dl);
return !dk&&(dm==null||(dl&&!(at&&typeof dm=="function")))?dj:new cR(dj,dk)
}
}});
aV.VERSION="2.4.1";
aV.prototype.chain=bB;
aV.prototype.toString=bo;
aV.prototype.value=aW;
aV.prototype.valueOf=aW;
bC(["join","pop","shift"],function(at){var dh=b9[at];
aV.prototype[at]=function(){var dj=this.__chain__,di=dh.apply(this.__wrapped__,arguments);
return dj?new cR(di,dj):di
}
});
bC(["push","reverse","sort","unshift"],function(at){var dh=b9[at];
aV.prototype[at]=function(){dh.apply(this.__wrapped__,arguments);
return this
}
});
bC(["concat","slice","splice"],function(at){var dh=b9[at];
aV.prototype[at]=function(){return new cR(dh.apply(this.__wrapped__,arguments),this.__chain__)
}
});
return aV
}var ac=Z();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){D._=ac;
define(function(){return ac
})
}else{if(W&&A){if(Q){(A.exports=ac)._=ac
}else{W._=ac
}}else{D._=ac
}}}.call(this));
(function(){function aq(b){function a(g,h,j,d,f,l){for(;
f>=0&&l>f;
f+=b){var c=d?d[f]:f;
j=h(j,g[c],c,g)
}return j
}return function(h,j,f,g){j=aD(j,g,4);
var l=!au(h)&&ar.keys(h),d=(l||h).length,m=b>0?0:d-1;
return arguments.length<3&&(f=h[l?l[m]:m],m+=b),a(h,j,f,l,m,d)
}
}function ak(a){return function(d,f,g){f=ag(f,g);
for(var b=Q(d),c=a>0?0:b-1;
c>=0&&b>c;
c+=a){if(f(d[c],c,d)){return c
}}return -1
}
}function am(c,a,b){return function(h,f,g){var j=0,d=Q(h);
if("number"==typeof g){c>0?j=g>=0?g:Math.max(g+d,j):d=g>=0?Math.min(g+1,d):g+d+1
}else{if(b&&g&&d){return g=b(h,f),h[g]===f?g:-1
}}if(f!==f){return g=a(at.call(h,j,d),ar.isNaN),g>=0?g+j:-1
}for(g=c>0?j:d-1;
g>=0&&d>g;
g+=c){if(h[g]===f){return g
}}return -1
}
}function aA(g,c){var d=Y.length,f=g.constructor,a=ar.isFunction(f)&&f.prototype||aE,b="constructor";
for(ar.has(g,b)&&!ar.contains(c,b)&&c.push(b);
d--;
){b=Y[d],b in g&&g[b]!==a[b]&&!ar.contains(c,b)&&c.push(b)
}}var aj=this,aw=aj._,ap=Array.prototype,aE=Object.prototype,aC=Function.prototype,az=ap.push,at=ap.slice,al=aE.toString,ao=aE.hasOwnProperty,ax=Array.isArray,ai=Object.keys,ay=aC.bind,af=Object.create,aB=function(){},ar=function(a){return a instanceof ar?a:this instanceof ar?void (this._wrapped=a):new ar(a)
};
"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=ar),exports._=ar):aj._=ar,ar.VERSION="1.8.3";
var aD=function(c,a,b){if(a===void 0){return c
}switch(null==b?3:b){case 1:return function(d){return c.call(a,d)
};
case 2:return function(d,f){return c.call(a,d,f)
};
case 3:return function(f,g,d){return c.call(a,f,g,d)
};
case 4:return function(g,h,d,f){return c.call(a,g,h,d,f)
}
}return function(){return c.apply(a,arguments)
}
},ag=function(c,a,b){return null==c?ar.identity:ar.isFunction(c)?aD(c,a,b):ar.isObject(c)?ar.matcher(c):ar.property(c)
};
ar.iteratee=function(b,a){return ag(b,a,1/0)
};
var aF=function(b,a){return function(j){var m=arguments.length;
if(2>m||null==j){return j
}for(var g=1;
m>g;
g++){for(var h=arguments[g],n=b(h),d=n.length,p=0;
d>p;
p++){var l=n[p];
a&&j[l]!==void 0||(j[l]=h[l])
}}return j
}
},av=function(b){if(!ar.isObject(b)){return{}
}if(af){return af(b)
}aB.prototype=b;
var a=new aB;
return aB.prototype=null,a
},ah=function(a){return function(b){return null==b?void 0:b[a]
}
},ad=Math.pow(2,53)-1,Q=ah("length"),au=function(b){var a=Q(b);
return"number"==typeof a&&a>=0&&ad>=a
};
ar.each=ar.forEach=function(g,c,d){c=aD(c,d);
var f,a;
if(au(g)){for(f=0,a=g.length;
a>f;
f++){c(g[f],f,g)
}}else{var b=ar.keys(g);
for(f=0,a=b.length;
a>f;
f++){c(g[b[f]],b[f],g)
}}return g
},ar.map=ar.collect=function(l,f,g){f=ag(f,g);
for(var h=!au(l)&&ar.keys(l),c=(h||l).length,d=Array(c),j=0;
c>j;
j++){var b=h?h[j]:j;
d[j]=f(l[b],b,l)
}return d
},ar.reduce=ar.foldl=ar.inject=aq(1),ar.reduceRight=ar.foldr=aq(-1),ar.find=ar.detect=function(d,a,b){var c;
return c=au(d)?ar.findIndex(d,a,b):ar.findKey(d,a,b),c!==void 0&&c!==-1?d[c]:void 0
},ar.filter=ar.select=function(d,a,b){var c=[];
return a=ag(a,b),ar.each(d,function(g,f,e){a(g,f,e)&&c.push(g)
}),c
},ar.reject=function(c,a,b){return ar.filter(c,ar.negate(ag(a)),b)
},ar.every=ar.all=function(h,c,d){c=ag(c,d);
for(var f=!au(h)&&ar.keys(h),a=(f||h).length,b=0;
a>b;
b++){var g=f?f[b]:b;
if(!c(h[g],g,h)){return !1
}}return !0
},ar.some=ar.any=function(h,c,d){c=ag(c,d);
for(var f=!au(h)&&ar.keys(h),a=(f||h).length,b=0;
a>b;
b++){var g=f?f[b]:b;
if(c(h[g],g,h)){return !0
}}return !1
},ar.contains=ar.includes=ar.include=function(d,a,b,c){return au(d)||(d=ar.values(d)),("number"!=typeof b||c)&&(b=0),ar.indexOf(d,a,b)>=0
},ar.invoke=function(d,a){var b=at.call(arguments,2),c=ar.isFunction(a);
return ar.map(d,function(f){var e=c?a:f[a];
return null==e?e:e.apply(f,b)
})
},ar.pluck=function(b,a){return ar.map(b,ar.property(a))
},ar.where=function(b,a){return ar.filter(b,ar.matcher(a))
},ar.findWhere=function(b,a){return ar.find(b,ar.matcher(a))
},ar.max=function(f,p,b){var h,m,g=-1/0,d=-1/0;
if(null==p&&null!=f){f=au(f)?f:ar.values(f);
for(var l=0,j=f.length;
j>l;
l++){h=f[l],h>g&&(g=h)
}}else{p=ag(p,b),ar.each(f,function(o,a,c){m=p(o,a,c),(m>d||m===-1/0&&g===-1/0)&&(g=o,d=m)
})
}return g
},ar.min=function(f,p,b){var h,m,g=1/0,d=1/0;
if(null==p&&null!=f){f=au(f)?f:ar.values(f);
for(var l=0,j=f.length;
j>l;
l++){h=f[l],g>h&&(g=h)
}}else{p=ag(p,b),ar.each(f,function(o,a,c){m=p(o,a,c),(d>m||1/0===m&&1/0===g)&&(g=o,d=m)
})
}return g
},ar.shuffle=function(g){for(var c,d=au(g)?g:ar.values(g),f=d.length,a=Array(f),b=0;
f>b;
b++){c=ar.random(0,b),c!==b&&(a[b]=a[c]),a[c]=d[b]
}return a
},ar.sample=function(c,a,b){return null==a||b?(au(c)||(c=ar.values(c)),c[ar.random(c.length-1)]):ar.shuffle(c).slice(0,Math.max(0,a))
},ar.sortBy=function(c,a,b){return a=ag(a,b),ar.pluck(ar.map(c,function(g,d,f){return{value:g,index:d,criteria:a(g,d,f)}
}).sort(function(h,d){var f=h.criteria,g=d.criteria;
if(f!==g){if(f>g||f===void 0){return 1
}if(g>f||g===void 0){return -1
}}return h.index-d.index
}),"value")
};
var Z=function(a){return function(c,d,f){var b={};
return d=ag(d,f),ar.each(c,function(h,g){var j=d(h,g,c);
a(b,h,j)
}),b
}
};
ar.groupBy=Z(function(c,a,b){ar.has(c,b)?c[b].push(a):c[b]=[a]
}),ar.indexBy=Z(function(c,a,b){c[b]=a
}),ar.countBy=Z(function(c,a,b){ar.has(c,b)?c[b]++:c[b]=1
}),ar.toArray=function(a){return a?ar.isArray(a)?at.call(a):au(a)?ar.map(a,ar.identity):ar.values(a):[]
},ar.size=function(a){return null==a?0:au(a)?a.length:ar.keys(a).length
},ar.partition=function(f,b,c){b=ag(b,c);
var d=[],a=[];
return ar.each(f,function(h,g,e){(b(h,g,e)?d:a).push(h)
}),[d,a]
},ar.first=ar.head=ar.take=function(c,a,b){return null==c?void 0:null==a||b?c[0]:ar.initial(c,c.length-a)
},ar.initial=function(c,a,b){return at.call(c,0,Math.max(0,c.length-(null==a||b?1:a)))
},ar.last=function(c,a,b){return null==c?void 0:null==a||b?c[c.length-1]:ar.rest(c,Math.max(0,c.length-a))
},ar.rest=ar.tail=ar.drop=function(c,a,b){return at.call(c,null==a||b?1:a)
},ar.compact=function(a){return ar.filter(a,ar.identity)
};
var G=function(g,w,b,p){for(var v=[],j=0,d=p||0,s=Q(g);
s>d;
d++){var q=g[d];
if(au(q)&&(ar.isArray(q)||ar.isArguments(q))){w||(q=G(q,w,b));
var m=0,h=q.length;
for(v.length+=h;
h>m;
){v[j++]=q[m++]
}}else{b||(v[j++]=q)
}}return v
};
ar.flatten=function(b,a){return G(b,a,!1)
},ar.without=function(a){return ar.difference(a,at.call(arguments,1))
},ar.uniq=ar.unique=function(g,s,b,l){ar.isBoolean(s)||(l=b,b=s,s=!1),null!=b&&(b=ag(b,l));
for(var q=[],h=[],d=0,p=Q(g);
p>d;
d++){var m=g[d],j=b?b(m,d,g):m;
s?(d&&h===j||q.push(m),h=j):b?ar.contains(h,j)||(h.push(j),q.push(m)):ar.contains(q,m)||q.push(m)
}return q
},ar.union=function(){return ar.uniq(G(arguments,!0,!0))
},ar.intersection=function(h){for(var c=[],d=arguments.length,f=0,a=Q(h);
a>f;
f++){var b=h[f];
if(!ar.contains(c,b)){for(var g=1;
d>g&&ar.contains(arguments[g],b);
g++){}g===d&&c.push(b)
}}return c
},ar.difference=function(b){var a=G(arguments,!0,!0,1);
return ar.filter(b,function(c){return !ar.contains(a,c)
})
},ar.zip=function(){return ar.unzip(arguments)
},ar.unzip=function(d){for(var a=d&&ar.max(d,Q).length||0,b=Array(a),c=0;
a>c;
c++){b[c]=ar.pluck(d,c)
}return b
},ar.object=function(f,b){for(var c={},d=0,a=Q(f);
a>d;
d++){b?c[f[d]]=b[d]:c[f[d][0]]=f[d][1]
}return c
},ar.findIndex=ak(1),ar.findLastIndex=ak(-1),ar.sortedIndex=function(l,f,g,h){g=ag(g,h,1);
for(var c=g(f),d=0,j=Q(l);
j>d;
){var b=Math.floor((d+j)/2);
g(l[b])<c?d=b+1:j=b
}return d
},ar.indexOf=am(1,ar.findIndex,ar.sortedIndex),ar.lastIndexOf=am(-1,ar.findLastIndex),ar.range=function(g,c,d){null==c&&(c=g||0,g=0),d=d||1;
for(var f=Math.max(Math.ceil((c-g)/d),0),a=Array(f),b=0;
f>b;
b++,g+=d){a[b]=g
}return a
};
var aa=function(h,c,d,f,a){if(!(f instanceof c)){return h.apply(d,a)
}var b=av(h.prototype),g=h.apply(b,a);
return ar.isObject(g)?g:b
};
ar.bind=function(d,a){if(ay&&d.bind===ay){return ay.apply(d,at.call(arguments,1))
}if(!ar.isFunction(d)){throw new TypeError("Bind must be called on a function")
}var b=at.call(arguments,2),c=function(){return aa(d,c,a,this,b.concat(at.call(arguments)))
};
return c
},ar.partial=function(c){var a=at.call(arguments,1),b=function(){for(var g=0,d=a.length,f=Array(d),h=0;
d>h;
h++){f[h]=a[h]===ar?arguments[g++]:a[h]
}for(;
g<arguments.length;
){f.push(arguments[g++])
}return aa(c,b,this,this,f)
};
return b
},ar.bindAll=function(d){var a,b,c=arguments.length;
if(1>=c){throw new Error("bindAll must be passed function names")
}for(a=1;
c>a;
a++){b=arguments[a],d[b]=ar.bind(d[b],d)
}return d
},ar.memoize=function(c,a){var b=function(g){var d=b.cache,f=""+(a?a.apply(this,arguments):g);
return ar.has(d,f)||(d[f]=c.apply(this,arguments)),d[f]
};
return b.cache={},b
},ar.delay=function(c,a){var b=at.call(arguments,2);
return setTimeout(function(){return c.apply(null,b)
},a)
},ar.defer=ar.partial(ar.delay,ar,1),ar.throttle=function(f,p,b){var h,m,g,d=null,l=0;
b||(b={});
var j=function(){l=b.leading===!1?0:ar.now(),d=null,g=f.apply(h,m),d||(h=m=null)
};
return function(){var c=ar.now();
l||b.leading!==!1||(l=c);
var a=p-(c-l);
return h=this,m=arguments,0>=a||a>p?(d&&(clearTimeout(d),d=null),l=c,g=f.apply(h,m),d||(h=m=null)):d||b.trailing===!1||(d=setTimeout(j,a)),g
}
},ar.debounce=function(f,p,b){var h,m,g,d,l,j=function(){var a=ar.now()-d;
p>a&&a>=0?h=setTimeout(j,p-a):(h=null,b||(l=f.apply(g,m),h||(g=m=null)))
};
return function(){g=this,m=arguments,d=ar.now();
var a=b&&!h;
return h||(h=setTimeout(j,p)),a&&(l=f.apply(g,m),g=m=null),l
}
},ar.wrap=function(b,a){return ar.partial(a,b)
},ar.negate=function(a){return function(){return !a.apply(this,arguments)
}
},ar.compose=function(){var b=arguments,a=b.length-1;
return function(){for(var c=a,d=b[a].apply(this,arguments);
c--;
){d=b[c].call(this,d)
}return d
}
},ar.after=function(b,a){return function(){return --b<1?a.apply(this,arguments):void 0
}
},ar.before=function(c,a){var b;
return function(){return --c>0&&(b=a.apply(this,arguments)),1>=c&&(a=null),b
}
},ar.once=ar.partial(ar.before,2);
var V=!{toString:null}.propertyIsEnumerable("toString"),Y=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];
ar.keys=function(c){if(!ar.isObject(c)){return[]
}if(ai){return ai(c)
}var a=[];
for(var b in c){ar.has(c,b)&&a.push(b)
}return V&&aA(c,a),a
},ar.allKeys=function(c){if(!ar.isObject(c)){return[]
}var a=[];
for(var b in c){a.push(b)
}return V&&aA(c,a),a
},ar.values=function(f){for(var b=ar.keys(f),c=b.length,d=Array(c),a=0;
c>a;
a++){d[a]=f[b[a]]
}return d
},ar.mapObject=function(l,f,g){f=ag(f,g);
for(var h,c=ar.keys(l),d=c.length,j={},b=0;
d>b;
b++){h=c[b],j[h]=f(l[h],h,l)
}return j
},ar.pairs=function(f){for(var b=ar.keys(f),c=b.length,d=Array(c),a=0;
c>a;
a++){d[a]=[b[a],f[b[a]]]
}return d
},ar.invert=function(f){for(var b={},c=ar.keys(f),d=0,a=c.length;
a>d;
d++){b[f[c[d]]]=c[d]
}return b
},ar.functions=ar.methods=function(c){var a=[];
for(var b in c){ar.isFunction(c[b])&&a.push(b)
}return a.sort()
},ar.extend=aF(ar.allKeys),ar.extendOwn=ar.assign=aF(ar.keys),ar.findKey=function(h,c,d){c=ag(c,d);
for(var f,a=ar.keys(h),b=0,g=a.length;
g>b;
b++){if(f=a[b],c(h[f],f,h)){return f
}}},ar.pick=function(g,w,b){var p,v,j={},d=g;
if(null==d){return j
}ar.isFunction(w)?(v=ar.allKeys(d),p=aD(w,b)):(v=G(arguments,!1,!1,1),p=function(e,a,c){return a in c
},d=Object(d));
for(var s=0,q=v.length;
q>s;
s++){var m=v[s],h=d[m];
p(h,m,d)&&(j[m]=h)
}return j
},ar.omit=function(d,a,b){if(ar.isFunction(a)){a=ar.negate(a)
}else{var c=ar.map(G(arguments,!1,!1,1),String);
a=function(f,e){return !ar.contains(c,e)
}
}return ar.pick(d,a,b)
},ar.defaults=aF(ar.allKeys,!0),ar.create=function(c,a){var b=av(c);
return a&&ar.extendOwn(b,a),b
},ar.clone=function(a){return ar.isObject(a)?ar.isArray(a)?a.slice():ar.extend({},a):a
},ar.tap=function(b,a){return a(b),b
},ar.isMatch=function(h,c){var d=ar.keys(c),f=d.length;
if(null==h){return !f
}for(var a=Object(h),b=0;
f>b;
b++){var g=d[b];
if(c[g]!==a[g]||!(g in a)){return !1
}}return !0
};
var U=function(g,w,b,p){if(g===w){return 0!==g||1/g===1/w
}if(null==g||null==w){return g===w
}g instanceof ar&&(g=g._wrapped),w instanceof ar&&(w=w._wrapped);
var v=al.call(g);
if(v!==al.call(w)){return !1
}switch(v){case"[object RegExp]":case"[object String]":return""+g==""+w;
case"[object Number]":return +g!==+g?+w!==+w:0===+g?1/+g===1/w:+g===+w;
case"[object Date]":case"[object Boolean]":return +g===+w
}var j="[object Array]"===v;
if(!j){if("object"!=typeof g||"object"!=typeof w){return !1
}var d=g.constructor,s=w.constructor;
if(d!==s&&!(ar.isFunction(d)&&d instanceof d&&ar.isFunction(s)&&s instanceof s)&&"constructor" in g&&"constructor" in w){return !1
}}b=b||[],p=p||[];
for(var q=b.length;
q--;
){if(b[q]===g){return p[q]===w
}}if(b.push(g),p.push(w),j){if(q=g.length,q!==w.length){return !1
}for(;
q--;
){if(!U(g[q],w[q],b,p)){return !1
}}}else{var m,h=ar.keys(g);
if(q=h.length,ar.keys(w).length!==q){return !1
}for(;
q--;
){if(m=h[q],!ar.has(w,m)||!U(g[m],w[m],b,p)){return !1
}}}return b.pop(),p.pop(),!0
};
ar.isEqual=function(b,a){return U(b,a)
},ar.isEmpty=function(a){return null==a?!0:au(a)&&(ar.isArray(a)||ar.isString(a)||ar.isArguments(a))?0===a.length:0===ar.keys(a).length
},ar.isElement=function(a){return !(!a||1!==a.nodeType)
},ar.isArray=ax||function(a){return"[object Array]"===al.call(a)
},ar.isObject=function(b){var a=typeof b;
return"function"===a||"object"===a&&!!b
},ar.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(a){ar["is"+a]=function(b){return al.call(b)==="[object "+a+"]"
}
}),ar.isArguments(arguments)||(ar.isArguments=function(a){return ar.has(a,"callee")
}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(ar.isFunction=function(a){return"function"==typeof a||!1
}),ar.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))
},ar.isNaN=function(a){return ar.isNumber(a)&&a!==+a
},ar.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===al.call(a)
},ar.isNull=function(a){return null===a
},ar.isUndefined=function(a){return a===void 0
},ar.has=function(b,a){return null!=b&&ao.call(b,a)
},ar.noConflict=function(){return aj._=aw,this
},ar.identity=function(a){return a
},ar.constant=function(a){return function(){return a
}
},ar.noop=function(){},ar.property=ah,ar.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]
}
},ar.matcher=ar.matches=function(a){return a=ar.extendOwn({},a),function(b){return ar.isMatch(b,a)
}
},ar.times=function(f,b,c){var d=Array(Math.max(0,f));
b=aD(b,c,1);
for(var a=0;
f>a;
a++){d[a]=b(a)
}return d
},ar.random=function(b,a){return null==a&&(a=b,b=0),b+Math.floor(Math.random()*(a-b+1))
},ar.now=Date.now||function(){return(new Date).getTime()
};
var ac={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},C=ar.invert(ac),H=function(f){var b=function(e){return f[e]
},c="(?:"+ar.keys(f).join("|")+")",d=RegExp(c),a=RegExp(c,"g");
return function(e){return e=null==e?"":""+e,d.test(e)?e.replace(a,b):e
}
};
ar.escape=H(ac),ar.unescape=H(C),ar.result=function(d,a,b){var c=null==d?void 0:d[a];
return c===void 0&&(c=b),ar.isFunction(c)?c.call(d):c
};
var an=0;
ar.uniqueId=function(b){var a=++an+"";
return b?b+a:a
},ar.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var X=/(.)^/,ae={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},ab=/\\|'|\r|\n|\u2028|\u2029/g,W=function(a){return"\\"+ae[a]
};
ar.template=function(g,s,b){!s&&b&&(s=b),s=ar.defaults({},s,ar.templateSettings);
var l=RegExp([(s.escape||X).source,(s.interpolate||X).source,(s.evaluate||X).source].join("|")+"|$","g"),q=0,h="__p+='";
g.replace(l,function(f,n,u,v,c){return h+=g.slice(q,c).replace(ab,W),q=c+f.length,n?h+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":u?h+="'+\n((__t=("+u+"))==null?'':__t)+\n'":v&&(h+="';\n"+v+"\n__p+='"),f
}),h+="';\n",s.variable||(h="with(obj||{}){\n"+h+"}\n"),h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";
try{var d=new Function(s.variable||"obj","_",h)
}catch(p){throw p.source=h,p
}var m=function(a){return d.call(this,a,ar)
},j=s.variable||"obj";
return m.source="function("+j+"){\n"+h+"}",m
},ar.chain=function(b){var a=ar(b);
return a._chain=!0,a
};
var J=function(b,a){return b._chain?ar(a).chain():a
};
ar.mixin=function(a){ar.each(ar.functions(a),function(b){var c=ar[b]=a[b];
ar.prototype[b]=function(){var d=[this._wrapped];
return az.apply(d,arguments),J(this,c.apply(ar,d))
}
})
},ar.mixin(ar),ar.each(["pop","push","reverse","shift","sort","splice","unshift"],function(b){var a=ap[b];
ar.prototype[b]=function(){var c=this._wrapped;
return a.apply(c,arguments),"shift"!==b&&"splice"!==b||0!==c.length||delete c[0],J(this,c)
}
}),ar.each(["concat","join","slice"],function(b){var a=ap[b];
ar.prototype[b]=function(){return J(this,a.apply(this._wrapped,arguments))
}
}),ar.prototype.value=function(){return this._wrapped
},ar.prototype.valueOf=ar.prototype.toJSON=ar.prototype.value,ar.prototype.toString=function(){return""+this._wrapped
},"function"==typeof define&&define.amd&&define("underscore",[],function(){return ar
})
}).call(this);
(function(){var n;
var g=[],t=[];
var J=0;
var a=+new Date+"";
var b=75;
var l=40;
var G=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var y=/\b__p \+= '';/g,T=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var B=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var E=/\w*$/;
var r=/^\s*function[ \n\r\t]+\w/;
var o=/<%=([\s\S]+?)%>/g;
var Y=RegExp("^["+G+"]*0+(?=.$)");
var R=/($^)/;
var j=/\bthis\b/;
var V=/['\n\r\t\u2028\u2029\\]/g;
var z=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"];
var ab=0;
var U="[object Arguments]",v="[object Array]",C="[object Boolean]",K="[object Date]",ad="[object Function]",H="[object Number]",c="[object Object]",L="[object RegExp]",I="[object String]";
var w={};
w[ad]=false;
w[U]=w[v]=w[C]=w[K]=w[H]=w[c]=w[L]=w[I]=true;
var O={leading:false,maxWait:0,trailing:false};
var m={configurable:false,enumerable:false,value:null,writable:false};
var F={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var N={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var D=(F[typeof window]&&window)||this;
var W=F[typeof exports]&&exports&&!exports.nodeType&&exports;
var A=F[typeof module]&&module&&!module.nodeType&&module;
var Q=A&&A.exports===W&&W;
var x=F[typeof global]&&global;
if(x&&(x.global===x||x.window===x)){D=x
}function h(ai,ah,af){var ae=(af||0)-1,ag=ai?ai.length:0;
while(++ae<ag){if(ai[ae]===ah){return ae
}}return -1
}function P(ae,ah){var ag=typeof ah;
ae=ae.cache;
if(ag=="boolean"||ah==null){return ae[ah]?0:-1
}if(ag!="number"&&ag!="string"){ag="object"
}var af=ag=="number"?ah:a+ah;
ae=(ae=ae[ag])&&ae[af];
return ag=="object"?(ae&&h(ae,ah)>-1?0:-1):(ae?0:-1)
}function M(ai){var af=this.cache,ah=typeof ai;
if(ah=="boolean"||ai==null){af[ai]=true
}else{if(ah!="number"&&ah!="string"){ah="object"
}var ag=ah=="number"?ai:a+ai,ae=af[ah]||(af[ah]={});
if(ah=="object"){(ae[ag]||(ae[ag]=[])).push(ai)
}else{ae[ag]=true
}}}function q(ae){return ae.charCodeAt(0)
}function X(ag,af){var aj=ag.criteria,al=af.criteria,ah=-1,ai=aj.length;
while(++ah<ai){var ak=aj[ah],ae=al[ah];
if(ak!==ae){if(ak>ae||typeof ak=="undefined"){return 1
}if(ak<ae||typeof ae=="undefined"){return -1
}}}return ag.index-af.index
}function aa(al){var ah=-1,aj=al.length,ak=al[0],ag=al[(aj/2)|0],ai=al[aj-1];
if(ak&&typeof ak=="object"&&ag&&typeof ag=="object"&&ai&&typeof ai=="object"){return false
}var af=s();
af["false"]=af["null"]=af["true"]=af["undefined"]=false;
var ae=s();
ae.array=al;
ae.cache=af;
ae.push=M;
while(++ah<aj){ae.push(al[ah])
}return ae
}function f(ae){return"\\"+N[ae]
}function d(){return g.pop()||[]
}function s(){return t.pop()||{array:null,cache:null,criteria:null,"false":false,index:0,"null":false,number:null,object:null,push:null,string:null,"true":false,"undefined":false,value:null}
}function S(ae){ae.length=0;
if(g.length<l){g.push(ae)
}}function p(af){var ae=af.cache;
if(ae){p(ae)
}af.array=af.cache=af.criteria=af.object=af.number=af.string=af.value=null;
if(t.length<l){t.push(af)
}}function u(aj,ai,af){ai||(ai=0);
if(typeof af=="undefined"){af=aj?aj.length:0
}var ag=-1,ah=af-ai||0,ae=Array(ah<0?0:ah);
while(++ag<ah){ae[ag]=aj[ai+ag]
}return ae
}function Z(aj){aj=aj?ac.defaults(D.Object(),aj,ac.pick(D,z)):D;
var aH=aj.Array,cf=aj.Boolean,cg=aj.Date,a0=aj.Function,b5=aj.Math,bf=aj.Number,c3=aj.Object,cH=aj.RegExp,cq=aj.String,aI=aj.TypeError;
var b9=[];
var cL=c3.prototype;
var cX=aj._;
var aB=cL.toString;
var b2=cH("^"+cq(aB).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");
var aX=b5.ceil,bT=aj.clearTimeout,cP=b5.floor,bD=a0.prototype.toString,av=b6(av=c3.getPrototypeOf)&&av,a1=cL.hasOwnProperty,ay=b9.push,aY=aj.setTimeout,co=b9.splice,cK=b9.unshift;
var cI=(function(){try{var dj={},dh=b6(dh=c3.defineProperty)&&dh,at=dh(dj,dj,dj)&&dh
}catch(di){}return at
}());
var ax=b6(ax=c3.create)&&ax,bg=b6(bg=aH.isArray)&&bg,aK=aj.isFinite,bF=aj.isNaN,ck=b6(ck=c3.keys)&&ck,cl=b5.max,ao=b5.min,dc=aj.parseInt,bL=b5.random;
var cM={};
cM[v]=aH;
cM[C]=cf;
cM[K]=cg;
cM[ad]=a0;
cM[c]=c3;
cM[H]=bf;
cM[L]=cH;
cM[I]=cq;
function aV(at){return(at&&typeof at=="object"&&!bE(at)&&a1.call(at,"__wrapped__"))?at:new cR(at)
}function cR(dh,at){this.__chain__=!!at;
this.__wrapped__=dh
}cR.prototype=aV.prototype;
var aG=aV.support={};
aG.funcDecomp=!b6(aj.WinRTError)&&j.test(Z);
aG.funcNames=typeof a0.name=="string";
aV.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:o,variable:"",imports:{_:aV}};
function ar(dk){var dj=dk[0],dh=dk[2],at=dk[4];
function di(){if(dh){var dn=u(dh);
ay.apply(dn,arguments)
}if(this instanceof di){var dm=b1(dj.prototype),dl=dj.apply(dm,dn||arguments);
return df(dl)?dl:dm
}return dj.apply(at,dn||arguments)
}af(di,dk);
return di
}function bk(dq,dm,dr,dk,di){if(dr){var ds=dr(dq);
if(typeof ds!="undefined"){return ds
}}var dj=df(dq);
if(dj){var dn=aB.call(dq);
if(!w[dn]){return dq
}var dp=cM[dn];
switch(dn){case C:case K:return new dp(+dq);
case H:case I:return new dp(dq);
case L:ds=dp(dq.source,E.exec(dq));
ds.lastIndex=dq.lastIndex;
return ds
}}else{return dq
}var dl=bE(dq);
if(dm){var dh=!dk;
dk||(dk=d());
di||(di=d());
var at=dk.length;
while(at--){if(dk[at]==dq){return di[at]
}}ds=dl?dp(dq.length):{}
}else{ds=dl?u(dq):bt({},dq)
}if(dl){if(a1.call(dq,"index")){ds.index=dq.index
}if(a1.call(dq,"input")){ds.input=dq.input
}}if(!dm){return ds
}dk.push(dq);
di.push(ds);
(dl?bC:bP)(dq,function(dt,du){ds[du]=bk(dt,dm,dr,dk,di)
});
if(dh){S(dk);
S(di)
}return ds
}function b1(at,dh){return df(at)?ax(at):{}
}if(!ax){b1=(function(){function at(){}return function(di){if(df(di)){at.prototype=di;
var dh=new at;
at.prototype=null
}return dh||aj.Object()
}
}())
}function cv(dh,at,dk){if(typeof dh!="function"){return bl
}if(typeof at=="undefined"||!("prototype" in dh)){return dh
}var dj=dh.__bindData__;
if(typeof dj=="undefined"){if(aG.funcNames){dj=!dh.name
}dj=dj||!aG.funcDecomp;
if(!dj){var di=bD.call(dh);
if(!aG.funcNames){dj=!r.test(di)
}if(!dj){dj=j.test(di);
af(dh,dj)
}}}if(dj===false||(dj!==true&&dj[1]&1)){return dh
}switch(dk){case 1:return function(dl){return dh.call(at,dl)
};
case 2:return function(dm,dl){return dh.call(at,dm,dl)
};
case 3:return function(dm,dl,dn){return dh.call(at,dm,dl,dn)
};
case 4:return function(dl,dn,dm,dp){return dh.call(at,dl,dn,dm,dp)
}
}return bZ(dh,at)
}function bn(dj){var dl=dj[0],di=dj[1],dn=dj[2],dh=dj[3],dr=dj[4],at=dj[5];
var dk=di&1,dt=di&2,dq=di&4,dp=di&8,ds=dl;
function dm(){var dv=dk?dr:this;
if(dn){var dw=u(dn);
ay.apply(dw,arguments)
}if(dh||dq){dw||(dw=u(arguments));
if(dh){ay.apply(dw,dh)
}if(dq&&dw.length<at){di|=16&~32;
return bn([dl,(dp?di:di&~3),dw,null,dr,at])
}}dw||(dw=arguments);
if(dt){dl=dv[ds]
}if(this instanceof dm){dv=b1(dl.prototype);
var du=dl.apply(dv,dw);
return df(du)?du:dv
}return dl.apply(dv,dw)
}af(dm,dj);
return dm
}function de(dj,dn){var di=-1,dk=b7(),dh=dj?dj.length:0,dl=dh>=b&&dk===h,dp=[];
if(dl){var at=aa(dn);
if(at){dk=P;
dn=at
}else{dl=false
}}while(++di<dh){var dm=dj[di];
if(dk(dn,dm)<0){dp.push(dm)
}}if(dl){p(dn)
}return dp
}function bV(dj,dl,dh,dm){var di=(dm||0)-1,at=dj?dj.length:0,dr=[];
while(++di<at){var dn=dj[di];
if(dn&&typeof dn=="object"&&typeof dn.length=="number"&&(bE(dn)||a6(dn))){if(!dl){dn=bV(dn,dl,dh)
}var dq=-1,dk=dn.length,dp=dr.length;
dr.length+=dk;
while(++dq<dk){dr[dp++]=dn[dq]
}}else{if(!dh){dr.push(dn)
}}}return dr
}function bd(dz,dy,dn,dv,dB,dA){if(dn){var dt=dn(dz,dy);
if(typeof dt!="undefined"){return !!dt
}}if(dz===dy){return dz!==0||(1/dz==1/dy)
}var dm=typeof dz,dk=typeof dy;
if(dz===dz&&!(dz&&F[dm])&&!(dy&&F[dk])){return false
}if(dz==null||dy==null){return dz===dy
}var dh=aB.call(dz),dr=aB.call(dy);
if(dh==U){dh=c
}if(dr==U){dr=c
}if(dh!=dr){return false
}switch(dh){case C:case K:return +dz==+dy;
case H:return(dz!=+dz)?dy!=+dy:(dz==0?(1/dz==1/dy):dz==+dy);
case L:case I:return dz==cq(dy)
}var dp=dh==v;
if(!dp){var du=a1.call(dz,"__wrapped__"),at=a1.call(dy,"__wrapped__");
if(du||at){return bd(du?dz.__wrapped__:dz,at?dy.__wrapped__:dy,dn,dv,dB,dA)
}if(dh!=c){return false
}var dl=dz.constructor,di=dy.constructor;
if(dl!=di&&!(az(dl)&&dl instanceof dl&&az(di)&&di instanceof di)&&("constructor" in dz&&"constructor" in dy)){return false
}}var ds=!dB;
dB||(dB=d());
dA||(dA=d());
var dj=dB.length;
while(dj--){if(dB[dj]==dz){return dA[dj]==dy
}}var dw=0;
dt=true;
dB.push(dz);
dA.push(dy);
if(dp){dj=dz.length;
dw=dy.length;
dt=dw==dj;
if(dt||dv){while(dw--){var dq=dj,dx=dy[dw];
if(dv){while(dq--){if((dt=bd(dz[dq],dx,dn,dv,dB,dA))){break
}}}else{if(!(dt=bd(dz[dw],dx,dn,dv,dB,dA))){break
}}}}}else{ak(dy,function(dE,dD,dC){if(a1.call(dC,dD)){dw++;
return(dt=a1.call(dz,dD)&&bd(dz[dD],dE,dn,dv,dB,dA))
}});
if(dt&&!dv){ak(dz,function(dE,dD,dC){if(a1.call(dC,dD)){return(dt=--dw>-1)
}})
}}dB.pop();
dA.pop();
if(ds){S(dB);
S(dA)
}return dt
}function ai(dh,di,dk,at,dj){(bE(di)?bC:bP)(di,function(ds,dn){var dr,dp,dm=ds,dq=dh[dn];
if(ds&&((dp=bE(ds))||aP(ds))){var dt=at.length;
while(dt--){if((dr=at[dt]==ds)){dq=dj[dt];
break
}}if(!dr){var dl;
if(dk){dm=dk(dq,ds);
if((dl=typeof dm!="undefined")){dq=dm
}}if(!dl){dq=dp?(bE(dq)?dq:[]):(aP(dq)?dq:{})
}at.push(ds);
dj.push(dq);
if(!dl){ai(dq,ds,dk,at,dj)
}}}else{if(dk){dm=dk(dq,ds);
if(typeof dm=="undefined"){dm=ds
}}if(typeof dm!="undefined"){dq=dm
}}dh[dn]=dq
})
}function aq(dh,at){return dh+cP(bL()*(at-dh+1))
}function ag(dm,dj,dr){var dl=-1,dn=b7(),di=dm?dm.length:0,ds=[];
var dp=!dj&&di>=b&&dn===h,dh=(dr||dp)?d():ds;
if(dp){var at=aa(dh);
dn=P;
dh=at
}while(++dl<di){var dq=dm[dl],dk=dr?dr(dq,dl,dm):dq;
if(dj?!dl||dh[dh.length-1]!==dk:dn(dh,dk)<0){if(dr||dp){dh.push(dk)
}ds.push(dq)
}}if(dp){S(dh.array);
p(dh)
}else{if(dr){S(dh)
}}return ds
}function bU(at){return function(dm,dn,di){var dh={};
dn=aV.createCallback(dn,di,3);
var dj=-1,dk=dm?dm.length:0;
if(typeof dk=="number"){while(++dj<dk){var dl=dm[dj];
at(dh,dl,dn(dl,dj,dm),dm)
}}else{bP(dm,function(dq,dp,dr){at(dh,dq,dn(dq,dp,dr),dr)
})
}return dh
}
}function cN(dm,dj,dn,di,dt,at){var dl=dj&1,du=dj&2,dr=dj&4,dq=dj&8,dh=dj&16,dp=dj&32;
if(!du&&!az(dm)){throw new aI
}if(dh&&!dn.length){dj&=~16;
dh=dn=false
}if(dp&&!di.length){dj&=~32;
dp=di=false
}var dk=dm&&dm.__bindData__;
if(dk&&dk!==true){dk=u(dk);
if(dk[2]){dk[2]=u(dk[2])
}if(dk[3]){dk[3]=u(dk[3])
}if(dl&&!(dk[1]&1)){dk[4]=dt
}if(!dl&&dk[1]&1){dj|=8
}if(dr&&!(dk[1]&4)){dk[5]=at
}if(dh){ay.apply(dk[2]||(dk[2]=[]),dn)
}if(dp){cK.apply(dk[3]||(dk[3]=[]),di)
}dk[1]|=dj;
return cN.apply(null,dk)
}var ds=(dj==1||dj===17)?ar:bn;
return ds([dm,dj,dn,di,dt,at])
}function bp(at){return aU[at]
}function b7(){var at=(at=aV.indexOf)===c6?h:at;
return at
}function b6(at){return typeof at=="function"&&b2.test(at)
}var af=!cI?ah:function(at,dh){m.value=dh;
cI(at,"__bindData__",m)
};
function aM(di){var dh,at;
if(!(di&&aB.call(di)==c)||(dh=di.constructor,az(dh)&&!(dh instanceof dh))){return false
}ak(di,function(dk,dj){at=dj
});
return typeof at=="undefined"||a1.call(di,at)
}function bq(at){return bW[at]
}function a6(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aB.call(at)==U||false
}var bE=bg||function(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aB.call(at)==v||false
};
var be=function(di){var dh,dj=di,at=[];
if(!dj){return at
}if(!(F[typeof di])){return at
}for(dh in dj){if(a1.call(dj,dh)){at.push(dh)
}}return at
};
var cb=!ck?be:function(at){if(!df(at)){return[]
}return ck(at)
};
var aU={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bW=b8(aU);
var cc=cH("("+cb(bW).join("|")+")","g"),ci=cH("["+cb(aU).join("")+"]","g");
var bt=function(dk,at,dn){var dm,dj=dk,dt=dj;
if(!dj){return dt
}var dq=arguments,dh=0,dl=typeof dn=="number"?2:dq.length;
if(dl>3&&typeof dq[dl-2]=="function"){var ds=cv(dq[--dl-1],dq[dl--],2)
}else{if(dl>2&&typeof dq[dl-1]=="function"){ds=dq[--dl]
}}while(++dh<dl){dj=dq[dh];
if(dj&&F[typeof dj]){var dp=-1,dr=F[typeof dj]&&cb(dj),di=dr?dr.length:0;
while(++dp<di){dm=dr[dp];
dt[dm]=ds?ds(dt[dm],dj[dm]):dj[dm]
}}}return dt
};
function cD(di,dh,dj,at){if(typeof dh!="boolean"&&dh!=null){at=dj;
dj=dh;
dh=false
}return bk(di,dh,typeof dj=="function"&&cv(dj,at,1))
}function db(dh,di,at){return bk(dh,true,typeof di=="function"&&cv(di,at,1))
}function aR(dh,di){var at=b1(dh);
return di?bt(at,di):at
}var bu=function(dk,at,dn){var dm,dj=dk,ds=dj;
if(!dj){return ds
}var dq=arguments,dh=0,dl=typeof dn=="number"?2:dq.length;
while(++dh<dl){dj=dq[dh];
if(dj&&F[typeof dj]){var dp=-1,dr=F[typeof dj]&&cb(dj),di=dr?dr.length:0;
while(++dp<di){dm=dr[dp];
if(typeof ds[dm]=="undefined"){ds[dm]=dj[dm]
}}}}return ds
};
function ct(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
bP(di,function(dm,dl,dk){if(dj(dm,dl,dk)){at=dl;
return false
}});
return at
}function bO(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
c2(di,function(dm,dl,dk){if(dj(dm,dl,dk)){at=dl;
return false
}});
return at
}var ak=function(dk,dl,dh){var di,dj=dk,at=dj;
if(!dj){return at
}if(!F[typeof dj]){return at
}dl=dl&&typeof dh=="undefined"?dl:cv(dl,dh,3);
for(di in dj){if(dl(dj[di],di,dk)===false){return at
}}return at
};
function cu(dh,dk,at){var dj=[];
ak(dh,function(dm,dl){dj.push(dl,dm)
});
var di=dj.length;
dk=cv(dk,at,3);
while(di--){if(dk(dj[di--],dj[di],dh)===false){break
}}return dh
}var bP=function(di,dn,dl){var dj,dh=di,dp=dh;
if(!dh){return dp
}if(!F[typeof dh]){return dp
}dn=dn&&typeof dl=="undefined"?dn:cv(dn,dl,3);
var dk=-1,dm=F[typeof dh]&&cb(dh),at=dm?dm.length:0;
while(++dk<at){dj=dm[dk];
if(dn(dh[dj],dj,di)===false){return dp
}}return dp
};
function c2(dh,dl,at){var dj=cb(dh),dk=dj.length;
dl=cv(dl,at,3);
while(dk--){var di=dj[dk];
if(dl(dh[di],di,dh)===false){break
}}return dh
}function cJ(dh){var at=[];
ak(dh,function(dj,di){if(az(dj)){at.push(di)
}});
return at.sort()
}function cZ(at,dh){return at?a1.call(at,dh):false
}function b8(di){var dh=-1,dk=cb(di),dl=dk.length,at={};
while(++dh<dl){var dj=dk[dh];
at[di[dj]]=dj
}return at
}function bI(at){return at===true||at===false||at&&typeof at=="object"&&aB.call(at)==C||false
}function a9(at){return at&&typeof at=="object"&&aB.call(at)==K||false
}function b3(at){return at&&at.nodeType===1||false
}function cr(dj){var at=true;
if(!dj){return at
}var dh=aB.call(dj),di=dj.length;
if((dh==v||dh==I||dh==U)||(dh==c&&typeof di=="number"&&az(dj.splice))){return !di
}bP(dj,function(){return(at=false)
});
return at
}function b4(di,at,dj,dh){return bd(di,at,typeof dj=="function"&&cv(dj,dh,2))
}function aL(at){return aK(at)&&!bF(parseFloat(at))
}function az(at){return typeof at=="function"
}function df(at){return !!(at&&F[typeof at])
}function bR(at){return bs(at)&&at!=+at
}function c5(at){return at===null
}function bs(at){return typeof at=="number"||at&&typeof at=="object"&&aB.call(at)==H||false
}var aP=!av?aM:function(di){if(!(di&&aB.call(di)==c)){return false
}var at=di.valueOf,dh=b6(at)&&(dh=av(at))&&av(dh);
return dh?(di==dh||av(di)==dh):aM(di)
};
function cT(at){return at&&typeof at=="object"&&aB.call(at)==L||false
}function cA(at){return typeof at=="string"||at&&typeof at=="object"&&aB.call(at)==I||false
}function bY(at){return typeof at=="undefined"
}function bi(di,dj,dh){var at={};
dj=aV.createCallback(dj,dh,3);
bP(di,function(dm,dl,dk){at[dl]=dj(dm,dl,dk)
});
return at
}function bK(dk){var dj=arguments,dl=2;
if(!df(dk)){return dk
}if(typeof dj[2]!="number"){dl=dj.length
}if(dl>3&&typeof dj[dl-2]=="function"){var dn=cv(dj[--dl-1],dj[dl--],2)
}else{if(dl>2&&typeof dj[dl-1]=="function"){dn=dj[--dl]
}}var di=u(arguments,1,dl),dh=-1,at=d(),dm=d();
while(++dh<dl){ai(dk,di[dh],dn,at,dm)
}S(at);
S(dm);
return dk
}function cw(dj,dn,dh){var at={};
if(typeof dn!="function"){var dl=[];
ak(dj,function(dq,dp){dl.push(dp)
});
dl=de(dl,bV(arguments,true,false,1));
var di=-1,dm=dl.length;
while(++di<dm){var dk=dl[di];
at[dk]=dj[dk]
}}else{dn=aV.createCallback(dn,dh,3);
ak(dj,function(dr,dq,dp){if(!dn(dr,dq,dp)){at[dq]=dr
}})
}return at
}function bA(di){var dh=-1,dk=cb(di),dl=dk.length,at=aH(dl);
while(++dh<dl){var dj=dk[dh];
at[dh]=[dj,di[dj]]
}return at
}function bM(dj,dn,dh){var at={};
if(typeof dn!="function"){var di=-1,dl=bV(arguments,true,false,1),dm=df(dj)?dl.length:0;
while(++di<dm){var dk=dl[di];
if(dk in dj){at[dk]=dj[dk]
}}}else{dn=aV.createCallback(dn,dh,3);
ak(dj,function(dr,dq,dp){if(dn(dr,dq,dp)){at[dq]=dr
}})
}return at
}function cY(di,dm,dh,at){var dl=bE(di);
if(dh==null){if(dl){dh=[]
}else{var dk=di&&di.constructor,dj=dk&&dk.prototype;
dh=b1(dj)
}}if(dm){dm=aV.createCallback(dm,at,4);
(dl?bC:bP)(di,function(dq,dp,dn){return dm(dh,dq,dp,dn)
})
}return dh
}function bx(di){var dh=-1,dj=cb(di),dk=dj.length,at=aH(dk);
while(++dh<dk){at[dh]=di[dj[dh]]
}return at
}function cO(dl){var di=arguments,dh=-1,dj=bV(di,true,false,1),dk=(di[2]&&di[2][di[1]]===dl)?1:dj.length,at=aH(dk);
while(++dh<dk){at[dh]=dl[dj[dh]]
}return at
}function a5(dm,dl,dj){var dh=-1,di=b7(),dk=dm?dm.length:0,at=false;
dj=(dj<0?cl(0,dk+dj):dj)||0;
if(bE(dm)){at=di(dm,dl,dj)>-1
}else{if(typeof dk=="number"){at=(cA(dm)?dm.indexOf(dl,dj):di(dm,dl,dj))>-1
}else{bP(dm,function(dn){if(++dh>=dj){return !(at=dn===dl)
}})
}}return at
}var bJ=bU(function(at,di,dh){(a1.call(at,dh)?at[dh]++:at[dh]=1)
});
function aA(dk,dl,dh){var at=true;
dl=aV.createCallback(dl,dh,3);
var di=-1,dj=dk?dk.length:0;
if(typeof dj=="number"){while(++di<dj){if(!(at=!!dl(dk[di],di,dk))){break
}}}else{bP(dk,function(dn,dm,dp){return(at=!!dl(dn,dm,dp))
})
}return at
}function bQ(dl,dm,dh){var at=[];
dm=aV.createCallback(dm,dh,3);
var di=-1,dj=dl?dl.length:0;
if(typeof dj=="number"){while(++di<dj){var dk=dl[di];
if(dm(dk,di,dl)){at.push(dk)
}}}else{bP(dl,function(dp,dn,dq){if(dm(dp,dn,dq)){at.push(dp)
}})
}return at
}function bH(dl,dm,dh){dm=aV.createCallback(dm,dh,3);
var di=-1,dj=dl?dl.length:0;
if(typeof dj=="number"){while(++di<dj){var dk=dl[di];
if(dm(dk,di,dl)){return dk
}}}else{var at;
bP(dl,function(dp,dn,dq){if(dm(dp,dn,dq)){at=dp;
return false
}});
return at
}}function c9(di,dj,dh){var at;
dj=aV.createCallback(dj,dh,3);
au(di,function(dl,dk,dm){if(dj(dl,dk,dm)){at=dl;
return false
}});
return at
}function bC(dj,dk,at){var dh=-1,di=dj?dj.length:0;
dk=dk&&typeof at=="undefined"?dk:cv(dk,at,3);
if(typeof di=="number"){while(++dh<di){if(dk(dj[dh],dh,dj)===false){break
}}}else{bP(dj,dk)
}return dj
}function au(dj,dk,at){var di=dj?dj.length:0;
dk=dk&&typeof at=="undefined"?dk:cv(dk,at,3);
if(typeof di=="number"){while(di--){if(dk(dj[di],di,dj)===false){break
}}}else{var dh=cb(dj);
di=dh.length;
bP(dj,function(dm,dl,dn){dl=dh?dh[--di]:--di;
return dk(dn[dl],dl,dn)
})
}return dj
}var br=bU(function(at,di,dh){(a1.call(at,dh)?at[dh]:at[dh]=[]).push(di)
});
var c7=bU(function(at,di,dh){at[dh]=di
});
function aJ(dm,dh){var dj=u(arguments,2),di=-1,dl=typeof dh=="function",dk=dm?dm.length:0,at=aH(typeof dk=="number"?dk:0);
bC(dm,function(dn){at[++di]=(dl?dh:dn[dh]).apply(dn,dj)
});
return at
}function bm(dk,dl,dh){var di=-1,dj=dk?dk.length:0;
dl=aV.createCallback(dl,dh,3);
if(typeof dj=="number"){var at=aH(dj);
while(++di<dj){at[di]=dl(dk[di],di,dk)
}}else{at=[];
bP(dk,function(dn,dm,dp){at[++di]=dl(dn,dm,dp)
})
}return at
}function bj(dm,dn,dh){var dk=-Infinity,at=dk;
if(typeof dn!="function"&&dh&&dh[dn]===dm){dn=null
}if(dn==null&&bE(dm)){var di=-1,dj=dm.length;
while(++di<dj){var dl=dm[di];
if(dl>at){at=dl
}}}else{dn=(dn==null&&cA(dm))?q:aV.createCallback(dn,dh,3);
bC(dm,function(dq,dp,ds){var dr=dn(dq,dp,ds);
if(dr>dk){dk=dr;
at=dq
}})
}return at
}function cn(dm,dn,dh){var dk=Infinity,at=dk;
if(typeof dn!="function"&&dh&&dh[dn]===dm){dn=null
}if(dn==null&&bE(dm)){var di=-1,dj=dm.length;
while(++di<dj){var dl=dm[di];
if(dl<at){at=dl
}}}else{dn=(dn==null&&cA(dm))?q:aV.createCallback(dn,dh,3);
bC(dm,function(dq,dp,ds){var dr=dn(dq,dp,ds);
if(dr<dk){dk=dr;
at=dq
}})
}return at
}var da=bm;
function cp(dl,dm,dh,at){if(!dl){return dh
}var dj=arguments.length<3;
dm=aV.createCallback(dm,at,4);
var di=-1,dk=dl.length;
if(typeof dk=="number"){if(dj){dh=dl[++di]
}while(++di<dk){dh=dm(dh,dl[di],di,dl)
}}else{bP(dl,function(dp,dn,dq){dh=dj?(dj=false,dp):dm(dh,dp,dn,dq)
})
}return dh
}function cV(dj,dk,dh,at){var di=arguments.length<3;
dk=aV.createCallback(dk,at,4);
au(dj,function(dm,dl,dn){dh=di?(di=false,dm):dk(dh,dm,dl,dn)
});
return dh
}function aC(dh,di,at){di=aV.createCallback(di,at,3);
return bQ(dh,function(dk,dj,dl){return !di(dk,dj,dl)
})
}function cU(di,dj,dh){if(di&&typeof di.length!="number"){di=bx(di)
}if(dj==null||dh){return di?di[aq(0,di.length-1)]:n
}var at=by(di);
at.length=ao(cl(0,dj),at.length);
return at
}function by(dj){var dh=-1,di=dj?dj.length:0,at=aH(typeof di=="number"?di:0);
bC(dj,function(dl){var dk=aq(0,++dh);
at[dh]=at[dk];
at[dk]=dl
});
return at
}function a8(dh){var at=dh?dh.length:0;
return typeof at=="number"?at:cb(dh).length
}function a7(dk,dl,dh){var at;
dl=aV.createCallback(dl,dh,3);
var di=-1,dj=dk?dk.length:0;
if(typeof dj=="number"){while(++di<dj){if((at=dl(dk[di],di,dk))){break
}}}else{bP(dk,function(dn,dm,dp){return !(at=dl(dn,dm,dp))
})
}return !!at
}function ba(dm,dn,dh){var dj=-1,dl=bE(dn),dk=dm?dm.length:0,at=aH(typeof dk=="number"?dk:0);
if(!dl){dn=aV.createCallback(dn,dh,3)
}bC(dm,function(dr,dq,ds){var dp=at[++dj]=s();
if(dl){dp.criteria=bm(dn,function(dt){return dr[dt]
})
}else{(dp.criteria=d())[0]=dn(dr,dq,ds)
}dp.index=dj;
dp.value=dr
});
dk=at.length;
at.sort(X);
while(dk--){var di=at[dk];
at[dk]=di.value;
if(!dl){S(di.criteria)
}p(di)
}return at
}function aE(at){if(at&&typeof at.length=="number"){return u(at)
}return bx(at)
}var al=bQ;
function aQ(dk){var dh=-1,di=dk?dk.length:0,at=[];
while(++dh<di){var dj=dk[dh];
if(dj){at.push(dj)
}}return at
}function ae(at){return de(at,bV(arguments,true,true,1))
}function c4(dk,dj,at){var dh=-1,di=dk?dk.length:0;
dj=aV.createCallback(dj,at,3);
while(++dh<di){if(dj(dk[dh],dh,dk)){return dh
}}return -1
}function aN(dj,di,at){var dh=dj?dj.length:0;
di=aV.createCallback(di,at,3);
while(dh--){if(di(dj[dh],dh,dj)){return dh
}}return -1
}function bh(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=-1;
dk=aV.createCallback(dk,at,3);
while(++dh<di&&dk(dl[dh],dh,dl)){dj++
}}else{dj=dk;
if(dj==null||at){return dl?dl[0]:n
}}return u(dl,0,ao(cl(0,dj),di))
}function cC(dj,at,di,dh){if(typeof at!="boolean"&&at!=null){dh=di;
di=(typeof at!="function"&&dh&&dh[at]===dj)?null:at;
at=false
}if(di!=null){dj=bm(dj,di,dh)
}return bV(dj,at)
}function c6(dk,dj,dh){if(typeof dh=="number"){var di=dk?dk.length:0;
dh=(dh<0?cl(0,di+dh):dh||0)
}else{if(dh){var at=bb(dk,dj);
return dk[at]===dj?at:-1
}}return h(dk,dj,dh)
}function c8(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=di;
dk=aV.createCallback(dk,at,3);
while(dh--&&dk(dl[dh],dh,dl)){dj++
}}else{dj=(dk==null||at)?1:dk||dj
}return u(dl,0,ao(cl(0,di-dj),di))
}function cz(){var dq=[],di=-1,dl=arguments.length,dp=d(),dr=b7(),dk=dr===h,dh=d();
while(++di<dl){var ds=arguments[di];
if(bE(ds)||a6(ds)){dq.push(ds);
dp.push(dk&&ds.length>=b&&aa(di?dq[di]:dh))
}}var dn=dq[0],dm=-1,dj=dn?dn.length:0,dt=[];
outer:while(++dm<dj){var at=dp[0];
ds=dn[dm];
if((at?P(at,ds):dr(dh,ds))<0){di=dl;
(at||dh).push(ds);
while(--di){at=dp[di];
if((at?P(at,ds):dr(dq[di],ds))<0){continue outer
}}dt.push(ds)
}}while(dl--){at=dp[dl];
if(at){p(at)
}}S(dp);
S(dh);
return dt
}function bv(dl,dk,at){var dj=0,di=dl?dl.length:0;
if(typeof dk!="number"&&dk!=null){var dh=di;
dk=aV.createCallback(dk,at,3);
while(dh--&&dk(dl[dh],dh,dl)){dj++
}}else{dj=dk;
if(dj==null||at){return dl?dl[di-1]:n
}}return u(dl,cl(0,di-dj))
}function dg(dj,di,dh){var at=dj?dj.length:0;
if(typeof dh=="number"){at=(dh<0?cl(0,at+dh):ao(dh,at-1))+1
}while(at--){if(dj[at]===di){return at
}}return -1
}function cd(dm){var di=arguments,at=0,dk=di.length,dj=dm?dm.length:0;
while(++at<dk){var dh=-1,dl=di[at];
while(++dh<dj){if(dm[dh]===dl){co.call(dm,dh--,1);
dj--
}}}return dm
}function aZ(dl,dh,dk){dl=+dl||0;
dk=typeof dk=="number"?dk:(+dk||1);
if(dh==null){dh=dl;
dl=0
}var di=-1,dj=cl(0,aX((dh-dl)/(dk||1))),at=aH(dj);
while(++di<dj){at[di]=dl;
dl+=dk
}return at
}function aO(dm,dl,dh){var di=-1,dj=dm?dm.length:0,at=[];
dl=aV.createCallback(dl,dh,3);
while(++di<dj){var dk=dm[di];
if(dl(dk,di,dm)){at.push(dk);
co.call(dm,di--,1);
dj--
}}return at
}function ca(dl,dk,at){if(typeof dk!="number"&&dk!=null){var dj=0,dh=-1,di=dl?dl.length:0;
dk=aV.createCallback(dk,at,3);
while(++dh<di&&dk(dl[dh],dh,dl)){dj++
}}else{dj=(dk==null||at)?1:cl(0,dk)
}return u(dl,dj)
}function bb(dm,dk,dl,dh){var at=0,dj=dm?dm.length:at;
dl=dl?aV.createCallback(dl,dh,1):bl;
dk=dl(dk);
while(at<dj){var di=(at+dj)>>>1;
(dl(dm[di])<dk)?at=di+1:dj=di
}return at
}function aw(){return ag(bV(arguments,true,true))
}function bS(dj,di,dh,at){if(typeof di!="boolean"&&di!=null){at=dh;
dh=(typeof di!="function"&&at&&at[di]===dj)?null:di;
di=false
}if(dh!=null){dh=aV.createCallback(dh,at,3)
}return ag(dj,di,dh)
}function c1(at){return de(at,u(arguments,1))
}function b0(){var dh=-1,di=arguments.length;
while(++dh<di){var dj=arguments[dh];
if(bE(dj)||a6(dj)){var at=at?ag(de(at,dj).concat(de(dj,at))):dj
}}return at||[]
}function ap(){var dj=arguments.length>1?arguments:arguments[0],dh=-1,di=dj?bj(da(dj,"length")):0,at=aH(di<0?0:di);
while(++dh<di){at[dh]=da(dj,dh)
}return at
}function cE(dl,dh){var di=-1,dk=dl?dl.length:0,at={};
if(!dh&&dk&&!bE(dl[0])){dh=[]
}while(++di<dk){var dj=dl[di];
if(dh){at[dj]=dh[di]
}else{if(dj){at[dj[0]]=dj[1]
}}}return at
}function aT(dh,at){if(!az(at)){throw new aI
}return function(){if(--dh<1){return at.apply(this,arguments)
}}
}function bZ(dh,at){return arguments.length>2?cN(dh,17,u(arguments,2),null,at):cN(dh,1,null,null,at)
}function bw(di){var at=arguments.length>1?bV(arguments,true,false,1):cJ(di),dh=-1,dk=at.length;
while(++dh<dk){var dj=at[dh];
di[dj]=cN(di[dj],1,null,null,di)
}return di
}function cS(at,dh){return arguments.length>2?cN(dh,19,u(arguments,2),null,at):cN(dh,3,null,null,at)
}function cG(){var at=arguments,dh=at.length;
while(dh--){if(!az(at[dh])){throw new aI
}}return function(){var di=arguments,dj=at.length;
while(dj--){di=[at[dj].apply(this,di)]
}return di[0]
}
}function cQ(at,dh){dh=typeof dh=="number"?dh:(+dh||at.length);
return cN(at,4,null,null,null,dh)
}function cF(dj,dp,dv){var dr,dm,dw,at,dt,du,ds,dn=0,dl=false,dq=true;
if(!az(dj)){throw new aI
}dp=cl(0,dp)||0;
if(dv===true){var di=true;
dq=false
}else{if(df(dv)){di=dv.leading;
dl="maxWait" in dv&&(cl(dp,dv.maxWait)||0);
dq="trailing" in dv?dv.trailing:dq
}}var dk=function(){var dy=dp-(ch()-at);
if(dy<=0){if(dm){bT(dm)
}var dx=ds;
dm=du=ds=n;
if(dx){dn=ch();
dw=dj.apply(dt,dr);
if(!du&&!dm){dr=dt=null
}}}else{du=aY(dk,dy)
}};
var dh=function(){if(du){bT(du)
}dm=du=ds=n;
if(dq||(dl!==dp)){dn=ch();
dw=dj.apply(dt,dr);
if(!du&&!dm){dr=dt=null
}}};
return function(){dr=arguments;
at=ch();
dt=this;
ds=dq&&(du||!di);
if(dl===false){var dx=di&&!du
}else{if(!dm&&!di){dn=at
}var dz=dl-(at-dn),dy=dz<=0;
if(dy){if(dm){dm=bT(dm)
}dn=at;
dw=dj.apply(dt,dr)
}else{if(!dm){dm=aY(dh,dz)
}}}if(dy&&du){du=bT(du)
}else{if(!du&&dp!==dl){du=aY(dk,dp)
}}if(dx){dy=true;
dw=dj.apply(dt,dr)
}if(dy&&!du&&!dm){dr=dt=null
}return dw
}
}function a2(dh){if(!az(dh)){throw new aI
}var at=u(arguments,1);
return aY(function(){dh.apply(n,at)
},1)
}function bN(dh,di){if(!az(dh)){throw new aI
}var at=u(arguments,2);
return aY(function(){dh.apply(n,at)
},di)
}function a4(dh,di){if(!az(dh)){throw new aI
}var at=function(){var dj=at.cache,dk=di?di.apply(this,arguments):a+arguments[0];
return a1.call(dj,dk)?dj[dk]:(dj[dk]=dh.apply(this,arguments))
};
at.cache={};
return at
}function cy(di){var dh,at;
if(!az(di)){throw new aI
}return function(){if(dh){return at
}dh=true;
at=di.apply(this,arguments);
di=null;
return at
}
}function cW(at){return cN(at,16,u(arguments,1))
}function cs(at){return cN(at,32,null,u(arguments,1))
}function cm(dh,di,at){var dk=true,dj=true;
if(!az(dh)){throw new aI
}if(at===false){dk=false
}else{if(df(at)){dk="leading" in at?at.leading:dk;
dj="trailing" in at?at.trailing:dj
}}O.leading=dk;
O.maxWait=di;
O.trailing=dj;
return cF(dh,di,O)
}function bX(at,dh){return cN(dh,16,[at])
}function cx(at){return function(){return at
}
}function aF(dl,dh,dm){var dk=typeof dl;
if(dl==null||dk=="function"){return cv(dl,dh,dm)
}if(dk!="object"){return a3(dl)
}var dj=cb(dl),di=dj[0],at=dl[di];
if(dj.length==1&&at===at&&!df(at)){return function(dp){var dn=dp[di];
return at===dn&&(at!==0||(1/at==1/dn))
}
}return function(dp){var dq=dj.length,dn=false;
while(dq--){if(!(dn=bd(dp[dj[dq]],dl[dj[dq]],null,true))){break
}}return dn
}
}function bc(at){return at==null?"":cq(at).replace(ci,bp)
}function bl(at){return at
}function aD(dh,dm,at){var di=true,dk=dm&&cJ(dm);
if(!dm||(!at&&!dk.length)){if(at==null){at=dm
}dj=cR;
dm=dh;
dh=aV;
dk=cJ(dm)
}if(at===false){di=false
}else{if(df(at)&&"chain" in at){di=at.chain
}}var dj=dh,dl=az(dj);
bC(dk,function(dn){var dp=dh[dn]=dm[dn];
if(dl){dj.prototype[dn]=function(){var dr=this.__chain__,dt=this.__wrapped__,ds=[dt];
ay.apply(ds,arguments);
var dq=dp.apply(dh,ds);
if(di||dr){if(dt===dq&&df(dq)){return this
}dq=new dj(dq);
dq.__chain__=dr
}return dq
}
}})
}function c0(){aj._=cX;
return this
}function ah(){}var ch=b6(ch=cg.now)&&ch||function(){return new cg().getTime()
};
var dd=dc(G+"08")==8?dc:function(dh,at){return dc(cA(dh)?dh.replace(Y,""):dh,at||0)
};
function a3(at){return function(dh){return dh[at]
}
}function ce(di,at,dl){var dk=di==null,dh=at==null;
if(dl==null){if(typeof di=="boolean"&&dh){dl=di;
di=1
}else{if(!dh&&typeof at=="boolean"){dl=at;
dh=true
}}}if(dk&&dh){at=1
}di=+di||0;
if(dh){at=di;
di=0
}else{at=+at||0
}if(dl||di%1||at%1){var dj=bL();
return ao(di+(dj*(at-di+parseFloat("1e-"+((dj+"").length-1)))),at)
}return aq(di,at)
}function aS(at,dh){if(at){var di=at[dh];
return az(di)?at[dh]():di
}}function bG(du,dn,dx){var dk=aV.templateSettings;
du=cq(du||"");
dx=bu({},dx,dk);
var di=bu({},dx.imports,dk.imports),dp=cb(di),dj=bx(di);
var dt,dq=0,ds=dx.interpolate||R,dh="__p += '";
var dw=cH((dx.escape||R).source+"|"+ds.source+"|"+(ds===o?B:R).source+"|"+(dx.evaluate||R).source+"|$","g");
du.replace(dw,function(dy,dC,dA,dz,dB,dD){dA||(dA=dz);
dh+=du.slice(dq,dD).replace(V,f);
if(dC){dh+="' +\n__e("+dC+") +\n'"
}if(dB){dt=true;
dh+="';\n"+dB+";\n__p += '"
}if(dA){dh+="' +\n((__t = ("+dA+")) == null ? '' : __t) +\n'"
}dq=dD+dy.length;
return dy
});
dh+="';\n";
var dl=dx.variable,dm=dl;
if(!dm){dl="obj";
dh="with ("+dl+") {\n"+dh+"\n}\n"
}dh=(dt?dh.replace(y,""):dh).replace(T,"$1").replace(e,"$1;");
dh="function("+dl+") {\n"+(dm?"":dl+" || ("+dl+" = {});\n")+"var __t, __p = '', __e = _.escape"+(dt?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+dh+"return __p\n}";
var at="\n/*\n//# sourceURL="+(dx.sourceURL||"/lodash/template/source["+(ab++)+"]")+"\n*/";
try{var dv=a0(dp,"return "+dh+at).apply(n,dj)
}catch(dr){dr.source=dh;
throw dr
}if(dn){return dv(dn)
}dv.source=dh;
return dv
}function am(dk,dj,dh){dk=(dk=+dk)>-1?dk:0;
var di=-1,at=aH(dk);
dj=cv(dj,dh,1);
while(++di<dk){at[di]=dj(di)
}return at
}function an(at){return at==null?"":cq(at).replace(cc,bq)
}function cj(at){var dh=++J;
return cq(at==null?"":at)+dh
}function bz(at){at=new cR(at);
at.__chain__=true;
return at
}function cB(at,dh){dh(at);
return at
}function bB(){this.__chain__=true;
return this
}function bo(){return cq(this.__wrapped__)
}function aW(){return this.__wrapped__
}aV.after=aT;
aV.assign=bt;
aV.at=cO;
aV.bind=bZ;
aV.bindAll=bw;
aV.bindKey=cS;
aV.chain=bz;
aV.compact=aQ;
aV.compose=cG;
aV.constant=cx;
aV.countBy=bJ;
aV.create=aR;
aV.createCallback=aF;
aV.curry=cQ;
aV.debounce=cF;
aV.defaults=bu;
aV.defer=a2;
aV.delay=bN;
aV.difference=ae;
aV.filter=bQ;
aV.flatten=cC;
aV.forEach=bC;
aV.forEachRight=au;
aV.forIn=ak;
aV.forInRight=cu;
aV.forOwn=bP;
aV.forOwnRight=c2;
aV.functions=cJ;
aV.groupBy=br;
aV.indexBy=c7;
aV.initial=c8;
aV.intersection=cz;
aV.invert=b8;
aV.invoke=aJ;
aV.keys=cb;
aV.map=bm;
aV.mapValues=bi;
aV.max=bj;
aV.memoize=a4;
aV.merge=bK;
aV.min=cn;
aV.omit=cw;
aV.once=cy;
aV.pairs=bA;
aV.partial=cW;
aV.partialRight=cs;
aV.pick=bM;
aV.pluck=da;
aV.property=a3;
aV.pull=cd;
aV.range=aZ;
aV.reject=aC;
aV.remove=aO;
aV.rest=ca;
aV.shuffle=by;
aV.sortBy=ba;
aV.tap=cB;
aV.throttle=cm;
aV.times=am;
aV.toArray=aE;
aV.transform=cY;
aV.union=aw;
aV.uniq=bS;
aV.values=bx;
aV.where=al;
aV.without=c1;
aV.wrap=bX;
aV.xor=b0;
aV.zip=ap;
aV.zipObject=cE;
aV.collect=bm;
aV.drop=ca;
aV.each=bC;
aV.eachRight=au;
aV.extend=bt;
aV.methods=cJ;
aV.object=cE;
aV.select=bQ;
aV.tail=ca;
aV.unique=bS;
aV.unzip=ap;
aD(aV);
aV.clone=cD;
aV.cloneDeep=db;
aV.contains=a5;
aV.escape=bc;
aV.every=aA;
aV.find=bH;
aV.findIndex=c4;
aV.findKey=ct;
aV.findLast=c9;
aV.findLastIndex=aN;
aV.findLastKey=bO;
aV.has=cZ;
aV.identity=bl;
aV.indexOf=c6;
aV.isArguments=a6;
aV.isArray=bE;
aV.isBoolean=bI;
aV.isDate=a9;
aV.isElement=b3;
aV.isEmpty=cr;
aV.isEqual=b4;
aV.isFinite=aL;
aV.isFunction=az;
aV.isNaN=bR;
aV.isNull=c5;
aV.isNumber=bs;
aV.isObject=df;
aV.isPlainObject=aP;
aV.isRegExp=cT;
aV.isString=cA;
aV.isUndefined=bY;
aV.lastIndexOf=dg;
aV.mixin=aD;
aV.noConflict=c0;
aV.noop=ah;
aV.now=ch;
aV.parseInt=dd;
aV.random=ce;
aV.reduce=cp;
aV.reduceRight=cV;
aV.result=aS;
aV.runInContext=Z;
aV.size=a8;
aV.some=a7;
aV.sortedIndex=bb;
aV.template=bG;
aV.unescape=an;
aV.uniqueId=cj;
aV.all=aA;
aV.any=a7;
aV.detect=bH;
aV.findWhere=bH;
aV.foldl=cp;
aV.foldr=cV;
aV.include=a5;
aV.inject=cp;
aD(function(){var at={};
bP(aV,function(di,dh){if(!aV.prototype[dh]){at[dh]=di
}});
return at
}(),false);
aV.first=bh;
aV.last=bv;
aV.sample=cU;
aV.take=bh;
aV.head=bh;
bP(aV,function(di,dh){var at=dh!=="sample";
if(!aV.prototype[dh]){aV.prototype[dh]=function(dm,dl){var dk=this.__chain__,dj=di(this.__wrapped__,dm,dl);
return !dk&&(dm==null||(dl&&!(at&&typeof dm=="function")))?dj:new cR(dj,dk)
}
}});
aV.VERSION="2.4.1";
aV.prototype.chain=bB;
aV.prototype.toString=bo;
aV.prototype.value=aW;
aV.prototype.valueOf=aW;
bC(["join","pop","shift"],function(at){var dh=b9[at];
aV.prototype[at]=function(){var dj=this.__chain__,di=dh.apply(this.__wrapped__,arguments);
return dj?new cR(di,dj):di
}
});
bC(["push","reverse","sort","unshift"],function(at){var dh=b9[at];
aV.prototype[at]=function(){dh.apply(this.__wrapped__,arguments);
return this
}
});
bC(["concat","slice","splice"],function(at){var dh=b9[at];
aV.prototype[at]=function(){return new cR(dh.apply(this.__wrapped__,arguments),this.__chain__)
}
});
return aV
}var ac=Z();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){D._=ac;
define(function(){return ac
})
}else{if(W&&A){if(Q){(A.exports=ac)._=ac
}else{W._=ac
}}else{D._=ac
}}}.call(this));
(function(){var y=this;
var m=y._;
var F={};
var E=Array.prototype,f=Object.prototype,t=Function.prototype;
var J=E.push,q=E.slice,A=E.concat,d=f.toString,l=f.hasOwnProperty;
var N=E.forEach,s=E.map,G=E.reduce,c=E.reduceRight,b=E.filter,D=E.every,r=E.some,p=E.indexOf,n=E.lastIndexOf,w=Array.isArray,e=Object.keys,H=t.bind;
var O=function(P){if(P instanceof O){return P
}if(!(this instanceof O)){return new O(P)
}this._wrapped=P
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=O
}exports._=O
}else{y._=O
}O.VERSION="1.5.2";
var K=O.each=O.forEach=function(U,R,Q){if(U==null){return
}if(N&&U.forEach===N){U.forEach(R,Q)
}else{if(U.length===+U.length){for(var P=0,T=U.length;
P<T;
P++){if(R.call(Q,U[P],P,U)===F){return
}}}else{var S=O.keys(U);
for(var P=0,T=S.length;
P<T;
P++){if(R.call(Q,U[S[P]],S[P],U)===F){return
}}}}};
O.map=O.collect=function(S,R,Q){var P=[];
if(S==null){return P
}if(s&&S.map===s){return S.map(R,Q)
}K(S,function(V,T,U){P.push(R.call(Q,V,T,U))
});
return P
};
var g="Reduce of empty array with no initial value";
O.reduce=O.foldl=O.inject=function(T,S,P,R){var Q=arguments.length>2;
if(T==null){T=[]
}if(G&&T.reduce===G){if(R){S=O.bind(S,R)
}return Q?T.reduce(S,P):T.reduce(S)
}K(T,function(W,U,V){if(!Q){P=W;
Q=true
}else{P=S.call(R,P,W,U,V)
}});
if(!Q){throw new TypeError(g)
}return P
};
O.reduceRight=O.foldr=function(V,S,P,R){var Q=arguments.length>2;
if(V==null){V=[]
}if(c&&V.reduceRight===c){if(R){S=O.bind(S,R)
}return Q?V.reduceRight(S,P):V.reduceRight(S)
}var U=V.length;
if(U!==+U){var T=O.keys(V);
U=T.length
}K(V,function(Y,W,X){W=T?T[--U]:--U;
if(!Q){P=V[W];
Q=true
}else{P=S.call(R,P,V[W],W,X)
}});
if(!Q){throw new TypeError(g)
}return P
};
O.find=O.detect=function(S,R,Q){var P;
C(S,function(V,T,U){if(R.call(Q,V,T,U)){P=V;
return true
}});
return P
};
O.filter=O.select=function(S,R,Q){var P=[];
if(S==null){return P
}if(b&&S.filter===b){return S.filter(R,Q)
}K(S,function(V,T,U){if(R.call(Q,V,T,U)){P.push(V)
}});
return P
};
O.reject=function(R,Q,P){return O.filter(R,function(U,S,T){return !Q.call(P,U,S,T)
},P)
};
O.every=O.all=function(S,R,Q){R||(R=O.identity);
var P=true;
if(S==null){return P
}if(D&&S.every===D){return S.every(R,Q)
}K(S,function(V,T,U){if(!(P=P&&R.call(Q,V,T,U))){return F
}});
return !!P
};
var C=O.some=O.any=function(S,R,Q){R||(R=O.identity);
var P=false;
if(S==null){return P
}if(r&&S.some===r){return S.some(R,Q)
}K(S,function(V,T,U){if(P||(P=R.call(Q,V,T,U))){return F
}});
return !!P
};
O.contains=O.include=function(Q,P){if(Q==null){return false
}if(p&&Q.indexOf===p){return Q.indexOf(P)!=-1
}return C(Q,function(R){return R===P
})
};
O.invoke=function(R,S){var P=q.call(arguments,2);
var Q=O.isFunction(S);
return O.map(R,function(T){return(Q?S:T[S]).apply(T,P)
})
};
O.pluck=function(Q,P){return O.map(Q,function(R){return R[P]
})
};
O.where=function(Q,P,R){if(O.isEmpty(P)){return R?void 0:[]
}return O[R?"find":"filter"](Q,function(T){for(var S in P){if(P[S]!==T[S]){return false
}}return true
})
};
O.findWhere=function(Q,P){return O.where(Q,P,true)
};
O.max=function(S,R,Q){if(!R&&O.isArray(S)&&S[0]===+S[0]&&S.length<65535){return Math.max.apply(Math,S)
}if(!R&&O.isEmpty(S)){return -Infinity
}var P={computed:-Infinity,value:-Infinity};
K(S,function(W,T,V){var U=R?R.call(Q,W,T,V):W;
U>P.computed&&(P={value:W,computed:U})
});
return P.value
};
O.min=function(S,R,Q){if(!R&&O.isArray(S)&&S[0]===+S[0]&&S.length<65535){return Math.min.apply(Math,S)
}if(!R&&O.isEmpty(S)){return Infinity
}var P={computed:Infinity,value:Infinity};
K(S,function(W,T,V){var U=R?R.call(Q,W,T,V):W;
U<P.computed&&(P={value:W,computed:U})
});
return P.value
};
O.shuffle=function(S){var R;
var Q=0;
var P=[];
K(S,function(T){R=O.random(Q++);
P[Q-1]=P[R];
P[R]=T
});
return P
};
O.sample=function(Q,R,P){if(arguments.length<2||P){return Q[O.random(Q.length-1)]
}return O.shuffle(Q).slice(0,Math.max(0,R))
};
var a=function(P){return O.isFunction(P)?P:function(Q){return Q[P]
}
};
O.sortBy=function(S,R,P){var Q=a(R);
return O.pluck(O.map(S,function(V,T,U){return{value:V,index:T,criteria:Q.call(P,V,T,U)}
}).sort(function(W,V){var U=W.criteria;
var T=V.criteria;
if(U!==T){if(U>T||U===void 0){return 1
}if(U<T||T===void 0){return -1
}}return W.index-V.index
}),"value")
};
var v=function(P){return function(U,T,R){var Q={};
var S=T==null?O.identity:a(T);
K(U,function(X,V){var W=S.call(R,X,V,U);
P(Q,W,X)
});
return Q
}
};
O.groupBy=v(function(P,Q,R){(O.has(P,Q)?P[Q]:(P[Q]=[])).push(R)
});
O.indexBy=v(function(P,Q,R){P[Q]=R
});
O.countBy=v(function(P,Q){O.has(P,Q)?P[Q]++:P[Q]=1
});
O.sortedIndex=function(W,V,S,R){S=S==null?O.identity:a(S);
var U=S.call(R,V);
var P=0,T=W.length;
while(P<T){var Q=(P+T)>>>1;
S.call(R,W[Q])<U?P=Q+1:T=Q
}return P
};
O.toArray=function(P){if(!P){return[]
}if(O.isArray(P)){return q.call(P)
}if(P.length===+P.length){return O.map(P,O.identity)
}return O.values(P)
};
O.size=function(P){if(P==null){return 0
}return(P.length===+P.length)?P.length:O.keys(P).length
};
O.first=O.head=O.take=function(R,Q,P){if(R==null){return void 0
}return(Q==null)||P?R[0]:q.call(R,0,Q)
};
O.initial=function(R,Q,P){return q.call(R,0,R.length-((Q==null)||P?1:Q))
};
O.last=function(R,Q,P){if(R==null){return void 0
}if((Q==null)||P){return R[R.length-1]
}else{return q.call(R,Math.max(R.length-Q,0))
}};
O.rest=O.tail=O.drop=function(R,Q,P){return q.call(R,(Q==null)||P?1:Q)
};
O.compact=function(P){return O.filter(P,O.identity)
};
var z=function(Q,R,P){if(R&&O.every(Q,O.isArray)){return A.apply(P,Q)
}K(Q,function(S){if(O.isArray(S)||O.isArguments(S)){R?J.apply(P,S):z(S,R,P)
}else{P.push(S)
}});
return P
};
O.flatten=function(Q,P){return z(Q,P,[])
};
O.without=function(P){return O.difference(P,q.call(arguments,1))
};
O.uniq=O.unique=function(V,U,T,S){if(O.isFunction(U)){S=T;
T=U;
U=false
}var Q=T?O.map(V,T,S):V;
var R=[];
var P=[];
K(Q,function(X,W){if(U?(!W||P[P.length-1]!==X):!O.contains(P,X)){P.push(X);
R.push(V[W])
}});
return R
};
O.union=function(){return O.uniq(O.flatten(arguments,true))
};
O.intersection=function(Q){var P=q.call(arguments,1);
return O.filter(O.uniq(Q),function(R){return O.every(P,function(S){return O.indexOf(S,R)>=0
})
})
};
O.difference=function(Q){var P=A.apply(E,q.call(arguments,1));
return O.filter(Q,function(R){return !O.contains(P,R)
})
};
O.zip=function(){var R=O.max(O.pluck(arguments,"length").concat(0));
var Q=new Array(R);
for(var P=0;
P<R;
P++){Q[P]=O.pluck(arguments,""+P)
}return Q
};
O.object=function(T,Q){if(T==null){return{}
}var P={};
for(var R=0,S=T.length;
R<S;
R++){if(Q){P[T[R]]=Q[R]
}else{P[T[R][0]]=T[R][1]
}}return P
};
O.indexOf=function(T,R,S){if(T==null){return -1
}var P=0,Q=T.length;
if(S){if(typeof S=="number"){P=(S<0?Math.max(0,Q+S):S)
}else{P=O.sortedIndex(T,R);
return T[P]===R?P:-1
}}if(p&&T.indexOf===p){return T.indexOf(R,S)
}for(;
P<Q;
P++){if(T[P]===R){return P
}}return -1
};
O.lastIndexOf=function(T,R,S){if(T==null){return -1
}var P=S!=null;
if(n&&T.lastIndexOf===n){return P?T.lastIndexOf(R,S):T.lastIndexOf(R)
}var Q=(P?S:T.length);
while(Q--){if(T[Q]===R){return Q
}}return -1
};
O.range=function(U,R,T){if(arguments.length<=1){R=U||0;
U=0
}T=arguments[2]||1;
var S=Math.max(Math.ceil((R-U)/T),0);
var P=0;
var Q=new Array(S);
while(P<S){Q[P++]=U;
U+=T
}return Q
};
var I=function(){};
O.bind=function(S,Q){var P,R;
if(H&&S.bind===H){return H.apply(S,q.call(arguments,1))
}if(!O.isFunction(S)){throw new TypeError
}P=q.call(arguments,2);
return R=function(){if(!(this instanceof R)){return S.apply(Q,P.concat(q.call(arguments)))
}I.prototype=S.prototype;
var U=new I;
I.prototype=null;
var T=S.apply(U,P.concat(q.call(arguments)));
if(Object(T)===T){return T
}return U
}
};
O.partial=function(Q){var P=q.call(arguments,1);
return function(){return Q.apply(this,P.concat(q.call(arguments)))
}
};
O.bindAll=function(Q){var P=q.call(arguments,1);
if(P.length===0){throw new Error("bindAll must be passed function names")
}K(P,function(R){Q[R]=O.bind(Q[R],Q)
});
return Q
};
O.memoize=function(R,Q){var P={};
Q||(Q=O.identity);
return function(){var S=Q.apply(this,arguments);
return O.has(P,S)?P[S]:(P[S]=R.apply(this,arguments))
}
};
O.delay=function(Q,R){var P=q.call(arguments,2);
return setTimeout(function(){return Q.apply(null,P)
},R)
};
O.defer=function(P){return O.delay.apply(O,[P,1].concat(q.call(arguments,1)))
};
O.throttle=function(Q,S,W){var P,U,X;
var V=null;
var T=0;
W||(W={});
var R=function(){T=W.leading===false?0:new Date;
V=null;
X=Q.apply(P,U)
};
return function(){var Y=new Date;
if(!T&&W.leading===false){T=Y
}var Z=S-(Y-T);
P=this;
U=arguments;
if(Z<=0){clearTimeout(V);
V=null;
T=Y;
X=Q.apply(P,U)
}else{if(!V&&W.trailing!==false){V=setTimeout(R,Z)
}}return X
}
};
O.debounce=function(T,W,Q){var V,R,S,U,P;
return function(){S=this;
R=arguments;
U=new Date();
var Y=function(){var Z=(new Date())-U;
if(Z<W){V=setTimeout(Y,W-Z)
}else{V=null;
if(!Q){P=T.apply(S,R)
}}};
var X=Q&&!V;
if(!V){V=setTimeout(Y,W)
}if(X){P=T.apply(S,R)
}return P
}
};
O.once=function(R){var P=false,Q;
return function(){if(P){return Q
}P=true;
Q=R.apply(this,arguments);
R=null;
return Q
}
};
O.wrap=function(P,Q){return function(){var R=[P];
J.apply(R,arguments);
return Q.apply(this,R)
}
};
O.compose=function(){var P=arguments;
return function(){var Q=arguments;
for(var R=P.length-1;
R>=0;
R--){Q=[P[R].apply(this,Q)]
}return Q[0]
}
};
O.after=function(Q,P){return function(){if(--Q<1){return P.apply(this,arguments)
}}
};
O.keys=e||function(R){if(R!==Object(R)){throw new TypeError("Invalid object")
}var Q=[];
for(var P in R){if(O.has(R,P)){Q.push(P)
}}return Q
};
O.values=function(T){var S=O.keys(T);
var R=S.length;
var P=new Array(R);
for(var Q=0;
Q<R;
Q++){P[Q]=T[S[Q]]
}return P
};
O.pairs=function(T){var R=O.keys(T);
var Q=R.length;
var S=new Array(Q);
for(var P=0;
P<Q;
P++){S[P]=[R[P],T[R[P]]]
}return S
};
O.invert=function(T){var P={};
var S=O.keys(T);
for(var Q=0,R=S.length;
Q<R;
Q++){P[T[S[Q]]]=S[Q]
}return P
};
O.functions=O.methods=function(R){var Q=[];
for(var P in R){if(O.isFunction(R[P])){Q.push(P)
}}return Q.sort()
};
O.extend=function(P){K(q.call(arguments,1),function(Q){if(Q){for(var R in Q){P[R]=Q[R]
}}});
return P
};
O.pick=function(Q){var R={};
var P=A.apply(E,q.call(arguments,1));
K(P,function(S){if(S in Q){R[S]=Q[S]
}});
return R
};
O.omit=function(R){var S={};
var Q=A.apply(E,q.call(arguments,1));
for(var P in R){if(!O.contains(Q,P)){S[P]=R[P]
}}return S
};
O.defaults=function(P){K(q.call(arguments,1),function(Q){if(Q){for(var R in Q){if(P[R]===void 0){P[R]=Q[R]
}}}});
return P
};
O.clone=function(P){if(!O.isObject(P)){return P
}return O.isArray(P)?P.slice():O.extend({},P)
};
O.tap=function(Q,P){P(Q);
return Q
};
var L=function(W,V,Q,R){if(W===V){return W!==0||1/W==1/V
}if(W==null||V==null){return W===V
}if(W instanceof O){W=W._wrapped
}if(V instanceof O){V=V._wrapped
}var T=d.call(W);
if(T!=d.call(V)){return false
}switch(T){case"[object String]":return W==String(V);
case"[object Number]":return W!=+W?V!=+V:(W==0?1/W==1/V:W==+V);
case"[object Date]":case"[object Boolean]":return +W==+V;
case"[object RegExp]":return W.source==V.source&&W.global==V.global&&W.multiline==V.multiline&&W.ignoreCase==V.ignoreCase
}if(typeof W!="object"||typeof V!="object"){return false
}var P=Q.length;
while(P--){if(Q[P]==W){return R[P]==V
}}var U=W.constructor,S=V.constructor;
if(U!==S&&!(O.isFunction(U)&&(U instanceof U)&&O.isFunction(S)&&(S instanceof S))){return false
}Q.push(W);
R.push(V);
var Z=0,Y=true;
if(T=="[object Array]"){Z=W.length;
Y=Z==V.length;
if(Y){while(Z--){if(!(Y=L(W[Z],V[Z],Q,R))){break
}}}}else{for(var X in W){if(O.has(W,X)){Z++;
if(!(Y=O.has(V,X)&&L(W[X],V[X],Q,R))){break
}}}if(Y){for(X in V){if(O.has(V,X)&&!(Z--)){break
}}Y=!Z
}}Q.pop();
R.pop();
return Y
};
O.isEqual=function(Q,P){return L(Q,P,[],[])
};
O.isEmpty=function(Q){if(Q==null){return true
}if(O.isArray(Q)||O.isString(Q)){return Q.length===0
}for(var P in Q){if(O.has(Q,P)){return false
}}return true
};
O.isElement=function(P){return !!(P&&P.nodeType===1)
};
O.isArray=w||function(P){return d.call(P)=="[object Array]"
};
O.isObject=function(P){return P===Object(P)
};
K(["Arguments","Function","String","Number","Date","RegExp"],function(P){O["is"+P]=function(Q){return d.call(Q)=="[object "+P+"]"
}
});
if(!O.isArguments(arguments)){O.isArguments=function(P){return !!(P&&O.has(P,"callee"))
}
}if(typeof(/./)!=="function"){O.isFunction=function(P){return typeof P==="function"
}
}O.isFinite=function(P){return isFinite(P)&&!isNaN(parseFloat(P))
};
O.isNaN=function(P){return O.isNumber(P)&&P!=+P
};
O.isBoolean=function(P){return P===true||P===false||d.call(P)=="[object Boolean]"
};
O.isNull=function(P){return P===null
};
O.isUndefined=function(P){return P===void 0
};
O.has=function(Q,P){return l.call(Q,P)
};
O.noConflict=function(){y._=m;
return this
};
O.identity=function(P){return P
};
O.times=function(T,S,R){var P=Array(Math.max(0,T));
for(var Q=0;
Q<T;
Q++){P[Q]=S.call(R,Q)
}return P
};
O.random=function(Q,P){if(P==null){P=Q;
Q=0
}return Q+Math.floor(Math.random()*(P-Q+1))
};
var o={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};
o.unescape=O.invert(o.escape);
var M={escape:new RegExp("["+O.keys(o.escape).join("")+"]","g"),unescape:new RegExp("("+O.keys(o.unescape).join("|")+")","g")};
O.each(["escape","unescape"],function(P){O[P]=function(Q){if(Q==null){return""
}return(""+Q).replace(M[P],function(R){return o[P][R]
})
}
});
O.result=function(P,R){if(P==null){return void 0
}var Q=P[R];
return O.isFunction(Q)?Q.call(P):Q
};
O.mixin=function(P){K(O.functions(P),function(Q){var R=O[Q]=P[Q];
O.prototype[Q]=function(){var S=[this._wrapped];
J.apply(S,arguments);
return u.call(this,R.apply(O,S))
}
})
};
var B=0;
O.uniqueId=function(P){var Q=++B+"";
return P?P+Q:Q
};
O.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
var x=/(.)^/;
var h={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var j=/\\|'|\r|\n|\t|\u2028|\u2029/g;
O.template=function(X,S,R){var Q;
R=O.defaults({},R,O.templateSettings);
var T=new RegExp([(R.escape||x).source,(R.interpolate||x).source,(R.evaluate||x).source].join("|")+"|$","g");
var U=0;
var P="__p+='";
X.replace(T,function(Z,aa,Y,ac,ab){P+=X.slice(U,ab).replace(j,function(ad){return"\\"+h[ad]
});
if(aa){P+="'+\n((__t=("+aa+"))==null?'':_.escape(__t))+\n'"
}if(Y){P+="'+\n((__t=("+Y+"))==null?'':__t)+\n'"
}if(ac){P+="';\n"+ac+"\n__p+='"
}U=ab+Z.length;
return Z
});
P+="';\n";
if(!R.variable){P="with(obj||{}){\n"+P+"}\n"
}P="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+P+"return __p;\n";
try{Q=new Function(R.variable||"obj","_",P)
}catch(V){V.source=P;
throw V
}if(S){return Q(S,O)
}var W=function(Y){return Q.call(this,Y,O)
};
W.source="function("+(R.variable||"obj")+"){\n"+P+"}";
return W
};
O.chain=function(P){return O(P).chain()
};
var u=function(P){return this._chain?O(P).chain():P
};
O.mixin(O);
K(["pop","push","reverse","shift","sort","splice","unshift"],function(P){var Q=E[P];
O.prototype[P]=function(){var R=this._wrapped;
Q.apply(R,arguments);
if((P=="shift"||P=="splice")&&R.length===0){delete R[0]
}return u.call(this,R)
}
});
K(["concat","join","slice"],function(P){var Q=E[P];
O.prototype[P]=function(){return u.call(this,Q.apply(this._wrapped,arguments))
}
});
O.extend(O.prototype,{chain:function(){this._chain=true;
return this
},value:function(){return this._wrapped
}})
}).call(this);
window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(a){}}
}_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false,externalize:false,encodePath:false,hook:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false,externalize:false,encodePath:false,hook:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}if(url.indexOf("#")!=-1){url=url.substring(0,url.indexOf("#"))
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:Granite.HTTP.removeParameters,addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof(days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(url,encode){if((typeof G_IS_HOOKED!="undefined")&&G_IS_HOOKED(url)){return url
}if(encode){url=_g.HTTP.encodePathOfURI(url)
}url=Granite.HTTP.externalize(url);
return url
},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){if(window.CQURLInfo&&CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){Granite.HTTP.handleLoginRedirect();
return true
}return false
}catch(e){return false
}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:Granite.Util.patchText,eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:Granite.Util.getTopWindow,setIFrameMode:Granite.Util.setIFrameMode}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(a){if(a&&a[":jcr:data"]!=undefined){var b=new Object();
b.size=a[":jcr:data"];
b.type=a["jcr:mimeType"];
b.date=a["jcr:lastModified"];
a=b
}return a
},getContentPath:function(c,a,b){var d=a;
if(d.lastIndexOf(".")>d.lastIndexOf("/")){d=d.substr(0,d.indexOf(".",d.lastIndexOf("/")))
}if(c){if(c.indexOf("/")==0){d=c
}else{if(b){while(c.indexOf("../")==0){c=c.substring(3);
d=d.substring(0,d.lastIndexOf("/"))
}}c=c.replace("./","");
d=d+"/"+c
}}return d
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(a){if(!a){return""
}if(_g.XSS.KEY_REGEXP.test(a)){return a
}return a+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(e,c,a){var d="";
if(e&&c){var b=e.get(this.getXSSPropertyName(c));
if(b){d=b
}else{d=this.getXSSValue(e.get(c))
}if(a&&!isNaN(a)){d=_g.Util.ellipsis(d,a,true)
}}return d
},getXSSTablePropertyValue:function(d,c,a){var e="";
if(d&&c){var b=d[this.getXSSPropertyName(c)];
if(b){e=b
}else{e=this.getXSSValue(d[c])
}if(a&&!isNaN(a)){e=_g.Util.ellipsis(e,a,true)
}}return e
},getXSSValue:function(a){if(a){return _g.Util.htmlEncode(a)
}else{return""
}},updatePropertyName:function(a,b){if(!a||!b||!a[b]){return
}if(a.xssProtect&&!a.xssKeepPropName){a[b]=this.getXSSPropertyName(a[b])
}},xssPropertyRenderer:function(d,b,c,a){if(a&&a.dataIndex&&c&&c.data&&c.data[this.getXSSPropertyName(a.dataIndex)]){d=c.data[this.getXSSPropertyName(a.dataIndex)];
if(a.ellipsisLimit&&!isNaN(a.ellipsisLimit)){d=_g.Util.ellipsis(d,a.ellipsisLimit,true)
}return d
}else{if(d){return d
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;
_g.I18n=_g.shared.I18n;
_g.shared.I18n.getMessage=Granite.I18n.get;
_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(d,b){if(d==null||b==null){return d==null&&b==null
}if(b.length>d.length){return false
}var a=d.toString();
var c=b.toString();
return(a.indexOf(c)==0)
},endsWith:function(b,a){if(b==null||a==null){return b==null&&a==null
}if(a.length>b.length){return false
}b=b.toString();
a=a.toString();
return(b.lastIndexOf(a)==(b.length-a.length))
},contains:function(b,a){if(b==null||a==null){return false
}b=b.toString();
a=a.toString();
return(b.indexOf(a)>=0)
}}
};
_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(a){var e={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode
},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()
},debug:function(){if(console){var f=this.getMap();
var h="[ClientSidePersistence -> mode="+this.getMode().name+", container="+(this.config.container||"")+"]\n";
var g=0;
var j=new RegExp("^"+this.config.container+"/");
for(var m=0,p=Object.keys(f).sort(),n=null;
m<p.length;
m++){var o=p[m];
if(this.config.container&&(typeof(o)=="string")&&!o.match(j)){continue
}var l=f[o];
h+="-["+ ++g+"]-> '"+o.replace(j,"")+"' = '"+decodeURIComponent(l)+"'\n"
}if(!g){h+="(container is empty)"
}console.log(h)
}},keyName:function(f){return(this.config.container?(this.config.container+"/"):"")+f
},getKeys:function(){var j=this.getMap();
var h=[];
if(j){for(var f in j){if(this.config.container){if(f.indexOf(this.config.container+"/")==0){var g=f.substring(this.config.container.length+1);
h.push(g)
}}else{h.push(f)
}}}return h
},get:function(f){var g=this.getMap()[this.keyName(f)];
return g?decodeURIComponent(g):g
},set:function(g,l){g=(typeof g==="string")?g.replace(/:=/g,""):"";
var j={key:g};
g=this.keyName(g);
if(!g.length){return
}var f=[];
var m=this.getMap();
j.action=m[g]?"update":"set";
if(l){m[g]=encodeURIComponent(l)
}else{j.action="remove";
delete m[g]
}for(var h in m){f.push(h+":="+m[h])
}this.cache=m;
this.write(f.join("|"));
_g.$.extend(j,{value:l,mode:this.getMode().name,container:this.config.container});
_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,j)
},getMap:function(){if(!this.cache||!this.config.useCache){var j=this.read().split("|");
var g={};
for(var f=0;
f<j.length;
f++){var l=j[f].split(":=");
var h=l[0];
if(h&&h.length){g[h]=l[1]||""
}}this.cache=g
}return this.cache
},remove:function(f){this.set(f)
},clearMap:function(){this.write()
},read:function(){return this.config.mode.read(this)||""
},write:function(f){this.config.mode.write(this,f||"")
}};
_g.$.extend(e.config,_g.shared.ClientSidePersistence.getDefaultConfig(),a);
if(e.config.useContainer===false){e.config.container=null
}var d;
var c="test-"+Math.random();
if(e.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION){d=false;
try{window.sessionStorage.setItem(c,c);
window.sessionStorage.removeItem(c)
}catch(b){d=true
}if(d){e.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL
}}if(e.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL){d=false;
try{window.localStorage.setItem(c,c);
window.localStorage.removeItem(c)
}catch(b){d=true
}if(d){e.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW
}}return e
};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";
_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(a){return a.getWindow().sessionStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().sessionStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(a){return a.getWindow().localStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().localStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.decoratePersistenceName=function(a){return a
};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(a){return a.getWindow().name
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().name=b
}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(a){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()&&!Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)){return
}if(!b){_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)
}else{_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,b,365)
}}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:false,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}
};
_g.shared.ClientSidePersistence.CookieHelper={set:function(c,d,e){var a="";
if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
a="; expires="+b.toGMTString()
}if(d){d=encodeURIComponent(d)
}document.cookie=c+"="+d+a+"; path=/"
},read:function(b){var f=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e?decodeURIComponent(e):null
}}return null
},erase:function(a){_g.shared.ClientSidePersistence.CookieHelper.set(a,"",-1)
}};
_g.shared.ClientSidePersistence.clearAllMaps=function(){var a=[_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW];
_g.$.each(a,function(d,c){var b=new _g.shared.ClientSidePersistence({mode:c});
b.clearMap()
})
};
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var e=function(){var j=parent.frames.ContentFrame,n=j!==undefined?j.contentDocument:document;
var l=new Object();
var m=n.getElementsByTagName("label");
for(var h=0;
h<m.length;
h++){var g=m[h].htmlFor;
if(g){l[g]=m[h]
}}return l
};
var f=function(h){var j="";
var g=function(m){if(m.nodeType==3){j+=m.nodeValue
}if(m.nodeName.toLowerCase()=="select"||m.nodeName.toLowerCase()=="input"||m.nodeName.toLowerCase()=="textarea"||m.nodeName.toLowerCase()=="button"){return
}for(var l=0;
m.childNodes&&l<m.childNodes.length;
l++){g(m.childNodes[l])
}};
g(h);
return j
};
var c=function(g){return g.replace(/-\d+$/,"")
};
var b=function(h,g){if(!g){g=e()
}if(g[h]){return f(g[h])
}return null
};
var a=function(j){var h;
var l=j.nodeName.toLowerCase();
var g=d(j,"type")?j.getAttribute("type"):undefined;
if(l=="input"){if(g=="radio"||g=="checkbox"){if(d(j,"checked")){h=j.getAttribute("value")
}}else{if(j.type=="text"){h=j.defaultValue
}else{h=j.value
}}}else{if(l=="textarea"){h=j.value
}else{if(l=="option"&&d(j,"selected")){h=j.getAttribute("value")
}}}return h
};
var d=function(h,g){if(h==null){return false
}return($CQ(h).attr(g)!=undefined)
};
return{searchArray:function(h,g,l){for(var j=0;
j<h.length;
j++){if(h[j][g]&&h[j][g]==l){return h[j]
}}return null
},getLabelForField:function(g,j){if(!j){j=e()
}var l=g.getAttribute("id");
if(l&&j[l]){return f(j[l])
}var h=g.parentNode;
while(h){if(h.nodeName.toLowerCase()=="label"){return f(h)
}h=h.parentNode
}return g.getAttribute("name")
},getFields:function(){var l=parent.frames.ContentFrame,n=l!==undefined?l.contentDocument:document,m=e();
var g=[];
var h=function(r,t,s){var q=r.getAttribute("name");
var u=r.nodeName.toLowerCase();
var w;
if(u=="input"||u=="textarea"){var p=d(r,"type")?r.getAttribute("type").toLowerCase():"text";
if(p=="button"||p=="submit"||p=="reset"){return
}w=CQ.shared.Form.searchArray(g,"value",q);
if(!w){g.push({text:CQ.shared.Form.getLabelForField(r,m),value:q,name:q,enumeration:undefined,local:t,selector:s,type:u,defaultValue:a(r),node:r});
w=g[g.length-1]
}if(p=="radio"||(w.local&&p=="checkbox")){if(!w.enumeration){var x=r.getAttribute("id");
if(x){var z=c(x);
var y=b(z,m);
w.text=(y?y:q)
}else{w.text=q
}w.enumeration=[]
}w.enumeration.push({text:CQ.shared.Form.getLabelForField(r,m),value:r.getAttribute("value"),defaultValue:a(r),node:r})
}}else{if(u=="select"){g.push({text:CQ.shared.Form.getLabelForField(r,m),value:q,name:q,enumeration:[],local:t,type:u,selector:s,defaultValue:undefined,node:r});
w=g[g.length-1];
var o=r.getElementsByTagName("option");
for(var v=0;
v<o.length;
v++){w.enumeration.push({text:o[v].innerHTML,value:o[v].getAttribute("value"),defaultValue:a(o[v]),node:o[v]})
}}}};
var j=function(r,q,o){if(r.nodeName.toLowerCase()=="div"&&$CQ(r).children(".form_row").length>0){q=true;
o=$CQ(r).attr("class").replace(/\s/g,".")
}if(r.getAttribute&&r.getAttribute("name")){h(r,q,o)
}for(var p=0;
r.childNodes&&p<r.childNodes.length;
p++){var s=r.childNodes[p];
if(s.nodeType==1){j(s,q,o)
}}};
j(n,false,undefined);
return g
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},load:function(){var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}},init:function(infoData,force){if(!this.initialized||force){if(infoData){this.data=infoData
}else{this.load()
}this.initialized=true
}return this.data
},lazyInit:function(){this.lazyLoad=function(){this.load();
this.initialized=true
}
},isInitialized:function(){return this.initialized
},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad){this.lazyLoad.call(this)
}this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){return document.documentElement.lang||CQ.shared.User.getLanguage()
},urlPrefix:"/libs/cq/i18n/dict."});
(function(e){e.WCM=e.WCM||{};
e.WCM.Image=e.WCM.Image||function(){var g={};
var f={MAP_SELECTOR:".cq-wcm-foundation-image-map"};
g.handleResize=function(){var h=document.querySelectorAll(f.MAP_SELECTOR);
Array.prototype.forEach.call(h,function(m){if(!m.getAttribute("usemap")){return
}var l=m.getAttribute("src"),j=document.createElement("img");
j.addEventListener("load",function(){var p=m.getAttribute("width")||m.naturalWidth,o=m.getAttribute("height")||m.naturalHeight;
if(!p||!o){var r=new Image();
r.src=l;
if(!p){p=r.width
}if(!o){o=r.height
}}var q=m.offsetWidth/100,n=m.offsetHeight/100,s=m.getAttribute("usemap");
s=s.replace("#","");
var t=document.querySelectorAll('map[name="'+s+'"]');
Array.prototype.forEach.call(t,function(v){var u=v.querySelectorAll("area");
Array.prototype.forEach.call(u,function(x){if(!x.dataset.coords){x.dataset.coords=x.getAttribute("coords")
}var z=x.dataset.coords.split(","),y=new Array(z.length);
for(var w=0;
w<z.length;
++w){if(w%2==0){y[w]=parseInt(((z[w]/p)*100)*q)
}else{y[w]=parseInt(((z[w]/o)*100)*n)
}}x.setAttribute("coords",y.toString())
})
})
});
j.setAttribute("src",l)
})
};
return g
}();
var d=window.addEventListener||window.attachEvent,c=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,b={attributes:true},a=new c(function(f){f.forEach(function(){e.WCM.Image.handleResize()
})
});
d("resize",e.WCM.Image.handleResize);
a.observe(document,b);
e.WCM.Image.handleResize()
})(CQ);
(function(a){a.fn.rwdImageMaps=function(){var c=this;
var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return
}var e=this,d=a(e);
a("<img />").on("load",function(){var g="width",o="height",p=d.attr(g),l=d.attr(o);
if(!p||!l){var q=new Image();
q.src=d.attr("src");
if(!p){p=q.width
}if(!l){l=q.height
}}var f=d.width()/100,m=d.height()/100,j=d.attr("usemap").replace("#",""),n="coords";
a('map[name="'+j+'"]').find("area").each(function(){var t=a(this);
if(!t.data(n)){t.data(n,t.attr(n))
}var s=t.data(n).split(","),r=new Array(s.length);
for(var h=0;
h<r.length;
++h){if(h%2===0){r[h]=parseInt(((s[h]/p)*100)*f)
}else{r[h]=parseInt(((s[h]/l)*100)*m)
}}t.attr(n,r.toString())
})
}).attr("src",d.attr("src"))
})
};
a(window).resize(b).trigger("resize");
return this
}
})(jQuery);
(function(a,f){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d={attributes:true},c=new e(function(g){g.forEach(function(){b()
})
});
f(function(){b();
c.observe(a.documentElement,d)
});
function b(){f("div[id^='cq-image-jsp-']").each(function(g,h){f("img[usemap]",h).rwdImageMaps()
})
}})(document,$CQ);
(function(a){a(function(){function c(g,h){try{if(a.cq.isAuthor()||window.location.hash=="#debug"){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(g);
console.log(h)
}alert(g.name+":\n"+g.message+".\n"+h+".")
}}catch(j){}}try{var d=a.browser.msie?0:250;
function b(g){try{if(window.location.hash.length>0&&a(window.location.hash,g).length>0){window.location=(window.location+"").replace(window.location.hash,"")
}}catch(h){c(h,"Could not remove hash")
}}try{a(".cq-carousel").each(function(){var w=a(this);
var g=+a("var[title='play-delay']",this).text();
if(!g){g=6000
}var l=+a("var[title='transition-time']",this).text();
if(!l){l=1000
}var u=a(".cq-carousel-banners",this);
var p=a(".cq-carousel-banner-switch",this);
var v=p.find("a");
var q=a(".cq-carousel-banner-item",this);
var e=q.outerWidth();
var r=q.filter(":first");
var n=null;
var h=null;
var m=0;
var o=a("a.cq-carousel-control-prev",this);
o.click(function(){if(o.is(".cq-carousel-active")){a(v[(m+v.length-1)%v.length]).click()
}return false
});
var t=a("a.cq-carousel-control-next",this);
t.click(function(){if(t.is(".cq-carousel-active")){a(v[(m+1)%v.length]).click()
}return false
});
if(v.length>1){t.addClass("cq-carousel-active")
}function j(){s();
if(g>0){h=setInterval(function(){a(v[(m+1)%v.length]).click()
},g)
}}function s(){if(h!==null){clearInterval(h);
h=null
}}if(d||a.browser.version>6){r.css("left",0)
}else{r.show()
}v.click(function(){var z=a(this);
var x=q.filter(z.attr("href"));
var y=x.prevAll().length;
var A=(y>m||h!==null)?1:-1;
if(!z.is(".cq-carousel-active")){v.removeClass("cq-carousel-active");
z.addClass("cq-carousel-active");
if(r.is(":animated")){r.stop(true,true);
n.stop(true,true)
}if(d){x.css({left:A*e}).animate({left:0,opacity:1},l);
r.animate({left:-A*e,opacity:0},l)
}else{if(a.browser.version>6){x.css({left:A*e,opacity:1}).animate({left:0},l);
r.animate({left:-A*e},l)
}else{x.fadeIn();
r.fadeOut()
}}n=r;
r=x;
m=y;
if(m>0){o.addClass("cq-carousel-active")
}else{o.removeClass("cq-carousel-active")
}if(m<v.length-1){t.addClass("cq-carousel-active")
}else{t.removeClass("cq-carousel-active")
}}return false
}).each(function(){var x=a(this);
x.attr("title",x.text())
}).filter(":first").addClass("cq-carousel-active");
j();
w.hover(function(){s();
o.fadeIn();
t.fadeIn()
},function(){j();
o.fadeOut();
t.fadeOut()
});
b(this)
})
}catch(f){c(f,"Could not initialize the banners")
}}catch(f){c(f,"Init failed")
}})
})($CQ||$);
(function(d){var b=d.event,a,c;
a=b.special.debouncedresize={setup:function(){d(this).on("resize",a.handler)
},teardown:function(){d(this).off("resize",a.handler)
},handler:function(j,e){var h=this,g=arguments,f=function(){j.type="debouncedresize";
b.dispatch.apply(h,g)
};
if(c){clearTimeout(c)
}e?f():c=setTimeout(f,a.threshold)
},threshold:150}
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
g.id="mq-test-1";
g.style.cssText="position:absolute;top:-100em";
d.style.background="none";
d.appendChild(g);
return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
a.insertBefore(d,b);
c=g.offsetWidth===42;
a.removeChild(d);
return{matches:c,media:h}
}
}(document));
(function(b,a){a.picturefill=function(c){var d;
if(c===d){c=b("body")
}b("div[data-picture]",c).each(function(){var f=this;
var g=[];
b("div[data-media]",f).each(function(){var j=b(this).attr("data-media");
if(!j||(a.matchMedia&&a.matchMedia(j).matches)){g.push(this)
}});
var e=b("img",f).first();
if(g.length){if(e.size()===0){var h=b(f);
e=b("<img />").attr("alt",h.attr("data-alt")).appendTo(h)
}e.attr("src",g.pop().getAttribute("data-src"))
}else{e.remove()
}})
};
b(function(){a.picturefill()
});
b(a).on("debouncedresize",function(){a.picturefill()
})
}($CQ,this));
function cq5forms_isArray(a){if(Array.isArray){return Array.isArray(a)
}else{return Object.prototype.toString.call(a)==="[object Array]"
}}function cq5forms_isNodeList(b){var a=Object.prototype.toString.call(b);
return typeof b==="object"&&/^\[object (HTMLCollection|NodeList|RadioNodeList)\]$/.test(a)&&(typeof b.length==="number")&&(b.length===0||(typeof b[0]==="object"&&b[0].nodeType>0))
}function cq5forms_showMsg(e,c,d,a){var b=document.forms[e].elements[c];
alert(d);
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){if(!a){a=0
}b[a].focus()
}else{b.focus()
}}function cq5forms_isEmpty(b){if(b===undefined){return false
}var a=true;
if(cq5forms_isNodeList(b)){b=Array.prototype.slice.call(b)
}if(cq5forms_isArray(b)){for(i=0;
i<b.length;
i++){if(b[i].type=="radio"||b[i].type=="checkbox"){if(b[i].checked){a=false
}}else{if(b[i].localName=="option"){if(b[i].selected){a=false
}}else{if(b[i].value.length>0){a=false
}}}}}else{if(b.type=="radio"||b.type=="checkbox"){if(b.checked){a=false
}}else{if(b.value.length>0){a=false
}}}return a
}function cq5forms_regcheck(f,d){var b=false;
var c=d.exec(f);
if(c){var a=f.length;
var e=c[0].length;
b=(e==a)
}return b
}function cq5forms_multiResourceChange(a,b,c){if(!c){if(!a){a=window.event
}if(a.keyCode<48&&a.keyCode!=8&&a.keyCode!=46){return
}}try{document.getElementById(b).checked=true
}catch(d){}}(function(){var w=this;
var D=w.Backbone;
var g=[];
var F=g.push;
var p=g.slice;
var v=g.splice;
var B;
if(typeof exports!=="undefined"){B=exports
}else{B=w.Backbone={}
}B.VERSION="1.0.0";
var N=w._;
if(!N&&(typeof require!=="undefined")){N=require("underscore")
}B.$=w.jQuery||w.Zepto||w.ender||w.$;
B.noConflict=function(){w.Backbone=D;
return this
};
B.emulateHTTP=false;
B.emulateJSON=false;
var L=B.Events={on:function(O,R,Q){if(!z(this,"on",O,[R,Q])||!R){return this
}this._events||(this._events={});
var P=this._events[O]||(this._events[O]=[]);
P.push({callback:R,context:Q,ctx:Q||this});
return this
},once:function(P,S,Q){if(!z(this,"once",P,[S,Q])||!S){return this
}var O=this;
var R=N.once(function(){O.off(P,R);
S.apply(this,arguments)
});
R._callback=S;
return this.on(P,R,Q)
},off:function(O,X,P){var V,W,Y,U,T,Q,S,R;
if(!this._events||!z(this,"off",O,[X,P])){return this
}if(!O&&!X&&!P){this._events={};
return this
}U=O?[O]:N.keys(this._events);
for(T=0,Q=U.length;
T<Q;
T++){O=U[T];
if(Y=this._events[O]){this._events[O]=V=[];
if(X||P){for(S=0,R=Y.length;
S<R;
S++){W=Y[S];
if((X&&X!==W.callback&&X!==W.callback._callback)||(P&&P!==W.context)){V.push(W)
}}}if(!V.length){delete this._events[O]
}}}return this
},trigger:function(Q){if(!this._events){return this
}var P=p.call(arguments,1);
if(!z(this,"trigger",Q,P)){return this
}var R=this._events[Q];
var O=this._events.all;
if(R){b(R,P)
}if(O){b(O,arguments)
}return this
},stopListening:function(R,O,T){var P=this._listeners;
if(!P){return this
}var Q=!O&&!T;
if(typeof O==="object"){T=this
}if(R){(P={})[R._listenerId]=R
}for(var S in P){P[S].off(O,T,this);
if(Q){delete this._listeners[S]
}}return this
}};
var y=/\s+/;
var z=function(V,T,P,S){if(!P){return true
}if(typeof P==="object"){for(var R in P){V[T].apply(V,[R,P[R]].concat(S))
}return false
}if(y.test(P)){var U=P.split(y);
for(var Q=0,O=U.length;
Q<O;
Q++){V[T].apply(V,[U[Q]].concat(S))
}return false
}return true
};
var b=function(T,R){var U,S=-1,Q=T.length,P=R[0],O=R[1],V=R[2];
switch(R.length){case 0:while(++S<Q){(U=T[S]).callback.call(U.ctx)
}return;
case 1:while(++S<Q){(U=T[S]).callback.call(U.ctx,P)
}return;
case 2:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O)
}return;
case 3:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O,V)
}return;
default:while(++S<Q){(U=T[S]).callback.apply(U.ctx,R)
}}};
var E={listenTo:"on",listenToOnce:"once"};
N.each(E,function(O,P){L[P]=function(S,Q,U){var R=this._listeners||(this._listeners={});
var T=S._listenerId||(S._listenerId=N.uniqueId("l"));
R[T]=S;
if(typeof Q==="object"){U=this
}S[O](Q,U,this);
return this
}
});
L.bind=L.on;
L.unbind=L.off;
N.extend(B,L);
var G=B.Model=function(O,Q){var R;
var P=O||{};
Q||(Q={});
this.cid=N.uniqueId("c");
this.attributes={};
N.extend(this,N.pick(Q,H));
if(Q.parse){P=this.parse(P,Q)||{}
}if(R=N.result(this,"defaults")){P=N.defaults({},P,R)
}this.set(P,Q);
this.changed={};
this.initialize.apply(this,arguments)
};
var H=["url","urlRoot","collection"];
N.extend(G.prototype,L,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(O){return N.clone(this.attributes)
},sync:function(){return B.sync.apply(this,arguments)
},get:function(O){return this.attributes[O]
},escape:function(O){return N.escape(this.get(O))
},has:function(O){return this.get(O)!=null
},set:function(W,O,aa){var U,X,Y,V,T,Z,Q,S;
if(W==null){return this
}if(typeof W==="object"){X=W;
aa=O
}else{(X={})[W]=O
}aa||(aa={});
if(!this._validate(X,aa)){return false
}Y=aa.unset;
T=aa.silent;
V=[];
Z=this._changing;
this._changing=true;
if(!Z){this._previousAttributes=N.clone(this.attributes);
this.changed={}
}S=this.attributes,Q=this._previousAttributes;
if(this.idAttribute in X){this.id=X[this.idAttribute]
}for(U in X){O=X[U];
if(!N.isEqual(S[U],O)){V.push(U)
}if(!N.isEqual(Q[U],O)){this.changed[U]=O
}else{delete this.changed[U]
}Y?delete S[U]:S[U]=O
}if(!T){if(V.length){this._pending=true
}for(var R=0,P=V.length;
R<P;
R++){this.trigger("change:"+V[R],this,S[V[R]],aa)
}}if(Z){return this
}if(!T){while(this._pending){this._pending=false;
this.trigger("change",this,aa)
}}this._pending=false;
this._changing=false;
return this
},unset:function(O,P){return this.set(O,void 0,N.extend({},P,{unset:true}))
},clear:function(P){var O={};
for(var Q in this.attributes){O[Q]=void 0
}return this.set(O,N.extend({},P,{unset:true}))
},hasChanged:function(O){if(O==null){return !N.isEmpty(this.changed)
}return N.has(this.changed,O)
},changedAttributes:function(Q){if(!Q){return this.hasChanged()?N.clone(this.changed):false
}var S,R=false;
var P=this._changing?this._previousAttributes:this.attributes;
for(var O in Q){if(N.isEqual(P[O],(S=Q[O]))){continue
}(R||(R={}))[O]=S
}return R
},previous:function(O){if(O==null||!this._previousAttributes){return null
}return this._previousAttributes[O]
},previousAttributes:function(){return N.clone(this._previousAttributes)
},fetch:function(P){P=P?N.clone(P):{};
if(P.parse===void 0){P.parse=true
}var O=this;
var Q=P.success;
P.success=function(R){if(!O.set(O.parse(R,P),P)){return false
}if(Q){Q(O,R,P)
}O.trigger("sync",O,R,P)
};
J(this,P);
return this.sync("read",this,P)
},save:function(S,P,W){var T,O,V,Q=this.attributes;
if(S==null||typeof S==="object"){T=S;
W=P
}else{(T={})[S]=P
}if(T&&(!W||!W.wait)&&!this.set(T,W)){return false
}W=N.extend({validate:true},W);
if(!this._validate(T,W)){return false
}if(T&&W.wait){this.attributes=N.extend({},Q,T)
}if(W.parse===void 0){W.parse=true
}var R=this;
var U=W.success;
W.success=function(Y){R.attributes=Q;
var X=R.parse(Y,W);
if(W.wait){X=N.extend(T||{},X)
}if(N.isObject(X)&&!R.set(X,W)){return false
}if(U){U(R,Y,W)
}R.trigger("sync",R,Y,W)
};
J(this,W);
O=this.isNew()?"create":(W.patch?"patch":"update");
if(O==="patch"){W.attrs=T
}V=this.sync(O,this,W);
if(T&&W.wait){this.attributes=Q
}return V
},destroy:function(P){P=P?N.clone(P):{};
var O=this;
var S=P.success;
var Q=function(){O.trigger("destroy",O,O.collection,P)
};
P.success=function(T){if(P.wait||O.isNew()){Q()
}if(S){S(O,T,P)
}if(!O.isNew()){O.trigger("sync",O,T,P)
}};
if(this.isNew()){P.success();
return false
}J(this,P);
var R=this.sync("delete",this,P);
if(!P.wait){Q()
}return R
},url:function(){var O=N.result(this,"urlRoot")||N.result(this.collection,"url")||t();
if(this.isNew()){return O
}return O+(O.charAt(O.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(P,O){return P
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(O){return this._validate({},N.extend(O||{},{validate:true}))
},_validate:function(Q,P){if(!P.validate||!this.validate){return true
}Q=N.extend({},this.attributes,Q);
var O=this.validationError=this.validate(Q,P)||null;
if(!O){return true
}this.trigger("invalid",this,O,N.extend(P||{},{validationError:O}));
return false
}});
var a=["keys","values","pairs","invert","pick","omit"];
N.each(a,function(O){G.prototype[O]=function(){var P=p.call(arguments);
P.unshift(this.attributes);
return N[O].apply(N,P)
}
});
var c=B.Collection=function(P,O){O||(O={});
if(O.url){this.url=O.url
}if(O.model){this.model=O.model
}if(O.comparator!==void 0){this.comparator=O.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(P){this.reset(P,N.extend({silent:true},O))
}};
var q={add:true,remove:true,merge:true};
var M={add:true,merge:false,remove:false};
N.extend(c.prototype,L,{model:G,initialize:function(){},toJSON:function(O){return this.map(function(P){return P.toJSON(O)
})
},sync:function(){return B.sync.apply(this,arguments)
},add:function(P,O){return this.set(P,N.defaults(O||{},M))
},remove:function(T,R){T=N.isArray(T)?T.slice():[T];
R||(R={});
var S,O,Q,P;
for(S=0,O=T.length;
S<O;
S++){P=this.get(T[S]);
if(!P){continue
}delete this._byId[P.id];
delete this._byId[P.cid];
Q=this.indexOf(P);
this.models.splice(Q,1);
this.length--;
if(!R.silent){R.index=Q;
P.trigger("remove",P,this,R)
}this._removeReference(P)
}return this
},set:function(P,ab){ab=N.defaults(ab||{},q);
if(ab.parse){P=this.parse(P,ab)
}if(!N.isArray(P)){P=P?[P]:[]
}var W,S,Y,Z,Q,X;
var R=ab.at;
var V=this.comparator&&(R==null)&&ab.sort!==false;
var T=N.isString(this.comparator)?this.comparator:null;
var aa=[],O=[],U={};
for(W=0,S=P.length;
W<S;
W++){if(!(Y=this._prepareModel(P[W],ab))){continue
}if(Q=this.get(Y)){if(ab.remove){U[Q.cid]=true
}if(ab.merge){Q.set(Y.attributes,ab);
if(V&&!X&&Q.hasChanged(T)){X=true
}}}else{if(ab.add){aa.push(Y);
Y.on("all",this._onModelEvent,this);
this._byId[Y.cid]=Y;
if(Y.id!=null){this._byId[Y.id]=Y
}}}}if(ab.remove){for(W=0,S=this.length;
W<S;
++W){if(!U[(Y=this.models[W]).cid]){O.push(Y)
}}if(O.length){this.remove(O,ab)
}}if(aa.length){if(V){X=true
}this.length+=aa.length;
if(R!=null){v.apply(this.models,[R,0].concat(aa))
}else{F.apply(this.models,aa)
}}if(X){this.sort({silent:true})
}if(ab.silent){return this
}for(W=0,S=aa.length;
W<S;
W++){(Y=aa[W]).trigger("add",Y,this,ab)
}if(X){this.trigger("sort",this,ab)
}return this
},reset:function(R,P){P||(P={});
for(var Q=0,O=this.models.length;
Q<O;
Q++){this._removeReference(this.models[Q])
}P.previousModels=this.models;
this._reset();
this.add(R,N.extend({silent:true},P));
if(!P.silent){this.trigger("reset",this,P)
}return this
},push:function(P,O){P=this._prepareModel(P,O);
this.add(P,N.extend({at:this.length},O));
return P
},pop:function(P){var O=this.at(this.length-1);
this.remove(O,P);
return O
},unshift:function(P,O){P=this._prepareModel(P,O);
this.add(P,N.extend({at:0},O));
return P
},shift:function(P){var O=this.at(0);
this.remove(O,P);
return O
},slice:function(P,O){return this.models.slice(P,O)
},get:function(O){if(O==null){return void 0
}return this._byId[O.id!=null?O.id:O.cid||O]
},at:function(O){return this.models[O]
},where:function(O,P){if(N.isEmpty(O)){return P?void 0:[]
}return this[P?"find":"filter"](function(Q){for(var R in O){if(O[R]!==Q.get(R)){return false
}}return true
})
},findWhere:function(O){return this.where(O,true)
},sort:function(O){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}O||(O={});
if(N.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(N.bind(this.comparator,this))
}if(!O.silent){this.trigger("sort",this,O)
}return this
},sortedIndex:function(O,R,P){R||(R=this.comparator);
var Q=N.isFunction(R)?R:function(S){return S.get(R)
};
return N.sortedIndex(this.models,O,Q,P)
},pluck:function(O){return N.invoke(this.models,"get",O)
},fetch:function(O){O=O?N.clone(O):{};
if(O.parse===void 0){O.parse=true
}var Q=O.success;
var P=this;
O.success=function(R){var S=O.reset?"reset":"set";
P[S](R,O);
if(Q){Q(P,R,O)
}P.trigger("sync",P,R,O)
};
J(this,O);
return this.sync("read",this,O)
},create:function(P,O){O=O?N.clone(O):{};
if(!(P=this._prepareModel(P,O))){return false
}if(!O.wait){this.add(P,O)
}var R=this;
var Q=O.success;
O.success=function(S){if(O.wait){R.add(P,O)
}if(Q){Q(P,S,O)
}};
P.save(null,O);
return P
},parse:function(P,O){return P
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(Q,P){if(Q instanceof G){if(!Q.collection){Q.collection=this
}return Q
}P||(P={});
P.collection=this;
var O=new this.model(Q,P);
if(!O._validate(Q,P)){this.trigger("invalid",this,Q,P);
return false
}return O
},_removeReference:function(O){if(this===O.collection){delete O.collection
}O.off("all",this._onModelEvent,this)
},_onModelEvent:function(Q,P,R,O){if((Q==="add"||Q==="remove")&&R!==this){return
}if(Q==="destroy"){this.remove(P,O)
}if(P&&Q==="change:"+P.idAttribute){delete this._byId[P.previous(P.idAttribute)];
if(P.id!=null){this._byId[P.id]=P
}}this.trigger.apply(this,arguments)
}});
var A=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
N.each(A,function(O){c.prototype[O]=function(){var P=p.call(arguments);
P.unshift(this.models);
return N[O].apply(N,P)
}
});
var m=["groupBy","countBy","sortBy"];
N.each(m,function(O){c.prototype[O]=function(R,P){var Q=N.isFunction(R)?R:function(S){return S.get(R)
};
return N[O](this.models,Q,P)
}
});
var I=B.View=function(O){this.cid=N.uniqueId("view");
this._configure(O||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var x=/^(\S+)\s*(.*)$/;
var e=["model","collection","el","id","attributes","className","tagName","events"];
N.extend(I.prototype,L,{tagName:"div",$:function(O){return this.$el.find(O)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(O,P){if(this.$el){this.undelegateEvents()
}this.$el=O instanceof B.$?O:B.$(O);
this.el=this.$el[0];
if(P!==false){this.delegateEvents()
}return this
},delegateEvents:function(S){if(!(S||(S=N.result(this,"events")))){return this
}this.undelegateEvents();
for(var R in S){var T=S[R];
if(!N.isFunction(T)){T=this[S[R]]
}if(!T){continue
}var Q=R.match(x);
var P=Q[1],O=Q[2];
T=N.bind(T,this);
P+=".delegateEvents"+this.cid;
if(O===""){this.$el.on(P,T)
}else{this.$el.on(P,O,T)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_configure:function(O){if(this.options){O=N.extend({},N.result(this,"options"),O)
}N.extend(this,N.pick(O,e));
this.options=O
},_ensureElement:function(){if(!this.el){var O=N.extend({},N.result(this,"attributes"));
if(this.id){O.id=N.result(this,"id")
}if(this.className){O["class"]=N.result(this,"className")
}var P=B.$("<"+N.result(this,"tagName")+">").attr(O);
this.setElement(P,false)
}else{this.setElement(N.result(this,"el"),false)
}}});
B.sync=function(U,P,O){var R=l[U];
N.defaults(O||(O={}),{emulateHTTP:B.emulateHTTP,emulateJSON:B.emulateJSON});
var T={type:R,dataType:"json"};
if(!O.url){T.url=N.result(P,"url")||t()
}if(O.data==null&&P&&(U==="create"||U==="update"||U==="patch")){T.contentType="application/json";
T.data=JSON.stringify(O.attrs||P.toJSON(O))
}if(O.emulateJSON){T.contentType="application/x-www-form-urlencoded";
T.data=T.data?{model:T.data}:{}
}if(O.emulateHTTP&&(R==="PUT"||R==="DELETE"||R==="PATCH")){T.type="POST";
if(O.emulateJSON){T.data._method=R
}var Q=O.beforeSend;
O.beforeSend=function(V){V.setRequestHeader("X-HTTP-Method-Override",R);
if(Q){return Q.apply(this,arguments)
}}
}if(T.type!=="GET"&&!O.emulateJSON){T.processData=false
}if(T.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){T.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var S=O.xhr=B.ajax(N.extend(T,O));
P.trigger("request",P,S,O);
return S
};
var l={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
B.ajax=function(){return B.$.ajax.apply(B.$,arguments)
};
var r=B.Router=function(O){O||(O={});
if(O.routes){this.routes=O.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var s=/\((.*?)\)/g;
var u=/(\(\?)?:\w+/g;
var d=/\*\w+/g;
var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;
N.extend(r.prototype,L,{initialize:function(){},route:function(P,Q,R){if(!N.isRegExp(P)){P=this._routeToRegExp(P)
}if(N.isFunction(Q)){R=Q;
Q=""
}if(!R){R=this[Q]
}var O=this;
B.history.route(P,function(T){var S=O._extractParameters(P,T);
R&&R.apply(O,S);
O.trigger.apply(O,["route:"+Q].concat(S));
O.trigger("route",Q,S);
B.history.trigger("route",O,Q,S)
});
return this
},navigate:function(P,O){B.history.navigate(P,O);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=N.result(this,"routes");
var P,O=N.keys(this.routes);
while((P=O.pop())!=null){this.route(P,this.routes[P])
}},_routeToRegExp:function(O){O=O.replace(h,"\\$&").replace(s,"(?:$1)?").replace(u,function(Q,P){return P?Q:"([^/]+)"
}).replace(d,"(.*?)");
return new RegExp("^"+O+"$")
},_extractParameters:function(O,P){var Q=O.exec(P).slice(1);
return N.map(Q,function(R){return R?decodeURIComponent(R):null
})
}});
var j=B.History=function(){this.handlers=[];
N.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var C=/^[#\/]|\s+$/g;
var f=/^\/+|\/+$/g;
var K=/msie [\w.]+/;
var o=/\/$/;
j.started=false;
N.extend(j.prototype,L,{interval:50,getHash:function(P){var O=(P||this).location.href.match(/#(.*)$/);
return O?O[1]:""
},getFragment:function(Q,P){if(Q==null){if(this._hasPushState||!this._wantsHashChange||P){Q=this.location.pathname;
var O=this.root.replace(o,"");
if(!Q.indexOf(O)){Q=Q.substr(O.length)
}}else{Q=this.getHash()
}}return Q.replace(C,"")
},start:function(Q){if(j.started){throw new Error("Backbone.history has already been started")
}j.started=true;
this.options=N.extend({},{root:"/"},this.options,Q);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var P=this.getFragment();
var O=document.documentMode;
var S=(K.exec(navigator.userAgent.toLowerCase())&&(!O||O<=7));
this.root=("/"+this.root+"/").replace(f,"/");
if(S&&this._wantsHashChange){this.iframe=B.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(P)
}if(this._hasPushState){B.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!S){B.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=P;
var T=this.location;
var R=T.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!R){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&R&&T.hash){this.fragment=this.getHash().replace(C,"");
this.history.replaceState({},document.title,this.root+this.fragment+T.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){B.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
j.started=false
},route:function(O,P){this.handlers.unshift({route:O,callback:P})
},checkUrl:function(P){var O=this.getFragment();
if(O===this.fragment&&this.iframe){O=this.getFragment(this.getHash(this.iframe))
}if(O===this.fragment){return false
}if(this.iframe){this.navigate(O)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(Q){var P=this.fragment=this.getFragment(Q);
var O=N.any(this.handlers,function(R){if(R.route.test(P)){R.callback(P);
return true
}});
return O
},navigate:function(Q,P){if(!j.started){return false
}if(!P||P===true){P={trigger:P}
}Q=this.getFragment(Q||"");
if(this.fragment===Q){return
}this.fragment=Q;
var O=this.root+Q;
if(this._hasPushState){this.history[P.replace?"replaceState":"pushState"]({},document.title,O)
}else{if(this._wantsHashChange){this._updateHash(this.location,Q,P.replace);
if(this.iframe&&(Q!==this.getFragment(this.getHash(this.iframe)))){if(!P.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,Q,P.replace)
}}else{return this.location.assign(O)
}}if(P.trigger){this.loadUrl(Q)
}},_updateHash:function(O,Q,R){if(R){var P=O.href.replace(/(javascript:|#).*$/,"");
O.replace(P+"#"+Q)
}else{O.hash="#"+Q
}}});
B.history=new j;
var n=function(O,Q){var P=this;
var S;
if(O&&N.has(O,"constructor")){S=O.constructor
}else{S=function(){return P.apply(this,arguments)
}
}N.extend(S,P,Q);
var R=function(){this.constructor=S
};
R.prototype=P.prototype;
S.prototype=new R;
if(O){N.extend(S.prototype,O)
}S.__super__=P.prototype;
return S
};
G.extend=c.extend=r.extend=I.extend=j.extend=n;
var t=function(){throw new Error('A "url" property or function must be specified')
};
var J=function(Q,P){var O=P.error;
P.error=function(R){if(O){O(Q,R,P)
}Q.trigger("error",Q,R,P)
}
}
}).call(this);
(function webpackUniversalModuleDefinition(a,b){if(typeof exports==="object"&&typeof module==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{if(typeof exports==="object"){exports.Handlebars=b()
}else{a.Handlebars=b()
}}}})(this,function(){return(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={exports:{},id:e,loaded:false};
a[e].call(d.exports,d,d.exports,c);
d.loaded=true;
return d.exports
}c.m=a;
c.c=b;
c.p="";
return c(0)
})([(function(c,u,e){var a=e(1)["default"];
u.__esModule=true;
var g=e(2);
var d=a(g);
var b=e(35);
var p=a(b);
var h=e(36);
var q=e(41);
var j=e(42);
var l=a(j);
var r=e(39);
var t=a(r);
var n=e(34);
var m=a(n);
var s=d["default"].create;
function o(){var v=s();
v.compile=function(w,x){return q.compile(w,x,v)
};
v.precompile=function(w,x){return q.precompile(w,x,v)
};
v.AST=p["default"];
v.Compiler=q.Compiler;
v.JavaScriptCompiler=l["default"];
v.Parser=h.parser;
v.parse=h.parse;
return v
}var f=o();
f.create=o;
m["default"](f);
f.Visitor=t["default"];
f["default"]=f;
u["default"]=f;
c.exports=u["default"]
}),(function(b,a){a["default"]=function(c){return c&&c.__esModule?c:{"default":c}
};
a.__esModule=true
}),(function(b,u,d){var r=d(3)["default"];
var a=d(1)["default"];
u.__esModule=true;
var t=d(4);
var g=r(t);
var s=d(21);
var h=a(s);
var n=d(6);
var p=a(n);
var o=d(5);
var c=r(o);
var f=d(22);
var q=r(f);
var l=d(34);
var j=a(l);
function m(){var v=new g.HandlebarsEnvironment();
c.extend(v,g);
v.SafeString=h["default"];
v.Exception=p["default"];
v.Utils=c;
v.escapeExpression=c.escapeExpression;
v.VM=q;
v.template=function(w){return q.template(w,v)
};
return v
}var e=m();
e.create=m;
j["default"](e);
e["default"]=e;
u["default"]=e;
b.exports=u["default"]
}),(function(b,a){a["default"]=function(e){if(e&&e.__esModule){return e
}else{var c={};
if(e!=null){for(var d in e){if(Object.prototype.hasOwnProperty.call(e,d)){c[d]=e[d]
}}}c["default"]=e;
return c
}};
a.__esModule=true
}),(function(e,x,g){var c=g(1)["default"];
x.__esModule=true;
x.HandlebarsEnvironment=m;
var p=g(5);
var v=g(6);
var f=c(v);
var h=g(10);
var y=g(18);
var o=g(20);
var d=c(o);
var w="4.0.11";
x.VERSION=w;
var s=7;
x.COMPILER_REVISION=s;
var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
x.REVISION_CHANGES=u;
var r="[object Object]";
function m(B,A,z){this.helpers=B||{};
this.partials=A||{};
this.decorators=z||{};
h.registerDefaultHelpers(this);
y.registerDefaultDecorators(this)
}m.prototype={constructor:m,logger:d["default"],log:d["default"].log,registerHelper:function q(z,A){if(p.toString.call(z)===r){if(A){throw new f["default"]("Arg not supported with multiple helpers")
}p.extend(this.helpers,z)
}else{this.helpers[z]=A
}},unregisterHelper:function j(z){delete this.helpers[z]
},registerPartial:function l(A,z){if(p.toString.call(A)===r){p.extend(this.partials,A)
}else{if(typeof z==="undefined"){throw new f["default"]('Attempting to register a partial called "'+A+'" as undefined')
}this.partials[A]=z
}},unregisterPartial:function t(z){delete this.partials[z]
},registerDecorator:function b(z,A){if(p.toString.call(z)===r){if(A){throw new f["default"]("Arg not supported with multiple decorators")
}p.extend(this.decorators,z)
}else{this.decorators[z]=A
}},unregisterDecorator:function a(z){delete this.decorators[z]
}};
var n=d["default"].log;
x.log=n;
x.createFrame=p.createFrame;
x.logger=d["default"]
}),(function(d,g){g.__esModule=true;
g.extend=n;
g.indexOf=o;
g.escapeExpression=j;
g.isEmpty=h;
g.createFrame=q;
g.blockParams=m;
g.appendContextPath=e;
var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};
var a=/[&<>"'`=]/g,f=/[&<>"'`=]/;
function r(s){return p[s]
}function n(u){for(var t=1;
t<arguments.length;
t++){for(var s in arguments[t]){if(Object.prototype.hasOwnProperty.call(arguments[t],s)){u[s]=arguments[t][s]
}}}return u
}var c=Object.prototype.toString;
g.toString=c;
var b=function b(s){return typeof s==="function"
};
if(b(/x/)){g.isFunction=b=function(s){return typeof s==="function"&&c.call(s)==="[object Function]"
}
}g.isFunction=b;
var l=Array.isArray||function(s){return s&&typeof s==="object"?c.call(s)==="[object Array]":false
};
g.isArray=l;
function o(v,u){for(var t=0,s=v.length;
t<s;
t++){if(v[t]===u){return t
}}return -1
}function j(s){if(typeof s!=="string"){if(s&&s.toHTML){return s.toHTML()
}else{if(s==null){return""
}else{if(!s){return s+""
}}}s=""+s
}if(!f.test(s)){return s
}return s.replace(a,r)
}function h(s){if(!s&&s!==0){return true
}else{if(l(s)&&s.length===0){return true
}else{return false
}}}function q(s){var t=n({},s);
t._parent=s;
return t
}function m(t,s){t.path=s;
return t
}function e(s,t){return(s?s+".":"")+t
}}),(function(d,a,e){var c=e(7)["default"];
a.__esModule=true;
var f=["description","fileName","lineNumber","message","name","number","stack"];
function b(n,m){var o=m&&m.loc,h=undefined,l=undefined;
if(o){h=o.start.line;
l=o.start.column;
n+=" - "+h+":"+l
}var j=Error.prototype.constructor.call(this,n);
for(var g=0;
g<f.length;
g++){this[f[g]]=j[f[g]]
}if(Error.captureStackTrace){Error.captureStackTrace(this,b)
}try{if(o){this.lineNumber=h;
if(c){Object.defineProperty(this,"column",{value:l,enumerable:true})
}else{this.column=l
}}}catch(p){}}b.prototype=new Error();
a["default"]=b;
d.exports=a["default"]
}),(function(b,a,c){b.exports={"default":c(8),__esModule:true}
}),(function(c,b,e){var d=e(9);
c.exports=function a(g,f,h){return d.setDesc(g,f,h)
}
}),(function(c,a){var b=Object;
c.exports={create:b.create,getProto:b.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:b.getOwnPropertyDescriptor,setDesc:b.defineProperty,setDescs:b.defineProperties,getKeys:b.keys,getNames:b.getOwnPropertyNames,getSymbols:b.getOwnPropertySymbols,each:[].forEach}
}),(function(e,u,f){var c=f(1)["default"];
u.__esModule=true;
u.registerDefaultHelpers=q;
var a=f(11);
var o=c(a);
var m=f(12);
var d=c(m);
var g=f(13);
var t=c(g);
var j=f(14);
var b=c(j);
var p=f(15);
var r=c(p);
var n=f(16);
var h=c(n);
var l=f(17);
var s=c(l);
function q(v){o["default"](v);
d["default"](v);
t["default"](v);
b["default"](v);
r["default"](v);
h["default"](v);
s["default"](v)
}}),(function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("blockHelperMissing",function(h,g){var f=g.inverse,j=g.fn;
if(h===true){return j(this)
}else{if(h===false||h==null){return f(this)
}else{if(c.isArray(h)){if(h.length>0){if(g.ids){g.ids=[g.name]
}return e.helpers.each(h,g)
}else{return f(this)
}}else{if(g.data&&g.ids){var l=c.createFrame(g.data);
l.contextPath=c.appendContextPath(g.data.contextPath,g.name);
g={data:l}
}return j(h,g)
}}}})
};
b.exports=a["default"]
}),(function(c,a,f){var d=f(1)["default"];
a.__esModule=true;
var e=f(5);
var b=f(6);
var g=d(b);
a["default"]=function(h){h.registerHelper("each",function(l,w){if(!w){throw new g["default"]("Must pass iterator to #each")
}var u=w.fn,p=w.inverse,r=0,t="",q=undefined,m=undefined;
if(w.data&&w.ids){m=e.appendContextPath(w.data.contextPath,w.ids[0])+"."
}if(e.isFunction(l)){l=l.call(this)
}if(w.data){q=e.createFrame(w.data)
}function n(y,j,x){if(q){q.key=y;
q.index=j;
q.first=j===0;
q.last=!!x;
if(m){q.contextPath=m+y
}}t=t+u(l[y],{data:q,blockParams:e.blockParams([l[y],y],[m+y,null])})
}if(l&&typeof l==="object"){if(e.isArray(l)){for(var o=l.length;
r<o;
r++){if(r in l){n(r,r,r===l.length-1)
}}}else{var s=undefined;
for(var v in l){if(l.hasOwnProperty(v)){if(s!==undefined){n(s,r-1)
}s=v;
r++
}}if(s!==undefined){n(s,r-1,true)
}}}if(r===0){t=p(this)
}return t
})
};
c.exports=a["default"]
}),(function(c,a,e){var d=e(1)["default"];
a.__esModule=true;
var b=e(6);
var f=d(b);
a["default"]=function(g){g.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined
}else{throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
};
c.exports=a["default"]
}),(function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("if",function(g,f){if(c.isFunction(g)){g=g.call(this)
}if(!f.hash.includeZero&&!g||c.isEmpty(g)){return f.inverse(this)
}else{return f.fn(this)
}});
e.registerHelper("unless",function(g,f){return e.helpers["if"].call(this,g,{fn:f.inverse,inverse:f.fn,hash:f.hash})
})
};
b.exports=a["default"]
}),(function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("log",function(){var e=[undefined],d=arguments[arguments.length-1];
for(var f=0;
f<arguments.length-1;
f++){e.push(arguments[f])
}var g=1;
if(d.hash.level!=null){g=d.hash.level
}else{if(d.data&&d.data.level!=null){g=d.data.level
}}e[0]=g;
c.log.apply(c,e)
})
};
b.exports=a["default"]
}),(function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("lookup",function(e,d){return e&&e[d]
})
};
b.exports=a["default"]
}),(function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("with",function(g,f){if(c.isFunction(g)){g=g.call(this)
}var h=f.fn;
if(!c.isEmpty(g)){var j=f.data;
if(f.data&&f.ids){j=c.createFrame(f.data);
j.contextPath=c.appendContextPath(f.data.contextPath,f.ids[0])
}return h(g,{data:j,blockParams:c.blockParams([g],[j&&j.contextPath])})
}else{return f.inverse(this)
}})
};
b.exports=a["default"]
}),(function(d,c,g){var f=g(1)["default"];
c.__esModule=true;
c.registerDefaultDecorators=e;
var b=g(19);
var a=f(b);
function e(h){a["default"](h)
}}),(function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerDecorator("inline",function(l,j,f,h){var g=l;
if(!j.partials){j.partials={};
g=function(p,n){var o=f.partials;
f.partials=c.extend({},o,j.partials);
var m=l(p,n);
f.partials=o;
return m
}
}j.partials[h.args[0]]=h.fn;
return g
})
};
b.exports=a["default"]
}),(function(c,a,f){a.__esModule=true;
var e=f(5);
var b={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function g(j){if(typeof j==="string"){var h=e.indexOf(b.methodMap,j.toLowerCase());
if(h>=0){j=h
}else{j=parseInt(j,10)
}}return j
},log:function d(n){n=b.lookupLevel(n);
if(typeof console!=="undefined"&&b.lookupLevel(b.level)<=n){var m=b.methodMap[n];
if(!console[m]){m="log"
}for(var h=arguments.length,l=Array(h>1?h-1:0),j=1;
j<h;
j++){l[j-1]=arguments[j]
}console[m].apply(console,l)
}}};
a["default"]=b;
c.exports=a["default"]
}),(function(b,a){a.__esModule=true;
function c(d){this.string=d
}c.prototype.toString=c.prototype.toHTML=function(){return""+this.string
};
a["default"]=c;
b.exports=a["default"]
}),(function(b,t,e){var m=e(23)["default"];
var s=e(3)["default"];
var a=e(1)["default"];
t.__esModule=true;
t.checkRevision=n;
t.template=r;
t.wrapProgram=h;
t.resolvePartial=l;
t.invokePartial=u;
t.noop=f;
var j=e(5);
var d=s(j);
var o=e(6);
var c=a(o);
var p=e(4);
function n(x){var w=x&&x[0]||1,z=p.COMPILER_REVISION;
if(w!==z){if(w<z){var v=p.REVISION_CHANGES[z],y=p.REVISION_CHANGES[w];
throw new c["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+v+") or downgrade your runtime to an older version ("+y+").")
}else{throw new c["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+x[1]+").")
}}}function r(F,z){if(!z){throw new c["default"]("No environment passed to template")
}if(!F||!F.main){throw new c["default"]("Unknown template object: "+typeof F)
}F.main.decorator=F.main_d;
z.VM.checkRevision(F.compiler);
function G(K,N,L){if(L.hash){N=d.extend({},N,L.hash);
if(L.ids){L.ids[0]=true
}}K=z.VM.resolvePartial.call(this,K,N,L);
var H=z.VM.invokePartial.call(this,K,N,L);
if(H==null&&z.compile){L.partials[L.name]=z.compile(K,F.compilerOptions,z);
H=L.partials[L.name](N,L)
}if(H!=null){if(L.indent){var J=H.split("\n");
for(var M=0,I=J.length;
M<I;
M++){if(!J[M]&&M+1===I){break
}J[M]=L.indent+J[M]
}H=J.join("\n")
}return H
}else{throw new c["default"]("The partial "+L.name+" could not be compiled when running in runtime-only mode")
}}var v={strict:function E(I,H){if(!(H in I)){throw new c["default"]('"'+H+'" not defined in '+I)
}return I[H]
},lookup:function w(K,I){var H=K.length;
for(var J=0;
J<H;
J++){if(K[J]&&K[J][I]!=null){return K[J][I]
}}},lambda:function A(I,H){return typeof I==="function"?I.call(H):I
},escapeExpression:d.escapeExpression,invokePartial:G,fn:function D(I){var H=F[I];
H.decorator=F[I+"_d"];
return H
},programs:[],program:function y(J,M,I,L,N){var H=this.programs[J],K=this.fn(J);
if(M||N||L||I){H=h(this,J,K,M,I,L,N)
}else{if(!H){H=this.programs[J]=h(this,J,K)
}}return H
},data:function x(H,I){while(H&&I--){H=H._parent
}return H
},merge:function C(J,H){var I=J||H;
if(J&&H&&J!==H){I=d.extend({},H,J)
}return I
},nullContext:m({}),noop:z.VM.noop,compilerInfo:F.compiler};
function B(J){var I=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var L=I.data;
B._setup(I);
if(!I.partial&&F.useData){L=q(J,L)
}var M=undefined,K=F.useBlockParams?[]:undefined;
if(F.useDepths){if(I.depths){M=J!=I.depths[0]?[J].concat(I.depths):I.depths
}else{M=[J]
}}function H(N){return""+F.main(v,N,v.helpers,v.partials,L,K,M)
}H=g(F.main,H,v,I.depths||[],L,K);
return H(J,I)
}B.isTop=true;
B._setup=function(H){if(!H.partial){v.helpers=v.merge(H.helpers,z.helpers);
if(F.usePartial){v.partials=v.merge(H.partials,z.partials)
}if(F.usePartial||F.useDecorators){v.decorators=v.merge(H.decorators,z.decorators)
}}else{v.helpers=H.helpers;
v.partials=H.partials;
v.decorators=H.decorators
}};
B._child=function(H,J,I,K){if(F.useBlockParams&&!I){throw new c["default"]("must pass block params")
}if(F.useDepths&&!K){throw new c["default"]("must pass parent depths")
}return h(v,H,F[H],J,0,I,K)
};
return B
}function h(v,x,y,A,w,z,C){function B(E){var D=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var F=C;
if(C&&E!=C[0]&&!(E===v.nullContext&&C[0]===null)){F=[E].concat(C)
}return y(v,E,v.helpers,v.partials,D.data||A,z&&[D.blockParams].concat(z),F)
}B=g(y,B,v,C,A,z);
B.program=x;
B.depth=C?C.length:0;
B.blockParams=w||0;
return B
}function l(v,x,w){if(!v){if(w.name==="@partial-block"){v=w.data["partial-block"]
}else{v=w.partials[w.name]
}}else{if(!v.call&&!w.name){w.name=v;
v=w.partials[v]
}}return v
}function u(v,x,w){var z=w.data&&w.data["partial-block"];
w.partial=true;
if(w.ids){w.data.contextPath=w.ids[0]||w.data.contextPath
}var y=undefined;
if(w.fn&&w.fn!==f){(function(){w.data=p.createFrame(w.data);
var B=w.fn;
y=w.data["partial-block"]=function A(D){var C=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
C.data=p.createFrame(C.data);
C.data["partial-block"]=z;
return B(D,C)
};
if(B.partials){w.partials=d.extend({},w.partials,B.partials)
}})()
}if(v===undefined&&y){v=y
}if(v===undefined){throw new c["default"]("The partial "+w.name+" could not be found")
}else{if(v instanceof Function){return v(x,w)
}}}function f(){return""
}function q(v,w){if(!w||!("root" in w)){w=w?p.createFrame(w):{};
w.root=v
}return w
}function g(x,A,v,B,z,y){if(x.decorator){var w={};
A=x.decorator(A,w,v,B&&B[0],z,y,B);
d.extend(A,w)
}return A
}}),(function(b,a,c){b.exports={"default":c(24),__esModule:true}
}),(function(b,a,c){c(25);
b.exports=c(30).Object.seal
}),(function(c,b,d){var a=d(26);
d(27)("seal",function(e){return function f(g){return e&&a(g)?e(g):g
}
})
}),(function(b,a){b.exports=function(c){return typeof c==="object"?c!==null:typeof c==="function"
}
}),(function(d,c,e){var f=e(28),b=e(30),a=e(33);
d.exports=function(h,g){var j=(b.Object||{})[h]||Object[h],l={};
l[h]=g(j);
f(f.S+f.F*a(function(){j(1)
}),"Object",l)
}
}),(function(e,d,g){var f=g(29),c=g(30),b=g(31),a="prototype";
var h=function(u,m,j){var l=u&h.F,o=u&h.G,s=u&h.S,n=u&h.P,r=u&h.B,w=u&h.W,q=o?c:c[m]||(c[m]={}),t=o?f:s?f[m]:(f[m]||{})[a],v,x,p;
if(o){j=m
}for(v in j){x=!l&&t&&v in t;
if(x&&v in q){continue
}p=x?t[v]:j[v];
q[v]=o&&typeof t[v]!="function"?j[v]:r&&x?b(p,f):w&&t[v]==p?(function(z){var y=function(A){return this instanceof z?new z(A):z(A)
};
y[a]=z[a];
return y
})(p):n&&typeof p=="function"?b(Function.call,p):p;
if(n){(q[a]||(q[a]={}))[v]=p
}}};
h.F=1;
h.G=2;
h.S=4;
h.P=8;
h.B=16;
h.W=32;
e.exports=h
}),(function(b,a){var c=b.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();
if(typeof __g=="number"){__g=c
}}),(function(c,b){var a=c.exports={version:"1.2.6"};
if(typeof __e=="number"){__e=a
}}),(function(c,b,d){var a=d(32);
c.exports=function(e,g,f){a(e);
if(g===undefined){return e
}switch(f){case 1:return function(h){return e.call(g,h)
};
case 2:return function(j,h){return e.call(g,j,h)
};
case 3:return function(j,h,l){return e.call(g,j,h,l)
}
}return function(){return e.apply(g,arguments)
}
}
}),(function(b,a){b.exports=function(c){if(typeof c!="function"){throw TypeError(c+" is not a function!")
}return c
}
}),(function(b,a){b.exports=function(c){try{return !!c()
}catch(d){return true
}}
}),(function(b,a){(function(c){a.__esModule=true;
a["default"]=function(f){var d=typeof c!=="undefined"?c:window,e=d.Handlebars;
f.noConflict=function(){if(d.Handlebars===f){d.Handlebars=e
}return f
}
};
b.exports=a["default"]
}.call(a,(function(){return this
}())))
}),(function(c,a){a.__esModule=true;
var e={helpers:{helperExpression:function d(g){return g.type==="SubExpression"||(g.type==="MustacheStatement"||g.type==="BlockStatement")&&!!(g.params&&g.params.length||g.hash)
},scopedId:function f(g){return(/^\.|this\b/.test(g.original))
},simpleId:function b(g){return g.parts.length===1&&!e.helpers.scopedId(g)&&!g.depth
}}};
a["default"]=e;
c.exports=a["default"]
}),(function(c,e,b){var o=b(1)["default"];
var g=b(3)["default"];
e.__esModule=true;
e.parse=d;
var h=b(37);
var j=o(h);
var f=b(38);
var n=o(f);
var a=b(40);
var m=g(a);
var p=b(5);
e.parser=j["default"];
var l={};
p.extend(l,m);
function d(q,r){if(q.type==="Program"){return q
}j["default"].yy=l;
l.locInfo=function(t){return new l.SourceLocation(r&&r.srcName,t)
};
var s=new n["default"](r);
return s.accept(j["default"].parse(q))
}}),(function(c,b){b.__esModule=true;
var a=(function(){var l={trace:function f(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(r,s,m,t,u,v,o){var p=v.length-1;
switch(u){case 1:return v[p-1];
break;
case 2:this.$=t.prepareProgram(v[p]);
break;
case 3:this.$=v[p];
break;
case 4:this.$=v[p];
break;
case 5:this.$=v[p];
break;
case 6:this.$=v[p];
break;
case 7:this.$=v[p];
break;
case 8:this.$=v[p];
break;
case 9:this.$={type:"CommentStatement",value:t.stripComment(v[p]),strip:t.stripFlags(v[p],v[p]),loc:t.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:v[p],value:v[p],loc:t.locInfo(this._$)};
break;
case 11:this.$=t.prepareRawBlock(v[p-2],v[p-1],v[p],this._$);
break;
case 12:this.$={path:v[p-3],params:v[p-2],hash:v[p-1]};
break;
case 13:this.$=t.prepareBlock(v[p-3],v[p-2],v[p-1],v[p],false,this._$);
break;
case 14:this.$=t.prepareBlock(v[p-3],v[p-2],v[p-1],v[p],true,this._$);
break;
case 15:this.$={open:v[p-5],path:v[p-4],params:v[p-3],hash:v[p-2],blockParams:v[p-1],strip:t.stripFlags(v[p-5],v[p])};
break;
case 16:this.$={path:v[p-4],params:v[p-3],hash:v[p-2],blockParams:v[p-1],strip:t.stripFlags(v[p-5],v[p])};
break;
case 17:this.$={path:v[p-4],params:v[p-3],hash:v[p-2],blockParams:v[p-1],strip:t.stripFlags(v[p-5],v[p])};
break;
case 18:this.$={strip:t.stripFlags(v[p-1],v[p-1]),program:v[p]};
break;
case 19:var n=t.prepareBlock(v[p-2],v[p-1],v[p],v[p],false,this._$),q=t.prepareProgram([n],v[p-1].loc);
q.chained=true;
this.$={strip:v[p-2].strip,program:q,chain:true};
break;
case 20:this.$=v[p];
break;
case 21:this.$={path:v[p-1],strip:t.stripFlags(v[p-2],v[p])};
break;
case 22:this.$=t.prepareMustache(v[p-3],v[p-2],v[p-1],v[p-4],t.stripFlags(v[p-4],v[p]),this._$);
break;
case 23:this.$=t.prepareMustache(v[p-3],v[p-2],v[p-1],v[p-4],t.stripFlags(v[p-4],v[p]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:v[p-3],params:v[p-2],hash:v[p-1],indent:"",strip:t.stripFlags(v[p-4],v[p]),loc:t.locInfo(this._$)};
break;
case 25:this.$=t.preparePartialBlock(v[p-2],v[p-1],v[p],this._$);
break;
case 26:this.$={path:v[p-3],params:v[p-2],hash:v[p-1],strip:t.stripFlags(v[p-4],v[p])};
break;
case 27:this.$=v[p];
break;
case 28:this.$=v[p];
break;
case 29:this.$={type:"SubExpression",path:v[p-3],params:v[p-2],hash:v[p-1],loc:t.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:v[p],loc:t.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:t.id(v[p-2]),value:v[p],loc:t.locInfo(this._$)};
break;
case 32:this.$=t.id(v[p-1]);
break;
case 33:this.$=v[p];
break;
case 34:this.$=v[p];
break;
case 35:this.$={type:"StringLiteral",value:v[p],original:v[p],loc:t.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(v[p]),original:Number(v[p]),loc:t.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:v[p]==="true",original:v[p]==="true",loc:t.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:t.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:t.locInfo(this._$)};
break;
case 40:this.$=v[p];
break;
case 41:this.$=v[p];
break;
case 42:this.$=t.preparePath(true,v[p],this._$);
break;
case 43:this.$=t.preparePath(false,v[p],this._$);
break;
case 44:v[p-2].push({part:t.id(v[p]),original:v[p],separator:v[p-1]});
this.$=v[p-2];
break;
case 45:this.$=[{part:t.id(v[p]),original:v[p]}];
break;
case 46:this.$=[];
break;
case 47:v[p-1].push(v[p]);
break;
case 48:this.$=[v[p]];
break;
case 49:v[p-1].push(v[p]);
break;
case 50:this.$=[];
break;
case 51:v[p-1].push(v[p]);
break;
case 58:this.$=[];
break;
case 59:v[p-1].push(v[p]);
break;
case 64:this.$=[];
break;
case 65:v[p-1].push(v[p]);
break;
case 70:this.$=[];
break;
case 71:v[p-1].push(v[p]);
break;
case 78:this.$=[];
break;
case 79:v[p-1].push(v[p]);
break;
case 82:this.$=[];
break;
case 83:v[p-1].push(v[p]);
break;
case 86:this.$=[];
break;
case 87:v[p-1].push(v[p]);
break;
case 90:this.$=[];
break;
case 91:v[p-1].push(v[p]);
break;
case 94:this.$=[];
break;
case 95:v[p-1].push(v[p]);
break;
case 98:this.$=[v[p]];
break;
case 99:v[p-1].push(v[p]);
break;
case 100:this.$=[v[p]];
break;
case 101:v[p-1].push(v[p]);
break
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function g(n,m){throw new Error(n)
},parse:function j(x){var E=this,u=[0],N=[null],z=[],O=this.table,n="",y=0,L=0,q=0,w=2,B=1;
this.lexer.setInput(x);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var o=this.lexer.yylloc;
z.push(o);
var s=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function D(p){u.length=u.length-2*p;
N.length=N.length-p;
z.length=z.length-p
}function C(){var p;
p=E.lexer.lex()||1;
if(typeof p!=="number"){p=E.symbols_[p]||p
}return p
}var K,G,t,J,P,A,I={},F,M,m,v;
while(true){t=u[u.length-1];
if(this.defaultActions[t]){J=this.defaultActions[t]
}else{if(K===null||typeof K=="undefined"){K=C()
}J=O[t]&&O[t][K]
}if(typeof J==="undefined"||!J.length||!J[0]){var H="";
if(!q){v=[];
for(F in O[t]){if(this.terminals_[F]&&F>2){v.push("'"+this.terminals_[F]+"'")
}}if(this.lexer.showPosition){H="Parse error on line "+(y+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[K]||K)+"'"
}else{H="Parse error on line "+(y+1)+": Unexpected "+(K==1?"end of input":"'"+(this.terminals_[K]||K)+"'")
}this.parseError(H,{text:this.lexer.match,token:this.terminals_[K]||K,line:this.lexer.yylineno,loc:o,expected:v})
}}if(J[0] instanceof Array&&J.length>1){throw new Error("Parse Error: multiple actions possible at state: "+t+", token: "+K)
}switch(J[0]){case 1:u.push(K);
N.push(this.lexer.yytext);
z.push(this.lexer.yylloc);
u.push(J[1]);
K=null;
if(!G){L=this.lexer.yyleng;
n=this.lexer.yytext;
y=this.lexer.yylineno;
o=this.lexer.yylloc;
if(q>0){q--
}}else{K=G;
G=null
}break;
case 2:M=this.productions_[J[1]][1];
I.$=N[N.length-M];
I._$={first_line:z[z.length-(M||1)].first_line,last_line:z[z.length-1].last_line,first_column:z[z.length-(M||1)].first_column,last_column:z[z.length-1].last_column};
if(s){I._$.range=[z[z.length-(M||1)].range[0],z[z.length-1].range[1]]
}A=this.performAction.call(I,n,L,y,this.yy,J[1],N,z);
if(typeof A!=="undefined"){return A
}if(M){u=u.slice(0,-1*M*2);
N=N.slice(0,-1*M);
z=z.slice(0,-1*M)
}u.push(this.productions_[J[1]][0]);
N.push(I.$);
z.push(I._$);
m=O[u[u.length-2]][u[u.length-1]];
u.push(m);
break;
case 3:return true
}}return true
}};
var d=(function(){var o={EOF:1,parseError:function q(E,D){if(this.yy.parser){this.yy.parser.parseError(E,D)
}else{throw new Error(E)
}},setInput:function p(D){this._input=D;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function z(){var E=this._input[0];
this.yytext+=E;
this.yyleng++;
this.offset++;
this.match+=E;
this.matched+=E;
var D=E.match(/(?:\r\n?|\n).*/g);
if(D){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return E
},unput:function x(F){var D=F.length;
var E=F.split(/(?:\r\n?|\n)/g);
this._input=F+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-D-1);
this.offset-=D;
var H=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(E.length-1){this.yylineno-=E.length-1
}var G=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:E?(E.length===H.length?this.yylloc.first_column:0)+H[H.length-E.length].length-E[0].length:this.yylloc.first_column-D};
if(this.options.ranges){this.yylloc.range=[G[0],G[0]+this.yyleng-D]
}return this
},more:function v(){this._more=true;
return this
},less:function A(D){this.unput(this.match.slice(D))
},pastInput:function t(){var D=this.matched.substr(0,this.matched.length-this.match.length);
return(D.length>20?"...":"")+D.substr(-20).replace(/\n/g,"")
},upcomingInput:function B(){var D=this.match;
if(D.length<20){D+=this._input.substr(0,20-D.length)
}return(D.substr(0,20)+(D.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function w(){var D=this.pastInput();
var E=new Array(D.length+1).join("-");
return D+this.upcomingInput()+"\n"+E+"^"
},next:function s(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var J,H,E,G,F,D;
if(!this._more){this.yytext="";
this.match=""
}var K=this._currentRules();
for(var I=0;
I<K.length;
I++){E=this._input.match(this.rules[K[I]]);
if(E&&(!H||E[0].length>H[0].length)){H=E;
G=I;
if(!this.options.flex){break
}}}if(H){D=H[0].match(/(?:\r\n?|\n).*/g);
if(D){this.yylineno+=D.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:D?D[D.length-1].length-D[D.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+H[0].length};
this.yytext+=H[0];
this.match+=H[0];
this.matches=H;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(H[0].length);
this.matched+=H[0];
J=this.performAction.call(this,this.yy,this,K[G],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(J){return J
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function m(){var D=this.next();
if(typeof D!=="undefined"){return D
}else{return this.lex()
}},begin:function n(D){this.conditionStack.push(D)
},popState:function r(){return this.conditionStack.pop()
},_currentRules:function C(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function u(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function n(D){this.begin(D)
}};
o.options={};
o.performAction=function y(I,E,H,D){function F(K,J){return E.yytext=E.yytext.substr(K,E.yyleng-J)
}var G=D;
switch(H){case 0:if(E.yytext.slice(-2)==="\\\\"){F(0,1);
this.begin("mu")
}else{if(E.yytext.slice(-1)==="\\"){F(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(E.yytext){return 15
}break;
case 1:return 15;
break;
case 2:this.popState();
return 15;
break;
case 3:this.begin("raw");
return 15;
break;
case 4:this.popState();
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15
}else{E.yytext=E.yytext.substr(5,E.yyleng-9);
return"END_RAW_BLOCK"
}break;
case 5:return 15;
break;
case 6:this.popState();
return 14;
break;
case 7:return 65;
break;
case 8:return 68;
break;
case 9:return 19;
break;
case 10:this.popState();
this.begin("raw");
return 23;
break;
case 11:return 55;
break;
case 12:return 60;
break;
case 13:return 29;
break;
case 14:return 47;
break;
case 15:this.popState();
return 44;
break;
case 16:this.popState();
return 44;
break;
case 17:return 34;
break;
case 18:return 39;
break;
case 19:return 51;
break;
case 20:return 48;
break;
case 21:this.unput(E.yytext);
this.popState();
this.begin("com");
break;
case 22:this.popState();
return 14;
break;
case 23:return 48;
break;
case 24:return 73;
break;
case 25:return 72;
break;
case 26:return 72;
break;
case 27:return 87;
break;
case 28:break;
case 29:this.popState();
return 54;
break;
case 30:this.popState();
return 33;
break;
case 31:E.yytext=F(1,2).replace(/\\"/g,'"');
return 80;
break;
case 32:E.yytext=F(1,2).replace(/\\'/g,"'");
return 80;
break;
case 33:return 85;
break;
case 34:return 82;
break;
case 35:return 82;
break;
case 36:return 83;
break;
case 37:return 84;
break;
case 38:return 81;
break;
case 39:return 75;
break;
case 40:return 77;
break;
case 41:return 72;
break;
case 42:E.yytext=E.yytext.replace(/\\([\\\]])/g,"$1");
return 72;
break;
case 43:return"INVALID";
break;
case 44:return 5;
break
}};
o.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/];
o.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}};
return o
})();
l.lexer=d;
function h(){this.yy={}
}h.prototype=l;
l.Parser=h;
return new h()
})();
b["default"]=a;
c.exports=b["default"]
}),(function(b,c,a){var l=a(1)["default"];
c.__esModule=true;
var e=a(39);
var m=l(e);
function d(){var n=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
this.options=n
}d.prototype=new m["default"]();
d.prototype.Program=function(u){var w=!this.options.ignoreStandalone;
var q=!this.isRootSeen;
this.isRootSeen=true;
var v=u.body;
for(var t=0,r=v.length;
t<r;
t++){var x=v[t],n=this.accept(x);
if(!n){continue
}var p=f(v,t,q),s=h(v,t,q),o=n.openStandalone&&p,z=n.closeStandalone&&s,y=n.inlineStandalone&&p&&s;
if(n.close){g(v,t,true)
}if(n.open){j(v,t,true)
}if(w&&y){g(v,t);
if(j(v,t)){if(x.type==="PartialStatement"){x.indent=/([ \t]+$)/.exec(v[t-1].original)[1]
}}}if(w&&o){g((x.program||x.inverse).body);
j(v,t)
}if(w&&z){g(v,t);
j((x.inverse||x.program).body)
}}return u
};
d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(t){this.accept(t.program);
this.accept(t.inverse);
var p=t.program||t.inverse,n=t.program&&t.inverse,o=n,s=n;
if(n&&n.chained){o=n.body[0].program;
while(s.chained){s=s.body[s.body.length-1].program
}}var q={open:t.openStrip.open,close:t.closeStrip.close,openStandalone:h(p.body),closeStandalone:f((o||p).body)};
if(t.openStrip.close){g(p.body,null,true)
}if(n){var r=t.inverseStrip;
if(r.open){j(p.body,null,true)
}if(r.close){g(o.body,null,true)
}if(t.closeStrip.open){j(s.body,null,true)
}if(!this.options.ignoreStandalone&&f(p.body)&&h(o.body)){j(p.body);
g(o.body)
}}else{if(t.closeStrip.open){j(p.body,null,true)
}}return q
};
d.prototype.Decorator=d.prototype.MustacheStatement=function(n){return n.strip
};
d.prototype.PartialStatement=d.prototype.CommentStatement=function(o){var n=o.strip||{};
return{inlineStandalone:true,open:n.open,close:n.close}
};
function f(n,p,o){if(p===undefined){p=n.length
}var r=n[p-1],q=n[p-2];
if(!r){return o
}if(r.type==="ContentStatement"){return(q||!o?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original)
}}function h(n,p,o){if(p===undefined){p=-1
}var r=n[p+1],q=n[p+2];
if(!r){return o
}if(r.type==="ContentStatement"){return(q||!o?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original)
}}function g(o,q,n){var r=o[q==null?0:q+1];
if(!r||r.type!=="ContentStatement"||!n&&r.rightStripped){return
}var p=r.value;
r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,"");
r.rightStripped=r.value!==p
}function j(o,q,n){var r=o[q==null?o.length-1:q-1];
if(!r||r.type!=="ContentStatement"||!n&&r.leftStripped){return
}var p=r.value;
r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,"");
r.leftStripped=r.value!==p;
return r.leftStripped
}c["default"]=d;
b.exports=c["default"]
}),(function(c,A,e){var a=e(1)["default"];
A.__esModule=true;
var v=e(6);
var d=a(v);
function z(){this.parents=[]
}z.prototype={constructor:z,mutating:false,acceptKey:function s(D,C){var E=this.accept(D[C]);
if(this.mutating){if(E&&!z.prototype[E.type]){throw new d["default"]('Unexpected node type "'+E.type+'" found when accepting '+C+" on "+D.type)
}D[C]=E
}},acceptRequired:function w(D,C){this.acceptKey(D,C);
if(!D[C]){throw new d["default"](D.type+" requires "+C)
}},acceptArray:function x(E){for(var D=0,C=E.length;
D<C;
D++){this.acceptKey(E,D);
if(!E[D]){E.splice(D,1);
D--;
C--
}}},accept:function f(D){if(!D){return
}if(!this[D.type]){throw new d["default"]("Unknown type: "+D.type,D)
}if(this.current){this.parents.unshift(this.current)
}this.current=D;
var C=this[D.type](D);
this.current=this.parents.shift();
if(!this.mutating||C){return C
}else{if(C!==false){return D
}}},Program:function y(C){this.acceptArray(C.body)
},MustacheStatement:p,Decorator:p,BlockStatement:h,DecoratorBlock:h,PartialStatement:B,PartialBlockStatement:function b(C){B.call(this,C);
this.acceptKey(C,"program")
},ContentStatement:function u(){},CommentStatement:function o(){},SubExpression:p,PathExpression:function g(){},StringLiteral:function r(){},NumberLiteral:function t(){},BooleanLiteral:function n(){},UndefinedLiteral:function q(){},NullLiteral:function m(){},Hash:function j(C){this.acceptArray(C.pairs)
},HashPair:function l(C){this.acceptRequired(C,"value")
}};
function p(C){this.acceptRequired(C,"path");
this.acceptArray(C.params);
this.acceptKey(C,"hash")
}function h(C){p.call(this,C);
this.acceptKey(C,"program");
this.acceptKey(C,"inverse")
}function B(C){this.acceptRequired(C,"name");
this.acceptArray(C.params);
this.acceptKey(C,"hash")
}A["default"]=z;
c.exports=A["default"]
}),(function(d,h,c){var s=c(1)["default"];
h.__esModule=true;
h.SourceLocation=n;
h.id=b;
h.stripFlags=g;
h.stripComment=q;
h.preparePath=f;
h.prepareMustache=m;
h.prepareRawBlock=p;
h.prepareBlock=r;
h.prepareProgram=l;
h.preparePartialBlock=o;
var e=c(6);
var a=s(e);
function j(t,v){v=v.path?v.path.original:v;
if(t.path.original!==v){var u={loc:t.path.loc};
throw new a["default"](t.path.original+" doesn't match "+v,u)
}}function n(u,t){this.source=u;
this.start={line:t.first_line,column:t.first_column};
this.end={line:t.last_line,column:t.last_column}
}function b(t){if(/^\[.*\]$/.test(t)){return t.substr(1,t.length-2)
}else{return t
}}function g(t,u){return{open:t.charAt(2)==="~",close:u.charAt(u.length-3)==="~"}
}function q(t){return t.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function f(A,y,C){C=this.locInfo(C);
var w=A?"@":"",D=[],z=0,v="";
for(var B=0,x=y.length;
B<x;
B++){var u=y[B].part,t=y[B].original!==u;
w+=(y[B].separator||"")+u;
if(!t&&(u===".."||u==="."||u==="this")){if(D.length>0){throw new a["default"]("Invalid path: "+w,{loc:C})
}else{if(u===".."){z++;
v+="../"
}}}else{D.push(u)
}}return{type:"PathExpression",data:A,depth:z,parts:D,original:w,loc:C}
}function m(B,v,x,y,u,A){var z=y.charAt(3)||y.charAt(2),t=z!=="{"&&z!=="&";
var w=/\*/.test(y);
return{type:w?"Decorator":"MustacheStatement",path:B,params:v,hash:x,escaped:t,strip:u,loc:this.locInfo(A)}
}function p(t,w,x,v){j(t,x);
v=this.locInfo(v);
var u={type:"Program",body:w,strip:{},loc:v};
return{type:"BlockStatement",path:t.path,params:t.params,hash:t.hash,program:u,openStrip:{},inverseStrip:{},closeStrip:{},loc:v}
}function r(y,x,z,B,u,A){if(B&&B.path){j(y,B)
}var v=/\*/.test(y.open);
x.blockParams=y.blockParams;
var w=undefined,t=undefined;
if(z){if(v){throw new a["default"]("Unexpected inverse block on decorator",z)
}if(z.chain){z.program.body[0].closeStrip=B.strip
}t=z.strip;
w=z.program
}if(u){u=w;
w=x;
x=u
}return{type:v?"DecoratorBlock":"BlockStatement",path:y.path,params:y.params,hash:y.hash,program:x,inverse:w,openStrip:y.strip,inverseStrip:t,closeStrip:B&&B.strip,loc:this.locInfo(A)}
}function l(t,w){if(!w&&t.length){var v=t[0].loc,u=t[t.length-1].loc;
if(v&&u){w={source:v.source,start:{line:v.start.line,column:v.start.column},end:{line:u.end.line,column:u.end.column}}
}}return{type:"Program",body:t,strip:{},loc:w}
}function o(u,t,w,v){j(u,w);
return{type:"PartialBlockStatement",name:u.path,params:u.params,hash:u.hash,program:t,openStrip:u.strip,closeStrip:w&&w.strip,loc:this.locInfo(v)}
}}),(function(d,L,l){var U=l(1)["default"];
L.__esModule=true;
L.Compiler=z;
L.precompile=T;
L.compile=m;
var S=l(6);
var v=U(S);
var b=l(5);
var a=l(35);
var e=U(a);
var r=[].slice;
function z(){}z.prototype={compiler:z,equals:function y(W){var V=this.opcodes.length;
if(W.opcodes.length!==V){return false
}for(var Y=0;
Y<V;
Y++){var Z=this.opcodes[Y],X=W.opcodes[Y];
if(Z.opcode!==X.opcode||!x(Z.args,X.args)){return false
}}V=this.children.length;
for(var Y=0;
Y<V;
Y++){if(!this.children[Y].equals(W.children[Y])){return false
}}return true
},guid:0,compile:function m(W,X){this.sourceNode=[];
this.opcodes=[];
this.children=[];
this.options=X;
this.stringParams=X.stringParams;
this.trackIds=X.trackIds;
X.blockParams=X.blockParams||[];
var Y=X.knownHelpers;
X.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true,lookup:true};
if(Y){for(var V in Y){if(V in Y){this.options.knownHelpers[V]=Y[V]
}}}return this.accept(W)
},compileProgram:function q(W){var Y=new this.compiler(),V=Y.compile(W,this.options),X=this.guid++;
this.usePartial=this.usePartial||V.usePartial;
this.children[X]=V;
this.useDepths=this.useDepths||V.useDepths;
return X
},accept:function f(W){if(!this[W.type]){throw new v["default"]("Unknown type: "+W.type,W)
}this.sourceNode.unshift(W);
var V=this[W.type](W);
this.sourceNode.shift();
return V
},Program:function R(W){this.options.blockParams.unshift(W.blockParams);
var V=W.body,Y=V.length;
for(var X=0;
X<Y;
X++){this.accept(V[X])
}this.options.blockParams.shift();
this.isSimple=Y===1;
this.blockParams=W.blockParams?W.blockParams.length:0;
return this
},BlockStatement:function Q(Y){g(Y);
var W=Y.program,V=Y.inverse;
W=W&&this.compileProgram(W);
V=V&&this.compileProgram(V);
var X=this.classifySexpr(Y);
if(X==="helper"){this.helperSexpr(Y,W,V)
}else{if(X==="simple"){this.simpleSexpr(Y);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
this.opcode("emptyHash");
this.opcode("blockValue",Y.path.original)
}else{this.ambiguousSexpr(Y,W,V);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},DecoratorBlock:function t(W){var V=W.program&&this.compileProgram(W.program);
var Y=this.setupFullMustacheParams(W,V,undefined),X=W.path;
this.useDecorators=true;
this.opcode("registerDecorator",Y.length,X.original)
},PartialStatement:function M(Y){this.usePartial=true;
var X=Y.program;
if(X){X=this.compileProgram(Y.program)
}var aa=Y.params;
if(aa.length>1){throw new v["default"]("Unsupported number of partial arguments: "+aa.length,Y)
}else{if(!aa.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")
}else{aa.push({type:"PathExpression",parts:[],depth:0})
}}}var Z=Y.name.original,W=Y.name.type==="SubExpression";
if(W){this.accept(Y.name)
}this.setupFullMustacheParams(Y,X,undefined,true);
var V=Y.indent||"";
if(this.options.preventIndent&&V){this.opcode("appendContent",V);
V=""
}this.opcode("invokePartial",W,Z,V);
this.opcode("append")
},PartialBlockStatement:function I(V){this.PartialStatement(V)
},MustacheStatement:function B(V){this.SubExpression(V);
if(V.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},Decorator:function h(V){this.DecoratorBlock(V)
},ContentStatement:function j(V){if(V.value){this.opcode("appendContent",V.value)
}},CommentStatement:function A(){},SubExpression:function J(W){g(W);
var V=this.classifySexpr(W);
if(V==="simple"){this.simpleSexpr(W)
}else{if(V==="helper"){this.helperSexpr(W)
}else{this.ambiguousSexpr(W)
}}},ambiguousSexpr:function w(Z,X,W){var aa=Z.path,Y=aa.parts[0],V=X!=null||W!=null;
this.opcode("getContext",aa.depth);
this.opcode("pushProgram",X);
this.opcode("pushProgram",W);
aa.strict=true;
this.accept(aa);
this.opcode("invokeAmbiguous",Y,V)
},simpleSexpr:function G(V){var W=V.path;
W.strict=true;
this.accept(W);
this.opcode("resolvePossibleLambda")
},helperSexpr:function s(Y,W,V){var aa=this.setupFullMustacheParams(Y,W,V),Z=Y.path,X=Z.parts[0];
if(this.options.knownHelpers[X]){this.opcode("invokeKnownHelper",aa.length,X)
}else{if(this.options.knownHelpersOnly){throw new v["default"]("You specified knownHelpersOnly, but used the unknown helper "+X,Y)
}else{Z.strict=true;
Z.falsy=true;
this.accept(Z);
this.opcode("invokeHelper",aa.length,Z.original,e["default"].helpers.simpleId(Z))
}}},PathExpression:function c(W){this.addDepth(W.depth);
this.opcode("getContext",W.depth);
var V=W.parts[0],Y=e["default"].helpers.scopedId(W),X=!W.depth&&!Y&&this.blockParamIndex(V);
if(X){this.opcode("lookupBlockParam",X,W.parts)
}else{if(!V){this.opcode("pushContext")
}else{if(W.data){this.options.data=true;
this.opcode("lookupData",W.depth,W.parts,W.strict)
}else{this.opcode("lookupOnContext",W.parts,W.falsy,W.strict,Y)
}}}},StringLiteral:function n(V){this.opcode("pushString",V.value)
},NumberLiteral:function E(V){this.opcode("pushLiteral",V.value)
},BooleanLiteral:function O(V){this.opcode("pushLiteral",V.value)
},UndefinedLiteral:function o(){this.opcode("pushLiteral","undefined")
},NullLiteral:function P(){this.opcode("pushLiteral","null")
},Hash:function D(Y){var X=Y.pairs,W=0,V=X.length;
this.opcode("pushHash");
for(;
W<V;
W++){this.pushParam(X[W].value)
}while(W--){this.opcode("assignToHash",X[W].key)
}this.opcode("popHash")
},opcode:function F(V){this.opcodes.push({opcode:V,args:r.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function u(V){if(!V){return
}this.useDepths=true
},classifySexpr:function K(Y){var Z=e["default"].helpers.simpleId(Y.path);
var aa=Z&&!!this.blockParamIndex(Y.path.parts[0]);
var X=!aa&&e["default"].helpers.helperExpression(Y);
var ab=!aa&&(X||Z);
if(ab&&!X){var V=Y.path.parts[0],W=this.options;
if(W.knownHelpers[V]){X=true
}else{if(W.knownHelpersOnly){ab=false
}}}if(X){return"helper"
}else{if(ab){return"ambiguous"
}else{return"simple"
}}},pushParams:function N(X){for(var W=0,V=X.length;
W<V;
W++){this.pushParam(X[W])
}},pushParam:function H(Y){var X=Y.value!=null?Y.value:Y.original||"";
if(this.stringParams){if(X.replace){X=X.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")
}if(Y.depth){this.addDepth(Y.depth)
}this.opcode("getContext",Y.depth||0);
this.opcode("pushStringParam",X,Y.type);
if(Y.type==="SubExpression"){this.accept(Y)
}}else{if(this.trackIds){var W=undefined;
if(Y.parts&&!e["default"].helpers.scopedId(Y)&&!Y.depth){W=this.blockParamIndex(Y.parts[0])
}if(W){var V=Y.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",W,V)
}else{X=Y.original||X;
if(X.replace){X=X.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")
}this.opcode("pushId",Y.type,X)
}}this.accept(Y)
}},setupFullMustacheParams:function C(Y,W,V,X){var Z=Y.params;
this.pushParams(Z);
this.opcode("pushProgram",W);
this.opcode("pushProgram",V);
if(Y.hash){this.accept(Y.hash)
}else{this.opcode("emptyHash",X)
}return Z
},blockParamIndex:function p(W){for(var Z=0,V=this.options.blockParams.length;
Z<V;
Z++){var X=this.options.blockParams[Z],Y=X&&b.indexOf(X,W);
if(X&&Y>=0){return[Z,Y]
}}}};
function T(X,Y,Z){if(X==null||typeof X!=="string"&&X.type!=="Program"){throw new v["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+X)
}Y=Y||{};
if(!("data" in Y)){Y.data=true
}if(Y.compat){Y.useDepths=true
}var W=Z.parse(X,Y),V=new Z.Compiler().compile(W,Y);
return new Z.JavaScriptCompiler().compile(V,Y)
}function m(V,X,Y){if(X===undefined){X={}
}if(V==null||typeof V!=="string"&&V.type!=="Program"){throw new v["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+V)
}X=b.extend({},X);
if(!("data" in X)){X.data=true
}if(X.compat){X.useDepths=true
}var aa=undefined;
function Z(){var ad=Y.parse(V,X),ac=new Y.Compiler().compile(ad,X),ab=new Y.JavaScriptCompiler().compile(ac,X,undefined,true);
return Y.template(ab)
}function W(ab,ac){if(!aa){aa=Z()
}return aa.call(this,ab,ac)
}W._setup=function(ab){if(!aa){aa=Z()
}return aa._setup(ab)
};
W._child=function(ab,ad,ac,ae){if(!aa){aa=Z()
}return aa._child(ab,ad,ac,ae)
};
return W
}function x(W,V){if(W===V){return true
}if(b.isArray(W)&&b.isArray(V)&&W.length===V.length){for(var X=0;
X<W.length;
X++){if(!x(W[X],V[X])){return false
}}return true
}}function g(W){if(!W.path.parts){var V=W.path;
W.path={type:"PathExpression",data:false,depth:0,parts:[V.original+""],original:V.original+"",loc:V.loc}
}}}),(function(g,ai,r){var ar=r(1)["default"];
ai.__esModule=true;
var G=r(4);
var an=r(6);
var K=ar(an);
var b=r(5);
var aa=r(43);
var L=ar(aa);
function l(au){this.value=au
}function c(){}c.prototype={nameLookup:function Q(av,au){if(c.isValidJavaScriptVariableName(au)){return[av,".",au]
}else{return[av,"[",JSON.stringify(au),"]"]
}},depthedLookup:function R(au){return[this.aliasable("container.lookup"),'(depths, "',au,'")']
},compilerInfo:function B(){var av=G.COMPILER_REVISION,au=G.REVISION_CHANGES[av];
return[av,au]
},appendToBuffer:function ap(aw,au,av){if(!b.isArray(aw)){aw=[aw]
}aw=this.source.wrap(aw,au);
if(this.environment.isSimple){return["return ",aw,";"]
}else{if(av){return["buffer += ",aw,";"]
}else{aw.appendToBuffer=true;
return aw
}}},initializeBuffer:function al(){return this.quotedString("")
},compile:function s(ay,aH,av,aB){this.environment=ay;
this.options=aH;
this.stringParams=this.options.stringParams;
this.trackIds=this.options.trackIds;
this.precompile=!aB;
this.name=this.environment.name;
this.isChild=!!av;
this.context=av||{decorators:[],programs:[],environments:[]};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.aliases={};
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.blockParams=[];
this.compileChildren(ay,aH);
this.useDepths=this.useDepths||ay.useDepths||ay.useDecorators||this.options.compat;
this.useBlockParams=this.useBlockParams||ay.useBlockParams;
var aD=ay.opcodes,az=undefined,aF=undefined,aA=undefined,ax=undefined;
for(aA=0,ax=aD.length;
aA<ax;
aA++){az=aD[aA];
this.source.currentLocation=az.loc;
aF=aF||az.loc;
this[az.opcode].apply(this,az.args)
}this.source.currentLocation=aF;
this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new K["default"]("Compile completed with content left on stack")
}if(!this.decorators.isEmpty()){this.useDecorators=true;
this.decorators.prepend("var decorators = container.decorators;\n");
this.decorators.push("return fn;");
if(aB){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])
}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
this.decorators.push("}\n");
this.decorators=this.decorators.merge()
}}else{this.decorators=undefined
}var aE=this.createFunctionContext(aB);
if(!this.isChild){var aC={compiler:this.compilerInfo(),main:aE};
if(this.decorators){aC.main_d=this.decorators;
aC.useDecorators=true
}var au=this.context;
var aw=au.programs;
var aG=au.decorators;
for(aA=0,ax=aw.length;
aA<ax;
aA++){if(aw[aA]){aC[aA]=aw[aA];
if(aG[aA]){aC[aA+"_d"]=aG[aA];
aC.useDecorators=true
}}}if(this.environment.usePartial){aC.usePartial=true
}if(this.options.data){aC.useData=true
}if(this.useDepths){aC.useDepths=true
}if(this.useBlockParams){aC.useBlockParams=true
}if(this.options.compat){aC.compat=true
}if(!aB){aC.compiler=JSON.stringify(aC.compiler);
this.source.currentLocation={start:{line:1,column:0}};
aC=this.objectLiteral(aC);
if(aH.srcName){aC=aC.toStringWithSourceMap({file:aH.destName});
aC.map=aC.map&&aC.map.toString()
}else{aC=aC.toString()
}}else{aC.compilerOptions=this.options
}return aC
}else{return aE
}},preamble:function Z(){this.lastContext=0;
this.source=new L["default"](this.options.srcName);
this.decorators=new L["default"](this.options.srcName)
},createFunctionContext:function ao(av){var aA="";
var az=this.stackVars.concat(this.registers.list);
if(az.length>0){aA+=", "+az.join(", ")
}var ay=0;
for(var au in this.aliases){var aw=this.aliases[au];
if(this.aliases.hasOwnProperty(au)&&aw.children&&aw.referenceCount>1){aA+=", alias"+ ++ay+"="+au;
aw.children[0]="alias"+ay
}}var aB=["container","depth0","helpers","partials","data"];
if(this.useBlockParams||this.useDepths){aB.push("blockParams")
}if(this.useDepths){aB.push("depths")
}var ax=this.mergeSource(aA);
if(av){aB.push(ax);
return Function.apply(this,aB)
}else{return this.source.wrap(["function(",aB.join(","),") {\n  ",ax,"}"])
}},mergeSource:function E(az){var ax=this.environment.isSimple,aw=!this.forceBuffer,au=undefined,av=undefined,ay=undefined,aA=undefined;
this.source.each(function(aB){if(aB.appendToBuffer){if(ay){aB.prepend("  + ")
}else{ay=aB
}aA=aB
}else{if(ay){if(!av){au=true
}else{ay.prepend("buffer += ")
}aA.add(";");
ay=aA=undefined
}av=true;
if(!ax){aw=false
}}});
if(aw){if(ay){ay.prepend("return ");
aA.add(";")
}else{if(!av){this.source.push('return "";')
}}}else{az+=", buffer = "+(au?"":this.initializeBuffer());
if(ay){ay.prepend("return buffer + ");
aA.add(";")
}else{this.source.push("return buffer;")
}}if(az){this.source.prepend("var "+az.substring(2)+(au?"":";\n"))
}return this.source.merge()
},blockValue:function d(av){var aw=this.aliasable("helpers.blockHelperMissing"),ax=[this.contextName(0)];
this.setupHelperArgs(av,0,ax);
var au=this.popStack();
ax.splice(1,0,au);
this.push(this.source.functionCall(aw,"call",ax))
},ambiguousBlockValue:function V(){var au=this.aliasable("helpers.blockHelperMissing"),aw=[this.contextName(0)];
this.setupHelperArgs("",0,aw,true);
this.flushInline();
var av=this.topStack();
aw.splice(1,0,av);
this.pushSource(["if (!",this.lastHelper,") { ",av," = ",this.source.functionCall(au,"call",aw),"}"])
},appendContent:function f(au){if(this.pendingContent){au=this.pendingContent+au
}else{this.pendingLocation=this.source.currentLocation
}this.pendingContent=au
},append:function ac(){if(this.isInline()){this.replaceStack(function(av){return[" != null ? ",av,' : ""']
});
this.pushSource(this.appendToBuffer(this.popStack()))
}else{var au=this.popStack();
this.pushSource(["if (",au," != null) { ",this.appendToBuffer(au,undefined,true)," }"]);
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])
}}},appendEscaped:function o(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function C(au){this.lastContext=au
},pushContext:function v(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function at(ax,aw,au,ay){var av=0;
if(!ay&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(ax[av++]))
}else{this.pushContext()
}this.resolvePath("context",ax,av,aw,au)
},lookupBlockParam:function D(av,au){this.useBlockParams=true;
this.push(["blockParams[",av[0],"][",av[1],"]"]);
this.resolvePath("context",au,1)
},lookupData:function q(aw,av,au){if(!aw){this.pushStackLiteral("data")
}else{this.pushStackLiteral("container.data(data, "+aw+")")
}this.resolvePath("data",av,0,true,au)
},resolvePath:function S(ax,az,aw,ay,av){var aA=this;
if(this.options.strict||this.options.assumeObjects){this.push(X(this.options.strict&&av,this,az,ax));
return
}var au=az.length;
for(;
aw<au;
aw++){this.replaceStack(function(aC){var aB=aA.nameLookup(aC,az[aw],ax);
if(!ay){return[" != null ? ",aB," : ",aC]
}else{return[" && ",aB]
}})
}},resolvePossibleLambda:function ah(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function aq(au,av){this.pushContext();
this.pushString(av);
if(av!=="SubExpression"){if(typeof au==="string"){this.pushString(au)
}else{this.pushStackLiteral(au)
}}},emptyHash:function z(au){if(this.trackIds){this.push("{}")
}if(this.stringParams){this.push("{}");
this.push("{}")
}this.pushStackLiteral(au?"undefined":"{}")
},pushHash:function T(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function P(){var au=this.hash;
this.hash=this.hashes.pop();
if(this.trackIds){this.push(this.objectLiteral(au.ids))
}if(this.stringParams){this.push(this.objectLiteral(au.contexts));
this.push(this.objectLiteral(au.types))
}this.push(this.objectLiteral(au.values))
},pushString:function m(au){this.pushStackLiteral(this.quotedString(au))
},pushLiteral:function J(au){this.pushStackLiteral(au)
},pushProgram:function x(au){if(au!=null){this.pushStackLiteral(this.programExpression(au))
}else{this.pushStackLiteral(null)
}},registerDecorator:function M(ax,aw){var au=this.nameLookup("decorators",aw,"decorator"),av=this.setupHelperArgs(aw,ax);
this.decorators.push(["fn = ",this.decorators.functionCall(au,"",["fn","props","container",av])," || fn;"])
},invokeHelper:function ab(ay,au,aw){var aA=this.popStack(),av=this.setupHelper(ay,au),az=aw?[av.name," || "]:"";
var ax=["("].concat(az,aA);
if(!this.options.strict){ax.push(" || ",this.aliasable("helpers.helperMissing"))
}ax.push(")");
this.push(this.source.functionCall(ax,"call",av.callParams))
},invokeKnownHelper:function p(aw,au){var av=this.setupHelper(aw,au);
this.push(this.source.functionCall(av.name,"call",av.callParams))
},invokeAmbiguous:function am(au,ay){this.useRegister("helper");
var az=this.popStack();
this.emptyHash();
var av=this.setupHelper(0,au,ay);
var aw=this.lastHelper=this.nameLookup("helpers",au,"helper");
var ax=["(","(helper = ",aw," || ",az,")"];
if(!this.options.strict){ax[0]="(helper = ";
ax.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))
}this.push(["(",ax,av.paramsInit?["),(",av.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",av.callParams)," : helper))"])
},invokePartial:function U(av,ax,au){var ay=[],aw=this.setupParams(ax,1,ay);
if(av){ax=this.popStack();
delete aw.name
}if(au){aw.indent=JSON.stringify(au)
}aw.helpers="helpers";
aw.partials="partials";
aw.decorators="container.decorators";
if(!av){ay.unshift(this.nameLookup("partials",ax,"partial"))
}else{ay.unshift(ax)
}if(this.options.compat){aw.depths="depths"
}aw=this.objectLiteral(aw);
ay.push(aw);
this.push(this.source.functionCall("container.invokePartial","",ay))
},assignToHash:function j(av){var ax=this.popStack(),au=undefined,aw=undefined,az=undefined;
if(this.trackIds){az=this.popStack()
}if(this.stringParams){aw=this.popStack();
au=this.popStack()
}var ay=this.hash;
if(au){ay.contexts[av]=au
}if(aw){ay.types[av]=aw
}if(az){ay.ids[av]=az
}ay.values[av]=ax
},pushId:function e(av,au,aw){if(av==="BlockParam"){this.pushStackLiteral("blockParams["+au[0]+"].path["+au[1]+"]"+(aw?" + "+JSON.stringify("."+aw):""))
}else{if(av==="PathExpression"){this.pushString(au)
}else{if(av==="SubExpression"){this.pushStackLiteral("true")
}else{this.pushStackLiteral("null")
}}}},compiler:c,compileChildren:function H(az,aC){var ax=az.children,aw=undefined,au=undefined;
for(var aA=0,ay=ax.length;
aA<ay;
aA++){aw=ax[aA];
au=new this.compiler();
var av=this.matchExistingProgram(aw);
if(av==null){this.context.programs.push("");
var aB=this.context.programs.length;
aw.index=aB;
aw.name="program"+aB;
this.context.programs[aB]=au.compile(aw,aC,this.context,!this.precompile);
this.context.decorators[aB]=au.decorators;
this.context.environments[aB]=aw;
this.useDepths=this.useDepths||au.useDepths;
this.useBlockParams=this.useBlockParams||au.useBlockParams;
aw.useDepths=this.useDepths;
aw.useBlockParams=this.useBlockParams
}else{aw.index=av.index;
aw.name="program"+av.index;
this.useDepths=this.useDepths||av.useDepths;
this.useBlockParams=this.useBlockParams||av.useBlockParams
}}},matchExistingProgram:function u(ax){for(var aw=0,av=this.context.environments.length;
aw<av;
aw++){var au=this.context.environments[aw];
if(au&&au.equals(ax)){return au
}}},programExpression:function I(au){var aw=this.environment.children[au],av=[aw.index,"data",aw.blockParams];
if(this.useBlockParams||this.useDepths){av.push("blockParams")
}if(this.useDepths){av.push("depths")
}return"container.program("+av.join(", ")+")"
},useRegister:function Y(au){if(!this.registers[au]){this.registers[au]=true;
this.registers.list.push(au)
}},push:function ag(au){if(!(au instanceof l)){au=this.source.wrap(au)
}this.inlineStack.push(au);
return au
},pushStackLiteral:function n(au){this.push(new l(au))
},pushSource:function w(au){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));
this.pendingContent=undefined
}if(au){this.source.push(au)
}},replaceStack:function a(aB){var az=["("],au=undefined,ay=undefined,aw=undefined;
if(!this.isInline()){throw new K["default"]("replaceStack on non-inline")
}var aA=this.popStack(true);
if(aA instanceof l){au=[aA.value];
az=["(",au];
aw=true
}else{ay=true;
var av=this.incrStack();
az=["((",this.push(av)," = ",aA,")"];
au=this.topStack()
}var ax=aB.call(this,au);
if(!aw){this.popStack()
}if(ay){this.stackSlot--
}this.push(az.concat(ax,")"))
},incrStack:function W(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function ak(){return"stack"+this.stackSlot
},flushInline:function aj(){var ax=this.inlineStack;
this.inlineStack=[];
for(var aw=0,av=ax.length;
aw<av;
aw++){var ay=ax[aw];
if(ay instanceof l){this.compileStack.push(ay)
}else{var au=this.incrStack();
this.pushSource([au," = ",ay,";"]);
this.compileStack.push(au)
}}},isInline:function y(){return this.inlineStack.length
},popStack:function h(au){var aw=this.isInline(),av=(aw?this.inlineStack:this.compileStack).pop();
if(!au&&av instanceof l){return av.value
}else{if(!aw){if(!this.stackSlot){throw new K["default"]("Invalid stack pop")
}this.stackSlot--
}return av
}},topStack:function F(){var au=this.isInline()?this.inlineStack:this.compileStack,av=au[au.length-1];
if(av instanceof l){return av.value
}else{return av
}},contextName:function af(au){if(this.useDepths&&au){return"depths["+au+"]"
}else{return"depth"+au
}},quotedString:function A(au){return this.source.quotedString(au)
},objectLiteral:function t(au){return this.source.objectLiteral(au)
},aliasable:function ae(av){var au=this.aliases[av];
if(au){au.referenceCount++;
return au
}au=this.aliases[av]=this.source.wrap(av);
au.aliasable=true;
au.referenceCount=1;
return au
},setupHelper:function ad(ay,aw,av){var ax=[],aA=this.setupHelperArgs(aw,ay,ax,av);
var au=this.nameLookup("helpers",aw,"helper"),az=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");
return{params:ax,paramsInit:aA,name:au,callParams:[az].concat(ax)}
},setupParams:function O(aw,aA,ay){var aF={},aD=[],aE=[],av=[],au=!ay,ax=undefined;
if(au){ay=[]
}aF.name=this.quotedString(aw);
aF.hash=this.popStack();
if(this.trackIds){aF.hashIds=this.popStack()
}if(this.stringParams){aF.hashTypes=this.popStack();
aF.hashContexts=this.popStack()
}var az=this.popStack(),aC=this.popStack();
if(aC||az){aF.fn=aC||"container.noop";
aF.inverse=az||"container.noop"
}var aB=aA;
while(aB--){ax=this.popStack();
ay[aB]=ax;
if(this.trackIds){av[aB]=this.popStack()
}if(this.stringParams){aE[aB]=this.popStack();
aD[aB]=this.popStack()
}}if(au){aF.args=this.source.generateArray(ay)
}if(this.trackIds){aF.ids=this.source.generateArray(av)
}if(this.stringParams){aF.types=this.source.generateArray(aE);
aF.contexts=this.source.generateArray(aD)
}if(this.options.data){aF.data="data"
}if(this.useBlockParams){aF.blockParams="blockParams"
}return aF
},setupHelperArgs:function N(aw,ay,ax,av){var au=this.setupParams(aw,ay,ax);
au=this.objectLiteral(au);
if(av){this.useRegister("options");
ax.push("options");
return["options=",au]
}else{if(ax){ax.push(au);
return""
}else{return au
}}}};
(function(){var au=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false").split(" ");
var ax=c.RESERVED_WORDS={};
for(var aw=0,av=au.length;
aw<av;
aw++){ax[au[aw]]=true
}})();
c.isValidJavaScriptVariableName=function(au){return !c.RESERVED_WORDS[au]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(au)
};
function X(aA,ay,az,ax){var av=ay.popStack(),aw=0,au=az.length;
if(aA){au--
}for(;
aw<au;
aw++){av=ay.nameLookup(av,az[aw],ax)
}if(aA){return[ay.aliasable("container.strict"),"(",av,", ",ay.quotedString(az[aw]),")"]
}else{return av
}}ai["default"]=c;
g.exports=ai["default"]
}),(function(b,z,d){z.__esModule=true;
var r=d(5);
var g=undefined;
try{if(false){var u=require("source-map");
g=u.SourceNode
}}catch(h){}if(!g){g=function(A,B,C,D){this.src="";
if(D){this.add(D)
}};
g.prototype={add:function t(A){if(r.isArray(A)){A=A.join("")
}this.src+=A
},prepend:function y(A){if(r.isArray(A)){A=A.join("")
}this.src=A+this.src
},toStringWithSourceMap:function e(){return{code:this.toString()}
},toString:function w(){return this.src
}}
}function c(D,B,F){if(r.isArray(D)){var C=[];
for(var E=0,A=D.length;
E<A;
E++){C.push(B.wrap(D[E],F))
}return C
}else{if(typeof D==="boolean"||typeof D==="number"){return D+""
}}return D
}function m(A){this.srcFile=A;
this.source=[]
}m.prototype={isEmpty:function s(){return !this.source.length
},prepend:function y(A,B){this.source.unshift(this.wrap(A,B))
},push:function n(A,B){this.source.push(this.wrap(A,B))
},merge:function j(){var A=this.empty();
this.each(function(B){A.add(["  ",B,"\n"])
});
return A
},each:function f(B){for(var C=0,A=this.source.length;
C<A;
C++){B(this.source[C])
}},empty:function q(){var A=this.currentLocation||{start:{}};
return new g(A.start.line,A.start.column,this.srcFile)
},wrap:function p(A){var B=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];
if(A instanceof g){return A
}A=c(A,this,B);
return new g(B.start.line,B.start.column,this.srcFile,A)
},functionCall:function x(B,A,C){C=this.generateList(C);
return this.wrap([B,A?"."+A+"(":"(",C,")"])
},quotedString:function o(A){return'"'+(A+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function v(E){var D=[];
for(var B in E){if(E.hasOwnProperty(B)){var C=c(E[B],this);
if(C!=="undefined"){D.push([this.quotedString(B),":",C])
}}}var A=this.generateList(D);
A.prepend("{");
A.add("}");
return A
},generateList:function a(B){var C=this.empty();
for(var D=0,A=B.length;
D<A;
D++){if(D){C.add(",")
}C.add(c(B[D],this))
}return C
},generateArray:function l(A){var B=this.generateList(A);
B.prepend("[");
B.add("]");
return B
}};
z["default"]=m;
b.exports=z["default"]
})])
});
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;
var Handlebars=(function(){var a=(function(){var o;
function p(q){this.string=q
}p.prototype.toString=function(){return""+this.string
};
o=p;
return o
})();
var m=(function(x){var y={};
var r=x;
var z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var o=/[&<>"'`]/g;
var s=/[&<>"'`]/;
function A(B){return z[B]||"&amp;"
}function w(D,C){for(var B in C){if(Object.prototype.hasOwnProperty.call(C,B)){D[B]=C[B]
}}}y.extend=w;
var q=Object.prototype.toString;
y.toString=q;
var p=function(B){return typeof B==="function"
};
if(p(/x/)){p=function(B){return typeof B==="function"&&q.call(B)==="[object Function]"
}
}var p;
y.isFunction=p;
var v=Array.isArray||function(B){return(B&&typeof B==="object")?q.call(B)==="[object Array]":false
};
y.isArray=v;
function u(B){if(B instanceof r){return B.toString()
}else{if(!B&&B!==0){return""
}}B=""+B;
if(!s.test(B)){return B
}return B.replace(o,A)
}y.escapeExpression=u;
function t(B){if(!B&&B!==0){return true
}else{if(v(B)&&B.length===0){return true
}else{return false
}}}y.isEmpty=t;
return y
})(a);
var d=(function(){var p;
var q=["description","fileName","lineNumber","message","name","number","stack"];
function o(v,u){var s;
if(u&&u.firstLine){s=u.firstLine;
v+=" - "+s+":"+u.firstColumn
}var t=Error.prototype.constructor.call(this,v);
for(var r=0;
r<q.length;
r++){this[q[r]]=t[q[r]]
}if(s){this.lineNumber=s;
this.column=u.firstColumn
}}o.prototype=new Error();
p=o;
return p
})();
var j=(function(z,C){var B={};
var x=z;
var v=C;
var E="1.3.0";
B.VERSION=E;
var p=4;
B.COMPILER_REVISION=p;
var s={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};
B.REVISION_CHANGES=s;
var w=x.isArray,r=x.isFunction,q=x.toString,o="[object Object]";
function u(G,F){this.helpers=G||{};
this.partials=F||{};
y(this)
}B.HandlebarsEnvironment=u;
u.prototype={constructor:u,logger:A,log:t,registerHelper:function(G,H,F){if(q.call(G)===o){if(F||H){throw new v("Arg not supported with multiple helpers")
}x.extend(this.helpers,G)
}else{if(F){H.not=F
}this.helpers[G]=H
}},registerPartial:function(F,G){if(q.call(F)===o){x.extend(this.partials,F)
}else{this.partials[F]=G
}}};
function y(F){F.registerHelper("helperMissing",function(G){if(arguments.length===2){return undefined
}else{throw new v("Missing helper: '"+G+"'")
}});
F.registerHelper("blockHelperMissing",function(I,H){var G=H.inverse||function(){},J=H.fn;
if(r(I)){I=I.call(this)
}if(I===true){return J(this)
}else{if(I===false||I==null){return G(this)
}else{if(w(I)){if(I.length>0){return F.helpers.each(I,H)
}else{return G(this)
}}else{return J(I)
}}}});
F.registerHelper("each",function(G,O){var M=O.fn,I=O.inverse;
var K=0,L="",J;
if(r(G)){G=G.call(this)
}if(O.data){J=D(O.data)
}if(G&&typeof G==="object"){if(w(G)){for(var H=G.length;
K<H;
K++){if(J){J.index=K;
J.first=(K===0);
J.last=(K===(G.length-1))
}L=L+M(G[K],{data:J})
}}else{for(var N in G){if(G.hasOwnProperty(N)){if(J){J.key=N;
J.index=K;
J.first=(K===0)
}L=L+M(G[N],{data:J});
K++
}}}}if(K===0){L=I(this)
}return L
});
F.registerHelper("if",function(H,G){if(r(H)){H=H.call(this)
}if((!G.hash.includeZero&&!H)||x.isEmpty(H)){return G.inverse(this)
}else{return G.fn(this)
}});
F.registerHelper("unless",function(H,G){return F.helpers["if"].call(this,H,{fn:G.inverse,inverse:G.fn,hash:G.hash})
});
F.registerHelper("with",function(H,G){if(r(H)){H=H.call(this)
}if(!x.isEmpty(H)){return G.fn(H)
}});
F.registerHelper("log",function(H,G){var I=G.data&&G.data.level!=null?parseInt(G.data.level,10):1;
F.log(I,H)
})
}var A={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(H,F){if(A.level<=H){var G=A.methodMap[H];
if(typeof console!=="undefined"&&console[G]){console[G].call(console,F)
}}}};
B.logger=A;
function t(G,F){A.log(G,F)
}B.log=t;
var D=function(F){var G={};
x.extend(G,F);
return G
};
B.createFrame=D;
return B
})(m,d);
var g=(function(x,B,r){var z={};
var w=x;
var u=B;
var q=r.COMPILER_REVISION;
var t=r.REVISION_CHANGES;
function p(E){var D=E&&E[0]||1,G=q;
if(D!==G){if(D<G){var C=t[G],F=t[D];
throw new u("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+C+") or downgrade your runtime to an older version ("+F+").")
}else{throw new u("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+E[1]+").")
}}}z.checkRevision=p;
function y(C,F){if(!F){throw new u("No environment passed to template")
}var E=function(H,J,L,M,K,N){var G=F.VM.invokePartial.apply(this,arguments);
if(G!=null){return G
}if(F.compile){var I={helpers:M,partials:K,data:N};
K[J]=F.compile(H,{data:N!==undefined},F);
return K[J](L,I)
}else{throw new u("The partial "+J+" could not be compiled when running in runtime-only mode")
}};
var D={escapeExpression:w.escapeExpression,invokePartial:E,programs:[],program:function(H,I,J){var G=this.programs[H];
if(J){G=v(H,I,J)
}else{if(!G){G=this.programs[H]=v(H,I)
}}return G
},merge:function(I,H){var G=I||H;
if(I&&H&&(I!==H)){G={};
w.extend(G,H);
w.extend(G,I)
}return G
},programWithDepth:F.VM.programWithDepth,noop:F.VM.noop,compilerInfo:null};
return function(J,H){H=H||{};
var K=H.partial?H:F,L,I;
if(!H.partial){L=H.helpers;
I=H.partials
}var G=C.call(D,K,J,L,I,H.data);
if(!H.partial){F.VM.checkRevision(D.compilerInfo)
}return G
}
}z.template=y;
function s(D,E,F){var C=Array.prototype.slice.call(arguments,3);
var G=function(I,H){H=H||{};
return E.apply(this,[I,H.data||F].concat(C))
};
G.program=D;
G.depth=C.length;
return G
}z.programWithDepth=s;
function v(C,D,E){var F=function(H,G){G=G||{};
return D(H,G.data||E)
};
F.program=C;
F.depth=0;
return F
}z.program=v;
function o(C,E,G,H,F,I){var D={partial:true,helpers:H,partials:F,data:I};
if(C===undefined){throw new u("The partial "+E+" could not be found")
}else{if(C instanceof Function){return C(G,D)
}}}z.invokePartial=o;
function A(){return""
}z.noop=A;
return z
})(m,d,j);
var f=(function(y,A,q,u,x){var z;
var o=y;
var r=A;
var t=q;
var w=u;
var s=x;
var v=function(){var B=new o.HandlebarsEnvironment();
w.extend(B,o);
B.SafeString=r;
B.Exception=t;
B.Utils=w;
B.VM=s;
B.template=function(C){return s.template(C,B)
};
return B
};
var p=v();
p.create=v;
z=p;
return z
})(j,a,d,m,g);
var l=(function(s){var q;
var p=s;
function o(t){t=t||{};
this.firstLine=t.first_line;
this.firstColumn=t.first_column;
this.lastColumn=t.last_column;
this.lastLine=t.last_line
}var r={ProgramNode:function(v,x,u,w){var t,y;
if(arguments.length===3){w=u;
u=null
}else{if(arguments.length===2){w=x;
x=null
}}o.call(this,w);
this.type="program";
this.statements=v;
this.strip={};
if(u){y=u[0];
if(y){t={first_line:y.firstLine,last_line:y.lastLine,last_column:y.lastColumn,first_column:y.firstColumn};
this.inverse=new r.ProgramNode(u,x,t)
}else{this.inverse=new r.ProgramNode(u,x)
}this.strip.right=x.left
}else{if(x){this.strip.left=x.right
}}},MustacheNode:function(y,x,t,v,u){o.call(this,u);
this.type="mustache";
this.strip=v;
if(t!=null&&t.charAt){var w=t.charAt(3)||t.charAt(2);
this.escaped=w!=="{"&&w!=="&"
}else{this.escaped=!!t
}if(y instanceof r.SexprNode){this.sexpr=y
}else{this.sexpr=new r.SexprNode(y,x)
}this.sexpr.isRoot=true;
this.id=this.sexpr.id;
this.params=this.sexpr.params;
this.hash=this.sexpr.hash;
this.eligibleHelper=this.sexpr.eligibleHelper;
this.isHelper=this.sexpr.isHelper
},SexprNode:function(y,v,t){o.call(this,t);
this.type="sexpr";
this.hash=v;
var x=this.id=y[0];
var w=this.params=y.slice(1);
var u=this.eligibleHelper=x.isSimple;
this.isHelper=u&&(w.length||v)
},PartialNode:function(t,v,w,u){o.call(this,u);
this.type="partial";
this.partialName=t;
this.context=v;
this.strip=w
},BlockNode:function(w,u,t,x,v){o.call(this,v);
if(w.sexpr.id.original!==x.path.original){throw new p(w.sexpr.id.original+" doesn't match "+x.path.original,this)
}this.type="block";
this.mustache=w;
this.program=u;
this.inverse=t;
this.strip={left:w.strip.left,right:x.strip.right};
(u||t).strip.left=w.strip.right;
(t||u).strip.right=x.strip.left;
if(t&&!u){this.isInverse=true
}},ContentNode:function(t,u){o.call(this,u);
this.type="content";
this.string=t
},HashNode:function(u,t){o.call(this,t);
this.type="hash";
this.pairs=u
},IdNode:function(z,y){o.call(this,y);
this.type="ID";
var x="",v=[],A=0;
for(var w=0,t=z.length;
w<t;
w++){var u=z[w].part;
x+=(z[w].separator||"")+u;
if(u===".."||u==="."||u==="this"){if(v.length>0){throw new p("Invalid path: "+x,this)
}else{if(u===".."){A++
}else{this.isScoped=true
}}}else{v.push(u)
}}this.original=x;
this.parts=v;
this.string=v.join(".");
this.depth=A;
this.isSimple=z.length===1&&!this.isScoped&&A===0;
this.stringModeValue=this.string
},PartialNameNode:function(t,u){o.call(this,u);
this.type="PARTIAL_NAME";
this.name=t.original
},DataNode:function(u,t){o.call(this,t);
this.type="DATA";
this.id=u
},StringNode:function(t,u){o.call(this,u);
this.type="STRING";
this.original=this.string=this.stringModeValue=t
},IntegerNode:function(t,u){o.call(this,u);
this.type="INTEGER";
this.original=this.integer=t;
this.stringModeValue=Number(t)
},BooleanNode:function(t,u){o.call(this,u);
this.type="BOOLEAN";
this.bool=t;
this.stringModeValue=t==="true"
},CommentNode:function(u,t){o.call(this,t);
this.type="comment";
this.comment=u
}};
q=r;
return q
})(d);
var b=(function(){var p;
var o=(function(){var x={trace:function t(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function s(y,B,C,F,E,A,D){var z=A.length-1;
switch(E){case 1:return new F.ProgramNode(A[z-1],this._$);
break;
case 2:return new F.ProgramNode([],this._$);
break;
case 3:this.$=new F.ProgramNode([],A[z-1],A[z],this._$);
break;
case 4:this.$=new F.ProgramNode(A[z-2],A[z-1],A[z],this._$);
break;
case 5:this.$=new F.ProgramNode(A[z-1],A[z],[],this._$);
break;
case 6:this.$=new F.ProgramNode(A[z],this._$);
break;
case 7:this.$=new F.ProgramNode([],this._$);
break;
case 8:this.$=new F.ProgramNode([],this._$);
break;
case 9:this.$=[A[z]];
break;
case 10:A[z-1].push(A[z]);
this.$=A[z-1];
break;
case 11:this.$=new F.BlockNode(A[z-2],A[z-1].inverse,A[z-1],A[z],this._$);
break;
case 12:this.$=new F.BlockNode(A[z-2],A[z-1],A[z-1].inverse,A[z],this._$);
break;
case 13:this.$=A[z];
break;
case 14:this.$=A[z];
break;
case 15:this.$=new F.ContentNode(A[z],this._$);
break;
case 16:this.$=new F.CommentNode(A[z],this._$);
break;
case 17:this.$=new F.MustacheNode(A[z-1],null,A[z-2],q(A[z-2],A[z]),this._$);
break;
case 18:this.$=new F.MustacheNode(A[z-1],null,A[z-2],q(A[z-2],A[z]),this._$);
break;
case 19:this.$={path:A[z-1],strip:q(A[z-2],A[z])};
break;
case 20:this.$=new F.MustacheNode(A[z-1],null,A[z-2],q(A[z-2],A[z]),this._$);
break;
case 21:this.$=new F.MustacheNode(A[z-1],null,A[z-2],q(A[z-2],A[z]),this._$);
break;
case 22:this.$=new F.PartialNode(A[z-2],A[z-1],q(A[z-3],A[z]),this._$);
break;
case 23:this.$=q(A[z-1],A[z]);
break;
case 24:this.$=new F.SexprNode([A[z-2]].concat(A[z-1]),A[z],this._$);
break;
case 25:this.$=new F.SexprNode([A[z]],null,this._$);
break;
case 26:this.$=A[z];
break;
case 27:this.$=new F.StringNode(A[z],this._$);
break;
case 28:this.$=new F.IntegerNode(A[z],this._$);
break;
case 29:this.$=new F.BooleanNode(A[z],this._$);
break;
case 30:this.$=A[z];
break;
case 31:A[z-1].isHelper=true;
this.$=A[z-1];
break;
case 32:this.$=new F.HashNode(A[z],this._$);
break;
case 33:this.$=[A[z-2],A[z]];
break;
case 34:this.$=new F.PartialNameNode(A[z],this._$);
break;
case 35:this.$=new F.PartialNameNode(new F.StringNode(A[z],this._$),this._$);
break;
case 36:this.$=new F.PartialNameNode(new F.IntegerNode(A[z],this._$));
break;
case 37:this.$=new F.DataNode(A[z],this._$);
break;
case 38:this.$=new F.IdNode(A[z],this._$);
break;
case 39:A[z-2].push({part:A[z],separator:A[z-1]});
this.$=A[z-2];
break;
case 40:this.$=[{part:A[z]}];
break;
case 43:this.$=[];
break;
case 44:A[z-1].push(A[z]);
break;
case 47:this.$=[A[z]];
break;
case 48:A[z-1].push(A[z]);
break
}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function u(z,y){throw new Error(z)
},parse:function w(H){var O=this,E=[0],X=[null],J=[],Y=this.table,z="",I=0,V=0,B=0,G=2,L=1;
this.lexer.setInput(H);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var A=this.lexer.yylloc;
J.push(A);
var C=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function N(aa){E.length=E.length-2*aa;
X.length=X.length-aa;
J.length=J.length-aa
}function M(){var aa;
aa=O.lexer.lex()||1;
if(typeof aa!=="number"){aa=O.symbols_[aa]||aa
}return aa
}var U,Q,D,T,Z,K,S={},P,W,y,F;
while(true){D=E[E.length-1];
if(this.defaultActions[D]){T=this.defaultActions[D]
}else{if(U===null||typeof U=="undefined"){U=M()
}T=Y[D]&&Y[D][U]
}if(typeof T==="undefined"||!T.length||!T[0]){var R="";
if(!B){F=[];
for(P in Y[D]){if(this.terminals_[P]&&P>2){F.push("'"+this.terminals_[P]+"'")
}}if(this.lexer.showPosition){R="Parse error on line "+(I+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+F.join(", ")+", got '"+(this.terminals_[U]||U)+"'"
}else{R="Parse error on line "+(I+1)+": Unexpected "+(U==1?"end of input":"'"+(this.terminals_[U]||U)+"'")
}this.parseError(R,{text:this.lexer.match,token:this.terminals_[U]||U,line:this.lexer.yylineno,loc:A,expected:F})
}}if(T[0] instanceof Array&&T.length>1){throw new Error("Parse Error: multiple actions possible at state: "+D+", token: "+U)
}switch(T[0]){case 1:E.push(U);
X.push(this.lexer.yytext);
J.push(this.lexer.yylloc);
E.push(T[1]);
U=null;
if(!Q){V=this.lexer.yyleng;
z=this.lexer.yytext;
I=this.lexer.yylineno;
A=this.lexer.yylloc;
if(B>0){B--
}}else{U=Q;
Q=null
}break;
case 2:W=this.productions_[T[1]][1];
S.$=X[X.length-W];
S._$={first_line:J[J.length-(W||1)].first_line,last_line:J[J.length-1].last_line,first_column:J[J.length-(W||1)].first_column,last_column:J[J.length-1].last_column};
if(C){S._$.range=[J[J.length-(W||1)].range[0],J[J.length-1].range[1]]
}K=this.performAction.call(S,z,V,I,this.yy,T[1],X,J);
if(typeof K!=="undefined"){return K
}if(W){E=E.slice(0,-1*W*2);
X=X.slice(0,-1*W);
J=J.slice(0,-1*W)
}E.push(this.productions_[T[1]][0]);
X.push(S.$);
J.push(S._$);
y=Y[E[E.length-2]][E[E.length-1]];
E.push(y);
break;
case 3:return true
}}return true
}};
function q(y,z){return{left:y.charAt(2)==="~",right:z.charAt(0)==="~"||z.charAt(1)==="~"}
}var r=(function(){var B=({EOF:1,parseError:function D(G,F){if(this.yy.parser){this.yy.parser.parseError(G,F)
}else{throw new Error(G)
}},setInput:function(F){this._input=F;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var G=this._input[0];
this.yytext+=G;
this.yyleng++;
this.offset++;
this.match+=G;
this.matched+=G;
var F=G.match(/(?:\r\n?|\n).*/g);
if(F){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return G
},unput:function(H){var F=H.length;
var G=H.split(/(?:\r\n?|\n)/g);
this._input=H+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-F-1);
this.offset-=F;
var J=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(G.length-1){this.yylineno-=G.length-1
}var I=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:G?(G.length===J.length?this.yylloc.first_column:0)+J[J.length-G.length].length-G[0].length:this.yylloc.first_column-F};
if(this.options.ranges){this.yylloc.range=[I[0],I[0]+this.yyleng-F]
}return this
},more:function(){this._more=true;
return this
},less:function(F){this.unput(this.match.slice(F))
},pastInput:function(){var F=this.matched.substr(0,this.matched.length-this.match.length);
return(F.length>20?"...":"")+F.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var F=this.match;
if(F.length<20){F+=this._input.substr(0,20-F.length)
}return(F.substr(0,20)+(F.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var F=this.pastInput();
var G=new Array(F.length+1).join("-");
return F+this.upcomingInput()+"\n"+G+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var L,J,G,I,H,F;
if(!this._more){this.yytext="";
this.match=""
}var M=this._currentRules();
for(var K=0;
K<M.length;
K++){G=this._input.match(this.rules[M[K]]);
if(G&&(!J||G[0].length>J[0].length)){J=G;
I=K;
if(!this.options.flex){break
}}}if(J){F=J[0].match(/(?:\r\n?|\n).*/g);
if(F){this.yylineno+=F.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:F?F[F.length-1].length-F[F.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+J[0].length};
this.yytext+=J[0];
this.match+=J[0];
this.matches=J;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(J[0].length);
this.matched+=J[0];
L=this.performAction.call(this,this.yy,this,M[I],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(L){return L
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function y(){var F=this.next();
if(typeof F!=="undefined"){return F
}else{return this.lex()
}},begin:function z(F){this.conditionStack.push(F)
},popState:function E(){return this.conditionStack.pop()
},_currentRules:function C(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function z(F){this.begin(F)
}});
B.options={};
B.performAction=function A(K,G,J,F){function H(M,L){return G.yytext=G.yytext.substr(M,G.yyleng-L)
}var I=F;
switch(J){case 0:if(G.yytext.slice(-2)==="\\\\"){H(0,1);
this.begin("mu")
}else{if(G.yytext.slice(-1)==="\\"){H(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(G.yytext){return 14
}break;
case 1:return 14;
break;
case 2:this.popState();
return 14;
break;
case 3:H(0,4);
this.popState();
return 15;
break;
case 4:return 35;
break;
case 5:return 36;
break;
case 6:return 25;
break;
case 7:return 16;
break;
case 8:return 20;
break;
case 9:return 19;
break;
case 10:return 19;
break;
case 11:return 23;
break;
case 12:return 22;
break;
case 13:this.popState();
this.begin("com");
break;
case 14:H(3,5);
this.popState();
return 15;
break;
case 15:return 22;
break;
case 16:return 41;
break;
case 17:return 40;
break;
case 18:return 40;
break;
case 19:return 44;
break;
case 20:break;
case 21:this.popState();
return 24;
break;
case 22:this.popState();
return 18;
break;
case 23:G.yytext=H(1,2).replace(/\\"/g,'"');
return 32;
break;
case 24:G.yytext=H(1,2).replace(/\\'/g,"'");
return 32;
break;
case 25:return 42;
break;
case 26:return 34;
break;
case 27:return 34;
break;
case 28:return 33;
break;
case 29:return 40;
break;
case 30:G.yytext=H(1,2);
return 40;
break;
case 31:return"INVALID";
break;
case 32:return 5;
break
}};
B.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
B.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return B
})();
x.lexer=r;
function v(){this.yy={}
}v.prototype=x;
x.Parser=v;
return new v
})();
p=o;
return p
})();
var n=(function(s,o){var p={};
var t=s;
var q=o;
p.parser=t;
function r(u){if(u.constructor===q.ProgramNode){return u
}t.yy=q;
return t.parse(u)
}p.parse=r;
return p
})(b,l);
var e=(function(t){var s={};
var o=t;
function q(){}s.Compiler=q;
q.prototype={compiler:q,disassemble:function(){var z=this.opcodes,y,w=[],B,A;
for(var x=0,u=z.length;
x<u;
x++){y=z[x];
if(y.opcode==="DECLARE"){w.push("DECLARE "+y.name+"="+y.value)
}else{B=[];
for(var v=0;
v<y.args.length;
v++){A=y.args[v];
if(typeof A==="string"){A='"'+A.replace("\n","\\n")+'"'
}B.push(A)
}w.push(y.opcode+" "+B.join(" "))
}}return w.join("\n")
},equals:function(v){var u=this.opcodes.length;
if(v.opcodes.length!==u){return false
}for(var y=0;
y<u;
y++){var z=this.opcodes[y],w=v.opcodes[y];
if(z.opcode!==w.opcode||z.args.length!==w.args.length){return false
}for(var x=0;
x<z.args.length;
x++){if(z.args[x]!==w.args[x]){return false
}}}u=this.children.length;
if(v.children.length!==u){return false
}for(y=0;
y<u;
y++){if(!this.children[y].equals(v.children[y])){return false
}}return true
},guid:0,compile:function(u,w){this.opcodes=[];
this.children=[];
this.depths={list:[]};
this.options=w;
var x=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(x){for(var v in x){this.options.knownHelpers[v]=x[v]
}}return this.accept(u)
},accept:function(w){var v=w.strip||{},u;
if(v.left){this.opcode("strip")
}u=this[w.type](w);
if(v.right){this.opcode("strip")
}return u
},program:function(w){var v=w.statements;
for(var x=0,u=v.length;
x<u;
x++){this.accept(v[x])
}this.isSimple=u===1;
this.depths.list=this.depths.list.sort(function(z,y){return z-y
});
return this
},compileProgram:function(w){var u=new this.compiler().compile(w,this.options);
var x=this.guid++,z;
this.usePartial=this.usePartial||u.usePartial;
this.children[x]=u;
for(var y=0,v=u.depths.list.length;
y<v;
y++){z=u.depths.list[y];
if(z<2){continue
}else{this.addDepth(z-1)
}}return x
},block:function(z){var y=z.mustache,v=z.program,u=z.inverse;
if(v){v=this.compileProgram(v)
}if(u){u=this.compileProgram(u)
}var x=y.sexpr;
var w=this.classifySexpr(x);
if(w==="helper"){this.helperSexpr(x,v,u)
}else{if(w==="simple"){this.simpleSexpr(x);
this.opcode("pushProgram",v);
this.opcode("pushProgram",u);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousSexpr(x,v,u);
this.opcode("pushProgram",v);
this.opcode("pushProgram",u);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(x){var w=x.pairs,z,y;
this.opcode("pushHash");
for(var v=0,u=w.length;
v<u;
v++){z=w[v];
y=z[1];
if(this.options.stringParams){if(y.depth){this.addDepth(y.depth)
}this.opcode("getContext",y.depth||0);
this.opcode("pushStringParam",y.stringModeValue,y.type);
if(y.type==="sexpr"){this.sexpr(y)
}}else{this.accept(y)
}this.opcode("assignToHash",z[0])
}this.opcode("popHash")
},partial:function(u){var v=u.partialName;
this.usePartial=true;
if(u.context){this.ID(u.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",v.name);
this.opcode("append")
},content:function(u){this.opcode("appendContent",u.string)
},mustache:function(u){this.sexpr(u.sexpr);
if(u.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousSexpr:function(y,w,v){var z=y.id,x=z.parts[0],u=w!=null||v!=null;
this.opcode("getContext",z.depth);
this.opcode("pushProgram",w);
this.opcode("pushProgram",v);
this.opcode("invokeAmbiguous",x,u)
},simpleSexpr:function(u){var v=u.id;
if(v.type==="DATA"){this.DATA(v)
}else{if(v.parts.length){this.ID(v)
}else{this.addDepth(v.depth);
this.opcode("getContext",v.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperSexpr:function(x,v,u){var y=this.setupFullMustacheParams(x,v,u),w=x.id.parts[0];
if(this.options.knownHelpers[w]){this.opcode("invokeKnownHelper",y.length,w)
}else{if(this.options.knownHelpersOnly){throw new o("You specified knownHelpersOnly, but used the unknown helper "+w,x)
}else{this.opcode("invokeHelper",y.length,w,x.isRoot)
}}},sexpr:function(v){var u=this.classifySexpr(v);
if(u==="simple"){this.simpleSexpr(v)
}else{if(u==="helper"){this.helperSexpr(v)
}else{this.ambiguousSexpr(v)
}}},ID:function(x){this.addDepth(x.depth);
this.opcode("getContext",x.depth);
var v=x.parts[0];
if(!v){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",x.parts[0])
}for(var w=1,u=x.parts.length;
w<u;
w++){this.opcode("lookup",x.parts[w])
}},DATA:function(w){this.options.data=true;
if(w.id.isScoped||w.id.depth){throw new o("Scoped data references are not supported: "+w.original,w)
}this.opcode("lookupData");
var x=w.id.parts;
for(var v=0,u=x.length;
v<u;
v++){this.opcode("lookup",x[v])
}},STRING:function(u){this.opcode("pushString",u.string)
},INTEGER:function(u){this.opcode("pushLiteral",u.integer)
},BOOLEAN:function(u){this.opcode("pushLiteral",u.bool)
},comment:function(){},opcode:function(u){this.opcodes.push({opcode:u,args:[].slice.call(arguments,1)})
},declare:function(u,v){this.opcodes.push({opcode:"DECLARE",name:u,value:v})
},addDepth:function(u){if(u===0){return
}if(!this.depths[u]){this.depths[u]=true;
this.depths.list.push(u)
}},classifySexpr:function(x){var w=x.isHelper;
var y=x.eligibleHelper;
var v=this.options;
if(y&&!w){var u=x.id.parts[0];
if(v.knownHelpers[u]){w=true
}else{if(v.knownHelpersOnly){y=false
}}}if(w){return"helper"
}else{if(y){return"ambiguous"
}else{return"simple"
}}},pushParams:function(w){var u=w.length,v;
while(u--){v=w[u];
if(this.options.stringParams){if(v.depth){this.addDepth(v.depth)
}this.opcode("getContext",v.depth||0);
this.opcode("pushStringParam",v.stringModeValue,v.type);
if(v.type==="sexpr"){this.sexpr(v)
}}else{this[v.type](v)
}}},setupFullMustacheParams:function(w,v,u){var x=w.params;
this.pushParams(x);
this.opcode("pushProgram",v);
this.opcode("pushProgram",u);
if(w.hash){this.hash(w.hash)
}else{this.opcode("emptyHash")
}return x
}};
function p(w,x,y){if(w==null||(typeof w!=="string"&&w.constructor!==y.AST.ProgramNode)){throw new o("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+w)
}x=x||{};
if(!("data" in x)){x.data=true
}var v=y.parse(w);
var u=new y.Compiler().compile(v,x);
return new y.JavaScriptCompiler().compile(u,x)
}s.precompile=p;
function r(u,v,w){if(u==null||(typeof u!=="string"&&u.constructor!==w.AST.ProgramNode)){throw new o("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+u)
}v=v||{};
if(!("data" in v)){v.data=true
}var y;
function x(){var B=w.parse(u);
var A=new w.Compiler().compile(B,v);
var z=new w.JavaScriptCompiler().compile(A,v,undefined,true);
return w.template(z)
}return function(A,z){if(!y){y=x()
}return y.call(this,A,z)
}
}s.compile=r;
return s
})(d);
var h=(function(w,z){var y;
var o=w.COMPILER_REVISION;
var s=w.REVISION_CHANGES;
var t=w.log;
var u=z;
function q(B){this.value=B
}function A(){}A.prototype={nameLookup:function(E,C){var D,B;
if(E.indexOf("depth")===0){D=true
}if(/^[0-9]+$/.test(C)){B=E+"["+C+"]"
}else{if(A.isValidJavaScriptVariableName(C)){B=E+"."+C
}else{B=E+"['"+C+"']"
}}if(D){return"("+E+" && "+B+")"
}else{return B
}},compilerInfo:function(){var C=o,B=s[C];
return"this.compilerInfo = ["+C+",'"+B+"'];\n"
},appendToBuffer:function(B){if(this.environment.isSimple){return"return "+B+";"
}else{return{appendToBuffer:true,content:B,toString:function(){return"buffer += "+B+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(B,D,F,E){this.environment=B;
this.options=D||{};
t("debug",this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!F;
this.context=F||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(B,D);
var H=B.opcodes,G;
this.i=0;
for(var C=H.length;
this.i<C;
this.i++){G=H[this.i];
if(G.opcode==="DECLARE"){this[G.name]=G.value
}else{this[G.opcode].apply(this,G.args)
}if(G.opcode!==this.stripNext){this.stripNext=false
}}this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new u("Compile completed with content left on stack")
}return this.createFunctionContext(E)
},preamble:function(){var B=[];
if(!this.isChild){var C=this.namespace;
var D="helpers = this.merge(helpers, "+C+".helpers);";
if(this.environment.usePartial){D=D+" partials = this.merge(partials, "+C+".partials);"
}if(this.options.data){D=D+" data = data || {};"
}B.push(D)
}else{B.push("")
}if(!this.environment.isSimple){B.push(", buffer = "+this.initializeBuffer())
}else{B.push("")
}this.lastContext=0;
this.source=B
},createFunctionContext:function(F){var H=this.stackVars.concat(this.registers.list);
if(H.length>0){this.source[1]=this.source[1]+", "+H.join(", ")
}if(!this.isChild){for(var E in this.context.aliases){if(this.context.aliases.hasOwnProperty(E)){this.source[1]=this.source[1]+", "+E+"="+this.context.aliases[E]
}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.pushSource("return buffer;")
}var I=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var D=0,B=this.environment.depths.list.length;
D<B;
D++){I.push("depth"+this.environment.depths.list[D])
}var G=this.mergeSource();
if(!this.isChild){G=this.compilerInfo()+G
}if(F){I.push(G);
return Function.apply(this,I)
}else{var C="function "+(this.name||"")+"("+I.join(",")+") {\n  "+G+"}";
t("debug",C+"\n\n");
return C
}},mergeSource:function(){var F="",D;
for(var E=0,B=this.source.length;
E<B;
E++){var C=this.source[E];
if(C.appendToBuffer){if(D){D=D+"\n    + "+C.content
}else{D=C.content
}}else{if(D){F+="buffer += "+D+";\n  ";
D=undefined
}F+=C+"\n  "
}}return F
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var B=["depth0"];
this.setupParams(0,B);
this.replaceStack(function(C){B.splice(1,0,C);
return"blockHelperMissing.call("+B.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var C=["depth0"];
this.setupParams(0,C);
var B=this.topStack();
C.splice(1,0,B);
this.pushSource("if (!"+this.lastHelper+") { "+B+" = blockHelperMissing.call("+C.join(", ")+"); }")
},appendContent:function(B){if(this.pendingContent){B=this.pendingContent+B
}if(this.stripNext){B=B.replace(/^\s+/,"")
}this.pendingContent=B
},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")
}this.stripNext="strip"
},append:function(){this.flushInline();
var B=this.popStack();
this.pushSource("if("+B+" || "+B+" === 0) { "+this.appendToBuffer(B)+" }");
if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(B){if(this.lastContext!==B){this.lastContext=B
}},lookupOnContext:function(B){this.push(this.nameLookup("depth"+this.lastContext,B,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(B){return"typeof "+B+" === functionType ? "+B+".apply(depth0) : "+B
})
},lookup:function(B){this.replaceStack(function(C){return C+" == null || "+C+" === false ? "+C+" : "+this.nameLookup(C,B,"context")
})
},lookupData:function(){this.pushStackLiteral("data")
},pushStringParam:function(B,C){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(C);
if(C!=="sexpr"){if(typeof B==="string"){this.pushString(B)
}else{this.pushStackLiteral(B)
}}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.push("{}");
this.push("{}")
}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[]}
},popHash:function(){var B=this.hash;
this.hash=this.hashes.pop();
if(this.options.stringParams){this.push("{"+B.contexts.join(",")+"}");
this.push("{"+B.types.join(",")+"}")
}this.push("{\n    "+B.values.join(",\n    ")+"\n  }")
},pushString:function(B){this.pushStackLiteral(this.quotedString(B))
},push:function(B){this.inlineStack.push(B);
return B
},pushLiteral:function(B){this.pushStackLiteral(B)
},pushProgram:function(B){if(B!=null){this.pushStackLiteral(this.programExpression(B))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(F,C,B){this.context.aliases.helperMissing="helpers.helperMissing";
this.useRegister("helper");
var D=this.lastHelper=this.setupHelper(F,C,true);
var G=this.nameLookup("depth"+this.lastContext,C,"context");
var E="helper = "+D.name+" || "+G;
if(D.paramsInit){E+=","+D.paramsInit
}this.push("("+E+",helper ? helper.call("+D.callParams+") : helperMissing.call("+D.helperMissingParams+"))");
if(!B){this.flushInline()
}},invokeKnownHelper:function(D,B){var C=this.setupHelper(D,B);
this.push(C.name+".call("+C.callParams+")")
},invokeAmbiguous:function(B,F){this.context.aliases.functionType='"function"';
this.useRegister("helper");
this.emptyHash();
var C=this.setupHelper(0,B,F);
var D=this.lastHelper=this.nameLookup("helpers",B,"helper");
var G=this.nameLookup("depth"+this.lastContext,B,"context");
var E=this.nextStack();
if(C.paramsInit){this.pushSource(C.paramsInit)
}this.pushSource("if (helper = "+D+") { "+E+" = helper.call("+C.callParams+"); }");
this.pushSource("else { helper = "+G+"; "+E+" = typeof helper === functionType ? helper.call("+C.callParams+") : helper; }")
},invokePartial:function(B){var C=[this.nameLookup("partials",B,"partial"),"'"+B+"'",this.popStack(),"helpers","partials"];
if(this.options.data){C.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+C.join(", ")+")")
},assignToHash:function(C){var E=this.popStack(),B,D;
if(this.options.stringParams){D=this.popStack();
B=this.popStack()
}var F=this.hash;
if(B){F.contexts.push("'"+C+"': "+B)
}if(D){F.types.push("'"+C+"': "+D)
}F.values.push("'"+C+"': ("+E+")")
},compiler:A,compileChildren:function(B,E){var G=B.children,I,H;
for(var F=0,C=G.length;
F<C;
F++){I=G[F];
H=new this.compiler();
var D=this.matchExistingProgram(I);
if(D==null){this.context.programs.push("");
D=this.context.programs.length;
I.index=D;
I.name="program"+D;
this.context.programs[D]=H.compile(I,E,this.context);
this.context.environments[D]=I
}else{I.index=D;
I.name="program"+D
}}},matchExistingProgram:function(E){for(var D=0,C=this.context.environments.length;
D<C;
D++){var B=this.context.environments[D];
if(B&&B.equals(E)){return D
}}},programExpression:function(C){this.context.aliases.self="this";
if(C==null){return"self.noop"
}var H=this.environment.children[C],G=H.depths.list,F;
var E=[H.index,H.name,"data"];
for(var D=0,B=G.length;
D<B;
D++){F=G[D];
if(F===1){E.push("depth0")
}else{E.push("depth"+(F-1))
}}return(G.length===0?"self.program(":"self.programWithDepth(")+E.join(", ")+")"
},register:function(B,C){this.useRegister(B);
this.pushSource(B+" = "+C+";")
},useRegister:function(B){if(!this.registers[B]){this.registers[B]=true;
this.registers.list.push(B)
}},pushStackLiteral:function(B){return this.push(new q(B))
},pushSource:function(B){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
this.pendingContent=undefined
}if(B){this.source.push(B)
}},pushStack:function(C){this.flushInline();
var B=this.incrStack();
if(C){this.pushSource(B+" = "+C+";")
}this.compileStack.push(B);
return B
},replaceStack:function(I){var D="",E=this.isInline(),H,C,F;
if(E){var G=this.popStack(true);
if(G instanceof q){H=G.value;
F=true
}else{C=!this.stackSlot;
var B=!C?this.topStackName():this.incrStack();
D="("+this.push(B)+" = "+G+"),";
H=this.topStack()
}}else{H=this.topStack()
}var J=I.call(this,H);
if(E){if(!F){this.popStack()
}if(C){this.stackSlot--
}this.push("("+D+J+")")
}else{if(!/^stack/.test(H)){H=this.nextStack()
}this.pushSource(H+" = ("+D+J+");")
}return H
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var D=this.inlineStack;
if(D.length){this.inlineStack=[];
for(var C=0,B=D.length;
C<B;
C++){var E=D[C];
if(E instanceof q){this.compileStack.push(E)
}else{this.pushStack(E)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(B){var D=this.isInline(),C=(D?this.inlineStack:this.compileStack).pop();
if(!B&&(C instanceof q)){return C.value
}else{if(!D){if(!this.stackSlot){throw new u("Invalid stack pop")
}this.stackSlot--
}return C
}},topStack:function(C){var B=(this.isInline()?this.inlineStack:this.compileStack),D=B[B.length-1];
if(!C&&(D instanceof q)){return D.value
}else{return D
}},quotedString:function(B){return'"'+B.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},setupHelper:function(F,D,C){var E=[],G=this.setupParams(F,E,C);
var B=this.nameLookup("helpers",D,"helper");
return{params:E,paramsInit:G,name:B,callParams:["depth0"].concat(E).join(", "),helperMissingParams:C&&["depth0",this.quotedString(D)].concat(E).join(", ")}
},setupOptions:function(D,C){var J=[],G=[],I=[],B,E,H;
J.push("hash:"+this.popStack());
if(this.options.stringParams){J.push("hashTypes:"+this.popStack());
J.push("hashContexts:"+this.popStack())
}E=this.popStack();
H=this.popStack();
if(H||E){if(!H){this.context.aliases.self="this";
H="self.noop"
}if(!E){this.context.aliases.self="this";
E="self.noop"
}J.push("inverse:"+E);
J.push("fn:"+H)
}for(var F=0;
F<D;
F++){B=this.popStack();
C.push(B);
if(this.options.stringParams){I.push(this.popStack());
G.push(this.popStack())
}}if(this.options.stringParams){J.push("contexts:["+G.join(",")+"]");
J.push("types:["+I.join(",")+"]")
}if(this.options.data){J.push("data:data")
}return J
},setupParams:function(E,D,C){var B="{"+this.setupOptions(E,D).join(",")+"}";
if(C){this.useRegister("options");
D.push("options");
return"options="+B
}else{D.push(B);
return""
}}};
var p=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var x=A.RESERVED_WORDS={};
for(var v=0,r=p.length;
v<r;
v++){x[p[v]]=true
}A.isValidJavaScriptVariableName=function(B){if(!A.RESERVED_WORDS[B]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(B)){return true
}return false
};
y=A;
return y
})(j,d);
var c=(function(x,C,p,t,w){var z;
var o=x;
var v=C;
var s=p.parser;
var r=p.parse;
var y=t.Compiler;
var B=t.compile;
var q=t.precompile;
var D=w;
var A=o.create;
var u=function(){var E=A();
E.compile=function(F,G){return B(F,G,E)
};
E.precompile=function(F,G){return q(F,G,E)
};
E.AST=v;
E.Compiler=y;
E.JavaScriptCompiler=D;
E.Parser=s;
E.parse=r;
return E
};
o=u();
o.create=u;
z=o;
return z
})(f,l,n,e,h);
return c
})();
jQuery(function(a){var c=a("article.product, article.product_reference");
var b=c.find(".product-chooser li");
c.each(function(){var f=a(this);
var e=f.children(".product-form");
var g=f.parent();
var d=g.is(".product_mobile");
function j(){var l=f.children(".product-chooser");
l.find("li").each(function(){var m=a(this);
var n=g.children("article[data-sku='"+m.attr("data-sku")+"']");
if(n.attr("data-sku")==f.attr("data-sku")){m.addClass("selected")
}m.click(function(){var p=e.find(".product-quantity").find("input");
var t=e.find(".product-size").find(d?"select":"input:checked");
var r=n.children(".product-form");
var q=n.find(".product-chooser li[data-sku='"+m.attr("data-sku")+"']");
r.find(".product-quantity input").val(p.val());
if(d){r.find(".product-size select").val(t.val()).trigger("change")
}else{var o=r.find(".product-size input[value='"+t.val()+"']");
if(o.length>0){o.click()
}else{var s=r.find(".product-size input");
if(s.length>0){a(s[0]).click()
}}}g.children("article").addClass("isHidden");
n.removeClass("isHidden");
b.removeClass("selected");
q.addClass("selected")
});
m.hover(function(){m.addClass("hover")
},function(){m.removeClass("hover")
})
})
}function h(){var l=f.find(".product-size");
l.find("li").each(function(){var m=a(this);
var o=m.find("input");
var p=l.find("input[name='"+o.attr("name")+"']");
var n=p.closest("li");
o.add(m);
m.click(function(){var q=o.val();
p.val([q]);
n.removeClass("selected");
m.addClass("selected");
f.find(".product-price").html(o.attr("data-price"));
f.find(".product-item").html(o.attr("data-sku"));
f.find(".product-title").html(o.attr("data-title"));
f.find(".product-description").html(o.attr("data-description"));
f.find(".product-submit input[name='product-path']").val(o.attr("data-path"));
return false
});
m.hover(function(){m.addClass("hover")
},function(){m.removeClass("hover")
});
m.keyup(function(r){var q=r.which;
if(q==32||q==13){m.click()
}});
if(o.is(":checked")){m.addClass("selected")
}});
l.find("select").each(function(){a(this).change(function(){var m=a(this).find("option:selected");
a(".product-price").html(m.attr("data-price"));
a(".product-submit input[name='product-path']").val(m.attr("data-path"))
})
})
}j();
h()
})
});
$CQ(window).load(function(){var b=$CQ(document),a=$CQ("<div/>",{"class":"add-to-cart-image-dialog"}).appendTo("body");
a.dialog({autoOpen:false,modal:true,height:"auto",width:"auto",zIndex:90000});
$CQ(".add-to-cart-image").each(function(){var c=$CQ(this),d=c.find("img");
c.find("area").each(function(){var n=$CQ(this).attr("coords").split(","),q,g=$CQ(this).attr("href"),m=$CQ('<a class="add-to-cart-image-link"></a>');
if($CQ(this).attr("shape")=="circle"){q={left:+n[0],top:+n[1]}
}else{if($CQ(this).attr("shape")=="rect"){q={left:(+n[0]+ +n[2])/2,top:(+n[1]+ +n[3])/2}
}else{if($CQ(this).attr("shape")=="poly"){var l=0,f=0,j=Infinity,e=0,h=Infinity;
while(l<n.length){var p=parseInt(n[l++],10),o=parseInt(n[l++],10);
if(p<j){j=p
}else{if(p>f){f=p
}}if(o<h){h=o
}else{if(o>e){e=o
}}}q={left:j+(f-j)/2,top:h+(e-h)/2}
}}}c.append(m);
m.offset({left:d.offset().left+q.left-m.width()/2,top:d.offset().top+q.top-m.height()/2});
m.attr("href",g);
$CQ(this).remove()
})
});
b.on("click",".add-to-cart-image-link",function(l){l.preventDefault();
var f=$CQ(this),d=f.attr("href"),n=d.substring(0,d.length-".html".length),g=n+".addtocart.html",j=window.location.pathname,m=f.closest(".add-to-cart-image").data("pagePath"),p=f.closest(".add-to-cart-image").data("showProductAsset"),c=f.closest(".add-to-cart-image").data("showProductPrice"),o=f.closest(".add-to-cart-image").data("showProductForm"),h={pagePath:m,showProductAsset:p,showProductPrice:c,showProductForm:o};
$CQ.get(g,h,function(e){a.html(e).dialog("open");
$CQ("input[name=redirect]").val(j)
})
})
});
(function(h,f,b,g){var d={VERSION:"0.0.1",Views:{},Models:{},Collections:{},config:{urlRoot:""},constants:{SOCIAL_SELECTOR:".social",JSON_EXT:".json",URL_EXT:".social.json",TRANSLATE_URL_EXT:".social.translate.json",ANALYTICS_BASE_RESOURCE_TYPE:"social/commons/components/analyticsbase"},Components:{},loadedComponents:{},templates:{},fieldManagers:{},DEBUG:1,INFO:2,WARN:3,ERROR:4};
d.LOG_LEVEL=d.INFO;
var e={debug:function(){if(d.LOG_LEVEL<=d.DEBUG){window.console.debug.apply(window.console,arguments)
}},info:function(){if(d.LOG_LEVEL<=d.INFO){window.console.info.apply(window.console,arguments)
}},warn:function(){if(d.LOG_LEVEL<=d.WARN){window.console.warn.apply(window.console,arguments)
}},error:function(){if(d.LOG_LEVEL<=d.ERROR){window.console.error.apply(window.console,arguments)
}}};
var c=function(m,l){var n=m.firstChild;
var j=null;
while(n){switch(n.nodeType){case 1:j=c(n,l);
break;
case 8:if(n.nodeValue.match(l)){return n
}break
}if(j!==null){break
}n=n.nextSibling
}return j
};
d.Router=new h.Router();
if(!h.History.started){h.history.start({pushState:true,hashChange:false})
}d.View=h.View.extend({initialize:function(){this._rendered=false;
this._childViews={};
this._parentView=undefined;
this._modelReady=false;
this._sessionReady=false;
this._renderedChildren=[];
this._replacementTarget=null;
this._destroyed=false;
if(this.$el.html()!==""){this.bindView();
this._rendered=true
}this.listenTo(this.model,"model:loaded",function(){this._modelReady=true;
this.render()
});
this.listenTo(this.model,"model:cacheFixed",function(){this.render()
});
if(this.requiresSession&&!d.Session.isReady()){this.listenTo(d.Session,"model:loaded",function(j){if(!this._sessionReady){this._sessionReady=true;
this.render()
}})
}this._sessionReady=d.Session.isReady();
if(b.isFunction(this.init)){this.init.apply(this,arguments)
}if(d.Session.isReady()){this.initContext()
}else{d.Session.on("model:loaded",b.bind(this.initContext,this))
}},initContext:function(){if(b.isUndefined(d.Context)){d.Context={};
var j=".scf-js-group-navbar";
var l=$(".scf-js-site-title").attr("href");
l=b.isUndefined(l)?"":l.substring(0,l.lastIndexOf(".html"));
this.sitePath=l;
d.Context.siteTitle=$(".scf-js-site-title").length!==0?$(".scf-js-site-title").text():"";
d.Context.sitePath=this.sitePath;
d.Context.groupTitle=$(j).length!==0&&!b.isUndefined($(j).attr("data-group-title"))?$(j).data("group-title"):"";
d.Context.groupPath=$(j).length!==0&&!b.isUndefined($(j).attr("data-group-path"))?$(j).data("group-path"):"";
d.Context.user=d.Session.get("authorizableId")
}if(b.isFunction(this.initAnalytics)){this.initAnalytics.apply(this,arguments)
}},getContextForTemplate:function(){var j=(this.model!==undefined)?this.model.toJSON():this.context;
return this.getMergedContexts(j)
},getMergedContexts:function(j){if(!b.isObject(j)){j={}
}j.loggedInUser=d.Session.toJSON();
j.environment={};
j.environment.client=true;
return j
},appendTo:function(j){if(!this._rendered){this.render()
}f(j).append(this.el);
this.trigger("view:ready",{view:this})
},replaceElement:function(j){if(!this._rendered){this.render()
}if(this._rendered){f(j).replaceWith(this.$el);
this._replacementTarget=null;
this.trigger("view:ready",{view:this})
}else{this._replacementTarget=j
}},render:function(){if(this._destroyed){return
}var m=this;
if(!(this._modelReady||this.model._isReady)||(this.requiresSession&&!this._sessionReady)){return this
}this.unbindDataFields();
for(var n in this._childViews){this._childViews[n].destroy();
delete this._childViews[n]
}this._renderedChildren=[];
var j=f(this.template(this.getContextForTemplate(),{data:{parentView:this}}));
if(this._rendered||this.$el.parent().length>0){this.$el.html(j.html())
}else{this.setElement(j)
}b.each(this._childViews,function(o){m.renderChildView(o)
});
var l=b.bind(function(){this.bindView();
this._rendered=true;
if(this.afterRender){this.afterRender()
}this.trigger("view:rendered",{view:this})
},this);
f.when(this._renderedChildren).done(l);
if(this._replacementTarget!==null){this.replaceElement(this._replacementTarget)
}return this
},bindView:function(){var j=this;
this.unbindDataFields();
this.$("[evt]").not(this.$("[data-scf-component] [evt]")).each(function(l,m){d.View.bindEvents(j,f(m))
});
this.$("[data-attrib]").not(this.$("[data-scf-component] [data-attrib]")).each(function(l,m){d.View.bindDataFields(j,f(m))
});
this.$("[data-form]").not(this.$("[data-scf-component] [data-form]")).each(function(l,m){d.View.bindDataForms(j,f(m))
})
},addChildView:function(l){this._childViews[l.cid]=l;
var j=f.Deferred();
this._renderedChildren[l.cid]=j.promise();
this.listenTo(l,"view:rendered",function(){j.resolve()
});
this.listenTo(l,"view:destroyed",function(m){this.removeChildView(m.view.cid)
});
return this
},getChildView:function(j){return this._childViews[j]
},removeChildView:function(l){if(this._renderedChildren.hasOwnProperty(l)){this._renderedChildren[l].fail()
}if(this._childViews.hasOwnProperty(l)){var j=this._childViews[l];
j.stopListening();
this.stopListening(j,"view:rendered");
this._childViews[l]=undefined;
delete this._childViews[l]
}return this
},getChildViews:function(){return this._childViews
},setParent:function(j){this._parentView=j;
j.addChildView(this);
return this
},renderChildView:function(l){l.render();
var p=this;
if(p.el===null){return
}var o=null;
var n=null;
var m=new RegExp("s*?data-view='"+l.cid+"'");
if(document.createNodeIterator&&NodeFilter&&NodeFilter.SHOW_COMMENT){var j=document.createNodeIterator(p.el,NodeFilter.SHOW_COMMENT,function(q){if(q.data.match(m)){return NodeFilter.FILTER_ACCEPT
}},false);
n=j.nextNode();
while(n!==null){o=n;
n=j.nextNode();
break
}l.replaceElement(o)
}else{o=c(p.el,m);
l.replaceElement(o)
}},getField:function(l){var j=this._fields[l];
if(j){return j.val()
}return""
},setField:function(m,l){var j=this._fields[m];
if(!j){return
}j.val(l)
},focus:function(l){var j=this._fields[l];
if(!j){return
}j.focus()
},getForm:function(j){if(typeof this._forms==="undefined"){return null
}else{return this._forms[j]
}},destroy:function(){this.undelegateEvents();
this.unbindDataFields();
this.stopListening();
this.trigger("view:destroyed",{view:this});
this._destroyed=true
},unbindDataFields:function(){for(var j in this._fields){if(this._fields.hasOwnProperty(j)){if(b.isFunction(this._fields[j].destroy)){this._fields[j].destroy()
}}}this._fields={}
},log:e});
d.View.extend=function(){var l=h.View.extend.apply(this,arguments);
var j=arguments[0].viewName;
d.Views[j]=l;
return l
};
d.Model=h.Model.extend({_cachedModels:{},_hasLoadedChildren:false,parse:function(j){this._parseRelations(j);
return j
},addEncoding:function(j){if((window.FormData)&&(j instanceof window.FormData)){j.append("_charset_","UTF-8")
}if(!j.hasOwnProperty("_charset_")){j._charset_="UTF-8"
}return j
},reload:function(n){this._isReady=false;
var l="";
var j;
if(b.isFunction(this.url)){l=this.url();
j=this.url
}else{l=this.url
}this.clear();
if(!b.isEmpty(l)){this.url=l
}var m=this;
this.fetch({dataType:"json",cache:false,xhrFields:{withCredentials:true},error:function(p,o){d.log.error("Error fetching model");
d.log.error(o);
p.clear();
p._isReady=true;
p.trigger("model:loaded",p);
if(n&&typeof(n.error)==="function"){n.error()
}},success:function(o){if(j!==undefined){o.url=j
}o._isReady=true;
o.trigger("model:loaded",o);
if(n&&typeof(n.success)==="function"){n.success()
}}})
},reset:function(l,m){this.clear().set(b.clone(this.defaults));
var j=this._parseRelations(l);
this.set(j,m);
return this
},initialize:function(j){this.listenTo(d.Session,"logout:success",function(){this.reload()
});
this.listenTo(d.Session,"login:success",function(){this.reload()
})
},constructor:function(l,m){if(typeof(l)!=="object"){l=JSON.parse(l)
}var j=this._parseRelations(l);
h.Model.apply(this,[j,m])
},url:function(){var j;
if(this.urlRoot){j=this.urlRoot+this.id+d.constants.URL_EXT
}else{if(d.config.urlRoot){j=d.config.urlRoot+this.id+d.constants.URL_EXT
}else{j=this.id+d.constants.URL_EXT
}}return j
},_parseRelations:function(j){if(typeof(j)!=="object"){j=JSON.parse(j)
}var l=b.bind(function(p,t){if(!j[t]&&!p.path){j[t]=[]
}if(j[t]||p.path){var o=j[t];
var u,r;
if(b.isArray(o)){var m=[],v=[];
b.each(o,function(w){if(b.isObject(w)){u=!b.isUndefined(d.Models[p.model])?d.Models[p.model]:d.Components[w.resourceType].Model;
r=u.findLocal(w.id);
if(!r){r=u.createLocally(w)
}else{r.reset(w)
}m.push(r)
}else{if(!b.isEmpty(w)){var x=w.substr(d.config.urlRoot.length);
x=x.substr(0,x.lastIndexOf(d.constants.URL_EXT));
u=d.Models[p.model];
r=u.findLocal("idFromUrl");
if(!r){r=p.autofetch?u.find(x):new u({url:w})
}u.prototype._cachedModels[x]=r;
m.push(r)
}}});
var q=d.Collections[p.collection]||h.Collection;
var s=new q();
s.model=u;
s.parent=this;
s.set(m,{silent:true});
j[t]=s
}else{if(b.isObject(o)){if(b.isUndefined(d.Models[p.model])&&b.isUndefined(d.Components[o.resourceType])){this.log.error("A relation key %s requested model %s but it is not available nor is the component type: %s",t,p.model,o.resourceType);
return
}u=d.Models[p.model]||d.Components[o.resourceType].Model;
r=u.findLocal(o.id)||u.createLocally(o);
j[t]=r
}else{var n=o;
if(!n){if(p.path){if(p.path.substr(0,1)==="/"){n=p.path
}else{n=d.config.urlRoot+j.id+"/"+p.path+d.constants.URL_EXT
}}else{return
}}u=d.Models[p.model];
if(p.autofetch){r=u.find(n,undefined,true)
}else{r=u.findLocal(n,true)||new u({url:n})
}j[t]=r
}}}},this);
b.each(this.relationships,l);
return j
},toJSON:function(){var j=h.Model.prototype.toJSON.apply(this);
b.each(this.relationships,function(l,m){var o=j[m];
if(o.length<=0){delete j[m];
return
}if(b.isArray(o)){var n=[];
b.each(o,function(p){if(p instanceof h.Model){n.push(p.toJSON())
}else{n.push(p)
}});
j[m]=n
}else{if(o instanceof h.Collection){j[m]=o.toJSON()
}else{if(o instanceof h.Model){j[m]=o.toJSON()
}}}});
return j
},log:e});
d.Model.extend=function(){var l=h.Model.extend.apply(this,arguments);
var j=arguments[0].modelName;
d.Models[j]=l;
return l
};
d.View.bindEvents=function(j,l){var m=l.attr("evt");
b.each(m.split(","),function(q){var r=q.split("=");
var n=f.trim(r[0]);
var p=f.trim(r[1]);
if(j[p]){var o=b.bind(j[p],j);
l.off(n);
l.on(n,o)
}})
};
d.View.bindDataFields=function(m,o){var p=o.attr("data-attrib");
if(!m._fields){m._fields={}
}if(!b.isUndefined(m._fields[p])){return
}var l=o.attr("data-field-type");
var j=(b.isUndefined(d.fieldManagers[l]))?a:d.fieldManagers[l];
var n=new j(o,{},m.model);
m._fields[p]=(function(){return{val:function(){if(arguments.length===0){return n.getValue()
}else{return n.setValue(arguments[0])
}},focus:function(){return n.focus()
},destroy:function(){if(b.isFunction(n.destroy)){n.destroy()
}}}
})()
};
d.View.bindDataForms=function(j,l){var m=l.attr("data-form");
if(!j._forms){j._forms={}
}j._forms[m]=new SCFValidator($(l),false)
};
d.Model.findLocal=function(j,l){var m=l?j.substr(d.config.urlRoot.length):j;
if(this.prototype._cachedModels&&this.prototype._cachedModels[m]){return this.prototype._cachedModels[m]
}};
d.Model.createLocally=function(j){var l=new this.prototype.constructor(j);
l._isReady=true;
this.prototype._cachedModels[l.get("id")]=l;
return l
};
d.Model.prototype.load=function(j){if(j){this.set({id:j},{silent:true})
}this.fetch({success:function(l){l._isReady=true;
l.trigger("model:loaded",l)
},xhrFields:{withCredentials:true}})
};
d.Model.prototype.getConfigValue=function(l){var j=this.get("configuration");
if(!b.isEmpty(j)){return j[l]
}return null
};
d.Model.prototype.destroy=function(l){var j=this;
this.constructor.prototype._cachedModels[j.get("id")]=undefined;
j.trigger("destroy",j,j.collection,l)
};
d.Model.prototype.parseServerError=function(n,m,l){var j=f.parseJSON(n.responseText);
if(j.hasOwnProperty("status.code")){j.status=j.status||{};
j.status.code=j["status.code"];
delete j["status.code"]
}if(j.hasOwnProperty("status.message")){j.status=j.status||{};
j.status.message=j["status.message"];
delete j["status.message"]
}return{error:l,details:j}
};
d.Model.find=function(l,p,o){var n=this;
if(this.prototype._cachedModels&&this.prototype._cachedModels[l]){var j=this.prototype._cachedModels[l];
if(b.isFunction(p)){p(j)
}return j
}else{var m=new this.prototype.constructor({id:l});
if(o){m.url=l
}this.prototype._cachedModels[l]=m;
m.fetch({dataType:"json",xhrFields:{withCredentials:true},error:function(r,q){if(q.status===204||q.status===404){d.log.debug("non existing resource");
r._isReady=true;
r.trigger("model:loaded",r);
if(b.isFunction(p)){p(r)
}}else{d.log.error("Error fetching model");
d.log.error(q);
n.prototype._cachedModels[l]=undefined
}},success:function(q){q._isReady=true;
q.trigger("model:loaded",q);
if(b.isFunction(p)){p(q)
}}});
return m
}};
d.Collection=h.Collection.extend({});
d.Collection.extend=function(){var l=h.Collection.extend.apply(this,arguments);
var j=arguments[0].collectioName;
d.Collections[j]=l;
return l
};
d.registerComponent=function(l,m,j){d.Components[l]={Model:m,View:j,name:l}
};
d.addLoadedComponent=function(m,l,j){if(!d.Components[m]){return
}if(!d.loadedComponents[m]){d.loadedComponents[m]={}
}d.loadedComponents[m][l.id]={model:l,view:j};
return d.loadedComponents[m][l.id]
};
d.findTemplate=function(o,j,m){if(arguments.length==2){m=j;
j=""
}var n=m+"/"+j;
if(d.templates[n]){return d.templates[n]
}var l;
f.ajax({async:false,url:d.config.urlRoot+"/services/social/templates?resourceType="+m+"&ext=hbs&selector="+j}).done(function(q,p){if(p=="success"){l=g.compile(q);
d.templates[n]=l
}});
return l
};
d.log=e;
d.registerFieldType=function(j,l){if(!(b.isFunction(l.prototype.setValue))){this.log.error('%s does not implement required method, "setValue"',j);
return
}if(!(b.isFunction(l.prototype.getValue))){this.log.error('%s does not implement required method, "getValue"',j);
return
}if(!(b.isFunction(l.prototype.focus))){this.log.error('%s does not implement required method, "focus"',j);
return
}if(!(b.isFunction(l.prototype.destroy))){this.log.error('%s does not implement required method, "destroy"',j);
return
}this.fieldManagers[j]=l
};
var a=function(m,l,j){this.$el=m
};
a.prototype.setValue=function(j){return this.$el.val(j)
};
a.prototype.getValue=function(){return this.$el.val()
};
a.prototype.focus=function(){this.$el.focus()
};
a.prototype.destroy=function(){};
d.View.prototype.launchModal=function(o,p,n){var q=f('<div class="scf scf-modal-screen"></div>');
var m=f('<div class="scf scf-modal-dialog" style="display:none;"><h2 class="scf-modal-header">'+p+'</h2><div class="scf-modal-close">X</div></div>');
var l=o;
var r=l.parent();
m.append(l);
l.show();
var t=function(u){if(d.Util.mayCall(u,"preventDefault")){u.preventDefault()
}l.hide();
r.append(l);
q.remove();
m.remove();
if(b.isFunction(n)){n()
}};
m.find(".scf-modal-close").click(t);
m.find(".scf-js-modal-close").click(t);
f("body").append(q);
f("body").append(m);
var j=(window.innerWidth-m.innerWidth())/2;
var s=(window.innerHeight-m.innerHeight())/2;
m.css({top:s,left:j});
m.show();
return t
};
d.View.prototype.overlayTemplate='<div class="scf-overlay"><div class="scf-overlay-header btn-toolbar"><button class="btn btn-primary scf-ovelay-back-button" title="{{i18n "Back"}}"><span class="scf-icon-left"></span></button><h3>{{header}}</h3></div></div>';
d.View.prototype.loadOverlay=function(l,n,q,p){var m=g.compile(this.overlayTemplate);
var j=f(m({header:q}));
var o=function(){j.remove();
n.find(".scf-is-overlay-hidden").each(function(){f(this).removeClass("scf-is-overlay-hidden")
});
if(p&&b.isFunction(closeCallBack)){closeCallBack()
}};
n.children().each(function(){f(this).addClass("scf-is-overlay-hidden")
});
j.append(l);
n.append(j);
j.find(".scf-ovelay-back-button").click(o);
return o
};
d.View.prototype.errorTemplate="<h3>{{details.status.message}}</h3>";
d.View.prototype.addErrorMessage=function(n,l){var o=g.compile(this.errorTemplate);
var m=f(n);
var j=f(o(l));
j.addClass("scf-js-error-message");
m.before(j)
};
d.View.prototype.compileTemplate=function(j){return g.compile(j)
};
d.View.prototype.clearErrorMessages=function(l,j){this.$el.find(".scf-js-error-message").remove();
this.$el.find(".scf-error").removeClass("scf-error")
};
d.ChildView=d.View.extend({bindView:function(){},bindDataForms:function(){},bindDataFields:function(){},bindEvents:function(){},viewName:"ChildView"});
d.Util={mayCall:function(l,j){if(b.isUndefined(l)||b.isNull(l)){return false
}return(l.hasOwnProperty(j)||l[j]!==null)&&b.isFunction(l[j])
},announce:function(j,l){f(document).trigger(j,l)
},listenTo:function(j,l){f(document).on(j,function(n,m){l(m)
})
},startsWith:function(l,j){return l.substr(0,j.length)===j
},getContextPath:function(){var j=CQ.shared.HTTP.getPath();
var l=CQ.shared.HTTP.getExtension();
var m=j.split(l);
if(m&&m!==undefined){if(m.length>1){return m[1]
}else{return m[0]
}}return""
}};
window.SCF=d
})(Backbone,$CQ,_,Handlebars);
(function(g,f,c,d,b,e){var a=function(n,h,m){var j="";
var o={resourcePath:n};
if(m){c.log.warn("Forcing resource type is not supported when sling including on the client side")
}if(h){o.selector=h
}var l=c.config.urlRoot+n;
l+=h?"."+h+".html":".html";
d.ajax({async:false,url:l}).done(function(q,p){if(p=="success"){j=q
}});
return new g.SafeString(j)
};
g.registerHelper("include",function(h,j){if(arguments.length===1){j=h;
h=undefined
}var l=j.data.parentView;
var F=function(H){if(!H){return undefined
}var G=H.lastIndexOf("View");
if(G!==-1){return H.substr(0,G)+"Model"
}else{return H+"Model"
}};
var C=b.isUndefined(j.hash.bind)?true:j.hash.bind;
var B=j.hash.view;
var o=j.hash.template;
var p=j.hash.resourceType;
var x=j.hash.path;
var w=j.hash.model||F(B);
var u,m,y,E,z,r;
if(b.isObject(h)){p=p||h.resourceType;
r=c.Components[p];
if((b.isUndefined(r))&&(p.match(/^(\/apps)|(\/libs)/))){var s=p.substring(6);
r=c.Components[s]
}var t;
z=h.id;
if(!z){var n=h.url;
if(!n){c.log.warn("No resource id found for context: ");
c.log.warn(h)
}var A=n.substr(c.config.urlRoot.length);
A=A.substr(0,A.lastIndexOf(c.constants.URL_EXT));
z=A
}if(o){t=c.findTemplate(z,o,p)
}else{t=c.findTemplate(z,p)
}var D=function(){if(l.model.get("resourceType")===p&&l.model.id===z){return c.ChildView
}return r?r.View:undefined
};
y=B?c.Views[B]:D();
y=C?y:undefined;
E=w?c.Models[w]:r?r.Model:undefined;
E=C?E:undefined;
if(!y&&!t){if(z){return a(z,o,p)
}c.log.error("No view or template found for "+p+" and template "+o);
return""
}if(!y&&t){return new g.SafeString(t(c.View.prototype.getMergedContexts(h)))
}if(y&&!t){c.log.error("No template found for "+p+" and template "+o);
return""
}if(!E||!z){u=new y({context:h})
}else{m=E.findLocal(z);
if(!m){m=E.createLocally(h)
}if(m.isNew()){m.load(z)
}u=new y({model:m})
}if(o&&t){u.template=t
}else{if(t){y.prototype.template=t
}}}else{var v=x?x.slice(0,1)==="/":false;
if(!h&&!v){c.log.error("Must provide context path when including "+p);
return""
}z=v?x:h+"/"+x;
if(p){r=c.Components[p]
}if(C&&(r||(B&&w))){y=!r?c.Views[B]:r.View;
E=!r?c.Models[w]:r.Model
}if(y&&E){var q=z.indexOf("http://")===0;
m=E.find(z,undefined,q);
u=new y({model:m});
if(o){u.template=c.findTemplate(z,o,p)
}else{if(typeof u.template==="undefined"){c.log.info("Getting default template for "+p);
u.template=c.findTemplate(z,p,p)
}}}else{return a(z,o,p)
}}u.setParent(l);
if(!y.prototype.template&&u.template&&y!=c.ChildView){y.prototype.template=c.findTemplate(m.get("id"),p)
}u.templateName=o||"default";
u.resource=z;
return new g.SafeString("<!-- data-view='"+u.cid+"'-->")
});
g.registerHelper("equals",function(h,l,j){if(arguments.length<3){throw new Error("Handlebars Helper equal needs 2 parameters")
}if(h!=l){return j.inverse(this)
}else{return j.fn(this)
}});
g.registerHelper("lastPath",function(l,j){var h=l.lastIndexOf("/");
return l.slice(h+1)
});
g.registerHelper("pretty-time",function(j,s){if(!j){return""
}var n=new Date(j);
var l=new Date();
var r=l.getTime()-n.getTime();
var m=1000;
var o=m*60;
var p=o*60;
var q=p*24;
f.locale(e.shared.I18n.getLocale());
var h=s.hash.daysCutoff?s.hash.daysCutoff:60;
if(r<o){n=Math.round(r/m)+"";
if(n==1){return new g.SafeString(e.I18n.get("{0} second ago",n))
}return new g.SafeString(e.I18n.get("{0} seconds ago",n))
}else{if(r<p){n=Math.round(r/o);
if(n==1){return new g.SafeString(e.I18n.get("{0} minute ago",n))
}return new g.SafeString(e.I18n.get("{0} minutes ago",n))
}else{if(r<q){n=Math.round(r/p);
if(n==1){return new g.SafeString(e.I18n.get("{0} hour ago",n))
}return new g.SafeString(e.I18n.get("{0} hours ago",n))
}else{if(r<q*h){n=Math.round(r/q);
if(n==1){return new g.SafeString(e.I18n.get("{0} day ago",n))
}return new g.SafeString(e.I18n.get("{0} days ago",n))
}else{return new g.SafeString(f(n).format(e.I18n.get("MMM DD YYYY, h:mm A",null,"moment.js, communities moderation")))
}}}}});
g.registerHelper("pages",function(h,s){var q=h;
if(q.hasOwnProperty("selectedPage")&&q.hasOwnProperty("totalPages")&&q.hasOwnProperty("pageSize")&&q.hasOwnProperty("basePageURL")){var j="";
if(q.totalPages<=1){return j
}var o=Math.abs(q.pageSize);
var p=(q.orderReversed)?"-":"";
var m=q.selectedPage;
var n=m;
if((n-2)>0&&q.totalPages>5){n=n-2
}if(q.totalPages<=5){n=1
}else{if(q.totalPages-m<2){n=q.totalPages-4
}}var r=n+5;
if(r>q.totalPages){r=q.totalPages+1
}for(var l=n;
l<r;
l++){q.pageNumber=l;
q.currentPageUrl=q.basePageURL+"."+((l-1)*o)+"."+p+o+".html";
q.currentPage=l==q.selectedPage;
q.suffix=((l-1)*o)+"."+p+o;
j+=s.fn(q)
}return j
}else{return""
}});
g.registerHelper("loadmore",function(m,l){var o=m.pageInfo;
var h=m.items;
if(!m.totalSize||!o){return""
}if(!(!b.isUndefined(o.selectedPage)&&m.totalSize&&o.pageSize)){return""
}if(m.totalSize<=0){return""
}var p={};
p.suffix=o.nextSuffix;
var n=this.totalSize;
if(!b.isUndefined(h)){n=n-h.length
}if(n===0){return""
}var j=o.nextPageURL;
if(!b.isUndefined(j)&&j.indexOf(".json",j.length-5)!==-1){j=j.substr(0,j.length-5);
j+=".html"
}p.remaining=n;
p.moreURL=j;
return l.fn(p)
});
g.registerHelper("dateUtil",function(l,j){var h=l;
var n=j.hash.format;
var m=j.hash.timezone;
if(!h||typeof h!="number"){h=new Date().getTime()
}else{h=new Date(h)
}n=n.replace(/y/g,"Y");
n=n.replace(/\bdd\b/gi,"DD");
n=n.replace(/\bd\b/gi,"D");
n=n.replace(/\bEEEE\b/gi,"dddd");
f.locale(e.shared.I18n.getLocale());
if(m&&f.tz){return new g.SafeString(f.tz(h,m).format(n))
}return new g.SafeString(f(h).format(n))
});
g.registerHelper("i18n",function(l,j){if(arguments.length>1){var h=b.rest(arguments);
return e.I18n.get(l,h)
}else{return e.I18n.get(l)
}});
g.registerHelper("xss-htmlAttr",function(l,j){var h=d("div");
h.attr("data-xss",l);
var m=h.attr("data-xss");
return e.shared.XSS.getXSSValue(m)
});
g.registerHelper("xss-jsString",function(j,h){return e.shared.XSS.getXSSValue(j)
});
g.registerHelper("xss-html",function(j,h){return d("<div/>").text(j).html()
});
g.registerHelper("xss-validHref",function(j,h){return encodeURI(j)
});
g.registerHelper("dom-id",function(j,h){if(!j){return""
}var l=d.trim(j);
l=l.replace(/\./g,"-");
l=l.replace(/\//g,"-");
l=l.replace(/:/g,"-");
return l
});
g.registerHelper("abbreviate",function(h,s){if(!h){return""
}var m=s.hash.maxWords;
var j=s.hash.maxLength;
var l=s.hash.safeString;
var r=d.trim(h);
var p=r.length;
var n=r.substring(0,j).split(" ");
var o=n.slice(0,n.length>m?m:n.length).join(" ");
var q=p!=o.length&&s.fn?s.fn(this):"";
if(l){return new g.SafeString(o)+q
}return o+q
});
g.registerHelper("includeClientLib",function(j,h){return""
});
g.registerHelper("if-wcm-mode",function(j,h){return""
});
g.registerHelper("getContextPath",function(l,j){var h="";
if(Granite&&Granite.HTTP.getContextPath()){h=Granite.HTTP.getContextPath()
}return h
})
})(Handlebars,moment,SCF,$CQ,_,CQ);
(function(f,e,b,g,d){var c=e.View.extend({viewName:"Login",tagName:"div",className:"scf-login",init:function(){this._isReady=false;
this.listenTo(this.model,this.model.events.LOGGED_IN_SUCCESS,this.render);
this.listenTo(this.model,this.model.events.LOGGED_OUT,this.render)
},loginAction:function(){if(this.model.get("loggedIn")){this.$el.children(".login-dialog").hide();
this.logout()
}else{var h=this.$el.children(".login-dialog").toggle();
h.find("input:first").focus()
}},logout:function(){this.model.logout()
},login:function(){var j=this.getField("username");
var h=this.getField("password");
if(j===""||h===""){return
}this.model.login(j,h)
}});
var a=e.Model.extend({moderatorCheckAttribute:"moderatorCheck",events:{LOGGED_IN_SUCCESS:"login:success",LOGGED_IN_FAIL:"login:failed",LOGGED_OUT:"logout:success"},initialize:function(h,j){this._isReady=false;
if(g.shared.User.data===undefined||g.shared.User.data===null){this.initUser(j)
}else{this.getLoggedInUser(j)
}},defaults:{loggedIn:false},isReady:function(){return this._isReady
},checkIfModeratorFor:function(j){var h=this.attributes.hasOwnProperty(this.moderatorCheckAttribute)?this.attributes[this.moderatorCheckAttribute]:[];
return this.attributes.loggedIn&&b.contains(h,j)
},checkIfUserCanPost:function(j){var h=this.attributes.hasOwnProperty("mayPost")?this.attributes.mayPost:[];
return this.attributes.loggedIn&&b.contains(h,j)
},setLanguage:function(h){var j=h.preferences&&h.preferences.language?h.preferences.language:"en";
var l=document.documentElement.lang||j;
g.shared.I18n.setLocale(l)
},initUser:function(h){var l=g.shared.HTTP.externalize("/libs/granite/security/currentuser"+g.shared.HTTP.EXTENSION_JSON+"?props=preferences/language");
l=g.shared.HTTP.noCaching(l);
var j=this;
f.ajax({url:l,type:"GET",success:function(m){j.getLoggedInUser(h,m.home);
j.setLanguage(m)
},async:false})
},getLoggedInUser:function(j,h){var l=this;
var n;
if(j.hasOwnProperty(a.moderatorCheckAttribute)){n="?"+a.moderatorCheckAttribute+"=";
b.each(j[a.moderatorCheckAttribute],function(p){n+=p+","
});
n=n.substring(0,n.length-1)
}var o="";
if(h!==undefined){o=h
}else{if(g.shared.User.initialized){o=g.shared.User.data.home
}else{var m=g.shared.User.init();
o=g.shared.User.data.home
}}f.ajax({url:e.config.urlRoot+"/services/social/getLoggedInUser"+n+"&h="+o,xhrFields:{withCredentials:true},type:"GET"}).done(function(p){if(p.name){l.set({loggedIn:true});
l.set(p)
}l._isReady=true;
if(typeof j!=="undefined"&&j.silent){l.trigger("model:loaded",{model:l,silent:true})
}else{l.trigger("model:loaded",{model:l,silent:false})
}})
},logout:function(){var h=this;
f.ajax({url:e.config.urlRoot+"/services/social/logout",xhrFields:{withCredentials:true},type:"GET"}).always(function(){h.clear();
h.trigger(h.events.LOGGED_OUT)
})
},login:function(l,h){var j=this;
f.ajax({url:e.config.urlRoot+"/libs/login.html/j_security_check",xhrFields:{withCredentials:true},data:{j_username:l,j_password:h,j_validate:"true"},type:"POST"}).success(function(m,q,o,p){var n=o.getResponseHeader("Set-Cookie")===null||o.getResponseHeader("Set-Cookie")!=="";
if(!n){this.trigger(this.events.LOGGED_IN_FAIL,{user:l})
}else{j.getLoggedInUser();
j.trigger(j.events.LOGGED_IN_SUCCESS,{user:l})
}})
}});
a.moderatorCheckAttribute="moderatorCheck";
e.LoginView=c;
e.LoginModel=a;
e.registerComponent("login",e.LoginModel,e.LoginView)
})($CQ,SCF,_,CQ,Granite);
(function(l,m,j,d,f){var e=CQ.shared.HTTP.getContextPath();
f.events=f.events||{};
f.events.BOOTSTRAP_REQUEST="scf-bootstrap-request";
f.config.urlRoot=window.location.protocol+"//"+window.location.host;
if(e!==null&&e.length>0){f.config.urlRoot+=e
}var g=function(q){var p=q.model;
if(f.Components[q.type]){var o=q.template?f.findTemplate(q.id,q.template,q.type):f.findTemplate(q.id,q.type);
var n=new f.Components[q.type].View({model:p,el:q.el});
if(q.template){n.template=o
}else{f.Components[q.type].View.prototype.template=o
}n.templateName=q.template||"default";
n.resource=q.id;
l.each(f.loadedComponents,function(r){l.each(r,function(u,y){if(p.attributes.hasOwnProperty("parentId")){if(y===p.attributes.parentId){n.setParent(u.view)
}}else{if(n._parentView===undefined||n._parentView===null){var t=n.$el.parents("[data-component-id][data-scf-component]");
if(t&&t.length===1){var x=t.attr("data-component-id");
var v=t.attr("data-scf-component");
var w=f.loadedComponents[v];
if(w!==undefined){var s=w[x];
if(s!==undefined&&s.hasOwnProperty("view")){n.setParent(s.view)
}}}}}})
});
if(p.cacheFixed){n.render()
}q.view=n
}};
var h=function(p){if(f.Components[p.type]){var o;
var q=p.modelHolder;
var n=f.Components[p.type].Model;
if(q.length>0){var r=m(q[0]).text();
if(r===""){r=q[0].text
}var s=m.parseJSON(r);
p.id=s.id;
o=n.findLocal(p.id);
if(!o){o=f.Components[p.type].Model.createLocally(s)
}}else{o=n.findLocal(p.id);
if(!o){o=f.Components[p.type].Model.find(p.id)
}}p.model=o
}};
var c=function(u,s,r,q){var t=m("script[type='application/json'][id='"+u+"']");
var p={id:u,type:s,template:r,modelHolder:t,el:q};
var o=h(p);
var n=g(p);
return f.addLoadedComponent(s,o,n)
};
var b=function(o){var n={id:o.attr("data-component-id"),type:o.data("scf-component"),template:o.data("scf-template"),modelHolder:m("script[type='application/json'][id='"+o.attr("data-component-id")+"']"),el:o};
return n
};
var a=function(){var o=m("[data-scf-component]");
var q=[],r=[];
o.each(function(s,u){var t=b($(u));
if(!f.loadedComponents[t.type]||!f.loadedComponents[t.type][t.id]){r.push(t)
}q.push(t)
});
if(r.length>0){var n={};
n.silent=true;
n[f.LoginModel.moderatorCheckAttribute]=l.map(q,function(t){var s;
if(t.id.indexOf("/content/usergenerated")===-1){return t.id
}try{s=JSON.parse(t.modelHolder.text())
}catch(u){return false
}if(!(s.hasOwnProperty("sourceComponentId"))){return false
}if(s.sourceComponentId.indexOf("/content/usergenerated")!==-1){return false
}return s.sourceComponentId
});
n[f.LoginModel.moderatorCheckAttribute]=l.compact(n[f.LoginModel.moderatorCheckAttribute]);
if(f.Session){f.Session.getLoggedInUser(n,undefined)
}else{var p=new f.LoginModel({},n);
f.Session=p
}}l.each(r,function(s){h(s)
});
l.each(r,function(s){g(s);
f.addLoadedComponent(s.type,s.model,s.view)
})
};
m(document).ready(a);
if(!j.History.started){j.history.start({pushState:true,hasChange:false})
}$(document).on(f.events.BOOTSTRAP_REQUEST,a);
f.addComponent=function(p){var o=$(p);
if(o.length===0){throw"Could not find requested element on page."
}var n=b(o);
if(n===null){throw"Component is already loaded."
}if(!n.id){throw"Component does not have a data-component-id attribute, which is required"
}if(!n.type){throw"Component does not have a data-scf-component attribute, which is required."
}return c(n.id,n.type,n.template,n.el)
};
f.unloadComponent=function(q,o){var p=f.loadedComponents[o];
if(p===null){throw"Type "+o+" is not registered with SCF."
}var n=f.loadedComponents[o][q];
if(n===null||n===undefined){throw"Could not find component with ID: "+q
}n.view.destroy();
n.model=null;
delete f.loadedComponents[o][q]
}
})(_,$CQ,Backbone,Handlebars,SCF);
(function(e,c,b,d){var a=function(l,h,m,r){var n={};
n=b.extend(h,n);
n=b.extend(this.config,n);
var g=l.get()[0];
if(b.isUndefined(window.CKEDITOR)){SCF.log.error('Rich text editor requested but unable to find CKEDITOR please include client library category: "%s" or disable RTE',"ckeditor");
return
}this.$el=l;
var v=this.$el.data("editorheight");
var q=SCF.config.urlRoot+m.get("id")+SCF.constants.URL_EXT;
var f=m.get("configuration");
f=f&&f.isAttachmentAllowed;
if(n.extraPlugins===undefined){n.extraPlugins=(window.CKEDITOR.config.extraPlugins)?window.CKEDITOR.config.extraPlugins+",":undefined
}var u=n.toolbar[0].items;
var o;
if(m.get("resourceType")==="social/journal/components/hbs/journal"||m.get("resourceType")==="social/calendar/components/hbs/calendar"||m.get("resourceType")==="social/ideation/components/hbs/ideation"||m.get("resourceType")==="social/ideation/components/hbs/idea"||(m.get("resourceType")==="social/calendar/components/hbs/event"||m.get("resourceType")==="social/journal/components/hbs/entry_topic")&&l[0].dataset.rteType!=="comment"){o=u.indexOf("oembed");
if(o===-1){n.toolbar[0].items.push("oembed")
}if(n.extraPlugins===undefined){n.extraPlugins="oembed"
}else{if(n.extraPlugins.length>0&&n.extraPlugins.indexOf("oembed")===-1){n.extraPlugins=n.extraPlugins.concat(",oembed")
}}}else{o=u.indexOf("oembed");
if(o>0){u.splice(o,1)
}}if(f){n.filebrowserUploadUrl=q;
n.uploadUrl=q;
o=u.indexOf("Image");
if(o===-1){n.toolbar[0].items.push("Image")
}if(n.extraPlugins===undefined){n.extraPlugins="image2,uploadimage"
}else{if(n.extraPlugins.length>0&&n.extraPlugins.indexOf("image2,uploadimage")===-1){n.extraPlugins=n.extraPlugins.concat(",image2,uploadimage")
}}}else{o=u.indexOf("Image");
if(o===-1){n.toolbar[0].items.push("Image")
}if(n.extraPlugins===undefined){n.extraPlugins="image2"
}else{if(n.extraPlugins.length>0&&n.extraPlugins.indexOf("image2")===-1){n.extraPlugins=n.extraPlugins.concat(",image2")
}}}var w=c(g).attr("name");
if(b.isEmpty(w)){var t=m.get("id");
var s=t.lastIndexOf("/");
t=t.slice(s+1);
var j=c(g).data("attrib");
t=j+"-"+t;
c(g).attr("name",t);
w=t
}var p=this.$el.data("editorresize");
if(p){n.resize_enabled=true
}if(b.isNumber(v)){n.height=v
}if(!window.CKEDITOR.instances[w]){this.editor=window.CKEDITOR.replace(g,n)
}else{if(this.editor===undefined){this.editor=window.CKEDITOR.instances[w]
}}this.model=m;
if(f){this.editor.on("fileUploadRequest",this.attachFileFromDragAndDrop);
this.editor.on("fileUploadResponse",this.handleFileUploadResponse);
this.changeImagePluginDialog()
}};
a.prototype.destroy=function(){if(this.editor){try{if(this.editor.filter&&this.editor.window&&this.editor.window.getFrame()){this.editor.destroy(true);
this.editor.removeAllListeners()
}else{this.editor.removeAllListeners();
window.CKEDITOR.remove(this.editor);
window.CKEDITOR.fire("instanceDestroyed",null,this.editor)
}}catch(f){SCF.log.error("Couldn't destroy editor: %o",f)
}}delete this.editor;
return
};
a.prototype.getFileIFrameFromDialog=function(h){var r=h;
var m=r.contents;
for(var q=0;
q<m.length;
q++){var l=m[q];
var g=l.id;
if(g=="Upload"){var f=l.elements;
for(var n=0;
n<f.length;
n++){var p=f[n];
var o=p.id;
if(o=="uploadButton"){p.onClick=this.setCustomFileButtonClick;
p["for"]=["Upload","file"]
}if(o=="upload"){p.id="file"
}}}}};
a.prototype.setCustomFileButtonClick=function(s){var o=s.sender["for"];
var p=s.data.dialog;
var l=p.getContentElement(o[0],o[1]);
var m=c("#"+l.domId+" iframe");
var q=m.contents().find("form");
var t=b.bind(function(w){var v;
if(typeof(w.response)!=="object"){v=JSON.parse(w.response)
}else{v=w.response
}var u=v.url;
u=CQ.shared.HTTP.encodePath(u);
p.getContentElement("info","src").setValue(u);
p.selectPage("info");
if(c(".cke_dialog_ui_input_text").length!==0){c(".cke_dialog_ui_input_text").focus()
}},this);
var r=b.bind(function(u){SCF.log.error("Failed to upload file"+u)
},this);
var j;
var n=q.find("input:file");
var h=n[0].files;
var f=(typeof h!="undefined");
if(f){var g=q.attr("action");
a.prototype.attachFile.call(this,h,g,t,r)
}s.stop();
return false
};
a.prototype.handleFileUploadResponse=function(f){f.stop();
var h=f.data;
var j=h.fileLoader.xhr;
var g=j.responseText;
g=JSON.parse(g);
if(typeof(g.response)!=="object"){g.response=JSON.parse(g.response)
}if(j.status==200){h.uploaded=1;
h.url=CQ.shared.HTTP.encodePath(g.response.url);
h.name=g.response.properties.name
}};
a.prototype.attachFileFromDragAndDrop=function(h){var g=h.data.fileLoader;
var j=g.xhr;
var f;
if(window.FormData){f=new FormData()
}if(f){f.append("file",g.file);
f.append("id","nobot");
f.append(":operation","social:uploadImage");
f.append("_charset_","UTF-8");
j.open("POST",g.uploadUrl,true);
j.setRequestHeader("Accept","application/json");
j.withCredentials=true;
j.send(f)
}h.stop()
};
a.prototype.attachFile=function(j,h,l,g){var f;
if(window.FormData){f=new FormData()
}if(f){c.each(j,function(m,n){f.append("file",n)
});
f.append("id","nobot");
f.append(":operation","social:uploadImage");
f.append("_charset_","UTF-8");
c.ajax(h,{dataType:"json",type:"POST",processData:false,contentType:false,xhrFields:{withCredentials:true},data:f,success:l,error:g})
}};
a.prototype.changeImagePluginDialog=function(){if(!a.isImageDialogDefinitionChanged){a.isImageDialogDefinitionChanged=true;
var f=this;
window.CKEDITOR.on("dialogDefinition",function(g){var h=g.data.name;
if(h=="image2"){f.getFileIFrameFromDialog(g.data.definition)
}})
}};
a.prototype.config={toolbar:[{name:"basicstyles",items:["Bold","Italic","Underline","NumberedList","BulletedList","Outdent","Indent","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","TextColor"]}],autoParagraph:false,autoUpdateElement:false,removePlugins:"elementspath",resize_enabled:false};
a.prototype.setValue=function(f){this.editor.setData(f)
};
a.prototype.getValue=function(){return this.editor.getData()
};
a.prototype.focus=function(){return this.editor.focus()
};
a.isImageDialogDefinitionChanged=false;
SCF.registerFieldType("ckeditor",a);
SCF.registerFieldType("rte",a)
})(Backbone,$CQ,_,Handlebars);
(function(b,d,g,f,c){var a=function(h,l,j){this.containerEl=h;
var n=d(h).data("tag-filter");
var m=d(h).data("tag-limit");
d(h).tagit({fieldName:name,allowSpaces:false,placeholderText:CQ.I18n.getMessage("Add a tag"),animate:false,minLength:2,removeConfirmation:true,showAutocompleteOnFocus:false,tagSource:function(p,o){d.ajax({url:c.config.urlRoot+"/services/tagfilter",data:{term:p.term,tagfilter:n,tagFilterLimit:m,pagePath:CQ.shared.HTTP.getPath(),_charset_:"UTF-8"},dataType:"json",success:function(q){o(d.map(q,function(r){return{label:r.label,value:r.value,id:r.tagid}
}))
}})
}});
if(!b.isEmpty(j.get("tags"))){d.each(j.get("tags"),function(o,p){d(h).tagit("createTag",p.title,p.tagId,p.value)
})
}};
a.prototype.getValue=function(){var h=[];
d(this.containerEl).find("li").each(function(){var l=$(this);
var j=l.find("input").attr("value");
if(!b.isEmpty(j)){h.push(j)
}});
return h
};
a.prototype.setValue=function(){};
a.prototype.focus=function(){d(this.el).focus()
};
a.prototype.destroy=function(){};
var e=function(q,m,n){var p=function(u){var s={};
for(var t in u){s[t]=f.compile(u[t])
}return s
};
this.modelTags=n.get("tags");
this.templatesSource=this.defaultTemplates;
if(m&&m.hasOwnProperty("templates")){this.templatesSource=b.extend(this.defaultTemplates,m.templates)
}this.compiledTemplates=p(this.templatesSource);
var j=q.get()[0];
var h=d(j).data("tag-filter");
var l=d(j).data("tag-limit");
var r=e.tagsByFilterVal[h];
if(!r){var o=this;
d.ajax({url:c.config.urlRoot+"/services/tagfilter",data:{tagfilter:h,tagFilterLimit:l},dataType:"json",async:false,success:function(s){r=s;
e.tagsByFilterVal[h]=r;
o.initTagFields(r,j)
}})
}else{this.initTagFields(r,j)
}};
e.prototype.initTagFields=function(j,p){var q=d(this.compiledTemplates.inputField(j));
this.selectedTags={};
var o=this;
var n=d(p);
n.after(q);
var h=n.prop("attributes");
d.each(h,function(){q.attr(this.name,this.value)
});
q.removeAttr("data-attrib");
var m=d(this.compiledTemplates.tagsContainer(this.modelTags));
if(!b.isUndefined(this.modelTags)&&this.modelTags!==null&&this.modelTags.hasOwnProperty("length")){for(var l=0;
l<this.modelTags.length;
l++){this.selectedTags[this.modelTags[l].tagId]=this.modelTags[l]
}}q.after(m);
m.find(".scf-js-remove-tag").click(function(s){var r=d(s.target).closest("[data-attrib]");
delete o.selectedTags[r.attr("data-attrib")];
r.remove()
});
n.remove();
q.change(function(){d(q).find("option:selected").each(function(){var r=d(this).text();
var s=d(this).val();
d(this).removeAttr("selected");
if(s in o.selectedTags){return
}var t=d(o.compiledTemplates.tag({tagid:s,label:r}));
m.append(t);
o.selectedTags[s]=r;
t.find(".scf-js-remove-tag").click(function(){t.remove();
delete o.selectedTags[s]
})
});
d(d(this).find("option[disabled]")[0]).removeAttr("disabled").attr("selected","selected").attr("disabled","disabled")
})
};
e.prototype.getValue=function(){var h=[];
for(var j in this.selectedTags){h.push(j)
}return h
};
e.prototype.setValue=function(){if(tags instanceof Array){for(var j;
j<tags.length;
j++){var h=tags[j];
this.selectedTags[h.tagId]=h.title
}}};
e.prototype.focus=function(){d(this.el).focus()
};
e.prototype.destroy=function(){};
e.prototype.defaultTemplates={inputField:'<select size="1"><option disabled selected>add a tag</option>{{#each this}}<option value="{{tagid}}">{{label}}</option>{{/each}}</select>',tagsContainer:'<ul class="scf-horizontal-tag-list">{{#each this}}<li class="scf-selected-tag " data-attrib="{{tagId}}"><span class="scf-js-remove-tag scf-remove-tag"></span> {{title}}</li>{{/each}}</div>',tag:'<li class="scf-selected-tag "><span class="scf-js-remove-tag scf-remove-tag"></span> {{label}}</li>'};
e.tagsByFilterVal={};
c.registerFieldType("tags",e);
c.registerFieldType("smarttags",a);
c.TagManager=e;
c.SmartTagManager=a
})(_,$CQ,Backbone,Handlebars,SCF);
(function(a,d,h,f,c){var b=function(n,m,l){var j=d(n);
var o=m;
j.autocomplete({source:function(t,p){var r=d(n).val();
var u={operation:"CONTAINS","./@rep:principalName":r};
u=[u];
var v={operation:"like","profile/@givenName":r};
u.push(v);
var s={operation:"like","profile/@familyName":r};
u.push(s);
u=JSON.stringify(u);
var q=c.Context.sitePath+"/configuration.social.0.20.json";
d.ajax({url:q,type:"GET",success:function(x){var w=o+".social.0.20.json";
w=CQ.shared.HTTP.addParameter(w,"filter",u);
w=CQ.shared.HTTP.addParameter(w,"type","users");
w=CQ.shared.HTTP.addParameter(w,"fromPublisher","true");
w=CQ.shared.HTTP.addParameter(w,"_charset_","utf-8");
w=CQ.shared.HTTP.addParameter(w,"groupId","community-"+x.siteId+"-members");
$.get(w,function(y){var z=y.items;
j.data("lastQueryResult",z);
p(z)
})
}})
},minLength:3,change:function(p,q){l.model.set("composedForValid",l.validateUser(j.val()))
},select:function(p,q){l.model.set("composedForValid",true);
d(this).val(q.item.authorizableId);
return false
},setvalue:function(p){this.element.val(p);
this.input.val(p);
d(this).val(p)
}}).data("uiAutocomplete")._renderItem=function(p,q){if(q.avatarUrl){return d("<li></li>").append("<a><img src='"+q.avatarUrl+"' width='30' height='30'/>&nbsp;"+q.name+"</a>").data("item.autocomplete",q).appendTo(p)
}else{return d("<li></li>").append("<a>"+q.name+"</a>").data("item.autocomplete",q).appendTo(p)
}}
};
var e=function(m,l,j){this.$el=d(m);
this.model=j;
this.config=l;
this.modelId=this.model.get("forumId");
if(a.isEmpty(this.modelId)){this.modelId=this.model.get("id")
}b(d(m),this.modelId+"/userlist",this)
};
var g=function(j,m){for(var l in j){if(j[l].authorizableId===m){return true
}}return false
};
e.prototype.validateUser=function(j){var l=false;
if(j.trim().length===0){return true
}if(this.$el.data("lastQueryResult")){if(g(this.$el.data("lastQueryResult"),j)){l=true
}}if(!l){var m=this.searchUsers(j);
l=g(m,j)
}return l
};
e.prototype.searchUsers=function(l){var m=this.modelId+"/userlist";
var j=m+".social.0.20.json?search="+l+"&showUsers=true";
var n;
$.get(j,function(o){n=o.items
});
n=n||[];
return n
};
e.prototype.getValue=function(){return this.$el.val()
};
e.prototype.setValue=function(){this.$el.autocomplete().setValue(this.model.get("author").id)
};
e.prototype.focus=function(){d(this.el).focus()
};
e.prototype.destroy=function(){if(this.$el.data("autocomplete")||this.$el.data("lastQueryResult")){this.$el.autocomplete("destroy")
}};
c.registerFieldType("userdropdown",e);
c.UserDropDown=e
})(_,$CQ,Backbone,Handlebars,SCF);
$CQ(document).ready(function(){var f={};
function g(o){var n=o.split(/\s+/);
n.forEach(function(p){p=p.replace(/[\'\"]+/g,"");
f[p]=true
})
}var j=$CQ('[name="related-question-list"]');
var d=j.attr("related-question-list-id");
j.empty();
var b=window.location.href;
var m=$CQ('[data-translate-prop="jcr:title"]').text();
var h=$CQ(".scf-js-topic-details").text();
if(m||h){g(m+" "+h)
}else{$CQ(".topic-list-component").each(function(o,p){var q=$CQ(p).find(".topic-title").find("a").text();
var n=$CQ(p).find(".message").text();
g(q+" "+n)
})
}["read","more"].forEach(function(n){delete f[n]
});
var l="";
for(var a in f){if(!f.hasOwnProperty(a)){continue
}l=l+a+" "
}var e=escape(l);
var c=1800;
if(e.length>c){e=e.substring(0,c);
e=e.replace(/^(.*)%20.*$/,"$1")
}if(typeof(d)!=="undefined"){$CQ.ajax({url:CQ.shared.HTTP.getContextPath()+d+".social.query.json?max-results=8&resource-type=topic&q="+e,dataType:"json",async:true,type:"GET",success:function(p,o){j.empty();
var n=p.items;
$CQ.map(n,function(t){var r=t.friendlyUrl;
var q=b.indexOf(r);
if(q!=-1&&(b.length-q)==r.length){return
}var s=$CQ('<li class="matched-questions"><p class="subject"><a href="'+r+'">'+t.subject+"</a></p></li>");
j.append(s)
})
}})
}});
if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.EQUALS="equals";
CQ_Analytics.Operator.NOT_EQUAL="notequal";
CQ_Analytics.Operator.GREATER="greater";
CQ_Analytics.Operator.GREATER_OR_EQUAL="greaterorequal";
CQ_Analytics.Operator.OLDER="older";
CQ_Analytics.Operator.OLDER_OR_EQUAL="olderorequal";
CQ_Analytics.Operator.LESS="less";
CQ_Analytics.Operator.LESS_OR_EQUAL="lessorequal";
CQ_Analytics.Operator.YOUNGER="younger";
CQ_Analytics.Operator.YOUNGER_OR_EQUAL="youngerorequal";
CQ_Analytics.Operator.CONTAINS="contains";
CQ_Analytics.Operator.BEGINS_WITH="beginswith";
CQ_Analytics.Operator.EXISTS="exists";
CQ_Analytics.Operator.DOES_NOT_EXIST="doesnotexist";
CQ_Analytics.Operator.formatIP=function(b){var c=String(b).match(/^([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)$/);
var a=b;
if(c&&c.length===5){c.shift();
a=[];
while(c.length){a.push(("00"+c.shift()).slice(-3))
}a=a.join(".")
}return a
};
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.EQUALS,"equals","==");
addOperator(CQ_Analytics.Operator.IS,"is","==");
addOperator(CQ_Analytics.Operator.NOT_EQUAL,"is not equal to","!=");
addOperator(CQ_Analytics.Operator.GREATER,"is greater than",">");
addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL,"is equal to or greater than",">=");
addOperator(CQ_Analytics.Operator.OLDER,"is older than",">");
addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL,"is equal to or older than",">=");
addOperator(CQ_Analytics.Operator.LESS,"is less than","<");
addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL,"is equal to or less than","<=");
addOperator(CQ_Analytics.Operator.YOUNGER,"is younger than","<");
addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,"is equal to or younger than","<=");
addOperator(CQ_Analytics.Operator.CONTAINS,"contains",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())!=-1
}return true
}return false
});
addOperator(CQ_Analytics.Operator.BEGINS_WITH,"begins with",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())==0
}return true
}return false
});
addOperator(CQ_Analytics.Operator.EXISTS,"exists",function(s1){return !!s1
});
addOperator(CQ_Analytics.Operator.DOES_NOT_EXIST,"does not exist",function(s1){return !s1
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},setText:function(operator,newText){if(mapping[operator]&&mapping[operator][0]){mapping[operator][0]=newText
}},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){var op=this.getOperation(operator);
op=op?op:operator;
if((!valueFormat||valueFormat==="")&&(op in {"<":1,"<=":1,">":1,">=":1})&&!isNaN(parseFloat(value-0))){valueFormat="parseFloat"
}try{if(object){var toEval="";
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"('"+objectValue+"') "+op+" "+valueFormat+"('"+value+"')"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}();
CQ_Analytics.Utils=new function(){return{registerDocumentEventHandler:function(c,b){var a=window.document[c];
if(typeof window.document[c]!="function"){window.document[c]=b
}else{window.document[c]=function(d){if(a){a(d)
}b(d)
}
}},eventWrapper:function(a){return function(d){var c,b;
if(document.all){c=window.event.keyCode;
b=window.event
}else{c=(typeof(d.which)!="undefined")?d.which:0;
b=d
}if(b){a(b,c)
}}
},loadElement:function(a,b){$CQ("#"+b).load(a)
},loadTeaserElement:function(a,d){var e=$CQ("#"+d).css("height");
var f=$CQ("#"+d).height();
if(f>0){$CQ("#"+d).css("height",f)
}var g=function(o){if(o&&o!=""){var n=$CQ(o).css("display","none");
var h=$CQ("#"+d)[0];
$CQ("#"+d).empty().append(n);
if(h&&h.parentElement){$CQ(h.parentElement).trigger("target-dom-loaded")
}n.fadeIn(function(){if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}})
}else{if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}}};
var j=function(h,n){if(!CQ_Analytics.Utils.teasersCache){CQ_Analytics.Utils.teasersCache={}
}CQ_Analytics.Utils.teasersCache[h]=n
};
var b=function(){if(CQ_Analytics.Utils.teasersCache&&CQ_Analytics.Utils.teasersCache[a]){g(CQ_Analytics.Utils.teasersCache[a])
}else{CQ_Analytics.Utils.teasersLoading=CQ_Analytics.Utils.teasersLoading||{};
if(CQ_Analytics.Utils.teasersLoading[a]){window.setTimeout(function(){CQ_Analytics.Utils.loadTeaserElement(a,d)
},100)
}else{CQ_Analytics.Utils.teasersLoading[a]=true;
l()
}}};
var l=function(){var n=a;
var h=location.href;
if(typeof CQ_CONTENT_PATH!="undefined"){h=CQ_CONTENT_PATH
}var o=CQ.shared.HTTP.getParameter(h,"wcmmode");
if(o){n+=(n.indexOf("?")>0?"&":"?")+"wcmmode="+o
}CQ.shared.HTTP.get(n,function(s,r,p){if(r){var q=p.body;
if(q){q=q.replace(new RegExp("\\n","ig"),"");
q=q.replace(new RegExp("\\r","ig"),"");
j(a,q);
delete CQ_Analytics.Utils.teasersLoading[a];
b()
}}else{j(a,"")
}})
};
var c=$CQ("#"+d).children().length;
if(c>0){var m=0;
$CQ("#"+d).children().fadeOut(function(){var h=$CQ(this);
window.setTimeout(function(){h.remove();
m++;
if(m>=c){b()
}},50)
})
}else{b()
}},clearElement:function(a){if(a){$CQ("#"+a).html("")
}},indexOf:function(d,c){for(var b=0,a=d.length;
b<a;
b++){if(d[b]==c){return b
}}return -1
},load:function(a,c,b){return CQ.shared.HTTP.get(a,c,b)
},post:function(a,d,c,b){return CQ.shared.HTTP.post(a,d,c,b)
},getPagePath:function(){return CQ.shared.HTTP.getPath()
},getPath:function(a){return CQ.shared.HTTP.getPath(a)
},addParameter:function(b,a,c){return CQ.shared.HTTP.addParameter(b,a,c)
},removeParameters:function(a){return CQ.shared.HTTP.removeParameters(a)
},removeAnchor:function(a){return CQ.shared.HTTP.removeAnchor(a)
},getSchemeAndAuthority:function(a){return CQ.shared.HTTP.getSchemeAndAuthority(a)
},internalize:function(a,b){return CQ.shared.HTTP.internalize(b)
},externalize:function(a,b){return CQ.shared.HTTP.externalize(a,b)
},encodePathOfURI:function(a){return CQ.shared.HTTP.encodePathOfURI(a)
},encodePath:function(a){return CQ.shared.HTTP.encodePath(a)
},getContextPath:function(){return CQ.shared.HTTP.getContextPath()
},detectContextPath:function(){return CQ.shared.HTTP.detectContextPath()
},urlEncode:function(h){if(!h){return""
}if(typeof h=="string"){return h
}var c=[];
for(var f in h){var e=h[f],b=encodeURIComponent(f);
var g=typeof e;
if(g=="undefined"){c.push(b,"=&")
}else{if(g!="function"&&g!="object"){c.push(b,"=",encodeURIComponent(e),"&")
}else{if(typeof e=="array"){if(e.length){for(var d=0,a=e.length;
d<a;
d++){c.push(b,"=",encodeURIComponent(e[d]===undefined?"":e[d]),"&")
}}else{c.push(b,"=&")
}}}}}c.pop();
return c.join("")
},getUID:function(){var a=Math.floor(Math.random()*(Math.pow(2,42)-1));
return this.getTimestamp().toString(16)+a.toString(16)
},getTimestamp:function(){var a=new Date();
return a.getTime()
},insert:function(d,c,b){if(!d||isNaN(c)||!b){return d
}var a="";
var f=0;
var e=c;
while(e<d.length){a+=d.substring(f,e)+b;
f+=c;
e+=c
}if(f<d.length){a+=d.substring(f)
}return a
},addListener:function(){if(window.addEventListener){return function(d,b,c,a){d.addEventListener(b,c,(a))
}
}else{if(window.attachEvent){return function(d,b,c,a){d.attachEvent("on"+b,c)
}
}else{return function(){}
}}},removeListener:function(){if(window.removeEventListener){return function(d,b,c,a){d.removeEventListener(b,c,(a))
}
}else{if(window.detachEvent){return function(c,a,b){c.detachEvent("on"+a,b)
}
}else{return function(){}
}}}}
};
CQ_Analytics.ClickstreamcloudRenderingUtils=new function(){return{createLink:function(f,d,b,a){var c=document.createElement("a");
c.href=a;
c.onclick=d;
c.innerHTML=f;
if(b){for(var e in b){if(b.hasOwnProperty(e)){c[e]=b[e]
}}}return c
},createStaticLink:function(d,a,c){var b=document.createElement("a");
b.href=a;
b.innerHTML=d;
b.title=c;
b.alt=c;
return b
},createNameValue:function(b,d,a,e){var c=document.createElement("span");
c.className=a||"ccl-data";
c.innerHTML=b+" = "+d;
c.title=e;
c.alt=e;
return c
},createText:function(d,a,c){var b=document.createElement("span");
b.className=a||"ccl-data";
if(d&&d.indexOf&&((d.indexOf("/home")!=-1&&d.indexOf("/image")!=-1)||(d.indexOf("/")!=-1&&d.indexOf(".png")!=-1))){b.innerHTML='<img src="'+d+'.prof.thumbnail.png" border="0">'
}else{if(d&&d.indexOf&&d.indexOf("www.gravatar.com")!=-1){b.innerHTML='<img src="'+d+'">'
}else{b.innerHTML=d
}}b.title=c;
b.alt=c;
return b
},createEditablePropertySpan:function(b,d){var a="var editSpan = this.nextSibling; this.style.display = 'none'; editSpan.style.display = 'block';";
var e="var editSpan = this.parentNode; var readSpan = this.parentNode.previousSibling;var newValue = this.value;editSpan.style.display = 'none'; readSpan.innerHTML = '"+b+" = '+value; readSpan.style.display = 'block';";
var c=document.createElement("span");
c.innerHTML='<span class="ccl-data" onclick="'+a+'">'+b+" = "+d+"</span>";
c.innerHTML+='<span class="ccl-data" style="display: none;">'+b+' = <input class="ccl-input" type="text" value="'+d+'" onblur="'+e+'"></span>';
c.className="ccl-data";
return c
}}
};
var generateURLSignature=function(a,d,c){if(a&&a.match(/^https?:\/\/maps\.googleapis\.com\//)){var b=a.replace(/^https?:\/\/[^/]*/,"").replace(/&amp;/g,"&");
$CQ.ajax({url:CQ.shared.HTTP.externalize("/etc/cloudsettings/default/contexthub/geolocation.signature.json"),method:"get",dataType:"json",cache:false,data:{url:b}}).done(function(e,h,g){if(g&&g.responseJSON){var f=this.baseURL.replace(/&amp;/g,"&");
f+="&client="+g.responseJSON.client;
f+="&channel="+g.responseJSON.channel;
f+="&signature="+g.responseJSON.signature;
d(f)
}else{if(typeof c==="function"){c()
}}}.bind({baseURL:a})).fail(c)
}else{d(a)
}};
CQ_Analytics.ClientContextUtils=new function(){return{renderStoreProperty:function(f,c,b,d,e,a){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var g=function(){var h=CQ_Analytics.StoreRegistry.getStore(c);
if(h){var j=function(){var o=h.getProperty(b)||a;
var n=$CQ("#"+f);
if(n.attr("contenteditable")&&n.attr("contenteditable")!="inherit"){return
}if(typeof(o)=="string"&&((o.indexOf("/")==0&&(o.toLowerCase().indexOf(".png")!=-1||o.toLowerCase().indexOf(".jpg")!=-1||o.toLowerCase().indexOf(".gif")!=-1)||o.toLowerCase().indexOf("http")==0))){if(!o||o==""){n.children().remove();
if(CQ_Analytics.isUIAvailable){n.html(CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b)
}else{n.html("No "+b)
}}else{var l="";
if(n.parents(".cq-cc-thumbnail").length==0||o.toLowerCase().indexOf("http")==0||o.indexOf("/libs/wcm/mobile")==0){l=o.replace(new RegExp("&amp;","g"),"&")
}else{l="/etc/clientcontext/shared/thumbnail/content.png";
l=CQ.shared.HTTP.addParameter(l,"path",CQ_Analytics.Variables.replaceVariables(o))
}l=CQ_Analytics.Variables.replaceVariables(l);
var m=n.find("div").css("background-image")||"";
if(m.indexOf(l+")")===-1){if(h.fireEvent("beforepropertyrender",h,f)!==false){generateURLSignature(CQ.shared.HTTP.externalize(l),function(p){n.html("");
n.children().remove();
$CQ("<div>").addClass("cq-cc-thumbnail-img").css("background-image","url("+p+")").appendTo(n);
h.fireEvent("propertyrender",h,f)
})
}}}}else{o=CQ_Analytics.Variables.replaceVariables(o);
if(CQ_Analytics.isUIAvailable){o=(!o||o=="")?CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b:o=d+o+e
}else{o=(!o||o=="")?"No "+b:o=d+o+e
}if(n.html()!=o){if(h.fireEvent("beforepropertyrender",h,f)!==false){n.html(o);
h.fireEvent("propertyrender",h,f)
}}}};
if(h.fireEvent("beforeinitialpropertyrender",h,f)!==false){j();
if(h.addListener){h.addListener("update",function(){j()
})
}h.fireEvent("initialpropertyrender",h,f)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(c,g)
})
}},renderStore:function(b,a){if(CQ_Analytics&&CQ_Analytics.CCM&&b&&a){CQ_Analytics.CCM.onReady(function(){var c=function(){var d=CQ_Analytics.StoreRegistry.getStore(a);
if(d){d.divId=b;
var e=function(){if(d.fireEvent("beforerender",d,d.divId)!==false){d.renderer(d,d.divId);
d.fireEvent("render",d,d.divId)
}};
if(d.fireEvent("beforeinitialrender",d,b)!==false){e();
if(d.addListener){d.addListener("update",function(){e()
})
}d.fireEvent("initialrender",d,b)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(a,c)
})
}},storesOptionsProvider:function(){var c=[];
var a=CQ_Analytics.StoreRegistry.getStores();
for(var b in a){c.push({value:b})
}return c
},storePropertiesOptionsProvider:function(c,e){var b=[];
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){var g=a.getPropertyNames();
for(var d=0;
d<g.length;
d++){var f=g[d];
if(!CQ.shared.XSS.KEY_REGEXP.test(f)){var h={value:f};
if(e){h.text=f+" - "+a.getProperty(f)
}b.push(h)
}}}return b
},onStoreRegistered:function(b,c){if(c){var a=CQ_Analytics.StoreRegistry.getStore(b);
if(a){c.call(a,a)
}else{CQ_Analytics.CCM.addListener("storeregister",function(f,d){if(d.getName()==b){c.call(d,d)
}})
}}},onStoreInitialized:function(c,e,b){if(b===true){b=CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY
}var d=function(){var f=CQ_Analytics.StoreRegistry.getStore(c);
if(f.DELAYED_INIT_TIMEOUT){window.clearTimeout(f.DELAYED_INIT_TIMEOUT);
f.DELAYED_INIT_TIMEOUT=null
}if(b>0){f.DELAYED_INIT_TIMEOUT=window.setTimeout(function(){f.DELAYED_INIT_TIMEOUT=null;
e.call(f,"initialize",f)
},b)
}else{e.call(f,"initialize",f)
}};
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){if(a.isInitialized()){d.call(a);
a.addListener("initialize",function(g,f){d.call(f)
})
}else{a.addListener("initialize",function(g,f){d.call(f)
})
}}else{CQ_Analytics.CCM.addListener("storeregister",function(g,f){if(f.getName()==c){CQ_Analytics.ClientContextUtils.onStoreInitialized(c,e,b)
}})
}},init:function(c,b,a){CQ_Analytics.ClientContextMgr.PATH=c;
CQ_Analytics.ClientContextMgr.loadConfig(a,true);
$CQ.ajax({url:CQ.shared.HTTP.externalize(c+"/content/jcr:content/stores.init.js"),cache:false,async:true,dataType:"script",data:{path:b}})
},initUI:function(c,a,b){CQ_Analytics.ClientContextUI.create(c,a,b)
}}
};
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY=200;
CQ_Analytics.Variables=new function(){return{containsVariable:function(a){return CQ_Analytics.Variables.getVariables(a).length>0
},getVariables:function(b){if(!b||typeof(b)!="string"){return[]
}var a=b.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return a?a:[]
},replaceVariables:function(e){if(!e){return e
}var f="";
var d=e;
var g=CQ_Analytics.Variables.getVariables(e);
while(g.length>0&&f.indexOf(g.join())==-1){for(var c=0;
c<g.length;
c++){var b=CQ_Analytics.Variables.getPropertyPath(g[c]);
var a=CQ_Analytics.ClientContext.get(b)||"";
d=CQ_Analytics.Variables.replace(d,b,a)
}f+=g.join();
g=CQ_Analytics.Variables.getVariables(d)
}return d
},getPropertyPath:function(a){if(!a||a.length<2){return null
}return a.substring(2,a.length-1)
},getPropertyName:function(a){var c=CQ_Analytics.Variables.getPropertyPath(a);
if(c){var b=c.split("/");
if(b.length==3){return b[2]
}}return null
},getStoreName:function(a){var c=CQ_Analytics.Variables.getPropertyPath(a);
if(c){var b=c.split("/");
if(b.length>1){return b[1]
}}return null
},replace:function(a,b,c){return a.replace(new RegExp("\\$\\{"+b+"\\}","ig"),c)
}}
};
CQ_Analytics.SessionPersistence=CQ.shared.ClientSidePersistence;
CQ_Analytics.Cookie=CQ.shared.ClientSidePersistence.CookieHelper;
CQ_Analytics.Observable=function(){this.fireEvent=function(d){if(d&&this.listeners&&!this.suppressEvents){d=d.toLowerCase();
var b=Array.prototype.slice.call(arguments,0);
var e=this.listeners.slice(0);
for(var c=0;
c<e.length;
c++){var a=e[c];
if(d==a.event){if(a.fireFn.apply(a.scope||this||window,b)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(c,a,b){this.listeners=this.listeners||new Array();
if(c&&a){this.listeners.push({event:c.toLowerCase(),fireFn:a,scope:b})
}};
CQ_Analytics.Observable.prototype.removeListener=function(c,a){this.listeners=this.listeners||new Array();
if(c&&a){for(var b=0;
b<this.listeners.length;
b++){if(this.listeners[b].event==c&&this.listeners[b].fireFn==a){this.listeners.splice(b,1)
}}}};
CQ_Analytics.Observable.prototype.setSuppressEvents=function(a){this.suppressEvents=a
};
CQ_Analytics.Observable.prototype.listeners=null;
CQ_Analytics.Observable.prototype.suppressEvents=false;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var a={};
return{register:function(b){if(b.STORENAME){a[b.STORENAME]=b
}},getStores:function(){return a
},getStore:function(b){return a[b]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c
}}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(a){return a
};
CQ_Analytics.SessionStore.prototype.getLink=function(a){return a
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a]
}this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(a){if(this.data==null){this.init()
}a=a?a:[];
var b=new Array();
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(a,c)==-1){b.push(c)
}}return b
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(b){if(this.data==null){this.init()
}if(b){var a={};
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(b,c)==-1){a[c]=this.data[c]
}}return a
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(b,a){if(this.data==null){this.init()
}var d=this.data[b];
if(!a){var c=CQ.shared.XSS.getXSSValue(d);
return c
}return d
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(a,b){if(!this.initProperty){this.initProperty={}
}this.initProperty[a]=b
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(a){return this.initProperty?this.initProperty[a]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(c,a){if(c){for(var b in c){this.addInitProperty(b,c[b]);
if(a&&this.data&&this.data[b]===undefined){this.setProperty(b,c[b])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[a]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[a]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(a)&&!$CQ.isFunction(this.data[a])&&(typeof this.data[a])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
if(this.isPersisted(a)){this.persist()
}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
var e=false;
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c;
if(this.isPersisted(a)){e=true
}}}if(e){this.persist()
}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var b=null;
if(this.data){var a=function(e){if(!e||typeof(e)!="string"){return e
}var d=e;
d=d.replace(new RegExp(",","g"),"&#44;");
d=d.replace(new RegExp("=","g"),"&#61;");
d=d.replace(new RegExp("\\|","g"),"&#124;");
return d
};
for(var c in this.data){if(this.isPersisted(c)&&this.data.hasOwnProperty(c)){b=(b===null?"":b+",");
b+=(c+"="+a(this.data[c]))
}}}return b
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(e){var d=function(h){if(!h||typeof(h)!="string"){return h
}var g=h;
g=g.replace(new RegExp("&#44;","g"),",");
g=g.replace(new RegExp("&#61;","g"),"=");
g=g.replace(new RegExp("&#124;","g"),"|");
return g
};
var c={};
var f=e.split(",");
for(var a in f){if(f.hasOwnProperty(a)){var b=f[a].split("=");
if(b.length==2){c[b[0]]=d(b[1])
}}}return c
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(a){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!a){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a];
if(this.isPersisted(a)){this.persist()
}}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContextMgr){CQ_Analytics.ClientContextMgr=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.stores={};
this.data=null;
this.config=null;
this.isConfigLoaded=false;
this.areStoresLoaded=false
};
CQ_Analytics.ClientContextMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ClientContextMgr.prototype.STOREKEY="CLIENTCONTEXT";
CQ_Analytics.ClientContextMgr.prototype.STORENAME="clientcontext";
CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER=1000;
CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH=CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);
CQ_Analytics.ClientContextMgr.prototype.init=function(){if(!this.initialized){this.clientcontext={};
this.clientcontextToServer={}
}var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(b){this.data=this.parse(b)
}else{this.data={}
}this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.ClientContextMgr.prototype.getSessionId=function(){if(!this.data.sessionId){this.setSessionId(CQ_Analytics.Utils.getUID())
}return this.data.sessionId
};
CQ_Analytics.ClientContextMgr.prototype.setSessionId=function(a){if(a){this.setProperty("sessionId",a)
}};
CQ_Analytics.ClientContextMgr.prototype.getVisitorId=function(){return this.data.visitorId
};
CQ_Analytics.ClientContextMgr.prototype.setVisitorId=function(a){this.setProperty("visitorId",a)
};
CQ_Analytics.ClientContextMgr.prototype.getId=function(){var a=this.getVisitorId();
if(!a){return this.getSessionId()
}return a
};
CQ_Analytics.ClientContextMgr.prototype.isAnonymous=function(){var a=this.getVisitorId();
return(!a)
};
CQ_Analytics.ClientContextMgr.prototype.isMode=function(a){return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(a)
};
CQ_Analytics.ClientContextMgr.prototype.get=function(a){if(this.clientcontext==null){this.init()
}if(a){return this.clientcontextToServer
}return this.clientcontext
};
CQ_Analytics.ClientContextMgr.prototype.register=function(c){if(this.clientcontext==null){this.init()
}var a=this;
this.clientcontext[c.getName()]=c.getData();
this.stores[c.getName()]=c;
CQ_Analytics.StoreRegistry.register(c);
var b=this.getStoreConfig(c.getName());
if(b.stats!==false&&b.stats!="false"){this.clientcontextToServer[c.getName()]=c.getData(b.excludedFromStats)
}if(this.initTimer){window.clearTimeout(this.initTimer);
this.initTimer=null
}var d=this.isConfigLoaded&&typeof this.config.initializationEventTimer!=="undefined"?this.config.initializationEventTimer:this.INITIALIZATION_EVENT_TIMER;
this.initTimer=window.setTimeout(function(){a.fireEvent("storesinitialize");
a.areStoresInitialized=true
},d);
c.addListener("update",function(){a.update(c)
});
CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(c);
this.addListener("clear",function(){c.clear()
});
this.fireEvent("storeregister",c);
this.fireEvent("storeupdate",c)
};
CQ_Analytics.ClientContextMgr.prototype.update=function(b){if(this.clientcontext==null){this.init()
}this.clientcontext[b.getName()]=b.getData();
var a=this.getStoreConfig(b.getName());
if(a.stats!==false&&a.stats!="false"){this.clientcontextToServer[b.getName()]=b.getData(a.excludedFromStats)
}this.fireEvent("storeupdate",b)
};
CQ_Analytics.ClientContextMgr.prototype.startPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting()
};
CQ_Analytics.ClientContextMgr.prototype.stopPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting()
};
CQ_Analytics.ClientContextMgr.prototype.post=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.post()
};
CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR()
};
CQ_Analytics.ClientContextMgr.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.ClientContextMgr.prototype.clear=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.fireEvent("clear")
};
CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore=function(a){return this.stores&&this.stores[a]?this.stores[a]:null
};
CQ_Analytics.ClientContextMgr.prototype.loadConfig=function(c,autoConfig){var setConfig=function(ccm,config){if(typeof config==="undefined"){config={}
}ccm.config=config;
ccm.isConfigLoaded=true;
ccm.fireEvent("configloaded");
ccm.fireEvent("storesloaded");
ccm.areStoresLoaded=true
};
if(c){setConfig(this,c)
}else{if(!autoConfig){var params={};
params.path=CQ_Analytics.Utils.getPagePath();
params.cq_ck=new Date().valueOf();
var url=this.CONFIG_PATH;
url+="?"+CQ_Analytics.Utils.urlEncode(params);
CQ_Analytics.Utils.load(url,function(data,status,response){var config={};
try{config=eval("config = "+response.responseText)
}catch(error){}setConfig(this,config)
},this)
}else{setConfig(this,{})
}}};
CQ_Analytics.ClientContextMgr.prototype.getConfig=function(){return this.config
};
CQ_Analytics.ClientContextMgr.prototype.getStoreConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["store"]){return this.config.configs[a]["store"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getEditConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["edit"]){return this.config.configs[a]["edit"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getUIConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["ui"]){return this.config.configs[a]["ui"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getInitialData=function(a){if(this.config&&this.config.data&&this.config.data[a]){return this.config.data[a]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getStores=function(){return this.stores
};
CQ_Analytics.ClientContextMgr.prototype.onReady=function(b,a){if(b){if(this.areStoresLoaded){b.call(a)
}else{this.addListener("storesloaded",b,a)
}}};
CQ_Analytics.ClientContextMgr=new CQ_Analytics.ClientContextMgr();
CQ_Analytics.CCM=CQ_Analytics.ClientContextMgr;
CQ_Analytics.ClickstreamcloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ContextCloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ClientContextMgr.PATH=null;
CQ_Analytics.ClientContextMgr.getClientContextURL=function(a){return CQ_Analytics.ClientContextMgr.PATH+a
};
window.setTimeout(function(){CQ_Analytics.CCM.init()
},1);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.ClientContextMgr){delete CQ_Analytics.ClientContextMgr[b]
}CQ_Analytics.ClientContextMgr=null
}catch(a){}CQ_Analytics.CCM=null
})
}if(window.CQ_Analytics&&window.CQ_Analytics.ClientContextMgr&&!window.CQ_Analytics.ClientContextMgr.ServerStorage){CQ_Analytics.ClientContextMgr.ServerStorage=function(){this.posting=false;
this.initialized=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD=1;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER=2;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE=4;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER=600;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER=60;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE=6;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH="/var/statistics/";
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init=function(){if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)){var a=this;
var b=function(){a.timer=window.setInterval(function(){try{var d=parseInt(a.data.lastPost);
var f=false;
if(isNaN(d)){f=true
}else{var e=new Date().getTime();
if(e>d+CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER*1000){f=true
}}}catch(c){}if(f){a.post()
}},CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER*1000)
};
b.call(this)
}this.initialized=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode=function(a){return(CQ_Analytics.CCM.POST_MODE&a)>0
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration=function(a){if(!this.initialized){this.init()
}if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)){a.addListener("persist",function(){CQ_Analytics.ClientContextMgr.ServerStorage.post(a)
})
}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting=function(){this.posting=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting=function(){this.posting=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post=function(d,f){if(this.posting||f){try{var g=this.getCCMToJCR(d);
var e=CQ_Analytics.Utils.getTimestamp();
g["./jcr:primaryType"]="nt:unstructured";
g["./sessionId"]=CQ_Analytics.CCM.getSessionId();
var c=this.POST_PATH+"clientcontext/";
if(CQ_Analytics.CCM.isAnonymous()){var a=CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(),2,"/");
c+="anonymous/"+a+"/"+e
}else{c+="users/"+CQ_Analytics.CCM.getId()+"/"+e
}CQ_Analytics.Utils.post(c,null,g);
this.lastPost=e
}catch(b){}}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR=function(g){var c=CQ_Analytics.CCM.get(true);
var e={};
for(var j in c){if(!g||j==g){var a=c[j],b=encodeURIComponent(j);
var f=typeof a;
if(f=="object"){for(var d in a){var h=a[d];
d=d.replace(":","/");
e["./"+j+"/./"+d]=h
}}else{e["./"+j]=a
}}}return e
};
CQ_Analytics.ClientContextMgr.ServerStorage=new CQ_Analytics.ClientContextMgr.ServerStorage();
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;
CQ_Analytics.ClickstreamcloudMgr.POST_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;
CQ_Analytics.ClickstreamcloudMgr.POST_PATH=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH
}CQ_Analytics.Percentile={};
CQ_Analytics.Percentile.matchesPercentiles=function(b){var d=ClientContext.get("/surferinfo/percentile");
if(!d){d=Math.round(Math.random()*100);
ClientContext.set("/surferinfo/percentile",d)
}else{d=Number(d)
}for(var c=0;
c<b.length;
c++){var a=b[c];
if((Number(a.start)<=d)&&(d<Number(a.end))){return true
}}return false
};
if(!CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr=function(){this.SEGMENTATION_ROOT="/etc/segmentation";
this.SEGMENT_SELECTOR=".segment.js";
this.SEGMENTATION_SCRIPT_LOADER="cq-segmentation-loader";
this.segments={};
this.boosts={};
var a=this;
this.fireUpdate=function(){a.fireEvent("update")
};
this.init()
};
CQ_Analytics.SegmentMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SegmentMgr.prototype.STORENAME="segments";
CQ_Analytics.SegmentMgr.prototype.register=function(a,c,b){this.segments[a]=c;
if(this.rulesCache&&this.rulesCache[a]){this.rulesCache[a]=false
}this.boosts[a]=!isNaN(b)?parseInt(b):0;
this.fireUpdate()
};
CQ_Analytics.SegmentMgr.prototype.resolveArray=function(e,g,b){g=g||CQ_Analytics.ClientContextMgr.get();
if(!(e instanceof Array)){return this.resolve(e,g)
}b=(b=="AND"?"AND":"OR");
var a=(b=="AND");
for(var d=0;
d<e.length;
d++){var f=e[d];
var c=this.resolve(f,g);
if(b=="AND"){if(c!==true){return c
}}else{if(c===true){return true
}}}return a
};
CQ_Analytics.SegmentMgr.prototype.resolve=function(segmentPath,clientcontext){clientcontext=clientcontext||CQ_Analytics.ClientContextMgr.get();
if(!segmentPath){return false
}if(segmentPath instanceof Array){return this.resolveArray(segmentPath,clientcontext)
}if(segmentPath.indexOf(this.SEGMENTATION_ROOT)!=0){return false
}if(segmentPath==this.SEGMENTATION_ROOT){return true
}if(!this.segments[segmentPath]){return true
}var parent=segmentPath.substring(0,segmentPath.lastIndexOf("/"));
if(parent.indexOf(this.SEGMENTATION_ROOT)==0){var pres=this.resolve(parent,clientcontext);
if(pres!==true){return pres
}}var rules="function(clientcontext, contextcloud, clickstreamcloud) { return true ";
rules+=" && ( "+this.segments[segmentPath]+" ) ";
rules+=";}";
var res=true;
try{var f=null;
this.rulesCache=this.rulesCache||{};
if(this.rulesCache[segmentPath]){f=this.rulesCache[segmentPath]
}else{eval("f = "+rules+"");
this.rulesCache[segmentPath]=f
}var e=(f==null||f(clientcontext,clientcontext,clientcontext));
res=res&&(e===true)
}catch(error){return"Unresolved - Error while evaluating segment "+segmentPath+" : "+error.message
}return res
};
CQ_Analytics.SegmentMgr.prototype.getResolved=function(c){c=c||CQ_Analytics.ClientContextMgr.get();
var a=new Array();
for(var b in this.segments){if(this.resolve(b,c)===true){a.push(b)
}}return a
};
CQ_Analytics.SegmentMgr.prototype.getMaxBoost=function(e,g){if(!(e instanceof Array)){return this.getBoost(e)
}var c=0;
for(var d=0;
d<e.length;
d++){var f=e[d];
if(this.resolve(f,g)===true){var a=this.boosts[f]||0;
if(a>c){c=a
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getBoost=function(a){if(!(a instanceof Array)){a=[a]
}return this.boosts[a]||0
};
CQ_Analytics.SegmentMgr.prototype.reload=function(path){var url=path;
if(!url){url=this.SEGMENTATION_ROOT
}if(url){if(url.indexOf(this.SEGMENT_SELECTOR)==-1){url+=this.SEGMENT_SELECTOR
}try{url+=(url.indexOf("?")===-1?"?":"&")+"_="+(new Date().getTime());
CQ_Analytics.Utils.load(url,function(config,status,response){if(response&&response.responseText){eval(response.responseText)
}},this);
var response=CQ.HTTP.get(scripts[i].src)
}catch(err){}}};
CQ_Analytics.SegmentMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SegmentMgr.prototype.getProperty=function(a){return a
};
CQ_Analytics.SegmentMgr.prototype.getLink=function(a){return a+".html"
};
CQ_Analytics.SegmentMgr.prototype.getLabel=function(c){if(c){var b=c;
var a=b.lastIndexOf("/");
if(a!=-1){b=b.substring(a+1,b.length)
}var d=this.resolve(c);
if(d===true){return b
}else{if(d!==true){return'<span class="invalid" title="'+d+'" alt="'+d+'">'+b+"</span>"
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getPropertyNames=function(){return this.getResolved()
};
CQ_Analytics.SegmentMgr=new CQ_Analytics.SegmentMgr();
CQ_Analytics.SegmentMgr.loadSegments=function(a){CQ_Analytics.SegmentMgr.areSegmentsLoaded=false;
if(!a||(a.length===0)){CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
CQ_Analytics.SegmentMgr.fireEvent("segmentsload")
}else{$CQ.ajax({url:CQ.shared.HTTP.externalize(a+this.SEGMENT_SELECTOR),dataType:"script",async:true,cache:true}).complete(function(){CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
CQ_Analytics.SegmentMgr.fireEvent("segmentsload")
})
}};
CQ_Analytics.SegmentMgr.renderer=function(a,c){if(a&&a.STORENAME==CQ_Analytics.SegmentMgr.STORENAME){var e=a.getPropertyNames();
var f=[];
f.push("<div>");
for(var d=0;
d<e.length;
d++){var b=e[d];
f.push('<span title="'+a.getProperty(b)+'" ><a href="'+CQ.shared.HTTP.externalize(a.getLink(b))+'"  title="'+a.getProperty(b)+'" >'+a.getLabel(b)+"</a></span>")
}f.push("</div>");
$CQ("#"+c).children().remove();
$CQ("#"+c).append(f.join(""))
}};
CQ_Analytics.ClientContextMgr.addListener("storeupdate",CQ_Analytics.SegmentMgr.fireUpdate);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.SegmentMgr){delete CQ_Analytics.SegmentMgr[b]
}}catch(a){}CQ_Analytics.SegmentMgr=null
})
}if(!CQ_Analytics.StrategyMgr){CQ_Analytics.StrategyMgr=function(){this.strategies={}
};
CQ_Analytics.StrategyMgr.prototype={};
CQ_Analytics.StrategyMgr.prototype.isRegistered=function(a){return !!this.strategies[a]
};
CQ_Analytics.StrategyMgr.prototype.register=function(b,a){if(typeof a=="function"){this.strategies[b]=a
}};
CQ_Analytics.StrategyMgr.prototype.choose=function(b,a){if(a.length==1){return a[0]
}if(this.strategies[b]){return this.strategies[b].call(this,a)
}return null
};
CQ_Analytics.StrategyMgr=new CQ_Analytics.StrategyMgr()
}CQ_Analytics.StrategyMgr.register("clickstream-score",function(h){if(h.length==1){return h[0]
}var a=[];
if(window.CQ_Analytics&&window.CQ_Analytics.TagCloudMgr){var n=CQ_Analytics.TagCloudMgr.getTags();
n=n||{};
var m=-1;
for(var e=0;
e<h.length;
e++){var g=0;
var l=h[e].tags;
if(l){for(var d=0;
d<l.length;
d++){var f=l[d].tagID;
g+=parseInt(n[f])||0
}}if(g==m){a.push(h[e])
}else{if(g>m){a=[];
a.push(h[e]);
m=g
}}}}else{a=h
}if(a.length==1){return a[0]
}var b=null;
if(window.CQ_Analytics&&window.CQ_Analytics.PageDataMgr){b=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!b){b=window.CQ_StrategyRandom
}if(!b){b=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(b)>1){b=1/b
}if(parseFloat(b)==1){b=0
}var c=Math.floor(b*a.length);
return a[c]
});
CQ_Analytics.StrategyMgr.register("first",function(a){return a[0]
});
CQ_Analytics.StrategyMgr.register("random",function(c){var a=null;
if(window.CQ_Analytics&&window.CQ_Analytics.PageDataMgr){a=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!a){a=window.CQ_StrategyRandom
}if(!a){a=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(a)>1){a=1/a
}if(parseFloat(a)==1){a=0
}var b=Math.floor(a*c.length);
return c[b]
});
if(!CQ_Analytics.PageDataMgr){CQ_Analytics.PageDataMgr=function(){};
CQ_Analytics.PageDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PageDataMgr.prototype.STORENAME="pagedata";
CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE="cq-forceexperience";
CQ_Analytics.PageDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PageDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.PageDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.PageDataMgr.prototype.setExperience=function(a){CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,a,"/")
};
CQ_Analytics.PageDataMgr.prototype.getExperience=function(){return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr.prototype.clearExperience=function(){CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr=new CQ_Analytics.PageDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.PageDataMgr)
}CQ_Analytics.BrowserInfo=function(){var g=navigator.userAgent.toLowerCase();
var d=function(b){return b.test(g)
};
var f=function(){if(d(/opera/)){return{browserFamily:"Opera",browserVersion:""}
}if(d(/trident/)){var b={"7.0":"11","6.0":"10","5.0":"9","4.0":"8"};
var l=g.match(/trident\/([0-9\.]*)/);
var j="";
if(l&&l.length>1){j=b[l[1]]
}return{browserFamily:"IE",browserVersion:j}
}if(d(/edge/)){var l=g.match(/edge\/([0-9]*)/);
var j="";
if(l&&l.length>1){j=l[1]
}return{browserFamily:"Edge",browserVersion:j}
}if(d(/chrome/)){return{browserFamily:"Chrome",browserVersion:""}
}if(d(/safari/)){if(d(/applewebkit\/4/)){return{browserFamily:"Safari",browserVersion:"2"}
}if(d(/version\/3/)){return{browserFamily:"Safari",browserVersion:"3"}
}if(d(/version\/4/)){return{browserFamily:"Safari",browserVersion:"4"}
}if(d(/version\/5/)){return{browserFamily:"Safari",browserVersion:"5"}
}if(d(/version\/6/)){return{browserFamily:"Safari",browserVersion:"6"}
}return{browserFamily:"Safari",browserVersion:"7 or higher"}
}if(d(/webkit/)){return{browserFamily:"WebKit",browserVersion:""}
}if(d(/msie/)){if(d(/msie 6/)){return{browserFamily:"IE",browserVersion:"6"}
}if(d(/msie 7/)){return{browserFamily:"IE",browserVersion:"7"}
}if(d(/msie 8/)){return{browserFamily:"IE",browserVersion:"8"}
}if(d(/msie 9/)){return{browserFamily:"IE",browserVersion:"9"}
}if(d(/msie 10/)){return{browserFamily:"IE",browserVersion:"10"}
}return{browserFamily:"IE",browserVersion:"11 or higher"}
}if(d(/gecko/)){if(d(/rv:1\.8/)){return{browserFamily:"Firefox",browserVersion:"2"}
}if(d(/rv:1\.9/)){return{browserFamily:"Firefox",browserVersion:"3"}
}if(d(/rv:2.0/)){return{browserFamily:"Firefox",browserVersion:"4"}
}if(d(/rv:5./)){return{browserFamily:"Firefox",browserVersion:"5"}
}if(d(/rv:6./)){return{browserFamily:"Firefox",browserVersion:"6"}
}if(d(/rv:7./)){return{browserFamily:"Firefox",browserVersion:"7"}
}if(d(/rv:8./)){return{browserFamily:"Firefox",browserVersion:"8"}
}if(d(/rv:9./)){return{browserFamily:"Firefox",browserVersion:"9"}
}return{browserFamily:"Firefox",browserVersion:"10 or higher"}
}var m=d(/adobeair/);
if(m){return{browserFamily:"Adobe AIR",browserVersion:""}
}return{browserFamily:"Unresolved",browserVersion:"Unresolved"}
};
var e=function(){if(d(/windows 98|win98/)){return"Windows 98"
}if(d(/windows nt 5.0|windows 2000/)){return"Windows 2000"
}if(d(/windows nt 5.1|windows xp/)){return"Windows XP"
}if(d(/windows nt 5.2/)){return"Windows Server 2003"
}if(d(/windows nt 6.0/)){return"Windows Vista"
}if(d(/windows nt 6.1/)){return"Windows 7"
}if(d(/windows nt 6.2/)){return"Windows 8"
}if(d(/windows nt 6.3/)){return"Windows 8.1"
}if(d(/windows nt 10.0/)){return"Windows 10"
}if(d(/windows nt 4.0|winnt4.0|winnt/)){return"Windows NT 4.0"
}if(d(/windows me/)){return"Windows ME"
}if(d(/mac os x/)){if(d(/ipad/)||d(/iphone/)){return"iOS"
}return"Mac OS X"
}if(d(/macintosh|mac os/)){return"Mac OS"
}if(d(/android/)){return"Android"
}if(d(/linux/)){return"Linux"
}return"Unresolved"
};
var c=function(){if(d(/ipad/)){return"iPad"
}if(d(/iphone/)){return"iPhone"
}if(d(/mobi/)){return"Mobile"
}return"Desktop"
};
var a=f.call();
this.browserFamily=a.browserFamily;
this.browserVersion=a.browserVersion;
this.OSName=e.call();
this.deviceType=c.call();
this.ua=g;
var h=/^https/i.test(window.location.protocol);
this.screenResolution=screen.width+"x"+screen.height
};
CQ_Analytics.BrowserInfo.prototype={getBrowserName:function(){return this.browserFamily+" "+this.browserVersion
},getBrowserFamily:function(){return this.browserFamily
},getBrowserVersion:function(){return this.browserVersion
},getOSName:function(){return this.OSName
},getScreenResolution:function(){return this.screenResolution
},getDeviceType:function(){return this.deviceType
},getUserAgent:function(){return this.ua
},isMobile:function(a){if(!a){a=this.getDeviceType()
}a=a?a.toLowerCase():"desktop";
return a!="desktop"
},isIE:function(a){return this.getBrowserFamily()=="IE"&&(a?this.getBrowserVersion()==a:true)
},isIE6:function(){return this.isIE("6")
},isIE7:function(){return this.isIE("7")
},isIE8:function(){return this.isIE("8")
},isIE9:function(){return this.isIE("9")
}};
CQ_Analytics.BrowserInfoInstance=new CQ_Analytics.BrowserInfo();
if(!CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr=function(){this.position={x:0,y:0};
this.getPageX=function(c){var b=c.pageX;
if(!b&&0!==b){b=c.clientX||0
}return b
};
this.getPageY=function(b){var c=b.pageY;
if(!c&&0!==c){c=b.clientY||0
}return c
};
var a=this;
this.timer=null;
$CQ(document).bind("mousemove",function(h,g,f,m){var j=h||window.event;
if(j){if(!a.timer){var d=a.getPageX(j);
var l=a.getPageY(j);
a.timer=setTimeout(function(){a.setPosition(d,l);
a.timer=null
},500)
}}});
this.init()
};
CQ_Analytics.MousePositionMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.MousePositionMgr.prototype.STORENAME="mouseposition";
CQ_Analytics.MousePositionMgr.prototype.setPosition=function(a,b){this.position.x=a;
this.position.y=b;
this.fireEvent("update")
};
CQ_Analytics.MousePositionMgr.prototype.getProperty=function(a){return this.position[a]
};
CQ_Analytics.MousePositionMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.MousePositionMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.MousePositionMgr.prototype.getPropertyNames=function(){var a=new Array();
for(var b in this.position){a.push(b)
}return a
};
CQ_Analytics.MousePositionMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.MousePositionMgr.prototype.getData=function(a){return this.position
};
CQ_Analytics.MousePositionMgr.prototype.clear=function(){this.position={}
};
CQ_Analytics.MousePositionMgr=new CQ_Analytics.MousePositionMgr();
CQ_Analytics.CCM.register(CQ_Analytics.MousePositionMgr)
}if(!CQ_Analytics.EventDataMgr){CQ_Analytics.EventDataMgr=function(){};
CQ_Analytics.EventDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.EventDataMgr.prototype.STORENAME="eventdata";
CQ_Analytics.EventDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
if(typeof(this.initProperty)!="undefined"){this.fireEvent("update")
}};
CQ_Analytics.EventDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.EventDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.EventDataMgr=new CQ_Analytics.EventDataMgr();
CQ_Analytics.EventDataMgr.init();
CQ_Analytics.CCM.register(CQ_Analytics.EventDataMgr)
}if(!window.CQ_Context){window.CQ_Context=function(){};
window.CQ_Context.prototype=new CQ_Analytics.Observable();
window.CQ_Context.prototype.getProfile=function(){return(function(){return{getUserId:function(){return this.getProperty("authorizableId")
},getDisplayName:function(){var a=this.getProperty("formattedName");
if(a){return a
}a=this.getProperty("displayName");
if(a){return a
}return this.getUserId()
},getFirstname:function(){return this.getProperty("givenName")
},getLastname:function(){return this.getProperty("familyName")
},getEmail:function(){return this.getProperty("email")
},getProperty:function(a){if(window.CQ_Analytics&&window.CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getProperty(a)
}return""
},getProperties:function(){if(window.CQ_Analytics&&window.CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getData()
}return{}
},getAvatar:function(){return this.getProperty("avatar")
},onUpdate:function(a,b){if(a&&CQ_Analytics&&CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr.addListener("update",a,b||this)
}}}
})()
};
window.CQ_Context=new window.CQ_Context()
}CQ_Analytics.Engine=function(){window.CQ_trackTeasersStats=true;
function m(){return !!(window.CQ&&CQ.WCM&&CQ.WCM.isEditMode())
}function a(){return !!(window.CQ&&CQ.WCM&&CQ.WCM.isPreviewMode())
}function e(q){var o=$CQ.Deferred();
var p=CQ.WCM.getEditable(q);
if(p){o.resolve(p)
}else{CQ.WCM.onEditableReady(q,function(r){o.resolve(r)
})
}return o.promise()
}function h(p,o){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var q=CQ_Analytics.loadedTeasersStack;
if(q){delete CQ_Analytics.loadedTeasersStack;
var s=o;
for(var t=0;
t<q.length;
t++){s=CQ.shared.HTTP.addParameter(s,"path",q[t])
}CQ.shared.HTTP.get(s,function(){})
}}catch(r){}})
}CQ_Analytics.loadedTeasersStack.push(p.path)
}function f(u,t,q){var s="",v;
function o(A,z,B,y){return'<a href="'+z+'" class="cq-teaser-segment-link"><img src="'+B+'" class="cq-teaser-decision-thumbnail '+(y?"cq-teaser-decision-match":"cq-teaser-decision-nomatch")+'"></a>'+A+"<br>"
}for(var r=0;
r<u.length;
r++){var p=u[r];
var x=CQ.shared.HTTP.externalize(p.teaser.path+".html");
if(p.hasOwnProperty("boost")){if(p.noSegment){v=CQ.I18n.getMessage("Experience: {0} - match (no segments, boost = {1})",[p.teaser.title,p.boost])
}else{v=CQ.I18n.getMessage("Experience: {0} - match (boost = {1})",[p.teaser.title,p.boost])
}var w=o(v,x,p.teaser.thumbnail,true);
if(t===p.teaser.path){s+="<b>"+w+"</b>"
}else{s+=w
}}else{if(p.unknownSegment){v=CQ.I18n.getMessage("Experience: {0} - no match (unknown segment)",[p.teaser.title])
}else{v=CQ.I18n.getMessage("Experience: {0} - no match",[p.teaser.title])
}s+=o(v,x,p.teaser.thumbnail,false)
}}s+="<br>";
if(q){s+=CQ.I18n.getMessage("Strategy <b>{0}</b> selected current teaser.",q)
}else{s+=CQ.I18n.getMessage("No strategy configured, used the first match.")
}s+="<br>";
return s
}function n(q,p,o,r){q.done(function(s){if(s.teaserToolTip){s.teaserToolTip.hide();
s.teaserToolTip.remove()
}s.teaserToolTip=new CQ.Ext.Tip({html:f(p,o,r),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"});
s.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(t){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){var u=this.getXY();
s.teaserToolTip.setPosition(u[0]-460,u[1]-100);
s.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(t.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
s.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(t){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
})
}function l(o){o.done(function(p){if(p.teaserToolTip){p.teaserToolTip.hide();
p.teaserToolTip.remove();
p.teaserToolTip=null
}})
}function c(x,w){var s=[];
var u=0;
for(var q=0;
q<x.length;
q++){var p=x[q],t=p.segments;
var o;
if(w){o={teaser:p};
w.push(o)
}var r=!t||t.length===0;
if(r&&o){o.noSegment=true
}if(!r&&CQ_Analytics.SegmentMgr.resolve(t)){r=true;
if(t&&t.length>0){if(!CQ_Analytics.SegmentMgr.segments[t[0]]){r=false;
if(o){o.unknownSegment=true
}}}}if(r){var v=CQ_Analytics.SegmentMgr.getMaxBoost(t);
if(o){o.boost=v
}if(v===u){s.push(p)
}else{if(v>u){s=[];
s.push(p);
u=v
}}}}return s
}var b={};
function g(o,p){CQ_Analytics.Engine.stopTeaserLoader(o);
b[o]=p
}function d(q,p){if(!q||!p){return false
}if(q.length!==p.length){return false
}q.sort();
p.sort();
for(var o=0;
o<q.length;
o++){if(q[o]!==p[o]){return false
}}return true
}var j={};
return{stopTeaserLoader:function(p){var o=p.path||p;
if(!o){return
}var q=b[o];
if(q){CQ_Analytics.SegmentMgr.removeListener("update",q);
delete b[o]
}},resolveTeaser:function(r,q,o){var p=c(r,o);
if(p.length===0){return null
}return CQ_Analytics.StrategyMgr.choose(q,p)||p[0]
},loadTeaser:function(o){var r,q;
if(m()){q=CQ.WCM.getEditablePathFromDOM(document.getElementById(o.targetID));
r=e(q)
}var s=ClientContext.get("campaign");
if(s&&s.isCampaignSelected()&&!a){return
}var p=function(){var v=CQ_Analytics.PageDataMgr.getExperience();
if(v){CQ_Analytics.PageDataMgr.clearExperience();
var w="/_jcr_content/par.html";
if(m()){w+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadElement(v+w,o.targetID);
return
}var u=null;
var t=function(){var K=null;
if(m()){K=[]
}var G=ClientContext.get("campaign"),N;
if(G&&G.isCampaignSelected()){var H=G.data.path,J=G.data["recipe/path"],y=G.data.campaigns||[],z={},M=o.teasers,I;
for(var E=0;
E<M.length;
E++){if(M[E].name==="default"){I=M[E]
}}if(j[o.targetID]&&j[o.targetID][J]){N=j[o.targetID][J]
}else{if(J==="DEFAULT"){N=I
}else{for(var E=0;
E<y.length;
E++){var B=y[E];
if(y[E]["path"]===H){var L=B.experiences;
for(var D=0;
D<L.length;
D++){if(L[D]["path"]===J){if(L[D].hasOwnProperty("segments")){var F=L[D]["segments"];
for(var A=0;
A<F.length;
A++){z[F[A]]=z
}}}}}}for(var E=0;
E<M.length;
E++){var C=M[E];
if(C.hasOwnProperty("segments")&&(C.segments.length===F.length)){if(d(F,C.segments)){N=M[E];
break
}}}}if(!N){N=I
}j[o.targetID]={experience:N}
}}else{N=CQ_Analytics.Engine.resolveTeaser(o.teasers,o.strategy,K)
}if(N){if(!u||u.path!==N.path){u=N;
CQ_Analytics.SegmentMgr.fireEvent("teaser-loaded",{campaignPath:N.campaignPath||"",campaignName:N.campainName||"",experiencePath:N.path||"",segmentName:N.title||"",segments:N.segments||[],targetElement:o.targetID});
var x=N.url;
if(m()){x+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadTeaserElement(x,o.targetID);
if(window.CQ_trackTeasersStats&&o.trackingURL){h(N,o.trackingURL)
}if(r){n(r,K,u.path,o.strategy)
}}}else{if(r){l(r)
}CQ_Analytics.Utils.clearElement(o.targetID);
u=null
}};
t.call();
if(CQ_Analytics.SegmentMgr){if(q){g(q,t)
}CQ_Analytics.SegmentMgr.addListener("update",t)
}if(CQ_Analytics.CampaignMgr){if(CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr.addListener("update",t)
}}};
if(CQ_Analytics.CCM.areStoresInitialized){p.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",p)
}}}
}();
window.CQ_trackTeasersStats=true;
function initializeTeaserLoader(b,f,g,e,a,d){e=!!(CQ.Ext&&(e=="true"||e===true));
if(window.CQ_Analytics){var c=function(){var o="/_jcr_content/par.html";
if(e){o+="?wcmmode=disabled"
}var m=CQ_Analytics.PageDataMgr.getExperience();
if(m){CQ_Analytics.PageDataMgr.clearExperience();
CQ_Analytics.Utils.loadElement(m+o,g);
return
}var n=function(r){var t="";
var x=new Array();
if(CQ_Analytics.SegmentMgr){var v=0;
for(var s=0;
s<b.length;
s++){var u=CQ.shared.HTTP.externalize(b[s].path+".html");
if(!b[s]["segments"]||b[s]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[s]["segments"])===true){var q=CQ_Analytics.SegmentMgr.getMaxBoost(b[s]["segments"]);
var w=[b[s]["title"],q,b[s].thumbnail,u];
if(r==b[s].path){t+=CQ.I18n.getMessage('<b><a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )</b><br>',w)
}else{t+=CQ.I18n.getMessage('<a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )<br>',w)
}if(q==v){x.push(b[s])
}else{if(q>v){x=new Array();
x.push(b[s]);
v=q
}}}else{var w=[b[s]["title"],b[s].thumbnail,u];
t+=CQ.I18n.getMessage('<a href="{2}" class="cq-teaser-segment-link"><img src="{1}" class="cq-teaser-decision-thumbnail cq-teaser-decision-nomatch"></a>Experience: {0} - no match<br>',w)
}}}t+=CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>",f);
return t
};
var l=null;
var h=null;
var j=function(){var w=new Array();
if(CQ_Analytics.SegmentMgr){var u=0;
for(var s=0;
s<b.length;
s++){if(!b[s]["segments"]||b[s]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[s]["segments"])===true){var p=CQ_Analytics.SegmentMgr.getMaxBoost(b[s]["segments"]);
if(p==u){w.push(b[s])
}else{if(p>u){w=new Array();
w.push(b[s]);
u=p
}}}}}if(w.length>0){var v=w[0];
if(CQ_Analytics.StrategyMgr){var t=CQ_Analytics.StrategyMgr.choose(f,w);
if(t!=null){v=t
}}if(!l||l.path!=v.path){l=v;
var q=v.path+o;
q=CQ.shared.HTTP.addSelectors(q,CQ.shared.HTTP.getSelectors(window.location.href));
CQ_Analytics.Utils.loadTeaserElement(q,g);
if(window.CQ_trackTeasersStats&&a){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var x=CQ_Analytics.loadedTeasersStack;
if(x){delete CQ_Analytics.loadedTeasersStack;
var z=a;
for(var A=0;
A<x.length;
A++){z=CQ.shared.HTTP.addParameter(z,"path",x[A])
}CQ.shared.HTTP.get(z,function(){})
}}catch(y){}})
}CQ_Analytics.loadedTeasersStack.push(v.path)
}if(e){if(d){var r=CQ.WCM.getEditable(d);
if(r){if(r&&r.teaserToolTip){r.teaserToolTip.hide();
r.teaserToolTip.remove();
r.teaserToolTip=null
}else{r.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(x){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){if(!r.teaserToolTip){r.teaserToolTip=new CQ.Ext.Tip({html:n(l.path),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"})
}var y=this.getXY();
r.teaserToolTip.setPosition(y[0]-460,y[1]-100);
r.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(x.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
r.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(x){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
}}}}}}else{if(e){var r=CQ.WCM.getEditable(d);
if(r&&r.teaserToolTip){r.teaserToolTip.hide();
r.teaserToolTip.remove();
r.teaserToolTip=null
}}CQ_Analytics.Utils.clearElement(g);
l=null
}};
j.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",j)
}};
if(CQ_Analytics.CCM.areStoresInitialized){c.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",c)
}}}window.CQ_trackLandingPagesStats=true;
function initializeLandingPageLoader(f,d,e,c,a){c=CQ.Ext&&(c=="true"||c===true);
if(window.CQ_Analytics){var g=".html";
var b=function(){var j=null;
var h=function(){var m=new Array();
if(window.CQ_Analytics&&window.CQ_Analytics.SegmentMgr){var t=0;
for(var q=0;
q<f.length;
q++){if(!f[q]["segments"]||f[q]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(f[q]["segments"])===true){var w=CQ_Analytics.SegmentMgr.getMaxBoost(f[q]["segments"]);
if(w==t){m.push(f[q])
}else{if(w>t){m=new Array();
m.push(f[q]);
t=w
}}}}}if(m.length>0){var p=m[0];
if(window.CQ_Analytics&&window.CQ_Analytics.StrategyMgr){var u=CQ_Analytics.StrategyMgr.choose(d,m);
if(u!=null){p=u
}}if(!j||j.path!=p.path){var y=j;
j=p;
var o=CQ.shared.HTTP.get(p.path+g);
var z=o.responseText;
var r=function(L,B){var I="";
if(L&&L.indexOf('id="'+B+'"')!=-1){var H=L.indexOf('id="'+B+'"');
var C=L.substring(0,H).lastIndexOf("<div");
var G=L.substring(C);
var K=G.split(new RegExp("<div","ig"));
var E=0;
for(var F=0;
F<K.length;
F++){E++;
var J=K[F].split(new RegExp("</div","ig"));
for(var D=1;
D<J.length;
D++){E--;
if(E==1){var A=K[F].lastIndexOf("</div")+6;
A=G.indexOf(K[F])+A;
G=G.substring(0,A);
G=G.substring(G.indexOf(">")+1,G.lastIndexOf("</div"));
return G
}}}}return""
};
z=r(z,e);
var v=$CQ("#"+e)[0];
var s=function(C,A){if(c){var D=CQ.WCM.getEditables();
for(var E in D){var B=D[E];
if(!C||B.path.indexOf(C)!=-1){B.hide();
B.remove()
}}}};
var n=document.createElement("div");
n.innerHTML=z;
if(y){$CQ("object",v).parent().fadeOut("slow");
$CQ("img",v).fadeOut("slow");
$CQ(v).slideUp("slow",function(){s(y.path,false);
$CQ(v).children().remove();
var A=v.insertBefore(n,v.firstChild);
$CQ(v).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(n))
}})
})
}else{var l=v.insertBefore(n,v.firstChild);
$CQ(v).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(n))
}})
}try{if(window.CQ_trackLandingPagesStats&&a){if(!CQ_Analytics.loadedLandingPagesStack){CQ_Analytics.loadedLandingPagesStack=[];
$CQ(window).unload(function(){try{var D=CQ_Analytics.loadedLandingPagesStack;
if(D){delete CQ_Analytics.loadedLandingPagesStack;
var B=a;
for(var C=0;
C<D.length;
C++){B=CQ.shared.HTTP.addParameter(B,"path",D[C])
}CQ.shared.HTTP.get(B,function(){})
}}catch(A){}})
}CQ_Analytics.loadedLandingPagesStack.push(p.path)
}}catch(x){}}}else{CQ_Analytics.Utils.clearElement(e);
j=null
}};
h.call();
if(window.CQ_Analytics&&window.CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",h)
}};
if(window.CQ_Analytics&&window.CQ_Analytics.ClickstreamcloudMgr){if(CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded){b.call(this)
}else{CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",b)
}}}}CQ_Analytics.PersistedJSONStore=function(){};
CQ_Analytics.PersistedJSONStore.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY="";
CQ_Analytics.PersistedJSONStore.prototype.STORENAME="";
CQ_Analytics.PersistedJSONStore.prototype.init=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(!b||b==""){this.data={};
for(var c in this.initProperty){this.data[c]=this.initProperty[c]
}}else{this.data=this.parse(b)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PersistedJSONStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.PersistedJSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.PersistedJSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.PersistedJSONStore.getInstance=function(a,c){var b=new CQ_Analytics.PersistedJSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.PersistedJSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.PersistedJSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.JSONStore=function(){};
CQ_Analytics.JSONStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.JSONStore.prototype.STOREKEY="";
CQ_Analytics.JSONStore.prototype.STORENAME="";
CQ_Analytics.JSONStore.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.JSONStore.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.JSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.JSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.JSONStore.getInstance=function(a,c){var b=new CQ_Analytics.JSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.JSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.JSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.PersistedJSONPStore=function(){};
CQ_Analytics.PersistedJSONPStore.prototype=new CQ_Analytics.PersistedJSONStore();
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.PersistedJSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks={};
CQ_Analytics.PersistedJSONPStore.getInstance=function(e,f,b,a,d){if(e&&f){try{var g=new CQ_Analytics.PersistedJSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f)
}if(!a){g.load(f,b,d)
}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.PersistedJSONPStore.registerNewInstance=function(d,e,b,f){if(!e){return null
}if(!d){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1)
}}else{d=e
}}var c=CQ_Analytics.PersistedJSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
CQ_Analytics.JSONPStore=function(){};
CQ_Analytics.JSONPStore.prototype=new CQ_Analytics.JSONStore();
CQ_Analytics.JSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.JSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.JSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.JSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.JSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.JSONPStore.JSONPCallbacks={};
CQ_Analytics.JSONPStore.getInstance=function(e,f,b,a,d){if(e){try{var g=new CQ_Analytics.JSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f);
if(!a){g.load(f,b,d)
}}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.JSONPStore.registerNewInstance=function(d,e,b,f){if(!d&&e){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1);
d=d.replace(new RegExp(":","ig"),"_")
}}else{d=e
}}var c=CQ_Analytics.JSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(f,c){if(f){if(f.indexOf("/")!=0){f="/"+f
}var d=f.split("/")[1];
var b=f.substring(f.indexOf("/"+d)+d.length+2,f.length);
var a=CQ_Analytics.CCM.getRegisteredStore(d);
if(a){if(b){var e=a.getProperty(b);
if(e&&c){e=CQ_Analytics.Variables.replaceVariables(e)
}return e
}return a
}}return null
},set:function(e,d){if(e){if(e.indexOf("/")!=0){e="/"+e
}var c=e.split("/")[1];
var b=e.substring(e.indexOf("/"+c)+c.length+2,e.length);
var a=CQ_Analytics.CCM.getRegisteredStore(c);
if(a){if(b){a.setProperty(b,d)
}}}},clear:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].clear){a[b].clear()
}}}},reset:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].reset){a[b].reset()
}}}},persist:function(a){CQ_Analytics.ClientContextMgr.ServerStorage.post(a,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(CQ_Analytics&&!CQ_Analytics.SalesforceProfileDataMgr){CQ_Analytics.SalesforceProfileDataMgr=function(){};
CQ_Analytics.SalesforceProfileDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SalesforceProfileDataMgr.prototype.STOREKEY="SALESFORCEPROFILEDATA";
CQ_Analytics.SalesforceProfileDataMgr.prototype.STORENAME="salesforceprofile";
CQ_Analytics.SalesforceProfileDataMgr.prototype.lastUid="";
CQ_Analytics.SalesforceProfileDataMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SalesforceProfileDataMgr.prototype.init=function(){if(!this.data){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}}};
CQ_Analytics.SalesforceProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/salesforceprofiledata/loader.json")
};
CQ_Analytics.SalesforceProfileDataMgr.prototype.handleUpdateProfileDataMgr=function(){var a=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(a!=CQ_Analytics.SalesforceProfileDataMgr.lastUid){CQ_Analytics.SalesforceProfileDataMgr.loadProfile(a);
CQ_Analytics.SalesforceProfileDataMgr.fireEvent("update")
}};
CQ_Analytics.SalesforceProfileDataMgr.prototype.loadProfile=function(authorizableId){CQ_Analytics.SalesforceProfileDataMgr.lastUid=authorizableId;
var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.SalesforceProfileDataMgr=new CQ_Analytics.SalesforceProfileDataMgr();
CQ_Analytics.CCM.register(CQ_Analytics.SalesforceProfileDataMgr)
}if(CQ_Analytics&&!CQ_Analytics.CampaignSeedMgr){CQ_Analytics.CampaignSeedMgr=CQ_Analytics.JSONStore.registerNewInstance("campaignseed",{});
CQ_Analytics.CampaignSeedMgr.SERVICE_PATH="/_jcr_content.campaign.seeddata.json/{seed}";
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ProfileDataMgr.addListener("update",function(){var a=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(a!=this.lastUid){this.lastUid=a;
this.clear();
this.fireEvent("update")
}},CQ_Analytics.CampaignSeedMgr)
},CQ_Analytics.CampaignSeedMgr)
}if(CQ_Analytics&&!CQ_Analytics.CampaignMetadataMgr){CQ_Analytics.CampaignMetadataMgr=CQ_Analytics.JSONStore.registerNewInstance("campaignmetadata",{});
CQ_Analytics.CampaignMetadataMgr.SERVICE_PATH="/_jcr_content.campaign.metadata.json";
CQ_Analytics.CampaignMetadataMgr.setNLIntegrationURL=function(a){this.baseURL=CQ_Analytics.Utils.externalize(a);
this.serviceURL=a+this.SERVICE_PATH;
$CQ.post(this.serviceURL,{},function(e){CQ_Analytics.CampaignMetadataMgr.initJSON(e);
CQ_Analytics.CampaignMetadataMgr.init();
CQ_Analytics.CampaignMetadataMgr._isDataAvailable=true;
if(CQ&&CQ.WCM){var f=CQ.WCM.getEditables();
for(var d in f){if(f.hasOwnProperty(d)){var c=f[d].element;
CQ.personalization.variables.Variables.injectSpans(c,CQ.personalization.variables.Variables.SCANNED_TAGS,"cq-variable-code");
CQ.personalization.variables.Variables.updateVariables(c,CQ_Analytics.CampaignSeedMgr.getData())
}}}if(CQ_Analytics.CampaignMetadataMgr._onDataAvailable){var b=CQ_Analytics.CampaignMetadataMgr._onDataAvailable.fct;
b(CQ_Analytics.CampaignMetadataMgr._onDataAvailable.data);
CQ_Analytics.CampaignMetadataMgr._onDataAvailable=null
}})
};
CQ_Analytics.CampaignMetadataMgr._isDataAvailable=false;
CQ_Analytics.CampaignMetadataMgr._onDataAvailable=null;
CQ_Analytics.CampaignMetadataMgr.whenDataAvailable=function(a,b){if(CQ_Analytics.CampaignMetadataMgr._isDataAvailable){a(b)
}else{CQ_Analytics.CampaignMetadataMgr._onDataAvailable={fct:a,data:b}
}};
CQ_Analytics.CampaignMetadataMgr.rawJSON=undefined;
CQ_Analytics.CampaignMetadataMgr.getRawJSON=function(){return this.rawJSON
};
CQ_Analytics.CampaignMetadataMgr.initJSON=function(c,d){if(!d){this.initProperty={}
}function a(l,h,j){for(var f in j){if(j.hasOwnProperty(f)){var g=j[f];
var e=h+"/"+f;
if(!$CQ.isPlainObject(g)){l[e]=g
}else{a(l,e,g)
}}}}function b(n,h,m){for(var l in m){if(m.hasOwnProperty(l)){var f=m[l];
if(f.hasOwnProperty("type")&&f.type){for(var e in f){if(f.hasOwnProperty(e)){var g=l+"/"+e;
var j=h?h+"/"+g:g;
if(!$CQ.isPlainObject(f[e])){n[j]=f[e]
}else{a(n,j,f[e])
}}}}if(f.hasOwnProperty("content")){b(n,h?h+"/"+l:l,f.content)
}}}}b(this.initProperty,null,c);
this.rawJSON=c
}
}if(!CQ_Analytics.ViewedProducts){CQ_Analytics.ViewedProducts=function(){this.data=null;
this.MAX_COUNT=20
};
CQ_Analytics.ViewedProducts.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ViewedProducts.prototype.STOREKEY="VIEWEDPRODUCTS";
CQ_Analytics.ViewedProducts.prototype.STORENAME="viewedproducts";
CQ_Analytics.ViewedProducts.prototype.record=function(d,e,c,b){if(!this.data){this.init()
}for(var a=0;
a<this.data.length;
a++){if(this.data[a].path==d){this.data.splice(a,1);
break
}}if(this.data.length==this.MAX_COUNT){this.data.shift()
}this.data.push({path:d,title:e,image:c,price:b});
this.persist();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.mostRecent=function(){if(!this.data){this.init()
}if(this.data.length>0){return this.data[this.data.length-1]
}else{return null
}};
CQ_Analytics.ViewedProducts.prototype.mostRecentNotInCart=function(){if(!this.data){this.init()
}if(!CQ_Analytics.CartMgr){return this.mostRecent()
}for(var a=this.data.length-1;
a>=0;
a--){var b=this.data[a];
if(!CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),b.path,1)){return b
}}return null
};
CQ_Analytics.ViewedProducts.prototype.recent=function(e,b){var a=[];
if(!this.data){this.init()
}if(!CQ_Analytics.CartMgr){b=false
}for(var c=this.data.length-1;
c>=0&&e>0;
c--){var d=this.data[c];
if(b&&CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),d.path,1)){continue
}a.push(d);
e--
}return a
};
CQ_Analytics.ViewedProducts.prototype.getData=function(a){if(!this.data){this.init()
}return this.data
};
CQ_Analytics.ViewedProducts.prototype.init=function(){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
var e=d.split(";");
this.data=[];
for(var c=0;
c<e.length;
c++){var a=e[c].split(",");
if(a.length>=4){this.data.push({path:a[0],title:a[1],image:a[2],price:a[3]})
}else{if(a.length>=3){this.data.push({path:a[0],title:a[1],image:a[2],price:undefined})
}}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var e=[];
for(var c=0;
c<this.data.length;
c++){var d=this.data[c];
var a=d.path+","+d.title+","+d.image;
if(d.price){a+=","+d.price
}e.push(a)
}b.set(this.getStoreKey(),e.join(";"));
this.fireEvent("persist")
}};
CQ_Analytics.ViewedProducts.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=[]
};
CQ_Analytics.ViewedProducts=new CQ_Analytics.ViewedProducts();
CQ_Analytics.CCM.register(CQ_Analytics.ViewedProducts)
}if(!CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr=function(){this.data=null;
this.addedTags={};
this.frequencies=null;
this.initialTags=null;
this.initialAddedTags={};
this.copyObject=function(c){var b={};
for(var a in c){b[a]=c[a]
}return b
}
};
CQ_Analytics.TagCloudMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.TagCloudMgr.prototype.STOREKEY="TAGCLOUD";
CQ_Analytics.TagCloudMgr.prototype.STORENAME="tagcloud";
CQ_Analytics.TagCloudMgr.prototype.parseTagList=function(a){var c={};
var b=a.split(",");
for(var d in b){if(b.hasOwnProperty(d)){var e=b[d].split("=");
if(e.length==2){c[e[0]]=parseInt(e[1])
}}}return c
};
CQ_Analytics.TagCloudMgr.prototype.parseString=function(a){this.data=this.parseTagList(a);
return this
};
CQ_Analytics.TagCloudMgr.prototype.add=function(a){this.addedTags[a]=true;
this.data[a]=(this.data[a]||0)+1
};
CQ_Analytics.TagCloudMgr.prototype.each=function(b){for(var a in this.data){if(this.data.hasOwnProperty(a)){b(a,this.data[a])
}}};
CQ_Analytics.TagCloudMgr.prototype.calculateFrequencies=function(){var c={};
var a=[];
this.each(function(d,e){if(!c[e]){a.push(e)
}c[e]=true
});
a.sort(function b(e,d){if(e>d){return 1
}if(e<d){return -1
}return 0
});
return a
};
CQ_Analytics.TagCloudMgr.prototype.calculateNtile=function(b,c){if(this.frequencies===null){this.frequencies=this.calculateFrequencies()
}var a=0;
while(true){if((a>=(this.frequencies.length-1))||(this.frequencies[a]>=b)){return Math.ceil((a+1)/this.frequencies.length*c)
}a++
}};
CQ_Analytics.TagCloudMgr.prototype.getTags=function(){return this.data
};
CQ_Analytics.TagCloudMgr.prototype.getData=function(a){return this.getTags()
};
CQ_Analytics.TagCloudMgr.prototype.getTag=function(a){return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.init=function(a){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
this.data=this.parseTagList(d);
if(a){for(var c in a){if(a.hasOwnProperty(c)){this.add(a[c])
}}}this.initialTags=this.copyObject(this.data);
this.initialAddedTags=this.copyObject(this.addedTags);
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}if(b>0){this.addedTags[a]=true;
this.data[a]=b>0?b:0
}else{delete this.addedTags[a];
delete this.data[a]
}this.persist();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.getProperty=function(a){if(this.data==null){this.init()
}return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.removeProperty=function(a){if(this.data==null){this.init()
}this.setProperty(a,0)
};
CQ_Analytics.TagCloudMgr.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.addedTags={};
this.data={}
};
CQ_Analytics.TagCloudMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.TagCloudMgr.prototype.getLabel=function(b){if(b){var c=b.split(":");
var a=c[c.length-1].split("/");
b=a[a.length-1]
}return b
};
CQ_Analytics.TagCloudMgr=new CQ_Analytics.TagCloudMgr();
CQ_Analytics.CCM.register(CQ_Analytics.TagCloudMgr)
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var b=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",b.getBrowserFamily());
this.addInitProperty("browserVersion",b.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",b.getOSName());
this.addInitProperty("resolution",b.getScreenResolution());
this.addInitProperty("device",b.getDeviceType());
this.addInitProperty("isMobile",b.isMobile());
this.addInitProperty("userAgent",b.getUserAgent());
var a=new Date();
this.addInitProperty("day",a.getDate());
this.addInitProperty("month",a.getMonth()+1);
this.addInitProperty("year",a.getFullYear());
this.addInitProperty("hours",a.getHours());
this.addInitProperty("minutes",a.getMinutes());
var c="${/surferinfo/browserFamily}";
if(b.isMobile()){c="${/surferinfo/device}"
}this.addInitProperty("image",c);
var d=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",d);
if(window.CQ_Analytics&&window.CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var f=this.getProperty("device");
var g="${/surferinfo/browserFamily}";
if(b.isMobile(f)){g="${/surferinfo/device}"
}var e=this.getProperty("image");
if(e!=g){this.setProperty("image",g)
}},this);
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr=CQ_Analytics.JSONPStore.registerNewInstance("socialgraph");
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ProfileDataMgr.addListener("update",function(){var a=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(a!=this.lastUid){this.fireEvent("update")
}},CQ_Analytics.SocialGraphMgr)
},CQ_Analytics.SocialGraphMgr)
}if(window.CQ_Analytics&&window.CQ_Analytics.SegmentMgr&&!window.CQ_Analytics.SegmentMgr.isResolvedRegistered){CQ_Analytics.SegmentMgr.isResolvedRegistered=true;
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.StoreRegistry.register(CQ_Analytics.SegmentMgr);
CQ_Analytics.CCM.fireEvent("storeregister",CQ_Analytics.SegmentMgr)
},CQ_Analytics.SegmentMgr)
}if(!CQ_Analytics.RelatedProducts){CQ_Analytics.RelatedProducts=function(){this.data=null
};
CQ_Analytics.RelatedProducts.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.RelatedProducts.prototype.STOREKEY="RELATEDPRODUCTS";
CQ_Analytics.RelatedProducts.prototype.STORENAME="relatedproducts";
CQ_Analytics.RelatedProducts.prototype.products=function(d,e){var a=[];
if(!this.data){this.init()
}for(var b=0;
b<this.data.length&&d>0;
b++){var c=this.data[b];
if(c.relationshipType===e){a.push(c);
d--
}}return a
};
CQ_Analytics.RelatedProducts.prototype.getData=function(a){if(!this.data){this.init()
}return this.data
};
CQ_Analytics.RelatedProducts.prototype.init=function(){if(!this.data){this.data={}
}else{this.fireEvent("initialize",this);
this.fireEvent("update")
}};
CQ_Analytics.RelatedProducts=new CQ_Analytics.RelatedProducts();
CQ_Analytics.CCM.register(CQ_Analytics.RelatedProducts)
}if(!CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr=function(){this.addListener("beforepersist",function(){this.checkAuthorizableId()
},this)
};
CQ_Analytics.ProfileDataMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ProfileDataMgr.prototype.STOREKEY="PROFILEDATA";
CQ_Analytics.ProfileDataMgr.prototype.STORENAME="profile";
CQ_Analytics.ProfileDataMgr.prototype.LOADER_PATH=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.js",true);
CQ_Analytics.ProfileDataMgr.prototype.PROFILE_LOADER=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.json",true);
CQ_Analytics.ProfileDataMgr.prototype.init=function(){this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var a=this.persistence.get(this.getStoreKey());
if(!a||a==""){this.data={};
for(var b in this.initProperty){this.data[b]=this.initProperty[b]
}}else{this.data=this.parse(a)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ProfileDataMgr.prototype.checkAuthorizableId=function(){if(!this.data){this.init()
}if(this.data.authorizableId){CQ_Analytics.CCM.setVisitorId(this.data.authorizableId)
}else{CQ_Analytics.CCM.setVisitorId("")
}};
CQ_Analytics.ProfileDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.ProfileDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.ProfileDataMgr.prototype.clear=function(){if(this.persistence){this.persistence.remove(this.getStoreKey())
}this.data=null;
this.initProperty={}
};
CQ_Analytics.ProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/loader.json")
};
CQ_Analytics.ProfileDataMgr.prototype.loadProfile=function(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.persist();
this.fireEvent("initialize",this);
this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.ProfileDataMgr=new CQ_Analytics.ProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.checkAuthorizableId();
this.addListener("update",function(a,j){if(j=="birthday"||!j){var l=this.getProperty("birthday");
var m=this.getProperty("age");
var g="";
if(l){try{var c=function(p,o){var n=new Date(o.getTime());
n.setUTCHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds());
var q=n.getTime()-p.getTime();
return q/(1000*60*60*24)
};
var d=function(n){var o=new Date(n.getFullYear(),0,0);
return c(n,o)*-1
};
var h=new Date(Date.parse(l));
if(!isNaN(h.getTime())){var f=new Date();
if(d(h)==d(f)&&h.getMonth()==f.getMonth()){g=CQ.shared.HTTP.externalize(CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/resources/birthday_cake.png"))
}else{var b=f.getFullYear()-h.getFullYear();
if(d(h)>d(f)){g=b
}else{g=Math.max(0,b-1)
}}}else{g=""
}}catch(e){g=""
}}if(m!=g){this.setProperty("age",g)
}}});
CQ_Analytics.CCM.register(this)
},CQ_Analytics.ProfileDataMgr)
}if(!CQ_Analytics.OrderHistoryMgr){CQ_Analytics.OrderHistoryMgr=new CQ_Analytics.SessionStore();
CQ_Analytics.OrderHistoryMgr.STOREKEY="ORDERHISTORY";
CQ_Analytics.OrderHistoryMgr.STORENAME="orderhistory";
CQ_Analytics.OrderHistoryMgr.init=function(){if(!this.data){this.data={}
}else{this.fireEvent("initialize",this);
this.fireEvent("update")
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.OrderHistoryMgr)
}if(!CQ_Analytics.GeolocationUtils){CQ_Analytics.GeolocationUtils=new function(){var a;
var d;
var c=[];
var b=function(){d=true;
for(var e=0;
e<c.length;
e++){if(c[e]){c[e].call(this,CQ_Analytics.GeolocationUtils.getStore())
}}};
return{init:function(l){a=l;
var h;
try{h=navigator.geolocation
}catch(j){}var f=function(e){var m=CQ_Analytics.PersistedJSONStore.registerNewInstance(a,e);
m.addListener("update",function(n,p){var q=CQ_Analytics.ClientContext.get(a+"/latitude");
var o=CQ_Analytics.ClientContext.get(a+"/longitude");
if(!q||!o){if(p!="generatedThumbnail"){m.setProperty("generatedThumbnail",CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}else{if(m.getProperty(p,true)!=CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){m.setProperty(p,CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}}}else{if(m.getProperty("generatedThumbnail",true)==CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){m.setProperty("generatedThumbnail",m.getInitProperty("generatedThumbnail"))
}}});
b()
};
var g=function(p,n){var m=CQ_Analytics.StoreRegistry.getStore(a);
if(m){var r=true;
if(p){var q=parseInt(p.latitude*1000000)/1000000;
var o=parseInt(p.longitude*1000000)/1000000;
r=!(isFinite(q)&&(typeof(q)==="number")&&isFinite(o)&&(typeof(o)==="number"))
}if(r){p=CQ_Analytics.GeolocationUtils.DEFAULTS
}var e=p.generatedThumbnail=m.getInitProperty("generatedThumbnail");
m.initJSON(p);
if(!n){m.init();
m.setProperty("generatedThumbnail",e)
}}else{f(p)
}};
f();
if(h){h.getCurrentPosition(function(e){var m={longitude:parseInt(e.coords.longitude*1000000)/1000000,latitude:parseInt(e.coords.latitude*1000000)/1000000};
if(e.address){m.address=e.address
}g(m,CQ_Analytics.CCM.areStoresInitialized)
},function(e){if(!CQ_Analytics.CCM.areStoresInitialized){var n="Error";
if(CQ_Analytics.isUIAvailable){n=CQ.I18n.getMessage("Connection timeout",null,"timeout while connecting geolocation service");
if(e.code==1){n=CQ.I18n.getMessage("Permission denied",null,"permission denied message from goelocation service")
}else{if(e.code==2){n=CQ.I18n.getMessage("Position unavailable",null,"geolocation service couldn't find location")
}}}var m={address:{country:n}};
g(m,CQ_Analytics.CCM.areStoresInitialized)
}})
}else{g()
}},onReady:function(e){if(d){e.call(this,CQ_Analytics.GeolocationUtils.getStore())
}else{c.push(e)
}},getStore:function(){return CQ_Analytics.StoreRegistry.getStore(a)
}}
}();
CQ_Analytics.GeolocationUtils.DEFAULTS={latitude:37.331375,longitude:-121.893992};
CQ_Analytics.GeolocationUtils.THUMBNAILS={fallback:document.location.protocol+"//maps.googleapis.com/maps/api/staticmap?center=37,-121&zoom=0&size=80x80&sensor=false&client=gme-adobesystemsincorporated&channel=clientcontext&signature=wqNolKQ144hypPUiTmIypxPc1s8="}
}if(!CQ_Analytics.CartMgr){CQ_Analytics.CartMgr=new CQ_Analytics.SessionStore();
CQ_Analytics.CartMgr.STOREKEY="CART";
CQ_Analytics.CartMgr.STORENAME="cart";
CQ_Analytics.CartMgr.init=function(){if(!this.data){this.data={}
}else{var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var e=b.get(this.STOREKEY);
if(e){var f=e.split(";");
if(f[0]){var g=f[0].split("=");
if(g.length==2){this.referenceTotalPrice=g[0];
this.simulatedTotalPrice=g[1];
this.updateSimulatedPrice()
}}if(f[1]){this.simulatedPromotions=[];
var c=f[1].split(",");
for(var d=0;
d<c.length;
d++){var a=c[d].split("=");
if(a.length==2){this.simulatedPromotions.push({path:a[0],title:a[1]})
}}}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
}};
CQ_Analytics.CartMgr.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var c="";
if(this.referenceTotalPrice&&this.simulatedTotalPrice){c=this.referenceTotalPrice+"="+this.simulatedTotalPrice
}c+=";";
if(this.simulatedPromotions){for(var b=0;
b<this.simulatedPromotions.length;
b++){if(b>0){c+=","
}c+=this.simulatedPromotions[b].path+"="+this.simulatedPromotions[b].title
}}a.set(this.STOREKEY,c);
this.fireEvent("persist")
}};
CQ_Analytics.CartMgr.updateSimulatedPrice=function(){if(this.simulatedTotalPrice&&this.referenceTotalPrice==this.data.totalPriceFloat){this.data.totalPriceFloat=this.simulatedTotalPrice;
this.data.totalPrice=this.data.totalPrice.replace(/[0-9]+\.[0-9]+/,parseFloat(this.simulatedTotalPrice).toFixed(2))
}else{this.simulatedTotalPrice=null;
this.persist()
}};
CQ_Analytics.CartMgr.registerSimulatedPrice=function(a){if(this.simulatedTotalPrice){this.simulatedTotalPrice=a;
this.data.totalPrice=this.data.totalPrice.replace(/[0-9]+\.[0-9]+/,parseFloat(this.simulatedTotalPrice).toFixed(2))
}else{this.referenceTotalPrice=this.data.totalPriceFloat;
this.simulatedTotalPrice=a
}this.persist()
};
CQ_Analytics.CartMgr.addSimulatedPromotion=function(c,d){this.simulatedPromotions=this.simulatedPromotions||[];
var b=false;
for(var a=0;
a<this.simulatedPromotions.length;
a++){if(this.simulatedPromotions[a].path==c){b=true;
break
}}if(!b){this.simulatedPromotions.push({path:c,title:d});
if(this.resolvePromotions()){this.update()
}}};
CQ_Analytics.CartMgr.removeSimulatedPromotion=function(c){var b=-1;
for(var a=0;
this.simulatedPromotions&&a<this.simulatedPromotions.length;
a++){if(this.simulatedPromotions[a].path==c){b=a;
break
}}if(b>=0){this.simulatedPromotions.splice(b,1);
if(this.resolvePromotions()){this.update()
}}};
CQ_Analytics.CartMgr.getSimulatedPromotions=function(){return this.simulatedPromotions
};
CQ_Analytics.CartMgr.getProperty=function(a,l){if(!this.data){this.init()
}var f=this.data;
try{var d=a.split(".");
for(var g=0;
g<d.length-1;
g++){var b=d[g];
var c=b.indexOf("[");
var h=-1;
if(c>0){h=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}f=f[b];
if(h>=0){f=f[h]
}}var n=d[d.length-1];
if(!l){var m=CQ.shared.XSS.getXSSPropertyName(n);
if(f[m]){return f[m]
}}return f[n]
}catch(j){return undefined
}};
CQ_Analytics.CartMgr.validate=function(a,c){if(a=="totalPriceFloat"){var b=parseFloat(c);
return b>=0
}else{if(a.indexOf(".quantity")>0){var d=parseInt(c);
return d>=0
}}return true
};
CQ_Analytics.CartMgr.setProperty=function(a,h){if(!this.data){this.init()
}if(!this.validate(a,h)){this.fireEvent("change",a);
return
}if(a=="totalPriceFloat"){this.registerSimulatedPrice(h)
}var e=this.data;
var d=a.split(".");
for(var f=0;
f<d.length-1;
f++){var b=d[f];
var c=b.indexOf("[");
var g=-1;
if(c>0){g=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}if(!e[b]){e[b]={}
}e=e[b];
if(g>=0){if(!e[g]){e[g]={}
}e=e[g]
}}var l=d[d.length-1];
e[l]=h;
var j=CQ.shared.XSS.getXSSPropertyName(l);
this.data[j]=CQ.shared.XSS.getXSSValue(h);
this.fireEvent("change",a)
};
CQ_Analytics.CartMgr.addProductToCart=function(a,b,e,d,c){this.data.entries=this.data.entries||[];
this.data.entries.push({title:CQ.shared.XSS.getXSSValue(e),quantity:1,path:CQ.shared.XSS.getXSSValue(a),pagePath:CQ.shared.XSS.getXSSValue(b),thumbnail:CQ.shared.XSS.getXSSValue(d),priceFormatted:CQ.shared.XSS.getXSSValue(c)});
this.fireEvent("change","entries")
};
CQ_Analytics.CartMgr.addVoucher=function(b){this.data.vouchers=this.data.vouchers||[];
var c=false;
for(var a=0;
a<this.data.vouchers.length;
a++){if(this.data.vouchers[a].code==b){c=true;
break
}}if(!c){this.data.vouchers.push({code:b});
this.fireEvent("change","vouchers")
}};
CQ_Analytics.CartMgr.removeVoucher=function(c){var b=-1;
for(var a=0;
this.data.vouchers&&a<this.data.vouchers.length;
a++){if(this.data.vouchers[a].path==c){b=a;
break
}}if(b>=0){this.data.vouchers.splice(b,1);
this.fireEvent("change","vouchers")
}};
CQ_Analytics.CartMgr.addListener("change",function(b,c){var a=this;
if(c&&c!="totalPrice"){this.resolvePromotions();
if(window.CQ_Analytics&&window.CQ_Analytics.CartMgr&&window.CQ_Analytics.CartMgr.refreshTimeout){clearTimeout(CQ_Analytics.CartMgr.refreshTimeout)
}CQ_Analytics.CartMgr.refreshTimeout=setTimeout(function(){a.update()
},50)
}});
CQ_Analytics.CartMgr.update=function(){var a=this;
if(window.ContextHub&&ContextHub.getStore("cart")){return
}if(this.updateUrl){$CQ.ajax({url:this.updateUrl,type:"POST",data:{cart:JSON.stringify(a.data)},externalize:false,encodePath:false,hook:true,success:function(b){a.data=b;
a.updateSimulatedPrice();
CQ_Analytics.ClientContextUtils.renderStore(CQ_Analytics.CartMgr.divId,CQ_Analytics.CartMgr.STORENAME);
a.fireEvent("updatecomplete");
a.fireEvent("update")
}})
}};
CQ_Analytics.CartMgr.clear=function(){if(this.data.entries){this.data.entries=[]
}if(this.data.vouchers){this.data.vouchers=[]
}this.data.totalPrice="0";
this.referenceTotalPrice=null;
this.simulatedTotalPrice=null;
this.simulatedPromotions=null
};
CQ_Analytics.CartMgr.reset=function(){this.clear();
this.fireEvent("update");
this.persist();
this.update()
};
CQ_Analytics.CartMgr.resolvePromotions=function(){if(!this.promotionsMap){return false
}if(!this.data.promotions){this.data.promotions=[]
}if(!CQ_Analytics.SegmentMgr.areSegmentsLoaded){return false
}var f=CQ_Analytics.SegmentMgr.getResolved();
var e=[];
var d,b,m,n;
for(d=0;
d<this.promotionsMap.length;
d++){var a=this.promotionsMap[d];
var h=a.segments.split(",");
for(n=false,b=0;
b<h.length;
b++){if($CQ.inArray(h[b],f)>=0){n=true;
break
}}if(n){e.push(a.path)
}}var g=this.simulatedPromotions||[];
for(d=0;
d<g.length;
d++){if($CQ.inArray(g[d].path,e)<0){e.push(g[d].path)
}}var c=false;
for(d=0;
d<this.data.promotions.length;
d++){m=this.data.promotions[d]["path"];
for(n=false,b=0;
b<e.length;
b++){if(e[b]==m){n=true;
break
}}if(!n){this.data.promotions.splice(d--,1);
c=true
}}for(d=0;
d<e.length;
d++){m=e[d];
for(n=false,b=0;
b<this.data.promotions.length;
b++){if(this.data.promotions[b]["path"]==m){n=true;
break
}}if(!n){var l={path:m};
this.data.promotions.push(l);
c=true
}}return c
};
CQ_Analytics.CartMgr.resolveServerPromotions=function(){if(!this.serverPromotionsMap){return false
}if(!this.data.promotions){this.data.promotions=[]
}if(!CQ_Analytics.SegmentMgr.areSegmentsLoaded){return false
}var f=CQ_Analytics.SegmentMgr.getResolved();
var e=[];
var d,b,l,m;
for(d=0;
d<this.serverPromotionsMap.length;
d++){var a=this.serverPromotionsMap[d];
var g=a.segments.split(",");
for(m=false,b=0;
b<g.length;
b++){if($CQ.inArray(g[b],f)>=0){m=true;
break
}}if(m){e.push(a.path)
}}var c=false;
for(d=0;
d<this.data.promotions.length;
d++){if(!this.data.promotions[d]["resolve"]){continue
}l=this.data.promotions[d]["path"];
for(m=false,b=0;
b<e.length;
b++){if(e[b]==l){m=true;
break
}}if(!m){this.data.promotions.splice(d--,1);
c=true
}}for(d=0;
d<e.length;
d++){l=e[d];
for(m=false,b=0;
b<this.data.promotions.length;
b++){if(this.data.promotions[b]["path"]==l){m=true;
break
}}if(!m){var h={path:l};
this.data.promotions.push(h);
c=true
}}return c
};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.SegmentMgr.addListener("update",function(){if(this.resolvePromotions()){this.update()
}},CQ_Analytics.CartMgr);
CQ_Analytics.SegmentMgr.addListener("update",function(){if(this.resolveServerPromotions()){this.update()
}},CQ_Analytics.CartMgr)
},CQ_Analytics.CartMgr)
}if(!CQ_Analytics.CartHelper){CQ_Analytics.CartHelper=(function(){return{containsProduct:function(e,d,f){var g=d?d.substring(0,d.lastIndexOf("#")):null;
for(var a=0;
e.entries&&a<e.entries.length;
a++){var c=e.entries[a];
var b=c.page.substring(0,c.page.lastIndexOf("#"));
if((!d||b==g)&&(!f||c.quantity>=f)){return true
}}return false
},containsPromotion:function(d,f,a,b){if(!f){return false
}if(!a){return false
}if(!b){return false
}function e(h){if(h){var g=h.lastIndexOf("#");
if(g>-1){h=h.substring(0,g)
}}return h
}function c(o,p,h){var m=e(p);
var j=o.promotions;
for(var l=0;
j&&l<j.length;
l++){var n=j[l];
var g=e(n.path);
if(g==m&&h==n.status){return true
}}return false
}if(b=="contains"){return c(d,f,a)
}else{if(b=="notcontains"){return !c(d,f,a)
}else{return false
}}}}
})()
}if(!CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr=function(){};
CQ_Analytics.CampaignMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.CampaignMgr.prototype.STOREKEY="CAMPAIGN";
CQ_Analytics.CampaignMgr.prototype.STORENAME="campaign";
CQ_Analytics.CampaignMgr.prototype.DEFAULT_EXPERIENCE="DEFAULT";
CQ_Analytics.CampaignMgr.prototype.init=function(){var c;
this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var a=this.persistence.get(this.getStoreKey());
if(!this.data){this.data={}
}if(!a||a===""){for(c in this.initProperty){if(this.initProperty.hasOwnProperty(c)){this.data[c]=this.initProperty[c]
}}}else{this.data=this.parse(a);
var b=this.getInitProperty("campaigns");
if(b){this.data.campaigns=b
}}this.validate();
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.CampaignMgr.prototype.validate=function(){if(this.data.campaigns){if(!this.getCampaignBy("path",this.data.path)&&!this.getCampaignBy("id",this.data.id)){this.setCampaign(null)
}if(this.data["recipe/path"]!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){if(!this.getExperienceBy("path",this.data["recipe/path"])&&!this.getExperienceBy("id",this.data["recipe/id"])){this.setExperience(null)
}}}};
CQ_Analytics.CampaignMgr.prototype.getCampaignBy=function(e,b){if(!this.data||!this.data.campaigns){return null
}var a,c=this.data.campaigns;
for(a=0;
a<c.length;
a++){var d=c[a];
if(d[e]===b){return d
}}return null
};
CQ_Analytics.CampaignMgr.prototype.getExperienceBy=function(g,d){if(!this.data||!this.data.campaigns){return null
}var c,e=this.data.campaigns;
for(c=0;
c<e.length;
c++){var f=e[c];
for(var a=0;
a<f.experiences.length;
a++){var b=f.experiences[a];
if(b[g]===d){return b
}}}return null
};
CQ_Analytics.CampaignMgr.prototype.setCampaign=function(a){this.setProperties({name:a?a.title:"",path:a?a.path:"",id:a?a.id:"","recipe/name":a?CQ.I18n.getMessage("(default)"):"","recipe/path":a?this.DEFAULT_EXPERIENCE:"","recipe/id":a?this.DEFAULT_EXPERIENCE:""})
};
CQ_Analytics.CampaignMgr.prototype.setExperience=function(a){this.setProperties({"recipe/name":a?a.title:"","recipe/path":a?a.path:"","recipe/id":a?a.id:""})
};
CQ_Analytics.CampaignMgr.prototype.setProperty=function(a,b){if(a==="id"||a==="path"){this.setCampaign(this.getCampaignBy(a,b));
return
}else{if(a==="recipe/id"||a==="recipe/path"){if(b!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){this.setExperience(this.getExperienceBy(a.substring("recipe/".length),b));
return
}}}CQ_Analytics.PersistedSessionStore.prototype.setProperty.call(this,a,b)
};
CQ_Analytics.CampaignMgr.prototype.isCampaignSelected=function(){return this.getProperty("path")!==""
};
CQ_Analytics.CampaignMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.CampaignMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.CampaignMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.CampaignMgr=new CQ_Analytics.CampaignMgr();
CQ_Analytics.CCM.register(CQ_Analytics.CampaignMgr)
}if(!CQ_Analytics.ActivityStreamMgr){CQ_Analytics.ActivityStreamMgr=CQ_Analytics.JSONStore.registerNewInstance("activitystream",{});
CQ_Analytics.ActivityStreamMgr.internalRenderer=function(c,a){var b=c+".form.html";
b+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/activitystream.html");
b+="?limit=3";
CQ.shared.HTTP.get(b,function(e,f,d){$CQ("#"+a).children().remove();
if(f){$CQ("#"+a).append(d.body)
}})
};
CQ_Analytics.ActivityStreamMgr.renderer=function(b,a){if(!b.isReady){b.isReady=true;
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(c){c.addListener("update",function(e,f){var g=this.getProperty("path");
if(g!=CQ_Analytics.ActivityStreamMgr.currentProfilePath){CQ_Analytics.ActivityStreamMgr.currentProfilePath=g;
CQ_Analytics.ActivityStreamMgr.internalRenderer(g,a)
}},c);
var d=c.getProperty("path");
CQ_Analytics.ActivityStreamMgr.currentProfilePath=d;
CQ_Analytics.ActivityStreamMgr.internalRenderer(d,a)
})
}return""
}
}(function(f){function d(){}function x(H){c=[H]
}function q(J,H,I){return J&&J.apply(H.context||H,I)
}function p(H){return/\?/.test(H)?"&":"?"
}var r="async",v="charset",t="",F="error",w="insertBefore",u="_jqjsp",C="on",g=C+"click",m=C+F,s=C+"load",A=C+"readystatechange",b="readyState",E="removeChild",l="<script>",B="success",D="timeout",e=window,a=f.Deferred,h=f("head")[0]||document.documentElement,z={},o=0,c,n={callback:u,url:location.href},y=e.opera,j=!!f("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
function G(M){M=f.extend({},n,M);
var K=M.success,R=M.error,J=M.complete,aa=M.dataFilter,ac=M.callbackParameter,S=M.callback,ab=M.cache,I=M.pageCache,L=M.charset,N=M.url,ae=M.data,U=M.timeout,Q,Y=0,W=d,T,P,H,ad,O,X;
a&&a(function(af){af.done(K).fail(R);
K=af.resolve;
R=af.reject
}).promise(M);
M.abort=function(){!(Y++)&&W()
};
if(q(M.beforeSend,M,[M])===!1||Y){return M
}N=N||t;
ae=ae?((typeof ae)=="string"?ae:f.param(ae,M.traditional)):t;
N+=ae?(p(N)+ae):t;
ac&&(N+=p(N)+encodeURIComponent(ac)+"=?");
!ab&&!I&&(N+=p(N)+"_"+(new Date()).getTime()+"=");
N=N.replace(/=\?(&|$)/,"="+S+"$1");
function Z(af){if(!(Y++)){W();
I&&(z[N]={s:[af]});
aa&&(af=aa.apply(M,[af]));
q(K,M,[af,B,M]);
q(J,M,[M,B])
}}function V(af){if(!(Y++)){W();
I&&af!=D&&(z[N]=af);
q(R,M,[M,af]);
q(J,M,[M,af])
}}if(I&&(Q=z[N])){Q.s?Z(Q.s[0]):V(Q)
}else{e[S]=x;
ad=f(l)[0];
ad.id=u+o++;
if(L){ad[v]=L
}y&&y.version()<11.6?((O=f(l)[0]).text="document.getElementById('"+ad.id+"')."+m+"()"):(ad[r]=r);
if(j){ad.htmlFor=ad.id;
ad.event=g
}ad[s]=ad[m]=ad[A]=function(af){if(!ad[b]||!/i/.test(ad[b])){try{ad[g]&&ad[g]()
}catch(ag){}af=c;
c=0;
af?Z(af[0]):V(F)
}};
ad.src=N;
W=function(af){X&&clearTimeout(X);
ad[A]=ad[s]=ad[m]=null;
h[E](ad);
O&&h[E](O)
};
h[w](ad,(H=h.firstChild));
O&&h[w](O,H);
X=U>0&&setTimeout(function(){V(D)
},U)
}return M
}G.setup=function(H){f.extend(n,H)
};
f.jsonp=G
})(jQuery);
(function(b){function a(n,h){var o,p,l,d,g,c,e,m,j,f;
o=n.length&3;
p=n.length-o;
l=h;
g=3432918353;
e=461845907;
f=0;
while(f<p){j=((n.charCodeAt(f)&255))|((n.charCodeAt(++f)&255)<<8)|((n.charCodeAt(++f)&255)<<16)|((n.charCodeAt(++f)&255)<<24);
++f;
j=((((j&65535)*g)+((((j>>>16)*g)&65535)<<16)))&4294967295;
j=(j<<15)|(j>>>17);
j=((((j&65535)*e)+((((j>>>16)*e)&65535)<<16)))&4294967295;
l^=j;
l=(l<<13)|(l>>>19);
d=((((l&65535)*5)+((((l>>>16)*5)&65535)<<16)))&4294967295;
l=(((d&65535)+27492)+((((d>>>16)+58964)&65535)<<16))
}j=0;
switch(o){case 3:j^=(n.charCodeAt(f+2)&255)<<16;
case 2:j^=(n.charCodeAt(f+1)&255)<<8;
case 1:j^=(n.charCodeAt(f)&255);
j=(((j&65535)*g)+((((j>>>16)*g)&65535)<<16))&4294967295;
j=(j<<15)|(j>>>17);
j=(((j&65535)*e)+((((j>>>16)*e)&65535)<<16))&4294967295;
l^=j
}l^=n.length;
l^=l>>>16;
l=(((l&65535)*2246822507)+((((l>>>16)*2246822507)&65535)<<16))&4294967295;
l^=l>>>13;
l=((((l&65535)*3266489909)+((((l>>>16)*3266489909)&65535)<<16)))&4294967295;
l^=l>>>16;
return l>>>0
}b.murmurhash3=a
})(jQuery);
CQ_Analytics=window.CQ_Analytics||{};
CQ_Analytics.AAM=CQ_Analytics.AAM||{};
CQ_Analytics.AAM.AudienceMgr=CQ_Analytics.AAM.AudienceMgr||function(f){var e=f.partner||"geometrixx";
var r=f.destinationNames||{CQIntegrationDestination:{domain:".cqclientintegration.adobe.com",segkey:"segs",keysep:",",valsep:";"}};
var q=f.debug||false;
var b=f.containerNSID||"0";
var s=false;
if(f.simulationPath){s=f.simulationPath+".segments.json"
}var c=function(){};
if(q){c=function(t){console.log("DEBUG: audiencemanager.js "+t)
}
}var p=function(t){console.log("ERROR: audiencemanager.js "+t)
};
c("Initialise Audience Manager");
var m={};
var d=CQ_Analytics.JSONStore.getInstance("audiencemgr",null,null,function(){this.init();
this.reset()
});
var j="http://";
if("https:"==document.location.protocol){j="https://"
}j+=encodeURIComponent(e)+".demdex.net/event?d_cb=?";
function g(u){var t={};
$.each(u,function(y,A){if(r[A.cn]){var x=r[A.cn];
if(A.dmn.slice(0,x.domain.length)===x.domain){var w=(x.segkey||"segs")+"=";
var z=w.length;
var B=x.keysep||",";
var v=x.valsep||";";
$.each(A.cv.split(B),function(D,C){if(C.slice(0,z)===w){$.each(C.substring(z).split(v),function(E,F){t[F]=true
})
}})
}}});
return t
}function n(){}function l(t){m={};
var u=[];
$.each(t,function(x,y){if(y){m[x]=true;
u.push(x)
}});
u.sort();
var v=d.getProperty("segments");
var w=u.join(",");
if(v!==w){d.setProperty("segments",w);
c("Set segments to "+w)
}}function h(t,v){v=v||n;
if(s){if(!t.sid){v();
d.fireEvent("update")
}else{$.getJSON(s,{t:t.sid},function(w){if(w.segments){l(w.segments)
}v();
d.fireEvent("update")
}).fail(function(w,y,x){p("Failed to resolve segments from AAM server  "+y+" error "+x);
v();
d.fireEvent("update")
})
}}else{var u={};
t=t||{};
$.each(t,function(w,x){if(w==="sid"){u.d_sid=x
}else{u["c_"+w]=x
}});
u.d_nsid=b;
u.d_rtbd="json";
$.jsonp({url:j,callback:"__aaminvoke",data:u,success:function(w,y,x){if(w.stuff){l(g(w.stuff))
}v();
d.fireEvent("update")
},error:function(x,w){p("Failed to retieve json response "+w);
v();
d.fireEvent("update")
}})
}}function a(){return m
}function o(t){return(m[t])
}h(false,function(){CQ_Analytics.ClientContextMgr.register(d)
});
d.getUserSegments=a;
d.matches=o;
d.invoke=h;
return d
};
if(!CQ_Analytics.CustomStoreMgr){CQ_Analytics.CustomStoreMgr=CQ_Analytics.JSONStore.registerNewInstance("customstore");
CQ_Analytics.CustomStoreMgr.currentId="";
CQ_Analytics.CustomStoreMgr.loadData=function(){var authorizableId=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
var url="/content/data/informa/servlet/informaVisitor";
if((authorizableId!==CQ_Analytics.CustomStoreMgr.currentId)&CQ_Analytics.CustomStoreMgr.initialized){url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
var person={buisinessLine:object.buisinessLine};
if(object){this.data=person
}}catch(error){console.log("Error",error)
}CQ_Analytics.CustomStoreMgr.currentId=authorizableId
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ProfileDataMgr.addListener("update",function(){this.loadData();
this.fireEvent("update")
},CQ_Analytics.CustomStoreMgr)
},CQ_Analytics.CustomStoreMgr);
CQ_Analytics.CustomStoreMgr.addListener("initialize",function(){this.loadData()
});
CQ_Analytics.CustomStoreMgr.initialized=false;
CQ_Analytics.CustomStoreMgr.getValue=function(a){if(CQ_Analytics.CustomStoreMgr.data){if(CQ_Analytics.CustomStoreMgr.data[a]){return CQ_Analytics.CustomStoreMgr.data[a].value
}}return""
}
}if(!window.CQ_Analytics){window.CQ_Analytics={}
}window.CQ_Analytics.isUIAvailable=true;
if(window.CQ_Analytics&&window.CQ_Analytics.OperatorActions){CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.EQUALS,CQ.I18n.getMessage("equals"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.IS,CQ.I18n.getMessage("is"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.NOT_EQUAL,CQ.I18n.getMessage("is not equal to"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.GREATER,CQ.I18n.getMessage("is greater than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.GREATER_OR_EQUAL,CQ.I18n.getMessage("is equal to or greater than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.OLDER,CQ.I18n.getMessage("is older than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.OLDER_OR_EQUAL,CQ.I18n.getMessage("is equal to or older than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.LESS,CQ.I18n.getMessage("is less than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.LESS_OR_EQUAL,CQ.I18n.getMessage("is equal to or less than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.YOUNGER,CQ.I18n.getMessage("is younger than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,CQ.I18n.getMessage("is equal to or younger than"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.CONTAINS,CQ.I18n.getMessage("contains",null,"Ex: language contains french, Ex: gender contains female"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.BEGINS_WITH,CQ.I18n.getMessage("begins with",null,"Ex: title begins with News"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.EXISTS,CQ.I18n.getMessage("exists",null,"Ex: tag exists"));
CQ_Analytics.OperatorActions.setText(CQ_Analytics.Operator.DOES_NOT_EXIST,CQ.I18n.getMessage("does not exist",null,"Ex: tag does not exist"))
}var RUZEE=window.RUZEE||{};
RUZEE.ShadedBorder={create:function(w){var q=/msie/i.test(navigator.userAgent)&&!window.opera;
var G=q&&!window.XMLHttpRequest;
function y(p,b){for(k in b){if(/ie_/.test(k)){if(q){p.style[k.substr(3)]=b[k]
}}else{p.style[k]=b[k]
}}}function B(p){var b=document.createElement("div");
b.className="sb-gen";
y(b,p);
return b
}function z(b){b=b<0?0:b;
if(b>0.99999){return""
}return q?" filter:alpha(opacity="+(b*100)+");":" opacity:"+b+";"
}var l=w.shadow||0;
var H=w.corner||0;
var h=0;
var g=w.border||0;
var j=w.borderOpacity||1;
var D=l!=0;
var v=H>l?H:l;
var x=v;
var c=v;
var N=v;
if(g>0){h=H;
H=H-g
}var o=H!=0&&D?Math.round(v/3):0;
var n=o;
var u=Math.round(o/2);
var s=H>0?"sb-inner":"sb-shadow";
var A="sb-shadow";
var K="sb-border";
var m=w.edges||"trlb";
if(!/t/i.test(m)){c=0
}if(!/b/i.test(m)){N=0
}if(!/l/i.test(m)){v=0
}if(!/r/i.test(m)){x=0
}var J={position:"absolute",left:"0",top:"0",width:v+"px",height:c+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"};
var a=B(J);
delete J.left;
J.right="0";
J.width=x+"px";
var O=B(J);
delete J.top;
J.bottom="0";
J.height=N+"px";
var I=B(J);
delete J.right;
J.left="0";
J.width=v+"px";
var L=B(J);
var M=B({position:"absolute",width:"100%",height:c+"px",ie_fontSize:"1px",top:"0",left:"0",overflow:"hidden",margin:"0",padding:"0"});
var F=B({position:"relative",height:c+"px",ie_fontSize:"1px",margin:"0 "+x+"px 0 "+v+"px",overflow:"hidden",padding:"0"});
M.appendChild(F);
var E=B({position:"absolute",left:"0",bottom:"0",width:"100%",height:N+"px",ie_fontSize:"1px",overflow:"hidden",margin:"0",padding:"0"});
var P=B({position:"relative",height:N+"px",ie_fontSize:"1px",margin:"0 "+x+"px 0 "+v+"px",overflow:"hidden",padding:"0"});
E.appendChild(P);
var f=B({position:"absolute",top:(-N)+"px",left:"0",width:"100%",height:"100%",overflow:"hidden",ie_fontSize:"1px",padding:"0",margin:"0"});
function C(Q,Z,ad){var W=ad?v:x;
var ag=Z?c:N;
var aa=Z?u:-u;
var T=[];
var R=[];
var b=[];
var X=0;
var ae=1;
if(ad){X=W-1;
ae=-1
}for(var V=0;
V<W;
++V){var ah=ag-1;
var p=-1;
if(Z){ah=0;
p=1
}var S=false;
for(var U=ag-1;
U>=0&&!S;
--U){var ab='<div style="position:absolute; top:'+ah+"px; left:"+X+"px; width:1px; height:1px; overflow:hidden; margin:0; padding:0;";
var af=V-o;
var r=U-n-aa;
var ai=Math.sqrt(af*af+r*r);
var Y=false;
if(H>0){if(af<0&&r<h&&r>=H||r<0&&af<h&&af>=H){T.push(ab+z(j)+'" class="'+K+'"></div>')
}else{if(ai<h&&ai>=H-1&&af>=0&&r>=0){var aj=ab;
if(ai>=h-1){aj+=z((h-ai)*j);
Y=true
}else{aj+=z(j)
}T.push(aj+'" class="'+K+'"></div>')
}}var aj=ab+" z-index:2;"+(Z?"background-position:0 -"+(H-r-1)+"px;":"background-image:none;");
var ac=function(){if(!Z){aj=aj.replace(/top\:\d+px/,"top:0px")
}aj=aj.replace(/height\:1px/,"height:"+(U+1)+"px");
R.push(aj+'" class="'+s+'"></div>');
S=true
};
if(af<0&&r<H||r<0&&af<H){ac()
}else{if(ai<H&&af>=0&&r>=0){if(ai>=H-1){aj+=z(H-ai);
Y=true;
R.push(aj+'" class="'+s+'"></div>')
}else{ac()
}}else{Y=true
}}}else{Y=true
}if(l>0&&Y){ai=Math.sqrt(V*V+U*U);
if(ai<l){b.push(ab+" z-index:0; "+z(1-(ai/l))+'" class="'+A+'"></div>')
}}ah+=p
}X+=ae
}Q.innerHTML=b.concat(T.concat(R)).join("")
}function d(Q){var t=[];
t.push('<div style="position:relative; top:'+(c+N)+"px; height:2048px;  margin:0 "+(x-H-o)+"px 0 "+(v-H-o)+"px;  padding:0; overflow:hidden; background-position:0 "+(c>0?-(H+n+u):"0")+'px;" class="'+s+'"></div>');
var p='<div style="position:absolute; width:1px; top:'+(c+N)+"px; height:2048px; padding:0; margin:0;";
if(l>0){for(var b=0;
b<v-H-o;
++b){t.push(p+" left:"+b+"px;"+z((b+1)/v)+'" class="'+A+'"></div>')
}for(var b=0;
b<x-H-o;
++b){t.push(p+" right:"+b+"px;"+z((b+1)/x)+'" class="'+A+'"></div>')
}}if(g>0){var r=" width:"+g+"px;"+z(j)+'" class="'+K+'"></div>';
t.push(p+" left:"+(v-h-o)+"px;"+r);
t.push(p+" right:"+(x-h-o)+"px;"+r)
}Q.innerHTML=t.join("")
}function e(R,p){var S=[];
var Q=p?c:N;
var b='<div style="height:1px; overflow:hidden; position:absolute; margin:0; padding:0; width:100%; left:0px; ';
var r=p?u:-u;
for(var T=0;
T<Q-r-n-H;
++T){if(l>0){S.push(b+(p?"top:":"bottom:")+T+"px;"+z((T+1)*1/Q)+'" class="'+A+'"></div>')
}}if(T>=g){S.push(b+(p?"top:":"bottom:")+(T-g)+"px;"+z(j)+" height:"+g+'px;" class="'+K+'"></div>')
}S.push(b+(p?"background-position-y:0; top:":"background-image:none; bottom:")+T+"px; height:"+(H+n+r)+'px;" class="'+s+'"></div>');
R.innerHTML=S.join("")
}C(a,true,true);
C(O,true,false);
C(L,false,true);
C(I,false,false);
d(f);
e(F,true);
e(P,false);
return{render:function(p){if(typeof p=="string"){p=document.getElementById(p)
}if(p.length!=undefined){for(var Q=0;
Q<p.length;
++Q){this.render(p[Q])
}return
}p.className+=" sb";
y(p,{position:"relative",background:"transparent"});
var r=p.firstChild;
while(r){var t=r.nextSibling;
if(r.nodeType==1&&r.className=="sb-gen"){p.removeChild(r)
}r=t
}var U=p.firstChild;
var R=M.cloneNode(true);
var T=f.cloneNode(true);
var S=E.cloneNode(true);
p.insertBefore(a.cloneNode(true),U);
p.insertBefore(O.cloneNode(true),U);
p.insertBefore(L.cloneNode(true),U);
p.insertBefore(I.cloneNode(true),U);
p.insertBefore(R,U);
p.insertBefore(T,U);
p.insertBefore(S,U);
if(G){p.onmouseover=function(){this.className+=" hover"
};
p.onmouseout=function(){this.className=this.className.replace(/ hover/,"")
};
window.setTimeout(function(){p.className+=" hover";
p.className=p.className.replace(/ hover/,"")
},100)
}if(q){function b(){R.style.width=S.style.width=T.style.width=p.offsetWidth+"px";
T.firstChild.style.height=p.offsetHeight+"px"
}p.onresize=b;
b()
}}}
}};
if(typeof CQ_Analytics=="undefined"){CQ_Analytics={}
}CQ_Analytics.onImageLoad=function(b,c){var a=new Image();
a.src=b;
if(a.complete){c(a)
}else{a.onload=function(){c(this)
};
a.onerror=function(){c(this)
}
}};
CQ_Analytics.scaleImage=function(g,c,e,b,f){var a={width:0,height:0,left:0,top:0};
if((g<=0)||(c<=0)||(e<=0)||(b<=0)){return a
}var d=g/c*b;
var h=(d>e)?f:!f;
if(h){a.width=e;
a.height=Math.floor(c/g*e)
}else{a.width=Math.floor(d);
a.height=b
}a.left=Math.floor((e-a.width)/2);
a.top=Math.floor((b-a.height)/2);
return a
};
if(!CQ_Analytics.ClickstreamcloudUI){CQ_Analytics.ClickstreamcloudUI=function(){this.SHOW_BOX_COOKIE="show-clickstreamcloud";
this.BOX_ID="clickstreamcloud";
this.box=null;
this.top=null;
this.sections=null;
this.bottom=null;
this.nbSection=0;
this.isRendered=false
};
CQ_Analytics.ClickstreamcloudUI.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.createBox=function(c){var a=this;
this.box=document.createElement("div");
this.box.id=this.BOX_ID;
this.box.style.display="none";
var d=document.createElement("div");
this.box.appendChild(d);
this.top=document.createElement("div");
this.top.className="ccl-header ccl-header-close";
this.addListener("close",function(){a.onVisibilityChange()
});
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink("","#ccl",""));
this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Close"),function(){a.box.style.display="none";
a.fireEvent("close")
},{className:"ccl-close"},"#ccl"));
if(this.hideLoadLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Load"),function(){a.fireEvent("loadclick")
},{className:"ccl-load"},"#ccl"))
}if(this.hideEditLink===false){this.top.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createLink(CQ.I18n.getMessage("Edit"),function(){a.fireEvent("editclick")
},{className:"ccl-edit"},"#ccl"))
}d.appendChild(this.top);
this.sections=document.createElement("div");
d.appendChild(this.sections);
this.bottom=document.createElement("div");
this.bottom.className="ccl-spacer";
d.appendChild(this.bottom);
var b=RUZEE.ShadedBorder.create({corner:10,border:2,shadow:21});
b.render(d);
c.appendChild(this.box);
if(d.onresize){this.addListener("show",d.onresize,d)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.init=function(b){b=b||{};
this.parentId=b.target;
var c=document.getElementById(this.parentId);
if(c){this.version=b.version||CQ_Analytics.ClickstreamcloudUI.VERSION_FULL;
this.hideEditLink=b.hideEditLink!==false;
this.hideLoadLink=b.hideLoadLink!==false;
this.disableKeyShortcut=b.disableKeyShortcut!==false;
if(CQ_Analytics.Cookie.read(this.SHOW_BOX_COOKIE)=="true"){this.show()
}if(!this.disableKeyShortcut){var a=this;
CQ_Analytics.Utils.registerDocumentEventHandler("onkeydown",CQ_Analytics.Utils.eventWrapper(function(d,e){if(d.ctrlKey&&d.altKey&&e=="C".charCodeAt(0)){a.toggle()
}}))
}}};
CQ_Analytics.ClickstreamcloudUI.prototype.onVisibilityChange=function(){CQ_Analytics.Cookie.set(this.SHOW_BOX_COOKIE,this.isVisible()?"true":"false",365)
};
CQ_Analytics.ClickstreamcloudUI.prototype.isVisible=function(){return(this.box!=null&&this.box.style.display!="none")
};
CQ_Analytics.ClickstreamcloudUI.prototype.toggle=function(){if(this.isVisible()){this.hide()
}else{this.show()
}};
CQ_Analytics.ClickstreamcloudUI.prototype.register=function(d,a,c){var b=function(){var f=new CQ_Analytics.ClickstreamcloudUI.Section(d,this.version,a||{},c);
var e=CQ_Analytics.CCM.getUIConfig(d.getName())||{};
this.addSection(f,e.rank||null);
d.addListener("update",f.reset,f)
};
if(this.isRendered){b.call(this)
}else{this.addListener("render",b,this)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.addSection=function(c,a){if(a<this.nbSection&&this.nbSection>0){var b=this.nbSection;
var d=this.sections.lastChild;
while(b>a+1){b--;
d=d.previousSibling
}this.sections.insertBefore(c.get(),d)
}else{this.sections.appendChild(c.get())
}this.nbSection++
};
CQ_Analytics.ClickstreamcloudUI.prototype.removeSection=function(a){this.sections.removeChild(a);
this.nbSection--
};
CQ_Analytics.ClickstreamcloudUI.prototype.show=function(){if(!this.isRendered){var a=document.getElementById(this.parentId);
if(a){this.createBox(a);
this.isRendered=true;
this.fireEvent("render")
}}this.box.style.display="block";
this.onVisibilityChange();
this.fireEvent("show")
};
CQ_Analytics.ClickstreamcloudUI.prototype.hide=function(){if(this.box!=null){this.box.style.display="none"
}this.onVisibilityChange()
};
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_TEXTFIELD="textfield";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_LINK="link";
CQ_Analytics.ClickstreamcloudUI.prototype.MODE_STATIC="static";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_FULL="full";
CQ_Analytics.ClickstreamcloudUI.prototype.VERSION_LIGHT="light";
CQ_Analytics.ClickstreamcloudUI.prototype.Section=function(d,a,b,c){this.contentbox=null;
this.section=null;
this.sessionStore=d;
this.version=a;
this.title=b.title;
this.mode=b.mode||CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD;
this.renderer=c;
this.sort=function(l,e){if(!e||!l){return l
}var j=[];
for(var h=0;
h<e.length;
h++){var g=e[h];
var f=$CQ.inArray(g,l);
if(f>-1){j.push(g);
l=$CQ.merge(l.slice(0,f-1),l.slice(f+1,l.length))
}}j=$CQ.merge(j,l);
return j
};
this.buildContentBox=function(){if(this.renderer){this.contentbox=this.renderer.call(this.sessionStore)
}else{this.contentbox=document.createElement("p");
this.contentbox.className="ccl-sectioncontent";
var g=CQ_Analytics.CCM.getStoreConfig(this.sessionStore.getName());
var j=CQ_Analytics.CCM.getUIConfig(this.sessionStore.getName());
var n=this.sessionStore.getPropertyNames(g.invisible);
n=this.sort(n,j.order);
var l=this.sessionStore.getData();
if(this.version==CQ_Analytics.ClickstreamcloudUI.VERSION_LIGHT){var h=new Array();
var p=new Array();
for(var m=0;
m<n.length;
m++){var f=n[m];
var s=this.sessionStore.getProperty(f);
if(s==f){h.push(f);
p.push(f)
}else{var r=CQ.shared.XSS.getXSSTablePropertyValue(l,f);
r=CQ_Analytics.Variables.replaceVariables(r);
if(CQ_Analytics.Utils.indexOf(h,r)==-1){h.push(r);
f=CQ.shared.XSS.KEY_REGEXP.test(f)?f.substring(0,f.length-4):f;
p.push(f)
}}}for(var m=0,e=0;
m<h.length;
m++){var f=p[m];
var q=h[m];
q=CQ_Analytics.Variables.replaceVariables(q);
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var o=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(f),true);
this.addLink(this.sessionStore.getLabel(f),o,"ccl-data-light",f)
}else{this.addStaticText(q,"ccl-data-light",f)
}e++;
if(e>3){e=0;
this.addLineBreak()
}}}else{for(var m=0;
m<n.length;
m++){var f=n[m];
var r=CQ.shared.XSS.getXSSTablePropertyValue(l,f);
f=CQ.shared.XSS.KEY_REGEXP.test(f)?f.substring(0,f.length-4):f;
if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_TEXTFIELD){this.addNameValueField(this.sessionStore.getLabel(f),r,f,"ccl-data",f)
}else{if(this.mode==CQ_Analytics.ClickstreamcloudUI.MODE_LINK){var o=CQ_Analytics.Utils.externalize(this.sessionStore.getLink(f),true);
this.addLink(this.sessionStore.getLabel(f),o,"ccl-data",f)
}else{this.addStaticText(this.sessionStore.getLabel(f),"ccl-data",f)
}}this.contentbox.appendChild(document.createTextNode(" "))
}}}};
this.buildSection=function(){if(this.contentbox==null){this.buildContentBox()
}if(this.section==null){this.section=document.createElement("div")
}var f=document.createElement("div");
f.className="ccl-header";
this.section.appendChild(f);
var e=document.createElement("div");
e.innerHTML=CQ.shared.I18n.getVarMessage(this.title);
e.className="ccl-title";
f.appendChild(e);
this.section.appendChild(this.contentbox)
}
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype=new CQ_Analytics.Observable();
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.get=function(){if(this.section==null){this.buildSection()
}return this.section
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.reset=function(){if(!this.isReseting){this.isReseting=true;
if(this.section!=null){while(this.section.hasChildNodes()){this.section.removeChild(this.section.firstChild)
}this.contentbox=null
}this.buildSection();
this.isReseting=false
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addNameValueField=function(c,d,b,a,e){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createNameValue(b,d,a,e))
};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLink=function(e,c,a,d){if(c){var b=document.createElement("span");
b.className=a||"ccl-data";
b.title=d;
b.alt=d;
b.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createStaticLink(e,c,d));
this.contentbox.appendChild(b)
}else{this.addStaticText(e)
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addStaticText=function(c,a,b){if(c){this.contentbox.appendChild(CQ_Analytics.ClickstreamcloudRenderingUtils.createText(c,a,b))
}};
CQ_Analytics.ClickstreamcloudUI.prototype.Section.prototype.addLineBreak=function(){this.contentbox.appendChild(document.createElement("br"))
};
CQ_Analytics.ClickstreamcloudUI=new CQ_Analytics.ClickstreamcloudUI();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.init(CQ_Analytics.CCM.getConfig()["ui"])
})
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.EventDataMgr){CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.EventDataMgr)
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.PageDataMgr){CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.PageDataMgr)
}if(window.CQ_Analytics&&window.CQ_Analytics.BrowserInfoInstance){CQ_Analytics.BrowserInfoInstance.versionI18nMapping={"7 or higher":CQ.I18n.getMessage("{0} or higher",7,"{0} is a placeholder for browser version, ex: 7 or higher"),"10 or higher":CQ.I18n.getMessage("{0} or higher",10,"{0} is a placeholder for browser version, ex: 7 or higher"),"11 or higher":CQ.I18n.getMessage("{0} or higher",11,"{0} is a placeholder for browser version, ex: 7 or higher"),Unresolved:CQ.I18n.getMessage("Unresolved",null,"Browser version unresolved")};
CQ_Analytics.BrowserInfoInstance.familyI18nMapping={Unresolved:CQ.I18n.getMessage("Unresolved",null,"Browser family unresolved")};
CQ_Analytics.BrowserInfoInstance.osI18nMapping={Unresolved:CQ.I18n.getMessage("Unresolved",null,"Operating system unresolved")};
CQ_Analytics.BrowserInfoInstance.getBrowserVersionI18n=function(){return CQ_Analytics.BrowserInfoInstance.versionI18nMapping[this.getBrowserVersion()]||this.getBrowserVersion()
};
CQ_Analytics.BrowserInfoInstance.getBrowserFamilyI18n=function(){return CQ_Analytics.BrowserInfoInstance.familyI18nMapping[this.getBrowserFamily()]||this.getBrowserFamily()
};
CQ_Analytics.BrowserInfoInstance.getOSNameI18n=function(){return CQ_Analytics.BrowserInfoInstance.osI18nMapping[this.getOSName()]||this.getOSName()
};
CQ_Analytics.BrowserInfoInstance.getBrowserNameI18n=function(){return this.getBrowserFamilyI18n()+" "+this.getBrowserVersionI18n()
}
}$CQ(function(){CQ_Analytics.Slider=function(a){return{init:function(){this.vertical=!!a.vertical;
a.vertical=this.vertical;
this.clazz=a.clazz;
this.parent=a.parent;
var b=(this.vertical?"vertical":"horizontal");
this.container=$CQ("<div>").addClass("cq-cc-slider").addClass("cq-cc-slider-"+b).addClass(this.clazz).appendTo(this.parent);
this.container.hide();
var c=$CQ("<div>").addClass("jcarousel-skin-cq-cc").appendTo(this.container);
this.carouselContainer=$CQ("<div>").addClass("jcarousel-container").addClass("jcarousel-container-"+b).appendTo(c);
$CQ("<div>").addClass("jcarousel-prev").addClass("jcarousel-prev-horizontal").appendTo(c);
$CQ("<div>").addClass("jcarousel-next").addClass("jcarousel-next-horizontal").appendTo(c);
this.carousel=$CQ("<ul>").appendTo(this.carouselContainer)
},show:function(){if(!this.isWidget){a.list=a.list||"ul";
a.items=a.items||"li";
this.carouselContainer.jcarousel(a);
$CQ(".jcarousel-prev",this.container).jcarouselControl({target:"-=3"});
$CQ(".jcarousel-next",this.container).jcarouselControl({target:"+=3"});
this.isWidget=true
}var c=$CQ(".cq-cc-slider",this.parent);
var b=this;
c.show();
b.select(b.computeSelectedIndex(),true,true);
c.hide();
if(this.vertical){this.container.slideDown("fast")
}else{c.css("top",(this.parent.position().top-7)+"px");
c.css("left",(this.parent.position().left-25)+"px");
$CQ(".jcarousel-container-horizontal",b.parent).css("width","90px");
c.fadeIn(1000,function(){$CQ(".jcarousel-container-horizontal",b.parent).animate({width:"268px"},"fast",function(){b.carousel.jcarousel()
})
})
}b.container.bind("click",this.stopPropagation);
$CQ(document).bind("click",{scope:this},this.handleDocClick)
},handleDocClick:function(b){b.data.scope.hide()
},stopPropagation:function(b){b.stopPropagation()
},hide:function(){$CQ(document).unbind("click",this.handleDocClick);
this.container.unbind("click",this.stopPropagation);
if(this.vertical){this.container.slideUp("fast")
}else{var b=this;
$CQ(".jcarousel-container-horizontal",this.parent).animate({width:"90px"},"fast",function(){$CQ(".cq-cc-slider",b.parent).fadeOut(1000)
})
}},select:function(g,c,e){var d=this.getSelected();
var h=this.getIndex(d);
if(c||d.length==0||(h!=g)){var f=this.getItem(g);
d.removeClass("jcarousel-item-selected");
f.addClass("jcarousel-item-selected");
$CQ(this.container).find(".jcarousel-item-selected-marker").removeClass("jcarousel-item-selected-marker");
var j=this.getCurrentValue();
var b=f.children().attr("data-id");
$CQ(this.container).find("[data-id='"+b+"']").addClass("jcarousel-item-selected-marker");
if(j!=b){this.onSelect(b)
}var l=Math.max(this.getIndex(f),0);
this.carouselContainer.jcarousel("scroll",l,!e)
}},getSelected:function(){return $CQ(this.container).find(".jcarousel-item-selected")
},computeSelectedIndex:function(){var b=this.getCurrentValue();
return this.getIndex($CQ(this.container).find("[data-id='"+b+"']"))
},getItem:function(b){if(b<0){return $CQ([])
}var c=$CQ(this.container).find("li").get(b);
return(c?$CQ(c):$CQ([]))
},getIndex:function(e){var d=$CQ(e);
var b=d.closest("ul").find("li");
var c=(d.is("li")?d:d.closest("li"));
return b.index(c)
},onSelect:function(b){},getCurrentValue:function(){}}
}
});
if(CQ_Analytics&&CQ_Analytics.SalesforceProfileDataMgr){CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.SalesforceProfileDataMgr)
}if(CQ_Analytics&&CQ_Analytics.CampaignSeedMgr){CQ_Analytics.CampaignSeedMgr.orderedProperties=[];
CQ_Analytics.CampaignSeedMgr.excludedProperties=[];
CQ_Analytics.CampaignSeedMgr.formatPropertyName=function(a){return a
};
CQ_Analytics.CampaignSeedMgr.getPropertyLabel=function(a){var c=this.formatPropertyName(a)+"/label";
var b=CQ_Analytics.CampaignMetadataMgr.getProperty(c);
return CQ.I18n.getMessage(b)||a
};
CQ_Analytics.CampaignSeedMgr.getDisplayValue=function(a){var c=this.getProperty(a);
var b=CQ_Analytics.CampaignMetadataMgr.getProperty(this.formatPropertyName(a)+"/type");
if(b&&b=="boolean"){if(c&&("1"==""+c)){return this.getPropertyLabel(a)+CQ.I18n.getMessage(": true")
}return this.getPropertyLabel(a)+CQ.I18n.getMessage(": false")
}var d=this.formatPropertyName(a)+"/values/"+c+"/label";
var e=CQ_Analytics.CampaignMetadataMgr.getProperty(d);
return e||c
};
CQ_Analytics.CampaignSeedMgr.getPropertyNames=function(c,a){if(this.data==null){this.init()
}a=a?a:[];
c=c||"";
var b=new Array();
for(var d in this.data){if(CQ_Analytics.Utils.indexOf(a,d)==-1){if(d.indexOf(c)==0){b.push(d)
}}}return b
};
CQ_Analytics.CampaignSeedMgr.renderStoreProperty=function(b,a){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var c=function(){var d=CQ_Analytics.CampaignSeedMgr;
if(d){var e=function(){var f=d.getDisplayValue(a)||"";
var g=b.attr("id");
if(b.attr("contenteditable")&&b.attr("contenteditable")!="inherit"){return
}b.attr("title","/"+a);
f=CQ_Analytics.Variables.replaceVariables(f);
if(CQ_Analytics.isUIAvailable){f=(!f||f=="")?CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+d.getPropertyLabel(a):f
}else{f=(!f||f=="")?"No "+d.getPropertyLabel(a):f
}if(b.html()!=f){if(d.fireEvent("beforepropertyrender",d,g)!==false){b.html(f);
d.fireEvent("propertyrender",d,g)
}}};
if(d.fireEvent("beforeinitialpropertyrender",d,id)!==false){e();
if(d.addListener){d.addListener("update",function(){e()
})
}d.fireEvent("initialpropertyrender",d,id)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(CQ_Analytics.CampaignSeedMgr.getName(),c)
})
}};
CQ_Analytics.CampaignSeedMgr.internalRenderer=function(c,b,g){CQ_Analytics.CampaignSeedMgr.lastSeedId=g;
function e(r){var m=false;
var p=[];
var j=function(v,x){for(var u in v){if(!v.hasOwnProperty(u)){continue
}var w=x+(x?"/":"")+u;
if($CQ.isPlainObject(v[u])){j(v[u],w)
}else{if($CQ.inArray(w,CQ_Analytics.CampaignSeedMgr.excludedProperties)<0){var t=CQ_Analytics.CampaignMetadataMgr.getProperty(w+"/order");
if(t){m=true;
p[t]=w
}else{if(!m){p.push(w)
}}}}}};
var s="";
if(r.context&&r.context.profile){r=r.context.profile;
s="context/profile"
}j(r,s);
var q=CQ_Analytics.CampaignSeedMgr.orderedProperties;
if(!m&&q.length){var l=[];
for(var n=0;
n<q.length;
n++){var h=q[n];
var o=$CQ.inArray(h,p);
if(o>=0){l.push(h);
delete p[o]
}}for(var n=0;
n<p.length;
n++){if(p[n]){l.push(p[n])
}}return l
}return p
}function f(m){CQ_Analytics.CampaignSeedMgr.initJSON(m);
var h=$CQ("<div/>").addClass("cq-cc-content");
var o=$CQ("<div/>").addClass("cq-cc-clear");
a.append(h);
a.append(o);
CQ_Analytics.CampaignSeedMgr.reset();
var t=CQ_Analytics.CampaignSeedMgr.getJSON();
var q=e(t);
for(var n=0;
n<q.length;
n++){var p=q[n];
if(p){var r=CQ_Analytics.CampaignSeedMgr.getProperty(p,true);
if(typeof r!="function"){var j=c.getName()+"-"+p.replace(new RegExp("/","ig"),"-");
var l=$CQ("<div/>").addClass("cq-cc-store-property cq-cc-store-property-level3").appendTo(h);
var s=$CQ("<div/>").attr("id",j).appendTo(l);
CQ_Analytics.CampaignSeedMgr.renderStoreProperty(s,p)
}}}}var a=$CQ("#"+b);
a.children().remove();
if(g&&CQ_Analytics.CampaignMetadataMgr&&CQ_Analytics.CampaignMetadataMgr.baseURL){var d=CQ_Analytics.CampaignMetadataMgr.baseURL;
d+=CQ_Analytics.CampaignSeedMgr.SERVICE_PATH;
d=d.replace(/{seed}/g,encodeURIComponent(g));
$CQ.getJSON(CQ.shared.HTTP.noCaching(d),function(h){CQ_Analytics.CampaignMetadataMgr.whenDataAvailable(f,h)
})
}else{if(!g){a.append("<div>"+CQ.I18n.getMessage("No Adobe Campaign seed id provided for the current profile")+"</div>")
}else{a.append("<div>"+CQ.I18n.getMessage("No valid configuration to Adobe Campaign service")+"</div>")
}}};
CQ_Analytics.CampaignSeedMgr.renderer=function(b,a){function c(){if(f!=CQ_Analytics.CampaignSeedMgr.lastSeedId){CQ_Analytics.ClientContextUtils.onStoreRegistered("campaignmetadata",function(){CQ_Analytics.CampaignSeedMgr.internalRenderer(b,a,f)
})
}}var f=CQ_Analytics.ProfileDataMgr.getProperty("acSeedId");
var e=null;
if(!f){f=CQ_Analytics.ProfileDataMgr.getProperty("campaign/seedId");
e=CQ_Analytics.ProfileDataMgr.getProperty("campaign/noSeedId")
}if(!f&&(e!="true")){var d=CQ_Analytics.ProfileDataMgr.getProperty("path");
$CQ.ajax(CQ.shared.HTTP.noCaching(d+"/campaign.json"),{dataType:"json",async:false,success:function(g){if(g){if(g.seedId){f=g.seedId;
CQ_Analytics.ProfileDataMgr.setProperty("campaign/seedId",f)
}else{CQ_Analytics.ProfileDataMgr.setProperty("campaign/noSeedId","true")
}}c()
},error:function(){CQ_Analytics.ProfileDataMgr.setProperty("campaign/noSeedId","true");
c()
}})
}else{c()
}}
}if(window.CQ_Analytics&&window.CQ_Analytics.ViewedProducts){CQ_Analytics.ViewedProducts.renderer=function(b,a){CQ_Analytics.ViewedProducts.internalRenderer(b,a)
};
CQ_Analytics.ViewedProducts.internalRenderer=function(c,b){var a=$CQ("#"+b),d;
a.children().remove();
var h=$CQ("<div/>").addClass("cq-cc-viewedproducts"),g=$CQ("<span/>").addClass("cq-cc-viewedproducts-title").text(CQ.I18n.getMessage("Recently viewed:"));
g.appendTo(h);
for(d=0;
d<c.data.length&&d<7;
d++){var e=c.data[d],f=e.image?CQ.shared.HTTP.externalize(e.image)+".thumbnail.png":"";
$CQ("<img>").attr("title",e.title).attr("src",f).appendTo(h)
}h.hide();
a.append(h);
h.fadeIn("fast")
}
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr.createHTMLElement=function(){var e=document.createElement("div");
var c=document.createElement("div");
var b=this;
c.className="cloud";
var d=0;
this.each(function(g,l){var f=document.createElement("div");
var j=b.calculateNtile(l,10);
var m=g.split(":");
var h=m[m.length-1].split("/");
f.innerHTML=h[h.length-1];
f.className="tag";
if(b.addedTags[g]){f.className+=" new"
}f.className+=" tag"+j;
f.title=g+" ("+l+")";
f.setAttribute("data-property",g);
f.setAttribute("data-store",b.STORENAME);
c.appendChild(f);
c.appendChild(document.createTextNode(" "));
d++
});
if(d==0){var a=document.createElement("div");
a.className="tag notag";
a.innerHTML=CQ.I18n.getMessage("No interest",null,"Tag cloud is empty");
c.appendChild(a)
}e.appendChild(c);
return e
};
CQ_Analytics.TagCloudMgr.renderer=function(a,b){if(a&&a.STORENAME==CQ_Analytics.TagCloudMgr.STORENAME){$CQ("#"+b).children().remove();
$CQ("#"+b).append(a.createHTMLElement())
}};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()),this.createHTMLElement)
},CQ_Analytics.TagCloudMgr)
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.SurferInfoMgr){CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.SurferInfoMgr);
var setI18nProperties=function(){var a=CQ_Analytics.BrowserInfoInstance;
var e=a.getBrowserFamilyI18n();
var b=a.getBrowserVersionI18n();
var d=a.getOSNameI18n();
var c="${/surferinfo/browserFamily_i18n} ${/surferinfo/browserVersion_i18n}";
this.addInitProperty("browserFamily_i18n",e);
this.addInitProperty("browserVersion_i18n",b);
this.addInitProperty("browser_i18n",c);
this.addInitProperty("OS_i18n",d);
this.setProperty("browserFamily_i18n",e);
this.setProperty("browserVersion_i18n",b);
this.setProperty("browser_i18n",c);
this.setProperty("OS_i18n",d)
};
setI18nProperties.call(CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.MobileSliderUtils){CQ_Analytics.MobileSliderUtils=function(){return{injectCss:function(a){$CQ("head").append("<link>");
var b=$CQ("head").children(":last");
b.attr({rel:"stylesheet",type:"text/css",href:CQ.shared.HTTP.externalize(a)})
},removeCss:function(a){$CQ("[href='"+CQ.shared.HTTP.externalize(a)+"']").remove()
},switchToMobile:function(a){this.injectMobileBodyClass(a);
this.injectMobileCss(a)
},switchToDesktop:function(a){this.injectDesktopBodyClass(a);
this.injectDesktopCss(a)
},injectDesktopCss:function(d){var a=this.getConfig(d,"DESKTOP_CSS");
if(a){for(var c=0;
c<a.length;
c++){var b=a[c];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(b,"app",d))
}}a=this.getConfig(d,"MOBILE_CSS");
if(a){for(var c=0;
c<a.length;
c++){var b=a[c];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(b,"app",d))
}}},injectMobileCss:function(d){var a=this.getConfig(d,"MOBILE_CSS");
if(a){for(var c=0;
c<a.length;
c++){var b=a[c];
CQ_Analytics.MobileSliderUtils.injectCss(CQ_Analytics.Variables.replace(b,"app",d))
}}a=this.getConfig(d,"DESKTOP_CSS");
if(a){for(var c=0;
c<a.length;
c++){var b=a[c];
CQ_Analytics.MobileSliderUtils.removeCss(CQ_Analytics.Variables.replace(b,"app",d))
}}},injectMobileBodyClass:function(d){var b=this.getConfig(d,"MOBILE_BODY_CLASS");
if(b){for(var a=0;
a<b.length;
a++){var e=b[a];
$CQ(document.body).addClass(e)
}}b=this.getConfig(d,"DESKTOP_BODY_CLASS");
if(b){for(var a=0;
a<b.length;
a++){var e=b[a];
$CQ(document.body).removeClass(e)
}}},injectDesktopBodyClass:function(d){var b=this.getConfig(d,"DESKTOP_BODY_CLASS");
if(b){for(var a=0;
a<b.length;
a++){var e=b[a];
$CQ(document.body).addClass(e)
}}b=this.getConfig(d,"MOBILE_BODY_CLASS");
if(b){for(var a=0;
a<b.length;
a++){var e=b[a];
$CQ(document.body).removeClass(e)
}}},getConfig:function(c,b){var a=CQ_Analytics.MobileSliderUtils.CONFIG[c];
if(!a){return null
}return CQ_Analytics.MobileSliderUtils.CONFIG[c][b]
}}
}();
CQ_Analytics.MobileSliderUtils.CONFIG=window.CQMobileSlider||{}
}if(window.CQ_Analytics&&window.CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr.internalRenderer=function(a){var c=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
CQ_Analytics.SocialGraphMgr.lastUid=c;
var d=CQ_Analytics.ProfileDataMgr.getProperty("path");
var b=d+".form.html";
b+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/socialgraph.js");
b+="?limit=10";
b+="&callback=${callback}";
CQ_Analytics.SocialGraphMgr.load(CQ.shared.HTTP.externalize(b),{},function(){$CQ("#"+a).children().remove();
CQ_Analytics.SocialGraphMgr.reset();
var g=CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
var e=$CQ("<div>").addClass("cq-socialgraph");
$CQ("<div>").addClass("cq-socialgraph-text").html(CQ.I18n.getMessage("{0}'s friends and followers (social graph):",g,"{0} is a placeholder for a person's name")+" ").appendTo(e);
var p={};
var j=this.getJSON();
var q=j.friends;
if(q){for(var l in q){if(q[l]["authorizableId"]){p[q[l]["authorizableId"]]=q[l]
}}}var n=j.followers;
if(n){for(var l in n){if(n[l]["authorizableId"]){p[n[l]["authorizableId"]]=n[l]
}}}var o=0;
for(var h in p){var m=p[h];
$CQ("<img>").attr("title",m.formattedName||m.authorizableId).attr("src",CQ.shared.HTTP.externalize(m.avatar)).appendTo(e);
o++;
if(o>=9){break
}}e.hide();
$CQ("#"+a).append(e);
e.fadeIn("fast")
})
};
CQ_Analytics.SocialGraphMgr.renderer=function(b,a){var c=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(c!=CQ_Analytics.SocialGraphMgr.lastUid){CQ_Analytics.SocialGraphMgr.internalRenderer(a)
}}
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.SegmentMgr){CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.SegmentMgr)
}if(window.CQ_Analytics&&window.CQ_Analytics.RelatedProducts){CQ_Analytics.RelatedProducts.renderer=function(b,a){CQ_Analytics.RelatedProducts.internalRenderer(b,a)
};
CQ_Analytics.RelatedProducts.internalRenderer=function(j,l){var c=$CQ("#"+l);
c.children().remove();
var d={},e,g,f;
for(e=0;
e<j.data.length;
e++){g=j.data[e];
f=g.relationshipTitle;
if(!d[f]){d[f]=[]
}d[f].push(g)
}var a=$CQ("<div/>").addClass("cq-cc-relatedproducts");
for(f in d){if(!d.hasOwnProperty(f)){continue
}var b=$CQ("<div/>").addClass("cq-cc-relatedproducts-category"),h=$CQ("<span/>").addClass("cq-cc-relatedproducts-categorytitle").text(f);
h.appendTo(b);
for(e=0;
e<d[f].length&&e<7;
e++){var m=d[f][e];
$CQ("<img>").attr("title",m.title).attr("src",CQ.shared.HTTP.externalize(m.image)).appendTo(b)
}b.appendTo(a)
}a.hide();
c.append(a);
a.fadeIn("fast")
}
}if(window.CQ_Analytics&&window.CQ_Analytics.CCM&&window.CQ_Analytics.ProfileDataMgr){var initProfileDataMgr=function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()));
$CQ(CQ.shared.ClientSidePersistence).bind(CQ.shared.ClientSidePersistence.EVENT_NAME,function(c,f){if(!f){return
}if(((f.key==="CLIENTCONTEXT")||(f.key==="PROFILEDATA"))&&(f.mode!=CQ.shared.ClientSidePersistence.MODE_COOKIE.name)){var b=new CQ.shared.ClientSidePersistence({container:"",mode:CQ.shared.ClientSidePersistence.MODE_COOKIE});
var e=b.get(f.key);
if(f.key==="PROFILEDATA"&&(!e||e=="")&&f.action!="set"){CQ.shared.ClientSidePersistence.clearAllMaps()
}var a=f.key;
var h="";
var g=null;
if(f.value&&f.value!=""){var d=new CQ_Analytics.PersistedSessionStore();
d.init=function(){this.data={}
};
d.persist=function(){};
g=d.parse(f.value);
if(g.authorizableId){d.setProperty("authorizableId",g.authorizableId)
}if(g.visitorId){d.setProperty("visitorId",g.visitorId)
}h=d.toString()
}b.set(a,h)
}})
};
if(CQ_Analytics.CCM.isConfigLoaded){initProfileDataMgr.call(CQ_Analytics.ProfileDataMgr)
}else{CQ_Analytics.CCM.addListener("configloaded",initProfileDataMgr,CQ_Analytics.ProfileDataMgr)
}}if(window.CQ_Analytics&&window.CQ_Analytics.OrderHistoryMgr){CQ_Analytics.OrderHistoryMgr.renderer=function(b,a){CQ_Analytics.OrderHistoryMgr.internalRenderer(b,a)
};
CQ_Analytics.OrderHistoryMgr.internalRenderer=function(l,m){var d=$CQ("#"+m);
d.children().remove();
if(!l.data.traits){d.append($CQ("<div/>").text(CQ.I18n.getMessage("Not on an eCommerce page.")));
return
}var c=$CQ("<div/>");
var g=$CQ("<div/>").addClass("cq-cc-clear");
var j=l.data.traits;
if(j){for(var h in j){var n=j[h];
var e=$CQ("<div/>").addClass("cq-cc-orderhistory-trait").append(n.name+":");
if(!n.data){continue
}if(n.data instanceof Array){for(var f=0;
f<n.data.length;
f++){var b=$CQ("<span/>").addClass("cq-cc-orderhistory-property").append(n.data[f]);
e.append(" ");
e.append(b)
}}else{if(typeof n.data==="object"){for(var a in n.data){var b=$CQ("<span/>").addClass("cq-cc-orderhistory-property").text(a+"="+n.data[a]);
e.append(" ");
e.append(b)
}}else{var b=$CQ("<span/>").addClass("cq-cc-orderhistory-property").text(n.data);
e.append(" ");
e.append(b)
}}c.append(e)
}}d.append(c);
d.append(g)
}
}if(window.CQ_Analytics&&window.CQ_Analytics.CartMgr){CQ_Analytics.CartMgr.renderer=function(b,a){CQ_Analytics.CartMgr.internalRenderer(b,a)
};
CQ_Analytics.CartMgr.internalRenderer=function(g,j){var s=$CQ("#"+j);
s.children().remove();
if(!g.data.entries){s.append($CQ("<div/>").text(CQ.I18n.getMessage("Not on an eCommerce page.")));
return
}s.off(".cart");
s.on("click.cart","a[data-voucher]",function(y){var x=$CQ(this).attr("data-voucher");
for(var w=0;
w<g.data.vouchers.length;
w++){if(g.data.vouchers[w].code==x){g.data.vouchers.splice(w,1);
break
}}if(y&&y.preventDefault){y.preventDefault()
}g.fireEvent("update","vouchers");
return false
});
var n=$CQ("<div/>").addClass("cq-cc-content");
var a=$CQ("<div/>").addClass("cq-cc-clear");
if(g.data.entries&&g.data.entries.length>0){var c=$CQ("<ol/>").addClass("cq-cc-cart-items");
for(var r=0;
r<g.data.entries.length;
r++){var b=g.data.entries[r];
var o=$CQ("<a/>").attr("href",CQ.shared.HTTP.externalize(b.page)).text(b.title);
var l=$CQ("<span/>").addClass("cq-cc-store-property").addClass("cq-cc-cart-item-quantity").append($CQ("<span/>").attr("data-store","cart").attr("data-property","entries["+r+"].quantity").text(b.quantity));
var q=$CQ("<span/>").addClass("cq-cc-cart-item-price").text(b.priceFormatted);
var p=$CQ("<li/>").prepend(l).prepend(q).prepend(o).prepend($CQ("<img/>").attr("src",CQ.shared.HTTP.externalize(b.thumbnail)));
c.append(p)
}n.append(c)
}var m=$CQ("<div/>").addClass("cq-cc-cart-totalprice").append($CQ("<span/>").addClass("cq-cc-store-property").attr("data-store","cart").attr("data-property","totalPriceFloat").attr("title","/cart/totalPrice").text(g.data.totalPrice));
n.append(m);
if(g.data.promotions&&g.data.promotions.length>0){var e=$CQ("<div/>").addClass("cq-cc-cart-promotions");
for(var r=0;
r<g.data.promotions.length;
r++){var d=g.data.promotions[r];
if(d.description){var f=$CQ("<a/>");
if(d.status=="POTENTIAL"){f.text(d.title+" ("+CQ.I18n.getMessage("potential")+")")
}else{f.text(d.title)
}if(d.path&&d.path.length>0&&d.path[0]=="/"){f.attr("href",CQ.shared.HTTP.externalize(d.path+".html"))
}f.addClass("cq-html-tooltip").attr("data-tooltip",d.description).prop("title",d.description);
e.append(f)
}}n.append(e)
}if(g.data.vouchers&&g.data.vouchers.length>0){var u=$CQ("<div/>").addClass("cq-cc-cart-vouchers").attr("title","/cart/vouchers");
for(var r=0;
r<g.data.vouchers.length;
r++){var t=g.data.vouchers[r];
var h=$CQ("<a/>").attr("href","#").attr("data-voucher",t.code);
u.append(h);
var v=$CQ("<span/>").attr("title",t.description||CQ.I18n.getMessage("Voucher")).text(t.code);
if(t.path){v=$CQ("<a/>").attr("href",CQ.shared.HTTP.externalize(t.path+".html")).append(v)
}u.append(v)
}n.append(u)
}s.append(n);
s.append(a)
}
}if(window.CQ_Analytics&&window.CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr.refreshExperiences=function(){if(!this.data){return
}var e=this.getCampaignByPath(this.data.path);
var c=$CQ("#cq-cc-campaign-experience-selector");
c.children().remove();
if(!e){c.append($CQ("<option>").text(CQ.I18n.getMessage("(simulation)")));
c.select2("val",CQ.I18n.getMessage("(simulation)"));
return
}var b={value:CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE};
if(this.data["recipe/path"]===CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){b.selected="selected"
}c.append($CQ("<option>",b).text(CQ.I18n.getMessage("(default)")));
if(b.selected==="selected"){c.select2("val",b.value)
}var d=this;
var a=false;
$CQ.each(e.experiences,function(h,j){a=true;
var f=j.path;
var g={value:f};
if(d.data["recipe/path"]===f){g.selected="selected"
}c.append($CQ("<option>",g).text(j.title));
if(g.selected==="selected"){c.select2("val",f)
}})
};
CQ_Analytics.CampaignMgr.getCampaignByPath=function(a){return this.getCampaignBy("path",a)
};
CQ_Analytics.CampaignMgr.reload=function(c){this.setSuppressEvents(true);
var b=this;
var a=CQ_Analytics.ClientContextMgr.getClientContextURL("/content/jcr:content/stores/"+this.STORENAME+".init.js");
a=CQ.shared.HTTP.externalize(a);
$CQ.ajax(a).done(function(d){b.refreshExperiences();
if(c){b.setProperty("recipe/path",c)
}b.setSuppressEvents(false);
b.fireEvent("update")
}).always(function(){b.setSuppressEvents(false)
})
};
CQ_Analytics.CampaignMgr.getExperienceByPath=function(a){if(a===CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){return{title:CQ.I18n.getMessage("(default)"),path:CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE,id:CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE}
}return this.getExperienceBy("path",a)
};
CQ_Analytics.CampaignMgr.displayWarning=function(a){var b=$CQ("<span>").attr("class","cq-cc-store-warning-sign").text("!");
$CQ("<div>").attr("class","cq-cc-store-warning").text(a).appendTo($CQ("#cq-cc-store-warnings")).prepend(b)
};
CQ_Analytics.CampaignMgr.renderer=function(l,m){var b,e;
var h=this;
$CQ("#"+m).children().remove();
var a="<div class='cq-cc-store'>";
a+="<div id='cq-cc-store-warnings'></div>";
if(this.data.campaigns){a+="<div class='cq-cc-campaign-prop'><a class='label' target='_blank' id='cq-cc-campaign-selector-label'>"+CQ.I18n.get("Active campaign:")+" </a> <select id='cq-cc-campaign-selector'>";
a+='<option value="">'+CQ.I18n.getMessage("(simulation)")+"</option>";
for(e=0;
e<this.data.campaigns.length;
e++){b=this.data.campaigns[e];
var c=false;
if(this.data.path&&this.data.path===b.path){c=true
}var j=c?' selected="selected" ':"";
a+='<option value="'+b.path+'" '+j+">"+b.title+"</option>"
}a+="</select></div>";
a+="<div class='cq-cc-campaign-prop'>";
a+="<a class='label' target='_blank' id='cq-cc-campaign-experience-selector-label'>";
a+=CQ.I18n.getMessage("Active experience:")+" </a> <select id='cq-cc-campaign-experience-selector'>";
a+="</select></div>"
}else{a+=CQ.I18n.getMessage("No campaigns found")
}a+="</div>";
var d={width:"180px",dropdownCssClass:"cq-cc-campaign-store-dropdown"};
$CQ("#"+m).append(a);
$CQ("#cq-cc-campaign-selector").select2(d);
$CQ("#cq-cc-campaign-experience-selector").select2(d);
CQ_Analytics.CampaignMgr.fireEvent("selectors-created");
h.refreshExperiences();
var g=this.getProperty("path");
$CQ("#cq-cc-campaign-selector-label").toggleClass("cq-cc-campaign-prop-button",!!(g)).attr("href",g?g+".html":null);
var f=this.getProperty("recipe/path");
if(f===CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){f=null
}$CQ("#cq-cc-campaign-experience-selector-label").toggleClass("cq-cc-campaign-prop-button",!!(f)).attr("href",f?f+".html":null);
b=this.getCampaignByPath(g);
if(b&&b.experiences.length===0){this.displayWarning(CQ.I18n.getMessage("The selected campaign does not have any experience pages."))
}$CQ("#cq-cc-campaign-selector").change(function(){var n=$CQ(this).find(":selected");
h.setCampaign(h.getCampaignByPath(n.val()));
h.refreshExperiences()
});
$CQ("#cq-cc-campaign-experience-selector").change(function(){var n=$CQ(this).find(":selected").val();
h.setExperience(h.getExperienceByPath(n))
})
};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.ClickstreamcloudUI.register(this.getSessionStore(),CQ_Analytics.CCM.getUIConfig(this.getName()))
},CQ_Analytics.CampaignMgr)
}JSON=window.JSON||{};
(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
CQ_Analytics=CQ_Analytics||{};
CQ_Analytics.AAM=CQ_Analytics.AAM||{};
CQ_Analytics.AAM.LookupDialogCtl=CQ_Analytics.AAM.LookupDialogCtl||function(c,b){var a=b.configPath||"/etc/cloudservices/audiencemanager/geometrixx";
a=a+".traits.json";
return{init:function(d){return new CQ_Analytics.AAM.LookupDialog(c,{container:d,traitLookupUrl:a})
}}
};
CQ_Analytics.AAM.LookupDialog=CQ_Analytics.AAM.LookupDialog||function(j,u){u=u||{};
var c=u.callback||function(){};
var s=u.debug||false;
var p=u.traitLookupUrl;
var h=u.container;
var m=j;
var d={};
var q={};
var r={};
var f=null;
var n=null;
var l=function(){};
if(s){l=function(w){console.log(w)
}
}function t(w){d=w||{};
q={};
$.each(d,function(x,y){q[x]=y
})
}t(u.availableTraits);
function v(w){t(w);
b(n,q)
}function g(w){c=w||function(){}
}function e(x){var w={};
$.each(x,function(y,z){if(z.name&&!z.title){z.title=z.name
}w[z.id]=z
});
return w
}function b(y,w){var x=[];
$.each(w,function(z,A){if(A){if(A.name&&!A.title){A.title=A.name
}x.push({value:z,text:A.title,qtip:z})
}});
y.setOptions(x);
return x
}function o(y,w,x,z){if(w!==x){z.hide();
CQ.Ext.Msg.wait(CQ.I18n.getMessage("Searching...."));
$.getJSON(p,{q:w},function(A){CQ.Ext.Msg.wait(CQ.I18n.getMessage("Searching....")).hide();
if(A.traits){l("Value set to "+JSON.stringify(A.traits));
z.options=[];
r=e(A.traits);
b(z,r);
z.show()
}}).error(function(){CQ.Ext.Msg.wait(CQ.I18n.getMessage("Search Failed, please contact support")).hide();
CQ.Ext.Msg.alert(CQ.I18n.getMessage("Error"),CQ.I18n.getMessage("Search Failed, please contact support"))
})
}}function a(){f=CQ.Util.build({allowBlank:true,fieldLabel:CQ.I18n.getMessage("Traits to add"),fieldSubLabel:CQ.I18n.getMessage("select to add"),xtype:"selection",type:"checkbox",listeners:{selectionchanged:function(C,B,A){l("Adding Trait "+B+" "+A);
if(A&&B&&r[B]){q[B]=r[B];
r[B]=false;
b(f,r);
b(n,q)
}}}});
f.hide();
n=CQ.Util.build({allowBlank:true,fieldLabel:CQ.I18n.getMessage("Current traits"),fieldSubLabel:CQ.I18n.getMessage("select to remove"),xtype:"selection",type:"checkbox",listeners:{selectionchanged:function(C,B,A){l("Removeing Trait "+B+" "+A);
if(A&&B&&q[B]){r[B]=q[B];
q[B]=false;
b(f,r);
b(n,q)
}}}});
b(n,q);
var z=null;
var w=null;
z=CQ.Util.build({allowBlank:true,fieldLabel:CQ.I18n.getMessage("Trait"),fieldSubLabel:CQ.I18n.getMessage("enter search"),url:p,name:"q",xtype:"textfield",listeners:{change:function(C,A,B){o(C,A,B,f);
w=A
},specialkey:function(C,B){l("Special key ");
if(B.getKey()==B.ENTER){var A=z.getValue();
o(z,A,w,f);
w=A
}}}});
var y=CQ.Util.build({xtype:"panel",layout:"column",autoScroll:"true",items:[{xtype:"panel",bodyBorder:false,border:false,title:CQ.I18n.getMessage("Search Traits"),columnWidth:0.5,items:[{xtype:"panel",layout:"form",bodyBorder:false,border:false,items:[z,f]}]},{xtype:"panel",bodyBorder:false,border:false,title:CQ.I18n.getMessage("Selected Traits"),columnWidth:0.5,items:[{xtype:"panel",layout:"form",bodyBorder:false,border:false,items:[n]}]}]});
if(h){h.removeAll();
h.add(y);
h.mon(h,{beforesubmit:function(){m.setAvailableTraits(q);
h.hide();
return false
}});
h.mon(h,{loadcontent:function(){m.getAvailableTraits(v)
}});
return{}
}else{var x=new CQ.Dialog({height:200,width:600,title:CQ.I18n.getMessage("Manage Traits"),buttons:[{text:CQ.I18n.getMessage("OK"),handler:function(){l("Saving "+JSON.stringify(q));
c(q)
}},{text:CQ.I18n.getMessage("Cancel"),handler:function(){l("Cancel "+JSON.stringify(d));
c(d)
}}],items:[y]});
return{show:function(B,A){t(B);
g(A);
x.show()
},hide:function(){x.hide()
}}
}}return a()
};
CQ_Analytics=window.CQ_Analytics||{};
CQ_Analytics.AAM=CQ_Analytics.AAM||{};
CQ_Analytics.AAM.SegmentsMgr=CQ_Analytics.AAM.SegmentsMgr||function(c,a){function b(){var g=a.store_name||"aamsegments";
var o=a.debug||false;
var j="/etc/segmentation/aam.infinity.json";
var l=c;
var q=null;
var h=true;
var r=function(t,s){return"<span class='aamsegments-name' >"+s+"</span>"
};
var e=CQ_Analytics.JSONStore.getInstance(g,null,null,function(){this.init();
this.reset()
});
var d=function(){};
if(o){d=function(s){console.log("DEBUG: aamsegments.js "+s)
}
}var m=function(s){console.log("ERROR: aamsegments.js "+s)
};
d("Created newStore as "+e);
function f(t){var s={};
if(t["jcr:content"]){if(t["jcr:content"].aam_sid){d("Got segment "+t["jcr:content"].aam_sid);
s[t["jcr:content"].aam_sid]={title:t["jcr:content"]["jcr:title"],key:t["jcr:content"].aam_sid,content:t["jcr:content"]}
}else{d("In Folder "+t["jcr:content"].aam_path)
}}if("object"===typeof t){$.each(t,function(w,u){if(w!=="jcr:content"){s=$.extend(s,f(u))
}})
}return s
}function p(t,s){if(h){h=false;
var u=$("#"+s);
if(u){u.children().remove();
$.each(l.getUserSegments(),function(w,x){if(x&&q[w]){var v=q[w];
u.prepend(r(w,v.title))
}})
}}}function n(s){d("Loading Segment Info "+e+" with callback "+s);
if(q){s()
}else{d("Get segment info from "+j);
q=q||{};
$.getJSON(j,function(t){q=$.extend(q,f(t));
s()
}).fail(function(t,v,u){m("failed to load segment info from "+j+" cause "+v);
s()
})
}}l.addListener("update",function(){h=true;
e.fireEvent("update")
});
e.renderer=p;
n(function(){CQ_Analytics.CCM.register(e)
});
d("New Segment Manager created "+e);
return e
}return b()
};
CQ_Analytics=window.CQ_Analytics||{};
CQ_Analytics.AAM=CQ_Analytics.AAM||{};
CQ_Analytics.AAM.TraitsMgr=CQ_Analytics.AAM.TraitsMgr||function(c,a){function b(){var l=a.store_name||"aamtraits";
var t=a.configPath||"/etc/cloudservices/audiencemanager/geometrixx";
t=t+".traits.json";
var u=a.pagePath||false;
var y=a.debug||false;
var g=false;
var x=c;
var h=true;
var v=false;
var f=false;
var z={};
var A=function(D,C,E){return"<label data-key='"+D+"' class='"+E+"' ><div class='toggle'><div class='green'></div><div class='red'></div></div>"+C+"</label>"
};
var e=CQ_Analytics.PersistedJSONStore.getInstance(l,null,null,function(){this.init();
this.reset()
});
var p=function(){};
if(y){p=function(C){console.log("DEBUG aamtraits.js: "+C)
}
}var w=function(C){console.log("ERROR aamtraits.js: "+C)
};
p("Created newStore as "+e);
function m(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/audiencemanager/loader.json")
}function r(D,E){var C=m();
$.getJSON(C,{authorizableId:D},function(F){f=D;
z={};
if(F.selectedTraits){p("Loaded User Triats for user "+f+" as "+F.selectedTraits);
z=$.parseJSON(F.selectedTraits)
}else{p("Loaded User Triats for user "+f+" as "+F.selectedTraits)
}E()
}).fail(function(F,H,G){w("Loaded User Triats for user "+f+" gave error "+H);
f=D;
z={};
E()
})
}function B(){if(!f){f=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId")
}var C=m();
p("Saving User Triats for user "+f);
$.post(C,{authorizableId:f,selectedTraits:JSON.stringify(z)},function(E,F,D){if(D.status!==200){w("Unable to update saved traits for user, "+F+" please investigate, POST was to "+C+" "+errorThrown)
}},"json").fail(function(D,F,E){w("Unable to update saved traits for user, "+F+" please investigate, POST was to "+C+" "+E)
})
}function j(){var C=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
p("User id "+C+" currentUser id "+f);
if(f!==C){f=C;
z={};
p("Perforing Load User traits");
r(C,function(){h=true;
e.fireEvent("update");
q();
p("Done resolving segments after change of profile.")
})
}}function o(D){if(g){v={73801:{title:"Trait 73801"},73802:{title:"Trait 73801"},73803:{title:"Trait 73801"},73804:{title:"Trait 73801"}};
D()
}else{if(false){var C=CQ_Analytics.AAM.LookupDialog({traitLookupUrl:t});
C.show(v,function(E){C.hide();
v=E;
n(D)
})
}else{v={};
D()
}}}function n(C){if(u){$.post(u,{availableTraits:JSON.stringify(v)},function(){p("Saved Traits")
}).error(function(){p("Failed to save trats")
})
}else{p("Not saving traits config, no url to save to.")
}C()
}function d(C){v={};
if(u){p("Loading traits from "+u);
$.getJSON(u+".json",function(D){if(D.availableTraits){try{v=$.parseJSON(D.availableTraits);
C()
}catch(E){w(" Avaialable Traits were invalid, error, reloading "+E.stack);
o(C)
}}else{w(" No traits found  "+JSON.stringify(D));
o(C)
}}).error(function(){w("Error Loading traits. ");
o(C)
})
}else{w(" No traits url  ");
o(C)
}}function q(){var D=[];
p("Resolving segments for user traits ");
$.each(z,function(E,F){if(F&&v[E]){D.push(E)
}});
if(D.length===0){D.push(-1)
}var C={sid:D};
x.invoke(C)
}function s(D,C){if(h){p("Performing internal render");
h=false;
var E=$("#"+C);
E.children().remove();
p("Starting to render Traits "+JSON.stringify(v));
$.each(v,function(F,H){if(H){p("Info "+JSON.stringify(H));
var G=(z[F]);
E.prepend(A(F,H.title,G?"checked":""))
}});
$("label",E).each(function(){p("Binding to "+this.id)
});
$("label",E).click(function(){var F=$(this).data("key");
p("Clicked "+F+" current state "+$(this).hasClass("checked"));
if($(this).hasClass("checked")){$(this).removeClass("checked");
delete z[F];
p("Trait "+F+" Off ")
}else{$(this).addClass("checked");
z[F]=true;
p("Trait "+F+" On ")
}B();
q();
return false
});
p("Done render Traits ")
}}e.renderer=s;
e.setAvailableTraits=function(C){v=C;
p("Saving Traits "+JSON.stringify(v));
n(function(){h=true;
e.fireEvent("update");
p("Fired update")
})
};
e.getAvailableTraits=function(C){C(v)
};
d(function(){p("Available traits loaded "+JSON.stringify(v)+" registering this store");
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(C){j();
C.addListener("update",j);
p("Registered this agains profile store, and loaded current")
});
CQ_Analytics.CCM.register(e)
});
p("New Trait Manager created "+e);
return e
}return b(a)
};
if(CQ_Analytics.CustomStoreMgr){CQ_Analytics.CustomStoreMgr.template="<label for=''>%value%";
CQ_Analytics.CustomStoreMgr.templateRenderer=function(b){var a=CQ_Analytics.CustomStoreMgr.template;
return a.replace(/%value%/g,b)
};
CQ_Analytics.CustomStoreMgr.renderer=function(c,b){$CQ("#"+b).children().remove();
var d=CQ_Analytics.ProfileDataMgr.getProperty("formattedName");
var a=CQ_Analytics.CustomStoreMgr.templateRenderer;
$CQ("#"+b).addClass("cq-cc-customstore");
var g=$CQ("<div>").html(d+" Extended Properties");
$CQ("#"+b).append(g);
var e=this.getJSON();
if(e){var f=JSON.parse(JSON.stringify(e));
if(JSON.stringify(e)!="{}"){$CQ("#"+b).append(a("healthcare"))
}}$CQ(".customstore-input").change(function(){var j=false;
if($CQ(this).attr("checked")){j=true
}var h=$CQ(this).attr("name");
$CQ("label[for='customstore-input-"+h+"']").toggleClass("checked");
var l=(j===true)?"true":"false";
CQ_Analytics.CustomStoreMgr.setTraitValue(h,l);
CQ_Analytics.ProfileDataMgr.fireEvent("update")
})
};
CQ_Analytics.CustomStoreMgr.setTraitValue=function(a,c){var b=CQ_Analytics.CustomStoreMgr.data;
if(b){b[a+"/value"]=c
}};
CQ_Analytics.ClickstreamcloudMgr.register(CQ_Analytics.CustomStoreMgr)
}(function(a){a.widget("ui.tagit",{options:{allowDuplicates:false,caseSensitive:true,fieldName:"tags",placeholderText:null,readOnly:false,removeConfirmation:false,tagLimit:null,availableTags:[],autocomplete:{},showAutocompleteOnFocus:false,requireAutocomplete:true,allowSpaces:false,singleField:false,singleFieldDelimiter:",",singleFieldNode:null,animate:true,tabIndex:null,beforeTagAdded:null,afterTagAdded:null,beforeTagRemoved:null,afterTagRemoved:null,onTagClicked:null,onTagLimitExceeded:null,onTagAdded:null,onTagRemoved:null,tagSource:null},_create:function(){var f=this;
if(this.element.is("input")){this.tagList=a("<ul></ul>").insertAfter(this.element);
this.options.singleField=true;
this.options.singleFieldNode=this.element;
this.element.css("display","none")
}else{this.tagList=this.element.find("ul, ol").andSelf().last()
}this.tagInput=a('<input type="text" />').addClass("ui-widget-content");
if(this.options.readOnly){this.tagInput.attr("disabled","disabled")
}if(this.options.tabIndex){this.tagInput.attr("tabindex",this.options.tabIndex)
}if(this.options.placeholderText){this.tagInput.attr("placeholder",this.options.placeholderText)
}if(!this.options.autocomplete.source){this.options.autocomplete.source=function(h,g){var j=h.term.toLowerCase();
var l=a.grep(this.options.availableTags,function(m){return(m.toLowerCase().indexOf(j)===0)
});
if(!this.options.allowDuplicates){l=this._subtractArray(l,this.assignedTags())
}g(l)
}
}if(this.options.showAutocompleteOnFocus){this.tagInput.focus(function(g,h){f._showAutocomplete()
});
if(typeof this.options.autocomplete.minLength==="undefined"){this.options.autocomplete.minLength=0
}}if(a.isFunction(this.options.autocomplete.source)){this.options.autocomplete.source=a.proxy(this.options.autocomplete.source,this)
}if(a.isFunction(this.options.tagSource)){this.options.tagSource=a.proxy(this.options.tagSource,this)
}this.tagList.addClass("tagit").addClass("ui-widget ui-widget-content ui-corner-all").append(a('<li class="tagit-new"></li>').append(this.tagInput)).click(function(j){var h=a(j.target);
if(h.hasClass("tagit-label")){var g=h.closest(".tagit-choice");
if(!g.hasClass("removed")){f._trigger("onTagClicked",j,{tag:g,tagLabel:f.tagLabel(g)})
}}else{f.tagInput.focus()
}});
var d=false;
if(this.options.singleField){if(this.options.singleFieldNode){var e=a(this.options.singleFieldNode);
var c=e.val().split(this.options.singleFieldDelimiter);
e.val("");
a.each(c,function(h,g){f.createTag(g,null,null,true);
d=true
})
}else{this.options.singleFieldNode=a('<input type="hidden" style="display:none;" value="" name="'+this.options.fieldName+'" />');
this.tagList.after(this.options.singleFieldNode)
}}if(!d){this.tagList.children("li").each(function(){if(!a(this).hasClass("tagit-new")){f.createTag(a(this).text(),null,a(this).attr("class"),true);
a(this).remove()
}})
}this.tagInput.keydown(function(h){if(h.which==a.ui.keyCode.BACKSPACE&&f.tagInput.val()===""){var g=f._lastTag();
if(!f.options.removeConfirmation||g.hasClass("remove")){f.removeTag(g)
}else{if(f.options.removeConfirmation){g.addClass("remove ui-state-highlight")
}}}else{if(f.options.removeConfirmation){f._lastTag().removeClass("remove ui-state-highlight")
}}if(f.options.requireAutocomplete!==true){if(h.which===a.ui.keyCode.COMMA||h.which===a.ui.keyCode.ENTER||(h.which==a.ui.keyCode.TAB&&f.tagInput.val()!=="")||(h.which==a.ui.keyCode.SPACE&&f.options.allowSpaces!==true&&(a.trim(f.tagInput.val()).replace(/^s*/,"").charAt(0)!='"'||(a.trim(f.tagInput.val()).charAt(0)=='"'&&a.trim(f.tagInput.val()).charAt(a.trim(f.tagInput.val()).length-1)=='"'&&a.trim(f.tagInput.val()).length-1!==0)))){if(!(h.which===a.ui.keyCode.ENTER&&f.tagInput.val()==="")){h.preventDefault()
}if(!f.tagInput.data("autocomplete-open")){f.createTag(f._cleanedInput())
}}}}).blur(function(g){if(f.options.requireAutocomplete!==true){if(!f.tagInput.data("autocomplete-open")){f.createTag(f._cleanedInput())
}}});
if(this.options.availableTags||this.options.tagSource||this.options.autocomplete.source){var b={select:function(g,h){f.createTag(h.item.value,h.item.id);
return false
}};
a.extend(b,this.options.autocomplete);
b.source=this.options.tagSource||b.source;
this.tagInput.autocomplete(b).bind("autocompleteopen",function(g,h){f.tagInput.data("autocomplete-open",true)
}).bind("autocompleteclose",function(g,h){f.tagInput.data("autocomplete-open",false)
})
}},_cleanedInput:function(){return a.trim(this.tagInput.val().replace(/^"(.*)"$/,"$1"))
},_lastTag:function(){return this.tagList.find(".tagit-choice:last:not(.removed)")
},_tags:function(){return this.tagList.find(".tagit-choice:not(.removed)")
},assignedTags:function(){var c=this;
var b=[];
if(this.options.singleField){b=a(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter);
if(b[0]===""){b=[]
}}else{this._tags().each(function(){b.push(c.tagLabel(this))
})
}return b
},_updateSingleTagsField:function(b){a(this.options.singleFieldNode).val(b.join(this.options.singleFieldDelimiter)).trigger("change")
},_subtractArray:function(d,c){var b=[];
for(var e=0;
e<d.length;
e++){if(a.inArray(d[e],c)==-1){b.push(d[e])
}}return b
},tagLabel:function(b){if(this.options.singleField){return a(b).find(".tagit-label:first").text()
}else{return a(b).find("input:first").val()
}},_showAutocomplete:function(){this.tagInput.autocomplete("search","")
},_findTagByLabel:function(c){var d=this;
var b=null;
this._tags().each(function(e){if(d._formatStr(c)==d._formatStr(d.tagLabel(this))){b=a(this);
return false
}});
return b
},_isNew:function(b){return !this._findTagByLabel(b)
},_formatStr:function(b){if(this.options.caseSensitive){return b
}return a.trim(b.toLowerCase())
},_effectExists:function(b){return Boolean(a.effects&&(a.effects[b]||(a.effects.effect&&a.effects.effect[b])))
},createTag:function(n,c,j,b){var h=this;
var e=c;
if(!e){var g=a('input[name="'+this.options.fieldName+'"]');
a.each(g,function(s,t){var r=a(t).attr("value").toLowerCase();
if(r.indexOf(n.toLowerCase())>0){e=r
}})
}n=a.trim(n);
if(this.options.preprocessTag){n=this.options.preprocessTag(n)
}if(n===""){return false
}if(!this.options.allowDuplicates&&(!this._isNew(n)||!this._isNew(e))){var f=this._findTagByLabel(e)?this._findTagByLabel(e):this._findTagByLabel(n);
if(this._trigger("onTagExists",null,{existingTag:f,duringInitialization:b})!==false){if(this._effectExists("highlight")){f.effect("highlight")
}}return false
}if(this.options.tagLimit&&this._tags().length>=this.options.tagLimit){this._trigger("onTagLimitExceeded",null,{duringInitialization:b});
return false
}var m=a(this.options.onTagClicked?'<a class="tagit-label"></a>':'<span class="tagit-label"></span>').text(n);
var q=a("<li></li>").addClass("tagit-choice ui-widget-content ui-state-default ui-corner-all").addClass(j).append(m);
if(this.options.readOnly){q.addClass("tagit-choice-read-only")
}else{q.addClass("tagit-choice-editable");
var d=a("<span></span>").addClass("ui-icon ui-icon-close");
var l=a('<a><span class="text-icon">\xd7</span></a>').addClass("tagit-close").append(d).click(function(r){h.removeTag(q)
});
q.append(l)
}if(!this.options.singleField){var p=e?e:m.html();
q.append('<input type="hidden" style="display:none;" value="'+p+'" name="'+this.options.fieldName+'" />')
}if(this._trigger("beforeTagAdded",null,{tag:q,tagLabel:this.tagLabel(q),duringInitialization:b})===false){return
}if(this.options.singleField){var o=this.assignedTags();
o.push(n);
this._updateSingleTagsField(o)
}this._trigger("onTagAdded",null,q);
this.tagInput.val("");
this.tagInput.parent().before(q);
this._trigger("afterTagAdded",null,{tag:q,tagLabel:this.tagLabel(q),duringInitialization:b});
if(this.options.showAutocompleteOnFocus&&!b){setTimeout(function(){h._showAutocomplete()
},0)
}},removeTag:function(b,d){d=typeof d==="undefined"?this.options.animate:d;
b=a(b);
this._trigger("onTagRemoved",null,b);
if(this._trigger("beforeTagRemoved",null,{tag:b,tagLabel:this.tagLabel(b)})===false){return
}if(this.options.singleField){var f=this.assignedTags();
var e=this.tagLabel(b);
f=a.grep(f,function(h){return h!=e
});
this._updateSingleTagsField(f)
}if(d){b.addClass("removed");
var g=this._effectExists("blind")?["blind",{direction:"horizontal"},"fast"]:["fast"];
var c=this;
g.push(function(){b.remove();
c._trigger("afterTagRemoved",null,{tag:b,tagLabel:c.tagLabel(b)})
});
b.fadeOut("fast").hide.apply(b,g).dequeue()
}else{b.remove();
this._trigger("afterTagRemoved",null,{tag:b,tagLabel:this.tagLabel(b)})
}},removeTagByLabel:function(d,b){var c=this._findTagByLabel(d);
if(!c){throw"No such tag exists with the name '"+d+"'"
}this.removeTag(c,b)
},removeAll:function(){var b=this;
this._tags().each(function(d,c){b.removeTag(c,false)
})
}})
})($CQ);
(function(c,b){c.soco=c.soco||{};
c.soco.calendar=c.soco.calendar||{};
var a={};
a.CLEAR="lcl.cq.soco.events.clear";
c.soco.calendar.WEEK_DAYS=["SU","MO","TU","WE","TH","FR","SA"];
c.soco.calendar.FREQUENCIES={yearly:Date.YEAR,monthly:Date.MONTH,weekly:Date.WEEK,daily:Date.DAY,hourly:Date.HOUR,minutely:Date.MINUTE,secondly:Date.SECOND};
c.soco.calendar.increment=function(e,d){return d.add(this.FREQUENCIES[e.frequency],e.interval||1)
};
c.soco.calendar.calculateCandidates=function(g,d){var f=[];
f.push(d);
function e(p,l,o){if(!l){return p
}var h=[];
for(var n=0;
n<p.length;
n++){var q=p[n];
for(var m=0;
m<l.length;
m++){o(q,l[m],h,m)
}}return h
}f=e(f,g.byMonth,function(j,l,h){j.setMonth(l-1);
h.push(j)
});
f=e(f,g.byMonthDay,function(j,l,h){if(l>0){j.setDate(l)
}else{j.setDate(j.getLastDayOfMonth()+l)
}h.push(j)
});
f=e(f,g.byWeekDay,function(l,h,s,p){var j=c.soco.calendar.WEEK_DAYS.indexOf(h);
if(g.byMonthDay){if(l.getDay()==j){s.push(l)
}}else{var r=[];
if(g.frequency=="monthly"||g.byMonth){var q=l.getMonth();
l.setDate(1);
while(l.getDay()!=j){l=l.add(Date.DAY,1)
}while(l.getMonth()==q){r.push(l.clone());
l=l.add(Date.DAY,7)
}}else{if(g.frequency=="yearly"){var o=l.getYear();
l=l.add(Date.DAY,-l.getDayOfYear());
while(l.getDay()!=j){l=l.add(Date.DAY,1)
}while(l.getYear()==o){r.push(l.clone());
l=l.add(Date.DAY,7)
}}}var m=g.byWeekDayOffset[p];
if(m==0){for(var n=0;
n<r.length;
n++){s.push(r[n])
}}else{if(m>=-r.length&&m<0){s.push(r[r.length+m])
}else{if(m>0&&m<=r.length){s.push(r[m-1])
}}}}});
return f
};
c.soco.calendar.calculateRecurDates=function(j,l,m){var e=[];
var h=new Date(l);
var f;
var n=null;
var d=0;
while(d<100){d++;
if(n&&n.getTime()>m){break
}var g=this.calculateCandidates(j,h.clone());
for(f=0;
f<g.length;
f++){n=g[f];
if(n.getTime()>=l&&n.getTime()<=m){e.push(n.getTime())
}}h=this.increment(j,h)
}return e
};
c.soco.calendar.getOnsetAsUTC=function(e,d){return d-e.offsetFrom
};
c.soco.calendar.getLatestOnset=function(m,e){if(!m.initialOnset){if(typeof m.start==="string"){m.start=new Date(m.start).getTime()
}m.initialOnset=this.getOnsetAsUTC(m,m.start)
}if(e<m.initialOnset){return null
}var h=m.initialOnset;
var f,d;
if(m.dates){for(f=0;
f<m.dates.length;
f++){if(typeof m.dates[f]==="string"){m.dates[f]=new Date(m.dates[f]).getTime()
}var g=this.getOnsetAsUTC(m,m.dates[f]);
if(g<=e&&g>h){h=g
}}}if(m.rules){for(f=0;
f<m.rules.length;
f++){var l=this.calculateRecurDates(m.rules[f],h,e);
for(d=0;
d<l.length;
d++){var g=l[d];
if(g<=e&&g>h){h=g
}}}}return h
}
})(CQ,$CQ);
(function(c,b){c.soco=c.soco||{};
c.soco.calendar=c.soco.calendar||{};
c.soco.calendar.TimeZone=c.soco.calendar.TimeZone||{};
var a={};
a.CLEAR="lcl.cq.soco.events.clear";
c.soco.calendar.TimeZone=function(e){if(!e){e={tzID:"Etc/UTC",observances:[{tzName:"UTC",offsetFrom:0,offsetTo:0,start:"Thu Jan 01 1970 00:00:00 GMT+0000"}]}
}function d(g){if(g&&typeof g.getTime==="function"){g=g.getTime()
}var f=null;
var l=-1;
for(var h=0;
h<e.observances.length;
h++){var m=e.observances[h];
var j=c.soco.calendar.getLatestOnset(m,g);
if(j!=null&&(f==null||j>l)){l=j;
f=m
}}if(!f&&e.observances.length>0){return{offsetTo:e.observances[0].offsetFrom}
}return f
}this.getID=function(){return e.tzID
};
this.getTzURL=function(){return e.tzURL
};
this.getOffset=function(f){var g=d(f);
return g?g.offsetTo:0
};
this.getOffsetInMinutes=function(f){return this.getOffset(f)/60000
};
this.getShortName=function(f){var g=d(f);
return g?g.tzName:null
};
this.inDaylightTime=function(f){var g=d(f);
return g&&g.daylight
}
};
c.soco.calendar.TimeZone.httpBasePath="/.timezones.json/";
c.soco.calendar.TimeZone.UTC_ID="Etc/UTC";
c.soco.calendar.TimeZone.timezones={};
c.soco.calendar.TimeZone.setHTTPBasePath=function(d){this.httpBasePath=d
};
c.soco.calendar.TimeZone.load=function(d){if(!b.isArray(d)){d=[d]
}for(var e=0;
e<d.length;
e++){var f=d[e];
this.timezones[f.tzID]=new c.soco.calendar.TimeZone(f)
}};
c.soco.calendar.TimeZone.get=function(e){var d=this.timezones[e];
if(!d){d=this.fetchTimeZone(e);
if(!d){return null
}this.timezones[e]=d
}return d
};
c.soco.calendar.TimeZone.fetchTimeZone=function(e){var d=undefined;
b.ajax({url:this.httpBasePath+e,success:function(f){d=f
},async:false});
if(d){return new c.soco.calendar.TimeZone(d)
}else{return undefined
}}
})(CQ,$CQ);
(function(c,b){c.soco=c.soco||{};
c.soco.calendar=c.soco.calendar||{};
c.soco.calendar.Date=c.soco.calendar.Date||{};
var a={};
a.CLEAR="lcl.cq.soco.events.clear";
c.soco.calendar.Date=function(e,g){if(typeof e==="number"){e=new Date(e)
}else{if(typeof e==="string"){e=new Date(Date.parse(e))
}}if(typeof g==="string"){g=c.soco.calendar.TimeZone.get(g)
}var j=g.getOffsetInMinutes(e.getTime());
var q=new Date(e.getBuiltinTime?e.getBuiltinTime():e.getTime());
q.addOffset(j+e.getTimezoneOffset());
q.timezone=g;
q.timezoneOffset=j;
q.lastUTCMillis=q.getTime();
var h=c.soco.calendar.Date.prototype;
for(var f in h){q[f]=h[f]
}function n(m){return function(){return new Date(this.getTime())["getUTC"+m]()
}
}function d(m){return function(){var r=new Date(this.getTime());
r["setUTC"+m].apply(r,arguments);
this.setTime(r.getTime())
}
}var o=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"];
for(var l=0;
l<o.length;
l++){var p=o[l];
q["getUTC"+p]=n(p);
if(p!="Day"){q["setUTC"+p]=d(p)
}}return q
}
})(CQ,$CQ);
CQ.soco.calendar.Date.prototype=new Date;
CQ.soco.calendar.Date.getBuiltinTime=function(){return Date.prototype.getTime.apply(this)
};
CQ.soco.calendar.Date.getTime=function(){return this.calculateTime(-this.getTimezoneOffset())
};
CQ.soco.calendar.Date.calculateTime=function(a){var b=this.getBuiltinTime();
var c=-new Date(b).getTimezoneOffset();
c=-new Date(b).addOffset(c-a).getTimezoneOffset();
return new Date(b).addOffset(c-a).getTime()
};
CQ.soco.calendar.Date.setBuiltinTime=function(a){Date.prototype.setTime.call(this,a)
};
CQ.soco.calendar.Date.setTime=function(b){var a=new Date(b).shift(this.timezone);
this.setBuiltinTime(a.getBuiltinTime())
};
CQ.soco.calendar.Date.getTimezoneOffset=function(){var b=this.getBuiltinTime();
if(this.lastUTCMillis&&b!=this.lastUTCMillis){this.lastUTCMillis=b;
var a=this.calculateTime(this.timezoneOffset);
this.timezoneOffset=this.timezone.getOffsetInMinutes(a)
}return -this.timezoneOffset
};
CQ.soco.calendar.Date.getTimezone=function(){return this.timezone.getShortName(this)
};
CQ.soco.calendar.Date.getTimezoneInfo=function(){return this.timezone
};
CQ.soco.calendar.Date.getTimezoneID=function(){return this.timezone.getID()
};
CQ.soco.calendar.Date.inDaylightTime=function(){return this.timezone.inDaylightTime(this)
};
CQ.soco.calendar.Date.toString=function(){return this.format("D M d Y H:i:s \\G\\M\\TO (T)")
};
CQ.soco.calendar.Date.toUTCString=function(){return new Date(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds(),this.getUTCMilliseconds()).format("D M d Y H:i:s \\G\\M\\T")
};
CQ.soco.calendar.Date.toGMTString=function(){return this.toUTCString()
};
CQ.soco.calendar.Date.toTimeString=function(){return this.format("H:i:s \\G\\M\\TO (T)")
};
CQ.soco.calendar.Date.valueOf=function(){return this.getTime()
};
CQ.soco.calendar.Date.clone=function(){return new CQ.soco.calendar.Date(this,this.timezone)
};
Date.prototype.shift=function(a){if(!a){return this
}return CQ.soco.calendar.Date(this,a)
};
Date.prototype.replaceTimezone=function(b){if(!b){return this
}var a=CQ.soco.calendar.Date(this,b);
a.setDate(1);
a.setFullYear(this.getFullYear());
a.setMonth(this.getMonth());
a.setDate(this.getDate());
a.setHours(this.getHours());
a.setMinutes(this.getMinutes());
a.setSeconds(this.getSeconds());
a.setMilliseconds(this.getMilliseconds());
return a
};
Date.prototype.toUTC=function(){return this.shift(CQ.soco.calendar.TimeZone.UTC_ID)
};
Date.prototype.dateOnly=function(){return new Date(this.toDateString())
};
Date.prototype.utcDateOnly=function(){return new CQ.soco.calendar.Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate()),CQ.soco.calendar.TimeZone.UTC_ID)
};
Date.prototype.addOffset=function(a){if(a<0){this.setHours(this.getHours()-Math.floor(Math.abs(a/60)));
this.setMinutes(this.getMinutes()-Math.abs(a%60))
}else{this.setHours(this.getHours()+Math.floor(a/60));
this.setMinutes(this.getMinutes()+a%60)
}return this
};
Date.prototype.isSameDateAs=function(a){return this.getFullYear()==a.getFullYear()&&this.getMonth()==a.getMonth()&&this.getDate()==a.getDate()
};
Date.prototype.parseWithTimezone=function(d,b,c,e){var a=Date.parse(d);
if(a){a=new Date(a);
if(c){return a.toUTC().dateOnly()
}else{a=a.shift(b);
if(e){return a.shift(e)
}else{return a
}}}else{return null
}};
$CQ(function(a){a.fn.simpleAccordion=function(){this.each(function(){var g=a(this),h=g.find(".content");
var d=$CQ("<span class='accordion-toggle read-more'>"+CQ.I18n.getMessage("read more")+"</span>").click(function(){g.find(".accordion-toggle").toggleClass("expanded");
h.toggleClass("expanded");
if(h.hasClass("expanded")){h.find(".short").hide();
h.children().not(".short").slideDown()
}else{h.children().not(".short").slideUp("fast",function(){h.find(".short").show()
})
}}),c=h.find("p:first-child"),b=c.text();
var l=g.find(".accordion-toggle");
var j=g.find(".accordion-toggle .read-more");
var f=(b.length>150);
var e=a("<p>").addClass("short");
h.children().hide();
if(f){e.text(b.substring(0,150)).append(" ...");
e.append(d)
}else{e.text(b)
}c.before(e);
l.each(function(){var m=a(this);
m.click(function(){g.find(".accordion-toggle").toggleClass("expanded");
h.toggleClass("expanded");
if(h.hasClass("expanded")){h.find(".short").hide();
h.children().not(".short").slideDown()
}else{h.children().not(".short").slideUp("fast",function(){h.find(".short").show()
})
}})
})
})
}
});
(function(c,b){c.soco=c.soco||{};
c.soco.calendar=c.soco.calendar||{};
c.soco.calendar.utils=c.soco.calendar.utils||{};
c.soco.calendar.events=c.soco.calendar.events||{};
var a={};
a.CLEAR="lcl.cq.soco.events.clear";
c.soco.calendar.events.NEWEVENTSFETCHED="newEventFetch";
c.soco.calendar.events.DAYCLICK="dayClicked";
c.soco.calendar.events.EVENTSDELETED="eventsDeleted";
c.soco.calendar.events.EVENTSMODIFIED="eventsModified";
if(!Date.prototype.toISOString){(function(){function d(f){var e=String(f);
if(e.length===1){e="0"+e
}return e
}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1000).toFixed(3)).slice(2,5)+"Z"
}
}())
}c.soco.calendar.utils.padZero=function(d){return(d>=0&&d<10)?"0"+d:d+""
};
c.soco.calendar.utils.eventMap=function(f){var e=new Array();
var d=function(g){b.each(g,function(j,l){if(typeof l==="object"){if(l&&l["jcr:primaryType"]&&l["jcr:primaryType"]=="cq:CalendarEvent"){var h=new Object();
b.each(l,function(m,n){if(m=="jcr:title"){h.title=n
}else{if(m=="isDate"){h.allDay=n
}else{h[m]=n
}}});
e.push(h)
}else{d(l)
}}})
};
d(f);
return e
};
c.soco.calendar.utils.eventSources=function(e,d){var g=new Array();
var f=c.soco.calendar.utils.getEventsFunction(e,d);
var h=new Object();
h.events=f;
g.push(h);
return g
};
c.soco.calendar.utils.deleteEvent=function(j,h,d){var g=j;
var f=c.HTTP?c.HTTP:c.shared.HTTP;
g=g+".social.deleteevent.html";
g=f.addParameter(g,c.Sling.STATUS,c.Sling.STATUS_BROWSER);
if(h){g=f.addParameter(g,":deleteFromRecurrence","")
}var e=b.post(g);
e.done(function(l){b("#"+d).parent().trigger(c.soco.calendar.events.EVENTSDELETED);
b("#"+d).remove()
})
};
c.soco.calendar.utils.getEventsFunction=function(e,d){return function(j,g,h){var f={"1_orderby":"@start","2_orderby":"path","1_orderby.sort":"desc",_charset_:"utf-8","event.from":j.toISOString().substring(0,10),"event.to":g.toISOString().substring(0,10),"group.p.or":"true","p.acls":"true","p.hits":"full","p.limit":"0","p.nodedepth":"1","p.offset":"0",type:"cq:CalendarEvent"};
if(typeof e==="string"){f["group.1_path"]=e
}else{b.each(e,function(m,n){var l="group."+(m+1)+"_path";
f[l]=n
})
}b.post("/bin/querybuilder.json",f,function(m){b(".fc-widget-content").removeClass("pressed");
if(m&&m.success&&m.hits&&m.hits.length>=1){var l=[];
l=c.soco.calendar.utils.eventMap(m);
h(l);
d.trigger(c.soco.calendar.events.NEWEVENTSFETCHED,[m.hits]);
return
}else{h();
b(".fc-day").removeClass("highlight")
}d.trigger(c.soco.calendar.events.NEWEVENTSFETCHED,[])
},"json")
}
};
c.soco.calendar.utils.invokeFullCalendar=function(d,e){var f=b(d).fullCalendar({header:{left:"prev",center:"title",right:"next"},buttonText:{prev:'<img src="/etc.clientlibs/settings/wcm/designs/default/resources/social/mini-calendar-nav-left.png">',next:'<img src="/etc.clientlibs/settings/wcm/designs/default/resources/social/mini-calendar-nav-right.png">'},eventSources:c.soco.calendar.utils.eventSources(e,b(d)),dayNamesShort:["Su","Mo","Tu","We","Th","Fr","Sa"],dayClick:function(h,g){if(b(this).hasClass("pressed")){b(this).removeClass("pressed");
b(d).trigger(c.soco.calendar.events.DAYCLICK,[h,false])
}else{b(this).addClass("pressed");
b(d).trigger(c.soco.calendar.events.DAYCLICK,[h,true])
}},eventRender:function(m,l){b(l).empty();
var g=m.start;
var o=m.end;
var n=o?moment(o).diff(moment(g),"day",false):0;
if(b(".fc-day"+g.getDate()).length>0){g=g.getDate();
for(var j=0;
j<=n;
j++){b(".fc-day"+(g+j)).addClass("highlight")
}}else{for(var j=0;
j<=n;
j++){var h=new Date(g);
h.setDate(h.getDate()+j);
var h=h.getFullYear()+"-"+c.soco.calendar.utils.padZero(h.getMonth()+1)+"-"+c.soco.calendar.utils.padZero(h.getDate());
b(".fc-day[data-date = "+h+"]").addClass("highlight")
}}}});
return f
};
c.soco.calendar.utils.addEventHTML=function(d,f){var e=c.shared.HTTP.get(f+".html");
d.append(e.body)
};
c.soco.calendar.utils.createEventList=function(d,e,f){if(f){b(d).empty()
}if(e&&e.length>0){b.each(e,function(g,h){c.soco.calendar.utils.addEventHTML(d,h["jcr:path"])
})
}};
c.soco.calendar.utils.createFullEventList=function(d,g){var h=new Date();
h=new Date(h.setFullYear(h.getFullYear()-10));
var e=new Date();
var f=function(j){if(j&&j.hits){c.soco.calendar.utils.createEventList(b(d),j.hits,true)
}};
c.soco.calendar.utils.getEventDetails(h,e,g,f)
};
c.soco.calendar.utils.filterEventList=function(d,g,f){var e=moment(g);
if(f){b.each(b(d).children(),function(h,j){var n=moment(b(j).attr("data-startdate"));
var m=moment(b(j).attr("data-enddate"));
var l=((e.diff(n,"day",false)>=0)&&(e.diff(m,"day",false)<=0));
if(!l){b(j).hide()
}else{b(j).show()
}})
}else{b.each(b(d).children(),function(h,j){b(j).show()
})
}};
c.soco.calendar.utils.getEventDetails=function(h,e,g,f){var d={"1_orderby":"@start","2_orderby":"path",_charset_:"utf-8","1_orderby.sort":"desc","event.from":h.toISOString().substring(0,10),"event.to":e.toISOString().substring(0,10),"group.p.or":"true","p.acls":"true","p.hits":"full","p.limit":"0","p.nodedepth":"1","p.offset":"0",type:"cq:CalendarEvent"};
if(typeof g==="string"){d["group.1_path"]=g
}else{b.each(g,function(l,m){var j="group."+(l+1)+"_path";
d[j]=m
})
}b.post("/bin/querybuilder.json",d,function(j){if(j&&j.success&&j.hits&&j.hits.length>=1){if(f&&typeof f==="function"){f(j)
}}},"json")
}
})(CQ,$CQ);
/*!
 * FullCalendar v1.6.1
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(ar,v){var L={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:true,weekNumbers:false,weekNumberCalculation:"iso",weekNumberTitle:"W",allDayDefault:true,ignoreTimezone:true,lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"<span class='fc-text-arrow'>&lsaquo;</span>",next:"<span class='fc-text-arrow'>&rsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&laquo;</span>",nextYear:"<span class='fc-text-arrow'>&raquo;</span>",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:true,dropAccept:"*"};
var R={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"<span class='fc-text-arrow'>&rsaquo;</span>",next:"<span class='fc-text-arrow'>&lsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&raquo;</span>",nextYear:"<span class='fc-text-arrow'>&laquo;</span>"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}};
var ay=ar.fullCalendar={version:"<%= meta.version %>"};
var ad=ay.views={};
ar.fn.fullCalendar=function(aK){if(typeof aK=="string"){var aJ=Array.prototype.slice.call(arguments,1);
var aL;
this.each(function(){var aN=ar.data(this,"fullCalendar");
if(aN&&ar.isFunction(aN[aK])){var aM=aN[aK].apply(aN,aJ);
if(aL===v){aL=aM
}if(aK=="destroy"){ar.removeData(this,"fullCalendar")
}}});
if(aL!==v){return aL
}return this
}var aI=aK.eventSources||[];
delete aK.eventSources;
if(aK.events){aI.push(aK.events);
delete aK.events
}aK=ar.extend(true,{},L,(aK.isRTL||aK.isRTL===v&&L.isRTL)?R:{},aK);
this.each(function(aO,aM){var aN=ar(aM);
var aP=new s(aN,aK,aI);
aN.data("fullCalendar",aP);
aP.render()
});
return this
};
function ai(aI){ar.extend(true,L,aI)
}function s(a0,a7,ba){var bp=this;
bp.options=a7;
bp.render=bg;
bp.destroy=br;
bp.refetchEvents=aU;
bp.reportEvents=aY;
bp.reportEventChange=bt;
bp.rerenderEvents=aM;
bp.changeView=aR;
bp.select=bq;
bp.unselect=aT;
bp.prev=bc;
bp.next=aL;
bp.prevYear=bs;
bp.nextYear=aJ;
bp.today=a1;
bp.gotoDate=bf;
bp.incrementDate=a4;
bp.formatDate=function(bA,bz){return A(bA,bz,a7)
};
bp.formatDates=function(bB,bA,bz){return h(bB,bA,bz,a7)
};
bp.getDate=a5;
bp.getView=bb;
bp.option=bm;
bp.trigger=be;
r.call(bp,a7,ba);
var aI=bp.isFetchNeeded;
var bw=bp.fetchEvents;
var bn=a0[0];
var aN;
var bh;
var aW;
var by;
var aV;
var bx={};
var bd;
var aP;
var aS;
var bi=0;
var bo=0;
var bu=new Date();
var a9=[];
var aO;
y(bu,a7.year,a7.month,a7.date);
function bg(bz){if(!aW){a8()
}else{bj();
bv();
aK();
a6(bz)
}}function a8(){by=a7.theme?"ui":"fc";
a0.addClass("fc");
if(a7.isRTL){a0.addClass("fc-rtl")
}else{a0.addClass("fc-ltr")
}if(a7.theme){a0.addClass("ui-widget")
}aW=ar("<div class='fc-content' style='position:relative'/>").prependTo(a0);
aN=new S(bp,a7);
bh=aN.render();
if(bh){a0.prepend(bh)
}aR(a7.defaultView);
ar(window).resize(aX);
if(!aZ()){aQ()
}}function aQ(){setTimeout(function(){if(!aV.start&&aZ()){a6()
}},0)
}function br(){ar(window).unbind("resize",aX);
aN.destroy();
aW.remove();
a0.removeClass("fc fc-rtl ui-widget")
}function bk(){return bn.offsetWidth!==0
}function aZ(){return ar("body")[0].offsetWidth!==0
}function aR(bB){if(!aV||bB!=aV.name){bo++;
aT();
var bA=aV;
var bz;
if(bA){(bA.beforeHide||ap)();
I(aW,aW.height());
bA.element.hide()
}else{I(aW,1)
}aW.css("overflow","hidden");
aV=bx[bB];
if(aV){aV.element.show()
}else{aV=bx[bB]=new ad[bB](bz=aS=ar("<div class='fc-view fc-view-"+bB+"' style='position:absolute'/>").appendTo(aW),bp)
}if(bA){aN.deactivateButton(bA.name)
}aN.activateButton(bB);
a6();
aW.css("overflow","");
if(bA){I(aW,1)
}if(!bz){(aV.afterShow||ap)()
}bo--
}}function a6(bB){if(bk()){bo++;
aT();
if(aP===v){bj()
}var bA=false;
if(!aV.start||bB||bu<aV.start||bu>=aV.end){aV.render(bu,bB||0);
bl(true);
bA=true
}else{if(aV.sizeDirty){aV.clearEvents();
bl();
bA=true
}else{if(aV.eventsDirty){aV.clearEvents();
bA=true
}}}aV.sizeDirty=false;
aV.eventsDirty=false;
a3(bA);
bd=a0.outerWidth();
aN.updateTitle(aV.title);
var bz=new Date();
if(bz>=aV.start&&bz<aV.end){aN.disableButton("today")
}else{aN.enableButton("today")
}bo--;
aV.trigger("viewDisplay",bn)
}}function a2(){bv();
if(bk()){bj();
bl();
aT();
aV.clearEvents();
aV.renderEvents(a9);
aV.sizeDirty=false
}}function bv(){ar.each(bx,function(bz,bA){bA.sizeDirty=true
})
}function bj(){if(a7.contentHeight){aP=a7.contentHeight
}else{if(a7.height){aP=a7.height-(bh?bh.height():0)-E(aW)
}else{aP=Math.round(aW.width()/Math.max(a7.aspectRatio,0.5))
}}}function bl(bz){bo++;
aV.setHeight(aP,bz);
if(aS){aS.css("position","relative");
aS=null
}aV.setWidth(aW.width(),bz);
bo--
}function aX(){if(!bo){if(aV.start){var bz=++bi;
setTimeout(function(){if(bz==bi&&!bo&&bk()){if(bd!=(bd=a0.outerWidth())){bo++;
a2();
aV.trigger("windowResize",bn);
bo--
}}},200)
}else{aQ()
}}}function a3(bz){if(!a7.lazyFetching||aI(aV.visStart,aV.visEnd)){aU()
}else{if(bz){aM()
}}}function aU(){bw(aV.visStart,aV.visEnd)
}function aY(bz){a9=bz;
aM()
}function bt(bz){aM(bz)
}function aM(bz){aK();
if(bk()){aV.clearEvents();
aV.renderEvents(a9,bz);
aV.eventsDirty=false
}}function aK(){ar.each(bx,function(bz,bA){bA.eventsDirty=true
})
}function bq(bB,bz,bA){aV.select(bB,bz,bA===v?true:bA)
}function aT(){if(aV){aV.unselect()
}}function bc(){a6(-1)
}function aL(){a6(1)
}function bs(){ah(bu,-1);
a6()
}function aJ(){ah(bu,1);
a6()
}function a1(){bu=new Date();
a6()
}function bf(bA,bB,bz){if(bA instanceof Date){bu=M(bA)
}else{y(bu,bA,bB,bz)
}a6()
}function a4(bA,bz,bB){if(bA!==v){ah(bu,bA)
}if(bz!==v){o(bu,bz)
}if(bB!==v){aA(bu,bB)
}a6()
}function a5(){return M(bu)
}function bb(){return aV
}function bm(bz,bA){if(bA===v){return a7[bz]
}if(bz=="height"||bz=="contentHeight"||bz=="aspectRatio"){a7[bz]=bA;
a2()
}}function be(bz,bA){if(a7[bz]){return a7[bz].apply(bA||bn,Array.prototype.slice.call(arguments,2))
}}if(a7.droppable){ar(document).bind("dragstart",function(bB,bC){var bz=bB.target;
var bD=ar(bz);
if(!bD.parents(".fc").length){var bA=a7.dropAccept;
if(ar.isFunction(bA)?bA.call(bz,bD):bD.is(bA)){aO=bz;
aV.dragStart(aO,bB,bC)
}}}).bind("dragstop",function(bz,bA){if(aO){aV.dragStop(aO,bz,bA);
aO=null
}})
}}function S(aL,aU){var aT=this;
aT.render=aJ;
aT.destroy=aP;
aT.updateTitle=aN;
aT.activateButton=aI;
aT.deactivateButton=aR;
aT.disableButton=aK;
aT.enableButton=aO;
var aM=ar([]);
var aQ;
function aJ(){aQ=aU.theme?"ui":"fc";
var aV=aU.header;
if(aV){aM=ar("<table class='fc-header' style='width:100%'/>").append(ar("<tr/>").append(aS("left")).append(aS("center")).append(aS("right")));
return aM
}}function aP(){aM.remove()
}function aS(aV){var aX=ar("<td class='fc-header-"+aV+"'/>");
var aW=aU.header[aV];
if(aW){ar.each(aW.split(" "),function(aZ){if(aZ>0){aX.append("<span class='fc-header-space'/>")
}var aY;
ar.each(this.split(","),function(a2,a1){if(a1=="title"){aX.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
if(aY){aY.addClass(aQ+"-corner-right")
}aY=null
}else{var a0;
if(aL[a1]){a0=aL[a1]
}else{if(ad[a1]){a0=function(){a3.removeClass(aQ+"-state-hover");
aL.changeView(a1)
}
}}if(a0){var a4=aU.theme?D(aU.buttonIcons,a1):null;
var a5=D(aU.buttonText,a1);
var a3=ar("<span class='fc-button fc-button-"+a1+" "+aQ+"-state-default'>"+(a4?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+a4+"'/></span>":a5)+"</span>").click(function(){if(!a3.hasClass(aQ+"-state-disabled")){a0()
}}).mousedown(function(){a3.not("."+aQ+"-state-active").not("."+aQ+"-state-disabled").addClass(aQ+"-state-down")
}).mouseup(function(){a3.removeClass(aQ+"-state-down")
}).hover(function(){a3.not("."+aQ+"-state-active").not("."+aQ+"-state-disabled").addClass(aQ+"-state-hover")
},function(){a3.removeClass(aQ+"-state-hover").removeClass(aQ+"-state-down")
}).appendTo(aX);
aH(a3);
if(!aY){a3.addClass(aQ+"-corner-left")
}aY=a3
}}});
if(aY){aY.addClass(aQ+"-corner-right")
}})
}return aX
}function aN(aV){aM.find("h2").html(aV)
}function aI(aV){aM.find("span.fc-button-"+aV).addClass(aQ+"-state-active")
}function aR(aV){aM.find("span.fc-button-"+aV).removeClass(aQ+"-state-active")
}function aK(aV){aM.find("span.fc-button-"+aV).addClass(aQ+"-state-disabled")
}function aO(aV){aM.find("span.fc-button-"+aV).removeClass(aQ+"-state-disabled")
}}ay.sourceNormalizers=[];
ay.sourceFetchers=[];
var m={dataType:"json",cache:false};
var V=1;
function r(aO,aW){var aY=this;
aY.isFetchNeeded=aQ;
aY.fetchEvents=aX;
aY.addEventSource=aL;
aY.removeEventSource=aM;
aY.updateEvent=a1;
aY.renderEvent=aU;
aY.removeEvents=bd;
aY.clientEvents=a7;
aY.normalizeEvent=aT;
var a0=aY.trigger;
var aI=aY.getView;
var a3=aY.reportEvents;
var a5={events:[]};
var aJ=[a5];
var ba,a6;
var aK=0;
var bb=0;
var a9=0;
var aZ=[];
for(var a8=0;
a8<aW.length;
a8++){a2(aW[a8])
}function aQ(bf,be){return !ba||bf<ba||be>a6
}function aX(bi,bf){ba=bi;
a6=bf;
aZ=[];
var bh=++aK;
var be=aJ.length;
bb=be;
for(var bg=0;
bg<be;
bg++){aP(aJ[bg],bh)
}}function aP(bf,be){a4(bf,function(bh){if(be==aK){if(bh){if(aO.eventDataTransform){bh=ar.map(bh,aO.eventDataTransform)
}if(bf.eventDataTransform){bh=ar.map(bh,bf.eventDataTransform)
}for(var bg=0;
bg<bh.length;
bg++){bh[bg].source=bf;
aT(bh[bg])
}aZ=aZ.concat(bh)
}bb--;
if(!bb){a3(aZ)
}}})
}function a4(be,bo){var bj;
var bn=ay.sourceFetchers;
var bl;
for(bj=0;
bj<bn.length;
bj++){bl=bn[bj](be,ba,a6,bo);
if(bl===true){return
}else{if(typeof bl=="object"){a4(bl,bo);
return
}}}var bq=be.events;
if(bq){if(ar.isFunction(bq)){aS();
bq(M(ba),M(a6),function(br){bo(br);
bc()
})
}else{if(ar.isArray(bq)){bo(bq)
}else{bo()
}}}else{var bf=be.url;
if(bf){var bp=be.success;
var bm=be.error;
var bg=be.complete;
var bi=ar.extend({},be.data||{});
var bk=aG(be.startParam,aO.startParam);
var bh=aG(be.endParam,aO.endParam);
if(bk){bi[bk]=Math.round(+ba/1000)
}if(bh){bi[bh]=Math.round(+a6/1000)
}aS();
ar.ajax(ar.extend({},m,be,{data:bi,success:function(bs){bs=bs||[];
var br=H(bp,this,arguments);
if(ar.isArray(br)){bs=br
}bo(bs)
},error:function(){H(bm,this,arguments);
bo()
},complete:function(){H(bg,this,arguments);
bc()
}}))
}else{bo()
}}}function aL(be){be=a2(be);
if(be){bb++;
aP(be,aK)
}}function a2(be){if(ar.isFunction(be)||ar.isArray(be)){be={events:be}
}else{if(typeof be=="string"){be={url:be}
}}if(typeof be=="object"){aV(be);
aJ.push(be);
return be
}}function aM(be){aJ=ar.grep(aJ,function(bf){return !aR(bf,be)
});
aZ=ar.grep(aZ,function(bf){return !aR(bf.source,be)
});
a3(aZ)
}function a1(bj){var bh,bf=aZ.length,bk,be=aI().defaultEventEnd,bi=bj.start-bj._start,bg=bj.end?(bj.end-(bj._end||be(bj))):0;
for(bh=0;
bh<bf;
bh++){bk=aZ[bh];
if(bk._id==bj._id&&bk!=bj){bk.start=new Date(+bk.start+bi);
if(bj.end){if(bk.end){bk.end=new Date(+bk.end+bg)
}else{bk.end=new Date(+be(bk)+bg)
}}else{bk.end=null
}bk.title=bj.title;
bk.url=bj.url;
bk.allDay=bj.allDay;
bk.className=bj.className;
bk.editable=bj.editable;
bk.color=bj.color;
bk.backgroudColor=bj.backgroudColor;
bk.borderColor=bj.borderColor;
bk.textColor=bj.textColor;
aT(bk)
}}aT(bj);
a3(aZ)
}function aU(bf,be){aT(bf);
if(!bf.source){if(be){a5.events.push(bf);
bf.source=a5
}aZ.push(bf)
}a3(aZ)
}function bd(bf){if(!bf){aZ=[];
for(var be=0;
be<aJ.length;
be++){if(ar.isArray(aJ[be].events)){aJ[be].events=[]
}}}else{if(!ar.isFunction(bf)){var bg=bf+"";
bf=function(bh){return bh._id==bg
}
}aZ=ar.grep(aZ,bf,true);
for(var be=0;
be<aJ.length;
be++){if(ar.isArray(aJ[be].events)){aJ[be].events=ar.grep(aJ[be].events,bf,true)
}}}a3(aZ)
}function a7(be){if(ar.isFunction(be)){return ar.grep(aZ,be)
}else{if(be){be+="";
return ar.grep(aZ,function(bf){return bf._id==be
})
}}return aZ
}function aS(){if(!a9++){a0("loading",null,true)
}}function bc(){if(!--a9){a0("loading",null,false)
}}function aT(bf){var bg=bf.source||{};
var be=aG(bg.ignoreTimezone,aO.ignoreTimezone);
bf._id=bf._id||(bf.id===v?"_fc"+V++:bf.id+"");
if(bf.date){if(!bf.start){bf.start=bf.date
}delete bf.date
}bf._start=M(bf.start=Z(bf.start,be));
bf.end=Z(bf.end,be);
if(bf.end&&bf.end<=bf.start){bf.end=null
}bf._end=bf.end?M(bf.end):null;
if(bf.allDay===v){bf.allDay=aG(bg.allDayDefault,aO.allDayDefault)
}if(bf.className){if(typeof bf.className=="string"){bf.className=bf.className.split(/\s+/)
}}else{bf.className=[]
}}function aV(bg){if(bg.className){if(typeof bg.className=="string"){bg.className=bg.className.split(/\s+/)
}}else{bg.className=[]
}var bf=ay.sourceNormalizers;
for(var be=0;
be<bf.length;
be++){bf[be](bg)
}}function aR(bf,be){return bf&&be&&aN(bf)==aN(be)
}function aN(be){return((typeof be=="object")?(be.events||be.url):"")||be
}}ay.addDays=aA;
ay.cloneDate=M;
ay.parseDate=Z;
ay.parseISO8601=n;
ay.parseTime=aE;
ay.formatDate=A;
ay.formatDates=h;
var P=["sun","mon","tue","wed","thu","fri","sat"],au=86400000,aj=3600000,U=60000;
function ah(aJ,aK,aI){aJ.setFullYear(aJ.getFullYear()+aK);
if(!aI){b(aJ)
}return aJ
}function o(aL,aM,aK){if(+aL){var aI=aL.getMonth()+aM,aJ=M(aL);
aJ.setDate(1);
aJ.setMonth(aI);
aL.setMonth(aI);
if(!aK){b(aL)
}while(aL.getMonth()!=aJ.getMonth()){aL.setDate(aL.getDate()+(aL<aJ?1:-1))
}}return aL
}function aA(aL,aM,aK){if(+aL){var aI=aL.getDate()+aM,aJ=M(aL);
aJ.setHours(9);
aJ.setDate(aI);
aL.setDate(aI);
if(!aK){b(aL)
}aC(aL,aJ)
}return aL
}function aC(aJ,aI){if(+aJ){while(aJ.getDate()!=aI.getDate()){aJ.setTime(+aJ+(aJ<aI?1:-1)*aj)
}}}function g(aI,aJ){aI.setMinutes(aI.getMinutes()+aJ);
return aI
}function b(aI){aI.setHours(0);
aI.setMinutes(0);
aI.setSeconds(0);
aI.setMilliseconds(0);
return aI
}function M(aI,aJ){if(aJ){return b(new Date(+aI))
}return new Date(+aI)
}function d(){var aI=0,aJ;
do{aJ=new Date(1970,aI++,1)
}while(aJ.getHours());
return aJ
}function aF(aI,aJ,aK){aJ=aJ||1;
while(!aI.getDay()||(aK&&aI.getDay()==1||!aK&&aI.getDay()==6)){aA(aI,aJ)
}return aI
}function ax(aJ,aI){return Math.round((M(aJ,true)-M(aI,true))/au)
}function y(aJ,aL,aI,aK){if(aL!==v&&aL!=aJ.getFullYear()){aJ.setDate(1);
aJ.setMonth(0);
aJ.setFullYear(aL)
}if(aI!==v&&aI!=aJ.getMonth()){aJ.setDate(1);
aJ.setMonth(aI)
}if(aK!==v){aJ.setDate(aK)
}}function Z(aJ,aI){if(typeof aJ=="object"){return aJ
}if(typeof aJ=="number"){return new Date(aJ*1000)
}if(typeof aJ=="string"){if(aJ.match(/^\d+(\.\d+)?$/)){return new Date(parseFloat(aJ)*1000)
}if(aI===v){aI=true
}return n(aJ,aI)||(aJ?new Date(aJ):null)
}return null
}function n(aM,aJ){var aI=aM.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
if(!aI){return null
}var aL=new Date(aI[1],0,1);
if(aJ||!aI[13]){var aK=new Date(aI[1],0,1,9,0);
if(aI[3]){aL.setMonth(aI[3]-1);
aK.setMonth(aI[3]-1)
}if(aI[5]){aL.setDate(aI[5]);
aK.setDate(aI[5])
}aC(aL,aK);
if(aI[7]){aL.setHours(aI[7])
}if(aI[8]){aL.setMinutes(aI[8])
}if(aI[10]){aL.setSeconds(aI[10])
}if(aI[12]){aL.setMilliseconds(Number("0."+aI[12])*1000)
}aC(aL,aK)
}else{aL.setUTCFullYear(aI[1],aI[3]?aI[3]-1:0,aI[5]||1);
aL.setUTCHours(aI[7]||0,aI[8]||0,aI[10]||0,aI[12]?Number("0."+aI[12])*1000:0);
if(aI[14]){var aN=Number(aI[16])*60+(aI[18]?Number(aI[18]):0);
aN*=aI[15]=="-"?1:-1;
aL=new Date(+aL+(aN*60*1000))
}}return aL
}function aE(aK){if(typeof aK=="number"){return aK*60
}if(typeof aK=="object"){return aK.getHours()*60+aK.getMinutes()
}var aI=aK.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
if(aI){var aJ=parseInt(aI[1],10);
if(aI[3]){aJ%=12;
if(aI[3].toLowerCase().charAt(0)=="p"){aJ+=12
}}return aJ*60+(aI[2]?parseInt(aI[2],10):0)
}}function A(aJ,aK,aI){return h(aJ,null,aK,aI)
}function h(aU,aT,aS,aV){aV=aV||L;
var aJ=aU,aL=aT,aM,aN=aS.length,aP,aK,aR,aO="";
for(aM=0;
aM<aN;
aM++){aP=aS.charAt(aM);
if(aP=="'"){for(aK=aM+1;
aK<aN;
aK++){if(aS.charAt(aK)=="'"){if(aJ){if(aK==aM+1){aO+="'"
}else{aO+=aS.substring(aM+1,aK)
}aM=aK
}break
}}}else{if(aP=="("){for(aK=aM+1;
aK<aN;
aK++){if(aS.charAt(aK)==")"){var aI=A(aJ,aS.substring(aM+1,aK),aV);
if(parseInt(aI.replace(/\D/,""),10)){aO+=aI
}aM=aK;
break
}}}else{if(aP=="["){for(aK=aM+1;
aK<aN;
aK++){if(aS.charAt(aK)=="]"){var aQ=aS.substring(aM+1,aK);
var aI=A(aJ,aQ,aV);
if(aI!=A(aL,aQ,aV)){aO+=aI
}aM=aK;
break
}}}else{if(aP=="{"){aJ=aT;
aL=aU
}else{if(aP=="}"){aJ=aU;
aL=aT
}else{for(aK=aN;
aK>aM;
aK--){if(aR=aw[aS.substring(aM,aK)]){if(aJ){aO+=aR(aJ,aV)
}aM=aK-1;
break
}}if(aK==aM){if(aJ){aO+=aP
}}}}}}}}return aO
}var aw={s:function(aI){return aI.getSeconds()
},ss:function(aI){return aa(aI.getSeconds())
},m:function(aI){return aI.getMinutes()
},mm:function(aI){return aa(aI.getMinutes())
},h:function(aI){return aI.getHours()%12||12
},hh:function(aI){return aa(aI.getHours()%12||12)
},H:function(aI){return aI.getHours()
},HH:function(aI){return aa(aI.getHours())
},d:function(aI){return aI.getDate()
},dd:function(aI){return aa(aI.getDate())
},ddd:function(aJ,aI){return aI.dayNamesShort[aJ.getDay()]
},dddd:function(aJ,aI){return aI.dayNames[aJ.getDay()]
},M:function(aI){return aI.getMonth()+1
},MM:function(aI){return aa(aI.getMonth()+1)
},MMM:function(aJ,aI){return aI.monthNamesShort[aJ.getMonth()]
},MMMM:function(aJ,aI){return aI.monthNames[aJ.getMonth()]
},yy:function(aI){return(aI.getFullYear()+"").substring(2)
},yyyy:function(aI){return aI.getFullYear()
},t:function(aI){return aI.getHours()<12?"a":"p"
},tt:function(aI){return aI.getHours()<12?"am":"pm"
},T:function(aI){return aI.getHours()<12?"A":"P"
},TT:function(aI){return aI.getHours()<12?"AM":"PM"
},u:function(aI){return A(aI,"yyyy-MM-dd'T'HH:mm:ss'Z'")
},S:function(aJ){var aI=aJ.getDate();
if(aI>10&&aI<20){return"th"
}return["st","nd","rd"][aI%10-1]||"th"
},w:function(aJ,aI){return aI.weekNumberCalculation(aJ)
},W:function(aI){return w(aI)
}};
ay.dateFormatters=aw;
function w(aI){var aJ;
var aK=new Date(aI.getTime());
aK.setDate(aK.getDate()+4-(aK.getDay()||7));
aJ=aK.getTime();
aK.setMonth(0);
aK.setDate(1);
return Math.floor(Math.round((aJ-aK)/86400000)/7)+1
}ay.applyAll=H;
function am(aI){if(aI.end){return q(aI.end,aI.allDay)
}else{return aA(M(aI.start),1)
}}function q(aI,aJ){aI=M(aI);
return aJ||aI.getHours()||aI.getMinutes()?aA(aI,1):b(aI)
}function t(aJ,aI){return(aI.msLength-aJ.msLength)*100+(aJ.event.start-aI.event.start)
}function N(aJ,aI){return aJ.end>aI.start&&aJ.start<aI.end
}function ab(aU,aO,aK,aN){var aL=[],aP,aR=aU.length,aJ,aS,aQ,aT,aV,aI,aM;
for(aP=0;
aP<aR;
aP++){aJ=aU[aP];
aS=aJ.start;
aQ=aO[aP];
if(aQ>aK&&aS<aN){if(aS<aK){aT=M(aK);
aI=false
}else{aT=aS;
aI=true
}if(aQ>aN){aV=M(aN);
aM=false
}else{aV=aQ;
aM=true
}aL.push({event:aJ,start:aT,end:aV,isStart:aI,isEnd:aM,msLength:aV-aT})
}}return aL.sort(t)
}function ag(aK){var aO=[],aN,aI=aK.length,aJ,aM,aP,aL;
for(aN=0;
aN<aI;
aN++){aJ=aK[aN];
aM=0;
while(true){aP=false;
if(aO[aM]){for(aL=0;
aL<aO[aM].length;
aL++){if(N(aO[aM][aL],aJ)){aP=true;
break
}}}if(aP){aM++
}else{break
}}if(aO[aM]){aO[aM].push(aJ)
}else{aO[aM]=[aJ]
}}return aO
}function u(aJ,aI,aK){aJ.unbind("mouseover").mouseover(function(aO){var aN=aO.target,aP,aM,aL;
while(aN!=this){aP=aN;
aN=aN.parentNode
}if((aM=aP._fci)!==v){aP._fci=v;
aL=aI[aM];
aK(aL.event,aL.element,aL);
ar(aO.target).trigger(aO)
}aO.stopPropagation()
})
}function at(aK,aL,aI){for(var aJ=0,aM;
aJ<aK.length;
aJ++){aM=ar(aK[aJ]);
aM.width(Math.max(0,aL-f(aM,aI)))
}}function Y(aL,aI,aJ){for(var aK=0,aM;
aK<aL.length;
aK++){aM=ar(aL[aK]);
aM.height(Math.max(0,aI-E(aM,aJ)))
}}function f(aJ,aI){return af(aJ)+p(aJ)+(aI?ae(aJ):0)
}function af(aI){return(parseFloat(ar.css(aI[0],"paddingLeft",true))||0)+(parseFloat(ar.css(aI[0],"paddingRight",true))||0)
}function ae(aI){return(parseFloat(ar.css(aI[0],"marginLeft",true))||0)+(parseFloat(ar.css(aI[0],"marginRight",true))||0)
}function p(aI){return(parseFloat(ar.css(aI[0],"borderLeftWidth",true))||0)+(parseFloat(ar.css(aI[0],"borderRightWidth",true))||0)
}function E(aJ,aI){return x(aJ)+ao(aJ)+(aI?j(aJ):0)
}function x(aI){return(parseFloat(ar.css(aI[0],"paddingTop",true))||0)+(parseFloat(ar.css(aI[0],"paddingBottom",true))||0)
}function j(aI){return(parseFloat(ar.css(aI[0],"marginTop",true))||0)+(parseFloat(ar.css(aI[0],"marginBottom",true))||0)
}function ao(aI){return(parseFloat(ar.css(aI[0],"borderTopWidth",true))||0)+(parseFloat(ar.css(aI[0],"borderBottomWidth",true))||0)
}function I(aJ,aI){aI=(typeof aI=="number"?aI+"px":aI);
aJ.each(function(aL,aK){aK.style.cssText+=";min-height:"+aI+";_height:"+aI
})
}function ap(){}function W(aJ,aI){return aJ-aI
}function aq(aI){return Math.max.apply(Math,aI)
}function aa(aI){return(aI<10?"0":"")+aI
}function D(aM,aI){if(aM[aI]!==v){return aM[aI]
}var aL=aI.split(/(?=[A-Z])/),aK=aL.length-1,aJ;
for(;
aK>=0;
aK--){aJ=aM[aL[aK].toLowerCase()];
if(aJ!==v){return aJ
}}return aM[""]
}function aD(aI){return aI.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")
}function G(aI){return aI.id+"/"+aI.className+"/"+aI.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")
}function aH(aI){aI.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false
})
}function c(aI){aI.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
}function K(aI,aJ){aI.each(function(aK,aL){aL.className=aL.className.replace(/^fc-\w*/,"fc-"+P[aJ.getDay()])
})
}function Q(aJ,aK){var aI=aJ.source||{};
var aP=aJ.color;
var aN=aI.color;
var aM=aK("eventColor");
var aQ=aJ.backgroundColor||aP||aI.backgroundColor||aN||aK("eventBackgroundColor")||aM;
var aL=aJ.borderColor||aP||aI.borderColor||aN||aK("eventBorderColor")||aM;
var aR=aJ.textColor||aI.textColor||aK("eventTextColor");
var aO=[];
if(aQ){aO.push("background-color:"+aQ)
}if(aL){aO.push("border-color:"+aL)
}if(aR){aO.push("color:"+aR)
}return aO.join(";")
}function H(aL,aM,aJ){if(ar.isFunction(aL)){aL=[aL]
}if(aL){var aK;
var aI;
for(aK=0;
aK<aL.length;
aK++){aI=aL[aK].apply(aM,aJ)||aI
}return aI
}}function aG(){for(var aI=0;
aI<arguments.length;
aI++){if(arguments[aI]!==v){return arguments[aI]
}}}ad.month=ac;
function ac(aL,aO){var aK=this;
aK.render=aM;
z.call(aK,aL,aO,"month");
var aJ=aK.opt;
var aI=aK.renderBasic;
var aN=aO.formatDate;
function aM(aS,aW){if(aW){o(aS,aW);
aS.setDate(1)
}var aQ=M(aS,true);
aQ.setDate(1);
var aT=o(M(aQ),1);
var aX=M(aQ);
var aU=M(aT);
var aP=aJ("firstDay");
var aR=aJ("weekends")?0:1;
if(aR){aF(aX);
aF(aU,-1,true)
}aA(aX,-((aX.getDay()-Math.max(aP,aR)+7)%7));
aA(aU,(7-aU.getDay()+Math.max(aP,aR))%7);
var aV=Math.round((aU-aX)/(au*7));
if(aJ("weekMode")=="fixed"){aA(aU,(6-aV)*7);
aV=6
}aK.title=aN(aQ,aJ("titleFormat"));
aK.start=aQ;
aK.end=aT;
aK.visStart=aX;
aK.visEnd=aU;
aI(aV,aR?5:7,true)
}}ad.basicWeek=az;
function az(aM,aO){var aL=this;
aL.render=aN;
z.call(aL,aM,aO,"basicWeek");
var aK=aL.opt;
var aJ=aL.renderBasic;
var aI=aO.formatDates;
function aN(aT,aV){if(aV){aA(aT,aV*7)
}var aU=aA(M(aT),-((aT.getDay()-aK("firstDay")+7)%7));
var aR=aA(M(aU),7);
var aQ=M(aU);
var aP=M(aR);
var aS=aK("weekends");
if(!aS){aF(aQ);
aF(aP,-1,true)
}aL.title=aI(aQ,aA(M(aP),-1),aK("titleFormat"));
aL.start=aU;
aL.end=aR;
aL.visStart=aQ;
aL.visEnd=aP;
aJ(1,aS?7:5,false)
}}ad.basicDay=J;
function J(aL,aO){var aK=this;
aK.render=aM;
z.call(aK,aL,aO,"basicDay");
var aJ=aK.opt;
var aI=aK.renderBasic;
var aN=aO.formatDate;
function aM(aP,aQ){if(aQ){aA(aP,aQ);
if(!aJ("weekends")){aF(aP,aQ<0?-1:1)
}}aK.title=aN(aP,aJ("titleFormat"));
aK.start=aK.visStart=M(aP,true);
aK.end=aK.visEnd=aA(M(aK.start),1);
aI(1,1,false)
}}ai({weekMode:"fixed"});
function z(a0,bu,aR){var bt=this;
bt.renderBasic=bl;
bt.setHeight=br;
bt.setWidth=bC;
bt.renderDayOverlay=bi;
bt.defaultSelectionEnd=bh;
bt.renderSelection=bv;
bt.clearSelection=aI;
bt.reportDayClick=aY;
bt.dragStart=aK;
bt.dragStop=aS;
bt.defaultEventEnd=bJ;
bt.getHoverListener=function(){return aL
};
bt.colContentLeft=bq;
bt.colContentRight=bn;
bt.dayOfWeekCol=bc;
bt.dateCell=bo;
bt.cellDate=bI;
bt.cellIsAllDay=function(){return true
};
bt.allDayRow=aX;
bt.allDayBounds=bz;
bt.getRowCnt=function(){return a9
};
bt.getColCnt=function(){return aN
};
bt.getColWidth=function(){return bd
};
bt.getDaySegmentContainer=function(){return aV
};
aB.call(bt,a0,bu,aR);
a.call(bt);
al.call(bt);
ak.call(bt);
var a5=bt.opt;
var bj=bt.trigger;
var bg=bt.clearEvents;
var bF=bt.renderOverlay;
var aQ=bt.clearOverlays;
var bp=bt.daySelectionMousedown;
var bs=bu.formatDate;
var a7;
var aZ;
var aT;
var bb;
var aP;
var a1;
var be;
var bm;
var aV;
var bG;
var bL;
var bd;
var aU;
var a9,aN;
var bx;
var aL;
var bA;
var bw,bK,bH;
var a8;
var a4;
var bM;
var aO;
var a3;
var by;
var bf;
aH(a0.addClass("fc-grid"));
function bl(bO,bQ,bN){a9=bO;
aN=bQ;
bD();
var bP=!bb;
if(bP){aJ()
}else{bg()
}ba(bN)
}function bD(){bw=a5("isRTL");
if(bw){bK=-1;
bH=aN-1
}else{bK=1;
bH=0
}a8=a5("firstDay");
a4=a5("weekends")?0:1;
bM=a5("theme")?"ui":"fc";
aO=a5("columnFormat");
a3=a5("weekNumbers");
by=a5("weekNumberTitle");
if(a5("weekNumberCalculation")!="iso"){bf="w"
}else{bf="W"
}}function aJ(){aV=ar("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a0)
}function ba(bW){var bS="";
var bR,bQ;
var bN=bM+"-widget-header";
var bO=bM+"-widget-content";
var bT=bt.start.getMonth();
var bU=b(new Date());
var bP;
var bV;
var bX;
bS+="<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";
if(a3){bS+="<th class='fc-week-number "+bN+"'/>"
}for(bR=0;
bR<aN;
bR++){bP=a6(0,bR);
bS+="<th class='fc-day-header fc-"+P[bP.getDay()]+" "+bN+"'/>"
}bS+="</tr></thead><tbody>";
for(bR=0;
bR<a9;
bR++){bS+="<tr class='fc-week'>";
if(a3){bS+="<td class='fc-week-number "+bO+"'><div/></td>"
}for(bQ=0;
bQ<aN;
bQ++){bP=a6(bR,bQ);
bV=["fc-day","fc-"+P[bP.getDay()],bO];
if(bP.getMonth()!=bT){bV.push("fc-other-month")
}if(+bP==+bU){bV.push("fc-today");
bV.push(bM+"-state-highlight")
}bS+="<td class='"+bV.join(" ")+"' data-date='"+bs(bP,"yyyy-MM-dd")+"'><div>";
if(bW){bS+="<div class='fc-day-number'>"+bP.getDate()+"</div>"
}bS+="<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
}bS+="</tr>"
}bS+="</tbody></table>";
aW();
if(a7){a7.remove()
}a7=ar(bS).appendTo(a0);
aZ=a7.find("thead");
aT=aZ.find(".fc-day-header");
bb=a7.find("tbody");
aP=bb.find("tr");
a1=bb.find(".fc-day");
be=aP.find("td:first-child");
bm=aP.eq(0).find(".fc-day-content > div");
c(aZ.add(aZ.find("tr")));
c(aP);
aP.eq(0).addClass("fc-first");
aP.filter(":last").addClass("fc-last");
if(a3){aZ.find(".fc-week-number").text(by)
}aT.each(function(bZ,b0){var bY=bk(bZ);
ar(b0).text(bs(bY,aO))
});
if(a3){bb.find(".fc-week-number > div").each(function(bZ,b0){var bY=a6(bZ,0);
ar(b0).text(bs(bY,bf))
})
}a1.each(function(bZ,b0){var bY=bk(bZ);
bj("dayRender",bt,bY,ar(b0))
});
aM(a1)
}function br(bO){bL=bO;
var bR=bL-aZ.height();
var bQ;
var bP;
var bN;
if(a5("weekMode")=="variable"){bQ=bP=Math.floor(bR/(a9==1?2:6))
}else{bQ=Math.floor(bR/a9);
bP=bR-bQ*(a9-1)
}be.each(function(bS,bT){if(bS<a9){bN=ar(bT);
I(bN.find("> div"),(bS==a9-1?bP:bQ)-E(bN))
}});
a2()
}function bC(bN){bG=bN;
bA.clear();
aU=0;
if(a3){aU=aZ.find("th.fc-week-number").outerWidth()
}bd=Math.floor((bG-aU)/aN);
at(aT.slice(0,-1),bd)
}function aM(bN){bN.click(bE).mousedown(bp)
}function bE(bO){if(!a5("selectable")){var bN=n(ar(this).data("date"));
bj("dayClick",this,bN,true,bO)
}}function bi(bS,bW,bQ){if(bQ){bx.build()
}var bN=M(bt.visStart);
var bT=aA(M(bN),aN);
for(var bP=0;
bP<a9;
bP++){var bR=new Date(Math.max(bN,bS));
var bV=new Date(Math.min(bT,bW));
if(bR<bV){var bO,bU;
if(bw){bO=ax(bV,bN)*bK+bH+1;
bU=ax(bR,bN)*bK+bH+1
}else{bO=ax(bR,bN);
bU=ax(bV,bN)
}aM(bB(bP,bO,bP,bU-1))
}aA(bN,7);
aA(bT,7)
}}function bB(bQ,bR,bO,bP){var bN=bx.rect(bQ,bR,bO,bP,a0);
return bF(bN,a0)
}function bh(bN,bO){return M(bN)
}function bv(bN,bP,bO){bi(bN,aA(M(bP),1),true)
}function aI(){aQ()
}function aY(bP,bR,bQ){var bN=bo(bP);
var bO=a1[bN.row*aN+bN.col];
bj("dayClick",bO,bP,bR,bQ)
}function aK(bP,bN,bO){aL.start(function(bQ){aQ();
if(bQ){bB(bQ.row,bQ.col,bQ.row,bQ.col)
}},bN)
}function aS(bR,bO,bP){var bN=aL.stop();
aQ();
if(bN){var bQ=bI(bN);
bj("drop",bR,bQ,true,bO,bP)
}}function bJ(bN){return M(bN.start)
}bx=new O(function(bN,bQ){var bP,bR,bO;
aT.each(function(bT,bS){bP=ar(bS);
bR=bP.offset().left;
if(bT){bO[1]=bR
}bO=[bR];
bQ[bT]=bO
});
bO[1]=bR+bP.outerWidth();
aP.each(function(bT,bS){if(bT<a9){bP=ar(bS);
bR=bP.offset().top;
if(bT){bO[1]=bR
}bO=[bR];
bN[bT]=bO
}});
bO[1]=bR+bP.outerHeight()
});
aL=new an(bx);
bA=new l(function(bN){return bm.eq(bN)
});
function bq(bN){return bA.left(bN)
}function bn(bN){return bA.right(bN)
}function bo(bN){return{row:Math.floor(ax(bN,bt.visStart)/7),col:bc(bN.getDay())}
}function bI(bN){return a6(bN.row,bN.col)
}function a6(bO,bN){return aA(M(bt.visStart),bO*7+bN*bK+bH)
}function bk(bN){return a6(Math.floor(bN/aN),bN%aN)
}function bc(bN){return((bN-Math.max(a8,a4)+aN)%aN)*bK+bH
}function aX(bN){return aP.eq(bN)
}function bz(bN){var bO=0;
if(a3){bO+=aU
}return{left:bO,right:bG}
}function aW(){I(a0,a0.height())
}function a2(){I(a0,1)
}}function ak(){var aT=this;
aT.renderEvents=aO;
aT.compileDaySegs=aS;
aT.clearEvents=aR;
aT.bindDaySeg=aN;
X.call(aT);
var aK=aT.opt;
var aV=aT.trigger;
var aZ=aT.isEventDraggable;
var a1=aT.isEventResizable;
var a0=aT.reportEvents;
var a4=aT.reportEventClear;
var aJ=aT.eventElementHandlers;
var a2=aT.showEvents;
var aI=aT.hideEvents;
var aX=aT.eventDrop;
var a5=aT.getDaySegmentContainer;
var a3=aT.getHoverListener;
var aQ=aT.renderDayOverlay;
var aW=aT.clearOverlays;
var aM=aT.getRowCnt;
var aY=aT.getColCnt;
var aU=aT.renderDaySegs;
var aP=aT.resizableDayEvent;
function aO(a7,a6){a0(a7);
aU(aS(a7),a6);
aV("eventAfterAllRender")
}function aR(){a4();
a5().empty()
}function aS(bh){var be=aM(),bg=aY(),a8=M(aT.visStart),a6=aA(M(a8),bg),bf=ar.map(bh,am),bd,bi,bc,a7,ba,bb,a9=[];
for(bd=0;
bd<be;
bd++){bi=ag(ab(bh,bf,a8,a6));
for(bc=0;
bc<bi.length;
bc++){a7=bi[bc];
for(ba=0;
ba<a7.length;
ba++){bb=a7[ba];
bb.row=bd;
bb.level=bc;
a9.push(bb)
}}aA(a8,7);
aA(a6,7)
}return a9
}function aN(a8,a7,a6){if(aZ(a8)){aL(a8,a7)
}if(a6.isEnd&&a1(a8)){aP(a8,a7,a6)
}aJ(a8,a7)
}function aL(a9,a8){var a7=a3();
var a6;
a8.draggable({zIndex:9,delay:50,opacity:aK("dragOpacity"),revertDuration:aK("dragRevertDuration"),start:function(ba,bb){aV("eventDragStart",a8,a9,ba,bb);
aI(a9,a8);
a7.start(function(bd,bc,be,bf){a8.draggable("option","revert",!bd||!be&&!bf);
aW();
if(bd){a6=be*7+bf*(aK("isRTL")?-1:1);
aQ(aA(M(a9.start),a6),aA(am(a9),a6))
}else{a6=0
}},ba,"drag")
},stop:function(ba,bb){a7.stop();
aW();
aV("eventDragStop",a8,a9,ba,bb);
if(a6){aX(this,a9,a6,0,a9.allDay,ba,bb)
}else{a8.css("filter","");
a2(a9,a8)
}}})
}}ad.agendaWeek=e;
function e(aM,aO){var aL=this;
aL.render=aN;
F.call(aL,aM,aO,"agendaWeek");
var aK=aL.opt;
var aJ=aL.renderAgenda;
var aI=aO.formatDates;
function aN(aT,aV){if(aV){aA(aT,aV*7)
}var aU=aA(M(aT),-((aT.getDay()-aK("firstDay")+7)%7));
var aR=aA(M(aU),7);
var aQ=M(aU);
var aP=M(aR);
var aS=aK("weekends");
if(!aS){aF(aQ);
aF(aP,-1,true)
}aL.title=aI(aQ,aA(M(aP),-1),aK("titleFormat"));
aL.start=aU;
aL.end=aR;
aL.visStart=aQ;
aL.visEnd=aP;
aJ(aS?7:5)
}}ad.agendaDay=av;
function av(aL,aO){var aK=this;
aK.render=aM;
F.call(aK,aL,aO,"agendaDay");
var aJ=aK.opt;
var aI=aK.renderAgenda;
var aN=aO.formatDate;
function aM(aQ,aS){if(aS){aA(aQ,aS);
if(!aJ("weekends")){aF(aQ,aS<0?-1:1)
}}var aR=M(aQ,true);
var aP=aA(M(aR),1);
aK.title=aN(aQ,aJ("titleFormat"));
aK.start=aK.visStart=aR;
aK.end=aK.visEnd=aP;
aI(1)
}}ai({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,maxTime:24});
function F(cb,a0,be){var bb=this;
bb.renderAgenda=aU;
bb.setWidth=bp;
bb.setHeight=bl;
bb.beforeHide=bj;
bb.afterShow=b1;
bb.defaultEventEnd=bV;
bb.timePosition=ce;
bb.dayOfWeekCol=aV;
bb.dateCell=b6;
bb.cellDate=aM;
bb.cellIsAllDay=b5;
bb.allDayRow=bH;
bb.allDayBounds=bt;
bb.getHoverListener=function(){return ca
};
bb.colContentLeft=cf;
bb.colContentRight=aR;
bb.getDaySegmentContainer=function(){return a6
};
bb.getSlotSegmentContainer=function(){return aP
};
bb.getMinMinute=function(){return bh
};
bb.getMaxMinute=function(){return aK
};
bb.getBodyContent=function(){return bG
};
bb.getRowCnt=function(){return 1
};
bb.getColCnt=function(){return bJ
};
bb.getColWidth=function(){return aS
};
bb.getSnapHeight=function(){return b7
};
bb.getSnapMinutes=function(){return bu
};
bb.defaultSelectionEnd=bo;
bb.renderDayOverlay=aN;
bb.renderSelection=b4;
bb.clearSelection=bY;
bb.reportDayClick=a9;
bb.dragStart=aT;
bb.dragStop=cc;
aB.call(bb,cb,a0,be);
a.call(bb);
al.call(bb);
T.call(bb);
var bE=bb.opt;
var bI=bb.trigger;
var bD=bb.clearEvents;
var bs=bb.renderOverlay;
var aL=bb.clearOverlays;
var bv=bb.reportSelection;
var b2=bb.unselect;
var bA=bb.daySelectionMousedown;
var a2=bb.slotSegHtml;
var a7=a0.formatDate;
var bS;
var b8;
var bX;
var bW;
var bd;
var aO;
var bU;
var bQ;
var cd;
var a6;
var b9;
var b0;
var bq;
var bG;
var aP;
var aW;
var bP;
var bi;
var a8;
var aQ;
var bx;
var bN;
var bm;
var aS;
var bB;
var bK;
var bu;
var a1;
var b7;
var bJ;
var bO;
var bL;
var ca;
var by;
var bf={};
var aI;
var br;
var bk;
var bC;
var aJ,a4,a3;
var bh,aK;
var aY;
var bT;
var bF;
var bw;
aH(cb.addClass("fc-agenda"));
function aU(cg){bJ=cg;
bM();
if(!bS){bc()
}else{bD()
}aZ()
}function bM(){br=bE("theme")?"ui":"fc";
bC=bE("weekends")?0:1;
bk=bE("firstDay");
if(aJ=bE("isRTL")){a4=-1;
a3=bJ-1
}else{a4=1;
a3=0
}bh=aE(bE("minTime"));
aK=aE(bE("maxTime"));
aY=bE("columnFormat");
bT=bE("weekNumbers");
bF=bE("weekNumberTitle");
if(bE("weekNumberCalculation")!="iso"){bw="w"
}else{bw="W"
}bu=bE("snapMinutes")||bE("slotMinutes")
}function bc(){var cl=br+"-widget-header";
var cg=br+"-widget-content";
var ck;
var cj;
var cn;
var cm;
var ci;
var ch=bE("slotMinutes")%15==0;
ck="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>";
if(bT){ck+="<th class='fc-agenda-axis fc-week-number "+cl+"'/>"
}else{ck+="<th class='fc-agenda-axis "+cl+"'>&nbsp;</th>"
}for(cj=0;
cj<bJ;
cj++){ck+="<th class='fc- fc-col"+cj+" "+cl+"'/>"
}ck+="<th class='fc-agenda-gutter "+cl+"'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis "+cl+"'>&nbsp;</th>";
for(cj=0;
cj<bJ;
cj++){ck+="<td class='fc- fc-col"+cj+" "+cg+"'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
}ck+="<td class='fc-agenda-gutter "+cg+"'>&nbsp;</td></tr></tbody></table>";
bS=ar(ck).appendTo(cb);
b8=bS.find("thead");
bX=b8.find("th").slice(1,-1);
bW=bS.find("tbody");
bd=bW.find("td").slice(0,-1);
aO=bd.find("div.fc-day-content div");
bU=bd.eq(0);
bQ=bU.find("> div");
c(b8.add(b8.find("tr")));
c(bW.add(bW.find("tr")));
bi=b8.find("th:first");
a8=bS.find(".fc-agenda-gutter");
cd=ar("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(cb);
if(bE("allDaySlot")){a6=ar("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(cd);
ck="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+cl+" fc-agenda-axis'>"+bE("allDayText")+"</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='"+cl+" fc-agenda-gutter'>&nbsp;</th></tr></table>";
b9=ar(ck).appendTo(cd);
b0=b9.find("tr");
bn(b0.find("td"));
bi=bi.add(b9.find("th:first"));
a8=a8.add(b9.find("th.fc-agenda-gutter"));
cd.append("<div class='fc-agenda-divider "+cl+"'><div class='fc-agenda-divider-inner'/></div>")
}else{a6=ar([])
}bq=ar("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(cd);
bG=ar("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(bq);
aP=ar("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(bG);
ck="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>";
cn=d();
cm=g(M(cn),aK);
g(cn,bh);
bO=0;
for(cj=0;
cn<cm;
cj++){ci=cn.getMinutes();
ck+="<tr class='fc-slot"+cj+" "+(!ci?"":"fc-minor")+"'><th class='fc-agenda-axis "+cl+"'>"+((!ch||!ci)?a7(cn,bE("axisFormat")):"&nbsp;")+"</th><td class='"+cg+"'><div style='position:relative'>&nbsp;</div></td></tr>";
g(cn,bE("slotMinutes"));
bO++
}ck+="</tbody></table>";
aW=ar(ck).appendTo(bG);
bP=aW.find("div:first");
bZ(aW.find("td"));
bi=bi.add(aW.find("th:first"))
}function aZ(){var cj;
var cg;
var cl;
var ci;
var ch=b(new Date());
if(bT){var ck=a7(bz(0),bw);
if(aJ){ck=ck+bF
}else{ck=bF+ck
}b8.find(".fc-week-number").text(ck)
}for(cj=0;
cj<bJ;
cj++){ci=bz(cj);
cg=bX.eq(cj);
cg.html(a7(ci,aY));
cl=bd.eq(cj);
if(+ci==+ch){cl.addClass(br+"-state-highlight fc-today")
}else{cl.removeClass(br+"-state-highlight fc-today")
}K(cg.add(cl),ci)
}}function bl(cg,ch){if(cg===v){cg=bN
}bN=cg;
bf={};
var cj=bW.position().top;
var ci=bq.position().top;
var ck=Math.min(cg-cj,aW.height()+ci+1);
bQ.height(ck-E(bU));
cd.css("top",cj);
bq.height(ck-ci-1);
bK=bP.height()+1;
a1=bE("slotMinutes")/bu;
b7=bK/a1;
if(ch){bg()
}}function bp(ch){bx=ch;
by.clear();
bm=0;
at(bi.width("").each(function(ci,cj){bm=Math.max(bm,ar(cj).outerWidth())
}),bm);
var cg=bq[0].clientWidth;
bB=bq.width()-cg;
if(bB){at(a8,bB);
a8.show().prev().removeClass("fc-last")
}else{a8.hide().prev().addClass("fc-last")
}aS=Math.floor((cg-bm)/bJ);
at(bX.slice(0,-1),aS)
}function bg(){var cj=d();
var ch=M(cj);
ch.setHours(bE("firstHour"));
var ci=ce(cj,ch)+1;
function cg(){bq.scrollTop(ci)
}cg();
setTimeout(cg,0)
}function bj(){aI=bq.scrollTop()
}function b1(){bq.scrollTop(aI)
}function bn(cg){cg.click(bR).mousedown(bA)
}function bZ(cg){cg.click(bR).mousedown(aX)
}function bR(ck){if(!bE("selectable")){var ci=Math.min(bJ-1,Math.floor((ck.pageX-bS.offset().left-bm)/aS));
var ch=bz(ci);
var cl=this.parentNode.className.match(/fc-slot(\d+)/);
if(cl){var cj=parseInt(cl[1])*bE("slotMinutes");
var cg=Math.floor(cj/60);
ch.setHours(cg);
ch.setMinutes(cj%60+bh);
bI("dayClick",bd[ci],ch,false,ck)
}else{bI("dayClick",bd[ci],ch,true,ck)
}}}function aN(cg,cl,ci){if(ci){bL.build()
}var ch=M(bb.visStart);
var ck,cj;
if(aJ){ck=ax(cl,ch)*a4+a3+1;
cj=ax(cg,ch)*a4+a3+1
}else{ck=ax(cg,ch);
cj=ax(cl,ch)
}ck=Math.max(0,ck);
cj=Math.min(bJ,cj);
if(ck<cj){bn(a5(0,ck,0,cj-1))
}}function a5(cj,ck,ch,ci){var cg=bL.rect(cj,ck,ch,ci,cd);
return bs(cg,cd)
}function ba(cl,cq){var cm=M(bb.visStart);
var ch=aA(M(cm),1);
for(var cj=0;
cj<bJ;
cj++){var ck=new Date(Math.max(cm,cl));
var cp=new Date(Math.min(ch,cq));
if(ck<cp){var ci=cj*a4+a3;
var co=bL.rect(0,ci,0,ci,bG);
var cn=ce(cm,ck);
var cg=ce(cm,cp);
co.top=cn;
co.height=cg-cn;
bZ(bs(co,bG))
}aA(cm,1);
aA(ch,1)
}}bL=new O(function(co,cm){var ck,ch,cg;
bX.each(function(cr,cq){ck=ar(cq);
ch=ck.offset().left;
if(cr){cg[1]=ch
}cg=[ch];
cm[cr]=cg
});
cg[1]=ch+ck.outerWidth();
if(bE("allDaySlot")){ck=b0;
ch=ck.offset().top;
co[0]=[ch,ch+ck.outerHeight()]
}var cn=bG.offset().top;
var cp=bq.offset().top;
var cj=cp+bq.outerHeight();
function cl(cq){return Math.max(cp,Math.min(cj,cq))
}for(var ci=0;
ci<bO*a1;
ci++){co.push([cl(cn+b7*ci),cl(cn+b7*(ci+1))])
}});
ca=new an(bL);
by=new l(function(cg){return aO.eq(cg)
});
function cf(cg){return by.left(cg)
}function aR(cg){return by.right(cg)
}function b6(cg){return{row:Math.floor(ax(cg,bb.visStart)/7),col:aV(cg.getDay())}
}function aM(cg){var ci=bz(cg.col);
var ch=cg.row;
if(bE("allDaySlot")){ch--
}if(ch>=0){g(ci,bh+ch*bu)
}return ci
}function bz(cg){return aA(M(bb.visStart),cg*a4+a3)
}function b5(cg){return bE("allDaySlot")&&!cg.row
}function aV(cg){return((cg-Math.max(bk,bC)+bJ)%bJ)*a4+a3
}function ce(ch,cl){ch=M(ch,true);
if(cl<g(M(ch),bh)){return 0
}if(cl>=g(M(ch),aK)){return aW.height()
}var cg=bE("slotMinutes"),ck=cl.getHours()*60+cl.getMinutes()-bh,cj=Math.floor(ck/cg),ci=bf[cj];
if(ci===v){ci=bf[cj]=aW.find("tr:eq("+cj+") td div")[0].offsetTop
}return Math.max(0,Math.round(ci-1+bK*((ck%cg)/cg)))
}function bt(){return{left:bm,right:bx-bB}
}function bH(cg){return b0
}function bV(cg){var ch=M(cg.start);
if(cg.allDay){return ch
}return g(ch,bE("defaultEventMinutes"))
}function bo(cg,ch){if(ch){return M(cg)
}return g(M(cg),bE("slotMinutes"))
}function b4(cg,ci,ch){if(ch){if(bE("allDaySlot")){aN(cg,aA(M(ci),1),true)
}}else{b3(cg,ci)
}}function b3(cg,cm){var ck=bE("selectHelper");
bL.build();
if(ck){var ci=ax(cg,bb.visStart)*a4+a3;
if(ci>=0&&ci<bJ){var cj=bL.rect(0,ci,0,ci,bG);
var cl=ce(cg,cg);
var ch=ce(cg,cm);
if(ch>cl){cj.top=cl;
cj.height=ch-cl;
cj.left+=2;
cj.width-=5;
if(ar.isFunction(ck)){var cn=ck(cg,cm);
if(cn){cj.position="absolute";
cj.zIndex=8;
aQ=ar(cn).css(cj).appendTo(bG)
}}else{cj.isStart=true;
cj.isEnd=true;
aQ=ar(a2({title:"",start:cg,end:cm,className:["fc-select-helper"],editable:false},cj));
aQ.css("opacity",bE("dragOpacity"))
}if(aQ){bZ(aQ);
bG.append(aQ);
at(aQ,cj.width,true);
Y(aQ,cj.height,true)
}}}}else{ba(cg,cm)
}}function bY(){aL();
if(aQ){aQ.remove();
aQ=null
}}function aX(cg){if(cg.which==1&&bE("selectable")){b2(cg);
var ch;
ca.start(function(cj,ci){bY();
if(cj&&cj.col==ci.col&&!b5(cj)){var cl=aM(ci);
var ck=aM(cj);
ch=[cl,g(M(cl),bu),ck,g(M(ck),bu)].sort(W);
b3(ch[0],ch[3])
}else{ch=null
}},cg);
ar(document).one("mouseup",function(ci){ca.stop();
if(ch){if(+ch[0]==+ch[1]){a9(ch[0],false,ci)
}bv(ch[0],ch[3],false,ci)
}})
}}function a9(cg,ci,ch){bI("dayClick",bd[aV(cg.getDay())],cg,ci,ch)
}function aT(ci,cg,ch){ca.start(function(cj){aL();
if(cj){if(b5(cj)){a5(cj.row,cj.col,cj.row,cj.col)
}else{var cl=aM(cj);
var ck=g(M(cl),bE("defaultEventMinutes"));
ba(cl,ck)
}}},cg)
}function cc(cj,ch,ci){var cg=ca.stop();
aL();
if(cg){bI("drop",cj,aM(cg),b5(cg),ch,ci)
}}}function T(){var bj=this;
bj.renderEvents=aN;
bj.compileDaySegs=aI;
bj.clearEvents=a4;
bj.slotSegHtml=a5;
bj.bindDaySeg=a2;
X.call(bj);
var aX=bj.opt;
var a6=bj.trigger;
var aL=bj.isEventDraggable;
var bo=bj.isEventResizable;
var bp=bj.eventEnd;
var aR=bj.reportEvents;
var bs=bj.reportEventClear;
var a9=bj.eventElementHandlers;
var be=bj.setHeight;
var aM=bj.getDaySegmentContainer;
var br=bj.getSlotSegmentContainer;
var aK=bj.getHoverListener;
var aJ=bj.getMaxMinute;
var bb=bj.getMinMinute;
var aQ=bj.timePosition;
var bd=bj.colContentLeft;
var bc=bj.colContentRight;
var bg=bj.renderDaySegs;
var ba=bj.resizableDayEvent;
var bf=bj.getColCnt;
var aY=bj.getColWidth;
var bi=bj.getSnapHeight;
var aT=bj.getSnapMinutes;
var a3=bj.getBodyContent;
var aV=bj.reportEventElement;
var aO=bj.showEvents;
var aW=bj.hideEvents;
var bm=bj.eventDrop;
var a0=bj.eventResize;
var a7=bj.renderDayOverlay;
var aP=bj.clearOverlays;
var bk=bj.calendar;
var bh=bk.formatDate;
var aZ=bk.formatDates;
function aN(bx,bv){aR(bx);
var bw,bu=bx.length,by=[],bt=[];
for(bw=0;
bw<bu;
bw++){if(bx[bw].allDay){by.push(bx[bw])
}else{bt.push(bx[bw])
}}if(aX("allDaySlot")){bg(aI(by),bv);
be()
}aS(a1(bt),bv);
a6("eventAfterAllRender")
}function a4(){bs();
aM().empty();
br().empty()
}function aI(bx){var bz=ag(ab(bx,ar.map(bx,am),bj.visStart,bj.visEnd)),bw,by=bz.length,bA,bv,bu,bt=[];
for(bw=0;
bw<by;
bw++){bA=bz[bw];
for(bv=0;
bv<bA.length;
bv++){bu=bA[bv];
bu.row=0;
bu.level=bw;
bt.push(bu)
}}return bt
}function a1(bF){var bE=bf(),bC=bb(),bw=aJ(),bD=g(M(bj.visStart),bC),bA=ar.map(bF,bq),bB,bv,bz,bt,bx,by,bu=[];
for(bB=0;
bB<bE;
bB++){bv=ag(ab(bF,bA,bD,g(M(bD),bw-bC)));
C(bv);
for(bz=0;
bz<bv.length;
bz++){bt=bv[bz];
for(bx=0;
bx<bt.length;
bx++){by=bt[bx];
by.col=bB;
by.level=bz;
bu.push(by)
}}aA(bD,1,true)
}return bu
}function bq(bt){if(bt.end){return M(bt.end)
}else{return g(M(bt.start),aX("defaultEventMinutes"))
}}function aS(bJ,bK){var bP,bS=bJ.length,bR,bN,bT,bE,bB,bA,bv,bC,bz,bM,bt,bw,bD="",bU,bQ,by,bu={},bX={},bW,bV,bH,bG,bO=br(),bx,bI,bF,bL=bf();
if(bx=aX("isRTL")){bI=-1;
bF=bL-1
}else{bI=1;
bF=0
}for(bP=0;
bP<bS;
bP++){bR=bJ[bP];
bN=bR.event;
bE=aQ(bR.start,bR.start);
bB=aQ(bR.start,bR.end);
bA=bR.col;
bv=bR.level;
bC=bR.forward||0;
bz=bd(bA*bI+bF);
bM=bc(bA*bI+bF)-bz;
bM=Math.min(bM-6,bM*0.95);
if(bv){bt=bM/(bv+bC+1)
}else{if(bC){bt=((bM/(bC+1))-(12/2))*2
}else{bt=bM
}}bw=bz+(bM/(bv+bC+1)*bv)*bI+(bx?bM-bt:0);
bR.top=bE;
bR.left=bw;
bR.outerWidth=bt;
bR.outerHeight=bB-bE;
bD+=a5(bN,bR)
}bO[0].innerHTML=bD;
bU=bO.children();
for(bP=0;
bP<bS;
bP++){bR=bJ[bP];
bN=bR.event;
bQ=ar(bU[bP]);
by=a6("eventRender",bN,bN,bQ);
if(by===false){bQ.remove()
}else{if(by&&by!==true){bQ.remove();
bQ=ar(by).css({position:"absolute",top:bR.top,left:bR.left}).appendTo(bO)
}bR.element=bQ;
if(bN._id===bK){bl(bN,bQ,bR)
}else{bQ[0]._fci=bP
}aV(bN,bQ)
}}u(bO,bJ,bl);
for(bP=0;
bP<bS;
bP++){bR=bJ[bP];
if(bQ=bR.element){bV=bu[bW=bR.key=G(bQ[0])];
bR.vsides=bV===v?(bu[bW]=E(bQ,true)):bV;
bV=bX[bW];
bR.hsides=bV===v?(bX[bW]=f(bQ,true)):bV;
bH=bQ.find(".fc-event-title");
if(bH.length){bR.contentTop=bH[0].offsetTop
}}}for(bP=0;
bP<bS;
bP++){bR=bJ[bP];
if(bQ=bR.element){bQ[0].style.width=Math.max(0,bR.outerWidth-bR.hsides)+"px";
bG=Math.max(0,bR.outerHeight-bR.vsides);
bQ[0].style.height=bG+"px";
bN=bR.event;
if(bR.contentTop!==v&&bG-bR.contentTop<10){bQ.find("div.fc-event-time").text(bh(bN.start,aX("timeFormat"))+" - "+bN.title);
bQ.find("div.fc-event-title").remove()
}a6("eventAfterRender",bN,bN,bQ)
}}}function a5(by,bt){var bx="<";
var bv=by.url;
var bu=Q(by,aX);
var bw=["fc-event","fc-event-vert"];
if(aL(by)){bw.push("fc-event-draggable")
}if(bt.isStart){bw.push("fc-event-start")
}if(bt.isEnd){bw.push("fc-event-end")
}bw=bw.concat(by.className);
if(by.source){bw=bw.concat(by.source.className||[])
}if(bv){bx+="a href='"+aD(by.url)+"'"
}else{bx+="div"
}bx+=" class='"+bw.join(" ")+"' style='position:absolute;z-index:8;top:"+bt.top+"px;left:"+bt.left+"px;"+bu+"'><div class='fc-event-inner'><div class='fc-event-time'>"+aD(aZ(by.start,by.end,aX("timeFormat")))+"</div><div class='fc-event-title'>"+aD(by.title)+"</div></div><div class='fc-event-bg'></div>";
if(bt.isEnd&&bo(by)){bx+="<div class='ui-resizable-handle ui-resizable-s'>=</div>"
}bx+="</"+(bv?"a":"div")+">";
return bx
}function a2(bv,bu,bt){if(aL(bv)){aU(bv,bu,bt.isStart)
}if(bt.isEnd&&bo(bv)){ba(bv,bu,bt)
}a9(bv,bu)
}function bl(bv,bu,bt){var bw=bu.find("div.fc-event-time");
if(aL(bv)){a8(bv,bu,bw)
}if(bt.isEnd&&bo(bv)){bn(bv,bu,bw)
}a9(bv,bu)
}function aU(bu,bD,bt){var bE;
var bC;
var bG=true;
var by;
var bw=aX("isRTL")?-1:1;
var bx=aK();
var bz=aY();
var bv=bi();
var bF=aT();
var bB=bb();
bD.draggable({zIndex:9,opacity:aX("dragOpacity","month"),revertDuration:aX("dragRevertDuration"),start:function(bH,bI){a6("eventDragStart",bD,bu,bH,bI);
aW(bu,bD);
bE=bD.width();
bx.start(function(bK,bJ,bL,bM){aP();
if(bK){bC=false;
by=bM*bw;
if(!bK.row){a7(aA(M(bu.start),by),aA(am(bu),by));
bA()
}else{if(bt){if(bG){bD.width(bz-10);
Y(bD,bv*Math.round((bu.end?((bu.end-bu.start)/U):aX("defaultEventMinutes"))/bF));
bD.draggable("option","grid",[bz,1]);
bG=false
}}else{bC=true
}}bC=bC||(bG&&!by)
}else{bA();
bC=true
}bD.draggable("option","revert",bC)
},bH,"drag")
},stop:function(bI,bJ){bx.stop();
aP();
a6("eventDragStop",bD,bu,bI,bJ);
if(bC){bA();
bD.css("filter","");
aO(bu,bD)
}else{var bH=0;
if(!bG){bH=Math.round((bD.offset().top-a3().offset().top)/bv)*bF+bB-(bu.start.getHours()*60+bu.start.getMinutes())
}bm(this,bu,by,bH,bG,bI,bJ)
}}});
function bA(){if(!bG){bD.width(bE).height("").draggable("option","grid",null);
bG=true
}}}function a8(bt,bE,bF){var by;
var bI=false;
var bz;
var bD;
var bB;
var bv=aX("isRTL")?-1:1;
var bx=aK();
var bG=bf();
var bA=aY();
var bu=bi();
var bH=aT();
bE.draggable({zIndex:9,scroll:false,grid:[bA,bu],axis:bG==1?"y":false,opacity:aX("dragOpacity"),revertDuration:aX("dragRevertDuration"),start:function(bJ,bK){a6("eventDragStart",bE,bt,bJ,bK);
aW(bt,bE);
by=bE.position();
bD=bB=0;
bx.start(function(bM,bL,bN,bO){bE.draggable("option","revert",!bM);
aP();
if(bM){bz=bO*bv;
if(aX("allDaySlot")&&!bM.row){if(!bI){bI=true;
bF.hide();
bE.draggable("option","grid",null)
}a7(aA(M(bt.start),bz),aA(am(bt),bz))
}else{bC()
}}},bJ,"drag")
},drag:function(bJ,bK){bD=Math.round((bK.position.top-by.top)/bu)*bH;
if(bD!=bB){if(!bI){bw(bD)
}bB=bD
}},stop:function(bK,bL){var bJ=bx.stop();
aP();
a6("eventDragStop",bE,bt,bK,bL);
if(bJ&&(bz||bD||bI)){bm(this,bt,bz,bI?0:bD,bI,bK,bL)
}else{bC();
bE.css("filter","");
bE.css(by);
bw(0);
aO(bt,bE)
}}});
function bw(bK){var bJ=g(M(bt.start),bK);
var bL;
if(bt.end){bL=g(M(bt.end),bK)
}bF.text(aZ(bJ,bL,aX("timeFormat")))
}function bC(){if(bI){bF.css("display","");
bE.draggable("option","grid",[bA,bu]);
bI=false
}}}function bn(bx,bv,by){var bw,bt;
var bz=bi();
var bu=aT();
bv.resizable({handles:{s:".ui-resizable-handle"},grid:bz,start:function(bA,bB){bw=bt=0;
aW(bx,bv);
bv.css("z-index",9);
a6("eventResizeStart",this,bx,bA,bB)
},resize:function(bA,bB){bw=Math.round((Math.max(bz,bv.height())-bB.originalSize.height)/bz);
if(bw!=bt){by.text(aZ(bx.start,(!bw&&!bx.end)?null:g(bp(bx),bu*bw),aX("timeFormat")));
bt=bw
}},stop:function(bA,bB){a6("eventResizeStop",this,bx,bA,bB);
if(bw){a0(this,bx,0,bu*bw,bA,bB)
}else{bv.css("z-index",8);
aO(bx,bv)
}}})
}}function C(aM){var aK,aJ,aI,aO,aN,aL;
for(aK=aM.length-1;
aK>0;
aK--){aO=aM[aK];
for(aJ=0;
aJ<aO.length;
aJ++){aN=aO[aJ];
for(aI=0;
aI<aM[aK-1].length;
aI++){aL=aM[aK-1][aI];
if(N(aN,aL)){aL.forward=Math.max(aL.forward||0,(aN.forward||0)+1)
}}}}}function aB(aM,aT,aY){var aS=this;
aS.element=aM;
aS.calendar=aT;
aS.name=aY;
aS.opt=aK;
aS.trigger=aU;
aS.isEventDraggable=aX;
aS.isEventResizable=a1;
aS.reportEvents=aZ;
aS.eventEnd=a2;
aS.reportEventElement=a0;
aS.reportEventClear=a8;
aS.eventElementHandlers=aJ;
aS.showEvents=a5;
aS.hideEvents=aI;
aS.eventDrop=aW;
aS.eventResize=aL;
var a9=aS.defaultEventEnd;
var aR=aT.normalizeEvent;
var aQ=aT.reportEventChange;
var a3={};
var a7=[];
var aP={};
var aN=aT.options;
function aK(bc,ba){var bb=aN[bc];
if(typeof bb=="object"){return D(bb,ba||aY)
}return bb
}function aU(ba,bb){return aT.trigger.apply(aT,[ba,bb||aS].concat(Array.prototype.slice.call(arguments,2),[aS]))
}function aX(ba){return a4(ba)&&!aK("disableDragging")
}function a1(ba){return a4(ba)&&!aK("disableResizing")
}function a4(ba){return aG(ba.editable,(ba.source||{}).editable,aK("editable"))
}function aZ(bc){a3={};
var bb,ba=bc.length,bd;
for(bb=0;
bb<ba;
bb++){bd=bc[bb];
if(a3[bd._id]){a3[bd._id].push(bd)
}else{a3[bd._id]=[bd]
}}}function a2(ba){return ba.end?M(ba.end):a9(ba)
}function a0(bb,ba){a7.push(ba);
if(aP[bb._id]){aP[bb._id].push(ba)
}else{aP[bb._id]=[ba]
}}function a8(){a7=[];
aP={}
}function aJ(bb,ba){ba.click(function(bc){if(!ba.hasClass("ui-draggable-dragging")&&!ba.hasClass("ui-resizable-resizing")){return aU("eventClick",this,bb,bc)
}}).hover(function(bc){aU("eventMouseover",this,bb,bc)
},function(bc){aU("eventMouseout",this,bb,bc)
})
}function a5(bb,ba){aV(bb,ba,"show")
}function aI(bb,ba){aV(bb,ba,"hide")
}function aV(bd,bc,bf){var be=aP[bd._id],bb,ba=be.length;
for(bb=0;
bb<ba;
bb++){if(!bc||be[bb][0]!=bc[0]){be[bb][bf]()
}}}function aW(bd,bb,bc,be,bh,bg,bf){var bi=bb.allDay;
var ba=bb._id;
a6(a3[ba],bc,be,bh);
aU("eventDrop",bd,bb,bc,be,bh,function(){a6(a3[ba],-bc,-be,bi);
aQ(ba)
},bg,bf);
aQ(ba)
}function aL(bg,be,bb,ba,bd,bf){var bc=be._id;
aO(a3[bc],bb,ba);
aU("eventResize",bg,be,bb,ba,function(){aO(a3[bc],-bb,-ba);
aQ(bc)
},bd,bf);
aQ(bc)
}function a6(be,bc,bb,bf){bb=bb||0;
for(var bg,ba=be.length,bd=0;
bd<ba;
bd++){bg=be[bd];
if(bf!==v){bg.allDay=bf
}g(aA(bg.start,bc,true),bb);
if(bg.end){bg.end=g(aA(bg.end,bc,true),bb)
}aR(bg,aN)
}}function aO(be,bc,bb){bb=bb||0;
for(var bf,ba=be.length,bd=0;
bd<ba;
bd++){bf=be[bd];
bf.end=g(aA(a2(bf),bc,true),bb);
aR(bf,aN)
}}}function X(){var bb=this;
bb.renderDaySegs=ba;
bb.resizableDayEvent=a4;
var aT=bb.opt;
var a0=bb.trigger;
var aK=bb.isEventDraggable;
var bg=bb.isEventResizable;
var bh=bb.eventEnd;
var aR=bb.reportEventElement;
var aN=bb.showEvents;
var aS=bb.hideEvents;
var aW=bb.eventResize;
var bk=bb.getRowCnt;
var a9=bb.getColCnt;
var aU=bb.getColWidth;
var aP=bb.allDayRow;
var be=bb.allDayBounds;
var a7=bb.colContentLeft;
var a5=bb.colContentRight;
var aY=bb.dayOfWeekCol;
var a6=bb.dateCell;
var aJ=bb.compileDaySegs;
var aL=bb.getDaySegmentContainer;
var aZ=bb.bindDaySeg;
var aV=bb.calendar.formatDates;
var a1=bb.renderDayOverlay;
var aO=bb.clearOverlays;
var aI=bb.clearSelection;
function ba(bn,bm){var bl=aL();
var bt;
var bs=bk();
var by=a9();
var br=0;
var bx;
var bw;
var bu;
var bq;
var bz=bn.length;
var bp;
var bv;
var bo;
bl[0].innerHTML=a2(bn);
a3(bn,bl.children());
bd(bn);
a8(bn,bl,bm);
bj(bn);
aM(bn);
bc(bn);
bt=aX();
for(bx=0;
bx<bs;
bx++){bw=0;
bu=[];
for(bq=0;
bq<by;
bq++){bu[bq]=0
}while(br<bz&&(bp=bn[br]).row==bx){bv=aq(bu.slice(bp.startCol,bp.endCol));
bp.top=bv;
bv+=bp.outerHeight;
for(bo=bp.startCol;
bo<bp.endCol;
bo++){bu[bo]=bv
}br++
}bt[bx].height(aq(bu))
}bi(bn,aQ(bt))
}function bf(bo,bn,bs){var br=ar("<div/>");
var bl;
var bm=aL();
var bq;
var bt=bo.length;
var bp;
br[0].innerHTML=a2(bo);
bl=br.children();
bm.append(bl);
a3(bo,bl);
bj(bo);
aM(bo);
bc(bo);
bi(bo,aQ(aX()));
bl=[];
for(bq=0;
bq<bt;
bq++){bp=bo[bq].element;
if(bp){if(bo[bq].row===bn){bp.css("top",bs)
}bl.push(bp[0])
}}return ar(bl)
}function a2(bq){var bx=aT("isRTL");
var bv;
var bB=bq.length;
var bu;
var bo;
var bp;
var bs;
var bl=be();
var bt=bl.left;
var bn=bl.right;
var bz;
var bm;
var br;
var bA;
var by;
var bw="";
for(bv=0;
bv<bB;
bv++){bu=bq[bv];
bo=bu.event;
bs=["fc-event","fc-event-hori"];
if(aK(bo)){bs.push("fc-event-draggable")
}if(bu.isStart){bs.push("fc-event-start")
}if(bu.isEnd){bs.push("fc-event-end")
}if(bx){bz=aY(bu.end.getDay()-1);
bm=aY(bu.start.getDay());
br=bu.isEnd?a7(bz):bt;
bA=bu.isStart?a5(bm):bn
}else{bz=aY(bu.start.getDay());
bm=aY(bu.end.getDay()-1);
br=bu.isStart?a7(bz):bt;
bA=bu.isEnd?a5(bm):bn
}bs=bs.concat(bo.className);
if(bo.source){bs=bs.concat(bo.source.className||[])
}bp=bo.url;
by=Q(bo,aT);
if(bp){bw+="<a href='"+aD(bp)+"'"
}else{bw+="<div"
}bw+=" class='"+bs.join(" ")+"' style='position:absolute;z-index:8;left:"+br+"px;"+by+"'><div class='fc-event-inner'>";
if(!bo.allDay&&bu.isStart){bw+="<span class='fc-event-time'>"+aD(aV(bo.start,bo.end,aT("timeFormat")))+"</span>"
}bw+="<span class='fc-event-title'>"+aD(bo.title)+"</span></div>";
if(bu.isEnd&&bg(bo)){bw+="<div class='ui-resizable-handle ui-resizable-"+(bx?"w":"e")+"'>&nbsp;&nbsp;&nbsp;</div>"
}bw+="</"+(bp?"a":"div")+">";
bu.left=br;
bu.outerWidth=bA-br;
bu.startCol=bz;
bu.endCol=bm+1
}return bw
}function a3(bm,br){var bp;
var bs=bm.length;
var bl;
var bq;
var bo;
var bn;
for(bp=0;
bp<bs;
bp++){bl=bm[bp];
bq=bl.event;
bo=ar(br[bp]);
bn=a0("eventRender",bq,bq,bo);
if(bn===false){bo.remove()
}else{if(bn&&bn!==true){bn=ar(bn).css({position:"absolute",left:bl.left});
bo.replaceWith(bn);
bo=bn
}bl.element=bo
}}}function bd(bm){var bo;
var bp=bm.length;
var bl;
var bn;
for(bo=0;
bo<bp;
bo++){bl=bm[bo];
bn=bl.element;
if(bn){aR(bl.event,bn)
}}}function a8(bm,br,bn){var bp;
var bs=bm.length;
var bl;
var bo;
var bq;
for(bp=0;
bp<bs;
bp++){bl=bm[bp];
bo=bl.element;
if(bo){bq=bl.event;
if(bq._id===bn){aZ(bq,bo,bl)
}else{bo[0]._fci=bp
}}}u(br,bm,aZ)
}function bj(bm){var bq;
var br=bm.length;
var bl;
var bp;
var bo,bs;
var bn={};
for(bq=0;
bq<br;
bq++){bl=bm[bq];
bp=bl.element;
if(bp){bo=bl.key=G(bp[0]);
bs=bn[bo];
if(bs===v){bs=bn[bo]=f(bp,true)
}bl.hsides=bs
}}}function aM(bm){var bo;
var bp=bm.length;
var bl;
var bn;
for(bo=0;
bo<bp;
bo++){bl=bm[bo];
bn=bl.element;
if(bn){bn[0].style.width=Math.max(0,bl.outerWidth-bl.hsides)+"px"
}}}function bc(bm){var bp;
var br=bm.length;
var bl;
var bo;
var bn,bs;
var bq={};
for(bp=0;
bp<br;
bp++){bl=bm[bp];
bo=bl.element;
if(bo){bn=bl.key;
bs=bq[bn];
if(bs===v){bs=bq[bn]=j(bo)
}bl.outerHeight=bo[0].offsetHeight+bs
}}}function aX(){var bl;
var bn=bk();
var bm=[];
for(bl=0;
bl<bn;
bl++){bm[bl]=aP(bl).find("div.fc-day-content > div")
}return bm
}function aQ(bm){var bl;
var bo=bm.length;
var bn=[];
for(bl=0;
bl<bo;
bl++){bn[bl]=bm[bl][0].offsetTop
}return bn
}function bi(bm,br){var bo;
var bq=bm.length;
var bl;
var bn;
var bp;
for(bo=0;
bo<bq;
bo++){bl=bm[bo];
bn=bl.element;
if(bn){bn[0].style.top=br[bl.row]+(bl.top||0)+"px";
bp=bl.event;
a0("eventAfterRender",bp,bp,bn)
}}}function a4(bn,bm,bl){var bq=aT("isRTL");
var bp=bq?"w":"e";
var bo=bm.find(".ui-resizable-"+bp);
var br=false;
aH(bm);
bm.mousedown(function(bs){bs.preventDefault()
}).click(function(bs){if(br){bs.preventDefault();
bs.stopImmediatePropagation()
}});
bo.mousedown(function(bB){if(bB.which!=1){return
}br=true;
var bw=bb.getHoverListener();
var bA=bk();
var bC=a9();
var bu=bq?-1:1;
var bt=bq?bC-1:0;
var bv=bm.css("top");
var bx;
var bs;
var bz=ar.extend({},bn);
var bD=a6(bn.start);
aI();
ar("body").css("cursor",bp+"-resize").one("mouseup",by);
a0("eventResizeStart",this,bn,bB);
bw.start(function(bF,bE){if(bF){var bI=Math.max(bD.row,bF.row);
var bJ=bF.col;
if(bA==1){bI=0
}if(bI==bD.row){if(bq){bJ=Math.min(bD.col,bJ)
}else{bJ=Math.max(bD.col,bJ)
}}bx=(bI*7+bJ*bu+bt)-(bE.row*7+bE.col*bu+bt);
var bH=aA(bh(bn),bx,true);
if(bx){bz.end=bH;
var bG=bs;
bs=bf(aJ([bz]),bl.row,bv);
bs.find("*").css("cursor",bp+"-resize");
if(bG){bG.remove()
}aS(bn)
}else{if(bs){aN(bn);
bs.remove();
bs=null
}}aO();
a1(bn.start,aA(M(bH),1))
}},bB);
function by(bE){a0("eventResizeStop",this,bn,bE);
ar("body").css("cursor","");
bw.stop();
aO();
if(bx){aW(this,bn,bx,0,bE)
}setTimeout(function(){br=false
},0)
}})
}}function al(){var aS=this;
aS.select=aQ;
aS.unselect=aM;
aS.reportSelection=aI;
aS.daySelectionMousedown=aP;
var aK=aS.opt;
var aL=aS.trigger;
var aN=aS.defaultSelectionEnd;
var aJ=aS.renderSelection;
var aR=aS.clearSelection;
var aO=false;
if(aK("selectable")&&aK("unselectAuto")){ar(document).mousedown(function(aT){var aU=aK("unselectCancel");
if(aU){if(ar(aT.target).parents(aU).length){return
}}aM(aT)
})
}function aQ(aT,aV,aU){aM();
if(!aV){aV=aN(aT,aU)
}aJ(aT,aV,aU);
aI(aT,aV,aU)
}function aM(aT){if(aO){aO=false;
aR();
aL("unselect",null,aT)
}}function aI(aT,aW,aV,aU){aO=true;
aL("select",null,aT,aW,aV,aU)
}function aP(aW){var aZ=aS.cellDate;
var aU=aS.cellIsAllDay;
var aT=aS.getHoverListener();
var aX=aS.reportDayClick;
if(aW.which==1&&aK("selectable")){aM(aW);
var aV=this;
var aY;
aT.start(function(a1,a0){aR();
if(a1&&aU(a1)){aY=[aZ(a0),aZ(a1)].sort(W);
aJ(aY[0],aY[1],true)
}else{aY=null
}},aW);
ar(document).one("mouseup",function(a0){aT.stop();
if(aY){if(+aY[0]==+aY[1]){aX(aY[0],true,a0)
}aI(aY[0],aY[1],true,a0)
}})
}}}function a(){var aL=this;
aL.renderOverlay=aJ;
aL.clearOverlays=aI;
var aK=[];
var aM=[];
function aJ(aO,aN){var aP=aM.shift();
if(!aP){aP=ar("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")
}if(aP[0].parentNode!=aN[0]){aP.appendTo(aN)
}aK.push(aP.css(aO).show());
return aP
}function aI(){var aN;
while(aN=aK.shift()){aM.push(aN.hide().unbind())
}}}function O(aI){var aJ=this;
var aK;
var aL;
aJ.build=function(){aK=[];
aL=[];
aI(aK,aL)
};
aJ.cell=function(aM,aS){var aR=aK.length;
var aN=aL.length;
var aO,aP=-1,aQ=-1;
for(aO=0;
aO<aR;
aO++){if(aS>=aK[aO][0]&&aS<aK[aO][1]){aP=aO;
break
}}for(aO=0;
aO<aN;
aO++){if(aM>=aL[aO][0]&&aM<aL[aO][1]){aQ=aO;
break
}}return(aP>=0&&aQ>=0)?{row:aP,col:aQ}:null
};
aJ.rect=function(aP,aR,aN,aO,aQ){var aM=aQ.offset();
return{top:aK[aP][0]-aM.top,left:aL[aR][0]-aM.left,width:aL[aO][1]-aL[aR][0],height:aK[aN][1]-aK[aP][0]}
}
}function an(aN){var aL=this;
var aM;
var aO;
var aJ;
var aI;
aL.start=function(aP,aQ,aR){aO=aP;
aJ=aI=null;
aN.build();
aK(aQ);
aM=aR||"mousemove";
ar(document).bind(aM,aK)
};
function aK(aP){B(aP);
var aQ=aN.cell(aP.pageX,aP.pageY);
if(!aQ!=!aI||aQ&&(aQ.row!=aI.row||aQ.col!=aI.col)){if(aQ){if(!aJ){aJ=aQ
}aO(aQ,aJ,aQ.row-aJ.row,aQ.col-aJ.col)
}else{aO(aQ,aJ)
}aI=aQ
}}aL.stop=function(){ar(document).unbind(aM,aK);
return aI
}
}function B(aI){if(aI.pageX===v){aI.pageX=aI.originalEvent.pageX;
aI.pageY=aI.originalEvent.pageY
}}function l(aJ){var aI=this,aK={},aN={},aM={};
function aL(aO){return aK[aO]=aK[aO]||aJ(aO)
}aI.left=function(aO){return aN[aO]=aN[aO]===v?aL(aO).position().left:aN[aO]
};
aI.right=function(aO){return aM[aO]=aM[aO]===v?aI.left(aO)+aL(aO).width():aM[aO]
};
aI.clear=function(){aK={};
aN={};
aM={}
}
}})($CQ);
(function(c){window.CQ_Analytics=window.CQ_Analytics||{};
var b=window.CQ_Analytics;
var d=c.Model.extend({modelName:"FollowModel",FOLLOW_OPERATION:"social:follow",UNFOLLOW_OPERATION:"social:unfollow",events:{FOLLOWED:"following:followed",UNFOLLOWED:"following:unfollowed",UPDATE_ERROR:"following:updateError"},toggle:function(){var j=_.bind(function(q){var r=this.get("followedResourceType");
var u=this.get("followedId");
var t=this.attributes.user.authorizableId;
var s=$(".scf-js-site-title").attr("href");
s=_.isUndefined(s)?"":s.substring(0,s.lastIndexOf(".html"));
this.sitePath=s;
var w="";
var n="";
var o=r;
if(r in c.loadedComponents){var m=c.loadedComponents[r][u];
w=m.model.get("subject")?m.model.get("subject"):"";
n=m.view.FOLLOW_EVENT?m.view.FOLLOW_EVENT:"";
o=m.view.COMMUNITY_FUNCTION?m.view.COMMUNITY_FUNCTION:r
}var p=q.response;
var v=p.isFollowed;
this.set("isFollowed",p.isFollowed);
this.trigger((v)?this.events.FOLLOWED:this.events.UNFOLLOWED,{model:this});
if(v&&n.length>0){if(!_.isUndefined(window._satellite)){window._satellite.track("communities-scf-follow")
}else{if(b.Sitecatalyst){b.record({event:n,values:{functionType:c.Context.communityFunction?c.Context.communityFunction:o,path:c.Context.path?c.Context.path:u,type:c.Context.type?c.Context.type:r,ugcTitle:c.Context.ugcTitle?c.Context.ugcTitle:w,siteTitle:c.Context.siteTitle?c.Context.siteTitle:$(".scf-js-site-title").text(),sitePath:c.Context.sitePath?c.Context.sitePath:this.sitePath,groupTitle:c.Context.groupTitle,groupPath:c.Context.groupPath,user:c.Context.user?c.Context.user:t},collect:false,componentPath:c.constants.ANALYTICS_BASE_RESOURCE_TYPE})
}}}},this);
var f=_.bind(function(o,n,m){c.log.error("error toggle follow state %o",m);
this.trigger(this.events.UPDATE_ERROR,{error:m})
},this);
var h=this.get("isFollowed");
var l=this.get("id");
var g=(l.indexOf("@")>-1)?encodeURIComponent(l):encodeURI(l);
if(g.indexOf("/")!==0){g="/"+g
}var e=c.config.urlRoot+g+c.constants.URL_EXT;
$CQ.ajax(e,{dataType:"json",type:"POST",xhrFields:{withCredentials:true},data:{":operation":(h)?this.UNFOLLOW_OPERATION:this.FOLLOW_OPERATION,followedId:this.get("followedId"),userId:this.get("user").id},success:j,error:f})
}});
var a=c.View.extend({viewName:"FollowView",init:function(){this.listenTo(this.model,this.model.events.FOLLOWED,this.follow);
this.listenTo(this.model,this.model.events.UNFOLLOWED,this.unfollow);
this.listenTo(this.model,this.model.events.UPDATE_ERROR,this.showError)
},follow:function(){this.render()
},unfollow:function(){this.render()
},update:function(){this.render()
},showError:function(e){c.log.error(e)
},toggleFollow:function(f){this.clearErrorMessages();
this.model.toggle({});
f.preventDefault();
return false
}});
c.Follow=d;
c.FollowView=a;
c.registerComponent("social/socialgraph/components/hbs/following",c.Follow,c.FollowView)
})(SCF);
(function(){Backbone.InfiniScroll=function(c,l){l=l||{};
var j={},a,g,d,f,e=0;
f=c.length||25;
j.collection=c;
j.options=_.defaults(l,{success:function(){},error:function(){},onFetch:function(){},target:$(window),param:"until",extraParams:{},pageSizeParam:"page_size",untilAttr:"id",pageSize:f,scrollOffset:100,remove:false,strict:false,includePage:false,buildParams:false});
var b=function(){a=$(j.options.target);
g=true;
d=1;
a.on("scroll",j.watchScroll)
};
j.destroy=function(){a.off("scroll",j.watchScroll)
};
j.resetScroll=function(){g=true;
d=1;
a.on("scroll",j.watchScroll)
};
j.enableFetch=function(){g=true
};
j.disableFetch=function(){g=false
};
j.onFetch=function(){j.options.onFetch()
};
j.fetchSuccess=function(o,m){var n=j.options.strict&&o.length>=(d+1)*j.options.pageSize;
if(!n&&!j.options.strict){if($.isFunction(o.parse)){var p=o.parse(m);
n=(typeof p!=="undefined"&&p.length>0)
}else{sucess=m.length>0
}}if(n){j.enableFetch();
d+=1
}else{j.disableFetch()
}j.options.success(o,m)
};
j.fetchError=function(n,m){j.enableFetch();
j.options.error(n,m)
};
j.watchScroll=function(p){console.log("watchScroll");
var n,o=a.scrollTop()+a.height(),m=a.get(0).scrollHeight;
if(!m){m=$(document).height()
}if(o>=m-j.options.scrollOffset&&g&&e<=o){var q=j.collection.last();
if(!q){return
}j.onFetch();
j.disableFetch();
j.collection.fetch({success:j.fetchSuccess,error:j.fetchError,remove:j.options.remove,data:$.extend(h(q),j.options.extraParams)})
}e=o
};
function h(m){var n={};
if(j.options.buildParams){n[j.options.param]=typeof(m[j.options.untilAttr])==="function"?m[j.options.untilAttr]():m.get(j.options.untilAttr);
n[j.options.pageSizeParam]=j.options.pageSize;
if(j.options.includePage){n.page=d+1
}}return n
}b();
return j
}
})();