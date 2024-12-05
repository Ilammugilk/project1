import ItemDetails from "./itemdetails";

const  Myuser = () =>{
    let alluser = ['Alex', 'Punit', 'Ajay kumar', 'Suman', 'Pawan', 'Rajat', 'Ali', 'Sudhir'];
    return(
    <section>
        <h1>Manage User : {alluser.length}</h1>
        <p>{alluser[1]}</p>
        {
            alluser.map((fullname,index)=>{
                return(
                    <p className="four" key={index}>{index} # {fullname}</p>
                );
            })
        }
          <ItemDetails product="HP Scanner" price="3000" qty="100" color="black"/>
          <ItemDetails product="HP Scanner" price="8000" qty="50" color="red"/>
    </section>
    )
} 

export default Myuser;

/*
<script> alluser.length </script> as per js
{ alluser.length } - as per jax
*/