const Command = (props) => {
  return (
    <div className="flex text-lg md:text-2xl gap-0.5">
      <div className="text-cyan-400">portfolio@karan:-$ </div>
      {props.command}
    </div>
  );
};

export default Command;
