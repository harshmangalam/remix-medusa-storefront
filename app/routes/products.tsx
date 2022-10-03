import { Container, SimpleGrid } from "@mantine/core";
import ProductCard from "~/components/product/ProductCard";

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
