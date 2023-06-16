import RelatedProduct from "./RelatedProduct";

function index() {
  return (
    <section>
      <div className="text-center py-10">
        <h2 className="text-2xl lg:text-4xl mb-10 lg:mb-0">
          YOU MAY ALSO LIKE
        </h2>
        <div className="md:flex justify-between gap-10">
          {/* <RelatedProduct
            url={xx99tablet}
            tabletUrl={xx99desktop}
            desktopUrl={xx99desktop}
            productName="XX99 MARK I"
          />
          <RelatedProduct
            url={xx59tablet}
            tabletUrl={xx59}
            desktopUrl={xx59desktop}
            productName="XX59"
          />
          <RelatedProduct
            url={zx9tablet}
            tabletUrl={zx9}
            desktopUrl={zx9desktop}
            productName="ZX9 SPEAKER"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default index;
