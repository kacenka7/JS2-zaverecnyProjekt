import './Layer.css';

export const Layer = (color, label)=>{
    
       return(
            // console.log(color, label)
       
         <div>
            <div className="layer">
            <div className="layer__color" style={{ backgroundColor: color}}></div>
            <div className="layer__label">{label}</div>
            </div>
        </div>
            
        )}