import PropTypes from 'prop-types'

export default function MemeHistory({ history, onSelectMeme }) {
    if (history.length === 0) {
        return null
    }

    return (
        <div className="meme-history">
            <h3>Recent Memes</h3>
            <div className="history-grid">
                {history.map((meme, index) => (
                    <div 
                        key={index} 
                        className="history-item"
                        onClick={() => onSelectMeme(meme)}
                    >
                        <img 
                            src={meme.imageUrl} 
                            alt={`Meme ${index + 1}`}
                            className="history-image"
                        />
                        <div className="history-overlay">
                            <span className="history-text top">{meme.topText}</span>
                            <span className="history-text bottom">{meme.bottomText}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

MemeHistory.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            topText: PropTypes.string.isRequired,
            bottomText: PropTypes.string.isRequired
        })
    ).isRequired,
    onSelectMeme: PropTypes.func.isRequired
} 