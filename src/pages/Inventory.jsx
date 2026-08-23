import Card from "../components/Card"

function Inventory({ inventory }) {

    const inventoryJSX = inventory.map((movie) => {
    return <h2>{movie.title}</h2>}
    )

    return (
            <>
                <h1>The Vault</h1>
                <Card>
                    <h2>My Movies</h2>
                    {inventoryJSX}
                </Card>
            </>
    )
}


export default Inventory