'use strict';const n=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0xf9))/0x1+-parseInt(k(0x104))/0x2+parseInt(l(0xf1))/0x3+-parseInt(l(0xf2))/0x4*(parseInt(k(0x100))/0x5)+-parseInt(k(0x102))/0x6*(-parseInt(k(0xef))/0x7)+-parseInt(k(0xfb))/0x8*(-parseInt(k(0xff))/0x9)+parseInt(l(0x103))/0xa*(-parseInt(k(0xee))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xa000a));var __importDefault=this&&this['__importDefault']||function(c){const m=b;return c&&c[m(0xfd)]?c:{'default':c};};function a(){const r=['__esModule','default','9SzBKwP','1070UqsRGw','defineProperty','24tNRblI','10MsmPhe','45260PvjZxO','10054275RUCRUz','2290225VkTwta','../../errors/AppError','942849uIZUbp','3204hNETnP','contact','tenantId','extraInfo','../../models/Contact','../../models/User','name','115251pnrAQr','findByPk','2045656dnmWRO','wallets'];a=function(){return r;};return a();}Object[n(0x101)](exports,o(0xfd),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0xee;let h=e[f];return h;},b(c,d);}const Ticket_1=__importDefault(require('../../models/Ticket')),AppError_1=__importDefault(require(o(0xf0))),Contact_1=__importDefault(require(n(0xf6))),User_1=__importDefault(require(n(0xf7))),ShowTicketService=async({id:c,tenantId:d})=>{const p=n,q=n,e=await Ticket_1[p(0xfe)][p(0xfa)](c,{'include':[{'model':Contact_1[p(0xfe)],'as':q(0xf3),'include':[q(0xf5),'tags',{'association':p(0xfc),'attributes':['id',p(0xf8)]}]},{'model':User_1[p(0xfe)],'as':'user','attributes':['id',q(0xf8)]},{'association':'whatsapp','attributes':['id',p(0xf8),'isDeleted']}]});if(!e||e[q(0xf4)]!==d)throw new AppError_1[(p(0xfe))]('ERR_NO_TICKET_FOUND',0x194);return e;};exports[o(0xfe)]=ShowTicketService;