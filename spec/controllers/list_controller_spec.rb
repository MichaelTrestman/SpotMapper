require 'rails_helper'

describe ListsController do
  let(:list_params) { FactoryGirl.attributes_for :list}
  let!(:list1) { FactoryGirl.create :list }
  let!(:list2) { FactoryGirl.create :list }
  let!(:spot_params1) { FactoryGirl.attributes_for :spot}
  let!(:spot_params2) { FactoryGirl.attributes_for :spot}
  let!(:spot_params3) { FactoryGirl.attributes_for :spot}

  describe "GET #index" do
    it "gets the list of collections" do
      get :index
      data = JSON.parse response.body
      data = data["lists"]
      expect(data.length).to eq 2
      titles = [list1.title, list2.title]
      titles.should include data.first["title"]
      titles.should include data.last["title"]
    end
  end
  describe "POST #create" do
    it 'creates a list' do
      expect {
        post :create, list: list_params
      }.to change {
        List.count
      }.by(1)
    end
  end
  describe "POST #show" do
    it "shows the spots for the list" do
      list1.spots << Spot.create(spot_params1)
      list1.spots << Spot.create(spot_params2)
      list2.spots << Spot.create(spot_params3)
      expect(Spot.count).to eq 3
      expect(list1.spots.count).to eq 2
      post :show, id: list1.id
      data = JSON.parse response.body
      list = data["list"]
      spots = data["spots"]
      expect(list["title"]).to eq list1.title
      expect(spots.length).to eq 2
      expect(spots.any?{|spot| spot["title"]==spot_params1[:title]}).to be true
      expect(spots.any?{|spot| spot["title"]==spot_params2[:title]}).to be true
      expect(spots.any?{|spot| spot["title"]==spot_params3[:title]}).to be false
    end
    describe "DELETE #destroy" do
      it "should delete a list" do
        expect {
          delete :destroy, id: list1.id
        }.to change {List.count}.by(-1)

      end
    end
    describe "PUT #update" do
      let (:title) { 'fuggin sweet-ass list'}
      it "should update a field" do
        list1_title = list1.title
        expect(list1_title).to eq list1.title
        put :update, id: list1.id, list: {title: title}
        list1.reload
        expect(list1.title).to eq title
      end
    end
  end
end