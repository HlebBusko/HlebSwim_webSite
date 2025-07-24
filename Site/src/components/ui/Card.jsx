function Card({ children, price, img }) {
  return (
    <div
      className={`rounded shadow-lg overflow-hidden px-4 py-4 flex flex-col gap-2 flex flex-col box-content`}
    >
      <div className="rounded-lg overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div>{children}</div>
        <div className="mt-auto">{price}</div>
        <div className="flex flex-col gap-1">
          <div className="">
            Location: Osrodek Inflancka.{' '}
            <span className="font-semibold">Inflancka 8, 00-189 Warszawa</span>
          </div>
          <a
            href="https://maps.app.goo.gl/JkDfWUrvgVjg8izW9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main transition ease-in-out duration-300 font-bold"
          >
            {' '}
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
