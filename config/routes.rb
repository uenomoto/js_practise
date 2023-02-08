Rails.application.routes.draw do

  root to: "practises#index"
  get '/rock_paper_scissors' => "practises#rock_paper_scissors",as: 'rock_paper_scissors'
  get '/this' => "practises#this",as: 'this'
  get '/children' => "practises#children",as: 'children'
  get '/swiper' => "practises#swiper",as: 'swiper'
end
