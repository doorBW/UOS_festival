Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get 'home/index'
  root 'home#index'
  
  get '/festival/booth' => 'home#booth'
  
  get '/gestival/lineup' => 'home#lineup'
  
  
  
  


  get '/festival/event' => 'home#event'
  get '/festival/schedule' => 'home#schedule'
  
 
end
