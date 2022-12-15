const User = require('./User');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');

User.hasMany(BlogPost, {
    foreignKey: "user_id"
})

BlogPost.belongsTo(User, {
    foreignKey: "user_id"
})

BlogComment.belongsTo(User, {
    foreignKey: "user_id"
})


BlogPost.hasMany(BlogComment, {
    foreignKey: "post_id"
})





module.exports = { User, BlogPost, BlogComment };

