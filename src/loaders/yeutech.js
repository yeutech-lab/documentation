module.exports = `
<style type="text/css"}>
body {
  background: -webkit-gradient(linear, left top, left bottom, from(#B31255), to(#7B0A67));
  background: -webkit-linear-gradient(#B31255, #7B0A67);
  background: -o-linear-gradient(#B31255, #7B0A67);
  background: linear-gradient(#B31255, #7B0A67);
  height: 100vh;
  width: 100vw;
}
.pre-loader-container {
  height: 100vh;
  width: 100vw;
}
.pre-loader {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  margin-top: -145.5px;
  margin-left: -167.5px;
}
.loader-rotation {
  -webkit-animation: rotation 3s infinite linear;
          animation: rotation 3s infinite linear;
          -webkit-animation-fill-mode: both;
                  animation-fill-mode: both;
          -webkit-transform-origin: center;
              -ms-transform-origin: center;
                  transform-origin: center;

}
  
@-webkit-keyframes rotation {
  0% {
            -webkit-transform: rotate(0deg) scale(1.5);
                    transform: rotate(0deg) scale(1.5);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1);
            transform: rotate(180deg) scale(1)
  }
  100% {
            -webkit-transform: rotate(359deg) scale(1.5);
                    transform: rotate(359deg) scale(1.5);
  }
}
  
@keyframes rotation {
  0% {
            -webkit-transform: rotate(0deg) scale(1.5);
                    transform: rotate(0deg) scale(1.5);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(1);
            transform: rotate(180deg) scale(1)
  }
  100% {
            -webkit-transform: rotate(359deg) scale(1.5);
                    transform: rotate(359deg) scale(1.5);
  }
}
</style>
<div class="pre-loader-container">
  <svg class="pre-loader loader-rotation" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="1280px" height="800px" viewBox="0 0 1280 800" enable-background="new 0 0 1280 800" xml:space="preserve">
    <polyline class="stroke" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
          566.922,371 616,371 640,328.5 664.75,371 713,371 640.573,414.027 "/>
    <polyline class="stroke" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
          713.109,371 688.57,413.503 713.376,455.537 664.195,455.721 640.07,497.508 640.657,414.188 "/>
    <polyline class="stroke" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
          639.878,497.473 615.339,454.969 566.533,455.434 590.965,412.752 566.838,370.965 640.573,414.027 "/>
  </svg>
</div>
`;
