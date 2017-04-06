/*
 AngularJS v1.5.0
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,d,B){'use strict';function l(){return["$animate",function(v){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(n,r,a,b,m){var k=r[0],f,p=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var d=function(a){f=a?w(a)?a:a.split(/[\s,]+/):null;b.reRender()};a?(d(n.$eval(a)),n.$watchCollection(a,d)):d(p);var e,q;b.register(k,q={test:function(a){var g=f;a=g?w(g)?0<=g.indexOf(a):g.hasOwnProperty(a):void 0;return a},attach:function(){e||m(n,function(a){v.enter(a,
null,r);e=a;var g=e.$$attachId=b.getAttachId();e.on("$destroy",function(){e&&e.$$attachId===g&&(b.deregister(k),q.detach())})})},detach:function(){if(e){var a=e;e=null;v.leave(a)}}})}}}]}var w=d.isArray,x=d.forEach,y=d.isString,z=d.element;d.module("ngMessages",[]).directive("ngMessages",["$animate",function(d){function n(a,b){return y(b)&&0===b.length||r(a.$eval(b))}function r(a){return y(a)?a.length:!!a}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(a,
b,m){function k(a,b){for(var c=b,f=[];c&&c!==a;){var h=c.$$ngMessageNode;if(h&&h.length)return e[h];c.childNodes.length&&-1==f.indexOf(c)?(f.push(c),c=c.childNodes[c.childNodes.length-1]):c=c.previousSibling||c.parentNode}}var f=this,p=0,l=0;this.getAttachId=function(){return l++};var e=this.messages={},q,s;this.render=function(g){g=g||{};q=!1;s=g;for(var e=n(b,m.ngMessagesMultiple)||n(b,m.multiple),c=[],k={},h=f.head,p=!1,l=0;null!=h;){l++;var t=h.message,u=!1;p||x(g,function(a,c){!u&&r(a)&&t.test(c)&&
!k[c]&&(u=k[c]=!0,t.attach())});u?p=!e:c.push(t);h=h.next}x(c,function(a){a.detach()});c.length!==l?d.setClass(a,"ng-active","ng-inactive"):d.setClass(a,"ng-inactive","ng-active")};b.$watchCollection(m.ngMessages||m["for"],f.render);this.reRender=function(){q||(q=!0,b.$evalAsync(function(){q&&s&&f.render(s)}))};this.register=function(g,b){var c=p.toString();e[c]={message:b};var d=a[0],h=e[c];f.head?(d=k(d,g))?(h.next=d.next,d.next=h):(h.next=f.head,f.head=h):f.head=h;g.$$ngMessageNode=c;p++;f.reRender()};
this.deregister=function(b){var d=b.$$ngMessageNode;delete b.$$ngMessageNode;var c=e[d];(b=k(a[0],b))?b.next=c.next:f.head=c.next;delete e[d];f.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(d,n,l){return{restrict:"AE",require:"^^ngMessages",link:function(a,b,m){var k=m.ngMessagesInclude||m.src;d(k).then(function(d){l(d)(a,function(a){b.after(a);a=z(n[0].createComment(" ngMessagesInclude: "+k+" "));b.after(a);b.remove()})})}}}]).directive("ngMessage",
l()).directive("ngMessageExp",l())})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map