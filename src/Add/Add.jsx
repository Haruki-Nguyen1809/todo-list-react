import './Add.css';

export function AddBtn({children, onSelected}) {
    return (
        <div>
            <button className="add-btn" onClick={onSelected}>{children}</button>
        </div>
    );
}