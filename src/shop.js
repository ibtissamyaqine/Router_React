import React, {useState, useEffect} from "react";
import "./App.css";
import {Link} from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
      );

      const donnees = await data.json();
      console.log(donnees.data);
      setItems(donnees.data);

  }
  return (
    <div>
      {items.map(a => (
        <h1><Link to={`/shop/${a.itemId}`}>{a.item.name}</Link></h1>
      ))}
    </div>
  );
}
export default Shop;