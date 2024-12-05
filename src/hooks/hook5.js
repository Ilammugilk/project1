import { useState } from "react";

const HookFive = () =>{
    let[Itemlist,setItem] = useState(['Apple','Mango','Banana','Orange','Grapes']);
    let[selecteditem, setSelected] = useState([]);

    const save = (index) =>{
        setSelected(selecteditem = [...selecteditem, Itemlist[index]]);

        Itemlist.splice(index, 1);
        setItem(Itemlist= [...Itemlist]);
    }

    const deleteme = (index) =>{
        setItem(Itemlist = [...Itemlist, selecteditem[index]]);

        selecteditem.splice(index, 1);
        setSelected(selecteditem= [...selecteditem]);
    }
    return(
        <section>
            <h1>Add List and Delete</h1>
            <fieldset>
                <legend>Item List : {Itemlist.length}</legend>
                {
                    Itemlist.map((itemname, index)=>{
                        return(
                            <p key={index}>{itemname}- <button onClick={obj=>save(index)}>Add</button></p>
                        );
                    })
                }
            </fieldset>
            <fieldset>
                <legend>Selected Item : {selecteditem.length}</legend>
                {
                    selecteditem.map((itemname, index)=>{
                        return(
                            <p key={index}> {itemname} - <button onClick={obj=>deleteme(index)}>Delete</button></p>
                        );
                    })
                }
            </fieldset>
        </section>
    );
}
export default HookFive;