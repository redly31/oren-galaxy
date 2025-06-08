import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex w-full flex-col items-center gap-2 px-4">
      <h2 className="!text-4xl">Ошибка! Страница не найдена</h2>
      <Link to='/' className="px-4 py-2 mt-2 bg-primary border-primary border-4 hover:bg-transparent transition-colors cursor-pointer">
        На главную
      </Link>
    </div>
  );
}
