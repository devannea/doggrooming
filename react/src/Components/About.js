export const About = () => (
  <main>
    <div class="container col-xxl-8 px-4 py-5">
      <h1 class="pb-2 border-bottom">About</h1>
      <div class="row featurette">
        <div class="col-md-6">
          <h2 class="featurette-heading fw-normal lh-1">
            Why I Got Into Grooming
          </h2>
          <p class="lead">
            My experience with dog grooming began with my shih tzu mix, Bubby.
            It was my first time caring for a breed with long hair. Learning how
            to brush her, especially around her face, and clipping her nails did
            not come naturally to me and was quite intimidating at the time. The
            first time I took her to be groomed, I was informed that she was
            very stubborn around having her face touched. I turned to YouTube
            for tutorials and used some cheap dog clippers I bought online to
            groom her myself. Though her haircuts were choppy, she was clean and
            tidy, and that made me happy. This led to me eventually pursuing an
            apprenticeship so that I could learn to groom professionally.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="img-fluid mx-auto rounded-4"
            src="./assets/images/Bubby-pup.PNG"
            width="700"
            height="560"
            alt="Bubby as a puppy"
          />
        </div>
      </div>
      <hr class="featurette-divider my-5" />
      <div class="row featurette">
        <div class="col-md-6 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">Where I Trained</h2>
          <p class="lead">
            I began my apprenticeship in the fall of 2020 at a Petco in Abilene,
            Texas, where I earned my certification. Starting with bathing,
            blow-drying, brushing, nail clipping, and teeth brushing, I
            gradually worked my way up to doing haircuts. My former salon
            manager and coworkers provided a wealth of knowledge and support,
            and my experiences are truly invaluable.
          </p>
        </div>
        <div class="col-md-6 order-md-1">
          <img
            class="img-fluid mx-auto rounded-4"
            src="./assets/images/petco-pic.jpg"
            width="700"
            height="560"
            alt="Devanne working at Petco"
          />
        </div>
      </div>
      <hr class="featurette-divider my-5" />
      <div class="row featurette">
        <div class="col-md-6">
          <h2 class="featurette-heading fw-normal lh-1">
            Post Training Experience
          </h2>
          <p class="lead">
            After I left Abilene and moved to Austin, I started grooming at Pet
            Supplies Plus, a small franchise. With just one other groomer, we
            co-managed the salon. Despite being part of a much smaller team, I
            was able to learn so much from my coworker, who had several years of
            experience. In a smaller salon, we could work at our own pace and
            focus more on the comfort and well-being of the pets in our care
            above all else.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="img-fluid mx-auto rounded-4"
            src="./assets/images/psp-pic.jpeg"
            width="700"
            height="560"
            alt="Devanne working at Pet Supplies Plus"
          />
        </div>
      </div>
      <hr class="featurette-divider my-5" />
      <div class="row featurette">
        <div class="col-md-6 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            Additional Certifications
          </h2>
          <p class="lead">
            Outside of my work in the salon, I've dedicated time to earning
            certifications like the AKC S.A.F.E. Groomer certificate. I've also
            taken courses and attended webinars by industry experts such as Jess
            Rona and Kayla Scott. I'm planning to obtain Barkleigh's Pet
            Professional First Aid/ CPR Certification soon.
          </p>
        </div>
        <div class="col-md-6 order-md-1">
          {/* <embed src="./media/AKC_SAFE_Certificate.pdf" width="500" height="375" type="application/pdf" frameborder="0" allowfullscreen> */}
          <object
            width="100%"
            height="100%"
            type="application/pdf"
            data="./about"
          >
            <p>AKC S.A.F.E. Certificate could not be displayed.</p>
          </object>
        </div>
      </div>
    </div>
  </main>
);
