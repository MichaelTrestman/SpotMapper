class ListsController < ApplicationController

  before_action :find_list, only: [:show, :update, :destroy]

  def index
    if params[:query]
      @lists = List.limit(20).where('title like :x', x: "%#{params[:query]}")
    else
      @lists = List.limit(20).order(updated_at: :desc)
    end
    render :json => @lists
  end

  def show
    @spots = @list.spots
    render :json => {list: @list, spots: @spots}
  end

  def create
    list = List.new(list_params)
    if list.save
      render :json => {list: list}
    else
      render :json => {:errors => package.errors.full_messages.join(',')}, :status => :unprocessable_entity
    end
  end

  def update
    if @list.update_attributes list_params
      render :json => @list
    else
      render :json => {:errors => @list.errors.full_messages.join(',')}, :status => :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    render :json => @list
  end

  private

  def find_list
    @list = List.find(params[:id]) if params[:id]
  end
  def list_params
    params.require(:list).permit(:title, :description)
  end
end