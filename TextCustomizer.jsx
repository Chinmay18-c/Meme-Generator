import PropTypes from 'prop-types'

export default function TextCustomizer({ 
    textStyle, 
    onStyleChange,
    position 
}) {
    return (
        <div className="text-customizer">
            <h3>{position} Text Style</h3>
            <div className="style-controls">
                <div className="style-group">
                    <label htmlFor={`${position}-size`}>Size</label>
                    <input
                        id={`${position}-size`}
                        type="range"
                        min="1"
                        max="3"
                        step="0.1"
                        value={textStyle.size}
                        onChange={(e) => onStyleChange(position, 'size', parseFloat(e.target.value))}
                    />
                </div>

                <div className="style-group">
                    <label htmlFor={`${position}-color`}>Color</label>
                    <input
                        id={`${position}-color`}
                        type="color"
                        value={textStyle.color}
                        onChange={(e) => onStyleChange(position, 'color', e.target.value)}
                    />
                </div>

                <div className="style-group">
                    <label htmlFor={`${position}-font`}>Font</label>
                    <select
                        id={`${position}-font`}
                        value={textStyle.font}
                        onChange={(e) => onStyleChange(position, 'font', e.target.value)}
                    >
                        <option value="impact">Impact</option>
                        <option value="arial">Arial</option>
                        <option value="comic-sans">Comic Sans</option>
                        <option value="times-new-roman">Times New Roman</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

TextCustomizer.propTypes = {
    textStyle: PropTypes.shape({
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        font: PropTypes.string.isRequired
    }).isRequired,
    onStyleChange: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['top', 'bottom']).isRequired
} 