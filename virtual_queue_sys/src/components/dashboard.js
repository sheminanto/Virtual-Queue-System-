import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayEvents } from '../store/actions/eventActions'
import { Link, NavLink, Redirect } from 'react-router-dom'
class Dashboard extends Component {
    render() {

        if (!this.props.login_status) { return <Redirect to='/signin' /> }
        return (
            <div className="container mt-5">
                <div class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Host !</h4>
                    <p>Looking ahead of hosting an event...?<br />
                    Chart an event appropriately so that others can attend the same without facing any sort of issues...
                    </p>
                    <hr />
                    <span class="mb-0 float-right">
                        <NavLink to='/hostEvent'><button type='button' className='btn btn-outline-danger'>Host</button></NavLink>
                    </span>


                </div>
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Attend !</h4>
                    <p>Looking ahead of attending an event...?
                    Already got the Event ID from the host...?<br />
                    Grab your slot now itself without any delay...

                    </p>
                    <hr />
                    <span class="mb-0 float-right">
                        <button type='button' className='btn btn-outline-success'>Attend</button>
                    </span>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        events: state.event.events,
        login_status: state.auth.login_status
    }
}

export default connect(mapStateToProps)(Dashboard)

