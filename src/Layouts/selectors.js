import { createSelector } from 'reselect';
import { initialState } from "./reducer";

const selectAppDomain = state => state.Layout || initialState;


const makeAppselect =()=>
createSelector(
  selectAppDomain,
  substate => substate
)  
export default makeAppselect
