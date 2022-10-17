const NavigationSidebar = (active) => {
    return(`
<ul class="list-group">
     <li class="list-group-item"><i class="fab fa-twitter text-white"></i></li>             
     <li class="list-group-item ${active === 'home' ? 'active' : ''}">
         <i class="fa fa-home"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="../HomeScreen/index.html" class="text-white text-decoration-none">Home</a></span>
     </li>
     <li class="list-group-item text-white border-0 ${active === 'explore' ? 'active' : ''}">
         <i class="fa fa-hashtag fa-bold"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="../explore/index.html" class="text-white fw-bold text-decoration-none">Explore</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-bell"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="#" class="text-white text-decoration-none">Notifications</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-envelope"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="#" class="text-white text-decoration-none">Messages</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-bookmark"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="../../tuiter/bookmarks/index.html" class="text-white text-decoration-none">Bookmarks</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-list"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="#" class="text-white text-decoration-none">Lists</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-user"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="#" class="text-white text-decoration-none">Profile</a></span>
     </li>
     <li class="list-group-item">
         <i class="fa fa-ellipsis-h"></i><span class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline">
         <a href="#" class="text-white text-decoration-none">More</a></span>
     </li>
</ul>

<div class="d-grid mt-2">
  <a href="tweet.html"class="btn btn-primary btn-block rounded-pill">Tweet</a>
</div>`);
}
export default NavigationSidebar;

