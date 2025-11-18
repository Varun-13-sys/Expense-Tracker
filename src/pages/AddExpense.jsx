import { Container, Typography, Paper } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import { addExpense } from "../api/expenses";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
    const navigate = useNavigate();

    const handleAddExpense = async (expense) => {
        await addExpense(expense);
        navigate("/");
    };

    return (
        <Container sx={{ mt: 3 }}>
            <Paper sx={{ p: 3, background: "transparent", border: "1px solid #ccc" }}>

                <Typography variant="h5" gutterBottom>
                    Add New Expense
                </Typography>

                <ExpenseForm onSubmit={handleAddExpense} />
            </Paper>
        </Container>
    );
}
