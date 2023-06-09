import { useCartContext } from "../../context/CartContext"

export const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()

    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <p className="card-text">Price: {item.price}€</p>
                        <p className="card-text">Subtotal: {item.price * item.quantity}€</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}