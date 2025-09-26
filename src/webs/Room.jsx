import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

// import { io } from 'socket.io-client';

// const socket = io('http://localhost:3002/');

 function Room() {
    const navigate = useNavigate();
    const { code } = useParams();
    useEffect( () => {
        fetch('http://localhost:3005/api/verif_auth', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' } , 
            body : JSON.stringify({ 
                code: code 
            }),
            credentials: 'include'
        })
        .then(res => res.json() )
        .then(data => {
                if (data.statu) {
                    navigate(`/`);
                }
            }

        )
    })
    
//   const [ username, setUsername ] = useState("")
//   const [ password, setPassword ] = useState("")
//   const handleTest = async () => {
    
//     const data = await res.json();
//     // setUsername(data.results[0].username_A)
//     // setPassword(data.results[0].passowrd_A)
//     console.log(data);
    
//   };
  // const username = prompt("username : ")

  // useEffect(()=>{
  //   socket.emit("join-room", { roomCode, username })

  //   socket.on("user-joined", ({ username }) =>{
  //     console.log('joind room');
  //   });
  //   return ()=>{
  //     socket.disconnect();
  //   }
  // }, [roomCode])

  return (
    <div>
        <p className='title_beta' >Site Web Beta V1</p>
        <h2>Welcome to Room: {code}</h2>
      
      {/* <button onClick={handleTest}>sd</button>
      <p>{username}{password}</p> */}
    </div>
  );
}

export default Room;
