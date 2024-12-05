import { useState } from "react";

const HookTwo = () =>{
    let[citylist,updateCity] = useState(['Bngalore','Delhi','Munmbai']);
    let[newcity,pickcity]=useState("Test");
    let[message,setMessage]=useState("");

    const save = () =>{
        updateCity(citylist=[...citylist,newcity]); // a= a+b;
        setMessage(newcity + " : added Scuessfully ! ");
        pickcity("");// clear the newcity
    }

    const delcity = (index) =>{
        //a=a-b;
        citylist.splice(index,1);//a-b
        updateCity(citylist=[...citylist]);//a=a update remaining element in state
        setMessage("City Deleted !");
    }
    
return(
    <section>
        <h1>Add, List, Delete : {newcity}</h1>
        <p>{message}</p>
        Enter City Name : <input type="text" onChange={abc=>pickcity(abc.target.value)} value={newcity}/>
        <button onClick={save}>Add New City</button>
        <ol>
            <li>Availabe List</li>
            {
                citylist.map((cityname,index)=>{
                    return(
                        <li key={index}>{cityname} ----------- <button onClick={abc=>delcity(index)}>Delete 1</button>
                        ----- <button onClick={delcity.bind(this,index)}>Delete</button>
                        </li>
                    )
                })
            }
        </ol>
    </section>
)

}

export default HookTwo;