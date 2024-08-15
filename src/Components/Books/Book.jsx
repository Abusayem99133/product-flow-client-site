import { useEffect, useState } from "react";

const Book = () => {
  const [books, setBooks] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold my-12">This is Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book?.id} className="card bg-base-300 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={
                  book?.imageUrl ||
                  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                } // Default image if no imageUrl
                alt={book?.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {book?.product_name}</h2>
              <p>Description: {book?.description}</p>
              <p>Price: {book?.price}$</p>
              <p>Section: {book?.section}</p>
              <p>Rating: {book?.rating}</p>
              <p>Product-Date: {book?.productDate}</p>
              <p>Time: {book?.time}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
