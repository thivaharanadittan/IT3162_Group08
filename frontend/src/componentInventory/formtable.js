import React from 'react';
import "../App.css";
import { MdClose } from "react-icons/md";


const formtable=({handleSubmit,handleOnChange,handleclose})=>{
    return (

        <div className="addContainer">
        <form className="fo"  onSubmit={handleSubmit} >
        <div className="close-btn" onClick={handleclose}  > <MdClose/> </div>
            
  
              <label htmlFor="name"> Name: </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} />
  
              <label htmlFor="quantity"> Quantity: </label>
              <input type="number" id="quantity" name="quantity" onChange={handleOnChange} />
  
              <label htmlFor="status"> Status: </label>
              <input type="text" id="status" name="status" onChange={handleOnChange}/>
  
              <button className="btn" onChange={handleSubmit} > submit </button>
        
              
            </form>
        

        </div>

    )
}

export default formtable;