import axios from "axios";

const API_BASE_URL = "https://future-fund-backend-production.up.railway.app/api/v1"; // Replace with actual backend URL

e
export const agreeToPaymentTerms = async (userId: string, contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/agree-to-terms`, { userId, contributionId });
};

export const assignContributionTurns = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/assign-turns`, { contributionId });
};

export const startContributionCycle = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/start-cycle`, { contributionId });
};

export const holdFundsInEscrow = async (contributionId: string, amount: number) => {
  return await axios.post(`${API_BASE_URL}/contribution/hold-funds`, { contributionId, amount });
};

export const enforceTrustBuildingPeriod = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/enforce-trust`, { contributionId });
};

export const processPayouts = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/process-payouts`, { contributionId });
};

export const splitPayoutForSecurity = async (contributionId: string, payoutAmount: number) => {
  return await axios.post(`${API_BASE_URL}/contribution/split-payout`, { contributionId, payoutAmount });
};

export const penalizeLatePayers = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/penalize-late`, { contributionId });
};

export const reassignForfeitedSpots = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/reassign-spots`, { contributionId });
};

export const finalizeContributionCycle = async (contributionId: string) => {
  return await axios.post(`${API_BASE_URL}/contribution/finalize-cycle`, { contributionId });
};
