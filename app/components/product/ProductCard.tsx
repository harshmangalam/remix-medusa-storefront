import { Card, Image, Stack, Text, Title } from "@mantine/core";
import { Link } from "@remix-run/react";

interface ProductCardProps {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
  handle: string;
}
export default function ProductCard() {
  return (
    <Card p="xl" component={Link} to="/products">
      <Card.Section>
        <Image
          src={
            "http://localhost:8000/_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Fblack_hoodie_front.png&w=1920&q=75"
          }
          alt={"Alt"}
          height={340}
          width="100%"
        />
      </Card.Section>

      <Stack mt="md" spacing={"xs"}>
        <Text size={"xl"}>Medusa Longsleeve</Text>
        <Title size={"lg"}>$19.50</Title>
      </Stack>
    </Card>
  );
}
