function Header(props){
    return(
        <>
            <h1 className="text-3xl font-medium">HELLO {props.name}!</h1>
            <p>I help you manage your activity :)</p>
        </>
    )
}

export default Header