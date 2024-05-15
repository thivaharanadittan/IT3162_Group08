
import React from "react";
import '../style/Vehicleinfo.css';
import { Vehicle } from './Vehicle';
import Vehicleitem from './Vehicleitem';
import { useNavigate } from "react-router-dom";
export default function VehicleInfo(){
  const navigate=useNavigate();
    return(
      <div className="info_container">
        <br/>
      <h2>Available Vehicles</h2>
     
        <div className="listofvehicle">
          {Vehicle .map((item,key )=>{
          return (<Vehicleitem
          image={item.image} 
          type={item.type}
          capacity={item.capacity}
          amenities={item.amenities.join(', ')} />);
          })}
        <div style={{display:'flex' ,justifyContent:'space-around'}}>
          <input  type='submit'  className="confirmbutton" onClick={()=> navigate('Feedback')}value='Confirm Booking'/>
            <button type="submit" onClick={()=> navigate(-1)} className="confirmbutton">Go back</button>
          </div>
       </div>
        
       
       
      </div>
    
);
}


