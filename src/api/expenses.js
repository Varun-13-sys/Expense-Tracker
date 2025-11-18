import axios from "axios";

export const API_URL = "https://expense-tracker-2-eyca.onrender.com/api/expenses";

export const getAllExpenses = () => axios.get(API_URL);

export const getExpenseById = (id) => axios.get(`${API_URL}/${id}`);

export const addExpense = (expense) => axios.post(API_URL, expense);

export const updateExpense = (id, expense) =>
  axios.put(`${API_URL}/${id}`, expense);

export const deleteExpense = (id) => axios.delete(`${API_URL}/${id}`);
