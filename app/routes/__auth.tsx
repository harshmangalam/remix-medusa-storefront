import { Box } from "@mantine/core";
import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
