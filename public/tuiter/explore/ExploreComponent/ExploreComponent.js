import PostSummaryList from "../../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
<div class="row">
  <div class="row">           
    <div class="col-11 mt-1 position-relative">
        <input class="col-12 rounded-pill ps-5 pt-2 pb-2 bg-white border-0" type="search" placeholder="Search Twitter"/>
        <i class="fa fa-search position-absolute top-0 start-0 ps-4 pt-2 text-secondary h5"></i>
    </div>
    <div class="col-1 mt-1">
        <a href="explore-settings.html"><i class="fa fa-cog text-primary h3"></i></a>
    </div>
  </div>

</div> 
<ul class="nav my-2 nav-tabs"> 
<li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white" href="sports.html">Sports</a>
    </li>
    <li class="nav-item d-md-block d-none">
        <a class="nav-link text-white" href="entertainment.html">Entertainment</a>
    </li>
</ul>
 <div class="position-relative my-2">
    <img class="img-fluid wd-banner" src="../image/spacex-starship.jpg" alt="banner">
    <div class="h2 text-secondary position-absolute bottom-0">SpaceX's Starship</div>
</div>
${PostSummaryList()}
    `);
}
export default ExploreComponent;
