import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

export default function RegisterForms() {
  const { username, setUsername, password, setPassword, setLogged } =
    useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);

  const validatePassword = (passwordToVerify) => {
    const NUMBER_SIX = 6;
    return passwordToVerify.length >= NUMBER_SIX;
  };

  const validateUsername = (nameToVerify) => {
    const NUMBER_TWELVE = 12;
    return nameToVerify.length >= NUMBER_TWELVE;
  };

  const handleSubmit = () => {
    setLogged(true);
  };

  useEffect(() => {
    if (validateUsername(username) && validatePassword(password)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <div>
      <form>
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" disabled={isDisabled} onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
