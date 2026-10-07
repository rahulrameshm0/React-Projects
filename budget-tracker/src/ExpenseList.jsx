export const ExpenseList = ({ expense, deleteExpense }) => {
  const total = expense.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  return (
    <div>
      <table border={1} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Category</th>
            <th>Delete Item</th>
          </tr>
        </thead>

        <tbody>
          {expense.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => deleteExpense(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3 className="total-amount">Total: {total}</h3>
    </div>
  );
};
