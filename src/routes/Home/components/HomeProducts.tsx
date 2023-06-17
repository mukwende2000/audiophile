import zx9 from "../../../assets/Home/image-speaker-zx9.153cd899b91a08b22b1a.png";
import ear from "../../../assets/Home/download.jpeg";
import LinkBtn from "../../../components/LinkBtn";
import data from "../../../data/data.json";

function HomeProducts() {
  const featuredProducts = [data[5], data[4], data[0]];
  return (
    <div>
      <div className="container">
        <div className="overflow-hidden rounded-md gap-40 lg:flex  bg-primary py-20 px-28 items-center">
          <div className="lg:-mb-28 w-40 m-auto basis-full">
            <img src={zx9} alt="zx9 Speaker" />
          </div>
          <article className="text-center m-auto mt-10 lg:text-left basis-full max-w-sm">
            <h2 className="lg:text-6xl text-4xl uppercase  text-secondary">
              {featuredProducts[0].slug}
            </h2>
            <p className="text-secondary my-7">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <LinkBtn
              path={`speakers/${featuredProducts[0].name}`}
              color="text-secondary"
              backgroundColor="bg-dark hover:bg-dark/80"
            >
              see product
            </LinkBtn>
          </article>
        </div>
        <div
          className={`bg-[url('/image-speaker-zx7.173a4cb5c7acfc7f300c.jpg')] bg-cover bg-center bg-no-repeat py-20 px-10 my-5 rounded-md`}
        >
          <h2 className="text-3xl uppercase my-10">
            {featuredProducts[1].slug}
          </h2>
          <LinkBtn
            path={`speakers/${featuredProducts[1].name}`}
            color="text-dark hover:text-secondary"
            backgroundColor="bg-transparent hover:bg-dark"
          >
            see product
          </LinkBtn>
        </div>

        <div className="md:flex gap-10">
          <div className="basis-full">
            <img className="w-full h-full rounded-md" src={ear} alt="Earpods" />
          </div>
          <div
            className={`bg-gray/20 my-5 lg:my-0 py-20 px-10 rounded-md basis-full`}
          >
            <h2 className="text-3xl uppercase my-10">
              {featuredProducts[2].slug}
            </h2>
            <LinkBtn
              path={`earphones/${featuredProducts[2].name}`}
              color="text-dark hover:text-secondary"
              backgroundColor="bg-transparent hover:bg-dark"
            >
              see product
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
