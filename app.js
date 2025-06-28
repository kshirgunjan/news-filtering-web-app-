const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all origins (for local testing)
app.use(cors());
const PORT = 3000;

const mixedNews = 
  [
  {
    "title": "AI Revolutionizes Crop Irrigation",
    "content": "Smart irrigation systems powered by AI and weather sensors help farmers deliver precise water volumes based on real-time soil conditions. Pilot programs show 30% water savings and healthier crops. Government-backed initiatives and private tech firms are supporting wider adoption to address water scarcity.",
    "url": "#"
  },
  {
    "title": "Mental Health Hotline Sees Record Calls",
    "content": "A national mental health support hotline experienced a 40% rise in calls this month, addressing anxiety, depression, and loneliness. Trained counselors are available 24/7. Officials emphasize the need for increased funding and awareness campaigns to help vulnerable groups.",
    "url": "#"
  },
  {
    "title": "Organic Vineyard Expands Sustainable Practices",
    "content": "An organic vineyard has shifted to renewable energy and composting, growing grapes without pesticides while using solar power for processing. Visitors enjoy eco-tours that educate about sustainable winemaking. The move increased both yield and consumer trust.",
    "url": "#"
  },
  {
    "title": "City Council Approves New Bike Lanes",
    "content": "The city council approved an expansion of protected bike lanes, promoting safe and eco-friendly commuting. Over 15 km of new lanes are planned, along with public awareness campaigns and incentives for cyclists. Traffic officials expect a reduction in vehicle congestion.",
    "url": "#"
  },
  {
    "title": "Organic Farming Gains Popularity",
    "content": "Local farms are adopting fully organic methods, eliminating synthetic pesticides and fertilizers. Early adopters report better soil health and higher consumer demand. The shift is supported by certification programs and farmer co-ops that provide training and marketing support.",
    "url": "#"
  },
  {
    "title": "Startup Launches Telemedicine Platform",
    "content": "A new telemedicine startup is offering virtual consultations, remote diagnostics, and prescription services. Targeting rural areas, it connects patients with specialists via video. Early trials show high patient satisfaction and reduced travel costs.",
    "url": "#"
  },
  {
    "title": "Soccer League Introduces VAR for Youth Games",
    "content": "Youth soccer leagues are piloting VAR (Video Assistant Referee) technology in matches to ensure fair play. Officials and parents support the move, citing improved accuracy. VAR cameras are being installed in four key stadiums this season.",
    "url": "#"
  },
  {
    "title": "Farmers Shift to Organic Grain",
    "content": "Grain growers have started converting to certified organic production, replacing conventional inputs with natural soil amendments. They report improved crop quality and access to premium markets. Cooperative networks help smallholders with certification costs.",
    "url": "#"
  },
  {
    "title": "Tech Giant Invests in Electric Vehicles",
    "content": "A major tech company has invested $200 million in EV charging infrastructure across urban hotspots. The project includes solar-powered stations and app-based payment systems. Urban planners expect a boost to electric vehicle adoption.",
    "url": "#"
  },
  {
    "title": "Organic Beekeeping Protects Pollinators",
    "content": "Beekeepers are embracing organic methods—using natural hive treatments and planting pollinator-friendly flora—to support bee health. Early data shows increased hive survival rates. Conservation groups are promoting these practices to protect biodiversity.",
    "url": "#"
  },
  {
    "title": "Historic Novel Tops Best-Seller Lists",
    "content": "A newly released historical fiction novel has soared to the top of international best-seller charts. Readers praise its intricate storytelling and vivid character development. Critics have lauded it as a defining work of contemporary literature.",
    "url": "#"
  },
  {
    "title": "Irrigation Project Transforms Dry Land",
    "content": "An irrigation initiative using solar-powered pumps and drip lines has revitalized previously arid farmlands. Farmers report 25% yield increases and lower labor costs. The project is now set to expand to neighboring districts.",
    "url": "#"
  },
  {
    "title": "Education Tech Platform Sees Massive Growth",
    "content": "An edtech startup providing personalized learning for middle-school students has seen 500% growth during lockdowns. AI-driven modules and real-time feedback are praised by teachers and parents. The company plans to expand to 10 new regions.",
    "url": "#"
  },
  {
    "title": "City Marathon Breaks Participation Record",
    "content": "This year’s city marathon attracted over 30,000 runners, setting a new record. Organizers added wheelchair and children's events. Sponsors and charities reported significant fundraising for community programs.",
    "url": "#"
  },
  {
    "title": "Irrigation Workshop Empowers Local Farmers",
    "content": "A local agriculture extension office conducted workshops on drip and sprinkler irrigation techniques. Farmers learned best practices, water management, and system maintenance. Participants report immediate improvements in water efficiency and crop health.",
    "url": "#"
  },
  {
    "title": "Breakthrough in Cancer Drug Trials",
    "content": "Phase III clinical trials for a new immunotherapy drug show promise in treating aggressive lung cancer. Survival rates improved significantly without severe side effects. Experts call it a potential game-changer for oncology care.",
    "url": "#"
  },
  {
    "title": "Organic Herb Gardens Heal Community",
    "content": "Communities are growing organic herb gardens in public spaces to encourage wellness and social interaction. The gardens use compost-only soil and pesticide-free plants. Locals report improved mental health and neighborhood pride.",
    "url": "#"
  },
  {
    "title": "Tech Conference Highlights AI Ethics",
    "content": "At an international tech conference, experts emphasized ethics in AI, including bias reduction, transparency, and GDPR compliance. Workshops focused on ethical design in consumer and enterprise technology. A global charter for ethical AI was proposed.",
    "url": "#"
  },
  {
    "title": "Local Bakery Wins Health Award",
    "content": "A bakery has been recognized for creating low-sugar, whole-grain breads. Nutritionists applaud the initiative, and sales have surged. The award highlights the bakery’s commitment to promoting healthy eating habits.",
    "url": "#"
  },
  {
    "title": "Finance Sector Adopts Blockchain",
    "content": "Several banks have launched blockchain pilots to streamline cross-border payments and reduce fraud. Initial tests showed transaction times cut by half. Regulators are monitoring the trials before broader rollout.",
    "url": "#"
  },
  {
    "title": "Indigenous Farming Revives Tradition",
    "content": "Farmers in rural areas are reintroducing ancient indigenous crops like millets and amaranth. These crops use less water and are resilient to pests. Revival projects are supported by agricultural NGOs and attract premium prices.",
    "url": "#"
  },
  {
    "title": "University Unveils Robotics Lab",
    "content": "A leading university has opened a state-of-the-art robotics lab for student research and innovation. The lab features collaborative humanoid robots and drone programming platforms. The lab aims to strengthen industry-academic partnerships.",
    "url": "#"
  },
  {
    "title": "National Women’s Hockey Team Triumphs",
    "content": "The national women’s hockey team clinched gold in a major international tournament, defeating fierce rivals in a penalty shootout. The team credited rigorous training, community support, and youth development programs for their success.",
    "url": "#"
  },
  {
    "title": "Retail Giant Launches Sustainability Drive",
    "content": "A major retail chain announced plans to go carbon-neutral by 2030, reducing single-use plastics and increasing renewable energy use across stores. The initiative includes eco-packaging and community recycling schemes.",
    "url": "#"
  },
  {
    "title": "School Program Teaches Coding Early",
    "content": "Primary schools are integrating block-based and Python coding in their curriculum. Students show improved problem-solving skills and enthusiasm. Educators see coding as essential to preparing children for future careers.",
    "url": "#"
  },
  {
    "title": "Deep-Sea Mineral Discovery Raises Questions",
    "content": "Scientists discovered rare metals near the ocean floor, crucial for electronics and EV batteries. Environmentalists warn of potential ecosystem threats. Governments are weighing economic benefits against marine conservation.",
    "url": "#"
  },
  {
    "title": "Local Theater Revives Classic Play",
    "content": "A community theater group revived a century-old play with modern staging and inclusive casting. The production drew large audiences and sparked renewed interest in local dramatic arts.",
    "url": "#"
  },
  {
    "title": "Organic Dairy Co-Op Grows Membership",
    "content": "A cooperative of small organic dairy producers has doubled its membership this year. Farmers follow strict organic guidelines and use pasture-based practices. Sales have grown regionally, fueled by consumer demand for natural dairy products.",
    "url": "#"
  },
  {
    "title": "Water Pollution Levels Decline",
    "content": "New regulations on industrial discharge and waste treatment have led to improved water quality in major rivers. Scientists report decreases in heavy metals and microbial contaminants, benefiting local communities and ecosystems.",
    "url": "#"
  },
  {
    "title": "Major Airline Adopts Biofuels",
    "content": "A leading airline completed trials using biofuel made from algae oil, reducing carbon emissions by 20%. The airline plans to use blended fuel on domestic routes and scale production in partnership with renewable energy firms.",
    "url": "#"
  },
  {
    "title": "Startup Creates Wearable Fitness Tech",
    "content": "A new wearable monitors hydration, posture, and heart rate, providing real-time alerts and personalized recommendations. Early adopters say it helps prevent injuries and improve workout efficiency.",
    "url": "#"
  },
  {
    "title": "Farmer Helpline Introduces SMS Service",
    "content": "An SMS-based helpline now provides weather updates and pest warnings to farmers. Over 10,000 users have subscribed, improving crop planning and reducing losses. Authorities plan to expand the service nationwide.",
    "url": "#"
  },
  {
    "title": "Pharmacy Tech Cuts Prescription Errors",
    "content": "Pharmacies are implementing barcode scanning for prescriptions to reduce dispensing mistakes. Early data shows a 70% drop in errors and improved patient satisfaction.",
    "url": "#"
  },
  {
    "title": "Athlete Breaks National Marathon Record",
    "content": "A long-distance runner set a new national marathon record, finishing 90 seconds faster than the previous best. Training focused on altitude and nutrition optimization.",
    "url": "#"
  },
  {
    "title": "Solar Power Use Surges in Homes",
    "content": "Residential solar panel installations have tripled over two years, supported by government incentives. Homeowners report significant utility savings and reduced carbon footprints.",
    "url": "#"
  },
  {
    "title": "Tech Company Launches Rural Internet",
    "content": "A telecom startup is rolling out satellite internet to remote villages, covering over 1,000 communities. Early feedback praises improved connectivity for education and commerce.",
    "url": "#"
  },
  {
    "title": "Elementary School Garden Program Thrives",
    "content": "Primary schools launched garden programs teaching students to grow vegetables and learn about nutrition. Kids report improved interest in science and healthy eating habits.",
    "url": "#"
  },
  {
    "title": "Biodegradable Packaging Patent Filed",
    "content": "An eco-startup filed a patent for a biodegradable film made from fruit peels and plant fibers. The packaging breaks down within months and is sustainable for food products.",
    "url": "#"
  },
  {
    "title": "Women’s Basketball League Expands Teams",
    "content": "The national women’s basketball league added two new teams and launched a youth talent academy. Officials hope the expansion boosts competitive balance and grassroots development.",
    "url": "#"
  },
  {
    "title": "Organic Poultry Farm Reduces Antibiotic Use",
    "content": "An organic poultry farm eliminated routine antibiotic use, instead using probiotics and improved hygiene. Bird health remains high and consumer trust grows.",
    "url": "#"
  },
  {
    "title": "Smart City Project Wins Global Award",
    "content": "A citywide smart city initiative featuring integrated traffic management, waste monitoring, and mobility apps won an international innovation award this year.",
    "url": "#"
  },
  {
    "title": "VR Classroom Brings History to Life",
    "content": "A school introduced VR-based history lessons, allowing students to virtually explore ancient civilizations. Teachers report higher engagement and retention of learning material.",
    "url": "#"
  },
  {
    "title": "National Cricket Team Qualifies for World Cup",
    "content": "The national cricket team secured a spot in the upcoming ICC World Cup with a standout bowling performance in qualifiers. Fans celebrated with street parades.",
    "url": "#"
  },
  {
    "title": "Climate Summit Commits to Reforestation",
    "content": "World leaders pledged planting 1 billion trees by 2030 at the climate summit. Funding includes public-private partnerships and community-driven forestry programs.",
    "url": "#"
  },
  {
    "title": "Electric Bus Fleet Hits the Streets",
    "content": "The city launched a fully electric bus fleet powered by solar-charged grids. Officials expect reduced emissions and quieter public transit.",
    "url": "#"
  },
  {
    "title": "Organic Tea Gardens Expand Export Markets",
    "content": "Tea farmers cultivating certified organic tea have secured export deals with specialty retailers in Europe and North America. They report premium prices and sustainable yields.",
    "url": "#"
  },
  {
    "title": "Community Coding Camps Inspire Youth",
    "content": "Free weekend coding camps offer programming workshops and mentorship to underserved youth. Participants learn web development and basic algorithms, with many students continuing self-study.",
    "url": "#"
  },
  {
    "title": "High-Speed Rail Plan Approved",
    "content": "A government approved a high-speed rail connection between major cities, reducing travel times from 5 to 2 hours. Construction is scheduled to begin next year.",
    "url": "#"
  }


];

app.get("/api/news", (req, res) => {
  res.json({
    status: "success",
    data: mixedNews
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/news`);
});