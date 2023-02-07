Rails.application.routes.draw do

  root to: "practises#index"
  get '/rock_paper_scissors' => "practises#rock_paper_scissors",as: 'rock_paper_scissors'
end
