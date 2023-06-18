import ear from "../../../../../assets/Home/download.jpeg";
import LinkBtn from "../../../../../components/LinkBtn";
import data from "../../../../../data/data.json";

function index() {
  const featuredProduct = data[0];
  return (
    <div className="md:flex gap-10">
      <div className="basis-full">
        <img className="w-full h-full rounded-md" src={ear} alt="Earpods" />
      </div>
      <div
        className={`bg-gray/20 my-5 lg:my-0 py-20 px-10 rounded-md basis-full`}
      >
        <h2 className="text-3xl uppercase my-10">{featuredProduct.slug}</h2>
        <LinkBtn
          path={`earphones/${featuredProduct.name}`}
          color="text-dark hover:text-secondary"
          backgroundColor="bg-transparent hover:bg-dark"
        >
          see product
        </LinkBtn>
      </div>
    </div>
  );
}

export default index;
