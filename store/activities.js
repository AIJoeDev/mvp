export const state = () => ({
    type: String,
    // days/week
    frequency: Number,
    // duration of activity in min
    time: Number,
    // don't know how to value intensity yet
    intensity: Number,
    // created, scheduled, unreported, r_complete, r_missed
    state = 'created',
    // reports filed under this activity
    reportsKeys: [],
    // symptoms known to be caused by this activity.
    symptomsKeys: [],
    iap = false,
})

export const getters = {
}

export const actions = {
}

export const mutations = {
}