export type City = {
  slug: string;
  name: string;
  stateAbbr: string;
  stateSlug: string;
  metroPop: string;
  blurb: string; // ~60 words, city-specific
  topProviderSlugs: [string, string, string];
};

export const CITIES: City[] = [
  {
    slug: "new-york-ny",
    name: "New York",
    stateAbbr: "NY",
    stateSlug: "new-york",
    metroPop: "19.5M",
    blurb:
      "New York City anchors the country's deepest specialty-clinician market, including substantial obesity-medicine subspecialty availability. Commercial-insurance coverage of GLP-1s under approved indications is among the broadest in the country. Pharmacy partners shipping into New York must hold appropriate non-resident licenses with the New York State Board of Pharmacy — a meaningful compliance signal worth verifying with any cash-pay program.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles",
    stateAbbr: "CA",
    stateSlug: "california",
    metroPop: "13.0M",
    blurb:
      "Los Angeles is the largest single metro in California and produces substantial GLP-1 demand under California's telehealth-parity insurance environment. Cedars-Sinai, UCLA, and Keck/USC academic medical centers anchor obesity-medicine subspecialty depth. The metro's mix of commercial and Medi-Cal coverage produces meaningful variability in brand-name vs compounded decision-making at the patient level.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "chicago-il",
    name: "Chicago",
    stateAbbr: "IL",
    stateSlug: "illinois",
    metroPop: "9.4M",
    blurb:
      "Chicago anchors one of the deepest specialty-clinician markets in the Midwest. Northwestern, Rush, and the University of Chicago medical centers contribute strong obesity-medicine subspecialty availability. Illinois's telehealth-parity statutes produce relatively broad commercial coverage of GLP-1s under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "houston-tx",
    name: "Houston",
    stateAbbr: "TX",
    stateSlug: "texas",
    metroPop: "7.3M",
    blurb:
      "Houston is the headquarters city for Empower Pharmacy, the largest dual-registered 503A + 503B compounding pharmacy in the country and a significant supplier of compounded-GLP-1 telehealth programs nationally. The Texas Medical Center anchors a deep obesity-medicine subspecialty market. Houston combines unusually strong in-state clinical availability with hub-of-supply for compounded preparations.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "dallas-fort-worth-tx",
    name: "Dallas–Fort Worth",
    stateAbbr: "TX",
    stateSlug: "texas",
    metroPop: "7.9M",
    blurb:
      "The Dallas–Fort Worth metroplex is one of the fastest-growing major US metros, with corresponding growth in obesity-medicine and telehealth supply. UT Southwestern Medical Center is a major academic anchor. Texas's regulatory framework (Texas Medical Board for clinician licensure; Texas State Board of Pharmacy for compounding) shapes both in-state supply and the broader national compounded-GLP-1 market.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "phoenix-az",
    name: "Phoenix",
    stateAbbr: "AZ",
    stateSlug: "arizona",
    metroPop: "5.0M",
    blurb:
      "Phoenix is one of the operational hubs for compounded-GLP-1 supply: Strive Pharmacy is licensed by the Arizona State Board of Pharmacy. Arizona's telehealth-friendly statutes produce relatively broad practice. The Mayo Clinic Arizona campus is a meaningful obesity-medicine subspecialty anchor.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    stateAbbr: "PA",
    stateSlug: "pennsylvania",
    metroPop: "6.3M",
    blurb:
      "Philadelphia anchors one of the strongest academic-medicine markets in the Mid-Atlantic, with Penn Medicine, Jefferson, and Temple producing meaningful obesity-medicine subspecialty availability. Pennsylvania's commercial-insurance environment supports relatively broad GLP-1 coverage under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "san-antonio-tx",
    name: "San Antonio",
    stateAbbr: "TX",
    stateSlug: "texas",
    metroPop: "2.7M",
    blurb:
      "San Antonio's clinician supply has grown alongside the broader Texas Medical Board licensure footprint. Its central Texas location produces useful complement to the Houston-anchored compounding supply chain. Standard telehealth practice rules apply.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "san-diego-ca",
    name: "San Diego",
    stateAbbr: "CA",
    stateSlug: "california",
    metroPop: "3.3M",
    blurb:
      "San Diego's mix of academic medicine (UCSD), military health (Naval Medical Center), and commercial telehealth supply produces broad GLP-1 access. California's telehealth-parity statutes and the strong commercial-insurance footprint produce favorable coverage of approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "san-francisco-bay-area-ca",
    name: "San Francisco Bay Area",
    stateAbbr: "CA",
    stateSlug: "california",
    metroPop: "7.7M",
    blurb:
      "The Bay Area's tech-employer commercial-insurance footprint produces unusually broad GLP-1 coverage. UCSF and Stanford anchor strong obesity-medicine subspecialty depth. The metro is over-represented in the early-adopter patient cohort for newer therapies including tirzepatide and (pending approval) retatrutide.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "boston-ma",
    name: "Boston",
    stateAbbr: "MA",
    stateSlug: "massachusetts",
    metroPop: "4.9M",
    blurb:
      "Boston anchors one of the strongest specialty-clinician markets in the country. MGH, BWH, BIDMC, and BMC produce substantial obesity-medicine subspecialty availability. Massachusetts's telehealth-parity statutes and strong commercial-insurance environment produce broad GLP-1 coverage under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "washington-dc-metro",
    name: "Washington DC (DMV)",
    stateAbbr: "DC",
    stateSlug: "district-of-columbia",
    metroPop: "6.4M",
    blurb:
      "The DMV (DC, suburban Maryland, Northern Virginia) combines federal-employee insurance coverage with academic-medicine depth at MedStar/Georgetown, Hopkins, and INOVA. GLP-1 coverage under approved indications is among the broadest in the country, particularly for cardiovascular-risk-reduction and T2D.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "atlanta-ga",
    name: "Atlanta",
    stateAbbr: "GA",
    stateSlug: "georgia",
    metroPop: "6.3M",
    blurb:
      "Atlanta anchors one of the deepest clinician markets in the Southeast. Emory University Hospital is a meaningful obesity-medicine subspecialty anchor. Georgia's commercial-insurance environment produces reasonable GLP-1 coverage under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "miami-fl",
    name: "Miami",
    stateAbbr: "FL",
    stateSlug: "florida",
    metroPop: "6.2M",
    blurb:
      "Miami is one of the South Florida hubs for compounded-GLP-1 supply (Hallandale Pharmacy and others). The metro's substantial commercial-insurance footprint supports brand-name GLP-1 access; the retiree population produces an above-national-average mix of T2D indications.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "tampa-fl",
    name: "Tampa",
    stateAbbr: "FL",
    stateSlug: "florida",
    metroPop: "3.3M",
    blurb:
      "Tampa Bay's growing population and strong commercial-insurance footprint produce substantial GLP-1 demand. Florida's status as a major operational base for compounded-GLP-1 supply (multiple 503A pharmacies licensed by the Florida Board of Pharmacy) affects in-state prescription routing.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "orlando-fl",
    name: "Orlando",
    stateAbbr: "FL",
    stateSlug: "florida",
    metroPop: "2.8M",
    blurb:
      "Orlando is home to Olympia Pharmacy, a 503A compounding pharmacy that serves a number of telehealth programs nationally. The metro's clinician supply has grown alongside its population, with standard telehealth practice rules in effect.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "minneapolis-saint-paul-mn",
    name: "Minneapolis–Saint Paul",
    stateAbbr: "MN",
    stateSlug: "minnesota",
    metroPop: "3.7M",
    blurb:
      "The Twin Cities anchor one of the strongest clinical-research and care-delivery ecosystems in the upper Midwest. Mayo Clinic's Rochester campus contributes substantial obesity-medicine subspecialty depth that is referenced nationally.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "detroit-mi",
    name: "Detroit",
    stateAbbr: "MI",
    stateSlug: "michigan",
    metroPop: "4.4M",
    blurb:
      "Metro Detroit's strong UAW-anchored commercial-insurance footprint produces reasonable GLP-1 coverage under approved indications. Henry Ford Health and the University of Michigan (Ann Arbor) anchor in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "seattle-wa",
    name: "Seattle",
    stateAbbr: "WA",
    stateSlug: "washington",
    metroPop: "4.0M",
    blurb:
      "Seattle's tech-employer commercial-insurance footprint produces broad GLP-1 coverage under approved indications. UW Medicine anchors obesity-medicine subspecialty availability. The metro is over-represented in the early-adopter cohort for newer therapies.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "denver-co",
    name: "Denver",
    stateAbbr: "CO",
    stateSlug: "colorado",
    metroPop: "3.0M",
    blurb:
      "Denver is the primary urban anchor of Colorado, which has the country's lowest adult obesity rate but substantial absolute demand. Belmar Pharmacy's Colorado licensure produces some in-state compounded-GLP-1 supply. UCHealth and Denver Health anchor clinician availability.",
    topProviderSlugs: ["nexlife", "calibrate", "form-health"],
  },
  {
    slug: "saint-louis-mo",
    name: "Saint Louis",
    stateAbbr: "MO",
    stateSlug: "missouri",
    metroPop: "2.8M",
    blurb:
      "Saint Louis's central US location and the BJC HealthCare network anchor in-state clinician supply. Missouri's pharmacy-board licensure of Medivera Compounding produces some in-state prescription routing.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "charlotte-nc",
    name: "Charlotte",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    metroPop: "2.8M",
    blurb:
      "Charlotte's growing population and strong commercial-insurance footprint (driven by the banking-sector employer base) produce substantial GLP-1 demand under approved indications. Atrium Health and Novant anchor in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "nashville-tn",
    name: "Nashville",
    stateAbbr: "TN",
    stateSlug: "tennessee",
    metroPop: "2.0M",
    blurb:
      "Nashville's rapidly-growing population and Vanderbilt-anchored academic medicine produce strong clinician supply. Tennessee's combined T2D and obesity prevalence rates make clinical eligibility broad across the metro.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "raleigh-durham-nc",
    name: "Raleigh-Durham (Research Triangle)",
    stateAbbr: "NC",
    stateSlug: "north-carolina",
    metroPop: "2.1M",
    blurb:
      "The Research Triangle's combination of academic medicine (Duke, UNC), strong commercial-insurance footprint, and dense biotech-and-pharma research presence produces a relatively favorable GLP-1 access environment.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "austin-tx",
    name: "Austin",
    stateAbbr: "TX",
    stateSlug: "texas",
    metroPop: "2.5M",
    blurb:
      "Austin's tech-employer commercial-insurance footprint produces broad GLP-1 coverage under approved indications. Its location within Texas — the country's largest compounded-GLP-1 supply state — produces strong telehealth access. UT-Austin's Dell Medical School anchors in-state academic clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "salt-lake-city-ut",
    name: "Salt Lake City",
    stateAbbr: "UT",
    stateSlug: "utah",
    metroPop: "1.3M",
    blurb:
      "Salt Lake City anchors Utah's growing healthcare market. The University of Utah and Intermountain Healthcare contribute strong in-state clinician availability. Red Rock Pharmacy's Utah licensure produces some in-state compounded-GLP-1 prescription routing.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "portland-or",
    name: "Portland",
    stateAbbr: "OR",
    stateSlug: "oregon",
    metroPop: "2.5M",
    blurb:
      "Portland's strong commercial-insurance footprint and OHSU-anchored academic medicine produce broad GLP-1 access under approved indications. Oregon's progressive payer environment supports relatively favorable coverage.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "indianapolis-in",
    name: "Indianapolis",
    stateAbbr: "IN",
    stateSlug: "indiana",
    metroPop: "2.1M",
    blurb:
      "Indianapolis is the headquarters of Eli Lilly and a major hub for GLP-1 and dual-agonist clinical research. The metro's clinician supply and the Indiana University School of Medicine produce strong in-state availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "columbus-oh",
    name: "Columbus",
    stateAbbr: "OH",
    stateSlug: "ohio",
    metroPop: "2.2M",
    blurb:
      "Columbus's Ohio State Wexner Medical Center anchors strong in-state obesity-medicine subspecialty availability. The metro's commercial-insurance environment produces reasonable GLP-1 coverage under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "las-vegas-nv",
    name: "Las Vegas",
    stateAbbr: "NV",
    stateSlug: "nevada",
    metroPop: "2.3M",
    blurb:
      "Las Vegas anchors Nevada's clinician supply, with relatively thin coverage outside the metro. Telehealth is a substantial complement to in-state availability. Reviewed providers serve the metro broadly.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
