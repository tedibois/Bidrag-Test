{
  name: "10-dagar vid barns adoption",
  url: "https://www.forsakringskassan.se/privatperson/foralder/adoption/10-dagar-adoption",
  details: "Du som förälder kan få 10 dagar i samband med adoption av ett barn som är yngre än 10 år. Ersättningen heter tillfällig föräldrapenning.",
  criteria: data => data.adopterarBarnUnder10Ar === "yes"
}
{
  name: "10-dagar vid barns födelse,",
  url: "https://www.forsakringskassan.se/privatperson/foralder/10-dagar-ledighet-barns-fodelse",
  details: "Den förälder som inte föder barnet har rätt till 10 dagars ledighet och ersättning i samband med barnets födelse. Ersättningen kallas tillfällig föräldrapenning.",
  criteria: data => data.harRattTill10DagarFodelse === "yes"
}

{
  name: "Adoptionsbidrag,",
  url: "https://www.forsakringskassan.se/privatperson/adoption/adoptionsbidrag",
  details: "Du kan få adoptionsbidrag om adoptionen är godkänd, barnet är utländsk medborgare under 10 år, och du är bosatt i Sverige när du får barnet i vård.",
  criteria: data =>
    data.adoptionGodkand === "yes" &&
    data.adoptionAuktoriseradOrg === "yes" &&
    data.barnUtlAndskMedborgare === "yes" &&
    data.barnInteBosattISverige === "yes" &&
    data.barnUnder10Ar === "yes" &&
    data.bosattISverigeVidVardOchAdoption === "yes"
}


{
  name: "Aktivitetsersättning för unga vuxna,",
  url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/aktivitetsersattning/aktivitetsersattning-vid-nedsatt-arbetsformaga-for-dig-under-30-ar",
  details: "För dig mellan 19 och 29 år som inte kan arbeta heltid eller alls på grund av skada, sjukdom eller funktionsnedsättning.",
  criteria: data =>
    data.kanArbetaDelEllerInte === "yes" &&
    data.medicinskOrsak === "yes" &&
    data.forsakradISverige === "yes" &&
    parseInt(data.age) >= 19 &&
    parseInt(data.age) <= 29
}



{
  name: "Aktivitetsersättning vid förlängd skolgång,",
  url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/aktivitetsersattning/aktivitetsersattning-vid-nedsatt-arbetsformaga-for-dig-under-30-ar",
  details: "För dig mellan 19 och 29 år som behöver mer tid att bli klar med skolan på grund av skada, sjukdom eller funktionsnedsättning.",
  criteria: data =>
    data.inteKlarSkola === "yes" &&
    data.medicinskOrsakSkola === "yes" &&
    data.forsakradISverigeSkola === "yes" &&
    parseInt(data.age) >= 19 &&
    parseInt(data.age) <= 29
}


{
  name: "Aktivitetsstöd eller utvecklingsersättning när du deltar i Arbetsförmedlingens program,",
  url: "https://www.forsakringskassan.se/privatperson/arbetslos/aktivitetsstod-och-utvecklingsersattning",
  details: "Ersättning för dig som deltar i Arbetsförmedlingens program som arbetsmarknadsutbildning, arbetspraktik, jobb- och utvecklingsgarantin med mera.",
  criteria: data => data.deltarArbetsformedlingen === "yes"
}


{
  name: "Bidrag till arbetshjälpmedel,",
  url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/arbetshjalpmedel",
  details: "Bidrag för hjälpmedel som behövs för att klara jobbet, samt expertundersökning för att prova ut hjälpmedel.",
  criteria: data =>
    data.needWorkAid === "yes" &&
    parseInt(data.employmentYears) >= 1 &&
    parseInt(data.age) < 69 &&
    data.insured === "yes"
}

{
  name: "Ersättning vid arbetsskada,",
  url: "https://www.forsakringskassan.se/privatperson/arbetsskada",
  details: "Ersättning för sjukvård, tandvård, hjälpmedel och inkomstförlust vid arbetsskada eller skada inom försvaret och som frihetsberövad.",
  criteria: data =>
    data.workInjuryType === "injuredAtWork" ||
    data.workInjuryType === "injuredInDefense" ||
    data.workInjuryType === "injuredAsPrisoner"
}


{
  name: "Ersättning för arbetssökande,",
  url: "https://www.forsakringskassan.se/privatperson/arbetslos/ersattning-for-arbetssokande",
  details: "Ersättning för deltagande i Arbetsförmedlingens program, etableringsprogram, etableringsjobb, bostadsbidrag och sjukpenning för arbetssökande.",
  criteria: data => ["inProgram", "inEstablishmentProgram", "hasEstablishmentJob", "hasLowIncome", "hasChildren", "sick"].includes(data.jobSeekerStatus)
}

{
  name: "Assistansersättning för barn,",
  url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/assistansersattning",
  details: "Assistansersättning för barn med omfattande hjälpbehov som behöver personlig assistans mer än 20 timmar per vecka och omfattas av LSS.",
  criteria: data => data.childAssistance === "yes"
}



{
  name: "Assistansersättning för vuxna,",
  url: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/assistansersattning",
  details: "Assistansersättning för vuxna med omfattande hjälpbehov som behöver personlig assistans mer än 20 timmar per vecka, omfattas av LSS och är under 66 år.",
  criteria: data => data.adultAssistance === "yes"
}
