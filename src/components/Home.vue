<script>
export default {
  
  data() {
    return {
      words: ["Student", "Designer", "Java Developer"],
      currentWordIndex: 0,
      isMobileNavActive: false,
      currentLanguage: 'English'
    };
  },
  mounted() {
    this.changeWord();
  },
  methods: {
    changeWord() {
      setInterval(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }, 2000); // меняем слово каждые 2 секунды
    },
    toggleMobileNav() {
            this.isMobileNavActive = !this.isMobileNavActive;
    },
    // switchLang() {
    //   // Меняем язык
    //   // this.currentLanguage = this.currentLanguage === 'English' ? 'Русский' : 'English';
    //   // this.locale.value = this.currentLanguage === 'English' ? 'ru' : 'en';
    //   // this.toggleLanguage
    //   console.log(locale);
    //   // Здесь вы можете добавить логику для перевода вашего контента на выбранный язык
    // }
  },
  props: {
    diplomaSTEP2: String,
    IELTS: String,
    TarotApp: String,
    InnoSchedule: String,
    StoryMarks: String,
    diplomaSTEP1: String,
    STEP: String,
    ELAB: String,
    bebras: String,
    innobot: String,
    toogleLanguage: Object
  }
}
</script>



<template>
   <!-- ======= Mobile nav toggle button ======= -->
   <i class="bi bi-list mobile-nav-toggle d-lg-none" @click="toggleMobileNav"></i>
  <ul v-if="isMobileNavActive" class="mobile-nav-menu">
      <li><a href="#hero" class="nav-link scrollto active">{{$t('sections.hero.title')}}</a></li>
      <li><a href="#about" class="nav-link scrollto">{{$t('sections.about.title')}}</a></li>
      <li><a href="#resume" class="nav-link scrollto">{{$t('sections.resume.title')}}</a></li>
      <li><a href="#portfolio" class="nav-link scrollto">{{$t('sections.portfolio.title')}}</a></li>
      <li><a @click="toogleLanguage" class="nav-link"><span>{{ $t('language') }}</span></a></li>
  </ul>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
    <ul>
      <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>{{$t('sections.hero.title')}}</span></a></li>
      <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>{{$t('sections.about.title')}}</span></a></li>
      <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>{{$t('sections.resume.title')}}</span></a></li>
      <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>{{$t('sections.portfolio.title')}}</span></a></li>
      <!-- Добавляем кнопку для смены языка -->
      <li><a @click="toogleLanguage" class="nav-link"><i class="bx bx-globe"></i> <span>{{ $t('language') }}</span></a></li>
    </ul>
  </nav><!-- .nav-menu -->

  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>{{ $t("name") }}</h1>
      <p>I'm <span class="typed">{{ words[currentWordIndex] }}</span></p>
      <div class="social-links">
        <a href="https://www.instagram.com/venikhl/" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="https://t.me/venikhl" class="telegram"><i class="bx bxl-telegram"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

<div class="section-title">
  <h2>{{$t('sections.about.title')}}</h2>
  <p>{{$t('sections.about.content')}}</p>
</div>

<div class="row">
  <div class="col-lg-4">
    <img src="../assets/img/profile-img.png" class="img-fluid" alt="">
  </div>
  <div class="col-lg-8 pt-4 pt-lg-0 content">
    <h3>{{$t('sections.additionalInfo.ui_ux_designer')}}, {{$t('sections.additionalInfo.java_web_developer')}}.</h3>
    <p class="fst-italic">{{$t('sections.additionalInfo.current_course')}}</p>
    <div class="row">
      <div class="col-lg-6">
        <ul>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Birthday')}}:</strong> <span>{{$t('sections.about.BirthdayContent')}}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Phone')}}:</strong> <span>{{$t('contact.phone')}}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.City')}}:</strong> <span>{{$t('contact.city')}}</span></li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Age')}}:</strong> <span>19</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Degree')}}:</strong> <span>{{$t('education.degree')}}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Email')}}:</strong> <span>{{$t('contact.email')}}</span></li>
          <li><i class="bi bi-chevron-right"></i> <strong>{{$t('sections.about.Freelance')}}:</strong> <span>{{$t('sections.about.FreelanceContent')}}</span></li>
        </ul>
      </div>
    </div>
    <p>{{$t('sections.about.content2')}}</p>
  </div>
</div>


      </div>
    </section><!-- End About Section -->

    <!-- ======= Resume Section ======= -->
