import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ItemModal from "./ItemModal";

export default function ItemList({ items }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Router>
        {/* Render the list of items */}
        {items.map((item) => (
          <div key={item.id}>
            <Link
              to={`/items/${item.id}`}
              onClick={() => handleOpenModal(item.id)}
            >
              {item.name}
            </Link>
          </div>
        ))}

        {/* Render the modal */}
        <ItemModal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          itemId={selectedItemId}
        />
      </Router>
    </>
  );
}
