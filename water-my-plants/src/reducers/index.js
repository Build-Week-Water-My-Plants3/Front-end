import { combineReducers } from "redux";
import { reducer as signup } from "./signupReducer";
import { reducer as user } from "./userReducer";
import { reducer as strains } from "./strainsReducer";

export default combineReducers({
 
  signup,
  user,
 strains
});




