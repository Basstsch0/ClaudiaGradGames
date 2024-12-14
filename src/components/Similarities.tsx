import React from "react";

interface SimilaritiesProps {
  visible: boolean;
}

interface TableRow {
  number: number;
  english: string;
  italian: string;
  hint: string;
}

const Similarities: React.FC<SimilaritiesProps> = ({ visible }) => {
  const tableData: TableRow[] = [
    {
      number: 0,
      english: "I am Italian",
      italian: "Sono italiano",
      hint: "country",
    },
    {
      number: 1,
      english: "I have a pet",
      italian: "Ho un animale domestico",
      hint: "animal",
    },
    {
      number: 2,
      english: "I have traveled outside of Europe",
      italian: "Ho viaggiato fuori dall'Europa",
      hint: "travel",
    },
    {
      number: 3,
      english: "I speak more than two languages",
      italian: "Parlo più di due lingue",
      hint: "language",
    },
    {
      number: 4,
      english: "I have a driver's license",
      italian: "Ho la patente di guida",
      hint: "Vehicle",
    },
    {
      number: 5,
      english: "I play a musical instrument",
      italian: "Suono uno strumento musicale",
      hint: "Music",
    },
    {
      number: 6,
      english: "I have been to a concert in the last year",
      italian: "Sono stato a un concerto nell'ultimo anno",
      hint: "Music",
    },
    {
      number: 7,
      english: "I like to cook",
      italian: "Mi piace cucinare",
      hint: "food",
    },
    {
      number: 8,
      english: "I have siblings",
      italian: "Ho fratelli o sorelle",
      hint: "family",
    },
    {
      number: 9,
      english: "I have lived in more than one country",
      italian: "Ho vissuto in più di un paese",
      hint: "international",
    },
    {
      number: 10,
      english: "I watch movies very often",
      italian: "Guardo i film molto spesso",
      hint: "Acting",
    },
  ];

  return (
    <div>
      {!visible && <p>Nothing to see yet...</p>}
      <div style={{ display: visible ? "block" : "none" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                Number
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                English
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                Italian
              </th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                Hint
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.number}>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  {row.number}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  {row.english}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  {row.italian}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                  {row.hint}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Similarities;
