import React from "react";
import Card from "./Card";

function Cards() {
  const cardData = [
    {
      title: "SHARE YOUR ART",
      description: "Find My Collections & find more about it",
      cta: "Start using Becca",
      img: "https://images.unsplash.com/photo-1733970730195-9ac7cb726eee?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    },
    {
      title: "EXPLORE ART",
      description: "Discover amazing artworks",
      cta: "Start Exploring",
      img: "https://images.unsplash.com/photo-1733696372526-5db7ea60c4e6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "CREATE",
      description: "Start your creative journey",
      cta: "Get Started",
      img: "https://images.unsplash.com/photo-1565201562209-f8c3c316933a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    },
  ];

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto flex gap-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            // width="w-[30%]"
            title={card.title}
            description={card.description}
            cta={card.cta}
            img={card.img}
            style={{ filter: "brightness(0.5)" }}
          />
        ))}
      </div>
    </div>
  );
}
export default Cards;
