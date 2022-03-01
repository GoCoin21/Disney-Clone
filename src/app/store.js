import { createStore,applyMiddleware, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../features/user/userSlice"
import movieReducer from "../features/movie/movieSlice"
export default configureStore({
	reducer : {
		user : userReducer,
		movie: movieReducer
	}
})