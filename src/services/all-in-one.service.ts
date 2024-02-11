import http from './http.ts';

class AllInOneService {
    static get(data: any) {
		return http.post(`https://all-in-one-system-cfe0c681a225.herokuapp.com/user/sign-in`, data);
	}
	static create(data: any) {
		return http.post('https://all-in-one-system-cfe0c681a225.herokuapp.com/', data);
	}
	static update(data: any) {
		return http.patch(`/content`, data);
	}
	static delete(data: any) {
		return http.delete(`/content/${data}`);
	}

}
export default AllInOneService;