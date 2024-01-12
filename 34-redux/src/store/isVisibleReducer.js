export const change = () => ({ type: 'change' });

const setStatus = {
  status: true,
};

const controlStatus = (state = setStatus, action) => {
  return {
    status: !state.status,
  };
};

export default controlStatus;
