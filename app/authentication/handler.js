module.exports = {
    loginAuth: async (req, res) => {
        const { username, password } = req.body;

        if (username !== process.env.username && password !== process.env.password) {
            res.status(400).json({
                status: 'fail',
                message: 'Wronge username or password',
            });
        }   

        res.status(200).json({
            status: 'success',
            message: 'Successfully login',
        });
    }
}