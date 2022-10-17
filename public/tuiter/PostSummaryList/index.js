import PostSummaryItem from './PostSummaryItem.js';
import post from './post.js';

const PostSummaryList = () => {
    return (`<ul class="list-group">
${post.map(v => PostSummaryItem(v)).join('')}
</ul> `);
};

export default PostSummaryList;