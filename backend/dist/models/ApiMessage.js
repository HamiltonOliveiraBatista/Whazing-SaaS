'use strict';const a2=b,a5=b;(function(c,d){const a0=b,a1=b,e=c();while(!![]){try{const f=-parseInt(a0(0xe6))/0x1+-parseInt(a1(0xee))/0x2+-parseInt(a1(0xec))/0x3*(parseInt(a1(0x11a))/0x4)+-parseInt(a0(0x123))/0x5*(parseInt(a1(0xe7))/0x6)+parseInt(a1(0x117))/0x7*(parseInt(a0(0xf3))/0x8)+parseInt(a0(0xfd))/0x9+parseInt(a0(0x113))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x5b215));var __decorate=this&&this[a2(0x118)]||function(e,f,g,h){const a3=a2,a4=a2;var j=arguments[a3(0x107)],k=j<0x3?f:h===null?h=Object[a3(0x121)](f,g):h,l;if(typeof Reflect===a3(0x106)&&typeof Reflect[a4(0x109)]===a3(0x122))k=Reflect['decorate'](e,f,g,h);else{for(var m=e[a3(0x107)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this[a2(0x108)]||function(c,d){const a6=a5,a7=a2;if(typeof Reflect===a6(0x106)&&typeof Reflect[a6(0x103)]==='function')return Reflect[a7(0x103)](c,d);},__importDefault=this&&this['__importDefault']||function(c){const a8=a2;return c&&c[a8(0xf2)]?c:{'default':c};};Object[a2(0xea)](exports,a2(0xf2),{'value':!![]});function b(c,d){const e=a();return b=function(f,g){f=f-0xe6;let h=e[f];return h;},b(c,d);}const sequelize_typescript_1=require('sequelize-typescript'),uuid_1=require(a2(0x102)),Queue_1=__importDefault(require('../libs/Queue')),Tenant_1=__importDefault(require(a2(0x115))),Whatsapp_1=__importDefault(require(a5(0xfe)));function a(){const ab=['uuid','metadata','sessionId','design:type','object','length','__metadata','decorate','design:paramtypes','prototype','JSONB','updatedAt','INTEGER','urlMessageStatus','body','timestamp','UpdatedAt','7336430EDoiZL','tenantId','./Tenant','DataType','3101XqrUBt','__decorate','Default','3272NfBitO','number','Model','AllowNull','externalKey','default','add','getOwnPropertyDescriptor','function','25UppKuj','20637CKCMxw','413778ZleswK','TEXT','WebHooksAPI','defineProperty','tenant','1764szCPdL','session','486318KKgYhL','UUID','DATE','authToken','__esModule','8488RYcCtO','Column','PrimaryKey','BelongsTo','messageId','messageWA','createdAt','type','ack','ForeignKey','2332782uWiNZR','./Whatsapp','apiConfig','HookMessage','mediaName'];a=function(){return ab;};return a();}class ApiMessage extends sequelize_typescript_1[a2(0x11c)]{static[a2(0x100)](c){const a9=a5,aa=a2;if(c?.[a9(0xff)]?.[aa(0x10f)]){const d={'ack':c[a9(0xfb)],'body':c[a9(0x110)],'messageId':c[aa(0xf7)],'number':c[aa(0x11b)],'externalKey':c[a9(0x11e)],'type':'hookMessageStatus','authToken':c[aa(0xf1)]};Queue_1[aa(0x11f)][aa(0x120)](aa(0xe9),{'url':c[aa(0xff)]['urlMessageStatus'],'type':d[aa(0xfa)],'payload':d});}}}__decorate([sequelize_typescript_1[a2(0xf5)],(0x0,sequelize_typescript_1[a2(0x119)])(uuid_1['v4']),(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x116)][a5(0xef)]),__metadata(a2(0x105),String)],ApiMessage[a2(0x10b)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0xfc)])(()=>Whatsapp_1[a5(0x11f)]),sequelize_typescript_1[a5(0xf4)],__metadata(a2(0x105),Number)],ApiMessage[a2(0x10b)],a2(0x104),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0xf6)])(()=>Whatsapp_1[a2(0x11f)]),__metadata(a5(0x105),Whatsapp_1['default'])],ApiMessage[a5(0x10b)],a5(0xed),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x119)])(0x0),sequelize_typescript_1['Column'],__metadata(a2(0x105),Number)],ApiMessage[a2(0x10b)],a5(0xfb),void 0x0),__decorate([sequelize_typescript_1['PrimaryKey'],sequelize_typescript_1['Column'],__metadata('design:type',String)],ApiMessage['prototype'],a5(0xf7),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0xf4)])(sequelize_typescript_1[a5(0x116)][a5(0xe8)]),__metadata(a5(0x105),String)],ApiMessage[a5(0x10b)],a5(0x110),void 0x0),__decorate([(0x0,sequelize_typescript_1['AllowNull'])(![]),sequelize_typescript_1['Column'],__metadata(a2(0x105),String)],ApiMessage[a5(0x10b)],a2(0x11b),void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata(a5(0x105),String)],ApiMessage[a2(0x10b)],a2(0x101),void 0x0),__decorate([sequelize_typescript_1[a2(0xf4)],__metadata(a5(0x105),String)],ApiMessage[a5(0x10b)],'mediaUrl',void 0x0),__decorate([sequelize_typescript_1[a2(0xf4)],__metadata(a2(0x105),String)],ApiMessage[a5(0x10b)],a5(0x11e),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x119)])(null),sequelize_typescript_1[a5(0x11d)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1['DataType'][a5(0x10e)]),__metadata(a2(0x105),Number)],ApiMessage['prototype'],a2(0x111),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x119)])(null),sequelize_typescript_1[a2(0x11d)],(0x0,sequelize_typescript_1[a5(0xf4)])(sequelize_typescript_1[a2(0x116)]['JSONB']),__metadata(a5(0x105),Object)],ApiMessage['prototype'],a5(0xf8),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x119)])(null),sequelize_typescript_1[a2(0x11d)],(0x0,sequelize_typescript_1['Column'])(sequelize_typescript_1[a2(0x116)][a5(0x10c)]),__metadata('design:type',Object)],ApiMessage[a2(0x10b)],a2(0xff),void 0x0),__decorate([sequelize_typescript_1['CreatedAt'],(0x0,sequelize_typescript_1[a2(0xf4)])(sequelize_typescript_1[a2(0x116)][a5(0xf0)](0x6)),__metadata('design:type',Date)],ApiMessage['prototype'],a5(0xf9),void 0x0),__decorate([sequelize_typescript_1[a2(0x112)],(0x0,sequelize_typescript_1[a5(0xf4)])(sequelize_typescript_1[a5(0x116)]['DATE'](0x6)),__metadata(a5(0x105),Date)],ApiMessage[a5(0x10b)],a5(0x10d),void 0x0),__decorate([(0x0,sequelize_typescript_1['ForeignKey'])(()=>Tenant_1[a2(0x11f)]),sequelize_typescript_1['Column'],__metadata('design:type',Number)],ApiMessage[a5(0x10b)],a2(0x114),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0xf6)])(()=>Tenant_1['default']),__metadata(a2(0x105),Tenant_1[a2(0x11f)])],ApiMessage[a5(0x10b)],a5(0xeb),void 0x0),__decorate([sequelize_typescript_1['AfterCreate'],sequelize_typescript_1['AfterUpdate'],__metadata(a2(0x105),Function),__metadata(a2(0x10a),[Object]),__metadata('design:returntype',void 0x0)],ApiMessage,a2(0x100),null),exports[a5(0x11f)]=ApiMessage;