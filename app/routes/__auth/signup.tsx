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
  Stack,
} from "@mantine/core";
import { ActionFunction, json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { FiAlertCircle } from "react-icons/fi";
import { medusaClient } from "~/lib/medusa";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  try {
    const medusa = medusaClient();
    await medusa.customers.create(payload);
    return redirect("/login");
  } catch (error) {
    return json({ errors: error.response.data, fields: payload });
  }
};

export default function AccountSignupRoute() {
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
        BECOME A ACME MEMBER
      </Title>
      <Text align="center" size={"sm"} color={"dimmed"} mt="md">
        Create your Acme Member profile, and get access to an enhanced shopping
        experience.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {actionData?.errors && (
          <Alert
            icon={<FiAlertCircle size={16} />}
            title="Signup"
            color="red"
            radius="md"
            mb="xl"
          >
            {typeof actionData.errors === "string"
              ? actionData.errors
              : actionData.errors?.message}
          </Alert>
        )}
        <Form method="post">
          <Stack>
            <TextInput
              name="first_name"
              label="First name"
              placeholder="Your first name"
              required
              defaultValue={actionData?.fields?.first_name}
            />
            <TextInput
              name="last_name"
              label="Last name"
              placeholder="Your last name"
              required
              defaultValue={actionData?.fields?.last_name}
            />
            <TextInput
              name="email"
              type="email"
              label="Email"
              placeholder="Your email"
              required
              defaultValue={actionData?.fields?.email}
            />
            <TextInput
              name="phone"
              type="tel"
              label="Phone"
              placeholder="Your phone"
              defaultValue={actionData?.fields?.phone}
            />
            <PasswordInput
              name="password"
              label="Password"
              placeholder="Your password"
              required
              defaultValue={actionData?.fields?.password}
            />
          </Stack>

          <Text size={"xs"} color="dimmed" mt="xl">
            By creating an account, you agree to Acme's Privacy Policy and Terms
            of Use.
          </Text>

          <Button
            type="submit"
            fullWidth
            mt="xl"
            loading={transition.state === "submitting"}
          >
            Join
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
          Sign in
        </Anchor>
      </Text>
    </Container>
  );
}
