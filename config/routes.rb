Rails.application.routes.draw do

  # sessions routes:
  # CREATE - when a user logs in, create a session for them
  post "/login", to: "sessions#create"
  # DESTROY - when a user logs out, destroy the session
  delete "/logout", to: "sessions#destroy"

  # users routes:
  resources :users, only: [:create, :show]
  get 'users/:id/vending_machines', to: 'users#vending_machines'
  
  # SHOW - autologin feature
  get "/me", to: "users#show"

  # snacks routes
  resources :snacks, only: [:index, :create, :destroy]

  # inventories routes
  resources :inventories, only: [:create, :destroy, :update]

  # for development and testing only
  get "/users", to: "users#index"
  get "/vending_machines", to: "vending_machines#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
