import './DeleteBtn.css';

export function DeleteBtn({children, onPress}) {
    function stopEvent(e) {
        e.stopPropagation();
        onPress();
    }
    return (
        <div>
            <button className="delete-btn" onClick={stopEvent}>{children}</button>
        </div>
    );
}