"use client";

import ExtraInfo from "./ExtraInfo";
import MainInfo from "./MainInfo";
import React, { useEffect, useState } from "react";
import { type User } from "@/@types/User";
import UserNotFound from "./UserNotFound";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

const url = "http://localhost:5000/api/users/get/";

const Profile = () => {
  const { data: session } = useSession();

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url + session?.user.id, {
          headers: {
            authorization: `Bearer ${session?.tokens.access}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const { data } = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [session]);

  return (
    <div className="w-full flex flex-row-reverse items-start justify-around flex-wrap">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!user ? (
            <UserNotFound />
          ) : (
            <>
              <ExtraInfo avatar={user.avatar!} account={user.account} />
              <MainInfo user={user} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
