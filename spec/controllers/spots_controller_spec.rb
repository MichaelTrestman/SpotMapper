# require 'rails_helper'

# describe SpotsController do

#   before(:each) do
#     Spot.delete_all
#   end
#   after(:each) do
#     Spot.delete_all
#   end
#   let(:spot_params) {
#     FactoryGirl.attributes_for :spot
#   }
#   let(:spot1) { FactoryGirl.create :spot }
#     let(:spot2) { FactoryGirl.create :spot }
#     let(:list) {FactoryGirl.create :list}

#   describe "#create" do
#     context 'with valid spot params' do
#       it "creates a new spot"  do
#         post :create, list_id: 1, spot: spot_params
#         x = JSON.parse(response.body)
#         expect(
#           x["success"]
#           ).to eq( true )
#       end
#       it "creates a new spot"  do
#         expect(Spot.count).to eq 0
#         post :create, list_id: 1, spot: spot_params
#               x = JSON.parse(response.body)
#         expect(
#           x["success"]
#           ).to eq( true )
#         expect(Spot.count).to eq 1
#       end
#     end
#     # describe "#index" do

#     #   it "does something" do
#     #     # p spot_params
#     #     Spot.create({title: 'shitfart'})

#     #     get :index, list_id: list.id
#     #     x = JSON.parse(response.body)
#     #     puts "*********"
#     #     p x
#     #     puts "*********"
#     #     # expect(x[:success]).to be true
#     #     expect(response.body).to eq({"spots" => ActiveModel::ArraySerializer.new(Spot.all)}.to_json)
#     #   end
#     # end
#   end

# end
