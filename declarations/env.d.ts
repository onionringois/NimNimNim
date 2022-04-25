declare namespace NodeJS {
	export interface ProcessEnv {
		TWILIO_AUTH_TOKEN: string;
		TWILIO_ACCOUNT_SID: string;
		DB_HOST: string;
		DB_USERNAME: string;
		DB_NAME: string;
		DB_PASSWORD: string;
	}
}
