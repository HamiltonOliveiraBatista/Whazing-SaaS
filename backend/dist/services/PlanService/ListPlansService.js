'use strict';const m=b,o=b;(function(c,d){const k=b,l=b,e=c();while(!![]){try{const f=-parseInt(k(0x89))/0x1*(-parseInt(l(0x91))/0x2)+parseInt(l(0x96))/0x3*(-parseInt(l(0x85))/0x4)+parseInt(k(0x8e))/0x5+parseInt(l(0x8c))/0x6*(parseInt(l(0x80))/0x7)+parseInt(k(0x86))/0x8+parseInt(k(0x92))/0x9+-parseInt(k(0x93))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xdbf20));var __importDefault=this&&this[m(0x95)]||function(c){const n=m;return c&&c[n(0x8a)]?c:{'default':c};};Object[o(0x8f)](exports,'__esModule',{'value':!![]});function a(){const r=['default','7bQNBrg','length','name','ASC','Sequelize','53940xzFEjq','13209208xoiKRT','sequelize','LOWER','2IiCGLX','__esModule','findAndCountAll','20640hjtlOc','false','4890335tCIFfl','defineProperty','LIKE','864534wChylg','10727370PwajKK','24262410sjmQYz','trim','__importDefault','303rLUCqm'];a=function(){return r;};return a();}function b(c,d){const e=a();return b=function(f,g){f=f-0x7f;let h=e[f];return h;},b(c,d);}const sequelize_1=require(m(0x87)),Plan_1=__importDefault(require('../../models/Plan')),ListPlansService=async({searchParam:searchParam='',pageNumber:pageNumber='1',listPublic:c})=>{const p=m,q=m;let d={[sequelize_1['Op']['or']]:[{'name':sequelize_1[p(0x84)]['where'](sequelize_1['Sequelize']['fn'](q(0x88),sequelize_1[p(0x84)]['col']('name')),q(0x90),'%'+searchParam['toLowerCase']()[p(0x94)]()+'%')}]};const e=0x14,f=e*(+pageNumber-0x1);c===q(0x8d)&&(d={...d,'isPublic':![]});const {count:g,rows:h}=await Plan_1[q(0x7f)][q(0x8b)]({'where':d,'limit':e,'offset':f,'order':[[q(0x82),p(0x83)]]}),i=g>f+h[q(0x81)];return{'plans':h,'count':g,'hasMore':i};};exports[m(0x7f)]=ListPlansService;