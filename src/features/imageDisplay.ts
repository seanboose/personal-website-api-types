import { z } from 'zod';

export const ImageDataSchema = z.object({
  fileName: z.string(),
  url: z.url(),
});

export const ImagesListResponseSchema = z.object({
  images: z.array(ImageDataSchema),
});

export type ImageData = z.infer<typeof ImageDataSchema>;
export type ImagesListResponse = z.infer<typeof ImagesListResponseSchema>;
