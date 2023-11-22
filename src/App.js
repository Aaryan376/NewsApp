import React, { useEffect, useState } from 'react';
import Card from './Components/Card';
import Loader from './Components/Loader';
import './App.css';

const category = [

  'all','national','business','sports','world','politics','technology','startup','entertainment','miscellaneous','hatke','science', 'automobile']

function App() {
   
  const [data,setData] = useState(null);
  const[selected,setSelected]  = useState('all');

 
  
  useEffect(()=>{
    async function getNews(){
      setData(null);
      const res =  await fetch(`https://inshortsapi.vercel.app/news?category=${selected}`);
      const response  = await res.json();
      setData(response.data);
    }
    getNews()
  },[selected])
  return (
    <div className="App">
    
        
         <div className='container text-center pt-5 pb-3'>
          <h1>NewsNow</h1>
          
         </div>
         <div className='container'>
           {category.map((item,index)=>(
              <button  key = {index} className={selected === item ? ('btn btn-primary me-2') : ('btn btn-outline-primary me-2')} onClick = {()=>{
               setSelected(item);
             }}>{item}</button>
           ))}
           </div>
         
         {data == null ? (
               <Loader />
          
         ): (
         <div className='container mt-5'>
            {data.map((item,index)=> (
                <Card key = {index} item = {item}/>)
          )}
           
          
         </div>)}
    </div>
  );
}

export default App;
