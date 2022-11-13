let btn_toggle = document.querySelector(".toggle");
let i = document.querySelector(".toggle i");
let inpt = document.querySelector("#inp");
let inptext = document.querySelector("#text");
let req = document.getElementById("req");
window.onload = function () {
  $(".section1").css("width", "100%");
  setTimeout(() => {
    $(".section1").css("height", "100vh");
  }, 2000);
};
function start_alrt1() {
  $("#alt1").css({
    width: "90%",
    height: "50px",
    padding: "10px",
    border: "1px solid transparent",
  });
}
function end_alrt1() {
  $("#alt1").css({
    height: "0",
    padding: "0",
    border: "0px ",
  });
}
function start_alrt2() {
  $("#alt2").css({
    width: "90%",
    height: "50px",
    padding: "10px",
    border: "1px solid transparent",
  });
}
function end_alrt2() {
  $("#alt2").css({
    padding: "0",
    border: "0px ",
    height: "0",
  });
}

$(document).ready(function () {
  $(".toggle").click(function () {
    if (i.classList == "fa-solid fa-eye") {
      i.classList = "fa-solid fa-eye-slash";
      inpt.setAttribute("type", "text");
    } else {
      i.classList = "fa-solid fa-eye";
      inpt.setAttribute("type", "password");
    }
  });
  $("#btn").click(function () {
    if (inptext.value == "") {
      start_alrt1();
    } else {
      end_alrt1();
    }
    if (inpt.value == "") {
      start_alrt2();
    } else {
      end_alrt2();
    }
  });
  $(".div_pass").mouseleave(function () {
    if (inpt.value != "" && inptext.value != "") {
      if (x1 == 1 && x2 == 1 && x3 == 1 && x4 == 1 && x5 == 1) {
        $("#btn").css("opacity", "1");
        $("#btn").css("cursor", "pointer");
        $("#btn").addClass("cli");
      } else {
        $("#btn").css("opacity", "0.6");
        $("#btn").css("cursor", " not-allowed");
        $("#btn").removeClass("cli");
      }
    } else {
      $("#btn").css("opacity", "0.6");
      $("#btn").css("cursor", " not-allowed");
      $("#btn").removeClass("cli");
    }
  });
  $(".div_user").mouseleave(function () {
    if (inpt.value != "" && inptext.value != "") {
      if (x1 == 1 && x2 == 1 && x3 == 1 && x4 == 1 && x5 == 1) {
        $("#btn").css("opacity", "1");
        $("#btn").css("cursor", "pointer");
        $("#btn").addClass("cli");
      } else {
        $("#btn").css("opacity", "0.6");
        $("#btn").css("cursor", " not-allowed");
        $("#btn").removeClass("cli");
      }
    } else {
      $("#btn").css("opacity", "0.6");
      $("#btn").css("cursor", " not-allowed");
      $("#btn").removeClass("cli");
    }

    $("#btn").click(function () {
      if (inpt.value != "" && inptext.value != "") {
        if (x1 == 1 && x2 == 1 && x3 == 1 && x4 == 1 && x5 == 1) {
          $(".load ").css({
            opacity: "1",
            zIndex: "1111",
          });
          setTimeout(() => {
            $(".load ").css({
              opacity: "0",
              zIndex: "-1",
            });
            $(".section1").css("display", "none");
            $(".section2").css("display", "flex");
          }, 2500);
        }
      }
    });
  });
   $(".load ").css({ cursor: "progress" });
  $(".load ").mouseenter(function () {
   
  });
});
