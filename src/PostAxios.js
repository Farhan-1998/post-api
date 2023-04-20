import React,{useState} from 'react'
import Axios from 'axios'

function PostAxios() {
    
    const [my_title, setTitle] = useState('');
    const [my_body, setBody] = useState('');
     const handleSubmit = (e)=>{
       e.preventDefault();
       Axios.post("https://jsonplaceholder.typicode.com/posts/",{
           title: my_title,
           body :my_body
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
      <label> Enter Title : </label>
       <input type="text" name='title' value={my_title} onChange={(e)=> setTitle(e.target.value)} /><br/><br/>
       <label> Enter Body : </label>
       <input type="text" name='body' value={my_body} onChange={(e)=> setBody(e.target.value)} /><br/><br/>
       <input type="submit" value="Post" />
      </form>
   </>
  )
}

export default PostAxios

