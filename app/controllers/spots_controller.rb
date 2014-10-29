class SpotsController < ApplicationController
  # before_filter :find_spot

  def index

  end

  def create

    @spot = Spot.new(spot_params)
    if @spot.save
      render :json => {:success=>true}
    else
      render :json => {:success=>false}
    end
  end

  private

  def spot_params
    params.require(:spot).permit(:title, :lat, :lng, :list_id)
  end



  # def find_spot
  #   @spot = Spots.find(params[:id]) if params[:id]
  # end
end