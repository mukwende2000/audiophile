import Input from "../../Input";

function index() {
  return (
    <fieldset className="my-10 lg:border border-gray lg:p-7 rounded ">
      <legend className="text-sm mb-5 lg:mb-0 text-primary uppercase">
        shipping info
      </legend>
      <div className="lg:grid grid-cols-2 gap-3">
        <Input
          position="col-start-1 col-end-3"
          type="text"
          name="Your Address"
          id="Your Address"
          placeholder="1137 Williams Avenue"
        />
        <Input
          type="number"
          name="Zip Code"
          id="Zip Code"
          placeholder="10101"
        />
        <Input type="text" name="City" id="City" placeholder="New York" />
      </div>
    </fieldset>
  );
}

export default index;
