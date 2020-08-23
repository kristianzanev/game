(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],h=0,u=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var s=i[a];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},a={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d4bea422"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],i={about:1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"b9a4f939"}[e]+".css",o=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===n||h===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],h=l.getAttribute("data-href");if(h===n||h===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[e],d.parentNode.removeChild(d),i(r)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=r);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,c.nc&&h.setAttribute("nonce",c.nc),h.src=s(e);var u=new Error;l=function(t){h.onerror=h.onload=null,clearTimeout(d);var i=o[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,i[1](u)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=h;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},2221:function(e,t,i){"use strict";var n=i("7b46"),a=i.n(n);a.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:""}},[e._v("Game")]),e._v(" | ")],1),i("router-view")],1)},o=[],r=(i("5c0b"),i("2877")),s={},c=Object(r["a"])(s,a,o,!1,null,null,null),l=c.exports,h=(i("d3b7"),i("8c4f")),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game"},[i("div",{attrs:{id:"stage"}},[i("HealthBar",{attrs:{healthStatus:this.healthBar.player1}}),i("HealthBar",{attrs:{position:"right",healthStatus:this.healthBar.player2}})],1)])},d=[],m=(i("b0c0"),i("7db0"),i("159b"),i("96cf"),i("1da1")),f=i("d4ec"),p=i("bee2"),v=i("99de"),y=i("7e84"),g=i("262e"),w=(i("caad"),i("b680"),i("ac1f"),i("2532"),i("1276"),i("a5cf")),b=i("4476"),k={speed:7,jumpLength:200,spawnPosition:-200,moveMultiplier:50,speedInCollision:4},_=function(){function e(t,i,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k.speed;Object(f["a"])(this,e),this.Object3D=t,this.mixer=i,this.THREELoopOnce=n,this.speed=a,this.defaultSpeed=k.speed,this.jumpLength=k.jumpLength,this._activeAction=null,this.actions={},this.actionNames=null,this.key={left:{isDown:!1,code:"KeyA"},jump:{isDown:!1,code:"KeyW"},right:{isDown:!1,code:"KeyD"},mmaKick:{isDown:!1,code:"KeyG"}},this.isSwitchedBefore=!1,this.isSwitchOn=!1,this.default={rotation:{y:1.5,opposite:{y:4.5}},position:{x:k.spawnPosition}},this.timeline=new w["c"],this.moveTimeline=new w["c"],this._playingAnim={},this._health=100,this.init()}return Object(p["a"])(e,[{key:"init",value:function(){b["a"].ticker.lagSmoothing(0),this.setActionNames(),this.setPosition(),this.mixActions(),this.fadeToAction(),this.setAnimations(),this.handleKeyboardEvents()}},{key:"setActionNames",value:function(){this.actionNames=this.Object3D.animations.reduce((function(e,t){if(t.name.includes("Armature")){var i=t.name.split("|")[1];return t.name=i,e[i]=i,e}}),{})}},{key:"setPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.default.position.x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.default.rotation.y;this.Object3D.position.x=e,this.Object3D.rotation.y=t}},{key:"mixActions",value:function(){var e=this;this.Object3D.animations.forEach((function(t){e.actions[t.name]=e.mixer.clipAction(t)}))}},{key:"fadeToAction",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,i=void 0===t?"idle":t,n=e.duration,a=void 0===n?.1:n,o=e.inReverse,r=void 0!==o&&o,s=e.speed,c=void 0===s?1:s,l=e.isLoopOnce,h=void 0!==l&&l,u=e.isfreezeLastFrame,d=void 0===u||u;if(this._activeAction){var m;m=r?-1*c:1*c,this._activeAction.clampWhenFinished=d;var f=this._activeAction;this._activeAction=this.actions[i],f!==this._activeAction&&f.fadeOut(a),this._activeAction.reset(),h&&this._activeAction.setLoop(this.THREELoopOnce),this._activeAction.setDuration(),this._activeAction.setEffectiveTimeScale(m),this._activeAction.setEffectiveWeight(1),this._activeAction.fadeIn(a),this._activeAction.play()}else this._activeAction=this.actions["idle"].play();this._playingAnim={name:this._activeAction.getClip().name,inReverse:r,activeAction:this._activeAction,startTime:this._currentTime}}},{key:"setAnimations",value:function(){var e=this;this.moveLeft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.forcePlay;(e._shouldPlayAnim(e.actionNames.running,!0)||i)&&(e.isSwitchOn?e.fadeToAction({name:"running",speed:e.speed/5}):e.fadeToAction({name:"running",inReverse:!0,speed:e.speed/5}))},this.moveRight=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.forcePlay;(e._shouldPlayAnim(e.actionNames.running)||i)&&(e.isSwitchOn?e.fadeToAction({name:"running",inReverse:!0,speed:e.speed/5}):e.fadeToAction({name:"running",speed:e.speed/5}))},this.mmaKick=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.forcePlay;(e._shouldPlayAnim(e.actionNames.mmaKick)||i)&&(e.blockMovement=!0,e.fadeToAction({name:"mmaKick",speed:2,isLoopOnce:!0}),e.mixer.addEventListener("finished",(function(t){var i=t.action.getClip();i===e._activeAction.getClip()&&(e.blockMovement=!1,e._lastHit=null,e._properAnimFallback()),e.mixer.removeEventListener("finished")})))},this.jump=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.forcePlay;if((e._shouldPlayAnim(e.actionNames.jumping)||i)&&!e.isAlreadyJumping){e.isAlreadyJumping=!0;var n=e.speed/3,a=e.actions.jumping.getClip().duration/n,o=1*(a/2).toFixed(4);e.fadeToAction({name:"jumping",speed:n,isLoopOnce:!0}),e.timeline.to(e.Object3D.position,o,{y:e.jumpLength,ease:"Power1.easeOut"}).to(e.Object3D.position,o,{y:0,ease:"Power1.easeIn",onComplete:function(){e.isAlreadyJumping=!1,e._properAnimFallback()}})}},this.idle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.forcePlay;(i||e._shouldPlayAnim(e.actionNames.idle))&&e.fadeToAction({name:"idle"})}}},{key:"handleKeyboardEvents",value:function(){var e=this,t=function(t){if(t.code===e.key.right.code){if(e.key.right.isDown=!0,e.key.left.isDown)return void e.idle();e.moveRight()}if(t.code===e.key.left.code){if(e.key.left.isDown=!0,e.key.right.isDown)return void e.idle();e.moveLeft()}t.code===e.key.jump.code&&(e.key.jump.isDown=!0,e.jump()),t.code===e.key.mmaKick.code&&(e.key.mmaKick.isDown=!0,e.mmaKick())},i=function(t){t.code===e.key.right.code&&(e.key.right.isDown=!1,e.key.left.isDown?e.moveLeft():e.key.left.isDown||e.idle()),t.code===e.key.left.code&&(e.key.left.isDown=!1,e.key.right.isDown?e.moveRight():e.key.right.isDown||e.idle()),t.code===e.key.jump.code&&(e.key.jump.isDown=!1),t.code===e.key.mmaKick.code&&(e.key.mmaKick.isDown=!1)};window.addEventListener("keyup",i),window.addEventListener("keydown",t)}},{key:"_shouldPlayAnim",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.isSwitchOn&&this.actionNames.running===e?this._playingAnim.inReverse!==t&&e===this._playingAnim.name:this._playingAnim.inReverse===t&&e===this._playingAnim.name,n=this._playingAnim.name===this.actionNames.idle||this._playingAnim.name===this.actionNames.running,a=!n&&!this._playingAnim.activeAction.isRunning();return!i&&n||a}},{key:"_handleCollisionMovement",value:function(e){var t=this.key.left.isDown,i=this.key.right.isDown,n=!this.key.left.isDown&&!this.key.right.isDown,a=this.position.x<=e.position.x,o=this.position.x>e.position.x,r=this._moveDistancePerFrame()/k.speedInCollision;a?i?e.position.x+=r:t?this._handleMovement():n&&(e.position.x+=r):o&&(t?e.position.x-=r:i?this._handleMovement():n&&(e.position.x-=r))}},{key:"handleRotationSwitch",value:function(e){this.position.x>e?this.switchRight():this.position.x<e&&this.switchLeft()}},{key:"switchRight",value:function(){var e=this.default.rotation.y===this.Object3D.rotation.y;if(e){this.isSwitchOn=!0;var t=this.default.rotation.opposite.y;this.key.right.isDown&&this.fadeToAction({name:"running",inReverse:!0,speed:this.speed/5,duration:.05}),w["d"].to(this.Object3D.rotation,.3,{y:t,ease:"Power1.easeOut"})}}},{key:"switchLeft",value:function(){var e=this.default.rotation.y===this.Object3D.rotation.y;if(!e&&this.isSwitchOn){this.isSwitchOn=!1;var t=this.default.rotation.y;this.key.left.isDown&&this.fadeToAction({name:"running",inReverse:!0,speed:this.speed/5,duration:.05}),w["d"].to(this.Object3D.rotation,.3,{y:t,ease:"Power1.easeOut"})}}},{key:"update",value:function(e,t){this._currentTime=e,t?this._handleCollisionMovement(t):this._handleMovement(),this._prevTime=e}},{key:"_handleMovement",value:function(){if(!(this.key.left.isDown&&this.key.right.isDown||this.blockMovement)){if(this.key.left.isDown){if(this.key.right.isDown)return;this.Object3D.position.x-=this._moveDistancePerFrame()}if(this.key.right.isDown){if(this.key.left.isDown)return;this.Object3D.position.x+=this._moveDistancePerFrame()}}}},{key:"_properAnimFallback",value:function(){this.key.left.isDown&&this.key.right.isDown?this.idle({forcePlay:!0}):this.key.right.isDown?this.moveRight({forcePlay:!0}):this.key.left.isDown?this.moveLeft({forcePlay:!0}):this.idle({forcePlay:!0})}},{key:"_moveDistancePerFrame",value:function(){var e=this._prevTime?this._currentTime-this._prevTime:0;return e*(this.speed*k.moveMultiplier)}},{key:"removeHealth",value:function(e){return this._health=this._health-e<=0?this._health=0:this._health-e,0===this._health&&(this._health=100),this._health}},{key:"lastHit",set:function(e){this._lastHit=e},get:function(){return this._lastHit}},{key:"health",get:function(){return this._health}},{key:"name",get:function(){return this.Object3D.name}},{key:"activeActionName",get:function(){return this._activeAction.getClip().name}},{key:"playingAnim",get:function(){return this._playingAnim}},{key:"currentSpeed",get:function(){return this.speed},set:function(e){this.speed=e}},{key:"Object3d",get:function(){return this.Object3D}},{key:"allActions",get:function(){return this.actions}},{key:"position",get:function(){return this.Object3D.position},set:function(e){this.Object3D.position=e}}]),e}(),A=function(e){function t(e,i,n){var a;return Object(f["a"])(this,t),a=Object(v["a"])(this,Object(y["a"])(t).call(this,e,i,n)),a.key={left:{isDown:!1,isAlreadyPressed:!1,code:"KeyJ"},jump:{isDown:!1,isAlreadyPressed:!1,code:"KeyI"},right:{isDown:!1,isAlreadyPressed:!1,code:"KeyL"},mmaKick:{isDown:!1,isAlreadyPressed:!1,code:"KeyN"}},a.setPosition(200),a}return Object(g["a"])(t,e),t}(_),x=(i("4de4"),i("d81d"),{hitGuide:"hitBox"}),E=function(){function e(t){var i=t.THREEVector3,n=t.THREEVector4,a=t.THREEMatrix4,o=t.THREEBox3;Object(f["a"])(this,e),this.THREEVector3=i,this.THREEVector4=n,this.THREEMatrix4=a,this.THREEBox3=o,this._elements=[]}return Object(p["a"])(e,[{key:"addElements",value:function(e){var t=this;this._elements=e.map((function(e){return t._collisionElementFactory(e)}))}},{key:"getCollidedPlayers",value:function(){var e=this;this._updateAllBBoxes();for(var t={},i=0;i<this._elements.length;i++){for(var n=this._elements[i],a=function(i){var a=e._elements[i];if(n!==a){var o=n.boxes3.some((function(e){return a.boxes3.some((function(t){return e.intersectsBox(t)}))}));if(o){var r=e._getCollidedHitBoxes(n.boxes3,a.boxes3,n.player.Object3d.name,a.player.Object3d.name);return t={player1:n.player,player2:a.player,collidedHitBoxes:r},"break"}}},o=0;o<this._elements.length;o++){var r=a(o);if("break"===r)break}if(t)break}return t}},{key:"_collisionElementFactory",value:function(e){var t=this,i=e.Object3d.children.filter((function(e){return e.name.includes(x.hitGuide)})),n=i.map((function(e){var i=new t.THREEBox3;return i.name=e.name,i}));return{player:e,meshGuides:i,boxes3:n}}},{key:"_getCollidedHitBoxes",value:function(e,t,i,n){var a={};a[i]={};for(var o=0;o<e.length;o++){var r=e[o],s={};s[n]={};for(var c=0;c<t.length;c++){var l=t[c];r.intersectsBox(l)&&(a[i][r.name]=s,a[i][r.name][n][l.name]=l.name)}}return a}},{key:"_updateAllBBoxes",value:function(){for(var e=0;e<this._elements.length;e++)for(var t=this._elements[e],i=0;i<t.meshGuides.length;i++){var n=t.meshGuides[i],a=t.boxes3[i];this._updateBoundingBox(n,a)}}},{key:"_updateBoundingBox",value:function(e,t){var i,n,a,o,r=new this.THREEVector3,s=new this.THREEVector3,c=new this.THREEVector3,l=new this.THREEVector4,h=new this.THREEVector4,u=new this.THREEMatrix4,d=e.skeleton,m=d.boneMatrices,f=e.geometry,p=f.index,v=f.attributes.position,y=f.attributes.skinIndex,g=f.attributes.skinWeight,w=e.bindMatrix,b=e.bindMatrixInverse;if(t.makeEmpty(),null!==p)for(i=0;i<p.count;i++){for(r.fromBufferAttribute(v,p[i]),l.fromBufferAttribute(y,p[i]),h.fromBufferAttribute(g,p[i]),r.applyMatrix4(w),c.set(0,0,0),n=0;n<4;n++)a=l.getComponent(n),o=h.getComponent(n),u.fromArray(m,16*a),s.copy(r).applyMatrix4(u).multiplyScalar(o),c.add(s);c.applyMatrix4(b),t.expandByPoint(c)}else for(i=0;i<v.count;i++){for(r.fromBufferAttribute(v,i),l.fromBufferAttribute(y,i),h.fromBufferAttribute(g,i),r.applyMatrix4(w),c.set(0,0,0),n=0;n<4;n++)a=l.getComponent(n),o=h.getComponent(n),u.fromArray(m,16*a),s.copy(r).applyMatrix4(u).multiplyScalar(o),c.add(s);c.applyMatrix4(b),t.expandByPoint(c)}t.applyMatrix4(e.matrixWorld)}},{key:"elements",get:function(){return this._elements}}]),e}(),j=(i("25f0"),i("53ca")),O=function(){function e(){Object(f["a"])(this,e),this.events={}}return Object(p["a"])(e,[{key:"dispatch",value:function(e,t){if(void 0===this.events[e]){var i={error:"This event: ".concat(e," does not exist")};throw i}this.events[e].listeners.forEach((function(e){e(t)}))}},{key:"addListener",value:function(e,t){if("function"!==typeof t){var i={error:"The listener callback must be a function, the given type is ".concat(Object(j["a"])(t))};throw i}if("string"!==typeof e){var n={error:"The event name must be a string, the given type is ".concat(Object(j["a"])(e))};throw n}void 0===this.events[e]&&(this.events[e]={listeners:[]});var a=this.events[e].listeners.find((function(e){return e.toString()===t.toString()}));a||this.events[e].listeners.push(t)}},{key:"removeListener",value:function(e,t){if(void 0===this.events[e]){var i={error:"This event: ".concat(e," does not exist")};throw i}this.events[e].listeners=this.events[e].listeners.filter((function(e){return e.toString()!==t.toString()}))}}]),e}(),D=i("cffa"),H=window.THREE=i("5a89");i("5b9c");var P=i("b3d9");window.Zlib=P.Zlib;//! https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_blending.html
var T=window.location.href,S=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(v["a"])(this,Object(y["a"])(t).call(this)),e.objScene=[],e.modelPath={player:T+"/animations/multiple_hiboxes_convexHull2.fbx"},e.actions={},e.mixer=null,e.player1=null,e.box=null,e.manager=new H.LoadingManager,e.collisionEngine=new E({THREEVector3:H.Vector3,THREEVector4:H.Vector4,THREEMatrix4:H.Matrix4,THREEBox3:H.Box3}),e}return Object(g["a"])(t,e),Object(p["a"])(t,[{key:"createScene",value:function(e){var t=this;this.scene=new H.Scene,this.camera=new H.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=550,this.camera.position.y=150,this.renderer=new H.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor("#e5e5e5"),this.renderer.setSize(window.innerWidth,window.innerHeight),e.appendChild(this.renderer.domElement),window.addEventListener("resize",(function(){t.renderer.setSize(window.innerWidth,window.innerHeight),t.camera.aspect=window.innerWidth/window.innerHeight,t.camera.updateProjectionMatrix()}));var i=new H.PointLight(16777215,1,1500);i.position.set(0,100,150),this.scene.add(i),this.init()}},{key:"init",value:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadAssets(),e.next=3,this.handleLoadingProgress();case 3:this.collisionEngine.addElements([this.player1,this.player2]),this.startAnimation();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handleLoadingProgress",value:function(){var e=this;return new Promise((function(t,i){e.manager.onStart=function(e,t,i){},e.manager.onLoad=function(){t("Loading complete!")},e.manager.onProgress=function(e,t,i){},e.manager.onError=function(e){i(e)},window.loaderManager=e.manager}))}},{key:"loadAssets",value:function(){var e=this,t=new H.FBXLoader(this.manager);t.load(this.modelPath.player,(function(t){t.name="player1";var i=new H.AnimationMixer(t);e.player1=new _(t,i,H.LoopOnce),e.player1.Object3d.children.find((function(e){return"Beta_Surface"===e.name})).material.shininess=10,e.scene.add(t),e.objScene.push({Object3D:t,mixer:i,clock:new H.Clock})}),void 0,(function(e){throw e})),t.load(this.modelPath.player,(function(t){t.name="player2";var i=new H.AnimationMixer(t);e.player2=new A(t,i,H.LoopOnce),e.player2.Object3d.children.forEach((function(e){"Beta_Surface"===e.name&&"SkinnedMesh"===e.type&&(e.material.color={r:.2,g:.2,b:.7},e.material.shininess=10)})),e.scene.add(t),e.objScene.push({Object3D:t,mixer:i,clock:new H.Clock})}),void 0,(function(e){throw e}))}},{key:"startAnimation",value:function(){var e=this;this.collisionEngine.elements.forEach((function(t){t.boxes3.forEach((function(t){return e.scene.add(new H.Box3Helper(t,65280))}))}));var t=function(t){e.objScene.forEach((function(e){var t=e.mixer,i=e.clock;return t.update(i.getDelta())}));var i=e.collisionEngine.getCollidedPlayers(),n=i.player1,a=i.player2,o=i.collidedHitBoxes;e.player1.update(t,a),e.player2.update(t,n),o&&e._handleHealth({player1:n,player2:a,collidedHitBoxes:o}),e.player1.handleRotationSwitch(e.player2.position.x),e.player2.handleRotationSwitch(e.player1.position.x),e.renderer.render(e.scene,e.camera)};window.ticker=D["a"].ticker,D["a"].ticker.add(t)}},{key:"_handleHealth",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.player1,n=t.player2,a=t.collidedHitBoxes;if(a){var o="mmaKick"===i.activeActionName,r="mmaKick"===n.activeActionName,s=function(){var t=i.lastHit&&i.lastHit.actionName===i.activeActionName;t||(n.removeHealth(20),e.dispatch("hit",{name:n.name,health:n.health}),i.lastHit={actionName:i.activeActionName})},c=function(){var t=n.lastHit&&n.lastHit.actionName===n.activeActionName;t||(i.removeHealth(20),e.dispatch("hit",{name:i.name,health:i.health}),n.lastHit={actionName:n.activeActionName})};o&&r?i.playingAnim.startTime<n.playingAnim.startTime?s():c():o?s():r&&c()}}}]),t}(O),B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bar-wrap",class:e.position.toLowerCase(),style:e.cssBar},[i("span",[e._v(" "+e._s(e.healthStatus.name)+" - "+e._s(e.healthStatus.health)+" hp")]),i("div",{staticClass:"health-bar",style:e.setSize})])},R=[],L=(i("99af"),{name:"HealthBar",props:{healthStatus:{type:Object,default:function(){return{health:100,name:"noName"}}},position:{type:String,default:"left"}},computed:{setSize:function(){return"\n      width: calc(".concat(this.healthStatus.health,"% - (2 * ").concat(this.cssBar.padding,"))\n      height: calc(100% - (2 * ").concat(this.cssBar.padding,"))\n              ")}},data:function(){return{cssBar:{padding:"5px"}}}}),C=L,M=(i("ce16"),Object(r["a"])(C,B,R,!1,null,"d5788c96",null)),N=M.exports,K={name:"game",components:{HealthBar:N},data:function(){return{healthBar:{player1:{health:100,name:"player1"},player2:{health:100,name:"player2"}}}},mounted:function(){var e=this,t=document.querySelector("#stage"),i=new S;i.createScene(t),i.addListener("hit",(function(t){return e.$emit("healthChange",t)})),this.$on("healthChange",(function(t){return e.updateHealth(t)}))},methods:{updateHealth:function(e){this.healthBar[e.name].health=e.health}}},F=K,V=(i("2221"),Object(r["a"])(F,u,d,!1,null,null,null)),W=V.exports;n["a"].use(h["a"]);var z=[{path:"",name:"game",component:W},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],G=new h["a"]({mode:"history",routes:z}),I=G,J=i("2f62");n["a"].use(J["a"]);var $=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:I,store:$,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"7b46":function(e,t,i){},"9c0c":function(e,t,i){},cca5:function(e,t,i){},ce16:function(e,t,i){"use strict";var n=i("cca5"),a=i.n(n);a.a}});
//# sourceMappingURL=app.7bb3ae36.js.map