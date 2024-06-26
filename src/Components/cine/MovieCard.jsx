import { useContext, useState } from "react";
import { getImageUrl } from "../../utils/cine-utility";
import Rating from "./Rating";
import Tag from "../../assets/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const { title, cover, genre, rating, price } = movie;
  const { state, dispatch } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movie ${movie.title} added Successfully  !`, {
        position: "top-right"
      });
    } else {
      toast.error(`Movie ${movie.title} has been added to the cart already !`, {
        position: "top-right"
      });
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure
        onClick={() => handleMovieSelection(movie)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img
          className="w-full object-cover"
          src={getImageUrl(cover)}
          alt={title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => handleAddToCart(e, movie)}
          >
            <img src={Tag} alt="" />
            <span>${price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
