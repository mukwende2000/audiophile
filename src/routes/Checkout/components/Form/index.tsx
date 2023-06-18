import BillingDetails from "./BillingDetails";
import PaymentMethod from "./PaymentMethod";
import ShippingInfo from "./ShippingInfo";

function Form() {
  return (
    <div className="bg-secondary mb-5 p-10 basis-[70%] rounded">
      <div>
        <BillingDetails />
        <ShippingInfo />
        <PaymentMethod />
      </div>
    </div>
  );
}

export default Form;
