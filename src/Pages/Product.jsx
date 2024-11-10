import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';

export const product = () => {
  const {Datalog}= useContext(ShopContext);
  const {productId} = useParams();
  const product = Datalog.find((e)=> e.id === Number(productId))
  return (
    <div>
      
    </div>
  )
}

export default product