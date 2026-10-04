import { useState } from "react";

// Creating am expense form like name, item, category and amount
export const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
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
  console.log(`Name: ${name}, Amount: ${amount}, Category: ${category}`)
  
  return (
    <div>
      <form action="">
        <input type="text" name="name" id="name" onChange={handleNameChange} />
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={handleAmountChange}
        />
        <select name="" id="" onChange={handleCategory}>
          <option value="Food">Food</option>
          <option value="Books">Books</option>
          <option value="Vegitables">Vegitables</option>
        </select>
        <button className="add-btn">Submit</button>
      </form>
    </div>
  );
};
