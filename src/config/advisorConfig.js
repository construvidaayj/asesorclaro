const advisorConfig = {
  dataAdvisor: {
    name: "Jóse Catama",
    position: "Asesor Claro", 
    profilePhotoUrl: "/img/advisor.png",
    personalSlogan: "",

    contactNumber: "+573024902653",
    emailContact: "josecatama24@gmail.com",
    whatsApp: {
      message: encodeURIComponent("Hola, estoy interesado en los servicios de Claro."),
      iconUrl: "/img/whatsapp.png",
      link: "",
    },

    socialNetwork: {
      facebook: {
        siteUrl: "https://www.facebook.com/jose.catama.523166",
        iconUrl: "/img/facebook.png",
      },
      instagram: {
        siteUrl: "https://www.instagram.com/jose.catama/",
        iconUrl: "/img/instagram.png",
      },
      linkedin: { 
        siteUrl: "",
        iconUrl: "",
      },
      tiktok: {
        siteUrl: "",
        iconUrl: "",
      },
    },

    address: {
      department: "Cundinamarca",
      city: "Bogotá",
      serviceArea: "Bogotá Metropolitan Area and Cundinamarca Savannah",
      localName: "Claro North Zone Office",
      street: "Carrera 15",
      number: "123-45",
      neighborhood: "Chapinero",
      reference: "Claro Building",
      mapEmbedUrl: "URL_OF_GOOGLE_MAP_EMBED",
    },

    officeHours: {
      mondayToFriday: "8:00 AM - 6:00 PM",
      saturdays: "9:00 AM - 1:00 PM",
      sundaysAndHolidays: "Closed",
      additionalNotes: "Weekend appointments available by prior arrangement.",
    },
  }

};

advisorConfig.dataAdvisor.whatsApp.link =
  `https://wa.me/${advisorConfig.dataAdvisor.contactNumber}?text=${advisorConfig.dataAdvisor.whatsApp.message}`;

export default advisorConfig;