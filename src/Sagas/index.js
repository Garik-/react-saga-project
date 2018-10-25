import { takeLatest, all } from 'redux-saga/effects'
import { BankrollersTypes } from 'Redux/BankrollersRedux'
import { bankrollersWatch } from './BankrollersSagas'

const ipfsTransportProvider = {}

export default function * root () {
  yield all([
    takeLatest(BankrollersTypes.BANKROLLERS_GET, bankrollersWatch, ipfsTransportProvider)
  ])
}