import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBugs } from "../../controllers/redux/bugReducer";
import BugCard from "../BugCard/BugCard";

function ViewBugs() {
  const dispatch = useDispatch();
  const { bug } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [dispatch]);
  return (
    <div className="page-container">
      {bug.map((bug, key) => (
        <BugCard key={key} props={bug} />
      ))}
    </div>
  );
}
export default ViewBugs;
