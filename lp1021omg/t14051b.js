// 10/21 14051 最初の画面の文字を減らす（増田さん直接『これ文字多すぎだろ』）
function T14051b(raw){
 var h=raw,c={};
 function rep(a,b,n,k){var m=h.split(a).length-1;c[k]=m;if(m!==n)throw new Error(k+' '+m+'/'+n);h=h.split(a).join(b);}
 rep('\n <p class="r-title">推薦入試専門塾リザプロ代表が話す<br><b>わが子<i class="tk">の</i>「好き」<i class="tk">を</i>志望理由<i class="tk">に</i>変える勉強会</b></p>','',3,'title');
 rep('<p class="on">オンライン・参加無料<br>講師：孫 辰洋</p>','<p class="on">オンライン・無料</p>',3,'on');
 rep("<b style='color:#FFE16A'>本日21日（水）20:00〜</b> 推薦入試勉強会<br>オンライン・参加無料｜<b style='color:#FFE16A'>まだ間に合います</b>","<b style='color:#FFE16A'>本日21日（水）20:00〜</b>｜<b style='color:#FFE16A'>まだ間に合います</b>",1,'bar');
 return {h:h,c:c};
}
