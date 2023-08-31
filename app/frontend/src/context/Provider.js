import React, { useMemo, useState } from 'react';
import AppContext from './Context';

export default function AppProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [needLogin, setNeedLogin] = useState(false);
  const [logged, setLogged] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loanOptions, setLoanOptions] = useState(false);
  const [userId, setUserId] = useState(0);
  const [historic, setHistoric] = useState(false);

  const values = useMemo(
    () => ({
      username,
      setUsername,
      password,
      setPassword,
      needLogin,
      setNeedLogin,
      logged,
      setLogged,
      messages,
      setMessages,
      loanOptions,
      setLoanOptions,
      userId,
      setUserId,
      historic,
      setHistoric,
    }),
    [
      username,
      setUsername,
      password,
      setPassword,
      needLogin,
      setNeedLogin,
      logged,
      setLogged,
      messages,
      setMessages,
      loanOptions,
      setLoanOptions,
      userId,
      setUserId,
      historic,
      setHistoric,
    ]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {}.isRequired;
