function Card({ children, clickable }) {
    return (
        <div className={ `card ${clickable ? "clickabl-card" : ""}`}>
            {children}
        </div>
    )
}

export default Card