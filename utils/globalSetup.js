import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config) {
    if (process.env.test_env) {
        dotenv.config({
            // path: `.env.${process.env.test_env}`,
            path: `.env.qa`,
            override: true,
        });
    }
}
export default globalSetup;
