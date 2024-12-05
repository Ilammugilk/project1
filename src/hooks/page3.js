import { useState } from "react";

const HookThree = () =>{
    let[fullname, setName] = useState("");
    let[mobile, setMobile] = useState("");
    let[email, setEmail] = useState("");
    let[address, setAddress] = useState("");

    return(
        <section>
            <h1>Input and Output</h1>
            <table>
                <tr>
                <td>Enter Your Name</td>
                <td><input type="text" onChange={obj=>setName(obj.target.value)}/></td>
                <td>{fullname}</td>
                </tr>
                <tr>
                <td>Enter Your mobile</td>
                <td><input type="text" onChange={obj=>setMobile(obj.target.value)}/></td>
                <td>{mobile}</td>
                </tr>
                <tr>
                    <td>Enter Your Email</td>
                    <td><input type="text" onChange={obj=>setEmail(obj.target.value)}/></td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Enter Your address</td>
                    <td><input type="text" onChange={obj=>setAddress(obj.target.value)}/></td>
                    <td>{address}</td>
                </tr>
            </table>
        </section>
    );
}
export default HookThree;