import React, { Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Experience = ({ experiences }) => {
  const experience = experiences.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        {moment(exp.from).format("YYYY/MM/DD")} -
        {exp.to === null ? " Now" : moment(exp.to).format("YYYY/MM/DD")}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="text-primary">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{experience}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default Experience;
