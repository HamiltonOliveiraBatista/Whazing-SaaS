'use strict';function a(){var a9=['AutoIncrement','Table','prototype','user','6UHaFUJ','3023091rKphBF','BelongsTo','Model','userId','decorate','design:type','metadata','updatedAt','94508ZzDfZm','2314932aKRDIO','Column','2027516fegflN','./User','__esModule','__decorate','1730408BKaNTe','default','PrimaryKey','Default','ForeignKey','object','defineProperty','getOwnPropertyDescriptor','tenantId','9789129wvLUal','isActive','CreatedAt','UpdatedAt','function','1113677YwDvCe','createdAt','length','__metadata','25QgDzNb'];a=function(){return a9;};return a();}var a2=b,a5=b;(function(c,d){var a0=b,a1=b,e=c();while(!![]){try{var f=parseInt(a0(0x1e4))/0x1+-parseInt(a1(0x1f9))/0x2+-parseInt(a1(0x1f7))/0x3+-parseInt(a1(0x1f6))/0x4*(-parseInt(a0(0x1e8))/0x5)+parseInt(a0(0x1ed))/0x6*(parseInt(a1(0x1df))/0x7)+parseInt(a0(0x1fd))/0x8+-parseInt(a1(0x1ee))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xb110b));function b(c,d){var e=a();return b=function(f,g){f=f-0x1d7;var h=e[f];return h;},b(c,d);}var __decorate=this&&this[a2(0x1fc)]||function(e,f,g,h){var a3=a2,a4=a2,j=arguments[a3(0x1e6)],k=j<0x3?f:h===null?h=Object[a4(0x1dd)](f,g):h,l;if(typeof Reflect===a3(0x1db)&&typeof Reflect['decorate']==='function')k=Reflect[a4(0x1f2)](e,f,g,h);else{for(var m=e[a3(0x1e6)]-0x1;m>=0x0;m--)if(l=e[m])k=(j<0x3?l(k):j>0x3?l(f,g,k):l(f,g))||k;}return j>0x3&&k&&Object[a3(0x1dc)](f,g,k),k;},__metadata=this&&this[a2(0x1e7)]||function(c,d){var a6=a5,a7=a5;if(typeof Reflect===a6(0x1db)&&typeof Reflect[a6(0x1f4)]===a6(0x1e3))return Reflect[a7(0x1f4)](c,d);},__importDefault=this&&this['__importDefault']||function(c){var a8=a5;return c&&c[a8(0x1fb)]?c:{'default':c};};Object[a5(0x1dc)](exports,a5(0x1fb),{'value':!![]});const sequelize_typescript_1=require('sequelize-typescript'),Tenant_1=__importDefault(require('./Tenant')),User_1=__importDefault(require(a5(0x1fa)));let Group=class Group extends sequelize_typescript_1[a2(0x1f0)]{};__decorate([sequelize_typescript_1[a2(0x1d8)],sequelize_typescript_1[a5(0x1e9)],sequelize_typescript_1[a5(0x1f8)],__metadata(a2(0x1f3),Number)],Group[a5(0x1eb)],'id',void 0x0),__decorate([sequelize_typescript_1['Column'],__metadata('design:type',String)],Group[a2(0x1eb)],'group',void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1d9)])(!![]),sequelize_typescript_1[a5(0x1f8)],__metadata(a5(0x1f3),Boolean)],Group[a5(0x1eb)],a2(0x1e0),void 0x0),__decorate([sequelize_typescript_1[a5(0x1e1)],__metadata(a5(0x1f3),Date)],Group[a2(0x1eb)],a5(0x1e5),void 0x0),__decorate([sequelize_typescript_1[a5(0x1e2)],__metadata(a2(0x1f3),Date)],Group['prototype'],a5(0x1f5),void 0x0),__decorate([(0x0,sequelize_typescript_1[a2(0x1da)])(()=>User_1[a2(0x1d7)]),sequelize_typescript_1[a2(0x1f8)],__metadata(a5(0x1f3),Number)],Group['prototype'],a2(0x1f1),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1ef)])(()=>User_1['default']),__metadata(a5(0x1f3),User_1[a5(0x1d7)])],Group['prototype'],a5(0x1ec),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1da)])(()=>Tenant_1[a2(0x1d7)]),sequelize_typescript_1[a2(0x1f8)],__metadata(a2(0x1f3),Number)],Group[a2(0x1eb)],a2(0x1de),void 0x0),__decorate([(0x0,sequelize_typescript_1[a5(0x1ef)])(()=>Tenant_1[a2(0x1d7)]),__metadata('design:type',Tenant_1[a5(0x1d7)])],Group['prototype'],'tenant',void 0x0),Group=__decorate([sequelize_typescript_1[a5(0x1ea)]],Group),exports[a2(0x1d7)]=Group;