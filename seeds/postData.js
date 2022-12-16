
const { BlogPost } = require('../models');

const postData = [
  {
    title: "Javascript",
    description: "A very interesting language, it has many layers.",
    user_id: 1
  },
  {
    title: "HTML and CSS",
    description: "They are the base languages everyone should start with when learning about code",
    user_id: 2
  },
  {
    title: "Objects and Arrays",
    description: "Very important concepts when making data dynamic and powerful.",
    user_id: 3
  }
]

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;
