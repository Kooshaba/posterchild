Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # devise_scope :user do
  #   root to: "devise/sessions#new"
  # end
  
  root to: "home#index"
  get '/dataset', to: 'dataset#index'
end
