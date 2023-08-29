"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");
import { ImCross } from "react-icons/im";
import Container from "@/hoc/Container";
import Wrapper from "@/hoc/Wrapper";



export default function AdminChat() {
  useEffect(() => {
    getUser();
    getTechSupportMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [messageId, setMessageId] = useState("");
  const [messages, setMessages] = useState([]);
  // const [deleteIsClicked, setDeleteIsClicked] = useState(false);

  const getUser = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api/getUser",
    }).catch((err) => {
      console.log(err);
    });
  };

  const getTechSupportMessages = async () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/api/get-tech-support-message",
    })
      .then((res) => {
        if (res.status == 200) {
          setMessages(res.data);
        }
        if (res.status == 201) {
          notifySuccess(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTechSupportMessage = async (messages: any) => {
    axios({
      method: "post",
      data: {
        messageId: messages.message_id,
      },
      withCredentials: true,
      url: "http://localhost:5000/api/delete-tech-support-message",
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
  
  


  return (
    <Wrapper position="center">
      <Container>
    <div className="flex flex-col justify-center items-center gap-5 ">
      <ToastContainer />
      <h1 className="text-[20px]">Сообщения</h1>
      <div className="flex flex-row justify-between px-4 items-center text-center text-gray-500 gap-2 w-[1100px] text-[10px]">
        <p className="w-[100px] ">photo</p>
        <p className="w-[50px] "> msg id</p>
        <p className="w-[50px] "> user id</p>
        <p className="w-[200px] ">email</p>
        <p className="w-[350px] ">text</p>
        <h1 className="w-[150px] ">when</h1>
        <p className="w-[50px] ">delete</p>
      </div>
      {messages.length > 0 ? (
        messages.map((messages: any, index) => (
          <button
            className="text-black flex flex-row gap-2 items-center  text-center justify-evenly w-[1100px] hover:bg-slate-200 p-1"
            key={index}
            // style={{backgroundColor: deleteIsClicked ? "#FF7276" : "white"}}
          >
            <Image
              src={`http://localhost:3001/api/images/` + messages.image}
              height={100}
              width={100}
              alt="#"
              className="active:h-[500px] active:w-[500px]  active:absolute active:z-100 transition-all duration-300 "
            />
            <p className="w-[50px]">{messages.message_id}</p>{" "}
            <p className="w-[50px]">{messages.user_id}</p>
            <p className="w-[200px]">{messages.user_email}</p>
            <p className=" w-[350px] h-[200px] overflow-y-scroll ">
              {messages.text}
            </p>
            <p className="w-[150px]">
              {moment(messages.upd_at).format("DD/MM/YYYY hh:mm:ss")}
            </p>
            <button
              className="w-[50px] justify-center items-center flex flex-row"
              onClick={() => deleteTechSupportMessage(messages)}
            >
              <ImCross className="hover:rotate-180  transition-all duration-150 " />
            </button>
          </button>
        ))
      ) : (
        <div>пока что пусто</div>
      )}
    </div>
    </Container>
    </Wrapper>
  );
}

// {deleteIsClicked ? (
//   <button
//     className="w-[50px] justify-center items-center flex flex-row"
//     onClick={setDeleteIsClicked(() => (!deleteIsClicked))}
//   >
//     <ImCross className="hover:rotate-180  transition-all duration-150 " />
//   </button>
// ) : (
//   <div className="flex flex-col">
//     <h1>Вы уверены?</h1>
//     <div className="flex flex-row">
//       <button className="bg-green-500">yes</button>
//       <button
//         className="bg-red-500"
//         onClick={setDeleteIsClicked(() => (!deleteIsClicked))}
//       >
//         no
//       </button>
//     </div>
//   </div>
// )}
