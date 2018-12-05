<template>
  <div class="content">
    <div class="slider slider-for">
        <div v-for="(video, index) in videos" :key="index">
            <video
                    :id="'player-'+index"
                    controls
                    muted
                    :class="'cld-video-player cld-video-player-skin-dark data-cld-public-id='+video"/>
        </div>
        <div v-for="image in images" :key="image.id">
            <img :src=image>
        </div>
        <div v-for="image in images" :key="image.id">
          <img :src=image>
        </div>
    </div>
    <div class="slider slider-nav">
      <div v-for="(video, index) in videos" :key="index">
        <video
          :id="'prev-'+index"
          controls
          muted
          :class="'cld-video-player cld-video-player-skin-dark data-cld-public-id='+video"/>
      </div>
      <div v-for="image in images" :key="image.id">
        <img :src=image>
      </div>
      <div v-for="image in images" :key="image.id">
        <img :src=image>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      images: this.$store.state.image_lists,
      videos: this.$store.state.video_lists
    }
  },
  mounted () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // fade: true,
      asNavFor: '.slider-nav',
      dots: true
      // mobileFirst: true,
      // respondTo: 'window',
      // centerMode: true,
      // adaptiveHeight: true
    })
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true
    })
    // Adaptive Streaming
    var cld = cloudinary.Cloudinary.new({ cloud_name: 'miki-cloudinary' })

    var player = []
    var prev = []
    for (var i = 0; i < this.videos.length; i++) {
      player[i] = cld.videoPlayer('player-' + i)
      player[i].source(this.videos[i], { sourceTypes: ['hls'] }).pause()

      prev[i] = cld.videoPlayer('prev-' + i)
      prev[i].source(this.videos[i], { sourceTypes: ['hls'] }).pause()
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
