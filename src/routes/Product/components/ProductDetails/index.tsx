import xx99 from "../../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import Button from "../../../../components/Button/Button";

function index() {
  return (
    <section className="py-16">
      <button className="mb-10">Go back</button>
      <div className="py-5 md:grid grid-cols-2 gap-28">
        <div className="">
          <img src={xx99} alt="" className="h-full" />
        </div>
        <article>
          <div className="uppercase text-primary tracking-[.6rem] mt-8">
            new product
          </div>
          <h1 className="my-6 text-3xl md:text-4xl font-bold w-6/12 max-w-3xl">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphones experience by reproducing the
            balanced depth and precision of studio quality sound.
          </p>
          <p className="my-5 font-bold text-xl">$ 2,999</p>
          <div>
            <div className="bg-gray/30 mr-3 inline-flex">
              <button className="py-2 px-4 hover:text-primary">+</button>
              <span className="p-2">1</span>
              <button className="py-2 px-4 hover:text-primary">-</button>
            </div>
            <Button backgroundColor="bg-primary" color="text-secondary" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default index;
