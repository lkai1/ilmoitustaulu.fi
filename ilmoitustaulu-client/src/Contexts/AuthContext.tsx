import axios, { AxiosError, AxiosResponse } from 'axios';
import { createContext, PropsWithChildren } from 'react';


export interface AuthContextType {
	register: (email: string, password: string, city: string) => void;
	login: (email: string, password: string) => void;
	//verifyJWTToken:  () => null,
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {

	//create api calls folder and files

	const register = (
		email: string,
		password: string,
		city: string
	) => {

		axios.post('/api/Auth/register', {
			email,
			password,
			city
		})
			.then((response: AxiosResponse) => {
				localStorage.setItem('token', response.data);
			})
			.catch((_error: AxiosError) => {
				alert('Something went wrong');
			});
	};

	const login = (
		email: string,
		password: string
	) => {

		axios.post('/api/Auth/login', {
			email,
			password
		})
			.then((response: AxiosResponse) => {
				localStorage.setItem('token', response.data);
			})
			.catch((_error: AxiosError) => {
				alert('Something went wrong');
				console.log(_error);
			});
	};

	const logout = () => {
		localStorage.removeItem('token');
	};

	const valuesToProvide = {
		register,
		login,
		logout,
	};

	return <AuthContext.Provider value={valuesToProvide}>
		{children}
	</AuthContext.Provider>;
}; 