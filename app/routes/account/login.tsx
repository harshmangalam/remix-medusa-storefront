import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

export default function AccountLoginRoute() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        transform="uppercase"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
        size={"h4"}
      >
        Welcome back
      </Title>
      <Text align="center" size={"sm"} color={"dimmed"} mt="md">
        Sign in to access an enhanced shopping experience.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />

        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
      <Text color="dimmed" size="sm" align="center" mt={"lg"}>
        Not a member?{" "}
        <Anchor<"a">
          href="#"
          size="sm"
          onClick={(event) => event.preventDefault()}
        >
          Join us
        </Anchor>
      </Text>
    </Container>
  );
}
