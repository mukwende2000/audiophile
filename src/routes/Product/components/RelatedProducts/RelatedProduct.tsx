import Button from "../../../../components/Button/Button";
import Picture from "../../../../components/Picture";

type Props = {
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  productName: string;
};

function RelatedProduct({ productName, url, tabletUrl, desktopUrl }: Props) {
  return (
    <div className="my-5 basis-full">
      <Picture url={url} tabletUrl={tabletUrl} desktopUrl={desktopUrl} />
      <h3 className="my-5 font-bold text-2xl">{productName}</h3>
      <Button backgroundColor="bg-primary" color="text-secondary" />
    </div>
  );
}

export default RelatedProduct;
