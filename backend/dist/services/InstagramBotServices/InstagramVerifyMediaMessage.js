'use strict';const w=b,y=b;function b(c,d){const e=a();return b=function(f,g){f=f-0x13e;let h=e[f];return h;},b(c,d);}(function(c,d){const u=b,v=b,e=c();while(!![]){try{const f=-parseInt(u(0x140))/0x1+-parseInt(u(0x168))/0x2+-parseInt(u(0x14d))/0x3*(parseInt(v(0x153))/0x4)+parseInt(v(0x163))/0x5*(parseInt(v(0x162))/0x6)+parseInt(u(0x169))/0x7+-parseInt(v(0x16c))/0x8+parseInt(u(0x143))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xc7928));var __importDefault=this&&this[w(0x151)]||function(c){const x=w;return c&&c[x(0x15f)]?c:{'default':c};};Object['defineProperty'](exports,y(0x15f),{'value':!![]});function a(){const J=['996961kBHMmi','axios','join','10368216FhksOY','item_type','video_versions','toString','arquivo','url','image_versions2','GET','tenantId','audio_src','2185698cjrQFr','finish','áudio','audio','__importDefault','text','4WZbxMp','ERROR\x20DONWLOAD','../MessageServices/CreateMessageService','sended','vídeo','pipe','error','data','message','media_type','path','public','__esModule','update','split','4009446YPBRzu','5NvfIoi','createWriteStream','imagem','qtKOS','length','365546DpdngD','7428659UnMGTi','media','default','1246032inDbTB','caption','video','getTime','voice_media'];a=function(){return J;};return a();}const path_1=require(y(0x15d)),fs_1=require('fs'),axios_1=__importDefault(require(w(0x141))),CreateMessageService_1=__importDefault(require(y(0x155))),getExt=c=>{const z=y,A=y,d=c[z(0x161)]('?'),e=d[0x0][z(0x161)]('/'),f=e[e[A(0x167)]-0x1][z(0x161)]('.');return f[0x1];},downloadFile=async(c,d)=>{const B=w,C=y,e=await(0x0,axios_1[B(0x16b)])({'url':c[C(0x146)](),'method':C(0x14a),'responseType':'stream'});await new Promise((f,g)=>{const D=C,E=B;e[D(0x15a)][D(0x158)]((0x0,fs_1[D(0x164)])(d))['on'](D(0x14e),async()=>f(!![]))['on']('error',h=>{const F=D,G=D;console[F(0x159)](F(0x154),h),g(new Error(h));});});},VerifyMediaMessage=async(c,d,e,f)=>{const H=w,I=y;let g,h,i,j='application',k=H(0x147);if(c[H(0x15b)]?.[H(0x16a)]?.[I(0x15c)]===0x1){if(H(0x166)!==I(0x166))return g&&h['__esModule']?i:{'default':j};else h=c[H(0x15b)][I(0x16a)],[g]=c['message'][I(0x16a)][H(0x149)]['candidates'],i=getExt(g[I(0x148)]),j='image',k=H(0x165);}c[I(0x15b)]?.[I(0x16a)]?.[I(0x15c)]===0x2&&(h=c[H(0x15b)][H(0x16a)],[g]=c[H(0x15b)][I(0x16a)][I(0x145)],i=getExt(g[I(0x148)]),j=I(0x16e),k=I(0x157));c['message']?.[H(0x144)]==='voice_media'&&(h=c['message'][H(0x13f)]['media'],g=c[I(0x15b)][H(0x13f)][H(0x16a)]['audio'],i=getExt(g[H(0x14c)]),j=I(0x150),k=H(0x14f));const l=e['id']+'_'+h['id']+'_'+new Date()[H(0x13e)]()+'.'+i,m=(0x0,path_1[I(0x142)])(__dirname,'..','..','..',I(0x15e),l),n=c[I(0x15b)]['item_type']===I(0x13f)?g[I(0x14c)]:g['url'];await downloadFile(n,m);const o={'messageId':String(c['message']?.['item_id']),'ticketId':e['id'],'contactId':d?undefined:f['id'],'body':c[H(0x15b)]?.[I(0x152)]||c[H(0x15b)]?.[I(0x16d)]||k,'fromMe':d,'read':d,'mediaUrl':l,'mediaType':j,'quotedMsgId':'','timestamp':new Date()[H(0x13e)](),'status':d?H(0x156):'received'};await e[H(0x160)]({'lastMessage':c[H(0x15b)]?.[I(0x152)]||c['message']?.[I(0x16d)]||k,'lastMessageAt':new Date()[H(0x13e)](),'answered':d||![]});const p=await(0x0,CreateMessageService_1[H(0x16b)])({'messageData':o,'tenantId':e[H(0x14b)]});return p;};exports['default']=VerifyMediaMessage;