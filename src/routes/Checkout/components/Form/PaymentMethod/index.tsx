import Input from "../../Input";
import Radio from "./Radio/Radio";
function index() {
  return (
    <fieldset className="lg:border border-gray rounded lg:p-7">
      <legend className="mb-5 lg:mb-0 text-primary uppercase text-sm">
        payment details
      </legend>
      <div className="lg:grid grid-cols-2 gap-5">
        <div className="text-sm font-bold">Payment Method</div>
        <div className="border border-gray my-4 lg:border-none p-2 rounded flex flex-col">
          <Radio value="e Money" defaultChecked />
          <Radio value="Cash on Delivery" />
        </div>
        <Input
          type="number"
          name="e-Money Number"
          placeholder="238934342"
          id="e-Money Number"
        />
        <Input
          type="number"
          name="e-Money PIN"
          id="e-Monney PIN"
          placeholder="9891"
        />
      </div>
    </fieldset>
  );
}

export default index;
