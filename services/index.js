import axios from 'axios';

export const getAllIssuesList = async(pageNo, pageSize) => {
    const response = await axios.get(`https://api.github.com/repos/facebook/react/issues?page=${pageNo}&per_page=${pageSize}`)
    return response.data;
}