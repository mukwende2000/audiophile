import Picture from "../../../../components/Picture";
import productImg from "../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import productImgTablet from "../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import productImgDesktop from "../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";

import productImg2 from "../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import productImg2Tablet from "../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import productImg2Desktop from "../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";

import productImg3 from "../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";
import productImg3Tablet from "../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import productImg3Desktop from "../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";

function index() {
  return (
    <div className=" my-10 md:grid grid-cols-2 gap-8">
      <Picture
        gallery
        url={productImg}
        tabletUrl={productImgTablet}
        desktopUrl={productImg}
        alt={""}
      />
      <Picture
        gallery
        url={productImg2}
        tabletUrl={productImg2Tablet}
        desktopUrl={productImg2}
        alt={""}
      />
      <div className="col-start-2 col-end-3 row-start-1 row-end-3">
        <Picture
          gallery
          url={productImg3}
          tabletUrl={productImg3Tablet}
          desktopUrl={productImg3}
          alt={""}
        />
      </div>
    </div>
  );
}

export default index;
