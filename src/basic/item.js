import ItemDetails from "./itemdetails";

const Itemlist = () =>{
    return(
    <section>
        <h1 align="center"> What is </h1>
        <p align="center">Nested component?, component Re-usability</p>
        <ItemDetails product="Keyboard" price="3000" qty="5" color="red"/>
        <ItemDetails product="Mouse" price="300" qty="5" color="green"/>
    </section>
    )

}
 export default Itemlist;

 //{product : "Keyboard",price:"3000"}
 // ItemDetails(a)
 //a.product, a.price
 //to pass the data from one component to other component is pros