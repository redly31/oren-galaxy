import { Link } from "react-router-dom";

export default function PhonesList() {
  return (
    <div className="">
      <h1>Каталог</h1>
      <div className="grid grid-cols-3 gap-2">
        <article className="w-56 mt-8">
          <img
            src="https://img.joomcdn.net/ecbe076f5eacca9811f5f90c2de1a10e4f1aa6b4_original.jpeg"
            alt=""
            className="object-cover h-60 w-full"
          />
          <section className="mt-2">
            <h3 className="hover:text-primary transition-colors"><Link to='/'>Смартфон Samsung Galaxy S24 8/256 ГБ Onyx Black</Link></h3>
            <button className="px-5 py-2 mt-2 bg-primary hover:shadow-primary hover:shadow-[0_0_5px] transition-shadow cursor-pointer">
              50 000 ₽
            </button>
          </section>
        </article>
      </div>
    </div>
  );
}
