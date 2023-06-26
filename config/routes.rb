Rails.application.routes.draw do

  # sessions routes:
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # auto-login route:
  get "/me", to: "users#show"

  # users routes:
  resources :users, only: [:create, :show]
  get 'users/:id/vending_machines', to: 'users#vending_machines'  

  # snacks routes
  resources :snacks, only: [:index, :create, :destroy]

  # inventories routes
  resources :inventories, only: [:create, :destroy, :update]
  get 'purchase/:id', to: 'inventories#purchase'

  # vending_machines routes
  resources :vending_machines, only: [:index, :create, :destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
