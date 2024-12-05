import { useState } from "react";

const HookFour = () =>{
    let[booklist, setBook] = useState([]);

    let[bookname, setName] = useState("");
    let[price,setPrice] = useState("");

    const save = () =>{
        let newbook = {bname:bookname, cost:price};
        if(bookindex=="noindex"){
            setBook(booklist = [...booklist, newbook]);
        }else{
            booklist[bookindex] = newbook;
            setBook(booklist = [...booklist]);
            setIndex("noindex"); //reset to default
        }

        setName("");
        setPrice("");
    }
    const delbook = (index) =>{
        booklist.splice(index,1);
        setBook(booklist = [...booklist]);
    }
    let[bookindex, setIndex] = useState("noindex");
    const editbook = (book, index) =>{
        setName(book.bname);
        setPrice(book.cost);
        setIndex(index);
    }
     return(
        <section align="center">
            <h1>Array of Object add, List, Delete</h1>
            <div>
                Book Name : <input type="text" onChange={obj=>setName(obj.target.value)} value={bookname}/>
                Book Cost : <input type="number" onChange={obj=>setPrice(obj.target.value)} value={price}/>
                <button onClick={save}> Save </button>
            </div>

            <h2>Available Book:{booklist.length}</h2>
            <table id="grid">
                <thead>
                    <tr>
                        <th>SI NO</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booklist.map((book,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{book.bname}</td>
                                    <td>{book.cost}</td>
                                    <td><button onClick={editbook.bind(this,book,index)}>Edit</button></td>
                                    <td><button onClick={delbook.bind(this, index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
     )
}

export default HookFour;