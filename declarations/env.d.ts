declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV: 'development' | 'production';
		TWILIO_AUTH_TOKEN: string;
		TWILIO_ACCOUNT_SID: string;
	}
}
