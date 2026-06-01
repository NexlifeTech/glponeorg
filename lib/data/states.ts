export type StateRegion =
  | "Northeast"
  | "Mid-Atlantic"
  | "Southeast"
  | "Midwest"
  | "Southwest"
  | "Mountain"
  | "Pacific"
  | "Non-contiguous";

export type State = {
  slug: string;
  name: string;
  abbr: string;
  region: StateRegion;
  population: string; // approx, with year tag
  obesityRate?: string; // approx adult rate
  telehealthNote: string; // brief regulatory practice note
  regulatoryNote: string; // any state-specific compounding/pharmacy context
  intro: string; // 60–100 words, unique per state
  topProviderSlugs: [string, string, string];
};

// Sample prices come from FEATURED (NexLife). State-level routing notes are kept
// general because GLP-1 telehealth practice rules are broadly harmonized across
// states under standard telehealth-practice statutes.
export const STATES: State[] = [
  {
    slug: "alabama",
    name: "Alabama",
    abbr: "AL",
    region: "Southeast",
    population: "5.1M (2023)",
    obesityRate: "39%",
    telehealthNote:
      "Standard synchronous video for initial visit; physician licensure in Alabama required for prescriptive authority.",
    regulatoryNote:
      "Alabama Board of Medical Examiners maintains an active telehealth policy. No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Alabama's adult obesity rate of roughly 39% is among the highest in the United States, placing it in the cohort of Southeast states where GLP-1 access is among the most clinically warranted. Telehealth practice statutes are standard and most reviewed providers operate without state-specific restriction. Birmingham, Montgomery, Mobile, and Huntsville have the densest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "alaska",
    name: "Alaska",
    abbr: "AK",
    region: "Non-contiguous",
    population: "0.73M",
    obesityRate: "34%",
    telehealthNote:
      "Alaska Medical Board requires standard telehealth licensure; broad telehealth use is well-established due to geographic distances.",
    regulatoryNote:
      "Cold-chain shipping windows are longer to most Alaska addresses; reputable programs route via expedited carriers with documented in-transit temperature monitoring.",
    intro:
      "Alaska's vast geography makes telehealth the practical default for specialty care across most of the state. GLP-1 telehealth programs typically serve Alaska without restriction, though patients should pay particular attention to cold-chain shipping documentation given longer transit windows. Anchorage, Fairbanks, and Juneau have the strongest clinician availability; rural patients should confirm prescription routing.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    region: "Mountain",
    population: "7.4M",
    obesityRate: "31%",
    telehealthNote:
      "Arizona has been an early adopter of telehealth-friendly practice rules. Standard MD/DO/NP licensure applies.",
    regulatoryNote:
      "Several major compounding pharmacies, including Strive Pharmacy, are licensed by the Arizona State Board of Pharmacy — making in-state prescription routing relatively common.",
    intro:
      "Arizona is one of the operational hubs for compounding pharmacies serving the national telehealth market — Strive Pharmacy, among others, is licensed here. This produces a relatively high in-state prescription-routing rate among the larger telehealth programs. Telehealth practice rules are broadly facilitative. Phoenix, Tucson, Mesa, and Chandler have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbr: "AR",
    region: "Southeast",
    population: "3.1M",
    obesityRate: "37%",
    telehealthNote:
      "Standard synchronous video for initial telehealth visit; Arkansas Medical Board licensure required.",
    regulatoryNote:
      "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Arkansas's obesity rate of approximately 37% places it among the higher-prevalence states in the country. Telehealth access is generally robust through national providers. Little Rock and the northwest Arkansas (Fayetteville/Bentonville/Springdale) corridor have the densest clinician availability; reviewed programs serve the state without unusual restriction.",
    topProviderSlugs: ["nexlife", "henry-meds", "calibrate"],
  },
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    region: "Pacific",
    population: "39.0M",
    obesityRate: "27%",
    telehealthNote:
      "California has detailed telehealth practice statutes including parity laws for commercial insurance.",
    regulatoryNote:
      "California Board of Pharmacy maintains strict non-resident pharmacy licensing; pharmacy partners shipping into California must hold appropriate non-resident licenses.",
    intro:
      "California's adult obesity rate is lower than the national average, but the state's population scale means more adults qualify for GLP-1 therapy here than in any other state. California's telehealth parity laws make GLP-1 coverage under commercial insurance slightly broader than in many states. Los Angeles, San Diego, the Bay Area, and Sacramento have the deepest clinician networks.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    region: "Mountain",
    population: "5.9M",
    obesityRate: "25%",
    telehealthNote:
      "Standard telehealth practice rules; Colorado Medical Board licensure required.",
    regulatoryNote:
      "Belmar Pharmacy, a long-standing PCAB-accredited 503A compounding pharmacy, is licensed by the Colorado State Board of Pharmacy. Some compounded-GLP-1 prescriptions route through Colorado for that reason.",
    intro:
      "Colorado's adult obesity rate of roughly 25% is the lowest in the country, but absolute demand for GLP-1 therapy in Denver and along the Front Range remains substantial. Belmar Pharmacy's Colorado licensure means some compounded preparations are routed through the state. Denver, Colorado Springs, Aurora, and Fort Collins have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "calibrate", "form-health"],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    region: "Northeast",
    population: "3.6M",
    obesityRate: "29%",
    telehealthNote:
      "Connecticut has telehealth parity for commercial insurance; physician licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Connecticut's commercial insurance landscape is among the more favorable for GLP-1 coverage, particularly for the cardiovascular-risk-reduction indication under Wegovy's expanded 2024 label. The state's relatively high median income makes brand-name GLP-1s a more frequent first-line choice. Hartford, New Haven, Stamford, and Bridgeport have the densest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "delaware",
    name: "Delaware",
    abbr: "DE",
    region: "Mid-Atlantic",
    population: "1.0M",
    obesityRate: "34%",
    telehealthNote:
      "Standard telehealth practice; physician licensure with the Delaware Division of Professional Regulation.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Delaware's small population is concentrated in the Wilmington and Dover areas. Telehealth practice rules are standard and reviewed providers operate without restriction. Most patients in Delaware sit within the commercial-insurance footprint of major Mid-Atlantic payers, which affects the brand-name vs compounded decision more than telehealth access itself.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "district-of-columbia",
    name: "District of Columbia",
    abbr: "DC",
    region: "Mid-Atlantic",
    population: "0.68M",
    obesityRate: "24%",
    telehealthNote:
      "DC Department of Health regulates telehealth practice; physician licensure in DC required.",
    regulatoryNote: "No DC-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "The District of Columbia has the lowest adult obesity rate of any US jurisdiction, but the federal-employee insurance footprint produces unusually broad commercial coverage of GLP-1s under cardiovascular and diabetes indications. Telehealth practice is standard. Most reviewed providers serve DC without restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    region: "Southeast",
    population: "22.6M",
    obesityRate: "31%",
    telehealthNote:
      "Florida has explicit telehealth practice statutes; Florida Board of Medicine licensure required.",
    regulatoryNote:
      "Several compounding pharmacies, including Olympia and Hallandale, are licensed by the Florida Board of Pharmacy. Many compounded-GLP-1 prescriptions route through Florida for that reason.",
    intro:
      "Florida is a major operational hub for compounded-GLP-1 supply: Olympia Pharmacy in Orlando, Hallandale Pharmacy near Miami, and other 503A pharmacies licensed here serve a substantial share of national telehealth demand. The state's large retiree population also affects the prescription mix, with Type 2 diabetes indications more prevalent than the national average. Miami, Tampa, Orlando, and Jacksonville have the strongest clinician networks.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    region: "Southeast",
    population: "11.0M",
    obesityRate: "34%",
    telehealthNote:
      "Standard telehealth practice; Georgia Composite Medical Board licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Georgia's adult obesity rate of approximately 34% drives substantial in-state GLP-1 demand. Atlanta is one of the deepest clinician markets in the Southeast and produces a healthy in-state telehealth supply. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbr: "HI",
    region: "Non-contiguous",
    population: "1.4M",
    obesityRate: "25%",
    telehealthNote:
      "Hawaii Medical Board licensure required for prescriptive authority; standard telehealth practice rules apply.",
    regulatoryNote:
      "Cold-chain shipping windows are longer; reputable programs route via expedited carriers with temperature-monitored containers.",
    intro:
      "Hawaii's adult obesity rate is among the lowest in the country, and the multi-ethnic population health profile differs meaningfully from the continental US. Cold-chain shipping is the operational consideration most worth confirming at intake. Honolulu has the strongest clinician availability; reviewed programs serve Hawaii without unusual restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    region: "Mountain",
    population: "2.0M",
    obesityRate: "31%",
    telehealthNote:
      "Idaho Medical Board licensure required; standard telehealth practice statutes.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Idaho's growing population, particularly around Boise and the Treasure Valley, has produced strengthening telehealth supply over the last several years. Reviewed providers operate without state-specific restriction. Boise, Meridian, and Nampa have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    region: "Midwest",
    population: "12.5M",
    obesityRate: "32%",
    telehealthNote:
      "Illinois has telehealth parity for commercial insurance; physician licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Illinois's commercial insurance environment is relatively favorable for GLP-1 coverage under approved indications. Chicago anchors one of the deepest specialty-clinician markets in the Midwest, including strong obesity-medicine subspecialty availability. Chicago, Aurora, Naperville, and Rockford have the densest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    region: "Midwest",
    population: "6.8M",
    obesityRate: "37%",
    telehealthNote: "Standard telehealth practice; Indiana Medical Licensing Board licensure required.",
    regulatoryNote:
      "Eli Lilly's headquarters and manufacturing in Indianapolis produce a slightly higher density of obesity-medicine clinical research presence in the state.",
    intro:
      "Indiana's obesity rate of roughly 37% is meaningfully above the national average. Eli Lilly's headquarters in Indianapolis gives the state an outsized presence in clinical research on GLP-1 and dual-agonist therapies. Indianapolis, Fort Wayne, and Evansville have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    region: "Midwest",
    population: "3.2M",
    obesityRate: "37%",
    telehealthNote: "Iowa Board of Medicine licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Iowa's adult obesity rate of roughly 37% places it among the higher-prevalence Midwest states. Telehealth is the dominant access channel for specialty care across rural Iowa. Des Moines, Cedar Rapids, and Davenport have the strongest clinician availability; reviewed programs serve the state without restriction.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    region: "Midwest",
    population: "2.9M",
    obesityRate: "36%",
    telehealthNote: "Standard telehealth practice; Kansas Board of Healing Arts licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Kansas's geographic dispersion makes telehealth the practical default for many patients. Wichita, Kansas City (KS), and Topeka have the strongest clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    region: "Southeast",
    population: "4.5M",
    obesityRate: "38%",
    telehealthNote: "Standard telehealth practice; Kentucky Board of Medical Licensure required.",
    regulatoryNote:
      "Tailor Made Compounding, a 503A pharmacy, is licensed by the Kentucky Board of Pharmacy.",
    intro:
      "Kentucky's adult obesity rate of approximately 38% is among the highest in the country. Louisville, Lexington, and Bowling Green have the strongest in-state clinician availability. Tailor Made Compounding's Kentucky licensure produces some in-state prescription routing.",
    topProviderSlugs: ["nexlife", "henry-meds", "calibrate"],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    region: "Southeast",
    population: "4.6M",
    obesityRate: "39%",
    telehealthNote: "Louisiana State Board of Medical Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Louisiana's adult obesity rate of approximately 39% is among the highest in the nation. New Orleans, Baton Rouge, and Shreveport have the strongest clinician availability. The combined Type 2 diabetes prevalence makes clinical eligibility broad across the state.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "maine",
    name: "Maine",
    abbr: "ME",
    region: "Northeast",
    population: "1.4M",
    obesityRate: "31%",
    telehealthNote: "Standard telehealth practice; Maine Board of Licensure in Medicine required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Maine's distributed population makes telehealth a practical access channel for most of the state. Portland and Bangor anchor in-state clinician supply. Reviewed providers operate without state-specific restriction. The state's largely commercial-insurance footprint affects brand-name vs compounded decision-making.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    region: "Mid-Atlantic",
    population: "6.2M",
    obesityRate: "32%",
    telehealthNote: "Maryland Board of Physicians licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Maryland's federal-employee insurance footprint and Johns Hopkins-anchored academic medicine produce a relatively robust commercial coverage environment for GLP-1s. Baltimore, the DC suburbs (Montgomery and Prince George's counties), and the Annapolis area have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    region: "Northeast",
    population: "7.0M",
    obesityRate: "27%",
    telehealthNote: "Massachusetts has telehealth parity; physician licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Massachusetts's adult obesity rate is below the national average, and the state's strong commercial-insurance footprint produces broad GLP-1 coverage under approved indications. Boston anchors one of the strongest specialty-clinician markets in the country, including obesity-medicine subspecialty availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    region: "Midwest",
    population: "10.0M",
    obesityRate: "35%",
    telehealthNote: "Michigan Department of Licensing and Regulatory Affairs administers physician licensure.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Michigan's mix of large urban centers and dispersed rural population makes telehealth a substantial access channel. Detroit, Grand Rapids, and Ann Arbor have the strongest clinician availability. The combined T2D prevalence is meaningfully above national average; clinical eligibility is broad.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    region: "Midwest",
    population: "5.7M",
    obesityRate: "30%",
    telehealthNote: "Minnesota Board of Medical Practice licensure required; standard telehealth.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Minnesota's Twin Cities metro anchors one of the strongest clinical-research and care-delivery ecosystems in the upper Midwest, including obesity-medicine subspecialty depth. Reviewed providers serve the state broadly. Minneapolis-Saint Paul, Duluth, and Rochester have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    abbr: "MS",
    region: "Southeast",
    population: "2.9M",
    obesityRate: "40%",
    telehealthNote: "Mississippi State Board of Medical Licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Mississippi's adult obesity rate of approximately 40% is the highest in the country, making the clinical case for GLP-1 access here as strong as anywhere. Telehealth supply is meaningful both for direct access and for rural patients distant from in-state clinicians. Jackson, Gulfport, and Hattiesburg have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    region: "Midwest",
    population: "6.2M",
    obesityRate: "35%",
    telehealthNote: "Missouri Board of Registration for the Healing Arts licensure required.",
    regulatoryNote:
      "Medivera Compounding Pharmacy is licensed by the Missouri Board of Pharmacy; some compounded-GLP-1 supply routes through Missouri.",
    intro:
      "Missouri's central position and substantial population make it an operational midpoint for many compounded supply networks; Medivera Compounding Pharmacy is licensed here. Saint Louis, Kansas City (MO), and Springfield have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "montana",
    name: "Montana",
    abbr: "MT",
    region: "Mountain",
    population: "1.1M",
    obesityRate: "31%",
    telehealthNote: "Montana Board of Medical Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Montana's geographic dispersion makes telehealth the practical default for specialty care across most of the state. Billings, Missoula, and Bozeman have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    abbr: "NE",
    region: "Midwest",
    population: "2.0M",
    obesityRate: "35%",
    telehealthNote: "Nebraska Department of Health and Human Services administers physician licensure.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Nebraska's adult obesity rate of approximately 35% is consistent with broader Plains-state patterns. Omaha and Lincoln have the strongest clinician availability. Reviewed providers operate without state-specific restriction; rural patients should confirm cold-chain shipping windows.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    region: "Mountain",
    population: "3.2M",
    obesityRate: "31%",
    telehealthNote: "Nevada State Board of Medical Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Nevada's population is concentrated in Las Vegas and Reno, with relatively thin clinician supply outside those metros. Telehealth is the practical access channel for rural Nevada. Reviewed providers operate broadly; Las Vegas and Reno have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbr: "NH",
    region: "Northeast",
    population: "1.4M",
    obesityRate: "30%",
    telehealthNote: "New Hampshire Board of Medicine licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "New Hampshire's commercial-insurance footprint produces relatively favorable GLP-1 coverage under approved indications. Manchester, Nashua, and Concord have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    region: "Mid-Atlantic",
    population: "9.3M",
    obesityRate: "28%",
    telehealthNote: "New Jersey has telehealth parity for commercial insurance.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "New Jersey's strong commercial-insurance environment produces relatively broad GLP-1 coverage. The state's dense population is well-served by both in-state clinicians and the NYC/Philadelphia metro spillover. Newark, Jersey City, Paterson, and Elizabeth have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    region: "Southwest",
    population: "2.1M",
    obesityRate: "31%",
    telehealthNote: "New Mexico Medical Board licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "New Mexico's substantial rural geography makes telehealth a practical access channel for many patients. Albuquerque, Santa Fe, and Las Cruces have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    region: "Northeast",
    population: "19.5M",
    obesityRate: "28%",
    telehealthNote:
      "New York has detailed telehealth practice statutes and licensure requirements; physician licensure with the New York State Education Department required.",
    regulatoryNote:
      "New York State Board of Pharmacy maintains strict non-resident pharmacy licensing requirements; pharmacy partners shipping into New York must hold appropriate licenses.",
    intro:
      "New York's commercial-insurance environment is relatively favorable for GLP-1 coverage under approved indications, particularly under the cardiovascular-risk-reduction Wegovy label. New York City anchors one of the deepest specialty-clinician markets in the country. Pharmacy partners must hold appropriate non-resident licenses to ship into the state — a meaningful compliance signal.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    region: "Southeast",
    population: "10.7M",
    obesityRate: "34%",
    telehealthNote: "North Carolina Medical Board licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "North Carolina's growing population, particularly in the Charlotte and Research Triangle metros, has produced one of the deeper Southeast clinician markets. Charlotte, Raleigh, Durham, and Greensboro have the strongest in-state clinician availability. The state's commercial-insurance footprint produces reasonable GLP-1 coverage.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbr: "ND",
    region: "Midwest",
    population: "0.78M",
    obesityRate: "35%",
    telehealthNote: "North Dakota Board of Medicine licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "North Dakota's geographic dispersion makes telehealth the practical default for specialty care across most of the state. Fargo, Bismarck, and Grand Forks have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    region: "Midwest",
    population: "11.8M",
    obesityRate: "34%",
    telehealthNote: "State Medical Board of Ohio licensure required; standard telehealth practice.",
    regulatoryNote:
      "Absolute Pharmacy is licensed by the Ohio State Board of Pharmacy; some compounded supply routes through Ohio.",
    intro:
      "Ohio's mix of urban centers and substantial rural population produces broad demand for telehealth. Columbus, Cleveland, and Cincinnati have the strongest in-state clinician availability. Absolute Pharmacy's Ohio licensure produces some in-state prescription routing.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbr: "OK",
    region: "Southwest",
    population: "4.1M",
    obesityRate: "37%",
    telehealthNote: "Oklahoma State Board of Medical Licensure required; standard telehealth.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Oklahoma's adult obesity rate of approximately 37% places it among the higher-prevalence Southwest states. Oklahoma City and Tulsa have the strongest in-state clinician availability; rural patients are well-served by telehealth supply.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    region: "Pacific",
    population: "4.2M",
    obesityRate: "30%",
    telehealthNote: "Oregon Medical Board licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Oregon's substantial commercial-insurance footprint and progressive payer environment produce relatively broad GLP-1 coverage. Portland anchors the strongest clinician market; Eugene, Salem, and Bend have meaningful in-state availability.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    region: "Mid-Atlantic",
    population: "13.0M",
    obesityRate: "33%",
    telehealthNote: "Pennsylvania State Board of Medicine licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Pennsylvania's combination of major metros and dispersed rural population produces broad telehealth demand. Philadelphia, Pittsburgh, Allentown, and Erie have the strongest in-state clinician availability. Commercial-insurance coverage of GLP-1s is broadly available under approved indications.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbr: "RI",
    region: "Northeast",
    population: "1.1M",
    obesityRate: "30%",
    telehealthNote: "Rhode Island Department of Health administers physician licensure.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Rhode Island's dense small population is well-served by both in-state clinicians and the Boston metro spillover. Providence anchors the strongest clinician availability. Commercial-insurance coverage of GLP-1s is broadly available.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    region: "Southeast",
    population: "5.4M",
    obesityRate: "35%",
    telehealthNote: "South Carolina Board of Medical Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "South Carolina's adult obesity rate of approximately 35% is meaningfully above the national average. Columbia, Charleston, and Greenville have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    abbr: "SD",
    region: "Midwest",
    population: "0.92M",
    obesityRate: "34%",
    telehealthNote: "South Dakota Board of Medical and Osteopathic Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "South Dakota's geographic dispersion makes telehealth a practical access channel for most of the state. Sioux Falls and Rapid City have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    region: "Southeast",
    population: "7.1M",
    obesityRate: "36%",
    telehealthNote: "Tennessee Board of Medical Examiners licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Tennessee's adult obesity rate of approximately 36% is meaningfully above the national average. Nashville, Memphis, Knoxville, and Chattanooga have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    region: "Southwest",
    population: "30.5M",
    obesityRate: "35%",
    telehealthNote:
      "Texas Medical Board requires physician licensure in Texas for prescriptive authority; telehealth practice rules are detailed.",
    regulatoryNote:
      "Empower Pharmacy, one of the largest dual-registered (503A + 503B) compounding pharmacies in the country, is licensed by the Texas State Board of Pharmacy. A substantial share of national compounded-GLP-1 supply routes through Texas.",
    intro:
      "Texas is the country's largest single state for compounded-GLP-1 supply: Empower Pharmacy, dual-registered as both a 503A pharmacy and a 503B FDA-registered outsourcing facility, is licensed here, and a substantial share of national supply routes through Texas. The state's large population also makes Texas the single largest aggregate demand market. Houston, Dallas-Fort Worth, San Antonio, and Austin have the strongest clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    region: "Mountain",
    population: "3.4M",
    obesityRate: "30%",
    telehealthNote: "Utah Division of Occupational and Professional Licensing administers physician licensure.",
    regulatoryNote:
      "Red Rock Pharmacy is licensed by the Utah State Board of Pharmacy; some compounded supply routes through Utah.",
    intro:
      "Utah's relatively young population produces a lower-than-average adult obesity rate, but Salt Lake City's growing market produces substantial in-state demand. Red Rock Pharmacy's Utah licensure produces some in-state prescription routing. Salt Lake City, West Valley City, and Provo have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbr: "VT",
    region: "Northeast",
    population: "0.65M",
    obesityRate: "27%",
    telehealthNote: "Vermont Board of Medical Practice licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Vermont's small, distributed population makes telehealth the practical access channel for many patients. Burlington has the strongest in-state clinician availability. The state's commercial-insurance footprint produces relatively favorable GLP-1 coverage.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    region: "Mid-Atlantic",
    population: "8.7M",
    obesityRate: "32%",
    telehealthNote: "Virginia Board of Medicine licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Virginia's federal-employee insurance footprint and academic-medicine presence produce a relatively favorable GLP-1 coverage environment. Northern Virginia (the DC metro suburbs), Richmond, Virginia Beach, and Norfolk have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "form-health"],
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    region: "Pacific",
    population: "7.8M",
    obesityRate: "29%",
    telehealthNote: "Washington Medical Commission licensure required; standard telehealth practice.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Washington's strong commercial-insurance environment produces relatively broad GLP-1 coverage under approved indications. Seattle anchors one of the strongest specialty-clinician markets in the Pacific Northwest. Seattle, Spokane, Tacoma, and Bellevue have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "ro-body", "calibrate"],
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    abbr: "WV",
    region: "Southeast",
    population: "1.8M",
    obesityRate: "40%",
    telehealthNote: "West Virginia Board of Medicine licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "West Virginia's adult obesity rate of approximately 40% is among the highest in the country, alongside Mississippi. The state's substantial rural geography makes telehealth a particularly important access channel. Charleston and Huntington have the strongest in-state clinician availability.",
    topProviderSlugs: ["nexlife", "henry-meds", "ro-body"],
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    region: "Midwest",
    population: "5.9M",
    obesityRate: "34%",
    telehealthNote: "Wisconsin Medical Examining Board licensure required; standard telehealth.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Wisconsin's mix of urban centers and rural population produces broad telehealth demand. Milwaukee, Madison, and Green Bay have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    abbr: "WY",
    region: "Mountain",
    population: "0.58M",
    obesityRate: "30%",
    telehealthNote: "Wyoming Board of Medicine licensure required.",
    regulatoryNote: "No state-specific compounding rules materially affecting GLP-1 access.",
    intro:
      "Wyoming's geographic dispersion makes telehealth the practical default for specialty care across most of the state. Cheyenne and Casper have the strongest in-state clinician availability. Reviewed providers operate without state-specific restriction.",
    topProviderSlugs: ["nexlife", "ro-body", "henry-meds"],
  },
];

export function getState(slug: string): State | undefined {
  return STATES.find((s) => s.slug === slug);
}
