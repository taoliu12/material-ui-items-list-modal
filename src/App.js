import "./styles.css";
import ItemList from "./ItemList";

const items = [
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" },
  { id: 3, name: "Item 3", description: "Description for item 3" },
  { id: 4, name: "Item 4", description: "Description for item 4" },
  { id: 5, name: "Item 5", description: "Description for item 5" }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ItemList items={items} />
    </div>
  );
}
