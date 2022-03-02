import billmanagement from "../apis/billmanagement";

const retrieveBillCredentialById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/credential/${id}`);
};

const retrieveBillById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/bill/${id}`);
};

const BillService = {
  retrieveBillCredentialById,
  retrieveBillById,
};

export default BillService;
