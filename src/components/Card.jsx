function Card({ children, linkStyle }) {
    return (
        <div className={ `card ${linkStyle ? "linkStyle-card" : ""}`}>
            {children}
        </div>
    )
}

export default Card