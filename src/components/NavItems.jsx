const NavItems = [
  {
    label: { en: "Home", ur: "ہوم" },
    link: "/home",
  },
  {
    label: { en: "About Jamia", ur: "جامعہ کے بارے میں" },
    children: [
      { label: { en: "Jamia Hafsa lil Banat", ur: "جامعہ حفصہ للبنات" }, link: "/jamiahafsalilbanat" },
      { label: { en: "About Us", ur: "ہمارے بارے میں" }, link: "/aboutus" },
      // { label: { en: "The Jamia Trust", ur: "جامعہ ٹرسٹ" }, link: "#trust" },
      { label: { en: "Board of Trustees", ur: "بورڈ آف ٹرسٹیز" }, link: "/boardoftrustees" },
      { label: { en: "Message from Mohatamim", ur: "پیغامِ مہتمم" }, link: "/messagefrommohatmim" },
      { label: { en: "Establishment of Hafsa", ur: "جامعہ کی بنیاد" }, link: "/establishment" },
      { label: { en: "Important Contacts", ur: "اہم رابطے" }, link: "/contactus" },
      { label: { en: "Guests at Jamia", ur: "جامعہ میں مہمان" }, link: "/guestsijlasgallery" },
    ],
  },
  {
    label: { en: "Donation", ur: "عطیہ" },
    children: [
      { label: { en: "Donation Appeal", ur: "عطیہ کی اپیل" }, link : "/donation-appeal" },
      { label: { en: "Student Sponsorship", ur: "طلبہ کی کفالت" }, link: "/student-sponsorship" },

    ],
  },
  {
    label: { en: "Accounts", ur: "اکاؤنٹس" },
    children: [
      { label: { en: "Bank Details", ur: "بینک تفصیل" }, link: "/bankdetails" },
      
    ],
  },
  {
    label: { en: "Students", ur: "طالبات" },
    children: [
       
      { label: { en: "Courses", ur: "کورسز" }, link: "/courses" },
    ],
  },
  {
    label: { en: "Craft & Skills", ur: "ہنر و دستکاری" },
    link: "/craftskills"
  },
  {
    label: { en: "Facilities", ur: "سہولیات" },
     link: "/facilities"
  },
  {
    label: { en: "Future Plans", ur: "آئندہ کے منصوبے" },
    link: "/futureplans",
  },
  {
    label: { en: "Inquiry", ur: "استفسار" },
    link: "/inquiry",
  },
  {
    label: { en: "Contact Us", ur: "رابطہ کریں" },
    children: [
      { label: { en: "Contact Us", ur: "رابطہ کریں" }, link: "/contactus" },
      { label: { en: "How to Reach", ur: "ہم تک کیسے پہنچیں" }, link: "/inquiry" },
    ],
  },
];
export default NavItems;
