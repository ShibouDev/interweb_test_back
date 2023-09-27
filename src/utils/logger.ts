const config = {
	status:
		process.env.NODE_ENV === 'production' ? ['info', 'warn', 'error'] : ['log', 'info', 'warn', 'error', 'debug'],
};
export class Logger {
	constructor(private readonly name?: string) {}
	generate(type: string) {
		return `${new Date().toISOString()} ${this.name || ''}-${type.toUpperCase()}- `;
	}
	log(...msg: any) {
		if (config.status.includes('log')) console.log(this.generate('log'), ...msg);
	}
	info(...msg: any) {
		if (config.status.includes('info')) console.log(this.generate('info'), ...msg);
	}
	warn(...msg: any) {
		if (config.status.includes('warn')) console.warn(this.generate('warn'), ...msg);
	}
	error(...msg: any) {
		if (config.status.includes('error')) console.error(this.generate('error'), ...msg);
	}
	debug(...msg: any) {
		if (config.status.includes('debug')) console.debug(this.generate('debug'), ...msg);
	}
}
