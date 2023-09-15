"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/components/Button";
import Image from "next/image";
import { useSession } from "next-auth/react";

const url = "http://localhost:5000/api/users/set-avatar/";

const Avatar = ({ avatar }: { avatar: string }) => {
  const { data: session } = useSession();
    
  const [image, setImage] = useState<File | string>(avatar);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const imageState = e.target.files[0];
    setImage(imageState);
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    updateAvatar(image);
  };

  const updateAvatar = async (file: File | string) => {
    if(typeof file === "string") return

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await fetch(url + session?.user.id, {
        method: "POST",
        headers: {
          authorization: `Bearer ${session?.tokens.access}`,
        },
        body: formData
      });

      if(response.ok) location.reload();
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => handleUpload(e)}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <label htmlFor="upload-avatar">
        <input
          id="upload-avatar"
          type="file"
          placeholder="Сменить аватар"
          onChange={(e) => handleFile(e)}
          className="hidden"
        />
        <Image
          className="rounded-full w-[200px] h-[200px] object-cover object-center"
          src={"http://localhost:5000/uploads/" + avatar}
          width={200}
          height={200}
          quality={50}
          priority
          alt="Ваше фото профиля"
        />
      </label>
      <Button type="submit" disabled={image === avatar}>
        Сменить аватар
      </Button>
    </form>
  );
};

export default Avatar;
