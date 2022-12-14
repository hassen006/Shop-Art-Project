import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/Login";
import { auth } from "./utils/fire";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handelLogin = () => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        default:
          setPassword(err.message);
          break;
      }
    });
  };
  const handleLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const authListener = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Dashboard handleLogOut={handleLogOut} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          handelLogin={handelLogin}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
