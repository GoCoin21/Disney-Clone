import userReducer from "./features/user/userSlice";

export default function rootReducer(state={},action){
	return {
		user : userReducer(state.user,action)
	}
}