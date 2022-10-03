import {
  Avatar,
  Box,
  Container,
  Group,
  Image,
  Radio,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function ProductsHandleRoute() {
  return (
    <Container size={"xl"}>
      <SimpleGrid cols={2}>
        {/* products image preview  */}
        <Stack>
          <Box sx={{ flexGrow: 1 }}>
            <Image
              src="http://localhost:8000/_next/image?url=https%3A%2F%2Fmedusa-public-images.s3.eu-west-1.amazonaws.com%2Fsweatpants-gray-front.png&w=1920&q=75"
              width={"100%"}
              height="100%"
            />
          </Box>
          <Group>
            {[...new Array(5)].map((image) => (
              <Avatar
                radius="md"
                size="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            ))}
          </Group>
        </Stack>
        {/* product details  */}

        <Box>
          <Title size={"h2"}>Medusa Sweatpants</Title>
          <Text mt="md">
            Reimagine the feeling of classic sweatpants. With our cotton
            sweatpants, everyday essentials no longer have to be ordinary.
          </Text>
          {/* select size */}
          <Stack mt="xl">
            <Title size={"h5"}>Select size</Title>
            <Radio.Group
              label="Select your favorite framework/library"
              description="This is anonymous"
              withAsterisk
            >
              <Radio value="react" label="React" />
            </Radio.Group>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
