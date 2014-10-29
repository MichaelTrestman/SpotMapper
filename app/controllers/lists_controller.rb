class ListsController < ApplicationController
  before_filter :find_list


  def index
    if params[:query]
      @lists = List.limit(20).where('title like :x', x: "%#{params[:query]}")
    else
      @lists = List.limit(20).order(updated_at: :desc)
    end
  end

  private
  def find_list
    @list = Lists.find(params[:id]) if params[:id]
  end
end