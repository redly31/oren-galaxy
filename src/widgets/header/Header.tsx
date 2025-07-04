import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-between items-center px-4 h-[100px] relative">
      <Link to="/">
        <h3 className="font-bold">OrenGalaxy</h3>
      </Link>
      <nav className="flex items-center gap-1">
        {!isMenuOpen && (
          <>
            <Link to="/cart">
              <img className="w-8 h-8" src="/cart.svg" alt="Корзина" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer"
            >
              <img className="w-8 h-8" src="/menu.svg" alt="Открыть меню" />
            </button>
          </>
        )}
        {isMenuOpen && (
          <aside className="absolute right-0 top-1/3 w-48 bg-back px-4">
            <nav className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link>
                <Link to="/guide" onClick={() => setIsMenuOpen(false)}>Как выбрать?</Link>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              >
                <img className="w-8 h-8" src="/close.svg" alt="Закрыть меню" />
              </button>
            </nav>
          </aside>
        )}
      </nav>
    </header>
  );
}
