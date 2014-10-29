class SpotsController < ApplicationController
  before_filter :find_spot

  def index

  end

  private
  def find_spot
    @spot = Spots.find(params[:id]) if params[:id]
  end
end