"use client"
import axios from 'axios'
import{ useEffect, useState } from 'react'

function Data() {
    const[myData,setMyData] = useState([]);

    useEffect(()=>{
         axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)
            setMyData(res.data)
         })
    },[])
    
  return (
    <>

          <div className="grid">
          {
            myData.map((post)=>{
              const{id,title,description,image,price,rating,category} = post;
              return <div key={id} className='card'>
                <img className="max-h-[250px]" src={image}/>
                <p className="title">{title}</p>
                <div className='bag'>
                   <div className="price">₹{price}</div>
                   <img className="photo" src='https://i.pinimg.com/736x/7e/63/27/7e6327eef081c270ebd76c2ced278084.jpg'/>
                </div>
              
               

              </div>

            })
          }
          </div>
    </>
   
  )
}

export default Data