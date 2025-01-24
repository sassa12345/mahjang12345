(()=>{"use strict";
/*!
 *  電脳麻将: 何切る解答機 v2.4.14
 *
 *  Copyright(C) 2017 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/Majiang/blob/master/LICENSE
 */const{hide:a,show:n,fadeIn:e,fadeOut:i}=Majiang.UI.Util;let t;function o(){a($(".shan, .shoupai, .analyzer"));let n=$('input[name="paistr"]').val();if(!n)return!1;let i=+$('select[name="zhuangfeng"]').val(),o=+$('select[name="menfeng"]').val(),p=$.makeArray($('input[name="baopai"]')).map((a=>$(a).val())).filter((a=>a)),l=$('input[name="hongpai"]').prop("checked"),u=Majiang.Shoupai.fromString(n);n=u.toString(),l||(n=n.replace(/0/,"5"));const r=function(a,n,e,i,o){let p={id:0,rule:Majiang.rule({赤牌:o}),player:[],qijia:0};const l=new Majiang.UI.Analyzer($(".analyzer"),{kaiju:p},t);let u={zhuangfeng:n,jushu:(4-e)%4,changbang:0,lizhibang:0,defen:[25e3,25e3,25e3,25e3],baopai:i.length&&Majiang.Shoupai.valid_pai(i[0])||"z2",shoupai:["","","",""]};u.shoupai[e]=a,l.next({qipai:u});for(let a=1;a<i.length;a++)l.next({kaigang:{baopai:i[a]}});return l}(n,i,o,p,l?{m:1,p:1,s:1}:{m:0,p:0,s:0});u._zimo&&(2==u._zimo.length?r.action_zimo({l:o,p:u._zimo}):r.action_fulou({l:o,m:u._zimo})),new Majiang.UI.Shan($(".shan"),t,r.shan).redraw(),new Majiang.UI.Shoupai($(".shoupai"),t,r.shoupai).redraw(!0),e($(".shan, .shoupai, .analyzer")),n=r.shoupai.toString(),p=r.shan.baopai,$('input[name="paistr"]').val(n);for(let a=0;a<5;a++)$('input[name="baopai"]').eq(a).val(p[a]||"");let s="#"+[n,i,o,p.join(",")].join("/");return l||(s+="/1"),history.replaceState("","",s),!1}$((function(){t=Majiang.UI.pai("#loaddata"),$("form").on("submit",o),$("form").on("reset",(function(){a($(".shan, .shoupai, .analyzer")),$('form input[name="paistr"]').focus()})),function(a){if(a){let[n,e,i,t,p]=a.split(/\//);t=(t||"").split(/,/),p=!p,$('input[name="paistr"]').val(n),$('select[name="zhuangfeng"]').val(e),$('select[name="menfeng"]').val(i);for(let a=0;a<t.length;a++)$('input[name="baopai"]').eq(a).val(t[a]);$('input[name="hongpai"]').prop("checked",p),o()}else $('input[name="paistr"]').val("m123p1234789s338s8").focus(),$('input[name="baopai"]').eq(0).val("s3")}(location.hash.replace(/^#/,""))}))})();