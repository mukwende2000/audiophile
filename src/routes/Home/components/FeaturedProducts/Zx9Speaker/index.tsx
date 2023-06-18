import zx9 from "../../../../../assets/Home/image-speaker-zx9.153cd899b91a08b22b1a.png";
import LinkBtn from "../../../../../components/LinkBtn";
import data from "../../../../../data/data.json";

function index() {
  const featuredProduct = data[5];
  return (
    <div className="overflow-hidden rounded-md gap-40 lg:flex  bg-primary py-20 px-28 items-center">
      <div className="lg:-mb-28 w-40 m-auto basis-full">
        <img src={zx9} alt="zx9 Speaker" />
      </div>
      <article className="text-center m-auto mt-10 lg:text-left basis-full max-w-sm">
        <h2 className="lg:text-6xl text-4xl uppercase  text-secondary">
          {featuredProduct.slug}
        </h2>
        <p className="text-secondary my-7">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <LinkBtn
          path={`speakers/${featuredProduct.name}`}
          color="text-secondary"
          backgroundColor="bg-dark hover:bg-dark/80"
        >
          see product
        </LinkBtn>
      </article>
    </div>
  );
}

export default index;
