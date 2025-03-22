import { html } from "lit";
import { TableHeader } from "../typography/TableHeader";
import { TableData } from "../typography/TableData";
import { NavLink, NavLinkProps } from "../typography/NavLink";

import "./table.css";

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  state: string;
}

export interface TableProps {
  customers: Customer[];
  navLinks: NavLinkProps[];
}

export const Table = ({ customers, navLinks }: TableProps) => {
  return html`
    <div class="table-container">
      <div class="table-wrapper">
        <div class="table-inner">
          <div class="table">
            <table class="table-element">
              <thead class="table-header">
                <tr>
                  <th>
                    ${TableHeader({
                      text: "Name",
                      align: "left",
                      size: "medium",
                      weight: "semibold",
                    })}
                  </th>
                  <th>
                    ${TableHeader({
                      text: "Email",
                      align: "left",
                      size: "medium",
                      weight: "semibold",
                    })}
                  </th>
                  <th>
                    ${TableHeader({
                      text: "Country",
                      align: "left",
                      size: "medium",
                      weight: "semibold",
                    })}
                  </th>
                  <th>
                    ${TableHeader({
                      text: "State",
                      align: "left",
                      size: "medium",
                      weight: "semibold",
                    })}
                  </th>
                  <th class="table-header-cell">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table-body">
                ${customers.map(
                  (customer) => html`
                    <tr class="table-row">
                      <td>
                        ${TableData({
                          text: `${customer.firstName} ${customer.lastName}`,
                          align: "left",
                          size: "medium",
                          weight: "normal",
                        })}
                      </td>
                      <td class="center">
                        ${TableData({
                          text: customer.email,
                          align: "left",
                          size: "medium",
                          weight: "normal",
                        })}
                      </td>
                      <td class="center">
                        ${TableData({
                          text: customer.country || "-",
                          align: "left",
                          size: "medium",
                          weight: "normal",
                        })}
                      </td>
                      <td class="center">
                        ${TableData({
                          text: customer.state || "-",
                          align: "left",
                          size: "medium",
                          weight: "normal",
                        })}
                      </td>
                      <td class="table-cell-actions center">
                        ${navLinks.map((navLinkProps) => NavLink(navLinkProps))}
                      </td>
                    </tr>
                  `
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
};
