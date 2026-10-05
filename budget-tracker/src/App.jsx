import { useState } from "react";
import { BudgetTracker } from "./BudgetTracker";
import { ExpenseForm } from "./ExpenseForm";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (newExpense) => {
    setExpense([...expense, newExpense]);
  };

  return (
    <>
      <ExpenseForm addExpense={addExpense}/>
      <BudgetTracker />
    </>
  );
}

export default App;
