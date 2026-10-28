/* ==========================================================================
   NIC ISLAMABAD STARTUP DASHBOARD - APPLICATION LOGIC
   ========================================================================== */

// 1. STARTUP DATABASE (Cohort 1 provided, Cohorts 2-5 generated mock data)
const STARTUP_DATABASE = {
    "1":  [
              {
                  "id":  "bazaaronline",
                  "linkedin":  "https://www.linkedin.com/company/bazaaronline-pk/",
                  "achievements":  [
                                       "Incubated in Cohort 1 of NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Selected for Funding Assistance and Networking Support"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "RetailTech",
                                    "Marketplace"
                                ],
                  "oneLiner":  "We have a new E-Commerce Marketplace model (Buyer/Manager/Vendor) where marketplace is more in control, empowering vendors with digital presence.",
                  "name":  "Bazaar Online",
                  "website":  "https://www.Bazaaronline.pk",
                  "founder":  "Saqib Khan",
                  "logo":  "Startup Logos/C1/No BG/Bazaar Online.png"
              },
              {
                  "id":  "datapsx",
                  "linkedin":  "https://www.linkedin.com/company/datapsx/",
                  "achievements":  [
                                       "Selected for Networking Support and Market Access for Sales programs at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Established digital footprint at datapsx.com"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "AI",
                                    "Data Extraction"
                                ],
                  "oneLiner":  "A disruptive state of the art AI powered tool that completely automates the process of extracting key financial indicators from raw unstructured PDF documents.",
                  "name":  "datapsx",
                  "website":  "https://datapsx.com",
                  "founder":  "Asadullah Baig",
                  "logo":  ""
              },
              {
                  "id":  "digitalsmart",
                  "linkedin":  "https://www.linkedin.com/in/vaqar-hussain/",
                  "achievements":  [
                                       "Selected for Networking Support and Access to VCs \u0026 Investors programs at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Established digital footprint at smsapp.pk/"
                                   ],
                  "verticals":  [
                                    "Enterprise SaaS",
                                    "Communication",
                                    "Marketing"
                                ],
                  "oneLiner":  "We are the fastest growing innovative technology platform in Pakistan, which can provide, instant digitization, to the entire digital services world.",
                  "name":  "Digital Smart \u0026 Intelligent Technologies (Pvt) Ltd",
                  "website":  "https://smsapp.pk/",
                  "founder":  "Vaqar Hussain",
                  "logo":  "Startup Logos/C1/No BG/Shopchat.png"
              },
              {
                  "id":  "echoooai",
                  "linkedin":  "https://www.linkedin.com/in/muzakirijaz/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Lahore",
                                       "Onboarded active customers in local market"
                                   ],
                  "verticals":  [
                                    "MarTech",
                                    "AI Content",
                                    "SaaS"
                                ],
                  "oneLiner":  "Klout, an AI-powered decentralized content automation platform, empowering brands and non-profits with fast, authentic, scalable content creation.",
                  "name":  "Echooo.AI",
                  "website":  "https://echooo.ai/",
                  "founder":  "Muzakir Ijaz",
                  "logo":  "Startup Logos/C1/No BG/echooai.png"
              },
              {
                  "id":  "ecobricks",
                  "linkedin":  "https://www.linkedin.com/company/ecobricks-pakistan/",
                  "achievements":  [
                                       "Selected for incubation at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Onboarded active customers in local market"
                                   ],
                  "verticals":  [
                                    "GreenTech",
                                    "Waste Recycling",
                                    "Construction"
                                ],
                  "oneLiner":  "An eco-friendly green-tech venture recycling plastic waste and industrial byproducts into durable bricks.",
                  "name":  "Eco Bricks",
                  "website":  "https://theecobricks.com/",
                  "founder":  "Kashaf Akhtar",
                  "logo":  "Startup Logos/C1/No BG/Ecobricks.png"
              },
              {
                  "id":  "evsquare",
                  "linkedin":  "https://www.linkedin.com/company/electric-vehicle-square/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Rawalpindi",
                                       "Established digital footprint at electricvehiclesquare.com"
                                   ],
                  "verticals":  [
                                    "GreenTech",
                                    "EV Conversion",
                                    "R\u0026D"
                                ],
                  "oneLiner":  "Our core services include EV conversion station converting gasoline cars to electric vehicles via retrofitting, and solar-powered ECO charging stations.",
                  "name":  "EV Square",
                  "website":  "https://www.electricvehiclesquare.com",
                  "founder":  "Aiman Shafique",
                  "logo":  "Startup Logos/C1/No BG/ev2.png"
              },
              {
                  "id":  "fither",
                  "linkedin":  "https://www.linkedin.com/company/thefither/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Rawalpindi / Lahore",
                                       "Established digital footprint at thefither.com"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Fitness \u0026 Wellness",
                                    "EdTech"
                                ],
                  "oneLiner":  "Fither is an online fitness platform tailored exclusively for women, offering personalized workout plans, nutrition guidance, and psychology sessions.",
                  "name":  "Fither",
                  "website":  "https://thefither.com",
                  "founder":  "Dr Shaista Khalid",
                  "logo":  "Startup Logos/C1/No BG/fither.png"
              },
              {
                  "id":  "geologyvibes",
                  "linkedin":  "https://www.linkedin.com/company/geologyvibes/",
                  "achievements":  [
                                       "Incubated in Cohort 1 of NIC Islamabad",
                                       "Launched gemstone multivendor digital marketplace",
                                       "Onboarded local mining clusters in Skardu and Namak Mandi"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "Marketplace",
                                    "Gemstones"
                                ],
                  "oneLiner":  "Multivendor Marketplace for Gemstone and Mineral sellers from Pakistan, connecting miners and sellers to global markets with secure transactions.",
                  "name":  "GeologyVibes",
                  "website":  "https://geologyvibes.com/",
                  "founder":  "Marvi Baig",
                  "logo":  "Startup Logos/C1/No BG/Geology Vibes.png"
              },
              {
                  "id":  "gocredit",
                  "linkedin":  "https://www.linkedin.com/in/naveed-tejani/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Karachi",
                                       "Onboarded active customers in local market"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "SME Lending",
                                    "Credit Profiling"
                                ],
                  "oneLiner":  "Go Credit addresses the challenge SMEs face in securing financial support by offering digital credit profiling and financial matchmaking.",
                  "name":  "Go Credit",
                  "website":  "https://gocredit.pk/",
                  "founder":  "Naveed Tejani",
                  "logo":  "Startup Logos/C1/No BG/SuperApp - The Digital Powerhouse LOGO-02.png"
              },
              {
                  "id":  "healthxpakistan",
                  "linkedin":  "https://www.linkedin.com/company/healthxpakistan/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Karachi",
                                       "Established digital footprint at healthxpakistan.com/"
                                   ],
                  "verticals":  [
                                    "Healthcare",
                                    "HealthTech",
                                    "OPD SaaS"
                                ],
                  "oneLiner":  "Healthx stands out for its internationally vetted, phygital, 24/7, data-driven, preventative healthcare model as a gatekeeper \u0026 primary healthcare provider.",
                  "name":  "Healthx Pakistan",
                  "website":  "https://healthxpakistan.com/",
                  "founder":  "Khaqan Sikander",
                  "logo":  ""
              },
              {
                  "id":  "instafulsolutions",
                  "linkedin":  "https://www.linkedin.com/company/instaful-solutions/",
                  "achievements":  [
                                       "Incubated in Cohort 1 of NIC Islamabad",
                                       "Developed proprietary inclusive bancassurance modules",
                                       "Established digital footprint at instaful-solutions.com"
                                   ],
                  "verticals":  [
                                    "InsurTech",
                                    "FinTech",
                                    "Social Impact"
                                ],
                  "oneLiner":  "Market-creating microinsurance innovator offering digital insurance, inclusive bancassurance, and micro-health protection for middle and mass markets.",
                  "name":  "Instaful Solutions",
                  "website":  "https://www.instaful-solutions.com",
                  "founder":  "Rehan Butt",
                  "logo":  "Startup Logos/C1/No BG/Instaful Solutions.png"
              },
              {
                  "id":  "jazb",
                  "linkedin":  "https://www.linkedin.com/company/jazb-pk/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Established digital footprint at jazb.pk/"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Mental Wellness",
                                    "EdTech"
                                ],
                  "oneLiner":  "Emotional Health Academy that aims to make youth emotionally intelligent, independent, and resilient by providing workshops, webinars, and therapy.",
                  "name":  "Jazb",
                  "website":  "https://jazb.pk/",
                  "founder":  "Esha Kirmani",
                  "logo":  "Startup Logos/C1/No BG/Jazb.png"
              },
              {
                  "id":  "jewelryline",
                  "linkedin":  "https://www.linkedin.com/company/jewelryline-co/",
                  "achievements":  [
                                       "Incubated in Cohort 1 of NIC Islamabad",
                                       "Launched online e-commerce jewelry store",
                                       "Established digital footprint at jewelryline.co/"
                                   ],
                  "verticals":  [
                                    "Direct-to-Consumer",
                                    "E-commerce",
                                    "Fashion"
                                ],
                  "oneLiner":  "High quality affordable luxury gold-plated imitation jewelry that looks just like gold, does not tarnish, and is readily shippable across Pakistan.",
                  "name":  "Jewelry Line",
                  "website":  "https://jewelryline.co/",
                  "founder":  "Rohma Ahmad",
                  "logo":  "Startup Logos/C1/No BG/Jewelry Line.png"
              },
              {
                  "id":  "lexa",
                  "linkedin":  "https://www.linkedin.com/company/lexa-lawyer/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations across Islamabad, Lahore \u0026 Karachi",
                                       "Established digital footprint at lexa.lawyer"
                                   ],
                  "verticals":  [
                                    "LegalTech",
                                    "AI",
                                    "SaaS"
                                ],
                  "oneLiner":  "LEXA has the Largest Legal Cloud Data in Pakistan with more than 1,000 parliamentary laws, 300,000+ court judgments, and 50,000+ legal research assets.",
                  "name":  "LEXA",
                  "website":  "https://www.lexa.lawyer",
                  "founder":  "Muhammad Rabeet Ali",
                  "logo":  ""
              },
              {
                  "id":  "najoomitechnologies",
                  "linkedin":  "https://www.linkedin.com/company/najoomi-technologies/",
                  "achievements":  [
                                       "Processed over 1 million call minutes in Q1 2026",
                                       "Partnered with 3 major commercial banks in Pakistan",
                                       "Reduced QA turnaround time by 75% using AI automated scoring"
                                   ],
                  "verticals":  [
                                    "Call centers",
                                    "Banks",
                                    "Telcos",
                                    "Customer Facing services"
                                ],
                  "oneLiner":  "Automating the process of call analytics and quality assurance using AI models supporting multilingual analysis for call centers and enterprises.",
                  "name":  "Najoomi Technologies",
                  "website":  "https://najoomi.ai/",
                  "founder":  "Rameel",
                  "logo":  "Startup Logos/C1/No BG/najoomi-logo-transparant-without-slogan.png"
              },
              {
                  "id":  "newvative",
                  "linkedin":  "https://www.linkedin.com/company/newvative/",
                  "achievements":  [
                                       "Selected for incubation at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Onboarded active customers in local market"
                                   ],
                  "verticals":  [
                                    "Supply Chain",
                                    "Cold Storage",
                                    "AgriTech"
                                ],
                  "oneLiner":  "Smart cold storage supply chain solutions utilizing IoT monitoring to reduce post-harvest waste and optimize agricultural produce freshness.",
                  "name":  "New Vative",
                  "website":  "https://newvative.com/",
                  "founder":  "Farrukh Bhatti",
                  "logo":  "Startup Logos/C1/No BG/NV-LOGO - Farrukh Bhatti.png"
              },
              {
                  "id":  "nfluencerr",
                  "linkedin":  "https://www.linkedin.com/company/nfluencerr/",
                  "achievements":  [
                                       "Selected for incubation at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Established digital footprint at nfluencerr.com/"
                                   ],
                  "verticals":  [
                                    "MarTech",
                                    "Marketing",
                                    "Creator Economy"
                                ],
                  "oneLiner":  "NFLUENCERR is Pakistan\u0027s first influencer marketplace where businesses can book campaigns and shoutouts with creators and stars in just a few clicks.",
                  "name":  "NFLUENCERR",
                  "website":  "https://nfluencerr.com/",
                  "founder":  "Rashid Ali",
                  "logo":  "Startup Logos/C1/No BG/NFLUENCERR.png"
              },
              {
                  "id":  "phishcode",
                  "linkedin":  "https://www.linkedin.com/company/phishcode/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support at NIC Islamabad",
                                       "Developed gamified cybersecurity phishing simulations",
                                       "Established digital footprint at phishcode.com"
                                   ],
                  "verticals":  [
                                    "Cybersecurity",
                                    "SaaS",
                                    "Enterprise"
                                ],
                  "oneLiner":  "SaaS cybersecurity awareness and attack simulation platform training corporate employees to recognize and prevent social engineering breaches.",
                  "name":  "PHISHCODE",
                  "website":  "https://www.phishcode.com",
                  "founder":  "Ahsan Shakeel",
                  "logo":  ""
              },
              {
                  "id":  "planckly",
                  "linkedin":  "https://www.linkedin.com/company/planckly/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Karachi",
                                       "Established digital footprint at planckly.com/"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "FinTech",
                                    "Embedded Commerce"
                                ],
                  "oneLiner":  "Connecting bank, wallet, and telco apps to a cloud-based AI powered embedded commerce platform for seamless consumer transactions.",
                  "name":  "Planckly",
                  "website":  "https://planckly.com/",
                  "founder":  "Uzair Siddiqui",
                  "logo":  "Startup Logos/C1/No BG/planckly.png"
              },
              {
                  "id":  "prosilientsystemsinc",
                  "linkedin":  "https://www.linkedin.com/company/prosilient-systems/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support programs at NIC Islamabad",
                                       "Successfully launched operations based out of Islamabad",
                                       "Established digital footprint at prosilient.systems/"
                                   ],
                  "verticals":  [
                                    "Healthcare",
                                    "HealthTech",
                                    "Remote Monitoring"
                                ],
                  "oneLiner":  "Comprehensive remote health-monitoring solution integrating smart-watches, scales, and cloud consoles for clinicians to monitor patients remotely.",
                  "name":  "Prosilient Systems Inc.",
                  "website":  "https://prosilient.systems/",
                  "founder":  "Alizay Fatima Tariq",
                  "logo":  "Startup Logos/C1/No BG/prosilent systems.png"
              },
              {
                  "id":  "prospecthippo",
                  "linkedin":  "https://www.linkedin.com/company/prospecthippo/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Mentorship programs at NIC Islamabad",
                                       "Launched B2B sales intelligence APIs",
                                       "Established digital footprint at externalogix.com/"
                                   ],
                  "verticals":  [
                                    "SalesTech",
                                    "B2B SaaS",
                                    "Lead Generation"
                                ],
                  "oneLiner":  "Global B2B sales automation and lead generation API tools helping businesses streamline prospect research and outreach.",
                  "name":  "ProspectHippo",
                  "website":  "https://www.externalogix.com/",
                  "founder":  "Sarooj Gill",
                  "logo":  ""
              },
              {
                  "id":  "regen",
                  "linkedin":  "https://www.linkedin.com/company/regenpk/",
                  "achievements":  [
                                       "Selected for incubation at NIC Islamabad",
                                       "Certified thousands of pre-owned smartphones",
                                       "Established digital footprint at regen.pk"
                                   ],
                  "verticals":  [
                                    "Re-commerce",
                                    "Circular Economy",
                                    "Consumer Tech"
                                ],
                  "oneLiner":  "Streamlining buying and selling of used smartphones by offering certified diagnostic reports and a 1-year warranty standard in Pakistan.",
                  "name":  "REGEN",
                  "website":  "https://regen.pk",
                  "founder":  "Bilal Athar",
                  "logo":  "Startup Logos/C1/No BG/REGEN - Logo - Green-Black.png"
              },
              {
                  "id":  "scountspk",
                  "linkedin":  "https://www.linkedin.com/company/scounts-pk/",
                  "achievements":  [
                                       "Selected for Networking Support and Mentorship programs at NIC Islamabad",
                                       "Launched automated tax filing app across Karachi \u0026 Sukkur",
                                       "Established digital footprint at scounts.pk"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "TaxTech",
                                    "SaaS"
                                ],
                  "oneLiner":  "A mobile tax consultant and filing assistant in Pakistan making tax compliance accessible, transparent, and automated for individuals and SMEs.",
                  "name":  "Scounts.pk",
                  "website":  "https://scounts.pk",
                  "founder":  "Maqsood",
                  "logo":  ""
              },
              {
                  "id":  "skillibility",
                  "linkedin":  "https://www.linkedin.com/company/skillibility/",
                  "achievements":  [
                                       "Successfully tested 700+ job candidates across multiple industries",
                                       "Selected for Funding Assistance and Networking at NIC Islamabad",
                                       "Established digital footprint at skillibility.com"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "SaaS",
                                    "Recruitment"
                                ],
                  "oneLiner":  "Online skill assessment platform where companies create pre-employment tests with anti-cheating monitors and one-way video interviews.",
                  "name":  "Skillibility Testing Services",
                  "website":  "https://skillibility.com",
                  "founder":  "Muhammad Fahad",
                  "logo":  "Startup Logos/C1/No BG/skilibility.png"
              },
              {
                  "id":  "stiskytechnology",
                  "linkedin":  "https://www.linkedin.com/company/skytechinn/",
                  "achievements":  [
                                       "Deployed indigenous drone units with edge computing capabilities",
                                       "Selected for incubation and R\u0026D support at NIC Islamabad",
                                       "Established digital footprint at skytechinn.com"
                                   ],
                  "verticals":  [
                                    "Aerospace",
                                    "UAV / Drones",
                                    "DefenseTech"
                                ],
                  "oneLiner":  "Indigenous manufacturing of surveillance UAV drones equipped with onboard computers running AI/ML algorithms for defense, disaster, and agriculture.",
                  "name":  "STI-Sky Technology \u0026 Innovations",
                  "website":  "https://www.skytechinn.com",
                  "founder":  "M Muzamal Shahzad",
                  "logo":  "Startup Logos/C1/No BG/SkyTechInn_Logo_png - Muhammad Muzamal Shahzad.png"
              },
              {
                  "id":  "sugargreen",
                  "linkedin":  "https://www.linkedin.com/in/muhammad-ahad-asif/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking at NIC Islamabad",
                                       "Developed biodegradable tableware heat-tested to 150Â°C",
                                       "Launched operations based out of Rawalpindi"
                                   ],
                  "verticals":  [
                                    "GreenTech",
                                    "Sustainable Packaging",
                                    "Biodegradable"
                                ],
                  "oneLiner":  "Eco-friendly, microwave-safe tableware, bottles, and packaging made from sugarcane bagasse as a biodegradable alternative to plastic.",
                  "name":  "Sugar Green",
                  "website":  "https://65cff9828f9c513c988e68e8--dancing-selkie-2d3475.netlify.app",
                  "founder":  "Muhammad Ahad Asif",
                  "logo":  ""
              },
              {
                  "id":  "thetuitionist",
                  "linkedin":  "https://www.linkedin.com/company/thetuitionist/",
                  "achievements":  [
                                       "Generated over 1 Million PKR in revenue across tutoring and LMS platforms",
                                       "Selected for incubation and VC access at NIC Islamabad",
                                       "Established digital footprint at linktr.ee/thetuitionist"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "Tutoring Marketplace",
                                    "SaaS"
                                ],
                  "oneLiner":  "Digitizing Pakistan\u0027s education system with free administrative software for schools and a verified tutor booking marketplace for parents and students.",
                  "name":  "The Tuitionist",
                  "website":  "https://linktr.ee/thetuitionist",
                  "founder":  "Hanan Asif",
                  "logo":  "Startup Logos/C1/No BG/The Tuitionist.png"
              },
              {
                  "id":  "tradeunleashed",
                  "linkedin":  "https://www.linkedin.com/company/trade-unleashed/",
                  "achievements":  [
                                       "Serving major fashion retail networks with unified multi-store ERP",
                                       "Selected for Funding Assistance and Networking at NIC Islamabad",
                                       "Established digital footprint at tradeunleashed.com/"
                                   ],
                  "verticals":  [
                                    "RetailTech",
                                    "SaaS ERP",
                                    "E-commerce"
                                ],
                  "oneLiner":  "Enterprise-grade cloud ERP and unified SaaS platform for retail and e-commerce businesses managing inventory, accounting, and logistics in one place.",
                  "name":  "Trade Unleashed",
                  "website":  "https://tradeunleashed.com/",
                  "founder":  "Zeeshan Aslam",
                  "logo":  "Startup Logos/C1/No BG/Trade-Unleashed-logo-horizontal-black - Zeeshan Sulehria.png"
              },
              {
                  "id":  "trailrush",
                  "linkedin":  "https://www.linkedin.com/in/sara-nadeem/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking Support at NIC Islamabad",
                                       "Created offline mapping databases for Northern Pakistan trails",
                                       "Onboarded active outdoor community members"
                                   ],
                  "verticals":  [
                                    "TravelTech",
                                    "Navigation",
                                    "Offline Maps"
                                ],
                  "oneLiner":  "Navigation and discovery mobile app guiding outdoor enthusiasts and travelers through remote, off-grid locations without cellular connection.",
                  "name":  "Trail rush",
                  "website":  "https://trailrush.pk/",
                  "founder":  "Sara Nadeem",
                  "logo":  "Startup Logos/C1/No BG/trail rush.png"
              },
              {
                  "id":  "trulypakistan",
                  "linkedin":  "https://www.linkedin.com/company/trulypakistan/",
                  "achievements":  [
                                       "Selected for Funding Assistance and Networking at NIC Islamabad",
                                       "Active SaaS portal utilized by boutique hotels and tour operators",
                                       "Established digital footprint at trulypakiatan.com"
                                   ],
                  "verticals":  [
                                    "TravelTech",
                                    "SaaS",
                                    "Tourism"
                                ],
                  "oneLiner":  "Comprehensive SaaS suite digitizing travel, tour operators, and hospitality bookings with AI-driven guest and marketing automation.",
                  "name":  "TrulyPakistan",
                  "website":  "https://www.trulypakiatan.com",
                  "founder":  "ZunNurain Khalid",
                  "logo":  "Startup Logos/C1/No BG/TrulyPakistanLogo-300DPIRGB - ZunNurain Khalid.png"
              },
              {
                  "id":  "verityai",
                  "linkedin":  "https://www.linkedin.com/company/verity-ai/",
                  "achievements":  [
                                       "Incubated in Cohort 1 of NIC Islamabad",
                                       "Deployed customer interaction AI chatbots for e-commerce clients",
                                       "Established digital footprint at disruptiveai.co/"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "SaaS",
                                    "Chatbots"
                                ],
                  "oneLiner":  "Intuitive no-code AI chatbot builder trained on specific company data to deliver 24/7 intelligent customer care for modern businesses.",
                  "name":  "Verity AI",
                  "website":  "http://disruptiveai.co/",
                  "founder":  "Ahsan Solanki",
                  "logo":  ""
              },
              {
                  "id":  "yodo",
                  "linkedin":  "https://www.linkedin.com/company/yodobikes/",
                  "achievements":  [
                                       "Pioneered micro-mobility pilot at LUMS with over 60% female ridership",
                                       "Selected for incubation and market access at NIC Islamabad",
                                       "Established digital footprint at yodobikes.com/"
                                   ],
                  "verticals":  [
                                    "Mobility",
                                    "GreenTech",
                                    "EV Sharing"
                                ],
                  "oneLiner":  "Self-driven electric bike sharing and micro-mobility service for university campuses and young urban commuters.",
                  "name":  "YODO (You Only Drive Once)",
                  "website":  "https://yodobikes.com/",
                  "founder":  "Ahmed Ayan",
                  "logo":  "Startup Logos/C1/No BG/YODO.png"
              }
          ],
    "2":  [
              {
                  "id":  "01hire",
                  "linkedin":  "https://www.linkedin.com/in/maryam-shakir-a8a69754",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Integrated with 01HRMS proprietary software platform",
                                       "Serving tech clients across Pakistan and GCC"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "Recruitment",
                                    "SaaS"
                                ],
                  "oneLiner":  "A premium recruitment agency leveraging technology and the 01HRMS platform to streamline hiring and optimize HR processes.",
                  "name":  "01Hire",
                  "website":  "https://01hire.com",
                  "founder":  "Maryam Shakir",
                  "logo":  "Startup Logos/C2/No BG/01 Hire.png"
              },
              {
                  "id":  "3musafir",
                  "linkedin":  "https://www.linkedin.com/in/ali-hassanm381/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Successfully completed 100+ organized community travel expeditions",
                                       "Active mobile app with 5,000+ verified women travelers"
                                   ],
                  "verticals":  [
                                    "TravelTech",
                                    "Community",
                                    "Women Empowerment"
                                ],
                  "oneLiner":  "A community-based app empowering women in Pakistan to travel safely and affordably through organized group trips and a supportive environment.",
                  "name":  "3 Musafir",
                  "website":  "https://3musafir.com",
                  "founder":  "Ahmed Bin Abrar \u0026 Ali Hassan",
                  "logo":  "Startup Logos/C2/No BG/3Musafir.png"
              },
              {
                  "id":  "aidentify",
                  "linkedin":  "https://www.linkedin.com/company/ai-dentify8/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Piloted with 25+ specialized dental clinics",
                                       "Achieved 94% diagnostic accuracy in dental radiological imagery"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "AI",
                                    "Diagnostics"
                                ],
                  "oneLiner":  "An innovative AI diagnostic tool enhancing dental workflows with accurate diagnoses and plans to expand into broader healthcare applications.",
                  "name":  "AI Dentify",
                  "website":  "https://aidentify.health",
                  "founder":  "Dr. Aimen Ziaraf \u0026 Dr Saeed Mustafa",
                  "logo":  "Startup Logos/C2/No BG/AI-Dentify.png"
              },
              {
                  "id":  "belledelights",
                  "linkedin":  "https://www.linkedin.com/in/zumla-yasin-5409a1252/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Fulfilled over 5,000 direct-to-consumer orders nationwide",
                                       "Featured across prominent women empowerment summits"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "Fashion",
                                    "Women-Led"
                                ],
                  "oneLiner":  "An e-commerce store empowering women through stylish, affordable handbags with a commitment to gender equality.",
                  "name":  "Belle Delights",
                  "website":  "https://belledelights.com",
                  "founder":  "Zumla Shehzadi",
                  "logo":  "Startup Logos/C2/No BG/Belle delights.png"
              },
              {
                  "id":  "brainswarm",
                  "linkedin":  "https://www.linkedin.com/company/brainswarm",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Deployed experiential robotics kits in 40+ educational institutes",
                                       "Finalist in Ignite National Innovation Showcase"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "Robotics",
                                    "Hardware"
                                ],
                  "oneLiner":  "AI-powered educational robotics kits enabling hands-on learning in robotics, programming, and AI with experiential, customizable tools.",
                  "name":  "Brainswarm",
                  "website":  "https://brainswarm.pk",
                  "founder":  "Saran Khaliq",
                  "logo":  "Startup Logos/C2/No BG/Brainswam_logo - Saran Khaliq 1.png"
              },
              {
                  "id":  "calcixinternational",
                  "linkedin":  "https://www.linkedin.com/company/calcix-international/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Engineered limestone-infused composite pellet formulation",
                                       "Concluded pilot sampling tests with industrial polymer manufacturers"
                                   ],
                  "verticals":  [
                                    "GreenTech",
                                    "Material Science",
                                    "CleanTech"
                                ],
                  "oneLiner":  "Developing biodegradable pellets as a cost-effective, eco-friendly alternative to plastics, made from calcium carbonate-rich limestone.",
                  "name":  "Calcix International",
                  "website":  "https://calcix.pk",
                  "founder":  "Muhammad Mahad Arif",
                  "logo":  "Startup Logos/C2/No BG/Calcix International.png"
              },
              {
                  "id":  "connectia",
                  "linkedin":  "https://www.linkedin.com/company/connectia-io/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Secured strategic agreements with corporate logistics haulers",
                                       "Automated fleet fuel expense reconciliation saving 12% in operational overhead"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "Fleet Management",
                                    "AI"
                                ],
                  "oneLiner":  "A financial wellness platform for MENAP transportation businesses, solving inefficient fleet spending with an AI-powered unified solution for fuel payments, expense management, and telematics.",
                  "name":  "Connectia",
                  "website":  "https://connectia.io",
                  "founder":  "Ahsan Shamim",
                  "logo":  "Startup Logos/C2/No BG/connectia_logo 4 - Ahsan Shamim.png"
              },
              {
                  "id":  "contentcanopy",
                  "linkedin":  "https://www.linkedin.com/in/sameersohail/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Serviced 30+ enterprise clients across North America and Pakistan",
                                       "Delivered over 10,000 customized marketing collateral units"
                                   ],
                  "verticals":  [
                                    "MarTech",
                                    "Generative AI",
                                    "Content"
                                ],
                  "oneLiner":  "A subscription-based service combining human and AI-driven content production through a custom dashboard for businesses.",
                  "name":  "Content Canopy",
                  "website":  "https://contentcanopy.com",
                  "founder":  "Sameer Sohail",
                  "logo":  "Startup Logos/C2/No BG/4.png"
              },
              {
                  "id":  "cosmosys",
                  "linkedin":  "https://www.linkedin.com/company/cosmosys-co/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Built Fastrack AI conversational talent screener",
                                       "Slashed initial candidate screening latency by 80%"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "AI",
                                    "Recruitment"
                                ],
                  "oneLiner":  "An AI-powered talent search engine automating recruitment up to the first interview, reducing screening costs and hiring time.",
                  "name":  "Cosmosys",
                  "website":  "https://fastrack.ai",
                  "founder":  "Muhammad Huzaifa Khan",
                  "logo":  "Startup Logos/C2/No BG/4.png"
              },
              {
                  "id":  "emrchains",
                  "linkedin":  "https://pk.linkedin.com/in/osama-alam-68135b254",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Processed thousands of automated patient medical records",
                                       "Integrated localized multilingual diagnosis chatbot"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "AI",
                                    "Telehealth"
                                ],
                  "oneLiner":  "Transforming healthcare with a patient-centric platform featuring AI-based imaging solutions and a multilingual chatbot for instant support.",
                  "name":  "EMRChains",
                  "website":  "https://emrchains.com",
                  "founder":  "Osama Alam",
                  "logo":  "Startup Logos/C2/No BG/EMRCHAIN LOGO - EMRChains.png"
              },
              {
                  "id":  "evalia",
                  "linkedin":  "https://www.linkedin.com/in/sadia-ashraf/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Created automated technical skill assessment simulations",
                                       "Validated hiring pipelines with leading IT consulting houses"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "AI",
                                    "Talent Assessment"
                                ],
                  "oneLiner":  "An AI-powered recruitment platform using role-specific simulations and multi-modal AI to identify top talent and reduce mis-hires.",
                  "name":  "Evalia",
                  "website":  "https://evalia.ai",
                  "founder":  "Sadia Ashraf",
                  "logo":  "Startup Logos/C2/No BG/Evalia.png"
              },
              {
                  "id":  "evowear",
                  "linkedin":  "https://www.linkedin.com/in/hadi-muhammad-441915215/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Engineered functional prototype for lower limb assistive movement",
                                       "Conducted initial clinical trial evaluations in Islamabad"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Hardware",
                                    "Robotics"
                                ],
                  "oneLiner":  "Developing AI-powered exoskeleton devices that personalize mobility support for lower limb rehabilitation using adaptive machine learning.",
                  "name":  "EvoWear",
                  "website":  "https://evowear.pk",
                  "founder":  "Hadi Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "flowtime",
                  "linkedin":  "https://www.linkedin.com/in/ali-turab-jafry-19559a17/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Patented microfluidic paper sensor membrane mechanism",
                                       "Won international sustainability innovation grants"
                                   ],
                  "verticals":  [
                                    "BioTech",
                                    "Supply Chain",
                                    "Hardware"
                                ],
                  "oneLiner":  "Pioneering a time-temperature indicator for real-time quality assurance in food and pharmaceutical cold storage using liquid flow in a paper membrane.",
                  "name":  "Flow Time",
                  "website":  "https://flowtime.pk",
                  "founder":  "Ali Turab Jafry",
                  "logo":  "Startup Logos/C2/No BG/Flow Time.png"
              },
              {
                  "id":  "freshbox",
                  "linkedin":  "https://www.linkedin.com/in/faisal-shehzad-freshbox/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Connected rural produce growers directly with metro vendors",
                                       "Reduced fresh fruit and vegetable post-harvest wastage by 20%"
                                   ],
                  "verticals":  [
                                    "AgriTech",
                                    "Supply Chain",
                                    "Sustainability"
                                ],
                  "oneLiner":  "Revolutionizing agriculture with technology and sustainable practices to optimize supply chains and ensure efficient delivery of fresh produce.",
                  "name":  "Fresh Box",
                  "website":  "https://freshbox.pk",
                  "founder":  "Faisal Shehzad",
                  "logo":  "Startup Logos/C2/No BG/BSR Logo - New.png"
              },
              {
                  "id":  "kangaroocareai",
                  "linkedin":  "https://www.linkedin.com/in/noorulamin-bmed/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Developed cost-effective neonatal phototherapy warmers",
                                       "Conducted deployment trials in tertiary public hospitals"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Medical Devices",
                                    "Hardware"
                                ],
                  "oneLiner":  "Enhancing neonatal care with innovative medical devices like incubators, warmers, and phototherapy lights for preterm infants.",
                  "name":  "KangarooCare AI",
                  "website":  "https://kangaroocare.ai",
                  "founder":  "Noor Ul Amin \u0026 Islam un Nisa",
                  "logo":  ""
              },
              {
                  "id":  "learnonlinepk",
                  "linkedin":  "https://www.linkedin.com/in/iusmanzeb/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Trained over 15,000 active students in certified digital tracks",
                                       "Formed hiring alliances with local software companies"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "E-learning",
                                    "Skills"
                                ],
                  "oneLiner":  "An e-learning platform bridging the skills gap with affordable, practical training for Pakistani students and professionals.",
                  "name":  "LearnOnline.pk",
                  "website":  "https://learnonline.pk",
                  "founder":  "Usman Zeb",
                  "logo":  "Startup Logos/C2/No BG/learnonline logo2 - Usman Zeb.png"
              },
              {
                  "id":  "maidan",
                  "linkedin":  "https://www.linkedin.com/in/raja-mushahid-136474242",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Partnered with 50+ cricket, futsal, and padel turf facilities",
                                       "Processed 20,000+ match booking requests on app"
                                   ],
                  "verticals":  [
                                    "SportsTech",
                                    "Mobile App",
                                    "Community"
                                ],
                  "oneLiner":  "A mobile app enabling sports enthusiasts to find and book venues, games, and players with seamless matchmaking and in-app payments.",
                  "name":  "Maidan",
                  "website":  "https://maidan.pk",
                  "founder":  "Raja M. Mushahid",
                  "logo":  "Startup Logos/C2/No BG/Maidan logo.png"
              },
              {
                  "id":  "makeyourteam",
                  "linkedin":  "https://www.linkedin.com/company/make-your-team/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Launched AI Team Force virtual assistant modules",
                                       "Empowered 40+ startups with autonomous operational agents"
                                   ],
                  "verticals":  [
                                    "Enterprise SaaS",
                                    "AI Workforce",
                                    "Operations"
                                ],
                  "oneLiner":  "An AI workforce platform for businesses to manage high-performing, customizable teams for sales, marketing, and support.",
                  "name":  "Make Your Team",
                  "website":  "https://makeyourteam.ai",
                  "founder":  "Mirza Moheb Ahmed",
                  "logo":  "Startup Logos/C2/No BG/AI Team Force- logo.png"
              },
              {
                  "id":  "prosensia",
                  "linkedin":  "https://www.linkedin.com/in/mominkj78",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Installed IoT condition sensors across commercial buildings",
                                       "Decreased commercial HVAC downtime incidents by 35%"
                                   ],
                  "verticals":  [
                                    "IoT",
                                    "CleanTech",
                                    "Predictive Maintenance"
                                ],
                  "oneLiner":  "A predictive maintenance solution for air conditioning systems, using AI to monitor and prevent malfunctions in real time.",
                  "name":  "ProSensia",
                  "website":  "https://prosensia.pk",
                  "founder":  "Momin Khan",
                  "logo":  "Startup Logos/C2/No BG/Prosensia.png"
              },
              {
                  "id":  "ridecaro",
                  "linkedin":  "https://www.linkedin.com/in/hassan-murad-96b20824b",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Registered 3,000+ verified drivers with zero commission structure",
                                       "Built proprietary self-hosted OpenStreetMap server infrastructure"
                                   ],
                  "verticals":  [
                                    "Mobility",
                                    "Platform",
                                    "Transportation"
                                ],
                  "oneLiner":  "A commission-free, cloud-agnostic taxi app for Pakistan, empowering drivers with self-hosted maps and minimal daily fees.",
                  "name":  "Ride Caro",
                  "website":  "https://ridecaro.com",
                  "founder":  "Syed Hassan Murad Ali",
                  "logo":  "Startup Logos/C2/No BG/ridecaro.png"
              },
              {
                  "id":  "scholarbee",
                  "linkedin":  "https://www.linkedin.com/in/taimuralidodo/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Automated international university applications for 1,200+ students",
                                       "Secured partnerships with accredited overseas colleges"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "Admissions",
                                    "Global Education"
                                ],
                  "oneLiner":  "A centralized application platform streamlining university admissions worldwide for students through a simplified process.",
                  "name":  "Scholar Bee",
                  "website":  "https://scholarbee.ai",
                  "founder":  "Basit Afraz \u0026 Muhammad Taimur Ali",
                  "logo":  "Startup Logos/C2/No BG/Scholar bee.png"
              },
              {
                  "id":  "sothassi",
                  "linkedin":  "https://www.linkedin.com/in/shamoon-qurashi-1912a1202",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Engineered high-aerodynamic superbike chassis prototype",
                                       "Conducted wind tunnel simulations reaching projected 400+ km/h dynamics"
                                   ],
                  "verticals":  [
                                    "Automotive",
                                    "DeepTech",
                                    "Manufacturing"
                                ],
                  "oneLiner":  "Developing the world\u0027s fastest production motorcycle, Urooj, designed to achieve record-breaking speed and performance.",
                  "name":  "Sothassi",
                  "website":  "https://sothassi.com",
                  "founder":  "Shamoon Qureshi",
                  "logo":  "Startup Logos/C2/No BG/Sothassi.png"
              },
              {
                  "id":  "tayari",
                  "linkedin":  "https://www.linkedin.com/company/tayaripk/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Onboarded 200+ verified wedding marquees and catering vendors",
                                       "Facilitated over 50 Million PKR in event bookings"
                                   ],
                  "verticals":  [
                                    "EventTech",
                                    "Marketplace",
                                    "E-commerce"
                                ],
                  "oneLiner":  "An online event booking platform simplifying weddings, corporate events, and celebrations with a seamless, all-in-one solution for venues, caterers, and decorators.",
                  "name":  "Tayari",
                  "website":  "https://tayari.pk",
                  "founder":  "Ali Arshad",
                  "logo":  "Startup Logos/C2/No BG/tayari.png"
              },
              {
                  "id":  "telyai",
                  "linkedin":  "https://www.linkedin.com/in/nimra-akmal/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Deployed conversational NLP agents for retail brands",
                                       "Processed 100,000+ support interactions with 90% resolution rate"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "MarTech",
                                    "Conversational AI"
                                ],
                  "oneLiner":  "A conversational AI platform for real-time customer support, order management, and sentiment analysis for targeted marketing campaigns.",
                  "name":  "Tely AI",
                  "website":  "https://tely.ai",
                  "founder":  "Nimra Akmal",
                  "logo":  ""
              },
              {
                  "id":  "trumpple",
                  "linkedin":  "https://www.linkedin.com/company/trumpple/",
                  "achievements":  [
                                       "Incubated in Cohort 2 of NIC Islamabad",
                                       "Launched unified cloud invoicing and inventory tracker",
                                       "Adopted by 500+ micro retailers across Pakistan"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "SaaS",
                                    "Operations"
                                ],
                  "oneLiner":  "An all-in-one SaaS platform simplifying financial and operational management for small and medium-sized businesses.",
                  "name":  "Trumpple",
                  "website":  "https://trumpple.com",
                  "founder":  "Zeeshan Ahmad",
                  "logo":  "Startup Logos/C2/No BG/trumplee.png"
              }
          ],
    "3":  [
              {
                  "id":  "audiostream",
                  "linkedin":  "https://www.linkedin.com/in/khairaza-k/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Launched regional content creator network",
                                       "Surpassed 50,000 monthly active listeners"
                                   ],
                  "verticals":  [
                                    "Entertainment",
                                    "MediaTech"
                                ],
                  "oneLiner":  "A 3-in-1 audio streaming and podcast distribution platform.",
                  "name":  "AudioStream",
                  "website":  "https://audiostream.pk",
                  "founder":  "Khairaza K",
                  "logo":  ""
              },
              {
                  "id":  "bionano",
                  "linkedin":  "https://www.linkedin.com/in/mohsin-ali/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Selected for HEC NRPU and IRSIP grant funding",
                                       "Established core lab prototyping facility"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "BioTech"
                                ],
                  "oneLiner":  "Pioneering bio-nanotechnology solutions for medical applications.",
                  "name":  "Bio-Nano",
                  "website":  "https://bionano.pk",
                  "founder":  "Mohsin Ali",
                  "logo":  "Startup Logos/C3/No BG/Bio-nano.png"
              },
              {
                  "id":  "carbonca",
                  "linkedin":  "https://www.linkedin.com/in/ali-ahmed/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Received 70,000 Euros funding from GIZ and AKF",
                                       "Onboarded 5 corporate carbon offset buyers"
                                   ],
                  "verticals":  [
                                    "GreenTech",
                                    "Sustainability"
                                ],
                  "oneLiner":  "Carbon Credit Marketplace connecting businesses to verified green offset projects.",
                  "name":  "CarbonCa",
                  "website":  "https://carbonca.com",
                  "founder":  "Ali Ahmed",
                  "logo":  "Startup Logos/C3/No BG/CarbonCap.png"
              },
              {
                  "id":  "chrio",
                  "linkedin":  "https://www.linkedin.com/in/saffi-muhammad/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Bootstrapped AR/VR sports visualization portal",
                                       "Integrated real-time player telemetry overlays"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "SportsTech",
                                    "AR/VR"
                                ],
                  "oneLiner":  "AI Sports Entertainment and augmented reality platform.",
                  "name":  "Chrio",
                  "website":  "https://www.chrio.live",
                  "founder":  "Saffi Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "demetra",
                  "linkedin":  "https://www.linkedin.com/in/jawad-ahmed/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Deployed smart IoT electric sensors",
                                       "Reduced client grid wastage by 18% on average"
                                   ],
                  "verticals":  [
                                    "IoT",
                                    "Hardware"
                                ],
                  "oneLiner":  "IoT and electrical monitoring devices for home and industrial efficiency.",
                  "name":  "Demetra",
                  "website":  "https://demetronics.com",
                  "founder":  "Jawad Ahmed",
                  "logo":  "Startup Logos/C3/No BG/demetronics  MAIN COLOUR 1 - Abdul Wasay.png"
              },
              {
                  "id":  "detectra",
                  "linkedin":  "https://www.linkedin.com/in/abdullah/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Winner of multiple national startup awards",
                                       "Deployed real-time anomaly detection pipelines"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "AI"
                                ],
                  "oneLiner":  "AI-powered diagnostic and threat detection tools.",
                  "name":  "Detectra",
                  "website":  "https://detectra.ai",
                  "founder":  "Abdullah",
                  "logo":  "Startup Logos/C3/No BG/detectra.png"
              },
              {
                  "id":  "eddiy",
                  "linkedin":  "https://www.linkedin.com/in/sana-nabeel/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Launched pilot HR training simulations",
                                       "Improved training completion rates by 40%"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "AI"
                                ],
                  "oneLiner":  "AI-driven workforce training and HR development platform.",
                  "name":  "Eddiy",
                  "website":  "https://eddiy.edly.io",
                  "founder":  "Sana Nabeel",
                  "logo":  "Startup Logos/C3/No BG/EDDIY LOGO.png"
              },
              {
                  "id":  "ekko",
                  "linkedin":  "https://www.linkedin.com/in/muhammad/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Secured HEC TDF grant of 7.35 Million PKR",
                                       "Integrated wearable biometric feedback loops"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Wearables"
                                ],
                  "oneLiner":  "HealthTech solution integrating wellness devices and tracking software.",
                  "name":  "EKKO",
                  "website":  "https://www.ekko.pk",
                  "founder":  "Muhammad",
                  "logo":  "Startup Logos/C3/No BG/EKKO.png"
              },
              {
                  "id":  "epo",
                  "linkedin":  "https://www.linkedin.com/in/bilal-gondal/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Partnered with local community foundations",
                                       "Processed 10,000+ utility requests in North Punjab"
                                   ],
                  "verticals":  [
                                    "Consumer Tech",
                                    "CleanTech"
                                ],
                  "oneLiner":  "Consumer tech portal providing simplified home and utility services.",
                  "name":  "EPO",
                  "website":  "https://epopakistan.com",
                  "founder":  "Bilal Gondal",
                  "logo":  "Startup Logos/C3/No BG/environmental productivity.png"
              },
              {
                  "id":  "ezgeyser",
                  "linkedin":  "https://www.linkedin.com/in/sana-khattak/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Secured 5 Million USD seed funding commitment",
                                       "Deployed over 5,000 smart geyser units"
                                   ],
                  "verticals":  [
                                    "IoT",
                                    "GreenTech"
                                ],
                  "oneLiner":  "IoT smart geyser controllers optimizing household gas and electricity consumption.",
                  "name":  "ezGeyser",
                  "website":  "https://ezgeyser.com",
                  "founder":  "Sana Khattak",
                  "logo":  "Startup Logos/C3/No BG/ezgeyser (2).png"
              },
              {
                  "id":  "fabify",
                  "linkedin":  "https://www.linkedin.com/company/fabify/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Onboarded smart home clients in Islamabad",
                                       "Custom hardware integrations with top lights/HVAC brands"
                                   ],
                  "verticals":  [
                                    "IoT",
                                    "Smart Home"
                                ],
                  "oneLiner":  "IoT-based automation systems for modern smart homes.",
                  "name":  "Fabify",
                  "website":  "https://fabify.pk",
                  "founder":  "Fabify Team",
                  "logo":  "Startup Logos/C3/No BG/Loonbug.png"
              },
              {
                  "id":  "fashiontec",
                  "linkedin":  "https://www.linkedin.com/in/abdul-basit/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Onboarded local designers and retail outlets",
                                       "Integrated 3D sizing advisor algorithms"
                                   ],
                  "verticals":  [
                                    "FashionTech",
                                    "E-commerce"
                                ],
                  "oneLiner":  "A hyper-personalized fashion e-commerce and style matchmaking engine.",
                  "name":  "FashionTec",
                  "website":  "https://fashiontec.pk",
                  "founder":  "Abdul Basit",
                  "logo":  ""
              },
              {
                  "id":  "instantpay",
                  "linkedin":  "https://www.linkedin.com/in/haadhee/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Integrated with major retail billing networks",
                                       "Achieved transaction processing latency under 100ms"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "Payments"
                                ],
                  "oneLiner":  "Instant payment verification and transaction security APIs.",
                  "name":  "InstantPay",
                  "website":  "https://instantpay.pk",
                  "founder":  "Haadhee",
                  "logo":  "Startup Logos/C3/No BG/Repic (2).png"
              },
              {
                  "id":  "jarvis",
                  "linkedin":  "https://www.linkedin.com/in/muhammad/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Received Vanar chain cloud funding and GCP credits",
                                       "Built custom IDE extension for auto-coding"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Blockchain"
                                ],
                  "oneLiner":  "AI assistant for software developers and business workflow automation.",
                  "name":  "Jarvis",
                  "website":  "https://jarvis.fun",
                  "founder":  "Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "martec",
                  "linkedin":  "https://www.linkedin.com/in/mashal-shoukat/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Focused on localized MarTech solutions",
                                       "Optimized email marketing automation pipelines"
                                   ],
                  "verticals":  [
                                    "MarTech",
                                    "SaaS"
                                ],
                  "oneLiner":  "AI-driven marketing automation tools for localized campaigns.",
                  "name":  "MarTec",
                  "website":  "https://martec.pk",
                  "founder":  "Mashal Shoukat",
                  "logo":  ""
              },
              {
                  "id":  "matchvet",
                  "linkedin":  "https://www.linkedin.com/in/yahya-vi/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Onboarded certified veterinary clinics",
                                       "Reduced booking friction for remote consults"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Marketplace"
                                ],
                  "oneLiner":  "Hybrid HealthTech and service marketplace connecting pet owners with veterinary doctors.",
                  "name":  "MatchVet",
                  "website":  "https://matchvet.com",
                  "founder":  "Yahya",
                  "logo":  ""
              },
              {
                  "id":  "pakrooms",
                  "linkedin":  "https://www.linkedin.com/in/ibrahim/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Active co-living matches in twin cities",
                                       "Verified housing records for student hostels"
                                   ],
                  "verticals":  [
                                    "PropTech",
                                    "Real Estate"
                                ],
                  "oneLiner":  "PropTech portal simplifying roommate matchmaking and co-living rentals.",
                  "name":  "Pakrooms",
                  "website":  "https://pakrooms.com",
                  "founder":  "Ibrahim",
                  "logo":  "Startup Logos/C3/No BG/Pakrooms.png"
              },
              {
                  "id":  "paniexpress",
                  "linkedin":  "https://www.linkedin.com/company/paniexpress/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Secured ,000 international pre-seed funding",
                                       "Optimized direct delivery logistics for commercial hubs"
                                   ],
                  "verticals":  [
                                    "CleanTech",
                                    "WaterTech"
                                ],
                  "oneLiner":  "WaterTech platform digitizing clean drinking water supply and logistics.",
                  "name":  "Pani Express",
                  "website":  "https://paniexpress.pk",
                  "founder":  "Pani Express Team",
                  "logo":  "Startup Logos/C3/No BG/Pani Express - New Logo PNG - Ali Yar.png"
              },
              {
                  "id":  "poultryai",
                  "linkedin":  "https://www.linkedin.com/company/poultryai/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Received World Bank Grant of ,000",
                                       "Reduced poultry mortality rates by 12% in pilot trials"
                                   ],
                  "verticals":  [
                                    "AgriTech",
                                    "IoT"
                                ],
                  "oneLiner":  "AI and IoT-driven precision agriculture tool for smart poultry farming.",
                  "name":  "PoultryAI",
                  "website":  "https://poultrybaba.com",
                  "founder":  "PoultryAI Team",
                  "logo":  "Startup Logos/C3/No BG/Poultry Baba (2).png"
              },
              {
                  "id":  "salvaedge",
                  "linkedin":  "https://www.linkedin.com/in/salva-nadeem/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Received Ignite NGIRI grant funding",
                                       "Successfully validated device calibration in clinical trials"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Diagnostics"
                                ],
                  "oneLiner":  "A portable edge-based laboratory diagnostic tool for rapid health screening.",
                  "name":  "Salva Edge",
                  "website":  "https://salvaedge.com",
                  "founder":  "Salva Nadeem",
                  "logo":  "Startup Logos/C3/No BG/Orthocare.png"
              },
              {
                  "id":  "skillvibe",
                  "linkedin":  "https://www.linkedin.com/company/skillvibe/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Launched pilot test library for enterprise hires",
                                       "Evaluated over 2,000 job candidates"
                                   ],
                  "verticals":  [
                                    "HRTech",
                                    "AI"
                                ],
                  "oneLiner":  "AI-driven skills assessment and organizational performance dashboard.",
                  "name":  "SkillVibe",
                  "website":  "https://skillvibe.ai",
                  "founder":  "SkillVibe Team",
                  "logo":  "Startup Logos/C3/No BG/SkillVibe.png"
              },
              {
                  "id":  "tufal",
                  "linkedin":  "https://www.linkedin.com/in/fatima-khan/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Developed specialized child health guidelines",
                                       "Tested interface inside pediatric clinics"
                                   ],
                  "verticals":  [
                                    "HealthTech",
                                    "Pediatrics"
                                ],
                  "oneLiner":  "HealthTech pediatric care and health tracking platform.",
                  "name":  "TUFAL",
                  "website":  "https://tufal.health",
                  "founder":  "Fatima Khan",
                  "logo":  "Startup Logos/C3/No BG/Tifl.png"
              },
              {
                  "id":  "yourmunshi",
                  "linkedin":  "https://www.linkedin.com/in/hareem-fatima/",
                  "achievements":  [
                                       "Incubated in Cohort 3 of NIC Islamabad",
                                       "Received ,000 Google Cloud Platform credits",
                                       "Automated contract generation templates for local SMBs"
                                   ],
                  "verticals":  [
                                    "LegalTech",
                                    "SaaS"
                                ],
                  "oneLiner":  "LegalTech platform providing automated contract generation and legal advice.",
                  "name":  "YourMunshi",
                  "website":  "https://yourmunshi.com",
                  "founder":  "Hareem Fatima",
                  "logo":  "Startup Logos/C3/No BG/Your Munshi.png"
              }
          ],
    "4":  [
              {
                  "id":  "aquatech",
                  "linkedin":  "https://www.linkedin.com/company/aquatech-pk/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Deployed smart drip filtration modules in 5 districts",
                                       "Conserved agricultural water usage by 30% in pilot"
                                   ],
                  "verticals":  [
                                    "Agri Tech",
                                    "CleanTech"
                                ],
                  "oneLiner":  "Smart water management and filtration solutions for agriculture.",
                  "name":  "AquaTech",
                  "website":  "https://aquatech.pk",
                  "founder":  "Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "axonwhale",
                  "linkedin":  "https://www.linkedin.com/company/axonwhale/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Developed predictive business routing AI agent",
                                       "Signed contracts with 3 local logistics firms"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Enterprise"
                                ],
                  "oneLiner":  "Advanced AI solutions for business process optimization and enterprise data.",
                  "name":  "AxonWhale",
                  "website":  "https://axonwhale.com",
                  "founder":  "Syed Muhammad \u0026 Ali Naqvi",
                  "logo":  "Startup Logos/C4/NO Bg/Axonwhale - Ali Naqvi.png"
              },
              {
                  "id":  "callrolin",
                  "linkedin":  "https://www.linkedin.com/in/zohaib-ejaz/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Automated routing for 500+ daily call center requests",
                                       "Improved queue clearance latency by 25%"
                                   ],
                  "verticals":  [
                                    "AI \u0026 ML",
                                    "Voice AI"
                                ],
                  "oneLiner":  "AI-driven customer call routing and service automation.",
                  "name":  "CallRolin",
                  "website":  "https://www.callrolin.com",
                  "founder":  "Zohaib Ejaz",
                  "logo":  "Startup Logos/C4/NO Bg/CallRolin Logo (1)-1 - zx Chuza.png"
              },
              {
                  "id":  "dakiaai",
                  "linkedin":  "https://www.linkedin.com/company/dakia-ai/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Processed over 100,000 PDF documents with zero data leaks",
                                       "Built smart delivery courier matcher module"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Logistics"
                                ],
                  "oneLiner":  "AI-powered document processing and automated delivery tracking.",
                  "name":  "Dakia.ai",
                  "website":  "https://dakia.ai",
                  "founder":  "Bassal",
                  "logo":  "Startup Logos/C4/NO Bg/Dakia AI.png"
              },
              {
                  "id":  "etaps",
                  "linkedin":  "https://www.linkedin.com/company/etaps/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Shipped 2,500+ NFC digital business cards",
                                       "Launched corporate custom branding templates"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "Hardware"
                                ],
                  "oneLiner":  "NFC-enabled digital business cards and business networking platform.",
                  "name":  "eTaps",
                  "website":  "https://etaps.pk",
                  "founder":  "Muhammad",
                  "logo":  "Startup Logos/C4/NO Bg/etaps_png-06 (1) (1).png"
              },
              {
                  "id":  "finmap",
                  "linkedin":  "https://www.linkedin.com/in/ali-zahid/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Mapped cash flows for 100+ SME retailers",
                                       "Established integration API with local micro-lenders"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "SME Lending"
                                ],
                  "oneLiner":  "Financial mapping and credit profiling tools for SMEs.",
                  "name":  "FinMap",
                  "website":  "https://finmap.pk",
                  "founder":  "Ali Zahid",
                  "logo":  ""
              },
              {
                  "id":  "horizon",
                  "linkedin":  "https://www.linkedin.com/company/horizonpreps/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Partnered with private school networks in Islamabad",
                                       "Provided custom STEM courses to 1,200+ students"
                                   ],
                  "verticals":  [
                                    "Education",
                                    "EdTech"
                                ],
                  "oneLiner":  "EdTech platform offering personalized curriculum and classroom tools.",
                  "name":  "Horizon",
                  "website":  "https://horizonpreps.com",
                  "founder":  "Semab",
                  "logo":  "Startup Logos/C4/NO Bg/Horizon Preps LOGO.png"
              },
              {
                  "id":  "khiladi",
                  "linkedin":  "https://www.linkedin.com/company/khiladi-app/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Processed 500+ hours of local sports footage",
                                       "Custom player movement and gait diagnostic algorithms"
                                   ],
                  "verticals":  [
                                    "AI \u0026 ML",
                                    "SportsTech"
                                ],
                  "oneLiner":  "Sports analytics and AI video analysis platform for athletes.",
                  "name":  "Khiladi",
                  "website":  "https://khiladi.pk",
                  "founder":  "Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "kollab",
                  "linkedin":  "https://www.linkedin.com/company/itskollab/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Onboarded 200+ micro-influencers and brands",
                                       "Facilitated over 50 marketing campaigns"
                                   ],
                  "verticals":  [
                                    "Marketing",
                                    "Creator Economy"
                                ],
                  "oneLiner":  "Collaborative marketing dashboard connecting brands with creators.",
                  "name":  "Kollab",
                  "website":  "https://itskollab.com",
                  "founder":  "Sheharyar",
                  "logo":  ""
              },
              {
                  "id":  "koro",
                  "linkedin":  "https://www.linkedin.com/in/hanan-abid/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Achieved 10,000+ app store installations",
                                       "Bilingual speech-to-text transcript support"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Productivity"
                                ],
                  "oneLiner":  "AI-powered digital memory assistant and note-taking tool.",
                  "name":  "Koro",
                  "website":  "https://koro.ai",
                  "founder":  "Hanan Abid",
                  "logo":  ""
              },
              {
                  "id":  "latent",
                  "linkedin":  "https://www.linkedin.com/in/raja-sarmad-ishtiaq/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Successfully deployed custom cloud setups for client databases",
                                       "Reduced server latency by 45%"
                                   ],
                  "verticals":  [
                                    "Software \u0026 IT",
                                    "Cloud"
                                ],
                  "oneLiner":  "Custom enterprise software and cloud deployment services.",
                  "name":  "Latent",
                  "website":  "https://latent.pk",
                  "founder":  "Raja Sarmad",
                  "logo":  "Startup Logos/C4/NO Bg/Latent - Raja Sarmad Ishtiaq.png"
              },
              {
                  "id":  "officeflow",
                  "linkedin":  "https://www.linkedin.com/in/alina-nasir/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Onboarded 10 corporate office hubs",
                                       "Optimized hot-desk allocations and scheduling"
                                   ],
                  "verticals":  [
                                    "AI \u0026 ML",
                                    "PropTech"
                                ],
                  "oneLiner":  "AI workflow scheduler and office space management software.",
                  "name":  "OfficeFlow",
                  "website":  "https://officeflow.ai",
                  "founder":  "Alina Nasir",
                  "logo":  "Startup Logos/C4/NO Bg/OfficeFlow Ai-01-01 - Alina Nasir.png"
              },
              {
                  "id":  "p2f",
                  "linkedin":  "https://www.linkedin.com/company/prompt-to-flow/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Successfully tracked 5,000+ cargo shipments",
                                       "Real-time alerts for delay anomalies"
                                   ],
                  "verticals":  [
                                    "Logistics",
                                    "Supply Chain"
                                ],
                  "oneLiner":  "Automated logistics tracking and cargo distribution systems.",
                  "name":  "P2F",
                  "website":  "https://prompttoflow.com",
                  "founder":  "Muhammad",
                  "logo":  "Startup Logos/C4/NO Bg/Prompt to flow (1).png"
              },
              {
                  "id":  "pakorganic",
                  "linkedin":  "https://www.linkedin.com/company/pak-organic-life/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Connected 40 organic farms to urban grocery hubs",
                                       "Ensured verified chemical-free certifications"
                                   ],
                  "verticals":  [
                                    "Agri Tech",
                                    "Organic Food"
                                ],
                  "oneLiner":  "Supply network connecting organic farmers to consumers.",
                  "name":  "Pak Organic",
                  "website":  "https://pakorganic.pk",
                  "founder":  "Muhammad",
                  "logo":  ""
              },
              {
                  "id":  "proyaai",
                  "linkedin":  "https://pk.linkedin.com/in/shahzaib/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Generated 50,000+ ad creatives in Q1",
                                       "Custom visual template building tools"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Generative AI"
                                ],
                  "oneLiner":  "Generative AI tools for custom image and marketing copy creation.",
                  "name":  "Proya AI",
                  "website":  "https://proya.ai",
                  "founder":  "Shahzaib",
                  "logo":  "Startup Logos/C4/NO Bg/GenImage.png"
              },
              {
                  "id":  "raabta",
                  "linkedin":  "https://www.linkedin.com/in/nimrah-khan/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Conducted 1,000+ successful online doctor consults",
                                       "Developed low-bandwidth voice-call integration"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Telemedicine"
                                ],
                  "oneLiner":  "Telemedicine platform connecting rural patients with specialists.",
                  "name":  "Raabta",
                  "website":  "https://raabta.health",
                  "founder":  "Nimrah Khan",
                  "logo":  ""
              },
              {
                  "id":  "safetyx",
                  "linkedin":  "https://www.linkedin.com/company/safetyxpro/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Installed safety sensors in 3 industrial units",
                                       "Real-time dashboard for hazard and accident alert reporting"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Industrial Safety"
                                ],
                  "oneLiner":  "Occupational health and workplace safety monitoring systems.",
                  "name":  "SafetyX",
                  "website":  "https://thesafetyx.com",
                  "founder":  "Misbah Arshad",
                  "logo":  "Startup Logos/C4/NO Bg/safetyxpro.png"
              },
              {
                  "id":  "scrapingsolutions",
                  "linkedin":  "https://www.linkedin.com/company/scrapingsolutions/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Extracted over 5 million data nodes securely",
                                       "Built automated pricing monitor script for retail clients"
                                   ],
                  "verticals":  [
                                    "Software \u0026 IT",
                                    "Big Data"
                                ],
                  "oneLiner":  "Enterprise web scraping and data extraction services.",
                  "name":  "Scraping Solutions",
                  "website":  "https://scrapingsolutions.com",
                  "founder":  "Umar Khan",
                  "logo":  ""
              },
              {
                  "id":  "sehatai",
                  "linkedin":  "https://pk.linkedin.com/company/sehat-ai/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Analyzed 1,500+ diagnostic reports using AI model",
                                       "Achieved 91% accuracy in report validation trials"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "AI Diagnostics"
                                ],
                  "oneLiner":  "AI SaaS platform for early medical diagnosis and reports.",
                  "name":  "Sehat AI",
                  "website":  "https://sehatai.pk",
                  "founder":  "Khawaja",
                  "logo":  "Startup Logos/C4/NO Bg/AI SEHAT BRIDGE-01.png"
              },
              {
                  "id":  "signersai",
                  "linkedin":  "https://www.linkedin.com/company/signershub/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Translated 10,000+ standard phrases to sign language animations",
                                       "Launched accessibility widget for commercial websites"
                                   ],
                  "verticals":  [
                                    "Accessibility",
                                    "AI"
                                ],
                  "oneLiner":  "AI translator converting text and voice into sign language.",
                  "name":  "SignersAI",
                  "website":  "https://signershub.com",
                  "founder":  "M Zeeshan",
                  "logo":  ""
              },
              {
                  "id":  "soulterglass",
                  "linkedin":  "https://www.linkedin.com/company/soulter-glass/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Installed double-glazed insulated units in 12 office blocks",
                                       "Achieved 20% energy cost savings on HVAC loads"
                                   ],
                  "verticals":  [
                                    "Construction",
                                    "CleanTech"
                                ],
                  "oneLiner":  "Smart glass installations and insulation materials.",
                  "name":  "Soulter Glass",
                  "website":  "https://soulterglass.com",
                  "founder":  "Salahudin",
                  "logo":  ""
              },
              {
                  "id":  "stayovers",
                  "linkedin":  "https://www.linkedin.com/company/stayovers/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Listed 50+ verified secure rental units",
                                       "Integrated automated digital verification checkups"
                                   ],
                  "verticals":  [
                                    "Travel \u0026 Tourism",
                                    "PropTech"
                                ],
                  "oneLiner":  "Booking platform for localized, secure travel lodging.",
                  "name":  "Stayovers",
                  "website":  "https://stayovers.pk",
                  "founder":  "Ridah Mahmood",
                  "logo":  "Startup Logos/C4/NO Bg/Stayovers posts.png"
              },
              {
                  "id":  "truckadda",
                  "linkedin":  "https://www.linkedin.com/company/truckadda/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Connected 300+ truck operators with industrial dispatchers",
                                       "Successfully completed 2,000+ freight trips"
                                   ],
                  "verticals":  [
                                    "Logistics",
                                    "Freight"
                                ],
                  "oneLiner":  "Freight matching and truck booking logistics marketplace.",
                  "name":  "Truck Adda",
                  "website":  "https://truckadda.pk",
                  "founder":  "Ali Ameer",
                  "logo":  "Startup Logos/C4/NO Bg/truckadda.png"
              },
              {
                  "id":  "uplawpk",
                  "linkedin":  "https://www.linkedin.com/company/uplaw-pk/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Registered 50+ verified legal practitioners",
                                       "Facilitated over 300 online case consultation sessions"
                                   ],
                  "verticals":  [
                                    "Legal Tech",
                                    "Marketplace"
                                ],
                  "oneLiner":  "Online portal for lawyer matchmaking and legal consultations.",
                  "name":  "UPLAW.PK",
                  "website":  "https://uplaw.pk",
                  "founder":  "Muti ur Rehman",
                  "logo":  ""
              },
              {
                  "id":  "wobblyai",
                  "linkedin":  "https://www.linkedin.com/company/wobblyai/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Deployed customer support chatbot for 5 online retailers",
                                       "Improved customer satisfaction score by 18%"
                                   ],
                  "verticals":  [
                                    "AI",
                                    "Customer Care"
                                ],
                  "oneLiner":  "AI chat agents with emotional intelligence for customer care.",
                  "name":  "WobblyAI",
                  "website":  "https://wobbly.ai",
                  "founder":  "Salma Saleem",
                  "logo":  "Startup Logos/C4/NO Bg/vyrrai-png-withoutbg.png"
              },
              {
                  "id":  "zeroknowledge",
                  "linkedin":  "https://www.linkedin.com/company/zero-knowledge/",
                  "achievements":  [
                                       "Incubated in Cohort 4 of NIC Islamabad",
                                       "Designed secure zk-SNARK encryption framework",
                                       "Completed vulnerability audits for corporate clients"
                                   ],
                  "verticals":  [
                                    "Cybersecurity",
                                    "Deep Tech"
                                ],
                  "oneLiner":  "Zero-knowledge cryptography solutions for enterprise databases.",
                  "name":  "Zero Knowledge",
                  "website":  "https://zeroknowledge.pk",
                  "founder":  "Asad Mahmood",
                  "logo":  ""
              }
          ],
    "5":  [
              {
                  "id":  "aagilityx",
                  "linkedin":  "https://www.linkedin.com/in/krghori",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "AI"
                                ],
                  "oneLiner":  "AIgilityX builds a sovereign, enterprise-grade Agentic AI ecosystem that enables organizations to deploy intelligent, autonomous agents safely and securely.",
                  "name":  "AIgilityX",
                  "website":  "https://aagilityx.ai",
                  "founder":  "Khurrum Ghori",
                  "logo":  "Startup Logos/C5/Agility X - Logo.png"
              },
              {
                  "id":  "airaudit",
                  "linkedin":  "https://www.linkedin.com/company/airaudit/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "CleanTech",
                                    "Energy Efficiency"
                                ],
                  "oneLiner":  "Assess energy waste in manufacturing facilities, provide analytical recommendations, and deliver real-time monitoring solutions to reduce carbon footprint.",
                  "name":  "AirAudit",
                  "website":  "https://www.airaudit.com.pk",
                  "founder":  "Imtiaz Rastgar",
                  "logo":  "Startup Logos/C5/auditt.webp"
              },
              {
                  "id":  "amasgravity",
                  "linkedin":  "https://www.linkedin.com/in/ehtasham-balland-04701a104/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "AI Product",
                                    "Enterprise SaaS"
                                ],
                  "oneLiner":  "An AI-powered task management and operational analytics platform designed to boost enterprise team productivity.",
                  "name":  "AMAS Gravity",
                  "website":  "https://amasgravity.com",
                  "founder":  "Mohammad Ehtasham Balland",
                  "logo":  ""
              },
              {
                  "id":  "betteryouco",
                  "linkedin":  "https://www.linkedin.com/in/alina-i-170232252/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Early revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi",
                                       "Women-led startup championing diversity"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Nutrition"
                                ],
                  "oneLiner":  "Better You Co is a health-tech platform that connects diet patients with clinical nutritionists, offering structured guidance and healthy meal planning.",
                  "name":  "Better You Co",
                  "website":  "https://betteryou.pk",
                  "founder":  "ALINA ISLAM",
                  "logo":  "Startup Logos/C5/BetterYou Co logo design (1).png"
              },
              {
                  "id":  "blackironquantumai",
                  "linkedin":  "https://www.linkedin.com/in/zulfiqar-ali-mir",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Early revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "Quantitative AI"
                                ],
                  "oneLiner":  "ZulfiQode is an agentic financial intelligence platform that utilizes quantitative analysis to generate real-time market alpha.",
                  "name":  "Black Iron Quantum AI",
                  "website":  "https://zulfiqode.ai",
                  "founder":  "Zulfiqar Ali Mir",
                  "logo":  "Startup Logos/C5/BlackIronQuantumAI_Logo_Final.png"
              },
              {
                  "id":  "claraai",
                  "linkedin":  "https://www.linkedin.com/in/sheryar-kayani/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Early revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "Voice AI"
                                ],
                  "oneLiner":  "Clara is an AI voice receptionist that answers calls, books reservations, and captures customer data for restaurants 24/7 so they never lose a lead.",
                  "name":  "Clara AI",
                  "website":  "https://claraai.app",
                  "founder":  "Sheryar Kayani",
                  "logo":  ""
              },
              {
                  "id":  "cognivox",
                  "linkedin":  "https://www.linkedin.com/in/shafiq-khan-63a97293/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Mianwali"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "EdTech"
                                ],
                  "oneLiner":  "Coginvox transforms recorded lectures into intelligent knowledge graphs, interactive study guides, and instant conversational search.",
                  "name":  "Cognivox",
                  "website":  "https://cognivox.ai",
                  "founder":  "Shafiq Ur Rehman Khan",
                  "logo":  ""
              },
              {
                  "id":  "digitalchotu",
                  "linkedin":  "https://www.linkedin.com/in/muhammad-atif/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Lahore"
                                   ],
                  "verticals":  [
                                    "Logistics",
                                    "AI"
                                ],
                  "oneLiner":  "Solving last mile logistics delivery using AI-powered route optimization and automated rider dispatch algorithms.",
                  "name":  "Digital Chotu",
                  "website":  "https://digitalchotu.pk",
                  "founder":  "Muhammad Atif",
                  "logo":  ""
              },
              {
                  "id":  "digitalcode",
                  "linkedin":  "https://www.linkedin.com/in/iamshoaibhayat",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "Automation"
                                ],
                  "oneLiner":  "Building AI-powered automation agents that help businesses streamline repetitive digital workflows and cross-platform integrations.",
                  "name":  "Digital Code",
                  "website":  "https://digitalcode.pk",
                  "founder":  "Shoaib Hayat",
                  "logo":  ""
              },
              {
                  "id":  "drighttechnologies",
                  "linkedin":  "https://www.linkedin.com/in/erum-b-bb1ab01a7/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Early revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi",
                                       "Women-led startup championing diversity"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Medical Devices"
                                ],
                  "oneLiner":  "D-RIGHT Technologies develops a range of healthcare monitoring and diagnostic devices tailored for remote clinical diagnostics.",
                  "name":  "D-RIGHT Technologies (Pvt.) Ltd.",
                  "website":  "https://drighttech.com",
                  "founder":  "Erum Burhan",
                  "logo":  "Startup Logos/C5/D-RIGHT Logo.png"
              },
              {
                  "id":  "editute",
                  "linkedin":  "https://www.linkedin.com/in/muhammad-awais-khan-29a178294/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "Online Exam"
                                ],
                  "oneLiner":  "Editute is an edtech platform focusing on online examination, digital assessment grading, and interactive classroom learning for students.",
                  "name":  "Editute",
                  "website":  "https://editute.com",
                  "founder":  "Muhammad Awais",
                  "logo":  "Startup Logos/C5/editute logo.jpeg"
              },
              {
                  "id":  "elementslearning",
                  "linkedin":  "https://www.linkedin.com/in/m-irfan-sarfraz-497596374",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "STEM"
                                ],
                  "oneLiner":  "Elements Learning is a NUST spin-off and research-driven education platform delivering experiential digital simulations for engineering curricula.",
                  "name":  "Elements Learning",
                  "website":  "https://elementslearning.ai",
                  "founder":  "Sir Irfan Sarfraz \u0026 Team",
                  "logo":  "Startup Logos/C5/EL.AI LOGO-1.png"
              },
              {
                  "id":  "finovasolutions",
                  "linkedin":  "https://www.linkedin.com/company/finovasolutions",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Early revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "FinTech"
                                ],
                  "oneLiner":  "Finova Solutions builds practical, high-impact enterprise FinTech infrastructure and cash-flow intelligence platforms for emerging businesses.",
                  "name":  "Finova Solutions",
                  "website":  "https://finovasolutions.com",
                  "founder":  "Muhammad Astafa Ali",
                  "logo":  ""
              },
              {
                  "id":  "hakeemai",
                  "linkedin":  "https://www.linkedin.com/in/syed-zaid-ul-haq-jeelani/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Voice AI"
                                ],
                  "oneLiner":  "We\u0027re building an AI-powered mobile app that listens to doctor-patient conversations in Urdu and regional languages, and automatically generates structured clinical records.",
                  "name":  "Hakeem AI",
                  "website":  "https://hakeemai.health",
                  "founder":  "Syed Zaid ul Haq Jeelani",
                  "logo":  "Startup Logos/C5/HakeemAI Logo Square.png"
              },
              {
                  "id":  "hostelbook",
                  "linkedin":  "https://www.linkedin.com/in/iammkullah",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "PropTech",
                                    "SaaS"
                                ],
                  "oneLiner":  "HostelBook is a vertical SaaS platform that digitizes hostel and shared accommodation operations in Pakistan, covering tenant management, bed occupancy, and automated rent collection.",
                  "name":  "HostelBook",
                  "website":  "https://hostelbook.pk",
                  "founder":  "Engineer Muhammad Kaleem Ullah",
                  "logo":  ""
              },
              {
                  "id":  "hostelizedbehostelized",
                  "linkedin":  "https://www.linkedin.com/in/muhammadzishan",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "PropTech"
                                ],
                  "oneLiner":  "We\u0027re building a two-sided platform for Pakistan\u0027s hostel industry: Hostelized automates operations for hostel owners, while Behostelized lets students discover and book verified hostel rooms online.",
                  "name":  "Hostelized \u0026 Behostelized",
                  "website":  "https://hostelized.com",
                  "founder":  "Muhammad Zeeshan",
                  "logo":  "Startup Logos/C5/Hostelized_Logo_Blue_114FCE.png"
              },
              {
                  "id":  "infersync",
                  "linkedin":  "https://www.linkedin.com/in/hmadad/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Multan"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "DevOps"
                                ],
                  "oneLiner":  "Infersync is an AI-powered COO platform that manages engineering workflows, predicts project bottlenecks, and optimizes development sprints.",
                  "name":  "Infersync",
                  "website":  "https://infersync.ai",
                  "founder":  "Haider Madad",
                  "logo":  ""
              },
              {
                  "id":  "innovatorhuzsam",
                  "linkedin":  "https://www.linkedin.com/in/m-huzaifah-sahmi-461b1b384/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Layyah"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "Vocational Training"
                                ],
                  "oneLiner":  "We combine education and technology to deliver skill-based vocational training and immersive interactive technical programs for youth.",
                  "name":  "Innovator HuzSam",
                  "website":  "https://innovatorhuzsam.com",
                  "founder":  "Muhammad Huzaifah Sahmi",
                  "logo":  "Startup Logos/C5/IHS 3D Logo.png"
              },
              {
                  "id":  "insynia",
                  "linkedin":  "https://linkedin.com/in/muneebjs",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "Product Management"
                                ],
                  "oneLiner":  "AI-native end-to-end product management platform unifying user feature requests, engineering backlogs, and roadmap prioritization.",
                  "name":  "Insynia",
                  "website":  "https://insynia.ai",
                  "founder":  "Muneeb Khan",
                  "logo":  ""
              },
              {
                  "id":  "isoft",
                  "linkedin":  "https://www.linkedin.com/in/imranciso/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "EdTech",
                                    "HealthTech"
                                ],
                  "oneLiner":  "ApexBeat.ai is an AI-powered medical learning platform that helps medical students study smarter through structured clinical summaries, adaptive quizzes, and mind maps.",
                  "name":  "Isoft",
                  "website":  "https://apexbeat.ai",
                  "founder":  "Imran Rasheed",
                  "logo":  ""
              },
              {
                  "id":  "kahf",
                  "linkedin":  "https://www.linkedin.com/in/hafsatahir/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Karachi",
                                       "Women-led startup championing diversity"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Islamic FinTech"
                                ],
                  "oneLiner":  "Kahf connects Muslims in the North American region with trusted Islamic financial products, ethical investing alternatives, and community endowments.",
                  "name":  "Kahf",
                  "website":  "https://kahf.app",
                  "founder":  "Hafsa Tahir",
                  "logo":  ""
              },
              {
                  "id":  "ocryzprivatelimited",
                  "linkedin":  "https://www.linkedin.com/in/ibtasamsarwar/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Gig Economy",
                                    "SaaS"
                                ],
                  "oneLiner":  "Synappix is a complete workflow and invoice management suite for freelancers and digital agencies, integrating payments and project milestone tracking.",
                  "name":  "Ocryz (Private) Limited",
                  "website":  "https://synappix.com",
                  "founder":  "Muhamamd Ibtasam Sarwar",
                  "logo":  ""
              },
              {
                  "id":  "proptiv",
                  "linkedin":  "https://www.linkedin.com/company/proptiv/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "PropTech",
                                    "Real Estate SaaS"
                                ],
                  "oneLiner":  "It replaces expensive, outdated property software with a modern, always-on SaaS solution designed to streamline real estate property management.",
                  "name":  "Proptiv",
                  "website":  "https://proptiv.com",
                  "founder":  "Tanveer Jalal",
                  "logo":  "Startup Logos/C4/NO Bg/Proptiv-Logo.png"
              },
              {
                  "id":  "rightmetricshealth",
                  "linkedin":  "https://www.linkedin.com/in/ahsan-rasheed-khan/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Telehealth"
                                ],
                  "oneLiner":  "RightMetrics builds a digital health platform that combines telehealth and remote patient monitoring so patients can track key vitals at home.",
                  "name":  "Rightmetrics Health",
                  "website":  "https://rightmetrics.health",
                  "founder":  "Ahsan Rasheed Khan",
                  "logo":  ""
              },
              {
                  "id":  "techsacare",
                  "linkedin":  "https://www.linkedin.com/company/88689994",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "Women Care"
                                ],
                  "oneLiner":  "Preventive healthcare for women: making specialized maternal, gynecological, and preventive care accessible and affordable through digital screening.",
                  "name":  "TechsaCare",
                  "website":  "https://techsacare.com",
                  "founder":  "WASIM ABBAS",
                  "logo":  "Startup Logos/C5/TechsaCare logo-01.png"
              },
              {
                  "id":  "threereachai",
                  "linkedin":  "https://www.linkedin.com/in/zain-mudassar-iqbal/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Lahore"
                                   ],
                  "verticals":  [
                                    "Deep Tech",
                                    "NADRA KYC"
                                ],
                  "oneLiner":  "SnapProve makes it possible for people to record everyday transactions with proof of identity that cannot be altered and is verified by a third party, preventing informal transaction disputes.",
                  "name":  "Three Reach Ai",
                  "website":  "https://snapprove.ai",
                  "founder":  "Zain Mudassar",
                  "logo":  "Startup Logos/C5/Group 16.png"
              },
              {
                  "id":  "valourai",
                  "linkedin":  "https://www.linkedin.com/in/salman-ullah-baig-b70a256a/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "FinTech",
                                    "Market Analytics"
                                ],
                  "oneLiner":  "We analyze financial markets and provide actionable insights and risk management strategies to help investors and traders make smarter trading decisions.",
                  "name":  "Valour.ai",
                  "website":  "https://valour.ai",
                  "founder":  "Salman ullah baig",
                  "logo":  ""
              },
              {
                  "id":  "voxcommerce",
                  "linkedin":  "https://www.linkedin.com/in/muhammad-abdul-majeed-304568195",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Pre-revenue development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Health Tech",
                                    "AdTech"
                                ],
                  "oneLiner":  "TezAds is an AI marketing tool that automates meta ad campaign creation, creative generation, and budget optimization for e-commerce brands.",
                  "name":  "VoxCommerce",
                  "website":  "https://tezads.ai",
                  "founder":  "Muhammad Abdul Majeed",
                  "logo":  "Startup Logos/C5/TezAds_For_Nic.png"
              },
              {
                  "id":  "xtarzva",
                  "linkedin":  "https://pk.linkedin.com/in/muhammad-shayan-umar",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "E-commerce",
                                    "AI"
                                ],
                  "oneLiner":  "XtarzVA uses AI agents to automate the heavy lifting of selling on Amazon and global marketplaces, including inventory forecasting and PPC optimization.",
                  "name":  "XtarzVA",
                  "website":  "https://xtarzva.com",
                  "founder":  "Muhammad Shayan Umar",
                  "logo":  ""
              },
              {
                  "id":  "yaarchalo",
                  "linkedin":  "https://www.linkedin.com/company/yaarchalo/",
                  "achievements":  [
                                       "Incubated in Cohort 5 of NIC Islamabad",
                                       "Currently in Scaling development stage",
                                       "Launched operations based out of Islamabad/Rawalpindi"
                                   ],
                  "verticals":  [
                                    "Travel \u0026 Tourism",
                                    "Community"
                                ],
                  "oneLiner":  "Yaar Chalo is a travel community that organizes curated adventure road trips, social backpacking expeditions, and remote tour groups across Pakistan.",
                  "name":  "Yaar Chalo",
                  "website":  "https://yaarchalo.com",
                  "founder":  "Idrees Zohrab",
                  "logo":  ""
              }
          ]
};

