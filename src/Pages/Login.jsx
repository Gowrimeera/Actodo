import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login(props){

     
    const [eusername,esetusername]= useState("")
    const [epassword,esetpassword]=  useState("")  
    const [ruser,rsetuser]=useState(true)
    const navigate = useNavigate()

    const users=props.users


    const checkuser=()=>{

        var userfound=false
        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword){
                console.log("Login successful")
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if(userfound===false)
        {
            console.log("Login falied.")
            rsetuser(false)
        }
    }
    const handleUser=(e)=>{
        esetusername(e.target.value)
    }

    const handlePassword=(e)=>{
        esetpassword(e.target.value)
    } 

    return(
        <div className=" bg-black p-10" >
            <div className="bg-[#EFEFEF] border rounded-md p-10">
                <h1 className=" text-3xl font-medium">Hey,Hi!</h1>
                {ruser? <p className='font-medium'>I help you manage your activity after you Login :)</p>:<p className='text-red-700'>Please Sign up before you Login :)</p> }
                <div className="flex flex-col my-2">
                    
                    
                    <label className="m-1">Username:</label>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="User Name" value={eusername} onChange={handleUser} />
                    
                    
                    <label className="m-1">Password:</label>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" value={epassword} onChange={handlePassword}/>
                    
                        <button className="bg-[#8272DA] w-24 p-2 rounded-md my-2" onClick={checkuser}>Login</button>
                    
                    <p className='my-3'>Alredy have an account? <Link to={"/signup"} className='text-blue-700 font-medium underline'>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login