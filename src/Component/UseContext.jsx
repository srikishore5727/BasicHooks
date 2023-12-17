import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
    const [text, setText] = useState(false)
    const [likes,setLikes] = useState(0)
    useEffect(()=>{
        alert("content Button is clicked")
    },[text])
    const theme = useContext(ToggleTheme);
    const themeStyle = {
        backgroundColor: theme ? "black" : "grey",
        color: theme ? "grey" : "black",
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <div style={themeStyle}>
{text &&
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur rerum a soluta cupiditate nesciunt debitis illo, voluptate doloribus sapiente?</p>
}
            <button onClick={()=>setText(!text)}>Content</button>
            <h1>{likes}</h1>
            <button onClick={()=>setLikes((prev)=>prev+1)}>like</button>
        </div>
    )
}

export default UseContext;