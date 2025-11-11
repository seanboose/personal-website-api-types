import { z } from "zod";
export declare const ImageDataSchema: z.ZodObject<{
    fileName: z.ZodString;
    url: z.ZodURL;
}, z.core.$strip>;
export declare const ImagesListResponseSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        fileName: z.ZodString;
        url: z.ZodURL;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ImageData = z.infer<typeof ImageDataSchema>;
export type ImagesListResponse = z.infer<typeof ImagesListResponseSchema>;
