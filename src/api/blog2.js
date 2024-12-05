import { useEffect, useState } from "react";

const BlogTwo = () =>{
    let[commentlist, setcomment] = useState([]);
    const getcomment = () =>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response=>response.json())
        .then(CommentArray=>{
            setcomment(CommentArray);
        })
    }

    useEffect(()=>{
        getcomment();
    },[]);

    return(
        <section>
            <h1>Blog Two:{commentlist.length}</h1>
            <div id="bloglist">
                {
                 commentlist.map((fullcom,index)=>{
                        return(
                            <div key={index} className="myblog">
                                <p>{fullcom.userid}</p>
                                <h2>{fullcom.title}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default BlogTwo;