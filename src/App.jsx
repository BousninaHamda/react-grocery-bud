import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const getLocalStorage = () => {
  let itemList = localStorage.getItem("itemsList");
  if (itemList) {
    itemList = JSON.parse(localStorage.getItem("itemsList"));
  } else {
    itemList = [];
  }
  return itemList;
};

const setLocalStorage = (items) => {
  localStorage.setItem("itemsList", JSON.stringify(items));
};

function App() {
  const [items, setItems] = useState(getLocalStorage());
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
