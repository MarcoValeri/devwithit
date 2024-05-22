const homePageController = (req, res, next) => {
    res.render('./pages/home', {
        pageTitle: 'Test',
    })
}

export { homePageController };