'use strict';const w=b,x=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x1af;let h=e[f];return h;},b(c,d);}(function(c,d){const t=b,u=b,e=c();while(!![]){try{const f=parseInt(t(0x1b2))/0x1+-parseInt(u(0x1bd))/0x2+parseInt(u(0x1be))/0x3+parseInt(t(0x1b9))/0x4*(parseInt(t(0x1d6))/0x5)+-parseInt(u(0x1cc))/0x6+parseInt(t(0x1e7))/0x7*(-parseInt(t(0x1c4))/0x8)+parseInt(u(0x1bc))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9f8c9));var __importDefault=this&&this['__importDefault']||function(c){const v=b;return c&&c[v(0x1e1)]?c:{'default':c};};Object[w(0x1b3)](exports,x(0x1e1),{'value':!![]}),exports[w(0x1ef)]=exports[w(0x1ba)]=exports[x(0x1c0)]=exports[w(0x1c9)]=exports['store']=exports['index']=void 0x0;const sequelize_1=require(x(0x1b5)),socket_1=require(x(0x1d4)),Message_1=__importDefault(require(x(0x1ea))),CreateLogTicketService_1=__importDefault(require('../services/TicketServices/CreateLogTicketService')),CreateTicketService_1=__importDefault(require('../services/TicketServices/CreateTicketService')),DeleteTicketService_1=__importDefault(require(w(0x1cf))),ListTicketsService_1=__importDefault(require(x(0x1e9))),ShowLogTicketService_1=__importDefault(require(x(0x1e4))),ShowTicketService_1=__importDefault(require(x(0x1de))),UpdateTicketService_1=__importDefault(require(w(0x1c6))),Whatsapp_1=__importDefault(require(w(0x1d0))),AppError_1=__importDefault(require(x(0x1ec))),CreateMessageSystemService_1=__importDefault(require('../services/MessageServices/CreateMessageSystemService')),pupa_1=require('../utils/pupa'),Ticket_1=__importDefault(require(x(0x1d7))),ListSettingsService_1=__importDefault(require(x(0x1b8))),index=async(c,d)=>{const y=w,z=w,{tenantId:e,profile:f}=c['user'],{searchParam:g,pageNumber:h,status:i,date:j,showAll:k,withUnreadMessages:l,queuesIds:m,isNotAssignedUser:n,includeNotQueueDefined:o}=c[y(0x1df)],p=c[z(0x1b4)]['id'],{tickets:q,count:r,hasMore:s}=await(0x0,ListTicketsService_1['default'])({'searchParam':g,'pageNumber':h,'status':i,'date':j,'showAll':k,'userId':p,'withUnreadMessages':l,'queuesIds':m,'isNotAssignedUser':n,'includeNotQueueDefined':o,'tenantId':e,'profile':f});return d[y(0x1bb)](0xc8)[z(0x1e3)]({'tickets':q,'count':r,'hasMore':s});};exports[w(0x1d3)]=index;const store=async(c,d)=>{const A=w,B=x,{tenantId:e}=c[A(0x1b4)],{contactId:f,status:g,userId:h,channel:i,channelId:j}=c[B(0x1ca)],k=await Ticket_1['default'][A(0x1d5)]({'where':{'contactId':f,[sequelize_1['Op']['or']]:[{'status':'open'},{'status':A(0x1e8)}],'tenantId':e,'channel':i}}),l=await(0x0,ListSettingsService_1[A(0x1d9)])(e),m=l?.[A(0x1dd)](o=>{const C=A,D=A;return C(0x1dc)==='iFDHQ'?o[D(0x1d2)]===D(0x1ee):g&&h[D(0x1e1)]?i:{'default':j};})?.[B(0x1d8)]===B(0x1da)?'S':'N';if(k&&!!k['userId']&&k[B(0x1c1)]!=h&&m=='S'){if(B(0x1c7)!==A(0x1c7)){const p=(0x0,h[A(0x1e2)])();p['to'](i+':'+j[A(0x1bb)])['emit'](k+':ticket',{'action':B(0x1bf),'ticket':l});}else throw new AppError_1['default'](A(0x1c5));}if(k){if('tmFtT'!==A(0x1f0))throw new d['default'](A(0x1c5));else return d[B(0x1bb)](0xc8)['json'](k);}const n=await(0x0,CreateTicketService_1[B(0x1d9)])({'contactId':f,'status':g,'userId':h,'tenantId':e,'channel':i,'channelId':j});if(!h){if('DSmmd'!==A(0x1b7))return e[A(0x1bb)](0xc8)[A(0x1e3)](f);else{const r=(0x0,socket_1[B(0x1e2)])();r['to'](e+':'+n['status'])[B(0x1b1)](e+B(0x1ed),{'action':B(0x1bf),'ticket':n});}}return d[A(0x1bb)](0xc8)['json'](n);};exports[x(0x1e0)]=store;const show=async(c,d)=>{const E=x,F=x,{ticketId:e}=c[E(0x1eb)],{tenantId:f}=c[F(0x1b4)],g=c['user']['id'],h=await(0x0,ShowTicketService_1[E(0x1d9)])({'id':e,'tenantId':f}),i={'contactId':h[E(0x1cd)],'scheduleDate':{[sequelize_1['Op'][F(0x1cb)]]:null},'status':E(0x1e8)},j=await Message_1['default']['findAll']({'where':i});return h[E(0x1c8)]('scheduledMessages',j),await(0x0,CreateLogTicketService_1[E(0x1d9)])({'userId':g,'ticketId':e,'type':E(0x1ce)}),d[E(0x1bb)](0xc8)[F(0x1e3)](h);};exports[x(0x1c9)]=show;const update=async(c,d)=>{const G=x,H=x,{ticketId:e}=c[G(0x1eb)],{tenantId:f}=c[G(0x1b4)],g=c[G(0x1b4)]['id'],{isTransference:h}=c[G(0x1ca)],i={...c[G(0x1ca)],'tenantId':f},{ticket:j}=await(0x0,UpdateTicketService_1[G(0x1d9)])({'ticketData':i,'ticketId':e,'isTransference':h,'userIdRequest':g});if(i[H(0x1bb)]===H(0x1db)){if(G(0x1af)!==H(0x1c2)){const k=await Whatsapp_1[H(0x1d9)][H(0x1d5)]({'where':{'id':j[G(0x1b6)],'tenantId':f}});if(k?.[G(0x1f1)]){const l=(0x0,pupa_1[G(0x1d1)])(k[G(0x1f1)]||'',{'protocol':j[G(0x1e5)],'name':j[H(0x1b0)][H(0x1e6)]}),m={'msg':{'body':l,'fromMe':!![],'read':!![]},'tenantId':f,'ticket':j,'userId':c[H(0x1b4)]['id'],'sendType':'bot','status':G(0x1e8),'isTransfer':![],'note':![]};await(0x0,CreateMessageSystemService_1[H(0x1d9)])(m),await j['update']({'isFarewellMessage':!![]});}}else return d['key']==='NotViewAssignedTickets';}return d[H(0x1bb)](0xc8)[H(0x1e3)](j);};exports[x(0x1c0)]=update;const remove=async(c,d)=>{const I=w,J=w,{ticketId:e}=c[I(0x1eb)],{tenantId:f}=c[I(0x1b4)],g=c[J(0x1b4)]['id'],h=await(0x0,DeleteTicketService_1[I(0x1d9)])({'id':e,'tenantId':f,'userId':g}),i=(0x0,socket_1['getIO'])();return i['to'](f+':'+h[J(0x1bb)])['to'](f+':'+e)['to'](f+J(0x1c3))[J(0x1b1)](f+J(0x1ed),{'action':'delete','ticketId':+e}),d['status'](0xc8)['json']({'message':'ticket\x20deleted'});};function a(){const M=['pupa','key','index','../libs/socket','findOne','35jLADGe','../models/Ticket','value','default','enabled','closed','iFDHQ','find','../services/TicketServices/ShowTicketService','query','store','__esModule','getIO','json','../services/TicketServices/ShowLogTicketService','protocol','name','7KppjpM','pending','../services/TicketServices/ListTicketsService','../models/Message','params','../errors/AppError',':ticket','NotViewAssignedTickets','showLogsTicket','tmFtT','farewellMessage','ipbIa','contact','emit','436387sdrGwf','defineProperty','user','sequelize','whatsappId','DSmmd','../services/SettingServices/ListSettingsService','362888WdwhkO','remove','status','13694418WZhbiZ','1878266NeybAU','2166180pYuDOx','create','update','userId','WCEcP',':notification','7847960kqdUQZ','Ticket\x20já\x20atribuido\x20para\x20outro\x20usuário','../services/TicketServices/UpdateTicketService','llhXq','setDataValue','show','body','not','4448772ReCmRI','contactId','access','../services/TicketServices/DeleteTicketService','../models/Whatsapp'];a=function(){return M;};return a();}exports[w(0x1ba)]=remove;const showLogsTicket=async(c,d)=>{const K=x,L=w,{ticketId:e}=c[K(0x1eb)],f=await(0x0,ShowLogTicketService_1[L(0x1d9)])({'ticketId':e});return d[K(0x1bb)](0xc8)[L(0x1e3)](f);};exports['showLogsTicket']=showLogsTicket;