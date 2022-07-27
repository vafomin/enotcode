import Work from "../Work";

const Works = () => {
  return (
    <div>
      <p className="text-2xl pb-10">Featured works</p>
      <Work
        img="/alias.png"
        url="https://aliasgame.site"
        title="Alias"
        date="2021"
        tag="React, TS, Tailwind"
        description="Web-version Alias game"
      />
      <Work
        img="/lnkr.png"
        url="https://lnkr.space"
        title="Lnkr"
        date="2020"
        tag="React, TS, Chakra UI, Koa.js"
        description="Link shortening with QR-code"
      />
      <Work
        img="/todo.png"
        url="https://todo.enotcode.com"
        title="ToDo"
        date="2020"
        tag="Vue, Vuetify"
        description="Simple ToDo list with badges"
      />
    </div>
  );
};

export default Works;
