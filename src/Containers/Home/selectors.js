import { createSelector } from 'reselect';
import { initialState } from "./reducers";

const selectAppDomain = state => state.Home || initialState;


const makeAppselect =()=>
createSelector(
  selectAppDomain,
  substate => substate
)  
export default makeAppselect
