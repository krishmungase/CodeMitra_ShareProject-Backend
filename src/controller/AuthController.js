const Joi = require('joi');

const AuthController = {
    async signup(req, res) {
        const { fullName, email, password, confirmPassword } = req.body;

        const signupSchema = Joi.object({
            fullName: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(5).required(),
            confirmPassword: Joi.ref("password")
        })

        const { error } = signupSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Please check all fields ",
                error: error.message
            })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password MisMatch"
            })
        }

        res.status(200).json({
            message: "data stored"
        });
    },

    async login(req, res) {
        const { email, password } = req.body;

        // validate email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email and password"
            });
        }

        // logic to validate email and password
        

    }
}

module.exports = AuthController;