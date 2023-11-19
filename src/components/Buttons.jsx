import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat,id) => {
        return (
          <button onclick={() =>
          filterbyType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })};
      <button> onclick={()=> {
      setSat(satData)
      }};
      </button>
      <button>Placeholder Button</button>
      <button>All Orbits</button>
    </div>
  );
};

export default Buttons;