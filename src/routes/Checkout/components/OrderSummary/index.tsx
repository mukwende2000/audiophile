import random from "/cart/image-zx7-speaker.jpg";
import LinkBtn from "../../../../components/LinkBtn";

function index() {
  return (
    <div>
      <div className="my-10 flex justify-between">
        <div className="flex items-center gap-5">
          <div className="basis-[50%]">
            <img src={random} alt="" />
          </div>
          <div className="basis-full">
            <p className="font-bold uppercase">xy1</p>
            <p>$ 599</p>
          </div>
        </div>
        <p>x1</p>
      </div>
      <div>
        <p>grand total</p>
        <p>$ 6,048</p>
      </div>
    </div>
  );
}

export default index;
