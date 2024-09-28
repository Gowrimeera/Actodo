import { useState } from "react"

function Addtodo(props) {

    const activity=props.activity
    const setactivity=props.setactivity
    const[newactivity,setnewactivity]=useState("")

    const handlechange=(e)=>{
     setnewactivity(e.target.value) 
    }
    const addactivity=()=>{
        setactivity([...activity,{id:activity.length+1,activity:newactivity}])
        setnewactivity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage your Activity</h1>
            <div>
                <input type="text" className="border border-black bg-transparent p-2 my-3" placeholder="Next Activity?" value={newactivity} onChange={handlechange} />
                <button className="bg-black text-white p-2 border-black" onClick={addactivity}>Add</button>
            </div>
        </div>
    )
}

export default Addtodo