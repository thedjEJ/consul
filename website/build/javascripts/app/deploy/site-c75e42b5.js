var Serf=function(){function t(){Serf.Util.runIfClassNamePresent("page-home",e)}function e(){Serf.Util.isMobile?Serf.Home.mobileHero():Serf.Nodes.init()}return{initialize:t}}(),Serf=Serf||{};!function(){function t(t,e){var n=document.getElementsByClassName(t);n.length>0&&e()}var e=function(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?!0:!1}();Serf.Util={},Serf.Util.isMobile=e,Serf.Util.runIfClassNamePresent=t}();var Serf=Serf||{};!function(){function t(){var t=document.getElementById("jumbotron");t.className=t.className+" mobile-hero"}Serf.Home={},Serf.Home.mobileHero=t}();var Serf=Serf||{};!function(){function t(t){for(var e=p[t],i=g.select("#id_"+e.index).classed("active linkgroup_"+f,!0),r={},o=[],s=0;s<p.length;s++)if(s!=t){var a=p[s],l=g.select("#id_"+s),u=l.attr("cx")-i.attr("cx"),c=l.attr("cy")-i.attr("cy"),h=Math.sqrt(u*u+c*c);h in r?r[h].push(a):r[h]=[a],o.push(h)}for(o.sort(d3.ascending),s=0;3>s;s++){var h=o[s],a=r[h].pop(),d={source:e,target:a};m.push(d)}n()}function e(){y.attr("x1",function(t){return t.source.x}).attr("y1",function(t){return t.source.y}).attr("x2",function(t){return t.target.x}).attr("y2",function(t){return t.target.y}),v.attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y})}function n(){v=v.data(p),v.enter().insert("circle",".cursor").attr("class","node").attr("r",12).attr("id",function(t,e){return"id_"+e}).call(d.drag),y=y.data(m),y.enter().insert("line",".node").attr("class","link active linkgroup_"+f),d.start(),r(f),f++}function r(t){setTimeout(o,700,t)}function o(t){g.selectAll(".linkgroup_"+t).classed("active",!1)}function s(){var t=document.getElementById("node-canvas");wW=window.innerWidth,t.style.left=(wW-l)/2+"px"}function a(){for(n(),i=0;h>i;i++)setTimeout(t,700*i+1e3,i)}var l=1400,u=490,c=50,h=128,f=0,p=[];for(i=0;h>i;i++)p.push({x:Math.random()*(l-c)+c/2,y:Math.random()*(u-c)+c/2});d3.scale.category20();var d=d3.layout.force().size([l,u]).nodes(p).linkDistance(60).charge(-1).gravity(4e-4).on("tick",e),g=d3.select("#jumbotron").append("svg").attr("id","node-canvas").attr("width",l).attr("height",u);s(),g.append("rect").attr("width",l).attr("height",u);var p=d.nodes(),m=d.links(),v=g.selectAll(".node"),y=g.selectAll(".link");g.append("circle").attr("r",30).attr("transform","translate(-100,-100)").attr("class","cursor"),window.onresize=function(){s()},Serf.Nodes={},Serf.Nodes.init=a}();