export const benefits = [
    {
      name: "Aktivitetsersättning vid förlängd skolgång",
      url: "https://www.forsakringskassan.se/aktivitetsersattning",
      details: "Om du har en funktionsnedsättning som gör att du behöver längre tid för att bli klar med skolan, kan du få aktivitetsersättning vid förlängd skolgång.",
      criteria: data => data.highSchool === "yes"  &&
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
      name: "Studiebidrag från CSN",
      url: "https://www.csn.se/bidrag-och-lan.html",
      details: "För dig som studerar.",
      criteria: data => data.inSchool === "yes" &&
      parseInt(data.age) >= 18

    },
    {
      name: "Barnbidrag",
      url: "https://www.forsakringskassan.se/privatperson/foralder/barnbidrag-och-flerbarnstillagg#:~:text=Barnbidraget%20%C3%A4r%201%20250%20kronor,p%C3%A5%20barnbidrag%20eller%20p%C3%A5%20flerbarnstill%C3%A4gg.",
      details: "För dig under 18.",
      criteria: data => parseInt(data.age) < 16
    },
    {
      name: "Bostadsbidrag för unga",
      url: "https://www.forsakringskassan.se/privatpers/bostadsbidrag",
      details: "För dig under 29 år med låg inkomst.",
      criteria: data => parseInt(data.age) < 29
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
      name: "Ekonomiskt bistånd",
      url: "https://www.socialstyrelsen.se/stod-i-arbetet/ekonomiskt-bistand/",
      details: "För dig som är ledig från ditt jobb för att ta hand om ett barn.",
      criteria: data => parseInt(data.age) >= 18 &&
       data.inSchool === "no"
    }
  ];
  