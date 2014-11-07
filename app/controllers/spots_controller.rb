class SpotsController < ApplicationController
  before_action :find_spot, only: [:show, :update, :destroy]

  # def index
  #   # puts "***********"
  #   # p params
  #   # puts "***********"
  #   # @spot = find_spot
  #   # @list = find_list
  #   # @spots = @list.spots
  #   # render :json => {
  #   #   :success=>true,
  #   #   :id =>@spot.id,
  #   #   :list => @list,
  #   #   :spots => @spots
  #   # }
  #   render :json => Spot.all
  # end

  def create

    @spot = Spot.new(spot_params)
    if @spot.save
      render :json => @spot
    else
      render :json => {:success=>false}
    end
  end

  private

  def spot_params
    params.require(:spot).permit(:title, :lat, :lng, :list_id)
  end

  def find_spot
    @spot = Spots.find(params[:id]) if params[:id]
    #what is the logic here is this fucked up??
  end
  # def find_list
  #   @list = List.find(params[:list_id]) if params[:list_id]
  #   #what is the logic here is this fucked up??
  # end
end