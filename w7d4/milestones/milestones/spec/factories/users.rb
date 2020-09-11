FactoryBot.define do
  factory :user do
    username { Faker::TvShows::TheFreshPrinceOfBelAir.character}
    password { "password"}
  end
end
