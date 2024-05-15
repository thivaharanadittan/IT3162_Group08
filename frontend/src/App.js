
import './App.css';
import { MdClose, MdFormatListBulleted } from "react-icons/md";
import { useState} from 'react';
import { useEffect } from 'react';
import  "./componentInventory/formtable";

import axios from 'axios';
import { get } from 'mongoose';


axios.defaults.baseURL = "http://localhost:8080/"


function App() {

   // for display and hide form
   const[addsection,setaddsection]=useState(false)
   const[editsection,seteditsection]=useState(false)

   const[formData,setFormData]=useState({
    name:"",
    quantity:"",
    status:"",
  });

  const[formDataEdit,setFormDataEdit]=useState({
    name:"",
    quantity:"",
    status:"",
    _id:"",
  });

  const [dataList,setDataList]=useState([]);


  const handleOnChange = (e)=>{
    const {value,name}= e.target;
    setFormData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    });
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el)=>{
    setFormDataEdit(el)
    seteditsection(true)
  }


  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data =await axios.post("/create",formData)
    console.log(data)

    
    if(data.data.success){
        setaddsection(false)
        alert(data.data.message)
        getFetchData();
    }
    
  }


  const getFetchData = async () => {
    try {
      const response = await axios.get("/");
      console.log(response);
      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  console.log(dataList);

  const handleUpdate=async(e)=>{
    e.preventDefault()
    const data =await axios.put("/update",formDataEdit)

    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      seteditsection(false)

    }


  }

  

  
 


  return (
    <>
    <div className="container">
        <button className="btn btn-add" onClick={()=>setaddsection(true)}  > ADD </button>

        {
          addsection && (
          
                  <div className="addContainer">
                  <form className="fo"  onSubmit={handleSubmit} >
                  <div className="close-btn" onClick={()=>setaddsection(false)}  > <MdClose/> </div>
                      
            
                        <label htmlFor="name"> Name: </label>
                        <input type="text" id="name" name="name" onChange={handleOnChange} />
            
                        <label htmlFor="quantity"> Quantity: </label>
                        <input type="number" id="quantity" name="quantity" onChange={handleOnChange} />
            
                        <label htmlFor="status"> Status: </label>
                        <input type="text" id="status" name="status" onChange={handleOnChange} />
            
                        <button className="btn" onChange={handleSubmit} > submit </button>
                  
                        
                      </form>
                  
          
                  </div>
          
          )
        }


        
        {
          editsection && (
          
                  <div className="addContainer">
                  <form className="fo"  onSubmit={handleUpdate} >
                  <div className="close-btn" onClick={()=>seteditsection(false)}  > <MdClose/> </div>
                      
            
                        <label htmlFor="name"> Name: </label>
                        <input type="text" id="name" name="name" onChange={handleEditOnChange} value={formDataEdit.name}/>
            
                        <label htmlFor="quantity"> Quantity: </label>
                        <input type="number" id="quantity" name="quantity" onChange={handleEditOnChange} value={formDataEdit.quantity}/>
            
                        <label htmlFor="status"> Status: </label>
                        <input type="text" id="status" name="status" onChange={handleEditOnChange} value={formDataEdit
                          .status}/>
            
                        <button className="btn" onChange={handleUpdate}  > submit </button>
                        
                     
                      </form>
                  
          
                  </div>
          
          )
        }
       

<div className='tableContainer'>
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Quantity</th>
                  <th> Status</th>
                  <th> 
                    
                  </th>
                </tr>
              </thead>

              <tbody>
              {
                  dataList.map((el)=>{
                    return(
                      <tr>
                          <td>{el.name}</td>
                          <td>{el.quantity}</td>
                          <td>{el.status}</td>
                          <td> 
                          <button className='btn btn-edit' onClick={()=>handleEdit(el)} > Edit </button>
                        
                          </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
        </div>


        
    </div>
      
    </>
  );
}

export default App;
