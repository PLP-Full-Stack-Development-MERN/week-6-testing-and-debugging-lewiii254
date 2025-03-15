import BugItem from "./BugItem";

const BugList = ({ bugs }) => {
  return (
    <ul className="space-y-4">
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} />
      ))}
    </ul>
  );
};

export default BugList;
