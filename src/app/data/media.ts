/** Chemins servis depuis public/images/ (format JPG/WebP pour le web). */
export const galleryImages = [
  { id: 1, src: "/images/P1.jpg", title: "Son Eternité" },
  { id: 2, src: "/images/P2.jpg", title: "Clergé" },
  { id: 3, src: "/images/P3.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 4, src: "/images/P4.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 5, src: "/images/P5.JPG", title: "Procession Mariale - Servants de messe" },
  { id: 6, src: "/images/P6.JPG", title: "Procession Mariale - Servants de messe" },
  { id: 7, src: "/images/P7.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 8, src: "/images/P8.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 9, src: "/images/P9.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 10, src: "/images/P10.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 11, src: "/images/P11.jpg", title: "Procession Mariale - Servants de messe" },
  { id: 12, src: "/images/P12.jpg", title: "Procession Mariale - Servants de messe" },
] as const;

export const gallerySources = galleryImages.map((img) => img.src);
