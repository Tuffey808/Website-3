"use client";

import {
  MessageCircle,
  Truck,
  Mail,
  MapPin,
  ChevronDown,
  Info,
  Phone,
} from "lucide-react";

import { 
  useLanguage,
  useTranslations,
} from "./components/LanguageProvider";

import { useState } from "react";

const Instagram = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <defs>
      <radialGradient
        id="instagramGradient"
        cx="0"
        cy="1"
        r="1.2"
      >
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="25%" stopColor="#F47133" />
        <stop offset="55%" stopColor="#D62976" />
        <stop offset="80%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </radialGradient>
    </defs>

    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="url(#instagramGradient)"
      strokeWidth="2"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="url(#instagramGradient)"
      strokeWidth="2"
    />

    <circle
      cx="17.4"
      cy="6.6"
      r="1"
      fill="#D62976"
    />
  </svg>
);

const Whatsapp = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 2.25C6.615 2.25 2.25 6.48 2.25 11.7c0 1.83.54 3.54 1.48 4.98L2.2 21.75l5.25-1.5A9.84 9.84 0 0 0 12 21.45c5.385 0 9.75-4.23 9.75-9.75S17.385 2.25 12 2.25Z"
      fill="#25D366"
    />

    <path
      d="M8.65 7.2c.25-.25.62-.34.95-.18l1.03.48c.29.13.48.4.52.71l.15 1.06c.04.3-.06.61-.28.82l-.63.64c.51.93 1.27 1.69 2.2 2.2l.64-.63c.21-.22.52-.32.82-.28l1.06.15c.31.04.58.23.71.52l.48 1.03c.16.33.07.7-.18.95l-.69.69c-.4.4-.98.57-1.52.45-1.29-.29-2.72-1.05-4-2.33-1.28-1.28-2.04-2.71-2.33-4-.12-.54.05-1.12.45-1.52l.69-.76Z"
      fill="#FFFFFF"
    />
  </svg>
);

