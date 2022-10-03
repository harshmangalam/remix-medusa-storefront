import { Card, Image, Text, Title } from "@mantine/core";

interface ProductCardProps {
  id: string;
  title: string;
  thumbnail: string;
  price: string;
  handle: string;
}
export default function ProductCard() {
  return (
    <Card>
      <Card.Section>
        <Image
          src={
            "http://localhost:8000/_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Fblack_hoodie_front.png&w=1920&q=75"
          }
          alt={"Alt"}
          height={160}
        />
      </Card.Section>
      <Card.Section>
        <Title>Medusa Longsleeve</Title>
        <Text>$19.50</Text>
      </Card.Section>
    </Card>
  );
}
