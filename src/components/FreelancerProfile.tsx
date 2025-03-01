import React from "react";
import type { Freelancer } from "../lib/yamlUtils";

interface FreelancerProfileProps {
  freelancer: Freelancer;
}

const FreelancerProfile: React.FC<FreelancerProfileProps> = ({
  freelancer,
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{freelancer.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <div className="space-y-1">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {freelancer.contact.name}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {freelancer.contact.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              {freelancer.contact.phone}
            </p>
          </div> */}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <div className="space-y-1">
            <p>{freelancer.address.postal_code}</p>
            <p>{freelancer.address.address1}</p>
            <p>{freelancer.address.address2}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/* <h3 className="text-lg font-semibold mb-2">Business Information</h3>
        <div className="space-y-1">
          <p>
            <span className="font-medium">Tax ID:</span> {freelancer.tax_id}
          </p>
        </div> */}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Banking Information</h3>
        <div className="space-y-1">
          <p>
            <span className="font-medium">Bank Name:</span>{" "}
            {freelancer.bank.name}
          </p>
          <p>
            <span className="font-medium">Branch Branch:</span>{" "}
            {freelancer.bank.branch}
          </p>
          <p>
            <span className="font-medium">Account Type:</span>{" "}
            {freelancer.bank.type}
          </p>
          <p>
            <span className="font-medium">Account Number:</span>{" "}
            {freelancer.bank.account}
          </p>
          <p>
            <span className="font-medium">Account Holder:</span>{" "}
            {freelancer.bank.account_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
