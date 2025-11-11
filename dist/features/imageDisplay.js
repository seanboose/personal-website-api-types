"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesListResponseSchema = exports.ImageDataSchema = void 0;
const zod_1 = require("zod");
exports.ImageDataSchema = zod_1.z.object({
    fileName: zod_1.z.string(),
    url: zod_1.z.url()
});
exports.ImagesListResponseSchema = zod_1.z.object({
    images: zod_1.z.array(exports.ImageDataSchema)
});
