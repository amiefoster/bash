
function PackingListForm( { togglePackingListForm } ) {

    return (
        <div className="modal-form">
           <div onClick={togglePackingListForm} className="overlay"></div>
                <div className="modal-form-content">

                    <h3>Add New Item</h3>
                    <h3>Add New Item</h3>
                    <h3>Add New Item</h3>
                    <h3>Add New Item</h3>                  

                </div>
       </div>
    )
}

export default PackingListForm;