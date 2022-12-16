
const { BlogComment } = require('../models');

const commentData = [
  {
    user_id: 1,
    blogPost_id: 3,
    blogComment_text: "This is great!"
},
{
    user_id: 2,
    blogPost_id: 1,
    blogComment_text: "I am impressed!"
},
{
    user_id: 3,
    blogPost_id: 2,
    blogComment_text: "Brilliant idea!"
}
]
const seedComments = () => BlogComment.bulkCreate(commentData);

module.exports = seedComments;