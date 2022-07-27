import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col-reverse gap-16 items-center pb-10 md:flex-row">
      <div className="flex flex-col w-96 text-center md:text-left">
        <h1 className="text-3xl font-bold pb-10">Hi, I am Viktor</h1>
        <div>
          <p>I’m a frontend developer at Onlyoffice.</p>
          <p>Most of the time i’m develop frontend apps.</p>
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
