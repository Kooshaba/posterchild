class DatasetController < ApplicationController
  def index
    render json: DatasetManipulator.new("data/models.csv").extract
  end
end