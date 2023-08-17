// Write your code here

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventsRegistrationStatus} = props

  const renderNoActiveStatus = () => (
    <p className="noactive-status">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosed = () => (
    <div className="closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegistrationView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-name">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-registerd-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-img"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="registered-button">
        {' '}
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventsRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistrationView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActiveStatus()
    }
  }
  return (
    <div className="registration-details">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
