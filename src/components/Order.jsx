
const OrderItem = ({name, image}) => {
  return (
    <div className="order-item">
      <img src= {`http://localhost:4000${image}`} className="order-item__image"/>
      <div className="order-item__name">{name}</div>
    </div>
  )
}

export const Order = ({orderList})=>{
    console.log(orderList)
    console.log(orderList.length)

      {if (orderList.length < 1){
        return(
        <main className="order">
          <div className="container order__content">
            <h1>Vaše objedávnka</h1>
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          </div>
        </main>
        
      )}

      else{
        return(
        <main className="order">
          <div className="container order__content">
           <h1>Vaše objedávnka</h1>
            <div className="order__items">
              {orderList.map ((item) => (
                  <OrderItem name = {item.name} image = {item.image} />  
              ))}
            </div>
          </div>
        </main>
    )}}
}