'use strict';const w=b,x=b;(function(c,d){const t=b,u=b,e=c();while(!![]){try{const f=parseInt(t(0x11e))/0x1*(-parseInt(t(0x119))/0x2)+-parseInt(t(0x13a))/0x3*(-parseInt(u(0x14c))/0x4)+-parseInt(u(0x11f))/0x5+parseInt(t(0x138))/0x6+-parseInt(t(0x109))/0x7+-parseInt(u(0x12e))/0x8+parseInt(t(0x143))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x362a0));var __importDefault=this&&this['__importDefault']||function(c){const v=b;return c&&c[v(0x12a)]?c:{'default':c};};Object[w(0x13c)](exports,x(0x12a),{'value':!![]}),exports[w(0x136)]=exports[w(0x157)]=exports[w(0x149)]=exports[x(0x130)]=exports[x(0x144)]=exports['indexChannels']=exports[w(0x12c)]=exports[w(0x155)]=exports[x(0x140)]=exports['indexTenants']=exports[x(0x14b)]=exports['getUsersByTenant']=exports['indexUsers']=exports[x(0x11d)]=void 0x0;const socket_1=require('../libs/socket'),AdminListChatFlowService_1=__importDefault(require(x(0x156))),AdminListSettingsService_1=__importDefault(require(x(0x11b))),AdminListTenantsService_1=__importDefault(require(x(0x147))),AdminListUsersService_1=__importDefault(require(x(0x12d))),AdminListChannelsService_1=__importDefault(require(w(0x127))),AdminUpdateUserService_1=__importDefault(require(x(0x13d))),UpdateSettingService_1=__importDefault(require('../services/SettingServices/UpdateSettingService')),AppError_1=__importDefault(require(w(0x10e))),CreateWhatsAppService_1=__importDefault(require(x(0x132))),CreateUserService_1=__importDefault(require(x(0x118))),AdminCreateTenantService_1=require(x(0x137)),AdminStatusTenant_1=__importDefault(require('../services/AdminServices/AdminStatusTenant')),AdminUpdateTenantService_1=__importDefault(require(w(0x146))),AdminListUsersByTenantService_1=__importDefault(require(w(0x153))),CheckSettings_1=__importDefault(require(x(0x124))),moment_1=__importDefault(require(w(0x114))),store=async(c,d)=>{const y=w,z=w,{tenantName:e,status:f,password:g,name:h,cnpj:i,maxUsers:j,maxConnections:k,planId:l,phone:m,email:n,dueDate:o,recurrence:p}=c[y(0x13f)],{tenantId:q}=c[z(0x13e)],r=await(0x0,AdminCreateTenantService_1['CreateTenantService'])({'name':e,'status':z(0x154),'cnpj':i,'tenantId':q,'maxUsers':j,'maxConnections':k,'planId':l,'phone':m,'email':n,'dueDate':o,'recurrence':p}),s=await(0x0,CreateUserService_1[z(0x10f)])({'email':n,'password':g,'name':h,'tenantId':r['id'],'profile':y(0x10c),'configs':{'filtrosAtendimento':{'searchParam':'','pageNumber':0x1,'status':[y(0x13b),z(0x152)],'showAll':!![],'count':null,'queuesIds':[],'withUnreadMessages':![],'isNotAssignedUser':![],'includeNotQueueDefined':!![]},'isDark':![]}});return d[z(0x117)](0xc8)[y(0x108)]({'tenant':r,'user':s});};exports[x(0x11d)]=store;const indexUsers=async(c,d)=>{const A=x,B=w,{searchParam:e,pageNumber:f}=c[A(0x11a)],{users:g,count:h,hasMore:i}=await(0x0,AdminListUsersService_1[B(0x10f)])({'searchParam':e,'pageNumber':f});return d['status'](0xc8)['json']({'users':g,'count':h,'hasMore':i});};exports[w(0x131)]=indexUsers;const getUsersByTenant=async(c,d)=>{const C=x,D=x,{tenantId:e}=c[C(0x10d)],f=await(0x0,AdminListUsersByTenantService_1[D(0x10f)])(e);return d['status'](0xc8)[C(0x108)]({'users':f});};exports[w(0x151)]=getUsersByTenant;function a(){const Z=['jAdTY','../helpers/CheckSettings','env','https://www.google.com/recaptcha/api/siteverify?secret=','../services/AdminServices/AdminListChannelsService','update','day','__esModule','🙎🏻‍♂️\x20Signup\x20disabled','updateSettings','../services/AdminServices/AdminListUsersService','3171464vaQNOa','mensal','updateStatusEmpresa','indexUsers','../services/WhatsappService/CreateWhatsAppService','empty\x20captcha','DISCONNECTED','data','store2','../services/AdminServices/AdminCreateTenantService','940068ZTmODq','dueDate','264IqohvE','open','defineProperty','../services/AdminServices/AdminUpdateUserService','user','body','indexChatFlow','maxUsers','captchaToken','7460910nNEGsQ','storeChannel','emit','../services/AdminServices/AdminUpdateTenantService','../services/AdminServices/AdminListTenantsService','yszuM','adminUpdateTenant','value','updateUser','15508ttMipt','indexTenants','timeTest','RECAPTCHA_SECRET_KEY','Ação\x20não\x20permitida','getUsersByTenant','pending','../services/AdminServices/AdminListUsersByTenantService','active','indexSettings','../services/AdminServices/AdminListChatFlowService','signup','enabled','indexChannels','json','1403948JIUKlI','🤖\x20be\x20gone','plano','admin','params','../errors/AppError','default','&response=','recurrence',':user','getIO','moment','post','add','status','../services/UserServices/CreateUserService','476878dPXmFC','query','../services/AdminServices/AdminListSettingsService','maxConnections','store','1iqYxov','1347760DWYUfU','planId','VgysY','ctYqd'];a=function(){return Z;};return a();}const updateUser=async(c,d)=>{const E=x,F=w,e=c[E(0x13f)],{userId:f}=c['params'],g=await(0x0,AdminUpdateUserService_1[F(0x10f)])({'userData':e,'userId':f}),h=(0x0,socket_1[E(0x113)])();if(g){if(E(0x148)===F(0x121))throw new d[(F(0x10f))](F(0x150));else h[F(0x145)](g['tenantId']+F(0x112),{'action':F(0x128),'user':g});}return d['status'](0xc8)[E(0x108)](g);};exports[x(0x14b)]=updateUser;const indexTenants=async(c,d)=>{const G=w,H=x,{tenantId:e}=c[G(0x13e)],f=await(0x0,AdminListTenantsService_1['default'])(e);return d[H(0x117)](0xc8)[H(0x108)](f);};exports[x(0x14d)]=indexTenants;const indexChatFlow=async(c,d)=>{const I=w,J=x,{tenantId:e}=c[I(0x10d)],f=await(0x0,AdminListChatFlowService_1[J(0x10f)])({'tenantId':e});return d[J(0x117)](0xc8)['json'](f);};exports[w(0x140)]=indexChatFlow;const indexSettings=async(c,d)=>{const K=w,L=w,{tenantId:e}=c[K(0x10d)],f=await(0x0,AdminListSettingsService_1[K(0x10f)])(e);return d[K(0x117)](0xc8)[L(0x108)](f);};exports[w(0x155)]=indexSettings;const updateSettings=async(c,d)=>{const M=x,N=x,{tenantId:e}=c[M(0x10d)],{value:f,key:g}=c[N(0x13f)],h=await(0x0,UpdateSettingService_1[M(0x10f)])({'key':g,'value':f,'tenantId':e}),i=(0x0,socket_1[N(0x113)])();return i[M(0x145)](e+':settings',{'action':N(0x128),'setting':h}),d[N(0x117)](0xc8)[N(0x108)](h);};exports[w(0x12c)]=updateSettings;const indexChannels=async(c,d)=>{const O=w,{tenantId:e}=c['query'],f=await(0x0,AdminListChannelsService_1['default'])({'tenantId':e});return d['status'](0xc8)[O(0x108)](f);};exports[w(0x107)]=indexChannels;const storeChannel=async(c,d)=>{const P=x,Q=x,{name:e,tenantId:f,tokenTelegram:g,instagramUser:h,instagramKey:i,type:j,wabaBSP:k,tokenAPI:l}=c[P(0x13f)],m={'name':e,'status':P(0x134),'tenantId':f,'tokenTelegram':g,'instagramUser':h,'instagramKey':i,'type':j,'wabaBSP':k,'tokenAPI':l},n=await(0x0,CreateWhatsAppService_1[Q(0x10f)])(m);return d[Q(0x117)](0xc8)['json'](n);};exports[x(0x144)]=storeChannel;const updateStatusEmpresa=async(c,d)=>{const R=x,S=w,{tenantId:e}=c[R(0x10d)],{status:f}=c[S(0x13f)];if(e=='1')throw new AppError_1[(R(0x10f))](R(0x150));const g=await(0x0,AdminStatusTenant_1[R(0x10f)])({'id':e,'status':f});return d[S(0x117)](0xc8)[S(0x108)](g);};exports[x(0x130)]=updateStatusEmpresa;const adminUpdateTenant=async(c,d)=>{const T=w,U=x,{tenantId:e}=c[T(0x10d)],{name:f,cnpj:g,maxUsers:h,maxConnections:i,planId:j,phone:k,email:l,dueDate:m,recurrence:n}=c['body'];if(e=='1'){if('UJiwJ'===T(0x123))throw new d[(T(0x10f))]('Ação\x20não\x20permitida');else throw new AppError_1[(T(0x10f))]('Ação\x20não\x20permitida');}const o=await(0x0,AdminUpdateTenantService_1['default'])({'id':e,'name':f,'cnpj':g,'maxUsers':h,'maxConnections':i,'planId':j,'phone':k,'email':l,'dueDate':m,'recurrence':n});return d[T(0x117)](0xc8)[U(0x108)](o);};exports[w(0x149)]=adminUpdateTenant;function b(c,d){const e=a();return b=function(f,g){f=f-0x107;let h=e[f];return h;},b(c,d);}const signup=async(c,d)=>{const V=x,W=x;if(await(0x0,CheckSettings_1[V(0x10f)])('allowSignup')!==W(0x158))return W(0x122)!==V(0x122)?g&&h['__esModule']?i:{'default':j}:d[W(0x117)](0x191)[V(0x108)](W(0x12b));if(process[V(0x125)][V(0x14f)]){if(!c[V(0x13f)][W(0x142)])return d[V(0x117)](0x191)[V(0x108)](V(0x133));const g=await axios[W(0x115)](W(0x126)+process[V(0x125)][W(0x14f)]+V(0x110)+c[V(0x13f)][W(0x142)]);if(!g[W(0x135)]['success'])return d[W(0x117)](0x191)[V(0x108)](W(0x10a));}const e=await(0x0,CheckSettings_1[W(0x10f)])(W(0x14e));return c['body'][V(0x139)]=(0x0,moment_1[W(0x10f)])()[V(0x116)](e,V(0x129))['format'](),c[V(0x13f)][V(0x111)]=W(0x12f),c[W(0x13f)][W(0x141)]=c['body'][V(0x10b)][V(0x141)],c[W(0x13f)][V(0x120)]=c[W(0x13f)]['plano'][W(0x14a)],c['body']['maxConnections']=c[W(0x13f)][W(0x10b)][W(0x11c)],(0x0,exports[W(0x136)])(c,d);};exports[w(0x157)]=signup;const store2=async(c,d)=>{const X=x,Y=x,{tenantName:e,status:f,password:g,name:h,cnpj:i,maxUsers:j,maxConnections:k,planId:l,phone:m,email:n,dueDate:o,recurrence:p}=c[X(0x13f)],q=await(0x0,AdminCreateTenantService_1['CreateTenantService'])({'name':e,'status':Y(0x154),'cnpj':i,'maxUsers':j,'maxConnections':k,'planId':l,'phone':m,'email':n,'dueDate':o,'recurrence':p}),r=await(0x0,CreateUserService_1[Y(0x10f)])({'email':n,'password':g,'name':h,'tenantId':q['id'],'profile':'admin','configs':{'filtrosAtendimento':{'searchParam':'','pageNumber':0x1,'status':[X(0x13b),Y(0x152)],'showAll':!![],'count':null,'queuesIds':[],'withUnreadMessages':![],'isNotAssignedUser':![],'includeNotQueueDefined':!![]},'isDark':![]}});return d[Y(0x117)](0xc8)[Y(0x108)]({'tenant':q,'user':r});};exports['store2']=store2;