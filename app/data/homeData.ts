// composables/heroData.ts

export const home = {
  hero: {
    subtitle: "Introductie",
    title: "Dit is een titel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    links: [
      { label: "Button primary", to: "/", color: "primary" },
      { label: "Button secondary", to: "/", color: "secondary" },
    ],
    images: [
      { src: "/hero/image1.webp", alt: "Hero Image 1" },
    ],
  },
  CTA: {
    subtitle: 'Subtitel',
    title: "Dit is een CTA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium sodales varius. Ut ac justo in ligula lobortis tincidunt. Fusce facilisis, dui quis scelerisque dignissim, ante dolor fringilla elit, nec auctor nulla lorem nec ipsum."
  }
}