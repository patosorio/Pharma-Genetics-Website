export type Locale = 'en' | 'es'

export interface Translations {
  // Header
  nav: {
    aboutUs: string
    services: string
    catalogue: string
    contact: string
    consultation: string
  }
  // Hero
  hero: {
    title: string
    subtitle: string
    pharmaceutical: string
    hlvdFree: string
    gacpCertified: string
    experience: string
  }
  // Services
  services: {
    title: string
    description: string
    cloneSales: {
      title: string
      description: string
    }
    geneticCreation: {
      title: string
      description: string
    }
    consultancy: {
      title: string
      description: string
    }
    phenoHunting: {
      title: string
      description: string
    }
  }
  // Catalogue
  catalogue: {
    title: string
    loading: string
    noGenetics: string
    viewFullCatalogue: string
    downloadCatalogue: string
    downloading: string
    thc: string
    type: string
    flowering: string
    yield: string
    mainTerpenes: string
  }
  // Why Choose
  whyChoose: {
    title: string
    description: string
    hlvdGuarantee: {
      title: string
      description: string
    }
    gacpCertified: {
      title: string
      description: string
    }
    experience: {
      title: string
      description: string
    }
    balance: {
      title: string
      description: string
    }
    homogenization: {
      title: string
      description: string
    }
    pharmaceutical: {
      title: string
      description: string
    }
  }
  // Locations
  locations: {
    title: string
    subtitle: string
    thailand: string
    spain: string
  }
  // Process
  process: {
    title: string
    description: string
    geneticSelection: {
      title: string
      description: string
    }
    labTesting: {
      title: string
      description: string
    }
    cloneProduction: {
      title: string
      description: string
    }
    qualityAssurance: {
      title: string
      description: string
    }
    packaging: {
      title: string
      description: string
    }
    delivery: {
      title: string
      description: string
    }
  }
  // Contact Form
  contactForm: {
    title: string
    subtitle: string
    name: string
    email: string
    company: string
    message: string
    sending: string
    sendMessage: string
    successMessage: string
    errorMessage: string
  }
  // Subscribe
  subscribe: {
    title: string
    subtitle: string
    placeholder: string
    button: string
    subscribing: string
    consent: string
    successMessage: string
    errorMessage: string
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    contactInfo: string
    copyright: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      aboutUs: 'ABOUT US',
      services: 'SERVICES',
      catalogue: 'CATALOGUE',
      contact: 'CONTACT',
      consultation: 'Consultation',
    },
    hero: {
      title: 'FENOPHARM',
      subtitle: 'GENETICS THAT EMPOWER',
      pharmaceutical: 'PHARMACEUTICAL-GRADE CANNABIS GENETICS.',
      hlvdFree: 'HLvD-FREE.',
      gacpCertified: 'EU GACP-CERTIFIED.',
      experience: '20+ YEARS EXPERIENCE',
    },
    services: {
      title: 'OUR SERVICES',
      description: 'We deliver pharmaceutical cannabis genetics: pathogen-free, consistent, and certified for reliability.',
      cloneSales: {
        title: 'CLONE SALES',
        description: 'Premium, HLvD and pathogen-free clones ready for production.',
      },
      geneticCreation: {
        title: 'GENETIC CREATION',
        description: 'Development of stable, high-performing strains, tailored to your needs.',
      },
      consultancy: {
        title: 'CONSULTANCY',
        description: 'Guidance to optimize the cultivation operations.',
      },
      phenoHunting: {
        title: 'PHENO HUNTING',
        description: 'Selection of elite phenotypes with balanced yield, terpene profile, and appeal.',
      },
    },
    catalogue: {
      title: 'CATALOGUE 2025',
      loading: 'Loading catalogue...',
      noGenetics: 'No genetics available at the moment.',
      viewFullCatalogue: 'View Full Catalogue',
      downloadCatalogue: 'Download Catalogue',
      downloading: 'Downloading...',
      thc: 'THC:',
      type: 'Type:',
      flowering: 'Flowering:',
      yield: 'Yield:',
      mainTerpenes: 'Main Terpenes:',
    },
    whyChoose: {
      title: 'WHY CHOOSE FENOPHARM',
      description: 'We pay attention to the pharmaceutical industry\'s needs, delivering genetics that meet the highest standards of quality, consistency, and safety.',
      hlvdGuarantee: {
        title: 'HLvD- and pathogen-free guarantee',
        description: 'All genetics tested and certified free of harmful pathogens',
      },
      gacpCertified: {
        title: 'EU GACP-certified processes',
        description: 'Good Horticultural and Collection Practices certification',
      },
      experience: {
        title: '20+ years of experience',
        description: 'Expertise in both indoor & outdoor environments',
      },
      balance: {
        title: 'Terpene, production, and visual appeal balance',
        description: 'Perfect balance between yield and quality',
      },
      homogenization: {
        title: 'Proven homogenization in clone production',
        description: 'Consistent, reliable genetics across all clones',
      },
      pharmaceutical: {
        title: 'Pharmaceutical-grade standards',
        description: 'Meeting the highest industry standards for medical applications',
      },
    },
    locations: {
      title: 'WHERE TO FIND US',
      subtitle: 'Global presence with local expertise',
      thailand: 'Thailand',
      spain: 'Spain',
    },
    process: {
      title: 'OUR PROCESS',
      description: 'From selection to delivery, every step is designed to ensure pharmaceutical-grade quality and consistency.',
      geneticSelection: {
        title: 'Genetic Selection',
        description: 'Rigorous selection of elite mother plants with superior genetics and pathogen resistance.',
      },
      labTesting: {
        title: 'Laboratory Testing',
        description: 'Comprehensive testing for HLvD, pathogens, and genetic stability using advanced molecular techniques.',
      },
      cloneProduction: {
        title: 'Clone Production',
        description: 'Sterile propagation in controlled environments ensuring genetic consistency and health.',
      },
      qualityAssurance: {
        title: 'Quality Assurance',
        description: 'EU GACP-certified quality control processes throughout the entire production cycle.',
      },
      packaging: {
        title: 'Packaging & Documentation',
        description: 'Professional packaging with complete genetic profiles and certification documents.',
      },
      delivery: {
        title: 'Secure Delivery',
        description: 'Temperature-controlled shipping ensuring genetics arrive in optimal condition.',
      },
    },
    contactForm: {
      title: 'CONTACT FORM',
      subtitle: 'Get in touch with our team for inquiries about our genetics and services',
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      sending: 'Sending...',
      sendMessage: 'Send Message',
      successMessage: 'Thank you for your message! We will get back to you soon.',
      errorMessage: 'Something went wrong. Please try again.',
    },
    subscribe: {
      title: 'SUBSCRIBE FORM',
      subtitle: 'Stay updated with our latest genetics, research developments, and industry insights.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      subscribing: 'Subscribing...',
      consent: 'I agree to receive newsletters and promotional emails. My data will be processed according to the Privacy Policy. IP address is collected for spam prevention only.',
      successMessage: 'Successfully subscribed! Thank you for joining our newsletter.',
      errorMessage: 'Something went wrong. Please try again.',
    },
    footer: {
      description: 'Pharmaceutical-grade cannabis genetics with over 20 years of expertise. HLvD-free, pathogen-free, and EU GACP-certified for the highest standards.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: '© 2025 Fenopharm. All rights reserved. | EU-GACP Certified | HLvD-Free Guarantee',
    },
  },
  es: {
    nav: {
      aboutUs: 'SOBRE NOSOTROS',
      services: 'SERVICIOS',
      catalogue: 'CATÁLOGO',
      contact: 'CONTACTO',
      consultation: 'Consulta',
    },
    hero: {
      title: 'FENOPHARM',
      subtitle: 'GENÉTICAS QUE EMPODERAN',
      pharmaceutical: 'GENÉTICAS DE CANNABIS DE GRADO FARMACÉUTICO.',
      hlvdFree: 'LIBRE DE HLvD.',
      gacpCertified: 'CERTIFICADO EU GACP.',
      experience: '20+ AÑOS DE EXPERIENCIA',
    },
    services: {
      title: 'NUESTROS SERVICIOS',
      description: 'Entregamos genética de cannabis farmacéutica: libre de patógenos, consistente y certificada para confiabilidad.',
      cloneSales: {
        title: 'VENTA DE CLONES',
        description: 'Clones premium, libres de HLvD y patógenos, listos para producción.',
      },
      geneticCreation: {
        title: 'CREACIÓN GENÉTICA',
        description: 'Desarrollo de cepas estables y de alto rendimiento, adaptadas a sus necesidades.',
      },
      consultancy: {
        title: 'CONSULTORÍA',
        description: 'Orientación para optimizar las operaciones de cultivo.',
      },
      phenoHunting: {
        title: 'BÚSQUEDA DE FENOTIPOS',
        description: 'Selección de fenotipos élite con rendimiento, perfil de terpenos y atractivo equilibrados.',
      },
    },
    catalogue: {
      title: 'CATÁLOGO 2025',
      loading: 'Cargando catálogo...',
      noGenetics: 'No hay genética disponible en este momento.',
      viewFullCatalogue: 'Ver Catálogo Completo',
      downloadCatalogue: 'Descargar Catálogo',
      downloading: 'Descargando...',
      thc: 'THC:',
      type: 'Tipo:',
      flowering: 'Floración:',
      yield: 'Rendimiento:',
      mainTerpenes: 'Terpenos Principales:',
    },
    whyChoose: {
      title: 'POR QUÉ ELEGIR FENOPHARM',
      description: 'Prestamos atención a las necesidades de la industria farmacéutica, entregando genética que cumple con los más altos estándares de calidad, consistencia y seguridad.',
      hlvdGuarantee: {
        title: 'Garantía libre de HLvD y patógenos',
        description: 'Toda la genética probada y certificada libre de patógenos dañinos',
      },
      gacpCertified: {
        title: 'Procesos certificados EU GACP',
        description: 'Certificación de Buenas Prácticas Hortícolas y de Recolección',
      },
      experience: {
        title: '20+ años de experiencia',
        description: 'Experiencia en entornos interiores y exteriores',
      },
      balance: {
        title: 'Balance entre terpenos, producción y atractivo visual',
        description: 'Equilibrio perfecto entre rendimiento y calidad',
      },
      homogenization: {
        title: 'Homogeneización comprobada en producción de clones',
        description: 'Genética consistente y confiable en todos los clones',
      },
      pharmaceutical: {
        title: 'Estándares de grado farmacéutico',
        description: 'Cumpliendo con los más altos estándares de la industria para aplicaciones médicas',
      },
    },
    locations: {
      title: 'DÓNDE ENCONTRARNOS',
      subtitle: 'Presencia global con experiencia local',
      thailand: 'Tailandia',
      spain: 'España',
    },
    process: {
      title: 'NUESTRO PROCESO',
      description: 'Desde la selección hasta la entrega, cada paso está diseñado para garantizar calidad y consistencia de grado farmacéutico.',
      geneticSelection: {
        title: 'Selección Genética',
        description: 'Selección rigurosa de plantas madre élite con genética superior y resistencia a patógenos.',
      },
      labTesting: {
        title: 'Pruebas de Laboratorio',
        description: 'Pruebas exhaustivas para HLvD, patógenos y estabilidad genética usando técnicas moleculares avanzadas.',
      },
      cloneProduction: {
        title: 'Producción de Clones',
        description: 'Propagación estéril en ambientes controlados garantizando consistencia genética y salud.',
      },
      qualityAssurance: {
        title: 'Aseguramiento de Calidad',
        description: 'Procesos de control de calidad certificados EU GACP durante todo el ciclo de producción.',
      },
      packaging: {
        title: 'Empaque y Documentación',
        description: 'Empaque profesional con perfiles genéticos completos y documentos de certificación.',
      },
      delivery: {
        title: 'Entrega Segura',
        description: 'Envío con control de temperatura garantizando que la genética llegue en condiciones óptimas.',
      },
    },
    contactForm: {
      title: 'FORMULARIO DE CONTACTO',
      subtitle: 'Póngase en contacto con nuestro equipo para consultas sobre nuestra genética y servicios',
      name: 'Nombre',
      email: 'Correo Electrónico',
      company: 'Empresa',
      message: 'Mensaje',
      sending: 'Enviando...',
      sendMessage: 'Enviar Mensaje',
      successMessage: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.',
      errorMessage: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    },
    subscribe: {
      title: 'FORMULARIO DE SUSCRIPCIÓN',
      subtitle: 'Manténgase actualizado con nuestra última genética, desarrollos de investigación e información de la industria.',
      placeholder: 'Ingrese su correo electrónico',
      button: 'Suscribirse',
      subscribing: 'Suscribiendo...',
      consent: 'Acepto recibir boletines informativos y correos promocionales. Mis datos se procesarán de acuerdo con la Política de Privacidad. La dirección IP se recopila solo para prevención de spam.',
      successMessage: '¡Suscripción exitosa! Gracias por unirse a nuestro boletín.',
      errorMessage: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    },
    footer: {
      description: 'Genética de cannabis de grado farmacéutico con más de 20 años de experiencia. Libre de HLvD, libre de patógenos y certificado EU GACP para los más altos estándares.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Información de Contacto',
      copyright: '© 2025 Fenopharm. Todos los derechos reservados. | Certificado EU-GACP | Garantía Libre de HLvD',
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}

