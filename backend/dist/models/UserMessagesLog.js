'use strict';var a2=b,a7=b;function b(c,d){var e=a();return b=function(f,g){f=f-0x109;var h=e[f];return h;},b(c,d);}(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=-parseInt(a0(0x133))/0x1+parseInt(a0(0x124))/0x2+-parseInt(a0(0x111))/0x3+parseInt(a1(0x10a))/0x4*(-parseInt(a0(0x12e))/0x5)+-parseInt(a0(0x11b))/0x6+parseInt(a0(0x113))/0x7*(-parseInt(a1(0x11a))/0x8)+parseInt(a1(0x127))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xd164b));function a(){var a9=['DataType','__decorate','2720668jHrbGR','decorate','CreatedAt','object','userId','Table','UpdatedAt','4429584bBDrPZ','messageId','8953147DOUFhN','Model','__esModule','default','message','Column','./Message','8TdKTRv','5613678GwGGnw','DATE','./User','defineProperty','sequelize-typescript','createdAt','PrimaryKey','prototype','length','1668386IYZofY','__importDefault','BelongsTo','48376251eqAWXJ','ForeignKey','./Ticket','function','user','ticket','getOwnPropertyDescriptor','10DqnVOt','design:type','AutoIncrement','metadata','AllowNull','300161sDZJrS'];a=function(){return a9;};return a();}var __decorate=this&&this[a2(0x109)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x123)],k=j<0x3?f:h===null?h=Object[a4(0x12d)](f,g):h,l;if(typeof Reflect==='object'&&typeof Reflect['decorate']==='function')k=Reflect[a3(0x10b)](e,f,g,h);else{for(var m=e['length']-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object['defineProperty'](f,g,k),k;},__metadata=this&&this['__metadata']||function(c,d){var a5=a2,a6=a2;if(typeof Reflect===a5(0x10d)&&typeof Reflect[a5(0x131)]===a5(0x12a))return Reflect[a5(0x131)](c,d);},__importDefault=this&&this[a7(0x125)]||function(c){var a8=a7;return c&&c[a8(0x115)]?c:{'default':c};};Object[a2(0x11e)](exports,a7(0x115),{'value':!![]});const sequelize_typescript_1=require(a7(0x11f)),Message_1=__importDefault(require(a7(0x119))),Ticket_1=__importDefault(require(a2(0x129))),User_1=__importDefault(require(a2(0x11d)));let UserMessagesLog=class UserMessagesLog extends sequelize_typescript_1[a7(0x114)]{};__decorate([sequelize_typescript_1[a7(0x121)],sequelize_typescript_1[a2(0x130)],sequelize_typescript_1['Column'],__metadata(a7(0x12f),Number)],UserMessagesLog[a7(0x122)],'id',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x128)])(()=>User_1[a7(0x116)]),sequelize_typescript_1[a7(0x118)],__metadata(a2(0x12f),Number)],UserMessagesLog[a7(0x122)],a2(0x10e),void 0x0),__decorate([(0x0,sequelize_typescript_1['BelongsTo'])(()=>User_1[a2(0x116)]),__metadata(a7(0x12f),User_1['default'])],UserMessagesLog[a7(0x122)],a2(0x12b),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x128)])(()=>Message_1['default']),(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1[a7(0x132)],sequelize_typescript_1[a7(0x118)],__metadata(a7(0x12f),String)],UserMessagesLog[a7(0x122)],a7(0x112),void 0x0),__decorate([(0x0,sequelize_typescript_1[a7(0x126)])(()=>Message_1[a2(0x116)],a2(0x112)),__metadata(a2(0x12f),Message_1[a7(0x116)])],UserMessagesLog[a7(0x122)],a2(0x117),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x128)])(()=>Ticket_1[a2(0x116)]),(0x0,sequelize_typescript_1['Default'])(null),sequelize_typescript_1[a7(0x132)],sequelize_typescript_1[a2(0x118)],__metadata(a2(0x12f),Number)],UserMessagesLog[a2(0x122)],'ticketId',void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x126)])(()=>Ticket_1[a2(0x116)]),__metadata(a2(0x12f),Ticket_1[a7(0x116)])],UserMessagesLog[a2(0x122)],a7(0x12c),void 0x0),__decorate([sequelize_typescript_1[a7(0x10c)],(0x0,sequelize_typescript_1[a7(0x118)])(sequelize_typescript_1[a2(0x134)][a2(0x11c)](0x6)),__metadata('design:type',Date)],UserMessagesLog['prototype'],a2(0x120),void 0x0),__decorate([sequelize_typescript_1[a2(0x110)],(0x0,sequelize_typescript_1[a7(0x118)])(sequelize_typescript_1[a2(0x134)][a2(0x11c)](0x6)),__metadata(a2(0x12f),Date)],UserMessagesLog[a7(0x122)],'updatedAt',void 0x0),UserMessagesLog=__decorate([(0x0,sequelize_typescript_1[a2(0x10f)])({'freezeTableName':!![]})],UserMessagesLog),exports[a7(0x116)]=UserMessagesLog;