const router = require("express").Router();

router.route("/savings")
    .post((req, res) => {

        db.Savings.create(req.body)
            .then(function (dbSavings) {
                console.log(dbSavings);
            })
            .catch(function (err) {
                console.log(err);
            });
        res.send("Savings Complete")
    });

router.route("/SavingsData", function (req, res) {
    db.Savings.find({})
        .then(function (dbSavings) {
            res.json(dbSavings);
        })
        .catch(function (err) {
            res.json(err);
        });
});

router.route("/user")
    .post((req, res) => {

        db.User.create(req.body)
            .then(function (dbSavings) {
                console.log(dbSavings);
            })
            .catch(function (err) {
                console.log(err);
            });
        res.send("User Created")
    });





module.exports = router;