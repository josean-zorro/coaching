import { QuartzComponentConstructor, QuartzComponentProps } from "./types"  
  
function CalEmbed({ displayClass }: QuartzComponentProps) {  
  return (  
    <div class={displayClass}>  
      <a  
        class="cal-cta"  
        data-cal-link="h.h.chien/bookcoaching"  
        data-cal-namespace="bookcoaching"  
        data-cal-config='{"layout":"month_view"}'  
      >  
        點擊預約教練諮詢  
      </a>  
    </div>  
  )  
}  
  
export default (() => CalEmbed) satisfies QuartzComponentConstructor
