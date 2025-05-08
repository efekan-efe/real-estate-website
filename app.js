const cardData = [
  {
    imgBadge: "Rezidans,Deniz Manzaralı",
    imgSrc: "/images/card_1.jpg",
    price: "490.000",
    title: "Altan Vreek Harbour",
    location: "Creek Harbour",
    date: "Proje Tamamlanma Tarihi: 2029",
    desc: "Dubai’nin kalbinde, geleceğin yaşam merkezi olarak konumlanan Altan Creek Harbour projesinde, yatırım ve yaşam fırsatını bir arada sunan…",
    bed: "1",
    shower: "1",
    car: "1",
    measure: "70",
    personImg: "/images/ahmet_bayram.jpg",
    personName: "Ahmet Bayram",
  },
  {
    imgBadge: "Rezidans,Deniz Manzaralı",
    imgSrc: "/images/card_2.jpg",
    price: "590.000",
    title: "Chelsea Residences by DAMAC",
    location: "Dubai",
    date: "Proje Tamamlanma Tarihi: 2029",
    desc: "Dubai’nin göz alıcı silüetinin tam kalbinde, lüks yaşamın ve prestijin simgesi olmaya aday bir proje: CHELSEA Residences by Damac…",
    bed: "1",
    shower: "1",
    car: "1",
    measure: "72",
    personImg: "/images/alena_bayram.jpg",
    personName: "Alena Bayram",
  },
  {
    imgBadge: "Rezidans",
    imgSrc: "/images/card_3.jpg",
    price: "355.000",
    title: "Skyhills Astra Dubai",
    location: "Dubai",
    date: "Proje Tamamlanma Tarihi: 2027",
    desc: "Dubai’nin en prestijli yeni projelerinden biri olan Skyhills Astra Dubai’de, 89 m² büyüklüğünde, 1 yatak odalı ve 2 banyolu modern bir daire…",
    bed: "1",
    shower: "2",
    car: "1",
    measure: "89",
    personImg: "/images/ahmet_bayram.jpg",
    personName: "Ahmet Bayram",
  },
  {
    imgBadge: "Rezidans,Deniz Manzaralı",
    imgSrc: "/images/card_4.jpg",
    price: "675.000",
    title: "The Mural Beyond",
    location: "Dubai",
    date: "-",
    desc: "Deniz kıyısında hayat yeniden tanımlanıyor: The Mural Beyond, denizle iç içe, nefes kesici bir yaşamın kapılarını aralıyor…",
    bed: "1",
    shower: "2",
    car: "1",
    measure: "73",
    personImg: "/images/alena_bayram.jpg",
    personName: "Alena Bayram",
  },
  {
    imgBadge: "Villa",
    imgSrc: "/images/card_5.jpg",
    price: "3.575.000",
    title: "Palace Villas Ostra",
    location: "Dubai",
    date: "-",
    desc: "Dubai’nin en prestijli projelerinden biri olan Palace Villas Ostra, lüks ve zarafeti bir araya getiren eşsiz bir yaşam alanı sunuyor…",
    bed: "4",
    shower: "8",
    car: "1",
    measure: "843",
    personImg: "/images/alena_bayram.jpg",
    personName: "Alena Bayram",
  },
  {
    imgBadge: "Rezidans",
    imgSrc: "/images/card_6.jpg",
    price: "620.000",
    title: "Marriott Residences JLT",
    location: "Dubai",
    date: "Proje Tamamlanma Tarihi: 2027",
    desc: "Dubai’nin en prestijli bölgelerinden Jumeirah Lakes Towers’da yer alan Marriott Residences JLT projesi size sıra dışı bir yaşam sunuyor…",
    bed: "1",
    shower: "1",
    car: "1",
    measure: "82",
    personImg: "/images/ahmet_bayram.jpg",
    personName: "Ahmet Bayram",
  },
];

const propertyCards = document.querySelector(".propertyCards");

propertyCards.innerHTML = cardData
  .map((card, index) => {
    return `
    <div key=${index} class="w-full max-w-[430px] shadow-lg">
        <div class="relative w-full group">
          <div class="bg-black bg-opacity-35 absolute top-0 left-0 w-full h-full group-hover:bg-opacity-0 transition-all"></div>
          <div class="bg-gray-300 rounded-lg p-1 pb-1.5 absolute top-2 left-2">
            <p class="text-black text-md font-semibold">${card.imgBadge}</p>
          </div>
          <img src=${card.imgSrc} alt="card_1" />
          <div class="absolute bottom-2 left-2">
            <p class="text-white text-3xl font-bold">$ ${card.price}</p>
          </div>
        </div>

        <div class="p-5 pt-2">
          <h3 class="text-xl font-bold mb-3 text-left">${card.title}</h3>
          <ul>
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-4" src="/images/location_black.png" alt="location_black" />
              <p class="text-lg pb-1">${card.location}</p>
            </li>
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-4" src="/images/calendar.png" alt="calendar" />
              <p class="text-lg pb-1">${card.date}</p>
            </li>
          </ul>
          <p class="text-md min-h-[72px] text-left">${card.desc}</p>

          <ul class="flex justify-start items-center gap-6">
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-6" src="/images/bed.png" alt="bed" />
              <p class="text-xl font-semibold pb-1 text-gray-500">${card.bed}</p>
            </li>
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-5" src="/images/shower.png" alt="shower" />
              <p class="text-xl font-semibold pb-1 text-gray-500">${card.shower}</p>
            </li>
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-5" src="/images/car.png" alt="car" />
              <p class="text-xl font-semibold pb-1 text-gray-500">${card.car}</p>
            </li>
            <li class="flex justify-start items-center gap-2">
              <img class="w-full max-w-5" src="/images/measure.png" alt="measure" />
              <p class="text-xl font-semibold pb-1 text-gray-500">${card.measure}</p>
            </li>
          </ul>

          <hr />

          <div class="flex justify-between items-center pt-5">
            <div class="flex justify-start items-center gap-3">
              <div class="rounded-full overflow-hidden max-w-10 max-h-10">
                <img class="w-full h-full" src=${card.personImg} alt="ahmet_bayram" />
              </div>
              <p class="text-lg pb-1">${card.personName}</p>
            </div>

            <button class="rounded-lg px-6 py-1 pb-2.5 bg-black text-white text-lg font-semibold">Detay</button>
          </div>
        </div>
      </div>
    `;
  })
  .join("");

