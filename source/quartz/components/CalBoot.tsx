import { QuartzComponentConstructor, QuartzComponentProps } from "./types"  
  
function CalBoot({ displayClass }: QuartzComponentProps) {  
  return <div class={displayClass}></div>  
}  
  
CalBoot.afterDOMLoaded = `  
if (!window.__calBooted) {  
  (function (C, A, L) {  
    let p = function (a, ar) { a.q.push(ar); };  
    let d = C.document;  
    C.Cal = C.Cal || function () {  
      let cal = C.Cal, ar = arguments;  
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }  
      if (ar[0] === L) {  
        const api = function () { p(api, arguments); }, ns = ar[1];  
        api.q = api.q || []; if (typeof ns === "string") { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ["initNamespace", ns]); } else p(cal, ar);  
        return;  
      }  
      p(cal, ar);  
    };  
  })(window, "https://app.cal.com/embed/embed.js", "init");  
  
  window.__calBooted = true;  
}  
  
Cal("init", "bookcoaching", { origin: "https://app.cal.com" });  
Cal.ns.bookcoaching("ui", { layout: "month_view", hideEventTypeDetails: false });  
`  
  
export default (() => CalBoot) satisfies QuartzComponentConstructor
