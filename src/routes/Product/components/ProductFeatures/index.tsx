import ProductFeature from "./ProductFeature";

function index() {
  return (
    <div className="my-10 lg:flex gap-60 item">
      <article className="my-16 lg:my-0 basis-full">
        <h2 className="text-xl lg:text-3xl font-bold mb-2">FEATURES</h2>
        <p className="text-gray">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </p>
        <p className="text-gray mt-5">
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </article>
      <div className="md:flex lg:block justify-between basis-full">
        <h2 className="font-bold text-xl md:text-3xl mb-2">IN THE BOX</h2>
        <ul className="md:mr-60">
          <ProductFeature name="HeadPhone Unit" quantity="1x" />
          <ProductFeature name="Replacement earcups" quantity="2x" />
          <ProductFeature name="User manual" quantity="1x" />
          <ProductFeature name="3.5mm 5m audio cable" quantity="1x" />
          <ProductFeature name="Travel bag" quantity="1x" />
        </ul>
      </div>
    </div>
  );
}

export default index;
