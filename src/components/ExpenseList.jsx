import { useEffect, useState } from "react";
import {
  Paper,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getAllExpenses, deleteExpense } from "../api/expenses";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from "react-responsive";

export default function ExpenseList() {
  const [rows, setRows] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const loadExpenses = async () => {
    const res = await getAllExpenses();
    setRows(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  // ------- DESKTOP COLUMNS ------
  const columns = [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "amount", headerName: "Amount", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            size="small"
            component={Link}
            to={`/edit/${params.row.id}`}
            sx={{ mr: 1, background: "#1976d2" }}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{ background: "#e63946" }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box>
      {/* ----------- MOBILE VIEW (CARDS) ------------ */}
      {isMobile && (
        <Stack spacing={2} sx={{ mt: 2 }}>
          {rows.map((exp) => (
            <Card
              key={exp.id}
              sx={{
                p: 2,
                background: "transparent",
                border: "1px solid #ccc",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {exp.title}
                </Typography>

                <Typography>Amount: ₹{exp.amount}</Typography>
                <Typography>Category: {exp.category}</Typography>
                <Typography>Date: {exp.date}</Typography>

                <Box sx={{ mt: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    component={Link}
                    to={`/edit/${exp.id}`}
                    sx={{ mb: 1, background: "#1976d2" }}
                  >
                    Edit
                  </Button>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ background: "#e63946" }}
                    onClick={() => handleDelete(exp.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}

      {/* ----------- DESKTOP VIEW (DATAGRID) ------------ */}
      {!isMobile && (
        <Paper sx={{ height: 500, p: 2, mt: 3, background: "transparent" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.id}
            pageSize={7}
            rowsPerPageOptions={[7, 15, 25]}
            sx={{ border: 0 }}
          />
        </Paper>
      )}
    </Box>
  );
}
