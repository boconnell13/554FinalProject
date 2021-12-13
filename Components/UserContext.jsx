import React, { createContext, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { auth, logout } from "../Utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children, fallback, protectedRoute }) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    if (user) return;

    //If the provider is wrapping a protected route, kick user to the homepage if not authorized
    if (protectedRoute) router.replace("/");
  }, [user, loading]);

  const LogOut = async () => {
    logout();
  };

  let contextObj = {
    user,
    loading,
    LogOut,
  };

  //If the user is not authorized or is loading, dont render children (they depend on that info)
  if (!user || loading) {
    if (fallback) return fallback;
    return <></>;
  }

  //If they are authorized and in the database, render the children
  return (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  );
}
