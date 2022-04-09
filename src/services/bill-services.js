import billmanagement from "../apis/billmanagement";

const retrieveBillCredentialById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/credential/${id}`);
};

const retrieveBillById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/bill/${id}`);
};

const createBill = (bill) => {
  return billmanagement.post('/billmgnt/api/v1/create', bill);
};

const BillService = {
  retrieveBillCredentialById,
  retrieveBillById,
  createBill,
};

export default BillService;
