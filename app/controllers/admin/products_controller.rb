class Admin::ProductsController < ApplicationController
  http_basic_authenticate_with name: ENV.fetch('ADMIN_USERNAME', 'default_username'), password: ENV.fetch('ADMIN_PASSWORD', 'default_password')

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to [:admin, :products], notice: 'Product was successfully created.'
    else
      render :new
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to [:admin, :products], notice: 'Product was successfully deleted.'
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :quantity, :category_id, :image)
  end
end
