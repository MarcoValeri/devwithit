const adminDashboardController = (req, res, next) => {
    res.render('./admin/dashboard', {
        pageTitle: 'Admin Dashboard',
    })
}

export { adminDashboardController };