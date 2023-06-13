import Button from "../Button/Button";

type Props = {
  urlMobile: string;
  urlDesktop: string;
  urlTablet: string;
  alt: string;
  productName: string;
  productDetails: string;
  isNew: boolean;
};
function index({
  urlTablet,
  urlDesktop,
  urlMobile,
  alt,
  productName,
  productDetails,
  isNew,
}: Props) {
  return (
    <article>
      <picture>
        <source
          media="(min-width: 768px and max-width: 1020px)"
          srcSet={urlDesktop}
        />
        <source media="(min-width: 1020px)" srcSet={urlTablet} />
        <img src={urlMobile} alt={alt} />
      </picture>
      <div>
        {isNew && <div>new product</div>}
        <h2> {productName} </h2>
        <p>{productDetails}</p>
        <Button backgroundColor="bg-primary" color="text-secondary" />
      </div>
    </article>
  );
}

export default index;
