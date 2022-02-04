import billmanagement from "../apis/billmanagement";

const retrieveBillCredentialById = (id) => {
  return billmanagement.get(`/billmgnt/api/v1/credential/${id}`);
};

const BillService = {
  retrieveBillCredentialById,
};

export default BillService;
