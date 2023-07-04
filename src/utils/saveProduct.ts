import products from "../data/data.json";
export function saveProduct(id: number): void {
  products.map((product) => {
    if (id === product.id) {
      localStorage.setItem("savedProduct", JSON.stringify(product));
    }
  });
}
