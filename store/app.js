import { vuexfireMutations } from 'vuexfire'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'

const store = new Vuex.Store({
  mutations: {
    // other mutations
    ...vuexfireMutations,
  },
})

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: 'exercise-health' })
  .firestore()