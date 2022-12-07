import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);

  // 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);
  // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
  const { dispatch } = useAuthContext();
  /*
  애플리케이션이 새로고침되면 파이어베이스는 서버에 저장되어 있는 사용자의 인증 정보를 불러와 상태를 갱신하게됩니다. 이때 리액트의 컴포넌트들도 다시 랜더링 되기 시작하는데, 파이어베이스로부터 유저 정보를 불러오는 시간보다 리액트의 재랜더링 속도가 빠르기 때문에 일어나는 현상입니다. 
*/
  //   console.log(appAuth.currentUser);
  //   setInterval(() => {
  //     console.log(appAuth.currentUser);
  //   }, 1000);

  const login = (email, password) => {
    setError(null);
    setIsPending(true); // 통신중

    // 로그인을 진행하는 함수입니다.
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);

        // 상태 관리
        setError(null);
        setIsPending(false);

        dispatch({ type: "login", payload: user });
        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      });
  };
  return { error, isPending, login };
};
