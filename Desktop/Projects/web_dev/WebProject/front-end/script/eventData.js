
var events = [
    {
      id: 1,
      eventPhoto : "../assets/Reality.png",
      title: "Reality and Science Fiction​ in Education",
      description: "The 2024 Learning and Technology International Conference, themed around the intersection of science fiction and education, invites researchers, educators, and industry professionals to submit original work exploring the influence of sci-fi narratives on educational concepts. From Star Wars to Ender's Game, these stories have captivated audiences by depicting futuristic scenarios involving advanced technology, artificial intelligence, space exploration, and virtual reality education. The conference aims to uncover the dynamic relationship between science fiction and the future of education and technology, encouraging participants to contribute insights and perspectives to this thought-provoking event.",
      date: "<strong>Date:</strong>15th of January​ 2024 <br>3th of Rajab, 1445 H​​",
      time: "<strong>Event Time:</strong> TBA",
      type: "<strong>Event Type:</strong> Confrence",
      category: "<strong>Event Category:</strong> Technical",
      venue: "<strong>Event Venue:</strong> Effat University, Jeddah, KSA",
      fee: "<strong>Event Fees:</strong> Free",

    },
    {
        id: 2,
        eventPhoto : "../assets/leap.png",
        title: "Leap",
        description: "Saudi is open: Join us in Riyadh. Do you want to meet with like-minded tech professionals from around the world? Then LEAP is for you. With content across four days, you can keep up with what's relevant and what's coming in the world of technology.",
        date: "<strong>Date:</strong> 4-7 march 2024",
        time: "<strong>Event Time:</strong> TBA",
        type: "<strong>Event Type:</strong> Exhibition",
        category: "<strong>Event Category:</strong> Technical",
        venue: "<strong>Event Venue:</strong> Riyadh Exhibition and Convention Center, Malham, Saudi Arabia",
        fee: "<strong>Event Fees:</strong> Free",
    
    },
    {
      id: 3,
        eventPhoto : "../assets/uni.png",
        title: "Jeddah University Graduation Projects Exhibition",
        description: "The Exhibition for Graduation Projects at Jeddah University, under the auspices of the University's Vice President for Educational, Academic Affairs, and Development, Dr. Manaji Al-Kanani, has a structured timetable that commences with registration and a tour of the exhibition. The agenda encompasses the national anthem, Quranic recitation, a welcoming address, and an introduction to the startup companies' studio. Furthermore, there will be a sharing of a successful experience by alumni of the college.",
        date: "<strong>Date:</strong>7 December 2024",
        time: "<strong>Event Time:</strong> 11 am - 1pm",
        type: "<strong>Event Type:</strong>Graduation Projects Exhibition",
        category: "<strong>Event Category:</strong> Academic Showcase",
        venue: "<strong>Event Venue:</strong>Jeddah University Conference Center",
        fee: "<strong>Event Fees:</strong> Free",

    },

    {
        id: 4,
        eventPhoto : "../assets/Mechanical.png",
        title: "SAUDI Mechanical Engineering Technology Conference and Exhibition 2024",
        description: "The Saudi Mechanical Engineering Technology Conference and Exhibition (SAUDI MET) is an in-Kingdom technical event with international presence, organized to share best practices, innovation, and state of the art technologies in mechanical engineering fields. SAUDI MET Attracts the Industry leaders, researchers, experts, decision makers, professionals, and academia to exchange technical subjects related to a range of industries including energy production, energy sources, advanced manufacturing, and engineering sciences.",
        date: "<strong>Date:</strong>28 - 30 April 2024",
        time: "<strong>Event Time:</strong> TBA",
        type: "<strong>Event Type:</strong>Conference and Exhibition",
        category: "<strong>Event Category:</strong> Technical",
        venue: "<strong>Event Venue:</strong> Grand Hyatt Al Khobar Hotel located in Al Khobar, Saudi Arabia",
        fee: "<strong>Event Fees:</strong> Free",
  
    },
    {
        id: 5,
        eventPhoto : "../assets/iot.png",
        title: "Saudi International Exhibition and Conference for Internet of Things (IoT)",
        description: "Saudi IoT is the portal to unprecedented opportunities in the technology sector, which is on a path of exponential growth in KSA. Saudi IoT 2024 will showcase new and innovative concepts, offering opportunities for tech entrepreneurs and businesspeople to build partnerships with international firms. Global businesses will also benefit by being able to build a local presence through Saudi partners. This event is the only bridge of its kind between regional and international technology players.",
        date: "<strong>Date:</strong>TBA",
        time: "<strong>Event Time:</strong> TBA",
        type: "<strong>Event Type:</strong> Conference and Exhibition.",
        category: "<strong>Event Category:</strong> Technical",
        venue: "<strong>Event Venue:</strong> Riyadh Int'l Convention & Exhibition Center, Saudi Arabia",
        fee: "<strong>Event Fees:</strong> Free",
  
    },
    {
        id: 6,
        eventPhoto : "../assets/AI.jpg",
        title: "IoT, AI, Blockchain, and Big Data",
        description: "Blockchain IoT Solutions Congress will take place virtually via our official AI-powered online platform. This platform will host the virtual sessions and networking during the event. Register your free ticket for the chance to connect and network with industry experts,"
         +"discuss current and future strategies, and supercharge your event experience!",
        date: "<strong>Date:</strong>Apr 02 - 15 2024",
        time: "<strong>Event Time:</strong> TBA",
        type: "<strong>Event Type:</strong> Exhibition",
        category: "<strong>Event Category:</strong> Technical",
        venue: "<strong>Event Venue:</strong> Jeddah, Saudi Arabia",
        fee: "<strong>Event Fees:</strong> Free",
  
    },
    
  ];

  function showEventDetails() {
 
    var urlParams = new URLSearchParams(window.location.search);
    var eventId = parseInt(urlParams.get("eventId"));

    var event = events.find(function (ev) {
      return ev.id === eventId;
    });

    if (event) {
      var detailsContainer = document.getElementById("event-details");

      var event_Photo = document.getElementById("eventPhoto");
      var titleElement = document.getElementById("event-title");
      var descriptionElement = document.getElementById("event-description");
      var dateofEvent = document.getElementById("date");
      var timeofEvent = document.getElementById("time");
      var typeofEvent = document.getElementById("type");
      var categoryofEvent = document.getElementById("category");
      var venueofEvent = document.getElementById("venue");
      var feesofEvent = document.getElementById("fee");
      var card_section = document.getElementById("card-section");
      var scroll = document.getElementById("scroll");
      
      titleElement.innerHTML = event.title;
      descriptionElement.innerHTML = event.description;
      dateofEvent.innerHTML = event.date;
      timeofEvent.innerHTML = event.time;
      typeofEvent.innerHTML = event.type;
      categoryofEvent.innerHTML = event.category;
      venueofEvent.innerHTML = event.venue;
      feesofEvent.innerHTML = event.fee;
      event_Photo.src = event.eventPhoto; 

     if (eventId === 1 ||eventId === 3 || eventId === 4 || eventId === 5 || eventId === 6) {
        card_section.remove(); 

      }
    
    } else {
      var errorElement = document.getElementById("error-message");
      errorElement.innerHTML = "Invalid event ID.";
    }

   
  }




  function register(){
 
    alert("You have successfully registered for the event!\n"
    + "You will receive an email with the event details shortly.");
}

