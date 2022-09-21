import { useState } from "react";
import styles from "./../styles/Login.module.css";
import { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/api/login`, {
        username,
        password,
      });

      res.status === 202 && router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Admin Dashboard</h3>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-green" onClick={handleLogin}>
          login
        </button>

        {errorMsg.length !== 0 && (
          <span className={styles.msg}>{errorMsg}</span>
        )}
      </div>
    </div>
  );
}

export default Login;
