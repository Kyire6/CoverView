import { createApi } from 'unsplash-js';

const key= "UVntjOjTUUQ05FjfvtXu6PsMBxBxct7RZpK7kKF9UjM"
const unsplash = createApi({
    accessKey: key
});

export default unsplash;
