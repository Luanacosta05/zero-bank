const locators = {
    login: {
        emailField: '#user_login',
        passwordField: '#user_password',
        signinButton: '#signin_button',
        btnLogin: '.btn'   
    },

    message: {
        wrongCredentialsDiv : '.alert'
    },

    feedback: {
        feedbackButton: '#feedback > div > strong',
        name:'#name',
        email: '#email',
        subject: '#subject',
        comment: '#comment',
        SendMessage: '.btn-signin',
        feedbackReturn: '.offset3',
        cleanButton: '[type="reset"]'

    },

    homepage: {
        onlineBanking: '#onlineBankingMenu > div > strong',
        chekingAccountActivity:'#account_activity_link',
        transferFundsLink: '#transfer_funds_link',
        moneyMap: '#money_map_link',
        buttonMoreServices: '#online-banking'
    }
} 
export default locators;