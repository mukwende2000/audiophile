function index() {
  return (
    <div
      className={`hidden absolute top-36 md:left-[73%] left-[50%] translate-x-[-50%] z-10 w-10/12 max-w-[30rem] p-7 rounded-lg bg-black/20`}
    >
      <div className="flex justify-between">
        <h1 className="uppercase font-bold text-xl">cart()</h1>
        <button className="underline text-gray">Remove all</button>
      </div>
      <p className="grid place-items-center my-10 text-gray text-lg ">
        Your Cart is Empty
      </p>

      <div className="flex justify-between">
        <p className="uppercase text-gray">total</p>
        <p className="text-dark font-bold text-lg">$ 0</p>
      </div>
      <button
        disabled
        className={`uppercase bg-primary border text-secondary py-3 mt-5 w-full`}
      >
        checkout
      </button>
    </div>
  );
}

export default index;
