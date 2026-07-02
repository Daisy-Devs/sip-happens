"use client";

import { Button } from "@sip-happens/shared";
import { UploadCloud } from "lucide-react";
import React, { ChangeEvent, useRef } from "react";
import UploadedFileList from "./UploadedFileList";
import { useUploadProductImageMutation } from "@/store/services/api/productsApi";
import { ImageAsset } from "@/features/overview/types";
import Image from "next/image";

interface UploadBoxProps {
  title: string;
  value?: ImageAsset;
  subtitle: string;
  onChange: (value: ImageAsset) => void;
}
export const UploadBox: React.FC<UploadBoxProps> = ({
  title,
  value,
  subtitle,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadProductImage] = useUploadProductImageMutation();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const formData = new FormData();

    if (files.length > 1) {
      console.log("You can only upload one image file for a product.");
      // toast.error(`You can only upload one image file for a product.`);
      return;
    }
    if (!files.every((file) => file.type.startsWith("image/"))) {
      // toast.error(
      //   "Invalid file type. Please upload a JPG, PNG, or WEBP image.",
      // );
      console.log(
        "Invalid file type. Please upload a JPG, PNG, or WEBP image.",
      );
      return;
    }
    formData.append("image", files[0]);
    uploadProductImage(formData)
      .unwrap()
      .then((res) => {
        console.log("Upload product image:", res);
        onChange({
          name: res.image.name,
          url: res.image.url,
          type: res.image.type,
          public_id: res.image.public_id,
        });
      })
      .catch((err) => {
        console.log("Failed to upload product image. Error:", err);
        // toast.error("Failed to upload product image. Please try again.");
      });
  };
  const fileList = value
  const handleRemoveFile = () => {
    onChange({name: "", url: "", type: "", public_id: ""});
  };
  return (
    <div className="space-y-2">
      <div className="space-y-2">
        <div className="border-3 bg-background-secondary border-outline-variant/30 border-dashed rounded-xl p-6 text-center flex flex-col items-center space-y-3">
          {value?.url ? (
            <Image
              src={value.url}
              alt={value.name}
              width={145}
              height={75}
              className="self-center"
            />
          ) : (
            <UploadCloud size={45} color="#C6C6CD" className="self-center" />
          )}
          <p className="text-sm font-semibold text-secondaryText">{title}</p>
          <label
            htmlFor="file-upload" // Connects to input id
            className="label-sm text-on-surface-variant text-primaryText"
          >
            {value?.url?"Click to change":subtitle}
          </label>{" "}
          <input
            id="file-upload"
            type="file"
            accept={"image/png, image/jpeg, image/webp"}
            ref={inputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          <Button
            variant={"light_brown"}
            onClick={() => inputRef.current?.click()}
            text="Select File"
            className="mt-3 text-xs font-semibold"
          />
        </div>
      </div>
      {fileList?.url && (
        <UploadedFileList
          file={fileList}
          handleRemoveFile={handleRemoveFile}
        />
      )}
    </div>
  );
};
