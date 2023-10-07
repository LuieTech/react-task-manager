
const baseApiUrl = import.meta.env.REACT_APP_BASE_API_URL || 'http://localhost:3000/v1';


const list = async () => {
  const response = await fetch(`${baseApiUrl}/task-groups`);
  const groups = await response.json();
  return groups;
}

export default {
  list
}