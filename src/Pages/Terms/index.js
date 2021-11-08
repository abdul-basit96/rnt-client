import React, { useEffect } from "react";
import "./style.css";
import Header from "../../Containers/Header";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <div className="container-fluid terms-container mb-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mt-5">
            <h1 className="mb-4">Terms & Conditions</h1>
            <h5>
              Payment Terms, Operations & Maintenance, Delivery and Warranty
              Conditions
            </h5>
            <table className="mt-5 table table-bordered mb-5">
              <tbody>
                <tr>
                  <th scope="row">Price Validity</th>
                  <td colSpan="4">
                    Prices are valid for <strong>14 days</strong> only
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan="3">
                    Payment Terms
                  </th>
                  <th>Delivery Timeline</th>
                  <th colspan="3">Payment Terms</th>
                </tr>
                <tr>
                  <th scope="row" rowSpan="2">
                    Option
                  </th>
                  <td colspan="3">75% Advance Payment</td>
                </tr>
                <tr>
                  <td colspan="3">25% After the installation of project</td>
                </tr>
                <tr>
                  <th>Delivery Time</th>
                  <td colSpan="4">7 working days after advance payment</td>
                </tr>
                <tr>
                  <th>Relocation of System</th>
                  <td colSpan="4">
                    Client will be charged as per relocation scheme
                  </td>
                </tr>
                <tr>
                  <th>Operation & Maintenance</th>
                  <td colSpan="4">
                    2 years free of cost O&M after sales services
                  </td>
                </tr>
                <tr>
                  <th rowSpan="3">Product Warranty</th>
                  <td>PV SOLAR MODULES</td>
                  <td>Workmanship</td>
                  <td>10 Years</td>
                </tr>
                <tr>
                  <td>PV SOLAR MODULES</td>
                  <td>Performance</td>
                  <td>25 Years</td>
                </tr>
                <tr>
                  <td>GRID TIED PV INVERTER</td>
                  <td>GRID TIED PV INVERTER</td>
                  <td>5 Years</td>
                </tr>
                <tr>
                  <th rowSpan="2">Note</th>
                  <td colSpan="4">
                    Intentional Damage incurred to the PV Modules, Inverter and
                    any other type of electronic component will not be covered
                    under the warranty.
                  </td>
                </tr>
                <tr>
                  <td colSpan="4">
                    In case of any sort of damage to the components, the fault
                    must only be resolved at the company's lab. In case any
                    component is repaired at any place other than the company's
                    lab or if the system is repaired by any other personnel
                    except for company’s representative, the warranty claim will
                    be null and void.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Terms;
