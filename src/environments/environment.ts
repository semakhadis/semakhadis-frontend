export const environment: IEnvironment = {
    production: false,
    api: 'http://localhost:3000',
    hmr: false
}

export interface IEnvironment {
    production: boolean
    api: string
    hmr: boolean
}
