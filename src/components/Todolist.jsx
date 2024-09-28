

import TodoItem from "./Todoitem"

function Todolist(props){

    const activity=props.activity
    const setactivity=props.setactivity
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium" >Todays's Activity</h1>
                {activity.length === 0? <p>You haven't added anything yet</p>:""}
                {activity.map(function(item,index){
                    return <TodoItem item={item} index={index} activity={activity} setactivity={setactivity} id={item.id}/>
                })}
        </div>
            
    )
}

export default Todolist