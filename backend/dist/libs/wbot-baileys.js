'use strict';const I=b,J=b;(function(c,d){const G=b,H=b,e=c();while(!![]){try{const f=parseInt(G(0x201))/0x1+parseInt(G(0x22a))/0x2*(-parseInt(G(0x1f5))/0x3)+-parseInt(G(0x22e))/0x4+parseInt(G(0x211))/0x5*(-parseInt(H(0x20d))/0x6)+parseInt(G(0x1ed))/0x7+-parseInt(H(0x21b))/0x8+parseInt(G(0x20e))/0x9;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0xf2b0b));var __createBinding=this&&this[I(0x210)]||(Object[J(0x205)]?function(c,d,e,f){const K=I,L=I;if(f===undefined)f=e;var g=Object[K(0x214)](d,e);(!g||(L(0x1ce)in g?!d[K(0x1f3)]:g[K(0x20a)]||g['configurable']))&&(g={'enumerable':!![],'get':function(){return d[e];}}),Object[L(0x1eb)](c,f,g);}:function(c,d,e,f){if(f===undefined)f=e;c[f]=d[e];}),__setModuleDefault=this&&this[J(0x1d2)]||(Object[J(0x205)]?function(c,d){const M=I;Object['defineProperty'](c,M(0x207),{'enumerable':!![],'value':d});}:function(c,d){c['default']=d;}),__importStar=this&&this[J(0x22b)]||function(c){const N=I,O=J;if(c&&c[N(0x1f3)])return c;var d={};if(c!=null){for(var e in c)if(e!=='default'&&Object[N(0x1d4)][N(0x218)][N(0x212)](c,e))__createBinding(d,c,e);}return __setModuleDefault(d,c),d;},__importDefault=this&&this[J(0x217)]||function(c){const P=I;return c&&c[P(0x1f3)]?c:{'default':c};};Object[I(0x1eb)](exports,I(0x1f3),{'value':!![]}),exports[I(0x1e3)]=exports['removeWbot']=exports['getWbot']=void 0x0;const Sentry=__importStar(require(J(0x1dc))),baileys_1=__importStar(require(I(0x1d5))),Whatsapp_1=__importDefault(require(I(0x1d8))),logger_1=__importDefault(require(J(0x1da))),useMultiFileAuthState_1=require(J(0x1e9)),AppError_1=__importDefault(require(I(0x22c))),node_cache_1=__importDefault(require(J(0x1cc))),socket_1=require(J(0x1f0)),StartWhatsAppSession_1=require(J(0x228)),cache_1=require('./cache'),loggerBaileys=logger_1[J(0x207)][I(0x232)]({}),logger=logger_1[I(0x207)]['child']({});loggerBaileys[I(0x225)]=I(0x221);const sessions=[],retriesQrCodeMap=new Map(),getWbot=c=>{const Q=J,R=I,d=sessions[Q(0x21c)](e=>e['id']===c);if(d===-0x1){if(R(0x1f4)===Q(0x234))i[Q(0x22f)](j),k[Q(0x1d1)](l),m(n);else throw new AppError_1['default'](R(0x203));}return sessions[d];};exports['getWbot']=getWbot;function b(c,d){const e=a();return b=function(f,g){f=f-0x1cc;let h=e[f];return h;},b(c,d);}const removeWbot=async(c,d=!![])=>{const S=J,T=J;try{if(S(0x1df)!==S(0x1fe)){const e=sessions['findIndex'](f=>f['id']===c);if(e!==-0x1){if(T(0x20f)!==T(0x20f))return![];else d&&(sessions[e][S(0x21a)](),sessions[e]['ws'][T(0x1fc)]()),sessions[T(0x226)](e,0x1);}}else g[h][T(0x21a)](),i[j]['ws']['close']();}catch(h){S(0x1f7)!=='DxQKg'?logger[S(0x221)](h):e={'viewOnceMessageV2':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},...f}}};}};exports[I(0x1f8)]=removeWbot;function a(){const a2=['sessions:','removeAllListeners','./socket','UQbko','info','__esModule','HYEuw','90lIAVAP','GzbXu','VUjGj','removeWbot','emit','Desktop','YhpJU','close','join','wyaIF','DISCONNECTED','tenantId','958175CMjQXM','MUSQc','ERR_WAPP_NOT_INITIALIZED','cacheLayer','create','qrcode','default','priIl','using\x20WA\x20v','writable','set','\x20Connection\x20Update\x20','736998QBDifN','38766051PZEIrG','RjEjH','__createBinding','50hmyKFg','call',',\x20isLatest:\x20','getOwnPropertyDescriptor','open','statusCode','__importDefault','hasOwnProperty','creds.update','logout','14906544bpWPzB','findIndex','fetchLatestBaileysVersion','appropriate','user','lfvJf','error','ZlvVD','loggedOut','hlblb','level','splice','connection.update','../services/WbotServices/StartWhatsAppSession','templateMessage','104124nmQDIK','__importStar','../errors/AppError',':whatsappSession','6311360tcagED','captureException','buttonsMessage','YrPgC','child','delFromPattern','FiRRT','node-cache','Session\x20QRCode\x20Generate\x20','get','Trfuc','keys','log','__setModuleDefault','isJidBroadcast','prototype','@whiskeysockets/baileys','output','PENDING','../models/Whatsapp','update','@whiskeysockets/baileys/lib/Utils/logger','@newsletter','@sentry/node','CONNECTED','endsWith','CCJan','StartWhatsAppSession','push','Whqla','initWASocket','readySession','split','makeCacheableSignalKeyStore','YqUVe','DisconnectReason','../helpers/useMultiFileAuthState','Browsers','defineProperty','findOne','13719251whEOJo'];a=function(){return a2;};return a();}const initWASocket=async c=>{return new Promise(async(d,e)=>{const U=b,V=b;try{U(0x1fb)===U(0x1e2)?(g['id']=h['id'],i['push'](j)):((async()=>{const W=U,X=V,g=(0x0,socket_1['getIO'])(),h=await Whatsapp_1['default'][W(0x1ec)]({'where':{'id':c['id']}});if(!h)return;const {id:i,name:j}=h,{version:k,isLatest:l}=await(0x0,baileys_1[X(0x21d)])();logger[W(0x1f2)](W(0x209)+k[W(0x1fd)]('.')+X(0x213)+l),logger[W(0x1f2)]('Starting\x20session\x20'+j);let m=0x0,n=null;const {state:o,saveCreds:p}=await(0x0,useMultiFileAuthState_1['useMultiFileAuthState'])(c),q=new node_cache_1['default'](),r=new node_cache_1[(W(0x207))]();n=(0x0,baileys_1[W(0x207)])({'logger':loggerBaileys,'printQRInTerminal':![],'browser':baileys_1[W(0x1ea)][X(0x21e)](X(0x1fa)),'auth':{'creds':o['creds'],'keys':(0x0,baileys_1[W(0x1e6)])(o[X(0x1d0)],logger)},'version':k,'defaultQueryTimeoutMs':0xea60,'msgRetryCounterCache':q,'generateHighQualityLinkPreview':!![],'userDevicesCache':r,'transactionOpts':{'maxCommitRetries':0x1,'delayBetweenTriesMs':0xa},'shouldSyncHistoryMessage':s=>{return![];},'shouldIgnoreJid':s=>(0x0,baileys_1[W(0x1d3)])(s)||s?.[X(0x1de)](X(0x1db)),'patchMessageBeforeSending':s=>{const Y=X,Z=X,t=!!(s[Y(0x230)]||s[Y(0x229)]||s['listMessage']);if(t){if(Y(0x231)!==Z(0x1cf))s={'viewOnceMessageV2':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},...s}}};else throw new d[(Y(0x207))](Y(0x203));}return s;}}),n['ev']['on'](W(0x227),async({connection:s,lastDisconnect:t,qr:u})=>{const a0=W,a1=W;if(a0(0x208)===a1(0x1f1)){if(k===l)m=n;o[p]=q[r];}else{logger[a0(0x1f2)]('Socket\x20\x20'+j+a0(0x20c)+(s||'')+'\x20'+(t||''));s===a1(0x1fc)&&(a1(0x202)===a0(0x202)?(t?.['error']?.[a1(0x1d6)]?.[a0(0x216)]===0x193&&(await c['update']({'status':a1(0x1d7),'session':''}),await cache_1[a0(0x204)][a0(0x233)](a0(0x1ee)+c['id']+':*'),g['emit'](c[a1(0x200)]+a0(0x22d),{'action':'update','session':c}),(0x0,exports[a0(0x1f8)])(i,![])),t?.[a0(0x221)]?.[a1(0x1d6)]?.[a0(0x216)]!==baileys_1[a1(0x1e8)][a1(0x223)]?((0x0,exports[a0(0x1f8)])(i,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[a0(0x1e0)])(c),0x7d0)):(await c[a1(0x1d9)]({'status':a0(0x1d7),'session':''}),await cache_1['cacheLayer'][a0(0x233)]('sessions:'+c['id']+':*'),g[a1(0x1f9)](c['tenantId']+a1(0x22d),{'action':a1(0x1d9),'session':c}),(0x0,exports[a1(0x1f8)])(i,![]),setTimeout(()=>(0x0,StartWhatsAppSession_1[a0(0x1e0)])(c),0x7d0))):f={'enumerable':!![],'get':function(){return i[j];}});if(s===a0(0x215)){const x=n[a1(0x21f)];let y=x['id'][a1(0x1e5)]('@')[0x0];y=y[a1(0x1e5)](':')[0x0],await c[a1(0x1d9)]({'status':a1(0x1dd),'qrcode':'','number':y,'retries':0x0}),g[a0(0x1f9)](c['tenantId']+a1(0x22d),{'action':a0(0x1d9),'session':c}),g['emit'](c[a0(0x200)]+a1(0x22d),{'action':a1(0x1e4),'session':c});const z=sessions[a1(0x21c)](A=>A['id']===c['id']);z===-0x1&&(n['id']=c['id'],sessions[a0(0x1e1)](n)),d(n);}if(u!==undefined){if('JPXED'===a0(0x222))(0x0,h[a1(0x1f8)])(i,![]),j(()=>(0x0,m[a0(0x1e0)])(n),0x7d0);else{if(retriesQrCodeMap[a1(0x1ce)](i)&&retriesQrCodeMap[a1(0x1ce)](i)>=0x3)await h[a1(0x1d9)]({'status':a0(0x1ff),'qrcode':''}),await cache_1[a1(0x204)][a0(0x233)](a0(0x1ee)+c['id']+':*'),g[a1(0x1f9)](c[a1(0x200)]+a0(0x22d),{'action':a0(0x1d9),'session':h}),n['ev'][a0(0x1ef)]('connection.update'),n['ws'][a0(0x1fc)](),n=null,retriesQrCodeMap['delete'](i);else{if(a1(0x220)===a1(0x1f6))f[a0(0x1eb)](g,a1(0x207),{'enumerable':!![],'value':h});else{logger[a1(0x1f2)](a0(0x1cd)+j),retriesQrCodeMap[a0(0x20b)](i,m+=0x1),await c[a1(0x1d9)]({'qrcode':u,'status':a0(0x206),'retries':0x0});const C=sessions[a1(0x21c)](D=>D['id']===c['id']);C===-0x1&&(n['id']=c['id'],sessions['push'](n)),g['emit'](c['tenantId']+a1(0x22d),{'action':'update','session':c});}}}}}}),n['ev']['on'](X(0x219),p);})());}catch(g){if(V(0x1e7)!==V(0x224))Sentry[U(0x22f)](g),console[U(0x1d1)](g),e(g);else{const i=g[V(0x21c)](n=>n['id']===k);if(i===-0x1)throw new k[(U(0x207))]('ERR_WAPP_NOT_INITIALIZED');return j[i];}}});};exports[I(0x1e3)]=initWASocket;