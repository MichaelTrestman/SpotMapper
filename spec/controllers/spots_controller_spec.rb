require 'rails_helper'

describe SpotsController do

  before(:each) do
    Spot.delete_all
  end
  after(:each) do
    Spot.delete_all
  end
  let(:spot_params) {
    FactoryGirl.attributes_for :spot
  }

  context 'with valid spot params' do
    it "creates a new spot"  do
      post :create, list_id: 1, spot: spot_params
      x = JSON.parse(response.body)
      expect(
        x["success"]
        ).to eq( true )
    end
    it "creates a new spot"  do
      expect(Spot.count).to eq 0
      post :create, list_id: 1, spot: spot_params
            x = JSON.parse(response.body)
      expect(
        x["success"]
        ).to eq( true )
      expect(Spot.count).to eq 1
    end

  end
end