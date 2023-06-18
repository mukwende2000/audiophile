import LinkBtn from "../../../../../components/LinkBtn";
import data from "../../../../../data/data.json";

function index() {
  const featuredProduct = data[4];
  return (
    <div
      className={`bg-[url('/image-speaker-zx7.173a4cb5c7acfc7f300c.jpg')] bg-cover bg-center bg-no-repeat py-20 px-10 my-5 rounded-md`}
    >
      <h2 className="text-3xl uppercase my-10">{featuredProduct.slug}</h2>
      <LinkBtn
        path={`speakers/${featuredProduct.name}`}
        color="text-dark hover:text-secondary"
        backgroundColor="bg-transparent hover:bg-dark"
      >
        see product
      </LinkBtn>
    </div>
  );
}

export default index;
