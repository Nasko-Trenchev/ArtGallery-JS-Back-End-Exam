const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authControler');
const publicationController = require('./controllers/publicationController');
const {isAuthenticated} = require('./middlewares/authMiddleware')

router.get('/', homeController.getHomePage)
router.get('/404', homeController.erorrPage);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/logout', authController.getLogout);

router.get('/create', isAuthenticated, publicationController.getCreate);
router.post('/create', isAuthenticated, publicationController.postCreate);

router.get('/galery', publicationController.getGalery);
router.get('/details/:id', publicationController.getDetails);

router.get('/edit/:id', isAuthenticated, publicationController.getEdit);
router.post('/edit/:id', isAuthenticated, publicationController.postEdit);

router.get('/delete/:id', isAuthenticated, publicationController.getDelete);

router.get('/share/:id', isAuthenticated, publicationController.sharePublication);

//TODO: Routes

module.exports = router;