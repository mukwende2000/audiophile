import { useLocation } from "react-router-dom";
import Picture from "../Picture";
import LinkBtn from "../LinkBtn";
import data from "../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { add, calculateTotal } from "../../store/CartSlice";
import { toast } from "react-toastify";

type Props = {
  isNew?: boolean;
  even?: boolean;
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  alt: string;
  name: string;
  price: number;
  description: string;
  features?: string;
  productId: number;
  short: string;
};

function index({
  even,
  isNew,
  url,
  desktopUrl,
  tabletUrl,
  alt,
  name,
  price,
  description,
  productId,
}: Props) {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  function getProduct(id: number) {
    const product = data.find((product) => product.id === id);
    return product;
  }
  return (
    <section className="py-16">
      <div
        className={`py-5 md:grid place-items-center grid-cols-2 ${
          even ? "text-left rtl-grid" : null
        } gap-28`}
      >
        <Picture
          url={url}
          tabletUrl={tabletUrl}
          desktopUrl={desktopUrl}
          alt={alt}
        />
        <article>
          {isNew && (
            <div className="uppercase text-primary tracking-[.6rem] mt-8">
              new product
            </div>
          )}
          <h1
            className={`my-5 text-3xl md:text-4xl font-bold ${
              even ? null : "w-7/12"
            } max-w-3xl`}
          >
            {name}
          </h1>
          <p className="my-5 text-gray">{description}</p>
          {pathname.includes("%") && (
            <p className="my-5 font-bold text-xl">{`$ ${price}`}</p>
          )}
          <div>
            {pathname.includes("%") && (
              <div className="bg-gray/30 mr-3 inline-flex">
                <button className="py-2 px-4 hover:text-primary">+</button>
                <span className="p-2">1</span>
                <button className="py-2 px-4 hover:text-primary">-</button>
              </div>
            )}

            <LinkBtn
              btn={pathname.includes("%")}
              backgroundColor="bg-primary"
              color="text-secondary"
              path={`${pathname}/${name}`}
              handleClick={() => {
                dispatch(
                  add({
                    product: getProduct(productId),
                    quantity: 1,
                    totalPrice: getProduct(productId)?.price,
                  })
                );
                dispatch(calculateTotal());
              }}
            >
              {pathname.includes("%") ? "add to cart" : "see product"}
            </LinkBtn>
          </div>
        </article>
      </div>
    </section>
  );
}

export default index;
