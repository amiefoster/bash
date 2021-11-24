class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_user_data

  private

  def invalid_user_data(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
