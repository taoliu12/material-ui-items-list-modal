import { useParams } from "react-router-dom";

export default function ItemShowPage() {
  const { itemId } = useParams();
  // Use the item ID to fetch the item data and render the show page
  // ...
  return <div>hi</div>;
}
