import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Index_page() {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("")
    const [ code, setCode ] = useState("")
    const [error_msg, setError_msg] = useState("")
    
    useEffect( () => {
        fetch('http://localhost:3005/api/verif_auth_index', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' } , 
            body : JSON.stringify({}),
            credentials: 'include'
        })
        .then(res => res.json() )
        .then(data => {
            if (!data.statu) {
                navigate(`/room/${data.code}`);
            }
        }

        )
        })

    const handleTest = async () => {
        setError_msg("")
        const res = await fetch('http://localhost:3005/api/__insert_user', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' } , 
            body : JSON.stringify({ 
                username: username,
                code: code 
            }),
            credentials: 'include'
        });
        const data = await res.json();
        if (data['statu']) setError_msg(data["error"])
        else {
            setError_msg("success")
            navigate(`/room/${code}`);
        }

    };
    return(
        <>
            <p className='title_beta' >Site Web Beta V1</p>
            <p className="error"> {error_msg} </p>
            <div className="_main_">
                
                <div className="div_title">
                    <h1>JOIN ROOM</h1>
                </div>
                <div className="div_input">
                    <label htmlFor="">Username :</label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value); } } placeholder="username" />
                </div>
                <div className="div_input">
                    <label htmlFor="">Code Room</label>
                    <input type="text" onChange={(e) => { setCode(e.target.value); } } placeholder="code room" />
                </div>
                <div className="div_input">
                    <input type="button" onClick={handleTest} value="Join Room" className="button_join" />
                </div>
            </div>
        </>
    )
}

export default Index_page;