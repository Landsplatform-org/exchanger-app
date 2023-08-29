"use client";

import { ChangeEvent, MouseEvent } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const UploadAvatar = ({ onClose }: { onClose: any }) => {
  const handleCloseClick = (e: MouseEvent<SVGAElement>) => {
    e.preventDefault();
    onClose();
  };
  const [file, setFile] = useState<any>();
  const [imgData, setImgData] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("email", email);
    axios
      .post("http://localhost:5000/api/set-avatar-image", formdata)
      .then((res) => {
        console.log(res);
        notifySuccess(res.data);
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const getUser = async () => {
    await axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api/getUser",
    })
      .then((res) => {
        setImgData(res.data.avatarImage);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const notifySuccess = (text: string) => toast.success(text);
  const notifyError = (text: string) => toast.error(text);

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto h-[500px] w-[500px] flex flex-row justify-center items-center bg-slate-300 rounded-[5px] shadow-2xl z-50">
      <ToastContainer />
      <ImCross
        onClick={handleCloseClick}
        className="absolute right-5 top-5 rounded-[5px] flex flex-row justify-end items-end
         hover:rotate-90 transition-all duration-200"
      />

      <div className="flex flex-col justify-center items-center gap-5">
        <h1>текущая аватарка</h1>
        <img
          className="rounded-2xl w-[120px] h-[120px] object-cover"
          src={"http://localhost:5000/api/images/" + imgData}
          alt="avatar"
        />
        <h1>новая аватарка</h1>
        <input
          type="file"
          onChange={(e: any) => setFile( e.target.files[0])}
          className="flex flex-col justify-center items-center"
        />
        <button
          onClick={handleUpload}
          className="bg-green-500 p-2 rounded-[5px]"
        >
          обновить
        </button>
      </div>
    </div>
  );
};

export default UploadAvatar;
