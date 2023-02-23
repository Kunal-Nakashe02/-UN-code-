import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Component(){
  return(
    <>
    <header>
    <img src="logo192.png" alt='no-image'></img>
    <h1>Reasons I'm exited to learn React </h1>
      <ol>
      <li>its a popular library,so i'll be able to for in with the cool kids!</li>
      <li>i'm more likely to get a job as a developer if i know React</li>
      </ol> 
    </header>
    <footer>@2021 Ziroll development.All Rights reserved</footer>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />);



