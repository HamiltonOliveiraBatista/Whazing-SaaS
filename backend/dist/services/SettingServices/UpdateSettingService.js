'use strict';const m=b,o=b;function a(){const r=['defineProperty','3281802WKlkgH','197790boCBAM','__importDefault','findOne','13779UPdZqf','default','1390nKWDqo','../../models/Setting','2WTMslG','4trJdOb','../../errors/AppError','2511455rCLCaA','507072dopQrz','3157833HLfqKm','363848jfvZpQ','__esModule'];a=function(){return r;};return a();}(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=parseInt(k(0x16a))/0x1*(-parseInt(k(0x164))/0x2)+parseInt(k(0x16e))/0x3+parseInt(k(0x165))/0x4*(-parseInt(l(0x167))/0x5)+parseInt(k(0x16d))/0x6+parseInt(k(0x169))/0x7+-parseInt(l(0x168))/0x8+parseInt(l(0x171))/0x9*(parseInt(k(0x162))/0xa);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x54ca6));function b(c,d){const e=a();return b=function(f,g){f=f-0x161;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[m(0x16f)]||function(c){const n=m;return c&&c[n(0x16b)]?c:{'default':c};};Object[m(0x16c)](exports,m(0x16b),{'value':!![]});const AppError_1=__importDefault(require(m(0x166))),Setting_1=__importDefault(require(m(0x163))),UpdateSettingService=async({key:c,value:d,tenantId:e})=>{const p=o,q=o,f=await Setting_1[p(0x161)][q(0x170)]({'where':{'key':c,'tenantId':e}});if(!f)throw new AppError_1['default']('ERR_NO_SETTING_FOUND',0x194);return await f['update']({'value':d}),f;};exports[m(0x161)]=UpdateSettingService;