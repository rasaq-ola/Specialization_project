import React, { createContext, useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Dropdown from '../Components/Assets/Dropdown.png'
import Item from '../Components/Item/Item'

const Shopcategory = (props) => {
  const {Datalog} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcat-banner' src={props.banner} alt="Category Banner" />
      <div className="Shopcategory-indexsort">
        <p>
          <span>Displaying 1-12</span> out 16 products
        </p>
        <div className="Shopcategory-sort">
          Sort by <img src={Dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {Datalog.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcat-btn">
        See More
      </div>
    </div>
  )
}

export default Shopcategory