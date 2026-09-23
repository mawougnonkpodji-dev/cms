import type { LucideIcon } from "lucide-react";
import { Church, MapPin, Star, Users } from "lucide-react";
import { gallerySources } from "@/app/data/media";

export type NewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  images: string[];
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "La Communauté",
    href: "/communaute",
    sub: ["Qui sommes-nous", "Histoire", "Saint Tarcisius", "Structure", "Adhésion"],
  },
  { label: "Diocèses", href: "/dioceses" },
  { label: "Actualités", href: "/actualites" },
  { label: "Événements", href: "/evenements" },
  { label: "Blog", href: "/blog" },
  { label: "Médiathèque", href: "/mediatheque" },
  { label: "Prières", href: "/prieres" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "1 200+", label: "Servants de messe", icon: Users },
  { value: "6", label: "Diocèses couverts", icon: Church },
  { value: "17", label: "Années d'existence", icon: Star },
  { value: "50+", label: "Paroisses actives", icon: MapPin },
];

export const news: NewsItem[] = [
  {
    id: 1,
    category: "Pélérinnage",
    date: "8 AOUT 2026",
    title: "15e anniversaire du retour triomphale de DAAGBO, Dieu Esprit-Saint à Banamè/ASSOMPTION DE LA VIERGE MARIE",
    excerpt:
      "Les servants d'autel des 06 diocèses se sont réunis à BANAME sur la très saintes colline pour servir les différentes célébrations et rendre grâce à la très Sainte Vierge Marie.",
    readTime: "1 min",
    images: gallerySources,
  },
  {
    id: 2,
    category: "Formation",
    date: "21 juillet 2026",
    title: "Session Diocésaine des servants de messe à Porto-Novo : 20 participants",
    excerpt:
      "Pendant trois jours, les servants de messe du diocèse de Porto-Novo ont approfondi leur connaissance théoriques, pratiques et spirituelles des rites liturgiques et leur engagement spirituel.",
    readTime: "3 min",
    images: ["/images/S-CA-1.jpg"],
  },
  {
    id: 3,
    category: "Formation",
    date: "19 juillet 2026",
    title: "Session Diocésaine des servants de messe à Cotonou : 20 participants",
    excerpt:
      "Pendant trois jours, les servants de messe de l'archidiocèse de Cotonou-Allada ont approfondi leur connaissance théoriques, pratiques et spirituelles des rites liturgiques et leur engagement spirituel.",
    readTime: "3 min",
    images: ["/images/S-PN-1.jpg"],
  },
];

export const events = [
  {
    id: 1,
    day: "19",
    month: "JUL",
    title: "Retraite Spirituelle Diocésaine - Porto-Novo",
    type: "Spiritualité",
    location: "Paroisse Saint-Jean, Porto-Novo",
    time: "08h00 – 18h00",
  },
  {
    id: 2,
    day: "26",
    month: "JUL",
    title: "Journée Sportive et Fraternité - Cotonou",
    type: "Animation",
    location: "Terrain de football Bidossessi",
    time: "07h30 – 16h00",
  },
  {
    id: 3,
    day: "02",
    month: "AOUT",
    title: "Session de Formation Liturgique - Abomey-Calavi",
    type: "Formation",
    location: "Centre Catholique Père Aupiais",
    time: "09h00 – 17h00",
  },
  {
    id: 4,
    day: "20",
    month: "DEC",
    title: "Pélérinage de la Nativité ",
    type: "Liturgie",
    location: "WOKOUN",
    time: "--",
  },
];

export const dioceses = [
  { name: "Cotonou-Allada", servants: 280, diocese: "Archidiocèse" },
  { name: "Porto-Novo", servants: 190, diocese: "Diocèse" },
  { name: "Abomey", servants: 145, diocese: "Diocèse" },
  { name: "Dassa-Parakou", servants: 110, diocese: "Diocèse" },
  { name: "Lokossa", servants: 87, diocese: "Diocèse" },
  { name: "Banamè", servants: 72, diocese: "Diocèse" },
];

export const heroSlides = [
  {
    headline: "Servir avec Foi,\nUn cœur à la fois",
    sub: "La Communauté des Servants de Messe de la Mission de Banamè unie dans la prière, forte dans le service.",
  },
  {
    headline: "Former les\nServants de Demain",
    sub: "Sessions de formation liturgique, retraites spirituelles et journées de fraternité dans tout le Bénin.",
  },
  {
    headline: "Ensemble\npour l'Eucharistie",
    sub: "12 diocèses, 48 paroisses, plus de 1 200 servants unis autour de la Table du Seigneur.",
  },
];

export const prayerOfDay = {
  text: "Seigneur, fais de moi un instrument de ta paix. Là où est la haine, que je mette l'amour. Là où est l'offense, que je mette le pardon. Là où est la discorde, que je mette l'union.",
  source: "Prière de Saint François d'Assise",
  saint: "Fête de Saint Tarcisius - Patron des Servants de Messe",
};

export const paymentMethods = [
  { name: "MTN Mobile Money", abbr: "MTN" },
  { name: "Moov Money", abbr: "MOOV" },
  { name: "Celtiis Cash", abbr: "CELT" },
  { name: "Visa / Mastercard", abbr: "CARD" },
  { name: "PayPal", abbr: "PP" },
];

export const footerColumns = [
  {
    title: "La Communauté",
    links: [
      { label: "Qui sommes-nous", href: "/communaute" },
      { label: "Histoire", href: "/communaute" },
      { label: "Saint Tarcisius", href: "/communaute" },
      { label: "Structure", href: "/communaute" },
      { label: "Adhésion", href: "/communaute" },
    ],
  },
  {
    title: "Activités",
    links: [
      { label: "Actualités", href: "/actualites" },
      { label: "Événements", href: "/evenements" },
      { label: "Blog & Magazine", href: "/blog" },
      { label: "Médiathèque", href: "/mediatheque" },
      { label: "Prières", href: "/prieres" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Faire un don", href: "/don" },
      { label: "FAQ", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Mentions légales", href: "/contact" },
      { label: "Politique de confidentialité", href: "/contact" },
    ],
  },
] as const;
