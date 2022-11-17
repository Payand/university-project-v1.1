import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

import { Button, Modal } from "antd";
const HeaderLogin = () => {
  const { logout, login, user } = useContext(LoginContext);

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    login(email.value, password.value);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {user.length ? (
        <>
          <li>
            Welcome <strong>{user[0].username}</strong>
          </li>
          <li>
            <Button type="primary" onClick={logout}>
              logout
            </Button>
          </li>
        </>
      ) : (
        <li onClick={showModal}>Login</li>
      )}

      <Modal open={open} onOk={handleOk} onCancel={handleCancel} footer={[]}>
        <div>
          <h2 className="h-title-login">login</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin} id="loginForm">
          <label className="login-label" htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="login-label" htmlFor="password">
            password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="login-button-group">
            {!email || !password ? (
              <p className="warning">Please,Enter Email and password</p>
            ) : (
              <button className="button-login" type="submit" onClick={handleOk}>
                login
              </button>
            )}

            <button className="button-login" onClick={handleCancel}>
              return
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default HeaderLogin;
