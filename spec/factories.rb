# need to eventually add other stuff

  # validates :title, presence: true
  # validates :lat, presence: true
  # validates :lat, numericality: true
  # validates :lng, presence: true
  # validates :lng, numericality: true
  # belongs_to :list



FactoryGirl.define do
    factory :spot do

      title {
        Faker::Lorem.sentence(rand(6))
      }

# Latitude: -85 to +85
# Longitude: -180 to +180

      lat {rand(85*2)-85}
      lng {rand(180*2)-180}

      list_id {1}



    end
end
