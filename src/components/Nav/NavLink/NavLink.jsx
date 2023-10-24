import "./NavLink.css"

function NavLink({text, link}) {
    return (
        <a href={link}>{text}</a>
    )
}

export default NavLink