function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,n){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):(e=e||self,n(e.window=e.window||{}))}(void 0,function(e){"use strict";var n,t,o=function(){return n||"undefined"!=typeof window&&(n=window.gsap)&&n.registerPlugin&&n},r=function(e,n){return!!(void 0===e?n:e&&!~(e+"").indexOf("false"))},i=function(e){if(n=e||o()){t=n.registerEase;var r,i=n.parseEase();for(r in i)i[r].config||i[r];t("slow",p),t("expoScale",c),t("rough",l);for(r in d)"version"!==r&&n.core.globals(r,d[r])}},f=function(e,n,t){e=Math.min(1,e||.7);var o=e<1?n||0===n?n:.7:0,i=(1-e)/2,f=i+e,a=r(t);return function(e){var n=e+(.5-e)*o;return e<i?a?1-(e=1-e/i)*e:n-(e=1-e/i)*e*e*e*n:e>f?a?1===e?0:1-(e=(e-f)/i)*e:n+(e-n)*(e=(e-f)/i)*e*e*e:a?1:n}},a=function(e,t,o){var r=Math.log(t/e),i=t-e;return o&&(o=n.parseEase(o)),function(n){return(e*Math.exp(r*(o?o(n):n))-e)/i}},u=function(e,n,t){this.t=e,this.v=n,t&&(this.next=t,t.prev=this,this.c=t.v-n,this.gap=t.t-e)},s=function(e){"object"!==_typeof(e)&&(e={points:+e||20});for(var t,o,i,f,a,s,p,c=e.taper||"none",l=[],d=0,y=0|(+e.points||20),v=y,g=r(e.randomize,!0),x=r(e.clamp),h=n?n.parseEase(e.template):0,m=.4*(+e.strength||1);--v>-1;)t=g?Math.random():1/y*v,o=h?h(t):t,"none"===c?i=m:"out"===c?(f=1-t,i=f*f*m):"in"===c?i=t*t*m:t<.5?(f=2*t,i=f*f*.5*m):(f=2*(1-t),i=f*f*.5*m),g?o+=Math.random()*i-.5*i:v%2?o+=.5*i:o-=.5*i,x&&(o>1?o=1:o<0&&(o=0)),l[d++]={x:t,y:o};for(l.sort(function(e,n){return e.x-n.x}),s=new u(1,1,null),v=y;v--;)a=l[v],s=new u(a.x,a.y,s);return p=new u(0,0,s.t?s:s.next),function(e){var n=p;if(e>n.t){for(;n.next&&e>=n.t;)n=n.next;n=n.prev}else for(;n.prev&&e<=n.t;)n=n.prev;return p=n,n.v+(e-n.t)/n.gap*n.c}},p=f(.7);p.ease=p,p.config=f;var c=a(1,2);c.config=a;var l=s();l.ease=l,l.config=s;var d={SlowMo:p,RoughEase:l,ExpoScaleEase:c};for(var y in d)d[y].register=i,d[y].version="3.11.1";o()&&n.registerPlugin(p),e.EasePack=d,e.ExpoScaleEase=c,e.RoughEase=l,e.SlowMo=p,e.default=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=EasePack.js.map