import { any } from "core-js/fn/promise"

export const state = () => ({
    rewardingRating: Number,
    perceivedExertion: Number,
    painLevel: Number,
    // duration of activity in min
    time: Number,
    // don't know how to value intensity yet
    intensity: Number,
    symptoms: [],
    // created, submitted to provider, reviewed by provider
    state = 'created',
    activity: any,
})

export const getters = {
}

export const actions = {
}

export const mutations = {
}