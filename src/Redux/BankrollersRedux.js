import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  bankrollersUpdate: ['params'],
  bankrollersGet: ['platformId']
})

export const BankrollersTypes = Types
export default Creators

export const BANKROLLES_INITIAL_STATE = {
  bankrollers: []
}

export const INITIAL_STATE = Immutable(BANKROLLES_INITIAL_STATE)

export const updateParams = (state, action) => state.merge({ ...action.params })
export const bankrollersGet = state => state

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANKROLLERS_UPDATE]: updateParams,
  [Types.BANKROLLERS_GET]: bankrollersGet
})
