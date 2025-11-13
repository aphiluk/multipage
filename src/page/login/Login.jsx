import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../../data/users";
import "./login.css";

export default function Login({ setToken }) {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    const userInfo = verifyUser(user, pass);

    if (!userInfo) {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      userRef.current.focus();
    } else {
      setToken(userInfo.token);
      navigate("/");
    }

    userRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

   
      <input
        type="text"
        placeholder="User"
        ref={userRef}
        title="User: user" 
      />

    
      <input
        type="password"
        placeholder="Pass"
        ref={passRef}
        title="Pass: pass" 
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
