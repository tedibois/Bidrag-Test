export const benefits = [
  {
    name: "10-dagar (i samband med barns födelse)",
    url: "https://www.forsakringskassan.se/privatperson/foralder/10-dagar-vid-barns-fodelse",
    details: "",
    criteria: data => false
  },
  {
    name: "10-dagar (i samband med barns adoption)",
    url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/10-dagar-vid-barns-adoption",
    details: "",
    criteria: data => false
  },
  {
    name: "Adoptionsbidrag",
    url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/adoptionsbidrag",
    details: "",
    criteria: data => false
  },
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
<<<<<<< HEAD
      criteria: data => 
        data.highSchool === "yes"  &&
=======
      criteria: data => data.highSchool === "yes"  &&
>>>>>>> 8e1621afa75dec0727ccd145068a8c3bbc60512f
       data.disabled === "yes" &&
        parseInt(data.age) >= 19 &&
         parseInt(data.age) <= 29
    },
    {
<<<<<<< HEAD
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
    name: "Sjukersättning (varaktig nedsättning)",
    url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/sjukersattning",
    details:
      "För dig 19-64 år som troligen aldrig kan arbeta heltid p.g.a. sjukdom/funktionsnedsättning.",
    criteria: d =>
      (d.sick === "yes" || d.disabled === "yes") &&
      +d.age >= 19 &&
      +d.age <= 64,
  },
    {
      name: "Studiebidrag från CSN",
      url: "https://www.csn.se/bidrag-och-lan.html",
      details: "För dig som studerar.",
      criteria: data => 
      data.inSchool === "yes"
=======
      name: "Aktivitetsstöd – när du deltar i ett program hos Arbetsförmedlingen",
      url: "https://www.forsakringskassan.se/privatperson/arbetssokande/aktivitetsstod-eller-utvecklingsersattning-nar-du-deltar-i-arbetsformedlingens-program",
      details: "",
      criteria: data => false
>>>>>>> 8e1621afa75dec0727ccd145068a8c3bbc60512f
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
      details: "För dig som har barn som bor hemmos dig",
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
      name: "Ekonomiskt bistånd",
      url: "https://www.socialstyrelsen.se/stod-i-arbetet/ekonomiskt-bistand/",
      details: "För dig som är ledig från ditt jobb för att ta hand om ett barn.",
      criteria: data => parseInt(data.age) >= 18 &&
       data.inSchool === "no"
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
      name: "Studiebidrag från CSN",
      url: "https://www.csn.se/bidrag-och-lan.html",
      details: "För dig som studerar.",
      criteria: data => data.inSchool === "yes" &&
      parseInt(data.age) >= 16

    }
  ];

  /*
A
Adoptionsbidrag
Aktivitetsersättning vid nedsatt arbetsförmåga
Aktivitetsersättning vid förlängd skolgång
Aktivitetsstöd – när du deltar i ett program hos Arbetsförmedlingen
Allmänt tandvårdsbidrag
Arbetshjälpmedel
Arbetsskadeersättning
Assistansersättning för vuxna
Assistansersättning för barn
*/

/*
B
Barnbidrag
Begravningsbidrag
Bilstöd för vuxna
Bilstöd för barn
Bostadsbidrag till barnfamiljer
Bostadsbidrag till dig som genomgår militär utbildning
Bostadsbidrag till unga utan barn (under 29 år)
Bostadsersättning till dig med etableringsersättning
Bostadstillägg – för dig som har aktivitetsersättning eller sjukersättning
*/

/*
D
Dagpenning för tjänstgöring i totalförsvaret
Dubbeldagar
Dubbeldagar vid adoption
*/

/*
E
Etableringsersättning
Etableringstillägg
EU-kort och vård utomlands
*/

/*
F
Familjebidrag för dig som genomgår militär utbildning
Familjepenning
Flerbarnstillägg
Förebyggande sjukpenning – för dig med aktiebolag
Förebyggande sjukpenning – för dig med enskild firma
Förebyggande sjukpenning – för dig som är anställd
Förebyggande sjukpenning – för dig som är arbetssökande
Företagare
Föräldrapenning
Föräldrapenning vid adoption
*/

/*
G
Graviditetspenning
*/

/*
H
Handikappersättning
Högkostnadsskydd för tandvård
*/


/*
K
Kontaktdagar för barn med funktionsnedsättning
*/

/*
L
Livränta vid arbetsskada
Livränta vid personskada
*/

/*
M
Merkostnadsersättning för barn
Merkostnadsersättning för vuxna
*/

/*
N
Näringsbidrag
Närståendepenning – för dig med aktiebolag
Närståendepenning – för dig med enskild firma
Närståendepenning – för dig som är anställd
Närståendepenning – för dig som är arbetssökande
*/

/*
O
Omvårdnadsbidrag
*/

/*
P
Personskadeskydd
Planerad tandvård utomlands
Planerad vård utomlands
*/

/*
S
Sjukersättning
Sjukpenning – för dig med aktiebolag
Sjukpenning – för dig med enskild firma
Sjukpenning – för dig som är anställd
Sjukpenning – för dig som är arbetssökande
Sjukpenning – för dig som är studerande
Smittbärarpenning – för dig med aktiebolag
Smittbärarpenning – för dig med enskild firma
Smittbärarpenning – för dig som är anställd
Smittbärarpenning – för dig som är arbetssökande
Särskilt högriskskydd
*/

/*
T
Tandvårdsbidrag
Tandvårdsstöd
Tandvård och vård utomlands – akut
Tandvård utomlands – planerad
Tillfällig föräldrapenning (vård av barn, vab)
*/

/*
U
Underhållsbidrag – om barnet bor hos dig
Underhållsbidrag – om barnet inte bor hos dig
Underhållsbidrag – om barnet bor hos båda föräldrarna
Underhållsstöd – om barnet bor hos dig
Underhållsstöd – om barnet inte bor hos dig
Underhållsstöd vid adoption
Utvecklingsersättning – när du deltar i ett program hos Arbetsförmedlingen
*/

/*
V
Vab (vård av barn)
Vård i Sverige för besökare från ett annat EU/EES-land 
Vård när du flyttar till Sverige
Vård och tandvård utomlands – akut
Vård utomlands – planerad
*/

/*https://www.forsakringskassan.se/privatperson/ersattningar-a-o*/