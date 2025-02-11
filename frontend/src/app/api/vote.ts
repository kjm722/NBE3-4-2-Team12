// api/vote.ts
import {api} from "./axiosInstance";

export const createVote = async (groupId: number, voteData: {
    location: string;
    address: string;
    latitude: number;
    longitude: number;
}) => {
    try {
        const response = await api.post(`/votes/groups/${groupId}/votes`, voteData);
        return response.data;
    } catch (error) {
        console.error("투표 생성 중 오류 발생:", error);
        throw error;
    }
};

export const getVotes = async (groupId: number) => {
    try {
        const response = await api.get(`votes/groups/${groupId}/votes`);
        if (response.status !== 200) {
            console.error("API 호출 실패:", response.data);
            return [];
        }
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};