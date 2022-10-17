import PostItem from './PostItem.js';
import post from './post.js';

const PostList = () => {
    return (`<ul class="list-group">
${post.map(v => PostItem(v)).join('')}
</ul> `);
};

export default PostList;