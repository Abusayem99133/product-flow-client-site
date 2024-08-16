import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [brand, setBrand] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const query = `?page=${currentPage}&limit=9&search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&brand=${brand}`;

        const res = await axios.get(
          `https://product-flow-server-site.vercel.app/api/books${query}`
        );

        setBooks(res.data.books);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, search, category, minPrice, maxPrice, sortBy, brand]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  const handleSearchText = (e) => {
    e.preventDefault();
    setSearch(searchText);

    console.log(searchText, "hello searchText");
  };
  return (
    <div id="book" className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold my-12 text-center">Islamic Books</h1>

      <form onSubmit={handleSearchText} className="my-4 text-center">
        <input
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          // onClick={() => setCurrentPage(1)}
          className="btn bg-blue-300 my-2 md:my-0"
        >
          Search
        </button>
      </form>

      <div className="grid md:grid-cols-5 my-4 gap-4">
        <div>
          <select
            className="select select-primary w-full max-w-xs"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All Categories</option>
            <option>Religious Texts</option>
            <option>Hadith</option>
            <option>Biography</option>
            <option>Supplications</option>
            <option>Prophets</option>
            <option>Fiqh</option>
            <option>Tafsir</option>
            <option>Spirituality</option>
            <option>Theology</option>
            <option>Ethics</option>
            <option>Finance</option>
            <option>Culture</option>
            <option>Rituals</option>
            <option>Politics</option>
            <option>Philosophy</option>
            <option>Worship</option>
          </select>
        </div>

        <div>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <select
          className="select select-primary w-full max-w-xs"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newestFirst">Date Added: Newest First</option>
        </select>

        <select
          className="select select-primary w-full max-w-xs"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="">All Brands</option>
          <option>Islamic Publisher</option>
          <option>Classic Islamic Books</option>
          <option>Scholarly Islamic Publications</option>
          <option>Divine Wisdom Press</option>
          <option>Islamic Knowledge Center</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((book) => (
          <div key={book?.id} className="card bg-base-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={
                  book?.product_image ||
                  "https://uploadimage.org/images/IAocu.jpeg"
                }
                alt={book?.product_name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {book?.product_name}</h2>
              <p>Description: {book?.description}</p>
              <p>Price: {book?.price}$</p>
              <p>Category: {book?.category}</p>
              <p>Rating: {book?.rating}</p>
              <p>Product-Date: {book?.product_creation_date}</p>
              <p>Brand: {book?.brand_name}</p>
              <div className="card-actions">
                <button className="btn bg-blue-300">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-8 pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="btn bg-blue-300 mr-4 tooltip hover:shadow-xl hover:shadow-purple-700"
          data-tip="Previous"
        >
          <IoIosArrowDropleft className="text-2xl" />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn ml-4 bg-blue-300 hover:shadow-xl hover:shadow-purple-700 tooltip"
          data-tip="Next"
        >
          <IoIosArrowDropright className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Book;
