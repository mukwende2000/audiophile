function Form() {
  return (
    <>
    <h1>checkout</h1>
    <form>
         <fieldset>
            <legend>billing details</legend>
            <div>
                <label htmlFor="name">
                    <span>Name</span>
                    <input type="text" id="name" placeholder="Alex wari" />
                </label>
                <label htmlFor="email">
                    <span>Name</span>
                    <input type="text" id="email" placeholder="alexwari@mail.com" />
                </label>
                <label htmlFor="phone number">
                    <span>Name</span>
                    <input type="text" id="phone number" placeholder="087942 34 343" />
                </label>
            </div>
         </fieldset>
         <fieldset>
            <legend>shipping info</legend>
            <div>
                <label htmlFor="address">
                    <span>Your Address</span>
                    <input type="text" id="address" placeholder="1137 Williams Avenue" />
                </label>
                <label htmlFor="zip">
                    <span>ZIP code</span>
                    <input type="text" id="zip" placeholder="10101" />
                </label>
                <label htmlFor="city">
                    <span>City</span>
                    <input type="text" id="city" placeholder="New York" />
                </label>
                <label htmlFor="country">
                    <span>Country</span>
                    <input type="text" id="country" placeholder="United States" />
                </label>
            </div>
         </fieldset>
         <fieldset>
            <legend>payment details</legend>
            <div>
                <label htmlFor="address">
                    payment method
                </label>
                <input type="text" id="address" placeholder="1137 Williams Avenue" />
                <label htmlFor="zip">
                
                </label>
                <input type="text" id="zip" placeholder="10101" />
                <label htmlFor="city">
                    <span>City</span>
                    <input type="text" id="city" placeholder="New York" />
                </label>
                <label htmlFor="country">
                    <span>Country</span>
                    <input type="text" id="country" placeholder="United States" />
                </label>
            </div>
         </fieldset>
    </form>
    </>
  )
}

export default Form
