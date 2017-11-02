class CustomersController < ApplicationController
  def index
    # @customers = Customer.all.limit(10)

    # @customers = Customer.where("lower(first_name) LIKE :first_name OR " +
    #                                 "lower(last_name) LIKE :last_name OR " +
    #                                 "lower(email) = :email", {
    #                           first_name: "pat%",
    #                           last_name: "pat%",
    #                           email: "pat@example.com"}
    # ).order("email = 'pat@example.com' DESC, last_name ASC")


    if params[:keywords].present?
      @keywords = params[:keywords]
      customer_search_term = CustomerSearchTerm.new(@keywords)
      @customers = Customer.where(
                               customer_search_term.where_clause,
                               customer_search_term.where_args).
                               order(customer_search_term.order)
    else
      @customers = []
    end

  end
end