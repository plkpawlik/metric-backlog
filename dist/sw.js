if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(s(...e),t)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.1c75d186.js",revision:null},{url:"assets/index.5c4fccb8.css",revision:null},{url:"index.html",revision:"fb9069704a827040f650ccbe106513aa"},{url:"android-chrome-192x192.png",revision:"ac17b6d7c9de4eafda4c0b78518c02a2"},{url:"android-chrome-512x512.png",revision:"f332dd6b868b062f37239ab0bee5788b"},{url:"manifest.webmanifest",revision:"b58a595662a095fbfdde03b8373bde69"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
