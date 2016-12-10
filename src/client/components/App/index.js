import React from 'react';
import styles from './App.scss';
import Sidebar from '../Sidebar';
import Header from '../Header';
import MainContainer from '../MainContainer';
import MessagesContainer from '../MessagesContainer';
// import Message from '../Message';

function App() {
  return (
    <div>
      <Sidebar />
      <MainContainer>
        <Header 
          channelName="jangteo"
        />
        <MessagesContainer />
      </MainContainer>
    </div>
  );
} 

export default App;