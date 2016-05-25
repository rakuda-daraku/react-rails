class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.new(create_params)
    if message.save
      # HTTP レスポンス 201
      render json: message, status: :created
    else
      render json: message, status: :unprocessable_entity
    end

    private

    def create_params
      params.permit(:user, :text)
    end

  end
end
