var posts=["2025/05/06/hello-world/","2025/05/06/wpcsb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };