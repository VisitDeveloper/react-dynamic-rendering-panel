/* eslint-disable @typescript-eslint/no-explicit-any */
// library
import { useEffect, useState } from "react";
// custom
import { useAppSelector } from "store/hooks";


function useUserAuthentication() {
  const [userAuthenticationStatus, setUserAuthenticationStatus] =
    useState<boolean>(true);
  const isLogin = useAppSelector((store: any) => store.auth.isLogin);

  useEffect(() => {
    if (isLogin === null || isLogin === false) {
      if (userAuthenticationStatus === false) return;
      setUserAuthenticationStatus(false);
    } else {
      if (userAuthenticationStatus === true) return;
      setUserAuthenticationStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, userAuthenticationStatus]);

  return userAuthenticationStatus;
}

export default useUserAuthentication;


