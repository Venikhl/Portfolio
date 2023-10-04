<script>
export default {
  
  data() {
    return {
      words: ["Student", "Designer", "Java Developer"],
      currentWordIndex: 0
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
    }
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

  }
}
</script>



<template>
   <!-- ======= Mobile nav toggle button ======= -->
  <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
      </ul>
    </nav><!-- .nav-menu -->

  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Pavlov Gleb</h1>
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
          <h2>About</h2>
          <p>Hi! I'm Gleb, a dynamic 18-year-old from Innopolis University. While I've dived deep into programming languages like Java, C++, and Python, I'm also fluent in English and Russian. Let's discuss exciting projects or simply connect to share ideas!</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="../assets/img/profile-img.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer, Java &amp; Web Developer.</h3>
            <p class="fst-italic">
              Currently, I'm navigating my second year at Innopolis University, majoring in Data Science and Artificial Intelligence.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 November 2004</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+7 953 834 12 12</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Russia, Innopolis</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>18</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>g.o.pavlov2019@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              While a significant portion of my day is dedicated to my academic pursuits, it means that a full-time job with a packed schedule isn't the best fit for me right now. However, if there are positions with timings that cater to students like myself, I'm eager and open to opportunities.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Resume Section ======= -->
<section id="resume" class="resume">
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Resume</h2>
      <p>While I might not have traditional work experience, my journey so far has been filled with continuous self-improvement. I've completed numerous courses, honing my skills and ensuring I stay at the cutting edge of my field. Furthermore, I've been a part of several projects, allowing me to apply and test my knowledge in real-world scenarios. Rest assured, I know my craft, and I'm always eager to take on challenges and contribute to new ventures.</p>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <h3 class="resume-title">Sumary</h3>
        <div class="resume-item pb-0">
          <h4>Pavlov Gleb</h4>
          <p><em>I approach every task with enthusiasm and a genuine passion for what I do. Feedback and revisions are always welcome; I see them as opportunities for growth and refinement in my work.</em></p>
          <ul>
            <li>Kazakhstan, Almaty</li>
            <li>+7 953 834 12 12</li>
            <li>g.o.pavlov2019@gmail.com</li>
          </ul>
        </div>
        <h3 class="resume-title">Bachelor's Degree</h3>
        <div class="resume-item">
          <h4>2022 - 2025</h4>
          <p><em>Innopolis Unviersity, Russia, Tatarstan</em></p>
          <p>Faculty: Faculty of Computer and Engineering Sciences</p>
          <p>Specialty: Informatics and Computer Engineering</p>
          <p>Field of Study: Data Analysis and Artificial Intelligence</p>
        </div>
      </div>
      <div class="col-lg-6">
        <h3 class="resume-title">Education</h3>
        <div class="resume-item">
          <h4>ITStep Academy</h4>
          <h5>2018 - 2022</h5>
          <p><em>Kazakhstan, Almaty</em></p>
          <p><strong>I've cultivated a diverse skill set and accumulated a wealth of knowledge in various areas, including:</strong></p>
          <ul class="skills-list">
            <li>Fundamentals of Information Technology</li>
            <li>C Programming</li>
            <li>Object-Oriented Programming (C++)</li>
            <li>Database Theory</li>
            <li>MS SQL Server</li>
            <li>Web Development (HTML5, CSS3, JQuery)</li>
            <li>Game Development (Unity)</li>
            <li>Desktop Application Development (WPF)</li>
            <li>Web Technologies (ASP.NET AJAX)</li>
            <li>UML</li>
            <li>Java</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Frontend Frameworks (Angular, React)</li>
          </ul>
          <p>These areas have not only enriched my understanding but have also allowed me to participate in a wide range of projects and continuously expand my expertise.</p>
        </div>
      </div>
      
    </div>

  </div>
</section><!-- End Resume Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>In this portfolio, you'll find a comprehensive overview of my professional accomplishments, academic achievements, projects, and works.</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Work</li>
              <li data-filter=".filter-diploma">Diploma</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img :src="innobot" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>InnoScheduleBot - Innopolis schedule bot for students.</h4>
                <p>App</p>
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
                <h4>ITStep diploma.</h4>
                <p>Diploma</p>
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
                <h4>ELAB.Asia diploma.</h4>
                <p>Diploma</p>
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
                <h4>ITStep hackathon diploma.</h4>
                <p>Diploma</p>
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
                <h4>BEBRAS diploma.</h4>
                <p>Diploma</p>
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
                <h4>Taken ITStep courses.</h4>
                <p>Diploma</p>
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
                <h4>IELTS diploma.</h4>
                <p>Diploma</p>
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
                <h4>TarotApp - application for fortune telling.</h4>
                <p>App</p>
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
                <h4>InnoSchedule - website for Innopolis students.</h4>
                <p>Web</p>
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
                <h4>StoryMarks - website for saving progress of reading and watching.</h4>
                <p>Web</p>
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