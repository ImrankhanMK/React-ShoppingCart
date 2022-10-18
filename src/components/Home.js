import React from 'react';
import Header from './Header';
import '../style/Home.css';
import Content from './Content';


export default function Home() {

  return (
    <div>
      <Header/>
      <Content/>
      <h3 className='footer'>Happy Shopping</h3>
    </div>
  )
}
