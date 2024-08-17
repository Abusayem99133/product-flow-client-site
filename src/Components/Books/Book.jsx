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

  const priceRanges = [
    { label: "0 - 10$", min: 0, max: 10 },
    { label: "10 - 20$", min: 10, max: 20 },
    { label: "20 - 30$", min: 20, max: 30 },
    { label: "30 - 40$", min: 30, max: 40 },
    { label: "40 - 50$", min: 40, max: 50 },
  ];

  // Example: Fetch categories dynamically from an API
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/categories");
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const query = `?page=${currentPage}&limit=9&search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}&brand=${brand}`;

        const res = await axios.get(`http://localhost:5000/api/books${query}`);

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

  const handleSearchText = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handlePriceChange = (e) => {
    const selectedRange = priceRanges.find(
      (range) => range.label === e.target.value
    );
    if (selectedRange) {
      setMinPrice(selectedRange.min);
      setMaxPrice(selectedRange.max);
    } else {
      setMinPrice("");
      setMaxPrice("");
    }
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
    setBrand("");
    setSearchText("");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

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
        <button className="p-3 rounded-r-lg bg-blue-300 my-2 md:my-0">
          Search
        </button>
      </form>

      <div className="grid md:grid-cols-4 my-4 gap-4">
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
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            className="select select-primary w-full max-w-xs"
            value={minPrice && maxPrice ? `${minPrice} - ${maxPrice}$` : ""}
            onChange={handlePriceChange}
          >
            <option value="">Select Price Range</option>
            {priceRanges.map((range) => (
              <option key={range.label} value={range.label}>
                {range.label}
              </option>
            ))}
          </select>
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
      <div className="text-center my-4">
        <button
          type="button"
          onClick={resetFilters}
          className="btn bg-blue-300 ml-4 my-2 md:my-0"
        >
          Reset
        </button>
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
