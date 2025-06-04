import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-between items-center px-4 h-[100px] relative">
      <Link to='/'>
        <h3 className="font-bold">OrenGalaxy</h3>
      </Link>
      <nav className="flex items-center gap-1">
        {!isMenuOpen && (
          <>
            <Link to="/">
              <img className="w-8 h-8" src="gear.svg" alt="Админ-панель" />
            </Link>
            <Link to="/">
              <img className="w-8 h-8" src="cart.svg" alt="Корзина" />
            </Link>
            <button onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
              <img className="w-8 h-8" src="menu.svg" alt="Открыть меню" />
            </button>
          </>
        )}
        {isMenuOpen && (
          <aside className="absolute right-0 top-0 w-40 bg-back px-2 mt-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col gap-2">
                <Link to="/">О нас</Link>
                <Link to="/">Гайд</Link>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="cursor-pointer">
                <img className="w-6 h-6" src="x.svg" alt="Закрыть меню" />
              </button>
            </div>
          </aside>
        )}
      </nav>
    </header>
  );
}
