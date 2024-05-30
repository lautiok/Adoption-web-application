import { v2 as cloudinary } from "cloudinary";
import config from "../config/config.js";
cloudinary.config({
  cloud_name: config.CLOUDINARYNAME,
  api_key: config.CLOUDINARYKEY,
  api_secret: config.CLOUDINARYSECRET,
});

export const uploadImage = async (filePatch) => {
  return await cloudinary.uploader.upload(filePatch, {
    folder: "michipichi"
  });
};

export const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id);
};
