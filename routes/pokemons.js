var router = express.Router()

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
	name:String,
	attack:Number,
	defense:Number
}
