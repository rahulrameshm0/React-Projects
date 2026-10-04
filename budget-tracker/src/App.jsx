import { useState } from "react";
import { BudgetTracker } from "./BudgetTracker";
import { ExpenseForm } from "./ExpenseForm";

function App() {

  return <>
    <BudgetTracker/>
    <ExpenseForm/>

  </>;
}

export default App;
