import { Container, SimpleGrid } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product/ProductCard";
import { medusaClient } from "~/lib/medusa";

export const loader: LoaderFunction = async () => {
  try {
    const medusa = medusaClient();
    const res = await medusa.products.list();
    return json(res.products);
  } catch (error) {
    throw error;
  }
};
export default function ProductsRoute() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <Container size={"xl"}>
      <SimpleGrid cols={3}>
        {loaderData?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            handle={product.handle}
            thumbnail={product.thumbnail}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
