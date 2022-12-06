import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
export const useSignup = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);

  // 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);
  // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true); // 통신중

    // config.js에서 appAuth로 나감
    // 비밀번호 설정으로 유저정보를 등록합니다.
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);

        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }
        // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트합니다. import 받아야합니다.
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            console.log(user);
            dispatch({ type: "login", payload: user });

            setError(null);
            setIsPending(false);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      });
  };
  return { error, isPending, signup };
};
