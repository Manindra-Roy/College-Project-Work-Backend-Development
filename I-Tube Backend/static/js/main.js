// sample database ///////////////////////////////////////////
const videos = [
    "./public/videos/animeShort1.mp4",
    "./public/videos/animeShort1.mp4",
    "./public/videos/animeShort2.mp4",
    "./public/videos/animeShort3.mp4",
    "./public/videos/animeShort4.mp4",
    "./public/videos/animeShort5.mp4",
    "./public/videos/lufy2.mp4",
    "./public/videos/slufy1.mp4",
    "./public/videos/snaruto2.mp4",
    "./public/videos/snaruto1.mp4",
    "./public/videos/naruto1.mp4",
    "./public/videos/lufy1.mp4",
    "./public/videos/wv1.webm",
    "./public/videos/wv2.webm",
    "./public/videos/wv3.webm",
    "./public/videos/wv4.webm",
    "./public/videos/wv5.webm",
    "./public/videos/wv6.webm",
  ];
  const posters = [
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "./static/img/naruto1.jpg",
    "./static/img/lufy1.jpg",
    "./static/img/th1.jpg",
    "./static/img/th2.png",
    "./static/img/th3.jpg",
    "./static/img/th4.jpg",
    "./static/img/th5.jpg",
    "./static/img/th6.jpg",
  ];
  const topContents = [
    "Videos",
    "Musics",
    "Songs",
    "Trendings",
    "Shorts",
    "Education",
    "News",
    "Sports",
  ];
  let videoTitles =
    "This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video. This is the title of this video.  ";
  let channelNames = "Channel Name";
  // sample database ///////////////////////////////////////////
  // data fetch for Categories
  for (i = 0; i < topContents.length; i++) {
    document.querySelector(".content-categories").innerHTML += `
    <a href="#" class="top-contents">
    ${topContents[i]}
  </a>`;
  }
  
  // card content data fetch for hime page
  let j = 0;
  while (j < 1) {
    for (i = 0; i < videos.length; i++) {
      document.querySelector(".contents").innerHTML += `
    <div class="l-cards" id="homelc${i + 1}"> 
    <div class="video-area">
      <a href="#" >
      <video
      id="homeV${i + 1}"
      class="vid"
      onclick="getSrcOfVideo(),gotoVideoPlayer()"
      poster=${posters[i]}
      src=${videos[i]}
      onmouseover="setTimeout(() => {
        this.play();
     }, 250);"
     onmouseout="setTimeout(() => {
       this.pause();
       this.currentTime=0;
       this.load();
     }, 250);"
          muted
          loop
          preload="none"
        ></video>
      </a>
    </div>
    <div class="video-meta">
      <a href="#" class="profile">
        <div
          class="profile-pic"
          style="
            background: url(${posters[i]});background-size: cover;
          "
        ></div>
      </a>
      <div class="text-info">
        <a href="#" class="title">
        ${videoTitles} home video No - ${i + 1}
        </a>
        <div class="views-and-dates">
          <a href="#" class="channel-name"
            >${channelNames}</a
          > 
          &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
        </div>
      </div>
    </div>
    </div>`;
    }
    j = j + 1;
  }
  
  // All Variables
  let contentCategories = document.querySelector(".content-categories");
  let homePageContents = document.querySelector(".contents");
  let videoPlayerPage = document.querySelector(".video-player-page");
  let lCartVideo = document.querySelectorAll(".video-area>a>video");
  let shortVideoSection = document.querySelector(".short-video-section");
  let shortVideo = document.querySelector(".short-video-card video");
  let shortVideoS = document.querySelectorAll(".short-video-card video");
  let followingPage = document.querySelector(".following-page");
  let yourChannelPage = document.querySelector(".your-channel-page");
  let watchHistoryPage = document.querySelector(".watch-history-page");
  
  // switch to video player page
  const gotoVideoPlayer = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    contentCategories.setAttribute("style", "display:none;");
    homePageContents.setAttribute("style", "display:none;");
    shortVideoSection.setAttribute("style", "display:none");
    followingPage.style.display = "none";
    yourChannelPage.style.display = "none";
    videoPlayerPage.setAttribute("style", "display:grid");
    closSideBar();
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    for (i = 0; i < videos.length; i++) {
      document.querySelector(
        ".video-player-page .suggested-videos"
      ).innerHTML += `
      <div class="l-cards" id="vplc${i + 1}">
      <div class="video-area">
        <a href="#" >
        <video
        id="vpV${i + 1}"
        class="vid"
        onclick="getSrcOfVideo(),gotoVideoPlayer()"
        poster=${posters[i]}
        src=${videos[i]}
        onmouseover="setTimeout(() => {
          this.play();
       }, 250);"
       onmouseout="setTimeout(() => {
         this.pause();
         this.currentTime=0;
         this.load();
       }, 250);"
            muted
            loop
            preload="none"
          ></video>
        </a>
      </div>
      <div class="video-meta">
        <a href="#" class="profile">
          <div
            class="profile-pic"
            style="
              background: url(${posters[i]});background-size: cover;
            "
          ></div>
        </a>
        <div class="text-info">
          <a href="#" class="title">
          ${videoTitles} suggested video No - ${i + 1}
          </a>
          <div class="views-and-dates">
            <a href="#" class="channel-name"
              >${channelNames}</a
            >
            &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
          </div>
        </div>
      </div>
      </div>`;
    }
    // set default thambnail on empty thambnail videos and set default profile pic on empty profiles
    defaultPosterAndProfilePic();
    setTimeout(() => {
      document
        .querySelectorAll(".your-channel-contents .l-cards")
        .forEach((yclvCard) => {
          yclvCard.remove();
        });
      document
        .querySelectorAll(".following-channel-contents .l-cards")
        .forEach((fclvCard) => {
          fclvCard.remove();
        });
      document
        .querySelectorAll(".following-channels .following-channel-profile-card")
        .forEach((val) => {
          val.remove();
        });
      document.querySelectorAll(".watched-date").forEach((hwvlc) => {
        hwvlc.remove();
      });
      document.querySelectorAll(".watched-videos").forEach((hwvlc) => {
        hwvlc.remove();
      });
    }, 1);
    // store in session storage
    sessionStorage.setItem("changePage", "gotoVideoPlayer()");
    preLoader();
  };
  // switch to short video player page
  const gotoShortVideoPlayer = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    contentCategories.setAttribute("style", "display:none;");
    homePageContents.setAttribute("style", "display:none;");
    videoPlayerPage.setAttribute("style", "display:none");
    followingPage.style.display = "none";
    yourChannelPage.style.display = "none";
    shortVideoSection.setAttribute("style", "display:grid");
    closSideBar();
    video.pause();
    video.setAttribute("src", "");
    document
      .querySelectorAll(".your-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".following-channels .following-channel-profile-card")
      .forEach((val) => {
        val.remove();
      });
    document.querySelectorAll(".watched-date").forEach((hwvlc) => {
      hwvlc.remove();
    });
    document.querySelectorAll(".watched-videos").forEach((hwvlc) => {
      hwvlc.remove();
    });
    setTimeout(() => {
      document.querySelectorAll(".short-video-card").forEach((svCards) => {
        svCards.remove();
      });
      // card content data fetch for short video page
      for (i = 0; i < videos.length - 10; i++) {
        document.querySelector(".short-video-section").innerHTML += `
      <div class="short-video-card" id="svc-id${i + 1}">
      <video
        onclick="svppBtnControl1()"
        class="short-video-player"
        id="svp-id${i + 1}"
        src=${videos[i]}
        autoplay="false"
        preload="none"
        loop
      ></video>
      <i class="ri-play-fill sv-play-pause-btn" id="pp-id${
        i + 1
      }" onclick="svppBtnControl2()"></i>
      <i class="ri-volume-mute-fill volume-c" id="volmum-id${i + 1}"></i>
      <div class="short-video-info">
        <a href="#">
          <div
            class="short-video-profile"
            style="
              background: url(./static/img/a1.jpg);
              background-size: cover;
            "
          ></div>
          &nbsp;&nbsp;Channel Name</a
        >
        <div class="short-video-title">
          This is the Title of this video. Lorem ipsum dolor sit amet.
        </div>
      </div>
      <ul class="short-video-like-dislike-share">
        <li class="short-video-like">
          <i class="ri-thumb-up-line"></i>50K
        </li>
        <li class="short-video-dislike">
          <i class="ri-thumb-down-line"></i>50K
        </li>
        <li class="short-video-share">
          <i class="ri-share-fill"></i>Share
        </li>
      </ul>
    </div>`;
      }
      // Short Video player //
      for (const val of document.querySelectorAll(".short-video-card video")) {
        let options = {
          root: shortVideoSection,
          rootMargin: "25px",
          threshold: 1.0,
        };
        let observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            let onScreenShortVideo = entry.target;
            //
            if (entry.isIntersecting) {
              onScreenShortVideo.play();
              if (onScreenShortVideo.muted == true) {
                onScreenShortVideo.muted = !onScreenShortVideo.muted;
              }
              let ppBtn = document.querySelector(
                `.short-video-card:has(#${onScreenShortVideo.id})`
              );
              let ppBtn1 = document.querySelector(
                `#${ppBtn.id} .sv-play-pause-btn`
              );
              ppBtn1.setAttribute("class", "ri-pause-fill sv-play-pause-btn");
              ppBtn1.style.opacity = 0;
            } else {
              onScreenShortVideo.pause();
              onScreenShortVideo.currentTime = 0;
              if (onScreenShortVideo.muted == true) {
                onScreenShortVideo.muted = !onScreenShortVideo.muted;
              }
              let ppBtn = document.querySelector(
                `.short-video-card:has(#${onScreenShortVideo.id})`
              );
              let ppBtn1 = document.querySelector(
                `#${ppBtn.id} .sv-play-pause-btn`
              );
              ppBtn1.setAttribute("class", "ri-play-fill sv-play-pause-btn");
              ppBtn1.style.opacity = 0;
            }
          });
        }, options);
        observer.observe(val);
      }
    }, 150);
    // store in session storage
    sessionStorage.setItem("changePage", "gotoShortVideoPlayer()");
    preLoader();
  };
  // short video play/pause button 1
  const svppBtnControl1 = () => {
    document.onclick = (ev1) => {
      ev1.stopPropagation();
      if (ev1.target.className == "short-video-player") {
        let idOfVCard = ev1.target.id;
        let ppBtn = document.querySelector(
          `.short-video-card:has(#${idOfVCard})`
        );
        let ppBtn1 = document.querySelector(`#${ppBtn.id} .sv-play-pause-btn`);
        if (ev1.target.paused) {
          ev1.target.play();
          ppBtn1.setAttribute("class", "ri-pause-fill sv-play-pause-btn");
          ppBtn1.style.opacity = 0;
        } else {
          ev1.target.pause();
          ppBtn1.setAttribute("class", "ri-play-fill sv-play-pause-btn");
          ppBtn1.style.opacity = 1;
        }
      }
    };
  };
  // short video play pause button 2
  const svppBtnControl2 = () => {
    document.onclick = (ev2) => {
      ev2.stopPropagation();
      if (
        ev2.target.className == "ri-pause-fill sv-play-pause-btn" ||
        "ri-play-fill sv-play-pause-btn"
      ) {
        let idOfSvBtn = ev2.target.id;
        let ppvc = document.querySelector(`.short-video-card:has(#${idOfSvBtn})`);
        let ppvc1 = document.querySelector(`#${ppvc.id} .short-video-player`);
        if (ppvc1.paused) {
          ppvc1.play();
          ev2.target.setAttribute("class", "ri-pause-fill sv-play-pause-btn");
          ev2.target.style.opacity = 0;
        } else {
          ppvc1.pause();
          ev2.target.setAttribute("class", "ri-play-fill sv-play-pause-btn");
          ev2.target.style.opacity = 1;
        }
      }
    };
  };
  
  // curently not warking ///////////////////////////******
  // short video volume mute/unmute
  const shortVolumeSeter = (val) => {
    console.log(val);
    if (val.muted) {
      document.querySelectorAll(`.${val.className}+i`).forEach((i) => {
        i.setAttribute("class", "ri-volume-mute-fill");
      });
    } else {
      document.querySelectorAll(`.${val.className}+i`).forEach((i) => {
        i.setAttribute("class", "ri-volume-up-fill");
      });
    }
  };
  // switch to following page
  const gotoFollowingPage = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    contentCategories.setAttribute("style", "display:none;");
    homePageContents.setAttribute("style", "display:none;");
    videoPlayerPage.setAttribute("style", "display:none");
    shortVideoSection.setAttribute("style", "display:none");
    yourChannelPage.style.display = "none";
    followingPage.setAttribute("style", "display:grid");
    closSideBar();
    video.pause();
    video.setAttribute("src", "");
    document.querySelectorAll(".short-video-card").forEach((svCards) => {
      svCards.remove();
    });
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    document
      .querySelectorAll(".your-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document.querySelectorAll(".watched-date").forEach((hwvlc) => {
      hwvlc.remove();
    });
    document.querySelectorAll(".watched-videos").forEach((hwvlc) => {
      hwvlc.remove();
    });
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".following-channels .following-channel-profile-card")
      .forEach((val) => {
        val.remove();
      });
    // redaring followed chnnel cards
    for (i = 10; i < videos.length; i++) {
      document.querySelector(".following-channels").innerHTML += `
        <div class="following-channel-profile-card" onclick="refreshFollowingPage(),gotoFollowingPage()">
        <a href="#">
          <div
            class="following-channel-profile-pic"
            style="
              background: url(${posters[i]});
              background-size: cover;
            "
          ></div>
          &nbsp;&nbsp;Channel Name</a
        >
      </div>`;
    }
    // set default thambnail on empty thambnail videos
    document.querySelectorAll(".following-channel-profile-pic").forEach((val) => {
      let bGOfProfile = val.style.getPropertyValue("background");
      if (bGOfProfile.trim().length == 25) {
        val.style.setProperty("background", "url(./static/img/d.jpg)");
        val.style.setProperty("background-size", "cover");
      }
    });
    // rendaring video cards
    for (i = 0; i < videos.length; i++) {
      document.querySelector(".following-channel-contents").innerHTML += `
      <div class="l-cards" id="fplc${i + 1}">
      <div class="video-area">
        <a href="#" >
        <video
        id="fpV${i + 1}"
        class="vid"
        onclick="getSrcOfVideo(),gotoVideoPlayer()"
        poster=${posters[i]}
        src=${videos[i]}
        onmouseover="setTimeout(() => {
          this.play();
       }, 250);"
       onmouseout="setTimeout(() => {
         this.pause();
         this.currentTime=0;
         this.load();
       }, 250);"
            muted
            loop
            preload="none"
          ></video>
        </a>
      </div>
      <div class="video-meta">
        <a href="#" class="profile">
          <div
            class="profile-pic"
            style="
              background: url(${posters[i]});background-size: cover;
            "
          ></div>
        </a>
        <div class="text-info">
          <a href="#" class="title">
          ${videoTitles} fp video No - ${i + 1}
          </a>
          <div class="views-and-dates">
            <a href="#" class="channel-name"
              >${channelNames}</a
            >
            &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
          </div>
        </div>
      </div>
      </div>`;
    }
    // set default thambnail on empty thambnail videos and set default profile pic on empty profiles
    defaultPosterAndProfilePic();
    // store in session storage
    sessionStorage.setItem("changePage", "gotoFollowingPage()");
    preLoader();
  };
  // refresh following page
  const refreshFollowingPage = () => {
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((val) => {
        val.remove();
      });
  };
  // switch to your channel page
  const goToYourChannel = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    contentCategories.setAttribute("style", "display:none;");
    homePageContents.setAttribute("style", "display:none;");
    videoPlayerPage.setAttribute("style", "display:none");
    shortVideoSection.setAttribute("style", "display:none");
    followingPage.setAttribute("style", "display:none");
    yourChannelPage.setAttribute("style", "display:block");
    closSideBar();
    video.pause();
    video.setAttribute("src", "");
    document.querySelectorAll(".short-video-card").forEach((svCards) => {
      svCards.remove();
    });
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".your-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".following-channels .following-channel-profile-card")
      .forEach((val) => {
        val.remove();
      });
    document.querySelectorAll(".watched-date").forEach((hwvlc) => {
      hwvlc.remove();
    });
    document.querySelectorAll(".watched-videos").forEach((hwvlc) => {
      hwvlc.remove();
    });
    // set default thambnail on empty thambnail videos
    document.querySelectorAll(".your-channel-profile-pic").forEach((val) => {
      let bGOfProfile = val.style.getPropertyValue("background");
      if (bGOfProfile.trim().length == 25) {
        val.style.setProperty("background", "url(./static/img/d.jpg)");
        val.style.setProperty("background-size", "cover");
      }
    });
    // rendaring video cards
    for (i = 0; i < videos.length; i++) {
      document.querySelector(".your-channel-contents").innerHTML += `
    <div class="l-cards" id="ycplc${i + 1}">
    <div class="video-area">
      <a href="#" >
      <video
      id="yplc${i + 1}"
      class="vid"
      onclick="getSrcOfVideo(),gotoVideoPlayer()"
      poster=${posters[i]}
      src=${videos[i]}
      onmouseover="setTimeout(() => {
        this.play();
     }, 250);"
     onmouseout="setTimeout(() => {
       this.pause();
       this.currentTime=0;
       this.load();
     }, 250);"
          muted
          loop
          preload="none"
        ></video>
      </a>
    </div>
    <div class="video-meta">
      <a href="#" class="profile">
        <div
          class="profile-pic"
          style="
            background: url(${posters[i]});background-size: cover;
          "
        ></div>
      </a>
      <div class="text-info">
        <a href="#" class="title">
        ${videoTitles}
        </a>
        <div class="views-and-dates">
          <a href="#" class="channel-name"
            >${channelNames}</a
          >
          &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
        </div>
      </div>
    </div>
    </div>`;
    }
    // set default thambnail on empty thambnail videos and set default profile pic on empty profiles
    defaultPosterAndProfilePic();
    // store in session storage
    sessionStorage.setItem("changePage", "goToYourChannel()");
    preLoader();
  };
  
  // switch to your channel page
  const goToWatchHistory = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    contentCategories.setAttribute("style", "display:none;");
    homePageContents.setAttribute("style", "display:none;");
    videoPlayerPage.setAttribute("style", "display:none");
    shortVideoSection.setAttribute("style", "display:none");
    followingPage.setAttribute("style", "display:none");
    yourChannelPage.setAttribute("style", "display:none");
    watchHistoryPage.style.display = "block";
  
    closSideBar();
    video.pause();
    video.setAttribute("src", "");
    document.querySelectorAll(".short-video-card").forEach((svCards) => {
      svCards.remove();
    });
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".your-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".following-channels .following-channel-profile-card")
      .forEach((val) => {
        val.remove();
      });
  
    // set default thambnail on empty thambnail videos
    // document.querySelectorAll(".your-channel-profile-pic").forEach((val) => {
    //   let bGOfProfile = val.style.getPropertyValue("background");
    //   if (bGOfProfile.trim().length == 25) {
    //     val.style.setProperty("background", "url(./static/img/d.jpg)");
    //     val.style.setProperty("background-size", "cover");
    //   }
    // });
  
    // inserting watched history frem
    const historyDates = ["Today", "Yesterday"];
    let h = 0;
    while (h < 2) {
      document.querySelector(".videos-and-watch-dates").innerHTML += `
  <div class="watched-date">${historyDates[h]}</div>
  <div class="watched-videos" id="wv${h + 1}">
  </div>`;
  
      // rendaring video cards
      for (i = 0; i < videos.length; i++) {
        document.querySelector(`#wv${h + 1}`).innerHTML += `
    <div class="l-cards" id="ycplc${i + 1}">
    <div class="video-area">
      <a href="#" >
      <video
      id="yplc${i + 1}"
      class="vid"
      onclick="getSrcOfVideo(),gotoVideoPlayer()"
      poster=${posters[i]}
      src=${videos[i]}
      onmouseover="setTimeout(() => {
        this.play();
     }, 250);"
     onmouseout="setTimeout(() => {
       this.pause();
       this.currentTime=0;
       this.load();
     }, 250);"
          muted
          loop
          preload="none"
        ></video>
      </a>
    </div>
    <div class="video-meta">
      <a href="#" class="profile">
        <div
          class="profile-pic"
          style="
            background: url(${posters[i]});background-size: cover;
          "
        ></div>
      </a>
      <div class="text-info">
        <a href="#" class="title">
        ${videoTitles}
        </a>
        <div class="views-and-dates">
          <a href="#" class="channel-name"
            >${channelNames}</a
          >
          &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
        </div>
      </div>
    </div>
    </div>`;
      }
      h++;
    }
    // set default thambnail on empty thambnail videos and set default profile pic on empty profiles
    defaultPosterAndProfilePic();
    // store in session storage
    sessionStorage.setItem("changePage", "goToWatchHistory()");
    preLoader();
  };
  
  // switch to home page
  // let switchToHomeButtons = document.querySelector(".switch-to-home");
  const gotoHomePage = () => {
    document.querySelector(".page-loading-animation").style.opacity = "1";
    document.querySelector(".page-loading-animation").style.display = "flex";
    videoPlayerPage.setAttribute("style", "display:none");
    shortVideoSection.setAttribute("style", "display:none");
    followingPage.style.display = "none";
    yourChannelPage.style.display = "none";
    contentCategories.setAttribute("style", "display:flex;");
    homePageContents.setAttribute("style", "display:grid;");
    closSideBar();
    video.pause();
    video.setAttribute("src", "");
    document.querySelectorAll(".short-video-card").forEach((svCards) => {
      svCards.remove();
    });
    document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
      lvCard.remove();
    });
    document
      .querySelectorAll(".following-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".your-channel-contents .l-cards")
      .forEach((lvCard) => {
        lvCard.remove();
      });
    document
      .querySelectorAll(".following-channels .following-channel-profile-card")
      .forEach((val) => {
        val.remove();
      });
    document.querySelectorAll(".watched-date").forEach((hwvlc) => {
      hwvlc.remove();
    });
    document.querySelectorAll(".watched-videos").forEach((hwvlc) => {
      hwvlc.remove();
    });
    // store in session storage
    sessionStorage.setItem("changePage", "gotoHomePage()");
    preLoader();
  };
  // video transfer engine //////////////
  const getSrcOfVideo = () => {
    document.onclick = (e) => {
      if (e.target.className == "vid") {
        let idOfVCard = e.target.id;
        let vSrc = e.target.getAttribute("src");
        let posterPath = e.target.getAttribute("poster");
        let vTitle = document.querySelector(`.l-cards:has(a>#${idOfVCard})`);
        let vTitle1 = document.querySelector(`#${vTitle.id} .video-meta .title`);
        video.setAttribute("src", `${vSrc}`);
        document
          .querySelector(".left-playing-video-info .profile-pic")
          .setAttribute(
            "style",
            `background: url(${posterPath});background-size: cover;`
          );
        document.querySelector(
          ".playing-video-title"
        ).innerText = `${vTitle1.innerText}`;
        video.play();
        sessionStorage.setItem("videoPlayerTitle", `${vTitle1.innerText}`);
        sessionStorage.setItem("videoPlayerVideoSrc", `${vSrc}`);
        sessionStorage.setItem("videoPlayerVideoPoster", `${posterPath}`);
      }
    };
  };
  const defaultPosterAndProfilePic = () => {
    // set default thambnail on empty thambnail videos
    document.querySelectorAll(".vid").forEach((val) => {
      if (val.getAttribute("poster") == "null") {
        val.setAttribute("poster", "./static/img/d.jpg");
      }
    });
    // set default profile pic on empty profiles
    document.querySelectorAll(".video-meta .profile-pic").forEach((picval) => {
      if (picval.getAttribute("style").trim().length == 45) {
        picval.setAttribute(
          "style",
          "background: url(./static/img/d.jpg); background-size: cover;"
        );
      }
    });
  };
  defaultPosterAndProfilePic();
  ///////////////////////////////// Finished ///////////////////////////////////
  // menu function //
  const root = document.querySelector(":root");
  let menuIcon = document.querySelector(".menu-icon");
  let sideBar = document.querySelector(".side-bar");
  let sideBarUl = document.querySelectorAll(".side-bar>ul");
  const closSideBar = () => {
    root.style.setProperty("--side-bar-w", "0px");
    sideBar.setAttribute("style", "opacity: 0;");
    sideBarUl.forEach((ul) => {
      setTimeout(() => {
        ul.setAttribute("style", "display: none;");
      }, 125);
    });
    menuIcon.setAttribute("onclick", "openSideBar()");
    if (window.screen.width <= 1600) {
      document
        .querySelector(".following-channel-contents")
        .setAttribute("style", "grid-template-columns:repeat(3, 1fr)");
      document
        .querySelector(".following-channel-bannar-profile")
        .setAttribute("style", "grid-area:1/1/3/4");
    }
  };
  const openSideBar = () => {
    sideBarUl.forEach((ul) => {
      ul.setAttribute("style", "display: flex;");
    });
    root.style.setProperty("--side-bar-w", "240px");
    sideBar.setAttribute("style", "opacity: 1;");
    menuIcon.setAttribute("onclick", "closSideBar()");
    if (window.screen.width <= 1600) {
      document
        .querySelector(".following-channel-contents")
        .setAttribute("style", "grid-template-columns:repeat(2, 1fr)");
      document
        .querySelector(".following-channel-bannar-profile")
        .setAttribute("style", "grid-area:1/1/3/3");
    }
  };
  // dark or light function //
  let darkOrLightIcon = document.querySelector(".dark-or-light");
  let darkOrLightIconI = document.querySelector(".dark-or-light>i");
  const switchToLight = () => {
    root.style.setProperty("--main-bg-color", "#E4E4E4");
    root.style.setProperty("--second-bg-color", "#d3d3d3");
    root.style.setProperty("--font-color", "#222222");
    // root.style.setProperty("--nav-logo-color", "#20dc55");
    darkOrLightIconI.setAttribute("class", "ri-moon-fill");
    darkOrLightIcon.setAttribute("onclick", "switchToDark()");
    localStorage.setItem("m-bg", "#E4E4E4");
  };
  const switchToDark = () => {
    root.style.setProperty("--main-bg-color", "#0F0F0F");
    root.style.setProperty("--second-bg-color", "#222222");
    root.style.setProperty("--font-color", "#E4E4E4");
    // root.style.setProperty("--nav-logo-color", "#2020dc");
    darkOrLightIconI.setAttribute("class", "ri-sun-fill");
    darkOrLightIcon.setAttribute("onclick", "switchToLight()");
    localStorage.setItem("m-bg", "#0F0F0F");
  };
  const changeUrl = (nextURL) => {
    const nextTitle = "My new page title";
    const nextState = { additionalInformation: "Updated the URL with JS" };
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
    // This will replace the current entry in the browser's history, without reloading
    // window.history.replaceState(nextState, nextTitle, nextURL);
  };
  let nextURL = "http://127.0.0.1:5500/index.html";
  // changeUrl(nextURL)
  
  // setInterval(() => {
  //   console.clear()
  // }, 10000);
  