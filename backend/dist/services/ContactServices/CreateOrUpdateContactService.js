'use strict';const F=b,H=b;function a(){const K=['__importDefault','320330EQJawN','11723350UUxKsq','20IDRyMo','default','126786teamjM','findOne','../../helpers/socketEmit','create','3MEJigo','1888704dLxTWa','number','messenger','__esModule','2479656PBJUEO','telegram','whatsapp','update','217430XqiuUo','7dQIoxI','2028234MHSAEi','name','contact:update'];a=function(){return K;};return a();}(function(c,d){const D=b,E=b,e=c();while(!![]){try{const f=-parseInt(D(0x1ca))/0x1+-parseInt(E(0x1c6))/0x2*(parseInt(D(0x1b7))/0x3)+-parseInt(E(0x1c8))/0x4*(parseInt(D(0x1c0))/0x5)+-parseInt(E(0x1c2))/0x6+-parseInt(D(0x1c1))/0x7*(parseInt(E(0x1bc))/0x8)+parseInt(D(0x1b8))/0x9+parseInt(D(0x1c7))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x381b6));function b(c,d){const e=a();return b=function(f,g){f=f-0x1b6;let h=e[f];return h;},b(c,d);}var __importDefault=this&&this[F(0x1c5)]||function(c){const G=F;return c&&c[G(0x1bb)]?c:{'default':c};};Object['defineProperty'](exports,H(0x1bb),{'value':!![]});const socketEmit_1=__importDefault(require(H(0x1cc))),Contact_1=__importDefault(require('../../models/Contact')),CreateOrUpdateContactService=async({name:c,number:d,profilePicUrl:e,isGroup:f,tenantId:g,pushname:h,isUser:i,isWAContact:j,email:email='',telegramId:k,instagramPK:l,messengerId:m,extraInfo:extraInfo=[],origem:origem=H(0x1be)})=>{const I=F,J=H,n=f?d:d['replace'](/[^0-9]/g,'');let o=null;origem===I(0x1be)&&(o=await Contact_1[I(0x1c9)][J(0x1cb)]({'where':{'number':n,'tenantId':g}}));origem===J(0x1bd)&&k&&(o=await Contact_1[J(0x1c9)]['findOne']({'where':{'telegramId':k,'tenantId':g}}));origem==='instagram'&&l&&(o=await Contact_1[I(0x1c9)][I(0x1cb)]({'where':{'instagramPK':l,'tenantId':g}}));origem===I(0x1ba)&&m&&(o=await Contact_1[J(0x1c9)][I(0x1cb)]({'where':{'messengerId':m,'tenantId':g}}));if(o){let p;o['name']==o[I(0x1b9)]?p=c:p=o[I(0x1c3)],o[J(0x1bf)]({'name':p,'profilePicUrl':e,'pushname':h,'isUser':i,'isWAContact':j,'telegramId':k,'instagramPK':l,'messengerId':m});}else o=await Contact_1[J(0x1c9)][I(0x1b6)]({'name':c,'number':n,'profilePicUrl':e,'email':email,'isGroup':f,'pushname':h,'isUser':i,'isWAContact':j,'tenantId':g,'extraInfo':extraInfo,'telegramId':k,'instagramPK':l,'messengerId':m});return(0x0,socketEmit_1[I(0x1c9)])({'tenantId':g,'type':I(0x1c4),'payload':o}),o;};exports['default']=CreateOrUpdateContactService;