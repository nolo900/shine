class CustomersController < ApplicationController
  skip_before_action :verify_authenticity_token  #not sure how to get token auth to work with react
  before_action :set_customer, only: [:show, :edit, :update, :destroy]


  PAGE_SIZE = 100

  # GET /customers
  # GET /customers.json
  def index
    @page = (params[:page] || 0 ).to_i

    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(
          customer_search_term.where_clause,
          customer_search_term.where_args).
          order(customer_search_term.order).
          offset(PAGE_SIZE * @page).limit(PAGE_SIZE)
    else

      @customers = Customer.all.limit(PAGE_SIZE)

      # @customers = Customer.where("lower(first_name) LIKE :first_name OR " +
      #                                 "lower(last_name) LIKE :last_name OR " +
      #                                 "lower(email) LIKE :email",
      #                             {
      #                                 first_name: "pat%",
      #                                 last_name: "pat%",
      #                                 email: "pat%"
      #                             })
      #                  .order("last_name, email").limit(PAGE_SIZE);

    end

    respond_to do |format|
      format.html
      format.json{
        render json: { customers: @customers}
      }
    end

  end

  # GET /customers/1
  # GET /customers/1.json
  def show
  end

  # GET /customers/new
  def new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers
  # POST /customers.json
  def create
    @customer = Customer.new(customer_params)

    respond_to do |format|
      if @customer.save
        format.html { redirect_to @customer, notice: 'Customer was successfully created.' }
        format.json { render json: @customer, status: :created }
      else
        format.html { render :new }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    respond_to do |format|
      if @customer.update(customer_params)
        format.html { redirect_to @customer, notice: 'Customer was successfully updated.' }
        format.json { render :show, status: :ok, location: @customer }
      else
        format.html { render :edit }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  # def destroy
  #   @customer.destroy
  #   respond_to do |format|
  #     format.html { redirect_to customers_url, notice: 'Customer was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def customer_params
      params.require(:customer).permit(
          :first_name,
          :last_name,
          :email,
          :username
        )
    end
end
