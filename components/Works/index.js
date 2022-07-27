import Work from "../Work";

const Works = () => {
  return (
    <div>
      <p className="text-2xl pb-10">Featured works</p>
      <Work
        img="/alias.png"
        title="Alias"
        date="2021"
        tag="React, Tailwind"
        description="Web-version Alias game"
      />
    </div>
  );
};

export default Works;
