import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Signup(props) {

    const [eusername,esetusername]= useState("")
    const [epassword,esetpassword]=  useState("")  
    const [cpassword, setcpassword] = useState(""); // Confirm password state
    const [error, setError] = useState(null); // Error state
    const navigate = useNavigate()
    const users=props.users
    const setusers=props.setusers
    

    const handleUser=(e)=>{
        esetusername(e.target.value)
    }

    const handlePassword=(e)=>{
        esetpassword(e.target.value)
    } 
    const handleConfirmPassword = (e) => {
        setcpassword(e.target.value);
      };
    
    

    const adduser=()=>{
        if (epassword !== cpassword) {
            setError("Passwords don't match");
          } 
          else {
            setusers([...users, { username: eusername, password: epassword }]);
            setError(null);
            navigate("/")
          }
          
      
    }
    
    return (
        <div className=" bg-black p-10" >
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className=" text-3xl font-medium">Hey,Hi!</h1>
                <p className='font-medium'>Sign up here :)</p>
                <div className="flex flex-col my-2">
                    
                    
                    <label className="m-1">Username:</label>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="User Name" value={eusername} onChange={handleUser}/>
                    
                    
                    <label className="m-1">Password:</label>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" value={epassword} onChange={handlePassword}/>
                    
                    
                    <label className="m-1">Confirm Password:</label>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="confirm password" value={cpassword}
                        onChange={handleConfirmPassword}/>
                        {error && <p className="text-red-700">{error}</p>}

                    <button className="bg-[#FCA201] w-24 p-2 rounded-md my-2" onClick={adduser}>Sign up</button>
                    <p>Don't have an account? <Link to={"/"} className='text-blue-700 font-medium underline'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup