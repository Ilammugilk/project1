import { useEffect, useState } from "react";

const Book = () => {
    let[allbook, setbook] = useState([]);

    const getbook = () =>{
        fetch("http://localhost:3000/bookapi")
        .then(response=>response.json())
        .then(bookArray=>{
            setbook(bookArray);
        })
    }

    useEffect(()=>{
        getbook();
    },[]);

    let[uname, setName] = useState("");
    let[ucost, setCost] = useState("");

    const save = () =>{
        let userdata = {"name": uname,"cost": ucost};

        let url="http://localhost:3000/bookapi";
        let postdata={
            Headers:{'Content-type':'application/json'},
            method:"post",
            body:JSON.stringify(userdata)
        }

        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            alert("user added....");
            getbook();
        })
    }

    const deluser = (id) =>{
        let url = "http://localhost:3000/bookapi/"+id; 
        let postdata = {method:"delete"};

        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            alert("user Deleted....");
            getbook();
        })
    }

    let[keyword, setkeyname] = useState("");

    return(
        <section>
            <h1 align="center">Book : {allbook.length}</h1>
            <p align="center">
                Search : <input type="text" placeholder="Search.." size="60" onChange={obj=>setkeyname(obj.target.value)}/>
            </p>
            <table align="left">
                <tr>
                    <td>Full Name</td>
                    <td><input type="text" onChange={obj=>setName(obj.target.value)}/></td>
                </tr>
                <tr>
                    <td>Cost</td>
                    <td><input type="number" onChange={obj=>setCost(obj.target.value)}/></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center">
                        <button onClick={save}>Save Data</button>
                        </td>
                </tr>

            </table>
            <table align="right">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allbook.map((book, index)=>{
                            if(book.name.toLowerCase().match(keyword.toLocaleLowerCase()))
                            return(
                                <tr key={index}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.cost}</td>
                                    <td><button>Edit</button></td>
                                    <td><button onClick={obj=>deluser(book.id)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}
 export default Book;