var posts=["2025/05/06/黄晨大傻逼/","2025/05/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };