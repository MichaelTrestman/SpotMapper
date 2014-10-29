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
  describe "#create" do
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
  describe "#index" do
    let!(:spot1) { FactoryGirl.create :spot }
    let!(:spot2) { FactoryGirl.create :spot }
    let!(:list) {FactoryGirl.create :list}
    it "does something" do
      get :index, list_id: list.id
      x = JSON.parse(response.body)
      expect(x[:success]).to be true
    end
  end
end