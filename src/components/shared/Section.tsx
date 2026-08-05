import { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-32 ${className}`}
    >
      <Reveal>
        <Container>
          {children}
        </Container>
      </Reveal>
    </section>
  );
}