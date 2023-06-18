import LinkBtn from "../LinkBtn";
import Picture from "../Picture";

type Props = {
  url: string;
  desktopUrl: string;
  tabletUrl: string;
  alt: string;
  productName: string;
  productDetails: string;
  isNew: boolean;
};

function index({
  tabletUrl,
  desktopUrl,
  url,
  alt,
  productName,
  productDetails,
  isNew,
}: Props) {
  return (
    <article>
      <Picture
        url={url}
        desktopUrl={desktopUrl}
        tabletUrl={tabletUrl}
        alt={alt}
      />
      <div>
        {isNew && <div>new product</div>}
        <h2> {productName} </h2>
        <p>{productDetails}</p>
        <LinkBtn backgroundColor="bg-primary" color="text-secondary">
          see product
        </LinkBtn>
      </div>
    </article>
  );
}

export default index;
