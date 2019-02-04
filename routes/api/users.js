const router = require("express").Router();
const userController = require("../../controller/userController");

// this should find a specific user to get to the site. Matches with "/api/users/:id"
router.route("/:id")
    .get(userController.findById)
    .delete(userController.remove)

    

// Matches with "/api/books/:id"
router.route("/users")
    .get(userController.findAll)
    .post(userController.create);




module.exports = router;