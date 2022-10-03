import { Card, Image, Stack, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";

interface ProductCardProps {
  title: string;
  thumbnail: string;
  handle: string;
}
export default function ProductCard({
  handle,
  thumbnail,
  title,
}: ProductCardProps) {
  return (
    <Card p="xl" component={Link} to={`/products/${handle}`}>
      <Card.Section>
        <Image src={thumbnail} alt={"Alt"} height={340} width="100%" />
      </Card.Section>

      <Stack mt="md" spacing={"xs"}>
        <Title size={"h4"}>{title}</Title>
      </Stack>
    </Card>
  );
}
