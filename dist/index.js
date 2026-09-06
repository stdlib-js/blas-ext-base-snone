"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=s(function(k,v){
function y(e,r,i,a){var n,t;if(e<=0)return!0;for(n=a,t=0;t<e;t++){if(r[n])return!1;n+=i}return!0}v.exports=y
});var f=s(function(w,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),l=u();function m(e,r,i){var a=j(e,i);return l(e,r,i,a)}q.exports=m
});var d=s(function(z,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=f(),_=u();R(c,"ndarray",_);x.exports=c
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),o,p=O(E(__dirname,"./native.js"));b(p)?o=g:o=p;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
