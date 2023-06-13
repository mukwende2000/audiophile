import Button from "../../components/Button/Button"

function Summary() {
  return (
    <div>
      <h1>summary</h1>
      <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <p>xy1</p>
            <p>$ 599</p>
        </div>
        <p>x1</p>
      </div>
      <div>
        <div>
          <p>total</p>
          <p>$ 599</p>
        </div>
        <div>
          <p>shipping</p>
          <p>$ 50</p>
        </div>
        <div>
          <p>vat(included)</p>
          <p>$ 199.8</p>
        </div>
        <div>
          <p>grand total
          </p>
          <p>$ 645</p>
        </div>
      </div>
      <Button backgroundColor="bg-primary" color="text-secondary" text="continue and pay"  />
    </div>
  )
}

export default Summary
