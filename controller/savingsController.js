const db= require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Savings
            .find(req.query)
            .sort({_id: -1})
            .then(finance101 => res.json(finance101))
            .catch(err => res.status(422).json(err));   
    },
    create: function(req, res) {
        db.Savings
            .create(req.body)
            .then(finance101 => {
                console.log(finance101);
                res.json(finance101)
            })
            .catch(err => res.statys(422).json(err));
    },
    remove: function(req,res) {
        db.Savings
            .findById({_id: req.params.id})
            .then(finance101 => finance101.remove())
            .then(finance101 => res.json(finance101))
            .catch(err => res.status(422).json(err));
    }
};