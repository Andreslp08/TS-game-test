(this["webpackJsonpgame-test"]=this["webpackJsonpgame-test"]||[]).push([[0],{13:function(t,i,e){},14:function(t,i,e){},16:function(t,i,e){"use strict";e.r(i);var s=e(3),n=e.n(s),o=e(6),a=e.n(o),c=(e(13),e(14),e(0)),h=e(1),r=function(){function t(){Object(c.a)(this,t),this.maxFps=10,this.fps=0,this.previousFrame=0}return Object(h.a)(t,null,[{key:"getInstance",value:function(){return t.instance?t.instance:new t}}]),t}();r.instance=void 0;var y=function t(){Object(c.a)(this,t)};y.deltaTime=0;var l=function(){function t(i,e){Object(c.a)(this,t),this.x=0,this.y=0,this.x=i,this.y=e}return Object(h.a)(t,[{key:"equalTo",value:function(t){return t.x===this.x&&t.y===this.y}},{key:"addVector",value:function(t){this.x=this.x+t.x,this.y=this.y+t.y}},{key:"substractVector",value:function(t){this.x=this.x-t.x,this.y=this.y-t.y}},{key:"multiplyVector",value:function(t){this.x=this.x*t.x,this.y=this.y*t.y}},{key:"multiplyByEscalar",value:function(t){this.x=this.x*t,this.y=this.y*t}}],[{key:"add",value:function(i,e){return new t(i.x+e.x,i.y+e.y)}},{key:"substract",value:function(i,e){return new t(i.x-e.x,i.y-e.y)}}]),t}(),u=e(4),d=e(8),v=e(7),k=function(t){Object(d.a)(e,t);var i=Object(v.a)(e);function e(t){var s;return Object(c.a)(this,e),(s=i.call(this)).ctx=void 0,s.position=void 0,s.velocity=void 0,s.aceleration=void 0,s.jumpVelocity=void 0,s.size=void 0,s.gravity=9.8,s.mass=10,s.mousePosition=void 0,s.canvas=void 0,s.horizontalDirection=0,s.verticalDirection=0,s.jumping=!1,s.jumpAceleration=2,s.pressed=!1,s.keys={},s.grades=0,s.rotationVelocity=1e-4,s.usePower=!0,s.position=t,s.velocity=new l(1,1),s.aceleration=new l(0,0),s.jumpVelocity=new l(0,3),s.size=new l(80,80),s.mousePosition=new l(0,0),window.onmousemove=function(t){s.mousePosition.x=t.clientX,s.mousePosition.y=t.clientY},s.keyManager=s.keyManager.bind(Object(u.a)(s)),document.addEventListener("keydown",s.keyManager),document.addEventListener("keyup",s.keyManager),s}return Object(h.a)(e,[{key:"keyManager",value:function(t){var i=t.key;"keydown"==t.type?(this.keys[i]=!0,this.keys.d&&(this.horizontalDirection=1),this.keys.a&&(this.horizontalDirection=-1),this.keys.a&&this.keys.d&&(this.horizontalDirection=0),this.keys.s&&(this.verticalDirection=1),this.keys.w&&(this.verticalDirection=-1),this.keys.w&&this.keys.s&&(this.verticalDirection=0),this.keys[" "]&&(this.jumping=!0)):(this.keys[i]=!1,0==this.keys.d&&(this.horizontalDirection=0),0==this.keys.a&&(this.horizontalDirection=0),0==this.keys.a&&this.keys.d&&(this.horizontalDirection=1),0==this.keys.d&&this.keys.a&&(this.horizontalDirection=-1),0==this.keys.s&&(this.verticalDirection=0),0==this.keys.w&&(this.verticalDirection=0),0==this.keys.w&&this.keys.s&&(this.verticalDirection=1),0==this.keys.s&&this.keys.w&&(this.verticalDirection=-1),0==this.keys[" "]&&(this.jumping=!1))}},{key:"draw",value:function(t,i){this.ctx=t.getContext("2d"),this.canvas=t,this.ctx.clearRect(0,0,t.width,t.height),this.ctx.fillStyle="black",this.ctx.fillStyle="red",this.ctx.save(),this.ctx.beginPath(),this.ctx.fillStyle="red",this.ctx.translate(this.position.x+this.size.x,this.position.y+this.size.y),this.ctx.rotate(this.rotationVelocity),this.ctx.beginPath(),this.ctx.arc(0,0,this.size.x,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.fillStyle="black",this.ctx.fillRect(-80,-80,this.size.x,this.size.y),this.ctx.restore()}},{key:"update",value:function(t){1==this.horizontalDirection&&this.position.addVector(new l(this.velocity.x*t,0)),-1==this.horizontalDirection&&this.position.addVector(new l(-this.velocity.x*t,0)),1==this.verticalDirection&&this.position.addVector(new l(0,this.velocity.y*t)),-1==this.verticalDirection&&this.position.addVector(new l(0,-this.velocity.y*t)),this.jumping&&(this.jumpVelocity.y-=2,this.position.y-=this.jumpVelocity.y)}}]),e}((function t(){Object(c.a)(this,t)})),m=function(){function t(i){Object(c.a)(this,t),this.frameManager=void 0,this.player=void 0,this.canvas=void 0,this.canvas=i,this.frameManager=r.getInstance(),this.GameLoop=this.GameLoop.bind(this),this.player=new k(new l(0,0))}return Object(h.a)(t,[{key:"GameLoop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;y.deltaTime=t-this.frameManager.previousFrame,this.player.update(y.deltaTime),this.frameManager.previousFrame=t,this.player.draw(this.canvas,y.deltaTime),window.requestAnimationFrame(this.GameLoop)}}]),t}(),x=e(2);var p=function(){window.onload=function(){var t=document.getElementById("game-canvas"),i=new m(t);window.requestAnimationFrame(i.GameLoop)};var t="".concat(1920,"px"),i="".concat(1080,"px");return Object(x.jsx)("div",{children:Object(x.jsx)("canvas",{className:"canvas",width:t,height:i,id:"game-canvas"})})},f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(i){var e=i.getCLS,s=i.getFID,n=i.getFCP,o=i.getLCP,a=i.getTTFB;e(t),s(t),n(t),o(t),a(t)}))};a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.8fa0aac2.chunk.js.map