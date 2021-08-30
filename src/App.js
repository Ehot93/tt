import React from 'react';
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Card from "./components/Card";
import Layout from "./components/Layout";
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Layout>
          <Card title="first task"/>
        </Layout> 
        <Footer/>

    </div>
  );
}

export default App;
