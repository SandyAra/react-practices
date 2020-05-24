import React from 'react';
import '../../App.css';
import Header from './Header';
import Form from './Form';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header></Header>
        <Form></Form>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
