import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Alert,
} from "@mantine/core";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { medusaClient } from "~/lib/medusa";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  try {
    const medusa = medusaClient();
    await medusa.auth.authenticate(payload);
    return redirect("/");
  } catch (error) {
    return json({ errors: error.response.data, fields: payload });
  }
};
export default function AccountLoginRoute() {
  const actionData = useActionData();
  const transition = useTransition();

  console.log(actionData);
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
        {actionData.errors && (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="Login"
            color="red"
            radius="md"
          >
            {typeof actionData.errors === "string"
              ? actionData.errors
              : actionData.errors?.message}
          </Alert>
        )}
        <Form method="post">
          <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="Your email"
            required
            defaultValue={actionData?.fields?.email}
          />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            defaultValue={actionData?.fields?.password}
          />

          <Button
            type="submit"
            fullWidth
            mt="xl"
            loading={transition.state === "submitting"}
          >
            Sign in
          </Button>
        </Form>
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
