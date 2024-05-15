import React from "react";
import { Link } from "react-router-dom";
//import EmployeeHome from '../components/EmployeeManagement/EmployeeHome';

export default function LandingScreen(){
    return(
        <div className="row landing justify-content-center">
            <div className="col-md-9 my-auto text-center"style={{borderRight: '8px solid white'}}>
                <h2 style={{color:'white',fontSize:'130px'}}>River View</h2>

                <Link to='/home'>
                <button className="btn landingbtn" style={{color:'black',backgroundColor:'white'}}>Get Started</button>
                </Link>
                <Link to='/employeemanagemnt'>
                <button className="btn landingbtn" style={{color:'black',backgroundColor:'white'}}>EmployeeHome</button>
                </Link>
                <Link to='/feedback'>
                <button className="btn landingbtn" style={{color:'black',backgroundColor:'white'}}>Feedback</button>
                </Link>
                
                
            </div>

        </div>
    )
}