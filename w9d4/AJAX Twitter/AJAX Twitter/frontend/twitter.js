const FollowToggle = require('./follow_toggle.js')
const UsersSearch = require('./users_search.js')
$(() => {
    // let data = $(".follow-toggle")
    // console.log(data)
    // let follow = new FollowToggle(data); 
    $(".follow-toggle").each((index,ele) => new FollowToggle(ele));
    let data = $(".users-search")
    console.log(data)
    $(".users-search").each((index, ele) => new UsersSearch(ele));
});
