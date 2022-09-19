import './button.css';

function Button(props) {

    const action = props.action;

    return (
        <div className="content-button">
            <button
                className={'button ' + props.type}
                onClick={() => action()}
            >
                {props.nombre}
            </button>
        </div>
    )
}
export default Button;