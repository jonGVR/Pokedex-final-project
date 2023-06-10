import "../Tag/Tag.css"
import "../../../_styles/index"

export const Tag = ({ type, style }: {type: string, style: React.CSSProperties}) => {
    return (
        <div className="card__type-styles" style={style}>
            <h2>
                {type}
            </h2>
        </div>
    )
}