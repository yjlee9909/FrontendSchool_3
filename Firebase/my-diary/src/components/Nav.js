import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Nav.module.css";

export default function Nav() {
  // logout을 받아오기
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.tit}>두근두근 비밀일기</h1>
      <ul className={styles.list_nav}>
        {/* 만약 유저의 상태가 null, 즉 로그아웃 이라면 */}
        {!user && (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        {/* 만약 유저의 상태가 null 이 아니라면  */}
        {user && (
          <li>
            <strong>환영합니다. {user.displayName} 님!</strong>
            <button type="button" onClick={logout}>
              로그아웃
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
