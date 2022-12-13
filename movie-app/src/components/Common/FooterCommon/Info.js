// import { useRef } from "react";
// import { useInView } from "framer-motion";
// // import "../css/InfoStyles.scss";

// function Info() {
//   return (
//     <>
//       <Section>Animate</Section>
//       <Section>when</Section>
//       <Section>in</Section>
//       <Section>view!</Section>
//     </>
//   );
// }

// function Section({ info }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section ref={ref}>
//       <span>
//         style=
//         {{
//           transform: isInView ? "none" : "translateX(-200px)",
//           opacity: isInView ? 1 : 0,
//           transform: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
//         }}
//         {info}
//       </span>
//     </section>
//   );
// }

// export default Info;
