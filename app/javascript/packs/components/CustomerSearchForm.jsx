import React from 'react';
import PropTypes from 'prop-types'

const CustomerSearchForm = props => (
    <section>
        <form action="/customers" accept-charset="UTF-8" method="get">
            <div class="input-group input-group-lg">
                <label class="sr-only" for="keywords">Keywords</label>
                <input type="text" name="keywords" id="keywords" placeholder="First Name, Last Name, Email" class="form-control  input-lg" />
                <span class="input-group-btn">
                    <button name="button" type="submit" class="btn btn-primary btn-lg">
                        <i class="glyphicon glyphicon-search"></i>
                    </button>
                </span>
            </div>
        </form>
    </section>
)

CustomerSearchForm.defaultProps = {
    name: 'Default Name'
}

CustomerSearchForm.propTypes = {
    name: PropTypes.string
}
