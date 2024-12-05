const Mybook = () =>{
    let allbook=[
        {bname:"HTM 5",Cost:300,Qty:10,seller:"Amit", publish:true},
        {bname:"CSS 3",Cost:400,Qty:10,seller:"Amit", publish:false},
        {bname:"JavaScript",Cost:700,Qty:"10",seller:"Amit", publish:true},
        {bname:"PHP",Cost:600,Qty:10,seller:"Amit", publish:false},
        {bname:"Mysql",Cost:800,Qty:10,seller:"Amit", publish:true},
    ];
    return(
        <section>
            <h1>Manager Book:{allbook.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>SI NO</th>
                        <th>Book Name</th>
                        <th>Book Price</th>
                        <th>Qantity</th>
                        <th>Seller Name</th>
                        <th>Publish Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allbook.map((book,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.bname}</td>
                                    <td>{book.Cost}</td>
                                    <td>{book.Qty}</td>
                                    <td>{book.seller}</td>
                                    <td>{book.publish.toString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
 export default Mybook;