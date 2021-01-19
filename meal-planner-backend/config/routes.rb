Rails.application.routes.draw do
  resources :meals, only: [:create]
  resources :days
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  delete '/meals', to: 'meals#destroy'
end
