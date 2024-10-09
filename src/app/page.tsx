'use client'
import { useState, useEffect } from 'react';

interface Expense {
  name: string;
  amount: number;
}

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [total, setTotal] = useState(0);
  const [expenseInput, setExpenseInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Load expenses from localStorage
  useEffect(() => {
    const storedExpenses: Expense[] = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(storedExpenses);
    calculateTotal(storedExpenses);
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    calculateTotal(expenses);
  }, [expenses]);

  const handleAddExpense = () => {
    if (expenseInput && amountInput) {
      const newExpenses = editingIndex !== null 
        ? expenses.map((expense, index) =>
            index === editingIndex ? { name: expenseInput, amount: parseFloat(amountInput) } : expense
          )
        : [...expenses, { name: expenseInput, amount: parseFloat(amountInput) }];

      setExpenses(newExpenses);
      setExpenseInput('');
      setAmountInput('');
      setEditingIndex(null);
    }
  };

  const handleDeleteExpense = (index: number) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const handleEditExpense = (index: number) => {
    setEditingIndex(index);
    setExpenseInput(expenses[index].name);
    setAmountInput(expenses[index].amount.toString());
  };

  const calculateTotal = (expenses: Expense[]) => {
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotal(totalAmount);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Expense Item"
          value={expenseInput}
          onChange={(e) => setExpenseInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
        />
        <button onClick={handleAddExpense}>{editingIndex !== null ? 'Edit' : 'Add'}</button>
      </div>

      <div className="expense-list">
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name} - ${expense.amount.toFixed(2)}
              <button onClick={() => handleEditExpense(index)}>Edit</button>
              <button onClick={() => handleDeleteExpense(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-expense">
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>

      <footer>
        <p>© Expense Tracker by Yemna Mehmood</p>
      </footer>
    </div>
  );
};

export default ExpenseTracker;
