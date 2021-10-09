import './NavBar.css'




const DropdownItem =(props)=>{
    return(
        <a href="/" className = "menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}







const DropDownMenu = () => {
    return (
        <div className = "dropdown">
        <DropdownItem leftIcon = "🤴" rightIcon = "👌" >MyProfile</DropdownItem>
        <DropdownItem leftIcon = "👨‍🎨" >About</DropdownItem>
        </div>
    )
}










export default DropDownMenu
