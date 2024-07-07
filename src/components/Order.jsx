
const OrderItem = ({name, image}) => {
  return (
    <div className="order-item">
      <img src= {`http://localhost:4000${image}`} className="order-item__image"/>
      <div className="order-item__name">{name}</div>
    </div>
  )
}

export const Order = (orderList)=>{
    console.log(orderList)
    return(
    <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
            {orderList.item.map ((item) => (
                <OrderItem name = {item.name} image = {item.image} />  
            ))}
          </div>
        </div>
      </main>
    )
}