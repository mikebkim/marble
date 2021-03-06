var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
});

var orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    items: [itemSchema],
    paid: { type: Boolean, default: false }
}, {
        timestamps: true
    });

orderSchema.methods.addProduct = function (productId, cb) {
    var order = this;
    var item = order.items.find(item => item.product.equals(productId));
    if (item) {
        item.quantity += 1;
    } else {
        order.items.push({ product: productId });
    }
    order.save().then(() => {
        order.populate('items.product').execPopulate().then(order => cb(order));
    });
}

orderSchema.methods.removeProduct = function (productId, cb) {
    var order = this;
    var item = order.items.find(item => item.product.equals(productId));
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        order.items.remove(item._id);
    }
    order.save().then(() => {
        order.populate('items.product').execPopulate().then(order => cb(order));
    });
}

orderSchema.statics.cartForUser = function (userId, cb) {
    this.findOne({ paid: false, user: userId }).populate('items.product')
        .then(order => {
            if (order) return cb(order);
            this.create({ user: userId }).then(order => { return cb(order) });
        })
}


module.exports = mongoose.model('Orders', orderSchema);