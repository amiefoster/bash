Rails.application.routes.draw do

  resources :users, only: [:index, :show]
  resources :events, except: [:update]
  resources :guests, only: [:index, :show, :create]

  resources :packing_lists, only: [:index, :show, :create]
  resources :expenses, only: [:index, :show, :create]
  resources :activities, only: [:index, :show, :create]
  resources :transportations, only: [:index, :show, :create]
  resources :accommodations, only: [:index, :show, :create]
  

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
