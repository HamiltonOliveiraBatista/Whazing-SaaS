'use strict';function a(){const x=['4HFQvxL','jsonwebtoken','../../libs/rabbitmq-server','verify','5563048tIcfbk','6khuiQK','toString','9274830nJOupp','default','messages','310149wrbZKu','messenger','content','673834LieOwp','parse','__esModule','defineProperty','4570069kTOLdg','3IrlhYb','../../config/auth','43664995AfqIuj','env','start','56FyGAKe','__importDefault','AMQP_URL','7261610DdqOmP'];a=function(){return x;};return a();}const q=b,s=b;(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=-parseInt(o(0x182))/0x1*(parseInt(p(0x174))/0x2)+parseInt(p(0x179))/0x3*(parseInt(o(0x16b))/0x4)+-parseInt(p(0x181))/0x5+parseInt(o(0x16c))/0x6*(-parseInt(o(0x178))/0x7)+parseInt(o(0x17e))/0x8*(-parseInt(o(0x171))/0x9)+-parseInt(o(0x16e))/0xa+parseInt(p(0x17b))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb45b4));function b(c,d){const e=a();return b=function(f,g){f=f-0x16a;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[q(0x17f)]||function(c){const r=q;return c&&c[r(0x176)]?c:{'default':c};};Object[q(0x177)](exports,s(0x176),{'value':!![]});const jsonwebtoken_1=require(s(0x183)),rabbitmq_server_1=__importDefault(require(s(0x184))),auth_1=__importDefault(require(s(0x17a))),MessengerHandleMessage_1=__importDefault(require('./MessengerHandleMessage')),MessengerConsumer=async()=>{const t=q,u=s,c=new rabbitmq_server_1[(t(0x16f))](process[t(0x17c)][t(0x180)]||'');await c[t(0x17d)](),c['consume'](u(0x172),d=>{const v=t,w=u,e=JSON[v(0x175)](d[w(0x173)][v(0x16d)]()),f=(0x0,jsonwebtoken_1[v(0x16a)])(e['token'],auth_1['default']['secret']);if(!f)return;(0x0,MessengerHandleMessage_1[w(0x16f)])(e[w(0x170)]);});};exports[s(0x16f)]=MessengerConsumer;