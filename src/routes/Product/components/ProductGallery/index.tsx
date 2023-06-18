import Picture from "../../../../components/Picture";

type Props = {
  productImg: string;
  productImgTablet: string;
  productImgDesktop: string;
  productImg2: string;
  productImg2Tablet: string;
  productImg2Desktop: string;
  productImg3: string;
  productImg3Tablet: string;
  productImg3Desktop: string;
};

function index({
  productImg,
  productImgTablet,
  productImgDesktop,
  productImg2,
  productImg2Tablet,
  productImg2Desktop,
  productImg3,
  productImg3Tablet,
  productImg3Desktop,
}: Props) {
  return (
    <div className=" my-10 md:grid grid-cols-2 gap-8">
      <Picture
        gallery
        url={productImg}
        tabletUrl={productImgTablet}
        desktopUrl={productImgDesktop}
        alt={""}
      />
      <Picture
        gallery
        url={productImg2}
        tabletUrl={productImg2Tablet}
        desktopUrl={productImg2Desktop}
        alt={""}
      />
      <div className="col-start-2 col-end-3 row-start-1 row-end-3">
        <Picture
          gallery
          url={productImg3}
          tabletUrl={productImg3Tablet}
          desktopUrl={productImg3Desktop}
          alt={""}
        />
      </div>
    </div>
  );
}

export default index;
