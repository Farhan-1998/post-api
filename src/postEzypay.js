import React,{useState} from 'react'
import Axios from 'axios'

function PostEzypay() {
    
    const [code, setCode] = useState('');
    const [authcode, setAuthcode] = useState('');
    const [mpin, setMpin] = useState('');
    const [contact, setContact] = useState('');
    const [contactName, setContactName] = useState('');
     const handleSubmit = (e)=>{
       e.preventDefault();
       Axios.post("http://192.168.1.4:8069/aeps/aepsettlement",{
        Code : "A00052",
        Authcode : "5445a4036060427c842",
        Mpin : "6675",
        Contact: "7699999821",
        ContactName : "Ram"
       })
       .then((response) =>{
       console.log(response)
       }).catch((error)=>{
        console.log(error);
       })
     }
  return (
   <>
      <form action="" onSubmit={handleSubmit}>
      <label>Enter Code : </label>
       <input type="text" name='title' value={code} onChange={(e)=> setCode(e.target.value)} /><br/><br/>
       <label>Enter Authcode: </label>
       <input type="text" name='body' value={authcode} onChange={(e)=> setAuthcode(e.target.value)} /><br/><br/>
       <label>Enter Mpin : </label>
       <input type="text" name='title' value={mpin} onChange={(e)=> setMpin(e.target.value)} /><br/><br/>
       <label>Enter Contact : </label>
       <input type="text" name='body' value={contact} onChange={(e)=> setContact(e.target.value)} /><br/><br/>
       <label> Enter contact Name : </label>
       <input type="text" name='body' value={contactName} onChange={(e)=> setContactName(e.target.value)} /><br/><br/>
       <input type="submit" value="Post" />
      </form>
   </>
  )
}

export default PostEzypay