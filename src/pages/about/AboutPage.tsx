export default function AboutPage() {
  return (
    <article className="px-4 mb-4">
      <header>
        <img
          src="https://avatars.mds.yandex.net/i?id=a5bd9b68b47866f1137d0ffbe594316d_l-5246115-images-thumbs&n=13"
          alt=""
          className="object-cover h-48 w-full pointer-events-none"
        />
        <div className="flex items-center justify-between">
          <h1 className="mt-2">О компании OrenGalaxy</h1>
          <span className="bg-text text-back px-3 py-1 rounded-full text-sm">
            #Гайды
          </span>
        </div>
      </header>
      <section className="flex flex-col space-y-4">
        <h2 className="mt-4">Кратко о нас</h2>
        <p>
          Магазин Телефонов Samsung — это проект, созданный для того, чтобы
          помочь тебе выбрать лучший смартфон Samsung без лишних сложностей и
          рекламы. Мы собираем важную и проверенную информацию, чтобы ты мог
          сделать осознанный выбор.
        </p>

        <h3>Что мы предлагаем</h3>
        <ul className="list-none space-y-2 pl-4">
          <li>— Подробные обзоры и описания линеек телефонов Samsung.</li>
          <li>— Простые и понятные рекомендации по выбору модели.</li>
          <li>— Объяснения технических терминов без сложных слов.</li>
          <li>— Актуальную информацию о новых моделях и технологиях.</li>
        </ul>

        <h3>Наша цель</h3>
        <p>
          Сделать выбор телефона понятным и прозрачным. Мы ценим твоё время и
          деньги, поэтому не усложняем и говорим только то, что действительно
          важно.
        </p>

        <h3>Кто мы</h3>
        <p>
          Команда студентов и энтузиастов IT, которые любят технологии и хотят
          поделиться знаниями на простом языке. Мы сами учимся и знаем, как
          важно иметь надёжного помощника при выборе техники.
        </p>
      </section>
    </article>
  );
}
