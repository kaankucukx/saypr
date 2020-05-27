import { createSelector } from 'reselect'

export const formDomain = (state) => state.FormReducer
export const formSelector = () => createSelector(formDomain, (Form) => Form)
