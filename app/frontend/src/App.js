import React from 'react';
import './App.css';
import AppProvider from './context/Provider';
import Chat from './components/Chat';
import Input from './components/Input';

function App() {
  return (
    <AppProvider>
      <Chat />
      <Input />
    </AppProvider>
  );
}

export default App;
