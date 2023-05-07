Rails.application.routes.draw do
  
  resources :inventories
  resources :snacks
  # development routes. these should be deleted for production:
  resources :vending_machines
  resources :users

  # session routes:
  # CREATE - when a user logs in, create a session for them
  post "/login", to: "sessions#create"
  # DESTROY - when a user logs out, destroy the session
  delete "/logout", to: "sessions#destroy"

  # user routes:
  # CREATE - when a user signs up, create a new user and create a session
  post "/users", to: "users#create"
  # SHOW - autologin feature
  get "/me", to: "users#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
