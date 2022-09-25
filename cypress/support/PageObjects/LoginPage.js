/// <reference types="Cypress" />
var usernameBox = "[name='email']"
var passwordBox = "[name='password']"
var loginBtn = "[name='submit']"

import * as helper from '../../common/general-helpers'

class LoginPage {

    login(username, password) {
        helper.sendKey(usernameBox,username)
        helper.sendKey(passwordBox, password)
        helper.clickElement(loginBtn)
    }

}

export default LoginPage