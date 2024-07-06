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


//Hamburgrové menu

const burgerMenu = document.querySelector(".rollout-nav")

const hide = () =>{

        burgerMenu.classList.toggle("nav-closed")
}

document.querySelector(".nav-btn").addEventListener("click",hide)

//Objednací tlačítko

const orderButon = document.querySelectorAll(".order-btn")

orderButon.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{                          //přidání listeneru
    e.preventDefault()
    const buttonId=e.target.dataset.id

    btn.classList.toggle("order-btn--ordered")

    if (btn.classList.contains('order-btn--ordered')) {
      btn.innerText = 'Objednáno';

      fetch(`http://localhost:4000/api/drinks/${buttonId}`, {   // poslání na API
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          [{ op: 'replace', path: '/ordered', value: true }]
          )
      })

      .then(response => {                                       // odpověď z API
        if (!response.ok) {
            throw new Error('Odpvěď z API nebyla OK');
        }
        return response.json();
       })

      .then(data => {
        console.log('Objednání proběhlo v pořádku:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }
    
    else {
      btn.innerText = 'Objednat'
      fetch(`http://localhost:4000/api/drinks/${buttonId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          [{ op: 'replace', path: '/ordered', value: false }]
          )
      })

      .then(response => {                                       // odpověď z API
        if (!response.ok) {
            throw new Error('Odpvěď z API nebyla OK');
        }
        return response.json();
       })

      .then(data => {
        console.log('Bylo provedeno zrušení objednávky:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
)})







