import type Weather from "../../models/weather";
import { getData } from "../../utils/localStorage";

function History() {
  const history = getData() || [];

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>country</th>
            <th>city</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((e: Weather, index: number) => {
            return (
              <tr key={index}>
                <td>{e.location.country}</td>
                <td>{e.location.name}</td>
                <td>{e.searchData}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default History;
