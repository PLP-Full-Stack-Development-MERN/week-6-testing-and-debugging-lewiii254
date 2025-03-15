const BugItem = ({ bug }) => {
    return (
      <li className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{bug.title}</h3>
        <p className="text-gray-600 mt-1">{bug.description}</p>
      </li>
    );
  };
  
  export default BugItem;
  