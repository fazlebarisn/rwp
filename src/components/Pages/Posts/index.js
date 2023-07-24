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
            <div className='w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10'>
                {
                    posts && posts.map( (post) => {
                        // console.log(post.title.rendered);
                        return(
                            <div key={post.id} className=' card p-3 w-[330px] shadow-lg rounded-lg'>
                                <img src='https://via.placeholder.com/500' alt='{post.title.rendered}' />
                                <h2 className='text-lg font-bold'>{post.title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
export default Posts;