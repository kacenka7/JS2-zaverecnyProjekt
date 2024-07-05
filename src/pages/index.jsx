import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import "../components/Banner.css"
import "../components/Contact.css"
import "../components/Footer.css"
import "../components/Gallery.css"
import "../components/Header.css"
import "../components/Menu.css"
import "../components/Drink.css"

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';



document.querySelector('#root').innerHTML = render(
  <div className="page">

    <Header/>

    <main>
      <Banner/>
      <Menu/>
      <Gallery/>
      <Contact/>
    </main>

  <Footer/>
    
  </div>
);



const burgerMenu = document.querySelector(".rollout-nav")

const hide = () =>{

        burgerMenu.classList.toggle("nav-closed")
}

document.querySelector(".nav-btn").addEventListener("click",hide)




