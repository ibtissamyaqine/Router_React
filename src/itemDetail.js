import React, {useState, useEffect} from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
      fetchItem();
      console.log(match);
}, []);
  
  const [item1, setItem] = useState({});
  
  const fetchItem = async () => {
      const fetchItem = await fetch(
          `https://fortnite-api.theapinetwork.com/item/get?id=${
              match.params.id
            }`
          );
      const item1 = await fetchItem.json();
      console.log("Test: => "+item1);
      setItem(item1);

  }
  return (
    <div>
      <h1>item</h1>
    </div>
  );
}
export default ItemDetail;