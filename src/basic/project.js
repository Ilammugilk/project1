const Myproduct = () =>{

    const allproduct =[
        {category:"book", itemlist:['html','css','javascript','react','nodejs']},
        {category:"Mobile", itemlist:['nokia','samsung']},
        {category:"Laptop", itemlist:['dell','hp','lenovo','acer']},
        {category:"Dress", itemlist:['for male','for female','for child']},
    ];
    return(
        <section>
            <h1>Manage Product {allproduct.length} </h1>
            {
                allproduct.map((product,index)=>{
                    return(
                        <fieldset key={index}>
                            <legend>{product.category} - {product.itemlist.length}</legend>
                            {
                                product.itemlist.map((pname,index2)=>{
                                    return(
                                        <p key={index2}>{pname}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
} 
 export default  Myproduct;