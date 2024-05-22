import { User } from "../../models/User.js";

const adminUsersController = (req, res, next) => {
    if (req.session.adminUser) {
        User.fetchAll()
            .then(([rows, fields]) => {
                res.render('./admin/users', {
                    pageTitle: 'Admin Users',
                    allUsers: rows
                })
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserAddNewForm = (req, res, next) => {
    if (req.session.adminUser) {
        res.render('./admin/userAddNewForm', {
            pageTitle: 'Admin Add New User Form'
        })
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserAddNew = (req, res, next) => {
    if (req.session.adminUser) {
        // Get data by the form
        const newAdminUserEmail = req.body.userAdminEmail;
        const newAdminUserPassword = req.body.userAdminPassword;

        const newAdminUser = new User(null, newAdminUserEmail, newAdminUserPassword);
        newAdminUser.save()
            .then(() => {
                res.redirect('/admin/users');
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserEditForm = (req, res, next) => {
    if (req.session.adminUser) {
        /**
         * Save id into a variable as string.
         * Trasform it into a int
         */
        const idString = req.params.id;
        const id = parseInt(idString);

        User.findById(id)
            .then(([rows, fields]) => {
                let flag = false;
                for (let index = 0; index < rows.length; index++) {
                    if (rows[index].id === id) {
                        flag = true;
                        res.render('./admin/userEditForm', {
                            pageTitle: `Admin edit user with id: ${id}`,
                            userAdminId: rows[index].id,
                            userAdminEmail: rows[index].email,
                            userAdminPassword: rows[index].password
                        })
                    }
                }

                if (!flag) {
                    // TODO: CREATE THE TEMPLATE and THE LOGIC
                    res.redirect('/error404');
                }
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserEdit = (req, res, next) => {
    if (req.session.adminUser) {
        // Get data by the form
        const newUserAdminId = req.body.userAdminId;
        const newUserAdminEmail = req.body.userAdminEmail;
        const newUserAdminPassword = req.body.userAdminPassword;

        const editUserAdmin = new User(newUserAdminId, newUserAdminEmail, newUserAdminPassword);
        editUserAdmin.edit()
            .then(() => {
                res.redirect('/admin/users');
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserDeleteForm = (req, res, next) => {
    if (req.session.adminUser) {
        /**
         * Save id into a variable as string.
         * Trasform it into a int
         */
        const idString = req.params.id;
        const id = parseInt(idString);

        User.findById(id)
            .then(([rows, fields]) => {
                let flag = false;
                for (let index = 0; index < rows.length; index++) {
                    if (rows[index].id === id) {
                        flag = true;
                        res.render('./admin/adminUserDeleteForm', {
                            pageTitle: `Admin delete user with id: ${id}`,
                            deleteUserAdminId: rows[index].id,
                            deleteUserAdminEmail: rows[index].email,
                            deleteUserAdminPassword: rows[index].password
                        })
                    }
                }

                if (!flag) {
                    // TODO: add the error 404 template
                    res.redirect('/error404');
                }
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

const adminUserDelete = (req, res, next) => {
    if (req.session.adminUser) {
        // Get data from the form
        const deleteUserAdminId = req.body.deleteUserAdminId;
        const deleteUserAdminEmail = req.body.deleteUserAdminEmail;
        const deleteUserAdminPassword = req.body.deleteUserAdminPassword;

        // Delete user admin from db
        const deleteUserAdmin = new User(deleteUserAdminId, deleteUserAdminEmail, deleteUserAdminPassword);
        deleteUserAdmin.delete()
            .then(() => {
                res.redirect('/admin/users');
            })
            .catch(err => console.log(err));
    } else {
        res.redirect('/admin/login');
    }
}

export { adminUsersController, adminUserAddNewForm, adminUserAddNew, adminUserEditForm, adminUserEdit, adminUserDeleteForm, adminUserDelete };