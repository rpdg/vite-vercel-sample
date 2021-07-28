import { RoleName, Roles } from '@/common/Roles';
import { AUTH_TOKEN } from '@/common/StorageKeys';
import JsonStorage from '@/utils/JsonStorage';

type User = {
	userId: string;
	userName: string;
	role: RoleName;
};

class AuthenStore {
	user?: User;
	token: string;

	constructor() {
		this.token = JsonStorage.get<string>(AUTH_TOKEN, 'fakeToken');
	}

	setToken(accessToken: string) {
		const token = accessToken;
		JsonStorage.set(AUTH_TOKEN, token);
		this.token = token;
	}

	removeToken() {
		this.token = '';
		JsonStorage.clear(AUTH_TOKEN);
	}

	get currentUser() {
		return this.user;
	}

	get role() {
		return Roles.buyer;

		return this.user?.role;
	}
}

export default new AuthenStore();
