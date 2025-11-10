export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Courses",link: "#courses"},
    { name: "Work Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Interested in various areas of Computer Science such as Full Stack,Cybersecurity and Data Science",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Looking for a job , Graduated in August 2025",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "Always learning!",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Check out my portfolio through a game!",
      description: "Made using Kaboomjs",
      className: "md:col-span-3 md:row-span-2 ",
      imgClassName: "absolute right-2 bottom-11 md:w-96 w-60 rounded-full hidden lg:block",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/portfolio-game.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Auto Emailer",
      des: "A web app and a browser extension that automates email replies using the Gemini Model",
      img: "/auto_emailer.png",
      imgClassName:"scale-100 rounded-xl",
      iconLists: ["./spring-boot.svg","./re.svg","./mui.svg","./aws.svg","./tail.svg","/framer-motion.svg"],
      link: "https://github.com/akurtle/auto-emailer",
    },
    {
      id: 2,
      title: "Personal Site",
      des: "Created a personal site with modern UI for effective display of personal achievements, and monitoring user response.",
      img: "/personalPage.png",
      imgClassName:"scale-125 rounded-lg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/framer-motion.svg","/sentry-3.svg"],
      link: "https://github.com/akurtle/Personal_site",
    },
    {
      id: 3,
      title: "Trail Mark",
      des: "An app developed in flutter in which users can mark trails and share them with others.",
      img: "/TrailMark.png",
      imgClassName:"scale-60 rounded-xl",
      iconLists: ["/flutter.svg", "/firebase.svg", "/google-maps.svg"],
      link: "https://github.com/akurtle/TrailMark",
    },
    {
      id: 4,
      title: "Tech Cart",
      des: "Created a an Ecommerce tech site along with a payment system using NextJS, Stripe and SANITY",
      img: "/p4.png",
      imgClassName:"",
      iconLists: ["/next.svg", "/stripe.svg", "/sanity.png"],
      link: "https://github.com/akurtle/E-commerce-Site",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Cyber Security Intern",
      desc: "Learned the basics of Cyber security and how various cyber security products work. Attended workshops on Fortinet and ZScaler products.",
      date:"July 2023 - Sept 2023",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "UI Developer Intern",
      desc: "Supported multiple projects using HTML,CSS ,JS ,Jquery and SCSS to create responsive web pages.",
      date:"July 2024 - Sept 2024",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
      {
      id: 3,
      title: "Game Developer",
      desc: "Built a 2D Space themed game for the Johnson Geo Center, the game was built for an ipad.",
      date:"July 2025 - Aug 2025",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
      }
      
  ];

  export const education=[
    {
      uni:{
        title:"Memorial University of Newfoundland",
        gpa:"3.70",
        ach:"Deans List 2023-2024"
      }
      ,
      school:{

      }
    }
  ]

  export const courses=[
    
      
        {
          title:"COMP 2001",
          description:"OOB course with event-driven programming, program correctness ,simple refactoring and human-computer interaction",
          link:""
        },
        {
          title:"COMP 2002",
          description:"Learned problem solving techniques via fundamental DSA, basic design techniques and analysis",
          link:"https://www.mun.ca/computerscience/undergraduates/courses/comp-2002-data-structures-and-algorithms/"
        },
        {
          title:"COMP 2005",
          description:"Created software from requirements capturting all aspects of Soft Eng documentation such as Use Cases,domain model etc",
          link:"https://www.mun.ca/computerscience/undergraduates/courses/comp-2005-software-engineering/"
        },
        
        {
          title:"COMP 2007",
          description:"Learned concepts in DB systems and information management, and how to analyze situations where data needs to be stored",
          link:"https://www.mun.ca/computerscience/undergraduates/courses/comp-2007-introduction-to-information-management/"
        },
        {
          title:"COMP 3200",
          description:"Learned advanced algorithms and DSA intelligent behaviors, such as problem solving, reasoning and learning in soft sys and agents.",
          link:"https://www.mun.ca/computerscience/undergraduates/courses/comp-3200-algorithmic-techniques-for-artificial-i/"
        },
        {
          title:"COMP 3400",
          description:"Performed data pre-processing on data sets, evaluate effect of pre-processing techniques on machine learning methods",
          link:"https://www.mun.ca/computerscience/undergraduates/courses/comp-3400-data-preparation-techniques/"
        },
    
  ]
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
