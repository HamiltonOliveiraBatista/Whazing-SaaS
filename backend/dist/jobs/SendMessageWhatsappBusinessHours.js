'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x11c))/0x1*(parseInt(l(0x12d))/0x2)+-parseInt(k(0x118))/0x3*(-parseInt(l(0x117))/0x4)+-parseInt(k(0x127))/0x5+-parseInt(k(0x122))/0x6*(parseInt(k(0x116))/0x7)+-parseInt(l(0x119))/0x8+parseInt(l(0x123))/0x9+parseInt(k(0x12c))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x67467));function b(c,d){const e=a();return b=function(f,g){f=f-0x113;let h=e[f];return h;},b(c,d);}Object[m(0x124)](exports,m(0x120),{'value':!![]});function a(){const q=['tenant','SendMessageWhatsappBusinessHours','isGroup','908383Ukogut','8zGSkIJ','467811gZNeJA','531184eUlnan','Error\x20enviar\x20message\x20business\x20hours:\x20','g.us','40218xdYTcG','s.whatsapp.net','logger','messageBusinessHours','__esModule','whatsappId','18WMLcjQ','2717244hjJEKO','defineProperty','../libs/wbot-baileys','error','121815LAcFlM','contact','../utils/logger','default','ticket','4903830nZEynT','10HZhwlt'];a=function(){return q;};return a();}const wbot_baileys_1=require(n(0x125)),logger_1=require(n(0x129));exports[n(0x12a)]={'key':m(0x114),'options':{'delay':0x1f4,'attempts':0x32,'removeOnComplete':!![],'removeOnFail':![]},async 'handle'({data:c}){const o=n,p=n;try{const d=(0x0,wbot_baileys_1['getWbot'])(c[o(0x12b)][o(0x121)]),e=c[o(0x12b)]?.[p(0x115)]?o(0x11b):p(0x11d),f=c[o(0x12b)][p(0x128)]['number']+'@'+e,g=await d['sendMessage'](f,{'text':c[p(0x113)]['messageBusinessHours']}),h={'message':g,'messageBusinessHours':c['tenant'][p(0x11f)],'ticket':c[p(0x12b)]};return h;}catch(i){logger_1[p(0x11e)][p(0x126)](o(0x11a)+i);throw new Error(i);}}};