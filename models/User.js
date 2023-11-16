const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            set: newName => newName.trim(),
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([\w\+~-]+)@([\w]+)\.([a-z]{2,63})$/,//fairly simple email validation regex. Will give some false negatives unfortunately.
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user' }]
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;