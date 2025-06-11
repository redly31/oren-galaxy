import { useAtom } from 'jotai'
import { cartAtom } from '../../entities/cart/cartAtom'

export default function RemoveFromCartButton({ productId }: { productId: string }) {
  const [cart, setCart] = useAtom(cartAtom)

  const removeFromCart = (idToRemove: string): void => {
    const updatedCart = cart.filter((id) => id !== idToRemove)
    setCart(updatedCart)
  }

  return (
    <button
      onClick={() => removeFromCart(productId)}
      className="px-4 py-2 mt-2 transition-colors cursor-pointer bg-transparent border-primary border-4 hover:bg-primary"
    >
      Удалить из корзины
    </button>
  )
}
