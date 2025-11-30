import React from "react";
import Section1 from "./components/section1/Section1";
// import './App.css'

const App = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1762341107847-d4d75c6da8c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Underpresered",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1666299357855-36b69838bd83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Working",
    },
    {
      img: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661628938851-d912106908f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Sleepy",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661596852991-ca83ea8c253b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, labore corporis saepe iusto voluptatibus voluptate!",
      tag: "Exited",
    },
  ];
  return <Section1 cards={cards} />;
};

export default App;
