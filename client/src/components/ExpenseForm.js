
function ExpenseForm( { toggleExpenseForm } ) {

    return (
        <div className="modal-form">
           <div onClick={toggleExpenseForm} className="overlay"></div>
                <div className="modal-form-content">

                    <h3>Add New Expense</h3>
                    <h3>Add New Expense</h3>
                    <h3>Add New Expense</h3>
                    <h3>Add New Expense</h3>
                    <h3>Add New Expense</h3>                  

                </div>
       </div>
    )
}

export default ExpenseForm;