// 2. STATE VARIABLES
let activeCohort = 1;
let activeVertical = "all";
let searchQuery = "";
let idleTimer = null;
let warningTimer = null;
const IDLE_TIMEOUT_MS = 120000; // 2 minutes of inactivity triggers warnings
const WARNING_DURATION_MS = 5000; // 5 seconds warning toast before returning home

// 3. DOM ELEMENTS
const welcomeScreen = document.getElementById("welcome-screen");
const dashboardScreen = document.getElementById("dashboard-screen");
const btnExplore = document.getElementById("btn-explore");
const btnHome = document.getElementById("btn-home");
const btnHeaderLogo = document.getElementById("btn-header-logo");

const cohortNodes = document.querySelectorAll(".cohort-node");
const startupsGrid = document.getElementById("startups-grid");
const emptyState = document.getElementById("empty-state");
const activeCohortTitle = document.getElementById("active-cohort-title");
const activeCohortSubtitle = document.getElementById("active-cohort-subtitle");
const verticalSelect = document.getElementById("vertical-select");
const startupSearch = document.getElementById("startup-search");

// Modal Elements
const startupModal = document.getElementById("startup-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalStartupLogo = document.getElementById("modal-startup-logo");
const modalStartupName = document.getElementById("modal-startup-name");
const modalCohortTag = document.getElementById("modal-cohort-tag");
const modalFounderAvatar = document.getElementById("modal-founder-avatar");
const modalFounderName = document.getElementById("modal-founder-name");
const modalStartupDesc = document.getElementById("modal-startup-desc");
const modalVerticalsTags = document.getElementById("modal-verticals-tags");
const modalAchievements = document.getElementById("modal-achievements");
const modalSocialLinks = document.getElementById("modal-social-links");
const modalQrBox = document.getElementById("modal-qr-box");
const modalQrTitle = document.getElementById("modal-qr-title");
const modalQrDesc = document.getElementById("modal-qr-desc");

// Toast Element
const idleToast = document.getElementById("idle-toast");

// ==========================================================================
// 4. CORE CONTROLLERS & FUNCTIONS
// ==========================================================================

// Switch Views
function showView(viewId) {
  if (viewId === "welcome") {
    welcomeScreen.classList.add("active");
    dashboardScreen.classList.remove("active");
    stopIdleTracking();
  } else if (viewId === "dashboard") {
    welcomeScreen.classList.remove("active");
    dashboardScreen.classList.add("active");
    startIdleTracking();
    renderCohortOrbit();
    loadCohort(activeCohort);
  }
}

// Position cohort nodes in a circle using CSS properties
function renderCohortOrbit() {
  const nodeCount = cohortNodes.length;
  cohortNodes.forEach((node, index) => {
    // Math to space them evenly. Angle 0 is right, subtract 90 to start at the top
    const angle = (index * (360 / nodeCount)) - 90;
    node.style.setProperty("--angle", `${angle}deg`);
  });
}

// Load Cohort details into Grid
function loadCohort(cohortNum) {
  activeCohort = cohortNum;
  
  // Update cohort node active classes
  cohortNodes.forEach(node => {
    const nodeNum = parseInt(node.getAttribute("data-cohort"));
    if (nodeNum === cohortNum) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });

  // Update Headers
  activeCohortTitle.textContent = `Cohort ${cohortNum} Startups`;
  activeCohortSubtitle.textContent = `Displaying innovators incubated in Cohort ${cohortNum} of NIC Islamabad`;

  // Reset filter selections
  activeVertical = "all";
  searchQuery = "";
  startupSearch.value = "";

  // Get and load list of verticals to populate dropdown filter
  populateVerticalsFilter(cohortNum);
  
  // Render grid list
  filterAndRenderStartups();
}

// Extract distinct verticals for the current cohort and populate select dropdown
function populateVerticalsFilter(cohortNum) {
  const startups = STARTUP_DATABASE[cohortNum];
  const verticalsSet = new Set();
  
  startups.forEach(startup => {
    startup.verticals.forEach(v => verticalsSet.add(v.trim()));
  });

  // Re-hydrate dropdown
  verticalSelect.innerHTML = `<option value="all">All Sectors (${startups.length})</option>`;
  
  Array.from(verticalsSet).sort().forEach(vertical => {
    // Count how many startups in this cohort share this vertical
    const count = startups.filter(s => s.verticals.includes(vertical)).length;
    const option = document.createElement("option");
    option.value = vertical;
    option.textContent = `${vertical} (${count})`;
    verticalSelect.appendChild(option);
  });

  verticalSelect.value = "all";
}

// Filter and Render logic
function filterAndRenderStartups() {
  const startups = STARTUP_DATABASE[activeCohort] || [];
  
  const filtered = startups.filter(startup => {
    // 1. Sector matching
    const matchesVertical = activeVertical === "all" || startup.verticals.includes(activeVertical);
    
    // 2. Search matching
    const searchString = `${startup.name} ${startup.founder} ${startup.verticals.join(" ")} ${startup.oneLiner}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    
    return matchesVertical && matchesSearch;
  });

  // Strict alphabetical order (A to Z)
  filtered.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

  // Render cards
  renderStartupCards(filtered);
}

// Render cards list in grid
function renderStartupCards(startups) {
  startupsGrid.innerHTML = "";

  if (startups.length === 0) {
    startupsGrid.style.display = "none";
    emptyState.style.display = "flex";
    return;
  }

  startupsGrid.style.display = "grid";
  emptyState.style.display = "none";

  startups.forEach((startup, index) => {
    const card = document.createElement("div");
    card.className = "startup-card";
    card.style.animationDelay = `${index * 0.03}s`; // Stagger effect
    
    // Pick first letter of name for placeholder logo
    const initial = startup.name.charAt(0);
    // Display first vertical as badge
    const mainVertical = startup.verticals[0] || "General";

    // Logo display with graceful fallback to monogram
    const logoHtml = startup.logo
      ? `<div class="card-logo-container">
           <img src="${encodeURI(startup.logo)}" alt="${startup.name}" class="card-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <div class="card-logo-avatar" style="display:none;">${initial}</div>
         </div>`
      : `<div class="card-logo-avatar">${initial}</div>`;

    card.innerHTML = `
      <div class="card-header">
        ${logoHtml}
        <span class="card-vertical-badge" title="${mainVertical}">${mainVertical}</span>
      </div>
      <div class="card-body">
        <h3>${startup.name}</h3>
        <p>${startup.oneLiner}</p>
      </div>
      <div class="card-footer">
        <div class="card-founder">
          <i data-lucide="user"></i>
          <span>${startup.founder}</span>
        </div>
        <div class="card-actions">
          ${startup.linkedin ? `<span class="badge-icon-link" title="LinkedIn Available"><i data-lucide="linkedin"></i></span>` : ''}
          ${startup.website ? `<span class="badge-icon-link" title="Website Available"><i data-lucide="globe"></i></span>` : ''}
          <span class="card-link">
            <span>Explore</span>
            <i data-lucide="chevron-right"></i>
          </span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => showStartupDetail(startup));
    startupsGrid.appendChild(card);
  });

  // Refresh lucide icons for newly added HTML
  lucide.createIcons();
}

