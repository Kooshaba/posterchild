class DatasetController < ApplicationController
  def index
    render json: DatasetManipulator.new("data/cities.csv").extract
  end
end