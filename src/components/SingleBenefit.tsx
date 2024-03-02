const SingleBenefit = ({ name, Icon, description }) => {
  return (
    <article className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">

      {/* ICON */}
      <div className="md:flex-shrink-0 flex justify-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
          {<Icon className="w-1/3 h-1/3" />}
        </div>
      </div>

      {/* INFO */}
      <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-gray-900">{name}</h3>
        <p className="mt-3 text-sm text-muted-foreground text-balance">
          {description}
        </p>
      </div>
      
    </article>
  );
};
export default SingleBenefit;
