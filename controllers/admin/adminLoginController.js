const adminLoginController = (req, res, next) => {
    res.render('./admin/login', {
        pageTitle: 'Admin Login',
    })
}

const adminLoginAuthenticationController = (req, res, next) => {
    // Get data from the form
    const adminLoginEmail = req.body.emailLogin;
    const adminLoginPassword = req.body.passwordLogin;

    if (adminLoginEmail === 'marco.valeri@cherrythinking.com' && adminLoginPassword === '1234') {
        req.session.adminUser = true;
        res.redirect('/admin/dashboard');
    } else {
        req.session.adminUser = false;
        res.redirect('/');
    }
}

export { adminLoginController, adminLoginAuthenticationController };