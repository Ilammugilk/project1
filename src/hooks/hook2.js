import { useState } from "react";

const Hook = () =>{
    let[userlist, setuser] = useState([]);

    let[tnum, settnum] = useState("");
    let[root, setroot] = useState("");
    let[size, setsize] = useState("");
    let[Dname, setdrive] = useState("");
    let[Driveno, setdriveno] = useState("");

    const savedata = ()=>{
        let newuser = {travno:tnum, userroot:root, usersize:size, 
            drivername:Dname, drivemob:Driveno};
            if(userindex == "noindex"){
                setuser(userlist = [...userlist, newuser]);
            }else{
                userlist[userindex] = newuser;
                setuser(userlist = [...userlist]);
                setIndex("noindex");
            }
        settnum("");
        setroot("");
        setsize("");
        setdrive("");
        setdriveno("");
    }
    let[userindex, setIndex] = useState("noindex");
    const edituser = (user, index) =>{
        settnum(user.travno);
        setroot(user.userroot);
        setsize(user.usersize);
        setdrive(user.drivername);
        setdriveno(user.drivemob);
        setIndex(index)
    }

    const deluser = (index) =>{
        userlist.splice(index,1);
        setuser(userlist = [...userlist]);
    }


     return(
        <section align="center" id="sec">
            <p align="center">
                Search : <input type="text" size={60}/>
            </p>
            <fieldset align="left">
                <legend>New Transport</legend>
                <p>Transport Number</p>
                <input type="text" onChange={obj=>settnum(obj.target.value)} value={tnum}/>
                <p>Root Name</p>
                <input type="text" onChange={obj=>setroot(obj.target.value)} value={root}/>
                <p>Size</p>
                <input type="number" onChange={obj=>setsize(obj.target.value)} value={size}/>
                <p>Drive Name</p>
                <input type="text" onChange={obj=>setdrive(obj.target.value)} value={Dname}/>
                <p>Drive Mobile No</p>
                <input type="number" onChange={obj=>setdriveno(obj.target.value)} value={Driveno}/>
                <p><button className="btn" onClick={savedata}>Save</button></p>
            </fieldset>
            
            <table align="right">
                <thead>
                    <tr>
                        <th>T-Id</th>
                        <th>T-Number</th>
                        <th>Type</th>
                        <th>Transport Root</th>
                        <th>Driver</th>
                        <th>Mobile No</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.travno}</td>
                                    <td>{user.userroot}</td>
                                    <td>{user.usersize}</td>
                                    <td>{user.drivername}</td>
                                    <td>{user.drivemob}</td>
                                    <td><button onClick={edituser.bind(this,user,index)}>Edit</button></td>
                                    <td><button onClick={deluser.bind(this,index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
     )
}

export default Hook;