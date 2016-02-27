class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def authenticate_admin!
    authenticate_user!
    render status: 404, text: 'No pages matched what you were squanching for.' unless current_user.roles.include?('admin')
  end

  def after_sign_in_path_for(resource)
    dashboard_path
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name
  end
end
