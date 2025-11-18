import { useEffect, useState } from "react";
import { Container, Typography, Paper, CircularProgress } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import { getExpenseById, updateExpense } from "../api/expenses";
import { useNavigate, useParams } from "react-router-dom";

export default function EditExpense() {
    const { id } = useParams();   // get the expense id from URL
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadExpense = async () => {
            const res = await getExpenseById(id);

            // if backend returns date like "2024-11-15T00:00:00" then convert:
            const expense = res.data;
            if (expense.date && expense.date.includes("T")) {
                expense.date = expense.date.split("T")[0];
            }

            setInitialData(expense);
            setLoading(false);
        };

        loadExpense();
    }, [id]);

    const handleUpdate = async (updatedExpense) => {
        await updateExpense(id, updatedExpense);
        navigate("/"); // go back home
    };

    if (loading) {
        return (
            <Container sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 3 }}>
            <Paper sx={{ p: 3, background: "transparent", border: "1px solid #ccc" }}>

                <Typography variant="h5" gutterBottom>
                    Edit Expense
                </Typography>

                <ExpenseForm onSubmit={handleUpdate} initialData={initialData} />
            </Paper>
        </Container>
    );
}
