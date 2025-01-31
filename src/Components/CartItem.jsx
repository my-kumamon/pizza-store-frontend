import React, {useContext} from 'react';
import PizzaContext from '../Context/PizzaContext';

export default function CartItem({pizza, count}) {
  const {cart} = useContext(PizzaContext);

  function capitalizeFirstLetter(item){
    const newItem = item.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return newItem;
  }

  async function deleteFromCart(){
    const fetchedData = await(await fetch(`http://localhost:5000/cart/${cart._id}/${pizza._id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json", "Origin": "http://localhost:3000"}}
    )).json();
  };

  function changeAmount(){
    
  }

  return (
    <>
      <div key={count} className="cart-item">
        <div className="name">
          <h3>{count < 9 ? "0"+(count+1)+"." : (count+1)+"."} {capitalizeFirstLetter(pizza.name)} </h3>
        </div>
        <div className="price">
          <p onClick={deleteFromCart}>❌</p>
          <input type="number" name="amount" value={pizza.amount} min="1" max="99" autoComplete="off" onChange={changeAmount}/>
          <h4>{pizza.price} €</h4>
        </div>
      </div>
      <hr />
    </>
  )
}
