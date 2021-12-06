class ExpensesController < ApplicationController

    def create
        new_expense = Expense.create!(expense_params)
        render json: new_expense, status: :created

    end

    def index
        render json: Expense.all
    end
    
    def destroy
        expense = Expense.find(params[:id])
        expense.destroy
        head :no_content
    end

    private

    #not sure if i should include GUEST_id or USER_id
    def expense_params
        params.permit(:name, :details, :amount, :guest_id, :event_id)
    end
end
