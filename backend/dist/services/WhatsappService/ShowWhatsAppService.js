'use strict';function b(c,d){const e=a();return b=function(f,g){f=f-0xc4;let h=e[f];return h;},b(c,d);}const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0xe2))/0x1*(-parseInt(k(0xce))/0x2)+-parseInt(k(0xd5))/0x3+parseInt(k(0xe0))/0x4+-parseInt(l(0xd6))/0x5*(-parseInt(k(0xd4))/0x6)+-parseInt(k(0xde))/0x7+-parseInt(l(0xc6))/0x8*(-parseInt(k(0xd9))/0x9)+-parseInt(k(0xc9))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x4e0cd));var __importDefault=this&&this[m(0xc5)]||function(c){const n=m;return c&&c[n(0xda)]?c:{'default':c};};Object[m(0xcd)](exports,o(0xda),{'value':!![]});function a(){const r=['ERR_NO_WAPP_FOUND','phone','queue_transf','195258QtvNAE','520146rfGjzh','35ZZlDSZ','fbPageId','push','269748zsXASi','__esModule','tokenAPI','chatFlowId','plugged','421750vLJLlr','status','1012968EzURZJ','../../errors/AppError','1sCJeRm','default','__importDefault','136NNLvJr','instagramKey','instagramUser','4874760Skqozi','wabaBSP','createdAt','tenantId','defineProperty','100468crxsCd','number','is_open_ia'];a=function(){return r;};return a();}const Whatsapp_1=__importDefault(require('../../models/Whatsapp')),AppError_1=__importDefault(require(o(0xe1))),ShowWhatsAppService=async({id:c,tenantId:d,isInternal:isInternal=![]})=>{const p=o,q=o,e=['id','qrcode','name',p(0xdf),q(0xdd),'isDefault','isDeleted','tokenTelegram',p(0xc8),'type',q(0xcb),'updatedAt',p(0xcf),p(0xd2),q(0xcc),q(0xca),q(0xdb),q(0xd7),'farewellMessage',p(0xdc),p(0xd0),q(0xd3)];isInternal&&e[p(0xd8)](p(0xc7));const f=await Whatsapp_1[q(0xc4)]['findByPk'](c,{'attributes':e});if(!f||d&&f[p(0xcc)]!==d)throw new AppError_1[(p(0xc4))](q(0xd1),0x194);return f;};exports[o(0xc4)]=ShowWhatsAppService;