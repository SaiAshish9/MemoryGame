(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),d=a(3),l=a(6),i=a(7),u=a(9),s=a(8),I=a(1),k=a(10),b=a(2),C=a.n(b),G=(a(17),function(e){var t=e.onNewGame;return r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement("a",null,"Memory Game")),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:t},"New Game"))))}),N=(a(18),function(e){var t={};return e.showing&&(t.backgroundColor=e.backgroundColor),r.a.createElement("div",{onClick:e.onClick,className:"card-container",style:t})}),g={HIDING:0,SHOWING:1,MATCHING:2},h=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this,e));var n=[{id:0,cardState:g.HIDING,backgroundColor:"red"},{id:1,cardState:g.HIDING,backgroundColor:"red"},{id:2,cardState:g.HIDING,backgroundColor:"navy"},{id:3,cardState:g.HIDING,backgroundColor:"navy"},{id:4,cardState:g.HIDING,backgroundColor:"green"},{id:5,cardState:g.HIDING,backgroundColor:"green"},{id:6,cardState:g.HIDING,backgroundColor:"yellow"},{id:7,cardState:g.HIDING,backgroundColor:"yellow"},{id:8,cardState:g.HIDING,backgroundColor:"black"},{id:9,cardState:g.HIDING,backgroundColor:"black"},{id:10,cardState:g.HIDING,backgroundColor:"purple"},{id:11,cardState:g.HIDING,backgroundColor:"purple"},{id:12,cardState:g.HIDING,backgroundColor:"pink"},{id:13,cardState:g.HIDING,backgroundColor:"pink"},{id:14,cardState:g.HIDING,backgroundColor:"lightskyblue"},{id:15,cardState:g.HIDING,backgroundColor:"lightskyblue"}];return n=C()(n),a.state={cards:n,noClick:!1},a.handleClick=a.handleClick.bind(Object(I.a)(a)),a.handleNewGame=a.handleNewGame.bind(Object(I.a)(a)),a}return Object(k.a)(t,e),Object(i.a)(t,[{key:"handleNewGame",value:function(){var e=this.state.cards.map(function(e){return Object(d.a)({},e,{cardState:g.HIDING})});e=C()(e),this.setState({cards:e})}},{key:"handleClick",value:function(e){var t=this,a=function(e,t,a){return e.map(function(e){return t.includes(e.id)?Object(d.a)({},e,{cardState:a}):e})},n=this.state.cards.find(function(t){return t.id===e});if(!this.state.noClick&&n.cardState===g.HIDING){var r=!1,c=a(this.state.cards,[e],g.SHOWING),o=c.filter(function(e){return e.cardState===g.SHOWING}),l=o.map(function(e){return e.id});if(2===o.length&&o[0].backgroundColor===o[1].backgroundColor)c=a(c,l,g.MATCHING);else if(2===o.length){var i=a(c,l,g.HIDING);return r=!0,void this.setState({cards:c,noClick:r},function(){setTimeout(function(){t.setState({cards:i,noClick:!1})},1300)})}this.setState({cards:c,noClick:r})}}},{key:"render",value:function(){var e=this,t=this.state.cards.map(function(t){return r.a.createElement(N,{key:t.id,showing:t.cardState!==g.HIDING,backgroundColor:t.backgroundColor,onClick:function(){return e.handleClick(t.id)}})});return r.a.createElement("div",null,r.a.createElement(G,{onNewGame:this.handleNewGame}),t)}}]),t}(n.Component);a(19);o.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.2b383c0f.chunk.js.map