'use strict';const m=b,n=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x115))/0x1+parseInt(k(0x116))/0x2*(parseInt(k(0x118))/0x3)+parseInt(l(0x10d))/0x4*(-parseInt(k(0x117))/0x5)+parseInt(l(0x11f))/0x6*(parseInt(k(0x110))/0x7)+-parseInt(k(0x114))/0x8+parseInt(k(0x10f))/0x9+parseInt(l(0x11d))/0xa*(-parseInt(k(0x11c))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x68b8d));var __importDefault=this&&this[m(0x112)]||function(c){return c&&c['__esModule']?c:{'default':c};};Object[n(0x11b)](exports,m(0x113),{'value':!![]});function a(){const q=['create','name','defineProperty','63811VWZweS','50XNLKUN','default','193302qTusrX','../../models/AutoReplyLogs','120yMRLKO','autoReply','2301336ejLMqZ','161ysWOLu','reply','__importDefault','__esModule','6033784XgrLcs','77891tDNclh','377842QeihoC','71530bQVKzI','9QwaHiT'];a=function(){return q;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x10d;let h=e[f];return h;},b(c,d);}const AutoReplyLogs_1=__importDefault(require(m(0x120))),CreateAutoReplyLogService=async(c,d,e)=>{const o=n,p=n,f={'autoReplyId':c['idAutoReply'],'autoReplyName':c[o(0x10e)][p(0x11a)],'stepsReplyId':c['id'],'stepsReplyMessage':c[p(0x111)],'wordsReply':e,'ticketId':d['id'],'contactId':d['contactId']},g=await AutoReplyLogs_1[p(0x11e)][p(0x119)](f);return g;};exports[m(0x11e)]=CreateAutoReplyLogService;