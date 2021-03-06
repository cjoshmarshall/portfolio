import { useState } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {

  

  window.addEventListener('scroll',reveal)
  
  function reveal(){
    var reveals=document.querySelectorAll('.reveal')
    for(var i=0;i<reveals.length;i++){
      var windowheight=window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=100;
      if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('active');
      }
    }
  }

  const [loading,setLoading]=useState(false)


  return (
    <div className='bg-home bg-cover bg-fixed m-0 text-white' >
        <Header />
        <Navbar />
        <section id='home' className='h-screen'><Home /></section>
        <section id='about' className='h-screen'><About /></section>
        <section id='projects' className='h-fit'><Projects /></section>
        <section id='skills' className='h-fit'><Skills /></section>
        <section id='contact' className='h-screen'><Contact /></section>
        

    </div>
  );
}

export default App;