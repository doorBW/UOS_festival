Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'home/index'
  root 'home#index'
  get '/festival' => 'home#festival'
  get '/festival/booth' => 'home#booth'
  get '/festival/lineup' => 'home#lineup'
  get '/festival/event' => 'home#event'
  get '/festival/schedule' => 'home#schedule'
  get '/festival/foodtruck' => 'home#foodtruck'
  get '/developer' => 'home#developer'
end