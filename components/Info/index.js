import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col-reverse gap-16 items-center pb-10 md:flex-row">
      <div className="flex flex-col w-max text-center md:text-left">
        <h1 className="text-3xl font-bold pb-10">Hi, I am Viktor</h1>
        <div>
          <p>
            I’m a frontend developer at{" "}
            <a
              className="text-indigo-600"
              href="https://onlyoffice.com"
              target="_blank"
              rel="noreferrer"
            >
              Onlyoffice
            </a>
            .
          </p>
          <p>Most of the time i develop frontend apps.</p>
          <div className="flex flex-col gap-1 md:inline-flex">
            <p>My skills:</p>
            <p className="italic">
              JS, TS, React, Next.js, Redux, MobX and other...
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-64">
        <Image
          src="/photo.png"
          alt="photo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Info;
