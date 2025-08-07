
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function CalEmbed({ displayClass }: QuartzComponentProps) {
  return (
    <div class={displayClass}>
      <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "bookcoaching", {origin:"https://app.cal.com"});

  Cal.ns.bookcoaching("floatingButton", {"calLink":"h.h.chien/bookcoaching","config":{"layout":"month_view"},"buttonText":"點擊預約教練諮詢"}); 
  Cal.ns.bookcoaching("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`
      }} />
    </div>
  )
}

export default (() => CalEmbed) satisfies QuartzComponentConstructor
