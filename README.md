# carousel4

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
<br><br><br>
## *** Function I implemented. ***
- Inserted Video, images, code to Carousel.
- Support adaptive video streaming in all browsers of Android and iOS.
- Provide option to control smooth slide or not and cycle carousel or not. You can check it in App.vue line 3.
```html
<Carousel v-bind:cycle="true" v-bind:smooth="true"/>
```
- Video plays in Carousel, video plays automatically when active and pause when swiped out.
- Video controls support play, pause, volume, full screen, touchable progress bar.
- Clicking on item video on video area plays or pauses video.
- Clicking on item image launches modal view.

## *** Resources I use during development. ***
https://github.com/kenwheeler/slick/<br>
https://github.com/cloudinary/cloudinary-video-player<br>

## *** Remaining You Have To in Future ***
1. Upload video and provide to app.<br>
Cloudinary library is an open source library.<br>
You can create your own cloud and upload your video with public Id.
Please check this.<br>
https://cloudinary.com/documentation/cloudinary_video_player<br>
https://cloudinary.com/documentation/upload_videos<br>
https://cloudinary.com/documentation/video_manipulation_and_delivery<br>
In the code, I use sample cloud named 'miki-cloudinary'<br>
This will be changed with your own cloud.<br>
You can find it in Carousel.vue/line: 120.<br>
```js
var cld = cloudinary.Cloudinary.new({ cloud_name: "miki-cloudinary" });
```
You can change the name with your own cloud.<br>
And can provide public ids to <code>video_lists</code> variable in main.js.<br>

2. Open a new page when you click code item.
You can customize it in public/js/script.js line 27.
```js
$('code').click(function() {
    window.open("https://www.w3schools.com");//Customize.
});
```
