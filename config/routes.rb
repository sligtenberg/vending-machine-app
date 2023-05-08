Rails.application.routes.draw do

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

  # for development and testing only
  get "/users", to: "users#index"
  get "/vending_machines", to: "vending_machines#index"
  get "/snacks", to: "snacks#index"
  get "/inventories", to: "inventories#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
