import trollFace from "../images/troll-face.png"
import PropTypes from 'prop-types'

export default function Header({ title = "Meme Generator" }) {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                alt="Troll Face"
                className="header-image"
            />
            <h1 className="header-title">{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}