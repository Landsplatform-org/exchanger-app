"use client";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { AiOutlineDown } from "react-icons/ai";

const AddCryptoWallet = ({ onClose }: { onClose: any }) => {
    const handleCloseClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClose();
    };

  useEffect(() => {
    getUser();
    getGateways();
  }, []);

  const [walletsAccordionOpen, setWalletsAccordionOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [selectedWalletGatewayId, setSelectedWalletGatewayId] = useState("");
  const [selectedWalletName, setSelectedWalletName] = useState("");
  const [selectedWalletIcon, setSelectedWalletIcon] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletResponse, setWalletResponse] = useState("");
  const [email, setEmail] = useState("");
  const [walletsData, setWalletsData] = useState([]);

  const getGateways = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:3001/api/get-gateways/?isCrypto=` + 1,
    })
      .then((res) => {
        setWalletsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addWallet = async () => {
    axios({
      method: "post",
      data: {
        gatewayId: selectedWalletGatewayId,
        score: walletAddress,
        userId: userId,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/add-wallet",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          //   setWalletResponse(res.data);
          notifySuccess(res.data);
        }
        if (res.status == 201) {
          //   setWalletResponse(res.data);
          notifySuccess(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUser = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api/getUser",
    })
      .then((res) => {
        setEmail(res.data.email);
        setUserId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const walletIsSelectedHandler = (walletsData: any) => {
    setSelectedWalletGatewayId(walletsData.id);
    setSelectedWalletName(walletsData.name);
    setSelectedWalletIcon(walletsData.image);
    setWalletsAccordionOpen(!walletsAccordionOpen);
  };

  const notifySuccess = (text: string) => toast.success(text);

  return (
    <div
      className="absolute left-0 right-0 top-0 bottom-0 m-auto h-[500px] w-[500px] 
    flex flex-row justify-center items-center bg-slate-300 rounded-[5px] shadow-2xl"
    >
      <ToastContainer />
      <button
          className="absolute right-5 top-5 rounded-md flex flex-row justify-end items-end hover:rotate-90 transition-all duration-200"
          onClick={(e) => handleCloseClick(e)}
        >
          <ImCross />
        </button>

      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-green-500 text-[10px]">{walletResponse}</h1>
        <h1 className="text-[20px]">Выберите платежную систему</h1>
        <button
          className="flex flex-row items-center gap-1"
          onClick={() => setWalletsAccordionOpen(!walletsAccordionOpen)}
        >
          {selectedWalletName === "" ? (
            <h1>Система</h1>
          ) : (
            <h1 className="text-black flex flex-row gap-2">
              <Image src={selectedWalletIcon} height={24} width={24} alt="#" />
              {selectedWalletName}
            </h1>
          )}
          <AiOutlineDown className="hover:rotate-180 transition-all duration-150 " />
        </button>
        {walletsAccordionOpen && (
          <div className="overflow-y-scroll h-[100px]">
            {walletsData.map((walletsData: any, index) => (
              <button
                className="text-black flex flex-row gap-2 hover:bg-slate-500 h-[24px] w-[200px]"
                key={index}
                onClick={() => walletIsSelectedHandler(walletsData)}
              >
                <Image src={walletsData.image} height={24} width={24} alt="#" />
                {walletsData.name}
              </button>
            ))}
          </div>
        )}
        <h1 className="text-[20px]">Введите номер кошелька</h1>
        <input
          className="bg-gray-200 rounded-[5px]"
          type="text"
          name="wallet"
          placeholder=" номер"
          onChange={(e) => setWalletAddress(e.target.value)}
        ></input>
        <button className="bg-green-500 p-2 rounded-[5px] " onClick={addWallet}>
          добавить
        </button>
      </div>
    </div>
  );
};

export default AddCryptoWallet;

// const walletsMockData = [
//   { id:1, image: "/atomicwallet.png", name: "Atomic_Wallet"},
//   { id:2,image: "/electrum.png", name: "Electrum" },
//   { id:3,image: "/cryptocom.png", name: "DeFi_crypto.com" },
//   { id:4,image: "/myetherwallet.png", name: "MyEtherWallet" },
//   { id:5,image: "/trust.png", name: "Trust" },
//   { id:6,image: "/jaxx.png", name: "Jaxx" },
//   { id:7,image: "/exodus.png", name: "Exodus" },
//   { id:8,image: "/metamask.png", name: "Metamask" },
// ];
