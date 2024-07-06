import './Drink.css';
import {Layer} from "./Layer"


const response = await fetch('http://localhost:4000/api/drinks');
const json = await response.json();
const menu = json.data





export const Drink = ()=>{
    return(

      <div className="drinks-list">
      {menu.map ((item)=>(
        <div className="drink">
          <div className="drink__product">
            <div className="drink__cup">
              <img src={`http://localhost:4000${item.image}`} />
            </div>
            <div className="drink__info">
              <h3>{item.name}</h3>

            {item.layers.map ((layer) => {
              <Layer key={item.id} color={layer.color} label={layer.label} />
            })}
            
            </div>
          </div>
          <form className="drink__controls">
            <input type="hidden" className="order-id" value="0" />
            <button className="order-btn">
              Objednat
            </button>
          </form>
        </div>
      
      ))}
    </div>
    )
}