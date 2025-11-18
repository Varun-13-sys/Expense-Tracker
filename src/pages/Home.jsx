import ExpenseList from "../components/ExpenseList";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        All Expenses
      </Typography>

      <ExpenseList />
    </Container>
  );
}
