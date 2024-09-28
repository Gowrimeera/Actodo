import Addtodo from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todo() {
    const [activity,setactivity]=useState([{id:1,activity:"go for a walk"},
        {id:2,activity:"have a breakfast"}])
    return (
        
        <div>
            <div className="flex gap-5 flex-wrap">
            <Addtodo activity={activity} setactivity={setactivity}/>
            <Todolist activity={activity} setactivity={setactivity}/>
            </div>
        </div>

    )
}

export default Todo