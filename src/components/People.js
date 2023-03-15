
import React,{useEffect,useState} from "react";

function Peoples() {
    const [emails,Setemails]=useState([])
    const [unique,Setunique]=useState([])
    const [check,Setcheck]=useState(1)
    let mailarr=[]
    useEffect(() => {
  
        fetch('https://slack-80008-default-rtdb.firebaseio.com/.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for(let mail in data){
                mailarr.push(data[mail].email)
                // console.log(data)
                Setcheck((prevstate)=>{
                         return prevstate+1 
                })
            }
            Setemails(mailarr)
            Setunique([...new Set(emails)])
        }
      
            )
        .catch(error => console.error(error));
    }, [mailarr])

  return (
    <div>
    <div className="mails">
      <h1>Registered Gmail accounts:</h1>
      <ul className="emailslist">
  {
   
    unique.map((each,index)=>{
        return(

            <li key={index}>{each}</li>
        )
    })
    
  }
  </ul>
  </div>
    </div>
  );
}

export default Peoples
