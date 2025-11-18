import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import { Routes, Route } from "react-router-dom";

export default function App({ toggleTheme, mode }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} mode={mode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
      </Routes>
    </>
  );
}
