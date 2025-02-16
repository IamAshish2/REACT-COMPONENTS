import { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function scrollToParticularSection() {
    // not really sommoth lol
    // ref.current.scrollIntoView({ behaviour: "smooth" });

    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({ top: pos, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <button
        onClick={() => {
          scrollToParticularSection();
        }}
        className="border mb-2"
      >
        Scroll To Section
      </button>
      {data &&
        data.map((data, index) => (
          <div ref={index === 2 ? ref : null} style={data.style}>
            {data.label}
          </div>
        ))}
    </div>
  );
};

export default ScrollToSection;
