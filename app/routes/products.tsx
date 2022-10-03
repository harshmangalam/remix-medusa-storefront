import { Container, SimpleGrid } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import ProductCard from "~/components/product/ProductCard";
import { medusaClient } from "~/lib/medusa";

export const loader: LoaderFunction = async () => {
  try {
    const medusa = medusaClient();
    const products = await medusa.products.list();
    return json(products);
  } catch (error) {
    throw error;
  }
};
export default function ProductsRoute() {
  return (
    <Container size={"xl"}>
      <SimpleGrid cols={3}>
        {[...new Array(12)].map((product) => (
          <ProductCard {...product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
