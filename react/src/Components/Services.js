export const Services = () => (
  <main>
    <div class="container px-4 py-5" id="featured-3">
      <h1 class="pb-2 border-bottom">Give Your Dog A Spa Day!</h1>
      <div class="row g-4 py-4 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <h2 class="fs-2">Complete Glow-Up</h2>
          <p>
            This service includes a bath with shampoo & conditioner, a blow dry
            & brush out, and a haircut styled to suit your dog's lifestyle and
            your preferences.
          </p>
          <h3 class="fs-5" id="price">
            Prices Vary
          </h3>
        </div>
        <div class="feature col">
          <h2 class="fs-2">Bubble Bath & Brush</h2>
          <p>
            This service includes a bath with shampoo & conditioner, a blow dry
            & brush out, a face trim, a paw pad shave & feet trim, and a
            sanitary shave.
          </p>
          <h3 class="fs-5" id="price">
            Prices Vary
          </h3>
        </div>
        <div class="feature col">
          <h2 class="fs-2">Mini Glow-Up</h2>
          <p>
            This service includes a fluff dry and brush out (a dog's version of
            a blow out), and a face trim, paw pad shave & feet trim, and a
            sanitary trim.
          </p>
          <h3 class="fs-5" id="price">
            $40
          </h3>
        </div>
      </div>
      <p class="pb-5">
        All services above include ear cleaning, nail clip/ file, paw balm,
        teeth brushing, a spritz of pet cologne, and a bow/ bow tie.
        <br />
        <span id="price">Puppies (4 - 16 weeks) are half price!</span>
      </p>
      <h2 class="fs-2 pb-2 border-bottom">
        A La Carte Services For Extra Pampering
      </h2>
      <ul class="add-ons fs-5">
        <li class="add-on-item">
          Anal Gland Expression <span id="price">$30</span>
          <p class="fs-6">
            Recommended for small breeds, especially if you notice your dog
            scooting or having a fishy smell
          </p>
        </li>
        <li class="add-on-item">
          Flea & Tick Treatment <span id="price">$25</span>
          <p class="fs-6">
            Recommended as a treatment or preventative for fleas & ticks; works
            best when you treat your home/ area your pet spends most of their
            time
          </p>
        </li>
        <li class="add-on-item">
          De-Shedding Upgrade <span id="price">$20</span>
          <p class="fs-6">
            Recommended for double coat & heavy coat breeds; includes a shed
            reducing shampoo & conditioner and extra brushing to remove excess
            coat
          </p>
        </li>
        <li class="add-on-item">
          CBD Oil Shampoo <span id="price">$10</span>
          <p class="fs-6">Recommended for senior dogs and nervous dogs</p>
        </li>
        <li class="add-on-item">
          Blueberry Facial <span id="price">$10</span>
          <p class="fs-6">
            Recommended for dogs that get crusties around their eyes or food
            build up around their mouth
          </p>
        </li>
      </ul>
      <h2 class="fs-2 pt-5 pb-2 border-bottom">
        Touch Up Between Appointments
      </h2>
      <ul class="paw-care fs-5">
        <li class="paw-care-item">
          Paw Care Package <span id="price">$30</span>
          <p class="fs-6">
            Includes paw pad shave, paw trim, paw balm, a nail clip/ file, and a
            spritz of pet cologne
          </p>
        </li>
        <li class="paw-care-item">
          Brush Out <span id="price">$25</span>
          <p class="fs-6">
            Recommended for long coat breeds and shedding dogs, includes a
            complete body brush out and a spritz of pet cologne
          </p>
        </li>
        <li class="paw-care-item">
          Nail Clip/ File <span id="price">$20</span>
        </li>
        <li class="paw-care-item">
          Nail Clip Only <span id="price">$15</span>
        </li>
        <li class="paw-care-item">
          Ear Cleaning Only <span id="price">$10</span>
          <p class="fs-6">Includes ear hair removal if requested</p>
        </li>
      </ul>
      <h2 class="fs-2 pt-5 pb-2 border-bottom">Frequently Asked Questions</h2>
      <div class="accordion pt-3" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What Do I Need For An Appointment? Are Vaccinations Required?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Please be prepared to present proof of a{" "}
              <strong>rabies vaccination</strong> for your pet. A hard copy/
              digital copy of a rabies vaccine certificate or other vet clinic
              document must show the expiration date for the rabies vaccine. A
              rabies tag can be accepted as proof if the pet's name is engraved
              on the tag, otherwise <strong>tags are not acceptable</strong>{" "}
              proof of vaccination. Puppies under 4 months of age are not
              required to have a rabies vaccination.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How Soon Should I Have My Puppy Groomed?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              It is recommended to begin having your puppy groomed{" "}
              <strong>as soon as possible</strong>. Early exposure to grooming
              will help your puppy to be confident during appointments and can
              reduce the probability of stress or fear. It is important to
              inform your groomer that it is your puppy's first time being
              groomed. A slow introduction to loud devices like clippers or the
              nail dremel is imperative for your puppy to have a successful
              session.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How Often Should My Dog Be Groomed?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The time between appointments is determined by the type of style
              you want to achieve and are interested in maintaining. A style
              that is very fluffy and very high maintenance would require more
              frequent visits (generally every 4 weeks) than a style that is
              very short and lower maintenance (every 8 weeks). To maintain a
              long coat style, I recommend brushing once a day, or a very
              thorough brush out once a week. You can book a brush out session
              between grooming appointments if the task is too time consuming.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How To Brush A Dog Correctly (Long/ Curly Coat)
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Brushing dogs with long or curly coats does not come naturally,
              but with the right tools and technique, this time-consuming task
              can become a wonderful bonding opportunity for you and your pet.
              <br />
              <strong>Tools Needed:</strong>
              <ul>
                <li>
                  Long Pin Slicker Brush - ideal for removing any debris built
                  up in the coat and for removing tangles
                </li>
                <li>
                  A Metal Comb - sometimes called a poodle comb or a greyhound
                  comb, depends on the length of the teeth
                </li>
                <li>
                  Leave-In Conditioner or Detangling Spray - helps to make the
                  hair slick and easier to brush through if tangled
                </li>
              </ul>
              When brushing your dog, you will want to use a technique called
              line brushing - this method allows you to work in sections around
              your dog's face and body, and to brush beyond the surface of the
              coat down to the skin. There are several YouTube videos on the
              subject, but I'll link{" "}
              <a
                id="video-link"
                href="https://youtu.be/vY-Vzc-1nU0?si=26Y3Mw6UXz-zkdLR"
              >
                a tutorial on how to line brush here
              </a>
              .<br />
              If you cannot glide your comb through your dog's coat, I cannot
              get my clipper guard through it. This means a longer style would
              be difficult to achieve.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can You De-Mat My Dog?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Though it is sometimes possible to save coats that are tangled, a
              matted coat is very different. Until actually seeing and feeling a
              dog's coat, I cannot judge the severity of the matting. I will not
              shave a matted dog without informing the pet parent that I
              recommend a fresh start and getting permission to do so. To shave
              a matted dog, there is a $15 fee added to the cost of the service.
              If the coat can be saved, the <strong>de-matting fee</strong> is
              $1/minute of brush out time; so if I spend 60 minutes de-matting a
              dog, it is $60 added to the cost of the service.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              My Dog Has Fleas - What You Need To Know
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>What Are Fleas?</strong>
              <br />
              A flea is a tiny insect and is the most common parasite found on
              our pets. They can jump up to 200 times their body length.
              <br />
              <strong>How Do Fleas Spread?</strong>
              <br />
              Flea eggs and larvae fall from a host's body onto the ground, then
              latch onto their next host. Adult fleas jump from host to host to
              lay eggs. Fleas can lay 40 - 60 eggs per day.
              <br />
              <strong>What Diseases Do Fleas Transmit/ Cause?</strong>
              <br />
              <ul class="diseases">
                <li class="disease-item">Tapeworms</li>
                <li class="disease-item">Bartonella</li>
                <li class="disease-item">Anemia</li>
              </ul>
              <strong>Can Indoor Pets Get Fleas?</strong>
              <br />
              Yes, though uncommon, flea eggs and larvae can latch onto clothing
              items like shoes or other pets and spread that way.
              <br />
              <strong>Did You Know:</strong>
              <br />
              The fleas you can see on your pet only make up for 5% of the total
              population infesting your pet's living space. Flea eggs can be
              found in crevices between wooden planks, in grout lines for tile,
              or in carpet. Do not only treat your pet for fleas, but your home
              and or yard, too!
              <br />
              <strong>How To Prevent Fleas:</strong>
              <br />
              There are topical and chewable flea preventatives for dogs and
              cats. Most protect against fleas for one month or longer. Speak to
              your vet about the different options availble for your pet. If you
              are interested in booking for a flea & tick treatment, be sure to
              treat the area your pet spends most of their time in too!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              My Pet Has Long Nails
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Long Nails Can Cause:</strong>
              <ul>
                <li>Pain</li>
                <li>Splayed or deformed feet</li>
                <li>Reduced traction</li>
                <li>Injured tendons</li>
                <li>Arthritis</li>
              </ul>
              You can prevent this with regular nail clipping, every 2 - 3 weeks
              until the quick (vein) recedes into the nail.
              <br />
              When clipping nails, clip the nail just beyond the curve of the
              nail. Use styptic powder to stop the bleeding if you clip too far.
              <br />
              If you do not have styptic powder, you can use flour or cornstarch
              as a subsitute.
              <br />
              <strong>With very long nails:</strong>
              <ul>
                <li>
                  The quick (vein) may grow into the nail, eventually making it
                  almost impossible to cut the nail without cutting the quick as
                  well
                </li>
                <li>The nail may grow into the paw pad</li>
              </ul>
              <strong>Benefits of having your pet's nails filed:</strong>
              <ul>
                <li>Eliminates the jagged/ sharp edges of the nails</li>
                <li>Lasts longer than only clipping the nails</li>
                <li>Easier to avoid the quick (vein)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
