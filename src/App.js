import './App.css';
import React, {useState } from 'react'
import PostEzypay from './postEzypay';
// import PostAxios from './PostAxios';
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function saveData()
{
    const data = {
      Authcode:'5445a4036060427c842',
      Mpin:'6675',
      Contact:'7588215033',
    }
    const url ="http://192.168.1.4:8069/aeps/aepsettlement"
      fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application /json',
        'Access-Content-Allow-Origin':'*'
      },
      body:JSON.stringify(data)
    })
    .then(response=>{
      console.log("response",response)
      if(response.state === 200){
       alert("success")
      }
    }).catch(e=>{
      console.log("e",e)
    })
}
    return (
    <div className="App">
       {/* <h1 style={{marginTop:'30px'}}>POST API1</h1>
       <PostAxios /> */}
       
      <h1>POST API</h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>


      <PostEzypay />
    </div>
  );
}
export default App;
