import random from "../../../../assets/cart/image-zx7-speaker.jpg";
import Button from "../../../../components/Button/Button";

function index() {
  return (
    <dialog>
      <div>
        <img src="" alt="" />
      </div>
      <h3>thank you for your order</h3>
      <p>You will recieve an email confiramtion shortly.</p>
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
      <Button text="back to home" backgroundColor="primary" color="secondary" />
    </dialog>
  );
}

export default index;
