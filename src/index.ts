const steem = require('steem/lib/browser');

console.log('Getting post content...');
steem.api.getDiscussionsByTrending({
        tag: 'coinkorea',
        limit: 1
    },
    (err: any, result: any) => {
        console.log(err, JSON.stringify(result));
    });
