'use strict';const s=b,t=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x7d;let h=e[f];return h;},b(c,d);}function a(){const M=['notOptionsSelectMessage','status','nodeList','../TicketServices/CreateLogTicketService','2540nkWxVC','isCreated','BdFAp','action','tenantId','conditions','toLowerCase','channel','flow','UTGEz','1983128fjZhlp','type','userId','190NWrUQf','map','1758402kuPGeJ','2572158JUQpBS','contact','nextStepId','Desculpe!\x20Não\x20entendi\x20sua\x20resposta.\x20Vamos\x20tentar\x20novamente!\x20Escolha\x20uma\x20opção\x20válida.','__esModule','retriesLimitQueue','replace','find','trim','findByPk','YQgot','ihAxY','answerCloseTicket','includes','botRetries','default','welcomeMessage','MyKTA','ticket:update','answered','maxRetryBotMessage','./IsContactTest','pending','fromMe','key','defineProperty','getChatFlow','JKSXd','queueId','7635hYEmQb','409722ODRmTi','stepChatFlow','retriesLimitUserDefine','eYRzl','yUtPv','from_ia','2306194jgjFnz','reload','condition','./DefinedUserBotService','./BuildSendMessageService','hyiTN','../MessageServices/CreateMessageSystemService','../../helpers/SetTicketMessagesAsRead','userIdDestination','dofys','length','155507pDPYRV','message','celularTeste','closed','autoDistributeTickets','configurations','1Hulsmk','number','autoClose','update','chatFlowId','7kuTbtP','sendType','../OpenIA/VerifyMensageOpenIAQueue'];a=function(){return M;};return a();}(function(c,d){const q=b,r=b,e=c();while(!![]){try{const f=parseInt(q(0x8a))/0x1*(parseInt(q(0xca))/0x2)+-parseInt(r(0xc4))/0x3+parseInt(q(0x96))/0x4*(-parseInt(r(0xc3))/0x5)+-parseInt(r(0xa6))/0x6*(-parseInt(q(0x8f))/0x7)+parseInt(q(0xa0))/0x8+parseInt(r(0xa5))/0x9+parseInt(r(0xa3))/0xa*(-parseInt(r(0x84))/0xb);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x9ebfd));var __importDefault=this&&this['__importDefault']||function(c){return c&&c['__esModule']?c:{'default':c};};Object[s(0xbf)](exports,t(0xaa),{'value':!![]});const socketEmit_1=__importDefault(require('../../helpers/socketEmit')),CreateMessageSystemService_1=__importDefault(require(s(0x7f))),CreateLogTicketService_1=__importDefault(require(s(0x95))),BuildSendMessageService_1=__importDefault(require(s(0x7d))),DefinedUserBotService_1=__importDefault(require(t(0xcd))),IsContactTest_1=__importDefault(require(t(0xbb))),VerifyContactBaileys_1=require('../WbotServices/helpers/VerifyContactBaileys'),VerifyMensageOpenIAQueue_1=__importDefault(require(t(0x91))),Queue_1=__importDefault(require('./../../models/Queue')),SetTicketMessagesAsRead_1=__importDefault(require(t(0x80))),isNextSteps=async(c,d,e,f)=>{const u=t,v=s;if(f[u(0x99)]===0x0){if(v(0xc8)!==u(0x98)){await c[u(0x8d)]({'stepChatFlow':f[v(0xa8)],'botRetries':0x0,'lastInteractionBot':new Date()});const g=[...d[v(0x9e)]['nodeList']],h=g[v(0xad)](i=>i['id']===f[v(0xa8)]);if(!h)return;for(const i of h['interactions']){v(0x7e)===u(0xb7)?(g[u(0xa2)]=h,i[v(0xa2)]=j):await(0x0,BuildSendMessageService_1[u(0xb5)])({'msg':i,'tenantId':c[u(0x9a)],'ticket':c});}await(0x0,SetTicketMessagesAsRead_1[v(0xb5)])(c);}else g['queueId']=h,i['queueId']=j;}},isQueueDefine=async(c,d,e,f)=>{const w=t,x=s;if(f[w(0x99)]===0x1){c[x(0x8d)]({'queueId':f[x(0xc2)],'chatFlowId':null,'stepChatFlow':null,'botRetries':0x0,'lastInteractionBot':new Date()}),await(0x0,CreateLogTicketService_1[x(0xb5)])({'ticketId':c['id'],'type':'queue','queueId':f[w(0xc2)]});d?.[w(0x89)]?.['autoDistributeTickets']&&(x(0xc7)==='yGSjM'?e=f['celularTeste'][x(0xac)](/\s/g,''):(await(0x0,DefinedUserBotService_1[w(0xb5)])(c,f['queueId'],c[w(0x9a)],d?.['configurations']?.[x(0x88)]),c['reload']()));(0x0,socketEmit_1['default'])({'tenantId':c['tenantId'],'type':w(0xb8),'payload':c});const g=await Queue_1[w(0xb5)][x(0xaf)](f['queueId']);g[w(0xc9)]&&await c['update']({'is_chat_ia':!![]}),await(0x0,VerifyMensageOpenIAQueue_1[w(0xb5)])(c,g,!![],!![]);}},isUserDefine=async(c,d,e)=>{const y=s,z=t;if(e[y(0x99)]===0x2){if('UTGEz'===z(0x9f))await c[z(0x8d)]({'userId':e[z(0x81)],'chatFlowId':null,'stepChatFlow':null,'botRetries':0x0,'is_chat_ia':![],'lastInteractionBot':new Date()}),await c[z(0xcb)](),await(0x0,CreateLogTicketService_1[y(0xb5)])({'userId':e[y(0x81)],'ticketId':c['id'],'type':'userDefine'}),(0x0,socketEmit_1[y(0xb5)])({'tenantId':c[z(0x9a)],'type':y(0xb8),'payload':c});else return![];}},sendWelcomeMessage=async(c,d)=>{const A=t,B=s;if(d?.['configurations']?.[A(0xb6)]?.[A(0x85)]){const e={'body':d['configurations']?.[A(0xb6)][A(0x85)],'fromMe':!![],'read':!![],'sendType':'bot'};await(0x0,CreateMessageSystemService_1[B(0xb5)])({'msg':e,'tenantId':c[A(0x9a)],'ticket':c,'sendType':e[A(0x90)],'status':'pending'});}},isRetriesLimit=async(c,d)=>{const C=s,D=t,e=d?.[C(0x89)]?.[D(0xba)]?.[C(0x8b)];if(d?.['configurations']?.['maxRetryBotMessage']&&e&&c[C(0xb4)]>=e-0x1){const f=d[C(0x89)][D(0xba)]['type'],{destiny:g}=d['configurations'][D(0xba)],h={'chatFlowId':null,'stepChatFlow':null,'botRetries':0x0,'lastInteractionBot':new Date()},i={'ticketId':c['id'],'type':f===0x1?C(0xab):D(0xc6)};if(f===0x1){if(C(0xb0)===D(0xb1))return g&&h[C(0xaa)]?i:{'default':j};else h[D(0xc2)]=g,i[D(0xc2)]=g;}return f===0x2&&(h['userId']=g,i[C(0xa2)]=g),c[D(0x8d)](h),(0x0,socketEmit_1['default'])({'tenantId':c['tenantId'],'type':D(0xb8),'payload':c}),await(0x0,CreateLogTicketService_1[D(0xb5)])(i),await sendWelcomeMessage(c,d),!![];}return![];},isAnswerCloseTicket=async(c,d,e)=>{const E=t,F=s;if(!c?.[E(0x89)]?.[F(0xb2)]||c?.[F(0x89)]?.['answerCloseTicket']?.[F(0x83)]<0x1)return![];const f=c[E(0x89)][E(0xb2)][F(0xad)](g=>{const G=E,H=E;return String(g)[G(0x9c)]()[H(0xae)]()===String(e)[H(0x9c)]()['trim']();});if(f){if(E(0xc1)!==F(0xc1)){if(h[E(0xa1)]==='US')return!![];const h=i[E(0xcc)][E(0xa4)](p=>h(p)['toLowerCase']()[E(0xae)]()),i=k(l)[F(0x9c)]()[F(0xae)]();return h[F(0xb3)](i);}else return await d[E(0x8d)]({'chatFlowId':null,'stepChatFlow':null,'botRetries':0x0,'lastInteractionBot':new Date(),'unreadMessages':0x0,'answered':![],'status':F(0x87)}),await(0x0,CreateLogTicketService_1[E(0xb5)])({'ticketId':d['id'],'type':E(0x8c)}),(0x0,socketEmit_1[F(0xb5)])({'tenantId':d[E(0x9a)],'type':'ticket:update','payload':d}),!![];}return![];},VerifyStepsChatFlowTicket=async(c,d)=>{const I=t,J=t;let e;const f=c[I(0xbe)]?.[J(0xbd)]??c[I(0xbd)];if(d[I(0x8e)]&&d[J(0x93)]==='pending'&&!f&&!d['isGroup']&&!d[J(0xb9)]){if(d[I(0x8e)]){const g=await d[J(0xc0)]();if(g[I(0x86)]){if(J(0x82)===I(0x82))e=g[J(0x86)][I(0xac)](/\s/g,'');else return g(h)['toLowerCase']()[J(0xae)]()===i(j)[I(0x9c)]()[J(0xae)]();}const h=g[I(0x9e)]['nodeList'][I(0xad)](m=>m['id']===d[I(0xc5)]),i=g[J(0x9e)][J(0x94)][J(0xad)](m=>m['type']===I(0x89)),j=await(0x0,VerifyContactBaileys_1['getBodyMessage'])(c),k=h[J(0x9b)][J(0xad)](m=>{const K=I,L=J;if(m[K(0xa1)]==='US')return!![];const n=m['condition'][K(0xa4)](p=>String(p)[L(0x9c)]()[L(0xae)]()),o=String(j)['toLowerCase']()[L(0xae)]();return n['includes'](o);});if(!d[J(0x97)]&&await isAnswerCloseTicket(i,d,j))return;if(k&&!d[I(0x97)]){if(await(0x0,IsContactTest_1[J(0xb5)])(d[J(0xa7)][J(0x8b)],e,d[I(0x9d)]))return;await isNextSteps(d,g,h,k),await isQueueDefine(d,i,h,k),await isUserDefine(d,h,k),(0x0,socketEmit_1[J(0xb5)])({'tenantId':d[J(0x9a)],'type':I(0xb8),'payload':d}),(k[I(0x99)]===0x1||k['action']===0x2)&&await sendWelcomeMessage(d,i);}else{if(await(0x0,IsContactTest_1['default'])(d[J(0xa7)][I(0x8b)],e,d['channel']))return;if(!d[J(0x97)]){if(await isRetriesLimit(d,i))return;const m={'body':i[J(0x89)][J(0x92)][J(0x85)]||J(0xa9),'fromMe':!![],'read':!![],'sendType':'bot'};await(0x0,CreateMessageSystemService_1[J(0xb5)])({'msg':m,'tenantId':d[J(0x9a)],'ticket':d,'sendType':m[I(0x90)],'status':I(0xbc)}),await d[J(0x8d)]({'botRetries':d[J(0xb4)]+0x1,'lastInteractionBot':new Date()});}for(const n of h['interactions']){await(0x0,BuildSendMessageService_1[J(0xb5)])({'msg':n,'tenantId':d[J(0x9a)],'ticket':d});}}await(0x0,SetTicketMessagesAsRead_1[J(0xb5)])(d);}}};exports[t(0xb5)]=VerifyStepsChatFlowTicket;