import Image from "next/image";

const Work = (props) => {
  const { img, url, title, date, tag, description } = props;
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative h-44 w-64">
          <Image
            src={img}
            alt="screen"
            layout="fill"
            objectFit="contain"
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="text-xl font-bold text-indigo-600 underline"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
          <div className="flex flex-row gap-4 items-center">
            <div className="chip">
              <p className="text-bold uppercase">{date}</p>
            </div>
            <p className="text-gray-400">{tag}</p>
          </div>
          <p className="max-w-sm md:max-w-md lg:max-w-lg">{description}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Work;
