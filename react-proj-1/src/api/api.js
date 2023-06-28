import axios from 'axios';
import { json } from 'react-router-dom';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2fd96a4c-cb1b-4934-9e69-6c07fa8dd8f0'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance(`users?pages=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        });
    },
    getFriends() {
        return instance(`users`).then(response => {
            return response.data;
        });
    },
}
export const profileAPI = {
    getUserProfileData(userId) {
        return instance('profile/' + userId).then(response => {
            return response;
        });
    },
    getStatus(userId) {
        // return instance('profile/status/' + userId).then(response => {
        //     console.log("response = " + JSON.stringify(response));
        //     return JSON.stringify(response);
        // });
        return instance('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status }).then(response => {
            return response;
        });
    },
    savePhoto(photoFile) {
        var formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response;
        });
    },
    saveProfile(profile) {
        return instance.put('profile', profile);
    }
}
export const authAPI = {
    getMyAccount() {
        return instance(`auth/me`).then(response => {
            return response.data;
        });
    },
    login(email, password, rememberMe = false, captchaUrl) {
        return instance.post(`auth/login`, { email, password, rememberMe, captchaUrl });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const sequrityAPI = {
    getCaptchaURL() {
        return instance(`security/get-captcha-url`);
    }
}