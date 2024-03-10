"use script";

// ナビゲーション
// ハンバーガーメニュー
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });

  burger.classList.toggle("toggle");
});

// ハンバーガーメニュー展開
$(function () {
  $(burger).click(function () {
    $("body").toggleClass("active");
  });
});


//スライド画像設定
$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
});

// フード画像がふわっと出てくる設定
$(function () {
  $(window).scroll(function () {
    $(".scroll-block").each(function () {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > blockPosition - windowHeight + 150) {
        $(this).addClass("blockIn");
      }
    });
  });
});
