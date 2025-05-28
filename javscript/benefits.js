export const benefits = [
    {
      name: "Aktivitetsersättning",
      url: "https://www.forsakringskassan.se/aktivitetsersattning",
      details: "För unga med funktionsnedsättning som inte kan jobba heltid.",
      criteria: data => data.inSchool === "yes" && data.disabled === "yes" && parseInt(data.age) < 30
    },
    {
      name: "Studiemedel från CSN",
      url: "https://www.csn.se/bidrag-och-lan/studiemedel.html",
      details: "För dig som studerar efter gymnasiet.",
      criteria: data => data.inSchool === "yes"
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
  