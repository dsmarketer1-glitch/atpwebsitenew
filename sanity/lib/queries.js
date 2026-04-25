import { groq } from 'next-sanity'

export const homePageQuery = groq`*[_type == "homepage"][0]{
  heroLabel,
  heroTitle,
  heroSubtitle,
  heroImage,
  trustStats,
  whyChooseUs
}`

export const servicesQuery = groq`*[_type == "service"]{
  slug,
  title,
  heroTitle,
  metaTitle,
  metaDescription,
  image,
  imageAlt,
  shortDescription,
  content,
  features,
  faqs
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  slug,
  title,
  heroTitle,
  metaTitle,
  metaDescription,
  image,
  imageAlt,
  shortDescription,
  content,
  features,
  faqs
}`

export const settingsQuery = groq`*[_type == "settings"][0]{
  phoneNumber,
  licenseNumber,
  email,
  socialLinks
}`
