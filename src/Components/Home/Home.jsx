import React from "react";
import Header from "../Header/Header";
import Food from "../Books/Book";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const { data = [], isLoading } = useQuery({
  //   queryKey: ["books"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:5000/foods");
  //     return data;
  //   },
  // });
  // console.log(data);
  return (
    <div>
      <Header />
      <div>
        <Food />
      </div>
    </div>
  );
};

export default Home;
