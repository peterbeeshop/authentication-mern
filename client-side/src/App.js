import React, {useState} from 'react'
import axios from "axios"
import "./App.css";

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginpassword] = useState("")
  const [data,setData] = useState(null)

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:4000/register"
    }).then(res => console.log(res))
    .catch(err => console.log(err.message))
  }
  const login = () => {
    axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:4000/login"
    }).then(res => console.log(res))
    .catch(err => console.log(err.message))
  }
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user"
    }).then(res => setData(res.data))
    .catch(err => console.log(err.message))
  }
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>submit</button>
      </div>

       <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setLoginpassword(e.target.value)}/>
        <button onClick={login}>submit</button>
      </div>

       <div>
        <h1>Get User</h1>
        <button onClick={getUser}>submit</button>
        {
          data ? <h1>welcome back {data.username}</h1> : null
        }
      </div>
    </div>
  );
}

export default App;
