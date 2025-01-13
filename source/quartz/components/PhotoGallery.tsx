import { QuartzComponentProps, QuartzComponentConstructor } from "./types"

// 1. Define an interface for our options
interface PhotoGalleryOptions {
  // A list of image sources
  photos: string[]
  // A style preference for layout
  layout?: "grid" | "stacked"
}

// 2. Provide default option values
const defaultOptions: PhotoGalleryOptions = {
  photos: [],
  layout: "grid",
}

// 3. Export a function that merges user options and returns a Quartz component
export default ((userOpts?: PhotoGalleryOptions) => {
  // Merge user-provided options with defaults
  const opts: PhotoGalleryOptions = { ...defaultOptions, ...userOpts }

  // 4. This is the actual Quartz component, receiving props
  function PhotoGallery(props: QuartzComponentProps) {
    // If no photos are provided, we won't render anything
    if (opts.photos.length === 0) {
      return null
    }

    // Render each photo in a container
    return (
      <div class="my-photo-gallery">
        {opts.photos.map((src, i) => (
          <img key={i} src={src} alt={`Photo ${i + 1}`} />
        ))}
      </div>
    )
  }

  // 5. Optional: Attach a CSS string that styles the component
  PhotoGallery.css = `
    /* The container */
    .my-photo-gallery {
      display: ${opts.layout === "grid" ? "grid" : "block"};
      ${opts.layout === "grid" ? "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;" : ""}
      margin: 1rem 0;
    }

    /* Each image */
    .my-photo-gallery img {
      max-width: 80%;
      height: auto;
      object-fit: cover;
      border: 2px solid #ccc;
      border-radius: 4px;
    }
  `

  // 6. Return the component
  return PhotoGallery
}) satisfies QuartzComponentConstructor
