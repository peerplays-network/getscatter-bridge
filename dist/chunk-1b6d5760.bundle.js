(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b6d5760"],{"2d18":function(e,t,n){"use strict";var r=n("4ccc"),a=n.n(r);a.a},3998:function(e,t,n){"use strict";n.r(t);var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"edit-network-account transfer"},[n("section",{staticClass:"popup-content"},[n("section",{staticClass:"head"},[e.addingNewKey?e._e():n("section",{staticClass:"texts"},[n("figure",{staticClass:"title"},[e._v("Select account")]),n("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\t\tIn simple mode you can only use a single account per network. Please select your preferred account.\n\t\t\t\t")])]),e.addingNewKey?n("section",[e.importingHardware?e._e():n("section",{staticClass:"texts"},[n("figure",{staticClass:"title"},[e._v("Import account")]),e._m(0)]),e.importingHardware?n("section",{staticClass:"texts"},[n("figure",{staticClass:"title"},[e._v("Import from hardware")]),n("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\t\t\tThe safest way to utilize your private keys is using a hardware wallet.\n\t\t\t\t\t\tPlug in your hardware wallet now if you haven't already done so.\n\t\t\t\t\t")])]):e._e()]):e._e(),n("figure",{staticClass:"action"},[n("figure",{staticClass:"bubble",class:{active:e.addingNewKey},on:{click:e.toggleAddingKey}},[n("i",{staticClass:"fa fa-plus"})])])]),e.addingNewKey?n("section",{staticClass:"new-key"},[e.importingHardware?e._e():n("section",[n("Input",{staticStyle:{"margin-bottom":"0"},attrs:{disabled:e.loadingKey,label:"Input your private key",text:e.privateKey},on:{changed:function(t){return e.privateKey=t}}}),n("br"),n("figure",{staticClass:"line"}),n("br"),n("Button",{staticStyle:{"margin-bottom":"5px"},attrs:{text:"Generate New Key",primary:"1"},nativeOn:{click:function(t){return e.generateKey(t)}}}),e.canUseHardware?n("Button",{attrs:{text:"Import From Hardware",primary:"1"},nativeOn:{click:function(t){e.importingHardware=!0}}}):e._e()],1),e.importingHardware?n("ImportHardware",{attrs:{blockchain:e.network.blockchain},on:{imported:e.importedHardware}}):e._e()],1):e._e(),e.addingNewKey?e._e():n("section",[e.keys.length?n("section",[n("section",{staticClass:"search"},[n("i",{staticClass:"fa fa-search"}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],domProps:{value:e.terms},on:{input:function(t){t.target.composing||(e.terms=t.target.value)}}})]),n("section",{staticClass:"scroller"},[n("section",{staticClass:"keys"},e._l(e.keys,function(t){return n("section",{key:t.id,staticClass:"key"},[n("figure",{staticClass:"public-key"},[n("figure",{staticClass:"key-text"},[e._v(e._s(t.publicKeys.find(function(t){return t.blockchain===e.network.blockchain}).key))]),e.hasMnemonic?n("figure",{staticClass:"warning"},[e._v("This key is not attached to your mnemonic phrase (words). It will not import when you import your words. You should save this key manually.")]):e._e()]),n("section",{staticClass:"actions"},[t.external?e._e():n("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Export private key",expression:"`Export private key`"}],attrs:{icon:"fa fa-key"},nativeOn:{click:function(n){return e.exportKey(t)}}}),t.external?e._e():n("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Convert blockchains",expression:"`Convert blockchains`"}],attrs:{icon:"fa fa-link"},nativeOn:{click:function(n){return e.convertKeypair(t)}}}),e.isAccountlessChain?e._e():n("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Refresh accounts",expression:"`Refresh accounts`"}],attrs:{icon:"fa fa-sync-alt",loading:e.loadingAccounts[t.unique()]},nativeOn:{click:function(n){return e.refreshAccounts(t)}}}),n("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Remove key",expression:"`Remove key`"}],attrs:{icon:"fa fa-trash"},nativeOn:{click:function(n){return e.removeKey(t)}}})],1),n("section",{staticClass:"accounts"},e._l(e.keyAccounts(t),function(t){return n("Button",{key:t.unique(),attrs:{text:e.isAccountlessChain?"Use this address":t.sendable(),primary:e.isCurrentlySelected(t)},nativeOn:{click:function(n){return e.select(t)}}})}),1)])}),0)])]):n("section",{staticClass:"no-keys"},[n("img",{attrs:{src:"static/assets/identity.svg"}}),n("p",[e._v("You have no keys imported")])])])]),n("section",{staticClass:"popup-buttons"},[n("Button",{attrs:{text:"Cancel"},nativeOn:{click:function(t){return function(){return e.closer(null)}()}}})],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"sub-title"},[e._v("\n\t\t\t\t\t\tBlockchain accounts are linked to "),n("b",[e._v("private keys")]),e._v(".\n\t\t\t\t\t\tIf you have a private key, you can import it from text or a hardware wallet below.\n\t\t\t\t\t")])}],o=(n("8e6e"),n("456d"),n("55dd"),n("96cf"),n("3b8d")),c=n("bd86"),s=(n("7514"),n("ac6a"),n("f289"),n("17e3"),n("4815")),u=n("2f62"),l=n("aa3c"),d=n("28b9"),p=n.n(d),f=n("4b59"),h=n("21f8"),k=n("6d42"),w=n.n(k),b=n("1f17"),y=n.n(b),m=n("3b57"),g=n.n(m),x=n("e65a"),v=n.n(x),K=n("20cb"),C=n.n(K),O=n("b16e");function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={props:["popin","closer"],components:{ImportHardware:function(){return n.e("chunk-58c8a4d4").then(n.bind(null,"312f"))}},data:function(){return{importingHardware:!1,canUseHardware:!1,hardwareBlockchains:[],addingNewKey:!1,terms:"",privateKey:"",loadingKey:!1,loadingAccounts:{},accounts:{}}},created:function(){var e=this;this.keys.map(function(t){return e.loadAccounts(t)}),this.importing&&(this.addingNewKey=!0),window.wallet.hardwareTypes().then(function(t){return e.canUseHardware=t.length&&t.some(function(t){return t.blockchains.find(function(t){return t===e.network.blockchain})})}).catch(function(){return e.canUseHardware=!1})},computed:A({},Object(u["d"])(["scatter"]),{isAccountlessChain:function(){return!C.a.plugin(this.network.blockchain).accountsAreImported()},network:function(){return this.popin.data.props.network},importing:function(){return this.popin.data.props.importing},keys:function(){var e=this;return this.scatter.keychain.keypairs.filter(function(t){return t.blockchains[0]===e.network.blockchain})},currentlySelected:function(){return s["a"].accounts([this.network])[0]},hasMnemonic:function(){return!!this.scatter.keychain.keypairs.find(function(e){return e.base})}}),methods:A({loadAccounts:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=s["a"].accounts([this.network])[0],e.next=3,v.a.getAccountsFor(t,this.network);case 3:r=e.sent,n&&n.keypairUnique===t.unique()&&!r.find(function(e){return e.unique()===n.unique()})&&r.unshift(n),this.accounts[t.unique()]=r,!s["a"].accounts([this.network]).length&&r.length&&s["a"].setPredefinedAccount(this.network,r[0]),this.$forceUpdate();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),importedHardware:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isUnique()){e.next=8;break}return e.next=3,g.a.saveKeyPair(t);case 3:return e.next=5,this.loadAccounts(t);case 5:this.importingHardware=!1,this.loadingKey=!1,this.addingNewKey=!1;case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),toggleAddingKey:function(){this.addingNewKey=!this.addingNewKey,this.importingHardware=!1},generateKey:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=y.a.placeholder(),t.blockchains=[this.network.blockchain],e.next=4,g.a.generateKeyPair(t);case 4:return e.next=6,g.a.makePublicKeys(t);case 6:return t.setName(),e.next=9,g.a.saveKeyPair(t);case 9:if(this.exportKey(t,!0),!this.isAccountlessChain){e.next=15;break}return n=w.a.fromJson({keypairUnique:t.unique(),networkUnique:this.network.unique(),publicKey:t.publicKeys.find(function(e){return e.blockchain===r.network.blockchain}).key}),e.next=14,v.a.addAccount(n);case 14:this.select(n,!1);case 15:return e.next=17,this.loadAccounts(t);case 17:this.loadingKey=!1,this.addingNewKey=!1;case 19:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),isCurrentlySelected:function(e){return!!this.currentlySelected&&this.currentlySelected.identifiable()===e.identifiable()},exportKey:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],!n){e.next=5;break}e.t0=!0,e.next=8;break;case 5:return e.next=7,new Promise(function(e){h["a"].push(f["a"].getPassword(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",e(!1));case 2:if(!window.wallet){t.next=8;break}return t.t0=e,t.next=6,window.wallet.verifyPassword(n).catch(function(){return!1});case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()))});case 7:e.t0=e.sent;case 8:r=e.t0,r&&h["a"].push(f["a"].exportPrivateKey(t));case 10:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),removeKey:function(e){if(e.base)return h["a"].push(f["a"].snackbar("This is a base key which belongs to your seed, you can not remove it."));h["a"].push(f["a"].confirmDeleteKeypair(function(t){t&&g.a.removeKeyPair(e)}))},refreshAccounts:function(e){var t=this;this.loadingAccounts[e.unique()]||(this.loadingAccounts[e.unique()]=!0,this.$forceUpdate(),setTimeout(function(){delete t.loadingAccounts[e.unique()],t.$forceUpdate()},1e3))},keyAccounts:function(e){var t=this;return this.accounts[e.unique()]?this.accounts[e.unique()].filter(function(e){return e.sendable().toLowerCase().trim().indexOf(t.terms.toLowerCase().trim())>-1}).sort(function(e,t){return"active"===t.authority?1:0}).reduce(function(e,t){return e.find(function(e){return e.sendable()===t.sendable()})||e.push(t),e},[]):[]},addHardware:function(){},select:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=!(a.length>1&&void 0!==a[1])||a[1],r=this.network.accounts(),!r.length){e.next=5;break}return e.next=5,v.a.removeAccounts(r);case 5:return e.next=7,v.a.addAccount(t);case 7:s["a"].setPredefinedAccount(this.network,t),p.a.loadBalancesFor(t),n&&this.closer(!0);case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),checkTextKey:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["a"].checkTextKey(this.privateKey,this.network.blockchain);case 2:if(t=e.sent,this.loadingKey=!1,!t){e.next=11;break}return this.privateKey=null,this.addingNewKey=!1,e.next=9,g.a.saveKeyPair(t);case 9:return e.next=11,this.loadAccounts(t);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),convertKeypair:function(e){h["a"].push(f["a"].convertKeypair(e,function(e){e&&h["a"].push(f["a"].snackbar("Conversion successful. Check the network for the corresponding blockchain."))}))}},Object(u["b"])([l["SET_BALANCES"],l["REMOVE_BALANCES"]])),watch:Object(c["a"])({},"privateKey",function(){var e=this;clearTimeout(r),r=setTimeout(function(){e.checkTextKey()},500)})},P=j,N=(n("2d18"),n("2877")),R=Object(N["a"])(P,a,i,!1,null,null,null);t["default"]=R.exports},"4ccc":function(e,t,n){var r=n("6c18");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("42ac894b",r,!0,{sourceMap:!1,shadowMode:!1})},"6c18":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".edit-network-account{max-width:500px;width:calc(100% - 80px);margin:0 auto}.edit-network-account .popup-content{padding:0}.edit-network-account .no-keys{padding:20px 0}.edit-network-account .no-keys img{width:180px;height:auto}.edit-network-account .no-keys p{color:#999;font-size:13px;font-weight:700}.edit-network-account .new-key{padding:20px}.edit-network-account .new-key button{width:100%}.edit-network-account .head{padding:20px;text-align:left;border-bottom:1px solid rgba(0,168,255,.08)}.edit-network-account .head .texts{max-width:calc(100% - 80px)}.edit-network-account .head .texts .title{font-size:16px;font-weight:700;margin:0}.edit-network-account .head .texts .sub-title{margin-top:0;font-size:13px}.edit-network-account .head .action{position:absolute;top:20px;right:20px}.edit-network-account .head .action .bubble{width:40px;height:40px;background:#00a8ff;color:#fff;font-size:18px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;cursor:pointer;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.edit-network-account .head .action .bubble:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.edit-network-account .head .action .bubble:active{-webkit-transform:scale(.9);transform:scale(.9)}.edit-network-account .head .action .bubble.active{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.edit-network-account .head .action .bubble.active:hover{-webkit-transform:rotate(45deg) scale(1.1);transform:rotate(45deg) scale(1.1)}.edit-network-account .head .action .bubble.active:active{-webkit-transform:rotate(45deg) scale(.9);transform:rotate(45deg) scale(.9)}.edit-network-account .scroller{padding-bottom:40px;overflow-y:auto;max-height:320px}.edit-network-account .search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border-bottom:1px solid rgba(0,168,255,.08)}.edit-network-account .search i{margin-right:10px;font-size:11px}.edit-network-account .search input{border:0;outline:0;-webkit-box-flex:1;-ms-flex:1;flex:1}.edit-network-account .keys{padding:20px}.edit-network-account .keys .key{text-align:left;padding:10px;border:3px solid rgba(0,168,255,.08);border-radius:4px}.edit-network-account .keys .key .public-key{margin-bottom:10px}.edit-network-account .keys .key .public-key .key-text{font-size:11px;word-break:break-word;font-weight:700;color:#00a8ff;text-align:center;border-bottom:1px solid rgba(0,168,255,.08);padding-bottom:10px}.edit-network-account .keys .key .public-key .warning{font-size:11px;color:#fff;background:#de4136;padding:5px 10px;border-radius:4px;margin-top:5px;display:table}.edit-network-account .keys .key .accounts{margin-top:20px}.edit-network-account .keys .key .accounts button{width:100%;margin-top:5px}.edit-network-account .keys .key .actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.edit-network-account .keys .key .actions button{padding:10px;height:auto;margin-left:5px}.edit-network-account .keys .key .actions button .icon{font-size:13px}.blue-steel .edit-network-account .head,.blue-steel .edit-network-account .search{border-bottom:1px solid hsla(0,0%,100%,.1)}.blue-steel .edit-network-account .keys .key{border:3px solid hsla(0,0%,100%,.1)}.blue-steel .edit-network-account .keys .key .public-key .key-text{border-bottom:1px solid hsla(0,0%,100%,.1)}",""])}}]);