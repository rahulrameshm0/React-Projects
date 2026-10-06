import { useState } from "react";
import { BudgetTracker } from "./BudgetTracker";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseList } from "./ExpenseList";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (newExpense) => {
    setExpense([...expense, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
  };

  return (
    <>
      <BudgetTracker />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expense={expense} deleteExpense={deleteExpense} />
    </>
  );
}

export default App;
