<<<<<<< HEAD
﻿function ckcpt(){var a="";return a+="select_a.swf,2,2,-200,-30,2,1|",a+="select_b.swf,1,1,-180,-100,3,0|",a+="Proportion.swf,2,2,-240,-36,2|",a+="downloadspeeds.swf,2,2,-370,-28,2|"}function ckstyle(){var a={cpath:"",language:"",flashvars:"{s:2,p:1}",setup:"1,1,1,1,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,0,10,3,0,1,2,3000,0,0,0,1,1,1,1,1,1,1,250,0",pm_bg:"0x000000,100,230,180",mylogo:null,pm_mylogo:"1,1,-250,-190",logo:null,pm_logo:"2,0,-100,20",control_rel:",,0",control_pv:"Preview.swf,105,2000",pm_repc:"",pm_spac:"|",pm_fpac:"file->f",pm_advtime:"2,0,-110,10,0,300,0",pm_advstatus:"1,2,2,-200,-40",pm_advjp:"1,0,2,2,-100,-40",pm_padvc:"2,0,-10,-10",pm_advms:"2,2,50,50",pm_zip:"1,1,-20,-8,1,0,0",pm_advmarquee:"1,2,130,-23,130,0,0,0x000000,50,0,20,1,15,2000",advmarquee:escape('{a href="http://www.77777av.com"}{font color="#FFFFFF" size="12"}随时随地云播放由隆虎科技网(www.77777av.com)提供技术支持，空间由京东商城提供，技术QQ:2097197908，欢迎您的使用。{/font}{/a}'),myweb:escape("7daa475e39ceba0deaad5dbba4810918,网络同步电视播放器,http://tv.lhkjw.com,Version:3.9"),cpt_list:ckcpt()};return a}!function(){var a={_K_:function(a){return document.getElementById(a)},getVideo:function(a){var b,c,d="";if(a)for(b=0;b<a.length;b++)c=a[b].split("->"),c&&c[0]&&(d+='<source src="'+c[0]+'"'),2==c.length&&c[1]&&(d+=' type="'+c[1]+'"'),d+=">";return d},getVars:function(a,b){return a[b]?a[b]:void 0},getParams:function(a){var b="";return a&&(1==this.getVars(a,"p")&&1!=this.getVars(a,"m")&&(b+=' autoplay="autoplay"'),1==this.getVars(a,"e")&&(b+=' loop="loop"'),1==this.getVars(a,"m")&&(b+=' preload="meta"'),this.getVars(a,"i")&&(b+=' poster="'+this.getVars(a,"i")+'"')),b},browser:function(){var a=function(a){var b,c=new Object,d={msie:/msie/.test(a)&&!/opera/.test(a),opera:/opera/.test(a),safari:/webkit/.test(a)&&!/chrome/.test(a),firefox:/firefox/.test(a),chrome:/chrome/.test(a)},e="";for(b in d)if(d[b]){e="safari"==b?"version":b;break}return d.version=e&&RegExp("(?:"+e+")[\\/: ]([\\d.]+)").test(a)?RegExp.$1:"0",d.ie=d.msie,d.ie6=d.msie&&6==parseInt(d.version,10),d.ie7=d.msie&&7==parseInt(d.version,10),d.ie8=d.msie&&8==parseInt(d.version,10),c.B=e,c.V=d.version,c}(window.navigator.userAgent.toLowerCase());return a},Platform:function(){var a,b,c="",d=navigator.userAgent;navigator.appVersion,a={iPhone:d.indexOf("iPhone")>-1||d.indexOf("Mac")>-1,iPad:d.indexOf("iPad")>-1,ios:!!d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:d.indexOf("Android")>-1||d.indexOf("Linux")>-1,webKit:d.indexOf("AppleWebKit")>-1,gecko:d.indexOf("Gecko")>-1&&-1==d.indexOf("KHTML"),presto:d.indexOf("Presto")>-1,trident:d.indexOf("Trident")>-1,mobile:!!d.match(/AppleWebKit.*Mobile.*/)||!!d.match(/AppleWebKit/),webApp:-1==d.indexOf("Safari")};for(b in a)if(a[b]){c=b;break}return c},getpath:function(a){var b,c,d,e,f,g,h=unescape(window.location.href).replace("file:///",""),j=parseInt(document.location.port),k=document.location.protocol+"//"+document.location.hostname,l="",m="",n="",o=0,p=a.split("//");for(p.length>0&&(l=p[0]+"//"),b="http|https|ftp|rtsp|mms|ftp|rtmp",c=b.split("|"),80!=j&&j&&(k+=":"+j),i=0;i<c.length;i++)if(c[i]+"://"==l){o=1;break}if(0==o)if("/"==a.substr(0,1))n=k+a;else{for(m=h.substring(0,h.lastIndexOf("/")+1).replace("\\","/"),d=a.replace("../","./"),k=d.split("./"),e=k.length,p=d.replace("./",""),f=m.split("/"),g=f.length-e,i=0;g>i;i++)n+=f[i]+"/";n+=p}else n=a;return n},Flash:function(){var a,b,c,d,e=!1,f=0;if(document.all)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=!0,b=a.GetVariable("$version"),f=parseInt(b.split(" ")[1].split(",")[0])}catch(g){}else if(navigator.plugins&&navigator.plugins.length>0&&(a=navigator.plugins["Shockwave Flash"]))for(e=!0,c=a.description.split(" "),d=0;d<c.length;++d)isNaN(parseInt(c[d]))||(f=parseInt(c[d]));return{f:e,v:f}},embedHTML5:function(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q="",r=this.browser().B;for(q=this.browser().V,h=q.split("."),i=h[0],j=r+q,k=r+i,l="",m=!1,n=this.Flash().f,o=!1,g||(g=["iPad","iPhone","ios"]),p=0;p<g.length;p++)if(l=g[p],l.indexOf("+")>-1?(l=l.split("+")[0],o=!0):o=!1,this.Platform()==l||j==l||k==l||r==l){if(!o){m=!0;break}if(!n){m=!0;break}}m&&(q='<video controls id="'+b+'" width="'+c+'" height="'+d+'"'+this.getParams(f)+">"+this.getVideo(e)+"</video>",this._K_(a).innerHTML=q,this._K_(a).style.width=c+"px",this._K_(a).style.height=d+"px",this._K_(a).style.backgroundColor="#000")},getflashvars:function(a){var b,c="",d=0;if(a)for(b in a)d>0&&(c+="&"),"f"==b&&a[b]&&!ckstyle().pm_repc&&(a[b]=this.getpath(a[b]),a[b].indexOf("&")>-1&&(a[b]=encodeURIComponent(a[b]))),"y"==b&&a[b]&&(a[b]=this.getpath(a[b])),c+=b+"="+a[b],d++;return c},getparam:function(a){var b,c,d="",e="",f={allowScriptAccess:"always",allowFullScreen:!0,quality:"high",bgcolor:"#000"};if(a)for(b in a)f[b]=a[b];for(c in f)d+=c+'="'+f[c]+'" ',e+='<param name="'+c+'" value="'+f[c]+'" />';return d=d.replace("movie=","src="),{w:d,v:e}},getObjectById:function(a){var b,c=null,d=this._K_(a),e="embed";return d&&"OBJECT"==d.nodeName&&("undefined"!=typeof d.SetVariable?c=d:(b=d.getElementsByTagName(e)[0],b&&(c=b))),c},embedSWF:function(a,b,c,d,e,f,g){c||(c="ckplayer_a1"),g||(g={});var h="undefined",i=document,j="http://www.macromedia.com/go/getflashplayer",k='<a href="'+j+'" target="_blank">请点击此处下载安装最新的flash插件</a>',l={w:"您的网页不符合w3c标准，无法显示播放器",f:"您没有安装flash插件，无法播放视频，"+k,v:"您的flash插件版本过低，无法播放视频，"+k},m=typeof i.getElementById!=h&&typeof i.getElementsByTagName!=h&&typeof i.createElement!=h,n='id="'+c+'" name="'+c+'" ',o="",p="";g.movie=a,g.flashvars=this.getflashvars(f),o+='<object  pluginspage="http://www.macromedia.com/go/getflashplayer" ',o+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',o+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ',o+='width="'+d+'" ',o+='height="'+e+'" ',o+=n,o+='align="middle">',o+=this.getparam(g).v,o+="<embed ",o+=this.getparam(g).w,o+=' width="'+d+'" height="'+e+'" name="'+c+'" id="'+c+'" align="middle" '+n,o+='type="application/x-shockwave-flash" pluginspage="'+j+'" />',o+="</object>",p=m?this.Flash().f?this.Flash().v<10?l.f:o:l.f:l.w,p&&(this._K_(b).innerHTML=p,this._K_(b).style.color="#FFDD00")}};window.CKobject=a}();var swfobject=function(){function a(){var a,b,c;if(!R){try{a=K.getElementsByTagName("body")[0].appendChild(q("span")),a.parentNode.removeChild(a)}catch(d){return}for(R=!0,b=N.length,c=0;b>c;c++)N[c]()}}function b(a){R?a():N[N.length]=a}function c(a){if(typeof J.addEventListener!=C)J.addEventListener("load",a,!1);else if(typeof K.addEventListener!=C)K.addEventListener("load",a,!1);else if(typeof J.attachEvent!=C)r(J,"onload",a);else if("function"==typeof J.onload){var b=J.onload;J.onload=function(){b(),a()}}else J.onload=a}function d(){M?e():f()}function e(){var a,b,c=K.getElementsByTagName("body")[0],d=q(D);d.setAttribute("type",G),a=c.appendChild(d),a?(b=0,function(){if(typeof a.GetVariable!=C){var e=a.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),U.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>b)return b++,setTimeout(arguments.callee,10),void 0;c.removeChild(d),a=null,f()}()):f()}function f(){var a,b,c,d,e,f,k,l,m,n,o,q=O.length;if(q>0)for(a=0;q>a;a++)if(b=O[a].id,c=O[a].callbackFn,d={success:!1,id:b},U.pv[0]>0){if(e=p(b))if(!s(O[a].swfVersion)||U.wk&&U.wk<312)if(O[a].expressInstall&&h()){for(f={},f.data=O[a].expressInstall,f.width=e.getAttribute("width")||"0",f.height=e.getAttribute("height")||"0",e.getAttribute("class")&&(f.styleclass=e.getAttribute("class")),e.getAttribute("align")&&(f.align=e.getAttribute("align")),k={},l=e.getElementsByTagName("param"),m=l.length,n=0;m>n;n++)"movie"!=l[n].getAttribute("name").toLowerCase()&&(k[l[n].getAttribute("name")]=l[n].getAttribute("value"));i(f,k,b,c)}else j(e),c&&c(d);else u(b,!0),c&&(d.success=!0,d.ref=g(b),c(d))}else u(b,!0),c&&(o=g(b),o&&typeof o.SetVariable!=C&&(d.success=!0,d.ref=o),c(d))}function g(a){var b,c=null,d=p(a);return d&&"OBJECT"==d.nodeName&&(typeof d.SetVariable!=C?c=d:(b=d.getElementsByTagName(D)[0],b&&(c=b))),c}function h(){return!S&&s("6.0.65")&&(U.win||U.mac)&&!(U.wk&&U.wk<312)}function i(a,b,c,d){var e,f,g,h;S=!0,y=d||null,z={success:!1,id:c},e=p(c),e&&("OBJECT"==e.nodeName?(w=k(e),x=null):(w=e,x=c),a.id=H,(typeof a.width==C||!/%$/.test(a.width)&&parseInt(a.width,10)<310)&&(a.width="310"),(typeof a.height==C||!/%$/.test(a.height)&&parseInt(a.height,10)<137)&&(a.height="137"),K.title=K.title.slice(0,47)+" - Flash Player Installation",f=U.ie&&U.win?"ActiveX":"PlugIn",g="MMredirectURL="+J.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+K.title,typeof b.flashvars!=C?b.flashvars+="&"+g:b.flashvars=g,U.ie&&U.win&&4!=e.readyState&&(h=q("div"),c+="SWFObjectNew",h.setAttribute("id",c),e.parentNode.insertBefore(h,e),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()),l(a,b,c))}function j(a){if(U.ie&&U.win&&4!=a.readyState){var b=q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(k(a),b),a.style.display="none",function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(k(a),a)}function k(a){var b,c,d,e,f=q("div");if(U.win&&U.ie)f.innerHTML=a.innerHTML;else if(b=a.getElementsByTagName(D)[0],b&&(c=b.childNodes))for(d=c.length,e=0;d>e;e++)1==c[e].nodeType&&"PARAM"==c[e].nodeName||8==c[e].nodeType||f.appendChild(c[e].cloneNode(!0));return f}function l(a,b,c){var d,e,f,g,h,i,j,k,l=p(c);if(U.wk&&U.wk<312)return d;if(l)if(typeof a.id==C&&(a.id=c),U.ie&&U.win){e="";for(f in a)a[f]!=Object.prototype[f]&&("data"==f.toLowerCase()?b.movie=a[f]:"styleclass"==f.toLowerCase()?e+=' class="'+a[f]+'"':"classid"!=f.toLowerCase()&&(e+=" "+f+'="'+a[f]+'"'));g="";for(h in b)b[h]!=Object.prototype[h]&&(g+='<param name="'+h+'" value="'+b[h]+'" />');l.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+e+">"+g+"</object>",P[P.length]=a.id,d=p(a.id)}else{i=q(D),i.setAttribute("type",G);for(j in a)a[j]!=Object.prototype[j]&&("styleclass"==j.toLowerCase()?i.setAttribute("class",a[j]):"classid"!=j.toLowerCase()&&i.setAttribute(j,a[j]));for(k in b)b[k]!=Object.prototype[k]&&"movie"!=k.toLowerCase()&&m(i,k,b[k]);l.parentNode.replaceChild(i,l),d=i}return d}function m(a,b,c){var d=q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function n(a){var b=p(a);b&&"OBJECT"==b.nodeName&&(U.ie&&U.win?(b.style.display="none",function(){4==b.readyState?o(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function o(a){var b,c=p(a);if(c){for(b in c)"function"==typeof c[b]&&(c[b]=null);c.parentNode.removeChild(c)}}function p(a){var b=null;try{b=K.getElementById(a)}catch(c){}return b}function q(a){return K.createElement(a)}function r(a,b,c){a.attachEvent(b,c),Q[Q.length]=[a,b,c]}function s(a){var b=U.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function t(a,b,c,d){var e,f,g;U.ie&&U.mac||(e=K.getElementsByTagName("head")[0],e&&(f=c&&"string"==typeof c?c:"screen",d&&(A=null,B=null),A&&B==f||(g=q("style"),g.setAttribute("type","text/css"),g.setAttribute("media",f),A=e.appendChild(g),U.ie&&U.win&&typeof K.styleSheets!=C&&K.styleSheets.length>0&&(A=K.styleSheets[K.styleSheets.length-1]),B=f),U.ie&&U.win?A&&typeof A.addRule==D&&A.addRule(a,b):A&&typeof K.createTextNode!=C&&A.appendChild(K.createTextNode(a+" {"+b+"}"))))}function u(a,b){if(T){var c=b?"visible":"hidden";R&&p(a)?p(a).style.visibility=c:t("#"+a,"visibility:"+c)}}function v(a){var b=/[\\\"<>\.;]/,c=null!=b.exec(a);return c&&typeof encodeURIComponent!=C?encodeURIComponent(a):a}var w,x,y,z,A,B,C="undefined",D="object",E="Shockwave Flash",F="ShockwaveFlash.ShockwaveFlash",G="application/x-shockwave-flash",H="SWFObjectExprInst",I="onreadystatechange",J=window,K=document,L=navigator,M=!1,N=[d],O=[],P=[],Q=[],R=!1,S=!1,T=!0,U=function(){var a,b=typeof K.getElementById!=C&&typeof K.getElementsByTagName!=C&&typeof K.createElement!=C,c=L.userAgent.toLowerCase(),d=L.platform.toLowerCase(),e=d?/win/.test(d):/win/.test(c),f=d?/mac/.test(d):/mac/.test(c),g=/webkit/.test(c)?parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,h=!1,i=[0,0,0],j=null;if(typeof L.plugins!=C&&typeof L.plugins[E]==D)j=L.plugins[E].description,!j||typeof L.mimeTypes!=C&&L.mimeTypes[G]&&!L.mimeTypes[G].enabledPlugin||(M=!0,h=!1,j=j.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),i[0]=parseInt(j.replace(/^(.*)\..*$/,"$1"),10),i[1]=parseInt(j.replace(/^.*\.(.*)\s.*$/,"$1"),10),i[2]=/[a-zA-Z]/.test(j)?parseInt(j.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof J.ActiveXObject!=C)try{a=new ActiveXObject(F),a&&(j=a.GetVariable("$version"),j&&(h=!0,j=j.split(" ")[1].split(","),i=[parseInt(j[0],10),parseInt(j[1],10),parseInt(j[2],10)]))}catch(k){}return{w3:b,pv:i,wk:g,ie:h,win:e,mac:f}}();return function(){U.w3&&((typeof K.readyState!=C&&"complete"==K.readyState||typeof K.readyState==C&&(K.getElementsByTagName("body")[0]||K.body))&&a(),R||(typeof K.addEventListener!=C&&K.addEventListener("DOMContentLoaded",a,!1),U.ie&&U.win&&(K.attachEvent(I,function(){"complete"==K.readyState&&(K.detachEvent(I,arguments.callee),a())}),J==top&&function(){if(!R){try{K.documentElement.doScroll("left")}catch(b){return setTimeout(arguments.callee,0),void 0}a()}}()),U.wk&&function(){return R?void 0:/loaded|complete/.test(K.readyState)?(a(),void 0):(setTimeout(arguments.callee,0),void 0)}(),c(a)))}(),function(){U.ie&&U.win&&window.attachEvent("onunload",function(){var a,b,c,d,e,f=Q.length;for(a=0;f>a;a++)Q[a][0].detachEvent(Q[a][1],Q[a][2]);for(b=P.length,c=0;b>c;c++)n(P[c]);for(d in U)U[d]=null;U=null;for(e in swfobject)swfobject[e]=null;swfobject=null})}(),{registerObject:function(a,b,c,d){if(U.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,O[O.length]=e,u(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){return U.w3?g(a):void 0},embedSWF:function(a,c,d,e,f,g,j,k,m,n){var o={success:!1,id:c};U.w3&&!(U.wk&&U.wk<312)&&a&&c&&d&&e&&f?(u(c,!1),b(function(){var b,p,q,r,t,v;if(d+="",e+="",b={},m&&typeof m===D)for(p in m)b[p]=m[p];if(b.data=a,b.width=d,b.height=e,q={},k&&typeof k===D)for(r in k)q[r]=k[r];if(j&&typeof j===D)for(t in j)typeof q.flashvars!=C?q.flashvars+="&"+t+"="+j[t]:q.flashvars=t+"="+j[t];if(s(f))v=l(b,q,c),b.id==c&&u(c,!0),o.success=!0,o.ref=v;else{if(g&&h())return b.data=g,i(b,q,c,n),void 0;u(c,!0)}n&&n(o)})):n&&n(o)},switchOffAutoHideShow:function(){T=!1},ua:U,getFlashPlayerVersion:function(){return{major:U.pv[0],minor:U.pv[1],release:U.pv[2]}},hasFlashPlayerVersion:s,createSWF:function(a,b,c){return U.w3?l(a,b,c):void 0},showExpressInstall:function(a,b,c,d){U.w3&&h()&&i(a,b,c,d)},removeSWF:function(a){U.w3&&n(a)},createCSS:function(a,b,c,d){U.w3&&t(a,b,c,d)},addDomLoadEvent:b,addLoadEvent:c,getQueryParamValue:function(a){var b,c,d=K.location.search||K.location.hash;if(d){if(/\?/.test(d)&&(d=d.split("?")[1]),null==a)return v(d);for(b=d.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return v(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(S){var a=p(H);a&&w&&(a.parentNode.replaceChild(w,a),x&&(u(x,!0),U.ie&&U.win&&(w.style.display="block")),y&&y(z)),S=!1}}}}();
=======
/*
-------------------------------------------------------------------------
  说明:
  正式使用时可以把该文件的注释全部去掉，节省加载时间
  ckplayer6.5,有问题请访问http://www.ckplayer.com
  请注意，该文件为UTF-8编码，不需要改变编码即可使用于各种编码形式的网站内	
-------------------------------------------------------------------------
第一部分，加载插件
以下为加载的插件部份
插件的设置参数说明：
	1、插件名称
	2、水平对齐方式（0左，1中，2右）
	3、垂直对齐方式（0上，1中，2下）
	4、水平方向位置偏移量
	5、垂直方向位置偏移量
	6、插件的等级，0=普通图片插件且跟随控制栏隐藏而隐藏，显示而显示，1=普通图片插件且永久显示，2=swf插件，默认显示，3=swf插件，默认隐藏，swf插件都可以交互
	7、插件是否绑定在控制栏上，0不绑定，1绑定，当值是1的时候该插件将会随着控制栏一起隐藏或缓动
	8、插件为swf并且可交互时，默认调用的类所在的包名称，详细说明可以到帮助手册里查看，默认无
	插件名称不能相同，对此的详细说明请到网站查看
*/
function ckcpt() {
    var cpt = '';
    return cpt;
}
/*
插件的定义结束
以下是对播放器功能进行配置
*/
function ckstyle() { //定义总的风格
    var ck = {
        cpath: '',
        /*
		播放器风格压缩包文件的路径，默认的是style.swf
		如果调用不出来可以试着设置成绝对路径试试
		如果不知道路径并且使用的是默认配置，可以直接留空，播放器会
		*/
        language: '',
        /*播放器所使用的语言配置文件，需要和播放器在同目录下，默认是language.xml*/
        flashvars: '',
        /*
		这里是用来做为对flashvars值的补充，除了c和x二个参数以外的设置都可以在这里进行配置
		                          1 1 1 1   1 1 1 1 1 1 2 2 2  2 2 2 2 2    2 2 3 3 3 3 3 3 3 3 3   3 4
       			1 2 3 4 5 6 7 8 9 0 1 2 3   4 5 6 7 8 9 0 1 2  3 4 5 6 7    8 9 0 1 2 3 4 5 6 7 8   9 0*/
        setup: '1,1,1,1,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,2,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,1,1,250,0,90',
        /*
		这是配置文件里比较重要的一个参数，共有N个功能控制参数，并且以后会继续的增加，各控制参数以英文逗号(,)隔开。下面列出各参数的说明：
			1、鼠标经过按钮是否使用手型，0普通鼠标，1手型鼠标，2是只有按钮手型，3是控制栏手型
			2、是否支持单击暂停，0不支持，1是支持
			3、是否支持双击全屏，0不支持，1是支持
			4、在播放前置广告时是否同时加载视频，0不加载，1加载
			5、广告显示的参考对象，0是参考视频区域，1是参考播放器区域
			6、广告大小的调整方式,只针对swf和图片有效,视频是自动缩放的
				=0是自动调整大小，意思是说大的话就变小，小的话就变大
				=1是大的化变小，小的话不变
				=2是什么也不变，就这么大
				=3是跟参考对像(第5个控制)参数设置的一样宽高
			7、前置广告播放顺序，0是顺序播放，1是随机播放，>1则随机取所有广告中的(N-1)个进行播放
			8、对于视频广告是否采用修正，0是不使用，1是使用，如果是1，则用户在网速慢的情况下会按设定的倒计时进行播放广告，计时结束则放正片（比较人性化），设置成0的话，则强制播放完广告才能播放正片
			9、是否开启滚动文字广告，0是不开启，1是开启且不使用关闭按钮，2是开启并且使用关闭按钮，开启后将在加载视频的时候加载滚动文字广告
			10、视频的调整方式
				=0是自动调整大小，意思是说大的话就变小，小的话就变大，同时保持长宽比例不变
				=1是大的化变小，小的话不变
				=2是什么也不变，就这么大
				=3是跟参考对像(pm_video的设置)参数设置的一样宽高
			11、是否在多视频时分段加载，0不是，1是
			12、缩放视频时是否进行平滑处理，0不是，1是
			13、视频缓冲时间,单位：毫秒,建议不超过300
			14、初始图片调整方式(
				=0是自动调整大小，意思是说大的话就变小，小的话就变大，同时保持长宽比例不变
				=1是大的化变小，小的话不变
				=2是什么也不变，就这么大
				=3是跟pm_video参数设置的一样宽高
			15、暂停广告调整方式(
				=0是自动调整大小，意思是说大的话就变小，小的话就变大，同时保持长宽比例不变
				=1是大的化变小，小的话不变
				=2是什么也不变，就这么大
				=3是跟pm_video参数设置的一样宽
			16、暂停广告是否使用关闭广告设置，0不使用，1使用
			17、缓冲时是否播放广告，0是不显示，1是显示并同时隐藏掉缓冲图标和进度，2是显示并不隐藏缓冲图标
			18、是否支持键盘空格键控制播放和暂停0不支持，1支持
			19、是否支持键盘左右方向键控制快进快退0不支持，1支持
			20、是否支持键盘上下方向键控制音量0不支持，1支持
			21、播放器返回js交互函数的等级，0-2,等级越高，返回的参数越多
				0是返回少量常用交互
				1返回播放器在播放的时候的参数，不返回广告之类的参数
				2返回全部参数
				3返回全部参数，并且在参数前加上"播放器ID->"，用于多播放器的监听
			22、快进和快退的秒数
			23、界面上图片元素加载失败重新加载次数
			24、开启加载皮肤压缩文件包的加载进度提示
			25、使用隐藏控制栏时显示简单进度条的功能,0是不使用，1是使用，2是只在普通状态下使用
			26、控制栏隐藏设置(0不隐藏，1全屏时隐藏，2都隐藏
			27、控制栏隐藏延时时间，即在鼠标离开控制栏后多少毫秒后隐藏控制栏
			28、左右滚动时是否采用无缝，默认0采用，1是不采用
			29、0是正常状态，1是控制栏默认隐藏，播放状态下鼠标经过播放器显示控制栏，2是一直隐藏控制栏
			30、在播放rtmp视频时暂停后点击播放是否采用重新链接的方式,这里一共分0-2三个等级
			31、当采用网址形式(flashvars里s=1/2时)读取视频地址时是采用默认0=get方法，1=post方式
			32、是否启用播放按钮和暂停按钮
			33、是否启用中间暂停按钮
			34、是否启用静音按钮
			35、是否启用全屏按钮
			36、是否启用进度调节栏
			37、是否启用调节音量
			38、计算时间的间隔，毫秒
			39、前置logo至少显示的时间，单位：毫秒
			40、前置视频广告的默认音量
		*/
        pm_bg: '0x000000,100,230,180',
        /*播放器整体的背景配置，请注意，这里只是一个初始化的设置，如果需要真正的改动播放器的背景和最小宽高，需要在风格文件里找到相同的参数进行更改。
		1、整体背景颜色
		2、背景透明度
		3、播放器最小宽度
		4、播放器最小高度
		这里只是初始化时的设置，最终加载完播放器后显示的效果需要在style.swf/style.xml里设置该参数
		*/
        mylogo: 'logo.swf',
        /*
		视频加载前显示的logo文件，不使用设置成null，即ck.mylogo='null';
		*/
        pm_mylogo: '1,1,-160,-70',
        /*
		视频加载前显示的logo文件(mylogo参数的)的位置
		本软件所有的四个参数控制位置的方式全部都是统一的意思，如下
			1、水平对齐方式，0是左，1是中，2是右
			2、垂直对齐方式，0是上，1是中，2是下
			3、水平偏移量，举例说明，如果第1个参数设置成0左对齐，第3个偏移量设置成10，就是离左边10个像素，第一个参数设置成2，偏移量如果设置的是正值就会移到播放器外面，只有设置成负值才行，设置成-1，按钮就会跑到播放器外面
			4、垂直偏移量 
		*/
        logo: 'cklogo.png',
        /*
		默认右上角一直显示的logo，不使用设置成null，即ck.logo='null';
		*/
        pm_logo: '2,0,-100,20',
        /*
		播放器右上角的logo的位置
			1、水平对齐方式，0是左，1是中，2是右
			2、垂直对齐方式，0是上，1是中，2是下
			3、水平偏移量
			4、垂直偏移量 
		以下是播放器自带的二个插件
		*/
        control_rel: 'related.swf,ckplayer/related.xml,0',
        /*
		视频结束显示精彩视频的插件
			1、视频播放结束后显示相关精彩视频的插件文件（注意，视频结束动作设置成3时(即var flashvars={e:3})有效），
			2、xml文件是调用精彩视频的示例文件，可以自定义文件类型（比如asp,php,jsp,.net只要输出的是xml格式就行）,实际使用中一定要注意第二个参数的路径要正确
			3、第三个参数是设置配置文件的编码，0是默认的utf-8,1是gbk2312 
		*/
        control_pv: 'Preview.swf,105,2000',
        /*
		视频预览插件
			1、插件文件名称(该插件和上面的精彩视频的插件都是放在风格压缩包里的)
			2、离进度栏的高(指的是插件的顶部离进度栏的位置)
			3、延迟时间(该处设置鼠标经过进度栏停顿多少毫秒后才显示插件)
			建议一定要设置延时时间，不然当鼠标在进度栏上划过的时候就会读取视频地址进行预览，很占资源 
		*/
        pm_repc: '',
		/*
		视频地址替换符，该功能主要是用来做简单加密的功能，使用方法很简单，请注意，只针对f值是视频地址的时候有效，其它地方不能使用。具体的请查看http://www.ckplayer.com/manual.php?id=4#title_25
		*/
        pm_spac: '|',
        /*
		视频地址间隔符，这里主要是播放多段视频时使用普通调用方式或网址调用方式时使用的。默认使用|，如果视频地址里本身存在|的话需要另外设置一个间隔符，注意，即使只有一个视频也需要设置。另外在使用rtmp协议播放视频的时候，如果视频存在多级目录的话，这里要改成其它的符号，因为rtmp协议的视频地址多级的话也需要用到|隔开流地址和实例地址 
		*/
        pm_fpac: 'file->f',
        /*
		该参数的功能是把自定义的flashvars里的变量替换成ckplayer里对应的变量，默认的参数的意思是把flashvars里的file值替换成f值，因为ckplayer里只认f值，多个替换之间用竖线隔开
		*/
        pm_advtime: '2,0,-110,10,0,300,0',
        /*
		前置广告倒计时文本位置，播放前置 广告时有个倒计时的显示文本框，这里是设置该文本框的位置和宽高，对齐方式的。一共7个参数，分别表示：
			1、水平对齐方式，0是左对齐，1是中间对齐，2是右对齐
			2、垂直对齐方式，0是上对齐，1是中间对齐，2是低部对齐
			3、水平位置偏移量
			4、垂直位置偏移量
			5、文字对齐方式，0是左对齐，1是中间对齐，2是右对齐，3是默认对齐
			6、文本框宽席
			7、文本框高度 
		*/
        pm_advstatus: '1,2,2,-200,-40',
        /*
		前置广告静音按钮，静音按钮只在是视频广告时显示，当然也可以控制不显示 
			1、是否显示0不显示，1显示
			2、水平对齐方式
			3、垂直对齐方式
			4、水平偏移量
			5、垂直偏移量
		*/
        pm_advjp: '1,1,2,2,-100,-40',
        /*
		前置广告跳过广告按钮的位置
			1、是否显示0不显示，1是显示
			2、跳过按钮触发对象(值0/1,0是直接跳转,1是触发js:function ckadjump(){})
			3、水平对齐方式
			4、垂直对齐方式
			5、水平偏移量
			6、垂直偏移量
		*/
        pm_padvc: '2,0,-10,-10',
        /*
		暂停广告的关闭按钮的位置
			1、水平对齐方式
			2、垂直对齐方式
			3、水平偏移量
			4、垂直偏移量
		*/
        pm_advms: '2,2,-46,-56',
        /*
		滚动广告关闭按钮位置
			1、水平对齐方式
			2、垂直对齐方式
			3、水平偏移量
			4、垂直偏移量
		*/
        pm_zip: '1,1,-20,-8,1,0,0',
        /*
		加载皮肤压缩包时提示文字的位置
			1、水平对齐方式，0是左对齐，1是中间对齐，2是右对齐
			2、垂直对齐方式，0是上对齐，1是中间对齐，2是低部对齐
			3、水平位置偏移量
			4、垂直位置偏移量
			5、文字对齐方式，0是左对齐，1是中间对齐，2是右对齐，3是默认对齐
			6、文本框宽席
			7、文本框高度
		*/
        //pm_advmarquee: '1,2,50,-60,50,18,0,0x000000,50,0,20,1,15,2000',
		pm_advmarquee: '1,2,50,-60,50,20,0,0x000000,50,0,20,1,30,2000',
        /*
		滚动广告的控制，要使用的话需要在setup里的第9个参数设置成1
		这里分二种情况,前六个参数是定位控制，第7个参数是设置定位方式(0：相对定位，1：绝对定位)
		第一种情况：第7个参数是0的时候，相对定位，就是播放器长宽变化的时候，控制栏也跟着变
			1、默认1:中间对齐
			2、上中下对齐（0是上，1是中，2是下）
			3、离左边的距离
			4、Y轴偏移量
			5、离右边的距离
			6、高度
			7、定位方式
		第二种情况：第7个参数是1的时候，绝对定位，就是播放器长宽变化的时候，控制栏不跟着变，这种方式一般使用在控制栏大小不变的时候
			1、左中右对齐方式（0是左，1是中间，2是右）
			2、上中下对齐（0是上，1是中，2是下）
			3、x偏移量
			4、y偏移量
			5、宽度
			6、高度
			7、定位方式
		以上是前7个参数的作用
			8、是文字广告的背景色
			9、置背景色的透明度
			10、控制滚动方向，0是水平滚动（包括左右），1是上下滚动（包括向上和向下）
			11、移动的单位时长，即移动单位像素所需要的时长，毫秒
			12、移动的单位像素,正数同左/上，负数向右/下
			13、是行高，这个在设置向上或向下滚动的时候有用处
			14、控制向上或向下滚动时每次停止的时间
		*/
		pm_glowfilter:'1,0x01485d, 100, 6, 3, 10, 1, 0, 0',
		/*滚动文字广告是否采用发光滤镜
			1、是否使用发光滤镜，0是不采用，1是使用
			2、(default = 0xFF0000) — 光晕颜色，采用十六进制格式 0xRRGGBB。 默认值为 0xFF0000  
			3、(default = 100) — 颜色的 Alpha 透明度值。 有效值为 0 到 100。 例如，25 设置透明度为 25%
			4、(default = 6.0) — 水平模糊量。 有效值为 0 到 255（浮点）。 2 的乘方值（如 2、4、8、16 和 32）经过优化，呈现速度比其它值更快  
			5、(default = 6.0) — 垂直模糊量。 有效值为 0 到 255（浮点）。 2 的乘方值（如 2、4、8、16 和 32）经过优化，呈现速度比其它值更快  
			6、(default = 2) — 印记或跨页的强度。 该值越高，压印的颜色越深，而且发光与背景之间的对比度也越强。 有效值为 0 到 255  
			7、(default = 1) — 应用滤镜的次数
			8、(default = 0) — 指定发光是否为内侧发光。 值 1 指定发光是内侧发光。 值 0 指定发光是外侧发光（对象外缘周围的发光）  
			9、(default = 0) — 指定对象是否具有挖空效果。 值为 1 将使对象的填充变为透明，并显示文档的背景颜色 
		*/
        advmarquee: escape(''),
        /*
		该处是滚动文字广告的内容，如果不想在这里设置，就把这里清空并且在页面中使用js的函数定义function ckmarqueeadv(){return '广告内容'}
		*/
		mainfuntion:'',
		/*
		当flashvars里s=3/4时，调用的函数包名称，默认为空，调用时间轴上的函数setAppObj
		*/
		flashplayer:'',
		/*
		当flashvars里的s=3/4时，也可以把swf文件放在这里
		*/
		calljs:'ckplayer_status,ckadjump,playerstop,ckmarqueeadv',
		/*
			跳过广告和播放结束时调用的js函数
		*/
        myweb: escape('7daa475e39ceba0deaad5dbba4810918,网络同步电视播放器,http://tv.lhkjw.com,Version:3.9'),
        /*
		------------------------------------------------------------------------------------------------------------------
		以下内容部份是和插件相关的配置，请注意，自定义插件以及其配置的命名方式要注意，不要和系统的相重复，不然就会替换掉系统的相关设置，删除相关插件的话也可以同时删除相关的配置
		------------------------------------------------------------------------------------------------------------------
		以下内容定义自定义插件的相关配置，这里也可以自定义任何自己的插件需要配置的内容，当然，如果你某个插件不使用的话，也可以删除相关的配置
		------------------------------------------------------------------------------------------------------------------
		*/
        cpt_lights: '1',
		/*
		该处定义是否使用开关灯，和right.swf插件配合作用,使用开灯效果时调用页面的js函数function closelights(){};
		*/
        cpt_share: 'ckplayer/share.xml',
        /*
		分享插件调用的配置文件地址
		调用插件开始
		*/
        cpt_list: ckcpt()
        /*
		ckcpt()是本文件最上方的定义插件的函数
		*/
    }
    return ck;
}
/*
html5部分开始
以下代码是支持html5的，如果你不需要，可以删除。
html5代码块的代码可以随意更改以适合你的应用，欢迎到论坛交流更改心得
*/
(function() {
    var CKobject = {
        _K_: function(d){return document.getElementById(d);},
        _T_: false,
		_M_: false,
		_G_: false,
		_Y_: false,
		_I_: null,
		_J_: 0,
		_O_: {},
		uaMatch:function(u,rMsie,rFirefox,rOpera,rChrome,rSafari,rSafari2,mozilla,mobile){
			var match = rMsie.exec(u);
			if (match != null) {
				return {
					b: 'IE',
					v: match[2] || '0'
				}
			}
			match = rFirefox.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rOpera.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rChrome.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = rSafari.exec(u);
			if (match != null) {
				return {
					b: match[2] || '',
					v: match[1] || '0'
				}
			}
			match = rSafari2.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = mozilla.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			match = mobile.exec(u);
			if (match != null) {
				return {
					b: match[1] || '',
					v: match[2] || '0'
				}
			}
			else {
				return {
					b: 'unknown',
					v: '0'
				}
			}
		},
		browser: function() {
			var u = navigator.userAgent,
			rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
			rFirefox = /(firefox)\/([\w.]+)/,
			rOpera = /(opera).+version\/([\w.]+)/,
			rChrome = /(chrome)\/([\w.]+)/,
			rSafari = /version\/([\w.]+).*(safari)/,
			rSafari2 = /(safari)\/([\w.]+)/,
			mozilla = /(mozilla)\/([\w.]+)/,
			mobile = /(mobile)\/([\w.]+)/;
			var c = u.toLowerCase();
			var d = this.uaMatch(c,rMsie,rFirefox,rOpera,rChrome,rSafari,rSafari2,mozilla,mobile);
			if (d.b) {
				b = d.b;
				v = d.v;
			}
			return {B: b, V: v};
        },
        Platform: function() {
            var w = '';
            var u = navigator.userAgent,
            app = navigator.appVersion;
            var b = {
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
                iPad: u.indexOf('iPad') > -1,
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
				trident: u.indexOf('Trident') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                presto: u.indexOf('Presto') > -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
                webApp: u.indexOf('Safari') == -1
            };
            for (var k in b) {
                if (b[k]) {
                    w = k;
                    break;
                }
            }
            return w;
        },
		isHTML5:function(){
			return !!document.createElement('video').canPlayType;
		},
		getType:function(){
			return this._T_;
		},
        getVideo: function() {
            var v = '';
            var s = this._E_['v'];
            if (s && s.length>1) {
                for (var i = 0; i < s.length; i++) {
                    var a = s[i].split('->');
                    if (a.length >= 1 && a[0] != '') {
                        v += '<source src="' + a[0] + '"';
                    }
                    if (a.length >= 2 && a[1] != '') {
                        v += ' type="' + a[1] + '"';
                    }
                    v += '>';
                }
            }
            return v;
        },
        getVars: function(k) {
			var o=this._A_;
			if (typeof(o) == 'undefined') { 
				return null;
			}
            if (k in o) {
                return o[k];
            } else {
                return null;
            }
        },
        getParams: function() {
            var p = '';
            if (this._A_) {
                if (parseInt(this.getVars('p')) == 1) {
                    p += ' autoplay="autoplay"';
                }
                if (parseInt(this.getVars('e')) == 1) {
                    p += ' loop="loop"';
                }
                if (parseInt(this.getVars('p')) == 2) {
                    p += ' preload="metadata"';
                }
                if (this.getVars('i')) {
                    p += ' poster="' + this.getVars('i') + '"';
                }
            }
            return p;
        },
        getpath: function(z) {
			var f='CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz';
			var w=z.substr(0,1);
			if(f.indexOf(w)>-1 && (z.substr(0,4)==w+'://' || z.substr(0,4)==w+':\\')){
				return z;
			}
            var d = unescape(window.location.href).replace('file:///', '');
            var k = parseInt(document.location.port);
            var u = document.location.protocol + '//' + document.location.hostname;
            var l = '',
            e = '',
            t = '';
            var s = 0;
            var r = unescape(z).split('//');
            if (r.length > 0) {
                l = r[0] + '//'
            }
            var h = 'http|https|ftp|rtsp|mms|ftp|rtmp|file';
            var a = h.split('|');
            if (k != 80 && k) {
                u += ':' + k;
            }
            for (i = 0; i < a.length; i++) {
                if ((a[i] + '://') == l) {
                    s = 1;
                    break;
                }
            }
            if (s == 0) {
                if (z.substr(0, 1) == '/') {
                    t = u + z;
                } else {
                    e = d.substring(0, d.lastIndexOf('/') + 1).replace('\\', '/');
                    var w = z.replace('../', './');
                    var u = w.split('./');
                    var n = u.length;
                    var r = w.replace('./', '');
                    var q = e.split('/');
                    var j = q.length - n;
                    for (i = 0; i < j; i++) {
                        t += q[i] + '/';
                    }
                    t += r;
                }
            } else {
                t = z;
            }
            return t;
        },
        getXhr: function() {
            var x;
            try {
                x = new ActiveXObject('Msxml2.XMLHTTP');
            } catch(e) {
                try {
                    x = new ActiveXObject('Microsoft.XMLHTTP');
                } catch(e) {
                    x = false;
                }
            }
            if (!x && typeof XMLHttpRequest != 'undefined') {
                x = new XMLHttpRequest();
            }
            return x;
        },
		getX: function(){
			var f='ckstyle()';
			if (this.getVars('x')) {
				f=this.getVars('x')+'()';
			}
			try {
				if (typeof(eval(f)) == 'object') {
					this._X_ = eval(f);
				}
			} catch(e) {
				try {
					if (typeof(eval(ckstyle)) == 'object') {
						this._X_ = ckstyle();
					}
				} catch(e) {
					this._X_ = ckstyle();
				}
			}
		},
		getSn: function(s, n) {
			if(n>=0){
				return this._X_[s].split(',')[n];
			}
			else{
				return this._X_[s];
			}
        },
		getUrl: function(L, B) {
            var b = ['get', 'utf-8'];
            if (L && L.length == 2) {
                var a = L[0];
                var c = L[1].split('/');
                if (c.length >= 2) {
                    b[0] = c[1];
                }
                if (c.length >= 3) {
                    b[1] = c[2];
                }
                this.ajax(b[0], b[1], a,
                function(s) {
                    var C = CKobject;
                    if (s && s != 'error') {
                        var d = '',
                        e = s;
                        if (s.indexOf('}') > -1) {
                            var f = s.split('}');
                            for (var i = 0; i < f.length - 1; i++) {
                                d += f[i] + '}';
                                var h = f[i].replace('{', '').split('->');
                                if (h.length == 2) {
                                    C._A_[h[0]] = h[1];
                                }
                            }
                            e = f[f.length - 1];
                        }
                        C._E_['v'] = e.split(',');
                        if (B) {
                            C.showHtml5();
                        } else {
                            C.changeParams(d);
                            C.newAdr();
                        }
                    }
                });
            }
        },
        getflashvars: function(s) {
            var v = '',
            i = 0;
            if (s) {
                for (var k in s) {
                    if (i > 0) {
                        v += '&';
                    }
                    if (k == 'f' && s[k] && ! this.getSn('pm_repc',-1)) {
                        s[k] = this.getpath(s[k]);
                        if (s[k].indexOf('&') > -1) {
                            s[k] = encodeURIComponent(s[k]);
                        }
                    }
                    if (k == 'y' && s[k]) {
                        s[k] = this.getpath(s[k]);
                    }
                    v += k + '=' + s[k];
                    i++;
                }
            }
            return v;
        },
        getparam: function(s) {
            var w = '',
            v = '',
            o = {
                allowScriptAccess: 'always',
                allowFullScreen: true,
                quality: 'high',
                bgcolor: '#000'
            };
            if (s) {
                for (var k in s) {
                    o[k] = s[k];
                }
            }
            for (var e in o) {
                w += e + '="' + o[e] + '" ';
                v += '<param name="' + e + '" value="' + o[e] + '" />';
            }
            w = w.replace('movie=', 'src=');
            return {
                w: w,
                v: v
            };
        },
        getObjectById: function(s) {
            if (this._T_) {
                return this;
            }
            var X = null,
            Y = this._K_(s),
            r = 'embed';
            if (Y && Y.nodeName == 'OBJECT') {
                if (typeof Y.SetVariable != 'undefined') {
                    X = Y;
                } else {
                    var Z = Y.getElementsByTagName(r)[0];
                    if (Z) {
                        X = Z;
                    }
                }
            }
            return X;
        },
        ajax: function(b, u, s, f) {
            var x = this.getXhr();
            var a = [],
            m = '';
            if (b == 'get') {
                if (s.indexOf('?') > -1) {
                    m = s + '&t=' + new Date().getTime();
                } else {
                    m = s + '?t=' + new Date().getTime();
                }
                x.open('get', m);
            } else {
                a = s.split('?');
                s = a[0],
                m = a[1];
                x.open('post', s, true);
            }
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            x.setRequestHeader('charset', u);
            if (b == 'post') {
                x.send(m);
            } else {
                x.send(null);
            }
            x.onreadystatechange = function() {
                if (x.readyState == 4) {
                    var g = x.responseText;
                    if (g != '') {
                        f(g);
                    } else {
                        f(null);
                    }
                }
            }
        },
        addListener: function(e, f) {
			var o=CKobject._V_;
            if (o.addEventListener) {
				try{
                	o.addEventListener(e, f, false);
				}
				catch (e) {
					 this.getNot();
				}
            }
			else if (o.attachEvent) {
				try{
                	o.attachEvent('on' + e, f);
				}
				catch(e){
					 this.getNot();
				}
            }
			else {
                o['on' + e] = f;
            }
        },
        removeListener: function( e, f) {
			var o=CKobject._V_;
            if (o.removeEventListener) {
				try{
                	o.removeEventListener(e, f, false);
				}
				catch(e){
					 this.getNot();
				}
			}
			else if (o.detachEvent) {
				try{
                	o.detachEvent('on' + e, f);
				}
				catch(e){
					 this.getNot();
				}
			}
			else {
                o['on' + e] = null;
            }
        },
        Flash: function() {
            var f = false,v = 0;
            if (document.all  || this.browser()['B'].toLowerCase().indexOf('ie')>-1) {
                try {
                    var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                    f = true;
                    var z = s.GetVariable('$version');
                    v = parseInt(z.split(' ')[1].split(',')[0]);
                } catch(e) {}
            } else {
                if (navigator.plugins && navigator.plugins.length > 0) {
                    var s = navigator.plugins['Shockwave Flash'];
                    if (s) {
                        f = true;
                        var w = s.description.split(' ');
                        for (var i = 0; i < w.length; ++i) {
                            if (isNaN(parseInt(w[i]))) continue;
                            v = parseInt(w[i]);
                        }
                    }
                }
            }
            return {
                f: f,
                v: v
            };
        },
		embed:function(f,d,i,w,h,b,v,e,p){
			var s=['all'];
			if(b){
				if(this.isHTML5()){
					this.embedHTML5(d,i,w,h,e,v,s);
				}
				else{
					this.embedSWF(f,d,i,w,h,v,p);
				}
			}
			else{
				if(this.Flash()['f'] && parseInt(this.Flash()['v'])>10){
					this.embedSWF(f,d,i,w,h,v,p);
				}
				else if(this.isHTML5()){
					this.embedHTML5(d,i,w,h,e,v,s);
				}
				else{
					this.embedSWF(f,d,i,w,h,v,p);
				}
			}
		},
		embedSWF: function(C, D, N, W, H, V, P) {
            if (!N) {
                N = 'ckplayer_a1'
            }
            if (!P) {
                P = {
                    bgcolor: '#FFF',
                    allowFullScreen: true,
                    allowScriptAccess: 'always',
					wmode:'transparent'
                };
            }
			this._A_=V;
			this.getX();
            var u = 'undefined',
			g = false,
            j = document,
            r = 'http://www.macromedia.com/go/getflashplayer',
            t = '<a href="' + r + '" target="_blank">请点击此处下载安装最新的flash插件</a>',
            error = {
                w: '您的网页不符合w3c标准，无法显示播放器',
                f: '您没有安装flash插件，无法播放视频，' + t,
                v: '您的flash插件版本过低，无法播放视频，' + t
            },
            w3c = typeof j.getElementById != u && typeof j.getElementsByTagName != u && typeof j.createElement != u,
            i = 'id="' + N + '" name="' + N + '" ',
            s = '',
            l = '';
            P['movie'] = C;
            P['flashvars'] = this.getflashvars(V);
			if(W==-1){
				d=true;
				this._K_(D).style.width='100%';
				W='100%';
			}
            s += '<object pluginspage="http://www.macromedia.com/go/getflashplayer" ';
            s += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
            s += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ';
            s += 'width="' + W + '" ';
            s += 'height="' + H + '" ';
            s += i;
            s += 'align="middle">';
            s += this.getparam(P)['v'];
            s += '<embed ';
            s += this.getparam(P)['w'];
            s += ' width="' + W + '" height="' + H + '" name="' + N + '" id="' + N + '" align="middle" ' + i;
            s += 'type="application/x-shockwave-flash" pluginspage="' + r + '" />';
            s += '</object>';
            if (!w3c) {
                l = error['w'];
				g = true;
            } else {
                if (!this.Flash()['f']) {
                    l = error['f'];
					g = true;
                } else {
                    if (this.Flash()['v'] < 10) {
                        l = error['v'];
						g = true;
                    } else {
                        l = s;
						this._T_=false;
                    }
                }
            }
            if (l) {
                this._K_(D).innerHTML = l;
            }
			if (g){
				this._K_(D).style.color = '#0066cc';
				this._K_(D).style.lineHeight = this._K_(D).style.height;
				this._K_(D).style.textAlign= 'center';
			}
        },
        embedHTML5: function(C, P, W, H, V, A, S) {
            this._E_ = {
                c: C,
                p: P,
                w: W,
                h: H,
                v: V,
                s: S
            };
            this._A_ = A;
			this.getX();
            b = this.browser()['B'],
            v = this.browser()['V'],
            x = v.split('.'),
            t = x[0],
            m = b + v,
            n = b + t,
            w = '',
            s = false,
            f = this.Flash()['f'],
            a = false;
            if (!S) {
                S = ['iPad', 'iPhone', 'ios'];
            }
            for (var i = 0; i < S.length; i++) {
                w = S[i];
                if (w.toLowerCase() == 'all') {
                    s = true;
                    break;
                }
                if (w.toLowerCase() == 'all+false' && !f) {
                    s = true;
                    break;
                }
                if (w.indexOf('+') > -1) {
                    w = w.split('+')[0];
                    a = true;
                } else {
                    a = false;
                }
                if (this.Platform() == w || m == w || n == w || b == w) {
                    if (a) {
                        if (!f) {
                            s = true;
                            break;
                        }
                    }else {
                        s = true;
                        break;
                    }
                }
            }
            if (s) {
                if (V) {
                    var l = V[0].split('->');
                    if (l && l.length == 2 && l[1].indexOf('ajax') > -1) {
                        this.getUrl(l, true);
                        return;
                    }
                }
                this.showHtml5();
            }
        },
        status: function() {
            this._H_ = parseInt(this.getSn('setup', 20));
			var f='ckplayer_status';
			if (this.getSn('calljs', 0)!='') {
				f=this.getSn('calljs', 0);
			}
			try {
				if (typeof(eval(f)) == 'function') {
					this._L_=eval(f);
					this._M_=true;
					return true;
				}
			} catch(e) {
				try {
					if (typeof(eval(ckplayer_status)) == 'function') {
						this._L_=ckplayer_status;
						this._M_=true;
						return true;
					}
				} catch(e) {
					return false;
				}
			}
			return false;
        },
        showHtml5: function() {
            var C = CKobject;
            var p = C._E_['p'],
			a = C._E_['v'],
			c = C._E_['c'],
			b = false;
			var s = this._E_['v'];
			var w=C._E_['w'],h=C._E_['h'];
			var d=false;
			var r='';
			if(s.length==1){
				r=' src="'+s[0].split('->')[0]+'"';
			}
			if(w==-1){
				d=true;
				C._K_(c).style.width='100%';
				w='100%';
			}
			if(w.toString().indexOf('%')>-1){
				w='100%';
			}
			if(h.toString().indexOf('%')>-1){
				h='100%';
			}
			var v = '<video controls'+r+' id="' + p + '" width="' + w + '" height="' + h + '"' + C.getParams() + '>' + C.getVideo() + '</video>';
            C._K_(c).innerHTML = v;
			
            C._K_(c).style.backgroundColor = '#000';
            C._V_ = this._K_(p);
			if(!d){
				C._K_(c).style.width=this._E_['w'].toString().indexOf('%')>-1?(C._K_(c).offsetWidth*parseInt(this._E_['w'])*0.01)+'px':C._V_.width+'px';
				C._K_(c).style.height=this._E_['h'].toString().indexOf('%')>-1?(C._K_(c).offsetHeight*parseInt(this._E_['h'])*0.01)+'px':C._V_.height+'px';
			}
            C._P_ = false;
            C._T_ = true;
			if (C.getVars('loaded')!='') {
				var f=C.getVars('loaded')+'()';
				try {
                	if (typeof(eval(f)) == 'function') {
						eval(f);
					}
				} catch(e) {
					try {
						if (typeof(eval(loadedHandler)) == 'function') {
							loadedHandler();
						}
					} catch(e) {
					}
				}
            }
            C.status();
			C.addListener('play', C.playHandler);
			C.addListener('pause', C.playHandler);
			C.addListener('error', C.errorHandler);
			C.addListener('emptied', C.errorHandler);
			C.addListener('loadedmetadata', C.loadedMetadataHandler);
			C.addListener('ended', C.endedHandler);
			C.addListener('volumechange', C.volumeChangeHandler);
        },
        videoPlay: function() {
            if (this._T_) {
                this._V_.play();
            }
        },
        videoPause: function() {
            if (this._T_) {
                this._V_.pause();
            }
        },
        playOrPause: function() {
            if (this._T_) {
                if (this._V_.paused) {
                    this._V_.play();
                } else {
                    this._V_.pause();
                }
            }
        },
        fastNext: function() {
            if (this._T_) {
                this._V_['currentTime'] = this._V_['currentTime'] + 10;
            }
        },
        fastBack: function() {
            if (this._T_) {
                this._V_['currentTime'] = this._V_['currentTime'] - 10;
            }
        },
        changeVolume: function(n) {
            if (this._T_) {
                this._V_['volume'] = n * 0.01;
            }
        },
        videoSeek: function(t) {
            if (this._T_) {
                this._V_['currentTime'] = t;
            }
        },
        newAddress: function(u) {
            var s = [];
            if (u) {
                s = this.isHtml5New(u);
            } else {
                return;
            }
            if (s && this._T_) {
                this.changeParams(u);
                var l = s[0].split('->');
                if (l && l.length == 2 && l[1].indexOf('ajax') > -1) {
                    this.getUrl(l, false);
                    return;
                }
                this._E_['v'] = s;
                this.newAdr();
            }
        },
		quitFullScreen:function() {
			if(document.cancelFullScreen) {
				document.cancelFullScreen();
			} 
			else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitCancelFullScreen) {
	   			document.webkitCancelFullScreen();
			}

		},
		changeStatus:function(n){
			this._H_=n;
		},
        newAdr: function() {
			var s = this._E_['v'];
            this._V_.pause();
			if(s.length==1){
            	this._V_.src=s[0].split('->')[0];
			}
			else{
				this._V_['innerHTML'] = this.getVideo();
			}
            this._V_.load();
        },
        isHtml5New: function(s) {
            if (s.indexOf('html5') == -1) {
                return false;
            }
            var a = s.replace(/{/g, '');
            var b = a.split('}');
            var c = '';
            for (var i = 0; i < b.length; i++) {
                if (b[i].indexOf('html5') > -1) {
                    c = b[i].replace('html5->', '').split(',');
                    break;
                }
            }
            return c;
        },
        changeParams: function(f) {
            if (f) {
                var a = f.replace(/{/g, '');
                var b = a.split('}');
                var c = '';
                for (var i = 0; i < b.length; i++) {
                    var d = b[i].split('->');
					if(d.length == 2){
						switch(d[0]){
							case 'p':
								if(parseInt(d[1]) == 1){
									this._V_.autoplay = true;
								}
								else if(parseInt(d[1]) == 2){
									this._V_.preload = 'metadata';
								}
								else{
									this._V_.autoplay = false;
									if(this._I_!=null){
										clearInterval(this._I_);
										this._I_=null;
									}
								}
								break;
							case 'e':
								if(parseInt(d[1]) == 1){
									this._V_.loop = true;
								}
								else{
									this._V_.loop = false;
								}
								break;
							case 'i':
								this._V_.poster = d[1];
								break;
							default:
								break;
						}
					}
                }
            }
        },
        frontAdPause: function(s) {
            this.getNot();
        },
        frontAdUnload: function() {
            this.getNot();
        },
        changeFace: function(s) {
            this.getNot();
        },
        plugin: function(a, b, c, d, e, f, g) {
            this.getNot();
        },
        videoClear: function() {
            this.getNot();
        },
        videoBrightness: function(s) {
            this.getNot();
        },
        videoContrast: function(s) {
            this.getNot();
        },
        videoSaturation: function(s) {
            this.getNot();
        },
        videoSetHue: function(s) {
            this.getNot();
        },
        videoWAndH: function(a, b) {
            this.getNot();
        },
        videoWHXY: function(a, b, c, d) {
            this.getNot();
        },
		changeFlashvars: function(a) {
            this.getNot();
        },
		changeMyObject: function(a, b) {
            this.getNot();
        },
		getMyObject: function(a, b) {
            this.getNot();
        },
		changeeFace: function() {
            this.getNot();
        },
		changeStyle: function(a, b) {
            this.getNot();
        },
		promptLoad: function() {
            this.getNot();
        },
		promptUnload: function() {
            this.getNot();
        },
		marqueeLoad: function(a,b) {
            this.getNot();
        },
		marqueeClose: function(s) {
            this.getNot();
        },
        getNot: function() {
            var s='The ckplayer\'s API for HTML5 does not exist';
			return s;
        },
        volumeChangeHandler: function() {
            var C = CKobject;
            if (C._V_.muted) {
                C.returnStatus('volumechange:0', 1);
                C._O_['volume'] = 0;
                C._O_['mute'] = true;
            } else {
                C._O_['mute'] = false;
                C._O_['volume'] = C._V_['volume'] * 100;
                C.returnStatus('volumechange:'+C._V_['volume'] * 100, 1);
            }
        },
        endedHandler: function() {
            var C = CKobject;
			var e=parseInt(C.getVars('e'));
            C.returnStatus('ended', 1);
			if(C._I_){
				clearInterval(C._I_);
				C._I_=null;
			}
            if ( e!= 0 && e !=4 && e !=6) {
                return;
            }
			if(e==6){
				this.quitFullScreen();
			}
			var f='playerstop()';
			if (C.getSn('calljs', 2)!='') {
				f=C.getSn('calljs', 2)+'()';
			}
			try {
				if (typeof(eval(f)) == 'function') {
					eval(f);
					return;
				}
			} catch(e) {
				try {
					if (typeof(eval(playerstop)) == 'function') {
						playerstop();
						return;
					}
				} catch(e) {
					return;
				}
			}
        },
        loadedMetadataHandler: function() {
            var C = CKobject;
            C.returnStatus('loadedmetadata', 1);
            C._O_['totaltime'] = C._V_['duration'];
            C._O_['width'] = C._V_['width'];
            C._O_['height'] = C._V_['height'];
            C._O_['awidth'] = C._V_['videoWidth'];
            C._O_['aheight'] = C._V_['videoHeight'];
            if (C._V_.defaultMuted) {
                C.returnStatus('volumechange:0', 1);
                C._O_['mute'] = true;
                C._O_['volume'] = 0;
            } else {
                C._O_['mute'] = false;
                C._O_['volume'] = C._V_['volume'] * 100;
                C.returnStatus('volumechange:'+C._V_['volume'] * 100, 1);
            }
        },
        errorHandler: function() {
            CKobject.returnStatus('error', 1);
        },
        playHandler: function() {
            var C = CKobject;
            if (C._V_.paused) {
                C.returnStatus('pause', 1);
                C.addO('play', false);
				if(C._I_!=null){
					clearInterval(C._I_);
					C._I_=null;
				}
            } else {
                C.returnStatus('play', 1);
                C.addO('play', true);
                if (!C._P_) {
                    C.returnStatus('play', 1);
                    C._P_ = true;
                }
                C._I_ = setInterval(C.playTime, parseInt( C.getSn('setup', 37)));
				if(!C._G_){
					C._G_=true;
					for(var k in C._A_){
						if(k=='g' && C._A_[k]){
							var g=parseInt(C._A_[k]);
							C.videoSeek(g);
						}	
					}
				}
				if(!C._Y_){
					C._Y_=true;
					for(var k in C._A_){
						if(k=='j' && C._A_[k]){
							var j=parseInt(C._A_[k]);
							if(j>0){
								C._J_=j;
							}
							else{
								C._J_=parseInt(C._O_['totaltime'])+j;
							}
						}	
					}
				}
            }
        },
        returnStatus: function(s, j) {
            var h = s;
            if (this._H_ == 3) {
                h = this._E_['p'] +'->'+ h;
            }
            if (this._M_ && j <= this._H_ ) {
                this._L_(h);
            }
        },
        addO: function(s, z) {
            this._O_[s] = z;
        },
        getStatus: function() {
            return this._O_;
        },
        playTime: function() {
            var C = CKobject;
            var t = C._V_['currentTime'];
            C._O_['time'] = t;
			if(C._J_>0 && t>C._J_){
				C._J_=0;
				C.videoSeek(C._O_['totaltime']);
			}
            C.returnStatus('time:' + t, 1);
        }
    }
    window.CKobject = CKobject;
})();
>>>>>>> 7366e5e69a5a72c775c884bc631f212614993bb7
