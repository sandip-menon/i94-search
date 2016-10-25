import React, { PropTypes } from 'react';
import { Row, UnorderedList, MonthlyAmountsList, PortsList, PortsAmounts, PortsPercentages, PortsPercentChange } from './DetailItem';

const Detail = ({ result, visibleFields }) => {
  return (
    <table className="explorer__result-item__detail">
      <tbody>
        <Row label="I94 Country or Region">{result.i94_country_or_region}</Row>
        <Row label="NTTO Groups">
          <UnorderedList value={result.ntto_group} />
        </Row>
        <Row label="Country">{result.country}</Row>
        <Row label="World Regions">
          <UnorderedList value={result.world_region} />
        </Row>

        <Row label="Sum of Monthly Total Arrivals for Time Frame">{result.total_arrivals_sum.toLocaleString()}</Row>
        <Row label="Percent Change for Total Monthly Arrivals">
          <UnorderedList value={result.total_arrivals_percent_change} />
        </Row>
        <Row label="Total Arrivals by Month">
          <MonthlyAmountsList value={result.total_arrivals} />
        </Row>

        <Row label="Sum of Monthly Business Visa Arrivals for Time Frame">{result.business_visa_arrivals_sum.toLocaleString()}</Row>
        <Row label="Percent Change for Monthly Business Visa Arrivals">
          <UnorderedList value={result.business_visa_arrivals_percent_change} />
        </Row>
        <Row label="Business Visa Arrivals Percentage of Total Arrivals for Time Frame">{result.business_visa_arrivals_percent_of_total.toLocaleString()}</Row>
        <Row label="Business Visa Arrivals by Month">
          <MonthlyAmountsList value={result.business_visa_arrivals} />
        </Row>

        <Row label="Sum of Monthly Pleasure Visa Arrivals for Time Frame">{result.pleasure_visa_arrivals_sum.toLocaleString()}</Row>
        <Row label="Percent Change for Monthly Pleasure Arrivals">
          <UnorderedList value={result.pleasure_visa_arrivals_percent_change} />
        </Row>
        <Row label="Pleasure Visa Arrivals Percentage of Total Arrivals for Time Frame">{result.pleasure_visa_arrivals_percent_of_total.toLocaleString()}</Row>
        <Row label="Pleasure Visa Arrivals by Month">
          <MonthlyAmountsList value={result.pleasure_visa_arrivals} />
        </Row>

        <Row label="Sum of Monthly Student Visa Arrivals for Time Frame">{result.student_visa_arrivals_sum.toLocaleString()}</Row>
        <Row label="Percent Change for Monthly Student Arrivals">
          <UnorderedList value={result.student_visa_arrivals_percent_change} />
        </Row>
        <Row label="Student Visa Arrivals Percentage of Total Arrivals for Time Frame">{result.student_visa_arrivals_percent_of_total.toLocaleString()}</Row>
        <Row label="Student Visa Arrivals by Month">
          <MonthlyAmountsList value={result.student_visa_arrivals} />
        </Row>

        <Row label="Sum of Monthly Ports of Entry Arrivals for Time Frame">
          <PortsAmounts value={result.ports_arrivals_sums} />
        </Row>

        <Row label="Ports of Entry Arrivals Percentage of Total Arrivals for Time Frame">
          <PortsPercentages value={result.ports_arrivals_percent_of_total} />
        </Row>

        <Row label="Percent Change for Monthly Ports of Entry Arrivals">
          <PortsPercentChange value={result.ports_arrivals_percent_changes} />
        </Row>

        <Row label="Ports of Entry Arrivals by Month">
          <PortsList value={result.ports_arrivals} />
        </Row>

      </tbody>
    </table>
  )
};
Detail.propTypes = {
  result: PropTypes.object.isRequired,
  visibleFields: PropTypes.array.isRequired
};

export default Detail;
