import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "What is this?",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The Brawl Star API is a RESTful API based on the supercell video game
        Brawl Stars. You will access data about characters, images.The Brawl
        Star API is a RESTful API based on the supercell video game Brawl Stars.
      </>
    ),
  },
  {
    title: "How can I contribute to the project?",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        You can help us to keep the project alive and you can also contribute on
        GitHub.
      </>
    ),
  },
  {
    title: "Copyright?",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The Api brawl Stars is created by Johan Sebastian Castro. The data and
        images are used without the right to property and belong to their
        respective owners. This API is open source and uses an MIT license.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
