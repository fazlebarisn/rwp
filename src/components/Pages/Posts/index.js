import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Posts = () =>{
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        let url = 'http://localhost/r/wpr/wp-json/wp/v2/posts';
        // let url = 'https://wooproducttable.com/wp-json/wp/v2/posts';
        axios.get(url).then( (responce) => {
            setPosts( responce.data );
        });
    }, []);

    return (
        <>
            {
                posts.map( (post) => {
                    // console.log(post.title.rendered);
                    return <p key={post.id}>{post.title.rendered}</p>;
                })
            }
        </>
    );
}
export default Posts;