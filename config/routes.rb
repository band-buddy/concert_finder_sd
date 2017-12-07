Rails.application.routes.draw do

  devise_for :users
  root to: 'public#index'

  get '/events' => 'events_list#events'

  get '/about' => 'public#about'

end
