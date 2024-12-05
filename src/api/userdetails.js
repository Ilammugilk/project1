import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () =>{
    const{userid} = useParams();
    let [user,updateUser] = useState( {} );

    const getdetails = () =>{
        fetch("http://localhost:3000/userapi/"+userid)
        .then(response=>response.json())
        .then(userinfo=>{
            updateUser(userinfo);
        })
    }

    useEffect(()=>{
        getdetails();
    },[]);

    return(
        <section>
            <h1> User Information : {userid} </h1>
            <table id="grid">
                <tbody>
                    <tr>
                        <td>Full Name :</td> <td>{user.fullname}</td>
                    </tr>
                    <tr>
                        <td>Education :</td> <td>{user.edu}</td>
                    </tr>
                    <tr><td>Age :</td> <td>{user.age}</td></tr>
                </tbody>
            </table>
        </section>
    );

}

export default UserDetails;