import express from 'express';

// Express router
const router = express.Router();

import { adminLoginAuthenticationController } from '../controllers/admin/adminLoginController.js';
import { adminLoginController } from '../controllers/admin/adminLoginController.js';
import { adminDashboardController } from '../controllers/admin/adminDashboardController.js';
import { adminUsersController } from '../controllers/admin/adminUserController.js';
import { adminUserAddNewForm } from '../controllers/admin/adminUserController.js';
import { adminUserAddNew } from '../controllers/admin/adminUserController.js';
import { adminUserEditForm } from '../controllers/admin/adminUserController.js';
import { adminUserEdit } from '../controllers/admin/adminUserController.js';
import { adminUserDeleteForm } from '../controllers/admin/adminUserController.js';
import { adminUserDelete } from '../controllers/admin/adminUserController.js';

router.get('/admin/login', adminLoginController);
router.post('/admin/login', adminLoginAuthenticationController);

router.get('/admin/dashboard', adminDashboardController);

router.get('/admin/users', adminUsersController);
router.get('/admin/user-add-new-form', adminUserAddNewForm);
router.post('/admin/user-add-new-form', adminUserAddNew);
router.get('/admin/user-edit-form/:id', adminUserEditForm);
router.post('/admin/user-edit-form/:id', adminUserEdit);
router.get('/admin/user-delete-form/:id', adminUserDeleteForm);
router.post('/admin/user-delete-form/:id', adminUserDelete);

export { router };