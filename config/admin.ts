export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85KMxL0F7Mkxc70n+grA4x1AjrVQy6MgbAi/LEV0e98WiZaPxzv5OPpcGbHMGQuHqY191vNYGRulv+Etr2JJ+A=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'mo1L0Cm7+XMDguXtBI9O8w=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'fCD75FxZpuDFtmeAMpAcvA=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});