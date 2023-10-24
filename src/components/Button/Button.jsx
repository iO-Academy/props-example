import "./Button.css"

function Button({text, link}) {
    return (
        <a className="button" href={link}>{text}</a>
    )
}

export default Button