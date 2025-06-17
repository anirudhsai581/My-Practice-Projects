import {useState} from 'react';

export default function LikeButton() {
     let like = true;
    function handleClick() {
        console.log("You clicked the like button!");
       setLike(!Like);
    }
    const [Like, setLike] = useState(false);
    let styles ={color:"red"};

return (
    <>
    
     <p onClick={handleClick}>{Like ? <i className = "fa-solid fa-heart" style={styles}></i> : <i className ="fa-regular fa-heart">  </i> }</p>
    
     </>
)
}