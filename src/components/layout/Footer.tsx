"use client";

import React from "react";
import CustomLink from "../CustomLink";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Globe,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface FooterProps {
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  navigationLinks?: {
    title: string;
    links: Array<{ label: string; href: string }>;
  }[];
  currentLanguage?: "fa" | "en";
}

const Footer = ({
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = {
    email: "info@persianbooks.com",
    phone: "+98 21 1234 5678",
    address: "تهران، خیابان انقلاب، خیابان فلسطین",
  },
  navigationLinks = [
    {
      title: "خدمات",
      links: [
        { label: "خلاصه کتاب", href: "/summaries" },
        { label: "فروشگاه کتاب", href: "/marketplace" },
        { label: "گروه‌های مطالعه", href: "/groups" },
        { label: "پادکست کتاب", href: "/podcasts" },
      ],
    },
    {
      title: "درباره ما",
      links: [
        { label: "تیم ما", href: "/about" },
        { label: "تماس با ما", href: "/contact" },
        { label: "همکاری با ما", href: "/careers" },
        { label: "سوالات متداول", href: "/faq" },
      ],
    },
    {
      title: "قوانین",
      links: [
        { label: "حریم خصوصی", href: "/privacy" },
        { label: "شرایط استفاده", href: "/terms" },
        { label: "حقوق ناشران", href: "/publishers-rights" },
        { label: "قوانین انتشار", href: "/content-policy" },
      ],
    },
  ],
  currentLanguage = "fa",
}: FooterProps) => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-4 md:px-8 lg:px-12 rtl">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo, newsletter and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">پ</span>
              </div>
              <h2 className="text-xl font-bold">کتاب‌خوان پارسی</h2>
            </div>
            <p className="text-gray-600 mt-2 text-sm max-w-md">
              جامعه کتاب‌خوانان فارسی زبان، محلی برای به اشتراک گذاری تجربه
              مطالعه و خرید و فروش کتاب
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex flex-col">
              <h3 className="font-medium mb-2">عضویت در خبرنامه</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="rounded-l-none border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="rounded-r-none bg-blue-600 hover:bg-blue-700">
                  عضویت
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Middle section with navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Navigation links */}
          {navigationLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-bold text-lg mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <CustomLink
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact information */}
          <div className="flex flex-col">
            <h3 className="font-bold text-lg mb-3">تماس با ما</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail size={16} />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone size={16} />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin size={16} />
                  <span>{contactInfo.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom section with copyright and language selector */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} کتاب‌خوان پارسی. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={`text-xs ${currentLanguage === "fa" ? "bg-blue-50 text-blue-600 border-blue-200" : ""}`}
            >
              فارسی
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`text-xs ${currentLanguage === "en" ? "bg-blue-50 text-blue-600 border-blue-200" : ""}`}
            >
              English
            </Button>
            <Globe size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
