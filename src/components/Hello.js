import React, {useState} from 'react';

const Hello = (props) =>{

    const [fname, setFname] = useState('');
    
    return(
        <>
            <h2>Hello {props.name}</h2>
        </>
    )
}

export default Hello;