// Popup Startup Detail Modal
function showStartupDetail(startup) {
  const initial = startup.name.charAt(0);

  // 1. Hydrate sidebar logo
  if (startup.logo) {
    modalStartupLogo.innerHTML = `
      <img src="${encodeURI(startup.logo)}" alt="${startup.name}" class="modal-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <span style="display:none; font-size:2.2rem; font-weight:800; color:var(--brand-blue);">${initial}</span>
    `;
  } else {
    modalStartupLogo.innerHTML = `<span style="font-size:2.2rem; font-weight:800; color:var(--brand-blue);">${initial}</span>`;
  }
  
  // 2. Set details text
  modalStartupName.textContent = startup.name;
  modalCohortTag.textContent = `Cohort ${activeCohort}`;
  modalFounderName.textContent = startup.founder;
  modalStartupDesc.textContent = startup.oneLiner;

  // 3. Hydrate Social & Web Links
  if (modalSocialLinks) {
    modalSocialLinks.innerHTML = "";
    if (startup.linkedin) {
      const liBtn = document.createElement("a");
      liBtn.href = startup.linkedin;
      liBtn.target = "_blank";
      liBtn.rel = "noopener noreferrer";
      liBtn.className = "modal-social-btn btn-linkedin";
      liBtn.innerHTML = `<i data-lucide="linkedin"></i><span>Connect on LinkedIn</span>`;
      modalSocialLinks.appendChild(liBtn);
    }
    if (startup.website) {
      const webBtn = document.createElement("a");
      webBtn.href = startup.website;
      webBtn.target = "_blank";
      webBtn.rel = "noopener noreferrer";
      webBtn.className = "modal-social-btn btn-website";
      webBtn.innerHTML = `<i data-lucide="globe"></i><span>Visit Website</span>`;
      modalSocialLinks.appendChild(webBtn);
    }
  }

  // 4. Dynamic Scannable QR Code
  const qrTarget = startup.website || startup.linkedin || `https://nicpakistan.pk/?startup=${encodeURIComponent(startup.name)}`;
  const qrTitle = startup.website ? "Scan for Website" : (startup.linkedin ? "Scan for LinkedIn" : "Scan to Connect");
  let qrDisplayUrl = qrTarget.replace(/^https?:\/\/(www\.)?/, '');
  if (qrDisplayUrl.length > 25) {
    qrDisplayUrl = qrDisplayUrl.substring(0, 23) + '...';
  }

  if (modalQrTitle) modalQrTitle.textContent = qrTitle;
  if (modalQrDesc) modalQrDesc.textContent = qrDisplayUrl;

  if (modalQrBox) {
    const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrTarget)}&color=0047A5&bgcolor=FFFFFF`;
    modalQrBox.innerHTML = `
      <a href="${qrTarget}" target="_blank" rel="noopener noreferrer" title="Click or scan to open ${qrTarget}">
        <img src="${qrImgUrl}" alt="QR code for ${startup.name}" class="dynamic-qr-image" />
      </a>
    `;
  }

  // 5. Hydrate Verticals list
  modalVerticalsTags.innerHTML = "";
  startup.verticals.forEach(v => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = v;
    modalVerticalsTags.appendChild(tag);
  });

  // 6. Hydrate Achievements
  modalAchievements.innerHTML = "";
  startup.achievements.forEach(ach => {
    const li = document.createElement("li");
    li.innerHTML = `
      <i data-lucide="check-circle" class="check-icon"></i>
      <span>${ach}</span>
    `;
    modalAchievements.appendChild(li);
  });

  // Refresh icons
  lucide.createIcons();

  // Show Modal
  startupModal.classList.add("active");
}

function closeStartupDetail() {
  startupModal.classList.remove("active");
}

// ==========================================================================
// 5. IDLE SCREENSAVER OR DETECTOR TIMERS
// ==========================================================================
function startIdleTracking() {
  resetIdleTimer();
  // Listeners for any interaction activity
  window.addEventListener("mousemove", resetIdleTimer);
  window.addEventListener("mousedown", resetIdleTimer);
  window.addEventListener("keypress", resetIdleTimer);
  window.addEventListener("touchstart", resetIdleTimer);
}

function stopIdleTracking() {
  if (idleTimer) clearTimeout(idleTimer);
  if (warningTimer) clearTimeout(warningTimer);
  
  window.removeEventListener("mousemove", resetIdleTimer);
  window.removeEventListener("mousedown", resetIdleTimer);
  window.removeEventListener("keypress", resetIdleTimer);
  window.removeEventListener("touchstart", resetIdleTimer);
  
  idleToast.classList.remove("active");
}

function resetIdleTimer() {
  // Clear any running timers
  if (idleTimer) clearTimeout(idleTimer);
  if (warningTimer) clearTimeout(warningTimer);
  
  // Hide warnings toast if showing
  idleToast.classList.remove("active");

  // Setup main idle timer
  idleTimer = setTimeout(() => {
    // Show toast message first
    idleToast.classList.add("active");
    
    // Set 5-second countdown to return home
    warningTimer = setTimeout(() => {
      closeStartupDetail();
      showView("welcome");
      idleToast.classList.remove("active");
    }, WARNING_DURATION_MS);

  }, IDLE_TIMEOUT_MS);
}


// ==========================================================================
// 6. EVENT BINDINGS
// ==========================================================================

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Navigation Click Actions
  btnExplore.addEventListener("click", () => showView("dashboard"));
  btnHome.addEventListener("click", () => showView("welcome"));
  btnHeaderLogo.addEventListener("click", () => showView("welcome"));

  // Cohorts Orbit click nodes bindings
  cohortNodes.forEach(node => {
    node.addEventListener("click", (e) => {
      const cohortNum = parseInt(node.getAttribute("data-cohort"));
      loadCohort(cohortNum);
    });
  });

  // Filter Event actions
  verticalSelect.addEventListener("change", (e) => {
    activeVertical = e.target.value;
    filterAndRenderStartups();
  });

  startupSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    filterAndRenderStartups();
  });

  // Modal actions
  modalCloseBtn.addEventListener("click", closeStartupDetail);
  
  // Clicking outside card closes modal
  startupModal.addEventListener("click", (e) => {
    if (e.target === startupModal) {
      closeStartupDetail();
    }
  });

  // Setup orbit position on startup
  renderCohortOrbit();
});

