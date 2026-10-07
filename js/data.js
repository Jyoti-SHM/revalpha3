/* =====================================================================
   RevAlpha — Shared Data  |  js/data.js
   Single source of truth for navigation, hotel types, services,
   plans, FAQs, timeline and footer content used across all pages.
   ===================================================================== */
(function (global) {
  'use strict';

  var RA = {};

  /* ----------------------------------------------------------------
     CONTACT & COMPANY
     ---------------------------------------------------------------- */
  RA.company = {
    name: 'RevAlpha',
    parent: 'Hospitality Minds',
    tagline: 'Revenue Intelligence for Hotels',
    phone: '08655556688',
    phoneHref: 'tel:+918655556688',
    email: 'nilesh@hospitalityminds.com',
    address: 'Star Plaza, 206, Mahatma Gandhi Rd, opposite Sanjay Restaurant, above MM Mithaiwala, Chinchpada, Borivali East, Mumbai, Maharashtra 400066',
    socials: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/revalpha-hotel-revenue-intelligence/', icon: 'linkedin' },
      { label: 'Instagram', href: 'https://www.instagram.com/revalpha.hotels/', icon: 'instagram' },
      { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594840647563', icon: 'facebook' }
    ]
  };

  /* ----------------------------------------------------------------
     NAVIGATION
     ---------------------------------------------------------------- */
  RA.nav = [
    { label: 'Solutions', href: 'solutions.html' },
    { label: 'Hotel Types', href: 'hotel-types.html', dropdown: 'hotelTypes' },
    { label: 'How it works', href: 'index.html#how-it-works' },
    { label: 'Plans', href: 'plans.html' },
    { label: 'About', href: 'about.html' },
    { label: 'FAQs', href: 'faq.html' },
    { label: 'Contact', href: 'contact.html' }
  ];

  RA.ctaPrimary = { label: 'See what your property could be earning', href: 'contact.html' };
  RA.ctaSecondary = { label: 'Talk to a revenue specialist', href: 'contact.html' };

  /* ----------------------------------------------------------------
     HOTEL TYPES
     ---------------------------------------------------------------- */
  RA.hotelTypes = [
    {
      abbr: 'RL', name: 'Resort & Leisure Hotel', href: 'hotel-type-resort-leisure.html',
      image: 'img/hotel-resort.webp',
      short: 'Pricing that moves with school holidays, festivals and long weekends, plus OTA management that keeps your resort visible when leisure demand peaks.',
      positioning: 'Seasonal demand, school holidays, festivals, packages, long weekends and OTA visibility.',
      serves: 'Independent resorts, leisure hotels and destination properties that depend on seasonal and weekend demand rather than steady corporate travel.',
      challenges: [
        'Demand swings sharply between weekdays, weekends, festivals and school holidays.',
        'Rates are often set once and not adjusted as the calendar fills.',
        'Ancillary revenue from meals, spa, activities and transfers is under-priced.',
        'Visibility drops on OTAs exactly when leisure demand peaks.'
      ],
      responds: [
        'Demand-based dynamic pricing that moves with the calendar, not against it.',
        'School holiday, festival and long weekend tracking planned ahead of peak dates.',
        'AI-powered competitor monitoring across your closest comparable resorts.',
        'Weekday versus weekend rate strategy priced separately.',
        'Ancillary revenue packaged and priced alongside the room.'
      ],
      monitored: ['Pickup pace', 'Competitor rates', 'Weekend and holiday demand', 'Channel mix', 'Ancillary spend', 'Review sentiment'],
      rhythm: 'Daily rate and pickup review, weekly competitor set on priority dates, weekly and monthly revenue reporting.',
      plan: 'Gold',
      faq: [
        { q: 'How do you handle seasonal and festival demand at resorts?', a: 'We track school holidays, festivals and long weekends ahead of time and raise rates on high-demand dates, so you never sell too cheap when your resort could fill at a premium.' },
        { q: 'What ancillary revenue can a resort earn beyond rooms?', a: 'Leisure guests spend on more than just the room — meals, spa, activities, transfers and packages. We help you set these up and price them so a booking earns more than the nightly rate alone.' },
        { q: 'Do I get reports I can share with owners?', a: 'Yes. You get weekly and monthly revenue reports in a clear format you can send to owners on WhatsApp or email.' }
      ]
    },
    {
      abbr: 'BH', name: 'Business Hotel', href: 'hotel-type-business-hotels.html',
      image: 'img/hotel-business.webp',
      short: 'Weekday corporate demand, city events and OTA visibility managed together, so your business hotel stays full from Monday to Sunday.',
      positioning: 'Weekday demand, corporate travel, city events, location, rate consistency and last-minute bookings.',
      serves: 'City and business hotels that rely on weekday corporate travel, event calendars and last-minute bookings.',
      challenges: [
        'Weekday demand is strong but weekends drop sharply.',
        'Corporate rates drift without a consistent pricing framework.',
        'City events and conferences are not tracked ahead of time.',
        'Last-minute bookings are priced without a clear strategy.'
      ],
      responds: [
        'Forecast city and corporate demand and price weekdays and weekends separately.',
        'Hold rate consistency across channels and corporate segments.',
        'Track city events, conferences and exhibitions to price ahead of peaks.',
        'Manage last-minute and same-day pricing deliberately.',
        'Improve OTA visibility on the platforms business travellers use.'
      ],
      monitored: ['Weekday occupancy', 'Corporate segment mix', 'Event calendar', 'Rate parity', 'Last-minute pickup', 'Competitor rates'],
      rhythm: 'Daily rate and pickup review on working days, weekly competitor review, monthly revenue strategy meeting.',
      plan: 'Gold',
      faq: [
        { q: 'Can you help fill weekends at a business hotel?', a: 'Yes. We build weekend and leisure offers that sit alongside your corporate weekday pricing, so your hotel works across the full week.' },
        { q: 'How do you handle corporate rates?', a: 'We build a consistent rate framework for your corporate segments and protect parity across channels, while keeping flexibility for negotiated accounts.' },
        { q: 'Do you track city events?', a: 'Yes. We track conferences, exhibitions and city events that drive demand, and adjust pricing ahead of those dates.' }
      ]
    },
    {
      abbr: 'BQ', name: 'Boutique Hotel', href: 'hotel-type-boutique-hotels.html',
      image: 'img/hotel-boutique.webp',
      short: 'Protect your rate and your story. Premium pricing without losing room nights, and a stronger share of direct bookings.',
      positioning: 'Rate protection, premium positioning, direct bookings and demand shaped by property character.',
      serves: 'Design-led boutique hotels whose character and reputation justify a premium rate position.',
      challenges: [
        'Discounting erodes a hard-won premium rate position.',
        'Demand is shaped by property character, not just location.',
        'Direct bookings are limited by weak visibility.',
        'Reviews and reputation are not turned into commercial advantage.'
      ],
      responds: [
        'Price to protect your rate position without leaving rooms empty.',
        'Turn reviews and reputation into stronger direct demand.',
        'Manage OTA content so your story is told consistently.',
        'Build a channel mix that reduces over-dependence on discounting.',
        'Track demand signals that match your specific guest profile.'
      ],
      monitored: ['Rate integrity', 'Direct versus OTA mix', 'Review sentiment', 'Pickup pace', 'Competitor positioning', 'Repeat demand'],
      rhythm: 'Daily rate and pickup review, weekly competitor review, weekly and monthly revenue reporting.',
      plan: 'Gold',
      faq: [
        { q: 'How do you protect my rate without losing bookings?', a: 'We manage rate integrity across channels and use targeted, time-limited offers instead of blanket discounting, so you hold your position while still filling rooms.' },
        { q: 'Can you grow my direct bookings?', a: 'Yes. We improve how your property is presented and managed across channels, and support a channel mix that favours direct demand where it makes commercial sense.' },
        { q: 'Do you handle reviews?', a: 'Reputation work is available and supports rate position. On higher plans, review management and structured responses are included.' }
      ]
    },
    {
      abbr: 'PL', name: 'Premium & Luxury Hotel', href: 'hotel-type-premium-luxury.html',
      image: 'img/hotel-luxury.webp',
      short: 'Rate integrity and revenue strategy that protect your brand position while growing ADR and RevPAR.',
      positioning: 'Rate integrity, ADR growth, RevPAR and protecting a high-value brand position.',
      serves: 'Premium and luxury hotels where brand position and rate integrity matter as much as occupancy.',
      challenges: [
        'Brand position is easily damaged by visible discounting.',
        'ADR and RevPAR growth must not come at the cost of reputation.',
        'Channel mix must reflect a high-value guest profile.',
        'Demand planning must anticipate high-value periods well ahead.'
      ],
      responds: [
        'Strict rate integrity across every channel.',
        'Revenue strategy built to grow ADR and RevPAR without eroding brand position.',
        'Guest-experience and upsell logic built into how you price.',
        'Demand forecasting ahead of high-value periods.',
        'Careful channel and distribution planning for a premium guest profile.'
      ],
      monitored: ['ADR', 'RevPAR', 'Rate integrity', 'Channel mix', 'Forecast accuracy', 'High-value demand periods'],
      rhythm: 'Daily rate review, weekly competitor set, weekly and monthly revenue reports, scheduled strategy meetings.',
      plan: 'Platinum',
      faq: [
        { q: 'How do you protect rate integrity?', a: 'We monitor every channel for parity and use disciplined, targeted offers rather than public discounting, so your published rate position stays credible.' },
        { q: 'Can you grow ADR and RevPAR?', a: 'Our strategy targets stronger ADR and RevPAR through better demand forecasting, pricing discipline and channel mix, subject to your market and product.' },
        { q: 'Do you support upsells?', a: 'Yes. We build guest-experience and upsell logic into pricing so a booking can earn more than the base room rate.' }
      ]
    },
    {
      abbr: 'SA', name: 'Serviced Apartment', href: 'hotel-type-serviced-apartments.html',
      image: 'img/hotel-serviced-apartment.webp',
      short: 'Length-of-stay pricing across daily, weekly and monthly guests, with OTA listing management for extended stays.',
      positioning: 'Daily, weekly and monthly pricing, length of stay and extended-stay distribution.',
      serves: 'Serviced apartments and extended-stay properties that host guests by the night, week and month.',
      challenges: [
        'A single nightly rate does not fit daily, weekly and monthly guests.',
        'Extended-stay distribution needs different OTA setup.',
        'Occupancy and rate interact differently over longer stays.',
        'Listings often under-represent apartment features and amenities.'
      ],
      responds: [
        'Length-of-stay pricing across daily, weekly and monthly stays.',
        'OTA listing management built for extended-stay demand.',
        'Rate structures that reward longer stays without eroding value.',
        'Apartment-specific content and amenity presentation.',
        'Pickup and pace tracking across stay lengths.'
      ],
      monitored: ['Length-of-stay mix', 'Weekly and monthly rates', 'Extended-stay pickup', 'Channel performance', 'Occupancy by stay type', 'Competitor rates'],
      rhythm: 'Daily rate and pickup review, weekly competitor review, monthly revenue strategy meeting.',
      plan: 'Gold',
      faq: [
        { q: 'Can you price daily, weekly and monthly stays differently?', a: 'Yes. We build length-of-stay pricing so each guest type is priced appropriately, with rate structures that reward longer bookings.' },
        { q: 'Do you set up extended-stay listings?', a: 'Yes. We manage OTA listings for extended stays, including apartment details, amenities and stay rules.' },
        { q: 'How do you track performance?', a: 'We track pickup, pace and channel performance across stay lengths so you can see where demand is coming from.' }
      ]
    },
    {
      abbr: 'VH', name: 'Villas & Homestays', href: 'hotel-type-villas-homestays.html',
      image: 'img/hotel-villa.webp',
      short: 'Get listed and ranked on Airbnb, Booking.com and other OTAs with smart pricing that fills your calendar.',
      positioning: 'OTA visibility, calendar filling, smart pricing and demand around destination dates.',
      serves: 'Villas, homestays and private rentals that need strong OTA visibility and smart calendar pricing.',
      challenges: [
        'Getting listed and ranked on the right platforms.',
        'Filling a calendar that has long empty stretches.',
        'Pricing that responds to destination demand dates.',
        'Presenting the property so it converts lookers into bookers.'
      ],
      responds: [
        'Get listed and ranked on Airbnb, Booking.com and other OTAs.',
        'Smart pricing that fills your calendar around destination dates.',
        'Listing content and photos set up to convert.',
        'Demand tracking around local events and holidays.',
        'Rate and offer setup so you are booking-ready from day one.'
      ],
      monitored: ['Calendar occupancy', 'Destination demand dates', 'Listing ranking', 'Channel mix', 'Rate competitiveness', 'Booking lead time'],
      rhythm: 'Daily rate and pickup review, weekly competitor review, monthly revenue reporting.',
      plan: 'Standard',
      faq: [
        { q: 'Which OTAs will you list my villa on?', a: 'We recommend the platforms that fit your property and market — typically Airbnb, Booking.com and other major OTAs — and set up each listing properly.' },
        { q: 'How do you fill an empty calendar?', a: 'We combine smart pricing, offers and demand tracking around destination dates so your calendar fills without permanent discounting.' },
        { q: 'Do you write the listing content?', a: 'Yes. We set up descriptions, highlights and photo presentation so your listing converts.' }
      ]
    },
    {
      abbr: 'BU', name: 'Budget Hotel', href: 'hotel-type-budget-hotels.html',
      image: 'img/hotel-budget.webp',
      short: 'Built for 10- to 20-room hotels and guest houses: OTA listing, rate setup and simple promotions, handled for you.',
      positioning: 'Simple rate setup, OTA listing, promotions and high-volume occupancy.',
      serves: 'Small hotels, guest houses and budget properties with 10 to 20 rooms that want more online bookings without a large team.',
      challenges: [
        'No in-house team to manage OTAs or rates.',
        'Listings are incomplete or missing key platforms.',
        'Rates are set once and never reviewed.',
        'Promotions are run without a clear plan.'
      ],
      responds: [
        'OTA listing, rate setup and simple promotions handled for you.',
        'Complete profiles across the platforms your guests use.',
        'Clear, competitive rates reviewed regularly.',
        'High-volume occupancy focus with sensible rate floors.',
        'Straightforward reporting you can act on.'
      ],
      monitored: ['Occupancy', 'OTA listing health', 'Rate competitiveness', 'Promotion performance', 'Pickup pace', 'Channel mix'],
      rhythm: 'Daily rate and pickup review on working days, monthly reporting.',
      plan: 'Standard',
      faq: [
        { q: 'My hotel only has 10 to 20 rooms. Is RevAlpha for me?', a: 'Yes. Our plans are built to work for small hotels and guest houses that want more online bookings without hiring a revenue team.' },
        { q: 'Do you set up my OTA listings?', a: 'Yes. We set up and optimise your listings, rooms and rates so you are ready to take bookings.' },
        { q: 'Will this be too complex for my team?', a: 'No. We keep the setup clear and simple, and hand over with everything your team needs to run it.' }
      ]
    },
    {
      abbr: 'GH', name: 'Group of Hotels', href: 'hotel-type-hotel-groups.html',
      image: 'img/hotel-group.webp',
      short: 'One revenue strategy across multiple properties, with portfolio reporting and OTA management for hotel groups and chains.',
      positioning: 'Portfolio strategy, property-level execution, consolidated reporting and consistent revenue decisions.',
      serves: 'Hotel groups, small chains and multi-property owners who need one revenue strategy across several hotels.',
      challenges: [
        'Each property prices differently, with no shared strategy.',
        'Reporting is fragmented across properties.',
        'Group demand and rate parity are hard to control.',
        'Consistent revenue decisions are difficult to enforce.'
      ],
      responds: [
        'One revenue strategy across your whole portfolio, adjusted per property type.',
        'Portfolio reporting consolidated in one place.',
        'Property-level execution with consistent standards.',
        'Group-level rate and distribution planning.',
        'Consistent revenue decisions across every property.'
      ],
      monitored: ['Portfolio RevPAR', 'Per-property performance', 'Rate parity', 'Group demand', 'Channel mix', 'Forecast accuracy'],
      rhythm: 'Daily property-level review, weekly portfolio competitor set, weekly and monthly consolidated reporting, scheduled strategy meetings.',
      plan: 'Platinum',
      faq: [
        { q: 'Can you manage several properties at once?', a: 'Yes. We run one revenue strategy across your portfolio, adjusted for each property type, with consolidated reporting.' },
        { q: 'How is reporting handled for a group?', a: 'You receive portfolio-level reporting with per-property detail, so owners and operators can see both the whole picture and each hotel.' },
        { q: 'Do different property types need different plans?', a: 'The plan is agreed at group level, with scope adjusted per property so each hotel gets the right level of support.' }
      ]
    }
  ];

  /* ----------------------------------------------------------------
     SERVICES (Solutions page)
     ---------------------------------------------------------------- */
  RA.services = [
    { num: '01', name: 'Dynamic pricing recommendations', desc: 'Room rates that move with demand, availability and the calendar instead of sitting still.', module: 'adr', scenario: 'A resort raises rates for a festival weekend three weeks ahead instead of discounting late.' },
    { num: '02', name: 'OTA management', desc: 'Listing setup, content, rates and distribution actions across the platforms your guests use, within agreed access.', module: 'ota', scenario: 'A budget hotel goes live across three OTAs with complete, optimised listings.' },
    { num: '03', name: 'Forecasting', desc: 'Demand forecasting that shows where the calendar is heading, so you price ahead of the curve.', module: 'forecast', scenario: 'A business hotel sees a conference week forming and holds rate instead of discounting.' },
    { num: '04', name: 'Pickup and pace analysis', desc: 'Daily pickup tracking that shows how bookings are landing against the same point last year.', module: 'pickup', scenario: 'A serviced apartment spots slow weekly pickup and adjusts a length-of-stay offer.' },
    { num: '05', name: 'Competitor intelligence', desc: 'AI-driven monitoring of your closest comparable set, so your rates stay competitive.', module: 'comp', scenario: 'A boutique hotel is alerted when two nearby hotels move their rates.' },
    { num: '06', name: 'Revenue opportunity alerts', desc: 'Proactive alerts on important revenue dates before the hotel has to ask.', module: 'alerts', scenario: 'A group is alerted to a long weekend forming across two of its properties.' },
    { num: '07', name: 'Performance reporting', desc: 'Clear weekly and monthly reporting on ADR, occupancy, RevPAR, channel mix and opportunities.', module: 'report', scenario: 'An owner receives a monthly report they can forward to their board.' },
    { num: '08', name: 'Revenue strategy reviews', desc: 'Scheduled strategy meetings where performance, actions and the plan ahead are reviewed.', module: 'review', scenario: 'A monthly meeting sets the pricing plan for the coming quarter.' },
    { num: '09', name: 'Distribution planning', desc: 'Channel and distribution strategy that balances OTA reach with rate control and direct demand.', module: 'dist', scenario: 'A hotel rebalances its channel mix to reduce over-dependence on one platform.' },
    { num: '10', name: 'Portfolio revenue management', desc: 'One revenue strategy across multiple properties, with consolidated reporting for groups.', module: 'portfolio', scenario: 'A small chain aligns pricing standards across four properties.' }
  ];

  /* ----------------------------------------------------------------
     PLANS
     ---------------------------------------------------------------- */
  RA.plans = [
    {
      name: 'Express Setup', featured: false,
      desc: 'For initial setup and baseline work.',
      price: 'Pricing discussed after property assessment',
      features: ['Access collection', 'Baseline analysis', 'Initial competitor validation', 'Revenue setup recommendations', 'Structured onboarding plan']
    },
    {
      name: 'Standard', featured: false,
      desc: 'For essential revenue monitoring and regular recommendations.',
      price: 'Pricing discussed after property assessment',
      features: ['OTA listing and optimisation', 'Daily rate management', 'Pickup tracking', 'Regular revenue reporting', 'Dedicated revenue manager']
    },
    {
      name: 'Gold', featured: true,
      desc: 'For broader revenue management support, regular reviews and proactive opportunities.',
      price: 'Pricing discussed after property assessment',
      features: ['Dynamic pricing on demand', 'Weekly competitor set', 'Demand forecasting', 'Weekly and monthly reports', 'Biweekly and monthly review meetings', 'Dedicated revenue manager']
    },
    {
      name: 'Platinum', featured: false,
      desc: 'For deeper strategic support, more frequent analysis and portfolio or complex-property requirements.',
      price: 'Pricing discussed after property assessment',
      features: ['AI-powered competitor and forecast tools', 'Deep ORM reporting with competitor comparison', 'Automated review replies', 'Weekly and monthly review meetings', 'Dedicated RM + RM Head', 'Portfolio support']
    }
  ];

  RA.planCompare = {
    columns: ['Express Setup', 'Standard', 'Gold', 'Platinum'],
    rows: [
      { label: 'Rate review', values: ['Setup only', 'Daily on working days', 'Daily', 'Daily, more often when scope requires'] },
      { label: 'Pickup review', values: ['—', 'Daily', 'Daily', 'Daily'] },
      { label: 'Competitor rate review', values: ['Initial validation', 'Regular', 'Daily for priority dates', 'AI-powered weekly set'] },
      { label: 'Forecasting', values: ['—', 'Basic', 'Demand forecasting', 'AI-powered forecasting'] },
      { label: 'OTA management', values: ['Listing setup', 'Listing + optimisation', 'Within agreed access', 'Within agreed access'] },
      { label: 'Reporting', values: ['Onboarding summary', 'Monthly', 'Weekly + monthly', 'Weekly + monthly + ORM'] },
      { label: 'Revenue strategy meetings', values: ['—', 'Monthly', 'Biweekly + monthly', 'Weekly + monthly'] },
      { label: 'Proactive alerts', values: ['—', '—', 'Priority dates', 'Priority + portfolio'] },
      { label: 'Portfolio support', values: ['—', '—', '—', 'Yes'] },
      { label: 'Onboarding scope', values: ['Full baseline', 'Standard', 'Standard', 'Deep + complex property'] }
    ]
  };

  /* ----------------------------------------------------------------
     OPERATING RHYTHM TIMELINE
     ---------------------------------------------------------------- */
  RA.timeline = [
    { act: 'Rate review', std: 'Daily on working days, more often when the scope requires' },
    { act: 'Pickup review', std: 'Daily' },
    { act: 'Competitor rate review', std: 'Daily for priority dates, regular for the wider calendar' },
    { act: 'Critical revenue issue', std: 'Priority attention' },
    { act: 'Weekly update', std: 'Fixed day for Performance plan and above' },
    { act: 'Monthly review', std: 'Scheduled revenue strategy meeting' },
    { act: 'Action items', std: 'Every action gets an owner and a deadline' },
    { act: 'Revenue opportunities', std: 'Proactive alert before the hotel has to ask' }
  ];

  /* ----------------------------------------------------------------
     HOW IT WORKS STEPS
     ---------------------------------------------------------------- */
  RA.steps = [
    { num: '01', name: 'Connect', desc: 'We collect access, understand your property, review your current setup and establish the baseline.' },
    { num: '02', name: 'Diagnose', desc: 'We study demand, pickup, pricing, competitors, channel performance and upcoming market dates.' },
    { num: '03', name: 'Act', desc: 'We recommend and execute practical pricing, distribution and revenue actions within the agreed scope.' },
    { num: '04', name: 'Review', desc: 'You receive clear reporting, scheduled reviews, proactive alerts and action items with owners and deadlines.' }
  ];

  /* ----------------------------------------------------------------
     HOMEPAGE FAQ
     ---------------------------------------------------------------- */
  RA.faqHome = [
    { q: 'Will RevAlpha guarantee my revenue?', a: 'No. Revenue depends on demand, product quality, reputation, operations, inventory and market conditions. We provide professional hotel revenue management services: strategy, execution and daily monitoring, not unrealistic promises.' },
    { q: 'Do you manage OTAs?', a: 'Yes, within the agreed scope. RevAlpha is also an OTA management company for hotels, but OTAs are one part of your wider pricing and distribution strategy, not the whole job.' },
    { q: 'Do I need an in-house revenue manager too?', a: 'For most independent hotels, no. Our plans are designed to work as your outsourced revenue department. Larger hotels may use RevAlpha alongside an internal team.' },
    { q: 'Can you work with my PMS or channel manager?', a: 'Usually yes, subject to access and your technology setup. Third-party software fees stay separate unless specifically included.' },
    { q: 'Do you also provide marketing?', a: 'RevAlpha focuses on revenue. Social media, SEO, websites and paid campaigns are handled by our parent company, Hospitality Minds, which has worked with 800+ hotels across 48 cities in India.' },
    { q: 'How quickly can we start?', a: 'After commercial confirmation, we begin with access collection, baseline analysis, competitor validation and a structured onboarding plan.' }
  ];

  /* ----------------------------------------------------------------
     FULL FAQ (FAQ page)
     ---------------------------------------------------------------- */
  RA.faqGroups = [
    {
      group: 'Engagement & results',
      items: [
        { q: 'Will RevAlpha guarantee my revenue?', a: 'No. Revenue depends on demand, product quality, reputation, operations, inventory and market conditions. We provide professional hotel revenue management services: strategy, execution and daily monitoring, not unrealistic promises.' },
        { q: 'What are the typical results shown on the website?', a: 'The figures +12% room nights, +8% ADR and +10% YoY growth are typical first-quarter results, not guarantees. Results vary by property, market conditions, inventory, operations and implementation.' },
        { q: 'How quickly can we start?', a: 'After commercial confirmation, we begin with access collection, baseline analysis, competitor validation and a structured onboarding plan.' },
        { q: 'Do I need an in-house revenue manager too?', a: 'For most independent hotels, no. Our plans are designed to work as your outsourced revenue department. Larger hotels may use RevAlpha alongside an internal team.' }
      ]
    },
    {
      group: 'Services & scope',
      items: [
        { q: 'Do you manage OTAs?', a: 'Yes, within the agreed scope. RevAlpha is also an OTA management company for hotels, but OTAs are one part of your wider pricing and distribution strategy, not the whole job.' },
        { q: 'What does RevAlpha own versus what stays outside?', a: 'RevAlpha owns revenue strategy, dynamic pricing recommendations, OTA management and distribution actions within agreed access, forecasting, competitor intelligence, opportunity alerts, reporting and strategy reviews. Front-office operations, guest complaints, corporate sales, marketing and OTA commission accounting stay outside RevAlpha.' },
        { q: 'Do you also provide marketing?', a: 'RevAlpha focuses on revenue. Social media, SEO, websites and paid campaigns are handled by our parent company, Hospitality Minds, which has worked with 800+ hotels across 48 cities in India.' },
        { q: 'Do you provide guaranteed occupancy, ADR or revenue growth?', a: 'No. We do not guarantee occupancy, ADR or revenue growth. We provide strategy, execution and daily monitoring, and we are transparent about what we can and cannot control.' }
      ]
    },
    {
      group: 'Technology & access',
      items: [
        { q: 'Can you work with my PMS or channel manager?', a: 'Usually yes, subject to access and your technology setup. Third-party software fees stay separate unless specifically included.' },
        { q: 'Do I need to buy new software?', a: 'Not necessarily. We work with your existing setup where possible. PMS, channel manager or RMS subscription fees stay separate unless specifically included.' },
        { q: 'How do you handle access and security?', a: 'We collect the access we need for the agreed scope and work within it. Access is used only for the revenue management activities in your plan.' }
      ]
    },
    {
      group: 'Plans & commercial',
      items: [
        { q: 'Which plan is right for my hotel?', a: 'It depends on your property, operating rhythm and revenue goals. Express Setup covers initial setup and baseline work. Standard covers essential monitoring. Gold adds broader support and proactive opportunities. Platinum covers deeper strategic and portfolio requirements.' },
        { q: 'How is pricing decided?', a: 'Pricing is discussed after a property assessment. Final scope depends on property size, technology setup, access, market and agreed commercial terms.' },
        { q: 'Can you support a group of hotels?', a: 'Yes. We run one revenue strategy across your portfolio, adjusted per property type, with consolidated reporting. Portfolio support is available on the Platinum plan.' }
      ]
    }
  ];

  /* ----------------------------------------------------------------
     FOOTER
     ---------------------------------------------------------------- */
  RA.footer = {
    line: "Your rooms are fixed. Your revenue shouldn't be.",
    sub: 'Revenue intelligence for independent hotels.',
    columns: [
      { title: 'Solutions', links: [
        { label: 'Revenue management', href: 'solutions.html' },
        { label: 'OTA management', href: 'ota-listing.html' },
        { label: 'PMS & channel manager', href: 'PMS-channel-manager.html' },
        { label: 'Plans', href: 'plans.html' }
      ] },
      { title: 'Hotel Types', links: [
        { label: 'Resort & Leisure', href: 'hotel-type-resort-leisure.html' },
        { label: 'Business Hotels', href: 'hotel-type-business-hotels.html' },
        { label: 'Boutique Hotels', href: 'hotel-type-boutique-hotels.html' },
        { label: 'Premium & Luxury', href: 'hotel-type-premium-luxury.html' },
        { label: 'Serviced Apartments', href: 'hotel-type-serviced-apartments.html' },
        { label: 'Villas & Homestays', href: 'hotel-type-villas-homestays.html' },
        { label: 'Budget Hotels', href: 'hotel-type-budget-hotels.html' },
        { label: 'Groups of Hotels', href: 'hotel-type-hotel-groups.html' }
      ] },
      { title: 'Company', links: [
        { label: 'About RevAlpha', href: 'about.html' },
        { label: 'Success stories', href: 'success-stories.html' },
        { label: 'Blog', href: 'blog.html' },
        { label: 'FAQs', href: 'faq.html' },
        { label: 'Contact', href: 'contact.html' }
      ] }
    ]
  };

  global.RA = RA;
})(window);
