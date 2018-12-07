<template>
    <div class="content">
        <div class="slider slider-for">
            
            <div v-for="image in images" :key="image.id">
                <img :src="image">
            </div>
            <div v-for="(video, index) in videos" :key="index">
                <video
                    :id="'player-'+index"
                    controls
                    muted
                    :class="'cld-video-player cld-video-player-skin-dark data-cld-public-id='+video"
                />
            </div>
            <!-- <div v-for="(code, idx) in codes" :key="`code-${idx}`" >
                <pre><code :id="'code-'+idx" class="html">{{ReadFile(code, idx)}}</code></pre>
            </div> -->
            <div>
                <pre><code class="html"><p>Hello, world!</p></code></pre>
            </div>
            <div>
                <pre><code class="javascript">var test; console.log(1+3);</code></pre>
            </div>
            <div>
                <pre><code class="css">body #carbonads .carbon-img { margin-bottom: 10px; }</code></pre>
            </div>
        </div>
        <div class="slider slider-nav">
            
            <div v-for="image in images" :key="image.id">
                <img :src="image">
            </div>
            <div v-for="(video, index) in videos" :key="index">
                <video
                    :id="'prev-'+index"
                    controls
                    muted
                    preload="false"
                    :class="'cld-video-player cld-video-player-skin-dark data-cld-public-id='+video"
                />
            </div>
            <div>
                <pre><code class="html"><p>Hello, world!</p></code></pre>
            </div>
            <div>
                <pre><code class="javascript">var test; console.log(1+3);</code></pre>
            </div>
            <div>
                <pre><code class="css">#carbonads .carbon-img { margin-bottom: 10px; }</code></pre>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HelloWorld",
    props: {
        cycle: Boolean, // 
        smooth : Boolean // Smooth Continuous slide or not
    },
    data() {
        return {
            images: this.$store.state.image_lists,
            videos: this.$store.state.video_lists,
            codes: this.$store.state.codes,
        };
    },
    mounted() {
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: ".slider-nav",
            dots: true,
            fade: !this.smooth,
            infinite: this.cycle
        });
        $(".slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            centerMode: this.cycle,
            focusOnSelect: true,
            infinite: this.cycle
        });
        // On before slide change
        $('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var slides = slick.slides;
            // console.log(slick.$slides);
            var $before = $('.slider-for .slick-slide:nth-child('+(currentSlide)+') video');
            // console.log($before);
        });
        // On swipe event
        // $('.slider-for').on('swipe', function(event, slick, direction){
        //     console.log(direction, slick);
        //     // left
        // });

        // Adaptive Streaming
        var cld = cloudinary.Cloudinary.new({ cloud_name: "miki-cloudinary" });
        // var cld = cloudinary.Cloudinary.new({ cloud_name: "cloud" });

        var player = [];
        var prev = [];
        for (var i = 0; i < this.videos.length; i++) {
            player[i] = cld.videoPlayer("player-" + i);
            player[i].source(this.videos[i], { sourceTypes: ["hls"] }).stop();

            prev[i] = cld.videoPlayer("prev-" + i);
            prev[i].source(this.videos[i], { sourceTypes: ["hls"] }).stop();
        }

        // Display Html/Css/Javascript code

        // function ReadFile(url, index) {
        //     $.get(url, function(html_string) {
        //         var element = $('.slider-nav .slick-list .slick-track').find('code')[index];
        //         $('#code-'+index).text(html_string);
        //         $('#codeprev-'+index).text(html_string);
        //     },'html');
        // }
        // for(var i = 0; i < this.codes.length; i++)
        // {
        //     ReadFile(this.codes[i], i);
        //     ReadFile(this.codes[i], i);
        // }        
    },
    methods: {
        // ReadFile: function(url, id) {
        //     $.get(url, function(html_string) { 
        //         $('#code-'+id).text(html_string);
        //         $('#codeprev-'+id).text(html_string);
        //         $('pre code').each(function(i, block) {
        //             console.log('aa');
        //             hljs.highlightBlock(block);
        //         });
        //     },'html');
        // }
    }
};
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
