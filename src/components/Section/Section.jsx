import { Title } from "./Section.styled";

function Section({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

export default Section;
