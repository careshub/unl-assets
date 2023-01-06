function _typeof(t){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):(t=t||self,e(t.window=t.window||{}))}(void 0,function(t){"use strict";function e(t,e,i,r){if(!t||!t.parentNode||(n||x(t)).documentElement===t)return new M;var s=w(t),o=E(t),a=o?S:C,l=I(t,i),u=a[0].getBoundingClientRect(),h=a[1].getBoundingClientRect(),c=a[2].getBoundingClientRect(),f=l.parentNode,p=!r&&_(t),d=new M((h.left-u.left)/100,(h.top-u.top)/100,(c.left-u.left)/100,(c.top-u.top)/100,u.left+(p?0:V()),u.top+(p?0:k()));if(f.removeChild(l),s)for(u=s.length;u--;)h=s[u],h.scaleX=h.scaleY=0,h.renderTransform(1,h);return e?d.inverse():d}var n,i,r,s,o,a,l,u,h,c,f,p,d,m,g,y,v="transform",b=v+"Origin",x=function(t){var e=t.ownerDocument||t;!(v in t.style)&&"msTransform"in t.style&&(v="msTransform",b=v+"Origin");for(;e.parentNode&&(e=e.parentNode););if(i=window,l=new M,e){n=e,r=e.documentElement,s=e.body,u=n.createElementNS("http://www.w3.org/2000/svg","g"),u.style.transform="none";var o=e.createElement("div"),a=e.createElement("div");s.appendChild(o),o.appendChild(a),o.style.position="static",o.style[v]="translate3d(0,0,1px)",h=a.offsetParent!==o,s.removeChild(o)}return e},w=function(t){for(var e,n;t&&t!==s;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},S=[],C=[],k=function(){return i.pageYOffset||n.scrollTop||r.scrollTop||s.scrollTop||0},V=function(){return i.pageXOffset||n.scrollLeft||r.scrollLeft||s.scrollLeft||0},E=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},_=function t(e){return"fixed"===i.getComputedStyle(e).position||(e=e.parentNode,e&&1===e.nodeType?t(e):void 0)},B=function t(e,i){if(e.parentNode&&(n||x(e))){var r=E(e),s=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",l=r?i?"rect":"g":"div",u=2!==i?0:100,h=3===i?100:0,c="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",f=n.createElementNS?n.createElementNS(s.replace(/^https/,"http"),l):n.createElement(l);return i&&(r?(a||(a=t(e)),f.setAttribute("width",.01),f.setAttribute("height",.01),f.setAttribute("transform","translate("+u+","+h+")"),a.appendChild(f)):(o||(o=t(e),o.style.cssText=c),f.style.cssText=c+"width:0.1px;height:0.1px;top:"+h+"px;left:"+u+"px",o.appendChild(f))),f}throw"Need document and parent."},L=function(t){for(var e=new M,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},T=function(t){var e,n=t.getCTM();return n||(e=t.style[v],t.style[v]="none",t.appendChild(u),n=u.getCTM(),t.removeChild(u),e?t.style[v]=e:t.style.removeProperty(v.replace(/([A-Z])/g,"-$1").toLowerCase())),n||l.clone()},I=function(t,e){var n,r,s,u,c,f,p=E(t),d=t===p,m=p?S:C,g=t.parentNode;if(t===i)return t;if(m.length||m.push(B(t,1),B(t,2),B(t,3)),n=p?a:o,p)d?(s=T(t),u=-s.e/s.a,c=-s.f/s.d,r=l):t.getBBox?(s=t.getBBox(),r=t.transform?t.transform.baseVal:{},r=r.numberOfItems?r.numberOfItems>1?L(r):r.getItem(0).matrix:l,u=r.a*s.x+r.c*s.y,c=r.b*s.x+r.d*s.y):(r=new M,u=c=0),e&&"g"===t.tagName.toLowerCase()&&(u=c=0),(d?p:g).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+u)+","+(r.f+c)+")");else{if(u=c=0,h)for(r=t.offsetParent,s=t;s&&(s=s.parentNode)&&s!==r&&s.parentNode;)(i.getComputedStyle(s)[v]+"").length>4&&(u=s.offsetLeft,c=s.offsetTop,s=0);if(f=i.getComputedStyle(t),"absolute"!==f.position&&"fixed"!==f.position)for(r=t.offsetParent;g&&g!==r;)u+=g.scrollLeft||0,c+=g.scrollTop||0,g=g.parentNode;s=n.style,s.top=t.offsetTop-c+"px",s.left=t.offsetLeft-u+"px",s[v]=f[v],s[b]=f[b],s.position="fixed"===f.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n},N=function(t,e,n,i,r,s,o){return t.a=e,t.b=n,t.c=i,t.d=r,t.e=s,t.f=o,t},M=function(){function t(t,e,n,i,r,s){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===i&&(i=1),void 0===r&&(r=0),void 0===s&&(s=0),N(this,t,e,n,i,r,s)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,i=this.d,r=this.e,s=this.f,o=t*i-e*n||1e-10;return N(this,i/o,-e/o,-n/o,t/o,(n*s-i*r)/o,-(t*s-e*r)/o)},e.multiply=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,s=this.e,o=this.f,a=t.a,l=t.c,u=t.b,h=t.d,c=t.e,f=t.f;return N(this,a*e+u*i,a*n+u*r,l*e+h*i,l*n+h*r,s+c*e+f*i,o+c*n+f*r)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,n=this.b,i=this.c,r=this.d,s=this.e,o=this.f;return e===t.a&&n===t.b&&i===t.c&&r===t.d&&s===t.e&&o===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,i=t.y,r=this.a,s=this.b,o=this.c,a=this.d,l=this.e,u=this.f;return e.x=n*r+i*o+l||0,e.y=n*s+i*a+u||0,e},t}(),P=1,X=function(t,e){return t.actions.forEach(function(t){return t.vars[e]&&t.vars[e](t)})},O={},A=180/Math.PI,Y=Math.PI/180,R={},z={},D={},F=function(t){return"string"==typeof t?t.split(" ").join("").split(","):t},H=F("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),W=F("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),j=function(t){return c(t)[0]||console.warn("Element not found:",t)},q=function(t){return Math.round(1e4*t)/1e4||0},J=function(t,e,n){return t.forEach(function(t){return t.classList[n](e)})},U={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Z={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},$=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},G=function(t,e){var n,i={};for(n in t)e[n]||(i[n]=t[n]);return i},K={},Q=function(t){var e=K[t]=F(t);return D[t]=e.concat(W),e},tt=function(t){var n=t._gsap||f.core.getCache(t);return n.gmCache===f.ticker.frame?n.gMatrix:(n.gmCache=f.ticker.frame,n.gMatrix=e(t,!0,!1,!0))},et=function t(e,n,i){void 0===i&&(i=0);for(var r=e.parentNode,s=1e3*Math.pow(10,i)*(n?-1:1),o=n?900*-s:0;e;)o+=s,e=e.previousSibling;return r?o+t(r,n,i+1):o},nt=function(t,e,n){return t.forEach(function(t){return t.d=et(n?t.element:t.t,e)}),t.sort(function(t,e){return t.d-e.d}),t},it=function(t,e){for(var n,i,r=t.element.style,s=t.css=t.css||[],o=e.length;o--;)n=e[o],i=r[n]||r.getPropertyValue(n),s.push(i?n:z[n]||(z[n]=$(n)),i);return r},rt=function(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i])},st=function(t,e){t.forEach(function(t){return t.a.cache.uncache=1}),e||t.finalStates.forEach(rt)},ot="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),at=function(t,n,i){var r,s,o,a=t.element,l=t.width,u=t.height,h=t.uncache,c=t.getProp,f=a.style,d=4;if("object"!==_typeof(n)&&(n=t),p&&1!==i)return p._abs.push({t:a,b:t,a:t,sd:0}),p._final.push(function(){return(t.cache.uncache=1)&&rt(t)}),a;for(s="none"===c("display"),t.isVisible&&!s||(s&&(it(t,["display"]).display=n.display),t.matrix=n.matrix,t.width=l=t.width||n.width,t.height=u=t.height||n.height),it(t,ot),o=window.getComputedStyle(a);d--;)f[ot[d]]=o[ot[d]];if(f.gridArea="1 / 1 / 1 / 1",f.transition="none",f.position="absolute",f.width=l+"px",f.height=u+"px",f.top||(f.top="0px"),f.left||(f.left="0px"),h)r=new Bt(a);else if(r=G(t,R),r.position="absolute",t.simple){var m=a.getBoundingClientRect();r.matrix=new M(1,0,0,1,m.left+V(),m.top+k())}else r.matrix=e(a,!1,!1,!0);return r=yt(r,t,!0),t.x=g(r.x,.01),t.y=g(r.y,.01),a},lt=function(t,e){return!0!==e&&(e=c(e),t=t.filter(function(t){if(-1!==e.indexOf((t.sd<0?t.b:t.a).element))return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),t},ut=function(t){return nt(t,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&at(t.sd<0?t.b:t.a,t.b,1)})},ht=function(t,e){return e&&t.idLookup[ct(e).id]||t.elementStates[0]},ct=function(t,e,n,i){return t instanceof Bt?t:t instanceof _t?ht(t,i):new Bt("string"==typeof t?j(t)||console.warn(t+" not found"):t,e,n)},ft=function(t,e){for(var n=f.getProperty(t.element,null,"native"),i=t.props={},r=e.length;r--;)i[e[r]]=(n(e[r])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),t},pt=function(t,e){var n,i=t.style||t;for(n in e)i[n]=e[n]},dt=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+P++),e},mt=function(t){return t.map(function(t){return t.element})},gt=function(t,e,n){return t&&e.length&&n.add(t(mt(e),n,new _t(e,0,!0)),0)},yt=function(t,n,i,r,s,o){var a,l,u,h,p,d,m,y=t.element,v=t.cache,b=t.parent,x=t.x,w=t.y,S=n.width,C=n.height,k=n.scaleX,V=n.scaleY,E=n.rotation,_=n.bounds,B=o&&y.style.cssText,L=o&&y.getBBox&&y.getAttribute("transform"),T=t,I=n.matrix,N=I.e,M=I.f,P=t.bounds.width!==_.width||t.bounds.height!==_.height||t.scaleX!==k||t.scaleY!==V||t.rotation!==E,X=!P&&t.simple&&n.simple&&!s;return X||!b?(k=V=1,E=a=0):(p=tt(b),d=p.clone().multiply(n.ctm?n.matrix.clone().multiply(n.ctm):n.matrix),E=q(Math.atan2(d.b,d.a)*A),a=q(Math.atan2(d.c,d.d)*A+E)%360,k=Math.sqrt(Math.pow(d.a,2)+Math.pow(d.b,2)),V=Math.sqrt(Math.pow(d.c,2)+Math.pow(d.d,2))*Math.cos(a*Y),s&&(s=c(s)[0],h=f.getProperty(s),m=s.getBBox&&"function"==typeof s.getBBox&&s.getBBox(),T={scaleX:h("scaleX"),scaleY:h("scaleY"),width:m?m.width:Math.ceil(parseFloat(h("width","px"))),height:m?m.height:parseFloat(h("height","px"))}),v.rotation=E+"deg",v.skewX=a+"deg"),i?(k*=S!==T.width&&T.width?S/T.width:1,V*=C!==T.height&&T.height?C/T.height:1,v.scaleX=k,v.scaleY=V):(S=g(S*k/T.scaleX,0),C=g(C*V/T.scaleY,0),y.style.width=S+"px",y.style.height=C+"px"),r&&pt(y,n.props),X||!b?(x+=N-t.matrix.e,w+=M-t.matrix.f):P||b!==n.parent?(v.renderTransform(1,v),d=e(s||y,!1,!1,!0),l=p.apply({x:d.e,y:d.f}),u=p.apply({x:N,y:M}),x+=u.x-l.x,w+=u.y-l.y):(p.e=p.f=0,u=p.apply({x:N-t.matrix.e,y:M-t.matrix.f}),x+=u.x,w+=u.y),x=g(x,.02),w=g(w,.02),!o||o instanceof Bt?(v.x=x+"px",v.y=w+"px",v.renderTransform(1,v)):(y.style.cssText=B,y.getBBox&&y.setAttribute("transform",L||""),v.uncache=1),o&&(o.x=x,o.y=w,o.rotation=E,o.skewX=a,i?(o.scaleX=k,o.scaleY=V):(o.width=S,o.height=C)),o||v},vt=function(t,e){return t instanceof _t?t:new _t(t,e)},bt=function(t,e,n){var i=t.idLookup[n],r=t.alt[n];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&i.isVisible?i:r},xt=[],wt="width,height,overflowX,overflowY".split(","),St=function(t){if(t!==y){var e=m.style,n=m.clientWidth===window.outerWidth,i=m.clientHeight===window.outerHeight,r=4;if(t&&(n||i)){for(;r--;)xt[r]=e[wt[r]];n&&(e.width=m.clientWidth+"px",e.overflowY="hidden"),i&&(e.height=m.clientHeight+"px",e.overflowX="hidden"),y=t}else if(y){for(;r--;)xt[r]?e[wt[r]]=xt[r]:e.removeProperty($(wt[r]));y=t}}},Ct=function(t,n,i,r){t instanceof _t&&n instanceof _t||console.warn("Not a valid state object."),i=i||{};var s,o,a,l,u,h,c,d,m,g,y,v,b,x,w=i,S=w.clearProps,C=w.onEnter,k=w.onLeave,V=w.absolute,E=w.absoluteOnLeave,_=w.custom,B=w.delay,L=w.paused,T=w.repeat,I=w.repeatDelay,N=w.yoyo,M=w.toggleClass,P=w.nested,X=w.zIndex,O=w.scale,A=w.fade,Y=w.stagger,R=w.spin,z=w.prune,F=("props"in i?i:t).props,j=G(i,U),q=f.timeline({delay:B,paused:L,repeat:T,repeatDelay:I,yoyo:N}),$=j,tt=[],et=[],rt=[],ot=[],at=!0===R?1:R||0,ht="function"==typeof R?R:function(){return at},ct=t.interrupted||n.interrupted,ft=q[1!==r?"to":"from"];for(o in n.idLookup)y=n.alt[o]?bt(n,t,o):n.idLookup[o],u=y.element,g=t.idLookup[o],t.alt[o]&&u===g.element&&(t.alt[o].isVisible||!y.isVisible)&&(g=t.alt[o]),g?(h={t:u,b:g,a:y,sd:g.element===u?0:y.isVisible?1:-1},rt.push(h),h.sd&&(h.sd<0&&(h.b=y,h.a=g),ct&&it(h.b,F?D[F]:W),A&&rt.push(h.swap={t:g.element,b:h.b,a:h.a,sd:-h.sd,swap:h})),u._flip=g.element._flip=p?p.timeline:q):y.isVisible&&(rt.push({t:u,b:G(y,{isVisible:1}),a:y,sd:0,entering:1}),u._flip=p?p.timeline:q);if(F&&(K[F]||Q(F)).forEach(function(t){return j[t]=function(e){return rt[e].a.props[t]}}),rt.finalStates=m=[],v=function(){for(nt(rt),St(!0),l=0;l<rt.length;l++)h=rt[l],b=h.a,x=h.b,!z||b.isDifferent(x)||h.entering?(u=h.t,P&&!(h.sd<0)&&l&&(b.matrix=e(u,!1,!1,!0)),x.isVisible&&b.isVisible?(h.sd<0?(c=new Bt(u,F,t.simple),yt(c,b,O,0,0,c),c.matrix=e(u,!1,!1,!0),c.css=h.b.css,h.a=b=c,A&&(u.style.opacity=ct?x.opacity:b.opacity),Y&&ot.push(u)):h.sd>0&&A&&(u.style.opacity=ct?b.opacity-x.opacity:"0"),yt(b,x,O,F)):x.isVisible!==b.isVisible&&(x.isVisible?b.isVisible||(x.css=b.css,et.push(x),rt.splice(l--,1),V&&P&&yt(b,x,O,F)):(b.isVisible&&tt.push(b),rt.splice(l--,1))),O||(u.style.maxWidth=Math.max(b.width,x.width)+"px",u.style.maxHeight=Math.max(b.height,x.height)+"px",u.style.minWidth=Math.min(b.width,x.width)+"px",u.style.minHeight=Math.min(b.height,x.height)+"px"),P&&M&&u.classList.add(M)):rt.splice(l--,1),m.push(b);var n;if(M&&(n=m.map(function(t){return t.element}),P&&n.forEach(function(t){return t.classList.remove(M)})),St(!1),O?(j.scaleX=function(t){return rt[t].a.scaleX},j.scaleY=function(t){return rt[t].a.scaleY}):(j.width=function(t){return rt[t].a.width+"px"},j.height=function(t){return rt[t].a.height+"px"},j.autoRound=i.autoRound||!1),j.x=function(t){return rt[t].a.x+"px"},j.y=function(t){return rt[t].a.y+"px"},j.rotation=function(t){return rt[t].a.rotation+(R?360*ht(t,d[t],d):0)},j.skewX=function(t){return rt[t].a.skewX},d=rt.map(function(t){return t.t}),(X||0===X)&&(j.modifiers={zIndex:function(){return X}},j.zIndex=X,j.immediateRender=!1!==i.immediateRender),A&&(j.opacity=function(t){return rt[t].sd<0?0:rt[t].sd>0?rt[t].a.opacity:"+=0"}),ot.length){Y=f.utils.distribute(Y);var r=d.slice(ot.length);j.stagger=function(t,e){return Y(~ot.indexOf(e)?d.indexOf(rt[t].swap.t):t,e,r)}}if(H.forEach(function(t){return i[t]&&q.eventCallback(t,i[t],i[t+"Params"])}),_&&d.length){$=G(j,U),"scale"in _&&(_.scaleX=_.scaleY=_.scale,delete _.scale);for(o in _)s=G(_[o],Z),s[o]=j[o],!("duration"in s)&&"duration"in j&&(s.duration=j.duration),s.stagger=j.stagger,ft.call(q,d,s,0),delete $[o]}(d.length||et.length||tt.length)&&(M&&q.add(function(){return J(n,M,q._zTime<0?"remove":"add")},0)&&!L&&J(n,M,"add"),d.length&&ft.call(q,d,$,0)),gt(C,tt,q),gt(k,et,q);var g=p&&p.timeline;g&&(g.add(q,0),p._final.push(function(){return st(rt,!S)})),a=q.duration(),q.call(function(){var t=q.time()>=a;t&&!g&&st(rt,!S),M&&J(n,M,t?"remove":"add")})},E&&(V=rt.filter(function(t){return!t.sd&&!t.a.isVisible&&t.b.isVisible}).map(function(t){return t.a.element})),p){var pt;V&&(pt=p._abs).push.apply(pt,lt(rt,V)),p._run.push(v)}else V&&ut(lt(rt,V)),v();return p?p.timeline:q},kt=function t(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(t)},Vt=function(t,e){if(t&&t.progress()<1&&!t.paused())return e&&(kt(t),e<2&&t.progress(1),t.kill()),!0},Et=function(t){for(var e,n=t.idLookup={},i=t.alt={},r=t.elementStates,s=r.length;s--;)e=r[s],n[e.id]?i[e.id]=e:n[e.id]=e},_t=function(){function t(t,e,n){if(this.props=e&&e.props,this.simple=!(!e||!e.simple),n)this.targets=mt(t),this.elementStates=t,Et(this);else{this.targets=c(t);var i=e&&(!1===e.kill||e.batch&&!e.kill);p&&!i&&p._kill.push(this),this.update(i||!!p)}}var n=t.prototype;return n.update=function(t){var e=this;return this.elementStates=this.targets.map(function(t){return new Bt(t,e.props,e.simple)}),Et(this),this.interrupt(t),this.recordInlineStyles(),this},n.clear=function(){return this.targets.length=this.elementStates.length=0,Et(this),this},n.fit=function(t,n,i){for(var r,s,o=nt(this.elementStates.slice(0),!1,!0),a=(t||this).idLookup,l=0;l<o.length;l++)r=o[l],i&&(r.matrix=e(r.element,!1,!1,!0)),s=a[r.id],s&&yt(r,s,n,!0,0,r),r.matrix=e(r.element,!1,!1,!0);return this},n.getProperty=function(t,e){var n=this.getElementState(t)||R;return(e in n?n:n.props||R)[e]},n.add=function(t){for(var e,n,i,r=t.targets.length,s=this.idLookup,o=this.alt;r--;)n=t.elementStates[r],i=s[n.id],i&&(n.element===i.element||o[n.id]&&o[n.id].element===n.element)?(e=this.elementStates.indexOf(n.element===i.element?i:o[n.id]),this.targets.splice(e,1,t.targets[r]),this.elementStates.splice(e,1,n)):(this.targets.push(t.targets[r]),this.elementStates.push(n));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Et(this),this},n.compare=function(t){var e,n,i,r,s,o,a,l,u=t.idLookup,h=this.idLookup,c=[],f=[],p=[],d=[],m=[],g=t.alt,y=this.alt,v=function(t,e,n){return(t.isVisible!==e.isVisible?t.isVisible?p:d:t.isVisible?f:c).push(n)&&m.push(n)},b=function(t,e,n){return m.indexOf(n)<0&&v(t,e,n)};for(i in u)s=g[i],o=y[i],e=s?bt(t,this,i):u[i],r=e.element,n=h[i],o?(l=n.isVisible||!o.isVisible&&r===n.element?n:o,a=!s||e.isVisible||s.isVisible||l.element!==s.element?e:s,a.isVisible&&l.isVisible&&a.element!==l.element?((a.isDifferent(l)?f:c).push(a.element,l.element),m.push(a.element,l.element)):v(a,l,a.element),s&&a.element===s.element&&(s=u[i]),b(a.element!==n.element&&s?s:a,n,n.element),b(s&&s.element===o.element?s:a,o,o.element),s&&b(s,o.element===s.element?o:n,s.element)):(n?n.isDifferent(e)?v(e,n,r):c.push(r):p.push(r),s&&b(s,n,s.element));for(i in h)u[i]||(d.push(h[i].element),y[i]&&d.push(y[i].element));return{changed:f,unchanged:c,enter:p,leave:d}},n.recordInlineStyles=function(){for(var t=D[this.props]||W,e=this.elementStates.length;e--;)it(this.elementStates[e],t)},n.interrupt=function(t){var e=this,n=[];this.targets.forEach(function(i){var r=i._flip,s=Vt(r,t?0:1);t&&s&&n.indexOf(r)<0&&r.add(function(){return e.updateVisibility()}),s&&n.push(r)}),!t&&n.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!n.length)},n.updateVisibility=function(){this.elementStates.forEach(function(t){var e=t.element.getBoundingClientRect();t.isVisible=!!(e.width||e.height||e.top||e.left),t.uncache=1})},n.getElementState=function(t){return this.elementStates[this.targets.indexOf(j(t))]},n.makeAbsolute=function(){return nt(this.elementStates.slice(0),!0,!0).map(at)},t}(),Bt=function(){function t(t,e,n){this.element=t,this.update(e,n)}var n=t.prototype;return n.isDifferent=function(t){var e=this.bounds,n=t.bounds;return e.top!==n.top||e.left!==n.left||e.width!==n.width||e.height!==n.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},n.update=function(t,n){var i=this,r=i.element,s=f.getProperty(r),o=f.core.getCache(r),a=r.getBoundingClientRect(),l=r.getBBox&&"function"==typeof r.getBBox&&"svg"!==r.nodeName.toLowerCase()&&r.getBBox(),u=n?new M(1,0,0,1,a.left+V(),a.top+k()):e(r,!1,!1,!0);i.getProp=s,i.element=r,i.id=dt(r),i.matrix=u,i.cache=o,i.bounds=a,i.isVisible=!!(a.width||a.height||a.left||a.top),i.display=s("display"),i.position=s("position"),i.parent=r.parentNode,i.x=s("x"),i.y=s("y"),i.scaleX=o.scaleX,i.scaleY=o.scaleY,i.rotation=s("rotation"),i.skewX=s("skewX"),i.opacity=s("opacity"),i.width=l?l.width:g(s("width","px"),.04),i.height=l?l.height:g(s("height","px"),.04),t&&ft(i,K[t]||Q(t)),i.ctm=r.getCTM&&"svg"===r.nodeName.toLowerCase()&&T(r).inverse(),i.simple=n||1===q(u.a)&&!q(u.b)&&!q(u.c)&&1===q(u.d),i.uncache=0},t}(),Lt=function(){function t(t,e){this.vars=t,this.batch=e,this.states=[],this.timeline=e.timeline}var e=t.prototype;return e.getStateById=function(t){for(var e=this.states.length;e--;)if(this.states[e].idLookup[t])return this.states[e]},e.kill=function(){this.batch.remove(this)},t}(),Tt=function(){function t(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new _t,this.timeline=f.timeline()}var e=t.prototype;return e.add=function(t){var e=this.actions.filter(function(e){return e.vars===t});return e.length?e[0]:(e=new Lt("function"==typeof t?{animate:t}:t,this),this.actions.push(e),e)},e.remove=function(t){var e=this.actions.indexOf(t);return e>=0&&this.actions.splice(e,1),this},e.getState=function(t){var e=this,n=p,i=d;return p=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(n){n.vars.getState&&(n.states.length=0,d=n,n.state=n.vars.getState(n)),t&&n.states.forEach(function(t){return e.state.add(t)})}),d=i,p=n,this.killConflicts(),this},e.animate=function(){var t,e,n=this,i=p,r=this.timeline,s=this.actions.length;for(p=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(t){t.vars.animate&&t.vars.animate(t);var e,n,i=t.vars.onEnter,r=t.vars.onLeave,s=t.targets;s&&s.length&&(i||r)&&(e=new _t,t.states.forEach(function(t){return e.add(t)}),n=e.compare(It.getState(s)),n.enter.length&&i&&i(n.enter),n.leave.length&&r&&r(n.leave))}),ut(this._abs),this._run.forEach(function(t){return t()}),e=r.duration(),t=this._final.slice(0),r.add(function(){e<=r.time()&&(t.forEach(function(t){return t()}),X(n,"onComplete"))}),p=i;s--;)this.actions[s].vars.once&&this.actions[s].kill();return X(this,"onStart"),r.restart(),this},e.loadState=function(t){t||(t=function(){return 0});var e=[];return this.actions.forEach(function(n){if(n.vars.loadState){var i,r=function r(s){s&&(n.targets=s),~(i=e.indexOf(r))&&(e.splice(i,1),e.length||t())};e.push(r),n.vars.loadState(r)}}),e.length||t(),this},e.setState=function(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},e.killConflicts=function(t){return this.state.interrupt(t),this._kill.forEach(function(e){return e.interrupt(t)}),this},e.run=function(t,e){var n=this;return this!==p&&(t||this.getState(e),this.loadState(function(){n._killed||(n.setState(),n.animate())})),this},e.clear=function(t){this.state.clear(),t||(this.actions.length=0)},e.getStateById=function(t){for(var e,n=this.actions.length;n--;)if(e=this.actions[n].getStateById(t))return e;return this.state.idLookup[t]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete O[this.id]},t}(),It=function(){function t(){}return t.getState=function(e,n){var i=vt(e,n);return d&&d.states.push(i),n&&n.batch&&t.batch(n.batch).state.add(i),i},t.from=function(t,e){return e=e||{},"clearProps"in e||(e.clearProps=!0),Ct(t,vt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,-1)},t.to=function(t,e){return Ct(t,vt(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,1)},t.fromTo=function(t,e,n){return Ct(t,e,n)},t.fit=function(t,e,n){var i=n?G(n,Z):{},r=n||i,s=r.absolute,o=r.scale,a=r.getVars,l=r.props,u=r.runBackwards,h=r.onComplete,c=r.simple,p=n&&n.fitChild&&j(n.fitChild),d=ct(e,l,c,t),m=ct(t,0,c,d),g=l?D[l]:W;return l&&pt(i,d.props),u&&(it(m,g),"immediateRender"in i||(i.immediateRender=!0),i.onComplete=function(){rt(m),h&&h.apply(this,arguments)}),s&&at(m,d),i=yt(m,d,o||p,l,p,i.duration||a?i:0),a?i:i.duration?f.to(m.element,i):null},t.makeAbsolute=function(t,e){return(t instanceof _t?t:new _t(t,e)).makeAbsolute()},t.batch=function(t){return t||(t="default"),O[t]||(O[t]=new Tt(t))},t.killFlipsOf=function(t,e){(t instanceof _t?t.targets:c(t)).forEach(function(t){return t&&Vt(t._flip,!1!==e?1:2)})},t.isFlipping=function(e){var n=t.getByTarget(e);return!!n&&n.isActive()},t.getByTarget=function(t){return(j(t)||R)._flip},t.getElementState=function(t,e){return new Bt(j(t),e)},t.convertCoordinates=function(t,n,i){var r=e(n,!0,!0).multiply(e(t));return i?r.apply(i):r},t.register=function(t){if(m="undefined"!=typeof document&&document.body){f=t,x(m),c=f.utils.toArray;var e=f.utils.snap(.1);g=function(t,n){return e(parseFloat(t)+n)}}},t}();It.version="3.11.1","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(It),t.Flip=It,t.default=It,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=Flip.js.map