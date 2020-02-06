export const incAC = () => ({
    type: 'INC'
});
export const decAC = () => ({
    type: 'DEC'
});
export const rndAC = (payload) => ({
    type: 'RND',
    payload: payload
});