import cardsData from "../data/cards.data";
import useFavoritesStore from "../store/useFavoritesStore";

const Cards = () => {
  const { addFavorite, removeFavorite, favorites } = useFavoritesStore();
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardsData.map((card) => {
            const isFavorite = favorites.some((fav) => fav.id === card.id);

            return (
              <div key={card.id} className="col">
                <div className="card shadow-sm">
                  <img src={card.image} className="bd-placeholder-img card-img-top" width="100%" height="250" alt={card.title} />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button><button
                        type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        <button
                          type="button" className="btn btn-sm btn-outline-primary" onClick={() => isFavorite ? removeFavorite(card.id) : addFavorite(card)}> {isFavorite ? "Quitar Favorito" : "Agregar a Favoritos"}</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {favorites.length > 0 && (
          <div className="mt-5">
            <h2>Mis Favoritos</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {favorites.map((fav) => (
                <div key={fav.id} className="col">
                  <div className="card shadow-sm border border-warning">
                    <img
                      src={fav.image}
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="250"
                      alt={fav.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{fav.title}</h5>
                      <p className="card-text">{fav.description}</p>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFavorite(fav.id)}
                      >
                        Quitar Favorito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;

/* SIN ZUSTAND

import cardsData from "../data/cards.data";

const Cards = () => {
  return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardsData.map((card) => (
            <div key={card.id} className="col">
              <div className="card shadow-sm"> 
                <img src={card.image} className="bd-placeholder-img card-img-top" width="100%" height="250" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button><button
                      type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Cards;
*/