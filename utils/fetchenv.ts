import dotenv from 'dotenv';

dotenv.config();

function getRequiredEnv(key: string): string{
	const val = process.env[key];
	if (val == undefined || val == null || !val) {
		throw new Error(`Configaration value is missing for key: ${key}`);
	}
	return val;
}

export const BASE_URL = getRequiredEnv("BASE_URL");