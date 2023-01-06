function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e=e||self,t(e.window=e.window||{}))}(void 0,function(e){"use strict";var t,r,i,n,o,l,u="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),s=function(){return"undefined"!=typeof window},a=function(){return t||s()&&(t=window.gsap)&&t.registerPlugin&&t},f=function(){return n||i&&i.createjs||i||{}},c=function(e){return console.warn(e)},p=function(e){var t=e.getBounds&&e.getBounds();t||(t=e.nominalBounds||{x:0,y:0,width:100,height:100},e.setBounds&&e.setBounds(t.x,t.y,t.width,t.height)),e.cache&&e.cache(t.x,t.y,t.width,t.height),c("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+e)},d=function(e,r,i){o||(o=f().ColorFilter)||c("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");for(var n,l,s,a,d,h,g=e.filters||[],b=g.length;b--;)if(g[b]instanceof o){l=g[b];break}if(l||(l=new o,g.push(l),e.filters=g),s=l.clone(),null!=r.tint)n=t.utils.splitColor(r.tint),a=null!=r.tintAmount?+r.tintAmount:1,s.redOffset=+n[0]*a,s.greenOffset=+n[1]*a,s.blueOffset=+n[2]*a,s.redMultiplier=s.greenMultiplier=s.blueMultiplier=1-a;else for(d in r)"exposure"!==d&&"brightness"!==d&&(s[d]=+r[d]);for(null!=r.exposure?(s.redOffset=s.greenOffset=s.blueOffset=255*(+r.exposure-1),s.redMultiplier=s.greenMultiplier=s.blueMultiplier=1):null!=r.brightness&&(a=+r.brightness-1,s.redOffset=s.greenOffset=s.blueOffset=a>0?255*a:0,s.redMultiplier=s.greenMultiplier=s.blueMultiplier=1-Math.abs(a)),b=8;b--;)d=u[b],l[d]!==s[d]&&(h=i.add(l,d,l[d],s[d],0,0,0,0,0,1))&&(h.op="easel_colorFilter");i._props.push("easel_colorFilter"),e.cacheID||p(e)},h=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],g=.212671,b=.072169,y=function(e,t){if(!(e instanceof Array&&t instanceof Array))return t;var r,i,n=[],o=0,l=0;for(r=0;r<4;r++){for(i=0;i<5;i++)l=4===i?e[o+4]:0,n[o+i]=e[o]*t[i]+e[o+1]*t[i+5]+e[o+2]*t[i+10]+e[o+3]*t[i+15]+l;o+=5}return n},m=function(e,t){if(isNaN(t))return e;var r=1-t,i=r*g,n=.71516*r,o=r*b;return y([i+t,n,o,0,0,i,n+t,o,0,0,i,n,o+t,0,0,0,0,0,1,0],e)},M=function(e,r,i){isNaN(i)&&(i=1);var n=t.utils.splitColor(r),o=n[0]/255,l=n[1]/255,u=n[2]/255,s=1-i;return y([s+i*o*g,i*o*.71516,i*o*b,0,0,i*l*g,s+i*l*.71516,i*l*b,0,0,i*u*g,i*u*.71516,s+i*u*b,0,0,0,0,0,1,0],e)},x=function(e,t){if(isNaN(t))return e;t*=Math.PI/180;var r=Math.cos(t),i=Math.sin(t);return y([g+.787329*r+i*-g,.71516+-.71516*r+-.71516*i,b+r*-b+.927831*i,0,0,g+r*-g+.143*i,.71516+.28484*r+.14*i,b+r*-b+-.283*i,0,0,g+r*-g+-.787329*i,.71516+-.71516*r+.71516*i,b+.927831*r+i*b,0,0,0,0,0,1,0,0,0,0,0,1],e)},w=function(e,t){return isNaN(t)?e:(t+=.01,y([t,0,0,0,128*(1-t),0,t,0,0,128*(1-t),0,0,t,0,128*(1-t),0,0,0,1,0],e))},v=function(e,t,r){l||(l=f().ColorMatrixFilter)||c("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");for(var i,n,o,u,s=e.filters||[],a=s.length;--a>-1;)if(s[a]instanceof l){o=s[a];break}for(o||(o=new l(h.slice()),s.push(o),e.filters=s),n=o.matrix,i=h.slice(),null!=t.colorize&&(i=M(i,t.colorize,Number(t.colorizeAmount))),null!=t.contrast&&(i=w(i,Number(t.contrast))),null!=t.hue&&(i=x(i,Number(t.hue))),null!=t.saturation&&(i=m(i,Number(t.saturation))),a=i.length;--a>-1;)i[a]!==n[a]&&(u=r.add(n,a,n[a],i[a],0,0,0,0,0,1))&&(u.op="easel_colorMatrixFilter");r._props.push("easel_colorMatrixFilter"),e.cacheID||p(),r._matrix=n},O=function(e){t=e||a(),s()&&(i=window),t&&(r=1)},_={version:"3.11.1",name:"easel",init:function(e,i,n,o,l){r||(O(),t||c("Please gsap.registerPlugin(EaselPlugin)")),this.target=e;var u,s,a,f,p,h,g;for(u in i)if(p=i[u],"colorFilter"===u||"tint"===u||"tintAmount"===u||"exposure"===u||"brightness"===u)a||(d(e,i.colorFilter||i,this),a=!0);else if("saturation"===u||"contrast"===u||"hue"===u||"colorize"===u||"colorizeAmount"===u)f||(v(e,i.colorMatrixFilter||i,this),f=!0);else if("frame"===u){if("string"==typeof p&&"="!==p.charAt(1)&&(h=e.labels))for(g=0;g<h.length;g++)h[g].label===p&&(p=h[g].position);s=this.add(e,"gotoAndStop",e.currentFrame,p,o,l,Math.round,0,0,1),s&&(s.op=u)}else null!=e[u]&&this.add(e,u,"get",p)},render:function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next;t.target.cacheID&&t.target.updateCache()},register:O};_.registerCreateJS=function(e){n=e},a()&&t.registerPlugin(_),e.EaselPlugin=_,e.default=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=EaselPlugin.js.map