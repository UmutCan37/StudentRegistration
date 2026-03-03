import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44357/',
  redirectUri: baseUrl,
  clientId: 'StudentRegistration_App',
  responseType: 'code',
  scope: 'offline_access StudentRegistration',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'StudentRegistration',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44357',
      rootNamespace: 'StudentRegistration',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
