import { useState } from 'react'
import PropTypes from 'prop-types'

export default function MemeDisplay({ 
    imageUrl, 
    topText, 
    bottomText,
    topStyle,
    bottomStyle,
    onDownload,
    onShare
}) {
    const [imageError, setImageError] = useState(false)

    const textStyle = (style) => ({
        fontSize: `${style.size}rem`,
        color: style.color,
        fontFamily: style.font
    })

    if (imageError) {
        return (
            <div className="error-container">
                <h2>Error loading image</h2>
                <p>The meme image failed to load. Please try another image.</p>
                <button onClick={() => setImageError(false)}>Try Again</button>
            </div>
        )
    }

    return (
        <div className="meme-container">
            <div className="meme">
                <img 
                    src={imageUrl} 
                    alt="Generated meme"
                    className="meme-image"
                    onError={() => setImageError(true)}
                />
                <span 
                    className="meme-text top"
                    style={textStyle(topStyle)}
                >
                    {topText}
                </span>
                <span 
                    className="meme-text bottom"
                    style={textStyle(bottomStyle)}
                >
                    {bottomText}
                </span>
            </div>
            <div className="meme-actions">
                <button 
                    onClick={onDownload}
                    className="action-button download"
                    disabled={imageError}
                >
                    Download Meme 💾
                </button>
                <button 
                    onClick={onShare}
                    className="action-button share"
                    disabled={imageError}
                >
                    Share Meme 📤
                </button>
            </div>
        </div>
    )
}

MemeDisplay.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    topStyle: PropTypes.shape({
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        font: PropTypes.string.isRequired
    }).isRequired,
    bottomStyle: PropTypes.shape({
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        font: PropTypes.string.isRequired
    }).isRequired,
    onDownload: PropTypes.func.isRequired,
    onShare: PropTypes.func.isRequired
} 