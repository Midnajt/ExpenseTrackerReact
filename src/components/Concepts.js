import Concept from "./Concept.js";

function Concepts(props) {
  const content = props.concepts;

  return (
    <ul id={props.id}>
      {content.map((content) => {
        return <Concept content={content} key={content.title} />;
      })}
    </ul>
  );
}

export default Concepts;
