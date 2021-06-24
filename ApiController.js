const axios = require('axios');

class ApiController {

    double = (req, res) => {
        const {number} = req.params;
        const parseNumber = parseInt(number, 10);
        if (typeof parseNumber !== 'number' || isNaN(parseNumber)) return res.status(400).send({error: 'Incorrect value'});
        const doubleNumber = parseNumber * 2;
        const result = {
            result: doubleNumber
        }
        return res.status(200).send(result);
    }

    count = (req, res) => {
        if (req.cookies && req.cookies.count) {
            res.cookie('count', parseInt(req.cookies.count, 10) + 1);
            return res.status(200).send({count: parseInt(req.cookies.count) + 1});
        } else {
            res.cookie('count', 1);
            return res.status(200).send({count: 1});
        }
    }

    joke = async (req, res) => {
        try {
            const response = await axios.get("https://api.jokes.one/jod");
            return  res.code(200).send(response)
        } catch (err) {
            console.log(err)
            return res.code(500).send({error: err})
        }
    }
}

module.exports = {
    ApiController
};
