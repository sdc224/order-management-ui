import axios from "axios";

const API_URL = "/api/auth/";

/**
 * @see: https://www.bezkoder.com/react-redux-jwt-auth/
 */
class AuthService {
	async login(username: string, password: string) {
		try {
			const response = await axios.post(API_URL + "login", {
				username,
				password
			});

			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(username: string, email: string, password: string) {
		return axios.post(API_URL + "signup", {
			username,
			email,
			password
		});
	}
}

export default new AuthService();
