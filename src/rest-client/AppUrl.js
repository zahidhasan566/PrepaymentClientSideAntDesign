class AppUrl {
    static baseUrl = `${process.env.REACT_APP_UPLOAD_URL}`

    static authSignin = this.baseUrl + '/auth-login'
    static authSignup = this.baseUrl + '/api/login'
    // static validateToken = this.baseUrl + '/auth/validate-token'
    static myProfile = this.baseUrl + '/auth/user-profile'

    static post = this.baseUrl + '/post'
}

export default AppUrl