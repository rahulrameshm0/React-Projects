import { useState } from "react";
import { BudgetTracker } from "./BudgetTracker";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseList } from "./ExpenseList";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpense = (newExpense) => {
    setExpense([...expense, newExpense]);
  };

  return (
    <>
      <BudgetTracker />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expense={expense}/>
    </>
  );
}

export default App;