const categories = [
  {
    key: "womensFashion",
    image: "/images/categories/Category-Banner-01.png",
  },
  {
    key: "fragrance",
    image: "/images/categories/Category-Banner-02.png",
  },
  {
    key: "beauty",
    image: "/images/categories/Category-Banner-03.png",
  },
  {
    key: "skincare",
    image: "/images/categories/Category-Banner-04.png",
  },
  {
    key: "handbags",
    image: "/images/categories/Category-Banner-05.png",
  },
  {
    key: "footwear",
    image: "/images/categories/Category-Banner-06.png",
  },
  {
    key: "watches",
    image: "/images/categories/Category-Banner-07.png",
  },
  {
    key: "accessories",
    image: "/images/categories/Category-Banner-08.png",
  },
  {
    key: "homeLiving",
    image: "/images/categories/Category-Banner-09.png",
  },
  {
    key: "kidsFamily",
    image: "/images/categories/Category-Banner-10.png",
  },
];

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    category: "",
    quantity: "",
    company: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const categoryName =
      t.categoryNames[
        form.category as keyof typeof t.categoryNames
      ];

    const message = `
    ${t.bulk.whatsappIntro}

    ${t.bulk.name}: ${form.name}
    ${t.bulk.phone}: ${form.phone}
    ${t.bulk.city}: ${form.city}
    ${t.bulk.category}: ${form.category}
    ${t.bulk.quantityPlaceholder}: ${form.quantity}
    ${t.bulk.company}: ${form.company}

    ${t.bulk.requirements}:
    ${form.requirements}
    `.trim();

    const whatsappNumber = "966548646993"

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
}
  
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <div className="logo-mark">
              <img src="/images/Gmall-logo.png" alt="Logo-1" />
            </div>

            <div className="logo-text">
              <strong>جيت مول شوب</strong>
              <span>GATE MALL SHOP</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#categories">{t.nav.categories}</a>
            <a href="#how-it-works">{t.nav.howToOrder}</a>
            <a href="#bulk-orders">{t.nav.bulkOrders}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="header-actions">
            <div className="language">
              <button
                type="button"
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
                >
                  EN
                </button>

              <span>|</span>

              <button
                type="button"
                className={language === "ar" ? "active" : ""}
                onClick={() => setLanguage("ar")}
                >
                  AR
                </button>
            </div>

            <a
              href="https://wa.me/966548646993"
              className="whatsapp-header"
              target="_blank"
              rel="noreferrer"
              >
                <Whatsapp />
                <span>{t.nav.whatsapp}</span>
              </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow">{t.hero.eyebrow}</span>

            <h1>
              {t.hero.title}
            </h1>

            <p>
              {t.hero.description}
            </p>

            <div className="hero-buttons">
              <a
                href="https://www.instagram.com/gatemall.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
              >
                <Instagram />
                {t.hero.instagram}
              </a>

              <a
                href="https://wa.me/966548646993"
                className="whatsapp-button"
                target="_blank"
                rel="noreferrer"
              >
                <Whatsapp />
                {t.hero.whatsapp}
              </a>
            </div>

            <div className="hero-note">
              <Info size={18} />
              <span>
                {t.hero.note}
              </span>
            </div>
          </div>

          {/*<div className="hero-visual" />*/}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="categories section">
        <div className="container">
          <div className="section-heading">
            <h2>{t.categories.title}</h2>
            <p>
              {t.categories.description}
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const name =
                t.categoryNames[
                  category.key as keyof typeof t.categoryNames
                ];

              return (
                <a href="#" className="category-card" key={category.key}>
                  <div className="category-image">
                    <img src={category.image} alt={name} />
                  </div>

                  <div className="category-name">{name}</div>
                </a>
              );
            })}
          </div>

          <div className="center-action">
            <a href="https://www.instagram.com/gatemall.shop" className="instagram-button">
              <Instagram />
              {t.categories.viewAll}
            </a>

            <p>{t.categories.updateNote}</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">
        <div className="container">
          <div className="section-heading">
            <h2>{t.howItWorks.title}</h2>
            <p>{t.howItWorks.description}</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-icon">
                <Instagram />
              </div>

              <span className="step-number">01</span>

              <h3>{t.howItWorks.step1.title}</h3>

              <p>
                {t.howItWorks.step1.description}
              </p>
            </div>

            <div className="step-line" />

            <div className="step">
              <div className="step-icon double">
                <Instagram  />
                <Whatsapp />
              </div>

              <span className="step-number">02</span>

              <h3>{t.howItWorks.step2.title}</h3>

              <p>
                {t.howItWorks.step2.description}
              </p>
            </div>

            <div className="step-line" />

            <div className="step">
              <div className="step-icon">
                <Truck size={29} />
              </div>

              <span className="step-number">03</span>

              <h3>{t.howItWorks.step3.title}</h3>

              <p>
                {t.howItWorks.step3.description}
              </p>
            </div>
          </div>

          <div className="help-row">
            <span>{t.howItWorks.help}</span>

            <a href="https://wa.me/966548646993" target="_blank" rel="noreferrer">
              <Whatsapp />
              {t.howItWorks.chat}
            </a>
          </div>
        </div>
      </section>

      {/* BULK ORDERS */}
      <section id="bulk-orders" className="bulk-section">
        <div className="container bulk-inner">
          <div className="bulk-copy">
            <span className="eyebrow">{t.bulk.eyebrow}</span>

            <h2>{t.bulk.title}</h2>

            <p>
              {t.bulk.description}
            </p>

            <ul>
              <li>{t.bulk.quantity}</li>
              <li>{t.bulk.categories}</li>
              <li>{t.bulk.support}</li>
            </ul>
          </div>

          <form className="bulk-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input name="name" value={form.name} onChange={handleChange} placeholder={t.bulk.name} />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={t.bulk.phone} />

              <input name="city" value={form.city} onChange={handleChange} placeholder={t.bulk.city} />

              <div className="select-wrapper">
                <select name="category" value={form.category} onChange={handleChange} required>
                  <option value="" disabled>
                    {t.bulk.category}
                  </option>
                  {categories.map((category) => {
                    const name =
                      t.categoryNames[
                        category.key as keyof typeof t.categoryNames
                      ];

                    return (
                      <option key={category.key} value={category.key}>
                        {name}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown size={17} />
              </div>

              <input name="quantity" value={form.quantity} onChange={handleChange} placeholder={t.bulk.quantityPlaceholder} />
              <input name="company" value={form.company} onChange={handleChange} placeholder={t.bulk.company} />
            </div>

            <textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder={t.bulk.requirements} rows={3} />

            <button type="submit">{t.bulk.submit}</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="images/Gmall-logo.png" alt="logo-2" />

              <div className="logo-text">
                <strong>جيت مول شوب</strong>
                <span>GATE MALL SHOP</span>
              </div>
            </a>

            <p>
              {t.footer.description}
            </p>

            <div className="socials">
              <a href="https://www.instagram.com/gatemall.shop">
                <Instagram />
              </a>

              <a href="https://wa.me/966548646993">
                <Whatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3>{t.footer.quickLinks}</h3>

            <a href="#home">{t.nav.home}</a>
            <a href="#categories">{t.nav.categories}</a>
            <a href="#how-it-works">{t.nav.howToOrder}</a>
            <a href="#bulk-orders">{t.nav.bulkOrders}</a>
            <a href="contact">{t.nav.contact}</a>
          </div>

          <div>
            <h3>{t.footer.categories}</h3>

            <a href="#">{t.categoryNames.womensFashion}</a>
            <a href="#">{t.categoryNames.beauty} & {t.categoryNames.skincare}</a>
            <a href="#">{t.categoryNames.fragrance}</a>
            <a href="#">{t.categoryNames.handbags} & {t.categoryNames.accessories}</a>
            <a href="#">{t.categoryNames.homeLiving}</a>
            <a href="#">{t.categoryNames.kidsFamily}</a>
          </div>

          <div>
            <h3>{t.footer.contact}</h3>

            <a href="https://wa.me/966548646993">
              <Whatsapp />
              {t.footer.whatsapp}
            </a>

            <a href="https://www.instagram.com/gatemall.shop">
              <Instagram />
              {t.footer.instagram}
            </a>

            <a href="mailto:info@gmall.sa">
              <Mail size={22} />
              {t.footer.email}
            </a>

            <a href="https://maps.app.goo.gl/RNHvpXSbD5ihqxvm8">
              <MapPin size={22} />
              {t.footer.location}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>gmall.sa</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me"
        className="floating-whatsapp"
        target="blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Whatsapp />
      </a>
    </main>
  );
}