import React from 'react';
import '../styles/makeup.css'; 
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import MakeupCarousel2 from '../assets/MakeupCarousel2.jpg';
import MakeupCarousel1 from '../assets/MakeupCarousel1.jpg';
import MakeupCarousel3 from '../assets/MakeupCarousel3.jpg';
import MakeupCard1 from '../assets/MakeupCard1.jpg';
import MakeupCard2 from '../assets/MakeupCard2.jpg';
import MakeupCard3 from '../assets/MakeupCard3.jpg';
import MakeupCard4 from '../assets/MakeupCard4.jpg';
import MakeupCard5 from '../assets/MakeupCard5.jpg';


const slides = [
  {
    imageSrc: MakeupCarousel1,
    altText: "Slide 1",
    title: "Stunning Lip Colors",
    description: "Check out the hottest lip shades for this season.",
  },
  {
    imageSrc: MakeupCarousel2,
    altText: "Slide 2",
    title: "Perfect Eyeliners",
    description: "Discover tips for mastering the winged eyeliner look.",
  },
  {
    imageSrc: MakeupCarousel3,
    altText: "Slide 3",
    title: "Flawless Skin",
    description: "Explore skincare products for a radiant complexion.",
  },
];

const MakeupPage = () => {
  return (
    <div className="makeup-page">
      <h1>Makeup Tips and Trends</h1>
      <p>Discover the latest makeup trends and expert tips to enhance your beauty.</p>
      <Carousel slides={slides} />
      <section className="makeup-section">
        {/* Article 1 */}
        <Accordion
          title="Trend: Natural Glam"
          content="Learn how to achieve the perfect natural glam look with minimal effort."
          isArrowAccordion={false} 
          imageSrc= {MakeupCard1}
          altText="Natural Glam Trend"
          initiallyOpen={true} 
          additionalContent={
            <div>
              <h3>Steps for Natural Glam Makeup Look</h3>
              <ul>
                <li><strong>Prep the Skin:</strong> Start with a clean, hydrated face. Apply a lightweight moisturizer and a primer that suits your skin type to create a smooth base for makeup.</li>
                <li><strong>Light Foundation or BB Cream:</strong> For a natural look, opt for a lightweight foundation or BB cream. Choose a formula with a dewy finish to keep your skin looking fresh. Apply a thin layer for light coverage to even out the complexion.</li>
                <li><strong>Conceal Imperfections:</strong> Use a creamy concealer to cover blemishes, dark circles, or any redness. Blend it well into the skin to keep the look natural.</li>
                <li><strong>Soft, Neutral Eyeshadow:</strong> Go for neutral shades like soft browns, taupes, or beige for eyeshadow. Apply a light wash of color across the lids, and blend it well for a seamless finish. You can add a touch of shimmer to the inner corners for brightness.</li>
                <li><strong>Define the Brows:</strong> Keep your brows looking natural by using a brow pencil or powder that matches your hair color. Fill in sparse areas lightly and brush through with a spoolie for a soft, defined shape.</li>
                <li><strong>Natural Lashes:</strong> Use a lengthening mascara to define your lashes without making them too dramatic. Apply a light coat to keep the lashes separated and natural-looking.</li>
                <li><strong>Soft Blush:</strong> Opt for a cream or powder blush in a soft peach or rose shade. Apply it to the apples of your cheeks for a natural flush of color.</li>
                <li><strong>Subtle Highlighter:</strong> Apply a cream or liquid highlighter to the high points of your face, like the cheekbones, bridge of the nose, and cupid’s bow, for a soft, glowing finish.</li>
                <li><strong>Nude or Pink Lips:</strong> For the lips, choose a nude or soft pink lipstick or lip gloss. Go for a formula that enhances your natural lip color for a subtle and fresh appearance.</li>
                <li><strong>Setting Spray:</strong> Finish the look with a light mist of setting spray to lock in your makeup and keep it looking fresh throughout the day.</li>
              </ul>
            </div>
          }
        />

        {/* Article 2 */}
        <Accordion
          
          title="Top 5 Lipsticks of 2024"
          content="Explore the hottest lipsticks that are trending this season."
          isArrowAccordion={false} 
          imageSrc={MakeupCard2}
          altText="Top Lipsticks 2024"
          initiallyOpen={true} 
          additionalContent={
            <div>
              <h3>Top 5 Lipsticks to Try in 2024</h3>
              <p>Finding the perfect lipstick can be a game-changer, whether you’re looking for everyday wear or a statement look. Here are the top 5 lipsticks of 2024, each offering stunning shades, luxurious formulas, and long-lasting wear:</p>
              <ul>
                <li><strong>Fenty Beauty Stunna Lip Paint in Uncensored</strong> Rihanna’s iconic lip paint remains a top pick in 2024. The perfect red for all skin tones, Uncensored delivers a vibrant, bold look with a weightless matte finish. The formula is long-lasting, smudge-proof, and packed with a flattering, full-pigment color that stays put all day.</li>
                <li><strong>Charlotte Tilbury Matte Revolution Lipstick in Pillow Talk</strong> A cult favorite, Pillow Talk continues to reign in 2024. This nude-pink shade offers a sophisticated, natural look that flatters any complexion. The matte formula is comfortable and hydrating, making it perfect for everyday wear. Plus, the creamy texture glides on effortlessly.</li>
                <li><strong>MAC Cosmetics Retro Matte Lipstick in Ruby Woo</strong> The timeless, classic red shade that suits all skin tones, Ruby Woo remains a staple in the makeup world. Its intense color payoff and smooth matte finish make it a must-have in 2024 for those who love a bold statement lip. The long-wearing formula ensures your lips stay vibrant for hours.</li>
                <li><strong>Rare Beauty Kind Words Matte Lipstick in Fearless</strong> Rare Beauty has taken the beauty world by storm, and Fearless is one of their standout shades. This deep rose color has a rich matte finish that feels velvety on the lips. The formula is lightweight and non-drying, providing full coverage with a modern, chic vibe perfect for any occasion.</li>
                <li><strong>Maybelline SuperStay Vinyl Ink in Lippy</strong> For a glossy, high-shine finish, Maybelline’s SuperStay Vinyl Ink in Lippy is a top pick. The bold, vibrant pink shade offers all-day wear without the sticky feeling of traditional glosses. Its smudge-proof formula and rich color make it ideal for anyone seeking a high-impact, glossy lip that lasts.</li>
              </ul>
            </div>
          }
        />

        {/* Article 3 */}
        <Accordion
         
          title="Expert's Guide to Contouring"
          content="Master the art of contouring with these expert tips and tricks."
          isArrowAccordion={false} 
          imageSrc={MakeupCard3}
          altText="Contouring Guide"
          initiallyOpen={true} 
          additionalContent={
            <div>
              <h3>Expert’s Guide to Contouring</h3>
              <p>Contouring is a powerful makeup technique that enhances the natural structure of your face, creating the illusion of sharper cheekbones, a more defined jawline, and a slimmer nose. While it may seem complicated, with the right tools and technique, contouring can be easily mastered. Here’s everything you need to know to contour like a pro:</p>
              <ul>
                <li><strong>Understand Your Face Shape</strong> Before applying contour, it’s important to determine your face shape. The most common shapes are oval, round, square, and heart-shaped. Understanding your face shape helps you know where to place the contour and highlight for the most flattering results.</li>
                <li><strong> Choose the Right Products</strong> Contouring can be done with powders, creams, or sticks, depending on your preference and skin type. Powder contours are best for oily skin or those who prefer a matte finish.
                              Creams provide a dewy, natural finish and work well for dry skin.
                              Sticks are great for quick application and blending, but they may be less buildable than other formulas.</li>
                <li><strong>Prep Your Skin : </strong> Before contouring, always start with a clean, moisturized face. Apply foundation to even out your skin tone, and use a concealer to highlight areas like your under-eye circles and the center of your forehead. This provides a smooth canvas for contouring and helps the products blend better.</li>
                <li><strong>Map Out Your Contour : </strong> Use your contour product to create shadows that define the features you want to enhance:

                    <strong> Cheekbones:</strong> Suck in your cheeks and apply contour under the cheekbones, blending upwards towards the ear.
                    <strong> Jawline:</strong> To create a more defined jaw, apply contour along your jawline and blend downward.
                    <strong> Nose: </strong>To make your nose appear slimmer, apply a thin line of contour on each side of the bridge of your nose. Blend it out carefully.
                    <strong> Hairline: </strong>Apply contour along the forehead, near the hairline, to make your face appear smaller and create a sun-kissed look.</li>
                <li><strong>Highlight to Lift : </strong> The highlight is what brings light to the high points of your face, creating contrast with the shadowed contour areas: Apply highlighter to the tops of your cheekbones, the bridge of your nose, the center of your forehead, the bow of your lips, and your chin. These areas catch the light and give your face a lifted appearance.</li>
                <li><strong>Blend, Blend, Blend : </strong>The key to natural-looking contouring is blending. Use a makeup sponge or a contour brush to blend out the contour and highlighter. Make sure there are no harsh lines and that everything seamlessly flows into the rest of your makeup.</li>
                <li><strong>Set with Powder : </strong>If you used cream or liquid contour products, set your makeup with a translucent setting powder to lock everything in place. A light dusting of setting powder ensures your contour and highlight stay intact all day without moving or fading.</li>
                <li><strong>Finishing Touches : </strong>Once your contour and highlight are blended, finish the look with a soft blush to bring warmth to your face. A natural blush on the apples of your cheeks will help soften the contour and create a balanced look.</li>


              </ul>
            </div>
          }
        />

        {/* Article 4 */}
        <Accordion
          
          title="Best Makeup for Beginners"
          content="Starting your makeup journey? Here are the essentials you need and tips to get started like a pro."
          isArrowAccordion={false} 
          imageSrc={MakeupCard4}
          altText="Makeup for Beginners"
          initiallyOpen={true} 
          additionalContent={
            <div>
              <h3>Best Makeup for Beginners: A Simple Guide to Get You Started
              </h3>
              <p>If you’re just starting out with makeup, it can be overwhelming with so many products and techniques to choose from. However, building a simple makeup routine that enhances your natural beauty doesn’t have to be difficult. Here’s a list of the best makeup products and essential tips for beginners to help you create a flawless look without the stress:</p>
              <ul>
                <li><strong>Primer : </strong> Start your makeup routine with a primer to create a smooth base for the rest of your makeup. Primer helps to minimize pores, control oil, and ensure your makeup lasts longer throughout the day. Choose a primer that matches your skin type:

                                              For oily skin: Look for mattifying primers.
                                              For dry skin: Hydrating primers are your best bet.</li>
                <li><strong>Foundation : </strong> Foundation is the key to evening out your complexion, and there are different types to suit every skin type and coverage preference:

                                              Liquid foundation provides a natural finish and works well for most skin types.
                                              BB cream or tinted moisturizer is a great option for beginners who want light coverage and a dewy look.
                                              Stick foundation is easy to apply and great for on-the-go.</li>
                <li><strong>Concealer</strong> Concealer helps brighten your under-eye area, cover blemishes, and hide any redness. Look for a creamy, blendable formula that works well with your foundation:

                                              For under-eye circles: Use a brightening concealer that’s slightly lighter than your skin tone.
                                              For blemishes: Choose a concealer that matches your foundation for seamless coverage.
                                              Use a makeup sponge or brush to blend the concealer in, and don’t forget to set it with a light dusting of powder to prevent creasing.</li>
                <li><strong>Blush : </strong> Blush is an easy way to add a healthy flush of color to your face. Beginners should start with a cream or powder blush that blends easily.

                                              Peach or pink shades work well for most skin tones.
                                              Apply blush to the apples of your cheeks, then blend it out toward your temples for a natural, lifted look.</li>
                <li><strong>Mascara : </strong> Mascara is an essential product for opening up your eyes and adding definition to your lashes. For beginners, go for a lengthening or volumizing mascara that’s easy to apply and doesn’t clump.

                                              Waterproof mascara is great for long-lasting wear but can be tricky to remove, so be cautious if you’re new to makeup.</li>
                <li><strong>Eyebrow Pencil or Gel : </strong>Full, well-defined eyebrows can frame your face and complete your look. If you’re a beginner, start with a brow pencil or brow gel to fill in sparse areas and define the shape.

                                              Choose a brow product that matches your hair color, and use light strokes to mimic natural hairs.
                                              Brush through your brows with a spoolie to blend and soften the product for a natural finish. </li>
                <li><strong>Eyeshadow : </strong> For beginners, simple eyeshadows in neutral shades like beige, taupe, and brown are easy to work with and can be layered for more depth. A basic eyeshadow palette with both matte and shimmer shades is ideal for creating versatile looks.</li>

                                              Apply a light shade across your eyelid, a medium shade in the crease for definition, and a dark shade along the lash line to add depth.

                <li><strong>Lipstick or Lip Gloss : </strong>Lip color can instantly brighten up your makeup look. For beginners, start with a nude or pink lipstick for a natural look, or try a lip gloss for a shiny, fresh finish.</li>

                                              Lip crayons are also a great choice since they’re easy to apply without precision and come in a variety of colors.
               <li><strong>Setting Spray : </strong>To keep your makeup in place all day, use a setting spray to lock in your look. A few spritzes will help your makeup stay fresh without feeling heavy or cakey. </li>




              </ul>
            </div>
          }
        />

        {/* Article 5 */}
        <Accordion
         
          title="Makeup Product Reviews"
          content="Wondering which makeup products are worth the hype? Read our in-depth reviews to find the best choices for you."
          isArrowAccordion={false} 
          imageSrc={MakeupCard5}
          altText="Makeup Product Reviews"
          initiallyOpen={true} 
          additionalContent={
            <div>
              <h3>Your Ultimate Guide to the Best Makeup Products</h3>
              <p>Finding the perfect makeup product can be a challenge, with so many brands and options vying for attention. That’s why we’re here—to cut through the noise and give you honest, comprehensive reviews of the latest and greatest in the beauty world.

                  Whether you're a seasoned makeup enthusiast or just starting to explore the world of cosmetics, our reviews are tailored to help you make informed decisions. We believe beauty should be accessible, enjoyable, and personalized to your unique style and needs.

</p>
<h4>
What You’ll Find Here
</h4>
              <ul>
                <li><strong>Unbiased Reviews:</strong> We test every product thoroughly, focusing on performance, ingredients, packaging, and price.</li>
                <li><strong>Honest Ratings:</strong> Our star ratings reflect the true value of each product—no fluff, no bias.</li>
                <li><strong>Expert Insights:</strong> With years of experience in the beauty industry, we provide insights into which products work best for different skin types and tones.</li>
                <li><strong>Detailed Comparisons:</strong> Struggling to choose between two similar products? We break it down to help you pick the right one.</li>
              </ul>
             

            </div>
          }
        />
      </section>
    
    </div>
  );
};

export default MakeupPage;
