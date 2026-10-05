import { useState } from "react";

// Creating am expense form like name, item, category and amount
export const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expense = {
      name: name,
      amount: amount,
      category: category,
    };

    addExpense(expense);

    console.log(expense);
  };

  //   console.log(`Name: ${name}, Amount: ${amount}, Category: ${category}`);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter your item name"
        />
        <input
          type="text"
          name="amount"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter the amount"
        />
        <select name="" id="" onChange={handleCategory} value={category}>
          <option value="Food">Food</option>
          <option value="Books">Books</option>
          <option value="Vegitables">Vegitables</option>
        </select>
        <button className="add-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
