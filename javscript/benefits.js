export const benefits = [
  {
    name: "Aktivitetsersättning vid nedsatt arbetsförmåga",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/aktivitetsersattning/aktivitetsersattning-vid-nedsatt-arbetsformaga-for-dig-under-30-ar",
    details: "För dem som varit sjuka i ett eller flera år.",
    criteria: data => data.inSchool === "yes" &&
    data.sick1Year === "yes" &&
     data.disabled === "yes" && 
     parseInt(data.age) >= 19 &&
      parseInt(data.age) <= 29
      
  },
  {
    name: "Aktivitetsersättning vid förlängd skolgång",
    url: "https://www.forsakringskassan.se/aktivitetsersattning",
    details: "Om du har en funktionsnedsättning som gör att du behöver längre tid för att bli klar med skolan, kan du få aktivitetsersättning vid förlängd skolgång.",
    criteria: data => 
      data.highSchool === "yes"  &&
     data.disabled === "yes" &&
      parseInt(data.age) >= 19 &&
       parseInt(data.age) <= 29
  },
  {
    name: "Aktivitetsstöd – när du deltar i ett program hos Arbetsförmedlingen",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/aktivitetsstod",
    details: "Du som deltar i Arbetsförmedlingens program kan få aktivitetsstöd eller utvecklingsersättning",
    criteria: data => 
      data.arbetsFörmedlingen === "yes"
  },
  {
    name: "Allmänt tandvårdsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/tandvardsstod",
    details: "",
    criteria: data => false
  },
  {
    name: "Arbetshjälpmedel",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/arbetshjalpmedel",
    details: "",
    criteria: data => false
  },
  {
    name: "Arbetsskadeersättning",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/om-du-har-skadat-dig-i-arbetet-eller-under-utbildning",
    details: "",
    criteria: data => false
  },
  {
    name: "Assistansersättning för vuxna",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/assistansersattning-for-vuxna",
    details: "",
    criteria: data => false
  },
  {
    name: "Assistansersättning för barn",
    url: "https://www.forsakringskassan.se/privatperson/foralder/om-ditt-barn-har-en-funktionsnedsattning/assistansersattning-for-barn",
    details: "",
    criteria: data => false
  },
  {
    name: "Barnbidrag",
    url: "https://www.forsakringskassan.se/privatperson/foralder/barnbidrag-och-flerbarnstillagg#:~:text=Barnbidraget%20%C3%A4r%201%20250%20kronor,p%C3%A5%20barnbidrag%20eller%20p%C3%A5%20flerbarnstill%C3%A4gg.",
    details: "För dig under som pluggar och är under 16.",
    criteria: data => parseInt(data.age) < 16
  },
  {
    name: "Begravningsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/ersattningar-a-o/familjebidrag-for-tjanstgoring-i-totalforsvaret",
    details: "",
    criteria: data => false
  },
  {
    name: "Bilstöd för vuxna",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/bilstod-for-vuxna",
    details: "",
    criteria: data => false
  },
  {
    name: "Bilstöd för barn",
    url: "https://www.forsakringskassan.se/privatperson/foralder/om-ditt-barn-har-en-funktionsnedsattning/bilstod-for-barn",
    details: "",
    criteria: data => false
  },
  {
    name: "Bostadsbidrag till barnfamiljer",
    url: "https://www.forsakringskassan.se/privatperson/foralder/bostadsbidrag-till-barnfamiljer",
    details: "För dig som har barn som bor hemma hos dig",
    criteria: data => data.childHome === "yes"
  },
  {
    name: "Bostadsbidrag till dig som genomgår militär utbildning",
    url: "https://www.forsakringskassan.se/privatperson/ersattningar-a-o/familjebidrag-for-tjanstgoring-i-totalforsvaret",
    details: "",
    criteria: data => false
  },
  {
    name: "Bostadsbidrag för unga utan barn",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/bostadsbidrag/bostadsbidrag-till-unga-under-29-ar",
    details: "För dig under 29 år med låg inkomst.",
    criteria: data => parseInt(data.age) < 29 &&
    data.rent1800 === "yes" &&
    data.year86000 === "yes" &&
    data.hasChild === "no"
  },
  {
    name: "Bostadsersättning till dig med etableringsersättning",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/ersattning-for-dig-som-deltar-i-etableringsprogrammet-hos-arbetsformedlingen",
    details: "",
    criteria: data => false
  },
  {
    name: "Bostadstillägg – för dig som har aktivitetsersättning eller sjukersättning",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/aktivitetsersattning/bostadstillagg",
    details: "",
    criteria: data => false
  },
  {
    name: "Dagpenning för tjänstgöring i totalförsvaret",
    url: "https://www.forsakringskassan.se/privatperson/ersattningar-a-o/dagpenning-for-tjanstgoring-i-totalforsvaret",
    details: "",
    criteria: data => false
  },
  {
    name: "Dubbeldagar",
    url: "https://www.forsakringskassan.se/privatperson/foralder/foraldrapenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Dubbeldagar vid adoption",
    url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/foraldrapenning-vid-adoption",
    details: "",
    criteria: data => false
  },
  {
    name: "Etableringsersättning",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/ersattning-for-dig-som-deltar-i-etableringsprogrammet-hos-arbetsformedlingen",
    details: "",
    criteria: data => false
  },
  {
    name: "Etableringstillägg",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/ersattning-for-dig-som-deltar-i-etableringsprogrammet-hos-arbetsformedlingen",
    details: "",
    criteria: data => false
  },
  {
    name: "EU-kort och vård utomlands",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/eu-kort-och-vard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Familjebidrag för dig som genomgår militär utbildning",
    url: "https://www.forsakringskassan.se/privatperson/ersattningar-a-o/familjebidrag-for-tjanstgoring-i-totalforsvaret",
    details: "",
    criteria: data => false
  },
  {
    name: "Familjepenning",
    url: "https://www.forsakringskassan.se/privatperson/foralder/foraldrapenning/familjepenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Flerbarnstillägg",
    url: "https://www.forsakringskassan.se/privatperson/foralder/barnbidrag-och-flerbarnstillagg",
    details: "",
    criteria: data => false
  },
  {
    name: "Förebyggande sjukpenning – för dig med aktiebolag",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/forebyggande-sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Förebyggande sjukpenning – för dig med enskild firma",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/forebyggande-sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Förebyggande sjukpenning – för dig som är anställd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/forebyggande-sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Förebyggande sjukpenning – för dig som är arbetssökande",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/forebyggande-sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Företagare",
    url: "https://www.forsakringskassan.se/privatperson/foretagare",
    details: "",
    criteria: data => false
  },
  {
    name: "Föräldrapenning",
    url: "https://www.forsakringskassan.se/privatperson/foralder/foraldrapenning",
    details: "För dig under 29 år med låg inkomst.",
    criteria: data => data.inSchool === "no" &&
     data.Work === "no" &&
      data.childUnder12 === "yes"
  },
  {
    name: "Föräldrapenning vid adoption",
    url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/foraldrapenning-vid-adoption",
    details: "",
    criteria: data => false
  },
  {
    name: "Graviditetspenning",
    url: "https://www.forsakringskassan.se/privatperson/foralder/graviditetspenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Handikappersättning",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/handikappersattning",
    details: "",
    criteria: data => false
  },
  {
    name: "Högkostnadsskydd för tandvård",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/hogkostnadsskydd-for-tandvard",
    details: "",
    criteria: data => false
  },
  {
    name: "Kontaktdagar för barn med funktionsnedsättning",
    url: "https://www.forsakringskassan.se/privatperson/foralder/om-ditt-barn-har-en-funktionsnedsattning/kontaktdagar",
    details: "",
    criteria: data => false
  },
  {
    name: "Livränta vid arbetsskada",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/livranta-vid-arbetsskada",
    details: "",
    criteria: data => false
  },
  {
    name: "Livränta vid personskada",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/livranta-vid-personskada",
    details: "",
    criteria: data => false
  },
  {
    name: "Merkostnadsersättning för barn",
    url: "https://www.forsakringskassan.se/privatperson/foralder/om-ditt-barn-har-en-funktionsnedsattning/merkostnadsersattning",
    details: "",
    criteria: data => false
  },
  {
    name: "Merkostnadsersättning för vuxna",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/merkostnadsersattning",
    details: "",
    criteria: data => false
  },
  {
    name: "Näringsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/naringsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Närståendepenning – för dig med aktiebolag",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/narstaendepenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Närståendepenning – för dig med enskild firma",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/narstaendepenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Närståendepenning – för dig som är anställd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/narstaendepenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Närståendepenning – för dig som är arbetssökande",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/narstaendepenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Omvårdnadsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/foralder/om-ditt-barn-har-en-funktionsnedsattning/omvardnadsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Personskadeskydd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/personskadeskydd",
    details: "",
    criteria: data => false
  },
  {
    name: "Planerad tandvård utomlands",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/planerad-tandvard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Planerad vård utomlands",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/planerad-vard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Sjukersättning (varaktig nedsättning)",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/sjukersattning",
    details: "För dig 19-64 år som troligen aldrig kan arbeta heltid p.g.a. sjukdom/funktionsnedsättning.",
    criteria: d =>
      (d.sick === "yes" || d.disabled === "yes") &&
      +d.age >= 19 &&
      +d.age <= 64,
  },
  {
    name: "Sjukpenning – för dig med aktiebolag",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning-for-dig-som-ar-foretagare",
    details: "",
    criteria: data => false
  },
  {
    name: "Sjukpenning – för dig med enskild firma",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning-for-dig-som-ar-foretagare",
    details: "",
    criteria: data => false
  },
  {
    name: "Sjukpenning – för dig som är anställd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Sjukpenning – för dig som är arbetssökande",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Sjukpenning – för dig som är studerande",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Smittbärarpenning – för dig med aktiebolag",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/smittbararpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Smittbärarpenning – för dig med enskild firma",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/smittbararpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Smittbärarpenning – för dig som är anställd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/smittbararpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Smittbärarpenning – för dig som är arbetssökande",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/smittbararpenning",
    details: "",
    criteria: data => false
  },
  {
    name: "Särskilt högriskskydd",
    url: "https://www.forsakringskassan.se/privatperson/sjuk/sarskilt-hogriskskydd",
    details: "",
    criteria: data => false
  },
  {
    name: "Tandvårdsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/tandvardsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Tandvårdsstöd",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/tandvardsstod",
    details: "",
    criteria: data => false
  },
  {
    name: "Tandvård och vård utomlands – akut",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/akut-tandvard-och-vard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Tandvård utomlands – planerad",
    url: "https://www.forsakringskassan.se/privatperson/tandvard/planerad-tandvard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Tillfällig föräldrapenning (vård av barn, vab)",
    url: "https://www.forsakringskassan.se/privatperson/foralder/vab",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsbidrag – om barnet bor hos dig",
    url: "https://www.forsakringskassan.se/privatperson/foralder/underhallsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsbidrag – om barnet inte bor hos dig",
    url: "https://www.forsakringskassan.se/privatperson/foralder/underhallsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsbidrag – om barnet bor hos båda föräldrarna",
    url: "https://www.forsakringskassan.se/privatperson/foralder/underhallsbidrag",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsstöd – om barnet bor hos dig",
    url: "https://www.forsakringskassan.se/privatperson/foralder/underhallsstod",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsstöd – om barnet inte bor hos dig",
    url: "https://www.forsakringskassan.se/privatperson/foralder/underhallsstod",
    details: "",
    criteria: data => false
  },
  {
    name: "Underhållsstöd vid adoption",
    url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/underhallsstod-vid-adoption",
    details: "",
    criteria: data => false
  },
  {
    name: "Utvecklingsersättning – när du deltar i ett program hos Arbetsförmedlingen",
    url: "https://www.forsakringskassan.se/privatperson/arbetssokande/utvecklingsersattning",
    details: "",
    criteria: data => false
  },
  {
    name: "Vab (vård av barn)",
    url: "https://www.forsakringskassan.se/privatperson/foralder/vab",
    details: "",
    criteria: data => false
  },
  {
    name: "Vård i Sverige för besökare från ett annat EU/EES-land",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/vard-i-sverige-for-besokare-fran-ett-annat-eu-ees-land",
    details: "",
    criteria: data => false
  },
  {
    name: "Vård när du flyttar till Sverige",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/vard-nar-du-flyttar-till-sverige",
    details: "",
    criteria: data => false
  },
  {
    name: "Vård och tandvård utomlands – akut",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/akut-tandvard-och-vard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Vård utomlands – planerad",
    url: "https://www.forsakringskassan.se/privatperson/flytta-jobba-studera-eller-fa-vard-utomlands/planerad-vard-utomlands",
    details: "",
    criteria: data => false
  },
  {
    name: "Ekonomiskt bistånd",
    url: "https://www.socialstyrelsen.se/stod-i-arbetet/ekonomiskt-bistand/",
    details: "För dig som är ledig från ditt jobb för att ta hand om ett barn.",
    criteria: data => parseInt(data.age) >= 18 &&
     data.inSchool === "no"
  },
  {
    name: "Studiebidrag från CSN",
    url: "https://www.csn.se/bidrag-och-lan.html",
    details: "För dig som studerar.",
    criteria: data => data.inSchool === "yes" &&
    parseInt(data.age) >= 16
  }
];
/*https://www.forsakringskassan.se/privatperson/ersattningar-a-o*/