import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();

    tl.call(() => {
      // Show the banners at the start of the animation
      bannerOne.style.display = "block";
      bannerTwo.style.display = "block";
      bannerThree.style.display = "block";
    })
      .set([bannerOne, bannerTwo, bannerThree], {
        opacity: 0,
        yPercent: 0,
      })
      .to([bannerOne, bannerTwo, bannerThree], {
        opacity: 1,
        stagger: 1,
        yPercent: 0,
      })
      .call(() => {
        // Hide the banners at the end of the animation
        bannerOne.style.display = "none";
        bannerTwo.style.display = "none";
        bannerThree.style.display = "none";
      });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();

    tl.call(() => {
      // Show the banners at the start of the animation
      bannerOne.style.display = "block";
      bannerTwo.style.display = "block";
      bannerThree.style.display = "block";
    })
      .set([bannerOne, bannerTwo, bannerThree], {
        opacity: 1,
        yPercent: -100,
      })
      .to([bannerOne, bannerTwo, bannerThree], {
        opacity: 0,
        yPercent: 0,
        stagger: 0.5,
        onComplete: () => {
          router.push(href);
        },
      })
      .call(() => {
        // Hide the banners at the end of the animation
        bannerOne.style.display = "none";
        bannerTwo.style.display = "none";
        bannerThree.style.display = "none";
      });
  }
};
