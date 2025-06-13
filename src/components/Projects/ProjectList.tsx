interface ProjectListProps {
  title: string;
  description: string;
  image: string;
  repository: string;
  viewMore: string;
}
import React from "react";

const ProjectList = React.memo(({ title, description, image, repository, viewMore }: ProjectListProps) => {
  return (
    <div className="flex h-[200px] w-full p-4 gap-4 rounded-xl transition-all duration-700 max-md:h-[150px] max-md:justify-around hover:bg-white/10">
      <div className="flex h-full w-1/3 rounded-xl justify-center items-center max-md:w-fit">
        <img
          src={image}
          alt={title}
          className="w-[150px] h-[150px] object-contain rounded-xl max-md:w-[100px] max-md:h-[100px]"
        />
      </div>
      <div className="flex flex-col h-full w-full justify-center items-start p-4 gap-4 rounded-xl max-md:gap-2">
        <h1 className="text-white text-2xl font-bold max-md:text-xl">
          {title}
        </h1>
        <p className="text-white/80 text-md font-light max-md:text-sm max-md:hidden">
          {description}
        </p>
        <a
          href={repository}
          className="text-white/80 text-md font-light max-md:text-sm hover:underline"
        >
          Repository: {title}
        </a>
        <a
          href={viewMore}
          className="text-white/80 text-md font-light text-nowrap hover:underline"
        >
          View More
        </a>
      </div>
      <div className="flex flex-col h-full w-fit justify-center items-end p-4 gap-4 rounded-xl max-md:hidden">
        <a
          href={viewMore}
          className="hidden text-white/80 text-md font-light text-nowrap hover:underline max-md:block"
        >
          View More
        </a>
      </div>
    </div>
  );
});
export default ProjectList;
