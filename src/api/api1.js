import { useState, useEffect } from "react";

const ApiOne = () =>{
    let[alluser, setUser] = useState( [] );
    let[allcity, setCity] = useState( [] );
    let[allbook, setbook] = useState( [] );

    const getUser = () =>{
        fetch("user.json")
        .then(userdata=>userdata.json())
        .then(userArray =>{
            setUser(userArray);
        })
    }

    const getCity = () =>{
        fetch("city.json")
        .then(citydata =>citydata.json())
        .then(cityArray=>{
            setCity(cityArray);
        })
    }

    const getbook = () =>{
        fetch("book.json")
        .then(bookdata =>bookdata.json())
        .then(bookArray=>{
            setbook(bookArray);
        })
    }

    useEffect(()=>{ //useEffect() is like onload().
        getCity();
    })

    return(
        <section>
            <h1> Fetch() api, userState(), useEffect() </h1> 
            <div>
                <button onClick={getUser}>Show User</button>
                <button onClick={getbook}>Show Book</button>
            </div>
            <fieldset>
                <legend>Total User : {alluser.length} </legend>
                {
                    alluser.map((fullname, index)=>{
                        return(
                            <p key={index}>{fullname}</p>
                        );
                    })
                }
            </fieldset>

            <fieldset>
                <legend>Total City : {allcity.length} </legend>
                {
                    allcity.map((fullcity, index)=>{
                        return(
                            <p key={index}>{fullcity}</p>
                        );
                    })
                }
            </fieldset>
            
            <fieldset>
                <legend>Total Book :{allbook.length}</legend>
                {
                    allbook.map((fullbook,index)=>{
                        return(
                            <p key={index}>{fullbook}</p>
                        );
                    })
                }
            </fieldset>


        </section>
    );
}
export default ApiOne;

/*
book.json
 ->add 5 book name
 ->read and display on button click
*/