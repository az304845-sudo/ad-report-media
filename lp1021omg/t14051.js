// 10/21 14051 直し（DRM依頼・増田さん直接OKのあとに本番）。raw（または公開HTML）を受け取り、直した文字列と件数を返す
function T14051(raw){
 var h=raw,c={};
 function rep(a,b,n,k){var m=h.split(a).length-1;c[k]=m;if(m!==n)throw new Error(k+' '+m+'/'+n);h=h.split(a).join(b);}
 // ① すごい実績
 rep('<span class="a">なぜ、あの子<i class="tk">は</i></span><span class="b">すごい実績<i class="tk">がなくても</i></span><span class="c">推薦<i class="tk">で</i>受かったのか？</span>',
     '<span class="a">推薦<i class="tk">で</i>受かった先輩<i class="tk">は</i></span><span class="b">何<i class="tk">を</i>して</span><span class="c">受かったのか？</span>',3,'fv');
 rep('<h2>すごい実績がなくても、<br><span class="mk">推薦で受かった4人</span></h2>','<h2>推薦で受かった<br><span class="mk">4人の先輩</span></h2>',1,'bk4h');
 rep('4人とも、はじめから「すごい実績」があったわけではありません。何をして、どう受かったのかをまとめました。','4人が何をして、どう受かったのかをまとめました。この先輩たちがどう受かったのか、勉強会でくわしく話します。',1,'bk4lead');
 rep('「すごい実績がない子」でも、<span class="r">推薦を目指せる理由</span>','推薦で受かった先輩が、<span class="r">何をしてきたのか</span>',1,'t01');
 // ③ 数字
 rep('3,000人以上','3,500人以上',4,'3500');
 rep('（早慶上智・MARCH・関関同立の12校分）','（早慶上智・MARCH・関関同立）',3,'12');
 // ② 実例カード：顔写真のある4人（野村・岩田・浜田・柳田）だけに
 var CARD=/<div class="bk4-case"[\s\S]*?<\/ul><\/div>(?:\s*<p class="bk4-src">[^<]*<\/p>)?/g;
 var cards=h.match(CARD)||[];c.cards=cards.length;if(cards.length!==8)throw new Error('cards '+cards.length);
 function pick(name){var x=cards.filter(function(k){return k.indexOf('alt="'+name+'"')>=0;});if(x.length<1)throw new Error('nocard '+name);var k=x[0];if(k.indexOf('<p class="bk4-src">')<0){k+='\n <p class="bk4-src">リザプロ合格者インタビューより</p>';}return k;}
 var o=[pick('野村さん'),pick('岩田さん'),pick('浜田さん'),pick('柳田くん')].join('\n\n '),p=[pick('柳田くん'),pick('岩田さん'),pick('野村さん'),pick('浜田さん')].join('\n\n ');
 var so='<div class="bk4-set" data-set="o">',sp='<div class="bk4-set" data-set="p" hidden>',se='<script>(function(){if(!/[?&]case=p';
 var i0=h.indexOf(so),i1=h.indexOf(sp),i2=h.indexOf(se);if(!(i0>0&&i1>i0&&i2>i1))throw new Error('sets');
 var pend=h.lastIndexOf('</div>',i2);
 h=h.slice(0,i0)+so+'\n '+o+'\n </div>\n '+sp+'\n '+p+'\n'+h.slice(pend,i2)+h.slice(i2);
 // ④ イニシャル
 var N={'今村さん':'Iさん','野村さん':'Nさん','岩田さん':'Iさん','浜田さん':'Hさん','井上さん':'Iさん','小峰さん':'Kさん','柳田くん':'Yくん','小島くん':'Kくん','奥村くん':'Oくん','寺田さん':'Tさん'};
 for(var k in N){c['n_'+k]=h.split(k).length-1;h=h.split(k).join(N[k]);}
 c.left_sugoi=(h.replace(/<!--[\s\S]*?-->/g,'').match(/すごい実績/g)||[]).length;
 return {h:h,c:c};
}
