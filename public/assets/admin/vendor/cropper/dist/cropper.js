!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],i):i(t.jQuery)}(this,function(gt){"use strict";gt=gt&&gt.hasOwnProperty("default")?gt.default:gt;var t="undefined"!=typeof window?window:{},d="cropper",k="all",W="crop",D="move",T="zoom",H="e",Y="w",X="s",O="n",E="ne",N="nw",R="se",z="sw",n=d+"-crop",i=d+"-disabled",L=d+"-hidden",s=d+"-hide",r=d+"-modal",c=d+"-move",l="action",f="preview",h="crop",o="move",p="none",g="crop",m="cropend",u="cropmove",v="cropstart",a="dblclick",w="error",x="load",b=t.PointerEvent?"pointerdown":"touchstart mousedown",y=t.PointerEvent?"pointermove":"touchmove mousemove",C=t.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",M="ready",$="resize",B="wheel mousewheel DOMMouseScroll",P="zoom",I=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,U=/^data:/,A=/^data:image\/jpeg;base64,/,F=/^(img|canvas)$/i,j={viewMode:0,dragMode:h,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},S=function(){function a(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,i,e){return i&&a(t.prototype,i),e&&a(t,e),t}}(),mt=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var e=Number.isNaN||t.isNaN;function q(t){return"number"==typeof t&&!e(t)}function Q(t){return void 0===t}function K(a,n){for(var t=arguments.length,h=Array(2<t?t-2:0),i=2;i<t;i++)h[i-2]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return a.apply(n,h.concat(i))}}var Z=Object.keys||function(t){var i=[];return gt.each(t,function(t){i.push(t)}),i},V=/\.\d*(?:0|9){12}\d*$/i;function ut(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e11;return V.test(t)?Math.round(t*i)/i:t}var G=t.location,J=/^(https?:)\/\/([^:/?#]+):?(\d*)/i;function _(t){var i=t.match(J);return i&&(i[1]!==G.protocol||i[2]!==G.hostname||i[3]!==G.port)}function tt(t){var i="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+i}function it(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,h=t.translateY,o=[];return q(n)&&0!==n&&o.push("translateX("+n+"px)"),q(h)&&0!==h&&o.push("translateY("+h+"px)"),q(i)&&0!==i&&o.push("rotate("+i+"deg)"),q(e)&&1!==e&&o.push("scaleX("+e+")"),q(a)&&1!==a&&o.push("scaleY("+a+")"),o.length?o.join(" "):"none"}var et=t.navigator,at=et&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(et.userAgent);function nt(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:gt.extend({startX:e,startY:a},n)}var ht=Number.isFinite||t.isFinite;function ft(t){var i=t.aspectRatio,e=t.height,a=t.width,n=function(t){return ht(t)&&0<t};return n(a)&&n(e)?a<e*i?e=a/i:a=e*i:n(a)?e=a/i:n(e)&&(a=e*i),{width:a,height:e}}var ot=String.fromCharCode;var st=/^data:.*,/;function rt(t){var i=new DataView(t),e=void 0,a=void 0,n=void 0,h=void 0;if(255===i.getUint8(0)&&216===i.getUint8(1))for(var o=i.byteLength,s=2;s<o;){if(255===i.getUint8(s)&&225===i.getUint8(s+1)){n=s;break}s+=1}if(n){var r=n+10;if("Exif"===function(t,i,e){var a="",n=void 0;for(e+=i,n=i;n<e;n+=1)a+=ot(t.getUint8(n));return a}(i,n+4,4)){var d=i.getUint16(r);if(((a=18761===d)||19789===d)&&42===i.getUint16(r+2,a)){var c=i.getUint32(r+4,a);8<=c&&(h=r+c)}}}if(h){var l=i.getUint16(h,a),p=void 0,g=void 0;for(g=0;g<l;g+=1)if(p=h+12*g+2,274===i.getUint16(p,a)){p+=8,e=i.getUint16(p,a),i.setUint16(p,1,a);break}}return e}var dt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.$element,i=this.options,e=this.$container,a=this.$cropper;a.addClass(L),t.removeClass(L),a.css(this.container={width:Math.max(e.width(),Number(i.minContainerWidth)||200),height:Math.max(e.height(),Number(i.minContainerHeight)||100)}),t.addClass(L),a.removeClass(L)},initCanvas:function(){var t=this.container,i=this.image,e=this.options.viewMode,a=Math.abs(i.rotate)%180==90,n=a?i.naturalHeight:i.naturalWidth,h=a?i.naturalWidth:i.naturalHeight,o=n/h,s=t.width,r=t.height;t.height*o>t.width?3===e?s=t.height*o:r=t.width/o:3===e?r=t.width/o:s=t.height*o;var d={aspectRatio:o,naturalWidth:n,naturalHeight:h,width:s,height:r};d.left=(t.width-s)/2,d.top=(t.height-r)/2,d.oldLeft=d.left,d.oldTop=d.top,this.canvas=d,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImage=gt.extend({},i),this.initialCanvas=gt.extend({},d)},limitCanvas:function(t,i){var e=this.options,a=this.container,n=this.canvas,h=this.cropBox,o=e.viewMode,s=n.aspectRatio,r=this.cropped&&h;if(t){var d=Number(e.minCanvasWidth)||0,c=Number(e.minCanvasHeight)||0;0<o&&(1<o?(d=Math.max(d,a.width),c=Math.max(c,a.height),3===o&&(d<c*s?d=c*s:c=d/s)):d?d=Math.max(d,r?h.width:0):c?c=Math.max(c,r?h.height:0):r&&((d=h.width)<(c=h.height)*s?d=c*s:c=d/s));var l=ft({aspectRatio:s,width:d,height:c});d=l.width,c=l.height,n.minWidth=d,n.minHeight=c,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if(0<o){var p=a.width-n.width,g=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,g),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,g),r&&this.limited&&(n.minLeft=Math.min(h.left,h.left+h.width-n.width),n.minTop=Math.min(h.top,h.top+h.height-n.height),n.maxLeft=h.left,n.maxTop=h.top,2===o&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,g),n.maxTop=Math.max(0,g))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvas,a=this.image;if(i){var n=function(t){var i=t.width,e=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:e,height:i};var n=a%90*Math.PI/180,h=Math.sin(n),o=Math.cos(n),s=i*o+e*h,r=i*h+e*o;return 90<a?{width:r,height:s}:{width:s,height:r}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),h=n.width,o=n.height,s=e.width*(h/e.naturalWidth),r=e.height*(o/e.naturalHeight);e.left-=(s-e.width)/2,e.top-=(r-e.height)/2,e.width=s,e.height=r,e.aspectRatio=h/o,e.naturalWidth=h,e.naturalHeight=o,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,this.$canvas.css({width:e.width,height:e.height,transform:it({translateX:e.left,translateY:e.top})}),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvas,e=this.image,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);gt.extend(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),this.$clone.css({width:e.width,height:e.height,transform:it(gt.extend({translateX:e.left,translateY:e.top},e))}),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvas,e=t.aspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBox=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBox=gt.extend({},n)},limitCropBox:function(t,i){var e=this.options,a=this.container,n=this.canvas,h=this.cropBox,o=this.limited,s=e.aspectRatio;if(t){var r=Number(e.minCropBoxWidth)||0,d=Number(e.minCropBoxHeight)||0,c=Math.min(a.width,o?n.width:a.width),l=Math.min(a.height,o?n.height:a.height);r=Math.min(r,a.width),d=Math.min(d,a.height),s&&(r&&d?r<d*s?d=r/s:r=d*s:r?d=r/s:d&&(r=d*s),c<l*s?l=c/s:c=l*s),h.minWidth=Math.min(r,c),h.minHeight=Math.min(d,l),h.maxWidth=c,h.maxHeight=l}i&&(o?(h.minLeft=Math.max(0,n.left),h.minTop=Math.max(0,n.top),h.maxLeft=Math.min(a.width,n.left+n.width)-h.width,h.maxTop=Math.min(a.height,n.top+n.height)-h.height):(h.minLeft=0,h.minTop=0,h.maxLeft=a.width-h.width,h.maxTop=a.height-h.height))},renderCropBox:function(){var t=this.options,i=this.container,e=this.cropBox;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&this.$face.data(l,e.width>=i.width&&e.height>=i.height?D:k),this.$cropBox.css({width:e.width,height:e.height,transform:it({translateX:e.left,translateY:e.top})}),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),this.completed&&this.trigger(g,this.getData())}},ct={initPreview:function(){var n=this.crossOrigin,h=n?this.crossOriginUrl:this.url,t=document.createElement("img");n&&(t.crossOrigin=n),t.src=h;var i=gt(t);this.$preview=gt(this.options.preview),this.$clone2=i,this.$viewBox.html(i),this.$preview.each(function(t,i){var e=gt(i),a=document.createElement("img");e.data(f,{width:e.width(),height:e.height(),html:e.html()}),n&&(a.crossOrigin=n),a.src=h,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',e.html(a)})},resetPreview:function(){this.$preview.each(function(t,i){var e=gt(i),a=e.data(f);e.css({width:a.width,height:a.height}).html(a.html).removeData(f)})},preview:function(){var d=this.image,t=this.canvas,i=this.cropBox,c=i.width,l=i.height,p=d.width,g=d.height,m=i.left-t.left-d.left,u=i.top-t.top-d.top;this.cropped&&!this.disabled&&(this.$clone2.css({width:p,height:g,transform:it(gt.extend({translateX:-m,translateY:-u},d))}),this.$preview.each(function(t,i){var e=gt(i),a=e.data(f),n=a.width,h=a.height,o=n,s=h,r=1;c&&(s=l*(r=n/c)),l&&h<s&&(o=c*(r=h/l),s=h),e.css({width:o,height:s}).find("img").css({width:p*r,height:g*r,transform:it(gt.extend({translateX:-m*r,translateY:-u*r},d))})}))}},lt={bind:function(){var t=this.$element,i=this.options,e=this.$cropper;gt.isFunction(i.cropstart)&&t.on(v,i.cropstart),gt.isFunction(i.cropmove)&&t.on(u,i.cropmove),gt.isFunction(i.cropend)&&t.on(m,i.cropend),gt.isFunction(i.crop)&&t.on(g,i.crop),gt.isFunction(i.zoom)&&t.on(P,i.zoom),e.on(b,K(this.cropStart,this)),i.zoomable&&i.zoomOnWheel&&e.on(B,K(this.wheel,this)),i.toggleDragModeOnDblclick&&e.on(a,K(this.dblclick,this)),gt(this.element.ownerDocument).on(y,this.onCropMove=K(this.cropMove,this)).on(C,this.onCropEnd=K(this.cropEnd,this)),i.responsive&&gt(window).on($,this.onResize=K(this.resize,this))},unbind:function(){var t=this.$element,i=this.options,e=this.$cropper;gt.isFunction(i.cropstart)&&t.off(v,i.cropstart),gt.isFunction(i.cropmove)&&t.off(u,i.cropmove),gt.isFunction(i.cropend)&&t.off(m,i.cropend),gt.isFunction(i.crop)&&t.off(g,i.crop),gt.isFunction(i.zoom)&&t.off(P,i.zoom),e.off(b,this.cropStart),i.zoomable&&i.zoomOnWheel&&e.off(B,this.wheel),i.toggleDragModeOnDblclick&&e.off(a,this.dblclick),gt(this.element.ownerDocument).off(y,this.onCropMove).off(C,this.onCropEnd),i.responsive&&gt(window).off($,this.onResize)}},pt={resize:function(){var t=this.options,i=this.$container,e=this.container,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var h=i.width()/e.width;if(1!==h||i.height()!==e.height){var o=void 0,s=void 0;t.restore&&(o=this.getCanvasData(),s=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(gt.each(o,function(t,i){o[t]=i*h})),this.setCropBoxData(gt.each(s,function(t,i){s[t]=i*h})))}}},dblclick:function(){this.disabled||this.options.dragMode===p||this.setDragMode(this.$dragBox.hasClass(n)?o:h)},wheel:function(t){var i=this,e=t.originalEvent||t,a=Number(this.options.wheelZoomRatio)||.1;if(!this.disabled&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var n=1;e.deltaY?n=0<e.deltaY?1:-1:e.wheelDelta?n=-e.wheelDelta/120:e.detail&&(n=0<e.detail?1:-1),this.zoom(-n*a,t)}},cropStart:function(t){if(!this.disabled){var i=this.options,e=this.pointers,a=t.originalEvent,n=void 0;a&&a.changedTouches?gt.each(a.changedTouches,function(t,i){e[i.identifier]=nt(i)}):e[a&&a.pointerId||0]=nt(a||t),n=1<Z(e).length&&i.zoomable&&i.zoomOnTouch?T:gt(t.target).data(l),I.test(n)&&(this.trigger(v,{originalEvent:a,action:n}).isDefaultPrevented()||(t.preventDefault(),this.action=n,this.cropping=!1,n===W&&(this.cropping=!0,this.$dragBox.addClass(r))))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers,a=t.originalEvent;t.preventDefault(),this.trigger(u,{originalEvent:a,action:i}).isDefaultPrevented()||(a&&a.changedTouches?gt.each(a.changedTouches,function(t,i){gt.extend(e[i.identifier],nt(i,!0))}):gt.extend(e[a&&a.pointerId||0],nt(a||t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers,a=t.originalEvent;a&&a.changedTouches?gt.each(a.changedTouches,function(t,i){delete e[i.identifier]}):delete e[a&&a.pointerId||0],i&&(t.preventDefault(),Z(e).length||(this.action=""),this.cropping&&(this.cropping=!1,this.$dragBox.toggleClass(r,this.cropped&&this.options.modal)),this.trigger(m,{originalEvent:a,action:i}))}}},vt={change:function(t){var i=this.options,e=this.pointers,a=this.container,n=this.canvas,h=this.cropBox,o=this.action,s=i.aspectRatio,r=h.left,d=h.top,c=h.width,l=h.height,p=r+c,g=d+l,m=0,u=0,f=a.width,v=a.height,w=!0,x=void 0;!s&&t.shiftKey&&(s=c&&l?c/l:1),this.limited&&(m=h.minLeft,u=h.minTop,f=m+Math.min(a.width,n.width,n.left+n.width),v=u+Math.min(a.height,n.height,n.top+n.height));var b,y,C,M=e[Z(e)[0]],$={x:M.endX-M.startX,y:M.endY-M.startY},B=function(t){switch(t){case H:p+$.x>f&&($.x=f-p);break;case Y:r+$.x<m&&($.x=m-r);break;case O:d+$.y<u&&($.y=u-d);break;case X:g+$.y>v&&($.y=v-g)}};switch(o){case k:r+=$.x,d+=$.y;break;case H:if(0<=$.x&&(f<=p||s&&(d<=u||v<=g))){w=!1;break}B(H),c+=$.x,s&&(l=c/s,d-=$.x/s/2),c<0&&(o=Y,c=0);break;case O:if($.y<=0&&(d<=u||s&&(r<=m||f<=p))){w=!1;break}B(O),l-=$.y,d+=$.y,s&&(c=l*s,r+=$.y*s/2),l<0&&(o=X,l=0);break;case Y:if($.x<=0&&(r<=m||s&&(d<=u||v<=g))){w=!1;break}B(Y),c-=$.x,r+=$.x,s&&(l=c/s,d+=$.x/s/2),c<0&&(o=H,c=0);break;case X:if(0<=$.y&&(v<=g||s&&(r<=m||f<=p))){w=!1;break}B(X),l+=$.y,s&&(c=l*s,r-=$.y*s/2),l<0&&(o=O,l=0);break;case E:if(s){if($.y<=0&&(d<=u||f<=p)){w=!1;break}B(O),l-=$.y,d+=$.y,c=l*s}else B(O),B(H),0<=$.x?p<f?c+=$.x:$.y<=0&&d<=u&&(w=!1):c+=$.x,$.y<=0?u<d&&(l-=$.y,d+=$.y):(l-=$.y,d+=$.y);c<0&&l<0?(o=z,c=l=0):c<0?(o=N,c=0):l<0&&(o=R,l=0);break;case N:if(s){if($.y<=0&&(d<=u||r<=m)){w=!1;break}B(O),l-=$.y,d+=$.y,c=l*s,r+=$.y*s}else B(O),B(Y),$.x<=0?m<r?(c-=$.x,r+=$.x):$.y<=0&&d<=u&&(w=!1):(c-=$.x,r+=$.x),$.y<=0?u<d&&(l-=$.y,d+=$.y):(l-=$.y,d+=$.y);c<0&&l<0?(o=R,c=l=0):c<0?(o=E,c=0):l<0&&(o=z,l=0);break;case z:if(s){if($.x<=0&&(r<=m||v<=g)){w=!1;break}B(Y),c-=$.x,r+=$.x,l=c/s}else B(X),B(Y),$.x<=0?m<r?(c-=$.x,r+=$.x):0<=$.y&&v<=g&&(w=!1):(c-=$.x,r+=$.x),0<=$.y?g<v&&(l+=$.y):l+=$.y;c<0&&l<0?(o=E,c=l=0):c<0?(o=R,c=0):l<0&&(o=N,l=0);break;case R:if(s){if(0<=$.x&&(f<=p||v<=g)){w=!1;break}B(H),l=(c+=$.x)/s}else B(X),B(H),0<=$.x?p<f?c+=$.x:0<=$.y&&v<=g&&(w=!1):c+=$.x,0<=$.y?g<v&&(l+=$.y):l+=$.y;c<0&&l<0?(o=N,c=l=0):c<0?(o=z,c=0):l<0&&(o=E,l=0);break;case D:this.move($.x,$.y),w=!1;break;case T:this.zoom((b=e,y=gt.extend({},b),C=[],gt.each(b,function(t,r){delete y[t],gt.each(y,function(t,i){var e=Math.abs(r.startX-i.startX),a=Math.abs(r.startY-i.startY),n=Math.abs(r.endX-i.endX),h=Math.abs(r.endY-i.endY),o=Math.sqrt(e*e+a*a),s=(Math.sqrt(n*n+h*h)-o)/o;C.push(s)})}),C.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),C[0]),t.originalEvent),w=!1;break;case W:if(!$.x||!$.y){w=!1;break}x=this.$cropper.offset(),r=M.startX-x.left,d=M.startY-x.top,c=h.minWidth,l=h.minHeight,0<$.x?o=0<$.y?R:E:$.x<0&&(r-=c,o=0<$.y?z:N),$.y<0&&(d-=l),this.cropped||(this.$cropBox.removeClass(L),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}w&&(h.width=c,h.height=l,h.left=r,h.top=d,this.action=o,this.renderCropBox()),gt.each(e,function(t,i){i.startX=i.endX,i.startY=i.endY})}},wt={crop:function(){this.ready&&!this.disabled&&(this.cropped||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&this.$dragBox.addClass(r),this.$cropBox.removeClass(L)),this.setCropBoxData(this.initialCropBox))},reset:function(){this.ready&&!this.disabled&&(this.image=gt.extend({},this.initialImage),this.canvas=gt.extend({},this.initialCanvas),this.cropBox=gt.extend({},this.initialCropBox),this.renderCanvas(),this.cropped&&this.renderCropBox())},clear:function(){this.cropped&&!this.disabled&&(gt.extend(this.cropBox,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),this.$dragBox.removeClass(r),this.$cropBox.addClass(L))},replace:function(t,i){!this.disabled&&t&&(this.isImg&&this.$element.attr("src",t),i?(this.url=t,this.$clone.attr("src",t),this.ready&&this.$preview.find("img").add(this.$clone2).attr("src",t)):(this.isImg&&(this.replaced=!0),this.options.data=null,this.load(t)))},enable:function(){this.ready&&(this.disabled=!1,this.$cropper.removeClass(i))},disable:function(){this.ready&&(this.disabled=!0,this.$cropper.addClass(i))},destroy:function(){var t=this.$element;this.loaded?(this.isImg&&this.replaced&&t.attr("src",this.originalUrl),this.unbuild(),t.removeClass(L)):this.isImg?t.off(x,this.start):this.$clone&&this.$clone.remove(),t.removeData(d)},move:function(t,i){var e=this.canvas,a=e.left,n=e.top;this.moveTo(Q(t)?t:a+Number(t),Q(i)?i:n+Number(i))},moveTo:function(t,i){var e=this.canvas,a=!1;Q(i)&&(i=t),t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(q(t)&&(e.left=t,a=!0),q(i)&&(e.top=i,a=!0),a&&this.renderCanvas(!0))},zoom:function(t,i){var e=this.canvas;t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,i)},zoomTo:function(t,i){var e,n,h,o,a=this.options,s=this.pointers,r=this.canvas,d=r.width,c=r.height,l=r.naturalWidth,p=r.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&a.zoomable){var g=l*t,m=p*t,u=void 0;if(i&&(u=i.originalEvent),this.trigger(P,{originalEvent:u,oldRatio:d/l,ratio:g/l}).isDefaultPrevented())return;if(u){var f=this.$cropper.offset(),v=s&&Z(s).length?(e=s,o=h=n=0,gt.each(e,function(t,i){var e=i.startX,a=i.startY;n+=e,h+=a,o+=1}),{pageX:n/=o,pageY:h/=o}):{pageX:i.pageX||u.pageX||0,pageY:i.pageY||u.pageY||0};r.left-=(g-d)*((v.pageX-f.left-r.left)/d),r.top-=(m-c)*((v.pageY-f.top-r.top)/c)}else r.left-=(g-d)/2,r.top-=(m-c)/2;r.width=g,r.height=m,this.renderCanvas(!0)}},rotate:function(t){this.rotateTo((this.image.rotate||0)+Number(t))},rotateTo:function(t){q(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.image.rotate=t%360,this.renderCanvas(!0,!0))},scaleX:function(t){var i=this.image.scaleY;this.scale(t,q(i)?i:1)},scaleY:function(t){var i=this.image.scaleX;this.scale(q(i)?i:1,t)},scale:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,e=this.image,a=!1;t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(q(t)&&(e.scaleX=t,a=!0),q(i)&&(e.scaleY=i,a=!0),a&&this.renderCanvas(!0,!0))},getData:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=this.options,i=this.image,a=this.canvas,n=this.cropBox,h=void 0;if(this.ready&&this.cropped){h={x:n.left-a.left,y:n.top-a.top,width:n.width,height:n.height};var o=i.width/i.naturalWidth;gt.each(h,function(t,i){i/=o,h[t]=e?Math.round(i):i})}else h={x:0,y:0,width:0,height:0};return t.rotatable&&(h.rotate=i.rotate||0),t.scalable&&(h.scaleX=i.scaleX||1,h.scaleY=i.scaleY||1),h},setData:function(t){var i=this.options,e=this.image,a=this.canvas,n={};if(gt.isFunction(t)&&(t=t.call(this.element)),this.ready&&!this.disabled&&gt.isPlainObject(t)){var h=!1;i.rotatable&&q(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,h=!0),i.scalable&&(q(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,h=!0),q(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,h=!0)),h&&this.renderCanvas(!0,!0);var o=e.width/e.naturalWidth;q(t.x)&&(n.left=t.x*o+a.left),q(t.y)&&(n.top=t.y*o+a.top),q(t.width)&&(n.width=t.width*o),q(t.height)&&(n.height=t.height*o),this.setCropBoxData(n)}},getContainerData:function(){return this.ready?gt.extend({},this.container):{}},getImageData:function(){return this.loaded?gt.extend({},this.image):{}},getCanvasData:function(){var e=this.canvas,a={};return this.ready&&gt.each(["left","top","width","height","naturalWidth","naturalHeight"],function(t,i){a[i]=e[i]}),a},setCanvasData:function(t){var i=this.canvas,e=i.aspectRatio;gt.isFunction(t)&&(t=t.call(this.$element)),this.ready&&!this.disabled&&gt.isPlainObject(t)&&(q(t.left)&&(i.left=t.left),q(t.top)&&(i.top=t.top),q(t.width)?(i.width=t.width,i.height=t.width/e):q(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0))},getCropBoxData:function(){var t=this.cropBox;return this.ready&&this.cropped?{left:t.left,top:t.top,width:t.width,height:t.height}:{}},setCropBoxData:function(t){var i=this.cropBox,e=this.options.aspectRatio,a=void 0,n=void 0;gt.isFunction(t)&&(t=t.call(this.$element)),this.ready&&this.cropped&&!this.disabled&&gt.isPlainObject(t)&&(q(t.left)&&(i.left=t.left),q(t.top)&&(i.top=t.top),q(t.width)&&t.width!==i.width&&(a=!0,i.width=t.width),q(t.height)&&t.height!==i.height&&(n=!0,i.height=t.height),e&&(a?i.height=i.width/e:n&&(i.width=i.height*e)),this.renderCropBox())},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,e,a,n,h,o,s,r,d,c,l,p,g,m,u,f,v,w,x,b,y,C,M,$,B,k,W,D,T,H,Y,X,O,E,N,R,z=this.canvas,L=(i=this.$clone[0],e=this.image,a=z,n=t,h=e.naturalWidth,o=e.naturalHeight,s=e.rotate,r=void 0===s?0:s,d=e.scaleX,c=void 0===d?1:d,l=e.scaleY,p=void 0===l?1:l,g=a.aspectRatio,m=a.naturalWidth,u=a.naturalHeight,f=n.fillColor,v=void 0===f?"transparent":f,w=n.imageSmoothingEnabled,x=void 0===w||w,b=n.imageSmoothingQuality,y=void 0===b?"low":b,C=n.maxWidth,M=void 0===C?1/0:C,$=n.maxHeight,B=void 0===$?1/0:$,k=n.minWidth,W=void 0===k?0:k,D=n.minHeight,T=void 0===D?0:D,H=ft({aspectRatio:g,width:M,height:B}),Y=ft({aspectRatio:g,width:W,height:T}),X=Math.min(H.width,Math.max(Y.width,m)),O=Math.min(H.height,Math.max(Y.height,u)),E=document.createElement("canvas"),N=E.getContext("2d"),R=[-h/2,-o/2,h,o],E.width=ut(X),E.height=ut(O),N.fillStyle=v,N.fillRect(0,0,X,O),N.save(),N.translate(X/2,O/2),N.rotate(r*Math.PI/180),N.scale(c,p),N.imageSmoothingEnabled=!!x,N.imageSmoothingQuality=y,N.drawImage.apply(N,[i].concat(mt(gt.map(R,function(t){return Math.floor(ut(t))})))),N.restore(),E);if(!this.cropped)return L;var P=this.getData(),I=P.x,U=P.y,A=P.width,F=P.height,j=A/F,S=ft({aspectRatio:j,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),q=ft({aspectRatio:j,width:t.minWidth||0,height:t.minHeight||0}),Q=ft({aspectRatio:j,width:t.width||A,height:t.height||F}),K=Q.width,Z=Q.height;K=Math.min(S.width,Math.max(q.width,K)),Z=Math.min(S.height,Math.max(q.height,Z));var V=document.createElement("canvas"),G=V.getContext("2d");V.width=ut(K),V.height=ut(Z),G.fillStyle=t.fillColor||"transparent",G.fillRect(0,0,K,Z);var J=t.imageSmoothingEnabled,_=void 0===J||J,tt=t.imageSmoothingQuality;G.imageSmoothingEnabled=_,tt&&(G.imageSmoothingQuality=tt);var it=L.width,et=L.height,at=I,nt=U,ht=void 0,ot=void 0,st=void 0,rt=void 0,dt=void 0,ct=void 0;at<=-A||it<at?dt=st=ht=at=0:at<=0?(st=-at,at=0,dt=ht=Math.min(it,A+at)):at<=it&&(st=0,dt=ht=Math.min(A,it-at)),ht<=0||nt<=-F||et<nt?ct=rt=ot=nt=0:nt<=0?(rt=-nt,nt=0,ct=ot=Math.min(et,F+nt)):nt<=et&&(rt=0,ct=ot=Math.min(F,et-nt));var lt=[at,nt,ht,ot];if(0<dt&&0<ct){var pt=K/A;lt.push(st*pt,rt*pt,dt*pt,ct*pt)}return G.drawImage.apply(G,[L].concat(mt(gt.map(lt,function(t){return Math.floor(ut(t))})))),V},setAspectRatio:function(t){var i=this.options;this.disabled||Q(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox()))},setDragMode:function(t){var i=this.options,e=void 0,a=void 0;this.loaded&&!this.disabled&&(e=t===h,a=i.movable&&t===o,t=e||a?t:p,this.$dragBox.data(l,t).toggleClass(n,e).toggleClass(c,a),i.cropBoxMovable||this.$face.data(l,t).toggleClass(n,e).toggleClass(c,a))}},xt=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!F.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.$element=gt(t),this.options=gt.extend({},j,gt.isPlainObject(i)&&i),this.completed=!1,this.cropped=!1,this.disabled=!1,this.isImg=!1,this.limited=!1,this.loaded=!1,this.ready=!1,this.replaced=!1,this.wheeling=!1,this.originalUrl="",this.canvas=null,this.cropBox=null,this.pointers={},this.init()}return S(e,[{key:"init",value:function(){var t=this.$element,i=void 0;if(t.is("img")){if(this.isImg=!0,i=t.attr("src")||"",!(this.originalUrl=i))return;i=t.prop("src")}else t.is("canvas")&&window.HTMLCanvasElement&&(i=t[0].toDataURL());this.load(i)}},{key:"trigger",value:function(t,i){var e=gt.Event(t,i);return this.$element.trigger(e),e}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.image={};var e=this.$element,a=this.options;if(a.checkOrientation&&window.ArrayBuffer)if(U.test(t))A.test(t)?this.read((n=t.replace(st,""),h=atob(n),o=new ArrayBuffer(h.length),s=new Uint8Array(o),gt.each(s,function(t){s[t]=h.charCodeAt(t)}),o)):this.clone();else{var n,h,o,s,r=new XMLHttpRequest;r.onerror=function(){i.clone()},r.onload=function(){i.read(r.response)},a.checkCrossOrigin&&_(t)&&!e.prop("crossOrigin")&&(t=tt(t)),r.open("get",t),r.responseType="arraybuffer",r.withCredentials="use-credentials"===e.prop("crossOrigin"),r.send()}else this.clone()}}},{key:"read",value:function(t){var i,e,a,n=this.options,h=this.image,o=rt(t),s=0,r=1,d=1;if(1<o){this.url=(i="image/jpeg",e=new Uint8Array(t),a="",gt.each(e,function(t,i){a+=ot(i)}),"data:"+i+";base64,"+btoa(a));var c=function(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}(o);s=c.rotate,r=c.scaleX,d=c.scaleY}n.rotatable&&(h.rotate=s),n.scalable&&(h.scaleX=r,h.scaleY=d),this.clone()}},{key:"clone",value:function(){var t=this.$element,i=this.options,e=this.url,a="",n=void 0;i.checkCrossOrigin&&_(e)&&((a=t.prop("crossOrigin"))?n=e:(a="anonymous",n=tt(e))),this.crossOrigin=a,this.crossOriginUrl=n;var h=document.createElement("img");a&&(h.crossOrigin=a),h.src=n||e;var o=gt(h);this.$clone=o,this.isImg?this.element.complete?this.start():t.one(x,gt.proxy(this.start,this)):o.one(x,gt.proxy(this.start,this)).one(w,gt.proxy(this.stop,this)).addClass(s).insertAfter(t)}},{key:"start",value:function(){var e=this,t=this.$clone,i=this.$element;this.isImg||(t.off(w,this.stop),i=t),function(t,i){if(!t.naturalWidth||at){var e=document.createElement("img");e.onload=function(){i(e.width,e.height)},e.src=t.src}else i(t.naturalWidth,t.naturalHeight)}(i[0],function(t,i){gt.extend(e.image,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.loaded=!0,e.build()})}},{key:"stop",value:function(){this.$clone.remove(),this.$clone=null}},{key:"build",value:function(){var t=this;if(this.loaded){this.ready&&this.unbuild();var i=this.$element,e=this.options,a=this.$clone,n=gt('<div class="cropper-container"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>'),h=n.find("."+d+"-crop-box"),o=h.find("."+d+"-face");this.$container=i.parent(),this.$cropper=n,this.$canvas=n.find("."+d+"-canvas").append(a),this.$dragBox=n.find("."+d+"-drag-box"),this.$cropBox=h,this.$viewBox=n.find("."+d+"-view-box"),this.$face=o,i.addClass(L).after(n),this.isImg||a.removeClass(s),this.initPreview(),this.bind(),e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,this.cropped=e.autoCrop,e.autoCrop?e.modal&&this.$dragBox.addClass(r):h.addClass(L),e.guides||h.find("."+d+"-dashed").addClass(L),e.center||h.find("."+d+"-center").addClass(L),e.cropBoxMovable&&o.addClass(c).data(l,k),e.highlight||o.addClass("cropper-invisible"),e.background&&n.addClass(d+"-bg"),e.cropBoxResizable||h.find("."+d+"-line,."+d+"-point").addClass(L),this.setDragMode(e.dragMode),this.render(),this.ready=!0,this.setData(e.data),this.completing=setTimeout(function(){gt.isFunction(e.ready)&&i.one(M,e.ready),t.trigger(M),t.trigger(g,t.getData()),t.completed=!0},0)}}},{key:"unbuild",value:function(){this.ready&&(this.completed||clearTimeout(this.completing),this.ready=!1,this.completed=!1,this.initialImage=null,this.initialCanvas=null,this.initialCropBox=null,this.container=null,this.canvas=null,this.cropBox=null,this.unbind(),this.resetPreview(),this.$preview=null,this.$viewBox=null,this.$cropBox=null,this.$dragBox=null,this.$canvas=null,this.$container=null,this.$cropper.remove(),this.$cropper=null)}}],[{key:"setDefaults",value:function(t){gt.extend(j,gt.isPlainObject(t)&&t)}}]),e}();if(gt.extend&&gt.extend(xt.prototype,dt,ct,lt,pt,vt,wt),gt.fn){var bt=gt.fn.cropper;gt.fn.cropper=function(o){for(var t=arguments.length,s=Array(1<t?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];var r=void 0;return this.each(function(t,i){var e=gt(i),a=e.data(d);if(!a){if(/destroy/.test(o))return;var n=gt.extend({},e.data(),gt.isPlainObject(o)&&o);a=new xt(i,n),e.data(d,a)}if("string"==typeof o){var h=a[o];gt.isFunction(h)&&(r=h.apply(a,s))}}),Q(r)?this:r},gt.fn.cropper.Constructor=xt,gt.fn.cropper.setDefaults=xt.setDefaults,gt.fn.cropper.noConflict=function(){return gt.fn.cropper=bt,this}}});