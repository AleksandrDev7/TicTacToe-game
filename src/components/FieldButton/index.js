
function FieldButton({value, onSquaresClick}) {

    return (
        <div>
            <button type='button'
                    className="field"
                    onClick={onSquaresClick}
                    >
                {value}
            </button>
        </div>
    );
}

export default FieldButton;