import './Menu.css';
import { Drink } from "./Drink"

export const Menu =()=>{
 return (
    <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <Drink/>
          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
   </section>
   )}
      