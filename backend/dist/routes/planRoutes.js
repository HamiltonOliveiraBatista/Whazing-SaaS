'use strict';var I=b,N=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0x1e8))/0x1*(parseInt(H(0x1df))/0x2)+-parseInt(G(0x1db))/0x3+-parseInt(G(0x1e7))/0x4+parseInt(G(0x1d6))/0x5+-parseInt(G(0x1e1))/0x6*(-parseInt(G(0x1da))/0x7)+-parseInt(G(0x1f6))/0x8+-parseInt(G(0x1ef))/0x9*(-parseInt(G(0x1f7))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3b4d8));function b(c,d){var e=a();return b=function(f,g){f=f-0x1d4;var h=e[f];return h;},b(c,d);}var __createBinding=this&&this[I(0x1d5)]||(Object['create']?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object[J(0x1f0)](d,e);(!g||('get'in g?!d[J(0x1de)]:g[K(0x1ee)]||g[J(0x1d4)]))&&(K(0x1e9)===K(0x1f3)?f={'enumerable':!![],'get':function(){return i[j];}}:g={'enumerable':!![],'get':function(){var L=K,M=J;if(L(0x1ed)!==M(0x1ea))return d[e];else{if(e===l)d=n;c[p]=q[r];}}}),Object[K(0x1e3)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[N(0x1dc)]?function(c,d){var O=N,P=I;Object[O(0x1e3)](c,P(0x1e2),{'enumerable':!![],'value':d});}:function(c,d){var Q=I;c[Q(0x1e2)]=d;}),__importStar=this&&this['__importStar']||function(c){var R=N,S=N;if(c&&c[R(0x1de)])return c;var d={};if(c!=null){for(var e in c)if(e!==R(0x1e2)&&Object[S(0x1e5)][S(0x1e6)][S(0x1d7)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x1e0)]||function(c){var T=N;return c&&c[T(0x1de)]?c:{'default':c};};Object[N(0x1e3)](exports,'__esModule',{'value':!![]});const express_1=__importDefault(require('express')),isAuth_1=__importDefault(require(I(0x1e4))),PlanController=__importStar(require('../controllers/PlanController')),planRoutes=express_1[I(0x1e2)]['Router']();function a(){var U=['/plans/list','listPublic','2485kEMqAn','426522KpFMwW','create','list','__esModule','2qQSCyC','__importDefault','3666QEkFDS','default','defineProperty','../middleware/isAuth','prototype','hasOwnProperty','1268328VEamTr','4823prUGBw','wLWNk','MWwbJ','delete','/plans','uTQSm','writable','2763vCZRsE','getOwnPropertyDescriptor','get','/plans/:id','qUaZp','store','update','3663520gqqomE','25580PVDmbs','post','configurable','__createBinding','813560EGrbnS','call'];a=function(){return U;};return a();}planRoutes[I(0x1f1)]('/plans/listpublic',PlanController[I(0x1d9)]),planRoutes[I(0x1f1)](I(0x1d8),isAuth_1[I(0x1e2)],PlanController[I(0x1dd)]),planRoutes[N(0x1eb)](N(0x1f2),isAuth_1[I(0x1e2)],PlanController['remove']),planRoutes[N(0x1f8)](N(0x1ec),isAuth_1[N(0x1e2)],PlanController[I(0x1f4)]),planRoutes['put'](N(0x1f2),isAuth_1[N(0x1e2)],PlanController[I(0x1f5)]),exports['default']=planRoutes;