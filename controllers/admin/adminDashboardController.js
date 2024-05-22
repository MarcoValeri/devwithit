const adminDashboardController = (req, res, next) => {
    if (req.session.adminUser) {
        res.render('./admin/dashboard', {
            pageTitle: 'Admin Dashboard',
        })
    } else {
        res.redirect('/admin/login');
    }
}

export { adminDashboardController };