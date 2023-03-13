import { Modal } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import ItemShowPage from "./ItemShowPage";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function ItemModal({ isOpen, onClose, itemId }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClose = () => {
    onClose();
    navigate(`/items/${id}`);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <ItemShowPage itemId={itemId} />
      </Box>
    </Modal>
  );
}
