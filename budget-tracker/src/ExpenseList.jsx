export const ExpenseList = ({ expense, deleteExpense }) => {
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
    </div>
  );
};
