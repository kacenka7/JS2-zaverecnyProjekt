import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import "../components/Footer.css"
import "../components/Header.css"

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';


//vytvoření pole s objednávkou

const response = await fetch ("http://localhost:4000/api/drinks") 
const json = await response.json();
const order = json.data;

const orderList = [];

order.map((item)=>{

  if (item.ordered===true){
    orderList.push({
        id: item.id,
        name: item.name,
        image: item.image
    })
  }
})


//Vypsání do HTML

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">

      <Header showMenu = "false"/>

      <Order orderList = {orderList}/>

      <Footer/>
    </div>
  </div>
);

//Změna hlavičky - Hl. stránka vs Objednávka

document.querySelector(".nav-links").classList.add("hide")

