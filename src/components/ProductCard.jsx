function ProductCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Price: {props.price}</p>
            <p>Stock: {props.stock}</p>
            <p>Category: {props.category}</p>
        </div>
    )
}

export default ProductCard;