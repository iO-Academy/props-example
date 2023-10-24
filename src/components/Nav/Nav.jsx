import NavLink from "./NavLink/NavLink"

function Nav() {
    return (
        <nav>
            Menu
            <div>
                <NavLink text="Youtube" link="https://youtube.com" />
                <NavLink text="Google" link="https://google.com" />
                <NavLink text="LinkedIn" link="https://linkedin.com" />
            </div>
        </nav>
    )
}

export default Nav