<section id="resume" class="resume">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>{{ $t('sections.resume.title') }}</h2>
      <p>{{ $t('sections.resume.content') }}</p>
    </div>

    <div class="row">
  <div class="col-lg-6">
    <h3 class="resume-title">{{$t('sections.summary.title')}}</h3>
    <div class="resume-item pb-0">
      <h4>{{$t('name')}}</h4>
      <p><em>{{$t('sections.summary.content')}}</em></p>
      <ul>
        <li>{{$t('contact.city')}}</li>
        <li>{{$t('contact.phone')}}</li>
        <li>{{$t('contact.email')}}</li>
      </ul>
    </div>
    <h3 class="resume-title">{{$t('education.degree')}}</h3>
    <div class="resume-item">
      <h4>{{$t('education.years.university')}}</h4>
      <p><em>{{$t('education.university')}}, {{$t('education.location')}}</em></p>
      <p>{{ $t('education.faculty') }}</p>
      <p>{{ $t('education.specialty') }}</p>
      <p>{{ $t('education.field_of_study') }}</p>
    </div>
  </div>
  <div class="col-lg-6">
    <h3 class="resume-title">{{$t('education.title')}}</h3>
    <div class="resume-item">
      <h4>{{$t('education.certifications[0]')}}</h4>
      <h5>{{ $t('education.years.itstep') }}</h5>
      <p><em>{{$t('sections.summary.city')}}</em></p>
      <p><strong>{{$t('sections.about.content2')}}</strong></p>
      <ul class="skills-list">
        <li>{{$t('skills[0]')}}</li>
        <li>{{$t('skills[1]')}}</li>
        <li>{{$t('skills[2]')}}</li>
        <li>{{$t('skills[3]')}}</li>
        <li>{{$t('skills[4]')}}</li>
        <li>{{$t('skills[5]')}}</li>
        <li>{{$t('skills[6]')}}</li>
        <li>{{$t('skills[7]')}}</li>
        <li>{{$t('skills[8]')}}</li>
        <li>{{$t('skills[9]')}}</li>
        <li>{{$t('skills[10]')}}</li>
        <li>{{$t('skills[11]')}}</li>
      </ul>
      <p>{{$t('education.afterspeach')}}</p>
    </div>
  </div>
</div>


  </div>
</section><!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>{{ $t('sections.portfolio.title') }}</h2>
          <p>{{ $t('sections.portfolio.content') }}</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">{{ $t('sections.portfolio.all') }}</li>
              <li data-filter=".filter-app">{{ $t('sections.portfolio.work') }}</li>
              <li data-filter=".filter-diploma">{{ $t('sections.portfolio.diploma') }}</li>
              <li data-filter=".filter-web">{{ $t('sections.portfolio.web') }}</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img :src="innobot" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.InnoScheduleBot') }}</h4>
                <p>{{ $t('sections.portfolio.AppOne') }}</p>
                <div class="portfolio-links">
                  <a :href="innobot" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1" target="_blank"><i class="bx bx-plus"></i></a>
                  <a href="https://t.me/Inno_schedule_bot" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>


          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="diplomaSTEP1" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.itstepDiploma') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="diplomaSTEP1" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 1" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="ELAB" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.elabDiploma') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="ELAB" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 1" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="STEP" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.itstepHakatonDiploma') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="STEP" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 1" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="bebras" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.bebrasDiploma') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="bebras" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 1" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="diplomaSTEP2" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.itstepCourses') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="diplomaSTEP2" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 2" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-diploma">
            <div class="portfolio-wrap">
              <img :src="IELTS" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.IELTSDiploma') }}</h4>
                <p>{{ $t('sections.portfolio.DiplomaOne') }}</p>
                <div class="portfolio-links">
                  <a :href="IELTS" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Diploma 2" target="_blank"><i class="bx bx-plus"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img :src="TarotApp" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.TarotApp') }}</h4>
                <p>{{ $t('sections.portfolio.AppOne') }}</p>
                <div class="portfolio-links">
                  <a :href="TarotApp" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3" target="_blank"><i class="bx bx-plus"></i></a>
                  <a href="https://github.com/Venikhl/Tarot" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img :src="InnoSchedule" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.InnoSchedule') }}</h4>
                <p>{{ $t('sections.portfolio.WebOne') }}</p>
                <div class="portfolio-links">
                  <a :href="InnoSchedule" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3" target="_blank"><i class="bx bx-plus"></i></a>
                  <a href="https://master--flourishing-kataifi-ec68d1.netlify.app" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img :src="StoryMarks" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{ $t('sections.portfolio.StryMarks') }}</h4>
                <p>{{ $t('sections.portfolio.WebOne') }}</p>
                <div class="portfolio-links">
                  <a :href="StoryMarks" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3" target="_blank"><i class="bx bx-plus"></i></a>
                  <a href="https://disk.yandex.ru/i/rccSZRtVxLEYKQ" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

  </main><!-- End #main -->


</template>