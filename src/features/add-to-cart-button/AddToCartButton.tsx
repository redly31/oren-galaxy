import { useAtom } from "jotai";
import { cartAtom } from "../../entities/cart/cartAtom";

export default function AddToCartButton({productId}: {productId: string}) {
  const [cart, setCart] = useAtom(cartAtom)

  const addToCart = (productId: string) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId])
    }
  }

  return (
    <button onClick={() => addToCart(productId)} className="px-4 py-2 mt-2 transition-colors cursor-pointer bg-transparent border-primary border-4 hover:bg-primary">
      В корзину
    </button>
  );
}
