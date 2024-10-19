const express =require('express')
const router =express.Router()
const restroControllers =require('../controllers/restroControllers')


router.get('/', restroControllers.login)
router.post('/homePage', restroControllers.home)
router.get('/homepage', restroControllers.homepage)
router.get('/menupage', restroControllers.menu)
router.post('/menupage', restroControllers.postorder)
router.get('/orderspage', restroControllers.orderspage)
router.get('/editmenuitem/:food_id', restroControllers.editmenu)
router.post('/editmenuitem/:food_id', restroControllers.update)
router.get('/addmenuitem', restroControllers.additem)
router.post('/addmenuitem', restroControllers.postitems)
router.get('/orderdetails/:food_id/:food_price', restroControllers.order)
// router.post('/orderdetails/:food_id/:food_price', restroControllers.postorder)
router.get('/odetailsall', restroControllers.odetails)
router.post('/odetails', restroControllers.selectedodetails)
router.get('/vieworderdetails/:cust_id', restroControllers.ordersodetails)
router.get('/paymentpage', restroControllers.payment)
router.get('/readytopay/:total_price', restroControllers.readytopay)
router.post('/readytopay', restroControllers.paymentdone)
router.get('/staffpage', restroControllers.staffpage)
router.get('/addstaff', restroControllers.form)
router.post('/addstaff', restroControllers.create)
router.get('/editstaff/:staff_id', restroControllers.editstaff)
// router.post('/editstaff/:staff_id', restroControllers.updatestaff)
router.post('/staffpage', restroControllers.updatestaff)
router.get('/ratingpage', restroControllers.ratingpage)
router.get('/staffid/:staff_id', restroControllers.deleteStaff)
// router.get('/:food_id', restroControllers.delete)
router.get('/userView', restroControllers.userview)

module.exports =router