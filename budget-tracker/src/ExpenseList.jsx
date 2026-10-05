import { ExpenseForm } from "./ExpenseForm";

export const ExpenseList = ({ expense }) => {
  return (
    <div>
      {expense.map((item) => {
        return (
          <div key={item}>
            <table border={1} style={{textAlign: "center"}}>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>${item.amount}</td>
                  <td>{item.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
