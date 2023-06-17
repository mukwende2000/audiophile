import { useNavigate } from "react-router-dom";
import LinkBtn from "../../../../components/LinkBtn";
import Picture from "../../../../components/Picture";
import data from "../../../../data/data.json";

type Props = {
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  productName: string;
  slug: string;
};

function RelatedProduct({
  productName,
  url,
  tabletUrl,
  desktopUrl,
  slug,
}: Props) {
  const navigate = useNavigate();
  const getCategory = (slug: string) => {
    const product = data.find((item) => item.slug === slug);
    const category = product?.category;
    const name = product?.name;
    return `/${category}/${name}`;
  };

  return (
    <div className="my-5 basis-full">
      <Picture url={url} tabletUrl={tabletUrl} alt="" desktopUrl={desktopUrl} />
      <h3 className="uppercase my-5 font-bold text-xl">{productName}</h3>

      <LinkBtn
        btn
        handleClick={() => navigate(getCategory(slug))}
        backgroundColor="bg-primary"
        color="text-secondary"
      >
        see product
      </LinkBtn>
    </div>
  );
}

export default RelatedProduct;
