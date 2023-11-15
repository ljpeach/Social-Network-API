const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema();

const Thought = model('thought', thoughtSchema);

module.exports = Thought;