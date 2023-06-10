document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  function renderExpenses() {
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
      const { id, name, amount } = expense;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>$${amount}</td>
        <td>
          <button class="btn btn-danger btn-sm deleteExpense" data-id="${id}">Delete</button>
          <button class="btn btn-primary btn-sm editExpense" data-id="${id}">Edit</button>
        </td>
      `;

      expenseList.appendChild(row);
    });

    // Attach event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.deleteExpense');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', handleDeleteExpense);
    });

    // Attach event listeners to edit buttons
    const editButtons = document.querySelectorAll('.editExpense');
    editButtons.forEach((button) => {
      button.addEventListener('click', handleEditExpense);
    });
  }

  function handleDeleteExpense(e) {
    const expenseId = e.target.dataset.id;
    expenses = expenses.filter((expense) => expense.id !== expenseId);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
  }

  function handleEditExpense(e) {
    const expenseId = e.target.dataset.id;
    const expense = expenses.find((expense) => expense.id === expenseId);

    if (expense) {
      const expenseNameInput = document.getElementById('expenseName');
      const expenseAmountInput = document.getElementById('expenseAmount');

      expenseNameInput.value = expense.name;
      expenseAmountInput.value = expense.amount;

      expenseForm.removeEventListener('submit', handleAddExpense);
      expenseForm.addEventListener('submit', (event) =>
        handleSaveExpense(event, expenseId)
      );
    }
  }

  function handleSaveExpense(e, expenseId) {
    e.preventDefault();

    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseName.trim() !== '' && expenseAmount.trim() !== '') {
      expenses = expenses.map((expense) => {
        if (expense.id === expenseId) {
          return {
            ...expense,
            name: expenseName,
            amount: parseFloat(expenseAmount),
          };
        }
        return expense;
      });

      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderExpenses();

      // Clear input fields
      expenseForm.reset();
      expenseForm.removeEventListener('submit', handleSaveExpense);
      expenseForm.addEventListener('submit', handleAddExpense);
    }
  }

  function handleAddExpense(e) {
    e.preventDefault();

    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;

    if (expenseName.trim() !== '' && expenseAmount.trim() !== '') {
      const newExpense = {
        id: new Date().getTime().toString(),
        name: expenseName,
        amount: parseFloat(expenseAmount),
      };

      expenses.push(newExpense);
      localStorage.setItem('expenses', JSON
