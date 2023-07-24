import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Posts = () =>{
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        // let url = 'https://wooproducttable.com/wp-json/wp/v2/posts';
        axios.get(url).then( (responce) => {
            setPosts( responce.data );
        });
    }, []);

    return (
        <>
            {
                posts && posts.map( (post) => {
                    // console.log(post.title.rendered);
                    return(
                        <div key={post.id}>
                            <h2>{post.title.rendered}</h2>
                            <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                        </div>
                    )
                })
            }
        </>
    );
}
export default Posts;