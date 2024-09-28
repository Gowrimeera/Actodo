import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Card from "../components/Card"
import Todo from "../components/Todocontainer"

function Landing(){

    const data = useLocation()

    return (
        <div className=" bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user}/>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"September"} subtitle={"14:02:04"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>
                <Todo/>
            </div>
        </div>
    )
}


export default Landing