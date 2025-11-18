import { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@mui/material";

export default function ExpenseForm({ onSubmit, initialData }) {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
    });

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Amount"
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        sx={{ background: "#27ae60" }}
                    >
                        Save
                    </Button>

                </Grid>
            </Grid>
        </form>
    );
}
