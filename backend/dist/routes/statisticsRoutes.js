'use strict';var I=b,N=b;(function(c,d){var G=b,H=b,e=c();while(!![]){try{var f=-parseInt(G(0x1a8))/0x1*(-parseInt(G(0x1b0))/0x2)+parseInt(G(0x1b9))/0x3*(-parseInt(G(0x1c9))/0x4)+parseInt(G(0x1c1))/0x5+-parseInt(G(0x1bb))/0x6*(parseInt(H(0x1d1))/0x7)+-parseInt(G(0x1c7))/0x8+-parseInt(G(0x1ca))/0x9+-parseInt(G(0x1ab))/0xa*(-parseInt(H(0x1c3))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x316d8));function b(c,d){var e=a();return b=function(f,g){f=f-0x1a7;var h=e[f];return h;},b(c,d);}function a(){var T=['219056aCbACV','/statistics-tickets-times','6444MWfqBe','946998zscfGm','../controllers/Statistics/DashController','__importDefault','/statistics-tickets-evolution-channels','index','call','__esModule','14gmxihL','get','2NouCtN','getDashTicketsAndTimes','DashTicketsQueues','2960870AtUTLD','configurable','default','getDashTicketsPerUsersDetail','../middleware/isAuth','57954dmKZQG','/statistics-tickets-evolution-by-period','defineProperty','prototype','ContactsReport','create','../controllers/StatisticsController','../controllers/Statistics/StatisticsPerUsersController','/statistics-per-users','291DpXkzn','__setModuleDefault','479970SwJYFr','JxCNf','hasOwnProperty','/statistics-tickets-per-users-detail','express','getDashTicketsQueue','5945PpuZpp','__createBinding','22hQSmWb','writable','/dash-tickets-queues','getDashTicketsEvolutionByPeriod'];a=function(){return T;};return a();}var __createBinding=this&&this[I(0x1c2)]||(Object['create']?function(c,d,e,f){var J=I,K=I;if(f===undefined)f=e;var g=Object['getOwnPropertyDescriptor'](d,e);(!g||('get'in g?!d[J(0x1d0)]:g[J(0x1c4)]||g[J(0x1ac)]))&&(g={'enumerable':!![],'get':function(){var L=K,M=J;if(L(0x1bc)===M(0x1bc))return d[e];else e[L(0x1ad)]=f;}}),Object[K(0x1b2)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[N(0x1ba)]||(Object[I(0x1b5)]?function(c,d){var O=I;Object[O(0x1b2)](c,'default',{'enumerable':!![],'value':d});}:function(c,d){var P=I;c[P(0x1ad)]=d;}),__importStar=this&&this['__importStar']||function(c){var Q=N,R=N;if(c&&c[Q(0x1d0)])return c;var d={};if(c!=null){for(var e in c)if(e!==R(0x1ad)&&Object[R(0x1b3)][Q(0x1bd)][R(0x1cf)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[I(0x1cc)]||function(c){var S=I;return c&&c[S(0x1d0)]?c:{'default':c};};Object[I(0x1b2)](exports,I(0x1d0),{'value':!![]});const express_1=__importDefault(require(N(0x1bf))),isAuth_1=__importDefault(require(N(0x1af))),StatisticsController=__importStar(require(I(0x1b6))),StatisticsPerUsersController=__importStar(require(N(0x1b7))),DashController=__importStar(require(I(0x1cb))),statisticsRoutes=express_1[N(0x1ad)]['Router']();statisticsRoutes[N(0x1a7)](N(0x1c5),isAuth_1['default'],StatisticsController[I(0x1aa)]),statisticsRoutes[N(0x1a7)]('/contacts-report',isAuth_1[I(0x1ad)],StatisticsController[N(0x1b4)]),statisticsRoutes[I(0x1a7)](N(0x1b8),isAuth_1[I(0x1ad)],StatisticsPerUsersController[N(0x1ce)]),statisticsRoutes[I(0x1a7)](N(0x1c8),isAuth_1[I(0x1ad)],DashController[I(0x1a9)]),statisticsRoutes[N(0x1a7)]('/statistics-tickets-channels',isAuth_1[I(0x1ad)],DashController['getDashTicketsChannels']),statisticsRoutes[I(0x1a7)](I(0x1cd),isAuth_1[I(0x1ad)],DashController['getDashTicketsEvolutionChannels']),statisticsRoutes[I(0x1a7)](N(0x1b1),isAuth_1[I(0x1ad)],DashController[N(0x1c6)]),statisticsRoutes[I(0x1a7)](N(0x1be),isAuth_1[I(0x1ad)],DashController[I(0x1ae)]),statisticsRoutes[N(0x1a7)]('/statistics-tickets-queue',isAuth_1['default'],DashController[N(0x1c0)]),exports['default']=statisticsRoutes;