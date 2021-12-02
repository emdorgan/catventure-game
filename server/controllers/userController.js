const { User, Cat } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {

    async getUser({ user = null, params }, res) {
        //find user by id or username
        //bring cats that are assigned to that model
        const findUser = await User.findOne({ $or: [{ _id: user ? user._id : params.id }, { username: params.username }], });

        if (!findUser) {
            return res.status(400).json({ message: 'Cannot find user' });
        }
        res.json(findUser);
    },
    // create single user
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Cannot create user' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async login({ body }, res) {
        //find one user by username or email
        const user = await User.findOne({ username: body.username });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }
        // password check
        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async addCat({ user, body }, res) {
        try {
            const createCat = await Cat.create(body);

            await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { cats: createCat.id } },
                { new: true, runValidators: true }
            );
            res.json(createCat)
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
}
