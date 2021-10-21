import React, { useState, useEffect } from "react";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setitems] = useState("");

  const fetchItems = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");

    const items = await data.json();
    setitems(items.message);
    console.log(items.message);
  };

  return <div>{items}</div>;
}

export default Shop;
