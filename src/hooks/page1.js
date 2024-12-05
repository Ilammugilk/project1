import { useState } from "react";

const HookOne = () =>{
    //Hoe to Sestructure an array
    let city = ['Bangalore','Mumbai'];
    let[Bangalore,Mumbai] = city;

    console.log(useState());//[undefined,f()]
    let[x,y] = useState(1);//[1000,f()]

    const one = () =>{
       y(x+1);
       changeMessage("Good it is increasing....");
       changeStatus(true);
    }

    const two = ()=>{
        y(x-1);
        changeMessage("Sorry it is going down....")
        changeStatus(false);
    }
    const three = () =>{
        y(x*2);
    }
    let [msg, changeMessage] = useState("Welcome...");
    let[status,changeStatus] = useState(true);
    let [booklist,updateBook] = useState(['HTML','CSS','Bootstrap','React','Node']);
    return(
        <section>
            <h1>Hoe to use useState() Hook</h1>
            <p>{Bangalore}</p>
            <p>{x}</p>
            <button onClick={one}>click To + By 1</button>
            <button onClick={two}>click To - By 1</button>
            <button onClick={three}>click To * By 2</button>
            <p>{msg}</p>
            <p>The Result is : {status.toString()}</p>
            {
                booklist.map((bookname,index)=>{
                    return(
                        <p key={index}>{bookname}</p>
                    );
                })
            }

            <h2> Work with select and useState</h2>
            <select>
                <option>Choose...........</option>
                {
                     booklist.map((bookname,index)=>{
                        return(
                            <option key={index}>{bookname}</option>
                        );
                    })
                }
            </select>

            <h2>Dynamic Radio Button</h2>
            {
                     booklist.map((bookname,index)=>{
                        return(
                            <p> <input type="radio" key={index}/>{bookname}</p>
                        );
                    })
                }

          <h2>Dynamic Check Box</h2>
            {
                     booklist.map((bookname,index)=>{
                        return(
                            <p> <input type="checkbox" key={index}/>{bookname}</p>
                        );
                    })
                }

<h2>Dynamic ul li</h2>
<ul>
<li>Book List</li>

{
                     booklist.map((bookname,index)=>{
                        return(
                            <li>{bookname}</li>
                        );
                    })
                }
</ul>

<h2>Dynamic ol li</h2>
<ol>
{
                     booklist.map((bookname,index)=>{
                        return(
                            <li>{bookname}</li>
                        );
                    })
                }
</ol>
<h2>Dynamic Text Box</h2>
            {
                     booklist.map((bookname,index)=>{
                        return(
                            <p> <input type="textbox" key={index} value={bookname}/></p>
                        );
                    })
                }
           
        </section>
    )
}
export default HookOne;