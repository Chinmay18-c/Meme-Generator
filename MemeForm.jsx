import PropTypes from 'prop-types'

export default function MemeForm({ 
    topText, 
    bottomText, 
    onTextChange, 
    onNewMeme 
}) {
    return (
        <form className="meme-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="topText">Top Text</label>
                <input
                    id="topText"
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    onChange={onTextChange}
                    value={topText}
                    aria-label="Top text for meme"
                    maxLength={50}
                />
            </div>

            <div className="form-group">
                <label htmlFor="bottomText">Bottom Text</label>
                <input
                    id="bottomText"
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                    onChange={onTextChange}
                    value={bottomText}
                    aria-label="Bottom text for meme"
                    maxLength={50}
                />
            </div>
            
            <button 
                type="button"
                onClick={onNewMeme}
                className="new-meme-button"
                aria-label="Get new meme image"
            >
                Get a new meme image 🖼
            </button>
        </form>
    )
}

MemeForm.propTypes = {
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onNewMeme: PropTypes.func.isRequired
} 