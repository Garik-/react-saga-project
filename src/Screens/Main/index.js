import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import BankrollersActions from 'Redux/BankrollersRedux'
import MainScreen from './Main'

const MainScreenContainer = props => <MainScreen {...props} />

const mapStateToProps = state => {
  return {
    bankrollers: state.bankrollers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    bankrollersGet: platformId => dispatch(BankrollersActions.bankrollersGet(platformId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainScreenContainer))
