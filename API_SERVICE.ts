import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_BASE_URL =
  "https://future-fund-backend-production.up.railway.app/api/v1"; // Replace with actual backend URL

const userId = AsyncStorage.getItem("UserId");
const contributionId = AsyncStorage.getItem("contributionId");
const Token = AsyncStorage.getItem('userToken')

export const agreeToPaymentTerms = async () => {
  return await axios.post(
    `${API_BASE_URL}/contribution/agree`,
    { userId, contributionId },
    {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    }
  );
};

export const assignContributionTurns = async () => {
  return await axios.post(`${API_BASE_URL}/contribution/assign`, {
    contributionId,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};

export const startContributionCycle = async () => {
  return await axios.post(
    `${API_BASE_URL}/contribution/${contributionId}/start`,
    { contributionId },
    {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    }
  );
};

export const holdFundsInEscrow = async (amount: number) => {
  return await axios.post(`${API_BASE_URL}/contribution/hold-funds`, {
    contributionId,
    amount,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};

export const enforceTrustBuildingPeriod = async () => {
  return await axios.post(`${API_BASE_URL}/contribution/enforce-trust`, {
    contributionId,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};

export const processPayouts = async () => {
  return await axios.post(`${API_BASE_URL}/contribution/payouts`, {
    contributionId,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};

// export const splitPayoutForSecurity = async (contributionId: string, payoutAmount: number) => {
//   return await axios.post(`${API_BASE_URL}/contribution/split-payout`, { contributionId, payoutAmount });
// };

export const penalizeLatePayers = async () => {
  return await axios.post(
    `${API_BASE_URL}/contribution/${contributionId}/${userId}penalize`,
    { contributionId },
    {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    }
  );
};

export const reassignForfeitedSpots = async () => {
  return await axios.post(`${API_BASE_URL}/contribution/reassign`, {
    contributionId,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};

export const finalizeContributionCycle = async () => {
  return await axios.post(`${API_BASE_URL}/contribution/finalize`, {
    contributionId,
  }, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  });
};
