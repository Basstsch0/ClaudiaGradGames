import React from "react";

const DisallowedWords: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>English</th>
          <th>Italian</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Graduation</td>
          <td>Laurea</td>
        </tr>
        <tr>
          <td>2</td>
          <td>University </td>
          <td>Università</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Professor </td>
          <td>Professore/Professoressa</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Thesis </td>
          <td>Tesi</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisallowedWords;
