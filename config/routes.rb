Rails.application.routes.draw do

  get '/users/index' => 'users#index'

  get '/profile' => 'profile#index'

  devise_for :user

  root to: 'public#index'

  get '/events' => 'events_list#events'

  get '/about' => 'public#about'

end
