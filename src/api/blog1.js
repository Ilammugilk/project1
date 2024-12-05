import { useEffect, useState } from "react";

const BlogOne = () =>{
    let[commentlist, setcomment] = useState([]);
    const getcomment = () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
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
            <h1>Blog One:{commentlist.length}</h1>
            <div id="bloglist">
                {
                 commentlist.map((fullcom,index)=>{
                        return(
                            <div key={index} className="myblog">
                                <p>{fullcom.name}</p>
                                <h2>{fullcom.email}</h2>
                                <p>{fullcom.body}</p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default BlogOne;