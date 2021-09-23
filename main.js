const PlAYER_STORAGE_KEY = "F8_PLAYER";

const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const cd = $('.cd')
const header = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const a = $('.notification')
const download = $('.btn-download')
const fb = $('.link')
const b = $('.btn-heart')
const heart =$('.btn-heart i')
console.log(heart)


const app = {
    vitrihientai :0,
    isPlaying : false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
          name: "Cưới Thôi",
          singer: "Masew, Masiu, B Ray, TAP",
          path: "https://aredir.nixcdn.com/NhacCuaTui1021/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3?st=3H_5b0JwuzGIN_hItuRY2Q&e=1632418718",
          image:
            "https://avatar-nct.nixcdn.com/song/2021/09/09/f/c/f/d/1631181753902.jpg"
        },
        {
          name: "Phải Giữ Em Thế Nào",
          singer: "Mr. Siro",
          path:
          "https://aredir.nixcdn.com/NhacCuaTui1020/PhaiGiuEmTheNao-MrSiro-7067288.mp3?st=ATxmiWOwKIFX4JXeFAFuvg&e=1632418967",
          image: "https://avatar-nct.nixcdn.com/song/2021/08/13/7/b/0/e/1628844459026.jpg"
        },
        {
          name: "Họ Yêu Ai Mất Rồi",
          singer: "Doãn Hiếu",
          path: "https://aredir.nixcdn.com/NhacCuaTui1014/HoYeuAiMatRoiRemix-DoanHieu-7004117.mp3?st=py0xe5cWg4nYG5EeFGn5eQ&e=1632419197",
          image:
            "https://avatar-nct.nixcdn.com/song/2021/04/13/2/d/6/a/1618312888559.jpg"
        },
        {
          name: "Nụ Cười 18 20",
          singer: "Doãn Hiếu",
          path: "https://aredir.nixcdn.com/NhacCuaTui1012/NuCuoi1820LofiVersion-DoanHieu-6963912.mp3?st=q80rtE59DYNstCyGFG1dig&e=1632419339",
          image:
            "https://avatar-nct.nixcdn.com/song/2021/03/12/e/2/9/e/1615512897980.jpg"
        },
        {
            name: "Hoa Nở Vô Thường",
            singer: "Hoài Lâm",
            path: "https://aredir.nixcdn.com/NhacCuaTui1017/HoaNoVoThuong-HoaiLam-7035558.mp3?st=yBg6Az5fvfqFhsdWBOu0nQ&e=1632241126",
            image:
              "https://avatar-nct.nixcdn.com/song/2021/06/18/d/c/e/c/1624002360534.jpg"
        },
        {
            name: "Hoa Nở Không Màu",
            singer: "Hoài Lâm",
            path: "https://aredir.nixcdn.com/NhacCuaTui999/HoaNoKhongMau1-HoaiLam-6281704.mp3?st=su5VUYInqR2eqzPToAR5UQ&e=1632241325",
            image:
              "https://avatar-nct.nixcdn.com/singer/avatar/2020/05/27/6/9/5/0/1590568952971.jpg"
        },
        {
            name: "Bản Nhạc Buồn",
            singer: "B Ray",
            path: "https://f9-stream.nixcdn.com/NhacCuaTui1022/1BanNhacBuon-BRay-7090779.mp3?st=ADEHxUmYtgjMgLBdOw7Sow&e=1632419657",
            image:
              "https://avatar-nct.nixcdn.com/song/2021/09/17/5/a/b/4/1631868454393.jpg"
        },
        {
            name: "Đắp Mộ Cuộc Tình",
            singer: "Đan Nguyên",
            path: "https://aredir.nixcdn.com/NhacCuaTui829/DapMoCuocTinh-DanNguyen-2460868.mp3?st=ylMOqyH1xDiFk07ekYxhVQ&e=1632419984",
            image:
              "https://avatar-nct.nixcdn.com/singer/avatar/2017/03/24/8/2/a/2/1490321288901.jpg"
        },
        {
          name: "Trộm Nhìn Nhau",
          singer: "Như Quỳnh",
          path: "https://aredir.nixcdn.com/NhacCuaTui829/DapMoCuocTinh-DanNguyen-2460868.mp3?st=ylMOqyH1xDiFk07ekYxhVQ&e=1632419984",
          image:
          "https://avatar-nct.nixcdn.com/song/2020/10/28/e/1/7/4/1603878026196.jpg"
        },
        {
        name: "Thê Lương ",
        singer: "Phúc Chinh",
        path: "https://aredir.nixcdn.com/NhacCuaTui1012/TheLuongCukakRemix-PhucChinh-6971147.mp3?st=NfIPfjdcs9FAFr87BcI_8A&e=1632420325",
        image:
          "https://avatar-nct.nixcdn.com/song/2021/03/12/e/2/9/e/1615555786073.jpg"
        },
          
      ],
   
    render : function(){
       const htmls = this.songs.map(function(song,index){
           return `
           <div class="song ${index === app.vitrihientai ? "active" : ''}" data-index="${index}"> 
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                  <i class="ti-more"></i>
                </div>
              </div>
        </div>
           `
       }) 
       playlist.innerHTML = htmls.join('')
       
    },
     
    dinhnghiathuoctinh : function(){
       Object.defineProperty(this,'baihathientai',{
         get : function(){
           return this.songs[this.vitrihientai]
         }
       })
    },
    xulysukien :function(){
      const cdWidth = cd.offsetWidth
      // Xử lý CD quay / dừng
       const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
        duration: 10000, // 10 seconds
       iterations: Infinity
       });
       cdThumbAnimate.pause();

       
      // Xử lý phóng to / thu nhỏ CD
      document.onscroll = function(){
          
        const scrollTop = document.documentElement.scrollTop
        const newCd = cdWidth -scrollTop 
        cd.style.width = newCd 
        if (newCd >0) {
            cd.style.width = newCd + 'px'
        }else{
            cd.style.width =   0
        }
        cd.style.opacity = newCd /cdWidth
      }

      // Xử lý khi click play

      playBtn.onclick = function(){
        if (app.isPlaying){
        audio.pause()
        }
        else{
        audio.play()
        }
      }
      
      // khi bam vao facebook
      fb.onclick = function(){
       fb.setAttribute('href','https://www.facebook.com/duc11022000')
       
      }
      //Khi song được play
      audio.onplay = function(){
        app.isPlaying = true
        player.classList.add('playing')
        cdThumbAnimate.play()

      }
          // Khi song bị pause
      audio.onpause = function(){
        app.isPlaying = false
        player.classList.remove('playing')
        cdThumbAnimate.pause()
      }
         // khi random
         randomBtn.onclick = function(){
           app.isRandom = !app.isRandom
           randomBtn.classList.toggle('active')
           repeatBtn.classList.remove('active')
         }
         // lap bai hat 
         repeatBtn.onclick = function(){
           app.isRepeat = ! app.isRepeat
           randomBtn.classList.remove('active')
           repeatBtn.classList.toggle('active')

         }
          // download
          download.onclick = function(){
             var x = audio.src 
             download.setAttribute('href',`${x}`)
             audio.pause()
          
          }
      
         // Khi bai hat end
         audio.onended = function(){
           if (app.isRepeat){
              audio.play()
           }else{
            nextBtn.click()

           }
         }
         // lắng nghe click
         playlist.onclick = function(e){
          const songNode = e.target.closest(".song:not(.active)");
          //khi click vao bai hat
           if (songNode){
            app.vitrihientai = Number(songNode.dataset.index);
            app.taibhhientai();
            app.render();
            audio.play();

           }

           // Khi click vao cai dat
           if (e.target.closest('.option')){
             a.style.display = "block"
             audio.pause()
             
            } else {
            a.style.display = "none"
           }

         }
         // khi click vao thong bao
         a.onclick = function(){
          a.style.display = "none"

         }
         // khi tha tim

         b.onclick = function(){
         heart.classList.toggle('heart-active')
         heart.style.display = 'block'
         }
      
      // Khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function(){
        if (audio.duration) {
          const progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          progress.value = progressPercent;
        }
      }

      // Xử lý khi tua song
      progress.onchange = function(e){
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      }
      // khi next sang baihat
      nextBtn.onclick = function(){
        if (app.isRandom){
          app.playRandom()
        }else{
          app.chuyenbai()

        }
        audio.play()
        app.render()
        app.scrollActive()
      }
      // khi luibaihat

      prevBtn.onclick = function(){
          if (app.isRandom){
            app.playRandom()
          }else{
            app.luibai()
  
          }
        audio.play()
        app.render()

      }
    },
    scrollActive : function(){

      setTimeout(function(){
          $('.song.active').scrollIntoView({
            behavior : 'smooth',
            block : 'nearest'
          })
      },200)
    },
    

    taibhhientai : function(){
  
      header.textContent = this.baihathientai.name
      cdThumb.style.backgroundImage = `url('${this.baihathientai.image}')`
      audio.src = this.baihathientai.path
    },
    chuyenbai : function(){
       this.vitrihientai++
       if (this.vitrihientai >= this.songs.length){
         app.vitrihientai = 0
       }
       this.taibhhientai()
    },
    luibai : function(){
      this.vitrihientai--
      if (this.vitrihientai < 0){
        app.vitrihientai = this.songs.length-1
      }
      this.taibhhientai()
   },
   playRandom : function(){
     var newIndex;
     do {
      newIndex = Math.floor(Math.random() * this.songs.length)

     } while(newIndex === this.vitrihientai)
      app.vitrihientai = newIndex
      app.taibhhientai()

   },
    start : function(){
        // Định nghĩa các thuộc tính cho object
     this.dinhnghiathuoctinh()



          // Lắng nghe / xử lý các sự kiện (DOM events)
     this.xulysukien()


         // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
     this.taibhhientai()

     
   



     // Render playlist
     this.render()
    }
}

app.start()
