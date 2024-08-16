import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Book = () => {
  const [books, setBooks] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/api/books?page=${currentPage}&limit=9`);
      setProducts(res?.data?.products);
      setTotalPages(res?.data?.totalPages);
    };

    fetchProducts();
  }, [currentPage]);

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
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  console.log(books);
  return (
    <div id="book" className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold my-12 text-center">Islamic Books</h1>
      <div className="my-4 text-center">
        <input
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-blue-300 my-2 md:my-0">Search</button>
      </div>
      <div className="grid md:grid-cols-5 my-4 gap-4">
        <div className="">
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              All Category...
            </option>
            <option>Religious Texts</option>
            <option>Hadith</option>
            <option>Biography</option>
            <option>Supplications</option>
            <option>Supplications</option>
            <option>Prophets</option>
            <option>Fiqh</option>
            <option>Tafsir</option>
            <option>Spirituality</option>
            <option>Theology</option>
            <option>Ethics</option>
            <option>Family</option>
            <option>Finance</option>
            <option>History</option>
            <option>Introduction</option>
            <option>Politics</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Min Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Max Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Date Added: Newest First</option>
        </select>
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            All Brands
          </option>
          <option>Islamic Publisher</option>
          <option>Classic Islamic Books</option>
          <option>Scholarly Islamic Publications</option>
          <option>Divine Wisdom Press</option>
          <option>Islamic Knowledge Center</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.slice(0, 9)?.map((book) => (
          <div key={book?.id} className="card bg-base-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={
                  book?.product_image ||
                  "https://uploadimage.org/images/IAocu.jpeg"
                } // Default image if no imageUrl
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
              <p>Time: {book?.time}</p>
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
          className="btn  bg-blue-300 mr-4 tooltip hover:shadow-xl hover:shadow-purple-700"
          data-tip="Previous"
        >
          <IoIosArrowDropleft className="text-2xl" />
        </button>
        <span>
          Page{currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn bg-blue-300 hover:shadow-xl hover:shadow-purple-700 tooltip"
          data-tip="Next"
        >
          <IoIosArrowDropright className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Book;
