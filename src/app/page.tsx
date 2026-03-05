"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, Heart, Mail, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="LUXE"
          navItems={[
            { name: "Collections", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "products" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exclusive Fashion Redefined"
          description="Discover curated collections designed for those who appreciate timeless elegance and exceptional craftsmanship. Each piece tells a story of luxury and exclusivity."
          background={{ variant: "grid" }}
          tag="New Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/stylish-sexy-woman-dressed-elegant-tuxedo-suit-walking-city-summer-spring-day_285396-8011.jpg"
          imageAlt="Luxury fashion collection"
          mediaAnimation="blur-reveal"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="We believe fashion should tell your unique story. Our passion project celebrates individuality, quality, and the art of self-expression through meticulously curated garments that transcend trends."
          useInvertedBackground={false}
          buttons={[
            { text: "Explore Our Vision", href: "products" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Collections"
          description="Handpicked pieces that embody our aesthetic vision and commitment to quality."
          tag="Exclusive"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="bento-grid"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Minimalist Drape Dress",              price: "$485",              imageSrc: "http://img.b2bpic.net/free-photo/bride-sitting-windowsill-holds-wedding-dress_1153-5941.jpg",              imageAlt: "Minimalist drape dress in burgundy"
            },
            {
              id: "2",              name: "Tailored Luxury Jacket",              price: "$625",              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-with-winter-clothes-walking-street_1303-20159.jpg",              imageAlt: "Tailored luxury jacket with premium finish"
            },
            {
              id: "3",              name: "Statement Evening Ensemble",              price: "$745",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-woman-dressed-elegant-suit-sunglasses-walking-street-smiling-sunny-weather_285396-7911.jpg",              imageAlt: "Statement evening ensemble for sophisticated occasions"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured In"
          description="Our aesthetic has caught the attention of industry leaders and fashion publications worldwide."
          tag="Press"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Vogue", "Harper's Bazaar", "ELLE", "GQ", "WWD", "NYLON", "i-D Magazine"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real voices from those who've embraced our exclusive collections."
          tag="Reviews"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "Fashion Curator",              company: "Style Collective",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-ethnic-executive-woman-looking-camera_1098-20037.jpg",              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",              name: "Jessica Chen",              role: "Creative Director",              company: "Aesthetic Studio",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/elegant-businesswoman-standing-office_1157-33426.jpg",              imageAlt: "Jessica Chen portrait"
            },
            {
              id: "3",              name: "Emily Rodriguez",              role: "Fashion Blogger",              company: "Luxe Diary",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-woman-with-cool-long-hair-earrings-pink-glasses-stylish-outfit-looking-into-camera-smiling_197531-28766.jpg",              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",              name: "Alexandra Hart",              role: "Style Influencer",              company: "Minimalist Living",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/indoor-studio-shot-attractive-pretty-woman-with-light-brown-hair-wearing-black-jacket-with-red-lips_291650-1321.jpg",              imageAlt: "Alexandra Hart portrait"
            },
            {
              id: "5",              name: "Victoria Brooks",              role: "Fashion Editor",              company: "Elegance Magazine",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-pretty-female-with-pink-silk-dress-sitting-outdoor-cafe_181624-30906.jpg",              imageAlt: "Victoria Brooks portrait"
            },
            {
              id: "6",              name: "Sophia Laurent",              role: "Personal Stylist",              company: "Haute Style",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",              imageAlt: "Sophia Laurent portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Exclusive Circle"
          description="Be the first to discover new collections, exclusive previews, and special events curated for our community."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/pretty-blonde-woman-with-wavy-hair-dressed-skirt-light-blouse-white-jacket-sits-chair_197531-33594.jpg"
          imageAlt="Luxury fashion lifestyle"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. Expect exclusive previews, events, and inspiration."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Explore",              items: [
                { label: "Collections", href: "#products" },
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Customer Care",              items: [
                { label: "Shipping Info", href: "#" },
                { label: "Returns & Exchanges", href: "#" },
                { label: "Size Guide", href: "#" },
                { label: "Care Instructions", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "Newsletter", href: "#contact" },
                { label: "Press Kit", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 LUXE. All rights reserved. Crafted with passion."
          bottomRightText="Made for exclusivity"
        />
      </div>
    </ThemeProvider>
  );
}
