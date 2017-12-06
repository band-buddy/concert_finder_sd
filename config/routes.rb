Rails.application.routes.draw do
  get 'events' => 'events_list#index'

  root to: 'public#index'
end
