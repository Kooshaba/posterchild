class DatasetController < ApplicationController
  def index
    render json: DatasetManipulator.new("data/dataset.csv").extract
  end
end