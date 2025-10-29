import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = createImageUrlBuilder(client);

export function imageUrlBuilder(source: SanityImageSource) {
  return builder.image(source);
}

export function getOptimizedImageUrl(
  source: SanityImageSource,
  width: number = 1200,
  quality: number = 90
) {
  return builder
    .image(source)
    .width(width)
    .quality(quality)
    .auto("format")
    .url();
}
