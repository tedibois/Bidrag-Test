export const benefits = [
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
    },
    {
      name: "Bostadsbidrag för unga",
      url: "https://www.forsakringskassan.se/privatpers/bostadsbidrag",
      details: "För dig under 29 år med låg inkomst.",
      criteria: data => parseInt(data.age) < 29
    },
    {
      name: "Ekonomiskt bistånd",
      url: "https://www.socialstyrelsen.se/stod-i-arbetet/ekonomiskt-bistand/",
      details: "För dig över 18 år som inte klarar din ekonomi.",
      criteria: data => parseInt(data.age) >= 18 && data.inSchool === "no"
    }
  ];
  