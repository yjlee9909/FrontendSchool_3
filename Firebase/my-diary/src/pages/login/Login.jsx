import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isPending, login } = useLogin();

  const handleData = (event) => {
    // console.log(event.target);
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    // 기본 동작 중지 (submit - 새로 고침 막기)
    event.preventDefault();
    login(email, password);
    console.log(email);
    console.log(password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>

        <label htmlFor="myEmail">email : </label>
        <input
          type="email"
          id="myEmail"
          required
          value={email}
          onChange={handleData}
        />

        <label htmlFor="myPassWord">password : </label>
        <input
          type="password"
          id="myPassWord"
          required
          value={password}
          onChange={handleData}
        />

        {/* 조건부 랜더링을 사용합니다. 로그인이 진행 전이라면 로그인 버튼을 노출하고 */}
        {!isPending && (
          <button type="submit" className={styles.btn}>
            로그인
          </button>
        )}
        {/* 로그인이 진행 중이라면 로그인 버튼을 제거하고 정보를 표시합니다. */}
        {isPending && <strong>로그인이 진행중입니다...</strong>}
        {error && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
}