/* Resim Geçiş Kodu */

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("comparison-slider");
  const sliderHandle = slider.querySelector(".slider-handle");
  let isDragging = false;

  // Set initial position
  updateSliderPosition(50);

  // Mouse events
  sliderHandle.addEventListener("mousedown", startDragging);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);

  // Touch events
  sliderHandle.addEventListener("touchstart", startDragging);
  document.addEventListener("touchmove", drag);
  document.addEventListener("touchend", stopDragging);

  function startDragging(e) {
    e.preventDefault();
    isDragging = true;
  }

  function stopDragging() {
    isDragging = false;
  }

  function drag(e) {
    if (!isDragging) return;

    let clientX;
    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const rect = slider.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;

    // Clamp position between 0 and 100
    const clampedPosition = Math.max(0, Math.min(100, position));

    updateSliderPosition(clampedPosition);
  }

  function updateSliderPosition(position) {
    slider.style.setProperty("--position", `${position}%`);
  }
});

/* Blog Kartları */

const blogCardData = [
  {
    img: "/images/blog_1.jpg",
    title: "Dubai’de Off-Plan Projeler vs. Hazır Konutlar",
    desc: "Dubai, son yıllarda hızla büyüyen ve yatırımcılar için büyük fırsatlar sunan bir emlak piyasasına sahip. Özellikle off-plan projeler (henüz inşaat halinde, plan aşamasındaki mülkler) ve",
    link: "/",
    date: "25 Nisan 2025",
    comment: "Yorum yapılmamış",
  },
  {
    img: "/images/blog_2.jpg",
    title: "Dubai Creek Tower: Yükselen Yeni Yaşam Merkezi",
    desc: "Dubai’de yepyeni bir bölge ufukta yükseliyor. Dubai Creek Tower ve onun çevresinde gelişen yeni yaşam alanı, yatırımcılar, Dubai’de yeni bir hayat kurmak isteyenler ve",
    link: "/",
    date: "11 Nisan 2025",
    comment: "Yorum yapılmamış",
  },
  {
    img: "/images/blog_3.jpg",
    title: "Dubai’de Ev Kiralama ve Merak Edilenler",
    desc: "Dubai, son yıllarda hem yatırım hem de yaşam için dünyanın en cazip şehirlerinden biri haline gelmiştir. Modern altyapısı, güçlü ekonomisi, sıfır gelir vergisi avantajı ve",
    link: "/",
    date: "20 Mart 2025",
    comment: "Yorum yapılmamış",
  },
];

const blogCards = document.querySelector(".blogCards");

blogCards.innerHTML = blogCardData
  .map((card, index) => {
    return `
    <div key=${index} class="max-w-[350px] w-full shadow-lg hover:shadow-xl transition-all">
          <div class="mb-5 relative w-full group">
            <img class="w-full" src=${card.img} alt="blog_1" />
            <div class="bg-black bg-opacity-15 absolute top-0 left-0 w-full h-full group-hover:bg-opacity-0 transition-all"></div>
          </div>
          <div class="px-6 mt-5 flex flex-col gap-5 mb-5">
            <h3 class="text-[#2d2d2d] text-2xl font-bold leading-6">${card.title}</h3>
            <p class="text-md text-[#777] font-medium leading-6">
            ${card.desc}
            </p>
            <a class="text-[#d90a0a] font-bold" href=${card.link}>DAHA FAZLASI »</a>
          </div>
          <hr />
          <div class="border-t border-gray-200 flex justify-start items-center gap-2 px-8 py-3 pb-4">
            <p class="text-[#adadad] font-medium">${card.date}</p>
            <div class="w-1 h-1 rounded-full bg-gray-400 translate-y-0.5"></div>
            <p class="text-[#adadad] font-medium">${card.comment}</p>
          </div>
        </div>
    `;
  })
  .join("");

/* Sosyla Medya Kartları */

const socialCardData = [
  {
    img: "/images/social_1.jpg",
    appTitle: "Instagram",
    title: "Golden Visa Dubai",
  },
  {
    img: "/images/social_2.jpg",
    appTitle: "Instagram",
    title: "Dubai Residence",
  },
  {
    img: "/images/social_3.jpg",
    appTitle: "Instagram",
    title: "One By Binghatti",
  },
];

const socialCards = document.querySelector(".socialCards");

socialCards.innerHTML = socialCardData
  .map((card, index) => {
    return `
    <div key=${index} class="w-full max-w-[350px] max-h-[420px] relative overflow-hidden">
          <div class="bg-[linear-gradient(0deg,_#000c21_0%,_#ff010100_22%)] w-full h-full absolute top-0 left-0 z-10"></div>
          <img class="-translate-y-28" src=${card.img} alt="social" />
          <div class="flex flex-col absolute bottom-5 left-5 z-20">
            <p class="text-white font-medium text-xl">${card.appTitle}</p>
            <p class="text-white font-extrabold text-2xl">${card.title}</p>
          </div>
        </div>
    `;
  })
  .join("");
