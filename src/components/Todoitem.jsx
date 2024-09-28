function TodoItem(props){
    
    const activity=props.activity
    const setactivity=props.setactivity
    const handledelete=(removeid)=>{
        var temparr = activity.filter(function(item){
            if(item.id === removeid){
                return false
            }
            else{
                return true
            }
        })
        setactivity(temparr)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>{handledelete(props.id)}}>Delete</button>
        </div>
    )
}
export default TodoItem