import { useState, useEffect } from "react";

const BlogApi = () =>{
    let[bloglist, setblog] = useState([]);
    const getblog = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(blogArray=>{
            setblog(blogArray);
            })
    }

    useEffect(()=>{
        getblog();
    },[]);

    let[keyword, setkeyword] = useState("");

    return(
        <section>
            <h1 align="center">Recent Blog : {bloglist.length} </h1>
            <p align="center">
                Search : <input type="text" placeholder="search" size="60" 
                         onChange={obj=>setkeyword(obj.target.value)}/>
            </p>
            <div id="bloglist">
                {
                    bloglist.map((blog,index)=>{
                        if(blog.title.toLowerCase().match(keyword.toLocaleLowerCase()) || 
                            blog.body.toLowerCase().match(keyword.toLocaleLowerCase()))
                        return(
                            <div key={index} className="myblog">
                                <h3>{blog.title}</h3>
                                <p>{blog.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )


}
export default BlogApi;