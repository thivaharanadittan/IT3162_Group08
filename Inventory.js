import { MdClose, MdFormatListBulleted } from "react-icons/md";
import { useState} from 'react';
import { useEffect } from 'react';

import "../App.css";
import axios from 'axios';
import { get } from 'mongoose';


axios.defaults.baseURL = "http://localhost:8080/"

function Inventory() {
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
   <div className="containerx">
       <button className="btn-add" onClick={()=>setaddsection(true)}  > ADD </button>

       {
         addsection && (
         
                 <div className="addContainerx">
                 <form className="fox"  onSubmit={handleSubmit} >
                 <div className="close-btnx" onClick={()=>setaddsection(false)}  > <MdClose/> </div>
                     
           
                       <label htmlFor="name" className="labelx"> Name: </label>
                       <input type="text" id="name" name="name" onChange={handleOnChange} className="inputx"/>
           
                       <label htmlFor="quantity"  className="labelx"> Quantity: </label>
                       <input type="number" id="quantity" name="quantity" onChange={handleOnChange} className="inputx"/>
           
                       <label htmlFor="status"  className="labelx"> Status: </label>
                       <input type="text" id="status" name="status" onChange={handleOnChange} className="inputx" />
           
                       <button className="btnsub" onChange={handleSubmit} > submit </button>
                 
                       
                     </form>
                 
         
                 </div>
         
         )
       }


       
       {
         editsection && (
         
                 <div className="addContainerx">
                 <form className="fox"  onSubmit={handleUpdate} >
                 <div className="close-btnx" onClick={()=>seteditsection(false)}  > <MdClose/> </div>
                     
           
                       <label htmlFor="name"  className="labelx"> Name: </label>
                       <input type="text" id="name" name="name" onChange={handleEditOnChange} value={formDataEdit.name} className="inputx"/>
           
                       <label htmlFor="quantity"  className="labelx"> Quantity: </label>
                       <input type="number" id="quantity" name="quantity" onChange={handleEditOnChange} value={formDataEdit.quantity} className="inputx"/>
           
                       <label htmlFor="status"   className="labelx"> Status: </label>
                       <input type="text" id="status" name="status" onChange={handleEditOnChange} value={formDataEdit
                         .status} className="inputx"/>
           
                       <button className="btnsub" onChange={handleUpdate}  > submit </button>
                       
                    
                     </form>
                 
         
                 </div>
         
         )
       }
      

<div className='tableContainerx'>
           <table className="tablex">
             <thead className="theadx">
               <tr className="trx">
                 <th className="thx" > Name </th>
                 <th className="thx"> Quantity</th>
                 <th className="thx"> Status</th>
                 <th className="thx"> Update </th>
               </tr>
             </thead>

             <tbody className="tbodyx">
             {
                 dataList.map((el)=>{
                   return(
                     <tr className="trx">
                         <td className="tdx">{el.name}</td>
                         <td className="tdx">{el.quantity}</td>
                         <td className="tdx">{el.status}</td>
                         <td className="tdx"> 
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
  
  export default Inventory;
  