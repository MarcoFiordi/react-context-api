import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"
function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);

    if (!product) {
        return (
            <main className="page-section">
                <div className="container">
                    <p>Caricamento prodotto...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="page-section">
            <div className="container">
                <div className="card p-4">
                    <h1 className="page-title">{product.title}</h1>

                    <p className="text-muted">
                        Categoria: {product.category}
                    </p>

                    <p className="fw-bold fs-4">
                        {product.price} €
                    </p>
                    <div className="product-detail-image-container">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-detail-image"
                        />
                    </div>


                    <p className="mt-4">
                        {product.description}
                    </p>
                </div>
            </div>
        </main>
    );
}
export default ProductDetail