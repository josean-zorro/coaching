import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
import style from "./styles/photogallery.scss"
// @ts-ignore

interface PhotoGalleryOptions {
  photos: string[]
  layout?: "grid" | "stacked"
}

const defaultOptions: PhotoGalleryOptions = {
  photos: [],
  layout: "grid",
}

export default ((userOpts?: PhotoGalleryOptions) => {
  const opts: PhotoGalleryOptions = { ...defaultOptions, ...userOpts }

  function PhotoGallery(props: QuartzComponentProps) {
    if (opts.photos.length === 0) {
      return null
    }

    return (
      <div class="my-photo-gallery">
        {opts.photos.map((src, i) => (
          <img key={i} src={src} alt={`Photo ${i + 1}`} />
        ))}
      </div>
    )
  }

  // Attach the imported CSS
  PhotoGallery.css = style

  return PhotoGallery
}) satisfies QuartzComponentConstructor
