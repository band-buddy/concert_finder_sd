Rails.application.routes.draw do

  devise_for :user, :controller => { registrations: 'registrations' }, path_names: {sign_in: "login"}

  get '/users/index' => 'users#index'

  get '/profile' => 'profile#index'

  post '/profile' => 'profile#index'

  get '/profile/update' => 'profile#update'

  root to: 'public#index'

  get '/events' => 'events_list#events'

  get '/about' => 'public#about'

end
