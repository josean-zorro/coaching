import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const GoogleAnalytics: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <>
        {/* Async script for gtag.js */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FHC5GZF1QQ"
        ></script>

        {/* Inline script to configure gtag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FHC5GZF1QQ');
            `,
          }}
        />
      </>
    )
  }

  return GoogleAnalytics
}) satisfies QuartzComponentConstructor
