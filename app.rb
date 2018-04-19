require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  get "/" do
    erb :index
  end

  # get "/temp" do
  #
  # end
  #
  # post "/temp" do
  # end

  run! if app_file == $0
end
