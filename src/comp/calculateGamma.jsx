import React from 'react';
import data from './Wine-Data.json'; 


class CalculateGamma extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedData: []
    };
  }

  componentDidMount() {
    const updatedData = this.calculateGammaForData(data);
    this.setState({ updatedData });
  }

  calculateGammaForData = (data) => {
    return data.map(item => {
      const { Ash, Hue, Magnesium } = item;
      const Gamma = (Ash * Hue) / Magnesium;
      return { ...item, Gamma };
    });
  }

  render() {
    const { updatedData } = this.state;
    return (
      <div>
        <h2>Updated Data with Gamma Property</h2>
        <table>
          <thead>
            <tr>
              <th>Alcohol</th>
              <th>Gamma</th>
            </tr>
          </thead>
          <tbody>
            {updatedData.map((item, index) => (
              <tr key={index}>
                <td>{item.Alcohol}</td>
                
                <td>{item.Gamma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CalculateGamma;
