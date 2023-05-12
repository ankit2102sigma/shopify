  <script src="//cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      {%- if section.settings.autoplay %}
      autoplay: { delay: {{ section.settings.delay }} },
      {%- endif -%}
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
