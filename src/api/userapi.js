import { useState, useEffect } from "react";
import swal from "sweetalert";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ManageUser = () =>{
    let[alluser, setUser] = useState([]);
    let[sortorder, setOrder] = useState("asc");

    const getUser = () =>{
        fetch("http://localhost:3000/userapi")
        .then(response =>response.json())
        .then(userArray=>{
            if(sortorder=="asc"){
                userArray.sort((a,b)=>a.fullname.localeCompare(b.fullname));
                setUser(userArray);
                setOrder("desc");
            }else{
                userArray.sort((a,b)=>b.fullname.localeCompare(a.fullname));
                setUser(userArray);
                setOrder("asc");
            }
        })
    }

    useEffect(()=>{
        getUser();
    }, []);

    // create state variable to save the value 
    let[uname, setName] = useState("");
    let[uage, setAge] = useState("");
    let[uedu, setEdu] = useState("");

    // 3 state variable to hold error message
     // create state variable to save the value 
     let[unameerror, setNameError] = useState("");
     let[uageerror, setAgeError] = useState("");
     let[ueduerror, setEduError] = useState("");



    const save = () =>{
        let formstatus = true;

        //User Validation
        if(uname==""){
            formstatus = false;
            setNameError("Invalid Name !");
        }else{
            setNameError("");
        }

        //Age Validation
        if(uage==""){
            formstatus = false;
            setAgeError("Invalid age !");
        }else{
            setAgeError("");
        }

        //education validation
        if(uedu==""){
            formstatus = false;
            setEduError("Invalid Edu !");
        }else{
            setEduError("");
        }

        if(formstatus == true){

        if( userid=="" ){
            let userinfo = {"fullname":uname, "age":uage, "edu":uedu};
            let url = "http://localhost:3000/userapi";
            let postdata = {
                    headers:{'Content-Type':'application/json'},
                    method:"post",
                    body:JSON.stringify(userinfo)
            }

            fetch(url, postdata)
            .then(response =>response.json())
            .then(info=>{
                    swal(uname, "Save Successfully", "success");
                    getUser();// call getuser() to reload the list 
            })
        }else{
            let userinfo = {"fullname":uname, "age":uage, "edu":uedu};
            let url = "http://localhost:3000/userapi/"+userid;
            let postdata = {
                    headers:{'Content-Type':'application/json'},
                    method:"put",
                    body:JSON.stringify(userinfo)
            }

            fetch(url, postdata)
            .then(response =>response.json())
            .then(info=>{
                swal(uname, "Updated Successfully", "info");
                    getUser();// call getuser() to reload the list 
                    setuserid("");
            })
        }

        // clear the fields 
        setAge("");
        setEdu("");
        setName("");
    } // outer if end
    }

    const deluser = (id) =>{
        let url = "http://localhost:3000/userapi/"+id;
        let postdata = {method:"delete"};
        
        fetch(url, postdata)
       .then(response =>response.json())
       .then(info=>{
            swal(info.fullname , "Deleted Successfully !..", "warning");
            getUser();// call getuser() to reload the list 
       })
    }

    let[keyword, setKeyword] = useState("");
    let[userid, setuserid] = useState("");

    const edituser = (userinfo) =>{
        setName( userinfo.fullname );
        setAge( userinfo.age );
        setEdu( userinfo.edu );
        setuserid( userinfo.id );
    }

    const PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(alluser.length / PER_PAGE);

    return(
        <section>
            <h1 align="center"> Manage User : { alluser.length } </h1>
            <p align="right">
                Search : <input type="text" onChange={obj=>setKeyword(obj.target.value)} />
            </p>
            <table align="left">
                <tbody>
                    <tr>
                        <td> Full Name </td>
                        <td> 
                        <input type="text" onChange={obj=>setName(obj.target.value)} value={uname}/> 
                        <i>{unameerror}</i>
                        </td>
                    </tr>
                    <tr>
                        <td> Age </td>
                        <td>
                             <input type="text" onChange={obj=>setAge(obj.target.value)} value={uage}/>
                             <i>{uageerror}</i>
                         </td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> 
                            <input type="text" onChange={obj=>setEdu(obj.target.value)} value={uedu}/> 
                            <i>{ueduerror}</i>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align="center">
                            <button onClick={save}> Save User </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table align="right" id="grid">
                <thead>
                    <tr>
                        <th> id </th>
                        <th bgcolor="skyblue" onClick={getUser}> Full Name </th>
                        <th> Age </th>
                        <th> Education </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.slice(offset, offset + PER_PAGE).map((user,index)=>{
                            if(user.fullname.toLowerCase().match( keyword.toLowerCase() ) || 
                               user.age.toLowerCase().match( keyword.toLowerCase() ) || 
                               user.edu.toLowerCase().match( keyword.toLowerCase() )
                              )
                            return(
                                <tr key={index}>
                                    <td> <Link to={`/details/${user.id}`}>{user.id}</Link> </td>
                                    <td> {user.fullname} </td>
                                    <td> {user.age} </td>
                                    <td> {user.edu} </td>
                                    <td> <button onClick={obj=>edituser(user)}> Edit </button> </td>
                                    <td> <button onClick={obj=>deluser(user.id)}> Delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div id="mypagination">
            <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                />
                </div>
        </section>
    )
}

export default ManageUser;