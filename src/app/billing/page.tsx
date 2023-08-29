"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import AddWallet from "@/components/AddWallet";
import AddCryptoWallet from "@/components/AddCryptoWallet";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImCross } from "react-icons/im";
import Container from "@/hoc/Container";
import Wrapper from "@/hoc/Wrapper";


export default function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [imgData, setImgData] = useState([]);
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);
  const [showAddCryptoWalletModal, setShowAddCryptoWalletModal] =
    useState(false);
  const [walletsEmpty, setWalletsEmpty] = useState("");
  const [walletsInfo, setWalletsInfo] = useState([]);
  const [walletIcons, setWalletIcons] = useState<any[]>([]);

  useEffect(() => {
    getUser();
    getGateways();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:3001/api/getUser",
    })
      .then((res) => {
        setImgData(res.data.avatarImage);
        setUsername(res.data.username);
        setEmail(res.data.email);
        // setUserId(res.data.id);
        getWallets(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWallets = async (userId: any) => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:500/api/get-wallets/?userId=` + userId,
    })
      .then((res) => {
        if (res.status == 201) {
          setWalletsEmpty(res.data);
          notifyInfo(res.data);
        }
        if (res.status == 200) {
          setWalletsInfo(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const both = "both";
  const getGateways = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: `http://localhost:3001/api/get-gateways/?isCrypto=` + both,
    })
      .then((res) => {
        setWalletIcons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteWallet = async (walletsInfo: any) => {
    axios({
      method: "post",
      data: {
        walletId: walletsInfo.id,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/delete-wallet",
    })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          notifySuccess(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.message);
      });
  };

  const notifySuccess = (text: string) => toast.success(text);
  const notifyError = (text: string) => toast.error(text);
  const notifyInfo = (text: string) => toast.info(text);

  return (
    <Wrapper position="center">
      <Container>
    <div className="mt-5 font-semibold">
      <ToastContainer />
      <div className=" flex flex-col items-center gap-2 ">
        <div className=" flex row items-center gap-5 ">
        {imgData ? (
                  <Image
                    src={"http://localhost:5000/uploads" + imgData}
                  //   src={http://localhost:3001/api/images/ + imgData}
                    width="600"
                    height="600"
                    
                    alt="avatar"
                  />
                ) : (
                  <Image
                  src={"@/assets/images/avatar.jpg"}
                    width="600"
                    height="600"
                    
                    alt="avatar"
                  />
                )}

          <div className="flex flex-col">
            <h1 className="text-[30px]">{username}</h1>
            <h1 className="text-[20px]">{email}</h1>
          </div>
        </div>
        <div className="flex flex-col w-[max] p-[25px] shadow-2xl bg-slate-300 items-center rounded-2xl">
          <div className="flex flex-row justify-start text-gray-500 w-[500px] text-[10px]">
            <p className="w-[160px]">кошелек</p>
            <p className="w-[240px]">номер</p>
            <p>обновлен</p>
          </div>
          {walletsEmpty == "" ? (
            walletsInfo.map((walletsInfo: any, index) => (
              <div
                key={index}
                className="flex flex-row gap-3 w-[500px] hover:bg-slate-500 rounded-[5px] p-[5px] justify-between"
              >
                <Image
                  src={walletIcons[walletsInfo.gateway_id - 1].image}
                  height={24}
                  width={24}
                  alt="#"
                />
                <p>{walletsInfo.score}</p>
                <p className="text-gray-500 ">
                  {moment(walletsInfo.upd_at).format("DD/MM/YYYY hh:mm:ss")}
                </p>
                <button
                  className="w-[50px] justify-center items-center flex flex-row"
                  onClick={() => deleteWallet(walletsInfo)}
                >
                  <ImCross className="hover:rotate-180  transition-all duration-150 " />
                </button>
              </div>
            ))
          ) : (
            <h1 className="p-5">{walletsEmpty}</h1>
          )}
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => setShowAddWalletModal(true)}
            className="bg-green-500 p-2 rounded-[5px] shadow-2xl"
          >
            + интернет кошелек
          </button>
          {showAddWalletModal && (
            <AddWallet onClose={() => setShowAddWalletModal(false)}></AddWallet>
          )}
          <button
            onClick={() => setShowAddCryptoWalletModal(true)}
            className="bg-green-500 p-2 rounded-[5px] shadow-2xl"
          >
            + крыпто кошелек
          </button>
          {showAddCryptoWalletModal && (
            <AddCryptoWallet
              onClose={() => setShowAddCryptoWalletModal(false)}
            ></AddCryptoWallet>
          )}
        </div>
      </div>
    </div>
    </Container>
    </Wrapper>
  );
}
