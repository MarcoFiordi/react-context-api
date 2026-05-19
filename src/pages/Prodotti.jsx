import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { BudgetContext } from "../contexts/BudgetContext";
function Prodotti() {
    const [prodotti, setProdotti] = useState([]);

    const { budgetMode } = useContext(BudgetContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProdotti(data);
            });
    }, []);

    let prodottiDaMostrare = prodotti;

    if (budgetMode === true) {
        prodottiDaMostrare = prodotti.filter((prodotto) => {
            return prodotto.price <= 30;
        });
    }

    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Prodotti</h1>
                <p className="page-subtitle">Lista dei prodotti</p>

                <div className="row g-4 mt-3">
                    {prodottiDaMostrare.map((prodotto) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4 col-xl-3"
                            key={prodotto.id}
                        >
                            <article className="card product-card h-100">
                                <div className="product-image-wrapper">
                                    <img
                                        src={prodotto.image}
                                        alt={prodotto.title}
                                        className="product-image"
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h2 className="product-title">{prodotto.title}</h2>

                                    <p className="product-price">
                                        {prodotto.price} €
                                    </p>

                                    <Link
                                        to={`/prodotti/${prodotto.id}`}
                                        className="btn btn-outline-primary mt-auto"
                                    >
                                        Dettaglio
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </main>

    )
}
export default Prodotti