'use strict';const q=b,s=b;function a(){const v=['hr2','43100YoqGJZ','sendType','hr3','getDay','hr4','52kwWefB','440733rPDVLm','messageBusinessHours','bot','date-fns','tenantId','businessHours','SELECT','select\x20m.body,\x20m.\x22createdAt\x22\x20,\x20m.\x22updatedAt\x22\x20,\x20m.\x22ticketId\x22\x0a\x20\x20\x20\x20\x20\x20from\x20\x22Messages\x22\x20m,\x20\x22Tickets\x22\x20t\x20\x0a\x20\x20\x20\x20\x20\x20where\x20t.id\x20=\x20m.\x22ticketId\x22\x20\x0a\x20\x20\x20\x20\x20\x20and\x20t.id\x20=\x20','70wNIhHf','224392QbYqeH','4061120IJEwaq','sequelize','default','30iZniGY','HH:mm','messageTimestamp','20849037mIEFNV','3CGbJEU','type','853371EhsgTl','find','\x0a\x20\x20\x20\x20\x20\x20and\x20m.\x22fromMe\x22\x20=\x20true\x20\x0a\x20\x20\x20\x20\x20\x20and\x20m.\x22createdAt\x22\x20=\x20(select\x20max(m2.\x22createdAt\x22)\x20from\x20\x22Messages\x22\x20m2\x20where\x20m2.\x22ticketId\x22\x20=\x20','day','body','query','fromUnixTime','parse','../../TenantServices/ShowBusinessHoursAndMessageService','status','../../MessageServices/CreateMessageSystemService','length','944825NXZbnu','pending','fromMe','__importDefault','\x20and\x20\x22fromMe\x22\x20=\x20true\x20)','__esModule','isWithinInterval'];a=function(){return v;};return a();}(function(c,d){const o=b,p=b,e=c();while(!![]){try{const f=parseInt(o(0x121))/0x1+parseInt(p(0xfd))/0x2*(-parseInt(o(0x105))/0x3)+-parseInt(o(0x120))/0x4*(-parseInt(p(0x11b))/0x5)+-parseInt(p(0x101))/0x6*(-parseInt(p(0x113))/0x7)+parseInt(p(0xfe))/0x8+-parseInt(o(0x107))/0x9*(-parseInt(o(0xfc))/0xa)+-parseInt(o(0x104))/0xb;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5f936));var __importDefault=this&&this[q(0x116)]||function(c){const r=q;return c&&c[r(0x118)]?c:{'default':c};};Object['defineProperty'](exports,q(0x118),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0xfa;let h=e[f];return h;},b(c,d);}const date_fns_1=require(s(0x124)),ShowBusinessHoursAndMessageService_1=__importDefault(require(q(0x10f))),CreateMessageSystemService_1=__importDefault(require(q(0x111))),database_1=__importDefault(require('../../../database')),sequelize_1=require(s(0xff)),verifyBusinessHours=async(c,d)=>{const t=q,u=q;let e=!![];if(d[t(0x110)]!=='closed'&&!c[u(0x115)]&&!d['isGroup']){const f=await(0x0,ShowBusinessHoursAndMessageService_1[t(0x100)])({'tenantId':d[t(0x125)]}),g=(0x0,date_fns_1[u(0x10d)])(c[u(0x103)]),h=f[t(0x126)][u(0x108)](k=>k[u(0x10a)]===g[t(0x11e)]());if(!h)return e;if(h[t(0x106)]==='O')return e;const i=(0x0,date_fns_1['isWithinInterval'])(g,{'start':(0x0,date_fns_1['parse'])(h['hr1'],u(0x102),new Date()),'end':(0x0,date_fns_1['parse'])(h[u(0x11a)],u(0x102),new Date())}),j=(0x0,date_fns_1[u(0x119)])(g,{'start':(0x0,date_fns_1['parse'])(h[t(0x11d)],t(0x102),new Date()),'end':(0x0,date_fns_1[t(0x10e)])(h[u(0x11f)],'HH:mm',new Date())});if(h[u(0x106)]==='C'||!i&&!j){let k=u(0xfb)+d['id']+t(0x109)+d['id']+u(0x117);const l=await database_1[u(0x100)][t(0x10c)](k,{'type':sequelize_1['QueryTypes'][t(0xfa)]}),m=''+f['messageBusinessHours'];if(l[t(0x112)]>0x0&&l[0x0][t(0x10b)]==m)return![];e=![];const n={'body':f[u(0x122)],'fromMe':!![],'read':!![],'sendType':u(0x123),'tenantId':d[t(0x125)]};await(0x0,CreateMessageSystemService_1[t(0x100)])({'msg':n,'tenantId':d[t(0x125)],'ticket':d,'sendType':n[t(0x11c)],'status':t(0x114)});}}return e;};exports[s(0x100)]=verifyBusinessHours;