
const ItemDetails = (info) =>{
    return(
        <fieldset>
            <legend style={{background:info.color, color:"white"}}>{info.product}</legend>
            <p>Cost :{info.price}</p>
            <p>Qunatity :{info.qty}</p>
            <p style={{color:info.color}}>Color : {info.color}</p>
        </fieldset>
    )
}
 export default ItemDetails;