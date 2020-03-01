(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a55a83b4"],{2646:function(t,e,n){var s=n("ee44");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=n("499e").default;a("00d27c6b",s,!0,{sourceMap:!1,shadowMode:!1})},"55f0":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".transfer-head .line[data-v-dfb3620e]{height:2px;background:#00a8ff;margin:0 auto;width:100%}.transfer-head .sub-title[data-v-dfb3620e]{font-size:13px}",""])},"89de":function(t,e,n){"use strict";var s=n("cc22"),a=n.n(s);a.a},9180:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"transfer move-ridl"},[n("section",{staticClass:"popup-content"},[n("TransferHead",{attrs:{token:t.token,title:"How much <span>RIDL</span> do you want to <span>move</span>?",subtitle:"Where do you want to move them to?"},on:{amount:function(e){return t.token.amount=e}}}),n("section",{staticClass:"switcher"},[n("figure",{staticClass:"type",class:{active:t.state===t.STATES.TO_IDENTITY},on:{click:function(e){t.state=t.STATES.TO_IDENTITY}}},[t._v("Identity")]),n("figure",{staticClass:"type",class:{active:t.state===t.STATES.TO_ACCOUNT},on:{click:function(e){t.state=t.STATES.TO_ACCOUNT}}},[t._v("Account")])]),n("br"),t.state===t.STATES.TO_IDENTITY?n("section",[n("Input",{attrs:{placeholder:"identity@scatter",text:t.recipient},on:{changed:function(e){return t.recipient=e}}}),n("figure",{staticClass:"description"},[t._v("\n\t\t\t\tIt will take 24 hours before you can use these in your identity for assigning reputations.\n\t\t\t")])],1):t._e(),t.state===t.STATES.TO_ACCOUNT?n("section",[n("section",{staticClass:"flex",staticStyle:{"margin-bottom":"20px"}},[n("Input",{staticStyle:{"margin-bottom":"0"},attrs:{placeholder:"Account name",text:t.recipient},on:{changed:function(e){return t.recipient=e}}}),n("Select",{staticStyle:{"margin-top":"0"},attrs:{parser:function(t){return t?t.name:"Select a network"},options:t.networks,selected:t.selectedNetwork?t.selectedNetwork.name:null},on:{selected:function(e){return t.selectNetwork(e)}}})],1),n("figure",{staticClass:"description"},[t._v("\n\t\t\t\tThis will take a minimum of three minutes.\n\t\t\t")])]):t._e()],1),n("section",{staticClass:"popup-buttons"},[n("Button",{attrs:{text:"Cancel"},nativeOn:{click:function(e){return function(){return t.closer(null)}()}}}),n("Button",{attrs:{loading:t.sending,primary:"1",text:"Move Tokens",icon:"fal fa-random"},nativeOn:{click:function(e){return t.moveTokens(e)}}})],1)])},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("bd86")),o=(n("96cf"),n("3b8d")),r=(n("f289"),n("a0b2")),c=n("ccb6"),u=n("2f62"),l=(n("3f4d"),n("4de1")),f=n("21f8"),h=n("4b59"),p=n("3350"),d=n.n(p),m=n("4815");function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,s)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T={TO_ACCOUNT:0,TO_IDENTITY:1},v={props:["popin","closer"],components:{TransferHead:c["a"],SymbolBall:r["a"]},data:function(){return{recipient:"",sending:!1,STATES:T,state:T.TO_IDENTITY,availableChains:[],selectedNetwork:null}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].getChains();case 2:this.availableChains=t.sent,this.selectedNetwork=this.availableChains[0];case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),computed:b({},Object(u["d"])(["scatter"]),{token:function(){return this.popin.data.props.token},networks:function(){var t=this;return this.availableChains?[null].concat(this.scatter.settings.networks.filter(function(e){return"eos"===e.blockchain&&t.availableChains.includes(e.chainId)&&e.chainId!==t.token.chainId})):[]}}),methods:{selectNetwork:function(t){if(this.selectedNetwork=t,t){var e=m["a"].accounts([this.selectedNetwork])[0];if(e)return this.recipient=e.sendable()}this.recipient=""},moveTokens:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.recipient.length){t.next=2;break}return t.abrupt("return",f["a"].push(h["a"].snackbar("You must enter a recipient.")));case 2:if(this.sending=!0,e=m["a"].accounts([this.token.network()])[0],this.state!==T.TO_ACCOUNT){t.next=12;break}if(this.selectedNetwork){t.next=9;break}f["a"].push(h["a"].snackbar("You must select a network first.")),t.next=12;break;case 9:return t.next=11,l["a"].moveTokensToAccount(e,this.token,this.recipient,this.selectedNetwork);case 11:n=t.sent;case 12:if(this.state!==T.TO_IDENTITY){t.next=16;break}return t.next=15,l["a"].moveTokensToIdentity(e,this.token,this.recipient);case 15:n=t.sent;case 16:n&&(n.hasOwnProperty("error")?f["a"].push(h["a"].snackbar(n.error)):(f["a"].push(h["a"].transactionSuccess(this.account.blockchain(),d.a.getTransferId(n,this.account.blockchain()))),this.closer(n))),this.sending=!1;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{}},O=v,w=(n("f641"),n("2877")),g=Object(w["a"])(O,s,a,!1,null,null,null);e["default"]=g.exports},cc22:function(t,e,n){var s=n("55f0");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=n("499e").default;a("662a67c8",s,!0,{sourceMap:!1,shadowMode:!1})},ccb6:function(t,e,n){"use strict";var s,a,i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"transfer-head",on:{mouseup:function(e){t.holding=!1}}},[t.hide?t._e():n("section",[t.title?n("figure",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}):t._e(),n("section",{staticClass:"amount"},[n("Input",{attrs:{disabled:t.value,text:t.asTokens?t.amount:t.fiat,prefix:t.isStableCoin?t.currency:t.asTokens?t.token.symbol:"$",placeholder:"25",type:"number",big:"1"},on:{changed:function(e){return t.asTokens?t.amount=e:t.fiat=e},prefixed:function(e){!t.tokensOnly&&(t.asTokens=!t.asTokens)}}}),t.value?t._e():n("section",{staticClass:"buttons"},[n("Button",{attrs:{icon:"fas fa-minus"},nativeOn:{mousedown:function(e){return t.subOne(e)}}}),n("Button",{attrs:{icon:"fas fa-plus"},nativeOn:{mousedown:function(e){return t.addOne(e)}}})],1)],1),t.tokensOnly||t.asTokens?t._e():n("figure",{staticClass:"tokens-value"},[t._v(t._s(isNaN(t.amount)?0:t.amount||0)+" "+t._s(t.token.symbol))]),(t.isStableCoin||t.isSystemToken)&&!t.tokensOnly&&t.asTokens?n("figure",{staticClass:"tokens-value"},[t._v("$"+t._s(isNaN(t.fiat)?0:t.fiat||0))]):t._e(),n("figure",{staticClass:"line"}),t.subtitle?n("figure",{staticClass:"sub-title"},[t._v(t._s(t.subtitle))]):t._e()])])},r=[],c=n("bd86"),u=(n("f289"),n("a0b2")),l=n("1397"),f=n("4e63"),h=n.n(f),p={props:["title","subtitle","token","hide","value","info","max"],components:{SymbolBall:u["a"]},data:function(){return{fiat:null,amount:null,asTokens:!0,holding:!1,tokensOnly:!1}},computed:{isStableCoin:function(){return l["a"].isStableCoin(this.token)},isSystemToken:function(){return l["a"].isSystemToken(this.token)},currency:function(){return h.a.fiatSymbol()}},mounted:function(){this.value?(this.amount=this.value,this.fiat=parseFloat(parseFloat(this.token.fiatPrice(!1))*parseFloat(this.amount)).toFixed(2)):this.amount=this.token.amount,this.token.fiatPrice(!1)||(this.tokensOnly=!0,this.asTokens=!0)},methods:{addOne:function(){this.holdButtons(1)},subOne:function(){this.holdButtons(-1)},holdButtons:function(t){var e=this;this.holding=!0,clearInterval(a),clearTimeout(i),this.deltaBalance(t),i=setTimeout(function(){a=setInterval(function(){if(!e.holding)return clearInterval(a);e.deltaBalance(t)},50)},300)},deltaBalance:function(t){this.makeNumber(),this.asTokens?this.amount=parseFloat(this.amount)+t:this.fiat=parseFloat(this.fiat)+t,this.fiat<0&&(this.fiat=0),this.amount<0&&(this.amount=0)},makeNumber:function(){this.amount&&!isNaN(this.token.amount)||(this.amount=0),this.fiat&&!isNaN(this.fiat)||(this.fiat=0)}},watch:(s={},Object(c["a"])(s,"fiat",function(){this.asTokens||(this.max&&this.max<parseFloat(this.fiat)&&(this.fiat=this.max),this.amount=parseFloat(parseFloat(this.fiat)/this.token.fiatPrice(!1)).toFixed(this.token.decimals),this.$emit("amount",this.amount))}),Object(c["a"])(s,"amount",function(){this.asTokens&&(this.fiat=parseFloat(parseFloat(this.token.fiatPrice(!1))*parseFloat(this.amount)).toFixed(2),this.$emit("amount",this.amount))}),s)},d=p,m=(n("89de"),n("2877")),k=Object(m["a"])(d,o,r,!1,null,"dfb3620e",null);e["a"]=k.exports},ee44:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".move-ridl .select .options{top:45px}.move-ridl .description{font-size:13px}.move-ridl .description b{color:#de4136}",""])},f641:function(t,e,n){"use strict";var s=n("2646"),a=n.n(s);a.a}}]);