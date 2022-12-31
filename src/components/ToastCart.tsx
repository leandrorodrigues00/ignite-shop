import { toast } from "react-toastify";

export const addCartToast = () =>
  toast.success("Produto adicionado ao carrinho", {
    autoClose: 1500,
    pauseOnHover: false,
    closeOnClick: true,
    theme: "dark",
  });
