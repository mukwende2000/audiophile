import Input from "../../Input";

function index() {
  return (
    <fieldset className="lg:lg:p-7 lg:border border-gray rounded">
      <legend className="mb-5 lg:mb-0 text-sm uppercase text-primary">
        billing details
      </legend>
      <div className="lg:grid grid-cols-2 gap-3">
        <Input type="text" name="Name" id="Name" placeholder="Alex Warri" />
        <Input
          type="email"
          name="Email Address"
          id="Email Adress"
          placeholder="alexwarri@mail.com"
        />
        <Input
          type="number"
          name="Phone Number"
          id="Phone Number"
          placeholder="+1202-555-0136"
        />
      </div>
    </fieldset>
  );
}

export default index;
